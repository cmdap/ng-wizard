import { NgWizardErrorType } from './ng-wizard-error-type.enum';

export abstract class NgWizardError extends Error {
  public type: NgWizardErrorType;

  public wizardComponentName = '';
  public wizardPath = '';
  public stepComponentName = '';

  protected constructor(type: NgWizardErrorType, message: string) {
    super(message);
    this.type = type;
  }
}

export class NoWizardRoute extends NgWizardError {
  constructor(public wizardComponentName: string) {
    super(
      NgWizardErrorType.NO_WIZARD_ROUTE,
      `No route configuration for the ${wizardComponentName} found.`,
    );
  }
}

export class NoChildRoutes extends NgWizardError {
  constructor(public wizardComponentName: string, public wizardPath: string) {
    super(
      NgWizardErrorType.NO_CHILD_ROUTES,
      `No child routes for the ${wizardComponentName} found.`,
    );
  }
}

export class NoWsInterface extends NgWizardError {
  constructor(public stepComponentName: string) {
    super(
      NgWizardErrorType.NO_WS_INTERFACE,
      `The ${stepComponentName} does not extend the NgWizardStep class or implement the NgWizardStepInterface.`,
    );
  }
}
