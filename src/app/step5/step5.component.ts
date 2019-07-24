import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgWizardStep } from '../../../projects/ng-wizard/src/lib/ng-wizard-step/ng-wizard-step.interface';

@Component({
  selector: 'app-step5',
  templateUrl: './step5.component.html',
})
export class Step5Component implements OnInit, NgWizardStep {
  public form = new FormGroup({
    input: new FormControl(''),
  });

  constructor() {
  }

  ngOnInit() {
  }

  wsOnNext() {
  }

  wsOnPrevious() {
  }
}


