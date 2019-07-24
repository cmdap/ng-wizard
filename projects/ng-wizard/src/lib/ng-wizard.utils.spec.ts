import {
  componentImportsWizardStepInterface,
  getStepDataForComponentName,
  getStepDataForPath,
  getStepTitleFromRoute
} from './ng-wizard.utils';
import { NgWizardStep } from './ng-wizard-step/ng-wizard-step.interface';
import { ComponentRef } from '@angular/core';
import { NgWizardStepData } from './ng-wizard-step/ng-wizard-step-data.interface';

describe('Utils', () => {
  describe('getStepTitleFromRoute', () => {
    it('should return the route data\'s title property if present', () => {
      expect(getStepTitleFromRoute({ data: { title: 'Custom title' } })).toBe('Custom title');
    });

    it('should transform and return the route\'s path', () => {
      expect(getStepTitleFromRoute({ path: 'some-route-path' })).toBe('Some route path');
      expect(getStepTitleFromRoute({ path: '-some-other_path-' })).toBe('Some other path');
      expect(getStepTitleFromRoute({ path: '' })).toBe('');
      expect(getStepTitleFromRoute({ path: 'AWESOME' })).toBe('Awesome');
      expect(getStepTitleFromRoute({ path: '_EvErYtHiNg-@-oNcE_' })).toBe('Everything @ once');
    });
  });

  describe('componentImportsWizardStepInterface', () => {
    it('should return true if the component has defined the wsOnNext and wsOnPrevious methods', () => {
      class NgWizardStepImplementer implements NgWizardStep {
        wsOnNext() {}
        wsOnPrevious() {}
      }

      expect(componentImportsWizardStepInterface(new NgWizardStepImplementer() as unknown as ComponentRef<any>)).toBe(true);
    });

    it('should return false if the component has not defined the wsOnNext and wsOnPrevious methods', () => {
      class BasicClass {}

      expect(componentImportsWizardStepInterface(new BasicClass() as unknown as ComponentRef<any>)).toBe(false);
    });
  });

  const stepData = [
    { path: 'some-path', componentName: 'SomeComponent'} as NgWizardStepData,
    { path: 'some-other-path', componentName: 'SomeOtherComponent'} as NgWizardStepData,
  ];

  describe('getStepDataFromComponentName', () => {
    it('should return the stepData for the given componentName', () => {
      expect(getStepDataForComponentName(stepData, 'SomeComponent')).toEqual(stepData[0]);
    });

    it('should return undefined if there is no stepData for the given componentName', () => {
      expect(getStepDataForComponentName(stepData, 'Woooops')).toBeUndefined();
    });
  });

  describe('getStepDataFromPath', () => {
    it('should return the stepData for the given path', () => {
      expect(getStepDataForPath(stepData, 'some-other-path')).toEqual(stepData[1]);
    });

    it('should return undefined if there is no stepData for the given path', () => {
      expect(getStepDataForPath(stepData, 'Woooops')).toBeUndefined();
    });
  });
});
