import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  public formValues = {
    lastName: '',
    firstName: '',
    gitUser: '',
    favoriteProject: '',
    ngVersion: 0,
    ngRouter: false,
  };

  public setFormValues(values: any) {
    this.formValues = { ...this.formValues, ...values };
  }

  public step1IsValid() {
    return this.formValues.lastName && this.formValues.firstName;
  }

  public step2IsValid() {
    return this.step1IsValid();
  }

  public step3IsValid() {
    return this.step2IsValid() && this.formValues.ngVersion >= 7;
  }
}
