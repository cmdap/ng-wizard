import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgWizardService } from '../ng-wizard.service';
import { NgWizardStepData } from '../ng-wizard-step/ng-wizard-step-data.interface';
import { NgWizardOptions } from '../ng-wizard-options/ng-wizard-options.interface';

@Component({
  selector: 'ng-wizard-navigation',
  templateUrl: './ng-wizard-navigation.component.html',
  styleUrls: ['./ng-wizard-navigation.component.scss'],
  encapsulation: ViewEncapsulation.None, // TODO: find out how to get custom icons working without this
})
export class NgWizardNavigationComponent implements OnInit {
  public stepData$;
  public currentStepData$;

  public wizardOptions: NgWizardOptions;

  constructor(private service: NgWizardService) { }

  ngOnInit() {
    this.stepData$ = this.service.getStepDataChangesAsObservable();
    this.currentStepData$ = this.service.getCurrentStepDataAsObservable();
    this.wizardOptions = this.service.wizardOptions;
  }

  public goToStep(stepData: NgWizardStepData) {
    this.service.navigateToStep(stepData);
  }
}
