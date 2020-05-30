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


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-icon style=\" color: #3a7be0; width: 28px; height: 29px;\" slot=\"start\" name=\"chevron-back-outline\"></ion-icon>\n    <ion-button style=\"width: 60px;\" slot=\"start\"fill=\"clear\">Ajouter</ion-button>\n    <ion-title>Partager</ion-title>\n    <ion-button fill=\"clear\" slot=\"end\" (click)=\"uploadFirebase()\" routerLink=\"/validation\" routerDirection=\"forward\">Suivant</ion-button>\n\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <div style=\"margin-top: 10%;\" class=\"flex\">\n    <div class=\"img-box\">\n      <img [src]=\"image\">\n    </div>\n  </div>\n\n <ion-grid>\n   <ion-grid>\n     <ion-button (click)=\"addPhoto('library')\"><ion-icon name=\"cloud-upload-outline\"></ion-icon></ion-button>\n     <ion-button (click)=\"addPhoto('camera')\"><ion-icon name=\"camera-outline\"></ion-icon></ion-button>\n   </ion-grid>\n\n\n   <ion-grid class=\" ml-3 mt-4 d-flex flex-column\">\n     <ion-label style=\"font-size: 20px;\">Attribuez un nom à votre projet</ion-label>\n     <ion-item style=\"width: 80%;\">\n       <ion-input required type=\"text\" placeholder=\"Nom de la catégorie\" style=\"font-size: 16px;\" [(ngModel)]=\"titre\"></ion-input>\n     </ion-item>\n   </ion-grid>\n\n   <ion-grid class=\" ml-3 mt-4 d-flex flex-column\">\n     <ion-label style=\"font-size: 20px;\">Ajoutez une description</ion-label>\n     <ion-item style=\"width: 80%;\">\n       <ion-input required type=\"text\"  style=\"font-size: 16px;\" [(ngModel)]=\"description\"></ion-input>\n     </ion-item>\n   </ion-grid>\n </ion-grid>\n</ion-content>\n";
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
    /* harmony import */


    var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/fire/storage */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-storage.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_fire_database__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/fire/database */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");

    var AjoutFormPage = /*#__PURE__*/function () {
      function AjoutFormPage(loadingController, alertController, afSG, afDB, camera) {
        _classCallCheck(this, AjoutFormPage);

        this.loadingController = loadingController;
        this.alertController = alertController;
        this.afSG = afSG;
        this.afDB = afDB;
        this.camera = camera;
        this.image = 'https://www.kasterencultuur.nl/editor/placeholder.jpg';
      }

      _createClass(AjoutFormPage, [{
        key: "addPhoto",
        value: function addPhoto(source) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var libraryImage, cameraPhoto;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    if (!(source === 'library')) {
                      _context.next = 7;
                      break;
                    }

                    _context.next = 3;
                    return this.openLibrary();

                  case 3:
                    libraryImage = _context.sent;
                    this.image = 'data:image/jpg;base64,' + libraryImage;
                    _context.next = 11;
                    break;

                  case 7:
                    _context.next = 9;
                    return this.openCamera();

                  case 9:
                    cameraPhoto = _context.sent;
                    this.image = 'data:image/jpg;base64,' + cameraPhoto;

                  case 11:
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
        key: "openCamera",
        value: function openCamera() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var options;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    options = {
                      quality: 100,
                      destinationType: this.camera.DestinationType.DATA_URL,
                      encodingType: this.camera.EncodingType.JPEG,
                      mediaType: this.camera.MediaType.PICTURE,
                      targetWidth: 1000,
                      targetHeight: 1000,
                      sourceType: this.camera.PictureSourceType.CAMERA
                    };
                    _context3.next = 3;
                    return this.camera.getPicture(options);

                  case 3:
                    return _context3.abrupt("return", _context3.sent);

                  case 4:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "uploadFirebase",
        value: function uploadFirebase() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            var _this = this;

            var loading;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return this.loadingController.create();

                  case 2:
                    loading = _context5.sent;
                    _context5.next = 5;
                    return loading.present();

                  case 5:
                    this.imagePath = 'Projets/' + new Date().getTime() + '.jpg';
                    this.upload = this.afSG.ref(this.imagePath).putString(this.image, 'data_url');
                    this.upload = this.afDB.list('projetsDetails/').push(this.titre);
                    this.upload = this.afDB.list('projetsDetails/').push(this.description);
                    this.upload.then(function () {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                        var alert;
                        return regeneratorRuntime.wrap(function _callee4$(_context4) {
                          while (1) {
                            switch (_context4.prev = _context4.next) {
                              case 0:
                                this.image = 'https://www.kasterencultuur.nl/editor/placeholder.jpg';
                                _context4.next = 3;
                                return loading.dismiss();

                              case 3:
                                _context4.next = 5;
                                return this.alertController.create({
                                  header: 'Félicitation',
                                  message: 'L\'envoi à Firebase est terminé!',
                                  buttons: ['OK']
                                });

                              case 5:
                                alert = _context4.sent;
                                _context4.next = 8;
                                return alert.present();

                              case 8:
                              case "end":
                                return _context4.stop();
                            }
                          }
                        }, _callee4, this);
                      }));
                    });

                  case 10:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
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
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
      }, {
        type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__["AngularFireStorage"]
      }, {
        type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_5__["AngularFireDatabase"]
      }, {
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