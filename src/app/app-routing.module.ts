import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgWizardComponent } from '../../projects/ng-wizard/src/lib/ng-wizard.component';
import { Step1Component } from './step1/step1.component';
import { Step2Component } from './step2/step2.component';
import { Step3Component } from './step3/step3.component';
import { Step4Component } from './step4/step4.component';
import { Step5Component } from './step5/step5.component';

const routes: Routes = [
  { path: '', component: NgWizardComponent, children: [
      { path: 'personal', component: Step1Component },
      { path: 'developer', component: Step2Component },
      { path: 'angular', component: Step3Component },
      { path: 'confirmation', component: Step4Component },
      { path: 'done', component: Step5Component },
      { path: '**', redirectTo: 'personal' },
  ]},
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
