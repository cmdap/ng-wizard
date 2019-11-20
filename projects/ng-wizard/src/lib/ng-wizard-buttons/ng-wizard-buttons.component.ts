import { Component, OnInit } from '@angular/core';
import { NgWizardService } from '../ng-wizard.service';
import { NgWizardStepData } from '../ng-wizard-step/ng-wizard-step-data.interface';
import { Observable } from 'rxjs';
import { NgWizardOptions } from '../ng-wizard-options/ng-wizard-options.interface';

@Component({
  selector: 'ng-wizard-buttons',
  templateUrl: './ng-wizard-buttons.component.html',
  styleUrls: ['./ng-wizard-buttons.component.scss'],
})
export class NgWizardButtonsComponent implements OnInit {
  public currentStepData$: Observable<NgWizardStepData>;

  public wizardOptions: NgWizardOptions;

  constructor(private service: NgWizardService) { }

  ngOnInit() {
    this.currentStepData$ = this.service.getCurrentStepDataAsObservable();
    this.wizardOptions = this.service.wizardOptions;
  }

  goToNextStep() {
    this.service.navigateToNextStep();
  }

  goToPreviousStep() {
    this.service.navigateToPreviousStep();
  }

  goToPath(path: string) {
    this.service.navigateToPath(path);
  }

}
