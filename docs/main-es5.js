(function () {
  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

  function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "./projects/ng-wizard/src/lib/ng-wizard-buttons/ng-wizard-buttons.component.ts":
    /*!*************************************************************************************!*\
      !*** ./projects/ng-wizard/src/lib/ng-wizard-buttons/ng-wizard-buttons.component.ts ***!
      \*************************************************************************************/

    /*! exports provided: NgWizardButtonsComponent */

    /***/
    function projectsNgWizardSrcLibNgWizardButtonsNgWizardButtonsComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgWizardButtonsComponent", function () {
        return NgWizardButtonsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ng_wizard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../ng-wizard.service */
      "./projects/ng-wizard/src/lib/ng-wizard.service.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      function NgWizardButtonsComponent_div_1_button_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgWizardButtonsComponent_div_1_button_1_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22);

            var currentStepData_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngIf;

            var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r20.goToPath(currentStepData_r16.options.buttons == null ? null : currentStepData_r16.options.buttons.extra.path);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var currentStepData_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngIf;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", currentStepData_r16.options.buttons.extra.label, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        }
      }

      function NgWizardButtonsComponent_div_1_button_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgWizardButtonsComponent_div_1_button_2_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25);

            var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r24.goToPreviousStep();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var currentStepData_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngIf;

          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", (currentStepData_r16.options.buttons == null ? null : currentStepData_r16.options.buttons.previous == null ? null : currentStepData_r16.options.buttons.previous.label) || ctx_r18.wizardOptions.buttons.previous.label, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        }
      }

      function NgWizardButtonsComponent_div_1_button_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgWizardButtonsComponent_div_1_button_3_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28);

            var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r27.goToNextStep();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var currentStepData_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngIf;

          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", (currentStepData_r16.options.buttons == null ? null : currentStepData_r16.options.buttons.next == null ? null : currentStepData_r16.options.buttons.next.label) || ctx_r19.wizardOptions.buttons.next.label, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        }
      }

      function NgWizardButtonsComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgWizardButtonsComponent_div_1_button_1_Template, 2, 1, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NgWizardButtonsComponent_div_1_button_2_Template, 2, 1, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NgWizardButtonsComponent_div_1_button_3_Template, 2, 1, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var currentStepData_r16 = ctx.ngIf;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", currentStepData_r16.options.buttons == null ? null : currentStepData_r16.options.buttons.extra);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", currentStepData_r16.previousStep && !(currentStepData_r16.options.buttons == null ? null : currentStepData_r16.options.buttons.previous == null ? null : currentStepData_r16.options.buttons.previous.hidden));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", currentStepData_r16.nextStep && !(currentStepData_r16.options.buttons == null ? null : currentStepData_r16.options.buttons.next == null ? null : currentStepData_r16.options.buttons.next.hidden));
        }
      }

      var NgWizardButtonsComponent = /*#__PURE__*/function () {
        function NgWizardButtonsComponent(service) {
          _classCallCheck(this, NgWizardButtonsComponent);

          this.service = service;
        }

        _createClass(NgWizardButtonsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.currentStepData$ = this.service.getCurrentStepDataAsObservable();
            this.wizardOptions = this.service.wizardOptions;
          }
        }, {
          key: "goToNextStep",
          value: function goToNextStep() {
            this.service.navigateToNextStep();
          }
        }, {
          key: "goToPreviousStep",
          value: function goToPreviousStep() {
            this.service.navigateToPreviousStep();
          }
        }, {
          key: "goToPath",
          value: function goToPath(path) {
            this.service.navigateToPath(path);
          }
        }]);

        return NgWizardButtonsComponent;
      }();

      NgWizardButtonsComponent.ɵfac = function NgWizardButtonsComponent_Factory(t) {
        return new (t || NgWizardButtonsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_wizard_service__WEBPACK_IMPORTED_MODULE_1__["NgWizardService"]));
      };

      NgWizardButtonsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NgWizardButtonsComponent,
        selectors: [["ng-wizard-buttons"]],
        decls: 3,
        vars: 3,
        consts: [[1, "ng-wizard-buttons-container"], ["class", "ng-wizard-buttons", 4, "ngIf"], [1, "ng-wizard-buttons"], ["class", "ng-wizard-button-extra", 3, "click", 4, "ngIf"], ["class", "ng-wizard-button-previous", 3, "click", 4, "ngIf"], ["class", "ng-wizard-button-next", 3, "click", 4, "ngIf"], [1, "ng-wizard-button-extra", 3, "click"], [1, "ng-wizard-button-label", 3, "innerHTML"], [1, "ng-wizard-button-previous", 3, "click"], [1, "ng-wizard-button-next", 3, "click"]],
        template: function NgWizardButtonsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgWizardButtonsComponent_div_1_Template, 4, 3, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx.currentStepData$));
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9uZy13aXphcmQvc3JjL2xpYi9uZy13aXphcmQtYnV0dG9ucy9uZy13aXphcmQtYnV0dG9ucy5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgWizardButtonsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'ng-wizard-buttons',
            templateUrl: './ng-wizard-buttons.component.html',
            styleUrls: ['./ng-wizard-buttons.component.scss']
          }]
        }], function () {
          return [{
            type: _ng_wizard_service__WEBPACK_IMPORTED_MODULE_1__["NgWizardService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./projects/ng-wizard/src/lib/ng-wizard-error/ng-wizard-error-type.enum.ts":
    /*!*********************************************************************************!*\
      !*** ./projects/ng-wizard/src/lib/ng-wizard-error/ng-wizard-error-type.enum.ts ***!
      \*********************************************************************************/

    /*! exports provided: NgWizardErrorType */

    /***/
    function projectsNgWizardSrcLibNgWizardErrorNgWizardErrorTypeEnumTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgWizardErrorType", function () {
        return NgWizardErrorType;
      }); // TODO: evaluate if this is useful


      var NgWizardErrorType;

      (function (NgWizardErrorType) {
        NgWizardErrorType[NgWizardErrorType["NO_WIZARD_ROUTE"] = 0] = "NO_WIZARD_ROUTE";
        NgWizardErrorType[NgWizardErrorType["NO_CHILD_ROUTES"] = 1] = "NO_CHILD_ROUTES";
        NgWizardErrorType[NgWizardErrorType["NO_WS_INTERFACE"] = 2] = "NO_WS_INTERFACE";
      })(NgWizardErrorType || (NgWizardErrorType = {}));
      /***/

    },

    /***/
    "./projects/ng-wizard/src/lib/ng-wizard-error/ng-wizard-error.component.ts":
    /*!*********************************************************************************!*\
      !*** ./projects/ng-wizard/src/lib/ng-wizard-error/ng-wizard-error.component.ts ***!
      \*********************************************************************************/

    /*! exports provided: NgWizardErrorComponent */

    /***/
    function projectsNgWizardSrcLibNgWizardErrorNgWizardErrorComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgWizardErrorComponent", function () {
        return NgWizardErrorComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ng_wizard_error_type_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./ng-wizard-error-type.enum */
      "./projects/ng-wizard/src/lib/ng-wizard-error/ng-wizard-error-type.enum.ts");
      /* harmony import */


      var _ng_wizard_error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./ng-wizard.error */
      "./projects/ng-wizard/src/lib/ng-wizard-error/ng-wizard.error.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      function NgWizardErrorComponent_div_0_span_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" No route configuration for the ", ctx_r2.error.wizardComponentName, " found.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Add a route for the ", ctx_r2.error.wizardComponentName, " to your AppRoutingModule.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("const routes: Routes = [\n    { path: '', component: ", ctx_r2.error.wizardComponentName, " },\n];\n\n@NgModule({\n  imports: [RouterModule.forRoot(routes)],\n  exports: [RouterModule]\n})\nexport class AppRoutingModule { }");
        }
      }

      function NgWizardErrorComponent_div_0_span_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" No child routes for the ", ctx_r3.error.wizardComponentName, " found.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Add at least one child route for the ", ctx_r3.error.wizardComponentName, " to your AppRoutingModule.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("{ path: '", ctx_r3.error.wizardPath, "', component: ", ctx_r3.error.wizardComponentName, ", children: [\n    { path: 'step1', component: Step1Component },\n    { path: '**', redirectTo: 'step1' },\n] },");
        }
      }

      function NgWizardErrorComponent_div_0_span_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " or");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" The ", ctx_r4.error.stepComponentName, " does not extend the NgWizardStep class or implement the NgWizardStepInterface.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Extend the NgWizardStep class in your ", ctx_r4.error.stepComponentName, " or implement the NgWizardStepInterface.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("@NgComponent(...)\nexport class ", ctx_r4.error.stepComponentName, " extends NgWizardStep {\n    constructor() {\n        super();\n    }\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("@NgComponent(...)\nexport class ", ctx_r4.error.stepComponentName, " implements NgWizardStepInterface {\n    wsIsValid() {\n        return true;\n    }\n    wsOnNext() { }\n    wsOnPrevious() { }\n}");
        }
      }

      function NgWizardErrorComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NgWizardErrorComponent_div_0_span_2_Template, 7, 3, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NgWizardErrorComponent_div_0_span_3_Template, 7, 4, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NgWizardErrorComponent_div_0_span_4_Template, 12, 4, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx_r1.error.type);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx_r1.NgWizardErrorType.NO_WIZARD_ROUTE);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx_r1.NgWizardErrorType.NO_CHILD_ROUTES);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx_r1.NgWizardErrorType.NO_WS_INTERFACE);
        }
      }

      var NgWizardErrorComponent = function NgWizardErrorComponent() {
        _classCallCheck(this, NgWizardErrorComponent);

        this.NgWizardErrorType = _ng_wizard_error_type_enum__WEBPACK_IMPORTED_MODULE_1__["NgWizardErrorType"];
      };

      NgWizardErrorComponent.ɵfac = function NgWizardErrorComponent_Factory(t) {
        return new (t || NgWizardErrorComponent)();
      };

      NgWizardErrorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NgWizardErrorComponent,
        selectors: [["ng-wizard-error"]],
        inputs: {
          error: "error"
        },
        decls: 1,
        vars: 1,
        consts: [["class", "ng-wizard-error", 4, "ngIf"], [1, "ng-wizard-error"], [1, "ng-wizard-error-message", 3, "ngSwitch"], ["class", "no-wizard-route", 4, "ngSwitchCase"], ["class", "no-child-routes", 4, "ngSwitchCase"], ["class", "no-ws-interface", 4, "ngSwitchCase"], [1, "no-wizard-route"], [1, "no-child-routes"], [1, "no-ws-interface"]],
        template: function NgWizardErrorComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NgWizardErrorComponent_div_0_Template, 5, 4, "div", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.error);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitchCase"]],
        styles: [".ng-wizard-error[_ngcontent-%COMP%] {\n  border: solid 1px #D71117;\n  border-radius: 5px;\n  color: #D71117;\n  padding: 10px 10px 0 10px;\n  margin-top: 10px;\n}\n.ng-wizard-error[_ngcontent-%COMP%]   .ng-wizard-error-message[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\n  display: inline-block;\n  border-radius: 3px;\n  background-color: rgba(218, 215, 197, 0.4);\n  color: #4D4D4D;\n  padding: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL25nLXdpemFyZC9zcmMvbGliL25nLXdpemFyZC1lcnJvci9uZy13aXphcmQtZXJyb3IuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRyx5QkFBQTtFQUNELGtCQUFBO0VBRUEsY0FOVTtFQU9WLHlCQUFBO0VBQ0EsZ0JBQUE7QUFGRjtBQUlFO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtFQUNBLDBDQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7QUFGSiIsImZpbGUiOiJwcm9qZWN0cy9uZy13aXphcmQvc3JjL2xpYi9uZy13aXphcmQtZXJyb3Ivbmctd2l6YXJkLWVycm9yLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGVycm9yLXJlZDogI0Q3MTExNztcclxuXHJcbi5uZy13aXphcmQtZXJyb3Ige1xyXG4gICBib3JkZXI6IHNvbGlkIDFweCAkZXJyb3ItcmVkO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuXHJcbiAgY29sb3I6ICRlcnJvci1yZWQ7XHJcbiAgcGFkZGluZzogMTBweCAxMHB4IDAgMTBweDtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG5cclxuICAubmctd2l6YXJkLWVycm9yLW1lc3NhZ2UgcHJlIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjE4LDIxNSwxOTcsLjQpO1xyXG4gICAgY29sb3I6ICM0RDRENEQ7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gIH1cclxufVxyXG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgWizardErrorComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'ng-wizard-error',
            templateUrl: './ng-wizard-error.component.html',
            styleUrls: ['./ng-wizard-error.component.scss']
          }]
        }], null, {
          error: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "./projects/ng-wizard/src/lib/ng-wizard-error/ng-wizard.error.ts":
    /*!***********************************************************************!*\
      !*** ./projects/ng-wizard/src/lib/ng-wizard-error/ng-wizard.error.ts ***!
      \***********************************************************************/

    /*! exports provided: NgWizardError, NoWizardRoute, NoChildRoutes, NoWsInterface */

    /***/
    function projectsNgWizardSrcLibNgWizardErrorNgWizardErrorTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgWizardError", function () {
        return NgWizardError;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NoWizardRoute", function () {
        return NoWizardRoute;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NoChildRoutes", function () {
        return NoChildRoutes;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NoWsInterface", function () {
        return NoWsInterface;
      });
      /* harmony import */


      var _ng_wizard_error_type_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./ng-wizard-error-type.enum */
      "./projects/ng-wizard/src/lib/ng-wizard-error/ng-wizard-error-type.enum.ts");

      var NgWizardError = /*#__PURE__*/function (_Error) {
        _inherits(NgWizardError, _Error);

        var _super = _createSuper(NgWizardError);

        function NgWizardError(type, message) {
          var _this;

          _classCallCheck(this, NgWizardError);

          _this = _super.call(this, message);
          _this.wizardComponentName = '';
          _this.wizardPath = '';
          _this.stepComponentName = '';
          _this.type = type;
          return _this;
        }

        return NgWizardError;
      }( /*#__PURE__*/_wrapNativeSuper(Error));

      var NoWizardRoute = /*#__PURE__*/function (_NgWizardError) {
        _inherits(NoWizardRoute, _NgWizardError);

        var _super2 = _createSuper(NoWizardRoute);

        function NoWizardRoute(wizardComponentName) {
          var _this2;

          _classCallCheck(this, NoWizardRoute);

          _this2 = _super2.call(this, _ng_wizard_error_type_enum__WEBPACK_IMPORTED_MODULE_0__["NgWizardErrorType"].NO_WIZARD_ROUTE, "No route configuration for the ".concat(wizardComponentName, " found."));
          _this2.wizardComponentName = wizardComponentName;
          return _this2;
        }

        return NoWizardRoute;
      }(NgWizardError);

      var NoChildRoutes = /*#__PURE__*/function (_NgWizardError2) {
        _inherits(NoChildRoutes, _NgWizardError2);

        var _super3 = _createSuper(NoChildRoutes);

        function NoChildRoutes(wizardComponentName, wizardPath) {
          var _this3;

          _classCallCheck(this, NoChildRoutes);

          _this3 = _super3.call(this, _ng_wizard_error_type_enum__WEBPACK_IMPORTED_MODULE_0__["NgWizardErrorType"].NO_CHILD_ROUTES, "No child routes for the ".concat(wizardComponentName, " found."));
          _this3.wizardComponentName = wizardComponentName;
          _this3.wizardPath = wizardPath;
          return _this3;
        }

        return NoChildRoutes;
      }(NgWizardError);

      var NoWsInterface = /*#__PURE__*/function (_NgWizardError3) {
        _inherits(NoWsInterface, _NgWizardError3);

        var _super4 = _createSuper(NoWsInterface);

        function NoWsInterface(stepComponentName) {
          var _this4;

          _classCallCheck(this, NoWsInterface);

          _this4 = _super4.call(this, _ng_wizard_error_type_enum__WEBPACK_IMPORTED_MODULE_0__["NgWizardErrorType"].NO_WS_INTERFACE, "The ".concat(stepComponentName, " does not extend the NgWizardStep class or implement the NgWizardStepInterface."));
          _this4.stepComponentName = stepComponentName;
          return _this4;
        }

        return NoWsInterface;
      }(NgWizardError);
      /***/

    },

    /***/
    "./projects/ng-wizard/src/lib/ng-wizard-navigation/ng-wizard-navigation.component.ts":
    /*!*******************************************************************************************!*\
      !*** ./projects/ng-wizard/src/lib/ng-wizard-navigation/ng-wizard-navigation.component.ts ***!
      \*******************************************************************************************/

    /*! exports provided: NgWizardNavigationComponent */

    /***/
    function projectsNgWizardSrcLibNgWizardNavigationNgWizardNavigationComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgWizardNavigationComponent", function () {
        return NgWizardNavigationComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ng_wizard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../ng-wizard.service */
      "./projects/ng-wizard/src/lib/ng-wizard.service.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      var _c0 = function _c0(a0, a1) {
        return {
          "ng-wizard-navigation-link": a0,
          "ng-wizard-navigation-disabled": a1
        };
      };

      function NgWizardNavigationComponent_li_3_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var stepData_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](3, _c0, !(ctx_r7.currentStepData == null ? null : ctx_r7.currentStepData.options.disableNavigation), ctx_r7.currentStepData == null ? null : ctx_r7.currentStepData.options.disableNavigation));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", stepData_r6.options.icon || ctx_r7.wizardOptions.navBar.icons.previous, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", stepData_r6.options.title, " ");
        }
      }

      function NgWizardNavigationComponent_li_3_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var stepData_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", stepData_r6.options.icon || ctx_r8.wizardOptions.navBar.icons.current, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", stepData_r6.options.title, " ");
        }
      }

      function NgWizardNavigationComponent_li_3_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var stepData_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", stepData_r6.options.icon || ctx_r9.wizardOptions.navBar.icons.next, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", stepData_r6.options.title, " ");
        }
      }

      function NgWizardNavigationComponent_li_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgWizardNavigationComponent_li_3_Template_li_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

            var stepData_r6 = ctx.$implicit;

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r13.goToStep(stepData_r6);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgWizardNavigationComponent_li_3_div_1_Template, 4, 6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NgWizardNavigationComponent_li_3_div_2_Template, 4, 2, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NgWizardNavigationComponent_li_3_div_3_Template, 4, 2, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var stepData_r6 = ctx.$implicit;

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (stepData_r6 == null ? null : stepData_r6.order) < (ctx_r5.currentStepData == null ? null : ctx_r5.currentStepData.order));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (stepData_r6 == null ? null : stepData_r6.order) === (ctx_r5.currentStepData == null ? null : ctx_r5.currentStepData.order));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (stepData_r6 == null ? null : stepData_r6.order) > (ctx_r5.currentStepData == null ? null : ctx_r5.currentStepData.order));
        }
      }

      var NgWizardNavigationComponent = /*#__PURE__*/function () {
        function NgWizardNavigationComponent(service) {
          _classCallCheck(this, NgWizardNavigationComponent);

          this.service = service;
        }

        _createClass(NgWizardNavigationComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this5 = this;

            this.stepData$ = this.service.getStepDataChangesAsObservable();
            this.service.getCurrentStepDataAsObservable().subscribe(function (stepData) {
              return _this5.currentStepData = stepData;
            });
            this.wizardOptions = this.service.wizardOptions;
          }
        }, {
          key: "goToStep",
          value: function goToStep(stepData) {
            if (this.currentStepData && this.currentStepData.options && this.currentStepData.options.disableNavigation || stepData.order >= this.currentStepData.order) {
              return;
            }

            this.service.navigateToStep(stepData);
          }
        }]);

        return NgWizardNavigationComponent;
      }();

      NgWizardNavigationComponent.ɵfac = function NgWizardNavigationComponent_Factory(t) {
        return new (t || NgWizardNavigationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_wizard_service__WEBPACK_IMPORTED_MODULE_1__["NgWizardService"]));
      };

      NgWizardNavigationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NgWizardNavigationComponent,
        selectors: [["ng-wizard-navigation"]],
        decls: 5,
        vars: 3,
        consts: [[1, "ng-wizard-navigation-container"], [1, "ng-wizard-navigation"], [1, "ng-wizard-navigation-list"], ["class", "ng-wizard-navigation-list-item", 3, "click", 4, "ngFor", "ngForOf"], [1, "ng-wizard-navigation-list-item", 3, "click"], [3, "ngClass", 4, "ngIf"], ["class", "ng-wizard-navigation-active", 4, "ngIf"], ["class", "ng-wizard-navigation-disabled", 4, "ngIf"], [3, "ngClass"], [1, "ng-wizard-navigation-icon", 3, "innerHTML"], [1, "ng-wizard-navigation-label"], [1, "ng-wizard-navigation-active"], [1, "ng-wizard-navigation-disabled"]],
        template: function NgWizardNavigationComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NgWizardNavigationComponent_li_3_Template, 4, 3, "li", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 1, ctx.stepData$));
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9uZy13aXphcmQvc3JjL2xpYi9uZy13aXphcmQtbmF2aWdhdGlvbi9uZy13aXphcmQtbmF2aWdhdGlvbi5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgWizardNavigationComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'ng-wizard-navigation',
            templateUrl: './ng-wizard-navigation.component.html',
            styleUrls: ['./ng-wizard-navigation.component.scss']
          }]
        }], function () {
          return [{
            type: _ng_wizard_service__WEBPACK_IMPORTED_MODULE_1__["NgWizardService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./projects/ng-wizard/src/lib/ng-wizard-step/ng-wizard-step.ts":
    /*!*********************************************************************!*\
      !*** ./projects/ng-wizard/src/lib/ng-wizard-step/ng-wizard-step.ts ***!
      \*********************************************************************/

    /*! exports provided: NgWizardStep */

    /***/
    function projectsNgWizardSrcLibNgWizardStepNgWizardStepTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgWizardStep", function () {
        return NgWizardStep;
      });

      var NgWizardStep = /*#__PURE__*/function () {
        function NgWizardStep() {
          _classCallCheck(this, NgWizardStep);
        }

        _createClass(NgWizardStep, [{
          key: "wsIsValid",
          value: function wsIsValid() {
            return true;
          }
        }, {
          key: "wsOnNext",
          value: function wsOnNext() {
            return;
          }
        }, {
          key: "wsOnPrevious",
          value: function wsOnPrevious() {
            return;
          }
        }]);

        return NgWizardStep;
      }();
      /***/

    },

    /***/
    "./projects/ng-wizard/src/lib/ng-wizard.component.ts":
    /*!***********************************************************!*\
      !*** ./projects/ng-wizard/src/lib/ng-wizard.component.ts ***!
      \***********************************************************/

    /*! exports provided: NgWizardComponent */

    /***/
    function projectsNgWizardSrcLibNgWizardComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgWizardComponent", function () {
        return NgWizardComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ng_wizard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./ng-wizard.service */
      "./projects/ng-wizard/src/lib/ng-wizard.service.ts");
      /* harmony import */


      var _ng_wizard_error_ng_wizard_error_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./ng-wizard-error/ng-wizard-error.component */
      "./projects/ng-wizard/src/lib/ng-wizard-error/ng-wizard-error.component.ts");
      /* harmony import */


      var _ng_wizard_navigation_ng_wizard_navigation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./ng-wizard-navigation/ng-wizard-navigation.component */
      "./projects/ng-wizard/src/lib/ng-wizard-navigation/ng-wizard-navigation.component.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ng_wizard_buttons_ng_wizard_buttons_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./ng-wizard-buttons/ng-wizard-buttons.component */
      "./projects/ng-wizard/src/lib/ng-wizard-buttons/ng-wizard-buttons.component.ts");

      var NgWizardComponent = /*#__PURE__*/function () {
        function NgWizardComponent(service) {
          _classCallCheck(this, NgWizardComponent);

          this.service = service;

          try {
            this.service.loadWizardRoutes(this.constructor.name);
          } catch (error) {
            this.error = error;
          }
        }

        _createClass(NgWizardComponent, [{
          key: "onActivate",
          value: function onActivate(componentRef) {
            try {
              this.service.registerActiveComponent(componentRef);
            } catch (error) {
              this.error = error;
            }
          }
        }]);

        return NgWizardComponent;
      }();

      NgWizardComponent.ɵfac = function NgWizardComponent_Factory(t) {
        return new (t || NgWizardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_wizard_service__WEBPACK_IMPORTED_MODULE_1__["NgWizardService"]));
      };

      NgWizardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NgWizardComponent,
        selectors: [["ng-wizard"]],
        decls: 6,
        vars: 1,
        consts: [[1, "ng-wizard-container"], [3, "error"], [1, "ng-wizard-content-container"], [3, "activate"]],
        template: function NgWizardComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ng-wizard-error", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "ng-wizard-navigation");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "router-outlet", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("activate", function NgWizardComponent_Template_router_outlet_activate_4_listener($event) {
              return ctx.onActivate($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "ng-wizard-buttons");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("error", ctx.error);
          }
        },
        directives: [_ng_wizard_error_ng_wizard_error_component__WEBPACK_IMPORTED_MODULE_2__["NgWizardErrorComponent"], _ng_wizard_navigation_ng_wizard_navigation_component__WEBPACK_IMPORTED_MODULE_3__["NgWizardNavigationComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"], _ng_wizard_buttons_ng_wizard_buttons_component__WEBPACK_IMPORTED_MODULE_5__["NgWizardButtonsComponent"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgWizardComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'ng-wizard',
            templateUrl: './ng-wizard.component.html'
          }]
        }], function () {
          return [{
            type: _ng_wizard_service__WEBPACK_IMPORTED_MODULE_1__["NgWizardService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./projects/ng-wizard/src/lib/ng-wizard.module.ts":
    /*!********************************************************!*\
      !*** ./projects/ng-wizard/src/lib/ng-wizard.module.ts ***!
      \********************************************************/

    /*! exports provided: NgWizardModule */

    /***/
    function projectsNgWizardSrcLibNgWizardModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgWizardModule", function () {
        return NgWizardModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ng_wizard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./ng-wizard.component */
      "./projects/ng-wizard/src/lib/ng-wizard.component.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ng_wizard_error_ng_wizard_error_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./ng-wizard-error/ng-wizard-error.component */
      "./projects/ng-wizard/src/lib/ng-wizard-error/ng-wizard-error.component.ts");
      /* harmony import */


      var _ng_wizard_navigation_ng_wizard_navigation_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./ng-wizard-navigation/ng-wizard-navigation.component */
      "./projects/ng-wizard/src/lib/ng-wizard-navigation/ng-wizard-navigation.component.ts");
      /* harmony import */


      var _ng_wizard_buttons_ng_wizard_buttons_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./ng-wizard-buttons/ng-wizard-buttons.component */
      "./projects/ng-wizard/src/lib/ng-wizard-buttons/ng-wizard-buttons.component.ts");
      /* harmony import */


      var _ng_wizard_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./ng-wizard.service */
      "./projects/ng-wizard/src/lib/ng-wizard.service.ts");

      var NgWizardModule = function NgWizardModule() {
        _classCallCheck(this, NgWizardModule);
      };

      NgWizardModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: NgWizardModule
      });
      NgWizardModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function NgWizardModule_Factory(t) {
          return new (t || NgWizardModule)();
        },
        providers: [_ng_wizard_service__WEBPACK_IMPORTED_MODULE_7__["NgWizardService"]],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NgWizardModule, {
          declarations: [_ng_wizard_component__WEBPACK_IMPORTED_MODULE_1__["NgWizardComponent"], _ng_wizard_error_ng_wizard_error_component__WEBPACK_IMPORTED_MODULE_4__["NgWizardErrorComponent"], _ng_wizard_navigation_ng_wizard_navigation_component__WEBPACK_IMPORTED_MODULE_5__["NgWizardNavigationComponent"], _ng_wizard_buttons_ng_wizard_buttons_component__WEBPACK_IMPORTED_MODULE_6__["NgWizardButtonsComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
          exports: [_ng_wizard_component__WEBPACK_IMPORTED_MODULE_1__["NgWizardComponent"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgWizardModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_ng_wizard_component__WEBPACK_IMPORTED_MODULE_1__["NgWizardComponent"], _ng_wizard_error_ng_wizard_error_component__WEBPACK_IMPORTED_MODULE_4__["NgWizardErrorComponent"], _ng_wizard_navigation_ng_wizard_navigation_component__WEBPACK_IMPORTED_MODULE_5__["NgWizardNavigationComponent"], _ng_wizard_buttons_ng_wizard_buttons_component__WEBPACK_IMPORTED_MODULE_6__["NgWizardButtonsComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
            providers: [_ng_wizard_service__WEBPACK_IMPORTED_MODULE_7__["NgWizardService"]],
            exports: [_ng_wizard_component__WEBPACK_IMPORTED_MODULE_1__["NgWizardComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./projects/ng-wizard/src/lib/ng-wizard.service.ts":
    /*!*********************************************************!*\
      !*** ./projects/ng-wizard/src/lib/ng-wizard.service.ts ***!
      \*********************************************************/

    /*! exports provided: NgWizardService */

    /***/
    function projectsNgWizardSrcLibNgWizardServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgWizardService", function () {
        return NgWizardService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ng_wizard_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./ng-wizard.utils */
      "./projects/ng-wizard/src/lib/ng-wizard.utils.ts");
      /* harmony import */


      var _ng_wizard_error_ng_wizard_error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./ng-wizard-error/ng-wizard.error */
      "./projects/ng-wizard/src/lib/ng-wizard-error/ng-wizard.error.ts");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");

      var NgWizardService = /*#__PURE__*/function () {
        function NgWizardService(router) {
          _classCallCheck(this, NgWizardService);

          this.router = router;
          this.stepData = [];
          this.stepDataChanges = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]([]);
        }
        /**
         * Initializes the wizard by parsing the wizard's child routes found in Angular's router config
         * into a list of NgWizardStepData.
         * @param wizardComponentName The name of the wizard component
         */


        _createClass(NgWizardService, [{
          key: "loadWizardRoutes",
          value: function loadWizardRoutes(wizardComponentName) {
            this.wizardRoute = this.getWizardRoute(wizardComponentName);

            if (!this.wizardRoute) {
              throw new _ng_wizard_error_ng_wizard_error__WEBPACK_IMPORTED_MODULE_3__["NoWizardRoute"](wizardComponentName);
            }

            this.wizardOptions = _ng_wizard_utils__WEBPACK_IMPORTED_MODULE_2__["mergeWizardOptions"](this.wizardRoute.data);
            this.loadChildRoutes(this.wizardRoute);
          }
          /**
           * Checks and stores the currently displayed component.
           * @param componentRef A reference to the currently displayed component
           */

        }, {
          key: "registerActiveComponent",
          value: function registerActiveComponent(componentRef) {
            if (!_ng_wizard_utils__WEBPACK_IMPORTED_MODULE_2__["componentImplementsNgWizardStepInterface"](componentRef)) {
              throw new _ng_wizard_error_ng_wizard_error__WEBPACK_IMPORTED_MODULE_3__["NoWsInterface"](componentRef.constructor.name);
            } // Cast to unknown before casting to NgWizardStep to let typescript know we checked and approve
            // this conversion.


            this.currentComponent = componentRef;
            this.currentStepData = _ng_wizard_utils__WEBPACK_IMPORTED_MODULE_2__["getStepDataForUrl"](this.stepData, this.router.url);
            this.currentStepData.componentRef = componentRef;
            this.resetCurrentStep();
            this.currentStepData.isCurrent = true;
            this.onStepDataChange();
          }
          /**
           * Calls the current component's wsOnPrevious() or wsOnNext()) methods and navigates to the given
           * step if the component does not abort or its state is invalid (for next navigation).
           *
           * @param stepData The NgWizardStepData of the the step to navigate to
           */

        }, {
          key: "navigateToStep",
          value: function navigateToStep(stepData) {
            var goAhead;

            if (this.currentStepData.order > stepData.order) {
              goAhead = this.currentComponent.wsOnPrevious();
            } else {
              goAhead = this.currentComponent.wsIsValid() && this.currentComponent.wsOnNext();
            }

            if (goAhead === false) {
              return;
            }

            var stepPath = stepData.path; // If the wizard is added to a specific path in the application we have to join that path and
            // the step's path as the path to navigate to.
            // The Angular Router's relativeTo option does not seem to work when using the hash location
            // strategy.

            if (this.wizardRoute.path) {
              stepPath = [this.wizardRoute.path, stepData.path].join('/');
            }

            if (stepData.options.cleanQueryParameters) {
              return this.router.navigate([stepPath], {
                queryParams: {}
              });
            } else {
              return this.router.navigate([stepPath], {
                queryParamsHandling: 'merge'
              });
            }

            return this.router.navigate([stepPath], {
              queryParamsHandling: 'merge'
            });
          }
          /**
           * Utility method to navigate to the next step.
           */

        }, {
          key: "navigateToNextStep",
          value: function navigateToNextStep() {
            var nextStepData = _ng_wizard_utils__WEBPACK_IMPORTED_MODULE_2__["getStepDataForPath"](this.stepData, this.currentStepData.nextStep);

            return this.navigateToStep(nextStepData);
          }
          /**
           * Utility method to navigate to the previous step.
           */

        }, {
          key: "navigateToPreviousStep",
          value: function navigateToPreviousStep() {
            var previousStepData = _ng_wizard_utils__WEBPACK_IMPORTED_MODULE_2__["getStepDataForPath"](this.stepData, this.currentStepData.previousStep);

            return this.navigateToStep(previousStepData);
          }
          /**
           * Utility method to navigate to a specific route path (external to the wizard)
           */

        }, {
          key: "navigateToPath",
          value: function navigateToPath(path) {
            return this.router.navigate([path], {
              queryParamsHandling: 'merge'
            });
          }
          /**
           * Returns the step data changes as an observable.
           */

        }, {
          key: "getStepDataChangesAsObservable",
          value: function getStepDataChangesAsObservable() {
            return this.stepDataChanges.asObservable();
          }
          /**
           * Returns the current step data as an observable.
           */
          // TODO: Write a unit test for this method

        }, {
          key: "getCurrentStepDataAsObservable",
          value: function getCurrentStepDataAsObservable() {
            return this.getStepDataChangesAsObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (stepDatas) {
              return stepDatas.find(function (stepData) {
                return stepData.isCurrent;
              });
            }));
          }
          /**
           * Returns the Angular Route for the wizard component found in Angular's router config.
           * @param wizardComponentName The name of the wizard component
           */

        }, {
          key: "getWizardRoute",
          value: function getWizardRoute(wizardComponentName) {
            return this.router.config.find(function (route) {
              return route.component && route.component.name === wizardComponentName;
            });
          }
          /**
           * Parses the child routes of the wizard component route and stores them as a list of
           * NgWizardStepData.
           * @param wizardRoute The Angular Route for the wizard component
           */

        }, {
          key: "loadChildRoutes",
          value: function loadChildRoutes(wizardRoute) {
            if (!wizardRoute.children) {
              throw new _ng_wizard_error_ng_wizard_error__WEBPACK_IMPORTED_MODULE_3__["NoChildRoutes"](wizardRoute.component.name, wizardRoute.path);
            }

            var childRoutes = wizardRoute.children.filter(function (route) {
              return route.component;
            });
            this.stepData = [];

            for (var i = 0; i < childRoutes.length; i++) {
              this.registerStep(i, childRoutes[i], childRoutes[i - 1], childRoutes[i + 1]);
            }
          }
          /**
           * Stores a child route as an NgWizardStepData.
           * @param index The index in the list of child routes
           * @param stepRoute The child route
           * @param previousStep The previous child route (undefined if first child route)
           * @param nextStep The next child route (undefined if last child route)
           */

        }, {
          key: "registerStep",
          value: function registerStep(index, stepRoute, previousStep, nextStep) {
            this.stepData.push({
              order: index + 1,
              componentName: stepRoute.component.name,
              path: stepRoute.path,
              previousStep: previousStep ? previousStep.path : undefined,
              nextStep: nextStep ? nextStep.path : undefined,
              isCurrent: false,
              options: _ng_wizard_utils__WEBPACK_IMPORTED_MODULE_2__["getWizardStepOptions"](stepRoute)
            });
            this.onStepDataChange();
          }
          /**
           * Emits a step data change event to the subscribers when the step data changes.
           */

        }, {
          key: "onStepDataChange",
          value: function onStepDataChange() {
            this.stepDataChanges.next(this.stepData);
          }
          /**
           * Sets the isCurrent attribute of all step data to false.
           */

        }, {
          key: "resetCurrentStep",
          value: function resetCurrentStep() {
            this.stepData.map(function (stepData) {
              stepData.isCurrent = false;
              return stepData;
            });
          }
        }]);

        return NgWizardService;
      }();

      NgWizardService.ɵfac = function NgWizardService_Factory(t) {
        return new (t || NgWizardService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
      };

      NgWizardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: NgWizardService,
        factory: NgWizardService.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgWizardService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./projects/ng-wizard/src/lib/ng-wizard.utils.ts":
    /*!*******************************************************!*\
      !*** ./projects/ng-wizard/src/lib/ng-wizard.utils.ts ***!
      \*******************************************************/

    /*! exports provided: componentImplementsNgWizardStepInterface, getStepDataForPath, getStepDataForUrl, getDefaultWizardOptions, mergeWizardOptions, getWizardStepOptions, getStepTitleFromRoute */

    /***/
    function projectsNgWizardSrcLibNgWizardUtilsTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "componentImplementsNgWizardStepInterface", function () {
        return componentImplementsNgWizardStepInterface;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getStepDataForPath", function () {
        return getStepDataForPath;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getStepDataForUrl", function () {
        return getStepDataForUrl;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getDefaultWizardOptions", function () {
        return getDefaultWizardOptions;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "mergeWizardOptions", function () {
        return mergeWizardOptions;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getWizardStepOptions", function () {
        return getWizardStepOptions;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getStepTitleFromRoute", function () {
        return getStepTitleFromRoute;
      });
      /**
       * Returns true if the component extends the NgWizardStep class or implements the NgWizardStepInterface.
       *
       * @param componentRef The reference to the component to verify
       */


      function componentImplementsNgWizardStepInterface(componentRef) {
        return 'wsIsValid' in componentRef && 'wsOnNext' in componentRef && 'wsOnPrevious' in componentRef;
      }
      /**
       * Returns the NgWizardStepData with the given path in the stepData list or undefined if none is
       * found.
       *
       * @param stepData The list with NgWizardStepDatas
       * @param path The path you want to get the NgWizardStepData for
       */


      function getStepDataForPath(stepData, path) {
        return stepData.find(function (data) {
          return data.path === path;
        });
      }
      /**
       * Returns the NgWizardStepData for the given url in the stepData list or undefined if none is
       * found.
       *
       * @param stepData The list with NgWizardStepDatas
       * @param url The url which you want to get the NgWizardStepData for
       */


      function getStepDataForUrl(stepData, url) {
        // gets 'path' in the url '/wizard/path?key=value'
        var path = url.split('/').pop().split('?')[0];
        return getStepDataForPath(stepData, path);
      }
      /**
       * Returns the default wizard options.
       */


      function getDefaultWizardOptions() {
        return {
          navBar: {
            icons: {
              previous: '<i class="material-icons ng-wizard-icon">done</i>',
              current: '<i class="material-icons ng-wizard-icon">create</i>',
              next: '<i class="material-icons ng-wizard-icon">lock</i>'
            }
          },
          buttons: {
            previous: {
              label: '<i class="material-icons ng-wizard-icon">chevron_left</i> Previous'
            },
            next: {
              label: 'Next <i class="material-icons ng-wizard-icon">chevron_right</i>'
            }
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

        return Object.assign(Object.assign({}, getDefaultWizardOptions()), wizardOptions);
      }
      /**
       * Returns the options passed to the wizard step route with an added title attribute.
       *
       * @param route The wizard step route configuration
       */


      function getWizardStepOptions(route) {
        if (!route.data) {
          return {
            title: getStepTitleFromRoute(route)
          };
        }

        return Object.assign(Object.assign({}, route.data), {
          title: getStepTitleFromRoute(route)
        });
      }
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
      /***/

    },

    /***/
    "./src/$$_lazy_route_resource lazy recursive":
    /*!**********************************************************!*\
      !*** ./src/$$_lazy_route_resource lazy namespace object ***!
      \**********************************************************/

    /*! no static exports found */

    /***/
    function src$$_lazy_route_resourceLazyRecursive(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
      /***/
    },

    /***/
    "./src/app/app-routing.module.ts":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _projects_ng_wizard_src_lib_ng_wizard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../projects/ng-wizard/src/lib/ng-wizard.component */
      "./projects/ng-wizard/src/lib/ng-wizard.component.ts");
      /* harmony import */


      var _step1_step1_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./step1/step1.component */
      "./src/app/step1/step1.component.ts");
      /* harmony import */


      var _step2_step2_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./step2/step2.component */
      "./src/app/step2/step2.component.ts");
      /* harmony import */


      var _step3_step3_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./step3/step3.component */
      "./src/app/step3/step3.component.ts");
      /* harmony import */


      var _step4_step4_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./step4/step4.component */
      "./src/app/step4/step4.component.ts");
      /* harmony import */


      var _step5_step5_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./step5/step5.component */
      "./src/app/step5/step5.component.ts");

      var wizardConfig = {// navBar: {
        //   icons: {
        //     previous: '<i class="material-icons ng-wizard-icon">cake</i>',
        //     current: '<i class="material-icons ng-wizard-icon">star</i>',
        //     next: '<i class="material-icons ng-wizard-icon">pool</i>',
        //   },
        // },
        // buttons: {
        //   previous: {
        //     label: '<i class="material-icons ng-wizard-icon">arrow_left</i> Previous',
        //   },
        //   next: {
        //     label: 'Next <i class="material-icons ng-wizard-icon">arrow_right</i>',
        //   },
        // }
      };
      var confirmationStepOptions = {
        buttons: {
          previous: {
            label: '<i class="material-icons ng-wizard-icon">create</i> Edit'
          },
          next: {
            label: 'Confirm <i class="material-icons ng-wizard-icon">done_all</i>'
          }
        }
      };
      var doneStepOptions = {
        icon: '<i class="material-icons ng-wizard-icon">done_all</i>',
        buttons: {
          previous: {
            hidden: true
          }
        },
        disableNavigation: true
      };
      var routes = [{
        path: '',
        component: _projects_ng_wizard_src_lib_ng_wizard_component__WEBPACK_IMPORTED_MODULE_2__["NgWizardComponent"],
        children: [{
          path: 'personal',
          component: _step1_step1_component__WEBPACK_IMPORTED_MODULE_3__["Step1Component"]
        }, {
          path: 'developer',
          component: _step2_step2_component__WEBPACK_IMPORTED_MODULE_4__["Step2Component"]
        }, {
          path: 'angular',
          component: _step3_step3_component__WEBPACK_IMPORTED_MODULE_5__["Step3Component"]
        }, {
          path: 'confirmation',
          component: _step4_step4_component__WEBPACK_IMPORTED_MODULE_6__["Step4Component"],
          data: confirmationStepOptions
        }, {
          path: 'done',
          component: _step5_step5_component__WEBPACK_IMPORTED_MODULE_7__["Step5Component"],
          data: doneStepOptions
        }, {
          path: '**',
          redirectTo: 'personal'
        }],
        data: wizardConfig
      }, {
        path: '**',
        redirectTo: ''
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AppRoutingModule_Factory(t) {
          return new (t || AppRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
          useHash: true
        })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
              useHash: true
            })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/app.component.ts":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var AppComponent = function AppComponent() {
        _classCallCheck(this, AppComponent);
      };

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)();
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 2,
        vars: 0,
        consts: [[1, "wizard-container"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
        styles: [".wizard-container[_ngcontent-%COMP%] {\n  max-width: 800px;\n  margin: auto;\n}\n\n  label {\n  font-weight: bold;\n  margin-right: 15px;\n}\n\n  input.ng-invalid.ng-touched {\n  border: solid 1px red;\n}\n\n  span.error {\n  color: red;\n  margin-left: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxxQkFBQTtBQUNGOztBQUVBO0VBQ0UsVUFBQTtFQUNBLGlCQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2l6YXJkLWNvbnRhaW5lciB7XHJcbiAgbWF4LXdpZHRoOiA4MDBweDtcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbjo6bmctZGVlcCBsYWJlbCB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG59XHJcblxyXG46Om5nLWRlZXAgaW5wdXQubmctaW52YWxpZC5uZy10b3VjaGVkIHtcclxuICBib3JkZXI6IHNvbGlkIDFweCByZWQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCBzcGFuLmVycm9yIHtcclxuICBjb2xvcjogcmVkO1xyXG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG59XHJcbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.scss']
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/app.module.ts":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app-routing.module */
      "./src/app/app-routing.module.ts");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app.component */
      "./src/app/app.component.ts");
      /* harmony import */


      var _projects_ng_wizard_src_lib_ng_wizard_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../projects/ng-wizard/src/lib/ng-wizard.module */
      "./projects/ng-wizard/src/lib/ng-wizard.module.ts");
      /* harmony import */


      var _step1_step1_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./step1/step1.component */
      "./src/app/step1/step1.component.ts");
      /* harmony import */


      var _step2_step2_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./step2/step2.component */
      "./src/app/step2/step2.component.ts");
      /* harmony import */


      var _step3_step3_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./step3/step3.component */
      "./src/app/step3/step3.component.ts");
      /* harmony import */


      var _step4_step4_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./step4/step4.component */
      "./src/app/step4/step4.component.ts");
      /* harmony import */


      var _step5_step5_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./step5/step5.component */
      "./src/app/step5/step5.component.ts");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _projects_ng_wizard_src_lib_ng_wizard_module__WEBPACK_IMPORTED_MODULE_4__["NgWizardModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _step1_step1_component__WEBPACK_IMPORTED_MODULE_5__["Step1Component"], _step2_step2_component__WEBPACK_IMPORTED_MODULE_6__["Step2Component"], _step3_step3_component__WEBPACK_IMPORTED_MODULE_7__["Step3Component"], _step4_step4_component__WEBPACK_IMPORTED_MODULE_8__["Step4Component"], _step5_step5_component__WEBPACK_IMPORTED_MODULE_9__["Step5Component"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _projects_ng_wizard_src_lib_ng_wizard_module__WEBPACK_IMPORTED_MODULE_4__["NgWizardModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _step1_step1_component__WEBPACK_IMPORTED_MODULE_5__["Step1Component"], _step2_step2_component__WEBPACK_IMPORTED_MODULE_6__["Step2Component"], _step3_step3_component__WEBPACK_IMPORTED_MODULE_7__["Step3Component"], _step4_step4_component__WEBPACK_IMPORTED_MODULE_8__["Step4Component"], _step5_step5_component__WEBPACK_IMPORTED_MODULE_9__["Step5Component"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _projects_ng_wizard_src_lib_ng_wizard_module__WEBPACK_IMPORTED_MODULE_4__["NgWizardModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/app.service.ts":
    /*!********************************!*\
      !*** ./src/app/app.service.ts ***!
      \********************************/

    /*! exports provided: AppService */

    /***/
    function srcAppAppServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppService", function () {
        return AppService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var AppService = /*#__PURE__*/function () {
        function AppService() {
          _classCallCheck(this, AppService);

          this.formValues = {
            lastName: '',
            firstName: '',
            gitUser: '',
            favoriteProject: '',
            ngVersion: 0,
            ngRouter: false
          };
        }

        _createClass(AppService, [{
          key: "setFormValues",
          value: function setFormValues(values) {
            this.formValues = Object.assign(Object.assign({}, this.formValues), values);
          }
        }, {
          key: "step1IsValid",
          value: function step1IsValid() {
            return this.formValues.lastName && this.formValues.firstName;
          }
        }, {
          key: "step2IsValid",
          value: function step2IsValid() {
            return this.step1IsValid();
          }
        }, {
          key: "step3IsValid",
          value: function step3IsValid() {
            return this.step2IsValid() && this.formValues.ngVersion >= 7;
          }
        }]);

        return AppService;
      }();

      AppService.ɵfac = function AppService_Factory(t) {
        return new (t || AppService)();
      };

      AppService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: AppService,
        factory: AppService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/step1/step1.component.ts":
    /*!******************************************!*\
      !*** ./src/app/step1/step1.component.ts ***!
      \******************************************/

    /*! exports provided: Step1Component */

    /***/
    function srcAppStep1Step1ComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Step1Component", function () {
        return Step1Component;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _projects_ng_wizard_src_lib_ng_wizard_step_ng_wizard_step__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../projects/ng-wizard/src/lib/ng-wizard-step/ng-wizard-step */
      "./projects/ng-wizard/src/lib/ng-wizard-step/ng-wizard-step.ts");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../app.service */
      "./src/app/app.service.ts");

      var Step1Component = /*#__PURE__*/function (_projects_ng_wizard_s) {
        _inherits(Step1Component, _projects_ng_wizard_s);

        var _super5 = _createSuper(Step1Component);

        function Step1Component(service) {
          var _this6;

          _classCallCheck(this, Step1Component);

          _this6 = _super5.call(this);
          _this6.service = service;
          _this6.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
          });
          return _this6;
        }

        _createClass(Step1Component, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.form.get('lastName').setValue(this.service.formValues.lastName);
            this.form.get('firstName').setValue(this.service.formValues.firstName);
          }
        }, {
          key: "wsIsValid",
          value: function wsIsValid() {
            this.form.get('lastName').markAsTouched();
            this.form.get('firstName').markAsTouched();
            return this.form.valid;
          }
        }, {
          key: "wsOnNext",
          value: function wsOnNext() {
            this.service.setFormValues(this.form.value);
          }
        }]);

        return Step1Component;
      }(_projects_ng_wizard_src_lib_ng_wizard_step_ng_wizard_step__WEBPACK_IMPORTED_MODULE_1__["NgWizardStep"]);

      Step1Component.ɵfac = function Step1Component_Factory(t) {
        return new (t || Step1Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"]));
      };

      Step1Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: Step1Component,
        selectors: [["app-step1"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
        decls: 11,
        vars: 1,
        consts: [[3, "formGroup"], ["type", "text", "formControlName", "lastName"], ["type", "text", "formControlName", "firstName"]],
        template: function Step1Component_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Personal information");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Last name*");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "First name*");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Step1Component, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-step1',
            templateUrl: './step1.component.html'
          }]
        }], function () {
          return [{
            type: _app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/step2/step2.component.ts":
    /*!******************************************!*\
      !*** ./src/app/step2/step2.component.ts ***!
      \******************************************/

    /*! exports provided: Step2Component */

    /***/
    function srcAppStep2Step2ComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Step2Component", function () {
        return Step2Component;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _projects_ng_wizard_src_lib_ng_wizard_step_ng_wizard_step__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../projects/ng-wizard/src/lib/ng-wizard-step/ng-wizard-step */
      "./projects/ng-wizard/src/lib/ng-wizard-step/ng-wizard-step.ts");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../app.service */
      "./src/app/app.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var Step2Component = /*#__PURE__*/function (_projects_ng_wizard_s2) {
        _inherits(Step2Component, _projects_ng_wizard_s2);

        var _super6 = _createSuper(Step2Component);

        function Step2Component(service, router) {
          var _this7;

          _classCallCheck(this, Step2Component);

          _this7 = _super6.call(this);
          _this7.service = service;
          _this7.router = router;
          _this7.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            gitUser: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            favoriteProject: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
          });
          return _this7;
        }

        _createClass(Step2Component, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (!this.service.step1IsValid()) {
              return this.router.navigate(['personal']);
            }

            this.form.get('gitUser').setValue(this.service.formValues.gitUser);
            this.form.get('favoriteProject').setValue(this.service.formValues.favoriteProject);
          }
        }, {
          key: "wsOnNext",
          value: function wsOnNext() {
            this.service.setFormValues(this.form.value);
          }
        }, {
          key: "wsOnPrevious",
          value: function wsOnPrevious() {
            this.service.setFormValues(this.form.value);
          }
        }]);

        return Step2Component;
      }(_projects_ng_wizard_src_lib_ng_wizard_step_ng_wizard_step__WEBPACK_IMPORTED_MODULE_1__["NgWizardStep"]);

      Step2Component.ɵfac = function Step2Component_Factory(t) {
        return new (t || Step2Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]));
      };

      Step2Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: Step2Component,
        selectors: [["app-step2"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
        decls: 11,
        vars: 1,
        consts: [[3, "formGroup"], ["type", "text", "formControlName", "gitUser"], ["type", "text", "formControlName", "favoriteProject"]],
        template: function Step2Component_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Developer profile");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "GitHub username");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Favorite GitHub project");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Step2Component, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-step2',
            templateUrl: './step2.component.html'
          }]
        }], function () {
          return [{
            type: _app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/step3/step3.component.ts":
    /*!******************************************!*\
      !*** ./src/app/step3/step3.component.ts ***!
      \******************************************/

    /*! exports provided: Step3Component */

    /***/
    function srcAppStep3Step3ComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Step3Component", function () {
        return Step3Component;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _projects_ng_wizard_src_lib_ng_wizard_step_ng_wizard_step__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../projects/ng-wizard/src/lib/ng-wizard-step/ng-wizard-step */
      "./projects/ng-wizard/src/lib/ng-wizard-step/ng-wizard-step.ts");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../app.service */
      "./src/app/app.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      function Step3Component_span_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Version must be equal to or greater than 9.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var Step3Component = /*#__PURE__*/function (_projects_ng_wizard_s3) {
        _inherits(Step3Component, _projects_ng_wizard_s3);

        var _super7 = _createSuper(Step3Component);

        function Step3Component(service, router) {
          var _this8;

          _classCallCheck(this, Step3Component);

          _this8 = _super7.call(this);
          _this8.service = service;
          _this8.router = router;
          _this8.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            ngVersion: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _this8.validateNgVersion]),
            ngRouter: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
          });
          return _this8;
        }

        _createClass(Step3Component, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (!this.service.step2IsValid()) {
              return this.router.navigate(['developer']);
            }

            this.form.get('ngVersion').setValue(this.service.formValues.ngVersion);
            this.form.get('ngRouter').setValue(this.service.formValues.ngRouter);
          }
        }, {
          key: "wsIsValid",
          value: function wsIsValid() {
            this.form.get('ngVersion').markAsTouched();
            return this.form.valid;
          }
        }, {
          key: "wsOnNext",
          value: function wsOnNext() {
            this.service.setFormValues(this.form.value);
          }
        }, {
          key: "wsOnPrevious",
          value: function wsOnPrevious() {
            this.service.setFormValues(this.form.value);
          }
        }, {
          key: "validateNgVersion",
          value: function validateNgVersion(control) {
            return control.value && control.value >= 9 ? null : {
              validateNgVersion: {
                valid: false
              }
            };
          }
        }]);

        return Step3Component;
      }(_projects_ng_wizard_src_lib_ng_wizard_step_ng_wizard_step__WEBPACK_IMPORTED_MODULE_1__["NgWizardStep"]);

      Step3Component.ɵfac = function Step3Component_Factory(t) {
        return new (t || Step3Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]));
      };

      Step3Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: Step3Component,
        selectors: [["app-step3"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
        decls: 12,
        vars: 2,
        consts: [[3, "formGroup"], ["type", "number", "formControlName", "ngVersion", "size", "3"], ["class", "error", 4, "ngIf"], ["type", "checkbox", "formControlName", "ngRouter", "id", "ngRouter"], ["for", "ngRouter"], [1, "error"]],
        template: function Step3Component_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Angular usage");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Your project's Angular version*");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, Step3Component_span_7_Template, 2, 0, "span", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Your projects includes Angular's Router");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("ngVersion").touched && !ctx.form.get("ngVersion").valid);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["CheckboxControlValueAccessor"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Step3Component, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-step3',
            templateUrl: './step3.component.html'
          }]
        }], function () {
          return [{
            type: _app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/step4/step4.component.ts":
    /*!******************************************!*\
      !*** ./src/app/step4/step4.component.ts ***!
      \******************************************/

    /*! exports provided: Step4Component */

    /***/
    function srcAppStep4Step4ComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Step4Component", function () {
        return Step4Component;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _projects_ng_wizard_src_lib_ng_wizard_step_ng_wizard_step__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../projects/ng-wizard/src/lib/ng-wizard-step/ng-wizard-step */
      "./projects/ng-wizard/src/lib/ng-wizard-step/ng-wizard-step.ts");
      /* harmony import */


      var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../app.service */
      "./src/app/app.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var Step4Component = /*#__PURE__*/function (_projects_ng_wizard_s4) {
        _inherits(Step4Component, _projects_ng_wizard_s4);

        var _super8 = _createSuper(Step4Component);

        function Step4Component(service, router) {
          var _this9;

          _classCallCheck(this, Step4Component);

          _this9 = _super8.call(this);
          _this9.service = service;
          _this9.router = router;
          return _this9;
        }

        _createClass(Step4Component, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (!this.service.step3IsValid()) {
              return this.router.navigate(['angular']);
            }

            this.values = this.service.formValues;
          }
        }]);

        return Step4Component;
      }(_projects_ng_wizard_src_lib_ng_wizard_step_ng_wizard_step__WEBPACK_IMPORTED_MODULE_1__["NgWizardStep"]);

      Step4Component.ɵfac = function Step4Component_Factory(t) {
        return new (t || Step4Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
      };

      Step4Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: Step4Component,
        selectors: [["app-step4"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
        decls: 33,
        vars: 6,
        template: function Step4Component_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Confirmation");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "table");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Last name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "First name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "GitHub username");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Favorite GitHub project");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Angular version");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Angular router");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.values.lastName);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.values.firstName);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.values.gitUser);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.values.favoriteProject);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.values.ngVersion);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.values.ngRouter ? "Yes" : "No");
          }
        },
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Step4Component, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-step4',
            templateUrl: './step4.component.html'
          }]
        }], function () {
          return [{
            type: _app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/step5/step5.component.ts":
    /*!******************************************!*\
      !*** ./src/app/step5/step5.component.ts ***!
      \******************************************/

    /*! exports provided: Step5Component */

    /***/
    function srcAppStep5Step5ComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Step5Component", function () {
        return Step5Component;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _projects_ng_wizard_src_lib_ng_wizard_step_ng_wizard_step__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../projects/ng-wizard/src/lib/ng-wizard-step/ng-wizard-step */
      "./projects/ng-wizard/src/lib/ng-wizard-step/ng-wizard-step.ts");

      var Step5Component = /*#__PURE__*/function (_projects_ng_wizard_s5) {
        _inherits(Step5Component, _projects_ng_wizard_s5);

        var _super9 = _createSuper(Step5Component);

        function Step5Component() {
          _classCallCheck(this, Step5Component);

          return _super9.call(this);
        }

        return Step5Component;
      }(_projects_ng_wizard_src_lib_ng_wizard_step_ng_wizard_step__WEBPACK_IMPORTED_MODULE_1__["NgWizardStep"]);

      Step5Component.ɵfac = function Step5Component_Factory(t) {
        return new (t || Step5Component)();
      };

      Step5Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: Step5Component,
        selectors: [["app-step5"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
        decls: 4,
        vars: 0,
        template: function Step5Component_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "All steps completed!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\nNavigation is disabled\n");
          }
        },
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Step5Component, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-step5',
            templateUrl: './step5.component.html'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/environments/environment.ts":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
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

      /***/
    },

    /***/
    "./src/main.ts":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function srcMainTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "./src/app/app.module.ts");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! C:\devenv\mean\ng-wizard\src\main.ts */
      "./src/main.ts");
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map