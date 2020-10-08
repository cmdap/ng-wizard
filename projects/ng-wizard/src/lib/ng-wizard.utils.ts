import { Route } from '@angular/router';
import { ComponentRef } from '@angular/core';
import { NgWizardStepData } from './ng-wizard-step/ng-wizard-step-data.interface';
import { NgWizardOptions } from './ng-wizard-options/ng-wizard-options.interface';
import { NgWizardStepOptions } from './ng-wizard-step/ng-wizard-step-options';

/**
 * Returns true if the component extends the NgWizardStep class or implements the NgWizardStepInterface.
 *
 * @param componentRef The reference to the component to verify
 */
export function componentImplementsNgWizardStepInterface(componentRef: ComponentRef<any>): boolean {
  return 'wsIsValid' in componentRef && 'wsOnNext' in componentRef && 'wsOnPrevious' in componentRef;
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
 * Returns the NgWizardStepData for the given url in the stepData list or undefined if none is
 * found.
 *
 * @param stepData The list with NgWizardStepDatas
 * @param url The url which you want to get the NgWizardStepData for
 */
export function getStepDataForUrl(stepData: NgWizardStepData[], url: string) {
  // gets 'path' in the url '/wizard/path?key=value'
  const path = url.split('/').pop().split('?')[0];
  return getStepDataForPath(stepData, path);
}

/**
 * Returns the default wizard options.
 */
export function getDefaultWizardOptions(): NgWizardOptions {
  return {
    name: '',
    navBar: {
      icons: {
        previous: '<i class="material-icons ng-wizard-icon">done</i>',
        current: '<i class="material-icons ng-wizard-icon">create</i>',
        next: '<i class="material-icons ng-wizard-icon">lock</i>',
      },
    },
    buttons: {
      previous: {
        label: '<i class="material-icons ng-wizard-icon">chevron_left</i> Previous',
      },
      next: {
        label: 'Next <i class="material-icons ng-wizard-icon">chevron_right</i>',
      },
    }
  };
}

/**
 * Merges the wizard options in the wizard route's config with the default wizard options.
 *
 * @param wizardOptions The wizard options in the wizard route's config
 */
export function mergeWizardOptions(wizardOptions: {}): NgWizardOptions {
  if (!wizardOptions) {
    return getDefaultWizardOptions();
  }

  return { ...getDefaultWizardOptions(), ...wizardOptions };
}

/**
 * Returns the options passed to the wizard step route with an added title attribute.
 *
 * @param route The wizard step route configuration
 */
export function getWizardStepOptions(route: Route): NgWizardStepOptions {
  if (!route.data) {
    return { title: getStepTitleFromRoute(route) };
  }

  return {
    ...route.data,
    title: getStepTitleFromRoute(route),
  };
}

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
