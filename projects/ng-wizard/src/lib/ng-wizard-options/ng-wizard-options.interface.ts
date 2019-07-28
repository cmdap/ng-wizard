export interface NgWizardOptions {
  navBar: {
    icons: {
      previous: string;
      current: string;
      next: string;
    };
  };
  buttons: {
    previous: {
      label: string;
    };
    next: {
      label: string;
    };
  };
}
