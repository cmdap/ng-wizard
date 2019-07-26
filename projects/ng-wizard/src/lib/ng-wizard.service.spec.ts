import { async, TestBed } from '@angular/core/testing';

import { NgWizardService } from './ng-wizard.service';
import { RouterTestingModule } from '@angular/router/testing';
import { NgWizardComponent } from './ng-wizard.component';
import { NgWizardModule } from './ng-wizard.module';
import { Component, ComponentRef } from '@angular/core';
import { Route, Router } from '@angular/router';
import { NgWizardStepData } from './ng-wizard-step/ng-wizard-step-data.interface';
import { NgWizardStep } from './ng-wizard-step/ng-wizard-step';
import { NoChildRoutes, NoWizardRoute, NoWsInterface } from './ng-wizard-error/ng-wizard.error';

@Component({
  template: 'Step 1 works!',
})
class Step1Component extends NgWizardStep { }

@Component({
  template: 'Step 2 works!',
})
class Step2Component extends NgWizardStep { }

@Component({
  template: 'Step 3 does not work!',
})
class Step3Component {}

@Component({
  template: 'Some other page',
})
class OtherComponent {}

describe('NgWizardService', () => {
  let service: NgWizardService;

  const ngWizardComponentName = 'NgWizardComponent';

  const wizardRoute: Route = {
    path: '',
    component: NgWizardComponent,
    children: [
      { path: 'step-1', component: Step1Component },
      { path: 'step-2', component: Step2Component },
      { path: 'step-3', component: Step3Component },
      { path: '**', redirectTo: 'step-1' },
    ],
  };

  const stepData: NgWizardStepData[] = [
    {
      order: 1,
      componentName: 'Step1Component',
      title: 'Step 1',
      path: 'step-1',
      previousStep: undefined,
      nextStep: 'step-2',
      isCurrent: false,
    },
    {
      order: 2,
      componentName: 'Step2Component',
      title: 'Step 2',
      path: 'step-2',
      previousStep: 'step-1',
      nextStep: 'step-3',
      isCurrent: false,
    },
    {
      order: 3,
      componentName: 'Step3Component',
      title: 'Step 3',
      path: 'step-3',
      previousStep: 'step-2',
      nextStep: undefined,
      isCurrent: false,
    },
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Step1Component, Step2Component, Step3Component, OtherComponent],
      providers: [NgWizardService],
      imports: [
        NgWizardModule,
        RouterTestingModule.withRoutes([wizardRoute, { path: 'other', component: OtherComponent }]),
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    service = TestBed.get(NgWizardService);
  });

  describe('loadWizardRoutes', () => {
    it('should get the route config for the NgWizardComponent and store it', () => {
      service.loadWizardRoutes(ngWizardComponentName);
      expect((service as any).wizardRoute).toEqual(wizardRoute);
    });

    it('should store the child routes as a list of NgWizardStepData', () => {
      service.loadWizardRoutes(ngWizardComponentName);
      expect((service as any).stepData).toEqual(stepData);
    });

    it('should emit a stepDataChange event for each added step', () => {
      spyOn((service as any).stepDataChanges, 'next');
      service.loadWizardRoutes(ngWizardComponentName);

      expect((service as any).stepDataChanges.next).toHaveBeenCalledTimes(3);
      expect((service as any).stepDataChanges.next).toHaveBeenCalledWith(stepData);
    });
  });

  describe('registerActiveComponent', () => {
    beforeEach(() => {
      service.loadWizardRoutes(ngWizardComponentName);
    });

    it('should store the current stepData and currentComponent', () => {
      const componentRef = (new Step1Component() as unknown) as ComponentRef<any>;
      service.registerActiveComponent(componentRef);

      expect((service as any).currentComponent).toBe(componentRef);
      expect((service as any).currentStepData).toEqual({
        ...stepData[0],
        isCurrent: true,
        componentRef: componentRef,
      });
    });

    it('should emit a stepDataChange event', () => {
      spyOn((service as any).stepDataChanges, 'next');
      const componentRef = (new Step1Component() as unknown) as ComponentRef<any>;
      service.registerActiveComponent(componentRef);

      expect((service as any).stepDataChanges.next).toHaveBeenCalled();
    });

    it('should set only the latest registered active step as current step', () => {
      const component1Ref = (new Step1Component() as unknown) as ComponentRef<any>;
      service.registerActiveComponent(component1Ref);
      expect((service as any).stepData[0].isCurrent).toBe(true);
      expect((service as any).stepData[1].isCurrent).toBe(false);
      expect((service as any).stepData[2].isCurrent).toBe(false);

      const component2Ref = (new Step2Component() as unknown) as ComponentRef<any>;
      service.registerActiveComponent(component2Ref);
      expect((service as any).stepData[0].isCurrent).toBe(false);
      expect((service as any).stepData[1].isCurrent).toBe(true);
      expect((service as any).stepData[2].isCurrent).toBe(false);
    });

    it('should throw a NO_WS_INTERFACE error if the activated step does not implement the NgWizardStep interface', () => {
      const component3Ref = (new Step3Component() as unknown) as ComponentRef<any>;
      expect(() => service.registerActiveComponent(component3Ref)).toThrow(
        new NoWsInterface('Step3Component'),
      );
    });
  });

  describe('navigateToStep', () => {
    let router: Router;

    beforeEach(() => {
      router = TestBed.get(Router);
      spyOn(router, 'navigate');

      service.loadWizardRoutes(ngWizardComponentName);
    });

    it("should call the current component's wsIsValid method", () => {
      const component1Ref = (new Step1Component() as unknown) as ComponentRef<any>;
      service.registerActiveComponent(component1Ref);

      spyOn((component1Ref as unknown) as NgWizardStep, 'wsIsValid');
      service.navigateToStep(stepData[1]);
      expect(((component1Ref as unknown) as NgWizardStep).wsIsValid).toHaveBeenCalled();
    });

    it("should call the current component's wsOnNext method if the order of the step is greater than the current step", () => {
      const component1Ref = (new Step1Component() as unknown) as ComponentRef<any>;
      service.registerActiveComponent(component1Ref);

      spyOn((component1Ref as unknown) as NgWizardStep, 'wsOnNext');
      service.navigateToStep(stepData[1]);
      expect(((component1Ref as unknown) as NgWizardStep).wsOnNext).toHaveBeenCalled();
    });

    it("should call the current component's wsOnPrevious method if the order of the step is less than the current step", () => {
      const component2Ref = (new Step2Component() as unknown) as ComponentRef<any>;
      service.registerActiveComponent(component2Ref);

      spyOn((component2Ref as unknown) as NgWizardStep, 'wsOnPrevious');
      service.navigateToStep(stepData[0]);
      expect(((component2Ref as unknown) as NgWizardStep).wsOnPrevious).toHaveBeenCalled();
    });

    it("should call the route's navigate method with the new path", () => {
      const component1Ref = (new Step1Component() as unknown) as ComponentRef<any>;
      service.registerActiveComponent(component1Ref);

      service.navigateToStep(stepData[1]);

      expect(router.navigate).toHaveBeenCalledWith([stepData[1].path]);
    });

    it("should not call the route's navigate method if the wsOnNext method returns false", () => {
      const component1Ref = (new Step1Component() as unknown) as ComponentRef<any>;
      service.registerActiveComponent(component1Ref);

      spyOn((component1Ref as unknown) as NgWizardStep, 'wsOnNext').and.returnValue(false);
      service.navigateToStep(stepData[1]);

      expect(router.navigate).not.toHaveBeenCalled();
    });

    it("should not call the route's navigate method if the wsOnPrevious method returns false", () => {
      const component2Ref = (new Step2Component() as unknown) as ComponentRef<any>;
      service.registerActiveComponent(component2Ref);

      spyOn((component2Ref as unknown) as NgWizardStep, 'wsOnPrevious').and.returnValue(false);
      service.navigateToStep(stepData[0]);

      expect(router.navigate).not.toHaveBeenCalled();
    });
  });

  describe('navigateToNextStep', () => {
    beforeEach(() => {
      service.loadWizardRoutes(ngWizardComponentName);
    });

    it("should call the service's navigateToStep method with the next step's stepData", () => {
      const component1Ref = (new Step1Component() as unknown) as ComponentRef<any>;
      service.registerActiveComponent(component1Ref);

      spyOn(service, 'navigateToStep');
      service.navigateToNextStep();

      expect(service.navigateToStep).toHaveBeenCalledWith(stepData[1]);
    });
  });

  describe('navigateToNextStep', () => {
    beforeEach(() => {
      service.loadWizardRoutes(ngWizardComponentName);
    });

    it("should call the service's navigateToStep method with the previous step's stepData", () => {
      const component2Ref = (new Step2Component() as unknown) as ComponentRef<any>;
      service.registerActiveComponent(component2Ref);

      spyOn(service, 'navigateToStep');
      service.navigateToPreviousStep();

      expect(service.navigateToStep).toHaveBeenCalledWith(stepData[0]);
    });
  });
});

describe('NgWizardService without wizard route', () => {
  let service: NgWizardService;

  const ngWizardComponentName = 'NgWizardComponent';

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OtherComponent],
      providers: [NgWizardService],
      imports: [
        NgWizardModule,
        RouterTestingModule.withRoutes([{ path: 'other', component: OtherComponent }]),
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    service = TestBed.get(NgWizardService);
  });

  describe('loadWizardRoutes', () => {
    it('should throw a NO_WIZARD_ROUTE error', () => {
      expect(() => service.loadWizardRoutes(ngWizardComponentName)).toThrow(
        new NoWizardRoute(ngWizardComponentName),
      );
    });
  });
});

describe('NgWizardService without child routes', () => {
  let service: NgWizardService;

  const ngWizardComponentName = 'NgWizardComponent';

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OtherComponent],
      providers: [NgWizardService],
      imports: [
        NgWizardModule,
        RouterTestingModule.withRoutes([{ path: '', component: NgWizardComponent }]),
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    service = TestBed.get(NgWizardService);
  });

  describe('loadWizardRoutes', () => {
    it('should throw a NO_WIZARD_ROUTE error', () => {
      expect(() => service.loadWizardRoutes(ngWizardComponentName)).toThrow(
        new NoChildRoutes(ngWizardComponentName, ''),
      );
    });
  });
});

describe('NgWizardService with the wizard component on a path', () => {
  let service: NgWizardService;

  const ngWizardComponentName = 'NgWizardComponent';

  const wizardRoute: Route = {
    path: 'wizard',
    component: NgWizardComponent,
    children: [
      { path: 'step-1', component: Step1Component },
      { path: 'step-2', component: Step2Component },
      { path: 'step-3', component: Step3Component },
      { path: '**', redirectTo: 'step-1' },
    ],
  };

  const stepData: NgWizardStepData[] = [
    {
      order: 1,
      componentName: 'Step1Component',
      title: 'Step 1',
      path: 'step-1',
      previousStep: undefined,
      nextStep: 'step-2',
      isCurrent: false,
    },
    {
      order: 2,
      componentName: 'Step2Component',
      title: 'Step 2',
      path: 'step-2',
      previousStep: 'step-1',
      nextStep: 'step-3',
      isCurrent: false,
    },
    {
      order: 3,
      componentName: 'Step3Component',
      title: 'Step 3',
      path: 'step-3',
      previousStep: 'step-2',
      nextStep: undefined,
      isCurrent: false,
    },
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Step1Component, Step2Component, Step3Component],
      providers: [NgWizardService],
      imports: [NgWizardModule, RouterTestingModule.withRoutes([wizardRoute])],
    }).compileComponents();
  }));

  beforeEach(() => {
    service = TestBed.get(NgWizardService);
  });

  describe('navigateToStep', () => {
    let router: Router;

    beforeEach(() => {
      router = TestBed.get(Router);
      spyOn(router, 'navigate');

      service.loadWizardRoutes(ngWizardComponentName);
    });

    it("should call the route's navigate method with the new path", () => {
      const component1Ref = (new Step1Component() as unknown) as ComponentRef<any>;
      service.registerActiveComponent(component1Ref);

      service.navigateToStep(stepData[1]);

      expect(router.navigate).toHaveBeenCalledWith([stepData[1].path], {
        relativeTo: jasmine.anything(),
      });
    });
  });
});
