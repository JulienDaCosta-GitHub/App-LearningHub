(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ajout-form-ajout-form-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ajout-form/ajout-form.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ajout-form/ajout-form.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar class=\"navbar\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/ajout\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Partager</ion-title>\n    <!--ion-button  style=\"color: #4343E6;\"  fill=\"clear\" slot=\"end\" (click)=\"uploadFirebase()\" routerLink=\"/validation\" routerDirection=\"forward\">Suivant</ion-button-->\n    <ion-text slot=\"end\" style=\"color: #4343E6; font-size: 17.5px;font-weight: 500;\" (click)=\"uploadFirebase()\" routerLink=\"/validation\" routerDirection=\"forward\">Suivant</ion-text>\n\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <div style=\"margin-top: 10%;\" class=\"flex\">\n    <div class=\"img-box\">\n      <img [src]=\"image\">\n    </div>\n  </div>\n\n <ion-grid>\n   <ion-grid>\n     <ion-button (click)=\"addPhoto('library')\"><ion-icon name=\"cloud-upload-outline\"></ion-icon></ion-button>\n     <ion-button (click)=\"addPhoto('camera')\"><ion-icon name=\"camera-outline\"></ion-icon></ion-button>\n   </ion-grid>\n\n\n   <ion-grid class=\" ml-3 mt-4 d-flex flex-column\">\n     <ion-label style=\"font-size: 20px;\">Attribuez un titre à votre projet</ion-label>\n     <ion-item style=\"width: 80%;\">\n       <ion-input required type=\"text\" placeholder=\"Titre\" style=\"font-size: 16px;\" [(ngModel)]=\"titre\"></ion-input>\n     </ion-item>\n   </ion-grid>\n\n   <ion-grid class=\" ml-3 mt-4 d-flex flex-column\">\n     <ion-label style=\"font-size: 20px;\">Ajoutez une description</ion-label>\n     <ion-item style=\"width: 80%;\">\n       <ion-input required type=\"text\" placeholder=\"description\"  style=\"font-size: 16px;\" [(ngModel)]=\"description\"></ion-input>\n     </ion-item>\n   </ion-grid>\n </ion-grid>\n\n  <ion-grid class=\"d-flex flex-column justify-content-center\" style=\"margin: 1% 35%;\" routerLink=\"/categories\" router-direction=\"forward\">\n    <ion-icon name=\"chevron-up-outline\" style=\"    margin-left: 27%;width: 25%; height: 24px;\"></ion-icon>\n    <ion-text>Catégories</ion-text>\n  </ion-grid>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/ajout-form/ajout-form-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/ajout-form/ajout-form-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: AjoutFormPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AjoutFormPageRoutingModule", function() { return AjoutFormPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ajout_form_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ajout-form.page */ "./src/app/ajout-form/ajout-form.page.ts");




const routes = [
    {
        path: '',
        component: _ajout_form_page__WEBPACK_IMPORTED_MODULE_3__["AjoutFormPage"]
    }
];
let AjoutFormPageRoutingModule = class AjoutFormPageRoutingModule {
};
AjoutFormPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AjoutFormPageRoutingModule);



/***/ }),

/***/ "./src/app/ajout-form/ajout-form.module.ts":
/*!*************************************************!*\
  !*** ./src/app/ajout-form/ajout-form.module.ts ***!
  \*************************************************/
/*! exports provided: AjoutFormPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AjoutFormPageModule", function() { return AjoutFormPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ajout_form_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ajout-form-routing.module */ "./src/app/ajout-form/ajout-form-routing.module.ts");
/* harmony import */ var _ajout_form_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ajout-form.page */ "./src/app/ajout-form/ajout-form.page.ts");







let AjoutFormPageModule = class AjoutFormPageModule {
};
AjoutFormPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _ajout_form_routing_module__WEBPACK_IMPORTED_MODULE_5__["AjoutFormPageRoutingModule"]
        ],
        declarations: [_ajout_form_page__WEBPACK_IMPORTED_MODULE_6__["AjoutFormPage"]]
    })
], AjoutFormPageModule);



/***/ }),

/***/ "./src/app/ajout-form/ajout-form.page.scss":
/*!*************************************************!*\
  !*** ./src/app/ajout-form/ajout-form.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-title {\n  right: 13px;\n}\n\nion-back-button {\n  color: #4343E6;\n}\n\nion-icon {\n  color: #4343E6;\n}\n\nion-segment {\n  color: #4343E6;\n  margin-top: 15px;\n}\n\n.navbar {\n  padding-bottom: 10px;\n}\n\nion-grid {\n  margin-top: 3px;\n}\n\nion-row {\n  margin-bottom: 1px;\n}\n\nion-col {\n  margin-bottom: 5px;\n}\n\nion-card-title {\n  font-size: 17px;\n}\n\nion-card-subtitle {\n  font-size: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rZXJlbm5kb25nYWxhL0RvY3VtZW50cy9HaXRIdWIvQXBwLUxlYXJuaW5nSHViL0FwcC1MZWFybmluZ0h1Yi9zcmMvYXBwL2Fqb3V0LWZvcm0vYWpvdXQtZm9ybS5wYWdlLnNjc3MiLCJzcmMvYXBwL2Fqb3V0LWZvcm0vYWpvdXQtZm9ybS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxjQUFBO0FDRUY7O0FEQUE7RUFDRSxjQUFBO0FDR0Y7O0FEQUE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7QUNHRjs7QUREQTtFQUNFLG9CQUFBO0FDSUY7O0FERkE7RUFDRSxlQUFBO0FDS0Y7O0FESEE7RUFDRSxrQkFBQTtBQ01GOztBREpBO0VBQ0Usa0JBQUE7QUNPRjs7QURMQTtFQUNFLGVBQUE7QUNRRjs7QUROQTtFQUNFLGVBQUE7QUNTRiIsImZpbGUiOiJzcmMvYXBwL2Fqb3V0LWZvcm0vYWpvdXQtZm9ybS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdGl0bGV7XG4gIHJpZ2h0OiAxM3B4O1xufVxuaW9uLWJhY2stYnV0dG9ue1xuICBjb2xvcjogIzQzNDNFNjtcbn1cbmlvbi1pY29ue1xuICBjb2xvcjogIzQzNDNFNjtcbn1cblxuaW9uLXNlZ21lbnR7XG4gIGNvbG9yOiAjNDM0M0U2O1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuLm5hdmJhcntcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG5pb24tZ3JpZHtcbiAgbWFyZ2luLXRvcDogM3B4O1xufVxuaW9uLXJvd3tcbiAgbWFyZ2luLWJvdHRvbTogMXB4O1xufVxuaW9uLWNvbHtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuaW9uLWNhcmQtdGl0bGV7XG4gIGZvbnQtc2l6ZTogMTdweDtcbn1cbmlvbi1jYXJkLXN1YnRpdGxle1xuICBmb250LXNpemU6IDEwcHg7XG59XG4iLCJpb24tdGl0bGUge1xuICByaWdodDogMTNweDtcbn1cblxuaW9uLWJhY2stYnV0dG9uIHtcbiAgY29sb3I6ICM0MzQzRTY7XG59XG5cbmlvbi1pY29uIHtcbiAgY29sb3I6ICM0MzQzRTY7XG59XG5cbmlvbi1zZWdtZW50IHtcbiAgY29sb3I6ICM0MzQzRTY7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG5cbi5uYXZiYXIge1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cblxuaW9uLWdyaWQge1xuICBtYXJnaW4tdG9wOiAzcHg7XG59XG5cbmlvbi1yb3cge1xuICBtYXJnaW4tYm90dG9tOiAxcHg7XG59XG5cbmlvbi1jb2wge1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbmlvbi1jYXJkLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxN3B4O1xufVxuXG5pb24tY2FyZC1zdWJ0aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/ajout-form/ajout-form.page.ts":
/*!***********************************************!*\
  !*** ./src/app/ajout-form/ajout-form.page.ts ***!
  \***********************************************/
/*! exports provided: AjoutFormPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AjoutFormPage", function() { return AjoutFormPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-storage.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");






let AjoutFormPage = class AjoutFormPage {
    constructor(loadingController, alertController, afSG, afDB, camera) {
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.afSG = afSG;
        this.afDB = afDB;
        this.camera = camera;
        this.image = 'https://www.kasterencultuur.nl/editor/placeholder.jpg';
    }
    addPhoto(source) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (source === 'library') {
                const libraryImage = yield this.openLibrary();
                this.image = 'data:image/jpg;base64,' + libraryImage;
            }
            else {
                const cameraPhoto = yield this.openCamera();
                this.image = 'data:image/jpg;base64,' + cameraPhoto;
            }
        });
    }
    openLibrary() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const options = {
                quality: 100,
                destinationType: this.camera.DestinationType.DATA_URL,
                encodingType: this.camera.EncodingType.JPEG,
                mediaType: this.camera.MediaType.PICTURE,
                targetWidth: 1000,
                targetHeight: 1000,
                sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
            };
            return yield this.camera.getPicture(options);
        });
    }
    openCamera() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const options = {
                quality: 100,
                destinationType: this.camera.DestinationType.DATA_URL,
                encodingType: this.camera.EncodingType.JPEG,
                mediaType: this.camera.MediaType.PICTURE,
                targetWidth: 1000,
                targetHeight: 1000,
                sourceType: this.camera.PictureSourceType.CAMERA
            };
            return yield this.camera.getPicture(options);
        });
    }
    uploadFirebase() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create();
            yield loading.present();
            this.imagePath = 'Projets/' + new Date().getTime() + '.jpg';
            this.upload = this.afSG.ref(this.imagePath).putString(this.image, 'data_url');
            this.upload = this.afDB.list('projetsDetails/').push(this.titre);
            this.upload = this.afDB.list('projetsDetails/').push(this.description);
            this.upload.then(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                this.image = 'https://www.kasterencultuur.nl/editor/placeholder.jpg';
                yield loading.dismiss();
                const alert = yield this.alertController.create({
                    header: 'Félicitation',
                    message: 'Le projet a été ajouté !',
                    buttons: ['OK']
                });
                yield alert.present();
            }));
        });
    }
    ngOnInit() {
    }
};
AjoutFormPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__["AngularFireStorage"] },
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_5__["AngularFireDatabase"] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__["Camera"] }
];
AjoutFormPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ajout-form',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./ajout-form.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ajout-form/ajout-form.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./ajout-form.page.scss */ "./src/app/ajout-form/ajout-form.page.scss")).default]
    })
], AjoutFormPage);



/***/ })

}]);
//# sourceMappingURL=ajout-form-ajout-form-module-es2015.js.map