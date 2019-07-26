import { Component, OnInit } from '@angular/core';
import { NgWizardStep } from '../../../projects/ng-wizard/src/lib/ng-wizard-step/ng-wizard-step';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-step4',
  templateUrl: './step4.component.html',
})
export class Step4Component extends NgWizardStep implements OnInit {
  public values;

  constructor(private service: AppService, private router: Router) {
    super();
  }

  ngOnInit() {
    if (!this.service.step3IsValid()) {
      return this.router.navigate(['angular']);
    }

    this.values = this.service.formValues;
  }
}
