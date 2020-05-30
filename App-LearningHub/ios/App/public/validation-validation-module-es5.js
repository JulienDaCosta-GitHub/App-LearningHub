function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["validation-validation-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/validation/validation.page.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/validation/validation.page.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppValidationValidationPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header collapse=\"condense\">\n  <ion-toolbar>\n    <ion-title *ngIf=\"projets\">Projets</ion-title>\n    <ion-title *ngIf=\"cours\">Cours</ion-title>\n\n    <ion-buttons slot=\"primary\">\n      <ion-button (click)=\"clickedSearch()\">\n        <ion-icon slot=\"icon-only\" name=\"search\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n\n  <ion-toolbar>\n    <ion-segment value=\"all\">\n      <ion-segment-button value=\"all\" (click)=\"activeProjets()\">\n\n        Projets\n      </ion-segment-button>\n      <ion-segment-button value=\"favorites\" (click)=\"activeCours()\">\n\n        Cours\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n\n  <!--ion-toolbar>\n    <ion-buttons slot=\"primary\">\n      <ion-button (click)=\"clickedSearch()\">\n        <ion-icon slot=\"icon-only\" name=\"search\" class=\"mr-3\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n\n    <h1 class=\"ml-3\" *ngIf=\"projets\">Projets</h1>\n    <h1 class=\"ml-3\" *ngIf=\"cours\">Cours</h1>\n\n    <ion-toolbar class=\"mt-4\">\n      <ion-segment value=\"all\">\n        <ion-segment-button value=\"all\" (click)=\"activeProjets()\">\n          Projets\n        </ion-segment-button>\n        <ion-segment-button value=\"favorites\" (click)=\"activeCours()\">\n          Cours\n        </ion-segment-button>\n      </ion-segment>\n    </ion-toolbar>\n\n  </ion-toolbar-->\n</ion-header>\n\n\n\n<ion-content>\n  <p class=\"ml-4 mt-4\" *ngIf=\"projets\"><b>{{validattionProjetsLength}} Projets</b></p>\n  <p class=\"ml-4 mt-4\" *ngIf=\"cours\"><b>{{validattionCoursLength}} Cours</b></p>\n\n  <ion-grid class=\"d-flex\" *ngIf=\"projets\">\n    <ion-card style=\" width: 44%; height: 37%;\" *ngFor=\"let validation of validationsProjets\">\n      <img style=\"width: 100%;\" [src]=\"validation.url\" />\n      <ion-card-content>\n        <ion-card-title>\n          {{validation.title}}\n        </ion-card-title>\n        <p>\n          {{validation.categorie}}\n        </p>\n      </ion-card-content>\n      <ion-row no-padding>\n\n      </ion-row>\n    </ion-card>\n\n\n  </ion-grid>\n\n  <ion-grid class=\"d-flex\" *ngIf=\"cours\">\n    <ion-card style=\" width: 44%; height: 37%;\" *ngFor=\"let validation of validationsCours\">\n      <img style=\"width: 100%;\" [src]=\"validation.url\" />\n      <ion-card-content>\n        <ion-card-title>\n          {{validation.title}}\n        </ion-card-title>\n        <p>\n          {{validation.categorie}}\n        </p>\n      </ion-card-content>\n      <ion-row no-padding>\n\n      </ion-row>\n    </ion-card>\n\n  </ion-grid>\n\n\n\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/validation/validation-routing.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/validation/validation-routing.module.ts ***!
    \*********************************************************/

  /*! exports provided: ValidationPageRoutingModule */

  /***/
  function srcAppValidationValidationRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ValidationPageRoutingModule", function () {
      return ValidationPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _validation_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./validation.page */
    "./src/app/validation/validation.page.ts");

    var routes = [{
      path: '',
      component: _validation_page__WEBPACK_IMPORTED_MODULE_3__["ValidationPage"]
    }];

    var ValidationPageRoutingModule = function ValidationPageRoutingModule() {
      _classCallCheck(this, ValidationPageRoutingModule);
    };

    ValidationPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ValidationPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/validation/validation.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/validation/validation.module.ts ***!
    \*************************************************/

  /*! exports provided: ValidationPageModule */

  /***/
  function srcAppValidationValidationModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ValidationPageModule", function () {
      return ValidationPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _validation_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./validation-routing.module */
    "./src/app/validation/validation-routing.module.ts");
    /* harmony import */


    var _validation_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./validation.page */
    "./src/app/validation/validation.page.ts");

    var ValidationPageModule = function ValidationPageModule() {
      _classCallCheck(this, ValidationPageModule);
    };

    ValidationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _validation_routing_module__WEBPACK_IMPORTED_MODULE_5__["ValidationPageRoutingModule"]],
      declarations: [_validation_page__WEBPACK_IMPORTED_MODULE_6__["ValidationPage"]]
    })], ValidationPageModule);
    /***/
  },

  /***/
  "./src/app/validation/validation.page.scss":
  /*!*************************************************!*\
    !*** ./src/app/validation/validation.page.scss ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppValidationValidationPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-icon {\n  color: #4343E6;\n}\n\nion-segment {\n  color: #4343E6;\n  margin-top: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rZXJlbm5kb25nYWxhL0RvY3VtZW50cy9HaXRIdWIvQXBwLUxlYXJuaW5nSHViL0FwcC1MZWFybmluZ0h1Yi9zcmMvYXBwL3ZhbGlkYXRpb24vdmFsaWRhdGlvbi5wYWdlLnNjc3MiLCJzcmMvYXBwL3ZhbGlkYXRpb24vdmFsaWRhdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3ZhbGlkYXRpb24vdmFsaWRhdGlvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taWNvbntcbiAgY29sb3I6ICM0MzQzRTY7XG59XG5cbmlvbi1zZWdtZW50IHtcbiAgY29sb3I6ICM0MzQzRTY7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG59XG4iLCJpb24taWNvbiB7XG4gIGNvbG9yOiAjNDM0M0U2O1xufVxuXG5pb24tc2VnbWVudCB7XG4gIGNvbG9yOiAjNDM0M0U2O1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/validation/validation.page.ts":
  /*!***********************************************!*\
    !*** ./src/app/validation/validation.page.ts ***!
    \***********************************************/

  /*! exports provided: ValidationPage */

  /***/
  function srcAppValidationValidationPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ValidationPage", function () {
      return ValidationPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ValidationPage = /*#__PURE__*/function () {
      function ValidationPage() {
        _classCallCheck(this, ValidationPage);

        this.validationsProjets = [{
          id: 0,
          title: 'BarbaJs',
          categorie: 'Web Design',
          url: 'https://i.pinimg.com/236x/ef/8e/a3/ef8ea321f0365aafe631c52e38f1d6b8.jpg'
        }, {
          id: 0,
          title: 'BarbaJs',
          categorie: 'Web Design',
          url: 'https://i.pinimg.com/236x/ef/8e/a3/ef8ea321f0365aafe631c52e38f1d6b8.jpg'
        }];
        this.validattionProjetsLength = this.validationsProjets.length;
        this.validationsCours = [{
          id: 0,
          title: 'BarbaJs',
          categorie: 'Web Design',
          url: 'https://i.pinimg.com/236x/1e/c1/e8/1ec1e82d784b39ae763a93bb43a4e313.jpg'
        }, {
          id: 0,
          title: 'BarbaJs',
          categorie: 'Web Design',
          url: 'https://i.pinimg.com/236x/1e/c1/e8/1ec1e82d784b39ae763a93bb43a4e313.jpg'
        }];
        this.validattionCoursLength = this.validationsCours.length;
        this.projets = true;
        this.cours = false;
      }

      _createClass(ValidationPage, [{
        key: "activeProjets",
        value: function activeProjets() {
          this.projets = true;
          this.cours = false;
        }
      }, {
        key: "activeCours",
        value: function activeCours() {
          this.cours = true;
          this.projets = false;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ValidationPage;
    }();

    ValidationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-validation',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./validation.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/validation/validation.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./validation.page.scss */
      "./src/app/validation/validation.page.scss"))["default"]]
    })], ValidationPage);
    /***/
  }
}]);
//# sourceMappingURL=validation-validation-module-es5.js.map