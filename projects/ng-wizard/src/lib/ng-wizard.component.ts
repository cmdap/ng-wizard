import { Component, ComponentRef } from '@angular/core';
import { NgWizardService } from './ng-wizard.service';

@Component({
  selector: 'ng-wizard',
  templateUrl: './ng-wizard.component.html',
})
export class NgWizardComponent {
  public error: Error;

  constructor(private service: NgWizardService) {
    try {
      this.service.loadWizardRoutes(this.constructor.name);
    } catch (error) {
      this.error = error;
    }
  }

  public onActivate(componentRef: ComponentRef<any>) {
    try {
      this.service.registerActiveComponent(componentRef);
    } catch (error) {
      this.error = error;
    }
  }
}
