function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bienvenue-bienvenue-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/bienvenue/bienvenue.page.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/bienvenue/bienvenue.page.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBienvenueBienvenuePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Learning Hub</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n\n\n<ion-content>\n\n  <ion-grid>\n    <div class=\"google\">\n      <ion-button color=\"light\" class=\"btn-google\">Se connecter avec Google\n        <ion-img class=\"google-icon\" src=\"assets/icon/icon-google.png\"></ion-img>\n      </ion-button>\n      <br>\n      <p>OU</p>\n    </div>\n\n    <div class=\"connexion\">\n      <ion-button class=\"btn-connexion\" (click)=\"toConnect()\">Se connecter</ion-button>\n    </div>\n\n    <div class=\"inscription\">\n      <ion-button class=\"btn-inscription\" (click)=\"toInscription()\">S'inscrire</ion-button>\n    </div>\n  </ion-grid>\n\n\n  \n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/bienvenue/bienvenue-routing.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/bienvenue/bienvenue-routing.module.ts ***!
    \*******************************************************/

  /*! exports provided: BienvenuePageRoutingModule */

  /***/
  function srcAppBienvenueBienvenueRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BienvenuePageRoutingModule", function () {
      return BienvenuePageRoutingModule;
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


    var _bienvenue_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./bienvenue.page */
    "./src/app/bienvenue/bienvenue.page.ts");

    var routes = [{
      path: '',
      component: _bienvenue_page__WEBPACK_IMPORTED_MODULE_3__["BienvenuePage"]
    }];

    var BienvenuePageRoutingModule = function BienvenuePageRoutingModule() {
      _classCallCheck(this, BienvenuePageRoutingModule);
    };

    BienvenuePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], BienvenuePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/bienvenue/bienvenue.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/bienvenue/bienvenue.module.ts ***!
    \***********************************************/

  /*! exports provided: BienvenuePageModule */

  /***/
  function srcAppBienvenueBienvenueModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BienvenuePageModule", function () {
      return BienvenuePageModule;
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


    var _bienvenue_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./bienvenue-routing.module */
    "./src/app/bienvenue/bienvenue-routing.module.ts");
    /* harmony import */


    var _bienvenue_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./bienvenue.page */
    "./src/app/bienvenue/bienvenue.page.ts");

    var BienvenuePageModule = function BienvenuePageModule() {
      _classCallCheck(this, BienvenuePageModule);
    };

    BienvenuePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _bienvenue_routing_module__WEBPACK_IMPORTED_MODULE_5__["BienvenuePageRoutingModule"]],
      declarations: [_bienvenue_page__WEBPACK_IMPORTED_MODULE_6__["BienvenuePage"]]
    })], BienvenuePageModule);
    /***/
  },

  /***/
  "./src/app/bienvenue/bienvenue.page.scss":
  /*!***********************************************!*\
    !*** ./src/app/bienvenue/bienvenue.page.scss ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppBienvenueBienvenuePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\n.title {\n  text-align: center;\n  position: relative;\n  top: 200px;\n}\n\n.google {\n  text-align: center;\n  position: relative;\n  top: 280px;\n}\n\n.google .btn-google {\n  --border-radius: 30px;\n  background-color: white;\n}\n\n.google-icon {\n  height: 30px;\n}\n\n.connexion {\n  text-align: center;\n  position: relative;\n  top: 280px;\n}\n\n.connexion .btn-connexion {\n  width: 150px;\n  --border-radius: 30px;\n}\n\n.inscription {\n  text-align: center;\n  position: relative;\n  top: 280px;\n}\n\n.inscription .btn-inscription {\n  width: 150px;\n  margin-top: 10px;\n  --border-radius: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rZXJlbm5kb25nYWxhL0RvY3VtZW50cy9HaXRIdWIvQXBwLUxlYXJuaW5nSHViL0FwcC1MZWFybmluZ0h1Yi9zcmMvYXBwL2JpZW52ZW51ZS9iaWVudmVudWUucGFnZS5zY3NzIiwic3JjL2FwcC9iaWVudmVudWUvYmllbnZlbnVlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBRUEsa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtBQ0FKOztBREdFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FDQUo7O0FER0U7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFFQSxjQUFBO0VBRUEsU0FBQTtBQ0ZKOztBREtFO0VBQ0UscUJBQUE7QUNGSjs7QURLRTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FDRko7O0FES0U7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQ0ZKOztBREtFO0VBQ0UscUJBQUE7RUFDQSx1QkFBQTtBQ0ZKOztBREtFO0VBQ0UsWUFBQTtBQ0ZKOztBREtFO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUNGSjs7QURLRTtFQUNFLFlBQUE7RUFDQSxxQkFBQTtBQ0ZKOztBREtFO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUNGSjs7QURLRTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0FDRkoiLCJmaWxlIjoic3JjL2FwcC9iaWVudmVudWUvYmllbnZlbnVlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjb250YWluZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgdG9wOiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICB9XG4gIFxuICAjY29udGFpbmVyIHN0cm9uZyB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyNnB4O1xuICB9XG4gIFxuICAjY29udGFpbmVyIHAge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsaW5lLWhlaWdodDogMjJweDtcbiAgXG4gICAgY29sb3I6ICM4YzhjOGM7XG4gIFxuICAgIG1hcmdpbjogMDtcbiAgfVxuICBcbiAgI2NvbnRhaW5lciBhIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIH1cbiAgXG4gIC50aXRsZSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDIwMHB4O1xuICB9XG4gIFxuICAuZ29vZ2xlIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogMjgwcHg7XG4gIH1cbiAgXG4gIC5nb29nbGUgLmJ0bi1nb29nbGUge1xuICAgIC0tYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgfVxuICBcbiAgLmdvb2dsZS1pY29uIHtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gIH1cbiAgXG4gIC5jb25uZXhpb24ge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAyODBweDtcbiAgfVxuICBcbiAgLmNvbm5leGlvbiAuYnRuLWNvbm5leGlvbiB7XG4gICAgd2lkdGg6IDE1MHB4O1xuICAgIC0tYm9yZGVyLXJhZGl1czogMzBweDtcbiAgfVxuICBcbiAgLmluc2NyaXB0aW9uIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogMjgwcHg7XG4gIH1cbiAgXG4gIC5pbnNjcmlwdGlvbiAuYnRuLWluc2NyaXB0aW9uIHtcbiAgICB3aWR0aDogMTUwcHg7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIH0iLCIjY29udGFpbmVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG4jY29udGFpbmVyIHN0cm9uZyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG59XG5cbiNjb250YWluZXIgcCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG4gIGNvbG9yOiAjOGM4YzhjO1xuICBtYXJnaW46IDA7XG59XG5cbiNjb250YWluZXIgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLnRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMjAwcHg7XG59XG5cbi5nb29nbGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAyODBweDtcbn1cblxuLmdvb2dsZSAuYnRuLWdvb2dsZSB7XG4gIC0tYm9yZGVyLXJhZGl1czogMzBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5nb29nbGUtaWNvbiB7XG4gIGhlaWdodDogMzBweDtcbn1cblxuLmNvbm5leGlvbiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDI4MHB4O1xufVxuXG4uY29ubmV4aW9uIC5idG4tY29ubmV4aW9uIHtcbiAgd2lkdGg6IDE1MHB4O1xuICAtLWJvcmRlci1yYWRpdXM6IDMwcHg7XG59XG5cbi5pbnNjcmlwdGlvbiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDI4MHB4O1xufVxuXG4uaW5zY3JpcHRpb24gLmJ0bi1pbnNjcmlwdGlvbiB7XG4gIHdpZHRoOiAxNTBweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgLS1ib3JkZXItcmFkaXVzOiAzMHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/bienvenue/bienvenue.page.ts":
  /*!*********************************************!*\
    !*** ./src/app/bienvenue/bienvenue.page.ts ***!
    \*********************************************/

  /*! exports provided: BienvenuePage */

  /***/
  function srcAppBienvenueBienvenuePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BienvenuePage", function () {
      return BienvenuePage;
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

    var BienvenuePage = /*#__PURE__*/function () {
      function BienvenuePage(router) {
        _classCallCheck(this, BienvenuePage);

        this.router = router;
      }

      _createClass(BienvenuePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "toConnect",
        value: function toConnect() {
          this.router.navigateByUrl('connexion').then(function (data) {
            console.log(data);
          });
        }
      }, {
        key: "toInscription",
        value: function toInscription() {
          this.router.navigateByUrl('inscription').then(function (data) {
            console.log(data);
          });
        }
      }]);

      return BienvenuePage;
    }();

    BienvenuePage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    BienvenuePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-bienvenue',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./bienvenue.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/bienvenue/bienvenue.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./bienvenue.page.scss */
      "./src/app/bienvenue/bienvenue.page.scss"))["default"]]
    })], BienvenuePage);
    /***/
  }
}]);
//# sourceMappingURL=bienvenue-bienvenue-module-es5.js.map