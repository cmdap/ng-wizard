import { Component, OnInit } from '@angular/core';
import { NgWizardStep } from '../../../projects/ng-wizard/src/lib/ng-wizard-step/ng-wizard-step.interface';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
})
export class Step2Component implements OnInit, NgWizardStep {

  constructor() { }

  ngOnInit() {
  }

  wsOnNext() {}
  wsOnPrevious() {}

}
