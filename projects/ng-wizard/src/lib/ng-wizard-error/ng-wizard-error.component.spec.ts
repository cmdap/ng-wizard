import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgWizardErrorComponent } from './ng-wizard-error.component';
import { CommonModule } from '@angular/common';
import { NoChildRoutes, NoWizardRoute, NoWsInterface } from './ng-wizard.error';

describe('NgWizardErrorComponent', () => {
  let component: NgWizardErrorComponent;
  let fixture: ComponentFixture<NgWizardErrorComponent>;
  let element;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NgWizardErrorComponent],
      imports: [CommonModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgWizardErrorComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement;

    component.error = new NoWizardRoute('TestComponent');
    fixture.detectChanges();
  });

  it('should show nothing if there is no error', () => {
    component.error = undefined;
    fixture.detectChanges();
    expect(element.querySelector('.ng-wizard-error')).toBeNull();
  });

  it('should show the no wizard route error message when there is a NO_WIZARD_ROUTE error', () => {
    component.error = new NoWizardRoute('');
    fixture.detectChanges();
    expect(element.querySelector('.ng-wizard-error-message').children.length).toBe(1);
    expect(element.querySelector('.ng-wizard-error-message').children[0].classList).toContain('no-wizard-route');
  });

  it('should show the no child routes error message when there is a NO_CHILD_ROUTES error', () => {
    component.error = new NoChildRoutes('', '');
    fixture.detectChanges();
    expect(element.querySelector('.ng-wizard-error-message').children.length).toBe(1);
    expect(element.querySelector('.ng-wizard-error-message').children[0].classList).toContain('no-child-routes');
  });

  it('should show the no ws interface error message when there is a NO_WS_INTERFACE error', () => {
    component.error = new NoWsInterface('');
    fixture.detectChanges();
    expect(element.querySelector('.ng-wizard-error-message').children.length).toBe(1);
    expect(element.querySelector('.ng-wizard-error-message').children[0].classList).toContain('no-ws-interface');
  });
});
