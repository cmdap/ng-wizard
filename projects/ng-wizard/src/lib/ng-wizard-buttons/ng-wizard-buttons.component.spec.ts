import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgWizardButtonsComponent } from './ng-wizard-buttons.component';
import { NgWizardService } from '../ng-wizard.service';
import { RouterTestingModule } from '@angular/router/testing';
import { NgWizardStepData } from '../ng-wizard-step/ng-wizard-step-data.interface';
import { Subject } from 'rxjs';
import { getDefaultWizardOptions } from '../ng-wizard.utils';

describe('NgWizardButtonsComponent', () => {
  let component: NgWizardButtonsComponent;
  let fixture: ComponentFixture<NgWizardButtonsComponent>;
  let element;

  let service: NgWizardService;
  const currentStepDataSubject = new Subject<NgWizardStepData>();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NgWizardButtonsComponent],
      providers: [NgWizardService],
      imports: [RouterTestingModule],
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
    currentStepDataSubject.next({ previousStep: 'prev', nextStep: 'nxt' } as NgWizardStepData);
    fixture.detectChanges();
    expect(element.querySelector('.ng-wizard-buttons').children.length).toBe(2);
    expect(element.querySelectorAll('.ng-wizard-buttons button')[0].classList).toContain('ng-wizard-button-previous');
    expect(element.querySelectorAll('.ng-wizard-buttons button')[1].classList).toContain('ng-wizard-button-next');
  });

  it('should show only the previous button if the current step data has a defined previousStep but undefined nextStep', () => {
    currentStepDataSubject.next({ previousStep: 'prev', nextStep: undefined } as NgWizardStepData);
    fixture.detectChanges();
    expect(element.querySelector('.ng-wizard-buttons').children.length).toBe(1);
    expect(element.querySelectorAll('.ng-wizard-buttons button')[0].classList).toContain('ng-wizard-button-previous');
  });

  it('should show only the next button if the current step data has a defined nextStep but undefined previousStep', () => {
    currentStepDataSubject.next({ previousStep: undefined, nextStep: 'next' } as NgWizardStepData);
    fixture.detectChanges();
    expect(element.querySelector('.ng-wizard-buttons').children.length).toBe(1);
    expect(element.querySelectorAll('.ng-wizard-buttons button')[0].classList).toContain('ng-wizard-button-next');
  });

  it('should show no buttons if the current step data has an undefined previousStep and nextStep', () => {
    currentStepDataSubject.next({
      previousStep: undefined,
      nextStep: undefined,
    } as NgWizardStepData);
    fixture.detectChanges();
    expect(element.querySelector('.ng-wizard-buttons').children.length).toBe(0);
  });

  it("should call the service's navigateToNextStep() method when the next button is clicked", () => {
    currentStepDataSubject.next({ previousStep: 'prev', nextStep: 'next' } as NgWizardStepData);
    fixture.detectChanges();
    element.querySelector('.ng-wizard-button-next').click();
    expect(service.navigateToNextStep).toHaveBeenCalled();
  });

  it("should call the service's navigateToPreviousStep() method when the previous button is clicked", () => {
    currentStepDataSubject.next({ previousStep: 'prev', nextStep: 'next' } as NgWizardStepData);
    fixture.detectChanges();
    element.querySelector('.ng-wizard-button-previous').click();
    expect(service.navigateToPreviousStep).toHaveBeenCalled();
  });

  it('Should show the custom button labels when defined in the wizard options', () => {
    currentStepDataSubject.next({ previousStep: 'prev', nextStep: 'next' } as NgWizardStepData);
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
});
