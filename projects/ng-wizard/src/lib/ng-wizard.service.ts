import { ComponentRef, Injectable } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import * as utils from './ng-wizard.utils';
import { NoChildRoutes, NoWizardRoute, NoWsInterface } from './ng-wizard-error/ng-wizard.error';
import { NgWizardStepData } from './ng-wizard-step/ng-wizard-step-data.interface';
import { NgWizardStep } from './ng-wizard-step/ng-wizard-step.interface';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class NgWizardService {
  private wizardRoute: Route;
  private stepData: NgWizardStepData[] = [];
  private currentStepData: NgWizardStepData;
  private currentComponent: NgWizardStep;

  private stepDataChanges = new BehaviorSubject<NgWizardStepData[]>([]);

  constructor(private router: Router, private route: ActivatedRoute) {}

  /**
   * Initializes the wizard by parsing the wizard's child routes found in Angular's router config
   * into a list of NgWizardStepData.
   * @param wizardComponentName The name of the wizard component
   */
  public loadWizardRoutes(wizardComponentName: string) {
    this.wizardRoute = this.getWizardRoute(wizardComponentName);
    if (!this.wizardRoute) {
      throw new NoWizardRoute(wizardComponentName);
    }
    this.loadChildRoutes(this.wizardRoute);
  }

  /**
   * Checks and stores the currently displayed component.
   * @param componentRef A reference to the currently displayed component
   */
  public registerActiveComponent(componentRef: ComponentRef<any>) {
    if (!utils.componentImportsWizardStepInterface(componentRef)) {
      throw new NoWsInterface(componentRef.constructor.name);
    }

    // Cast to unknown before casting to NgWizardStep to let typescript know we checked and approve
    // this conversion.
    this.currentComponent = (componentRef as unknown) as NgWizardStep;
    this.currentStepData = utils.getStepDataForComponentName(
      this.stepData,
      componentRef.constructor.name,
    );
    this.currentStepData.componentRef = componentRef;
    this.resetCurrentStep();
    this.currentStepData.isCurrent = true;
    this.onStepDataChange();
  }

  /**
   * Calls the current component's wsOnPrevious() or wsOnNext()) methods and navigates to the given
   * step if the component does not abort.
   * @param stepData The NgWizardStepData of the the step to navigate to
   */
  public navigateToStep(stepData: NgWizardStepData) {
    let goAhead;
    if (this.currentStepData.order > stepData.order) {
      goAhead = this.currentComponent.wsOnPrevious();
    } else {
      goAhead = this.currentComponent.wsOnNext();
    }
    if (goAhead === false) {
      return;
    }

    if (this.wizardRoute.path) {
      return this.router.navigate([stepData.path], { relativeTo: this.route });
    }
    return this.router.navigate([stepData.path]);
  }

  /**
   * Utility method to navigate to the next step.
   */
  public navigateToNextStep() {
    const nextStepData = utils.getStepDataForPath(this.stepData, this.currentStepData.nextStep);
    return this.navigateToStep(nextStepData);
  }

  /**
   * Utility method to navigate to the previous step.
   */
  public navigateToPreviousStep() {
    const previousStepData = utils.getStepDataForPath(
      this.stepData,
      this.currentStepData.previousStep,
    );

    return this.navigateToStep(previousStepData);
  }

  /**
   * Returns the step data changes as an observable.
   */
  public getStepDataChangesAsObservable(): Observable<NgWizardStepData[]> {
    return this.stepDataChanges.asObservable();
  }

  /**
   * Returns the current step data as an observable.
   */
  // TODO: Write a unit test for this method
  public getCurrentStepDataAsObservable(): Observable<NgWizardStepData> {
    return this.getStepDataChangesAsObservable().pipe(
      map((stepDatas) => stepDatas.find((stepData) => stepData.isCurrent)),
    );
  }

  /**
   * Returns the Angular Route for the wizard component found in Angular's router config.
   * @param wizardComponentName The name of the wizard component
   */
  private getWizardRoute(wizardComponentName: string): Route {
    return this.router.config.find(
      (route) => route.component && route.component.name === wizardComponentName,
    );
  }

  /**
   * Parses the child routes of the wizard component route and stores them as a list of
   * NgWizardStepData.
   * @param wizardRoute The Angular Route for the wizard component
   */
  private loadChildRoutes(wizardRoute: Route) {
    if (!wizardRoute.children) {
      throw new NoChildRoutes(wizardRoute.component.name, wizardRoute.path);
    }

    const childRoutes = wizardRoute.children.filter((route) => route.component);

    for (let i = 0; i < childRoutes.length; i++) {
      this.registerStep(i, childRoutes[i], childRoutes[i - 1], childRoutes[i + 1]);
    }
  }

  /**
   * Stores a child route as an NgWizardStepData.
   * @param index The index in the list of child routes
   * @param stepRoute The child route
   * @param previousStep The previous child route (undefined if first child route)
   * @param nextStep The next child route (undefined if last child route)
   */
  private registerStep(index: number, stepRoute: Route, previousStep: Route, nextStep: Route) {
    this.stepData.push({
      order: index + 1,
      componentName: stepRoute.component.name,
      title: utils.getStepTitleFromRoute(stepRoute),
      path: stepRoute.path,
      previousStep: previousStep ? previousStep.path : undefined,
      nextStep: nextStep ? nextStep.path : undefined,
      isCurrent: false,
    });
    this.onStepDataChange();
  }

  /**
   * Emits a step data change event to the subscribers when the step data changes.
   */
  private onStepDataChange() {
    this.stepDataChanges.next(this.stepData);
  }

  /**
   * Sets the isCurrent attribute of all step data to false.
   */
  private resetCurrentStep() {
    this.stepData.map((stepData) => {
      stepData.isCurrent = false;
      return stepData;
    });
  }
}
