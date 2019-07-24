# NgWizard
The NgWizard component is a simple wizard/stepper component for
[Angular](https://angular.io) 7 utilizing
[Angular Routing](https://angular.io/guide/router) for navigation.

## Installation
The NgWizard component is available as an NPM package. It has a single
(peer)dependency on `material-icons` for displaying
[Material icons](https://material.io/tools/icons).  
To install the NgWizard component in your Angular project directory run:
```
$ npm install @cm/ng-wizard material-icons
```

Then you can add a route for the `NgWizardComponent` to your Angular
router configuration with each step in the wizard as a child route.

For example, your `app-routing.module.ts` file for a wizard with 2 steps
can look like this:
```typescript
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgWizardComponent } from '@cm/ng-wizard';
import { Step1Component } from './step1/step1.component';
import { Step2Component } from './step2/step2.component';


const routes: Routes = [
  { path: '', component: NgWizardComponent, children: [
      { path: 'step-1', component: Step1Component },
      { path: 'step-2', component: Step2Component },
      { path: '**', redirectTo: 'step-1' },
  ]},
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
```

Finally, have your step components implement the `NgWizardStep`
interface and define the `wsOnNext` and `wsOnPrevious` methods and you
are all set.

A minimal step component file can look like this:
```typescript
import { Component } from '@angular/core';
import { NgWizardStep } from '@cm/ng-wizard';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
})
export class Step1Component implements NgWizardStep {
  constructor() { }

  wsOnNext() { }
  wsOnPrevious() { }
}
```

### Cancel navigation
If your step component contains an invalid form or for any other reason
you want to cancel the next or previous navigation make sure your
`wsOnNext` and/or `wsOnPrevious` method returns `false`.  
This will cancel the Wizard's navigation.  
Your step component is responsible for displaying an error message or
other reason why the navigation is cancelled.

### Entry via URL
Since the NgWizard component utilizes Angular's Routing it is possible
for a user to access any step in the wizard via the URL.  
If the user is not allowed to access a specific step you can check the
conditions and redirect the user in the step component's `ngOnInit`
method.

### Styling
The NgWizard component contains minimal styling rules to get you started
during development. Your project will most likely require you to define
your own style rules overwriting the existing ones.  
`TODO`: describe how to overwrite the styling (Olga ?)

## Planned improvements
* Allow extra configuration to be passed to the route's configuration
  (custom icons, point of no return, next and previous button labels,
  step title, ...).
* Improve the responsiveness of the basic styles.
* Improve the component's Accessibility (ARIA attributes, colors and
  contrasts).
* Create a logo for this component.

