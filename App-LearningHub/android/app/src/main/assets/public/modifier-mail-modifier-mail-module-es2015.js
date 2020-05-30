(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modifier-mail-modifier-mail-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modifier-mail/modifier-mail.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modifier-mail/modifier-mail.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-nav-bar>\n  <div>\n    <ion-nav-back-button class=\"button-clear\">\n      <ion-img class=\"arrow\" src=\"assets/icon/back.png\"></ion-img>\n      <p class=\"title-back\">Mon profil</p>\n    </ion-nav-back-button>\n  </div>\n</ion-nav-bar>\n\n<ion-content>\n\n  <div class=\"title\">\n    <h2>Modifier</h2>\n    <h2>l'adresse mail</h2>\n  </div>\n\n  \n  <div class=\"input-modif\">\n    <p>Votre nouvelle adresse mail</p>\n    <ion-input class=\"access\"></ion-input>\n  </div>\n\n  <div class=\"save\">\n    <ion-button class=\"btn-save\">Enregistrer</ion-button>\n  </div>\n  \n\n</ion-content>");

/***/ }),

/***/ "./src/app/modifier-mail/modifier-mail-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/modifier-mail/modifier-mail-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: ModifierMailPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModifierMailPageRoutingModule", function() { return ModifierMailPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _modifier_mail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modifier-mail.page */ "./src/app/modifier-mail/modifier-mail.page.ts");




const routes = [
    {
        path: '',
        component: _modifier_mail_page__WEBPACK_IMPORTED_MODULE_3__["ModifierMailPage"]
    }
];
let ModifierMailPageRoutingModule = class ModifierMailPageRoutingModule {
};
ModifierMailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ModifierMailPageRoutingModule);



/***/ }),

/***/ "./src/app/modifier-mail/modifier-mail.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/modifier-mail/modifier-mail.module.ts ***!
  \*******************************************************/
/*! exports provided: ModifierMailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModifierMailPageModule", function() { return ModifierMailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _modifier_mail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modifier-mail-routing.module */ "./src/app/modifier-mail/modifier-mail-routing.module.ts");
/* harmony import */ var _modifier_mail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modifier-mail.page */ "./src/app/modifier-mail/modifier-mail.page.ts");







let ModifierMailPageModule = class ModifierMailPageModule {
};
ModifierMailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _modifier_mail_routing_module__WEBPACK_IMPORTED_MODULE_5__["ModifierMailPageRoutingModule"]
        ],
        declarations: [_modifier_mail_page__WEBPACK_IMPORTED_MODULE_6__["ModifierMailPage"]]
    })
], ModifierMailPageModule);



/***/ }),

/***/ "./src/app/modifier-mail/modifier-mail.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/modifier-mail/modifier-mail.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".button-clear {\n  display: flex;\n  margin-top: 17%;\n  margin-left: 5%;\n}\n\n.arrow {\n  height: 20px;\n  width: 20px;\n}\n\n.title-back {\n  margin: 0 5px;\n}\n\n.title {\n  margin-top: 15%;\n}\n\nh2 {\n  margin: 0 10%;\n  font-size: 35px;\n}\n\n.access {\n  border: 1px solid purple;\n  border-radius: 10px;\n  height: 35px;\n}\n\n.input-modif {\n  margin: 15% 10%;\n}\n\n.save {\n  text-align: center;\n}\n\n.btn-save {\n  margin-top: 35%;\n  width: 225px;\n  --border-radius: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rZXJlbm5kb25nYWxhL0RvY3VtZW50cy9HaXRIdWIvQXBwLUxlYXJuaW5nSHViL0FwcC1MZWFybmluZ0h1Yi9zcmMvYXBwL21vZGlmaWVyLW1haWwvbW9kaWZpZXItbWFpbC5wYWdlLnNjc3MiLCJzcmMvYXBwL21vZGlmaWVyLW1haWwvbW9kaWZpZXItbWFpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FDQ0o7O0FERUE7RUFDSSxhQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0FDQ0o7O0FERUE7RUFDSSxhQUFBO0VBQ0EsZUFBQTtBQ0NKOztBREVBO0VBQ0ksd0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9tb2RpZmllci1tYWlsL21vZGlmaWVyLW1haWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ1dHRvbi1jbGVhciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXJnaW4tdG9wOiAxNyU7XG4gICAgbWFyZ2luLWxlZnQ6IDUlXG59XG5cbi5hcnJvdyB7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIHdpZHRoOiAyMHB4O1xufVxuXG4udGl0bGUtYmFjayB7XG4gICAgbWFyZ2luOiAwIDVweDtcbn1cblxuLnRpdGxlIHtcbiAgICBtYXJnaW4tdG9wOiAxNSU7XG59XG5cbmgyIHtcbiAgICBtYXJnaW46IDAgMTAlO1xuICAgIGZvbnQtc2l6ZTogMzVweDtcbn1cblxuLmFjY2VzcyB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcHVycGxlO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgaGVpZ2h0OiAzNXB4O1xufVxuXG4uaW5wdXQtbW9kaWYge1xuICAgIG1hcmdpbjogMTUlIDEwJTs7XG59XG5cbi5zYXZlIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5idG4tc2F2ZSB7XG4gICAgbWFyZ2luLXRvcDogMzUlO1xuICAgIHdpZHRoOiAyMjVweDtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDMwcHg7XG59IiwiLmJ1dHRvbi1jbGVhciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi10b3A6IDE3JTtcbiAgbWFyZ2luLWxlZnQ6IDUlO1xufVxuXG4uYXJyb3cge1xuICBoZWlnaHQ6IDIwcHg7XG4gIHdpZHRoOiAyMHB4O1xufVxuXG4udGl0bGUtYmFjayB7XG4gIG1hcmdpbjogMCA1cHg7XG59XG5cbi50aXRsZSB7XG4gIG1hcmdpbi10b3A6IDE1JTtcbn1cblxuaDIge1xuICBtYXJnaW46IDAgMTAlO1xuICBmb250LXNpemU6IDM1cHg7XG59XG5cbi5hY2Nlc3Mge1xuICBib3JkZXI6IDFweCBzb2xpZCBwdXJwbGU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGhlaWdodDogMzVweDtcbn1cblxuLmlucHV0LW1vZGlmIHtcbiAgbWFyZ2luOiAxNSUgMTAlO1xufVxuXG4uc2F2ZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmJ0bi1zYXZlIHtcbiAgbWFyZ2luLXRvcDogMzUlO1xuICB3aWR0aDogMjI1cHg7XG4gIC0tYm9yZGVyLXJhZGl1czogMzBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modifier-mail/modifier-mail.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/modifier-mail/modifier-mail.page.ts ***!
  \*****************************************************/
/*! exports provided: ModifierMailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModifierMailPage", function() { return ModifierMailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let ModifierMailPage = class ModifierMailPage {
    constructor() { }
    ngOnInit() {
    }
};
ModifierMailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-modifier-mail',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./modifier-mail.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modifier-mail/modifier-mail.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./modifier-mail.page.scss */ "./src/app/modifier-mail/modifier-mail.page.scss")).default]
    })
], ModifierMailPage);



/***/ })

}]);
//# sourceMappingURL=modifier-mail-modifier-mail-module-es2015.js.map