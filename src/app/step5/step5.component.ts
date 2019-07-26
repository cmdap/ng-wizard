import { Component, OnInit } from '@angular/core';
import { NgWizardStep } from '../../../projects/ng-wizard/src/lib/ng-wizard-step/ng-wizard-step';

@Component({
  selector: 'app-step5',
  templateUrl: './step5.component.html',
})
export class Step5Component extends NgWizardStep {
  constructor() {
    super();
  }
}


