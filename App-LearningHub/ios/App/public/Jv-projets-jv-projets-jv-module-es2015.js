(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Jv-projets-jv-projets-jv-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Jv/projets-jv/projets-jv.page.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Jv/projets-jv/projets-jv.page.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Jeux vidéo</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/matieres\"></ion-back-button>\n    </ion-buttons>\n    <ion-buttons slot=\"primary\">\n      <ion-button (click)=\"clickedSearch()\">\n        <ion-icon slot=\"icon-only\" name=\"search\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n\n  <ion-toolbar>\n    <ion-segment value=\"all\">\n      <ion-segment-button value=\"all\">\n        <ion-label>Projets</ion-label>\n      </ion-segment-button>\n      <ion-segment-button value=\"favorites\" (click)=\"toCours()\">\n        <ion-label>Cours</ion-label>\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n\n</ion-header>\n<ion-content>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"6\">\n        <ion-card >\n          <ion-img src=\"assets/img/Unity.png\"></ion-img>\n          <ion-card-header>\n            <ion-card-title>Unity</ion-card-title>\n            <ion-card-subtitle>by - Lisa</ion-card-subtitle>\n          </ion-card-header>\n        </ion-card>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-card>\n          <ion-img src=\"assets/img/Concept.jpeg\">\n          </ion-img>\n          <ion-card-header>\n            <ion-card-title>\n              Concept art\n            </ion-card-title>\n            <ion-card-subtitle>by - Jean</ion-card-subtitle>\n          </ion-card-header>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"6\">\n        <ion-card>\n          <ion-img src=\"assets/img/sprites.jpeg\"></ion-img>\n          <ion-card-header>\n            <ion-card-title>Sprites</ion-card-title>\n            <ion-card-subtitle>by - Esther</ion-card-subtitle>\n          </ion-card-header>\n        </ion-card>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-card>\n          <ion-img src=\"assets/img/2d.jpeg\"></ion-img>\n          <ion-card-header>\n            <ion-card-title>2D</ion-card-title>\n            <ion-card-subtitle>by - Sarah</ion-card-subtitle>\n          </ion-card-header>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"6\">\n        <ion-card>\n          <ion-img src=\"assets/img/objet.png\"></ion-img>\n          <ion-card-header>\n            <ion-card-title>Objets</ion-card-title>\n            <ion-card-subtitle>by - Hannah</ion-card-subtitle>\n          </ion-card-header>\n        </ion-card>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-card>\n          <ion-img src=\"assets/img/amina.jpeg\"></ion-img>\n          <ion-card-header>\n            <ion-card-title>Animation</ion-card-title>\n            <ion-card-subtitle>by - Armand</ion-card-subtitle>\n          </ion-card-header>\n        </ion-card>\n      </ion-col>\n    </ion-row><ion-row>\n    <ion-col size=\"6\">\n      <ion-card>\n        <ion-img src=\"assets/img/env.jpeg\"></ion-img>\n        <ion-card-header>\n          <ion-card-title>Ambiance</ion-card-title>\n          <ion-card-subtitle>by - Eva</ion-card-subtitle>\n        </ion-card-header>\n      </ion-card>\n    </ion-col>\n    <ion-col size=\"6\">\n      <ion-card>\n        <ion-img src=\"assets/img/cSh.jpeg\"></ion-img>\n        <ion-card-header>\n          <ion-card-title>C#</ion-card-title>\n          <ion-card-subtitle>by - Jules</ion-card-subtitle>\n        </ion-card-header>\n      </ion-card>\n    </ion-col>\n  </ion-row>\n  </ion-grid>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/Jv/projets-jv/projets-jv-routing.module.ts":
/*!************************************************************!*\
  !*** ./src/app/Jv/projets-jv/projets-jv-routing.module.ts ***!
  \************************************************************/
/*! exports provided: ProjetsJvPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjetsJvPageRoutingModule", function() { return ProjetsJvPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _projets_jv_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projets-jv.page */ "./src/app/Jv/projets-jv/projets-jv.page.ts");




const routes = [
    {
        path: '',
        component: _projets_jv_page__WEBPACK_IMPORTED_MODULE_3__["ProjetsJvPage"]
    }
];
let ProjetsJvPageRoutingModule = class ProjetsJvPageRoutingModule {
};
ProjetsJvPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProjetsJvPageRoutingModule);



/***/ }),

/***/ "./src/app/Jv/projets-jv/projets-jv.module.ts":
/*!****************************************************!*\
  !*** ./src/app/Jv/projets-jv/projets-jv.module.ts ***!
  \****************************************************/
/*! exports provided: ProjetsJvPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjetsJvPageModule", function() { return ProjetsJvPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _projets_jv_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./projets-jv-routing.module */ "./src/app/Jv/projets-jv/projets-jv-routing.module.ts");
/* harmony import */ var _projets_jv_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./projets-jv.page */ "./src/app/Jv/projets-jv/projets-jv.page.ts");







let ProjetsJvPageModule = class ProjetsJvPageModule {
};
ProjetsJvPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _projets_jv_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProjetsJvPageRoutingModule"]
        ],
        declarations: [_projets_jv_page__WEBPACK_IMPORTED_MODULE_6__["ProjetsJvPage"]]
    })
], ProjetsJvPageModule);



/***/ }),

/***/ "./src/app/Jv/projets-jv/projets-jv.page.scss":
/*!****************************************************!*\
  !*** ./src/app/Jv/projets-jv/projets-jv.page.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-title {\n  right: 13px;\n}\n\nion-back-button {\n  color: #4343E6;\n}\n\nion-icon {\n  color: #4343E6;\n}\n\nion-segment {\n  color: #4343E6;\n  margin-top: 30px;\n}\n\nion-row {\n  margin-bottom: 1px;\n}\n\nion-card-title {\n  font-size: 17px;\n}\n\nion-card-subtitle {\n  font-size: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rZXJlbm5kb25nYWxhL0RvY3VtZW50cy9HaXRIdWIvQXBwLUxlYXJuaW5nSHViL0FwcC1MZWFybmluZ0h1Yi9zcmMvYXBwL0p2L3Byb2pldHMtanYvcHJvamV0cy1qdi5wYWdlLnNjc3MiLCJzcmMvYXBwL0p2L3Byb2pldHMtanYvcHJvamV0cy1qdi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxjQUFBO0FDRUY7O0FEQUE7RUFDRSxjQUFBO0FDR0Y7O0FEREE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7QUNJRjs7QURGQTtFQUNFLGtCQUFBO0FDS0Y7O0FESEE7RUFDRSxlQUFBO0FDTUY7O0FESkE7RUFDRSxlQUFBO0FDT0YiLCJmaWxlIjoic3JjL2FwcC9Kdi9wcm9qZXRzLWp2L3Byb2pldHMtanYucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRpdGxle1xuICByaWdodDogMTNweDtcbn1cbmlvbi1iYWNrLWJ1dHRvbntcbiAgY29sb3I6ICM0MzQzRTY7XG59XG5pb24taWNvbntcbiAgY29sb3I6ICM0MzQzRTY7XG59XG5pb24tc2VnbWVudHtcbiAgY29sb3I6ICM0MzQzRTY7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG59XG5pb24tcm93e1xuICBtYXJnaW4tYm90dG9tOiAxcHg7XG59XG5pb24tY2FyZC10aXRsZXtcbiAgZm9udC1zaXplOiAxN3B4O1xufVxuaW9uLWNhcmQtc3VidGl0bGV7XG4gIGZvbnQtc2l6ZTogMTBweDtcbn1cbiIsImlvbi10aXRsZSB7XG4gIHJpZ2h0OiAxM3B4O1xufVxuXG5pb24tYmFjay1idXR0b24ge1xuICBjb2xvcjogIzQzNDNFNjtcbn1cblxuaW9uLWljb24ge1xuICBjb2xvcjogIzQzNDNFNjtcbn1cblxuaW9uLXNlZ21lbnQge1xuICBjb2xvcjogIzQzNDNFNjtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxuaW9uLXJvdyB7XG4gIG1hcmdpbi1ib3R0b206IDFweDtcbn1cblxuaW9uLWNhcmQtdGl0bGUge1xuICBmb250LXNpemU6IDE3cHg7XG59XG5cbmlvbi1jYXJkLXN1YnRpdGxlIHtcbiAgZm9udC1zaXplOiAxMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/Jv/projets-jv/projets-jv.page.ts":
/*!**************************************************!*\
  !*** ./src/app/Jv/projets-jv/projets-jv.page.ts ***!
  \**************************************************/
/*! exports provided: ProjetsJvPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjetsJvPage", function() { return ProjetsJvPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



let ProjetsJvPage = class ProjetsJvPage {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    toCours() {
        this.router.navigateByUrl('cours-jv').then((data) => {
            console.log(data);
        });
    }
    clickedSearch() {
        this.router.navigateByUrl('recherche').then((data) => {
            console.log(data);
        });
    }
};
ProjetsJvPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
ProjetsJvPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-projets-jv',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./projets-jv.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Jv/projets-jv/projets-jv.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./projets-jv.page.scss */ "./src/app/Jv/projets-jv/projets-jv.page.scss")).default]
    })
], ProjetsJvPage);



/***/ })

}]);
//# sourceMappingURL=Jv-projets-jv-projets-jv-module-es2015.js.map