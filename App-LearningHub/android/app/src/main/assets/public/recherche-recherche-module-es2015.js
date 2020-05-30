(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["recherche-recherche-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/recherche/recherche.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/recherche/recherche.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"transparent\">\n    <ion-title>recherche</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-toolbar>\n    <ion-searchbar></ion-searchbar>\n  </ion-toolbar>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/recherche/recherche-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/recherche/recherche-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: RecherchePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecherchePageRoutingModule", function() { return RecherchePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _recherche_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./recherche.page */ "./src/app/recherche/recherche.page.ts");




const routes = [
    {
        path: '',
        component: _recherche_page__WEBPACK_IMPORTED_MODULE_3__["RecherchePage"]
    }
];
let RecherchePageRoutingModule = class RecherchePageRoutingModule {
};
RecherchePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RecherchePageRoutingModule);



/***/ }),

/***/ "./src/app/recherche/recherche.module.ts":
/*!***********************************************!*\
  !*** ./src/app/recherche/recherche.module.ts ***!
  \***********************************************/
/*! exports provided: RecherchePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecherchePageModule", function() { return RecherchePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _recherche_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./recherche-routing.module */ "./src/app/recherche/recherche-routing.module.ts");
/* harmony import */ var _recherche_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./recherche.page */ "./src/app/recherche/recherche.page.ts");







let RecherchePageModule = class RecherchePageModule {
};
RecherchePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _recherche_routing_module__WEBPACK_IMPORTED_MODULE_5__["RecherchePageRoutingModule"]
        ],
        declarations: [_recherche_page__WEBPACK_IMPORTED_MODULE_6__["RecherchePage"]]
    })
], RecherchePageModule);



/***/ }),

/***/ "./src/app/recherche/recherche.page.scss":
/*!***********************************************!*\
  !*** ./src/app/recherche/recherche.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlY2hlcmNoZS9yZWNoZXJjaGUucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/recherche/recherche.page.ts":
/*!*********************************************!*\
  !*** ./src/app/recherche/recherche.page.ts ***!
  \*********************************************/
/*! exports provided: RecherchePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecherchePage", function() { return RecherchePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let RecherchePage = class RecherchePage {
    constructor() { }
    ngOnInit() {
    }
};
RecherchePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-recherche',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./recherche.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/recherche/recherche.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./recherche.page.scss */ "./src/app/recherche/recherche.page.scss")).default]
    })
], RecherchePage);



/***/ })

}]);
//# sourceMappingURL=recherche-recherche-module-es2015.js.map