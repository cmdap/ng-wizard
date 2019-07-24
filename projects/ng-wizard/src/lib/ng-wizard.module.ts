import { NgModule } from '@angular/core';
import { NgWizardComponent } from './ng-wizard.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgWizardErrorComponent } from './ng-wizard-error/ng-wizard-error.component';
import { NgWizardNavigationComponent } from './ng-wizard-navigation/ng-wizard-navigation.component';
import { NgWizardButtonsComponent } from './ng-wizard-buttons/ng-wizard-buttons.component';
import { NgWizardService } from './ng-wizard.service';

@NgModule({
  declarations: [
    NgWizardComponent,
    NgWizardErrorComponent,
    NgWizardNavigationComponent,
    NgWizardButtonsComponent,
  ],
  imports: [CommonModule, RouterModule],
  providers: [NgWizardService],
  exports: [NgWizardComponent],
})
export class NgWizardModule {}
