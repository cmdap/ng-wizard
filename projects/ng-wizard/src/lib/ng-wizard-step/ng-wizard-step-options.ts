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
  cleanQueryParameters?: boolean;
  disableNavigation?: boolean;
}
