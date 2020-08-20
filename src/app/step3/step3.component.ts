import { Component, OnInit } from '@angular/core';
import { NgWizardStep } from '../../../projects/ng-wizard/src/lib/ng-wizard-step/ng-wizard-step';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-step3',
  templateUrl: './step3.component.html',
})
export class Step3Component extends NgWizardStep implements OnInit {
  public form = new FormGroup({
    ngVersion: new FormControl('', [Validators.required, this.validateNgVersion]),
    ngRouter: new FormControl(''),
  });

  constructor(private service: AppService, private router: Router) {
    super();
  }

  ngOnInit() {
    if (!this.service.step2IsValid()) {
      return this.router.navigate(['developer']);
    }

    this.form.get('ngVersion').setValue(this.service.formValues.ngVersion);
    this.form.get('ngRouter').setValue(this.service.formValues.ngRouter);
  }

  wsIsValid() {
    this.form.get('ngVersion').markAsTouched();
    return this.form.valid;
  }

  wsOnNext() {
    this.service.setFormValues(this.form.value);
  }

  wsOnPrevious() {
    this.service.setFormValues(this.form.value);
  }

  private validateNgVersion(control: FormControl) {
    return control.value && control.value >= 9 ? null : { validateNgVersion: { valid: false } };
  }
}
