import { Component, OnInit } from '@angular/core';
import { NgWizardStep } from '../../../projects/ng-wizard/src/lib/ng-wizard-step/ng-wizard-step';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AppService } from '../app.service';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
})
export class Step1Component extends NgWizardStep implements OnInit {
  public form = new FormGroup({
    lastName: new FormControl('', Validators.required),
    firstName: new FormControl('', Validators.required),
  });

  constructor(private service: AppService) {
    super();
  }

  ngOnInit() {
    this.form.get('lastName').setValue(this.service.formValues.lastName);
    this.form.get('firstName').setValue(this.service.formValues.firstName);
  }

  wsIsValid() {
    this.form.get('lastName').markAsTouched();
    this.form.get('firstName').markAsTouched();

    return this.form.valid;
  }

  wsOnNext() {
    this.service.setFormValues(this.form.value);
  }
}
