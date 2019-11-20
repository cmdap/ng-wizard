import { async, ComponentFixture, TestBed, tick } from '@angular/core/testing';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { NgWizardButtonsComponent } from './ng-wizard-buttons.component';
import { NgWizardService } from '../ng-wizard.service';
import { RouterTestingModule } from '@angular/router/testing';
import { NgWizardStepData } from '../ng-wizard-step/ng-wizard-step-data.interface';
import { Subject } from 'rxjs';
import { getDefaultWizardOptions } from '../ng-wizard.utils';

@Component({
  selector: 'dummy-component',
  template: `<div>dummy</div>`,
})
export class DummyComponent {
}

describe('NgWizardButtonsComponent', () => {
  let component: NgWizardButtonsComponent;
  let fixture: ComponentFixture<NgWizardButtonsComponent>;
  let element;

  let service: NgWizardService;
  const currentStepDataSubject = new Subject<NgWizardStepData>();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NgWizardButtonsComponent, DummyComponent],
      providers: [NgWizardService],
      imports: [RouterTestingModule.withRoutes([
        { path: 'extra_path', component: DummyComponent }
      ])],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgWizardButtonsComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement;

    service = TestBed.get(NgWizardService);
    spyOn(service, 'getCurrentStepDataAsObservable').and.returnValue(currentStepDataSubject.asObservable());
    spyOn(service, 'navigateToNextStep');
    spyOn(service, 'navigateToPreviousStep');
    service.wizardOptions = getDefaultWizardOptions();

    fixture.detectChanges();
  });

  it('should show no buttons if there is no current step data', () => {
    expect(element.querySelector('.ng-wizard-buttons')).toBeNull();
  });

  it('should show the previous and next button if the current step data has a defined previousStep and nextStep', () => {
    currentStepDataSubject.next({ previousStep: 'prev', nextStep: 'nxt', options: {} } as NgWizardStepData);
    fixture.detectChanges();
    expect(element.querySelector('.ng-wizard-buttons').children.length).toBe(2);
    expect(element.querySelectorAll('.ng-wizard-buttons button')[0].classList).toContain('ng-wizard-button-previous');
    expect(element.querySelectorAll('.ng-wizard-buttons button')[1].classList).toContain('ng-wizard-button-next');
  });

  it('should show only the previous button if the current step data has a defined previousStep but undefined nextStep', () => {
    currentStepDataSubject.next({ previousStep: 'prev', nextStep: undefined, options: {} } as NgWizardStepData);
    fixture.detectChanges();
    expect(element.querySelector('.ng-wizard-buttons').children.length).toBe(1);
    expect(element.querySelectorAll('.ng-wizard-buttons button')[0].classList).toContain('ng-wizard-button-previous');
  });

  it('should show only the next button if the current step data has a defined nextStep but undefined previousStep', () => {
    currentStepDataSubject.next({ previousStep: undefined, nextStep: 'next', options: {} } as NgWizardStepData);
    fixture.detectChanges();
    expect(element.querySelector('.ng-wizard-buttons').children.length).toBe(1);
    expect(element.querySelectorAll('.ng-wizard-buttons button')[0].classList).toContain('ng-wizard-button-next');
  });

  it('should show no buttons if the current step data has an undefined previousStep and nextStep', () => {
    currentStepDataSubject.next({
      previousStep: undefined,
      nextStep: undefined,
      options: {},
    } as NgWizardStepData);
    fixture.detectChanges();
    expect(element.querySelector('.ng-wizard-buttons').children.length).toBe(0);
  });

  it("should call the service's navigateToNextStep() method when the next button is clicked", () => {
    currentStepDataSubject.next({ previousStep: 'prev', nextStep: 'next', options: {} } as NgWizardStepData);
    fixture.detectChanges();
    element.querySelector('.ng-wizard-button-next').click();
    expect(service.navigateToNextStep).toHaveBeenCalled();
  });

  it("should call the service's navigateToPreviousStep() method when the previous button is clicked", () => {
    currentStepDataSubject.next({ previousStep: 'prev', nextStep: 'next', options: {} } as NgWizardStepData);
    fixture.detectChanges();
    element.querySelector('.ng-wizard-button-previous').click();
    expect(service.navigateToPreviousStep).toHaveBeenCalled();
  });

  it('should show the custom button labels when defined in the wizard options', () => {
    currentStepDataSubject.next({ previousStep: 'prev', nextStep: 'next', options: {} } as NgWizardStepData);
    component.wizardOptions = {
      ...getDefaultWizardOptions(),
      ...{
        buttons: {
          previous: { label: 'PREVIOUS' },
          next: { label: 'NEXT' },
        },
      },
    };
    fixture.detectChanges();
    expect(element.querySelector('.ng-wizard-button-previous .ng-wizard-button-label').innerHTML).toBe('PREVIOUS');
    expect(element.querySelector('.ng-wizard-button-next .ng-wizard-button-label').innerHTML).toBe('NEXT');
  });

  it('should show the custom button labels when defined in the wizard step options', () => {
    currentStepDataSubject.next({
      previousStep: 'prev',
      nextStep: 'next',
      options: {
        buttons: {
          previous: {
            label: '🔙 PREV',
          },
          next: {
            label: 'NXT ➡',
          },
        },
      },
    } as NgWizardStepData);
    component.wizardOptions = getDefaultWizardOptions();
    fixture.detectChanges();
    expect(element.querySelector('.ng-wizard-button-previous .ng-wizard-button-label').innerHTML).toBe('🔙 PREV');
    expect(element.querySelector('.ng-wizard-button-next .ng-wizard-button-label').innerHTML).toBe('NXT ➡');
  });

  it('should hide the previous and next buttons if defined in the wizard step options', () => {
    currentStepDataSubject.next({
      previousStep: 'prev',
      nextStep: 'next',
      options: {
        buttons: {
          previous: {
            hidden: true,
          },
          next: {
            hidden: true,
          },
        },
      },
    } as NgWizardStepData);
    component.wizardOptions = getDefaultWizardOptions();
    fixture.detectChanges();
    expect(element.querySelector('.ng-wizard-button-previous')).toBeNull();
    expect(element.querySelector('.ng-wizard-button-next')).toBeNull();
  });

  it('should show the extra button labels when defined in the wizard step options', () => {
    currentStepDataSubject.next({
      previousStep: 'prev',
      nextStep: 'next',
      options: {
        buttons: {
          extra: {
            label: 'EXTRA',
            path: '/extra_path',
          }
        },
      },
    } as NgWizardStepData);
    component.wizardOptions = getDefaultWizardOptions();
    fixture.detectChanges();
    expect(element.querySelector('.ng-wizard-button-extra .ng-wizard-button-label').innerHTML).toBe('EXTRA');
  });

  it('should go to the given path when the extra button is pressed', () => {
    const path = '/extra_path';
    currentStepDataSubject.next({
      previousStep: 'prev',
      nextStep: 'next',
      options: {
        buttons: {
          extra: {
            label: 'EXTRA',
            path,
          }
        },
      },
    } as NgWizardStepData);
    component.wizardOptions = getDefaultWizardOptions();
    const router = TestBed.get(Router);
    spyOn(router, 'navigate');
    fixture.detectChanges();
    const button = element.querySelector('.ng-wizard-button-extra');
    button.click();
    expect(router.navigate).toHaveBeenCalledWith([ path ], Object({ queryParamsHandling: 'merge' }));
  });

});
