import { Component, Input } from '@angular/core';
import { NgWizardErrorType } from './ng-wizard-error-type.enum';
import { NgWizardError } from './ng-wizard.error';

@Component({
  selector: 'ng-wizard-error',
  templateUrl: './ng-wizard-error.component.html',
  styleUrls: ['./ng-wizard-error.component.scss']
})
export class NgWizardErrorComponent {
  @Input() public error: NgWizardError;

  public NgWizardErrorType = NgWizardErrorType;
}
