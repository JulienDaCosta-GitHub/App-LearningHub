function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profil-profil-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/profil/profil.page.html":
  /*!*******************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profil/profil.page.html ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProfilProfilPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content>\n\n  <div class=\"avatar\">\n    <ion-avatar>\n      <img src=\"https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y\">\n    </ion-avatar>\n  </div>\n  \n  <h2>Jean Pierre</h2>\n  \n  <div class=\"options\">\n      <ion-button class=\"modifier\" (click)=\"toModifierProfil()\">Modifier mon profil</ion-button>\n      <ion-button class=\"fichiers\">Voir mes cours/projets</ion-button>\n      <ion-button class=\"favoris\">Voir mes favoris</ion-button>\n  </div>\n  \n  <div class=\"deconnexion\">\n    <ion-button color=\"danger\">Déconnexion</ion-button>\n  </div>\n\n  </ion-content>\n";
    /***/
  },

  /***/
  "./src/app/profil/profil-routing.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/profil/profil-routing.module.ts ***!
    \*************************************************/

  /*! exports provided: ProfilPageRoutingModule */

  /***/
  function srcAppProfilProfilRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfilPageRoutingModule", function () {
      return ProfilPageRoutingModule;
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


    var _profil_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./profil.page */
    "./src/app/profil/profil.page.ts");

    var routes = [{
      path: '',
      component: _profil_page__WEBPACK_IMPORTED_MODULE_3__["ProfilPage"]
    }];

    var ProfilPageRoutingModule = function ProfilPageRoutingModule() {
      _classCallCheck(this, ProfilPageRoutingModule);
    };

    ProfilPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ProfilPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/profil/profil.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/profil/profil.module.ts ***!
    \*****************************************/

  /*! exports provided: ProfilPageModule */

  /***/
  function srcAppProfilProfilModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfilPageModule", function () {
      return ProfilPageModule;
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


    var _profil_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./profil-routing.module */
    "./src/app/profil/profil-routing.module.ts");
    /* harmony import */


    var _profil_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./profil.page */
    "./src/app/profil/profil.page.ts");

    var ProfilPageModule = function ProfilPageModule() {
      _classCallCheck(this, ProfilPageModule);
    };

    ProfilPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _profil_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfilPageRoutingModule"]],
      declarations: [_profil_page__WEBPACK_IMPORTED_MODULE_6__["ProfilPage"]]
    })], ProfilPageModule);
    /***/
  },

  /***/
  "./src/app/profil/profil.page.scss":
  /*!*****************************************!*\
    !*** ./src/app/profil/profil.page.scss ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppProfilProfilPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-avatar {\n  height: 125px;\n  width: 125px;\n}\n\n.avatar {\n  margin-top: 85px;\n  display: flex;\n  justify-content: center;\n}\n\nh2 {\n  text-align: center;\n  font-size: 35px;\n}\n\n.options {\n  display: flex;\n  flex-direction: column;\n  margin: 15%;\n}\n\nion-button {\n  --border-radius: 30px;\n  margin-top: 10px;\n}\n\n.deconnexion {\n  display: flex;\n  flex-direction: column;\n  margin: 15%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rZXJlbm5kb25nYWxhL0RvY3VtZW50cy9HaXRIdWIvQXBwLUxlYXJuaW5nSHViL0FwcC1MZWFybmluZ0h1Yi9zcmMvYXBwL3Byb2ZpbC9wcm9maWwucGFnZS5zY3NzIiwic3JjL2FwcC9wcm9maWwvcHJvZmlsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0FDQ0o7O0FERUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0FDQ0o7O0FERUE7RUFDSSxxQkFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wcm9maWwvcHJvZmlsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1hdmF0YXIge1xuICAgIGhlaWdodDogMTI1cHg7XG4gICAgd2lkdGg6IDEyNXB4O1xufVxuXG4uYXZhdGFyIHtcbiAgICBtYXJnaW4tdG9wOiA4NXB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbmgyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAzNXB4O1xufVxuXG4ub3B0aW9ucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG1hcmdpbjogMTUlO1xufVxuXG5pb24tYnV0dG9uIHtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbn1cbiAgICBcbi5kZWNvbm5leGlvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG1hcmdpbjogMTUlO1xufVxuIiwiaW9uLWF2YXRhciB7XG4gIGhlaWdodDogMTI1cHg7XG4gIHdpZHRoOiAxMjVweDtcbn1cblxuLmF2YXRhciB7XG4gIG1hcmdpbi10b3A6IDg1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG5oMiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAzNXB4O1xufVxuXG4ub3B0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1hcmdpbjogMTUlO1xufVxuXG5pb24tYnV0dG9uIHtcbiAgLS1ib3JkZXItcmFkaXVzOiAzMHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uZGVjb25uZXhpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW46IDE1JTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/profil/profil.page.ts":
  /*!***************************************!*\
    !*** ./src/app/profil/profil.page.ts ***!
    \***************************************/

  /*! exports provided: ProfilPage */

  /***/
  function srcAppProfilProfilPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfilPage", function () {
      return ProfilPage;
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

    var ProfilPage = /*#__PURE__*/function () {
      function ProfilPage(router) {
        _classCallCheck(this, ProfilPage);

        this.router = router;
      }

      _createClass(ProfilPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "toModifierProfil",
        value: function toModifierProfil() {
          this.router.navigateByUrl('modifier-profil').then(function (data) {
            console.log(data);
          });
        }
      }]);

      return ProfilPage;
    }();

    ProfilPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    ProfilPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-profil',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./profil.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/profil/profil.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./profil.page.scss */
      "./src/app/profil/profil.page.scss"))["default"]]
    })], ProfilPage);
    /***/
  }
}]);
//# sourceMappingURL=profil-profil-module-es5.js.map