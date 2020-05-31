(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modifier-mdp-modifier-mdp-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modifier-mdp/modifier-mdp.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modifier-mdp/modifier-mdp.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-nav-bar>\n  <div>\n    <ion-nav-back-button class=\"button-clear\">\n      <ion-img class=\"arrow\" src=\"assets/icon/back.png\"></ion-img>\n      <p class=\"title-back\">Mon profil</p>\n    </ion-nav-back-button>\n  </div>\n</ion-nav-bar>\n\n<ion-content>\n\n  <div class=\"title\">\n    <h2>Modifier</h2>\n    <h2>le mot de passe</h2>\n  </div>\n\n  \n  <div class=\"input-modif\">\n    <p>Votre nouveau de passe</p>\n    <ion-input class=\"access\"></ion-input>\n  </div>\n\n  <div class=\"input-modif\">\n    <p>Confirmer le mot de passe</p>\n    <ion-input class=\"access\"></ion-input>\n  </div>\n\n  <div class=\"save\">\n    <ion-button class=\"btn-save\">Enregistrer</ion-button>\n  </div>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/modifier-mdp/modifier-mdp-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/modifier-mdp/modifier-mdp-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: ModifierMdpPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModifierMdpPageRoutingModule", function() { return ModifierMdpPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _modifier_mdp_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modifier-mdp.page */ "./src/app/modifier-mdp/modifier-mdp.page.ts");




const routes = [
    {
        path: '',
        component: _modifier_mdp_page__WEBPACK_IMPORTED_MODULE_3__["ModifierMdpPage"]
    }
];
let ModifierMdpPageRoutingModule = class ModifierMdpPageRoutingModule {
};
ModifierMdpPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ModifierMdpPageRoutingModule);



/***/ }),

/***/ "./src/app/modifier-mdp/modifier-mdp.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/modifier-mdp/modifier-mdp.module.ts ***!
  \*****************************************************/
/*! exports provided: ModifierMdpPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModifierMdpPageModule", function() { return ModifierMdpPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _modifier_mdp_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modifier-mdp-routing.module */ "./src/app/modifier-mdp/modifier-mdp-routing.module.ts");
/* harmony import */ var _modifier_mdp_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modifier-mdp.page */ "./src/app/modifier-mdp/modifier-mdp.page.ts");







let ModifierMdpPageModule = class ModifierMdpPageModule {
};
ModifierMdpPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _modifier_mdp_routing_module__WEBPACK_IMPORTED_MODULE_5__["ModifierMdpPageRoutingModule"]
        ],
        declarations: [_modifier_mdp_page__WEBPACK_IMPORTED_MODULE_6__["ModifierMdpPage"]]
    })
], ModifierMdpPageModule);



/***/ }),

/***/ "./src/app/modifier-mdp/modifier-mdp.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/modifier-mdp/modifier-mdp.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".button-clear {\n  display: flex;\n  margin-top: 17%;\n  margin-left: 5%;\n}\n\n.arrow {\n  height: 20px;\n  width: 20px;\n}\n\n.title-back {\n  margin: 0 5px;\n}\n\n.title {\n  margin-top: 15%;\n}\n\nh2 {\n  margin: 0 10%;\n  font-size: 35px;\n}\n\n.access {\n  border: 1px solid purple;\n  border-radius: 10px;\n  height: 35px;\n}\n\n.input-modif {\n  margin: 12% 10%;\n}\n\n.save {\n  text-align: center;\n}\n\n.btn-save {\n  margin-top: 5%;\n  width: 225px;\n  --border-radius: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rZXJlbm5kb25nYWxhL0RvY3VtZW50cy9HaXRIdWIvQXBwLUxlYXJuaW5nSHViL0FwcC1MZWFybmluZ0h1Yi9zcmMvYXBwL21vZGlmaWVyLW1kcC9tb2RpZmllci1tZHAucGFnZS5zY3NzIiwic3JjL2FwcC9tb2RpZmllci1tZHAvbW9kaWZpZXItbWRwLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUNDSjs7QURFQTtFQUNJLGFBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7QUNDSjs7QURFQTtFQUNJLGFBQUE7RUFDQSxlQUFBO0FDQ0o7O0FERUE7RUFDSSx3QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7QUNDSjs7QURFQTtFQUNJLGNBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL21vZGlmaWVyLW1kcC9tb2RpZmllci1tZHAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ1dHRvbi1jbGVhciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXJnaW4tdG9wOiAxNyU7XG4gICAgbWFyZ2luLWxlZnQ6IDUlXG59XG5cbi5hcnJvdyB7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIHdpZHRoOiAyMHB4O1xufVxuXG4udGl0bGUtYmFjayB7XG4gICAgbWFyZ2luOiAwIDVweDtcbn1cblxuLnRpdGxlIHtcbiAgICBtYXJnaW4tdG9wOiAxNSU7XG59XG5cbmgyIHtcbiAgICBtYXJnaW46IDAgMTAlO1xuICAgIGZvbnQtc2l6ZTogMzVweDtcbn1cblxuLmFjY2VzcyB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcHVycGxlO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgaGVpZ2h0OiAzNXB4O1xufVxuXG4uaW5wdXQtbW9kaWYge1xuICAgIG1hcmdpbjogMTIlIDEwJTs7XG59XG5cbi5zYXZlIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5idG4tc2F2ZSB7XG4gICAgbWFyZ2luLXRvcDogNSU7XG4gICAgd2lkdGg6IDIyNXB4O1xuICAgIC0tYm9yZGVyLXJhZGl1czogMzBweDtcbn0iLCIuYnV0dG9uLWNsZWFyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLXRvcDogMTclO1xuICBtYXJnaW4tbGVmdDogNSU7XG59XG5cbi5hcnJvdyB7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDIwcHg7XG59XG5cbi50aXRsZS1iYWNrIHtcbiAgbWFyZ2luOiAwIDVweDtcbn1cblxuLnRpdGxlIHtcbiAgbWFyZ2luLXRvcDogMTUlO1xufVxuXG5oMiB7XG4gIG1hcmdpbjogMCAxMCU7XG4gIGZvbnQtc2l6ZTogMzVweDtcbn1cblxuLmFjY2VzcyB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHB1cnBsZTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgaGVpZ2h0OiAzNXB4O1xufVxuXG4uaW5wdXQtbW9kaWYge1xuICBtYXJnaW46IDEyJSAxMCU7XG59XG5cbi5zYXZlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYnRuLXNhdmUge1xuICBtYXJnaW4tdG9wOiA1JTtcbiAgd2lkdGg6IDIyNXB4O1xuICAtLWJvcmRlci1yYWRpdXM6IDMwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/modifier-mdp/modifier-mdp.page.ts":
/*!***************************************************!*\
  !*** ./src/app/modifier-mdp/modifier-mdp.page.ts ***!
  \***************************************************/
/*! exports provided: ModifierMdpPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModifierMdpPage", function() { return ModifierMdpPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



let ModifierMdpPage = class ModifierMdpPage {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
};
ModifierMdpPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
ModifierMdpPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-modifier-mdp',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./modifier-mdp.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modifier-mdp/modifier-mdp.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./modifier-mdp.page.scss */ "./src/app/modifier-mdp/modifier-mdp.page.scss")).default]
    })
], ModifierMdpPage);



/***/ })

}]);
//# sourceMappingURL=modifier-mdp-modifier-mdp-module-es2015.js.map