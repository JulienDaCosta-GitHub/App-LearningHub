(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["matieres-matieres-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/matieres/matieres.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/matieres/matieres.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Accueil</ion-title>\n\n    <ion-buttons slot=\"primary\">\n      <ion-button (click)=\"clickedSearch()\">\n        <ion-icon slot=\"icon-only\" name=\"search\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n\n\n  <ion-toolbar>\n    <ion-segment value=\"all\">\n      <ion-segment-button value=\"all\" (click)=\"toDocuments()\">\n        Documents\n      </ion-segment-button>\n      <ion-segment-button value=\"favorites\">\n        Matières\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"6\" (click)=\"toAnim()\">\n        <ion-card>\n          <ion-card>\n            <ion-img src=\"assets/img/3D.png\"></ion-img>\n          </ion-card>\n          <ion-card-header>\n            <ion-card-title>3D</ion-card-title>\n          </ion-card-header>\n        </ion-card>\n      </ion-col>\n      <ion-col size=\"6\" (click)=\"toCrea()\">\n        <ion-card>\n          <ion-card>\n            <ion-img src=\"assets/img/creationd.png\"></ion-img>\n          </ion-card>\n          <ion-card-header>\n            <ion-card-title>Créa. digitale</ion-card-title>\n          </ion-card-header>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"6\" (click)=\"toComd()\">\n        <ion-card>\n          <ion-card>\n            <ion-img src=\"assets/img/comd.jpeg\"></ion-img>\n          </ion-card>\n          <ion-card-header>\n            <ion-card-title>Com. digitale</ion-card-title>\n          </ion-card-header>\n        </ion-card>\n      </ion-col>\n      <ion-col size=\"6\" (click)=\"toDev()\">\n        <ion-card>\n          <ion-card>\n            <ion-img src=\"assets/img/Dev.png\"></ion-img>\n          </ion-card>\n          <ion-card-header>\n            <ion-card-title>Dev. web</ion-card-title>\n          </ion-card-header>\n        </ion-card>\n      </ion-col>\n      <ion-col size=\"6\" (click)=\"toJv()\">\n        <ion-card>\n          <ion-card>\n            <ion-img src=\"assets/img/Jv.jpeg\"></ion-img>\n          </ion-card>\n          <ion-card-header>\n            <ion-card-title>Jeux vidéo</ion-card-title>\n          </ion-card-header>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/matieres/matieres-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/matieres/matieres-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: MatieresPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatieresPageRoutingModule", function() { return MatieresPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _matieres_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./matieres.page */ "./src/app/matieres/matieres.page.ts");




const routes = [
    {
        path: '',
        component: _matieres_page__WEBPACK_IMPORTED_MODULE_3__["MatieresPage"]
    }
];
let MatieresPageRoutingModule = class MatieresPageRoutingModule {
};
MatieresPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MatieresPageRoutingModule);



/***/ }),

/***/ "./src/app/matieres/matieres.module.ts":
/*!*********************************************!*\
  !*** ./src/app/matieres/matieres.module.ts ***!
  \*********************************************/
/*! exports provided: MatieresPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatieresPageModule", function() { return MatieresPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _matieres_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./matieres-routing.module */ "./src/app/matieres/matieres-routing.module.ts");
/* harmony import */ var _matieres_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./matieres.page */ "./src/app/matieres/matieres.page.ts");







let MatieresPageModule = class MatieresPageModule {
};
MatieresPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _matieres_routing_module__WEBPACK_IMPORTED_MODULE_5__["MatieresPageRoutingModule"]
        ],
        declarations: [_matieres_page__WEBPACK_IMPORTED_MODULE_6__["MatieresPage"]]
    })
], MatieresPageModule);



/***/ }),

/***/ "./src/app/matieres/matieres.page.scss":
/*!*********************************************!*\
  !*** ./src/app/matieres/matieres.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-title {\n  right: 13px;\n}\n\nion-icon {\n  color: #4343E6;\n}\n\nion-segment {\n  color: #4343E6;\n  margin-top: 30px;\n}\n\nion-row {\n  margin-bottom: 1px;\n}\n\nion-card {\n  margin: 8px;\n}\n\nion-card-title {\n  font-size: 17px;\n  position: page;\n}\n\n.img1 {\n  width: 10em;\n  height: 10em;\n  bottom: 10px;\n}\n\n.img2 {\n  width: 10em;\n  height: 10em;\n  top: 10px;\n}\n\n.img3 {\n  width: 10em;\n  height: 10em;\n  left: 10px;\n}\n\n.img4 {\n  width: 10em;\n  height: 10em;\n  right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rZXJlbm5kb25nYWxhL0RvY3VtZW50cy9HaXRIdWIvQXBwLUxlYXJuaW5nSHViL0FwcC1MZWFybmluZ0h1Yi9zcmMvYXBwL21hdGllcmVzL21hdGllcmVzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvbWF0aWVyZXMvbWF0aWVyZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtBQ0NGOztBRENBO0VBQ0UsY0FBQTtBQ0VGOztBREFBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0FDR0Y7O0FEREE7RUFDRSxrQkFBQTtBQ0lGOztBREZBO0VBQ0UsV0FBQTtBQ0tGOztBRERBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUNJRjs7QURGQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQ0tGOztBREhBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0FDTUY7O0FESEE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUNNRjs7QURIQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ01GIiwiZmlsZSI6InNyYy9hcHAvbWF0aWVyZXMvbWF0aWVyZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRpdGxle1xuICByaWdodDogMTNweDtcbn1cbmlvbi1pY29ue1xuICBjb2xvcjogIzQzNDNFNjtcbn1cbmlvbi1zZWdtZW50e1xuICBjb2xvcjogIzQzNDNFNjtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cbmlvbi1yb3d7XG4gIG1hcmdpbi1ib3R0b206IDFweDtcbn1cbmlvbi1jYXJke1xuICBtYXJnaW46IDhweDtcbn1cbi5jYXJkLWltZ3tcbn1cbmlvbi1jYXJkLXRpdGxle1xuICBmb250LXNpemU6IDE3cHg7XG4gIHBvc2l0aW9uOiBwYWdlO1xufVxuLmltZzF7XG4gIHdpZHRoOiAxMGVtO1xuICBoZWlnaHQ6IDEwZW07XG4gIGJvdHRvbTogMTBweDtcbn1cbi5pbWcye1xuICB3aWR0aDogMTBlbTtcbiAgaGVpZ2h0OiAxMGVtO1xuICB0b3A6IDEwcHg7XG59XG5cbi5pbWcze1xuICB3aWR0aDogMTBlbTtcbiAgaGVpZ2h0OiAxMGVtO1xuICBsZWZ0OiAxMHB4O1xufVxuXG4uaW1nNHtcbiAgd2lkdGg6IDEwZW07XG4gIGhlaWdodDogMTBlbTtcbiAgcmlnaHQ6IDEwcHg7XG59XG4iLCJpb24tdGl0bGUge1xuICByaWdodDogMTNweDtcbn1cblxuaW9uLWljb24ge1xuICBjb2xvcjogIzQzNDNFNjtcbn1cblxuaW9uLXNlZ21lbnQge1xuICBjb2xvcjogIzQzNDNFNjtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxuaW9uLXJvdyB7XG4gIG1hcmdpbi1ib3R0b206IDFweDtcbn1cblxuaW9uLWNhcmQge1xuICBtYXJnaW46IDhweDtcbn1cblxuaW9uLWNhcmQtdGl0bGUge1xuICBmb250LXNpemU6IDE3cHg7XG4gIHBvc2l0aW9uOiBwYWdlO1xufVxuXG4uaW1nMSB7XG4gIHdpZHRoOiAxMGVtO1xuICBoZWlnaHQ6IDEwZW07XG4gIGJvdHRvbTogMTBweDtcbn1cblxuLmltZzIge1xuICB3aWR0aDogMTBlbTtcbiAgaGVpZ2h0OiAxMGVtO1xuICB0b3A6IDEwcHg7XG59XG5cbi5pbWczIHtcbiAgd2lkdGg6IDEwZW07XG4gIGhlaWdodDogMTBlbTtcbiAgbGVmdDogMTBweDtcbn1cblxuLmltZzQge1xuICB3aWR0aDogMTBlbTtcbiAgaGVpZ2h0OiAxMGVtO1xuICByaWdodDogMTBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/matieres/matieres.page.ts":
/*!*******************************************!*\
  !*** ./src/app/matieres/matieres.page.ts ***!
  \*******************************************/
/*! exports provided: MatieresPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatieresPage", function() { return MatieresPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



let MatieresPage = class MatieresPage {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    toDocuments() {
        this.router.navigateByUrl('accueil').then((data) => {
            console.log(data);
        });
    }
    toAnim() {
        this.router.navigateByUrl('projets-anim').then((data) => {
            console.log(data);
        });
    }
    toCrea() {
        this.router.navigateByUrl('projets-crea').then((data) => {
            console.log(data);
        });
    }
    toComd() {
        this.router.navigateByUrl('projets-comd').then((data) => {
            console.log(data);
        });
    }
    toDev() {
        this.router.navigateByUrl('projets-dev').then((data) => {
            console.log(data);
        });
    }
    toJv() {
        this.router.navigateByUrl('projets-jv').then((data) => {
            console.log(data);
        });
    }
    clickedSearch() {
        this.router.navigateByUrl('recherche').then((data) => {
            console.log(data);
        });
    }
};
MatieresPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
MatieresPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-matieres',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./matieres.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/matieres/matieres.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./matieres.page.scss */ "./src/app/matieres/matieres.page.scss")).default]
    })
], MatieresPage);



/***/ })

}]);
//# sourceMappingURL=matieres-matieres-module-es2015.js.map