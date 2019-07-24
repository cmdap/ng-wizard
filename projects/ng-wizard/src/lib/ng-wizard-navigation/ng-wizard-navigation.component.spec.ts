import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgWizardNavigationComponent } from './ng-wizard-navigation.component';
import { NgWizardService } from '../ng-wizard.service';
import { RouterTestingModule } from '@angular/router/testing';
import { NgWizardErrorType } from '../ng-wizard-error/ng-wizard-error-type.enum';
import { NgWizardStepData } from '../ng-wizard-step/ng-wizard-step-data.interface';
import { Observable } from 'rxjs';

const stepData: NgWizardStepData[] = [
  { order: 1, title: 'Step 1' } as NgWizardStepData,
  { order: 2, title: 'Step 2' } as NgWizardStepData,
  { order: 3, title: 'Step 3' } as NgWizardStepData,
  { order: 4, title: 'Step 4' } as NgWizardStepData,
  { order: 5, title: 'Step 5' } as NgWizardStepData,
];

const currentStepData: NgWizardStepData = { order: 3 } as NgWizardStepData;

describe('NgWizardNavigationComponent', () => {
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

    fixture.detectChanges();
  });

  it('should display all steps in the list of step data', () => {
    const listItems = element.querySelectorAll('.ng-wizard-navigation-list-item');
    expect(listItems.length).toBe(5);
    expect(listItems[0].querySelector('.ng-wizard-navigation-label').innerHTML).toEqual(` ${stepData[0].title} `);
    expect(listItems[1].querySelector('.ng-wizard-navigation-label').innerHTML).toEqual(` ${stepData[1].title} `);
    expect(listItems[2].querySelector('.ng-wizard-navigation-label').innerHTML).toEqual(` ${stepData[2].title} `);
    expect(listItems[3].querySelector('.ng-wizard-navigation-label').innerHTML).toEqual(` ${stepData[3].title} `);
    expect(listItems[4].querySelector('.ng-wizard-navigation-label').innerHTML).toEqual(` ${stepData[4].title} `);
  });

  it('should mark the steps before the current step as complete', () => {
    const listItems = element.querySelectorAll('.ng-wizard-navigation-list-item');
    expect(listItems[0].querySelector('i.material-icons').innerHTML).toEqual('done');
    expect(listItems[0].children[0].classList).toContain('ng-wizard-navigation-link');
    expect(listItems[1].querySelector('i.material-icons').innerHTML).toEqual('done');
    expect(listItems[1].children[0].classList).toContain('ng-wizard-navigation-link');
  });

  it('should mark the current step as in progress', () => {
    const listItems = element.querySelectorAll('.ng-wizard-navigation-list-item');
    expect(listItems[2].querySelector('i.material-icons').innerHTML).toEqual('create');
    expect(listItems[2].children[0].classList).toContain('ng-wizard-navigation-active');
  });

  it('should mark the steps after the current step as locked', () => {
    const listItems = element.querySelectorAll('.ng-wizard-navigation-list-item');
    expect(listItems[3].querySelector('i.material-icons').innerHTML).toEqual('lock');
    expect(listItems[3].children[0].classList).toContain('ng-wizard-navigation-disabled');
    expect(listItems[4].querySelector('i.material-icons').innerHTML).toEqual('lock');
    expect(listItems[4].children[0].classList).toContain('ng-wizard-navigation-disabled');
  });

  it('should call the service\'s navigateToStep method when a previous step is clicked', () => {
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
});
