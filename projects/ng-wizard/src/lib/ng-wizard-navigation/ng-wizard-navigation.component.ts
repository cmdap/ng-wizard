import { Component, OnInit } from '@angular/core';
import { NgWizardService } from '../ng-wizard.service';
import { NgWizardStepData } from '../ng-wizard-step/ng-wizard-step-data.interface';

@Component({
  selector: 'ng-wizard-navigation',
  templateUrl: './ng-wizard-navigation.component.html',
  styleUrls: ['./ng-wizard-navigation.component.scss']
})
export class NgWizardNavigationComponent implements OnInit {
  public stepData$;
  public currentStepData$;

  constructor(private service: NgWizardService) { }

  ngOnInit() {
    this.stepData$ = this.service.getStepDataChangesAsObservable();
    this.currentStepData$ = this.service.getCurrentStepDataAsObservable();
  }

  public goToStep(stepData: NgWizardStepData) {
    this.service.navigateToStep(stepData);
  }
}
