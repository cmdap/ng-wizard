import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgWizardNavigationComponent } from './ng-wizard-navigation.component';
import { NgWizardService } from '../ng-wizard.service';
import { RouterTestingModule } from '@angular/router/testing';
import { NgWizardStepData } from '../ng-wizard-step/ng-wizard-step-data.interface';
import { Observable } from 'rxjs';
import { getDefaultWizardOptions } from '../ng-wizard.utils';

describe('NgWizardNavigationComponent', () => {
  const stepData: NgWizardStepData[] = [
    { order: 1, options: { title: 'Step 1' } } as NgWizardStepData,
    { order: 2, options: { title: 'Step 2' } } as NgWizardStepData,
    { order: 3, options: { title: 'Step 3' } } as NgWizardStepData,
    { order: 4, options: { title: 'Step 4' } } as NgWizardStepData,
    { order: 5, options: { title: 'Step 5' } } as NgWizardStepData,
  ];

  const currentStepData: NgWizardStepData = { order: 3, options: {} } as NgWizardStepData;

  let component: NgWizardNavigationComponent;
  let fixture: ComponentFixture<NgWizardNavigationComponent>;
  let element;

  let service: NgWizardService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NgWizardNavigationComponent],
      providers: [NgWizardService],
      imports: [RouterTestingModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgWizardNavigationComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement;

    service = TestBed.get(NgWizardService);
    spyOn(service, 'getStepDataChangesAsObservable').and.returnValue(
      new Observable((observer) => {
        observer.next(stepData);
      }),
    );
    spyOn(service, 'getCurrentStepDataAsObservable').and.returnValue(
      new Observable((observer) => {
        observer.next(currentStepData);
      }),
    );
    spyOn(service, 'navigateToStep');
    service.wizardOptions = getDefaultWizardOptions();

    fixture.detectChanges();
  });

  it('should display all steps in the list of step data', () => {
    const listItems = element.querySelectorAll('.ng-wizard-navigation-list-item');
    expect(listItems.length).toBe(5);
    expect(listItems[0].querySelector('.ng-wizard-navigation-label').innerHTML).toEqual(
      ` ${stepData[0].options.title} `,
    );
    expect(listItems[1].querySelector('.ng-wizard-navigation-label').innerHTML).toEqual(
      ` ${stepData[1].options.title} `,
    );
    expect(listItems[2].querySelector('.ng-wizard-navigation-label').innerHTML).toEqual(
      ` ${stepData[2].options.title} `,
    );
    expect(listItems[3].querySelector('.ng-wizard-navigation-label').innerHTML).toEqual(
      ` ${stepData[3].options.title} `,
    );
    expect(listItems[4].querySelector('.ng-wizard-navigation-label').innerHTML).toEqual(
      ` ${stepData[4].options.title} `,
    );
  });

  it('should mark the steps before the current step as complete', () => {
    const listItems = element.querySelectorAll('.ng-wizard-navigation-list-item');
    expect(listItems[0].querySelector('i.ng-wizard-icon').innerHTML).toEqual('done');
    expect(listItems[0].children[0].classList).toContain('ng-wizard-navigation-link');
    expect(listItems[1].querySelector('i.ng-wizard-icon').innerHTML).toEqual('done');
    expect(listItems[1].children[0].classList).toContain('ng-wizard-navigation-link');
  });

  it('should mark the current step as in progress', () => {
    const listItems = element.querySelectorAll('.ng-wizard-navigation-list-item');
    expect(listItems[2].querySelector('i.ng-wizard-icon').innerHTML).toEqual('create');
    expect(listItems[2].children[0].classList).toContain('ng-wizard-navigation-active');
  });

  it('should mark the steps after the current step as locked', () => {
    const listItems = element.querySelectorAll('.ng-wizard-navigation-list-item');
    expect(listItems[3].querySelector('i.ng-wizard-icon').innerHTML).toEqual('lock');
    expect(listItems[3].children[0].classList).toContain('ng-wizard-navigation-disabled');
    expect(listItems[4].querySelector('i.ng-wizard-icon').innerHTML).toEqual('lock');
    expect(listItems[4].children[0].classList).toContain('ng-wizard-navigation-disabled');
  });

  it("should call the service's navigateToStep method when a previous step is clicked", () => {
    element.querySelectorAll('.ng-wizard-navigation-link')[0].click();
    expect(service.navigateToStep).toHaveBeenCalledWith(stepData[0]);
    element.querySelectorAll('.ng-wizard-navigation-link')[1].click();
    expect(service.navigateToStep).toHaveBeenCalledWith(stepData[1]);
  });

  it('should do nothing when the current step is clicked', () => {
    element.querySelector('.ng-wizard-navigation-active').click();
    expect(service.navigateToStep).not.toHaveBeenCalled();
  });

  it('should do nothing when a locked step is clicked', () => {
    element.querySelectorAll('.ng-wizard-navigation-disabled')[0].click();
    element.querySelectorAll('.ng-wizard-navigation-disabled')[1].click();
    expect(service.navigateToStep).not.toHaveBeenCalled();
  });

  it('should show the custom icons if defined in the wizard options', () => {
    component.wizardOptions = {
      ...getDefaultWizardOptions(),
      ...{ navBar: { icons: { previous: 'P', current: 'C', next: 'N' } } },
    };
    fixture.detectChanges();
    expect(element.querySelectorAll('.ng-wizard-navigation-link span')[0].innerHTML).toBe('P');
    expect(element.querySelectorAll('.ng-wizard-navigation-active span')[0].innerHTML).toBe('C');
    expect(element.querySelectorAll('.ng-wizard-navigation-disabled span')[0].innerHTML).toBe('N');
  });
});

describe('NgWizardNavigationComponent with custom step icons and disabled navigation', () => {
  const stepData: NgWizardStepData[] = [
    {
      order: 1,
      options: { title: 'Step 1', icon: '<i class="material-icons ng-wizard-icon">cake</i>' },
    } as NgWizardStepData,
    {
      order: 2,
      options: { title: 'Step 2', icon: '<i class="material-icons ng-wizard-icon">star</i>' },
    } as NgWizardStepData,
    {
      order: 3,
      options: { title: 'Step 3', icon: '<i class="material-icons ng-wizard-icon">pool</i>' },
    } as NgWizardStepData,
  ];

  const currentStepData: NgWizardStepData = { order: 2, options: { disableNavigation: true } } as NgWizardStepData;

  let element;
  let service;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NgWizardNavigationComponent],
      providers: [NgWizardService],
      imports: [RouterTestingModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    const fixture = TestBed.createComponent(NgWizardNavigationComponent);
    element = fixture.nativeElement;

    service = TestBed.get(NgWizardService);
    spyOn(service, 'getStepDataChangesAsObservable').and.returnValue(
      new Observable((observer) => {
        observer.next(stepData);
      }),
    );
    spyOn(service, 'getCurrentStepDataAsObservable').and.returnValue(
      new Observable((observer) => {
        observer.next(currentStepData);
      }),
    );
    spyOn(service, 'navigateToStep');
    service.wizardOptions = getDefaultWizardOptions();

    fixture.detectChanges();
  });

  it("should show the custom icon if defined in the wizard step's options", () => {
    const listItems = element.querySelectorAll('.ng-wizard-navigation-list-item');
    expect(listItems[0].querySelector('.ng-wizard-icon').innerHTML).toEqual('cake');
    expect(listItems[1].querySelector('.ng-wizard-icon').innerHTML).toEqual('star');
    expect(listItems[2].querySelector('.ng-wizard-icon').innerHTML).toEqual('pool');
  });

  it("should disable the navigation if defined in the wizard step's options", () => {
    const listItems = element.querySelectorAll('.ng-wizard-navigation-list-item');
    expect(listItems[0].children[0].classList).toContain('ng-wizard-navigation-disabled');
    listItems[0].children[0].click();
    expect(service.navigateToStep).not.toHaveBeenCalled();
  });
});
