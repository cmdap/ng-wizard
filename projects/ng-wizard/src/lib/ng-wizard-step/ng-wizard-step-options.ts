export interface NgWizardStepOptions {
  title: string;
  icon?: string;
  buttons?: {
    previous?: {
      label?: string;
      hidden?: boolean;
    };
    next?: {
      label?: string;
      hidden?: boolean;
    };
  };
  disableNavigation?: boolean;
}
