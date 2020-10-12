import { Component, ComponentRef } from '@angular/core';
import { NgWizardService } from './ng-wizard.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ng-wizard',
  templateUrl: './ng-wizard.component.html',
})
export class NgWizardComponent {
  public error: Error;
  private wizardName: string;

  constructor(
    private service: NgWizardService,
    private route: ActivatedRoute,
  ) {
    try {
      this.route.data.subscribe(data => {
        this.wizardName = data.name;
      });
      this.service.loadWizardRoutes(this.wizardName);
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
