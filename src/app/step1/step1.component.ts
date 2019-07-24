import { Component } from '@angular/core';
import { NgWizardStep } from '../../../projects/ng-wizard/src/lib/ng-wizard-step/ng-wizard-step.interface';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
})
export class Step1Component implements NgWizardStep {
  constructor() { }

  wsOnNext() { }
  wsOnPrevious() { }
}
