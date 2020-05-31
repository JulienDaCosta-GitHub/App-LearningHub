(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["3D-cours-anim-cours-anim-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/3D/cours-anim/cours-anim.page.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/3D/cours-anim/cours-anim.page.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>3D</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/matieres\"></ion-back-button>\n    </ion-buttons>\n    <ion-buttons slot=\"primary\">\n      <ion-button (click)=\"clickedSearch()\">\n        <ion-icon slot=\"icon-only\" name=\"search\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n\n  <ion-toolbar>\n    <ion-segment value=\"all\">\n      <ion-segment-button value=\"all\" (click)=\"toProjets()\">\n        <ion-label>Projets</ion-label>\n      </ion-segment-button>\n      <ion-segment-button value=\"favorites\">\n        <ion-label>Cours</ion-label>\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n\n</ion-header>\n<ion-content>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"6\">\n        <ion-card >\n          <ion-img src=\"assets/img/Storyboard.png\"></ion-img>\n          <ion-card-header>\n            <ion-card-title>Storyboard</ion-card-title>\n            <ion-card-subtitle>by - John</ion-card-subtitle>\n          </ion-card-header>\n        </ion-card>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-card>\n          <ion-img src=\"assets/img/reto.jpeg\">\n            <ion-icon style=\"align-items: center\" name=\"heart-outline\"></ion-icon>\n          </ion-img>\n          <ion-card-header>\n            <ion-card-title>\n              Retopologie\n            </ion-card-title>\n            <ion-card-subtitle>by - Ariette</ion-card-subtitle>\n          </ion-card-header>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"6\">\n        <ion-card>\n          <ion-img src=\"assets/img/Skin.jpeg\"></ion-img>\n          <ion-card-header>\n            <ion-card-title>Texturing</ion-card-title>\n            <ion-card-subtitle>by - Maria</ion-card-subtitle>\n          </ion-card-header>\n        </ion-card>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-card>\n          <ion-img src=\"assets/img/Maya.jpeg\"></ion-img>\n          <ion-card-header>\n            <ion-card-title>Maya</ion-card-title>\n            <ion-card-subtitle>by - William</ion-card-subtitle>\n          </ion-card-header>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"6\">\n        <ion-card>\n          <ion-img src=\"assets/img/Auto.jpeg\"></ion-img>\n          <ion-card-header>\n            <ion-card-title>Modeling</ion-card-title>\n            <ion-card-subtitle>by - Marc</ion-card-subtitle>\n          </ion-card-header>\n        </ion-card>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-card>\n          <ion-img src=\"assets/img/Asset.jpeg\"></ion-img>\n          <ion-card-header>\n            <ion-card-title>Asset</ion-card-title>\n            <ion-card-subtitle>by - Jackie</ion-card-subtitle>\n          </ion-card-header>\n        </ion-card>\n      </ion-col>\n    </ion-row><ion-row>\n    <ion-col size=\"6\">\n      <ion-card>\n        <ion-img src=\"assets/img/texture.png\"></ion-img>\n        <ion-card-header>\n          <ion-card-title>Texture</ion-card-title>\n          <ion-card-subtitle>by - Karine</ion-card-subtitle>\n        </ion-card-header>\n      </ion-card>\n    </ion-col>\n    <ion-col size=\"6\">\n      <ion-card>\n        <ion-img src=\"assets/img/light.jpeg\"></ion-img>\n        <ion-card-header>\n          <ion-card-title>Lightning</ion-card-title>\n          <ion-card-subtitle>by - Manon</ion-card-subtitle>\n        </ion-card-header>\n      </ion-card>\n    </ion-col>\n  </ion-row>\n  </ion-grid>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/3D/cours-anim/cours-anim-routing.module.ts":
/*!************************************************************!*\
  !*** ./src/app/3D/cours-anim/cours-anim-routing.module.ts ***!
  \************************************************************/
/*! exports provided: CoursAnimPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoursAnimPageRoutingModule", function() { return CoursAnimPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _cours_anim_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cours-anim.page */ "./src/app/3D/cours-anim/cours-anim.page.ts");




const routes = [
    {
        path: '',
        component: _cours_anim_page__WEBPACK_IMPORTED_MODULE_3__["CoursAnimPage"]
    }
];
let CoursAnimPageRoutingModule = class CoursAnimPageRoutingModule {
};
CoursAnimPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CoursAnimPageRoutingModule);



/***/ }),

/***/ "./src/app/3D/cours-anim/cours-anim.module.ts":
/*!****************************************************!*\
  !*** ./src/app/3D/cours-anim/cours-anim.module.ts ***!
  \****************************************************/
/*! exports provided: CoursAnimPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoursAnimPageModule", function() { return CoursAnimPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _cours_anim_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cours-anim-routing.module */ "./src/app/3D/cours-anim/cours-anim-routing.module.ts");
/* harmony import */ var _cours_anim_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cours-anim.page */ "./src/app/3D/cours-anim/cours-anim.page.ts");







let CoursAnimPageModule = class CoursAnimPageModule {
};
CoursAnimPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _cours_anim_routing_module__WEBPACK_IMPORTED_MODULE_5__["CoursAnimPageRoutingModule"]
        ],
        declarations: [_cours_anim_page__WEBPACK_IMPORTED_MODULE_6__["CoursAnimPage"]]
    })
], CoursAnimPageModule);



/***/ }),

/***/ "./src/app/3D/cours-anim/cours-anim.page.scss":
/*!****************************************************!*\
  !*** ./src/app/3D/cours-anim/cours-anim.page.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-title {\n  right: 13px;\n}\n\nion-back-button {\n  color: #4343E6;\n}\n\nion-icon {\n  color: #4343E6;\n}\n\nion-segment {\n  color: #4343E6;\n  margin-top: 30px;\n}\n\nion-row {\n  margin-bottom: 1px;\n}\n\nion-card-title {\n  font-size: 17px;\n}\n\nion-card-subtitle {\n  font-size: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rZXJlbm5kb25nYWxhL0RvY3VtZW50cy9HaXRIdWIvQXBwLUxlYXJuaW5nSHViL0FwcC1MZWFybmluZ0h1Yi9zcmMvYXBwLzNEL2NvdXJzLWFuaW0vY291cnMtYW5pbS5wYWdlLnNjc3MiLCJzcmMvYXBwLzNEL2NvdXJzLWFuaW0vY291cnMtYW5pbS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxjQUFBO0FDRUY7O0FEQUE7RUFDRSxjQUFBO0FDR0Y7O0FEQUE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7QUNHRjs7QUREQTtFQUNFLGtCQUFBO0FDSUY7O0FERkE7RUFDRSxlQUFBO0FDS0Y7O0FESEE7RUFDRSxlQUFBO0FDTUYiLCJmaWxlIjoic3JjL2FwcC8zRC9jb3Vycy1hbmltL2NvdXJzLWFuaW0ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRpdGxle1xuICByaWdodDogMTNweDtcbn1cbmlvbi1iYWNrLWJ1dHRvbntcbiAgY29sb3I6ICM0MzQzRTY7XG59XG5pb24taWNvbntcbiAgY29sb3I6ICM0MzQzRTY7XG59XG5cbmlvbi1zZWdtZW50e1xuICBjb2xvcjogIzQzNDNFNjtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cbmlvbi1yb3d7XG4gIG1hcmdpbi1ib3R0b206IDFweDtcbn1cbmlvbi1jYXJkLXRpdGxle1xuICBmb250LXNpemU6IDE3cHg7XG59XG5pb24tY2FyZC1zdWJ0aXRsZXtcbiAgZm9udC1zaXplOiAxMHB4O1xufVxuIiwiaW9uLXRpdGxlIHtcbiAgcmlnaHQ6IDEzcHg7XG59XG5cbmlvbi1iYWNrLWJ1dHRvbiB7XG4gIGNvbG9yOiAjNDM0M0U2O1xufVxuXG5pb24taWNvbiB7XG4gIGNvbG9yOiAjNDM0M0U2O1xufVxuXG5pb24tc2VnbWVudCB7XG4gIGNvbG9yOiAjNDM0M0U2O1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuXG5pb24tcm93IHtcbiAgbWFyZ2luLWJvdHRvbTogMXB4O1xufVxuXG5pb24tY2FyZC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTdweDtcbn1cblxuaW9uLWNhcmQtc3VidGl0bGUge1xuICBmb250LXNpemU6IDEwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/3D/cours-anim/cours-anim.page.ts":
/*!**************************************************!*\
  !*** ./src/app/3D/cours-anim/cours-anim.page.ts ***!
  \**************************************************/
/*! exports provided: CoursAnimPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoursAnimPage", function() { return CoursAnimPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



let CoursAnimPage = class CoursAnimPage {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    toProjets() {
        this.router.navigateByUrl('projets-anim').then((data) => {
            console.log(data);
        });
    }
    clickedSearch() {
        this.router.navigateByUrl('recherche').then((data) => {
            console.log(data);
        });
    }
};
CoursAnimPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
CoursAnimPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cours-anim',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./cours-anim.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/3D/cours-anim/cours-anim.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./cours-anim.page.scss */ "./src/app/3D/cours-anim/cours-anim.page.scss")).default]
    })
], CoursAnimPage);



/***/ })

}]);
//# sourceMappingURL=3D-cours-anim-cours-anim-module-es2015.js.map