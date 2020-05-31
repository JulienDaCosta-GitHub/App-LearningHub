(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["accueil-accueil-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/accueil/accueil.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/accueil/accueil.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar class=\"navbar\">\n    <ion-title>Accueil</ion-title>\n    <ion-buttons slot=\"primary\">\n      <ion-button (click)=\"clickedSearch()\">\n        <ion-icon slot=\"icon-only\" name=\"search\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n\n  <ion-toolbar>\n    <ion-segment value=\"all\">\n      <ion-segment-button value=\"all\">\n        Documents\n      </ion-segment-button>\n      <ion-segment-button value=\"favorites\" (click)=\"toSubjects()\">\n        Matières\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n\n</ion-header>\n<ion-content>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"6\">\n        <ion-card>\n          <ion-img src=\"https://i.pinimg.com/564x/0d/bd/ad/0dbdadbb9dbde281be2110a41de356c9.jpg\"></ion-img>\n          <ion-card-header>\n            <ion-card-title>Kit Design</ion-card-title>\n            <ion-card-subtitle>by - Gabrielle</ion-card-subtitle>\n          </ion-card-header>\n        </ion-card>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-card>\n          <ion-img src=\"assets/img/Moodboard.jpeg\"></ion-img>\n          <ion-card-header>\n            <ion-card-title>Moodboard</ion-card-title>\n            <ion-card-subtitle>by - Arthur</ion-card-subtitle>\n          </ion-card-header>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"6\">\n        <ion-card>\n          <ion-img src=\"assets/img/Template.jpeg\"></ion-img>\n          <ion-card-header>\n            <ion-card-title>Template</ion-card-title>\n            <ion-card-subtitle>by - Léo</ion-card-subtitle>\n          </ion-card-header>\n        </ion-card>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-card>\n          <ion-img src=\"assets/img/Concept.jpeg\"></ion-img>\n          <ion-card-header>\n            <ion-card-title>Concept art</ion-card-title>\n            <ion-card-subtitle>by - Emma</ion-card-subtitle>\n          </ion-card-header>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"6\">\n        <ion-card>\n          <ion-img src=\"assets/img/Eclairage.jpeg\"></ion-img>\n          <ion-card-header>\n            <ion-card-title>Eclairage</ion-card-title>\n            <ion-card-subtitle>by - Ethan</ion-card-subtitle>\n          </ion-card-header>\n        </ion-card>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-card>\n          <ion-img src=\"assets/img/Storytelling.jpeg\"></ion-img>\n          <ion-card-header>\n            <ion-card-title>Storytelling</ion-card-title>\n            <ion-card-subtitle>by - Rose</ion-card-subtitle>\n          </ion-card-header>\n        </ion-card>\n      </ion-col>\n    </ion-row><ion-row>\n    <ion-col size=\"6\">\n      <ion-card>\n        <ion-img src=\"assets/img/Git.png\"></ion-img>\n        <ion-card-header>\n          <ion-card-title>Github</ion-card-title>\n          <ion-card-subtitle>by - Eden</ion-card-subtitle>\n        </ion-card-header>\n      </ion-card>\n    </ion-col>\n    <ion-col size=\"6\">\n      <ion-card>\n        <ion-img src=\"assets/img/Unity.png\"></ion-img>\n        <ion-card-header>\n          <ion-card-title>Unity</ion-card-title>\n          <ion-card-subtitle>by - Pia</ion-card-subtitle>\n        </ion-card-header>\n      </ion-card>\n    </ion-col>\n  </ion-row>\n  </ion-grid>\n\n</ion-content>\n");

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
/* harmony default export */ __webpack_exports__["default"] = ("ion-title {\n  right: 13px;\n}\n\nion-icon {\n  color: #4343E6;\n}\n\nion-segment {\n  color: #4343E6;\n  margin-top: 30px;\n}\n\nion-row {\n  margin-bottom: 1px;\n}\n\nion-card-title {\n  font-size: 17px;\n}\n\nion-card-subtitle {\n  font-size: 10px;\n}\n\nion-segment {\n  color: #4343E6;\n  margin-top: 15px;\n}\n\n.navbar {\n  padding-bottom: 10px;\n}\n\nion-grid {\n  margin-top: 3px;\n}\n\nion-row {\n  margin-bottom: 1px;\n}\n\nion-col {\n  margin-bottom: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rZXJlbm5kb25nYWxhL0RvY3VtZW50cy9HaXRIdWIvQXBwLUxlYXJuaW5nSHViL0FwcC1MZWFybmluZ0h1Yi9zcmMvYXBwL2FjY3VlaWwvYWNjdWVpbC5wYWdlLnNjc3MiLCJzcmMvYXBwL2FjY3VlaWwvYWNjdWVpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxjQUFBO0FDRUY7O0FEQUE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7QUNHRjs7QURBQTtFQUNFLGtCQUFBO0FDR0Y7O0FEREE7RUFDRSxlQUFBO0FDSUY7O0FERkE7RUFDRSxlQUFBO0FDS0Y7O0FEREE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7QUNJRjs7QURGQTtFQUNFLG9CQUFBO0FDS0Y7O0FESEE7RUFDRSxlQUFBO0FDTUY7O0FESkE7RUFDRSxrQkFBQTtBQ09GOztBRExBO0VBQ0Usa0JBQUE7QUNRRiIsImZpbGUiOiJzcmMvYXBwL2FjY3VlaWwvYWNjdWVpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdGl0bGV7XG4gIHJpZ2h0OiAxM3B4O1xufVxuaW9uLWljb257XG4gIGNvbG9yOiAjNDM0M0U2O1xufVxuaW9uLXNlZ21lbnR7XG4gIGNvbG9yOiAjNDM0M0U2O1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuXG5pb24tcm93e1xuICBtYXJnaW4tYm90dG9tOiAxcHg7XG59XG5pb24tY2FyZC10aXRsZXtcbiAgZm9udC1zaXplOiAxN3B4O1xufVxuaW9uLWNhcmQtc3VidGl0bGV7XG4gIGZvbnQtc2l6ZTogMTBweDtcbn1cblxuXG5pb24tc2VnbWVudHtcbiAgY29sb3I6ICM0MzQzRTY7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG4ubmF2YmFye1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cbmlvbi1ncmlke1xuICBtYXJnaW4tdG9wOiAzcHg7XG59XG5pb24tcm93e1xuICBtYXJnaW4tYm90dG9tOiAxcHg7XG59XG5pb24tY29se1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG4iLCJpb24tdGl0bGUge1xuICByaWdodDogMTNweDtcbn1cblxuaW9uLWljb24ge1xuICBjb2xvcjogIzQzNDNFNjtcbn1cblxuaW9uLXNlZ21lbnQge1xuICBjb2xvcjogIzQzNDNFNjtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxuaW9uLXJvdyB7XG4gIG1hcmdpbi1ib3R0b206IDFweDtcbn1cblxuaW9uLWNhcmQtdGl0bGUge1xuICBmb250LXNpemU6IDE3cHg7XG59XG5cbmlvbi1jYXJkLXN1YnRpdGxlIHtcbiAgZm9udC1zaXplOiAxMHB4O1xufVxuXG5pb24tc2VnbWVudCB7XG4gIGNvbG9yOiAjNDM0M0U2O1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuXG4ubmF2YmFyIHtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG5cbmlvbi1ncmlkIHtcbiAgbWFyZ2luLXRvcDogM3B4O1xufVxuXG5pb24tcm93IHtcbiAgbWFyZ2luLWJvdHRvbTogMXB4O1xufVxuXG5pb24tY29sIHtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufSJdfQ== */");

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
    clickedSearch() {
        this.router.navigateByUrl('recherche').then((data) => {
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