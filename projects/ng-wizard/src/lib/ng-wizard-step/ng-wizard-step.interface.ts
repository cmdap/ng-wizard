export interface NgWizardStep {
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
