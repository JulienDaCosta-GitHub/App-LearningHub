function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
  /*!*****************************************************************************************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
    \*****************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesIonicCoreDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
    var map = {
      "./ion-action-sheet-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-ios.entry.js", "common", 0],
      "./ion-action-sheet-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-md.entry.js", "common", 1],
      "./ion-alert-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert-ios.entry.js", "common", 2],
      "./ion-alert-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert-md.entry.js", "common", 3],
      "./ion-app_8-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8-ios.entry.js", "common", 4],
      "./ion-app_8-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8-md.entry.js", "common", 5],
      "./ion-avatar_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3-ios.entry.js", "common", 6],
      "./ion-avatar_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3-md.entry.js", "common", 7],
      "./ion-back-button-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button-ios.entry.js", "common", 8],
      "./ion-back-button-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button-md.entry.js", "common", 9],
      "./ion-backdrop-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop-ios.entry.js", 10],
      "./ion-backdrop-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop-md.entry.js", 11],
      "./ion-button_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2-ios.entry.js", "common", 12],
      "./ion-button_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2-md.entry.js", "common", 13],
      "./ion-card_5-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5-ios.entry.js", "common", 14],
      "./ion-card_5-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5-md.entry.js", "common", 15],
      "./ion-checkbox-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox-ios.entry.js", "common", 16],
      "./ion-checkbox-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox-md.entry.js", "common", 17],
      "./ion-chip-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip-ios.entry.js", "common", 18],
      "./ion-chip-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip-md.entry.js", "common", 19],
      "./ion-col_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js", 20],
      "./ion-datetime_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3-ios.entry.js", "common", 21],
      "./ion-datetime_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3-md.entry.js", "common", 22],
      "./ion-fab_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3-ios.entry.js", "common", 23],
      "./ion-fab_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3-md.entry.js", "common", 24],
      "./ion-img.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-img.entry.js", 25],
      "./ion-infinite-scroll_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-ios.entry.js", 26],
      "./ion-infinite-scroll_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-md.entry.js", 27],
      "./ion-input-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input-ios.entry.js", "common", 28],
      "./ion-input-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input-md.entry.js", "common", 29],
      "./ion-item-option_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3-ios.entry.js", "common", 30],
      "./ion-item-option_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3-md.entry.js", "common", 31],
      "./ion-item_8-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8-ios.entry.js", "common", 32],
      "./ion-item_8-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8-md.entry.js", "common", 33],
      "./ion-loading-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading-ios.entry.js", "common", 34],
      "./ion-loading-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading-md.entry.js", "common", 35],
      "./ion-menu_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3-ios.entry.js", "common", 36],
      "./ion-menu_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3-md.entry.js", "common", 37],
      "./ion-modal-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal-ios.entry.js", "common", 38],
      "./ion-modal-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal-md.entry.js", "common", 39],
      "./ion-nav_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-nav_2.entry.js", "common", 40],
      "./ion-popover-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover-ios.entry.js", "common", 41],
      "./ion-popover-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover-md.entry.js", "common", 42],
      "./ion-progress-bar-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar-ios.entry.js", "common", 43],
      "./ion-progress-bar-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar-md.entry.js", "common", 44],
      "./ion-radio_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2-ios.entry.js", "common", 45],
      "./ion-radio_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2-md.entry.js", "common", 46],
      "./ion-range-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range-ios.entry.js", "common", 47],
      "./ion-range-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range-md.entry.js", "common", 48],
      "./ion-refresher_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2-ios.entry.js", "common", 49],
      "./ion-refresher_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2-md.entry.js", "common", 50],
      "./ion-reorder_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2-ios.entry.js", "common", 51],
      "./ion-reorder_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2-md.entry.js", "common", 52],
      "./ion-ripple-effect.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js", 53],
      "./ion-route_4.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js", "common", 54],
      "./ion-searchbar-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar-ios.entry.js", "common", 55],
      "./ion-searchbar-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar-md.entry.js", "common", 56],
      "./ion-segment_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2-ios.entry.js", "common", 57],
      "./ion-segment_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2-md.entry.js", "common", 58],
      "./ion-select_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3-ios.entry.js", "common", 59],
      "./ion-select_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3-md.entry.js", "common", 60],
      "./ion-slide_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2-ios.entry.js", 61],
      "./ion-slide_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2-md.entry.js", 62],
      "./ion-spinner.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js", "common", 63],
      "./ion-split-pane-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane-ios.entry.js", 64],
      "./ion-split-pane-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane-md.entry.js", 65],
      "./ion-tab-bar_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-ios.entry.js", "common", 66],
      "./ion-tab-bar_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-md.entry.js", "common", 67],
      "./ion-tab_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js", "common", 68],
      "./ion-text.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-text.entry.js", "common", 69],
      "./ion-textarea-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea-ios.entry.js", "common", 70],
      "./ion-textarea-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea-md.entry.js", "common", 71],
      "./ion-toast-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast-ios.entry.js", "common", 72],
      "./ion-toast-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast-md.entry.js", "common", 73],
      "./ion-toggle-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle-ios.entry.js", "common", 74],
      "./ion-toggle-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle-md.entry.js", "common", 75],
      "./ion-virtual-scroll.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js", 76]
    };

    function webpackAsyncContext(req) {
      if (!__webpack_require__.o(map, req)) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      var ids = map[req],
          id = ids[0];
      return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
        return __webpack_require__(id);
      });
    }

    webpackAsyncContext.keys = function webpackAsyncContextKeys() {
      return Object.keys(map);
    };

    webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
    module.exports = webpackAsyncContext;
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-app>\n  <ion-router-outlet></ion-router-outlet>\n  <ion-tabs>\n    <ion-tab-bar slot=\"bottom\">\n      <ion-tab-button tab=\"schedule\" (click)=\"toAccueil()\">\n        <ion-icon name=\"home-outline\"></ion-icon>\n        <ion-label>Accueil</ion-label>\n      </ion-tab-button>\n\n      <ion-tab-button tab=\"speakers\" (click)=\"toAjout()\">\n        <ion-icon name=\"add-circle-outline\"></ion-icon>\n        <ion-label>Ajout</ion-label>\n      </ion-tab-button>\n\n      <ion-tab-button tab=\"map\" (click)=\"toProfil()\">\n        <ion-icon name=\"person-circle-outline\"></ion-icon>\n        <ion-label>Profil</ion-label>\n      </ion-tab-button>\n    </ion-tab-bar>\n  </ion-tabs>\n</ion-app>\n";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
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

    var routes = [{
      path: '',
      redirectTo: 'bienvenue',
      pathMatch: 'full'
    }, {
      path: 'bienvenue',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | bienvenue-bienvenue-module */
        "bienvenue-bienvenue-module").then(__webpack_require__.bind(null,
        /*! ./bienvenue/bienvenue.module */
        "./src/app/bienvenue/bienvenue.module.ts")).then(function (m) {
          return m.BienvenuePageModule;
        });
      }
    }, {
      path: 'inscription',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | inscription-inscription-module */
        "inscription-inscription-module").then(__webpack_require__.bind(null,
        /*! ./inscription/inscription.module */
        "./src/app/inscription/inscription.module.ts")).then(function (m) {
          return m.InscriptionPageModule;
        });
      }
    }, {
      path: 'connexion',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | connexion-connexion-module */
        "connexion-connexion-module").then(__webpack_require__.bind(null,
        /*! ./connexion/connexion.module */
        "./src/app/connexion/connexion.module.ts")).then(function (m) {
          return m.ConnexionPageModule;
        });
      }
    }, {
      path: 'profil',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | profil-profil-module */
        "profil-profil-module").then(__webpack_require__.bind(null,
        /*! ./profil/profil.module */
        "./src/app/profil/profil.module.ts")).then(function (m) {
          return m.ProfilPageModule;
        });
      }
    }, {
      path: 'modifier-profil',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | modifier-profil-modifier-profil-module */
        "modifier-profil-modifier-profil-module").then(__webpack_require__.bind(null,
        /*! ./modifier-profil/modifier-profil.module */
        "./src/app/modifier-profil/modifier-profil.module.ts")).then(function (m) {
          return m.ModifierProfilPageModule;
        });
      }
    }, {
      path: 'modifier-mail',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | modifier-mail-modifier-mail-module */
        "modifier-mail-modifier-mail-module").then(__webpack_require__.bind(null,
        /*! ./modifier-mail/modifier-mail.module */
        "./src/app/modifier-mail/modifier-mail.module.ts")).then(function (m) {
          return m.ModifierMailPageModule;
        });
      }
    }, {
      path: 'modifier-mdp',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | modifier-mdp-modifier-mdp-module */
        "modifier-mdp-modifier-mdp-module").then(__webpack_require__.bind(null,
        /*! ./modifier-mdp/modifier-mdp.module */
        "./src/app/modifier-mdp/modifier-mdp.module.ts")).then(function (m) {
          return m.ModifierMdpPageModule;
        });
      }
    }, {
      path: 'modifier-prenom',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | modifier-prenom-modifier-prenom-module */
        "modifier-prenom-modifier-prenom-module").then(__webpack_require__.bind(null,
        /*! ./modifier-prenom/modifier-prenom.module */
        "./src/app/modifier-prenom/modifier-prenom.module.ts")).then(function (m) {
          return m.ModifierPrenomPageModule;
        });
      }
    }, {
      path: 'modifier-nom',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | modifier-nom-modifier-nom-module */
        "modifier-nom-modifier-nom-module").then(__webpack_require__.bind(null,
        /*! ./modifier-nom/modifier-nom.module */
        "./src/app/modifier-nom/modifier-nom.module.ts")).then(function (m) {
          return m.ModifierNomPageModule;
        });
      }
    }, {
      path: 'matieres',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | matieres-matieres-module */
        "matieres-matieres-module").then(__webpack_require__.bind(null,
        /*! ./matieres/matieres.module */
        "./src/app/matieres/matieres.module.ts")).then(function (m) {
          return m.MatieresPageModule;
        });
      }
    }, {
      path: 'accueil',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | accueil-accueil-module */
        "accueil-accueil-module").then(__webpack_require__.bind(null,
        /*! ./accueil/accueil.module */
        "./src/app/accueil/accueil.module.ts")).then(function (m) {
          return m.AccueilPageModule;
        });
      }
    }, {
      path: 'cours-anim',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | 3D-cours-anim-cours-anim-module */
        "3D-cours-anim-cours-anim-module").then(__webpack_require__.bind(null,
        /*! ./3D/cours-anim/cours-anim.module */
        "./src/app/3D/cours-anim/cours-anim.module.ts")).then(function (m) {
          return m.CoursAnimPageModule;
        });
      }
    }, {
      path: 'projets-anim',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | 3D-projets-anim-projets-anim-module */
        "3D-projets-anim-projets-anim-module").then(__webpack_require__.bind(null,
        /*! ./3D/projets-anim/projets-anim.module */
        "./src/app/3D/projets-anim/projets-anim.module.ts")).then(function (m) {
          return m.ProjetsAnimPageModule;
        });
      }
    }, {
      path: 'cours-crea',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | Crea-cours-crea-cours-crea-module */
        "Crea-cours-crea-cours-crea-module").then(__webpack_require__.bind(null,
        /*! ./Crea/cours-crea/cours-crea.module */
        "./src/app/Crea/cours-crea/cours-crea.module.ts")).then(function (m) {
          return m.CoursCreaPageModule;
        });
      }
    }, {
      path: 'projets-crea',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | Crea-projets-crea-projets-crea-module */
        "Crea-projets-crea-projets-crea-module").then(__webpack_require__.bind(null,
        /*! ./Crea/projets-crea/projets-crea.module */
        "./src/app/Crea/projets-crea/projets-crea.module.ts")).then(function (m) {
          return m.ProjetsCreaPageModule;
        });
      }
    }, {
      path: 'cours-comd',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | ComD-cours-comd-cours-comd-module */
        "ComD-cours-comd-cours-comd-module").then(__webpack_require__.bind(null,
        /*! ./ComD/cours-comd/cours-comd.module */
        "./src/app/ComD/cours-comd/cours-comd.module.ts")).then(function (m) {
          return m.CoursComdPageModule;
        });
      }
    }, {
      path: 'projets-comd',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | ComD-projets-comd-projets-comd-module */
        "ComD-projets-comd-projets-comd-module").then(__webpack_require__.bind(null,
        /*! ./ComD/projets-comd/projets-comd.module */
        "./src/app/ComD/projets-comd/projets-comd.module.ts")).then(function (m) {
          return m.ProjetsComdPageModule;
        });
      }
    }, {
      path: 'cours-dev',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | Dev-cours-dev-cours-dev-module */
        "Dev-cours-dev-cours-dev-module").then(__webpack_require__.bind(null,
        /*! ./Dev/cours-dev/cours-dev.module */
        "./src/app/Dev/cours-dev/cours-dev.module.ts")).then(function (m) {
          return m.CoursDevPageModule;
        });
      }
    }, {
      path: 'projets-dev',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | Dev-projets-dev-projets-dev-module */
        "Dev-projets-dev-projets-dev-module").then(__webpack_require__.bind(null,
        /*! ./Dev/projets-dev/projets-dev.module */
        "./src/app/Dev/projets-dev/projets-dev.module.ts")).then(function (m) {
          return m.ProjetsDevPageModule;
        });
      }
    }, {
      path: 'cours-jv',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | Jv-cours-jv-cours-jv-module */
        "Jv-cours-jv-cours-jv-module").then(__webpack_require__.bind(null,
        /*! ./Jv/cours-jv/cours-jv.module */
        "./src/app/Jv/cours-jv/cours-jv.module.ts")).then(function (m) {
          return m.CoursJvPageModule;
        });
      }
    }, {
      path: 'projets-jv',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | Jv-projets-jv-projets-jv-module */
        "Jv-projets-jv-projets-jv-module").then(__webpack_require__.bind(null,
        /*! ./Jv/projets-jv/projets-jv.module */
        "./src/app/Jv/projets-jv/projets-jv.module.ts")).then(function (m) {
          return m.ProjetsJvPageModule;
        });
      }
    }, {
      path: 'recherche',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | recherche-recherche-module */
        "recherche-recherche-module").then(__webpack_require__.bind(null,
        /*! ./recherche/recherche.module */
        "./src/app/recherche/recherche.module.ts")).then(function (m) {
          return m.RecherchePageModule;
        });
      }
    }, {
      path: 'ajout',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | ajout-ajout-module */
        "ajout-ajout-module").then(__webpack_require__.bind(null,
        /*! ./ajout/ajout.module */
        "./src/app/ajout/ajout.module.ts")).then(function (m) {
          return m.AjoutPageModule;
        });
      }
    }, {
      path: 'categories',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | categories-categories-module */
        [__webpack_require__.e("default~categorie-details-categorie-details-module~categories-categories-module"), __webpack_require__.e("categories-categories-module")]).then(__webpack_require__.bind(null,
        /*! ./categories/categories.module */
        "./src/app/categories/categories.module.ts")).then(function (m) {
          return m.CategoriesPageModule;
        });
      }
    }, {
      path: 'validation',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | validation-validation-module */
        "validation-validation-module").then(__webpack_require__.bind(null,
        /*! ./validation/validation.module */
        "./src/app/validation/validation.module.ts")).then(function (m) {
          return m.ValidationPageModule;
        });
      }
    }, {
      path: 'categorie-details',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | categorie-details-categorie-details-module */
        [__webpack_require__.e("default~categorie-details-categorie-details-module~categories-categories-module"), __webpack_require__.e("categorie-details-categorie-details-module")]).then(__webpack_require__.bind(null,
        /*! ./categorie-details/categorie-details.module */
        "./src/app/categorie-details/categorie-details.module.ts")).then(function (m) {
          return m.CategorieDetailsPageModule;
        });
      }
    }, {
      path: 'categorie-details/:id',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | categorie-details-categorie-details-module */
        [__webpack_require__.e("default~categorie-details-categorie-details-module~categories-categories-module"), __webpack_require__.e("categorie-details-categorie-details-module")]).then(__webpack_require__.bind(null,
        /*! ./categorie-details/categorie-details.module */
        "./src/app/categorie-details/categorie-details.module.ts")).then(function (m) {
          return m.CategorieDetailsPageModule;
        });
      }
    }, {
      path: 'ajout-form',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | ajout-form-ajout-form-module */
        "ajout-form-ajout-form-module").then(__webpack_require__.bind(null,
        /*! ./ajout-form/ajout-form.module */
        "./src/app/ajout-form/ajout-form.module.ts")).then(function (m) {
          return m.AjoutFormPageModule;
        });
      }
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
        preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
      })],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(platform, splashScreen, statusBar, router) {
        _classCallCheck(this, AppComponent);

        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.router = router;
        this.initializeApp();
      }

      _createClass(AppComponent, [{
        key: "initializeApp",
        value: function initializeApp() {
          var _this = this;

          this.platform.ready().then(function () {
            _this.statusBar.styleDefault();

            _this.splashScreen.hide();
          });
        }
      }, {
        key: "toAccueil",
        value: function toAccueil() {
          this.router.navigateByUrl('accueil').then(function (data) {
            console.log(data);
          });
        }
      }, {
        key: "toAjout",
        value: function toAjout() {
          this.router.navigateByUrl('ajout').then(function (data) {
            console.log(data);
          });
        }
      }, {
        key: "toProfil",
        value: function toProfil() {
          this.router.navigateByUrl('profil').then(function (data) {
            console.log(data);
          });
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"]
      }, {
        type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }];
    };

    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
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


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _angular_fire__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/fire */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire.js");
    /* harmony import */


    var _angular_fire_database__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/fire/database */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");
    /* harmony import */


    var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/fire/storage */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-storage.js");
    /* harmony import */


    var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @ionic-native/camera/ngx */
    "./node_modules/@ionic-native/camera/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js"); // pour se connecter à Firebase
    // pour manipuler la base de données Firebase
    // pour accéder aux fonction de stockage et de récupération des fichiers


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
      entryComponents: [],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_9__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_13__["environment"].firebase), _angular_fire_database__WEBPACK_IMPORTED_MODULE_10__["AngularFireDatabaseModule"], _angular_fire_storage__WEBPACK_IMPORTED_MODULE_11__["AngularFireStorageModule"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_14__["AngularFireAuthModule"]],
      providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_12__["Camera"], {
        provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
        useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"]
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      firebase: {
        apiKey: 'AIzaSyAjc5wznshsXyM6Hf25g2FAzOC0Xz7Ugeg',
        authDomain: 'learning-hub-66d1c.firebaseapp.com',
        databaseURL: 'https://learning-hub-66d1c.firebaseio.com',
        projectId: 'learning-hub-66d1c',
        storageBucket: 'learning-hub-66d1c.appspot.com',
        messagingSenderId: '72125789828',
        appId: '1:72125789828:web:8e2d4ef3b4ab15ee8134d1'
      }
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.log(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/kerenndongala/Documents/GitHub/App-LearningHub/App-LearningHub/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map