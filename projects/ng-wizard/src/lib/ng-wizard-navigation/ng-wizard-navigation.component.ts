import { Component, OnInit } from '@angular/core';
import { NgWizardService } from '../ng-wizard.service';
import { NgWizardStepData } from '../ng-wizard-step/ng-wizard-step-data.interface';
import { NgWizardOptions } from '../ng-wizard-options/ng-wizard-options.interface';

@Component({
  selector: 'ng-wizard-navigation',
  templateUrl: './ng-wizard-navigation.component.html',
  styleUrls: ['./ng-wizard-navigation.component.scss']
})
export class NgWizardNavigationComponent implements OnInit {
  public stepData$;
  public currentStepData;

  public wizardOptions: NgWizardOptions;

  constructor(private service: NgWizardService) { }

  ngOnInit() {
    this.stepData$ = this.service.getStepDataChangesAsObservable();
    this.service.getCurrentStepDataAsObservable().subscribe(stepData => this.currentStepData = stepData);
    this.wizardOptions = this.service.wizardOptions;
  }

  public goToStep(stepData: NgWizardStepData) {
    if ((this.currentStepData && this.currentStepData.options && this.currentStepData.options.disableNavigation)
        || stepData.order >= this.currentStepData.order) {
      return;
    }
    this.service.navigateToStep(stepData);
  }
}
