function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["connexion-connexion-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/connexion/connexion.page.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/connexion/connexion.page.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppConnexionConnexionPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar class=\"navbar\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/bienvenue\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Connexion</ion-title>\n    <ion-button *ngIf=\"connected\" fill=\"clear\" slot=\"end\" (click)=\"logout()\">Deconnexion</ion-button>\n\n\n  </ion-toolbar>\n</ion-header>\n<!--ion-header collapse=\"condense\">\n  <ion-toolbar>\n    <ion-title >Connexion</ion-title>\n    <ion-button *ngIf=\"connected\" fill=\"clear\" class=\"btn-connexion\" (click)=\"logout()\">Déconnexion</ion-button>\n\n\n  </ion-toolbar>\n\n</ion-header -->\n\n\n<ion-content >\n\n\n  <div *ngIf=\"!connected\">\n    <div class=\"champs-connexion\">\n      <div class=\"input-connexion\">\n        <p>Adresse mail</p>\n        <ion-input type=\"email\" class=\"access\" [(ngModel)]=\"dataUser.email\"></ion-input>\n      </div>\n\n      <div class=\"input-connexion\">\n        <p>Mot de passe</p>\n        <ion-input type=\"password\" class=\"access\" [(ngModel)]=\"dataUser.password\"></ion-input>\n      </div>\n\n      <div class=\"connexion\">\n        <ion-button class=\"btn-connexion\" (click)=\"login()\" routerLink=\"/accueil\" router-direction=\"foward\">connexion</ion-button>\n      </div>\n    </div>\n  </div>\n\n  <div *ngIf=\"connected\">\n    <h1>Vous êtes bien connecté</h1>\n    <ion-avatar style=\"width: 25%; height: 25%; margin: 10% 35%;\">\n      <img src=\"https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y\">\n    </ion-avatar>\n    <h2>{{email}}</h2>\n  </div>\n\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/connexion/connexion-routing.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/connexion/connexion-routing.module.ts ***!
    \*******************************************************/

  /*! exports provided: ConnexionPageRoutingModule */

  /***/
  function srcAppConnexionConnexionRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConnexionPageRoutingModule", function () {
      return ConnexionPageRoutingModule;
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


    var _connexion_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./connexion.page */
    "./src/app/connexion/connexion.page.ts");

    var routes = [{
      path: '',
      component: _connexion_page__WEBPACK_IMPORTED_MODULE_3__["ConnexionPage"]
    }];

    var ConnexionPageRoutingModule = function ConnexionPageRoutingModule() {
      _classCallCheck(this, ConnexionPageRoutingModule);
    };

    ConnexionPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ConnexionPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/connexion/connexion.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/connexion/connexion.module.ts ***!
    \***********************************************/

  /*! exports provided: ConnexionPageModule */

  /***/
  function srcAppConnexionConnexionModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConnexionPageModule", function () {
      return ConnexionPageModule;
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


    var _connexion_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./connexion-routing.module */
    "./src/app/connexion/connexion-routing.module.ts");
    /* harmony import */


    var _connexion_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./connexion.page */
    "./src/app/connexion/connexion.page.ts");

    var ConnexionPageModule = function ConnexionPageModule() {
      _classCallCheck(this, ConnexionPageModule);
    };

    ConnexionPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _connexion_routing_module__WEBPACK_IMPORTED_MODULE_5__["ConnexionPageRoutingModule"]],
      declarations: [_connexion_page__WEBPACK_IMPORTED_MODULE_6__["ConnexionPage"]]
    })], ConnexionPageModule);
    /***/
  },

  /***/
  "./src/app/connexion/connexion.page.scss":
  /*!***********************************************!*\
    !*** ./src/app/connexion/connexion.page.scss ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppConnexionConnexionPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".title-profil-connexion {\n  text-align: center;\n  margin-top: 40px;\n}\n\n.access {\n  border: 1px solid purple;\n  border-radius: 10px;\n  height: 35px;\n}\n\n.champs-connexion {\n  margin: 10%;\n  position: relative;\n  top: calc(100% - 80%);\n}\n\n.connexion {\n  text-align: center;\n}\n\n.btn-connexion {\n  margin-top: 70px;\n  width: 225px;\n  --border-radius: 30px;\n}\n\nion-title {\n  right: 13px;\n}\n\nion-back-button {\n  color: #4343E6;\n}\n\nion-icon {\n  color: #4343E6;\n}\n\nion-segment {\n  color: #4343E6;\n  margin-top: 15px;\n}\n\n.navbar {\n  padding-bottom: 10px;\n}\n\nion-grid {\n  margin-top: 3px;\n}\n\nion-row {\n  margin-bottom: 1px;\n}\n\nion-col {\n  margin-bottom: 5px;\n}\n\nion-card-title {\n  font-size: 17px;\n}\n\nion-card-subtitle {\n  font-size: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rZXJlbm5kb25nYWxhL0RvY3VtZW50cy9HaXRIdWIvQXBwLUxlYXJuaW5nSHViL0FwcC1MZWFybmluZ0h1Yi9zcmMvYXBwL2Nvbm5leGlvbi9jb25uZXhpb24ucGFnZS5zY3NzIiwic3JjL2FwcC9jb25uZXhpb24vY29ubmV4aW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFQTtFQUNJLHdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7QUNDSjs7QURFQTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0FDQ0o7O0FER0E7RUFDSSxXQUFBO0FDQUo7O0FERUE7RUFDSSxjQUFBO0FDQ0o7O0FEQ0E7RUFDSSxjQUFBO0FDRUo7O0FEQ0E7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7QUNFSjs7QURBQTtFQUNJLG9CQUFBO0FDR0o7O0FEREE7RUFDSSxlQUFBO0FDSUo7O0FERkE7RUFDSSxrQkFBQTtBQ0tKOztBREhBO0VBQ0ksa0JBQUE7QUNNSjs7QURKQTtFQUNJLGVBQUE7QUNPSjs7QURMQTtFQUNJLGVBQUE7QUNRSiIsImZpbGUiOiJzcmMvYXBwL2Nvbm5leGlvbi9jb25uZXhpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdGxlLXByb2ZpbC1jb25uZXhpb24ge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xufVxuXG4uYWNjZXNzIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBwdXJwbGU7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBoZWlnaHQ6IDM1cHg7XG59XG5cbi5jaGFtcHMtY29ubmV4aW9uIHtcbiAgICBtYXJnaW46IDEwJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiBjYWxjKDEwMCUgLSA4MCUpO1xufVxuXG4uY29ubmV4aW9uIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5idG4tY29ubmV4aW9uIHtcbiAgICBtYXJnaW4tdG9wOiA3MHB4O1xuICAgIHdpZHRoOiAyMjVweDtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDMwcHg7XG59XG5cblxuaW9uLXRpdGxle1xuICAgIHJpZ2h0OiAxM3B4O1xufVxuaW9uLWJhY2stYnV0dG9ue1xuICAgIGNvbG9yOiAjNDM0M0U2O1xufVxuaW9uLWljb257XG4gICAgY29sb3I6ICM0MzQzRTY7XG59XG5cbmlvbi1zZWdtZW50e1xuICAgIGNvbG9yOiAjNDM0M0U2O1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG59XG4ubmF2YmFye1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuaW9uLWdyaWR7XG4gICAgbWFyZ2luLXRvcDogM3B4O1xufVxuaW9uLXJvd3tcbiAgICBtYXJnaW4tYm90dG9tOiAxcHg7XG59XG5pb24tY29se1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbn1cbmlvbi1jYXJkLXRpdGxle1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbn1cbmlvbi1jYXJkLXN1YnRpdGxle1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbn1cblxuIiwiLnRpdGxlLXByb2ZpbC1jb25uZXhpb24ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG59XG5cbi5hY2Nlc3Mge1xuICBib3JkZXI6IDFweCBzb2xpZCBwdXJwbGU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGhlaWdodDogMzVweDtcbn1cblxuLmNoYW1wcy1jb25uZXhpb24ge1xuICBtYXJnaW46IDEwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IGNhbGMoMTAwJSAtIDgwJSk7XG59XG5cbi5jb25uZXhpb24ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5idG4tY29ubmV4aW9uIHtcbiAgbWFyZ2luLXRvcDogNzBweDtcbiAgd2lkdGg6IDIyNXB4O1xuICAtLWJvcmRlci1yYWRpdXM6IDMwcHg7XG59XG5cbmlvbi10aXRsZSB7XG4gIHJpZ2h0OiAxM3B4O1xufVxuXG5pb24tYmFjay1idXR0b24ge1xuICBjb2xvcjogIzQzNDNFNjtcbn1cblxuaW9uLWljb24ge1xuICBjb2xvcjogIzQzNDNFNjtcbn1cblxuaW9uLXNlZ21lbnQge1xuICBjb2xvcjogIzQzNDNFNjtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cblxuLm5hdmJhciB7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuXG5pb24tZ3JpZCB7XG4gIG1hcmdpbi10b3A6IDNweDtcbn1cblxuaW9uLXJvdyB7XG4gIG1hcmdpbi1ib3R0b206IDFweDtcbn1cblxuaW9uLWNvbCB7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuaW9uLWNhcmQtdGl0bGUge1xuICBmb250LXNpemU6IDE3cHg7XG59XG5cbmlvbi1jYXJkLXN1YnRpdGxlIHtcbiAgZm9udC1zaXplOiAxMHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/connexion/connexion.page.ts":
  /*!*********************************************!*\
    !*** ./src/app/connexion/connexion.page.ts ***!
    \*********************************************/

  /*! exports provided: ConnexionPage */

  /***/
  function srcAppConnexionConnexionPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConnexionPage", function () {
      return ConnexionPage;
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


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var ConnexionPage = /*#__PURE__*/function () {
      function ConnexionPage(afAuth, loadingController, alertController) {
        var _this = this;

        _classCallCheck(this, ConnexionPage);

        this.afAuth = afAuth;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.dataUser = {
          email: '',
          password: ''
        };
        this.email = '';
        this.userId = '';
        this.method = '';
        this.afAuth.authState.subscribe(function (auth) {
          if (!auth) {
            console.log('non connecté');
            _this.connected = false;
          } else {
            console.log('connecté: ' + auth.uid);
            _this.userId = auth.uid;
            _this.email = auth.email;
            _this.method = auth.providerData[0].providerId;
            _this.connected = true;
          }
        });
      }

      _createClass(ConnexionPage, [{
        key: "login",
        value: function login() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var loading, alert;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.loadingController.create();

                  case 2:
                    loading = _context.sent;
                    _context.next = 5;
                    return loading.present();

                  case 5:
                    this.afAuth.signInWithEmailAndPassword(this.dataUser.email, this.dataUser.password);
                    this.dataUser = {
                      email: '',
                      password: ''
                    };
                    _context.next = 9;
                    return loading.dismiss();

                  case 9:
                    _context.next = 11;
                    return this.alertController.create({
                      header: 'Félicitation',
                      message: 'Vous êtes bien connecté',
                      buttons: ['OK']
                    });

                  case 11:
                    alert = _context.sent;
                    _context.next = 14;
                    return alert.present();

                  case 14:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "logout",
        value: function logout() {
          this.afAuth.signOut();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ConnexionPage;
    }();

    ConnexionPage.ctorParameters = function () {
      return [{
        type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
      }];
    };

    ConnexionPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-connexion',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./connexion.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/connexion/connexion.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./connexion.page.scss */
      "./src/app/connexion/connexion.page.scss"))["default"]]
    })], ConnexionPage);
    /***/
  }
}]);
//# sourceMappingURL=connexion-connexion-module-es5.js.map