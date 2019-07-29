import { ComponentRef } from '@angular/core';
import { NgWizardStepOptions } from './ng-wizard-step-options';

export interface NgWizardStepData {
  order: number;
  componentName: string;
  componentRef?: ComponentRef<any>;
  path: string;
  previousStep?: string;
  nextStep?: string;
  isCurrent: boolean;
  options: NgWizardStepOptions;
}
