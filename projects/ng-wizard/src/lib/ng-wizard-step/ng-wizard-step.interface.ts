export interface NgWizardStepInterface {
  /**
   * Return false if your step component's state is invalid and navigation to the next step should
   * be denied.
   * When returning false make sure to display a relevant (error) message telling the user why the
   * navigation is denied.
   */
  wsIsValid(): boolean;

  /**
   * Perform any task before the wizard goes to a next step.
   * Return false to cancel the wizard's navigation.
   */
  wsOnNext(): void | boolean;

  /**
   * Perform any task before the wizard goes to a previous step.
   * Return false to cancel the wizard's navigation.
   */
  wsOnPrevious(): void | boolean;
}
