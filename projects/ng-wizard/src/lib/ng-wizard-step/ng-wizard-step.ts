import { NgWizardStepInterface } from './ng-wizard-step.interface';

export abstract class NgWizardStep implements NgWizardStepInterface {
  wsIsValid(): boolean {
    return true;
  }

  wsOnNext(): void | boolean {
    return;
  }

  wsOnPrevious(): void | boolean {
    return;
  }
}
