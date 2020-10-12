import { async, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { NgWizardService } from './ng-wizard.service';
import { RouterTestingModule } from '@angular/router/testing';
import { NgWizardComponent } from './ng-wizard.component';
import { NgWizardModule } from './ng-wizard.module';
import { Component, ComponentRef } from '@angular/core';
import { Route, Router } from '@angular/router';
import { NgWizardStepData } from './ng-wizard-step/ng-wizard-step-data.interface';
import { NgWizardStep } from './ng-wizard-step/ng-wizard-step';
import { NoChildRoutes, NoWizardRoute, NoWsInterface } from './ng-wizard-error/ng-wizard.error';
import { Location } from '@angular/common';

@Component({
  template: 'Step 1 works!',
})
class Step1Component extends NgWizardStep {}

@Component({
  template: 'Step 2 works!',
})
class Step2Component extends NgWizardStep {}

@Component({
  template: 'Step 3 does not work!',
})
class Step3Component {}

@Component({
  template: 'Some other page',
})
class OtherComponent {}

@Component({
  template: 'Parent page',
})
class ParentComponent {}

describe('NgWizardService', () => {
  let service: NgWizardService;

  const ngWizardComponentName = 'NgWizardComponent';

  const wizardRoute: Route = {
    path: '',
    component: NgWizardComponent,
    children: [
      { path: 'step-1', component: Step1Component },
      { path: 'step-2', component: Step2Component },
      { path: 'step-3', component: Step3Component },
      { path: '**', redirectTo: 'step-1' },
    ],
    data: { name: ngWizardComponentName }
  };

  const stepData: NgWizardStepData[] = [
    {
      order: 1,
      componentName: 'Step1Component',
      path: 'step-1',
      previousStep: undefined,
      nextStep: 'step-2',
      isCurrent: false,
      options: { title: 'Step 1' },
    },
    {
      order: 2,
      componentName: 'Step2Component',
      path: 'step-2',
      previousStep: 'step-1',
      nextStep: 'step-3',
      isCurrent: false,
      options: { title: 'Step 2' },
    },
    {
      order: 3,
      componentName: 'Step3Component',
      path: 'step-3',
      previousStep: 'step-2',
      nextStep: undefined,
      isCurrent: false,
      options: { title: 'Step 3' },
    },
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Step1Component, Step2Component, Step3Component, OtherComponent],
      providers: [
        NgWizardService,
        {
          provide: Router,
          useValue: {
            config: [wizardRoute, { path: 'other', component: OtherComponent }],
            url: 'step-2',
            navigate: () => true,
          },
        },
      ],
      imports: [NgWizardModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    service = TestBed.inject(NgWizardService);
  });

  describe('loadWizardRoutes', () => {
    it('should get the route config for the NgWizardComponent and store it', () => {
      service.loadWizardRoutes(ngWizardComponentName);
      expect((service as any).wizardRoute).toEqual(wizardRoute);
    });

    it('should store the child routes as a list of NgWizardStepData', () => {
      service.loadWizardRoutes(ngWizardComponentName);
      expect((service as any).stepData).toEqual(stepData);
    });

    it('should emit a stepDataChange event for each added step', () => {
      spyOn((service as any).stepDataChanges, 'next');
      service.loadWizardRoutes(ngWizardComponentName);

      expect((service as any).stepDataChanges.next).toHaveBeenCalledTimes(3);
      expect((service as any).stepDataChanges.next).toHaveBeenCalledWith(stepData);
    });
  });

  describe('registerActiveComponent', () => {
    beforeEach(() => {
      service.loadWizardRoutes(ngWizardComponentName);
    });

    it('should store the current stepData and currentComponent', () => {
      const componentRef = (new Step2Component() as unknown) as ComponentRef<any>;
      service.registerActiveComponent(componentRef);

      expect((service as any).currentComponent).toBe(componentRef);
      expect((service as any).currentStepData).toEqual({
        ...stepData[1],
        isCurrent: true,
        componentRef: componentRef,
      });
    });

    it('should emit a stepDataChange event', () => {
      spyOn((service as any).stepDataChanges, 'next');
      const componentRef = (new Step2Component() as unknown) as ComponentRef<any>;
      service.registerActiveComponent(componentRef);

      expect((service as any).stepDataChanges.next).toHaveBeenCalled();
    });

    it('should set only the latest registered active step as current step', () => {
      (service as any).stepData[0].isCurrent = true;
      (service as any).stepData[1].isCurrent = false;
      (service as any).stepData[2].isCurrent = false;
      const component1Ref = (new Step2Component() as unknown) as ComponentRef<any>;

      service.registerActiveComponent(component1Ref);

      expect((service as any).stepData[0].isCurrent).toBe(false);
      expect((service as any).stepData[1].isCurrent).toBe(true);
      expect((service as any).stepData[2].isCurrent).toBe(false);
    });

    it('should throw a NO_WS_INTERFACE error if the activated step does not implement the NgWizardStep interface', () => {
      const component3Ref = (new Step3Component() as unknown) as ComponentRef<any>;
      expect(() => service.registerActiveComponent(component3Ref)).toThrow(new NoWsInterface('Step3Component'));
    });
  });

  describe('navigateToStep', () => {
    let router: Router;

    beforeEach(() => {
      router = TestBed.inject(Router);
      spyOn(router, 'navigate');

      service.loadWizardRoutes(ngWizardComponentName);
    });

    it("should call the current component's wsIsValid method", () => {
      const component2Ref = (new Step2Component() as unknown) as ComponentRef<any>;
      service.registerActiveComponent(component2Ref);

      spyOn((component2Ref as unknown) as NgWizardStep, 'wsIsValid');
      service.navigateToStep(stepData[2]);
      expect(((component2Ref as unknown) as NgWizardStep).wsIsValid).toHaveBeenCalled();
    });

    it("should call the current component's wsOnNext method if the order of the step is greater than the current step", () => {
      const component2Ref = (new Step2Component() as unknown) as ComponentRef<any>;
      service.registerActiveComponent(component2Ref);

      spyOn((component2Ref as unknown) as NgWizardStep, 'wsOnNext');
      service.navigateToStep(stepData[2]);
      expect(((component2Ref as unknown) as NgWizardStep).wsOnNext).toHaveBeenCalled();
    });

    it("should call the current component's wsOnPrevious method if the order of the step is less than the current step", () => {
      const component2Ref = (new Step2Component() as unknown) as ComponentRef<any>;
      service.registerActiveComponent(component2Ref);

      spyOn((component2Ref as unknown) as NgWizardStep, 'wsOnPrevious');
      service.navigateToStep(stepData[0]);
      expect(((component2Ref as unknown) as NgWizardStep).wsOnPrevious).toHaveBeenCalled();
    });

    it("should call the route's navigate method with the new path", () => {
      const component2Ref = (new Step2Component() as unknown) as ComponentRef<any>;
      service.registerActiveComponent(component2Ref);

      service.navigateToStep(stepData[0]);

      expect(router.navigate).toHaveBeenCalledWith([stepData[0].path], { queryParamsHandling: 'merge' });
    });

    it("should not call the route's navigate method if the wsOnNext method returns false", () => {
      const component2Ref = (new Step2Component() as unknown) as ComponentRef<any>;
      service.registerActiveComponent(component2Ref);

      spyOn((component2Ref as unknown) as NgWizardStep, 'wsOnNext').and.returnValue(false);
      service.navigateToStep(stepData[2]);

      expect(router.navigate).not.toHaveBeenCalled();
    });

    it("should not call the route's navigate method if the wsOnPrevious method returns false", () => {
      const component2Ref = (new Step2Component() as unknown) as ComponentRef<any>;
      service.registerActiveComponent(component2Ref);

      spyOn((component2Ref as unknown) as NgWizardStep, 'wsOnPrevious').and.returnValue(false);
      service.navigateToStep(stepData[0]);

      expect(router.navigate).not.toHaveBeenCalled();
    });
  });

  describe('navigateToNextStep', () => {
    beforeEach(() => {
      service.loadWizardRoutes(ngWizardComponentName);
    });

    it("should call the service's navigateToStep method with the next step's stepData", () => {
      const component2Ref = (new Step2Component() as unknown) as ComponentRef<any>;
      service.registerActiveComponent(component2Ref);

      spyOn(service, 'navigateToStep');
      service.navigateToNextStep();

      expect(service.navigateToStep).toHaveBeenCalledWith(stepData[2]);
    });
  });

  describe('navigateToNextStep', () => {
    beforeEach(() => {
      service.loadWizardRoutes(ngWizardComponentName);
    });

    it("should call the service's navigateToStep method with the previous step's stepData", () => {
      const component2Ref = (new Step2Component() as unknown) as ComponentRef<any>;
      service.registerActiveComponent(component2Ref);

      spyOn(service, 'navigateToStep');
      service.navigateToPreviousStep();

      expect(service.navigateToStep).toHaveBeenCalledWith(stepData[0]);
    });
  });
});

describe('NgWizardService without wizard route', () => {
  let service: NgWizardService;

  const ngWizardComponentName = 'NgWizardComponent';

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OtherComponent],
      providers: [NgWizardService],
      imports: [NgWizardModule, RouterTestingModule.withRoutes([{ path: 'other', component: OtherComponent }])],
    }).compileComponents();
  }));

  beforeEach(() => {
    service = TestBed.inject(NgWizardService);
  });

  describe('loadWizardRoutes', () => {
    it('should throw a NO_WIZARD_ROUTE error', () => {
      expect(() => service.loadWizardRoutes(ngWizardComponentName)).toThrow(new NoWizardRoute(ngWizardComponentName));
    });
  });
});

describe('NgWizardService without child routes', () => {
  let service: NgWizardService;

  const ngWizardComponentName = 'NgWizardComponent';

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OtherComponent],
      providers: [NgWizardService],
      imports: [NgWizardModule, RouterTestingModule.withRoutes(
        [{ path: '', component: NgWizardComponent, data: { name: ngWizardComponentName } }]
      )],
    }).compileComponents();
  }));

  beforeEach(() => {
    service = TestBed.inject(NgWizardService);
  });

  describe('loadWizardRoutes', () => {
    it('should throw a NO_WIZARD_ROUTE error', () => {
      expect(() => service.loadWizardRoutes(ngWizardComponentName)).toThrow(
        new NoChildRoutes(ngWizardComponentName, ''),
      );
    });
  });
});

describe('NgWizardService with the wizard component on a path', () => {
  let service: NgWizardService;

  const ngWizardComponentName = 'NgWizardComponent';

  const wizardRoute: Route = {
    path: 'wizard',
    component: NgWizardComponent,
    children: [
      { path: 'step-1', component: Step1Component },
      { path: 'step-2', component: Step2Component },
      { path: 'step-3', component: Step3Component },
      { path: '**', redirectTo: 'step-1' },
    ],
    data: { name: ngWizardComponentName }
  };

  const stepData: NgWizardStepData[] = [
    {
      order: 1,
      componentName: 'Step1Component',
      path: 'step-1',
      previousStep: undefined,
      nextStep: 'step-2',
      isCurrent: false,
      options: { title: 'Step 1' },
    },
    {
      order: 2,
      componentName: 'Step2Component',
      path: 'step-2',
      previousStep: 'step-1',
      nextStep: 'step-3',
      isCurrent: false,
      options: { title: 'Step 2' },
    },
    {
      order: 3,
      componentName: 'Step3Component',
      path: 'step-3',
      previousStep: 'step-2',
      nextStep: undefined,
      isCurrent: false,
      options: { title: 'Step 3' },
    },
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Step1Component, Step2Component, Step3Component],
      providers: [
        NgWizardService,
        { provide: Router, useValue: { config: [wizardRoute], url: 'wizard/step-1', navigate: () => true } },
      ],
      imports: [NgWizardModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    service = TestBed.inject(NgWizardService);
  });

  describe('navigateToStep', () => {
    let router: Router;

    beforeEach(() => {
      router = TestBed.inject(Router);
      spyOn(router, 'navigate');

      service.loadWizardRoutes(ngWizardComponentName);
    });

    it("should call the route's navigate method with the new path", () => {
      const component1Ref = (new Step1Component() as unknown) as ComponentRef<any>;
      service.registerActiveComponent(component1Ref);

      service.navigateToStep(stepData[1]);

      expect(router.navigate).toHaveBeenCalledWith([wizardRoute.path + '/' + stepData[1].path], { queryParamsHandling: 'merge' });
    });
  });
});

describe('NgWizardService with more than one wizard', () => {
  let service: NgWizardService;

  const wizardARoute: Route = {
    path: 'wizardA',
    component: NgWizardComponent,
    children: [
      { path: 'step-1a', component: Step1Component },
      { path: 'step-2a', component: Step2Component },
      { path: '**', redirectTo: 'step-1a' },
    ],
    data: { name: 'WizardA' },
  };

  const wizardBRoute: Route = {
    path: 'wizardB',
    component: NgWizardComponent,
    children: [
      { path: 'step-1b', component: Step1Component },
      { path: 'step-2b', component: Step2Component },
      { path: '**', redirectTo: 'step-1b' },
    ],
    data: { name: 'WizardB' }
  };


  const wizardAstepData: NgWizardStepData[] = [
    {
      order: 1,
      componentName: 'Step1Component',
      path: 'step-1a',
      previousStep: undefined,
      nextStep: 'step-2a',
      isCurrent: false,
      options: { title: 'Step 1a' },
    },
    {
      order: 2,
      componentName: 'Step2Component',
      path: 'step-2a',
      previousStep: 'step-1a',
      nextStep: undefined,
      isCurrent: false,
      options: { title: 'Step 2a' },
    }
  ];

  const wizardBstepData: NgWizardStepData[] = [
    {
      order: 1,
      componentName: 'Step1Component',
      path: 'step-1b',
      previousStep: undefined,
      nextStep: 'step-2b',
      isCurrent: false,
      options: { title: 'Step 1b' },
    },
    {
      order: 2,
      componentName: 'Step2Component',
      path: 'step-2b',
      previousStep: 'step-1b',
      nextStep: undefined,
      isCurrent: false,
      options: { title: 'Step 2b' },
    },
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Step1Component, Step2Component],
      providers: [
        NgWizardService,
        {
          provide: Router,
          useValue: {
            config: [wizardARoute, wizardBRoute],
            url: 'wizardA',
            navigate: () => true,
          },
        },
      ],
      imports: [
        NgWizardModule,
      ],
    });

    service = TestBed.inject(NgWizardService);
  });

  describe('loadWizardRoutes', () => {
    describe('for wizard A', () => {
      it('should store the child routes as a list of NgWizardStepData', () => {
        service.loadWizardRoutes(wizardARoute.data.name);
        expect((service as any).stepData).toEqual(wizardAstepData);
      });

      it('should get the route config for the NgWizardComponent and store it', () => {
        service.loadWizardRoutes(wizardARoute.data.name);
        expect((service as any).wizardRoute).toEqual(wizardARoute);
      });

      it('should emit a stepDataChange event for each added step', () => {
        spyOn((service as any).stepDataChanges, 'next');
        service.loadWizardRoutes(wizardARoute.data.name);
        expect((service as any).stepDataChanges.next).toHaveBeenCalledWith(wizardAstepData);
        expect((service as any).stepDataChanges.next).toHaveBeenCalledTimes(2);
      });
    });

    describe('for wizard B', () => {
      it('should get the route config for the NgWizardComponent and store it', () => {
        service.loadWizardRoutes(wizardBRoute.data.name);
        expect((service as any).wizardRoute).toEqual(wizardBRoute);
      });

      it('should store the child routes as a list of NgWizardStepData', () => {
        service.loadWizardRoutes(wizardBRoute.data.name);
        expect((service as any).stepData).toEqual(wizardBstepData);
      });

      it('should emit a stepDataChange event for each added step', () => {
        spyOn((service as any).stepDataChanges, 'next');
        service.loadWizardRoutes(wizardBRoute.data.name);

        expect((service as any).stepDataChanges.next).toHaveBeenCalledTimes(2);
        expect((service as any).stepDataChanges.next).toHaveBeenCalledWith(wizardBstepData);
      });
    });

    describe('for unknown wizard', () => {
      it('should throw a NO_WIZARD_ROUTE error', () => {
        expect(() => service.loadWizardRoutes('unknown'))
          .toThrow(new NoWizardRoute('unknown'));
      });
    });
  });



});

describe('NgWizardService with the wizard component on a nested path', () => {
  let service: NgWizardService;

  const ngWizardComponentName = 'NgWizardComponent';

  const wizardRoute: Route = {
    path: 'wizard',
    component: NgWizardComponent,
    children: [
      { path: 'step-1', component: Step1Component },
      { path: 'step-2', component: Step2Component },
      { path: '**', redirectTo: 'step-1' },
    ],
    data: { name: ngWizardComponentName }
  };

  const stepData: NgWizardStepData[] = [
    {
      order: 1,
      componentName: 'Step1Component',
      path: 'step-1',
      previousStep: undefined,
      nextStep: 'step-2',
      isCurrent: false,
      options: { title: 'Step 1' },
    },
    {
      order: 2,
      componentName: 'Step2Component',
      path: 'step-2',
      previousStep: 'step-1',
      nextStep: undefined,
      isCurrent: false,
      options: { title: 'Step 2' },
    }
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Step1Component, Step2Component, ParentComponent],
      providers: [
        NgWizardService,
        {
          provide: Router,
          useValue: {
            config: [{ path: 'parent', component: ParentComponent, children: [wizardRoute]}],
            url: 'parent/wizard',
            navigate: () => true,
          },
        },
      ],
      imports: [
        NgWizardModule,
      ],
    });

    service = TestBed.inject(NgWizardService);
  });

  describe('loadWizardRoutes', () => {
    it('should store the child routes as a list of NgWizardStepData', () => {
      service.loadWizardRoutes(ngWizardComponentName);
      expect((service as any).stepData).toEqual(stepData);
    });

    it('should get the route config for the NgWizardComponent and store it', () => {
      service.loadWizardRoutes(ngWizardComponentName);
      expect((service as any).wizardRoute).toEqual(wizardRoute);
    });

    it('should emit a stepDataChange event for each added step', () => {
      spyOn((service as any).stepDataChanges, 'next');
      service.loadWizardRoutes(ngWizardComponentName);
      expect((service as any).stepDataChanges.next).toHaveBeenCalledWith(stepData);
      expect((service as any).stepDataChanges.next).toHaveBeenCalledTimes(2);
    });
  });
});

describe('NgWizardService with the wizard component on a dynamic path', () => {
  let service: NgWizardService;
  let router: Router;
  let location: Location;

  const ngWizardComponentName = 'NgWizardComponent';

  const wizardRoute: Route = {
    path: 'resource/:id/wizard',
    component: NgWizardComponent,
    children: [
      { path: 'step-1', component: Step1Component },
      { path: 'step-2', component: Step2Component },
      { path: '**', redirectTo: 'step-1' },
    ],
    data: { name: ngWizardComponentName }
  };

  const stepData: NgWizardStepData[] = [
    {
      order: 1,
      componentName: 'Step1Component',
      path: 'step-1',
      previousStep: undefined,
      nextStep: 'step-2',
      isCurrent: false,
      options: { title: 'Step 1' },
    },
    {
      order: 2,
      componentName: 'Step2Component',
      path: 'step-2',
      previousStep: 'step-1',
      nextStep: undefined,
      isCurrent: false,
      options: { title: 'Step 2' },
    }
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Step1Component, Step2Component],
      providers: [NgWizardService],
      imports: [
        NgWizardModule,
        RouterTestingModule.withRoutes([wizardRoute])
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    service = TestBed.inject(NgWizardService);
    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
    router.initialNavigation();
  });

  describe('navigateToStep', () => {
    it("should call the route's navigate method with the new path", fakeAsync(() => {
      router.navigate(['resource/123/wizard']);
      tick();
      service.loadWizardRoutes(ngWizardComponentName);
      const component1Ref = (new Step1Component() as unknown) as ComponentRef<any>;
      service.registerActiveComponent(component1Ref);
      service.navigateToStep(stepData[1]);
      tick();
      expect(location.path()).toBe('/resource/123/wizard/step-2');
    }));
  });
});
