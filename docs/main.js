(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./projects/ng-wizard/src/lib/ng-wizard-buttons/ng-wizard-buttons.component.html":
/*!***************************************************************************************!*\
  !*** ./projects/ng-wizard/src/lib/ng-wizard-buttons/ng-wizard-buttons.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ng-wizard-buttons-container\">\r\n  <div *ngIf=\"currentStepData$ | async as currentStepData\" class=\"ng-wizard-buttons\">\r\n    <button *ngIf=\"currentStepData.previousStep\"\r\n            (click)=\"goToPreviousStep()\"\r\n            class=\"ng-wizard-button-previous\">\r\n      <span [innerHTML]=\"wizardOptions.buttons.previous.label\" class=\"ng-wizard-button-label\"></span>\r\n    </button>\r\n    <button *ngIf=\"currentStepData.nextStep\"\r\n            (click)=\"goToNextStep()\"\r\n            class=\"ng-wizard-button-next\">\r\n      <span [innerHTML]=\"wizardOptions.buttons.next.label\" class=\"ng-wizard-button-label\"></span>\r\n    </button>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./projects/ng-wizard/src/lib/ng-wizard-buttons/ng-wizard-buttons.component.scss":
/*!***************************************************************************************!*\
  !*** ./projects/ng-wizard/src/lib/ng-wizard-buttons/ng-wizard-buttons.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div.ng-wizard-buttons-container {\n  margin-top: 25px; }\n  div.ng-wizard-buttons-container div.ng-wizard-buttons {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-areas: \"btn-previous btn-next\"; }\n  div.ng-wizard-buttons-container div.ng-wizard-buttons button {\n      width: 150px;\n      height: 35px;\n      background-color: #F0EFE8;\n      border: solid 1px #dad7c5;\n      border-radius: 5px;\n      cursor: pointer;\n      outline: none; }\n  div.ng-wizard-buttons-container div.ng-wizard-buttons button.ng-wizard-button-previous {\n        grid-area: btn-previous;\n        justify-self: start; }\n  div.ng-wizard-buttons-container div.ng-wizard-buttons button.ng-wizard-button-next {\n        grid-area: btn-next;\n        justify-self: end; }\n  div.ng-wizard-buttons-container div.ng-wizard-buttons button .ng-wizard-button-label {\n        position: relative;\n        top: -5px; }\n  div.ng-wizard-buttons-container div.ng-wizard-buttons button .ng-wizard-button-label i {\n          position: relative;\n          top: 7px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL25nLXdpemFyZC9zcmMvbGliL25nLXdpemFyZC1idXR0b25zL0M6XFxkZXZlbnZcXG1lYW5cXG5nLXdpemFyZC9wcm9qZWN0c1xcbmctd2l6YXJkXFxzcmNcXGxpYlxcbmctd2l6YXJkLWJ1dHRvbnNcXG5nLXdpemFyZC1idXR0b25zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWdCLEVBcUNqQjtFQXRDRDtJQUlJLGNBQWE7SUFDYiwrQkFBOEI7SUFDOUIsNkNBQTRDLEVBK0I3QztFQXJDSDtNQVNNLGFBQVk7TUFDWixhQUFZO01BQ1osMEJBQXlCO01BQ3pCLDBCQUFxQztNQUNyQyxtQkFBa0I7TUFDbEIsZ0JBQWU7TUFDZixjQUFhLEVBcUJkO0VBcENMO1FBa0JRLHdCQUF1QjtRQUN2QixvQkFBbUIsRUFDcEI7RUFwQlA7UUF1QlEsb0JBQW1CO1FBQ25CLGtCQUFpQixFQUNsQjtFQXpCUDtRQTRCUSxtQkFBa0I7UUFDbEIsVUFBUyxFQU1WO0VBbkNQO1VBZ0NVLG1CQUFrQjtVQUNsQixTQUFRLEVBQ1QiLCJmaWxlIjoicHJvamVjdHMvbmctd2l6YXJkL3NyYy9saWIvbmctd2l6YXJkLWJ1dHRvbnMvbmctd2l6YXJkLWJ1dHRvbnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYubmctd2l6YXJkLWJ1dHRvbnMtY29udGFpbmVyIHtcclxuICBtYXJnaW4tdG9wOiAyNXB4O1xyXG5cclxuICBkaXYubmctd2l6YXJkLWJ1dHRvbnMge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcclxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwiYnRuLXByZXZpb3VzIGJ0bi1uZXh0XCI7XHJcblxyXG4gICAgYnV0dG9uIHtcclxuICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGMEVGRTg7XHJcbiAgICAgIGJvcmRlcjogc29saWQgMXB4IHJnYmEoMjE4LDIxNSwxOTcsMSk7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICBvdXRsaW5lOiBub25lO1xyXG5cclxuICAgICAgJi5uZy13aXphcmQtYnV0dG9uLXByZXZpb3VzIHtcclxuICAgICAgICBncmlkLWFyZWE6IGJ0bi1wcmV2aW91cztcclxuICAgICAgICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmLm5nLXdpemFyZC1idXR0b24tbmV4dCB7XHJcbiAgICAgICAgZ3JpZC1hcmVhOiBidG4tbmV4dDtcclxuICAgICAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLm5nLXdpemFyZC1idXR0b24tbGFiZWwge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB0b3A6IC01cHg7XHJcblxyXG4gICAgICAgIGkge1xyXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgdG9wOiA3cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./projects/ng-wizard/src/lib/ng-wizard-buttons/ng-wizard-buttons.component.ts":
/*!*************************************************************************************!*\
  !*** ./projects/ng-wizard/src/lib/ng-wizard-buttons/ng-wizard-buttons.component.ts ***!
  \*************************************************************************************/
/*! exports provided: NgWizardButtonsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgWizardButtonsComponent", function() { return NgWizardButtonsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_wizard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ng-wizard.service */ "./projects/ng-wizard/src/lib/ng-wizard.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NgWizardButtonsComponent = /** @class */ (function () {
    function NgWizardButtonsComponent(service) {
        this.service = service;
    }
    NgWizardButtonsComponent.prototype.ngOnInit = function () {
        this.currentStepData$ = this.service.getCurrentStepDataAsObservable();
        this.wizardOptions = this.service.wizardOptions;
    };
    NgWizardButtonsComponent.prototype.goToNextStep = function () {
        this.service.navigateToNextStep();
    };
    NgWizardButtonsComponent.prototype.goToPreviousStep = function () {
        this.service.navigateToPreviousStep();
    };
    NgWizardButtonsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ng-wizard-buttons',
            template: __webpack_require__(/*! ./ng-wizard-buttons.component.html */ "./projects/ng-wizard/src/lib/ng-wizard-buttons/ng-wizard-buttons.component.html"),
            styles: [__webpack_require__(/*! ./ng-wizard-buttons.component.scss */ "./projects/ng-wizard/src/lib/ng-wizard-buttons/ng-wizard-buttons.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        }),
        __metadata("design:paramtypes", [_ng_wizard_service__WEBPACK_IMPORTED_MODULE_1__["NgWizardService"]])
    ], NgWizardButtonsComponent);
    return NgWizardButtonsComponent;
}());



/***/ }),

/***/ "./projects/ng-wizard/src/lib/ng-wizard-error/ng-wizard-error-type.enum.ts":
/*!*********************************************************************************!*\
  !*** ./projects/ng-wizard/src/lib/ng-wizard-error/ng-wizard-error-type.enum.ts ***!
  \*********************************************************************************/
/*! exports provided: NgWizardErrorType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgWizardErrorType", function() { return NgWizardErrorType; });
// TODO: evaluate if this is useful
var NgWizardErrorType;
(function (NgWizardErrorType) {
    NgWizardErrorType[NgWizardErrorType["NO_WIZARD_ROUTE"] = 0] = "NO_WIZARD_ROUTE";
    NgWizardErrorType[NgWizardErrorType["NO_CHILD_ROUTES"] = 1] = "NO_CHILD_ROUTES";
    NgWizardErrorType[NgWizardErrorType["NO_WS_INTERFACE"] = 2] = "NO_WS_INTERFACE";
})(NgWizardErrorType || (NgWizardErrorType = {}));


/***/ }),

/***/ "./projects/ng-wizard/src/lib/ng-wizard-error/ng-wizard-error.component.html":
/*!***********************************************************************************!*\
  !*** ./projects/ng-wizard/src/lib/ng-wizard-error/ng-wizard-error.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"error\" class=\"ng-wizard-error\">\r\n  <i class=\"material-icons ng-wizard-error-icon\">error_outline</i>\r\n  <div [ngSwitch]=\"error.type\" class=\"ng-wizard-error-message\">\r\n\r\n    <!-- NO_WIZARD_ROUTE error -->\r\n\r\n    <span *ngSwitchCase=\"NgWizardErrorType.NO_WIZARD_ROUTE\" class=\"no-wizard-route\">\r\n      No route configuration for the {{ error.wizardComponentName }} found.<br/>\r\n      Add a route for the {{ error.wizardComponentName }} to your AppRoutingModule.<br/>\r\n      <pre>\r\nconst routes: Routes = [\r\n    &#123; path: '', component: {{ error.wizardComponentName }} &#125;,\r\n];\r\n\r\n@NgModule(&#123;\r\n  imports: [RouterModule.forRoot(routes)],\r\n  exports: [RouterModule]\r\n&#125;)\r\nexport class AppRoutingModule &#123; &#125;</pre>\r\n    </span>\r\n\r\n    <!-- NO_CHILD_ROUTES error -->\r\n\r\n    <span *ngSwitchCase=\"NgWizardErrorType.NO_CHILD_ROUTES\" class=\"no-child-routes\">\r\n      No child routes for the {{ error.wizardComponentName }} found.<br/>\r\n      Add at least one child route for the {{ error.wizardComponentName }} to your AppRoutingModule.<br/>\r\n      <pre>\r\n&#123; path: '{{ error.wizardPath }}', component: {{ error.wizardComponentName }}, children: [\r\n    &#123; path: 'step1', component: Step1Component &#125;,\r\n    &#123; path: '**', redirectTo: 'step1' &#125;,\r\n] &#125;,</pre>\r\n    </span>\r\n\r\n    <!-- NO_WS_INTERFACE error -->\r\n\r\n    <span *ngSwitchCase=\"NgWizardErrorType.NO_WS_INTERFACE\" class=\"no-ws-interface\">\r\n      The {{ error.stepComponentName}} does not extend the NgWizardStep class or implement the\r\n      NgWizardStepInterface.<br/>\r\n      Extend the NgWizardStep class in your {{ error.stepComponentName}} or implement the\r\n      NgWizardStepInterface.<br/>\r\n      <pre>\r\n@NgComponent(...)\r\nexport class {{ error.stepComponentName }} extends NgWizardStep &#123;\r\n    constructor() &#123;\r\n        super();\r\n    &#125;\r\n&#125;</pre><br/>\r\n      or<br/>\r\n      <pre>\r\n@NgComponent(...)\r\nexport class {{ error.stepComponentName }} implements NgWizardStepInterface &#123;\r\n    wsIsValid() &#123;\r\n        return true;\r\n    &#125;\r\n    wsOnNext() &#123; &#125;\r\n    wsOnPrevious() &#123; &#125;\r\n&#125;</pre>\r\n    </span>\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./projects/ng-wizard/src/lib/ng-wizard-error/ng-wizard-error.component.scss":
/*!***********************************************************************************!*\
  !*** ./projects/ng-wizard/src/lib/ng-wizard-error/ng-wizard-error.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@font-face {\n  font-family: \"Material Icons\";\n  font-style: normal;\n  font-weight: 400;\n  src: url('MaterialIcons-Regular.eot');\n  /* For IE6-8 */\n  src: local(\"Material Icons\"), local(\"MaterialIcons-Regular\"), url('MaterialIcons-Regular.woff2') format(\"woff2\"), url('MaterialIcons-Regular.woff') format(\"woff\"), url('MaterialIcons-Regular.ttf') format(\"truetype\"); }\n\n.material-icons {\n  font-family: \"Material Icons\";\n  font-weight: normal;\n  font-style: normal;\n  font-size: 24px;\n  display: inline-block;\n  line-height: 1;\n  text-transform: none;\n  letter-spacing: normal;\n  word-wrap: normal;\n  white-space: nowrap;\n  direction: ltr;\n  /* Support for all WebKit browsers. */\n  -webkit-font-smoothing: antialiased;\n  /* Support for Safari and Chrome. */\n  text-rendering: optimizeLegibility;\n  /* Support for Firefox. */\n  -moz-osx-font-smoothing: grayscale;\n  /* Support for IE. */\n  -webkit-font-feature-settings: 'liga';\n          font-feature-settings: 'liga'; }\n\n.ng-wizard-error {\n  display: grid;\n  grid-template-columns: 35px auto;\n  grid-column-gap: 15px;\n  border: solid 1px #D71117;\n  border-radius: 5px;\n  color: #D71117;\n  padding: 10px 10px 0 10px;\n  margin-top: 10px; }\n\n.ng-wizard-error .ng-wizard-error-icon {\n    font-size: 35px; }\n\n.ng-wizard-error .ng-wizard-error-message pre {\n    display: inline-block;\n    border-radius: 3px;\n    background-color: rgba(218, 215, 197, 0.4);\n    color: #4D4D4D;\n    padding: 15px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL25nLXdpemFyZC9zcmMvbGliL25nLXdpemFyZC1lcnJvci9DOlxcZGV2ZW52XFxtZWFuXFxuZy13aXphcmQvbm9kZV9tb2R1bGVzXFxtYXRlcmlhbC1pY29uc1xcaWNvbmZvbnRcXG1hdGVyaWFsLWljb25zLnNjc3MiLCJwcm9qZWN0cy9uZy13aXphcmQvc3JjL2xpYi9uZy13aXphcmQtZXJyb3IvQzpcXGRldmVudlxcbWVhblxcbmctd2l6YXJkL25vZGVfbW9kdWxlc1xcbWF0ZXJpYWwtaWNvbnNcXGljb25mb250XFx2YXJpYWJsZXMuc2NzcyIsInByb2plY3RzL25nLXdpemFyZC9zcmMvbGliL25nLXdpemFyZC1lcnJvci9DOlxcZGV2ZW52XFxtZWFuXFxuZy13aXphcmQvbm9kZV9tb2R1bGVzXFxtYXRlcmlhbC1pY29uc1xcaWNvbmZvbnRcXG1peGlucy5zY3NzIiwicHJvamVjdHMvbmctd2l6YXJkL3NyYy9saWIvbmctd2l6YXJkLWVycm9yL0M6XFxkZXZlbnZcXG1lYW5cXG5nLXdpemFyZC9wcm9qZWN0c1xcbmctd2l6YXJkXFxzcmNcXGxpYlxcbmctd2l6YXJkLWVycm9yXFxuZy13aXphcmQtZXJyb3IuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSw4QkNDMkM7RURBM0MsbUJBQWtCO0VBQ2xCLGlCQUFnQjtFQUNoQixzQ0FBNEM7RUFBRSxlQUFlO0VBQzdELHdOQUc0RCxFQUFBOztBQUc5RDtFRUlFLDhCRGIyQztFQ2MzQyxvQkFBbUI7RUFDbkIsbUJBQWtCO0VBQ2xCLGdCRGpCNkI7RUNrQjdCLHNCQUFxQjtFQUNyQixlQUFjO0VBQ2QscUJBQW9CO0VBQ3BCLHVCQUFzQjtFQUN0QixrQkFBaUI7RUFDakIsb0JBQW1CO0VBQ25CLGVBQWM7RUFFZCxzQ0FBc0M7RUFDdEMsb0NBQW1DO0VBQ25DLG9DQUFvQztFQUNwQyxtQ0FBa0M7RUFFbEMsMEJBQTBCO0VBQzFCLG1DQUFrQztFQUVsQyxxQkFBcUI7RUFDckIsc0NBQTZCO1VBQTdCLDhCQUE2QixFRnZCOUI7O0FHWEQ7RUFDRSxjQUFhO0VBQ2IsaUNBQWdDO0VBQ2hDLHNCQUFxQjtFQUVyQiwwQkFQaUI7RUFRakIsbUJBQWtCO0VBRWxCLGVBVmlCO0VBV2pCLDBCQUF5QjtFQUN6QixpQkFBZ0IsRUFhakI7O0FBdkJEO0lBYUksZ0JBQWUsRUFDaEI7O0FBZEg7SUFpQkksc0JBQXFCO0lBQ3JCLG1CQUFrQjtJQUNsQiwyQ0FBc0M7SUFDdEMsZUFBYztJQUNkLGNBQWEsRUFDZCIsImZpbGUiOiJwcm9qZWN0cy9uZy13aXphcmQvc3JjL2xpYi9uZy13aXphcmQtZXJyb3Ivbmctd2l6YXJkLWVycm9yLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAndmFyaWFibGVzJztcbkBpbXBvcnQgJ21peGlucyc7XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJG1hdGVyaWFsLWljb25zLWZvbnQtZmFtaWx5O1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHNyYzogdXJsKCcjeyRtYXRlcmlhbC1pY29ucy1mb250LWZpbGV9LmVvdCcpOyAvKiBGb3IgSUU2LTggKi9cbiAgc3JjOiBsb2NhbCgkbWF0ZXJpYWwtaWNvbnMtZm9udC1mYW1pbHkpLCBsb2NhbCgkbWF0ZXJpYWwtaWNvbnMtZm9udC1uYW1lKSxcbiAgICB1cmwoJyN7JG1hdGVyaWFsLWljb25zLWZvbnQtZmlsZX0ud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXG4gICAgdXJsKCcjeyRtYXRlcmlhbC1pY29ucy1mb250LWZpbGV9LndvZmYnKSBmb3JtYXQoJ3dvZmYnKSxcbiAgICB1cmwoJyN7JG1hdGVyaWFsLWljb25zLWZvbnQtZmlsZX0udHRmJykgZm9ybWF0KCd0cnVldHlwZScpO1xufVxuXG4ubWF0ZXJpYWwtaWNvbnMge1xuICBAaW5jbHVkZSBtYXRlcmlhbC1pY29ucygpO1xufVxuIiwiQGltcG9ydCAnY29kZXBvaW50cy5zY3NzJztcblxuJG1hdGVyaWFsLWljb25zLWZvbnQtcGF0aDogJycgIWRlZmF1bHQ7XG4kbWF0ZXJpYWwtaWNvbnMtZm9udC1uYW1lOiAnTWF0ZXJpYWxJY29ucy1SZWd1bGFyJyAhZGVmYXVsdDtcbiRtYXRlcmlhbC1pY29ucy1mb250LXNpemU6IDI0cHggIWRlZmF1bHQ7XG4kbWF0ZXJpYWwtaWNvbnMtZm9udC1mYW1pbHk6ICdNYXRlcmlhbCBJY29ucycgIWRlZmF1bHQ7XG5cbiRtYXRlcmlhbC1pY29ucy1mb250LWZpbGU6ICRtYXRlcmlhbC1pY29ucy1mb250LXBhdGggKyAkbWF0ZXJpYWwtaWNvbnMtZm9udC1uYW1lO1xuIiwiQGZ1bmN0aW9uIG1hdGVyaWFsLWljb25zLXN0ci1yZXBsYWNlKCRzdHJpbmcsICRzZWFyY2gsICRyZXBsYWNlOiAnJykge1xuICAkaW5kZXg6IHN0ci1pbmRleCgkc3RyaW5nLCAkc2VhcmNoKTtcblxuICBAaWYgJGluZGV4IHtcbiAgICBAcmV0dXJuIHN0ci1zbGljZSgkc3RyaW5nLCAxLCAkaW5kZXggLSAxKSArICRyZXBsYWNlICsgbWF0ZXJpYWwtaWNvbnMtc3RyLXJlcGxhY2Uoc3RyLXNsaWNlKCRzdHJpbmcsICRpbmRleCArIHN0ci1sZW5ndGgoJHNlYXJjaCkpLCAkc2VhcmNoLCAkcmVwbGFjZSk7XG4gIH1cblxuICBAcmV0dXJuICRzdHJpbmc7XG59XG5cbkBmdW5jdGlvbiBtYXRlcmlhbC1pY29ucy1jb250ZW50KCRjb2RlcG9pbnQpIHtcbiAgQHJldHVybiB1bnF1b3RlKCdcIlxcXFwjeyRjb2RlcG9pbnR9XCInKTtcbn1cblxuQG1peGluIG1hdGVyaWFsLWljb25zKFxuICAkZm9udC1zaXplOiAkbWF0ZXJpYWwtaWNvbnMtZm9udC1zaXplLFxuICAkZm9udC1mYW1pbHk6ICRtYXRlcmlhbC1pY29ucy1mb250LWZhbWlseVxuKSB7XG4gIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHk7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAkZm9udC1zaXplO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgd29yZC13cmFwOiBub3JtYWw7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGRpcmVjdGlvbjogbHRyO1xuXG4gIC8qIFN1cHBvcnQgZm9yIGFsbCBXZWJLaXQgYnJvd3NlcnMuICovXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAvKiBTdXBwb3J0IGZvciBTYWZhcmkgYW5kIENocm9tZS4gKi9cbiAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcblxuICAvKiBTdXBwb3J0IGZvciBGaXJlZm94LiAqL1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xuXG4gIC8qIFN1cHBvcnQgZm9yIElFLiAqL1xuICBmb250LWZlYXR1cmUtc2V0dGluZ3M6ICdsaWdhJztcbn1cblxuQG1peGluIG1hdGVyaWFsLWljb24oJG5hbWUsICRwc2V1ZG86ICdiZWZvcmUnKSB7XG4gICRjb2RlcG9pbnQ6IG1hcC1nZXQoJG1hdGVyaWFsLWljb25zLWNvZGVwb2ludHMsICRuYW1lKTtcblxuICAmOiN7JHBzZXVkb30ge1xuICAgIGNvbnRlbnQ6IG1hdGVyaWFsLWljb25zLWNvbnRlbnQoJGNvZGVwb2ludCk7XG4gIH1cbn1cbiIsIiRtYXRlcmlhbC1pY29ucy1mb250LXBhdGg6ICd+bWF0ZXJpYWwtaWNvbnMvaWNvbmZvbnQvJztcclxuQGltcG9ydCAnfm1hdGVyaWFsLWljb25zL2ljb25mb250L21hdGVyaWFsLWljb25zLnNjc3MnO1xyXG5cclxuJGVycm9yLXJlZDogI0Q3MTExNztcclxuXHJcbi5uZy13aXphcmQtZXJyb3Ige1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzNXB4IGF1dG87XHJcbiAgZ3JpZC1jb2x1bW4tZ2FwOiAxNXB4O1xyXG5cclxuICBib3JkZXI6IHNvbGlkIDFweCAkZXJyb3ItcmVkO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuXHJcbiAgY29sb3I6ICRlcnJvci1yZWQ7XHJcbiAgcGFkZGluZzogMTBweCAxMHB4IDAgMTBweDtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG5cclxuICAubmctd2l6YXJkLWVycm9yLWljb24ge1xyXG4gICAgZm9udC1zaXplOiAzNXB4O1xyXG4gIH1cclxuXHJcbiAgLm5nLXdpemFyZC1lcnJvci1tZXNzYWdlIHByZSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIxOCwyMTUsMTk3LC40KTtcclxuICAgIGNvbG9yOiAjNEQ0RDREO1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./projects/ng-wizard/src/lib/ng-wizard-error/ng-wizard-error.component.ts":
/*!*********************************************************************************!*\
  !*** ./projects/ng-wizard/src/lib/ng-wizard-error/ng-wizard-error.component.ts ***!
  \*********************************************************************************/
/*! exports provided: NgWizardErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgWizardErrorComponent", function() { return NgWizardErrorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_wizard_error_type_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ng-wizard-error-type.enum */ "./projects/ng-wizard/src/lib/ng-wizard-error/ng-wizard-error-type.enum.ts");
/* harmony import */ var _ng_wizard_error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ng-wizard.error */ "./projects/ng-wizard/src/lib/ng-wizard-error/ng-wizard.error.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NgWizardErrorComponent = /** @class */ (function () {
    function NgWizardErrorComponent() {
        this.NgWizardErrorType = _ng_wizard_error_type_enum__WEBPACK_IMPORTED_MODULE_1__["NgWizardErrorType"];
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _ng_wizard_error__WEBPACK_IMPORTED_MODULE_2__["NgWizardError"])
    ], NgWizardErrorComponent.prototype, "error", void 0);
    NgWizardErrorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ng-wizard-error',
            template: __webpack_require__(/*! ./ng-wizard-error.component.html */ "./projects/ng-wizard/src/lib/ng-wizard-error/ng-wizard-error.component.html"),
            styles: [__webpack_require__(/*! ./ng-wizard-error.component.scss */ "./projects/ng-wizard/src/lib/ng-wizard-error/ng-wizard-error.component.scss")]
        })
    ], NgWizardErrorComponent);
    return NgWizardErrorComponent;
}());



/***/ }),

/***/ "./projects/ng-wizard/src/lib/ng-wizard-error/ng-wizard.error.ts":
/*!***********************************************************************!*\
  !*** ./projects/ng-wizard/src/lib/ng-wizard-error/ng-wizard.error.ts ***!
  \***********************************************************************/
/*! exports provided: NgWizardError, NoWizardRoute, NoChildRoutes, NoWsInterface */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgWizardError", function() { return NgWizardError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoWizardRoute", function() { return NoWizardRoute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoChildRoutes", function() { return NoChildRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoWsInterface", function() { return NoWsInterface; });
/* harmony import */ var _ng_wizard_error_type_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ng-wizard-error-type.enum */ "./projects/ng-wizard/src/lib/ng-wizard-error/ng-wizard-error-type.enum.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var NgWizardError = /** @class */ (function (_super) {
    __extends(NgWizardError, _super);
    function NgWizardError(type, message) {
        var _this = _super.call(this, message) || this;
        _this.wizardComponentName = '';
        _this.wizardPath = '';
        _this.stepComponentName = '';
        _this.type = type;
        return _this;
    }
    return NgWizardError;
}(Error));

var NoWizardRoute = /** @class */ (function (_super) {
    __extends(NoWizardRoute, _super);
    function NoWizardRoute(wizardComponentName) {
        var _this = _super.call(this, _ng_wizard_error_type_enum__WEBPACK_IMPORTED_MODULE_0__["NgWizardErrorType"].NO_WIZARD_ROUTE, "No route configuration for the " + wizardComponentName + " found.") || this;
        _this.wizardComponentName = wizardComponentName;
        return _this;
    }
    return NoWizardRoute;
}(NgWizardError));

var NoChildRoutes = /** @class */ (function (_super) {
    __extends(NoChildRoutes, _super);
    function NoChildRoutes(wizardComponentName, wizardPath) {
        var _this = _super.call(this, _ng_wizard_error_type_enum__WEBPACK_IMPORTED_MODULE_0__["NgWizardErrorType"].NO_CHILD_ROUTES, "No child routes for the " + wizardComponentName + " found.") || this;
        _this.wizardComponentName = wizardComponentName;
        _this.wizardPath = wizardPath;
        return _this;
    }
    return NoChildRoutes;
}(NgWizardError));

var NoWsInterface = /** @class */ (function (_super) {
    __extends(NoWsInterface, _super);
    function NoWsInterface(stepComponentName) {
        var _this = _super.call(this, _ng_wizard_error_type_enum__WEBPACK_IMPORTED_MODULE_0__["NgWizardErrorType"].NO_WS_INTERFACE, "The " + stepComponentName + " does not extend the NgWizardStep class or implement the NgWizardStepInterface.") || this;
        _this.stepComponentName = stepComponentName;
        return _this;
    }
    return NoWsInterface;
}(NgWizardError));



/***/ }),

/***/ "./projects/ng-wizard/src/lib/ng-wizard-navigation/ng-wizard-navigation.component.html":
/*!*********************************************************************************************!*\
  !*** ./projects/ng-wizard/src/lib/ng-wizard-navigation/ng-wizard-navigation.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ng-wizard-navigation-container\">\r\n  <nav class=\"ng-wizard-navigation\">\r\n    <ul class=\"ng-wizard-navigation-list\">\r\n      <li *ngFor=\"let stepData of stepData$ | async\" class=\"ng-wizard-navigation-list-item\">\r\n        <div *ngIf=\"stepData?.order < (currentStepData$ | async)?.order\"\r\n             (click)=\"goToStep(stepData)\" class=\"ng-wizard-navigation-link\">\r\n          <span [innerHTML]=\"wizardOptions.navBar.icons.previous\"></span>\r\n          <span class=\"ng-wizard-navigation-label\">\r\n            {{ stepData.title }}\r\n          </span>\r\n        </div>\r\n\r\n        <div\r\n          *ngIf=\"stepData?.order === (currentStepData$ | async)?.order\"\r\n          class=\"ng-wizard-navigation-active\">\r\n          <span [innerHTML]=\"wizardOptions.navBar.icons.current\"></span>\r\n          <span class=\"ng-wizard-navigation-label\">\r\n            {{ stepData.title }}\r\n          </span>\r\n        </div>\r\n\r\n        <div *ngIf=\"stepData?.order > (currentStepData$ | async)?.order\"\r\n             class=\"ng-wizard-navigation-disabled\">\r\n          <span [innerHTML]=\"wizardOptions.navBar.icons.next\"></span>\r\n          <span class=\"ng-wizard-navigation-label\">\r\n            {{ stepData.title }}\r\n          </span>\r\n        </div>\r\n      </li>\r\n    </ul>\r\n  </nav>\r\n</div>\r\n"

/***/ }),

/***/ "./projects/ng-wizard/src/lib/ng-wizard-navigation/ng-wizard-navigation.component.scss":
/*!*********************************************************************************************!*\
  !*** ./projects/ng-wizard/src/lib/ng-wizard-navigation/ng-wizard-navigation.component.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@font-face {\n  font-family: \"Material Icons\";\n  font-style: normal;\n  font-weight: 400;\n  src: url('MaterialIcons-Regular.eot');\n  /* For IE6-8 */\n  src: local(\"Material Icons\"), local(\"MaterialIcons-Regular\"), url('MaterialIcons-Regular.woff2') format(\"woff2\"), url('MaterialIcons-Regular.woff') format(\"woff\"), url('MaterialIcons-Regular.ttf') format(\"truetype\"); }\n\n.material-icons {\n  font-family: \"Material Icons\";\n  font-weight: normal;\n  font-style: normal;\n  font-size: 24px;\n  display: inline-block;\n  line-height: 1;\n  text-transform: none;\n  letter-spacing: normal;\n  word-wrap: normal;\n  white-space: nowrap;\n  direction: ltr;\n  /* Support for all WebKit browsers. */\n  -webkit-font-smoothing: antialiased;\n  /* Support for Safari and Chrome. */\n  text-rendering: optimizeLegibility;\n  /* Support for Firefox. */\n  -moz-osx-font-smoothing: grayscale;\n  /* Support for IE. */\n  -webkit-font-feature-settings: 'liga';\n          font-feature-settings: 'liga'; }\n\ndiv.ng-wizard-navigation-container {\n  background-color: #F0EFE8;\n  border-radius: 5px; }\n\ndiv.ng-wizard-navigation-container nav.ng-wizard-navigation ul.ng-wizard-navigation-list {\n    display: grid;\n    grid-template-columns: repeat(5, 1fr);\n    grid-template-rows: 50px;\n    list-style: none;\n    padding: 0; }\n\ndiv.ng-wizard-navigation-container nav.ng-wizard-navigation ul.ng-wizard-navigation-list li.ng-wizard-navigation-list-item {\n      display: inline-block;\n      text-align: center;\n      border-right: solid 1px rgba(218, 215, 197, 0.6); }\n\ndiv.ng-wizard-navigation-container nav.ng-wizard-navigation ul.ng-wizard-navigation-list li.ng-wizard-navigation-list-item:last-of-type {\n        border-right: none; }\n\ndiv.ng-wizard-navigation-container nav.ng-wizard-navigation ul.ng-wizard-navigation-list li.ng-wizard-navigation-list-item div {\n        display: inline-block;\n        width: 100%;\n        height: 50px; }\n\ndiv.ng-wizard-navigation-container nav.ng-wizard-navigation ul.ng-wizard-navigation-list li.ng-wizard-navigation-list-item div.ng-wizard-navigation-link {\n          cursor: pointer; }\n\ndiv.ng-wizard-navigation-container nav.ng-wizard-navigation ul.ng-wizard-navigation-list li.ng-wizard-navigation-list-item div.ng-wizard-navigation-active {\n          background-color: rgba(218, 215, 197, 0.6);\n          border-radius: 5px; }\n\ndiv.ng-wizard-navigation-container nav.ng-wizard-navigation ul.ng-wizard-navigation-list li.ng-wizard-navigation-list-item div.ng-wizard-navigation-disabled {\n          color: gray; }\n\ndiv.ng-wizard-navigation-container nav.ng-wizard-navigation ul.ng-wizard-navigation-list li.ng-wizard-navigation-list-item div.ng-wizard-navigation-disabled i {\n            color: #c6c3b1;\n            border: solid 1px #c6c3b1; }\n\ndiv.ng-wizard-navigation-container nav.ng-wizard-navigation ul.ng-wizard-navigation-list li.ng-wizard-navigation-list-item div i.material-icons {\n          position: relative;\n          top: 7px;\n          border: solid 1px #b2af9d;\n          border-radius: 50%;\n          padding: 5px; }\n\ndiv.ng-wizard-navigation-container nav.ng-wizard-navigation ul.ng-wizard-navigation-list li.ng-wizard-navigation-list-item div span.ng-wizard-navigation-label {\n          display: inline-block;\n          margin-left: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL25nLXdpemFyZC9zcmMvbGliL25nLXdpemFyZC1uYXZpZ2F0aW9uL0M6XFxkZXZlbnZcXG1lYW5cXG5nLXdpemFyZC9ub2RlX21vZHVsZXNcXG1hdGVyaWFsLWljb25zXFxpY29uZm9udFxcbWF0ZXJpYWwtaWNvbnMuc2NzcyIsInByb2plY3RzL25nLXdpemFyZC9zcmMvbGliL25nLXdpemFyZC1uYXZpZ2F0aW9uL0M6XFxkZXZlbnZcXG1lYW5cXG5nLXdpemFyZC9ub2RlX21vZHVsZXNcXG1hdGVyaWFsLWljb25zXFxpY29uZm9udFxcdmFyaWFibGVzLnNjc3MiLCJwcm9qZWN0cy9uZy13aXphcmQvc3JjL2xpYi9uZy13aXphcmQtbmF2aWdhdGlvbi9DOlxcZGV2ZW52XFxtZWFuXFxuZy13aXphcmQvbm9kZV9tb2R1bGVzXFxtYXRlcmlhbC1pY29uc1xcaWNvbmZvbnRcXG1peGlucy5zY3NzIiwicHJvamVjdHMvbmctd2l6YXJkL3NyYy9saWIvbmctd2l6YXJkLW5hdmlnYXRpb24vQzpcXGRldmVudlxcbWVhblxcbmctd2l6YXJkL3Byb2plY3RzXFxuZy13aXphcmRcXHNyY1xcbGliXFxuZy13aXphcmQtbmF2aWdhdGlvblxcbmctd2l6YXJkLW5hdmlnYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSw4QkNDMkM7RURBM0MsbUJBQWtCO0VBQ2xCLGlCQUFnQjtFQUNoQixzQ0FBNEM7RUFBRSxlQUFlO0VBQzdELHdOQUc0RCxFQUFBOztBQUc5RDtFRUlFLDhCRGIyQztFQ2MzQyxvQkFBbUI7RUFDbkIsbUJBQWtCO0VBQ2xCLGdCRGpCNkI7RUNrQjdCLHNCQUFxQjtFQUNyQixlQUFjO0VBQ2QscUJBQW9CO0VBQ3BCLHVCQUFzQjtFQUN0QixrQkFBaUI7RUFDakIsb0JBQW1CO0VBQ25CLGVBQWM7RUFFZCxzQ0FBc0M7RUFDdEMsb0NBQW1DO0VBQ25DLG9DQUFvQztFQUNwQyxtQ0FBa0M7RUFFbEMsMEJBQTBCO0VBQzFCLG1DQUFrQztFQUVsQyxxQkFBcUI7RUFDckIsc0NBQTZCO1VBQTdCLDhCQUE2QixFRnZCOUI7O0FHYkQ7RUFDRSwwQkFBeUI7RUFDekIsbUJBQWtCLEVBNERuQjs7QUE5REQ7SUFPTSxjQUFhO0lBQ2Isc0NBQXFDO0lBQ3JDLHlCQUF3QjtJQUV4QixpQkFBZ0I7SUFDaEIsV0FBVSxFQWdEWDs7QUE1REw7TUFlUSxzQkFBcUI7TUFDckIsbUJBQWtCO01BQ2xCLGlEQUE0QyxFQTBDN0M7O0FBM0RQO1FBb0JVLG1CQUFrQixFQUNuQjs7QUFyQlQ7UUF3QlUsc0JBQXFCO1FBQ3JCLFlBQVc7UUFDWCxhQUFZLEVBZ0NiOztBQTFEVDtVQTZCWSxnQkFBZSxFQUNoQjs7QUE5Qlg7VUFpQ1ksMkNBQXNDO1VBQ3RDLG1CQUFrQixFQUNuQjs7QUFuQ1g7VUFzQ1ksWUFBdUIsRUFNeEI7O0FBNUNYO1lBeUNjLGVBQXVCO1lBQ3ZCLDBCQUFrQyxFQUNuQzs7QUEzQ2I7VUErQ1ksbUJBQWtCO1VBQ2xCLFNBQVE7VUFDUiwwQkFBa0M7VUFDbEMsbUJBQWtCO1VBQ2xCLGFBQVksRUFDYjs7QUFwRFg7VUF1RFksc0JBQXFCO1VBQ3JCLGtCQUFpQixFQUNsQiIsImZpbGUiOiJwcm9qZWN0cy9uZy13aXphcmQvc3JjL2xpYi9uZy13aXphcmQtbmF2aWdhdGlvbi9uZy13aXphcmQtbmF2aWdhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ3ZhcmlhYmxlcyc7XG5AaW1wb3J0ICdtaXhpbnMnO1xuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICRtYXRlcmlhbC1pY29ucy1mb250LWZhbWlseTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBzcmM6IHVybCgnI3skbWF0ZXJpYWwtaWNvbnMtZm9udC1maWxlfS5lb3QnKTsgLyogRm9yIElFNi04ICovXG4gIHNyYzogbG9jYWwoJG1hdGVyaWFsLWljb25zLWZvbnQtZmFtaWx5KSwgbG9jYWwoJG1hdGVyaWFsLWljb25zLWZvbnQtbmFtZSksXG4gICAgdXJsKCcjeyRtYXRlcmlhbC1pY29ucy1mb250LWZpbGV9LndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxuICAgIHVybCgnI3skbWF0ZXJpYWwtaWNvbnMtZm9udC1maWxlfS53b2ZmJykgZm9ybWF0KCd3b2ZmJyksXG4gICAgdXJsKCcjeyRtYXRlcmlhbC1pY29ucy1mb250LWZpbGV9LnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcbn1cblxuLm1hdGVyaWFsLWljb25zIHtcbiAgQGluY2x1ZGUgbWF0ZXJpYWwtaWNvbnMoKTtcbn1cbiIsIkBpbXBvcnQgJ2NvZGVwb2ludHMuc2Nzcyc7XG5cbiRtYXRlcmlhbC1pY29ucy1mb250LXBhdGg6ICcnICFkZWZhdWx0O1xuJG1hdGVyaWFsLWljb25zLWZvbnQtbmFtZTogJ01hdGVyaWFsSWNvbnMtUmVndWxhcicgIWRlZmF1bHQ7XG4kbWF0ZXJpYWwtaWNvbnMtZm9udC1zaXplOiAyNHB4ICFkZWZhdWx0O1xuJG1hdGVyaWFsLWljb25zLWZvbnQtZmFtaWx5OiAnTWF0ZXJpYWwgSWNvbnMnICFkZWZhdWx0O1xuXG4kbWF0ZXJpYWwtaWNvbnMtZm9udC1maWxlOiAkbWF0ZXJpYWwtaWNvbnMtZm9udC1wYXRoICsgJG1hdGVyaWFsLWljb25zLWZvbnQtbmFtZTtcbiIsIkBmdW5jdGlvbiBtYXRlcmlhbC1pY29ucy1zdHItcmVwbGFjZSgkc3RyaW5nLCAkc2VhcmNoLCAkcmVwbGFjZTogJycpIHtcbiAgJGluZGV4OiBzdHItaW5kZXgoJHN0cmluZywgJHNlYXJjaCk7XG5cbiAgQGlmICRpbmRleCB7XG4gICAgQHJldHVybiBzdHItc2xpY2UoJHN0cmluZywgMSwgJGluZGV4IC0gMSkgKyAkcmVwbGFjZSArIG1hdGVyaWFsLWljb25zLXN0ci1yZXBsYWNlKHN0ci1zbGljZSgkc3RyaW5nLCAkaW5kZXggKyBzdHItbGVuZ3RoKCRzZWFyY2gpKSwgJHNlYXJjaCwgJHJlcGxhY2UpO1xuICB9XG5cbiAgQHJldHVybiAkc3RyaW5nO1xufVxuXG5AZnVuY3Rpb24gbWF0ZXJpYWwtaWNvbnMtY29udGVudCgkY29kZXBvaW50KSB7XG4gIEByZXR1cm4gdW5xdW90ZSgnXCJcXFxcI3skY29kZXBvaW50fVwiJyk7XG59XG5cbkBtaXhpbiBtYXRlcmlhbC1pY29ucyhcbiAgJGZvbnQtc2l6ZTogJG1hdGVyaWFsLWljb25zLWZvbnQtc2l6ZSxcbiAgJGZvbnQtZmFtaWx5OiAkbWF0ZXJpYWwtaWNvbnMtZm9udC1mYW1pbHlcbikge1xuICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBsaW5lLWhlaWdodDogMTtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gIHdvcmQtd3JhcDogbm9ybWFsO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBkaXJlY3Rpb246IGx0cjtcblxuICAvKiBTdXBwb3J0IGZvciBhbGwgV2ViS2l0IGJyb3dzZXJzLiAqL1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLyogU3VwcG9ydCBmb3IgU2FmYXJpIGFuZCBDaHJvbWUuICovXG4gIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XG5cbiAgLyogU3VwcG9ydCBmb3IgRmlyZWZveC4gKi9cbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcblxuICAvKiBTdXBwb3J0IGZvciBJRS4gKi9cbiAgZm9udC1mZWF0dXJlLXNldHRpbmdzOiAnbGlnYSc7XG59XG5cbkBtaXhpbiBtYXRlcmlhbC1pY29uKCRuYW1lLCAkcHNldWRvOiAnYmVmb3JlJykge1xuICAkY29kZXBvaW50OiBtYXAtZ2V0KCRtYXRlcmlhbC1pY29ucy1jb2RlcG9pbnRzLCAkbmFtZSk7XG5cbiAgJjojeyRwc2V1ZG99IHtcbiAgICBjb250ZW50OiBtYXRlcmlhbC1pY29ucy1jb250ZW50KCRjb2RlcG9pbnQpO1xuICB9XG59XG4iLCIkbWF0ZXJpYWwtaWNvbnMtZm9udC1wYXRoOiAnfm1hdGVyaWFsLWljb25zL2ljb25mb250Lyc7XHJcbkBpbXBvcnQgJ35tYXRlcmlhbC1pY29ucy9pY29uZm9udC9tYXRlcmlhbC1pY29ucy5zY3NzJztcclxuXHJcbmRpdi5uZy13aXphcmQtbmF2aWdhdGlvbi1jb250YWluZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGMEVGRTg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG5cclxuICBuYXYubmctd2l6YXJkLW5hdmlnYXRpb24ge1xyXG5cclxuICAgIHVsLm5nLXdpemFyZC1uYXZpZ2F0aW9uLWxpc3Qge1xyXG4gICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg1LCAxZnIpO1xyXG4gICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDUwcHg7XHJcblxyXG4gICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICBwYWRkaW5nOiAwO1xyXG5cclxuICAgICAgbGkubmctd2l6YXJkLW5hdmlnYXRpb24tbGlzdC1pdGVtIHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGJvcmRlci1yaWdodDogc29saWQgMXB4IHJnYmEoMjE4LDIxNSwxOTcsLjYpO1xyXG5cclxuICAgICAgICAmOmxhc3Qtb2YtdHlwZSB7XHJcbiAgICAgICAgICBib3JkZXItcmlnaHQ6IG5vbmU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBkaXYge1xyXG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcblxyXG4gICAgICAgICAgJi5uZy13aXphcmQtbmF2aWdhdGlvbi1saW5rIHtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICYubmctd2l6YXJkLW5hdmlnYXRpb24tYWN0aXZlIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMTgsMjE1LDE5NywuNik7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAmLm5nLXdpemFyZC1uYXZpZ2F0aW9uLWRpc2FibGVkIHtcclxuICAgICAgICAgICAgY29sb3I6IHJnYigxMjgsMTI4LDEyOCk7XHJcblxyXG4gICAgICAgICAgICBpIHtcclxuICAgICAgICAgICAgICBjb2xvcjogcmdiKDE5OCwxOTUsMTc3KTtcclxuICAgICAgICAgICAgICBib3JkZXI6IHNvbGlkIDFweCByZ2IoMTk4LDE5NSwxNzcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgaS5tYXRlcmlhbC1pY29ucyB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgdG9wOiA3cHg7XHJcbiAgICAgICAgICAgIGJvcmRlcjogc29saWQgMXB4IHJnYigxNzgsMTc1LDE1Nyk7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHNwYW4ubmctd2l6YXJkLW5hdmlnYXRpb24tbGFiZWwge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./projects/ng-wizard/src/lib/ng-wizard-navigation/ng-wizard-navigation.component.ts":
/*!*******************************************************************************************!*\
  !*** ./projects/ng-wizard/src/lib/ng-wizard-navigation/ng-wizard-navigation.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: NgWizardNavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgWizardNavigationComponent", function() { return NgWizardNavigationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_wizard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ng-wizard.service */ "./projects/ng-wizard/src/lib/ng-wizard.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NgWizardNavigationComponent = /** @class */ (function () {
    function NgWizardNavigationComponent(service) {
        this.service = service;
    }
    NgWizardNavigationComponent.prototype.ngOnInit = function () {
        this.stepData$ = this.service.getStepDataChangesAsObservable();
        this.currentStepData$ = this.service.getCurrentStepDataAsObservable();
        this.wizardOptions = this.service.wizardOptions;
    };
    NgWizardNavigationComponent.prototype.goToStep = function (stepData) {
        this.service.navigateToStep(stepData);
    };
    NgWizardNavigationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ng-wizard-navigation',
            template: __webpack_require__(/*! ./ng-wizard-navigation.component.html */ "./projects/ng-wizard/src/lib/ng-wizard-navigation/ng-wizard-navigation.component.html"),
            styles: [__webpack_require__(/*! ./ng-wizard-navigation.component.scss */ "./projects/ng-wizard/src/lib/ng-wizard-navigation/ng-wizard-navigation.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        }),
        __metadata("design:paramtypes", [_ng_wizard_service__WEBPACK_IMPORTED_MODULE_1__["NgWizardService"]])
    ], NgWizardNavigationComponent);
    return NgWizardNavigationComponent;
}());



/***/ }),

/***/ "./projects/ng-wizard/src/lib/ng-wizard-step/ng-wizard-step.ts":
/*!*********************************************************************!*\
  !*** ./projects/ng-wizard/src/lib/ng-wizard-step/ng-wizard-step.ts ***!
  \*********************************************************************/
/*! exports provided: NgWizardStep */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgWizardStep", function() { return NgWizardStep; });
var NgWizardStep = /** @class */ (function () {
    function NgWizardStep() {
    }
    NgWizardStep.prototype.wsIsValid = function () {
        return true;
    };
    NgWizardStep.prototype.wsOnNext = function () {
        return;
    };
    NgWizardStep.prototype.wsOnPrevious = function () {
        return;
    };
    return NgWizardStep;
}());



/***/ }),

/***/ "./projects/ng-wizard/src/lib/ng-wizard.component.html":
/*!*************************************************************!*\
  !*** ./projects/ng-wizard/src/lib/ng-wizard.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <ng-wizard-error [error]=\"error\"></ng-wizard-error>\r\n  <ng-wizard-navigation></ng-wizard-navigation>\r\n  <div class=\"ng-wizard-content-container\" style=\"margin: auto;\">\r\n    <router-outlet (activate)=\"onActivate($event)\"></router-outlet>\r\n  </div>\r\n  <ng-wizard-buttons></ng-wizard-buttons>\r\n</div>\r\n"

/***/ }),

/***/ "./projects/ng-wizard/src/lib/ng-wizard.component.ts":
/*!***********************************************************!*\
  !*** ./projects/ng-wizard/src/lib/ng-wizard.component.ts ***!
  \***********************************************************/
/*! exports provided: NgWizardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgWizardComponent", function() { return NgWizardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_wizard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ng-wizard.service */ "./projects/ng-wizard/src/lib/ng-wizard.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NgWizardComponent = /** @class */ (function () {
    function NgWizardComponent(service) {
        this.service = service;
        try {
            this.service.loadWizardRoutes(this.constructor.name);
        }
        catch (error) {
            this.error = error;
        }
    }
    NgWizardComponent.prototype.onActivate = function (componentRef) {
        try {
            this.service.registerActiveComponent(componentRef);
        }
        catch (error) {
            this.error = error;
        }
    };
    NgWizardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ng-wizard',
            template: __webpack_require__(/*! ./ng-wizard.component.html */ "./projects/ng-wizard/src/lib/ng-wizard.component.html"),
        }),
        __metadata("design:paramtypes", [_ng_wizard_service__WEBPACK_IMPORTED_MODULE_1__["NgWizardService"]])
    ], NgWizardComponent);
    return NgWizardComponent;
}());



/***/ }),

/***/ "./projects/ng-wizard/src/lib/ng-wizard.module.ts":
/*!********************************************************!*\
  !*** ./projects/ng-wizard/src/lib/ng-wizard.module.ts ***!
  \********************************************************/
/*! exports provided: NgWizardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgWizardModule", function() { return NgWizardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_wizard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ng-wizard.component */ "./projects/ng-wizard/src/lib/ng-wizard.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_wizard_error_ng_wizard_error_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ng-wizard-error/ng-wizard-error.component */ "./projects/ng-wizard/src/lib/ng-wizard-error/ng-wizard-error.component.ts");
/* harmony import */ var _ng_wizard_navigation_ng_wizard_navigation_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ng-wizard-navigation/ng-wizard-navigation.component */ "./projects/ng-wizard/src/lib/ng-wizard-navigation/ng-wizard-navigation.component.ts");
/* harmony import */ var _ng_wizard_buttons_ng_wizard_buttons_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ng-wizard-buttons/ng-wizard-buttons.component */ "./projects/ng-wizard/src/lib/ng-wizard-buttons/ng-wizard-buttons.component.ts");
/* harmony import */ var _ng_wizard_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ng-wizard.service */ "./projects/ng-wizard/src/lib/ng-wizard.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var NgWizardModule = /** @class */ (function () {
    function NgWizardModule() {
    }
    NgWizardModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _ng_wizard_component__WEBPACK_IMPORTED_MODULE_1__["NgWizardComponent"],
                _ng_wizard_error_ng_wizard_error_component__WEBPACK_IMPORTED_MODULE_4__["NgWizardErrorComponent"],
                _ng_wizard_navigation_ng_wizard_navigation_component__WEBPACK_IMPORTED_MODULE_5__["NgWizardNavigationComponent"],
                _ng_wizard_buttons_ng_wizard_buttons_component__WEBPACK_IMPORTED_MODULE_6__["NgWizardButtonsComponent"],
            ],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
            providers: [_ng_wizard_service__WEBPACK_IMPORTED_MODULE_7__["NgWizardService"]],
            exports: [_ng_wizard_component__WEBPACK_IMPORTED_MODULE_1__["NgWizardComponent"]],
        })
    ], NgWizardModule);
    return NgWizardModule;
}());



/***/ }),

/***/ "./projects/ng-wizard/src/lib/ng-wizard.service.ts":
/*!*********************************************************!*\
  !*** ./projects/ng-wizard/src/lib/ng-wizard.service.ts ***!
  \*********************************************************/
/*! exports provided: NgWizardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgWizardService", function() { return NgWizardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_wizard_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ng-wizard.utils */ "./projects/ng-wizard/src/lib/ng-wizard.utils.ts");
/* harmony import */ var _ng_wizard_error_ng_wizard_error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ng-wizard-error/ng-wizard.error */ "./projects/ng-wizard/src/lib/ng-wizard-error/ng-wizard.error.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var NgWizardService = /** @class */ (function () {
    function NgWizardService(router, route) {
        this.router = router;
        this.route = route;
        this.stepData = [];
        this.stepDataChanges = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]([]);
    }
    /**
     * Initializes the wizard by parsing the wizard's child routes found in Angular's router config
     * into a list of NgWizardStepData.
     * @param wizardComponentName The name of the wizard component
     */
    NgWizardService.prototype.loadWizardRoutes = function (wizardComponentName) {
        this.wizardRoute = this.getWizardRoute(wizardComponentName);
        if (!this.wizardRoute) {
            throw new _ng_wizard_error_ng_wizard_error__WEBPACK_IMPORTED_MODULE_3__["NoWizardRoute"](wizardComponentName);
        }
        this.wizardOptions = _ng_wizard_utils__WEBPACK_IMPORTED_MODULE_2__["mergeWizardOptions"](this.wizardRoute.data);
        this.loadChildRoutes(this.wizardRoute);
    };
    /**
     * Checks and stores the currently displayed component.
     * @param componentRef A reference to the currently displayed component
     */
    NgWizardService.prototype.registerActiveComponent = function (componentRef) {
        if (!_ng_wizard_utils__WEBPACK_IMPORTED_MODULE_2__["componentImplementsNgWizardStepInterface"](componentRef)) {
            throw new _ng_wizard_error_ng_wizard_error__WEBPACK_IMPORTED_MODULE_3__["NoWsInterface"](componentRef.constructor.name);
        }
        // Cast to unknown before casting to NgWizardStep to let typescript know we checked and approve
        // this conversion.
        this.currentComponent = componentRef;
        this.currentStepData = _ng_wizard_utils__WEBPACK_IMPORTED_MODULE_2__["getStepDataForComponentName"](this.stepData, componentRef.constructor.name);
        this.currentStepData.componentRef = componentRef;
        this.resetCurrentStep();
        this.currentStepData.isCurrent = true;
        this.onStepDataChange();
    };
    /**
     * Calls the current component's wsOnPrevious() or wsOnNext()) methods and navigates to the given
     * step if the component does not abort or its state is invalid (for next navigation).
     *
     * @param stepData The NgWizardStepData of the the step to navigate to
     */
    NgWizardService.prototype.navigateToStep = function (stepData) {
        var goAhead;
        if (this.currentStepData.order > stepData.order) {
            goAhead = this.currentComponent.wsOnPrevious();
        }
        else {
            goAhead = this.currentComponent.wsIsValid() && this.currentComponent.wsOnNext();
        }
        if (goAhead === false) {
            return;
        }
        if (this.wizardRoute.path) {
            return this.router.navigate([stepData.path], { relativeTo: this.route });
        }
        return this.router.navigate([stepData.path]);
    };
    /**
     * Utility method to navigate to the next step.
     */
    NgWizardService.prototype.navigateToNextStep = function () {
        var nextStepData = _ng_wizard_utils__WEBPACK_IMPORTED_MODULE_2__["getStepDataForPath"](this.stepData, this.currentStepData.nextStep);
        return this.navigateToStep(nextStepData);
    };
    /**
     * Utility method to navigate to the previous step.
     */
    NgWizardService.prototype.navigateToPreviousStep = function () {
        var previousStepData = _ng_wizard_utils__WEBPACK_IMPORTED_MODULE_2__["getStepDataForPath"](this.stepData, this.currentStepData.previousStep);
        return this.navigateToStep(previousStepData);
    };
    /**
     * Returns the step data changes as an observable.
     */
    NgWizardService.prototype.getStepDataChangesAsObservable = function () {
        return this.stepDataChanges.asObservable();
    };
    /**
     * Returns the current step data as an observable.
     */
    // TODO: Write a unit test for this method
    NgWizardService.prototype.getCurrentStepDataAsObservable = function () {
        return this.getStepDataChangesAsObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (stepDatas) { return stepDatas.find(function (stepData) { return stepData.isCurrent; }); }));
    };
    /**
     * Returns the Angular Route for the wizard component found in Angular's router config.
     * @param wizardComponentName The name of the wizard component
     */
    NgWizardService.prototype.getWizardRoute = function (wizardComponentName) {
        return this.router.config.find(function (route) { return route.component && route.component.name === wizardComponentName; });
    };
    /**
     * Parses the child routes of the wizard component route and stores them as a list of
     * NgWizardStepData.
     * @param wizardRoute The Angular Route for the wizard component
     */
    NgWizardService.prototype.loadChildRoutes = function (wizardRoute) {
        if (!wizardRoute.children) {
            throw new _ng_wizard_error_ng_wizard_error__WEBPACK_IMPORTED_MODULE_3__["NoChildRoutes"](wizardRoute.component.name, wizardRoute.path);
        }
        var childRoutes = wizardRoute.children.filter(function (route) { return route.component; });
        for (var i = 0; i < childRoutes.length; i++) {
            this.registerStep(i, childRoutes[i], childRoutes[i - 1], childRoutes[i + 1]);
        }
    };
    /**
     * Stores a child route as an NgWizardStepData.
     * @param index The index in the list of child routes
     * @param stepRoute The child route
     * @param previousStep The previous child route (undefined if first child route)
     * @param nextStep The next child route (undefined if last child route)
     */
    NgWizardService.prototype.registerStep = function (index, stepRoute, previousStep, nextStep) {
        this.stepData.push({
            order: index + 1,
            componentName: stepRoute.component.name,
            title: _ng_wizard_utils__WEBPACK_IMPORTED_MODULE_2__["getStepTitleFromRoute"](stepRoute),
            path: stepRoute.path,
            previousStep: previousStep ? previousStep.path : undefined,
            nextStep: nextStep ? nextStep.path : undefined,
            isCurrent: false,
        });
        this.onStepDataChange();
    };
    /**
     * Emits a step data change event to the subscribers when the step data changes.
     */
    NgWizardService.prototype.onStepDataChange = function () {
        this.stepDataChanges.next(this.stepData);
    };
    /**
     * Sets the isCurrent attribute of all step data to false.
     */
    NgWizardService.prototype.resetCurrentStep = function () {
        this.stepData.map(function (stepData) {
            stepData.isCurrent = false;
            return stepData;
        });
    };
    NgWizardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], NgWizardService);
    return NgWizardService;
}());



/***/ }),

/***/ "./projects/ng-wizard/src/lib/ng-wizard.utils.ts":
/*!*******************************************************!*\
  !*** ./projects/ng-wizard/src/lib/ng-wizard.utils.ts ***!
  \*******************************************************/
/*! exports provided: getStepTitleFromRoute, componentImplementsNgWizardStepInterface, getStepDataForComponentName, getStepDataForPath, getDefaultWizardOptions, mergeWizardOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStepTitleFromRoute", function() { return getStepTitleFromRoute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "componentImplementsNgWizardStepInterface", function() { return componentImplementsNgWizardStepInterface; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStepDataForComponentName", function() { return getStepDataForComponentName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStepDataForPath", function() { return getStepDataForPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDefaultWizardOptions", function() { return getDefaultWizardOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeWizardOptions", function() { return mergeWizardOptions; });
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
/**
 * Returns the step title based on the Route configuration.
 * If the route has a data.title attribute it will be returned.
 * Else the path will be capitalized and '-' or '_' characters will be replaces by spaces.
 *
 * @param route The Angular Route object
 */
function getStepTitleFromRoute(route) {
    if (route.data && route.data.title) {
        return route.data.title;
    }
    return capitalize(insertSpaces(route.path));
}
/**
 * Returns true if the component extends the NgWizardStep class or implements the NgWizardStepInterface.
 *
 * @param componentRef The reference to the component to verify
 */
function componentImplementsNgWizardStepInterface(componentRef) {
    return 'wsIsValid' in componentRef && 'wsOnNext' in componentRef && 'wsOnPrevious' in componentRef;
}
/**
 * Returns the NgWizardStepData with the given ComponentName in the stepData list or undefined if
 * none is found.
 *
 * @param stepData The list with NgWizardStepDatas
 * @param componentName The componentName you want to get the NgWizardStepData for
 */
function getStepDataForComponentName(stepData, componentName) {
    return stepData.find(function (data) { return data.componentName === componentName; });
}
/**
 * Returns the NgWizardStepData with the given path in the stepData list or undefined if none is
 * found.
 *
 * @param stepData The list with NgWizardStepDatas
 * @param path The path you want to get the NgWizardStepData for
 */
function getStepDataForPath(stepData, path) {
    return stepData.find(function (data) { return data.path === path; });
}
/**
 * Returns the default wizard options.
 */
function getDefaultWizardOptions() {
    return {
        navBar: {
            icons: {
                previous: '<i class="material-icons">done</i>',
                current: '<i class="material-icons">create</i>',
                next: '<i class="material-icons">lock</i>',
            },
        },
        buttons: {
            previous: {
                label: '<i class="material-icons">chevron_left</i> Previous',
            },
            next: {
                label: 'Next <i class="material-icons">chevron_right</i>',
            },
        }
    };
}
/**
 * Merges the wizard options in the wizard route's config with the default wizard options.
 *
 * @param wizardOptions The wizard options in the wizard route's config
 */
function mergeWizardOptions(wizardOptions) {
    if (!wizardOptions) {
        return getDefaultWizardOptions();
    }
    return __assign({}, getDefaultWizardOptions(), wizardOptions);
}
/**
 * Capitalizes the first character of the passed value.
 */
function capitalize(value) {
    if (!value) {
        return value;
    }
    return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
}
/**
 * Replaces '-' and '_' characters by spaces.
 */
function insertSpaces(value) {
    if (!value) {
        return value;
    }
    return value.replace(/[-_]/g, ' ').trim();
}


/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _projects_ng_wizard_src_lib_ng_wizard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../projects/ng-wizard/src/lib/ng-wizard.component */ "./projects/ng-wizard/src/lib/ng-wizard.component.ts");
/* harmony import */ var _step1_step1_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./step1/step1.component */ "./src/app/step1/step1.component.ts");
/* harmony import */ var _step2_step2_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./step2/step2.component */ "./src/app/step2/step2.component.ts");
/* harmony import */ var _step3_step3_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./step3/step3.component */ "./src/app/step3/step3.component.ts");
/* harmony import */ var _step4_step4_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./step4/step4.component */ "./src/app/step4/step4.component.ts");
/* harmony import */ var _step5_step5_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./step5/step5.component */ "./src/app/step5/step5.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var wizardConfig = {
// navBar: {
//   icons: {
//     previous: '<i class="material-icons">cake</i>',
//     current: '<i class="material-icons">star</i>',
//     next: '<i class="material-icons">pool</i>',
//   },
// },
// buttons: {
//   previous: {
//     label: '<i class="material-icons">arrow_left</i> Previous',
//   },
//   next: {
//     label: 'Next <i class="material-icons">arrow_right</i>',
//   },
// }
};
var routes = [
    { path: '', component: _projects_ng_wizard_src_lib_ng_wizard_component__WEBPACK_IMPORTED_MODULE_2__["NgWizardComponent"], children: [
            { path: 'personal', component: _step1_step1_component__WEBPACK_IMPORTED_MODULE_3__["Step1Component"] },
            { path: 'developer', component: _step2_step2_component__WEBPACK_IMPORTED_MODULE_4__["Step2Component"] },
            { path: 'angular', component: _step3_step3_component__WEBPACK_IMPORTED_MODULE_5__["Step3Component"] },
            { path: 'confirmation', component: _step4_step4_component__WEBPACK_IMPORTED_MODULE_6__["Step4Component"] },
            { path: 'done', component: _step5_step5_component__WEBPACK_IMPORTED_MODULE_7__["Step5Component"] },
            { path: '**', redirectTo: 'personal' },
        ], data: wizardConfig },
    { path: '**', redirectTo: '' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wizard-container\">\r\n  <router-outlet></router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wizard-container {\n  max-width: 800px;\n  margin: 25px auto;\n  padding: 0 25px 15px 25px;\n  border: solid 1px lightgrey;\n  border-radius: 10px;\n  background: url('ng-wizard-transparent.png') no-repeat right bottom;\n  background-size: contain; }\n\n::ng-deep label {\n  font-weight: bold;\n  margin-right: 15px; }\n\n::ng-deep input.ng-invalid.ng-touched {\n  border: solid 1px red; }\n\n::ng-deep span.error {\n  color: red;\n  margin-left: 15px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXGRldmVudlxcbWVhblxcbmctd2l6YXJkL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBZ0I7RUFDaEIsa0JBQWlCO0VBQ2pCLDBCQUF5QjtFQUN6Qiw0QkFBMkI7RUFDM0Isb0JBQW1CO0VBRW5CLG9FQUE2RTtFQUM3RSx5QkFBd0IsRUFDekI7O0FBRUQ7RUFDRSxrQkFBaUI7RUFDakIsbUJBQWtCLEVBQ25COztBQUVEO0VBQ0Usc0JBQXFCLEVBQ3RCOztBQUVEO0VBQ0UsV0FBVTtFQUNWLGtCQUFpQixFQUNsQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53aXphcmQtY29udGFpbmVyIHtcclxuICBtYXgtd2lkdGg6IDgwMHB4O1xyXG4gIG1hcmdpbjogMjVweCBhdXRvO1xyXG4gIHBhZGRpbmc6IDAgMjVweCAxNXB4IDI1cHg7XHJcbiAgYm9yZGVyOiBzb2xpZCAxcHggbGlnaHRncmV5O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcblxyXG4gIGJhY2tncm91bmQ6IHVybCgnLi4vYXNzZXRzL25nLXdpemFyZC10cmFuc3BhcmVudC5wbmcnKSBuby1yZXBlYXQgcmlnaHQgYm90dG9tO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxufVxyXG5cclxuOjpuZy1kZWVwIGxhYmVsIHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbn1cclxuXHJcbjo6bmctZGVlcCBpbnB1dC5uZy1pbnZhbGlkLm5nLXRvdWNoZWQge1xyXG4gIGJvcmRlcjogc29saWQgMXB4IHJlZDtcclxufVxyXG5cclxuOjpuZy1kZWVwIHNwYW4uZXJyb3Ige1xyXG4gIGNvbG9yOiByZWQ7XHJcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _projects_ng_wizard_src_lib_ng_wizard_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../projects/ng-wizard/src/lib/ng-wizard.module */ "./projects/ng-wizard/src/lib/ng-wizard.module.ts");
/* harmony import */ var _step1_step1_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./step1/step1.component */ "./src/app/step1/step1.component.ts");
/* harmony import */ var _step2_step2_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./step2/step2.component */ "./src/app/step2/step2.component.ts");
/* harmony import */ var _step3_step3_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./step3/step3.component */ "./src/app/step3/step3.component.ts");
/* harmony import */ var _step4_step4_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./step4/step4.component */ "./src/app/step4/step4.component.ts");
/* harmony import */ var _step5_step5_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./step5/step5.component */ "./src/app/step5/step5.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _step1_step1_component__WEBPACK_IMPORTED_MODULE_5__["Step1Component"],
                _step2_step2_component__WEBPACK_IMPORTED_MODULE_6__["Step2Component"],
                _step3_step3_component__WEBPACK_IMPORTED_MODULE_7__["Step3Component"],
                _step4_step4_component__WEBPACK_IMPORTED_MODULE_8__["Step4Component"],
                _step5_step5_component__WEBPACK_IMPORTED_MODULE_9__["Step5Component"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _projects_ng_wizard_src_lib_ng_wizard_module__WEBPACK_IMPORTED_MODULE_4__["NgWizardModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.service.ts":
/*!********************************!*\
  !*** ./src/app/app.service.ts ***!
  \********************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppService = /** @class */ (function () {
    function AppService() {
        this.formValues = {
            lastName: '',
            firstName: '',
            gitUser: '',
            favoriteProject: '',
            ngVersion: 0,
            ngRouter: false,
        };
    }
    AppService.prototype.setFormValues = function (values) {
        this.formValues = __assign({}, this.formValues, values);
    };
    AppService.prototype.step1IsValid = function () {
        return this.formValues.lastName && this.formValues.firstName;
    };
    AppService.prototype.step2IsValid = function () {
        return this.step1IsValid();
    };
    AppService.prototype.step3IsValid = function () {
        return this.step2IsValid() && this.formValues.ngVersion >= 7;
    };
    AppService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], AppService);
    return AppService;
}());



/***/ }),

/***/ "./src/app/step1/step1.component.html":
/*!********************************************!*\
  !*** ./src/app/step1/step1.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [formGroup]=\"form\">\r\n  <h1>Personal information</h1>\r\n  <p>\r\n    <label>Last name*</label>\r\n    <input type=\"text\" formControlName=\"lastName\" />\r\n  </p>\r\n  <p>\r\n    <label>First name*</label>\r\n    <input type=\"text\" formControlName=\"firstName\" />\r\n  </p>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/step1/step1.component.ts":
/*!******************************************!*\
  !*** ./src/app/step1/step1.component.ts ***!
  \******************************************/
/*! exports provided: Step1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Step1Component", function() { return Step1Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _projects_ng_wizard_src_lib_ng_wizard_step_ng_wizard_step__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../projects/ng-wizard/src/lib/ng-wizard-step/ng-wizard-step */ "./projects/ng-wizard/src/lib/ng-wizard-step/ng-wizard-step.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Step1Component = /** @class */ (function (_super) {
    __extends(Step1Component, _super);
    function Step1Component(service) {
        var _this = _super.call(this) || this;
        _this.service = service;
        _this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
        });
        return _this;
    }
    Step1Component.prototype.ngOnInit = function () {
        this.form.get('lastName').setValue(this.service.formValues.lastName);
        this.form.get('firstName').setValue(this.service.formValues.firstName);
    };
    Step1Component.prototype.wsIsValid = function () {
        this.form.get('lastName').markAsTouched();
        this.form.get('firstName').markAsTouched();
        return this.form.valid;
    };
    Step1Component.prototype.wsOnNext = function () {
        this.service.setFormValues(this.form.value);
    };
    Step1Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-step1',
            template: __webpack_require__(/*! ./step1.component.html */ "./src/app/step1/step1.component.html"),
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"]])
    ], Step1Component);
    return Step1Component;
}(_projects_ng_wizard_src_lib_ng_wizard_step_ng_wizard_step__WEBPACK_IMPORTED_MODULE_1__["NgWizardStep"]));



/***/ }),

/***/ "./src/app/step2/step2.component.html":
/*!********************************************!*\
  !*** ./src/app/step2/step2.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [formGroup]=\"form\">\r\n  <h1>Developer profile</h1>\r\n  <p>\r\n    <label>GitHub username</label>\r\n    <input type=\"text\" formControlName=\"gitUser\" />\r\n  </p>\r\n  <p>\r\n    <label>Favorite GitHub project</label>\r\n    <input type=\"text\" formControlName=\"favoriteProject\" />\r\n  </p>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/step2/step2.component.ts":
/*!******************************************!*\
  !*** ./src/app/step2/step2.component.ts ***!
  \******************************************/
/*! exports provided: Step2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Step2Component", function() { return Step2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _projects_ng_wizard_src_lib_ng_wizard_step_ng_wizard_step__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../projects/ng-wizard/src/lib/ng-wizard-step/ng-wizard-step */ "./projects/ng-wizard/src/lib/ng-wizard-step/ng-wizard-step.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Step2Component = /** @class */ (function (_super) {
    __extends(Step2Component, _super);
    function Step2Component(service, router) {
        var _this = _super.call(this) || this;
        _this.service = service;
        _this.router = router;
        _this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            gitUser: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            favoriteProject: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
        });
        return _this;
    }
    Step2Component.prototype.ngOnInit = function () {
        if (!this.service.step1IsValid()) {
            return this.router.navigate(['personal']);
        }
        this.form.get('gitUser').setValue(this.service.formValues.gitUser);
        this.form.get('favoriteProject').setValue(this.service.formValues.favoriteProject);
    };
    Step2Component.prototype.wsOnNext = function () {
        this.service.setFormValues(this.form.value);
    };
    Step2Component.prototype.wsOnPrevious = function () {
        this.service.setFormValues(this.form.value);
    };
    Step2Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-step2',
            template: __webpack_require__(/*! ./step2.component.html */ "./src/app/step2/step2.component.html"),
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], Step2Component);
    return Step2Component;
}(_projects_ng_wizard_src_lib_ng_wizard_step_ng_wizard_step__WEBPACK_IMPORTED_MODULE_1__["NgWizardStep"]));



/***/ }),

/***/ "./src/app/step3/step3.component.html":
/*!********************************************!*\
  !*** ./src/app/step3/step3.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [formGroup]=\"form\">\r\n  <h1>Angular usage</h1>\r\n  <p>\r\n    <label>Your project's Angular version*</label>\r\n    <input type=\"number\" formControlName=\"ngVersion\" size=\"3\"/>\r\n    <span class=\"error\"\r\n          *ngIf=\"form.get('ngVersion').touched && !form.get('ngVersion').valid\">\r\n      Version must be equal to or greater than 7.</span>\r\n  </p>\r\n  <p>\r\n    <input type=\"checkbox\" formControlName=\"ngRouter\">\r\n    <label>Your projects includes Angular's Router</label>\r\n  </p>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/step3/step3.component.ts":
/*!******************************************!*\
  !*** ./src/app/step3/step3.component.ts ***!
  \******************************************/
/*! exports provided: Step3Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Step3Component", function() { return Step3Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _projects_ng_wizard_src_lib_ng_wizard_step_ng_wizard_step__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../projects/ng-wizard/src/lib/ng-wizard-step/ng-wizard-step */ "./projects/ng-wizard/src/lib/ng-wizard-step/ng-wizard-step.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Step3Component = /** @class */ (function (_super) {
    __extends(Step3Component, _super);
    function Step3Component(service, router) {
        var _this = _super.call(this) || this;
        _this.service = service;
        _this.router = router;
        _this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            ngVersion: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _this.validateNgVersion]),
            ngRouter: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
        });
        return _this;
    }
    Step3Component.prototype.ngOnInit = function () {
        if (!this.service.step2IsValid()) {
            return this.router.navigate(['developer']);
        }
        this.form.get('ngVersion').setValue(this.service.formValues.ngVersion);
        this.form.get('ngRouter').setValue(this.service.formValues.ngRouter);
    };
    Step3Component.prototype.wsIsValid = function () {
        this.form.get('ngVersion').markAsTouched();
        return this.form.valid;
    };
    Step3Component.prototype.wsOnNext = function () {
        this.service.setFormValues(this.form.value);
    };
    Step3Component.prototype.wsOnPrevious = function () {
        this.service.setFormValues(this.form.value);
    };
    Step3Component.prototype.validateNgVersion = function (control) {
        return control.value && control.value >= 7 ? null : { validateNgVersion: { valid: false } };
    };
    Step3Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-step3',
            template: __webpack_require__(/*! ./step3.component.html */ "./src/app/step3/step3.component.html"),
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], Step3Component);
    return Step3Component;
}(_projects_ng_wizard_src_lib_ng_wizard_step_ng_wizard_step__WEBPACK_IMPORTED_MODULE_1__["NgWizardStep"]));



/***/ }),

/***/ "./src/app/step4/step4.component.html":
/*!********************************************!*\
  !*** ./src/app/step4/step4.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Confirmation</h1>\r\n<table>\r\n  <tr>\r\n    <td>Last name</td>\r\n    <td>{{values.lastName}}</td>\r\n  </tr>\r\n  <tr>\r\n    <td>First name</td>\r\n    <td>{{values.firstName}}</td>\r\n  </tr>\r\n  <tr>\r\n    <td>GitHub username</td>\r\n    <td>{{values.gitUser}}</td>\r\n  </tr>\r\n  <tr>\r\n    <td>Favorite GitHub project</td>\r\n    <td>{{values.favoriteProject}}</td>\r\n  </tr>\r\n  <tr>\r\n    <td>Angular version</td>\r\n    <td>{{values.ngVersion}}</td>\r\n  </tr>\r\n  <tr>\r\n    <td>Angular router</td>\r\n    <td>{{values.ngRouter ? 'Yes' : 'No'}}</td>\r\n  </tr>\r\n</table>\r\n\r\n<br/><br/>\r\nTODO: Rename next button to 'Confirm' and previous button to 'Edit'\r\n"

/***/ }),

/***/ "./src/app/step4/step4.component.ts":
/*!******************************************!*\
  !*** ./src/app/step4/step4.component.ts ***!
  \******************************************/
/*! exports provided: Step4Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Step4Component", function() { return Step4Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _projects_ng_wizard_src_lib_ng_wizard_step_ng_wizard_step__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../projects/ng-wizard/src/lib/ng-wizard-step/ng-wizard-step */ "./projects/ng-wizard/src/lib/ng-wizard-step/ng-wizard-step.ts");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Step4Component = /** @class */ (function (_super) {
    __extends(Step4Component, _super);
    function Step4Component(service, router) {
        var _this = _super.call(this) || this;
        _this.service = service;
        _this.router = router;
        return _this;
    }
    Step4Component.prototype.ngOnInit = function () {
        if (!this.service.step3IsValid()) {
            return this.router.navigate(['angular']);
        }
        this.values = this.service.formValues;
    };
    Step4Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-step4',
            template: __webpack_require__(/*! ./step4.component.html */ "./src/app/step4/step4.component.html"),
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], Step4Component);
    return Step4Component;
}(_projects_ng_wizard_src_lib_ng_wizard_step_ng_wizard_step__WEBPACK_IMPORTED_MODULE_1__["NgWizardStep"]));



/***/ }),

/***/ "./src/app/step5/step5.component.html":
/*!********************************************!*\
  !*** ./src/app/step5/step5.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>All steps completed!</h1>\r\n<br/>\r\nTODO: remove previous button and disable navigation\r\n"

/***/ }),

/***/ "./src/app/step5/step5.component.ts":
/*!******************************************!*\
  !*** ./src/app/step5/step5.component.ts ***!
  \******************************************/
/*! exports provided: Step5Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Step5Component", function() { return Step5Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _projects_ng_wizard_src_lib_ng_wizard_step_ng_wizard_step__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../projects/ng-wizard/src/lib/ng-wizard-step/ng-wizard-step */ "./projects/ng-wizard/src/lib/ng-wizard-step/ng-wizard-step.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Step5Component = /** @class */ (function (_super) {
    __extends(Step5Component, _super);
    function Step5Component() {
        return _super.call(this) || this;
    }
    Step5Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-step5',
            template: __webpack_require__(/*! ./step5.component.html */ "./src/app/step5/step5.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], Step5Component);
    return Step5Component;
}(_projects_ng_wizard_src_lib_ng_wizard_step_ng_wizard_step__WEBPACK_IMPORTED_MODULE_1__["NgWizardStep"]));



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\devenv\mean\ng-wizard\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map