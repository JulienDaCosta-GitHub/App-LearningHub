(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["accueil-accueil-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/accueil/accueil.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/accueil/accueil.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Accueil</ion-title>\n\n    <ion-buttons slot=\"primary\">\n      <ion-button (click)=\"clickedSearch()\">\n        <ion-icon slot=\"icon-only\" name=\"search\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n\n  <ion-toolbar>\n    <ion-segment value=\"all\">\n      <ion-segment-button value=\"all\">\n        Documents\n      </ion-segment-button>\n      <ion-segment-button value=\"favorites\" (click)=\"toSubjects()\">\n        Matières\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n\n</ion-header>\n<ion-content>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"6\">\n        <ion-card>\n          <ion-img src=\"https://i.pinimg.com/564x/0d/bd/ad/0dbdadbb9dbde281be2110a41de356c9.jpg\"></ion-img>\n          <ion-card-header>\n            <ion-card-title>Kit Design</ion-card-title>\n            <ion-card-subtitle>by - Gabrielle</ion-card-subtitle>\n          </ion-card-header>\n        </ion-card>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-card>\n          <ion-img src=\"https://i.pinimg.com/564x/0c/44/a1/0c44a1b20cb42a4baaedd763172b20df.jpg\"></ion-img>\n          <ion-card-header>\n            <ion-card-title>Kit Design</ion-card-title>\n            <ion-card-subtitle>by - Gaby</ion-card-subtitle>\n          </ion-card-header>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"6\">\n        <ion-card>\n          <ion-img src=\"https://i.pinimg.com/564x/0c/44/a1/0c44a1b20cb42a4baaedd763172b20df.jpg\"></ion-img>\n          <ion-card-header>\n            <ion-card-title>Kit Design</ion-card-title>\n            <ion-card-subtitle>by - Gaby</ion-card-subtitle>\n          </ion-card-header>\n        </ion-card>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-card>\n          <ion-img src=\"https://i.pinimg.com/564x/0c/44/a1/0c44a1b20cb42a4baaedd763172b20df.jpg\"></ion-img>\n          <ion-card-header>\n            <ion-card-title>Kit Design</ion-card-title>\n            <ion-card-subtitle>by - Gaby</ion-card-subtitle>\n          </ion-card-header>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"6\">\n        <ion-card>\n          <ion-img src=\"https://i.pinimg.com/564x/0c/44/a1/0c44a1b20cb42a4baaedd763172b20df.jpg\"></ion-img>\n          <ion-card-header>\n            <ion-card-title>Kit Design</ion-card-title>\n            <ion-card-subtitle>by - Gaby</ion-card-subtitle>\n          </ion-card-header>\n        </ion-card>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-card>\n          <ion-img src=\"https://i.pinimg.com/564x/0c/44/a1/0c44a1b20cb42a4baaedd763172b20df.jpg\"></ion-img>\n          <ion-card-header>\n            <ion-card-title>Kit Design</ion-card-title>\n            <ion-card-subtitle>by - Gaby</ion-card-subtitle>\n          </ion-card-header>\n        </ion-card>\n      </ion-col>\n    </ion-row><ion-row>\n    <ion-col size=\"6\">\n      <ion-card>\n        <ion-img src=\"https://i.pinimg.com/564x/0c/44/a1/0c44a1b20cb42a4baaedd763172b20df.jpg\"></ion-img>\n        <ion-card-header>\n          <ion-card-title>Kit Design</ion-card-title>\n          <ion-card-subtitle>by - Gaby</ion-card-subtitle>\n        </ion-card-header>\n      </ion-card>\n    </ion-col>\n    <ion-col size=\"6\">\n      <ion-card>\n        <ion-img src=\"https://i.pinimg.com/564x/0c/44/a1/0c44a1b20cb42a4baaedd763172b20df.jpg\"></ion-img>\n        <ion-card-header>\n          <ion-card-title>Kit Design</ion-card-title>\n          <ion-card-subtitle>by - Gaby</ion-card-subtitle>\n        </ion-card-header>\n      </ion-card>\n    </ion-col>\n  </ion-row>\n  </ion-grid>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/accueil/accueil-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/accueil/accueil-routing.module.ts ***!
  \***************************************************/
/*! exports provided: AccueilPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccueilPageRoutingModule", function() { return AccueilPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _accueil_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./accueil.page */ "./src/app/accueil/accueil.page.ts");




const routes = [
    {
        path: '',
        component: _accueil_page__WEBPACK_IMPORTED_MODULE_3__["AccueilPage"]
    }
];
let AccueilPageRoutingModule = class AccueilPageRoutingModule {
};
AccueilPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AccueilPageRoutingModule);



/***/ }),

/***/ "./src/app/accueil/accueil.module.ts":
/*!*******************************************!*\
  !*** ./src/app/accueil/accueil.module.ts ***!
  \*******************************************/
/*! exports provided: AccueilPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccueilPageModule", function() { return AccueilPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _accueil_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./accueil-routing.module */ "./src/app/accueil/accueil-routing.module.ts");
/* harmony import */ var _accueil_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./accueil.page */ "./src/app/accueil/accueil.page.ts");







let AccueilPageModule = class AccueilPageModule {
};
AccueilPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _accueil_routing_module__WEBPACK_IMPORTED_MODULE_5__["AccueilPageRoutingModule"]
        ],
        declarations: [_accueil_page__WEBPACK_IMPORTED_MODULE_6__["AccueilPage"]]
    })
], AccueilPageModule);



/***/ }),

/***/ "./src/app/accueil/accueil.page.scss":
/*!*******************************************!*\
  !*** ./src/app/accueil/accueil.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-title {\n  right: 13px;\n}\n\nion-icon {\n  color: #4343E6;\n}\n\nion-segment {\n  color: #4343E6;\n  margin-top: 30px;\n}\n\nion-row {\n  margin-bottom: 1px;\n}\n\nion-card-title {\n  font-size: 17px;\n}\n\nion-card-subtitle {\n  font-size: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rZXJlbm5kb25nYWxhL0RvY3VtZW50cy9HaXRIdWIvQXBwLUxlYXJuaW5nSHViL0FwcC1MZWFybmluZ0h1Yi9zcmMvYXBwL2FjY3VlaWwvYWNjdWVpbC5wYWdlLnNjc3MiLCJzcmMvYXBwL2FjY3VlaWwvYWNjdWVpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxjQUFBO0FDRUY7O0FEQUE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7QUNHRjs7QUREQTtFQUNFLGtCQUFBO0FDSUY7O0FERkE7RUFDRSxlQUFBO0FDS0Y7O0FESEE7RUFDRSxlQUFBO0FDTUYiLCJmaWxlIjoic3JjL2FwcC9hY2N1ZWlsL2FjY3VlaWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRpdGxle1xuICByaWdodDogMTNweDtcbn1cbmlvbi1pY29ue1xuICBjb2xvcjogIzQzNDNFNjtcbn1cbmlvbi1zZWdtZW50e1xuICBjb2xvcjogIzQzNDNFNjtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cbmlvbi1yb3d7XG4gIG1hcmdpbi1ib3R0b206IDFweDtcbn1cbmlvbi1jYXJkLXRpdGxle1xuICBmb250LXNpemU6IDE3cHg7XG59XG5pb24tY2FyZC1zdWJ0aXRsZXtcbiAgZm9udC1zaXplOiAxMHB4O1xufVxuIiwiaW9uLXRpdGxlIHtcbiAgcmlnaHQ6IDEzcHg7XG59XG5cbmlvbi1pY29uIHtcbiAgY29sb3I6ICM0MzQzRTY7XG59XG5cbmlvbi1zZWdtZW50IHtcbiAgY29sb3I6ICM0MzQzRTY7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG59XG5cbmlvbi1yb3cge1xuICBtYXJnaW4tYm90dG9tOiAxcHg7XG59XG5cbmlvbi1jYXJkLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxN3B4O1xufVxuXG5pb24tY2FyZC1zdWJ0aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/accueil/accueil.page.ts":
/*!*****************************************!*\
  !*** ./src/app/accueil/accueil.page.ts ***!
  \*****************************************/
/*! exports provided: AccueilPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccueilPage", function() { return AccueilPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



let AccueilPage = class AccueilPage {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    toSubjects() {
        this.router.navigateByUrl('matieres').then((data) => {
            console.log(data);
        });
    }
};
AccueilPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AccueilPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-accueil',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./accueil.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/accueil/accueil.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./accueil.page.scss */ "./src/app/accueil/accueil.page.scss")).default]
    })
], AccueilPage);



/***/ })

}]);
//# sourceMappingURL=accueil-accueil-module-es2015.js.map