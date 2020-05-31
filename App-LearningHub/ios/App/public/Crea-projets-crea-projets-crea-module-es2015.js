(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Crea-projets-crea-projets-crea-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Crea/projets-crea/projets-crea.page.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Crea/projets-crea/projets-crea.page.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar style=\"margin-top: 10%\">\n    <ion-title>Création & Design</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/matieres\"></ion-back-button>\n    </ion-buttons>\n    <ion-buttons slot=\"primary\">\n      <ion-button (click)=\"clickedSearch()\">\n        <ion-icon slot=\"icon-only\" name=\"search\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n\n  <ion-toolbar class=\"navbar\">\n    <ion-segment value=\"all\">\n      <ion-segment-button value=\"all\">\n        <ion-label>Projets</ion-label>\n      </ion-segment-button>\n      <ion-segment-button value=\"favorites\" (click)=\"toCours()\">\n        <ion-label>Cours</ion-label>\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n\n</ion-header>\n<ion-content>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"6\">\n        <ion-card >\n          <ion-img src=\"assets/img/neu.png\"></ion-img>\n          <ion-card-header>\n            <ion-card-title>Design NEU</ion-card-title>\n            <ion-card-subtitle>by - Lisa</ion-card-subtitle>\n          </ion-card-header>\n        </ion-card>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-card>\n          <ion-img src=\"assets/img/Moldboard.jpeg\">\n          </ion-img>\n          <ion-card-header>\n            <ion-card-title>\n              Moodboard\n            </ion-card-title>\n            <ion-card-subtitle>by - Jean</ion-card-subtitle>\n          </ion-card-header>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"6\">\n        <ion-card>\n          <ion-img src=\"assets/img/log.jpeg\"></ion-img>\n          <ion-card-header>\n            <ion-card-title>Logo</ion-card-title>\n            <ion-card-subtitle>by - Esther</ion-card-subtitle>\n          </ion-card-header>\n        </ion-card>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-card>\n          <ion-img src=\"assets/img/ux.jpeg\"></ion-img>\n          <ion-card-header>\n            <ion-card-title>UX</ion-card-title>\n            <ion-card-subtitle>by - Sarah</ion-card-subtitle>\n          </ion-card-header>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"6\">\n        <ion-card>\n          <ion-img src=\"assets/img/id v.jpeg\"></ion-img>\n          <ion-card-header>\n            <ion-card-title>Id visuelle</ion-card-title>\n            <ion-card-subtitle>by - Hannah</ion-card-subtitle>\n          </ion-card-header>\n        </ion-card>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-card>\n          <ion-img src=\"assets/img/theme.jpeg\"></ion-img>\n          <ion-card-header>\n            <ion-card-title>Wordpress</ion-card-title>\n            <ion-card-subtitle>by - Armand</ion-card-subtitle>\n          </ion-card-header>\n        </ion-card>\n      </ion-col>\n    </ion-row><ion-row>\n    <ion-col size=\"6\">\n      <ion-card>\n        <ion-img src=\"assets/img/motion.jpg\"></ion-img>\n        <ion-card-header>\n          <ion-card-title>Motion design</ion-card-title>\n          <ion-card-subtitle>by - Eva</ion-card-subtitle>\n        </ion-card-header>\n      </ion-card>\n    </ion-col>\n    <ion-col size=\"6\">\n      <ion-card>\n        <ion-img src=\"assets/img/charte.jpeg\"></ion-img>\n        <ion-card-header>\n          <ion-card-title>Charte graphique</ion-card-title>\n          <ion-card-subtitle>by - Jules</ion-card-subtitle>\n        </ion-card-header>\n      </ion-card>\n    </ion-col>\n  </ion-row>\n  </ion-grid>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/Crea/projets-crea/projets-crea-routing.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/Crea/projets-crea/projets-crea-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: ProjetsCreaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjetsCreaPageRoutingModule", function() { return ProjetsCreaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _projets_crea_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projets-crea.page */ "./src/app/Crea/projets-crea/projets-crea.page.ts");




const routes = [
    {
        path: '',
        component: _projets_crea_page__WEBPACK_IMPORTED_MODULE_3__["ProjetsCreaPage"]
    }
];
let ProjetsCreaPageRoutingModule = class ProjetsCreaPageRoutingModule {
};
ProjetsCreaPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProjetsCreaPageRoutingModule);



/***/ }),

/***/ "./src/app/Crea/projets-crea/projets-crea.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/Crea/projets-crea/projets-crea.module.ts ***!
  \**********************************************************/
/*! exports provided: ProjetsCreaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjetsCreaPageModule", function() { return ProjetsCreaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _projets_crea_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./projets-crea-routing.module */ "./src/app/Crea/projets-crea/projets-crea-routing.module.ts");
/* harmony import */ var _projets_crea_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./projets-crea.page */ "./src/app/Crea/projets-crea/projets-crea.page.ts");







let ProjetsCreaPageModule = class ProjetsCreaPageModule {
};
ProjetsCreaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _projets_crea_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProjetsCreaPageRoutingModule"]
        ],
        declarations: [_projets_crea_page__WEBPACK_IMPORTED_MODULE_6__["ProjetsCreaPage"]]
    })
], ProjetsCreaPageModule);



/***/ }),

/***/ "./src/app/Crea/projets-crea/projets-crea.page.scss":
/*!**********************************************************!*\
  !*** ./src/app/Crea/projets-crea/projets-crea.page.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-title {\n  right: 13px;\n}\n\nion-back-button {\n  color: #4343E6;\n}\n\nion-icon {\n  color: #4343E6;\n}\n\nion-segment {\n  color: #4343E6;\n  margin-top: 15px;\n}\n\n.navbar {\n  padding-bottom: 10px;\n}\n\nion-grid {\n  margin-top: 3px;\n}\n\nion-row {\n  margin-bottom: 1px;\n}\n\nion-col {\n  margin-bottom: 5px;\n}\n\nion-card-title {\n  font-size: 17px;\n}\n\nion-card-subtitle {\n  font-size: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rZXJlbm5kb25nYWxhL0RvY3VtZW50cy9HaXRIdWIvQXBwLUxlYXJuaW5nSHViL0FwcC1MZWFybmluZ0h1Yi9zcmMvYXBwL0NyZWEvcHJvamV0cy1jcmVhL3Byb2pldHMtY3JlYS5wYWdlLnNjc3MiLCJzcmMvYXBwL0NyZWEvcHJvamV0cy1jcmVhL3Byb2pldHMtY3JlYS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxjQUFBO0FDRUY7O0FEQUE7RUFDRSxjQUFBO0FDR0Y7O0FEQUE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7QUNHRjs7QUREQTtFQUNFLG9CQUFBO0FDSUY7O0FERkE7RUFDRSxlQUFBO0FDS0Y7O0FESEE7RUFDRSxrQkFBQTtBQ01GOztBREpBO0VBQ0Usa0JBQUE7QUNPRjs7QURMQTtFQUNFLGVBQUE7QUNRRjs7QUROQTtFQUNFLGVBQUE7QUNTRiIsImZpbGUiOiJzcmMvYXBwL0NyZWEvcHJvamV0cy1jcmVhL3Byb2pldHMtY3JlYS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdGl0bGV7XG4gIHJpZ2h0OiAxM3B4O1xufVxuaW9uLWJhY2stYnV0dG9ue1xuICBjb2xvcjogIzQzNDNFNjtcbn1cbmlvbi1pY29ue1xuICBjb2xvcjogIzQzNDNFNjtcbn1cblxuaW9uLXNlZ21lbnR7XG4gIGNvbG9yOiAjNDM0M0U2O1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuLm5hdmJhcntcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG5pb24tZ3JpZHtcbiAgbWFyZ2luLXRvcDogM3B4O1xufVxuaW9uLXJvd3tcbiAgbWFyZ2luLWJvdHRvbTogMXB4O1xufVxuaW9uLWNvbHtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuaW9uLWNhcmQtdGl0bGV7XG4gIGZvbnQtc2l6ZTogMTdweDtcbn1cbmlvbi1jYXJkLXN1YnRpdGxle1xuICBmb250LXNpemU6IDEwcHg7XG59XG4iLCJpb24tdGl0bGUge1xuICByaWdodDogMTNweDtcbn1cblxuaW9uLWJhY2stYnV0dG9uIHtcbiAgY29sb3I6ICM0MzQzRTY7XG59XG5cbmlvbi1pY29uIHtcbiAgY29sb3I6ICM0MzQzRTY7XG59XG5cbmlvbi1zZWdtZW50IHtcbiAgY29sb3I6ICM0MzQzRTY7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG5cbi5uYXZiYXIge1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cblxuaW9uLWdyaWQge1xuICBtYXJnaW4tdG9wOiAzcHg7XG59XG5cbmlvbi1yb3cge1xuICBtYXJnaW4tYm90dG9tOiAxcHg7XG59XG5cbmlvbi1jb2wge1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbmlvbi1jYXJkLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxN3B4O1xufVxuXG5pb24tY2FyZC1zdWJ0aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/Crea/projets-crea/projets-crea.page.ts":
/*!********************************************************!*\
  !*** ./src/app/Crea/projets-crea/projets-crea.page.ts ***!
  \********************************************************/
/*! exports provided: ProjetsCreaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjetsCreaPage", function() { return ProjetsCreaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



let ProjetsCreaPage = class ProjetsCreaPage {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    toCours() {
        this.router.navigateByUrl('cours-crea').then((data) => {
            console.log(data);
        });
    }
    clickedSearch() {
        this.router.navigateByUrl('recherche').then((data) => {
            console.log(data);
        });
    }
};
ProjetsCreaPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
ProjetsCreaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-projets-crea',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./projets-crea.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Crea/projets-crea/projets-crea.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./projets-crea.page.scss */ "./src/app/Crea/projets-crea/projets-crea.page.scss")).default]
    })
], ProjetsCreaPage);



/***/ })

}]);
//# sourceMappingURL=Crea-projets-crea-projets-crea-module-es2015.js.map