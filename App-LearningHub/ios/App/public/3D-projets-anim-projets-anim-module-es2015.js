(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["3D-projets-anim-projets-anim-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/3D/projets-anim/projets-anim.page.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/3D/projets-anim/projets-anim.page.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>3D</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/matieres\"></ion-back-button>\n    </ion-buttons>\n    <ion-buttons slot=\"primary\">\n      <ion-button (click)=\"clickedSearch()\">\n        <ion-icon slot=\"icon-only\" name=\"search\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n\n  <ion-toolbar>\n    <ion-segment value=\"all\">\n      <ion-segment-button value=\"all\">\n        <ion-label>Projets</ion-label>\n      </ion-segment-button>\n      <ion-segment-button value=\"favorites\" (click)=\"toCours()\">\n        <ion-label>Cours</ion-label>\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n\n</ion-header>\n<ion-content>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"6\">\n        <ion-card >\n          <ion-img src=\"assets/img/Modelisation.jpeg\"></ion-img>\n          <ion-card-header>\n            <ion-card-title>Modeling</ion-card-title>\n            <ion-card-subtitle>by - Daniel</ion-card-subtitle>\n          </ion-card-header>\n        </ion-card>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-card>\n          <ion-img src=\"assets/img/3D.png\">\n            <ion-icon style=\"align-items: center\" name=\"heart-outline\"></ion-icon>\n          </ion-img>\n          <ion-card-header>\n            <ion-card-title>\n              Rendering\n            </ion-card-title>\n            <ion-card-subtitle>by - Jeremy</ion-card-subtitle>\n          </ion-card-header>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"6\">\n        <ion-card>\n          <ion-img src=\"assets/img/az.jpeg\"></ion-img>\n          <ion-card-header>\n            <ion-card-title>Modeling</ion-card-title>\n            <ion-card-subtitle>by - Léa</ion-card-subtitle>\n          </ion-card-header>\n        </ion-card>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-card>\n          <ion-img src=\"assets/img/Modelis.png\"></ion-img>\n          <ion-card-header>\n            <ion-card-title>Squelette</ion-card-title>\n            <ion-card-subtitle>by - Ambre</ion-card-subtitle>\n          </ion-card-header>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"6\">\n        <ion-card>\n          <ion-img src=\"assets/img/ap.png\"></ion-img>\n          <ion-card-header>\n            <ion-card-title>Modeling</ion-card-title>\n            <ion-card-subtitle>by - Noé</ion-card-subtitle>\n          </ion-card-header>\n        </ion-card>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-card>\n          <ion-img src=\"assets/img/Eclairage.jpeg\"></ion-img>\n          <ion-card-header>\n            <ion-card-title>Lightning</ion-card-title>\n            <ion-card-subtitle>by - Gaby</ion-card-subtitle>\n          </ion-card-header>\n        </ion-card>\n      </ion-col>\n    </ion-row><ion-row>\n    <ion-col size=\"6\">\n      <ion-card>\n        <ion-img src=\"assets/img/texture.png\"></ion-img>\n        <ion-card-header>\n          <ion-card-title>Texture</ion-card-title>\n          <ion-card-subtitle>by - Laurent</ion-card-subtitle>\n        </ion-card-header>\n      </ion-card>\n    </ion-col>\n    <ion-col size=\"6\">\n      <ion-card>\n        <ion-img src=\"assets/img/light.jpeg\"></ion-img>\n        <ion-card-header>\n          <ion-card-title>Lightning</ion-card-title>\n          <ion-card-subtitle>by - Martin</ion-card-subtitle>\n        </ion-card-header>\n      </ion-card>\n    </ion-col>\n  </ion-row>\n  </ion-grid>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/3D/projets-anim/projets-anim-routing.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/3D/projets-anim/projets-anim-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: ProjetsAnimPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjetsAnimPageRoutingModule", function() { return ProjetsAnimPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _projets_anim_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projets-anim.page */ "./src/app/3D/projets-anim/projets-anim.page.ts");




const routes = [
    {
        path: '',
        component: _projets_anim_page__WEBPACK_IMPORTED_MODULE_3__["ProjetsAnimPage"]
    }
];
let ProjetsAnimPageRoutingModule = class ProjetsAnimPageRoutingModule {
};
ProjetsAnimPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProjetsAnimPageRoutingModule);



/***/ }),

/***/ "./src/app/3D/projets-anim/projets-anim.module.ts":
/*!********************************************************!*\
  !*** ./src/app/3D/projets-anim/projets-anim.module.ts ***!
  \********************************************************/
/*! exports provided: ProjetsAnimPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjetsAnimPageModule", function() { return ProjetsAnimPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _projets_anim_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./projets-anim-routing.module */ "./src/app/3D/projets-anim/projets-anim-routing.module.ts");
/* harmony import */ var _projets_anim_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./projets-anim.page */ "./src/app/3D/projets-anim/projets-anim.page.ts");







let ProjetsAnimPageModule = class ProjetsAnimPageModule {
};
ProjetsAnimPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _projets_anim_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProjetsAnimPageRoutingModule"]
        ],
        declarations: [_projets_anim_page__WEBPACK_IMPORTED_MODULE_6__["ProjetsAnimPage"]]
    })
], ProjetsAnimPageModule);



/***/ }),

/***/ "./src/app/3D/projets-anim/projets-anim.page.scss":
/*!********************************************************!*\
  !*** ./src/app/3D/projets-anim/projets-anim.page.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-title {\n  right: 13px;\n}\n\nion-back-button {\n  color: #4343E6;\n}\n\nion-icon {\n  color: #4343E6;\n}\n\nion-segment {\n  color: #4343E6;\n  margin-top: 30px;\n}\n\nion-row {\n  margin-bottom: 1px;\n}\n\nion-card-title {\n  font-size: 17px;\n}\n\nion-card-subtitle {\n  font-size: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rZXJlbm5kb25nYWxhL0RvY3VtZW50cy9HaXRIdWIvQXBwLUxlYXJuaW5nSHViL0FwcC1MZWFybmluZ0h1Yi9zcmMvYXBwLzNEL3Byb2pldHMtYW5pbS9wcm9qZXRzLWFuaW0ucGFnZS5zY3NzIiwic3JjL2FwcC8zRC9wcm9qZXRzLWFuaW0vcHJvamV0cy1hbmltLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7QUNDRjs7QURDQTtFQUNFLGNBQUE7QUNFRjs7QURBQTtFQUNFLGNBQUE7QUNHRjs7QUREQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtBQ0lGOztBREZBO0VBQ0Usa0JBQUE7QUNLRjs7QURIQTtFQUNFLGVBQUE7QUNNRjs7QURKQTtFQUNFLGVBQUE7QUNPRiIsImZpbGUiOiJzcmMvYXBwLzNEL3Byb2pldHMtYW5pbS9wcm9qZXRzLWFuaW0ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRpdGxle1xuICByaWdodDogMTNweDtcbn1cbmlvbi1iYWNrLWJ1dHRvbntcbiAgY29sb3I6ICM0MzQzRTY7XG59XG5pb24taWNvbntcbiAgY29sb3I6ICM0MzQzRTY7XG59XG5pb24tc2VnbWVudHtcbiAgY29sb3I6ICM0MzQzRTY7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG59XG5pb24tcm93e1xuICBtYXJnaW4tYm90dG9tOiAxcHg7XG59XG5pb24tY2FyZC10aXRsZXtcbiAgZm9udC1zaXplOiAxN3B4O1xufVxuaW9uLWNhcmQtc3VidGl0bGV7XG4gIGZvbnQtc2l6ZTogMTBweDtcbn1cbiIsImlvbi10aXRsZSB7XG4gIHJpZ2h0OiAxM3B4O1xufVxuXG5pb24tYmFjay1idXR0b24ge1xuICBjb2xvcjogIzQzNDNFNjtcbn1cblxuaW9uLWljb24ge1xuICBjb2xvcjogIzQzNDNFNjtcbn1cblxuaW9uLXNlZ21lbnQge1xuICBjb2xvcjogIzQzNDNFNjtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxuaW9uLXJvdyB7XG4gIG1hcmdpbi1ib3R0b206IDFweDtcbn1cblxuaW9uLWNhcmQtdGl0bGUge1xuICBmb250LXNpemU6IDE3cHg7XG59XG5cbmlvbi1jYXJkLXN1YnRpdGxlIHtcbiAgZm9udC1zaXplOiAxMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/3D/projets-anim/projets-anim.page.ts":
/*!******************************************************!*\
  !*** ./src/app/3D/projets-anim/projets-anim.page.ts ***!
  \******************************************************/
/*! exports provided: ProjetsAnimPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjetsAnimPage", function() { return ProjetsAnimPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



let ProjetsAnimPage = class ProjetsAnimPage {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    toCours() {
        this.router.navigateByUrl('cours-anim').then((data) => {
            console.log(data);
        });
    }
    clickedSearch() {
        this.router.navigateByUrl('recherche').then((data) => {
            console.log(data);
        });
    }
};
ProjetsAnimPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
ProjetsAnimPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-projets-anim',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./projets-anim.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/3D/projets-anim/projets-anim.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./projets-anim.page.scss */ "./src/app/3D/projets-anim/projets-anim.page.scss")).default]
    })
], ProjetsAnimPage);



/***/ })

}]);
//# sourceMappingURL=3D-projets-anim-projets-anim-module-es2015.js.map