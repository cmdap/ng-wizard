# NgWizard
![ng-wizard logo](ng-wizard-200.png)

The NgWizard component is a simple wizard/stepper component for
[Angular](https://angular.io) 7 utilizing
[Angular Routing](https://angular.io/guide/router) for navigation.

A demo can be found at
[https://cmdap.github.io/ng-wizard/](https://cmdap.github.io/ng-wizard/).

## Installation
The NgWizard component is available as an NPM package.  
It has an optional dependency on `material-icons` for displaying the default
[Material icons](https://material.io/tools/icons) as well as some peer
dependencies on Angular packages.  
To install the NgWizard component in your Angular project directory run:
```
$ npm install @cmdap/ng-wizard material-icons
```
_If you don't want to use any of the default icons, you don't need to install the optional `material-icons` dependency._

Then add a route for the `NgWizardComponent` to your Angular
router configuration with each step in the wizard as a child route.

For example, your `app-routing.module.ts` file for a wizard with 2 steps
can look like this:
```typescript
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgWizardComponent } from '@cmdap/ng-wizard';
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

Finally, have your step components extend the `NgWizardStep` class or
implement the `NgWizardStepInterface` and you
are all set.

A minimal step component file can look like this:
```typescript
import { Component } from '@angular/core';
import { NgWizardStep } from '@cmdap/ng-wizard';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
})
export class Step1Component extends NgWizardStep {
  constructor() {
    super();
  }
}
```

### Wizard options
Custom options can be passed to the NgWizard component via the `data` attribute of the wizard route.  
For example:
```
const wizardConfig = {
  navBar: {
    icons: {
      previous: '<i class="material-icons">cake</i>',
      current: '<i class="material-icons">star</i>',
      next: '<i class="material-icons">pool</i>',
    },
  },
};

const routes: Routes = [
  { path: '', component: NgWizardComponent, children: [...], data: wizardConfig },
  { path: '**', redirectTo: '' },
];
```
Currently the supported configuration options which can be overwritten are (with their default values):
```
{
  navBar: {
    icons: {
      previous: '<i class="material-icons">done</i>',
      current: '<i class="material-icons">create</i>',
      next: '<i class="material-icons">lock</i>',
    },
  },
  buttons: {
    previous: {
      label: '<i class="material-icons">chevron_left</i> Previous',
    },
    next: {
      label: 'Next <i class="material-icons">chevron_right</i>',
    },
  }
}
```
_If you overwrite all the options containing the `material-icons` class you do not need to install the optional `material-icons` dependency._

### Wizard step options
Yet to be implemented (expected in August). 

### Hooks
Before navigating, the NgWizard component will call the active step's `wsOnNext` or `wsOnPrevious` method.
Use these methods to save the current state of the step to a service or to perform any other logic you want to execture before leaving the active step.

When a new step is displayed the `ngOnInit` method will be called by Angular.
Use this method to initialize the step's data and/or check the user's access rights to this step.

### Cancel navigation
If your step component's state is invalid return `false` from your
`wsIsValid` method. This will cancel the navigation to the next step but
will allow navigating to previous steps.

For any other reason you want to cancel the next or
previous navigation make sure your `wsOnNext` and/or `wsOnPrevious`
method returns `false`.  
This will cancel the Wizard's navigation.   

_Your step component is responsible for displaying an error message or
other reason why the navigation is cancelled._

### Entry via URL
Since the NgWizard component utilizes Angular's Routing it is possible
for a user to access any step in the wizard via the URL. If the user is not allowed to access a specific step you can check the
conditions and redirect the user in the step component's `ngOnInit`
method.

### Styling
The NgWizard component contains minimal styling rules to get you started
during development. Your project will most likely require you to define
your own style rules overwriting the existing ones.  
`TODO`: describe how to overwrite the styling.

## Planned improvements
* Allow extra configuration to be passed to the child route's configuration
  (custom icons, point of no return, next and previous button labels,
  step title, ...).
* Improve the responsiveness of the basic styles.
* Improve the component's Accessibility (ARIA attributes, colors and
  contrasts).
* Add support for more Angular versions

## Contributing
If you are willing to contribute to this project you can clone the source code from our [github repository](https://github.com/cmdap/ng-wizard).
```
$ git clone https://github.com/cmdap/ng-wizard.git
``` 
You will find a `src` folder containing the NgWizard demo project as seen on [https://cmdap.github.io/ng-wizard](https://cmdap.github.io/ng-wizard) as well as a `projects\ng-wizard` folder containing the source code for the ng-wizard component.

### Useful commands
In addition to the default Angular commands some useful NPM scripts have been added to the root `package.json` file.

| Useful command | Description |
| ------- | ----------- |
| `npm start` | Starts a development server for the **demo project**. The server will start on [http://localhost:4200](http://localhost:4200). |
| `ng build`| Builds the **demo project** to the `docs` folder. This folder will be published as the NgWizard's demo at [https://cmdap.github.io/ng-wizard](https://cmdap.github.io/ng-wizard). |
| `npm test` | Runs the Karma/Jasmine tests for the **ng-wizard component** with code coverage enabled. |
| `npm run lint` | Runs the linter on the **ng-wizard component**'s source code. |
| `npm run build` | Builds the **ng-wizard component**'s source code to an NPM package in the `dist\ng-wizard` folder. Also copies the `README.md` (with assets) and `LICENSE.txt` files to that folder. |
| `npm publish dist\ng-wizard --access public` | **Only for project owners**. Publishes the **ng-wizard package** to the NPM repository at [https://www.npmjs.com/package/@cmdap/ng-wizard](https://www.npmjs.com/package/@cmdap/ng-wizard). |
