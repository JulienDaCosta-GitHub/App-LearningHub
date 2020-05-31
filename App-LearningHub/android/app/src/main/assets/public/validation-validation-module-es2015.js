(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["validation-validation-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/validation/validation.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/validation/validation.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header collapse=\"condense\">\n  <ion-toolbar class=\"navbar\" style=\"margin-top: 10%\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/ajout-form\"></ion-back-button>\n    </ion-buttons>\n    <ion-title *ngIf=\"projets\">Projets</ion-title>\n    <ion-title *ngIf=\"cours\">Cours</ion-title>\n\n    <ion-buttons slot=\"primary\">\n      <ion-button (click)=\"clickedSearch()\">\n        <ion-icon slot=\"icon-only\" name=\"search\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n\n  <ion-toolbar>\n    <ion-segment value=\"all\">\n      <ion-segment-button value=\"all\" (click)=\"activeProjets()\">\n\n        Projets\n      </ion-segment-button>\n      <ion-segment-button value=\"favorites\" (click)=\"activeCours()\">\n\n        Cours\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n\n  <!--ion-toolbar>\n    <ion-buttons slot=\"primary\">\n      <ion-button (click)=\"clickedSearch()\">\n        <ion-icon slot=\"icon-only\" name=\"search\" class=\"mr-3\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n\n    <h1 class=\"ml-3\" *ngIf=\"projets\">Projets</h1>\n    <h1 class=\"ml-3\" *ngIf=\"cours\">Cours</h1>\n\n    <ion-toolbar class=\"mt-4\">\n      <ion-segment value=\"all\">\n        <ion-segment-button value=\"all\" (click)=\"activeProjets()\">\n          Projets\n        </ion-segment-button>\n        <ion-segment-button value=\"favorites\" (click)=\"activeCours()\">\n          Cours\n        </ion-segment-button>\n      </ion-segment>\n    </ion-toolbar>\n\n  </ion-toolbar-->\n</ion-header>\n\n\n\n<ion-content>\n  <p class=\"ml-4 mt-4\" *ngIf=\"projets\"><b>{{validattionProjetsLength}} Projets</b></p>\n  <p class=\"ml-4 mt-4\" *ngIf=\"cours\"><b>{{validattionCoursLength}} Cours</b></p>\n\n  <!--ion-grid class=\"d-flex flex-wrap\" *ngIf=\"projets\">\n    <ion-card style=\" width: 44%; height: 37%;\" *ngFor=\"let validation of validationsProjets\">\n      <img style=\"width: 100%;\" [src]=\"validation.url\" />\n      <ion-card-content>\n        <ion-card-title>\n          {{validation.title}}\n        </ion-card-title>\n        <p>\n          {{validation.categorie}}\n        </p>\n      </ion-card-content>\n      <ion-row no-padding>\n\n      </ion-row>\n    </ion-card>\n\n\n  </ion-grid-->\n\n  <ion-grid *ngIf=\"projets\">\n    <ion-row>\n      <ion-col size=\"6\" *ngFor=\"let validation of validationsProjets\">\n        <ion-card>\n          <ion-img [src]=\"validation.url\"></ion-img>\n          <ion-card-header>\n            <ion-card-title>{{validation.title}}</ion-card-title>\n            <ion-card-subtitle>{{validation.categorie}}</ion-card-subtitle>\n          </ion-card-header>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid class=\"d-flex\" *ngIf=\"cours\">\n    <ion-card style=\" width: 44%; height: 37%;\" *ngFor=\"let validation of validationsCours\">\n      <img style=\"width: 100%;\" [src]=\"validation.url\" />\n      <ion-card-content>\n        <ion-card-title>\n          {{validation.title}}\n        </ion-card-title>\n        <p>\n          {{validation.categorie}}\n        </p>\n      </ion-card-content>\n      <ion-row no-padding>\n\n      </ion-row>\n    </ion-card>\n\n  </ion-grid>\n\n\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/validation/validation-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/validation/validation-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: ValidationPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationPageRoutingModule", function() { return ValidationPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _validation_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./validation.page */ "./src/app/validation/validation.page.ts");




const routes = [
    {
        path: '',
        component: _validation_page__WEBPACK_IMPORTED_MODULE_3__["ValidationPage"]
    }
];
let ValidationPageRoutingModule = class ValidationPageRoutingModule {
};
ValidationPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ValidationPageRoutingModule);



/***/ }),

/***/ "./src/app/validation/validation.module.ts":
/*!*************************************************!*\
  !*** ./src/app/validation/validation.module.ts ***!
  \*************************************************/
/*! exports provided: ValidationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationPageModule", function() { return ValidationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _validation_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./validation-routing.module */ "./src/app/validation/validation-routing.module.ts");
/* harmony import */ var _validation_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./validation.page */ "./src/app/validation/validation.page.ts");







let ValidationPageModule = class ValidationPageModule {
};
ValidationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _validation_routing_module__WEBPACK_IMPORTED_MODULE_5__["ValidationPageRoutingModule"]
        ],
        declarations: [_validation_page__WEBPACK_IMPORTED_MODULE_6__["ValidationPage"]]
    })
], ValidationPageModule);



/***/ }),

/***/ "./src/app/validation/validation.page.scss":
/*!*************************************************!*\
  !*** ./src/app/validation/validation.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-icon {\n  color: #4343E6;\n}\n\nion-segment {\n  color: #4343E6;\n  margin-top: 30px;\n}\n\nion-title {\n  right: 13px;\n}\n\nion-back-button {\n  color: #4343E6;\n}\n\nion-icon {\n  color: #4343E6;\n}\n\nion-segment {\n  color: #4343E6;\n  margin-top: 15px;\n}\n\n.navbar {\n  padding-bottom: 10px;\n}\n\nion-grid {\n  margin-top: 3px;\n}\n\nion-row {\n  margin-bottom: 1px;\n}\n\nion-col {\n  margin-bottom: 5px;\n}\n\nion-card-title {\n  font-size: 17px;\n}\n\nion-card-subtitle {\n  font-size: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rZXJlbm5kb25nYWxhL0RvY3VtZW50cy9HaXRIdWIvQXBwLUxlYXJuaW5nSHViL0FwcC1MZWFybmluZ0h1Yi9zcmMvYXBwL3ZhbGlkYXRpb24vdmFsaWRhdGlvbi5wYWdlLnNjc3MiLCJzcmMvYXBwL3ZhbGlkYXRpb24vdmFsaWRhdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7QUNDRjs7QURDQTtFQUNFLGNBQUE7QUNFRjs7QURBQTtFQUNFLGNBQUE7QUNHRjs7QURBQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtBQ0dGOztBRERBO0VBQ0Usb0JBQUE7QUNJRjs7QURGQTtFQUNFLGVBQUE7QUNLRjs7QURIQTtFQUNFLGtCQUFBO0FDTUY7O0FESkE7RUFDRSxrQkFBQTtBQ09GOztBRExBO0VBQ0UsZUFBQTtBQ1FGOztBRE5BO0VBQ0UsZUFBQTtBQ1NGIiwiZmlsZSI6InNyYy9hcHAvdmFsaWRhdGlvbi92YWxpZGF0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pY29ue1xuICBjb2xvcjogIzQzNDNFNjtcbn1cblxuaW9uLXNlZ21lbnQge1xuICBjb2xvcjogIzQzNDNFNjtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxuaW9uLXRpdGxle1xuICByaWdodDogMTNweDtcbn1cbmlvbi1iYWNrLWJ1dHRvbntcbiAgY29sb3I6ICM0MzQzRTY7XG59XG5pb24taWNvbntcbiAgY29sb3I6ICM0MzQzRTY7XG59XG5cbmlvbi1zZWdtZW50e1xuICBjb2xvcjogIzQzNDNFNjtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cbi5uYXZiYXJ7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuaW9uLWdyaWR7XG4gIG1hcmdpbi10b3A6IDNweDtcbn1cbmlvbi1yb3d7XG4gIG1hcmdpbi1ib3R0b206IDFweDtcbn1cbmlvbi1jb2x7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cbmlvbi1jYXJkLXRpdGxle1xuICBmb250LXNpemU6IDE3cHg7XG59XG5pb24tY2FyZC1zdWJ0aXRsZXtcbiAgZm9udC1zaXplOiAxMHB4O1xufVxuIiwiaW9uLWljb24ge1xuICBjb2xvcjogIzQzNDNFNjtcbn1cblxuaW9uLXNlZ21lbnQge1xuICBjb2xvcjogIzQzNDNFNjtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxuaW9uLXRpdGxlIHtcbiAgcmlnaHQ6IDEzcHg7XG59XG5cbmlvbi1iYWNrLWJ1dHRvbiB7XG4gIGNvbG9yOiAjNDM0M0U2O1xufVxuXG5pb24taWNvbiB7XG4gIGNvbG9yOiAjNDM0M0U2O1xufVxuXG5pb24tc2VnbWVudCB7XG4gIGNvbG9yOiAjNDM0M0U2O1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuXG4ubmF2YmFyIHtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG5cbmlvbi1ncmlkIHtcbiAgbWFyZ2luLXRvcDogM3B4O1xufVxuXG5pb24tcm93IHtcbiAgbWFyZ2luLWJvdHRvbTogMXB4O1xufVxuXG5pb24tY29sIHtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG5pb24tY2FyZC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTdweDtcbn1cblxuaW9uLWNhcmQtc3VidGl0bGUge1xuICBmb250LXNpemU6IDEwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/validation/validation.page.ts":
/*!***********************************************!*\
  !*** ./src/app/validation/validation.page.ts ***!
  \***********************************************/
/*! exports provided: ValidationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationPage", function() { return ValidationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-storage.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





let ValidationPage = class ValidationPage {
    constructor(afDB, afSG, router) {
        this.afDB = afDB;
        this.afSG = afSG;
        this.router = router;
        this.images = [];
        this.validationsProjets = [
            {
                id: 0,
                title: 'BarbaJs',
                categorie: 'Web Design',
                url: 'https://i.pinimg.com/236x/ef/8e/a3/ef8ea321f0365aafe631c52e38f1d6b8.jpg'
            },
            {
                id: 1,
                title: 'Illustrator',
                categorie: 'Graphic Design',
                url: 'https://i.pinimg.com/236x/6a/07/45/6a07451631ad1dd24cce8b73ea5fc62b.jpg'
            },
            {
                id: 2,
                title: 'test',
                categorie: '',
                url: 'assets/img/fleurs.png'
            }
        ];
        this.validattionProjetsLength = this.validationsProjets.length;
        this.validationsCours = [
            {
                id: 0,
                title: 'BarbaJs',
                categorie: 'Web Design',
                url: 'https://i.pinimg.com/236x/1e/c1/e8/1ec1e82d784b39ae763a93bb43a4e313.jpg'
            },
            {
                id: 0,
                title: 'BarbaJs',
                categorie: 'Web Design',
                url: 'https://i.pinimg.com/236x/1e/c1/e8/1ec1e82d784b39ae763a93bb43a4e313.jpg'
            }
        ];
        this.validattionCoursLength = this.validationsCours.length;
        this.projets = true;
        this.cours = false;
        this.getImagesDatabase();
    }
    activeProjets() {
        this.projets = true;
        this.cours = false;
    }
    activeCours() {
        this.cours = true;
        this.projets = false;
    }
    getImagesDatabase() {
        // pour récupérer les informations des images
        this.afDB.list('Images').snapshotChanges(['child_added']).subscribe(images => {
            images.forEach(image => {
                this.getImagesStorage(image);
            });
        });
    }
    getImagesStorage(image) {
        const imgRef = image.payload.exportVal().ref;
        this.afSG.ref(imgRef).getDownloadURL().subscribe(imgUrl => {
            console.log(imgUrl);
            this.images.push({
                name: image.payload.exportVal().name,
                url: imgUrl
            });
        });
    }
    ngOnInit() {
    }
};
ValidationPage.ctorParameters = () => [
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"] },
    { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__["AngularFireStorage"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
ValidationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-validation',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./validation.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/validation/validation.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./validation.page.scss */ "./src/app/validation/validation.page.scss")).default]
    })
], ValidationPage);



/***/ })

}]);
//# sourceMappingURL=validation-validation-module-es2015.js.map