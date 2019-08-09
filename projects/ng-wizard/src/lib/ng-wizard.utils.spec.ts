import * as utils from './ng-wizard.utils';
import { NgWizardStep } from './ng-wizard-step/ng-wizard-step';
import { ComponentRef } from '@angular/core';
import { NgWizardStepData } from './ng-wizard-step/ng-wizard-step-data.interface';
import { NgWizardOptions } from './ng-wizard-options/ng-wizard-options.interface';

describe('Utils', () => {
  describe('getStepTitleFromRoute', () => {
    it("should return the route data's title property if present", () => {
      expect(utils.getStepTitleFromRoute({ data: { title: 'Custom title' } })).toBe('Custom title');
    });

    it("should transform and return the route's path", () => {
      expect(utils.getStepTitleFromRoute({ path: 'some-route-path' })).toBe('Some route path');
      expect(utils.getStepTitleFromRoute({ path: '-some-other_path-' })).toBe('Some other path');
      expect(utils.getStepTitleFromRoute({ path: '' })).toBe('');
      expect(utils.getStepTitleFromRoute({ path: 'AWESOME' })).toBe('Awesome');
      expect(utils.getStepTitleFromRoute({ path: '_EvErYtHiNg-@-oNcE_' })).toBe(
        'Everything @ once',
      );
    });
  });

  describe('componentExtendsNgWizardStep', () => {
    it('should return true if the component has defined the wsIsValid, wsOnNext and wsOnPrevious methods', () => {
      class NgWizardStepExtender extends NgWizardStep {}

      expect(
        utils.componentImplementsNgWizardStepInterface(
          (new NgWizardStepExtender() as unknown) as ComponentRef<any>,
        ),
      ).toBe(true);
    });

    it('should return false if the component has not defined the wsIsValid, wsOnNext and wsOnPrevious methods', () => {
      class BasicClass {}

      expect(
        utils.componentImplementsNgWizardStepInterface(
          (new BasicClass() as unknown) as ComponentRef<any>,
        ),
      ).toBe(false);
    });
  });

  const stepData = [
    { path: 'some-path', componentName: 'SomeComponent' } as NgWizardStepData,
    { path: 'some-other-path', componentName: 'SomeOtherComponent' } as NgWizardStepData,
  ];

  describe('getStepDataForPath', () => {
    it('should return the stepData for the given path', () => {
      expect(utils.getStepDataForPath(stepData, 'some-other-path')).toEqual(stepData[1]);
    });

    it('should return undefined if there is no stepData for the given path', () => {
      expect(utils.getStepDataForPath(stepData, 'Woooops')).toBeUndefined();
    });
  });

  describe('getStepDataForUrl', () => {
    it('should return the stepData for the given url', () => {
      expect(utils.getStepDataForUrl(stepData, '/some-path')).toEqual(stepData[0]);
      expect(utils.getStepDataForUrl(stepData, '/wizard/some-other-path')).toEqual(stepData[1]);
      expect(utils.getStepDataForUrl(stepData, '/wizard/child/some-other-path?url=no')).toEqual(stepData[1]);
    });

    it('should return undefined if there is no stepData for the given url', () => {
      expect(utils.getStepDataForPath(stepData, '/does-not-exist')).toBeUndefined();
      expect(utils.getStepDataForPath(stepData, '/wizard/does-not-exist?something=yes')).toBeUndefined();
    });
  });

  describe('getDefaultWizardOptions', () => {
    it('should return an object of type NgWizardOptions', () => {
      expect(utils.getDefaultWizardOptions()).toBeDefined();
      expect(utils.getDefaultWizardOptions().navBar).toBeDefined();
      expect(utils.getDefaultWizardOptions().navBar.icons).toBeDefined();
      expect(utils.getDefaultWizardOptions().buttons).toBeDefined();
      expect(utils.getDefaultWizardOptions().buttons.previous).toBeDefined();
      expect(utils.getDefaultWizardOptions().buttons.next).toBeDefined();
    });
  });

  describe('mergeWizardOptions', () => {
    it('should return the default wizard options if no wizard options are provided', () => {
      expect(utils.mergeWizardOptions(undefined)).toEqual(utils.getDefaultWizardOptions());
    });

    it('should merge the default options with the provided options', () => {
      const options = {
        navBar: {
          icons: {
            previous: 'P',
          },
        },
        buttons: {
          previous: {
            label: 'P',
          },
        },
      };
      expect(utils.mergeWizardOptions(options)).toEqual({
        ...utils.getDefaultWizardOptions(),
        ...options,
      } as NgWizardOptions);
    });
  });

  describe('getWizardStepOptions', () => {
    it('should return only the title attribute when the route does not have a data attribute', () => {
      const route = { path: 'route-1' };
      expect(utils.getWizardStepOptions(route)).toEqual({ title: 'Route 1' });
    });
  });
});
