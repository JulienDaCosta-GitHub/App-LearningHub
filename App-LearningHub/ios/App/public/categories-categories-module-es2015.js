(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["categories-categories-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/categories/categories.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/categories/categories.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <!--ion-title>categories</ion-title-->\n    <ion-grid class=\"d-flex ml-3\" >\n      <ion-icon style=\"width: 22px;height: 22px;\" name=\"close-outline\"></ion-icon>\n      <ion-label class=\"ml-3\">Choisissez une catégorie</ion-label>\n    </ion-grid>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <!--ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-icon name=\"close-outline\"></ion-icon>\n      </ion-col>\n\n      <ion-col>\n        <h4 class=\"h3_categories\">Graphic Design</h4>\n      </ion-col>\n    </ion-row>\n\n  </ion-grid-->\n  <!--ion-toolbar class=\"mt-4\">\n\n      <p value=\"all\" (click)=\"desactiveNew()\">\n        Projets\n      </p>\n      <p value=\"favorites\" (click)=\"activeNew()\">\n        Cours\n      </p>\n\n  </ion-toolbar-->\n  <ng-container *ngIf=\"!categories || categories.length == 0\">\n    <div *ngFor=\"let n of [0,1,2]\" padding>\n      <ion-skeleton-text></ion-skeleton-text>\n      <p>\n        <ion-skeleton-text class=\"fake-skeleton\"></ion-skeleton-text>\n      </p>\n    </div>\n\n  </ng-container>\n\n\n\n  <ion-grid class=\"mt-5\" ><!--*ngIf=\"actual\"-->\n    <!-- Sliding item with text options on both sides -->\n    <ion-item-sliding *ngFor=\"let item of categories\">\n      <ion-item>\n        <ion-grid class=\"d-flex\">\n          <ion-card class=\"card\" style=\"width: 8rem; height: 8rem;\">\n            <img style=\"width: 100%;height: 100%;\" class=\"card-img-top\"  [src]=\"item.imgUrl\" alt=\"ion\">\n          </ion-card>\n          <h3 class=\"h3_categories\">{{item.title}}</h3>\n        </ion-grid>\n      </ion-item>\n\n      <ion-item-options side=\"end\">\n        <ion-item-option color=\"danger\" (click)=\"remove(item)\">Supprimer</ion-item-option>\n      </ion-item-options>\n    </ion-item-sliding>\n\n\n\n\n    <ion-grid class=\"d-flex ml-3\" routerLink=\"/categorie-details\" routerDirection=\"forward\">\n      <ion-card class=\"card\" style=\"width: 8rem; height: 8rem;\" ><!-- (click)=\"activeNew()\" -->\n        <ion-toolbar >\n          <ion-icon style=\"width: 50%;height: 40px;margin: 35% 25%;\" name=\"add-circle-outline\"></ion-icon>\n        </ion-toolbar>\n        <!--img style=\"width: 100%;height: 100%;\" class=\"card-img-top\"  src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAAA1BMVEX///+nxBvIAAAASElEQVR4nO3BMQEAAADCoPVPbQwfoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIC3AcUIAAFkqh/QAAAAAElFTkSuQmCC\" alt=\"ion\"-->\n      </ion-card>\n      <h3 class=\"h3_categories\">Nouvelle catégorie</h3>\n\n\n    </ion-grid>\n\n\n  </ion-grid>\n\n\n  <!-- Formulaire nouvelle catégorie\n  <ion-grid class=\"mt-5\" *ngIf=\"new\">\n    <ion-title class=\"mt-3 align-self-center\"><h1>Créer une catégorie</h1></ion-title>\n    <ion-grid class=\"mt-5\">\n      <ion-grid class=\" ml-3 mt-4 d-flex flex-column\">\n        <ion-label style=\"font-size: 20px;\">Attribuez un nom à votre catégorie</ion-label>\n        <ion-item style=\"width: 80%;\">\n          <ion-input required type=\"text\" placeholder=\"Nom de la catégorie\" style=\"font-size: 16px;\" [(ngModel)]=\"categorie\"></ion-input>\n        </ion-item>\n      </ion-grid>\n\n      <ion-grid class=\" ml-3 mt-4 d-flex flex-column\">\n        <ion-label style=\"font-size: 20px;\">Pas d'inspiration ? Essayez un de ces noms :</ion-label>\n        <ion-grid class=\"d-flex mt-3\">\n          <ion-chip color=\"tertiary\">\n            <ion-label color=\"dark\">Web</ion-label>\n          </ion-chip>\n\n          <ion-chip color=\"tertiary\">\n            <ion-label color=\"dark\">Tutos</ion-label>\n          </ion-chip>\n\n          <ion-chip color=\"tertiary\">\n            <ion-label color=\"dark\">Trends</ion-label>\n          </ion-chip>\n\n          <ion-chip color=\"tertiary\">\n            <ion-label color=\"dark\">Trends</ion-label>\n          </ion-chip>\n\n          <ion-chip color=\"tertiary\">\n            <ion-label color=\"dark\">Trends</ion-label>\n          </ion-chip>\n        </ion-grid>\n\n      </ion-grid>\n\n\n\n    </ion-grid>\n\n    <ion-button class=\"\" size=\"large\" expand=\"block\" color=\"tertiary\" style=\"margin: 12% 36%;\">Créer</ion-button>\n  </ion-grid -->\n\n\n</ion-content>\n\n\n\n\n\n");

/***/ }),

/***/ "./src/app/categories/categories-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/categories/categories-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: CategoriesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesPageRoutingModule", function() { return CategoriesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _categories_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./categories.page */ "./src/app/categories/categories.page.ts");




const routes = [
    {
        path: '',
        component: _categories_page__WEBPACK_IMPORTED_MODULE_3__["CategoriesPage"]
    }
];
let CategoriesPageRoutingModule = class CategoriesPageRoutingModule {
};
CategoriesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CategoriesPageRoutingModule);



/***/ }),

/***/ "./src/app/categories/categories.module.ts":
/*!*************************************************!*\
  !*** ./src/app/categories/categories.module.ts ***!
  \*************************************************/
/*! exports provided: CategoriesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesPageModule", function() { return CategoriesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _categories_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./categories-routing.module */ "./src/app/categories/categories-routing.module.ts");
/* harmony import */ var _categories_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./categories.page */ "./src/app/categories/categories.page.ts");







let CategoriesPageModule = class CategoriesPageModule {
};
CategoriesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _categories_routing_module__WEBPACK_IMPORTED_MODULE_5__["CategoriesPageRoutingModule"]
        ],
        declarations: [_categories_page__WEBPACK_IMPORTED_MODULE_6__["CategoriesPage"]]
    })
], CategoriesPageModule);



/***/ }),

/***/ "./src/app/categories/categories.page.scss":
/*!*************************************************!*\
  !*** ./src/app/categories/categories.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".h3_categories {\n  margin-top: 18%;\n}\n\n.fake-skeleton {\n  width: 60%;\n}\n\nion-icon {\n  color: #4343E6;\n}\n\nion-segment {\n  color: #4343E6;\n  margin-top: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rZXJlbm5kb25nYWxhL0RvY3VtZW50cy9HaXRIdWIvQXBwLUxlYXJuaW5nSHViL0FwcC1MZWFybmluZ0h1Yi9zcmMvYXBwL2NhdGVnb3JpZXMvY2F0ZWdvcmllcy5wYWdlLnNjc3MiLCJzcmMvYXBwL2NhdGVnb3JpZXMvY2F0ZWdvcmllcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSxVQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2NhdGVnb3JpZXMvY2F0ZWdvcmllcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaDNfY2F0ZWdvcmllc3tcbiAgbWFyZ2luLXRvcDogMTglO1xufVxuXG4uZmFrZS1za2VsZXRvbntcbiAgd2lkdGg6IDYwJTtcbn1cblxuaW9uLWljb257XG4gIGNvbG9yOiAjNDM0M0U2O1xufVxuXG5pb24tc2VnbWVudCB7XG4gIGNvbG9yOiAjNDM0M0U2O1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuIiwiLmgzX2NhdGVnb3JpZXMge1xuICBtYXJnaW4tdG9wOiAxOCU7XG59XG5cbi5mYWtlLXNrZWxldG9uIHtcbiAgd2lkdGg6IDYwJTtcbn1cblxuaW9uLWljb24ge1xuICBjb2xvcjogIzQzNDNFNjtcbn1cblxuaW9uLXNlZ21lbnQge1xuICBjb2xvcjogIzQzNDNFNjtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/categories/categories.page.ts":
/*!***********************************************!*\
  !*** ./src/app/categories/categories.page.ts ***!
  \***********************************************/
/*! exports provided: CategoriesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesPage", function() { return CategoriesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_categorie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/categorie.service */ "./src/app/services/categorie.service.ts");


/*import { CategoriesModel } from './categories.model' ;*/

let CategoriesPage = class CategoriesPage {
    constructor(categorieService) {
        this.categorieService = categorieService;
    }
    ngOnInit() {
        this.categorieService.getCategories().subscribe(res => {
            this.categories = res;
        });
    }
    remove(item) {
        this.categorieService.removeCategorie(item.id);
    }
};
CategoriesPage.ctorParameters = () => [
    { type: _services_categorie_service__WEBPACK_IMPORTED_MODULE_2__["CategorieService"] }
];
CategoriesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-categories',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./categories.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/categories/categories.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./categories.page.scss */ "./src/app/categories/categories.page.scss")).default]
    })
], CategoriesPage);



/***/ })

}]);
//# sourceMappingURL=categories-categories-module-es2015.js.map