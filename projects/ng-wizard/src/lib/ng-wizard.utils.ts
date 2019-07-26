import { Route } from '@angular/router';
import { ComponentRef } from '@angular/core';
import { NgWizardStepData } from './ng-wizard-step/ng-wizard-step-data.interface';

/**
 * Returns the step title based on the Route configuration.
 * If the route has a data.title attribute it will be returned.
 * Else the path will be capitalized and '-' or '_' characters will be replaces by spaces.
 *
 * @param route The Angular Route object
 */
export function getStepTitleFromRoute(route: Route): string {
  if (route.data && route.data.title) {
    return route.data.title;
  }
  return capitalize(insertSpaces(route.path));
}

/**
 * Returns true if the component extends the NgWizardStep class or implements the NgWizardStepInterface.
 *
 * @param componentRef The reference to the component to verify
 */
export function componentImplementsNgWizardStepInterface(componentRef: ComponentRef<any>): boolean {
  return 'wsIsValid' in componentRef && 'wsOnNext' in componentRef && 'wsOnPrevious' in componentRef;
}

/**
 * Returns the NgWizardStepData with the given ComponentName in the stepData list or undefined if
 * none is found.
 *
 * @param stepData The list with NgWizardStepDatas
 * @param componentName The componentName you want to get the NgWizardStepData for
 */
export function getStepDataForComponentName(stepData: NgWizardStepData[], componentName: string) {
  return stepData.find(data => data.componentName === componentName);
}

/**
 * Returns the NgWizardStepData with the given path in the stepData list or undefined if none is
 * found.
 *
 * @param stepData The list with NgWizardStepDatas
 * @param path The path you want to get the NgWizardStepData for
 */
export function getStepDataForPath(stepData: NgWizardStepData[], path: string) {
  return stepData.find(data => data.path === path);
}

/**
 * Capitalizes the first character of the passed value.
 */
function capitalize(value: string): string {
  if (!value) {
    return value;
  }
  return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
}

/**
 * Replaces '-' and '_' characters by spaces.
 */
function insertSpaces(value: string): string {
  if (!value) {
    return value;
  }
  return value.replace(/[-_]/g, ' ').trim();
}
