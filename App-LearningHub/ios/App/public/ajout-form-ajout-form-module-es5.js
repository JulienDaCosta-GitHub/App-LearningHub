function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ajout-form-ajout-form-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ajout-form/ajout-form.page.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ajout-form/ajout-form.page.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAjoutFormAjoutFormPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>ajoutForm</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <h1 class=\"ml-3\">Créer une catégorie</h1>\n\n  <div class=\"flex\">\n    <div class=\"img-box\">\n      <img [src]=\"image\">\n    </div>\n  </div>\n\n <ion-grid>\n   <ion-grid>\n     <ion-button (click)=\"addPhoto()\"><ion-icon name=\"cloud-upload-outline\"></ion-icon></ion-button>\n     <ion-button><ion-icon name=\"camera-outline\"></ion-icon></ion-button>\n   </ion-grid>\n\n\n   <ion-grid class=\" ml-3 mt-4 d-flex flex-column\">\n     <ion-label style=\"font-size: 20px;\">Attribuez un nom à votre catégorie</ion-label>\n     <ion-item style=\"width: 80%;\">\n       <ion-input required type=\"text\" placeholder=\"Nom de la catégorie\" style=\"font-size: 16px;\" ></ion-input>\n     </ion-item>\n   </ion-grid>\n\n   <ion-grid class=\" ml-3 mt-4 d-flex flex-column\">\n     <ion-label style=\"font-size: 20px;\">Attribuez un nom à votre catégorie</ion-label>\n     <ion-item style=\"width: 80%;\">\n       <ion-input required type=\"text\" placeholder=\"Nom de la catégorie\" style=\"font-size: 16px;\" ></ion-input>\n     </ion-item>\n   </ion-grid>\n </ion-grid>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/ajout-form/ajout-form-routing.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/ajout-form/ajout-form-routing.module.ts ***!
    \*********************************************************/

  /*! exports provided: AjoutFormPageRoutingModule */

  /***/
  function srcAppAjoutFormAjoutFormRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AjoutFormPageRoutingModule", function () {
      return AjoutFormPageRoutingModule;
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


    var _ajout_form_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./ajout-form.page */
    "./src/app/ajout-form/ajout-form.page.ts");

    var routes = [{
      path: '',
      component: _ajout_form_page__WEBPACK_IMPORTED_MODULE_3__["AjoutFormPage"]
    }];

    var AjoutFormPageRoutingModule = function AjoutFormPageRoutingModule() {
      _classCallCheck(this, AjoutFormPageRoutingModule);
    };

    AjoutFormPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AjoutFormPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/ajout-form/ajout-form.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/ajout-form/ajout-form.module.ts ***!
    \*************************************************/

  /*! exports provided: AjoutFormPageModule */

  /***/
  function srcAppAjoutFormAjoutFormModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AjoutFormPageModule", function () {
      return AjoutFormPageModule;
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


    var _ajout_form_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./ajout-form-routing.module */
    "./src/app/ajout-form/ajout-form-routing.module.ts");
    /* harmony import */


    var _ajout_form_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./ajout-form.page */
    "./src/app/ajout-form/ajout-form.page.ts");

    var AjoutFormPageModule = function AjoutFormPageModule() {
      _classCallCheck(this, AjoutFormPageModule);
    };

    AjoutFormPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _ajout_form_routing_module__WEBPACK_IMPORTED_MODULE_5__["AjoutFormPageRoutingModule"]],
      declarations: [_ajout_form_page__WEBPACK_IMPORTED_MODULE_6__["AjoutFormPage"]]
    })], AjoutFormPageModule);
    /***/
  },

  /***/
  "./src/app/ajout-form/ajout-form.page.scss":
  /*!*************************************************!*\
    !*** ./src/app/ajout-form/ajout-form.page.scss ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAjoutFormAjoutFormPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fqb3V0LWZvcm0vYWpvdXQtZm9ybS5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/ajout-form/ajout-form.page.ts":
  /*!***********************************************!*\
    !*** ./src/app/ajout-form/ajout-form.page.ts ***!
    \***********************************************/

  /*! exports provided: AjoutFormPage */

  /***/
  function srcAppAjoutFormAjoutFormPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AjoutFormPage", function () {
      return AjoutFormPage;
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


    var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic-native/camera/ngx */
    "./node_modules/@ionic-native/camera/__ivy_ngcc__/ngx/index.js");

    var AjoutFormPage = /*#__PURE__*/function () {
      function AjoutFormPage(camera) {
        _classCallCheck(this, AjoutFormPage);

        this.camera = camera;
        this.image = 'https://www.kasterencultuur.nl/editor/placeholder.jpg';
      }

      _createClass(AjoutFormPage, [{
        key: "addPhoto",
        value: function addPhoto() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var libraryImage;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.openLibrary();

                  case 2:
                    libraryImage = _context.sent;
                    this.image = 'data:image/jpg;base64,' + libraryImage;

                  case 4:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "openLibrary",
        value: function openLibrary() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var options;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    options = {
                      quality: 100,
                      destinationType: this.camera.DestinationType.DATA_URL,
                      encodingType: this.camera.EncodingType.JPEG,
                      mediaType: this.camera.MediaType.PICTURE,
                      targetWidth: 1000,
                      targetHeight: 1000,
                      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
                    };
                    _context2.next = 3;
                    return this.camera.getPicture(options);

                  case 3:
                    return _context2.abrupt("return", _context2.sent);

                  case 4:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AjoutFormPage;
    }();

    AjoutFormPage.ctorParameters = function () {
      return [{
        type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__["Camera"]
      }];
    };

    AjoutFormPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-ajout-form',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./ajout-form.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ajout-form/ajout-form.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./ajout-form.page.scss */
      "./src/app/ajout-form/ajout-form.page.scss"))["default"]]
    })], AjoutFormPage);
    /***/
  }
}]);
//# sourceMappingURL=ajout-form-ajout-form-module-es5.js.map