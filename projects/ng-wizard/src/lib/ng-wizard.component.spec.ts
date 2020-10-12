import { async, ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';

import { NgWizardComponent } from './ng-wizard.component';
import { NgWizardErrorComponent } from './ng-wizard-error/ng-wizard-error.component';
import { NgWizardNavigationComponent } from './ng-wizard-navigation/ng-wizard-navigation.component';
import { NgWizardButtonsComponent } from './ng-wizard-buttons/ng-wizard-buttons.component';
import { NgWizardService } from './ng-wizard.service';
import { ComponentRef } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { NoWizardRoute, NoWsInterface } from './ng-wizard-error/ng-wizard.error';

describe('NgWizardComponent', () => {
  let component: NgWizardComponent;
  let fixture: ComponentFixture<NgWizardComponent>;

  let service: NgWizardService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        NgWizardComponent,
        NgWizardErrorComponent,
        NgWizardNavigationComponent,
        NgWizardButtonsComponent,
      ],
      imports: [RouterTestingModule],
      providers: [NgWizardService],
    }).compileComponents();
  }));

  beforeEach(() => {
    service = TestBed.inject(NgWizardService);
  });

  describe('no errors', () => {
    beforeEach(() => {
      spyOn(service, 'loadWizardRoutes');
      spyOn(service, 'registerActiveComponent');

      fixture = TestBed.createComponent(NgWizardComponent);
      component = fixture.componentInstance;

      fixture.detectChanges();
    });

    it('should call the service\'s loadWizardRoutes method on creation', () => {
      expect(service.loadWizardRoutes).toHaveBeenCalledWith(undefined);
    });

    it('should call the service\'s registerActiveComponent method when a child component gets displayed', fakeAsync(() => {
      component.onActivate({ success: true } as unknown as ComponentRef<any>);
      expect(service.registerActiveComponent).toHaveBeenCalledWith({ success: true });
    }));
  });

  describe('with errors', () => {
    beforeEach(() => {
      spyOn(service, 'loadWizardRoutes').and.callFake(() => {
        throw new NoWizardRoute('');
      });
      spyOn(service, 'registerActiveComponent').and.callFake(() => {
        throw new NoWsInterface('');
      });

      fixture = TestBed.createComponent(NgWizardComponent);
      component = fixture.componentInstance;

      fixture.detectChanges();
    });

    it('should catch the service\'s loadWizardRoutes error', () => {
      expect(service.loadWizardRoutes).toHaveBeenCalledWith(undefined);
      expect(component.error).toEqual(new NoWizardRoute(''));
    });

    it('should catch the service\'s registerActiveComponent error when a child component gets displayed', fakeAsync(() => {
      component.onActivate({ success: true } as unknown as ComponentRef<any>);
      expect(service.registerActiveComponent).toHaveBeenCalledWith({ success: true });
      expect(component.error).toEqual(new NoWsInterface(''));
    }));
  });
});
