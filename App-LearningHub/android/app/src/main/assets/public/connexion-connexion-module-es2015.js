(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["connexion-connexion-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/connexion/connexion.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/connexion/connexion.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-icon style=\" color: #3a7be0; width: 28px; height: 29px;\" slot=\"start\" name=\"chevron-back-outline\"></ion-icon>\n    <ion-button style=\"width: 97px;\" slot=\"start\"fill=\"clear\" routerLink=\"/bienvenue\" router-direction=\"back\">LearningHub</ion-button>\n    <ion-title>Connexion</ion-title>\n    <ion-button *ngIf=\"connected\" fill=\"clear\" slot=\"end\" (click)=\"logout()\">Deconnexion</ion-button>\n\n\n  </ion-toolbar>\n</ion-header>\n<!--ion-header collapse=\"condense\">\n  <ion-toolbar>\n    <ion-title >Connexion</ion-title>\n    <ion-button *ngIf=\"connected\" fill=\"clear\" class=\"btn-connexion\" (click)=\"logout()\">Déconnexion</ion-button>\n\n\n  </ion-toolbar>\n\n</ion-header -->\n\n\n<ion-content >\n\n\n  <div *ngIf=\"!connected\">\n    <div class=\"champs-connexion\">\n      <div class=\"input-connexion\">\n        <p>Adresse mail</p>\n        <ion-input type=\"email\" class=\"access\" [(ngModel)]=\"dataUser.email\"></ion-input>\n      </div>\n\n      <div class=\"input-connexion\">\n        <p>Mot de passe</p>\n        <ion-input type=\"password\" class=\"access\" [(ngModel)]=\"dataUser.password\"></ion-input>\n      </div>\n\n      <div class=\"connexion\">\n        <ion-button class=\"btn-connexion\" (click)=\"login()\">connexion</ion-button>\n      </div>\n    </div>\n  </div>\n\n  <div *ngIf=\"connected\">\n    <h1>Vous êtes bien connecté</h1>\n    <ion-avatar style=\"width: 25%; height: 25%; margin: 10% 35%;\">\n      <img src=\"https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y\">\n    </ion-avatar>\n    <h2>{{email}}</h2>\n  </div>\n\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/connexion/connexion-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/connexion/connexion-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: ConnexionPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnexionPageRoutingModule", function() { return ConnexionPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _connexion_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./connexion.page */ "./src/app/connexion/connexion.page.ts");




const routes = [
    {
        path: '',
        component: _connexion_page__WEBPACK_IMPORTED_MODULE_3__["ConnexionPage"]
    }
];
let ConnexionPageRoutingModule = class ConnexionPageRoutingModule {
};
ConnexionPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ConnexionPageRoutingModule);



/***/ }),

/***/ "./src/app/connexion/connexion.module.ts":
/*!***********************************************!*\
  !*** ./src/app/connexion/connexion.module.ts ***!
  \***********************************************/
/*! exports provided: ConnexionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnexionPageModule", function() { return ConnexionPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _connexion_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./connexion-routing.module */ "./src/app/connexion/connexion-routing.module.ts");
/* harmony import */ var _connexion_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./connexion.page */ "./src/app/connexion/connexion.page.ts");







let ConnexionPageModule = class ConnexionPageModule {
};
ConnexionPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _connexion_routing_module__WEBPACK_IMPORTED_MODULE_5__["ConnexionPageRoutingModule"]
        ],
        declarations: [_connexion_page__WEBPACK_IMPORTED_MODULE_6__["ConnexionPage"]]
    })
], ConnexionPageModule);



/***/ }),

/***/ "./src/app/connexion/connexion.page.scss":
/*!***********************************************!*\
  !*** ./src/app/connexion/connexion.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".title-profil-connexion {\n  text-align: center;\n  margin-top: 40px;\n}\n\n.access {\n  border: 1px solid purple;\n  border-radius: 10px;\n  height: 35px;\n}\n\n.champs-connexion {\n  margin: 10%;\n  position: relative;\n  top: calc(100% - 80%);\n}\n\n.connexion {\n  text-align: center;\n}\n\n.btn-connexion {\n  margin-top: 70px;\n  width: 225px;\n  --border-radius: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rZXJlbm5kb25nYWxhL0RvY3VtZW50cy9HaXRIdWIvQXBwLUxlYXJuaW5nSHViL0FwcC1MZWFybmluZ0h1Yi9zcmMvYXBwL2Nvbm5leGlvbi9jb25uZXhpb24ucGFnZS5zY3NzIiwic3JjL2FwcC9jb25uZXhpb24vY29ubmV4aW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFQTtFQUNJLHdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7QUNDSjs7QURFQTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9jb25uZXhpb24vY29ubmV4aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXRsZS1wcm9maWwtY29ubmV4aW9uIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogNDBweDtcbn1cblxuLmFjY2VzcyB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcHVycGxlO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgaGVpZ2h0OiAzNXB4O1xufVxuXG4uY2hhbXBzLWNvbm5leGlvbiB7XG4gICAgbWFyZ2luOiAxMCU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogY2FsYygxMDAlIC0gODAlKTtcbn1cblxuLmNvbm5leGlvbiB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYnRuLWNvbm5leGlvbiB7XG4gICAgbWFyZ2luLXRvcDogNzBweDtcbiAgICB3aWR0aDogMjI1cHg7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAzMHB4O1xufSIsIi50aXRsZS1wcm9maWwtY29ubmV4aW9uIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiA0MHB4O1xufVxuXG4uYWNjZXNzIHtcbiAgYm9yZGVyOiAxcHggc29saWQgcHVycGxlO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBoZWlnaHQ6IDM1cHg7XG59XG5cbi5jaGFtcHMtY29ubmV4aW9uIHtcbiAgbWFyZ2luOiAxMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiBjYWxjKDEwMCUgLSA4MCUpO1xufVxuXG4uY29ubmV4aW9uIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYnRuLWNvbm5leGlvbiB7XG4gIG1hcmdpbi10b3A6IDcwcHg7XG4gIHdpZHRoOiAyMjVweDtcbiAgLS1ib3JkZXItcmFkaXVzOiAzMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/connexion/connexion.page.ts":
/*!*********************************************!*\
  !*** ./src/app/connexion/connexion.page.ts ***!
  \*********************************************/
/*! exports provided: ConnexionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnexionPage", function() { return ConnexionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");



let ConnexionPage = class ConnexionPage {
    constructor(afAuth) {
        this.afAuth = afAuth;
        this.dataUser = {
            email: '',
            password: ''
        };
        this.email = '';
        this.userId = '';
        this.method = '';
        this.afAuth.authState.subscribe(auth => {
            if (!auth) {
                console.log('non connecté');
                this.connected = false;
            }
            else {
                console.log('connecté: ' + auth.uid);
                this.userId = auth.uid;
                this.email = auth.email;
                this.method = auth.providerData[0].providerId;
                this.connected = true;
            }
        });
    }
    login() {
        this.afAuth.signInWithEmailAndPassword(this.dataUser.email, this.dataUser.password);
        this.dataUser = {
            email: '',
            password: ''
        };
    }
    logout() {
        this.afAuth.signOut();
    }
    ngOnInit() {
    }
};
ConnexionPage.ctorParameters = () => [
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] }
];
ConnexionPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-connexion',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./connexion.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/connexion/connexion.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./connexion.page.scss */ "./src/app/connexion/connexion.page.scss")).default]
    })
], ConnexionPage);



/***/ })

}]);
//# sourceMappingURL=connexion-connexion-module-es2015.js.map