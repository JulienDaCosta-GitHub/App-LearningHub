function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modifier-profil-modifier-profil-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modifier-profil/modifier-profil.page.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modifier-profil/modifier-profil.page.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModifierProfilModifierProfilPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content>\n\n  <h2 class=\"title-modif-profil\">Mon profil</h2>\n\n  <div class=\"avatar\">\n    <ion-avatar>\n      <img src=\"https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y\">\n    </ion-avatar>\n    <ion-icon class=\"pencil\" name=\"pencil-outline\"></ion-icon>\n  </div>\n\n  <div class=\"modif\">\n    <ion-button class=\"modif_btn\" color=\"light\" style=\"width: 100%\" (click)=\"toModifierNom()\">Modifier le nom</ion-button>\n    <ion-button class=\"modif_btn\" color=\"light\" style=\"width: 100%\" (click)=\"toModifierPrenom()\">Modifier le prénom</ion-button>\n    <ion-button class=\"modif_btn\" color=\"light\" style=\"width: 100%\" (click)=\"toModifierMail()\">Modifier l'adresse mail</ion-button>\n    <ion-button class=\"modif_btn\" color=\"light\" style=\"width: 100%\" (click)=\"toModifierMdp()\">Modifier le mot de passe</ion-button>\n  </div>\n  \n\n  \n  <div class=\"save_profil\">\n    <ion-button class=\"save_btn\">Enregistrer</ion-button>\n  </div>\n\n  \n  </ion-content>\n";
    /***/
  },

  /***/
  "./src/app/modifier-profil/modifier-profil-routing.module.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/modifier-profil/modifier-profil-routing.module.ts ***!
    \*******************************************************************/

  /*! exports provided: ModifierProfilPageRoutingModule */

  /***/
  function srcAppModifierProfilModifierProfilRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModifierProfilPageRoutingModule", function () {
      return ModifierProfilPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _modifier_profil_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./modifier-profil.page */
    "./src/app/modifier-profil/modifier-profil.page.ts");

    var routes = [{
      path: '',
      component: _modifier_profil_page__WEBPACK_IMPORTED_MODULE_3__["ModifierProfilPage"]
    }];

    var ModifierProfilPageRoutingModule = function ModifierProfilPageRoutingModule() {
      _classCallCheck(this, ModifierProfilPageRoutingModule);
    };

    ModifierProfilPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ModifierProfilPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/modifier-profil/modifier-profil.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/modifier-profil/modifier-profil.module.ts ***!
    \***********************************************************/

  /*! exports provided: ModifierProfilPageModule */

  /***/
  function srcAppModifierProfilModifierProfilModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModifierProfilPageModule", function () {
      return ModifierProfilPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _modifier_profil_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./modifier-profil-routing.module */
    "./src/app/modifier-profil/modifier-profil-routing.module.ts");
    /* harmony import */


    var _modifier_profil_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./modifier-profil.page */
    "./src/app/modifier-profil/modifier-profil.page.ts");

    var ModifierProfilPageModule = function ModifierProfilPageModule() {
      _classCallCheck(this, ModifierProfilPageModule);
    };

    ModifierProfilPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _modifier_profil_routing_module__WEBPACK_IMPORTED_MODULE_5__["ModifierProfilPageRoutingModule"]],
      declarations: [_modifier_profil_page__WEBPACK_IMPORTED_MODULE_6__["ModifierProfilPage"]]
    })], ModifierProfilPageModule);
    /***/
  },

  /***/
  "./src/app/modifier-profil/modifier-profil.page.scss":
  /*!***********************************************************!*\
    !*** ./src/app/modifier-profil/modifier-profil.page.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModifierProfilModifierProfilPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-avatar {\n  height: 125px;\n  width: 125px;\n}\n\n.avatar {\n  margin-top: 40px;\n  display: flex;\n  justify-content: center;\n  margin-left: 35px;\n}\n\nh2 {\n  text-align: center;\n  font-size: 35px;\n}\n\n.save_btn {\n  --border-radius: 30px;\n  margin-top: 10px;\n}\n\n.save_profil {\n  display: flex;\n  flex-direction: column;\n  margin: 15%;\n}\n\n.modif {\n  margin-top: 50px;\n}\n\n.title-modif-profil {\n  text-align: center;\n  margin-top: 40px;\n}\n\n.pencil {\n  margin-top: 90px;\n  width: 30px;\n  height: 30px;\n  position: relative;\n  right: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rZXJlbm5kb25nYWxhL0RvY3VtZW50cy9HaXRIdWIvQXBwLUxlYXJuaW5nSHViL0FwcC1MZWFybmluZ0h1Yi9zcmMvYXBwL21vZGlmaWVyLXByb2ZpbC9tb2RpZmllci1wcm9maWwucGFnZS5zY3NzIiwic3JjL2FwcC9tb2RpZmllci1wcm9maWwvbW9kaWZpZXItcHJvZmlsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLGVBQUE7QUNDSjs7QURFQTtFQUNJLHFCQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7QUNDSjs7QURFQTtFQUNJLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9tb2RpZmllci1wcm9maWwvbW9kaWZpZXItcHJvZmlsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1hdmF0YXIge1xuICAgIGhlaWdodDogMTI1cHg7XG4gICAgd2lkdGg6IDEyNXB4O1xufVxuXG4uYXZhdGFyIHtcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWFyZ2luLWxlZnQ6IDM1cHg7XG59XG5cbmgyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAzNXB4O1xufVxuXG4uc2F2ZV9idG4ge1xuICAgIC0tYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuICAgIFxuLnNhdmVfcHJvZmlsIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgbWFyZ2luOiAxNSU7XG59XG5cbi5tb2RpZiB7XG4gICAgbWFyZ2luLXRvcDogNTBweDtcbn1cblxuLnRpdGxlLW1vZGlmLXByb2ZpbCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDQwcHg7XG59XG5cbi5wZW5jaWwge1xuICAgIG1hcmdpbi10b3A6IDkwcHg7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICByaWdodDogMTRweDtcbn1cbiIsImlvbi1hdmF0YXIge1xuICBoZWlnaHQ6IDEyNXB4O1xuICB3aWR0aDogMTI1cHg7XG59XG5cbi5hdmF0YXIge1xuICBtYXJnaW4tdG9wOiA0MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLWxlZnQ6IDM1cHg7XG59XG5cbmgyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDM1cHg7XG59XG5cbi5zYXZlX2J0biB7XG4gIC0tYm9yZGVyLXJhZGl1czogMzBweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLnNhdmVfcHJvZmlsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luOiAxNSU7XG59XG5cbi5tb2RpZiB7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG59XG5cbi50aXRsZS1tb2RpZi1wcm9maWwge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG59XG5cbi5wZW5jaWwge1xuICBtYXJnaW4tdG9wOiA5MHB4O1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHJpZ2h0OiAxNHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/modifier-profil/modifier-profil.page.ts":
  /*!*********************************************************!*\
    !*** ./src/app/modifier-profil/modifier-profil.page.ts ***!
    \*********************************************************/

  /*! exports provided: ModifierProfilPage */

  /***/
  function srcAppModifierProfilModifierProfilPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModifierProfilPage", function () {
      return ModifierProfilPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var ModifierProfilPage = /*#__PURE__*/function () {
      function ModifierProfilPage(router) {
        _classCallCheck(this, ModifierProfilPage);

        this.router = router;
      }

      _createClass(ModifierProfilPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "toModifierNom",
        value: function toModifierNom() {
          this.router.navigateByUrl('modifier-nom').then(function (data) {
            console.log(data);
          });
        }
      }, {
        key: "toModifierPrenom",
        value: function toModifierPrenom() {
          this.router.navigateByUrl('modifier-prenom').then(function (data) {
            console.log(data);
          });
        }
      }, {
        key: "toModifierMail",
        value: function toModifierMail() {
          this.router.navigateByUrl('modifier-mail').then(function (data) {
            console.log(data);
          });
        }
      }, {
        key: "toModifierMdp",
        value: function toModifierMdp() {
          this.router.navigateByUrl('modifier-mdp').then(function (data) {
            console.log(data);
          });
        }
      }]);

      return ModifierProfilPage;
    }();

    ModifierProfilPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    ModifierProfilPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-modifier-profil',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./modifier-profil.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modifier-profil/modifier-profil.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./modifier-profil.page.scss */
      "./src/app/modifier-profil/modifier-profil.page.scss"))["default"]]
    })], ModifierProfilPage);
    /***/
  }
}]);
//# sourceMappingURL=modifier-profil-modifier-profil-module-es5.js.map