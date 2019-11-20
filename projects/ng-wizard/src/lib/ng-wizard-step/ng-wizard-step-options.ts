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
    extra?: {
      label?: string;
      path?: string;
    }
  };
  cleanQueryParameters?: boolean;
  disableNavigation?: boolean;
}
