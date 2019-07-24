import { ComponentRef } from '@angular/core';

export interface NgWizardStepData {
  order: number;
  componentName: string;
  componentRef?: ComponentRef<any>;
  title: string;
  path: string;
  previousStep?: string;
  nextStep?: string;
  isCurrent: boolean;
}
