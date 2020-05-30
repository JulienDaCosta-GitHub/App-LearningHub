function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["categorie-details-categorie-details-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/categorie-details/categorie-details.page.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/categorie-details/categorie-details.page.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCategorieDetailsCategorieDetailsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-grid class=\"d-flex ml-3\">\n      <ion-icon style=\"width: 22px;height: 22px;\" name=\"close-outline\"></ion-icon>\n      <ion-label class=\"ml-3\">Créer une catégorie</ion-label>\n    </ion-grid>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <!-- Formulaire nouvelle catégorie -->\n  <ion-grid class=\"mt-5\">\n    <h1 class=\"ml-3\">Créer une catégorie</h1>\n    <ion-grid class=\"mt-5\">\n      <ion-grid class=\" ml-3 mt-4 d-flex flex-column\">\n        <ion-label style=\"font-size: 20px;\">Attribuez un nom à votre catégorie</ion-label>\n        <ion-item style=\"width: 80%;\">\n          <ion-input required type=\"text\" placeholder=\"Nom de la catégorie\" style=\"font-size: 16px;\" [(ngModel)]=\"categorie.title\"></ion-input>\n        </ion-item>\n      </ion-grid>\n\n      <ion-grid class=\" ml-3 mt-4 d-flex flex-column\">\n        <ion-label style=\"font-size: 20px;\">Pas d'inspiration ? Essayez un de ces noms :</ion-label>\n        <ion-grid class=\"d-flex mt-3\">\n          <ion-chip color=\"tertiary\">\n            <ion-label color=\"dark\">Web</ion-label>\n          </ion-chip>\n\n          <ion-chip color=\"tertiary\">\n            <ion-label color=\"dark\">Tutos</ion-label>\n          </ion-chip>\n\n          <ion-chip color=\"tertiary\">\n            <ion-label color=\"dark\">Trends</ion-label>\n          </ion-chip>\n\n          <ion-chip color=\"tertiary\">\n            <ion-label color=\"dark\">Trends</ion-label>\n          </ion-chip>\n\n        </ion-grid>\n\n      </ion-grid>\n\n\n\n    </ion-grid>\n\n  </ion-grid>\n  <ion-button class=\"\" size=\"large\" expand=\"block\" color=\"tertiary\" style=\"margin: 12% 36%;\" (click)=\"saveCatgorie()\">Créer</ion-button>\n\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/categorie-details/categorie-details-routing.module.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/categorie-details/categorie-details-routing.module.ts ***!
    \***********************************************************************/

  /*! exports provided: CategorieDetailsPageRoutingModule */

  /***/
  function srcAppCategorieDetailsCategorieDetailsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategorieDetailsPageRoutingModule", function () {
      return CategorieDetailsPageRoutingModule;
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


    var _categorie_details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./categorie-details.page */
    "./src/app/categorie-details/categorie-details.page.ts");

    var routes = [{
      path: '',
      component: _categorie_details_page__WEBPACK_IMPORTED_MODULE_3__["CategorieDetailsPage"]
    }];

    var CategorieDetailsPageRoutingModule = function CategorieDetailsPageRoutingModule() {
      _classCallCheck(this, CategorieDetailsPageRoutingModule);
    };

    CategorieDetailsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], CategorieDetailsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/categorie-details/categorie-details.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/categorie-details/categorie-details.module.ts ***!
    \***************************************************************/

  /*! exports provided: CategorieDetailsPageModule */

  /***/
  function srcAppCategorieDetailsCategorieDetailsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategorieDetailsPageModule", function () {
      return CategorieDetailsPageModule;
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


    var _categorie_details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./categorie-details-routing.module */
    "./src/app/categorie-details/categorie-details-routing.module.ts");
    /* harmony import */


    var _categorie_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./categorie-details.page */
    "./src/app/categorie-details/categorie-details.page.ts");

    var CategorieDetailsPageModule = function CategorieDetailsPageModule() {
      _classCallCheck(this, CategorieDetailsPageModule);
    };

    CategorieDetailsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _categorie_details_routing_module__WEBPACK_IMPORTED_MODULE_5__["CategorieDetailsPageRoutingModule"]],
      declarations: [_categorie_details_page__WEBPACK_IMPORTED_MODULE_6__["CategorieDetailsPage"]]
    })], CategorieDetailsPageModule);
    /***/
  },

  /***/
  "./src/app/categorie-details/categorie-details.page.scss":
  /*!***************************************************************!*\
    !*** ./src/app/categorie-details/categorie-details.page.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCategorieDetailsCategorieDetailsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-icon {\n  color: #4343E6;\n}\n\nion-segment {\n  color: #4343E6;\n  margin-top: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rZXJlbm5kb25nYWxhL0RvY3VtZW50cy9HaXRIdWIvQXBwLUxlYXJuaW5nSHViL0FwcC1MZWFybmluZ0h1Yi9zcmMvYXBwL2NhdGVnb3JpZS1kZXRhaWxzL2NhdGVnb3JpZS1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvY2F0ZWdvcmllLWRldGFpbHMvY2F0ZWdvcmllLWRldGFpbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9jYXRlZ29yaWUtZGV0YWlscy9jYXRlZ29yaWUtZGV0YWlscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taWNvbntcbiAgY29sb3I6ICM0MzQzRTY7XG59XG5cbmlvbi1zZWdtZW50IHtcbiAgY29sb3I6ICM0MzQzRTY7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG59XG4iLCJpb24taWNvbiB7XG4gIGNvbG9yOiAjNDM0M0U2O1xufVxuXG5pb24tc2VnbWVudCB7XG4gIGNvbG9yOiAjNDM0M0U2O1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/categorie-details/categorie-details.page.ts":
  /*!*************************************************************!*\
    !*** ./src/app/categorie-details/categorie-details.page.ts ***!
    \*************************************************************/

  /*! exports provided: CategorieDetailsPage */

  /***/
  function srcAppCategorieDetailsCategorieDetailsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategorieDetailsPage", function () {
      return CategorieDetailsPage;
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


    var _services_categorie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/categorie.service */
    "./src/app/services/categorie.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var CategorieDetailsPage = /*#__PURE__*/function () {
      function CategorieDetailsPage(categorieService, route, loadingController, nav) {
        _classCallCheck(this, CategorieDetailsPage);

        this.categorieService = categorieService;
        this.route = route;
        this.loadingController = loadingController;
        this.nav = nav;
        this.categorie = {
          title: 'Graphic Design',
          imgUrl: 'https://i.pinimg.com/236x/ae/fc/05/aefc05419689fd304064cef0ca7c3a82.jpg'
        };
        this.categorieId = null;
      }

      _createClass(CategorieDetailsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.categorieId = this.route.snapshot.params['id'];

          if (this.categorieId) {
            this.loadCategorie();
          }
        }
      }, {
        key: "loadCategorie",
        value: function loadCategorie() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this = this;

            var loading;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.loadingController.create({
                      message: 'Loading Categorie..'
                    });

                  case 2:
                    loading = _context.sent;
                    _context.next = 5;
                    return loading.present();

                  case 5:
                    this.categorieService.getCategorie(this.categorieId).subscribe(function (res) {
                      loading.dismiss();
                      _this.categorie = res;
                    });

                  case 6:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "saveCatgorie",
        value: function saveCatgorie() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this2 = this;

            var loading;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.loadingController.create({
                      message: 'Loading Categorie..'
                    });

                  case 2:
                    loading = _context2.sent;
                    _context2.next = 5;
                    return loading.present();

                  case 5:
                    if (this.categorieId) {
                      this.categorieService.updateCategorie(this.categorie, this.categorieId).then(function () {
                        loading.dismiss();

                        _this2.nav.navigateBack('categories');
                      });
                    } else {
                      this.categorieService.addCategorie(this.categorie).then(function () {
                        loading.dismiss();

                        _this2.nav.navigateBack('categories');
                      });
                    }

                  case 6:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }]);

      return CategorieDetailsPage;
    }();

    CategorieDetailsPage.ctorParameters = function () {
      return [{
        type: _services_categorie_service__WEBPACK_IMPORTED_MODULE_2__["CategorieService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
      }];
    };

    CategorieDetailsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-categorie-details',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./categorie-details.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/categorie-details/categorie-details.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./categorie-details.page.scss */
      "./src/app/categorie-details/categorie-details.page.scss"))["default"]]
    })], CategorieDetailsPage);
    /***/
  }
}]);
//# sourceMappingURL=categorie-details-categorie-details-module-es5.js.map