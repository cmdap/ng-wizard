import { Component, OnInit } from '@angular/core';
import { NgWizardStep } from '../../../projects/ng-wizard/src/lib/ng-wizard-step/ng-wizard-step.interface';

@Component({
  selector: 'app-step3',
  templateUrl: './step3.component.html',
})
export class Step3Component implements OnInit, NgWizardStep {

  constructor() { }

  ngOnInit() {
  }

  wsOnNext() {}
  wsOnPrevious() {}
}
