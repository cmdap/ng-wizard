import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgWizardComponent } from '../../projects/ng-wizard/src/lib/ng-wizard.component';
import { Step1Component } from './step1/step1.component';
import { Step2Component } from './step2/step2.component';
import { Step3Component } from './step3/step3.component';
import { Step4Component } from './step4/step4.component';
import { Step5Component } from './step5/step5.component';
import { NestedExampleComponent } from './nested-example/nested-example.component';

const wizardConfig = {
  navBar: {
    icons: {
      previous: '<i class="material-icons ng-wizard-icon">cake</i>',
      current: '<i class="material-icons ng-wizard-icon">star</i>',
      next: '<i class="material-icons ng-wizard-icon">pool</i>',
    },
  },
  buttons: {
    previous: {
      label: '<i class="material-icons ng-wizard-icon">arrow_left</i> Previous',
    },
    next: {
      label: 'Next <i class="material-icons ng-wizard-icon">arrow_right</i>',
    },
  }
};

const confirmationStepOptions = {
  buttons: {
    previous: {
      label: '<i class="material-icons ng-wizard-icon">create</i> Edit',
    },
    next: {
      label: 'Confirm <i class="material-icons ng-wizard-icon">done_all</i>',
    }
  }
};

const doneStepOptions = {
  icon: '<i class="material-icons ng-wizard-icon">done_all</i>',
  buttons: {
    previous: {
      hidden: true,
    },
  },
  disableNavigation: true,
};

const routes: Routes = [
  { path: 'nested/:id', component: NestedExampleComponent, children: [
      { path: 'wizard', component: NgWizardComponent, children: [
          { path: 'personal', component: Step1Component },
          { path: 'developer', component: Step2Component },
          { path: 'angular', component: Step3Component },
          { path: 'confirmation', component: Step4Component, data: confirmationStepOptions },
          { path: 'done', component: Step5Component, data: doneStepOptions },
          { path: '**', redirectTo: 'personal' },
      ], data: { name: 'nestedExample', ...wizardConfig}}
  ]},
  { path: '', component: NgWizardComponent, children: [
      { path: 'personal', component: Step1Component },
      { path: 'developer', component: Step2Component },
      { path: 'angular', component: Step3Component },
      { path: 'confirmation', component: Step4Component, data: confirmationStepOptions },
      { path: 'done', component: Step5Component, data: doneStepOptions },
      { path: '**', redirectTo: 'personal' },
  ], data: { name: 'ngWizard' }},
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
