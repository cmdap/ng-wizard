import { Component, OnInit } from '@angular/core';
import { NgWizardStep } from '../../../projects/ng-wizard/src/lib/ng-wizard-step/ng-wizard-step';
import { FormControl, FormGroup } from '@angular/forms';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
})
export class Step2Component extends NgWizardStep implements OnInit {
  public form = new FormGroup({
    gitUser: new FormControl(''),
    favoriteProject: new FormControl(''),
  });

  constructor(private service: AppService, private router: Router) {
    super();
  }

  ngOnInit() {
    if (!this.service.step1IsValid()) {
      return this.router.navigate(['personal']);
    }

    this.form.get('gitUser').setValue(this.service.formValues.gitUser);
    this.form.get('favoriteProject').setValue(this.service.formValues.favoriteProject);
  }

  wsOnNext() {
    this.service.setFormValues(this.form.value);
  }

  wsOnPrevious() {
    this.service.setFormValues(this.form.value);
  }
}
