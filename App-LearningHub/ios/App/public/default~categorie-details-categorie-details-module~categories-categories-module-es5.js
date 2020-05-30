function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~categorie-details-categorie-details-module~categories-categories-module"], {
  /***/
  "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js":
  /*!************************************************************************************!*\
    !*** ./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js ***!
    \************************************************************************************/

  /*! exports provided: AngularFirestore, AngularFirestoreCollection, AngularFirestoreCollectionGroup, AngularFirestoreDocument, AngularFirestoreModule, ENABLE_PERSISTENCE, PERSISTENCE_SETTINGS, SETTINGS, associateQuery, combineChange, combineChanges, docChanges, fromCollectionRef, fromDocRef, fromRef, sortedChanges, validateEventsArray */

  /***/
  function node_modulesAngularFire__ivy_ngcc__Fesm2015AngularFireFirestoreJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AngularFirestore", function () {
      return AngularFirestore;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AngularFirestoreCollection", function () {
      return AngularFirestoreCollection;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AngularFirestoreCollectionGroup", function () {
      return AngularFirestoreCollectionGroup;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AngularFirestoreDocument", function () {
      return AngularFirestoreDocument;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AngularFirestoreModule", function () {
      return AngularFirestoreModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ENABLE_PERSISTENCE", function () {
      return ENABLE_PERSISTENCE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PERSISTENCE_SETTINGS", function () {
      return PERSISTENCE_SETTINGS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SETTINGS", function () {
      return SETTINGS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "associateQuery", function () {
      return associateQuery;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "combineChange", function () {
      return combineChange;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "combineChanges", function () {
      return combineChanges;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "docChanges", function () {
      return docChanges;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "fromCollectionRef", function () {
      return fromCollectionRef;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "fromDocRef", function () {
      return fromDocRef;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "fromRef", function () {
      return fromRef;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "sortedChanges", function () {
      return sortedChanges;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "validateEventsArray", function () {
      return validateEventsArray;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_fire__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/fire */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _firebase_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @firebase/app */
    "./node_modules/@firebase/app/dist/index.cjs.js");
    /* harmony import */


    var _firebase_app__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_firebase_app__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var _firebase_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @firebase/firestore */
    "./node_modules/@firebase/firestore/dist/index.cjs.js");
    /* harmony import */


    var _firebase_firestore__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_firebase_firestore__WEBPACK_IMPORTED_MODULE_6__);
    /* harmony import */


    var firebase_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! firebase/firestore */
    "./node_modules/firebase/firestore/dist/index.esm.js");
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @template T, R
     * @param {?} ref
     * @param {?=} scheduler
     * @return {?}
     */


    function _fromRef(ref) {
      var scheduler = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : rxjs__WEBPACK_IMPORTED_MODULE_1__["asyncScheduler"];
      return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](
      /**
      * @param {?} subscriber
      * @return {?}
      */
      function (subscriber) {
        /** @type {?} */
        var unsubscribe;

        if (scheduler != null) {
          scheduler.schedule(
          /**
          * @return {?}
          */
          function () {
            unsubscribe = ref.onSnapshot(subscriber);
          });
        } else {
          unsubscribe = ref.onSnapshot(subscriber);
        }

        return (
          /**
          * @return {?}
          */
          function () {
            if (unsubscribe != null) {
              unsubscribe();
            }
          }
        );
      });
    }
    /**
     * @template R
     * @param {?} ref
     * @param {?=} scheduler
     * @return {?}
     */


    function fromRef(ref, scheduler) {
      return _fromRef(ref, scheduler);
    }
    /**
     * @template T
     * @param {?} ref
     * @param {?=} scheduler
     * @return {?}
     */


    function fromDocRef(ref, scheduler) {
      return fromRef(ref, scheduler).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(
      /**
      * @param {?} payload
      * @return {?}
      */
      function (payload) {
        return {
          payload: payload,
          type: 'value'
        };
      }));
    }
    /**
     * @template T
     * @param {?} ref
     * @param {?=} scheduler
     * @return {?}
     */


    function fromCollectionRef(ref, scheduler) {
      return fromRef(ref, scheduler).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(
      /**
      * @param {?} payload
      * @return {?}
      */
      function (payload) {
        return {
          payload: payload,
          type: 'query'
        };
      }));
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Return a stream of document changes on a query. These results are not in sort order but in
     * order of occurence.
     * @template T
     * @param {?} query
     * @param {?=} scheduler
     * @return {?}
     */


    function docChanges(query, scheduler) {
      return fromCollectionRef(query, scheduler).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(
      /**
      * @param {?} action
      * @return {?}
      */
      function (action) {
        return action.payload.docChanges().map(
        /**
        * @param {?} change
        * @return {?}
        */
        function (change) {
          return (
            /** @type {?} */
            {
              type: change.type,
              payload: change
            }
          );
        });
      }));
    }
    /**
     * Return a stream of document changes on a query. These results are in sort order.
     * @template T
     * @param {?} query
     * @param {?} events
     * @param {?=} scheduler
     * @return {?}
     */


    function sortedChanges(query, events, scheduler) {
      return fromCollectionRef(query, scheduler).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(
      /**
      * @param {?} changes
      * @return {?}
      */
      function (changes) {
        return changes.payload.docChanges();
      }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["scan"])(
      /**
      * @param {?} current
      * @param {?} changes
      * @return {?}
      */
      function (current, changes) {
        return combineChanges(current, changes, events);
      }, []), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(
      /**
      * @param {?} changes
      * @return {?}
      */
      function (changes) {
        return changes.map(
        /**
        * @param {?} c
        * @return {?}
        */
        function (c) {
          return (
            /** @type {?} */
            {
              type: c.type,
              payload: c
            }
          );
        });
      }));
    }
    /**
     * Combines the total result set from the current set of changes from an incoming set
     * of changes.
     * @template T
     * @param {?} current
     * @param {?} changes
     * @param {?} events
     * @return {?}
     */


    function combineChanges(current, changes, events) {
      changes.forEach(
      /**
      * @param {?} change
      * @return {?}
      */
      function (change) {
        // skip unwanted change types
        if (events.indexOf(change.type) > -1) {
          current = combineChange(current, change);
        }
      });
      return current;
    }
    /**
     * Creates a new sorted array from a new change.
     * @template T
     * @param {?} combined
     * @param {?} change
     * @return {?}
     */


    function combineChange(combined, change) {
      switch (change.type) {
        case 'added':
          if (combined[change.newIndex] && combined[change.newIndex].doc.ref.isEqual(change.doc.ref)) {// Not sure why the duplicates are getting fired
          } else {
            combined.splice(change.newIndex, 0, change);
          }

          break;

        case 'modified':
          if (combined[change.oldIndex] == null || combined[change.oldIndex].doc.ref.isEqual(change.doc.ref)) {
            // When an item changes position we first remove it
            // and then add it's new position
            if (change.oldIndex !== change.newIndex) {
              combined.splice(change.oldIndex, 1);
              combined.splice(change.newIndex, 0, change);
            } else {
              combined.splice(change.newIndex, 1, change);
            }
          }

          break;

        case 'removed':
          if (combined[change.oldIndex] && combined[change.oldIndex].doc.ref.isEqual(change.doc.ref)) {
            combined.splice(change.oldIndex, 1);
          }

          break;
      }

      return combined;
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @param {?=} events
     * @return {?}
     */


    function validateEventsArray(events) {
      if (!events ||
      /** @type {?} */
      events.length === 0) {
        events = ['added', 'removed', 'modified'];
      }

      return events;
    }
    /**
     * AngularFirestoreCollection service
     *
     * This class creates a reference to a Firestore Collection. A reference and a query are provided in
     * in the constructor. The query can be the unqueried reference if no query is desired.The class
     * is generic which gives you type safety for data update methods and data streaming.
     *
     * This class uses Symbol.observable to transform into Observable using Observable.from().
     *
     * This class is rarely used directly and should be created from the AngularFirestore service.
     *
     * Example:
     *
     * const collectionRef = firebase.firestore.collection('stocks');
     * const query = collectionRef.where('price', '>', '0.01');
     * const fakeStock = new AngularFirestoreCollection<Stock>(collectionRef, query);
     *
     * // NOTE!: the updates are performed on the reference not the query
     * await fakeStock.add({ name: 'FAKE', price: 0.01 });
     *
     * // Subscribe to changes as snapshots. This provides you data updates as well as delta updates.
     * fakeStock.valueChanges().subscribe(value => console.log(value));
     * @template T
     */


    var AngularFirestoreCollection = /*#__PURE__*/function () {
      /**
       * The constructor takes in a CollectionReference and Query to provide wrapper methods
       * for data operations and data streaming.
       *
       * Note: Data operation methods are done on the reference not the query. This means
       * when you update data it is not updating data to the window of your query unless
       * the data fits the criteria of the query. See the AssociatedRefence type for details
       * on this implication.
       * @param {?} ref
       * @param {?} query
       * @param {?} afs
       */
      function AngularFirestoreCollection(ref, query, afs) {
        _classCallCheck(this, AngularFirestoreCollection);

        this.ref = ref;
        this.query = query;
        this.afs = afs;
      }
      /**
       * Listen to the latest change in the stream. This method returns changes
       * as they occur and they are not sorted by query order. This allows you to construct
       * your own data structure.
       * @param {?=} events
       * @return {?}
       */


      _createClass(AngularFirestoreCollection, [{
        key: "stateChanges",
        value: function stateChanges(events) {
          if (!events || events.length === 0) {
            return docChanges(this.query, this.afs.schedulers.outsideAngular).pipe(this.afs.keepUnstableUntilFirst);
          }

          return docChanges(this.query, this.afs.schedulers.outsideAngular).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(
          /**
          * @param {?} actions
          * @return {?}
          */
          function (actions) {
            return actions.filter(
            /**
            * @param {?} change
            * @return {?}
            */
            function (change) {
              return events.indexOf(change.type) > -1;
            });
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(
          /**
          * @param {?} changes
          * @return {?}
          */
          function (changes) {
            return changes.length > 0;
          }), this.afs.keepUnstableUntilFirst);
        }
        /**
         * Create a stream of changes as they occur it time. This method is similar to stateChanges()
         * but it collects each event in an array over time.
         * @param {?=} events
         * @return {?}
         */

      }, {
        key: "auditTrail",
        value: function auditTrail(events) {
          return this.stateChanges(events).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["scan"])(
          /**
          * @param {?} current
          * @param {?} action
          * @return {?}
          */
          function (current, action) {
            return [].concat(_toConsumableArray(current), _toConsumableArray(action));
          }, []));
        }
        /**
         * Create a stream of synchronized changes. This method keeps the local array in sorted
         * query order.
         * @param {?=} events
         * @return {?}
         */

      }, {
        key: "snapshotChanges",
        value: function snapshotChanges(events) {
          /** @type {?} */
          var validatedEvents = validateEventsArray(events);
          /** @type {?} */

          var scheduledSortedChanges$ = sortedChanges(this.query, validatedEvents, this.afs.schedulers.outsideAngular);
          return scheduledSortedChanges$.pipe(this.afs.keepUnstableUntilFirst);
        }
        /**
         * @template K
         * @param {?=} options
         * @return {?}
         */

      }, {
        key: "valueChanges",
        value: function valueChanges() {
          var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          return fromCollectionRef(this.query, this.afs.schedulers.outsideAngular).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(
          /**
          * @param {?} actions
          * @return {?}
          */
          function (actions) {
            return actions.payload.docs.map(
            /**
            * @param {?} a
            * @return {?}
            */
            function (a) {
              if (options.idField) {
                return (
                  /** @type {?} */
                  Object.assign(Object.assign({},
                  /** @type {?} */
                  a.data()), _defineProperty({}, options.idField, a.id))
                );
              } else {
                return a.data();
              }
            });
          }), this.afs.keepUnstableUntilFirst);
        }
        /**
         * Retrieve the results of the query once.
         * @param {?=} options
         * @return {?}
         */

      }, {
        key: "get",
        value: function get(options) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(this.query.get(options)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["observeOn"])(this.afs.schedulers.insideAngular));
        }
        /**
         * Add data to a collection reference.
         *
         * Note: Data operation methods are done on the reference not the query. This means
         * when you update data it is not updating data to the window of your query unless
         * the data fits the criteria of the query.
         * @param {?} data
         * @return {?}
         */

      }, {
        key: "add",
        value: function add(data) {
          return this.ref.add(data);
        }
        /**
         * Create a reference to a single document in a collection.
         * @template T
         * @param {?=} path
         * @return {?}
         */

      }, {
        key: "doc",
        value: function doc(path) {
          return new AngularFirestoreDocument(this.ref.doc(path), this.afs);
        }
      }]);

      return AngularFirestoreCollection;
    }();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * AngularFirestoreDocument service
     *
     * This class creates a reference to a Firestore Document. A reference is provided in
     * in the constructor. The class is generic which gives you type safety for data update
     * methods and data streaming.
     *
     * This class uses Symbol.observable to transform into Observable using Observable.from().
     *
     * This class is rarely used directly and should be created from the AngularFirestore service.
     *
     * Example:
     *
     * const fakeStock = new AngularFirestoreDocument<Stock>(doc('stocks/FAKE'));
     * await fakeStock.set({ name: 'FAKE', price: 0.01 });
     * fakeStock.valueChanges().map(snap => {
     *   if(snap.exists) return snap.data();
     *   return null;
     * }).subscribe(value => console.log(value));
     * // OR! Transform using Observable.from() and the data is unwrapped for you
     * Observable.from(fakeStock).subscribe(value => console.log(value));
     * @template T
     */


    var AngularFirestoreDocument = /*#__PURE__*/function () {
      /**
       * The contstuctor takes in a DocumentReference to provide wrapper methods
       * for data operations, data streaming, and Symbol.observable.
       * @param {?} ref
       * @param {?} afs
       */
      function AngularFirestoreDocument(ref, afs) {
        _classCallCheck(this, AngularFirestoreDocument);

        this.ref = ref;
        this.afs = afs;
      }
      /**
       * Create or overwrite a single document.
       * @param {?} data
       * @param {?=} options
       * @return {?}
       */


      _createClass(AngularFirestoreDocument, [{
        key: "set",
        value: function set(data, options) {
          return this.ref.set(data, options);
        }
        /**
         * Update some fields of a document without overwriting the entire document.
         * @param {?} data
         * @return {?}
         */

      }, {
        key: "update",
        value: function update(data) {
          return this.ref.update(data);
        }
        /**
         * Delete a document.
         * @return {?}
         */

      }, {
        key: "delete",
        value: function _delete() {
          return this.ref["delete"]();
        }
        /**
         * Create a reference to a sub-collection given a path and an optional query
         * function.
         * @template R
         * @param {?} path
         * @param {?=} queryFn
         * @return {?}
         */

      }, {
        key: "collection",
        value: function collection(path, queryFn) {
          /** @type {?} */
          var collectionRef = this.ref.collection(path);

          var _associateQuery = associateQuery(collectionRef, queryFn),
              ref = _associateQuery.ref,
              query = _associateQuery.query;

          return new AngularFirestoreCollection(ref, query, this.afs);
        }
        /**
         * Listen to snapshot updates from the document.
         * @return {?}
         */

      }, {
        key: "snapshotChanges",
        value: function snapshotChanges() {
          /** @type {?} */
          var scheduledFromDocRef$ = fromDocRef(this.ref, this.afs.schedulers.outsideAngular);
          return scheduledFromDocRef$.pipe(this.afs.keepUnstableUntilFirst);
        }
        /**
         * Listen to unwrapped snapshot updates from the document.
         * @return {?}
         */

      }, {
        key: "valueChanges",
        value: function valueChanges() {
          return this.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(
          /**
          * @param {?} action
          * @return {?}
          */
          function (action) {
            return action.payload.data();
          }));
        }
        /**
         * Retrieve the document once.
         * @param {?=} options
         * @return {?}
         */

      }, {
        key: "get",
        value: function get(options) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(this.ref.get(options)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["observeOn"])(this.afs.schedulers.insideAngular));
        }
      }]);

      return AngularFirestoreDocument;
    }();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * AngularFirestoreCollectionGroup service
     *
     * This class holds a reference to a Firestore Collection Group Query.
     *
     * This class uses Symbol.observable to transform into Observable using Observable.from().
     *
     * This class is rarely used directly and should be created from the AngularFirestore service.
     *
     * Example:
     *
     * const collectionGroup = firebase.firestore.collectionGroup('stocks');
     * const query = collectionRef.where('price', '>', '0.01');
     * const fakeStock = new AngularFirestoreCollectionGroup<Stock>(query, afs);
     *
     * // Subscribe to changes as snapshots. This provides you data updates as well as delta updates.
     * fakeStock.valueChanges().subscribe(value => console.log(value));
     * @template T
     */


    var AngularFirestoreCollectionGroup = /*#__PURE__*/function () {
      /**
       * The constructor takes in a CollectionGroupQuery to provide wrapper methods
       * for data operations and data streaming.
       * @param {?} query
       * @param {?} afs
       */
      function AngularFirestoreCollectionGroup(query, afs) {
        _classCallCheck(this, AngularFirestoreCollectionGroup);

        this.query = query;
        this.afs = afs;
      }
      /**
       * Listen to the latest change in the stream. This method returns changes
       * as they occur and they are not sorted by query order. This allows you to construct
       * your own data structure.
       * @param {?=} events
       * @return {?}
       */


      _createClass(AngularFirestoreCollectionGroup, [{
        key: "stateChanges",
        value: function stateChanges(events) {
          if (!events || events.length === 0) {
            return docChanges(this.query, this.afs.schedulers.outsideAngular).pipe(this.afs.keepUnstableUntilFirst);
          }

          return docChanges(this.query, this.afs.schedulers.outsideAngular).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(
          /**
          * @param {?} actions
          * @return {?}
          */
          function (actions) {
            return actions.filter(
            /**
            * @param {?} change
            * @return {?}
            */
            function (change) {
              return events.indexOf(change.type) > -1;
            });
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(
          /**
          * @param {?} changes
          * @return {?}
          */
          function (changes) {
            return changes.length > 0;
          }), this.afs.keepUnstableUntilFirst);
        }
        /**
         * Create a stream of changes as they occur it time. This method is similar to stateChanges()
         * but it collects each event in an array over time.
         * @param {?=} events
         * @return {?}
         */

      }, {
        key: "auditTrail",
        value: function auditTrail(events) {
          return this.stateChanges(events).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["scan"])(
          /**
          * @param {?} current
          * @param {?} action
          * @return {?}
          */
          function (current, action) {
            return [].concat(_toConsumableArray(current), _toConsumableArray(action));
          }, []));
        }
        /**
         * Create a stream of synchronized changes. This method keeps the local array in sorted
         * query order.
         * @param {?=} events
         * @return {?}
         */

      }, {
        key: "snapshotChanges",
        value: function snapshotChanges(events) {
          /** @type {?} */
          var validatedEvents = validateEventsArray(events);
          /** @type {?} */

          var scheduledSortedChanges$ = sortedChanges(this.query, validatedEvents, this.afs.schedulers.outsideAngular);
          return scheduledSortedChanges$.pipe(this.afs.keepUnstableUntilFirst);
        }
        /**
         * Listen to all documents in the collection and its possible query as an Observable.
         * @return {?}
         */

      }, {
        key: "valueChanges",
        value: function valueChanges() {
          /** @type {?} */
          var fromCollectionRefScheduled$ = fromCollectionRef(this.query, this.afs.schedulers.outsideAngular);
          return fromCollectionRefScheduled$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(
          /**
          * @param {?} actions
          * @return {?}
          */
          function (actions) {
            return actions.payload.docs.map(
            /**
            * @param {?} a
            * @return {?}
            */
            function (a) {
              return a.data();
            });
          }), this.afs.keepUnstableUntilFirst);
        }
        /**
         * Retrieve the results of the query once.
         * @param {?=} options
         * @return {?}
         */

      }, {
        key: "get",
        value: function get(options) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(this.query.get(options)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["observeOn"])(this.afs.schedulers.insideAngular));
        }
      }]);

      return AngularFirestoreCollectionGroup;
    }();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * The value of this token determines whether or not the firestore will have persistance enabled
     * @type {?}
     */


    var ENABLE_PERSISTENCE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('angularfire2.enableFirestorePersistence');
    /** @type {?} */

    var PERSISTENCE_SETTINGS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('angularfire2.firestore.persistenceSettings');
    /** @type {?} */

    var SETTINGS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('angularfire2.firestore.settings');
    /**
     * A utility methods for associating a collection reference with
     * a query.
     *
     * @param {?} collectionRef - A collection reference to query
     * @param {?=} queryFn - The callback to create a query
     *
     * Example:
     * const { query, ref } = associateQuery(docRef.collection('items'), ref => {
     *  return ref.where('age', '<', 200);
     * });
     * @return {?}
     */

    function associateQuery(collectionRef) {
      var queryFn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] :
      /**
      * @param {?} ref
      * @return {?}
      */
      function (ref) {
        return ref;
      };

      /** @type {?} */
      var query = queryFn(collectionRef);
      /** @type {?} */

      var ref = collectionRef;
      return {
        query: query,
        ref: ref
      };
    }
    /**
     * AngularFirestore Service
     *
     * This service is the main entry point for this feature module. It provides
     * an API for creating Collection and Reference services. These services can
     * then be used to do data updates and observable streams of the data.
     *
     * Example:
     *
     * import { Component } from '\@angular/core';
     * import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '\@angular/fire/firestore';
     * import { Observable } from 'rxjs/Observable';
     * import { from } from 'rxjs/observable';
     *
     * \@Component({
     *   selector: 'app-my-component',
     *   template: `
     *    <h2>Items for {{ (profile | async)?.name }}
     *    <ul>
     *       <li *ngFor="let item of items | async">{{ item.name }}</li>
     *    </ul>
     *    <div class="control-input">
     *       <input type="text" #itemname />
     *       <button (click)="addItem(itemname.value)">Add Item</button>
     *    </div>
     *   `
     * })
     * export class MyComponent implements OnInit {
     *
     *   // services for data operations and data streaming
     *   private readonly itemsRef: AngularFirestoreCollection<Item>;
     *   private readonly profileRef: AngularFirestoreDocument<Profile>;
     *
     *   // observables for template
     *   items: Observable<Item[]>;
     *   profile: Observable<Profile>;
     *
     *   // inject main service
     *   constructor(private readonly afs: AngularFirestore) {}
     *
     *   ngOnInit() {
     *     this.itemsRef = afs.collection('items', ref => ref.where('user', '==', 'davideast').limit(10));
     *     this.items = this.itemsRef.valueChanges().map(snap => snap.docs.map(data => doc.data()));
     *     // this.items = from(this.itemsRef); // you can also do this with no mapping
     *
     *     this.profileRef = afs.doc('users/davideast');
     *     this.profile = this.profileRef.valueChanges();
     *   }
     *
     *   addItem(name: string) {
     *     const user = 'davideast';
     *     this.itemsRef.add({ name, user });
     *   }
     * }
     */


    var AngularFirestore = /*#__PURE__*/function () {
      /**
       * Each Feature of AngularFire has a FirebaseApp injected. This way we
       * don't rely on the main Firebase App instance and we can create named
       * apps and use multiple apps.
       * @param {?} options
       * @param {?} nameOrConfig
       * @param {?} shouldEnablePersistence
       * @param {?} settings
       * @param {?} platformId
       * @param {?} zone
       * @param {?} persistenceSettings
       */
      function AngularFirestore(options, nameOrConfig, shouldEnablePersistence, settings, platformId, zone, persistenceSettings) {
        var _this = this;

        _classCallCheck(this, AngularFirestore);

        this.schedulers = new _angular_fire__WEBPACK_IMPORTED_MODULE_3__["ɵAngularFireSchedulers"](zone);
        this.keepUnstableUntilFirst = Object(_angular_fire__WEBPACK_IMPORTED_MODULE_3__["ɵkeepUnstableUntilFirstFactory"])(this.schedulers, platformId);
        this.firestore = zone.runOutsideAngular(
        /**
        * @return {?}
        */
        function () {
          /** @type {?} */
          var app = Object(_angular_fire__WEBPACK_IMPORTED_MODULE_3__["ɵfirebaseAppFactory"])(options, zone, nameOrConfig); // INVESTIGATE this seems to be required because in the browser build registerFirestore is an Object?
          //             seems like we're fighting ngcc. In the server firestore() isn't available, so I have to register
          //             in the browser registerFirestore is not a function... maybe this is an underlying firebase-js-sdk issue

          if (_firebase_firestore__WEBPACK_IMPORTED_MODULE_6__["registerFirestore"]) {
            Object(_firebase_firestore__WEBPACK_IMPORTED_MODULE_6__["registerFirestore"])(_firebase_app__WEBPACK_IMPORTED_MODULE_5___default.a);
          }
          /** @type {?} */


          var firestore = app.firestore();

          if (settings) {
            firestore.settings(settings);
          }

          return firestore;
        });

        if (shouldEnablePersistence && !Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["isPlatformServer"])(platformId)) {
          // We need to try/catch here because not all enablePersistence() failures are caught
          // https://github.com/firebase/firebase-js-sdk/issues/608

          /** @type {?} */
          var enablePersistence =
          /**
          * @return {?}
          */
          function enablePersistence() {
            try {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(_this.firestore.enablePersistence(persistenceSettings || undefined).then(
              /**
              * @return {?}
              */
              function () {
                return true;
              },
              /**
              * @return {?}
              */
              function () {
                return false;
              }));
            } catch (e) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(false);
            }
          };

          this.persistenceEnabled$ = zone.runOutsideAngular(enablePersistence);
        } else {
          this.persistenceEnabled$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(false);
        }
      }
      /**
       * @template T
       * @param {?} pathOrRef
       * @param {?=} queryFn
       * @return {?}
       */


      _createClass(AngularFirestore, [{
        key: "collection",
        value: function collection(pathOrRef, queryFn) {
          /** @type {?} */
          var collectionRef;

          if (typeof pathOrRef === 'string') {
            collectionRef = this.firestore.collection(pathOrRef);
          } else {
            collectionRef = pathOrRef;
          }

          var _associateQuery2 = associateQuery(collectionRef, queryFn),
              ref = _associateQuery2.ref,
              query = _associateQuery2.query;

          return new AngularFirestoreCollection(ref, query, this);
        }
        /**
         * Create a reference to a Firestore Collection Group based on a collectionId
         * and an optional query function to narrow the result
         * set.
         * @template T
         * @param {?} collectionId
         * @param {?=} queryGroupFn
         * @return {?}
         */

      }, {
        key: "collectionGroup",
        value: function collectionGroup(collectionId, queryGroupFn) {
          /** @type {?} */
          var queryFn = queryGroupFn ||
          /**
          * @param {?} ref
          * @return {?}
          */
          function (ref) {
            return ref;
          };
          /** @type {?} */


          var collectionGroup = this.firestore.collectionGroup(collectionId);
          return new AngularFirestoreCollectionGroup(queryFn(collectionGroup), this);
        }
        /**
         * @template T
         * @param {?} pathOrRef
         * @return {?}
         */

      }, {
        key: "doc",
        value: function doc(pathOrRef) {
          /** @type {?} */
          var ref;

          if (typeof pathOrRef === 'string') {
            ref = this.firestore.doc(pathOrRef);
          } else {
            ref = pathOrRef;
          }

          return new AngularFirestoreDocument(ref, this);
        }
        /**
         * Returns a generated Firestore Document Id.
         * @return {?}
         */

      }, {
        key: "createId",
        value: function createId() {
          return this.firestore.collection('_').doc().id;
        }
      }]);

      return AngularFirestore;
    }();

    AngularFirestore.ɵfac = function AngularFirestore_Factory(t) {
      return new (t || AngularFirestore)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire__WEBPACK_IMPORTED_MODULE_3__["FIREBASE_OPTIONS"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire__WEBPACK_IMPORTED_MODULE_3__["FIREBASE_APP_NAME"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ENABLE_PERSISTENCE, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](SETTINGS, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](PERSISTENCE_SETTINGS, 8));
    };
    /** @nocollapse */


    AngularFirestore.ctorParameters = function () {
      return [{
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_fire__WEBPACK_IMPORTED_MODULE_3__["FIREBASE_OPTIONS"]]
        }]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_fire__WEBPACK_IMPORTED_MODULE_3__["FIREBASE_APP_NAME"]]
        }]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [ENABLE_PERSISTENCE]
        }]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [SETTINGS]
        }]
      }, {
        type: Object,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
        }]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [PERSISTENCE_SETTINGS]
        }]
      }];
    };
    /** @nocollapse */


    AngularFirestore.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
      factory: function AngularFirestore_Factory() {
        return new AngularFirestore(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_fire__WEBPACK_IMPORTED_MODULE_3__["FIREBASE_OPTIONS"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_fire__WEBPACK_IMPORTED_MODULE_3__["FIREBASE_APP_NAME"], 8), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(ENABLE_PERSISTENCE, 8), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(SETTINGS, 8), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(PERSISTENCE_SETTINGS, 8));
      },
      token: AngularFirestore,
      providedIn: "any"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AngularFirestore, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'any'
        }]
      }], function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_fire__WEBPACK_IMPORTED_MODULE_3__["FIREBASE_OPTIONS"]]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_fire__WEBPACK_IMPORTED_MODULE_3__["FIREBASE_APP_NAME"]]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [ENABLE_PERSISTENCE]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [SETTINGS]
          }]
        }, {
          type: Object,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [PERSISTENCE_SETTINGS]
          }]
        }];
      }, null);
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var AngularFirestoreModule = /*#__PURE__*/function () {
      function AngularFirestoreModule() {
        _classCallCheck(this, AngularFirestoreModule);
      }

      _createClass(AngularFirestoreModule, null, [{
        key: "enablePersistence",

        /**
         * Attempt to enable persistent storage, if possible
         * @param {?=} persistenceSettings
         * @return {?}
         */
        value: function enablePersistence(persistenceSettings) {
          return {
            ngModule: AngularFirestoreModule,
            providers: [{
              provide: ENABLE_PERSISTENCE,
              useValue: true
            }, {
              provide: PERSISTENCE_SETTINGS,
              useValue: persistenceSettings
            }]
          };
        }
      }]);

      return AngularFirestoreModule;
    }();

    AngularFirestoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AngularFirestoreModule
    });
    AngularFirestoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AngularFirestoreModule_Factory(t) {
        return new (t || AngularFirestoreModule)();
      },
      providers: [AngularFirestore]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AngularFirestoreModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          providers: [AngularFirestore]
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @record
     * @template T
     */


    function DocumentSnapshotExists() {}

    if (false) {}
    /**
     * @record
     */


    function DocumentSnapshotDoesNotExist() {}

    if (false) {}
    /**
     * @record
     * @template T
     */


    function QueryDocumentSnapshot() {}

    if (false) {}
    /**
     * @record
     * @template T
     */


    function QuerySnapshot() {}

    if (false) {}
    /**
     * @record
     * @template T
     */


    function DocumentChange() {}

    if (false) {}
    /**
     * @record
     * @template T
     */


    function DocumentChangeAction() {}

    if (false) {}
    /**
     * @record
     * @template T
     */


    function Action() {}

    if (false) {}

    ;
    /**
     * @record
     * @template T
     */

    function Reference() {}

    if (false) {}
    /**
     * A structure that provides an association between a reference
     * and a query on that reference. Note: Performing operations
     * on the reference can lead to confusing results with complicated
     * queries.
     *
     * Example:
     *
     * const query = ref.where('type', '==', 'Book').
     *                  .where('price', '>' 18.00)
     *                  .where('price', '<' 100.00)
     *                  .where('category', '==', 'Fiction')
     *                  .where('publisher', '==', 'BigPublisher')
     *
     * // This addition would not be a result of the query above
     * ref.add({
     *  type: 'Magazine',
     *  price: 4.99,
     *  category: 'Sports',
     *  publisher: 'SportsPublisher'
     * });
     * @record
     */


    function AssociatedReference() {}

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //# sourceMappingURL=angular-fire-firestore.js.map

    /***/

  },

  /***/
  "./node_modules/@firebase/firestore/dist/index.cjs.js":
  /*!************************************************************!*\
    !*** ./node_modules/@firebase/firestore/dist/index.cjs.js ***!
    \************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesFirebaseFirestoreDistIndexCjsJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    });

    var t,
        e = __webpack_require__(
    /*! tslib */
    "./node_modules/@firebase/firestore/node_modules/tslib/tslib.es6.js"),
        n = (t = __webpack_require__(
    /*! @firebase/app */
    "./node_modules/@firebase/app/dist/index.cjs.js")) && "object" == typeof t && "default" in t ? t["default"] : t,
        r = __webpack_require__(
    /*! @firebase/logger */
    "./node_modules/@firebase/logger/dist/index.esm.js"),
        i = __webpack_require__(
    /*! @firebase/util */
    "./node_modules/@firebase/util/dist/index.cjs.js"),
        o = __webpack_require__(
    /*! @firebase/component */
    "./node_modules/@firebase/component/dist/index.cjs.js"),
        s = __webpack_require__(
    /*! @firebase/webchannel-wrapper */
    "./node_modules/@firebase/webchannel-wrapper/dist/index.esm.js"),
        u = n.SDK_VERSION,
        a =
    /** @class */
    function () {
      function t(t) {
        this.uid = t;
      }

      return t.prototype.t = function () {
        return null != this.uid;
      },
      /**
       * Returns a key representing this user, suitable for inclusion in a
       * dictionary.
       */
      t.prototype.s = function () {
        return this.t() ? "uid:" + this.uid : "anonymous-user";
      }, t.prototype.isEqual = function (t) {
        return t.uid === this.uid;
      }, t;
    }();
    /** A user with a null UID. */


    a.UNAUTHENTICATED = new a(null), // TODO(mikelehen): Look into getting a proper uid-equivalent for
    // non-FirebaseAuth providers.
    a.i = new a("google-credentials-uid"), a.h = new a("first-party-uid");
    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    var h = {
      // Causes are copied from:
      // https://github.com/grpc/grpc/blob/bceec94ea4fc5f0085d81235d8e1c06798dc341a/include/grpc%2B%2B/impl/codegen/status_code_enum.h

      /** Not an error; returned on success. */
      OK: "ok",

      /** The operation was cancelled (typically by the caller). */
      CANCELLED: "cancelled",

      /** Unknown error or an error from a different error domain. */
      UNKNOWN: "unknown",

      /**
       * Client specified an invalid argument. Note that this differs from
       * FAILED_PRECONDITION. INVALID_ARGUMENT indicates arguments that are
       * problematic regardless of the state of the system (e.g., a malformed file
       * name).
       */
      INVALID_ARGUMENT: "invalid-argument",

      /**
       * Deadline expired before operation could complete. For operations that
       * change the state of the system, this error may be returned even if the
       * operation has completed successfully. For example, a successful response
       * from a server could have been delayed long enough for the deadline to
       * expire.
       */
      DEADLINE_EXCEEDED: "deadline-exceeded",

      /** Some requested entity (e.g., file or directory) was not found. */
      NOT_FOUND: "not-found",

      /**
       * Some entity that we attempted to create (e.g., file or directory) already
       * exists.
       */
      ALREADY_EXISTS: "already-exists",

      /**
       * The caller does not have permission to execute the specified operation.
       * PERMISSION_DENIED must not be used for rejections caused by exhausting
       * some resource (use RESOURCE_EXHAUSTED instead for those errors).
       * PERMISSION_DENIED must not be used if the caller can not be identified
       * (use UNAUTHENTICATED instead for those errors).
       */
      PERMISSION_DENIED: "permission-denied",

      /**
       * The request does not have valid authentication credentials for the
       * operation.
       */
      UNAUTHENTICATED: "unauthenticated",

      /**
       * Some resource has been exhausted, perhaps a per-user quota, or perhaps the
       * entire file system is out of space.
       */
      RESOURCE_EXHAUSTED: "resource-exhausted",

      /**
       * Operation was rejected because the system is not in a state required for
       * the operation's execution. For example, directory to be deleted may be
       * non-empty, an rmdir operation is applied to a non-directory, etc.
       *
       * A litmus test that may help a service implementor in deciding
       * between FAILED_PRECONDITION, ABORTED, and UNAVAILABLE:
       *  (a) Use UNAVAILABLE if the client can retry just the failing call.
       *  (b) Use ABORTED if the client should retry at a higher-level
       *      (e.g., restarting a read-modify-write sequence).
       *  (c) Use FAILED_PRECONDITION if the client should not retry until
       *      the system state has been explicitly fixed. E.g., if an "rmdir"
       *      fails because the directory is non-empty, FAILED_PRECONDITION
       *      should be returned since the client should not retry unless
       *      they have first fixed up the directory by deleting files from it.
       *  (d) Use FAILED_PRECONDITION if the client performs conditional
       *      REST Get/Update/Delete on a resource and the resource on the
       *      server does not match the condition. E.g., conflicting
       *      read-modify-write on the same resource.
       */
      FAILED_PRECONDITION: "failed-precondition",

      /**
       * The operation was aborted, typically due to a concurrency issue like
       * sequencer check failures, transaction aborts, etc.
       *
       * See litmus test above for deciding between FAILED_PRECONDITION, ABORTED,
       * and UNAVAILABLE.
       */
      ABORTED: "aborted",

      /**
       * Operation was attempted past the valid range. E.g., seeking or reading
       * past end of file.
       *
       * Unlike INVALID_ARGUMENT, this error indicates a problem that may be fixed
       * if the system state changes. For example, a 32-bit file system will
       * generate INVALID_ARGUMENT if asked to read at an offset that is not in the
       * range [0,2^32-1], but it will generate OUT_OF_RANGE if asked to read from
       * an offset past the current file size.
       *
       * There is a fair bit of overlap between FAILED_PRECONDITION and
       * OUT_OF_RANGE. We recommend using OUT_OF_RANGE (the more specific error)
       * when it applies so that callers who are iterating through a space can
       * easily look for an OUT_OF_RANGE error to detect when they are done.
       */
      OUT_OF_RANGE: "out-of-range",

      /** Operation is not implemented or not supported/enabled in this service. */
      UNIMPLEMENTED: "unimplemented",

      /**
       * Internal errors. Means some invariants expected by underlying System has
       * been broken. If you see one of these errors, Something is very broken.
       */
      INTERNAL: "internal",

      /**
       * The service is currently unavailable. This is a most likely a transient
       * condition and may be corrected by retrying with a backoff.
       *
       * See litmus test above for deciding between FAILED_PRECONDITION, ABORTED,
       * and UNAVAILABLE.
       */
      UNAVAILABLE: "unavailable",

      /** Unrecoverable data loss or corruption. */
      DATA_LOSS: "data-loss"
    },
        c =
    /** @class */
    function (t) {
      function n(e, n) {
        var r = this;
        return (r = t.call(this, n) || this).code = e, r.message = n, r.name = "FirebaseError", // HACK: We write a toString property directly because Error is not a real
        // class and so inheritance does not work correctly. We could alternatively
        // do the same "back-door inheritance" trick that FirebaseError does.
        r.toString = function () {
          return r.name + ": [code=" + r.code + "]: " + r.message;
        }, r;
      }

      return e.__extends(n, t), n;
    }(Error),
        f = function f(t, e) {
      this.user = e, this.type = "OAuth", this.o = {}, // Set the headers using Object Literal notation to avoid minification
      this.o.Authorization = "Bearer " + t;
    },
        l =
    /** @class */
    function () {
      function t() {
        /**
         * Stores the listener registered with setChangeListener()
         * This isn't actually necessary since the UID never changes, but we use this
         * to verify the listen contract is adhered to in tests.
         */
        this.u = null;
      }

      return t.prototype.getToken = function () {
        return Promise.resolve(null);
      }, t.prototype._ = function () {}, t.prototype.l = function (t) {
        this.u = t, // Fire with initial user.
        t(a.UNAUTHENTICATED);
      }, t.prototype.T = function () {
        this.u = null;
      }, t;
    }(),
        p =
    /** @class */
    function () {
      function t(t) {
        var e = this;
        /**
         * The auth token listener registered with FirebaseApp, retained here so we
         * can unregister it.
         */

        this.I = null,
        /** Tracks the current User. */
        this.currentUser = a.UNAUTHENTICATED, this.R = !1,
        /**
             * Counter used to detect if the token changed while a getToken request was
             * outstanding.
             */
        this.A = 0,
        /** The listener registered with setChangeListener(). */
        this.u = null, this.forceRefresh = !1, this.I = function () {
          e.A++, e.currentUser = e.m(), e.R = !0, e.u && e.u(e.currentUser);
        }, this.A = 0, this.auth = t.getImmediate({
          optional: !0
        }), this.auth ? this.auth.addAuthTokenListener(this.I) : ( // if auth is not available, invoke tokenListener once with null token
        this.I(null), t.get().then(function (t) {
          e.auth = t, e.I && // tokenListener can be removed by removeChangeListener()
          e.auth.addAuthTokenListener(e.I);
        }, function () {}));
      }

      return t.prototype.getToken = function () {
        var t = this,
            e = this.A,
            n = this.forceRefresh; // Take note of the current value of the tokenCounter so that this method
        // can fail (with an ABORTED error) if there is a token change while the
        // request is outstanding.

        return this.forceRefresh = !1, this.auth ? this.auth.getToken(n).then(function (n) {
          // Cancel the request since the token changed while the request was
          // outstanding so the response is potentially for a previous user (which
          // user, we can't be sure).
          if (t.A !== e) throw new c(h.ABORTED, "getToken aborted due to token change.");
          return n ? (me("string" == typeof n.accessToken), new f(n.accessToken, t.currentUser)) : null;
        }) : Promise.resolve(null);
      }, t.prototype._ = function () {
        this.forceRefresh = !0;
      }, t.prototype.l = function (t) {
        this.u = t, // Fire the initial event
        this.R && t(this.currentUser);
      }, t.prototype.T = function () {
        this.auth && this.auth.removeAuthTokenListener(this.I), this.I = null, this.u = null;
      }, // Auth.getUid() can return null even with a user logged in. It is because
      // getUid() is synchronous, but the auth code populating Uid is asynchronous.
      // This method should only be called in the AuthTokenListener callback
      // to guarantee to get the actual user.
      t.prototype.m = function () {
        var t = this.auth && this.auth.getUid();
        return me(null === t || "string" == typeof t), new a(t);
      }, t;
    }(),
        d =
    /** @class */
    function () {
      function t(t, e) {
        this.P = t, this.V = e, this.type = "FirstParty", this.user = a.h;
      }

      return Object.defineProperty(t.prototype, "o", {
        get: function get() {
          var t = {
            "X-Goog-AuthUser": this.V
          },
              e = this.P.auth.g([]);
          return e && (t.Authorization = e), t;
        },
        enumerable: !0,
        configurable: !0
      }), t;
    }(),
        y =
    /** @class */
    function () {
      function t(t, e) {
        this.P = t, this.V = e;
      }

      return t.prototype.getToken = function () {
        return Promise.resolve(new d(this.P, this.V));
      }, t.prototype.l = function (t) {
        // Fire with initial uid.
        t(a.h);
      }, t.prototype.T = function () {}, t.prototype._ = function () {}, t;
    }(),
        v =
    /** @class */
    function () {
      function t(t, e) {
        if (this.seconds = t, this.nanoseconds = e, e < 0) throw new c(h.INVALID_ARGUMENT, "Timestamp nanoseconds out of range: " + e);
        if (e >= 1e9) throw new c(h.INVALID_ARGUMENT, "Timestamp nanoseconds out of range: " + e);
        if (t < -62135596800) throw new c(h.INVALID_ARGUMENT, "Timestamp seconds out of range: " + t); // This will break in the year 10,000.

        if (t >= 253402300800) throw new c(h.INVALID_ARGUMENT, "Timestamp seconds out of range: " + t);
      }

      return t.now = function () {
        return t.fromMillis(Date.now());
      }, t.fromDate = function (e) {
        return t.fromMillis(e.getTime());
      }, t.fromMillis = function (e) {
        var n = Math.floor(e / 1e3);
        return new t(n, 1e6 * (e - 1e3 * n));
      }, t.prototype.toDate = function () {
        return new Date(this.toMillis());
      }, t.prototype.toMillis = function () {
        return 1e3 * this.seconds + this.nanoseconds / 1e6;
      }, t.prototype.p = function (t) {
        return this.seconds === t.seconds ? be(this.nanoseconds, t.nanoseconds) : be(this.seconds, t.seconds);
      }, t.prototype.isEqual = function (t) {
        return t.seconds === this.seconds && t.nanoseconds === this.nanoseconds;
      }, t.prototype.toString = function () {
        return "Timestamp(seconds=" + this.seconds + ", nanoseconds=" + this.nanoseconds + ")";
      }, t.prototype.valueOf = function () {
        // This method returns a string of the form <seconds>.<nanoseconds> where <seconds> is
        // translated to have a non-negative value and both <seconds> and <nanoseconds> are left-padded
        // with zeroes to be a consistent length. Strings with this format then have a lexiographical
        // ordering that matches the expected ordering. The <seconds> translation is done to avoid
        // having a leading negative sign (i.e. a leading '-' character) in its string representation,
        // which would affect its lexiographical ordering.
        var t = this.seconds - -62135596800; // Note: Up to 12 decimal digits are required to represent all valid 'seconds' values.

        return String(t).padStart(12, "0") + "." + String(this.nanoseconds).padStart(9, "0");
      }, t;
    }(),
        g =
    /** @class */
    function () {
      function t(t) {
        this.timestamp = t;
      }

      return t.v = function (e) {
        return new t(e);
      }, t.min = function () {
        return new t(new v(0, 0));
      }, t.prototype.S = function (t) {
        return this.timestamp.p(t.timestamp);
      }, t.prototype.isEqual = function (t) {
        return this.timestamp.isEqual(t.timestamp);
      },
      /** Returns a number representation of the version for use in spec tests. */
      t.prototype.D = function () {
        // Convert to microseconds.
        return 1e6 * this.timestamp.seconds + this.timestamp.nanoseconds / 1e3;
      }, t.prototype.toString = function () {
        return "SnapshotVersion(" + this.timestamp.toString() + ")";
      }, t.prototype.C = function () {
        return this.timestamp;
      }, t;
    }(),
        m =
    /** @class */
    function () {
      function t(t, e, n) {
        void 0 === e ? e = 0 : e > t.length && ge(), void 0 === n ? n = t.length - e : n > t.length - e && ge(), this.segments = t, this.offset = e, this.F = n;
      }

      return Object.defineProperty(t.prototype, "length", {
        get: function get() {
          return this.F;
        },
        enumerable: !0,
        configurable: !0
      }), t.prototype.isEqual = function (e) {
        return 0 === t.N(this, e);
      }, t.prototype.child = function (e) {
        var n = this.segments.slice(this.offset, this.limit());
        return e instanceof t ? e.forEach(function (t) {
          n.push(t);
        }) : n.push(e), this.$(n);
      },
      /** The index of one past the last segment of the path. */
      t.prototype.limit = function () {
        return this.offset + this.length;
      }, t.prototype.k = function (t) {
        return t = void 0 === t ? 1 : t, this.$(this.segments, this.offset + t, this.length - t);
      }, t.prototype.L = function () {
        return this.$(this.segments, this.offset, this.length - 1);
      }, t.prototype.M = function () {
        return this.segments[this.offset];
      }, t.prototype.O = function () {
        return this.get(this.length - 1);
      }, t.prototype.get = function (t) {
        return this.segments[this.offset + t];
      }, t.prototype.B = function () {
        return 0 === this.length;
      }, t.prototype.q = function (t) {
        if (t.length < this.length) return !1;

        for (var e = 0; e < this.length; e++) {
          if (this.get(e) !== t.get(e)) return !1;
        }

        return !0;
      }, t.prototype.U = function (t) {
        if (this.length + 1 !== t.length) return !1;

        for (var e = 0; e < this.length; e++) {
          if (this.get(e) !== t.get(e)) return !1;
        }

        return !0;
      }, t.prototype.forEach = function (t) {
        for (var e = this.offset, n = this.limit(); e < n; e++) {
          t(this.segments[e]);
        }
      }, t.prototype.W = function () {
        return this.segments.slice(this.offset, this.limit());
      }, t.N = function (t, e) {
        for (var n = Math.min(t.length, e.length), r = 0; r < n; r++) {
          var i = t.get(r),
              o = e.get(r);
          if (i < o) return -1;
          if (i > o) return 1;
        }

        return t.length < e.length ? -1 : t.length > e.length ? 1 : 0;
      }, t;
    }(),
        w =
    /** @class */
    function (t) {
      function n() {
        return null !== t && t.apply(this, arguments) || this;
      }

      return e.__extends(n, t), n.prototype.$ = function (t, e, r) {
        return new n(t, e, r);
      }, n.prototype.j = function () {
        // NOTE: The client is ignorant of any path segments containing escape
        // sequences (e.g. __id123__) and just passes them through raw (they exist
        // for legacy reasons and should not be used frequently).
        return this.W().join("/");
      }, n.prototype.toString = function () {
        return this.j();
      },
      /**
       * Creates a resource path from the given slash-delimited string.
       */
      n.K = function (t) {
        // NOTE: The client is ignorant of any path segments containing escape
        // sequences (e.g. __id123__) and just passes them through raw (they exist
        // for legacy reasons and should not be used frequently).
        if (t.indexOf("//") >= 0) throw new c(h.INVALID_ARGUMENT, "Invalid path (" + t + "). Paths must not contain // in them."); // We may still have an empty segment at the beginning or end if they had a
        // leading or trailing slash (which we allow).

        return new n(t.split("/").filter(function (t) {
          return t.length > 0;
        }));
      }, n;
    }(m);
    /**
     * An error class used for Firestore-generated errors. Ideally we should be
     * using FirebaseError, but integrating with it is overly arduous at the moment,
     * so we define our own compatible error class (with a `name` of 'FirebaseError'
     * and compatible `code` and `message` fields.)
     */


    w.G = new w([]);

    var E = /^[_a-zA-Z][_a-zA-Z0-9]*$/,
        b =
    /** @class */
    function (t) {
      function n() {
        return null !== t && t.apply(this, arguments) || this;
      }

      return e.__extends(n, t), n.prototype.$ = function (t, e, r) {
        return new n(t, e, r);
      },
      /**
       * Returns true if the string could be used as a segment in a field path
       * without escaping.
       */
      n.H = function (t) {
        return E.test(t);
      }, n.prototype.j = function () {
        return this.W().map(function (t) {
          return t = t.replace("\\", "\\\\").replace("`", "\\`"), n.H(t) || (t = "`" + t + "`"), t;
        }).join(".");
      }, n.prototype.toString = function () {
        return this.j();
      },
      /**
       * Returns true if this field references the key of a document.
       */
      n.prototype.Y = function () {
        return 1 === this.length && "__name__" === this.get(0);
      },
      /**
       * The field designating the key of a document.
       */
      n.J = function () {
        return new n(["__name__"]);
      },
      /**
       * Parses a field string from the given server-formatted string.
       *
       * - Splitting the empty string is not allowed (for now at least).
       * - Empty segments within the string (e.g. if there are two consecutive
       *   separators) are not allowed.
       *
       * TODO(b/37244157): we should make this more strict. Right now, it allows
       * non-identifier path components, even if they aren't escaped.
       */
      n.X = function (t) {
        for (var e = [], r = "", i = 0, o = function o() {
          if (0 === r.length) throw new c(h.INVALID_ARGUMENT, "Invalid field path (" + t + "). Paths must not be empty, begin with '.', end with '.', or contain '..'");
          e.push(r), r = "";
        }, s = !1; i < t.length;) {
          var u = t[i];

          if ("\\" === u) {
            if (i + 1 === t.length) throw new c(h.INVALID_ARGUMENT, "Path has trailing escape character: " + t);
            var a = t[i + 1];
            if ("\\" !== a && "." !== a && "`" !== a) throw new c(h.INVALID_ARGUMENT, "Path has invalid escape sequence: " + t);
            r += a, i += 2;
          } else "`" === u ? (s = !s, i++) : "." !== u || s ? (r += u, i++) : (o(), i++);
        }

        if (o(), s) throw new c(h.INVALID_ARGUMENT, "Unterminated ` in path: " + t);
        return new n(e);
      }, n;
    }(m);
    /** A dot-separated path for navigating sub-objects within a document. */


    b.G = new b([]);
    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    var _ =
    /** @class */
    function () {
      function t(t) {
        this.path = t;
      }

      return t.Z = function (e) {
        return new t(w.K(e).k(5));
      },
      /** Returns true if the document is in the specified collectionId. */
      t.prototype.tt = function (t) {
        return this.path.length >= 2 && this.path.get(this.path.length - 2) === t;
      }, t.prototype.isEqual = function (t) {
        return null !== t && 0 === w.N(this.path, t.path);
      }, t.prototype.toString = function () {
        return this.path.toString();
      }, t.N = function (t, e) {
        return w.N(t.path, e.path);
      }, t.et = function (t) {
        return t.length % 2 == 0;
      },
      /**
       * Creates and returns a new document key with the given segments.
       *
       * @param segments The segments of the path to the document
       * @return A new instance of DocumentKey
       */
      t.st = function (e) {
        return new t(new w(e.slice()));
      }, t;
    }();
    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */


    function T(t) {
      var e = 0;

      for (var n in t) {
        Object.prototype.hasOwnProperty.call(t, n) && e++;
      }

      return e;
    }

    function I(t, e) {
      for (var n in t) {
        Object.prototype.hasOwnProperty.call(t, n) && e(n, t[n]);
      }
    }

    function N(t) {
      for (var e in t) {
        if (Object.prototype.hasOwnProperty.call(t, e)) return !1;
      }

      return !0;
    }
    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /**
     * Immutable class that represents a "proto" byte string.
     *
     * Proto byte strings can either be Base64-encoded strings or Uint8Arrays when
     * sent on the wire. This class abstracts away this differentiation by holding
     * the proto byte string in a common class that must be converted into a string
     * before being sent as a proto.
     */


    _.EMPTY = new _(new w([]));

    var A =
    /** @class */
    function () {
      function t(t) {
        this.it = t;
      }

      return t.fromBase64String = function (e) {
        return new t(ce.nt().atob(e));
      }, t.fromUint8Array = function (e) {
        return new t(
        /**
        * Helper function to convert an Uint8array to a binary string.
        */
        function (t) {
          for (var e = "", n = 0; n < t.length; ++n) {
            e += String.fromCharCode(t[n]);
          }

          return e;
        }(e));
      }, t.prototype.toBase64 = function () {
        return ce.nt().btoa(this.it);
      }, t.prototype.toUint8Array = function () {
        return function (t) {
          for (var e = new Uint8Array(t.length), n = 0; n < t.length; n++) {
            e[n] = t.charCodeAt(n);
          }

          return e;
        }(this.it);
      }, t.prototype.rt = function () {
        return 2 * this.it.length;
      }, t.prototype.S = function (t) {
        return be(this.it, t.it);
      }, t.prototype.isEqual = function (t) {
        return this.it === t.it;
      }, t;
    }();

    function k(t) {
      return null == t;
    }
    /** Returns whether the value represents -0. */


    function D(t) {
      // Detect if the value is -0.0. Based on polyfill from
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
      return -0 === t && 1 / t == -1 / 0;
    }
    /**
     * Returns whether a value is an integer and in the safe integer range
     * @param value The value to test for being an integer and in the safe range
     */


    function x(t) {
      return "number" == typeof t && Number.isInteger(t) && !D(t) && t <= Number.MAX_SAFE_INTEGER && t >= Number.MIN_SAFE_INTEGER;
    }
    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /**
     * Represents a locally-applied ServerTimestamp.
     *
     * Server Timestamps are backed by MapValues that contain an internal field
     * `__type__` with a value of `server_timestamp`. The previous value and local
     * write time are stored in its `__previous_value__` and `__local_write_time__`
     * fields respectively.
     *
     * Notes:
     * - ServerTimestampValue instances are created as the result of applying a
     *   TransformMutation (see TransformMutation.applyTo()). They can only exist in
     *   the local view of a document. Therefore they do not need to be parsed or
     *   serialized.
     * - When evaluated locally (e.g. for snapshot.data()), they by default
     *   evaluate to `null`. This behavior can be configured by passing custom
     *   FieldValueOptions to value().
     * - With respect to other ServerTimestampValues, they sort by their
     *   localWriteTime.
     */


    function S(t) {
      var e, n;
      return "server_timestamp" === (null === (n = ((null === (e = null == t ? void 0 : t.mapValue) || void 0 === e ? void 0 : e.fields) || {}).__type__) || void 0 === n ? void 0 : n.stringValue);
    }
    /**
     * Creates a new ServerTimestamp proto value (using the internal format).
     */

    /**
     * Returns the local time at which this timestamp was first set.
     */


    function R(t) {
      var e = M(t.mapValue.fields.__local_write_time__.timestampValue);
      return new v(e.seconds, e.nanos);
    }
    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    // A RegExp matching ISO 8601 UTC timestamps with optional fraction.


    A.ht = new A("");
    var L = new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);
    /** Extracts the backend's type order for the provided value. */

    function O(t) {
      return "nullValue" in t ? 0
      /* NullValue */
      : "booleanValue" in t ? 1
      /* BooleanValue */
      : "integerValue" in t || "doubleValue" in t ? 2
      /* NumberValue */
      : "timestampValue" in t ? 3
      /* TimestampValue */
      : "stringValue" in t ? 5
      /* StringValue */
      : "bytesValue" in t ? 6
      /* BlobValue */
      : "referenceValue" in t ? 7
      /* RefValue */
      : "geoPointValue" in t ? 8
      /* GeoPointValue */
      : "arrayValue" in t ? 9
      /* ArrayValue */
      : "mapValue" in t ? S(t) ? 4
      /* ServerTimestampValue */
      : 10
      /* ObjectValue */
      : ge();
    }
    /** Tests `left` and `right` for equality based on the backend semantics. */


    function V(t, e) {
      var n = O(t);
      if (n !== O(e)) return !1;

      switch (n) {
        case 0
        /* NullValue */
        :
          return !0;

        case 1
        /* BooleanValue */
        :
          return t.booleanValue === e.booleanValue;

        case 4
        /* ServerTimestampValue */
        :
          return R(t).isEqual(R(e));

        case 3
        /* TimestampValue */
        :
          return function (t, e) {
            if ("string" == typeof t.timestampValue && "string" == typeof e.timestampValue && t.timestampValue.length === e.timestampValue.length) // Use string equality for ISO 8601 timestamps
              return t.timestampValue === e.timestampValue;
            var n = M(t.timestampValue),
                r = M(e.timestampValue);
            return n.seconds === r.seconds && n.nanos === r.nanos;
          }(t, e);

        case 5
        /* StringValue */
        :
          return t.stringValue === e.stringValue;

        case 6
        /* BlobValue */
        :
          return function (t, e) {
            return F(t.bytesValue).isEqual(F(e.bytesValue));
          }(t, e);

        case 7
        /* RefValue */
        :
          return t.referenceValue === e.referenceValue;

        case 8
        /* GeoPointValue */
        :
          return function (t, e) {
            return j(t.geoPointValue.latitude) === j(e.geoPointValue.latitude) && j(t.geoPointValue.longitude) === j(e.geoPointValue.longitude);
          }(t, e);

        case 2
        /* NumberValue */
        :
          return function (t, e) {
            if ("integerValue" in t && "integerValue" in e) return j(t.integerValue) === j(e.integerValue);

            if ("doubleValue" in t && "doubleValue" in e) {
              var n = j(t.doubleValue),
                  r = j(e.doubleValue);
              return n === r ? D(n) === D(r) : isNaN(n) && isNaN(r);
            }

            return !1;
          }(t, e);

        case 9
        /* ArrayValue */
        :
          return _e(t.arrayValue.values || [], e.arrayValue.values || [], V);

        case 10
        /* ObjectValue */
        :
          return function (t, e) {
            var n = t.mapValue.fields || {},
                r = e.mapValue.fields || {};
            if (T(n) !== T(r)) return !1;

            for (var i in n) {
              if (n.hasOwnProperty(i) && (void 0 === r[i] || !V(n[i], r[i]))) return !1;
            }

            return !0;
          }(t, e);

        default:
          return ge();
      }
    }

    function P(t, e) {
      return void 0 !== (t.values || []).find(function (t) {
        return V(t, e);
      });
    }

    function U(t, e) {
      var n = O(t),
          r = O(e);
      if (n !== r) return be(n, r);

      switch (n) {
        case 0
        /* NullValue */
        :
          return 0;

        case 1
        /* BooleanValue */
        :
          return be(t.booleanValue, e.booleanValue);

        case 2
        /* NumberValue */
        :
          return function (t, e) {
            var n = j(t.integerValue || t.doubleValue),
                r = j(e.integerValue || e.doubleValue);
            return n < r ? -1 : n > r ? 1 : n === r ? 0 : // one or both are NaN.
            isNaN(n) ? isNaN(r) ? 0 : -1 : 1;
          }(t, e);

        case 3
        /* TimestampValue */
        :
          return C(t.timestampValue, e.timestampValue);

        case 4
        /* ServerTimestampValue */
        :
          return C(R(t), R(e));

        case 5
        /* StringValue */
        :
          return be(t.stringValue, e.stringValue);

        case 6
        /* BlobValue */
        :
          return function (t, e) {
            var n = F(t),
                r = F(e);
            return n.S(r);
          }(t.bytesValue, e.bytesValue);

        case 7
        /* RefValue */
        :
          return function (t, e) {
            for (var n = t.split("/"), r = e.split("/"), i = 0; i < n.length && i < r.length; i++) {
              var o = be(n[i], r[i]);
              if (0 !== o) return o;
            }

            return be(n.length, r.length);
          }(t.referenceValue, e.referenceValue);

        case 8
        /* GeoPointValue */
        :
          return function (t, e) {
            var n = be(j(t.latitude), j(e.latitude));
            return 0 !== n ? n : be(j(t.longitude), j(e.longitude));
          }(t.geoPointValue, e.geoPointValue);

        case 9
        /* ArrayValue */
        :
          return function (t, e) {
            for (var n = t.values || [], r = e.values || [], i = 0; i < n.length && i < r.length; ++i) {
              var o = U(n[i], r[i]);
              if (o) return o;
            }

            return be(n.length, r.length);
          }(t.arrayValue, e.arrayValue);

        case 10
        /* ObjectValue */
        :
          return function (t, e) {
            var n = t.fields || {},
                r = Object.keys(n),
                i = e.fields || {},
                o = Object.keys(i); // Even though MapValues are likely sorted correctly based on their insertion
            // order (e.g. when received from the backend), local modifications can bring
            // elements out of order. We need to re-sort the elements to ensure that
            // canonical IDs are independent of insertion order.

            r.sort(), o.sort();

            for (var s = 0; s < r.length && s < o.length; ++s) {
              var u = be(r[s], o[s]);
              if (0 !== u) return u;
              var a = U(n[r[s]], i[o[s]]);
              if (0 !== a) return a;
            }

            return be(r.length, o.length);
          }(t.mapValue, e.mapValue);

        default:
          throw ge();
      }
    }

    function C(t, e) {
      if ("string" == typeof t && "string" == typeof e && t.length === e.length) return be(t, e);
      var n = M(t),
          r = M(e),
          i = be(n.seconds, r.seconds);
      return 0 !== i ? i : be(n.nanos, r.nanos);
    }

    function q(t) {
      return function t(e) {
        return "nullValue" in e ? "null" : "booleanValue" in e ? "" + e.booleanValue : "integerValue" in e ? "" + e.integerValue : "doubleValue" in e ? "" + e.doubleValue : "timestampValue" in e ? function (t) {
          var e = M(t);
          return "time(" + e.seconds + "," + e.nanos + ")";
        }(e.timestampValue) : "stringValue" in e ? e.stringValue : "bytesValue" in e ? F(e.bytesValue).toBase64() : "referenceValue" in e ? (r = e.referenceValue, _.Z(r).toString()) : "geoPointValue" in e ? "geo(" + (n = e.geoPointValue).latitude + "," + n.longitude + ")" : "arrayValue" in e ? function (e) {
          for (var n = "[", r = !0, i = 0, o = e.values || []; i < o.length; i++) {
            var s = o[i];
            r ? r = !1 : n += ",", n += t(s);
          }

          return n + "]";
        }(e.arrayValue) : "mapValue" in e ? function (e) {
          for ( // Iteration order in JavaScript is not guaranteed. To ensure that we generate
          // matching canonical IDs for identical maps, we need to sort the keys.
          var n = "{", r = !0, i = 0, o = Object.keys(e.fields || {}).sort(); i < o.length; i++) {
            var s = o[i];
            r ? r = !1 : n += ",", n += s + ":" + t(e.fields[s]);
          }

          return n + "}";
        }(e.mapValue) : ge();
        var n, r;
      }(t);
    }

    function M(t) {
      // The json interface (for the browser) will return an iso timestamp string,
      // while the proto js library (for node) will return a
      // google.protobuf.Timestamp instance.
      if (me(!!t), "string" == typeof t) {
        // The date string can have higher precision (nanos) than the Date class
        // (millis), so we do some custom parsing here.
        // Parse the nanos right out of the string.
        var e = 0,
            n = L.exec(t);

        if (me(!!n), n[1]) {
          // Pad the fraction out to 9 digits (nanos).
          var r = n[1];
          r = (r + "000000000").substr(0, 9), e = Number(r);
        } // Parse the date to get the seconds.


        var i = new Date(t);
        return {
          seconds: Math.floor(i.getTime() / 1e3),
          nanos: e
        };
      }

      return {
        seconds: j(t.seconds),
        nanos: j(t.nanos)
      };
    }
    /**
     * Converts the possible Proto types for numbers into a JavaScript number.
     * Returns 0 if the value is not numeric.
     */


    function j(t) {
      // TODO(bjornick): Handle int64 greater than 53 bits.
      return "number" == typeof t ? t : "string" == typeof t ? Number(t) : 0;
    }
    /** Converts the possible Proto types for Blobs into a ByteString. */


    function F(t) {
      return "string" == typeof t ? A.fromBase64String(t) : A.fromUint8Array(t);
    }
    /** Returns a reference value for the provided database and key. */


    function B(t, e) {
      return {
        referenceValue: "projects/" + t.projectId + "/databases/" + t.database + "/documents/" + e.path.j()
      };
    }
    /** Returns true if `value` is an IntegerValue . */


    function z(t) {
      return !!t && "integerValue" in t;
    }
    /** Returns true if `value` is a DoubleValue. */

    /** Returns true if `value` is an ArrayValue. */


    function G(t) {
      return !!t && "arrayValue" in t;
    }
    /** Returns true if `value` is a NullValue. */


    function W(t) {
      return !!t && "nullValue" in t;
    }
    /** Returns true if `value` is NaN. */


    function Q(t) {
      return !!t && "doubleValue" in t && isNaN(Number(t.doubleValue));
    }
    /** Returns true if `value` is a MapValue. */


    function K(t) {
      return !!t && "mapValue" in t;
    }
    /**
     * @license
     * Copyright 2018 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /** Transforms a value into a server-generated timestamp. */


    var Y =
    /** @class */
    function () {
      function t() {}

      return t.prototype.ot = function (t, e) {
        return function (t, e) {
          var n = {
            fields: {
              __type__: {
                stringValue: "server_timestamp"
              },
              __local_write_time__: {
                timestampValue: {
                  seconds: t.seconds,
                  nanos: t.nanoseconds
                }
              }
            }
          };
          return e && (n.fields.__previous_value__ = e), {
            mapValue: n
          };
        }(e, t);
      }, t.prototype.at = function (t, e) {
        return e;
      }, t.prototype.ut = function (t) {
        return null; // Server timestamps are idempotent and don't require a base value.
      }, t.prototype.isEqual = function (e) {
        return e instanceof t;
      }, t;
    }();

    Y.instance = new Y();
    /** Transforms an array value via a union operation. */

    var $ =
    /** @class */
    function () {
      function t(t) {
        this.elements = t;
      }

      return t.prototype.ot = function (t, e) {
        return this.apply(t);
      }, t.prototype.at = function (t, e) {
        // The server just sends null as the transform result for array operations,
        // so we have to calculate a result the same as we do for local
        // applications.
        return this.apply(t);
      }, t.prototype.apply = function (t) {
        for (var e = X(t), n = function n(t) {
          e.some(function (e) {
            return V(e, t);
          }) || e.push(t);
        }, r = 0, i = this.elements; r < i.length; r++) {
          n(i[r]);
        }

        return {
          arrayValue: {
            values: e
          }
        };
      }, t.prototype.ut = function (t) {
        return null; // Array transforms are idempotent and don't require a base value.
      }, t.prototype.isEqual = function (e) {
        return e instanceof t && _e(this.elements, e.elements, V);
      }, t;
    }(),
        J =
    /** @class */
    function () {
      function t(t) {
        this.elements = t;
      }

      return t.prototype.ot = function (t, e) {
        return this.apply(t);
      }, t.prototype.at = function (t, e) {
        // The server just sends null as the transform result for array operations,
        // so we have to calculate a result the same as we do for local
        // applications.
        return this.apply(t);
      }, t.prototype.apply = function (t) {
        for (var e = X(t), n = function n(t) {
          e = e.filter(function (e) {
            return !V(e, t);
          });
        }, r = 0, i = this.elements; r < i.length; r++) {
          n(i[r]);
        }

        return {
          arrayValue: {
            values: e
          }
        };
      }, t.prototype.ut = function (t) {
        return null; // Array transforms are idempotent and don't require a base value.
      }, t.prototype.isEqual = function (e) {
        return e instanceof t && _e(this.elements, e.elements, V);
      }, t;
    }(),
        H =
    /** @class */
    function () {
      function t(t, e) {
        this.serializer = t, this.ct = e;
      }

      return t.prototype.ot = function (t, e) {
        // PORTING NOTE: Since JavaScript's integer arithmetic is limited to 53 bit
        // precision and resolves overflows by reducing precision, we do not
        // manually cap overflows at 2^63.
        var n = this.ut(t),
            r = this.asNumber(n) + this.asNumber(this.ct);
        return z(n) && z(this.ct) ? this.serializer._t(r) : this.serializer.lt(r);
      }, t.prototype.at = function (t, e) {
        return e;
      },
      /**
       * Inspects the provided value, returning the provided value if it is already
       * a NumberValue, otherwise returning a coerced value of 0.
       */
      t.prototype.ut = function (t) {
        return z(e = t) || function (t) {
          return !!t && "doubleValue" in t;
        }(e) ? t : {
          integerValue: 0
        };
        var e;
      }, t.prototype.isEqual = function (e) {
        return e instanceof t && V(this.ct, e.ct);
      }, t.prototype.asNumber = function (t) {
        return j(t.integerValue || t.doubleValue);
      }, t;
    }();
    /** Transforms an array value via a remove operation. */


    function X(t) {
      return G(t) && t.arrayValue.values ? t.arrayValue.values.slice() : [];
    }
    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /**
     * Provides a set of fields that can be used to partially patch a document.
     * FieldMask is used in conjunction with ObjectValue.
     * Examples:
     *   foo - Overwrites foo entirely with the provided value. If foo is not
     *         present in the companion ObjectValue, the field is deleted.
     *   foo.bar - Overwrites only the field bar of the object foo.
     *             If foo is not an object, foo is replaced with an object
     *             containing foo
     */


    var Z =
    /** @class */
    function () {
      function t(t) {
        this.fields = t, // TODO(dimond): validation of FieldMask
        // Sort the field mask to support `FieldMask.isEqual()` and assert below.
        t.sort(b.N)
        /**
        * Verifies that `fieldPath` is included by at least one field in this field
        * mask.
        *
        * This is an O(n) operation, where `n` is the size of the field mask.
        */
        ;
      }

      return t.prototype.dt = function (t) {
        for (var e = 0, n = this.fields; e < n.length; e++) {
          if (n[e].q(t)) return !0;
        }

        return !1;
      }, t.prototype.isEqual = function (t) {
        return _e(this.fields, t.fields, function (t, e) {
          return t.isEqual(e);
        });
      }, t;
    }(),
        tt =
    /** @class */
    function () {
      function t(t, e) {
        this.field = t, this.transform = e;
      }

      return t.prototype.isEqual = function (t) {
        return this.field.isEqual(t.field) && this.transform.isEqual(t.transform);
      }, t;
    }(),
        et = function et(
    /**
         * The version at which the mutation was committed:
         *
         * - For most operations, this is the updateTime in the WriteResult.
         * - For deletes, the commitTime of the WriteResponse (because deletes are
         *   not stored and have no updateTime).
         *
         * Note that these versions can be different: No-op writes will not change
         * the updateTime even though the commitTime advances.
         */
    t,
    /**
         * The resulting fields returned from the backend after a
         * TransformMutation has been committed. Contains one FieldValue for each
         * FieldTransform that was in the mutation.
         *
         * Will be null if the mutation was not a TransformMutation.
         */
    e) {
      this.version = t, this.transformResults = e;
    },
        nt =
    /** @class */
    function () {
      function t(t, e) {
        this.updateTime = t, this.exists = e
        /** Creates a new empty Precondition. */
        ;
      }

      return t.ft = function () {
        return new t();
      },
      /** Creates a new Precondition with an exists flag. */
      t.exists = function (e) {
        return new t(void 0, e);
      },
      /** Creates a new Precondition based on a version a document exists at. */
      t.updateTime = function (e) {
        return new t(e);
      }, Object.defineProperty(t.prototype, "Tt", {
        /** Returns whether this Precondition is empty. */
        get: function get() {
          return void 0 === this.updateTime && void 0 === this.exists;
        },
        enumerable: !0,
        configurable: !0
      }),
      /**
       * Returns true if the preconditions is valid for the given document
       * (or null if no document is available).
       */
      t.prototype.Et = function (t) {
        return void 0 !== this.updateTime ? t instanceof yt && t.version.isEqual(this.updateTime) : void 0 === this.exists || this.exists === t instanceof yt;
      }, t.prototype.isEqual = function (t) {
        return this.exists === t.exists && (this.updateTime ? !!t.updateTime && this.updateTime.isEqual(t.updateTime) : !t.updateTime);
      }, t;
    }(),
        rt =
    /** @class */
    function () {
      function t() {}

      return t.prototype.It = function (t) {},
      /**
       * Returns the version from the given document for use as the result of a
       * mutation. Mutations are defined to return the version of the base document
       * only if it is an existing document. Deleted and unknown documents have a
       * post-mutation version of SnapshotVersion.min().
       */
      t.wt = function (t) {
        return t instanceof yt ? t.version : g.min();
      }, t;
    }(),
        it =
    /** @class */
    function (t) {
      function n(e, n, r) {
        var i = this;
        return (i = t.call(this) || this).key = e, i.value = n, i.Rt = r, i.type = 0
        /* Set */
        , i;
      }

      return e.__extends(n, t), n.prototype.at = function (t, e) {
        this.It(t); // Unlike applyToLocalView, if we're applying a mutation to a remote
        // document the server has accepted the mutation so the precondition must
        // have held.

        var n = e.version;
        return new yt(this.key, n, this.value, {
          hasCommittedMutations: !0
        });
      }, n.prototype.ot = function (t, e, n) {
        if (this.It(t), !this.Rt.Et(t)) return t;
        var r = rt.wt(t);
        return new yt(this.key, r, this.value, {
          At: !0
        });
      }, n.prototype.Pt = function (t) {
        return null;
      }, n.prototype.isEqual = function (t) {
        return t instanceof n && this.key.isEqual(t.key) && this.value.isEqual(t.value) && this.Rt.isEqual(t.Rt);
      }, n;
    }(rt),
        ot =
    /** @class */
    function (t) {
      function n(e, n, r, i) {
        var o = this;
        return (o = t.call(this) || this).key = e, o.data = n, o.Vt = r, o.Rt = i, o.type = 1
        /* Patch */
        , o;
      }

      return e.__extends(n, t), n.prototype.at = function (t, e) {
        if (this.It(t), !this.Rt.Et(t)) // Since the mutation was not rejected, we know that the  precondition
          // matched on the backend. We therefore must not have the expected version
          // of the document in our cache and return an UnknownDocument with the
          // known updateTime.
          return new gt(this.key, e.version);
        var n = this.gt(t);
        return new yt(this.key, e.version, n, {
          hasCommittedMutations: !0
        });
      }, n.prototype.ot = function (t, e, n) {
        if (this.It(t), !this.Rt.Et(t)) return t;
        var r = rt.wt(t),
            i = this.gt(t);
        return new yt(this.key, r, i, {
          At: !0
        });
      }, n.prototype.Pt = function (t) {
        return null;
      }, n.prototype.isEqual = function (t) {
        return t instanceof n && this.key.isEqual(t.key) && this.Vt.isEqual(t.Vt) && this.Rt.isEqual(t.Rt);
      },
      /**
       * Patches the data of document if available or creates a new document. Note
       * that this does not check whether or not the precondition of this patch
       * holds.
       */
      n.prototype.gt = function (t) {
        var e;
        return e = t instanceof yt ? t.data() : ht.empty(), this.pt(e);
      }, n.prototype.pt = function (t) {
        var e = this,
            n = new ct(t);
        return this.Vt.fields.forEach(function (t) {
          if (!t.B()) {
            var r = e.data.field(t);
            null !== r ? n.set(t, r) : n["delete"](t);
          }
        }), n.yt();
      }, n;
    }(rt),
        st =
    /** @class */
    function (t) {
      function n(e, n) {
        var r = this;
        return (r = t.call(this) || this).key = e, r.fieldTransforms = n, r.type = 2
        /* Transform */
        , // NOTE: We set a precondition of exists: true as a safety-check, since we
        // always combine TransformMutations with a SetMutation or PatchMutation which
        // (if successful) should end up with an existing document.
        r.Rt = nt.exists(!0), r;
      }

      return e.__extends(n, t), n.prototype.at = function (t, e) {
        if (this.It(t), me(null != e.transformResults), !this.Rt.Et(t)) // Since the mutation was not rejected, we know that the  precondition
          // matched on the backend. We therefore must not have the expected version
          // of the document in our cache and return an UnknownDocument with the
          // known updateTime.
          return new gt(this.key, e.version);
        var n = this.bt(t),
            r = this.vt(t, e.transformResults),
            i = e.version,
            o = this.St(n.data(), r);
        return new yt(this.key, i, o, {
          hasCommittedMutations: !0
        });
      }, n.prototype.ot = function (t, e, n) {
        if (this.It(t), !this.Rt.Et(t)) return t;
        var r = this.bt(t),
            i = this.Dt(n, t, e),
            o = this.St(r.data(), i);
        return new yt(this.key, r.version, o, {
          At: !0
        });
      }, n.prototype.Pt = function (t) {
        for (var e = null, n = 0, r = this.fieldTransforms; n < r.length; n++) {
          var i = r[n],
              o = t instanceof yt ? t.field(i.field) : void 0,
              s = i.transform.ut(o || null);
          null != s && (e = null == e ? new ct().set(i.field, s) : e.set(i.field, s));
        }

        return e ? e.yt() : null;
      }, n.prototype.isEqual = function (t) {
        return t instanceof n && this.key.isEqual(t.key) && _e(this.fieldTransforms, t.fieldTransforms, function (t, e) {
          return t.isEqual(e);
        }) && this.Rt.isEqual(t.Rt);
      },
      /**
       * Asserts that the given MaybeDocument is actually a Document and verifies
       * that it matches the key for this mutation. Since we only support
       * transformations with precondition exists this method is guaranteed to be
       * safe.
       */
      n.prototype.bt = function (t) {
        return t;
      },
      /**
       * Creates a list of "transform results" (a transform result is a field value
       * representing the result of applying a transform) for use after a
       * TransformMutation has been acknowledged by the server.
       *
       * @param baseDoc The document prior to applying this mutation batch.
       * @param serverTransformResults The transform results received by the server.
       * @return The transform results list.
       */
      n.prototype.vt = function (t, e) {
        var n = [];
        me(this.fieldTransforms.length === e.length);

        for (var r = 0; r < e.length; r++) {
          var i = this.fieldTransforms[r],
              o = i.transform,
              s = null;
          t instanceof yt && (s = t.field(i.field)), n.push(o.at(s, e[r]));
        }

        return n;
      },
      /**
       * Creates a list of "transform results" (a transform result is a field value
       * representing the result of applying a transform) for use when applying a
       * TransformMutation locally.
       *
       * @param localWriteTime The local time of the transform mutation (used to
       *     generate ServerTimestampValues).
       * @param maybeDoc The current state of the document after applying all
       *     previous mutations.
       * @param baseDoc The document prior to applying this mutation batch.
       * @return The transform results list.
       */
      n.prototype.Dt = function (t, e, n) {
        for (var r = [], i = 0, o = this.fieldTransforms; i < o.length; i++) {
          var s = o[i],
              u = s.transform,
              a = null;
          e instanceof yt && (a = e.field(s.field)), null === a && n instanceof yt && ( // If the current document does not contain a value for the mutated
          // field, use the value that existed before applying this mutation
          // batch. This solves an edge case where a PatchMutation clears the
          // values in a nested map before the TransformMutation is applied.
          a = n.field(s.field)), r.push(u.ot(a, t));
        }

        return r;
      }, n.prototype.St = function (t, e) {
        for (var n = new ct(t), r = 0; r < this.fieldTransforms.length; r++) {
          var i = this.fieldTransforms[r].field;
          n.set(i, e[r]);
        }

        return n.yt();
      }, n;
    }(rt),
        ut =
    /** @class */
    function (t) {
      function n(e, n) {
        var r = this;
        return (r = t.call(this) || this).key = e, r.Rt = n, r.type = 3
        /* Delete */
        , r;
      }

      return e.__extends(n, t), n.prototype.at = function (t, e) {
        // Unlike applyToLocalView, if we're applying a mutation to a remote
        // document the server has accepted the mutation so the precondition must
        // have held.
        return this.It(t), new vt(this.key, e.version, {
          hasCommittedMutations: !0
        });
      }, n.prototype.ot = function (t, e, n) {
        return this.It(t), this.Rt.Et(t) ? new vt(this.key, g.min()) : t;
      }, n.prototype.Pt = function (t) {
        return null;
      }, n.prototype.isEqual = function (t) {
        return t instanceof n && this.key.isEqual(t.key) && this.Rt.isEqual(t.Rt);
      }, n;
    }(rt),
        at =
    /** @class */
    function (t) {
      function n(e, n) {
        var r = this;
        return (r = t.call(this) || this).key = e, r.Rt = n, r.type = 4
        /* Verify */
        , r;
      }

      return e.__extends(n, t), n.prototype.at = function (t, e) {
        ge();
      }, n.prototype.ot = function (t, e, n) {
        ge();
      }, n.prototype.Pt = function (t) {
        ge();
      }, n.prototype.isEqual = function (t) {
        return t instanceof n && this.key.isEqual(t.key) && this.Rt.isEqual(t.Rt);
      }, n;
    }(rt),
        ht =
    /** @class */
    function () {
      function t(t) {
        this.proto = t;
      }

      return t.empty = function () {
        return new t({
          mapValue: {}
        });
      },
      /**
       * Returns the value at the given path or null.
       *
       * @param path the path to search
       * @return The value at the path or if there it doesn't exist.
       */
      t.prototype.field = function (t) {
        if (t.B()) return this.proto;

        for (var e = this.proto, n = 0; n < t.length - 1; ++n) {
          if (!e.mapValue.fields) return null;
          if (!K(e = e.mapValue.fields[t.get(n)])) return null;
        }

        return (e = (e.mapValue.fields || {})[t.O()]) || null;
      }, t.prototype.isEqual = function (t) {
        return V(this.proto, t.proto);
      }, t;
    }(),
        ct =
    /** @class */
    function () {
      /**
       * @param baseObject The object to mutate.
       */
      function t(t) {
        void 0 === t && (t = ht.empty()), this.Ct = t,
        /** A map that contains the accumulated changes in this builder. */
        this.Ft = new Map();
      }
      /**
       * Sets the field to the provided value.
       *
       * @param path The field path to set.
       * @param value The value to set.
       * @return The current Builder instance.
       */


      return t.prototype.set = function (t, e) {
        return this.Nt(t, e), this;
      },
      /**
       * Removes the field at the specified path. If there is no field at the
       * specified path, nothing is changed.
       *
       * @param path The field path to remove.
       * @return The current Builder instance.
       */
      t.prototype["delete"] = function (t) {
        return this.Nt(t, null), this;
      },
      /**
       * Adds `value` to the overlay map at `path`. Creates nested map entries if
       * needed.
       */
      t.prototype.Nt = function (t, e) {
        for (var n = this.Ft, r = 0; r < t.length - 1; ++r) {
          var i = t.get(r),
              o = n.get(i);
          o instanceof Map ? // Re-use a previously created map
          n = o : o && 10
          /* ObjectValue */
          === O(o) ? ( // Convert the existing Protobuf MapValue into a map
          o = new Map(Object.entries(o.mapValue.fields || {})), n.set(i, o), n = o) : ( // Create an empty map to represent the current nesting level
          o = new Map(), n.set(i, o), n = o);
        }

        n.set(t.O(), e);
      },
      /** Returns an ObjectValue with all mutations applied. */
      t.prototype.yt = function () {
        var t = this.$t(b.G, this.Ft);
        return null != t ? new ht(t) : this.Ct;
      },
      /**
       * Applies any overlays from `currentOverlays` that exist at `currentPath`
       * and returns the merged data at `currentPath` (or null if there were no
       * changes).
       *
       * @param currentPath The path at the current nesting level. Can be set to
       * FieldValue.EMPTY_PATH to represent the root.
       * @param currentOverlays The overlays at the current nesting level in the
       * same format as `overlayMap`.
       * @return The merged data at `currentPath` or null if no modifications
       * were applied.
       */
      t.prototype.$t = function (t, e) {
        var n = this,
            r = !1,
            i = this.Ct.field(t),
            o = K(i) ? // If there is already data at the current path, base our
        Object.assign({}, i.mapValue.fields) : {};
        return e.forEach(function (e, i) {
          if (e instanceof Map) {
            var s = n.$t(t.child(i), e);
            null != s && (o[i] = s, r = !0);
          } else null !== e ? (o[i] = e, r = !0) : o.hasOwnProperty(i) && (delete o[i], r = !0);
        }), r ? {
          mapValue: {
            fields: o
          }
        } : null;
      }, t;
    }();
    /** A field path and the TransformOperation to perform upon it. */

    /**
     * Returns a FieldMask built from all fields in a MapValue.
     */


    function ft(t) {
      var e = [];
      return I(t.fields || {}, function (t, n) {
        var r = new b([t]);

        if (K(n)) {
          var i = ft(n.mapValue).fields;
          if (0 === i.length) // Preserve the empty map by adding it to the FieldMask.
            e.push(r);else // For nested and non-empty ObjectValues, add the FieldPath of the
            // leaf nodes.
            for (var o = 0, s = i; o < s.length; o++) {
              var u = s[o];
              e.push(r.child(u));
            }
        } else // For nested and non-empty ObjectValues, add the FieldPath of the leaf
          // nodes.
          e.push(r);
      }), new Z(e)
      /**
      * @license
      * Copyright 2017 Google LLC
      *
      * Licensed under the Apache License, Version 2.0 (the "License");
      * you may not use this file except in compliance with the License.
      * You may obtain a copy of the License at
      *
      *   http://www.apache.org/licenses/LICENSE-2.0
      *
      * Unless required by applicable law or agreed to in writing, software
      * distributed under the License is distributed on an "AS IS" BASIS,
      * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
      * See the License for the specific language governing permissions and
      * limitations under the License.
      */

      /**
      * The result of a lookup for a given path may be an existing document or a
      * marker that this document does not exist at a given version.
      */
      ;
    }

    var lt,
        pt,
        dt = function dt(t, e) {
      this.key = t, this.version = e;
    },
        yt =
    /** @class */
    function (t) {
      function n(e, n, r, i) {
        var o = this;
        return (o = t.call(this, e, n) || this).kt = r, o.At = !!i.At, o.hasCommittedMutations = !!i.hasCommittedMutations, o;
      }

      return e.__extends(n, t), n.prototype.field = function (t) {
        return this.kt.field(t);
      }, n.prototype.data = function () {
        return this.kt;
      }, n.prototype.Lt = function () {
        return this.kt.proto;
      }, n.prototype.isEqual = function (t) {
        return t instanceof n && this.key.isEqual(t.key) && this.version.isEqual(t.version) && this.At === t.At && this.hasCommittedMutations === t.hasCommittedMutations && this.kt.isEqual(t.kt);
      }, n.prototype.toString = function () {
        return "Document(" + this.key + ", " + this.version + ", " + this.kt.toString() + ", {hasLocalMutations: " + this.At + "}), {hasCommittedMutations: " + this.hasCommittedMutations + "})";
      }, Object.defineProperty(n.prototype, "hasPendingWrites", {
        get: function get() {
          return this.At || this.hasCommittedMutations;
        },
        enumerable: !0,
        configurable: !0
      }), n;
    }(dt),
        vt =
    /** @class */
    function (t) {
      function n(e, n, r) {
        var i = this;
        return (i = t.call(this, e, n) || this).hasCommittedMutations = !(!r || !r.hasCommittedMutations), i;
      }

      return e.__extends(n, t), n.prototype.toString = function () {
        return "NoDocument(" + this.key + ", " + this.version + ")";
      }, Object.defineProperty(n.prototype, "hasPendingWrites", {
        get: function get() {
          return this.hasCommittedMutations;
        },
        enumerable: !0,
        configurable: !0
      }), n.prototype.isEqual = function (t) {
        return t instanceof n && t.hasCommittedMutations === this.hasCommittedMutations && t.version.isEqual(this.version) && t.key.isEqual(this.key);
      }, n;
    }(dt),
        gt =
    /** @class */
    function (t) {
      function n() {
        return null !== t && t.apply(this, arguments) || this;
      }

      return e.__extends(n, t), n.prototype.toString = function () {
        return "UnknownDocument(" + this.key + ", " + this.version + ")";
      }, Object.defineProperty(n.prototype, "hasPendingWrites", {
        get: function get() {
          return !0;
        },
        enumerable: !0,
        configurable: !0
      }), n.prototype.isEqual = function (t) {
        return t instanceof n && t.version.isEqual(this.version) && t.key.isEqual(this.key);
      }, n;
    }(dt),
        mt =
    /** @class */
    function () {
      /**
       * Initializes a Target with a path and optional additional query constraints.
       * Path must currently be empty if this is a collection group query.
       *
       * NOTE: you should always construct `Target` from `Query.toTarget` instead of
       * using this constructor, because `Query` provides an implicit `orderBy`
       * property.
       */
      function t(t, e, n, r, i, o, s) {
        void 0 === e && (e = null), void 0 === n && (n = []), void 0 === r && (r = []), void 0 === i && (i = null), void 0 === o && (o = null), void 0 === s && (s = null), this.path = t, this.collectionGroup = e, this.orderBy = n, this.filters = r, this.limit = i, this.startAt = o, this.endAt = s, this.Mt = null;
      }

      return t.prototype.canonicalId = function () {
        if (null === this.Mt) {
          var t = this.path.j();
          null !== this.collectionGroup && (t += "|cg:" + this.collectionGroup), t += "|f:", t += this.filters.map(function (t) {
            return t.canonicalId();
          }).join(","), t += "|ob:", t += this.orderBy.map(function (t) {
            return t.canonicalId();
          }).join(","), k(this.limit) || (t += "|l:", t += this.limit), this.startAt && (t += "|lb:", t += this.startAt.canonicalId()), this.endAt && (t += "|ub:", t += this.endAt.canonicalId()), this.Mt = t;
        }

        return this.Mt;
      }, t.prototype.toString = function () {
        var t = this.path.j();
        return null !== this.collectionGroup && (t += " collectionGroup=" + this.collectionGroup), this.filters.length > 0 && (t += ", filters: [" + this.filters.join(", ") + "]"), k(this.limit) || (t += ", limit: " + this.limit), this.orderBy.length > 0 && (t += ", orderBy: [" + this.orderBy.join(", ") + "]"), this.startAt && (t += ", startAt: " + this.startAt.canonicalId()), this.endAt && (t += ", endAt: " + this.endAt.canonicalId()), "Target(" + t + ")";
      }, t.prototype.isEqual = function (t) {
        if (this.limit !== t.limit) return !1;
        if (this.orderBy.length !== t.orderBy.length) return !1;

        for (var e = 0; e < this.orderBy.length; e++) {
          if (!this.orderBy[e].isEqual(t.orderBy[e])) return !1;
        }

        if (this.filters.length !== t.filters.length) return !1;

        for (var n = 0; n < this.filters.length; n++) {
          if (!this.filters[n].isEqual(t.filters[n])) return !1;
        }

        return this.collectionGroup === t.collectionGroup && !!this.path.isEqual(t.path) && !!(null !== this.startAt ? this.startAt.isEqual(t.startAt) : null === t.startAt) && (null !== this.endAt ? this.endAt.isEqual(t.endAt) : null === t.endAt);
      }, t.prototype.Ot = function () {
        return _.et(this.path) && null === this.collectionGroup && 0 === this.filters.length;
      }, t;
    }(),
        wt =
    /** @class */
    function () {
      /**
       * Initializes a Query with a path and optional additional query constraints.
       * Path must currently be empty if this is a collection group query.
       */
      function t(t, e, n, r, i, o
      /* First */
      , s, u) {
        void 0 === e && (e = null), void 0 === n && (n = []), void 0 === r && (r = []), void 0 === i && (i = null), void 0 === o && (o = "F"), void 0 === s && (s = null), void 0 === u && (u = null), this.path = t, this.collectionGroup = e, this.xt = n, this.filters = r, this.limit = i, this.Bt = o, this.startAt = s, this.endAt = u, this.qt = null, // The corresponding `Target` of this `Query` instance.
        this.Ut = null, this.startAt && this.Qt(this.startAt), this.endAt && this.Qt(this.endAt);
      }

      return t.Wt = function (e) {
        return new t(e);
      }, Object.defineProperty(t.prototype, "orderBy", {
        get: function get() {
          if (null === this.qt) {
            this.qt = [];
            var t = this.jt(),
                e = this.Kt();
            if (null !== t && null === e) // In order to implicitly add key ordering, we must also add the
              // inequality filter field for it to be a valid query.
              // Note that the default inequality field and key ordering is ascending.
              t.Y() || this.qt.push(new kt(t)), this.qt.push(new kt(b.J(), "asc"
              /* ASCENDING */
              ));else {
              for (var n = !1, r = 0, i = this.xt; r < i.length; r++) {
                var o = i[r];
                this.qt.push(o), o.field.Y() && (n = !0);
              }

              if (!n) {
                // The order of the implicit key ordering always matches the last
                // explicit order by
                var s = this.xt.length > 0 ? this.xt[this.xt.length - 1].dir : "asc"
                /* ASCENDING */
                ;
                this.qt.push(new kt(b.J(), s));
              }
            }
          }

          return this.qt;
        },
        enumerable: !0,
        configurable: !0
      }), t.prototype.Gt = function (e) {
        var n = this.filters.concat([e]);
        return new t(this.path, this.collectionGroup, this.xt.slice(), n, this.limit, this.Bt, this.startAt, this.endAt);
      }, t.prototype.zt = function (e) {
        // TODO(dimond): validate that orderBy does not list the same key twice.
        var n = this.xt.concat([e]);
        return new t(this.path, this.collectionGroup, n, this.filters.slice(), this.limit, this.Bt, this.startAt, this.endAt);
      }, t.prototype.Ht = function (e) {
        return new t(this.path, this.collectionGroup, this.xt.slice(), this.filters.slice(), e, "F"
        /* First */
        , this.startAt, this.endAt);
      }, t.prototype.Yt = function (e) {
        return new t(this.path, this.collectionGroup, this.xt.slice(), this.filters.slice(), e, "L"
        /* Last */
        , this.startAt, this.endAt);
      }, t.prototype.Jt = function (e) {
        return new t(this.path, this.collectionGroup, this.xt.slice(), this.filters.slice(), this.limit, this.Bt, e, this.endAt);
      }, t.prototype.Xt = function (e) {
        return new t(this.path, this.collectionGroup, this.xt.slice(), this.filters.slice(), this.limit, this.Bt, this.startAt, e);
      },
      /**
       * Helper to convert a collection group query into a collection query at a
       * specific path. This is used when executing collection group queries, since
       * we have to split the query into a set of collection queries at multiple
       * paths.
       */
      t.prototype.Zt = function (e) {
        return new t(e,
        /*collectionGroup=*/
        null, this.xt.slice(), this.filters.slice(), this.limit, this.Bt, this.startAt, this.endAt);
      },
      /**
       * Returns true if this query does not specify any query constraints that
       * could remove results.
       */
      t.prototype.te = function () {
        return 0 === this.filters.length && null === this.limit && null == this.startAt && null == this.endAt && (0 === this.xt.length || 1 === this.xt.length && this.xt[0].field.Y());
      }, // TODO(b/29183165): This is used to get a unique string from a query to, for
      // example, use as a dictionary key, but the implementation is subject to
      // collisions. Make it collision-free.
      t.prototype.canonicalId = function () {
        return this.ee().canonicalId() + "|lt:" + this.Bt;
      }, t.prototype.toString = function () {
        return "Query(target=" + this.ee().toString() + "; limitType=" + this.Bt + ")";
      }, t.prototype.isEqual = function (t) {
        return this.ee().isEqual(t.ee()) && this.Bt === t.Bt;
      }, t.prototype.se = function (t, e) {
        for (var n = !1, r = 0, i = this.orderBy; r < i.length; r++) {
          var o = i[r],
              s = o.compare(t, e);
          if (0 !== s) return s;
          n = n || o.field.Y();
        }

        return 0;
      }, t.prototype.matches = function (t) {
        return this.ie(t) && this.ne(t) && this.re(t) && this.he(t);
      }, t.prototype.oe = function () {
        return !k(this.limit) && "F"
        /* First */
        === this.Bt;
      }, t.prototype.ae = function () {
        return !k(this.limit) && "L"
        /* Last */
        === this.Bt;
      }, t.prototype.Kt = function () {
        return this.xt.length > 0 ? this.xt[0].field : null;
      }, t.prototype.jt = function () {
        for (var t = 0, e = this.filters; t < e.length; t++) {
          var n = e[t];
          if (n instanceof Et && n.ue()) return n.field;
        }

        return null;
      }, // Checks if any of the provided Operators are included in the query and
      // returns the first one that is, or null if none are.
      t.prototype.ce = function (t) {
        for (var e = 0, n = this.filters; e < n.length; e++) {
          var r = n[e];
          if (r instanceof Et && t.indexOf(r.op) >= 0) return r.op;
        }

        return null;
      }, t.prototype.Ot = function () {
        return this.ee().Ot();
      }, t.prototype._e = function () {
        return null !== this.collectionGroup;
      },
      /**
       * Converts this `Query` instance to it's corresponding `Target`
       * representation.
       */
      t.prototype.ee = function () {
        if (!this.Ut) if ("F"
        /* First */
        === this.Bt) this.Ut = new mt(this.path, this.collectionGroup, this.orderBy, this.filters, this.limit, this.startAt, this.endAt);else {
          for ( // Flip the orderBy directions since we want the last results
          var t = [], e = 0, n = this.orderBy; e < n.length; e++) {
            var r = n[e],
                i = "desc"
            /* DESCENDING */
            === r.dir ? "asc"
            /* ASCENDING */
            : "desc"
            /* DESCENDING */
            ;
            t.push(new kt(r.field, i));
          } // We need to swap the cursors to match the now-flipped query ordering.


          var o = this.endAt ? new At(this.endAt.position, !this.endAt.before) : null,
              s = this.startAt ? new At(this.startAt.position, !this.startAt.before) : null; // Now return as a LimitType.First query.

          this.Ut = new mt(this.path, this.collectionGroup, t, this.filters, this.limit, o, s);
        }
        return this.Ut;
      }, t.prototype.ie = function (t) {
        var e = t.key.path;
        return null !== this.collectionGroup ? t.key.tt(this.collectionGroup) && this.path.q(e) : _.et(this.path) ? this.path.isEqual(e) : this.path.U(e);
      },
      /**
       * A document must have a value for every ordering clause in order to show up
       * in the results.
       */
      t.prototype.ne = function (t) {
        for (var e = 0, n = this.xt; e < n.length; e++) {
          var r = n[e]; // order by key always matches

          if (!r.field.Y() && null === t.field(r.field)) return !1;
        }

        return !0;
      }, t.prototype.re = function (t) {
        for (var e = 0, n = this.filters; e < n.length; e++) {
          if (!n[e].matches(t)) return !1;
        }

        return !0;
      },
      /**
       * Makes sure a document is within the bounds, if provided.
       */
      t.prototype.he = function (t) {
        return !(this.startAt && !this.startAt.le(this.orderBy, t) || this.endAt && this.endAt.le(this.orderBy, t));
      }, t.prototype.Qt = function (t) {}, t;
    }(),
        Et =
    /** @class */
    function (t) {
      function n(e, n, r) {
        var i = this;
        return (i = t.call(this) || this).field = e, i.op = n, i.value = r, i;
      }
      /**
       * Creates a filter based on the provided arguments.
       */


      return e.__extends(n, t), n.create = function (t, e, r) {
        if (t.Y()) return "in"
        /* IN */
        === e ? new _t(t, r) : new bt(t, e, r);

        if (W(r)) {
          if ("=="
          /* EQUAL */
          !== e) throw new c(h.INVALID_ARGUMENT, "Invalid query. Null supports only equality comparisons.");
          return new n(t, e, r);
        }

        if (Q(r)) {
          if ("=="
          /* EQUAL */
          !== e) throw new c(h.INVALID_ARGUMENT, "Invalid query. NaN supports only equality comparisons.");
          return new n(t, e, r);
        }

        return "array-contains"
        /* ARRAY_CONTAINS */
        === e ? new Tt(t, r) : "in"
        /* IN */
        === e ? new It(t, r) : "array-contains-any"
        /* ARRAY_CONTAINS_ANY */
        === e ? new Nt(t, r) : new n(t, e, r);
      }, n.prototype.matches = function (t) {
        var e = t.field(this.field); // Only compare types with matching backend order (such as double and int).

        return null !== e && O(this.value) === O(e) && this.de(U(e, this.value));
      }, n.prototype.de = function (t) {
        switch (this.op) {
          case "<"
          /* LESS_THAN */
          :
            return t < 0;

          case "<="
          /* LESS_THAN_OR_EQUAL */
          :
            return t <= 0;

          case "=="
          /* EQUAL */
          :
            return 0 === t;

          case ">"
          /* GREATER_THAN */
          :
            return t > 0;

          case ">="
          /* GREATER_THAN_OR_EQUAL */
          :
            return t >= 0;

          default:
            return ge();
        }
      }, n.prototype.ue = function () {
        return ["<"
        /* LESS_THAN */
        , "<="
        /* LESS_THAN_OR_EQUAL */
        , ">"
        /* GREATER_THAN */
        , ">="
        /* GREATER_THAN_OR_EQUAL */
        ].indexOf(this.op) >= 0;
      }, n.prototype.canonicalId = function () {
        // TODO(b/29183165): Technically, this won't be unique if two values have
        // the same description, such as the int 3 and the string "3". So we should
        // add the types in here somehow, too.
        return this.field.j() + this.op.toString() + q(this.value);
      }, n.prototype.isEqual = function (t) {
        return t instanceof n && this.op === t.op && this.field.isEqual(t.field) && V(this.value, t.value);
      }, n.prototype.toString = function () {
        return this.field.j() + " " + this.op + " " + q(this.value);
      }, n;
    }(function () {}),
        bt =
    /** @class */
    function (t) {
      function n(e, n, r) {
        var i = this;
        return (i = t.call(this, e, n, r) || this).key = _.Z(r.referenceValue), i;
      }

      return e.__extends(n, t), n.prototype.matches = function (t) {
        var e = _.N(t.key, this.key);

        return this.de(e);
      }, n;
    }(Et),
        _t =
    /** @class */
    function (t) {
      function n(e, n) {
        var r = this;
        return (r = t.call(this, e, "in"
        /* IN */
        , n) || this).keys = (n.arrayValue.values || []).map(function (t) {
          return _.Z(t.referenceValue);
        }), r;
      }

      return e.__extends(n, t), n.prototype.matches = function (t) {
        return this.keys.some(function (e) {
          return e.isEqual(t.key);
        });
      }, n;
    }(Et),
        Tt =
    /** @class */
    function (t) {
      function n(e, n) {
        return t.call(this, e, "array-contains"
        /* ARRAY_CONTAINS */
        , n) || this;
      }

      return e.__extends(n, t), n.prototype.matches = function (t) {
        var e = t.field(this.field);
        return G(e) && P(e.arrayValue, this.value);
      }, n;
    }(Et),
        It =
    /** @class */
    function (t) {
      function n(e, n) {
        return t.call(this, e, "in"
        /* IN */
        , n) || this;
      }

      return e.__extends(n, t), n.prototype.matches = function (t) {
        var e = t.field(this.field);
        return null !== e && P(this.value.arrayValue, e);
      }, n;
    }(Et),
        Nt =
    /** @class */
    function (t) {
      function n(e, n) {
        return t.call(this, e, "array-contains-any"
        /* ARRAY_CONTAINS_ANY */
        , n) || this;
      }

      return e.__extends(n, t), n.prototype.matches = function (t) {
        var e = this,
            n = t.field(this.field);
        return !(!G(n) || !n.arrayValue.values) && n.arrayValue.values.some(function (t) {
          return P(e.value.arrayValue, t);
        });
      }, n;
    }(Et),
        At =
    /** @class */
    function () {
      function t(t, e) {
        this.position = t, this.before = e;
      }

      return t.prototype.canonicalId = function () {
        // TODO(b/29183165): Make this collision robust.
        return (this.before ? "b" : "a") + ":" + this.position.map(function (t) {
          return q(t);
        }).join(",");
      },
      /**
       * Returns true if a document sorts before a bound using the provided sort
       * order.
       */
      t.prototype.le = function (t, e) {
        for (var n = 0, r = 0; r < this.position.length; r++) {
          var i = t[r],
              o = this.position[r];
          if (n = i.field.Y() ? _.N(_.Z(o.referenceValue), e.key) : U(o, e.field(i.field)), "desc"
          /* DESCENDING */
          === i.dir && (n *= -1), 0 !== n) break;
        }

        return this.before ? n <= 0 : n < 0;
      }, t.prototype.isEqual = function (t) {
        if (null === t) return !1;
        if (this.before !== t.before || this.position.length !== t.position.length) return !1;

        for (var e = 0; e < this.position.length; e++) {
          if (!V(this.position[e], t.position[e])) return !1;
        }

        return !0;
      }, t;
    }(),
        kt =
    /** @class */
    function () {
      function t(t, e) {
        this.field = t, void 0 === e && (e = "asc"
        /* ASCENDING */
        ), this.dir = e, this.fe = t.Y();
      }

      return t.prototype.compare = function (t, e) {
        var n = this.fe ? _.N(t.key, e.key) : function (t, e, n) {
          var r = e.field(t),
              i = n.field(t);
          return null !== r && null !== i ? U(r, i) : ge();
        }(this.field, t, e);

        switch (this.dir) {
          case "asc"
          /* ASCENDING */
          :
            return n;

          case "desc"
          /* DESCENDING */
          :
            return -1 * n;

          default:
            return ge();
        }
      }, t.prototype.canonicalId = function () {
        // TODO(b/29183165): Make this collision robust.
        return this.field.j() + this.dir.toString();
      }, t.prototype.toString = function () {
        return this.field.j() + " (" + this.dir + ")";
      }, t.prototype.isEqual = function (t) {
        return this.dir === t.dir && this.field.isEqual(t.field);
      }, t;
    }(),
        Dt =
    /** @class */
    function () {
      function t(
      /** The target being listened to. */
      t,
      /**
       * The target ID to which the target corresponds; Assigned by the
       * LocalStore for user listens and by the SyncEngine for limbo watches.
       */
      e,
      /** The purpose of the target. */
      n,
      /**
       * The sequence number of the last transaction during which this target data
       * was modified.
       */
      r,
      /** The latest snapshot version seen for this target. */
      i
      /**
       * The maximum snapshot version at which the associated view
       * contained no limbo documents.
       */
      , o
      /**
       * An opaque, server-assigned token that allows watching a target to be
       * resumed after disconnecting without retransmitting all the data that
       * matches the target. The resume token essentially identifies a point in
       * time from which the server should resume sending results.
       */
      , s) {
        void 0 === i && (i = g.min()), void 0 === o && (o = g.min()), void 0 === s && (s = A.ht), this.target = t, this.targetId = e, this.Te = n, this.sequenceNumber = r, this.Ee = i, this.lastLimboFreeSnapshotVersion = o, this.resumeToken = s;
      }
      /** Creates a new target data instance with an updated sequence number. */


      return t.prototype.Ie = function (e) {
        return new t(this.target, this.targetId, this.Te, e, this.Ee, this.lastLimboFreeSnapshotVersion, this.resumeToken);
      },
      /**
       * Creates a new target data instance with an updated resume token and
       * snapshot version.
       */
      t.prototype.we = function (e, n) {
        return new t(this.target, this.targetId, this.Te, this.sequenceNumber, n, this.lastLimboFreeSnapshotVersion, e);
      },
      /**
       * Creates a new target data instance with an updated last limbo free
       * snapshot version number.
       */
      t.prototype.Re = function (e) {
        return new t(this.target, this.targetId, this.Te, this.sequenceNumber, this.Ee, e, this.resumeToken);
      }, t;
    }(),
        xt = // TODO(b/33078163): just use simplest form of existence filter for now
    function xt(t) {
      this.count = t;
    };
    /**
     * Represents a document in Firestore with a key, version, data and whether the
     * data has local mutations applied to it.
     */

    /**
     * Determines whether an error code represents a permanent error when received
     * in response to a non-write operation.
     *
     * See isPermanentWriteError for classifying write errors.
     */


    function St(t) {
      switch (t) {
        case h.OK:
          return ge();

        case h.CANCELLED:
        case h.UNKNOWN:
        case h.DEADLINE_EXCEEDED:
        case h.RESOURCE_EXHAUSTED:
        case h.INTERNAL:
        case h.UNAVAILABLE: // Unauthenticated means something went wrong with our token and we need
        // to retry with new credentials which will happen automatically.

        case h.UNAUTHENTICATED:
          return !1;

        case h.INVALID_ARGUMENT:
        case h.NOT_FOUND:
        case h.ALREADY_EXISTS:
        case h.PERMISSION_DENIED:
        case h.FAILED_PRECONDITION: // Aborted might be retried in some scenarios, but that is dependant on
        // the context and should handled individually by the calling code.
        // See https://cloud.google.com/apis/design/errors.

        case h.ABORTED:
        case h.OUT_OF_RANGE:
        case h.UNIMPLEMENTED:
        case h.DATA_LOSS:
          return !0;

        default:
          return ge();
      }
    }
    /**
     * Determines whether an error code represents a permanent error when received
     * in response to a write operation.
     *
     * Write operations must be handled specially because as of b/119437764, ABORTED
     * errors on the write stream should be retried too (even though ABORTED errors
     * are not generally retryable).
     *
     * Note that during the initial handshake on the write stream an ABORTED error
     * signals that we should discard our stream token (i.e. it is permanent). This
     * means a handshake error should be classified with isPermanentError, above.
     */

    /**
     * Maps an error Code from GRPC status code number, like 0, 1, or 14. These
     * are not the same as HTTP status codes.
     *
     * @returns The Code equivalent to the given GRPC status code. Fails if there
     *     is no match.
     */


    function Rt(t) {
      if (void 0 === t) // This shouldn't normally happen, but in certain error cases (like trying
        // to send invalid proto messages) we may get an error with no GRPC code.
        return ye("GRPC error has no .code"), h.UNKNOWN;

      switch (t) {
        case lt.OK:
          return h.OK;

        case lt.CANCELLED:
          return h.CANCELLED;

        case lt.UNKNOWN:
          return h.UNKNOWN;

        case lt.DEADLINE_EXCEEDED:
          return h.DEADLINE_EXCEEDED;

        case lt.RESOURCE_EXHAUSTED:
          return h.RESOURCE_EXHAUSTED;

        case lt.INTERNAL:
          return h.INTERNAL;

        case lt.UNAVAILABLE:
          return h.UNAVAILABLE;

        case lt.UNAUTHENTICATED:
          return h.UNAUTHENTICATED;

        case lt.INVALID_ARGUMENT:
          return h.INVALID_ARGUMENT;

        case lt.NOT_FOUND:
          return h.NOT_FOUND;

        case lt.ALREADY_EXISTS:
          return h.ALREADY_EXISTS;

        case lt.PERMISSION_DENIED:
          return h.PERMISSION_DENIED;

        case lt.FAILED_PRECONDITION:
          return h.FAILED_PRECONDITION;

        case lt.ABORTED:
          return h.ABORTED;

        case lt.OUT_OF_RANGE:
          return h.OUT_OF_RANGE;

        case lt.UNIMPLEMENTED:
          return h.UNIMPLEMENTED;

        case lt.DATA_LOSS:
          return h.DATA_LOSS;

        default:
          return ge();
      }
    }
    /**
     * Converts an HTTP response's error status to the equivalent error code.
     *
     * @param status An HTTP error response status ("FAILED_PRECONDITION",
     * "UNKNOWN", etc.)
     * @returns The equivalent Code. Non-matching responses are mapped to
     *     Code.UNKNOWN.
     */


    (pt = lt || (lt = {}))[pt.OK = 0] = "OK", pt[pt.CANCELLED = 1] = "CANCELLED", pt[pt.UNKNOWN = 2] = "UNKNOWN", pt[pt.INVALID_ARGUMENT = 3] = "INVALID_ARGUMENT", pt[pt.DEADLINE_EXCEEDED = 4] = "DEADLINE_EXCEEDED", pt[pt.NOT_FOUND = 5] = "NOT_FOUND", pt[pt.ALREADY_EXISTS = 6] = "ALREADY_EXISTS", pt[pt.PERMISSION_DENIED = 7] = "PERMISSION_DENIED", pt[pt.UNAUTHENTICATED = 16] = "UNAUTHENTICATED", pt[pt.RESOURCE_EXHAUSTED = 8] = "RESOURCE_EXHAUSTED", pt[pt.FAILED_PRECONDITION = 9] = "FAILED_PRECONDITION", pt[pt.ABORTED = 10] = "ABORTED", pt[pt.OUT_OF_RANGE = 11] = "OUT_OF_RANGE", pt[pt.UNIMPLEMENTED = 12] = "UNIMPLEMENTED", pt[pt.INTERNAL = 13] = "INTERNAL", pt[pt.UNAVAILABLE = 14] = "UNAVAILABLE", pt[pt.DATA_LOSS = 15] = "DATA_LOSS";
    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    // An immutable sorted map implementation, based on a Left-leaning Red-Black
    // tree.

    var Lt =
    /** @class */
    function () {
      function t(t, e) {
        this.N = t, this.root = e || Vt.EMPTY;
      } // Returns a copy of the map, with the specified key/value added or replaced.


      return t.prototype.Ae = function (e, n) {
        return new t(this.N, this.root.Ae(e, n, this.N).me(null, null, Vt.Pe, null, null));
      }, // Returns a copy of the map, with the specified key removed.
      t.prototype.remove = function (e) {
        return new t(this.N, this.root.remove(e, this.N).me(null, null, Vt.Pe, null, null));
      }, // Returns the value of the node with the given key, or null.
      t.prototype.get = function (t) {
        for (var e = this.root; !e.B();) {
          var n = this.N(t, e.key);
          if (0 === n) return e.value;
          n < 0 ? e = e.left : n > 0 && (e = e.right);
        }

        return null;
      }, // Returns the index of the element in this sorted map, or -1 if it doesn't
      // exist.
      t.prototype.indexOf = function (t) {
        for ( // Number of nodes that were pruned when descending right
        var e = 0, n = this.root; !n.B();) {
          var r = this.N(t, n.key);
          if (0 === r) return e + n.left.size;
          r < 0 ? n = n.left : ( // Count all nodes left of the node plus the node itself
          e += n.left.size + 1, n = n.right);
        } // Node not found


        return -1;
      }, t.prototype.B = function () {
        return this.root.B();
      }, Object.defineProperty(t.prototype, "size", {
        // Returns the total number of nodes in the map.
        get: function get() {
          return this.root.size;
        },
        enumerable: !0,
        configurable: !0
      }), // Returns the minimum key in the map.
      t.prototype.Ve = function () {
        return this.root.Ve();
      }, // Returns the maximum key in the map.
      t.prototype.ge = function () {
        return this.root.ge();
      }, // Traverses the map in key order and calls the specified action function
      // for each key/value pair. If action returns true, traversal is aborted.
      // Returns the first truthy value returned by action, or the last falsey
      // value returned by action.
      t.prototype.pe = function (t) {
        return this.root.pe(t);
      }, t.prototype.forEach = function (t) {
        this.pe(function (e, n) {
          return t(e, n), !1;
        });
      }, t.prototype.toString = function () {
        var t = [];
        return this.pe(function (e, n) {
          return t.push(e + ":" + n), !1;
        }), "{" + t.join(", ") + "}";
      }, // Traverses the map in reverse key order and calls the specified action
      // function for each key/value pair. If action returns true, traversal is
      // aborted.
      // Returns the first truthy value returned by action, or the last falsey
      // value returned by action.
      t.prototype.ye = function (t) {
        return this.root.ye(t);
      }, // Returns an iterator over the SortedMap.
      t.prototype.be = function () {
        return new Ot(this.root, null, this.N, !1);
      }, t.prototype.ve = function (t) {
        return new Ot(this.root, t, this.N, !1);
      }, t.prototype.Se = function () {
        return new Ot(this.root, null, this.N, !0);
      }, t.prototype.De = function (t) {
        return new Ot(this.root, t, this.N, !0);
      }, t;
    }(),
        Ot =
    /** @class */
    function () {
      function t(t, e, n, r) {
        this.Ce = r, this.Fe = [];

        for (var i = 1; !t.B();) {
          if (i = e ? n(t.key, e) : 1, // flip the comparison if we're going in reverse
          r && (i *= -1), i < 0) // This node is less than our start key. ignore it
            t = this.Ce ? t.left : t.right;else {
            if (0 === i) {
              // This node is exactly equal to our start key. Push it on the stack,
              // but stop iterating;
              this.Fe.push(t);
              break;
            } // This node is greater than our start key, add it to the stack and move
            // to the next one


            this.Fe.push(t), t = this.Ce ? t.right : t.left;
          }
        }
      }

      return t.prototype.Ne = function () {
        var t = this.Fe.pop(),
            e = {
          key: t.key,
          value: t.value
        };
        if (this.Ce) for (t = t.left; !t.B();) {
          this.Fe.push(t), t = t.right;
        } else for (t = t.right; !t.B();) {
          this.Fe.push(t), t = t.left;
        }
        return e;
      }, t.prototype.$e = function () {
        return this.Fe.length > 0;
      }, t.prototype.ke = function () {
        if (0 === this.Fe.length) return null;
        var t = this.Fe[this.Fe.length - 1];
        return {
          key: t.key,
          value: t.value
        };
      }, t;
    }(),
        Vt =
    /** @class */
    function () {
      function t(e, n, r, i, o) {
        this.key = e, this.value = n, this.color = null != r ? r : t.RED, this.left = null != i ? i : t.EMPTY, this.right = null != o ? o : t.EMPTY, this.size = this.left.size + 1 + this.right.size;
      } // Returns a copy of the current node, optionally replacing pieces of it.


      return t.prototype.me = function (e, n, r, i, o) {
        return new t(null != e ? e : this.key, null != n ? n : this.value, null != r ? r : this.color, null != i ? i : this.left, null != o ? o : this.right);
      }, t.prototype.B = function () {
        return !1;
      }, // Traverses the tree in key order and calls the specified action function
      // for each node. If action returns true, traversal is aborted.
      // Returns the first truthy value returned by action, or the last falsey
      // value returned by action.
      t.prototype.pe = function (t) {
        return this.left.pe(t) || t(this.key, this.value) || this.right.pe(t);
      }, // Traverses the tree in reverse key order and calls the specified action
      // function for each node. If action returns true, traversal is aborted.
      // Returns the first truthy value returned by action, or the last falsey
      // value returned by action.
      t.prototype.ye = function (t) {
        return this.right.ye(t) || t(this.key, this.value) || this.left.ye(t);
      }, // Returns the minimum node in the tree.
      t.prototype.min = function () {
        return this.left.B() ? this : this.left.min();
      }, // Returns the maximum key in the tree.
      t.prototype.Ve = function () {
        return this.min().key;
      }, // Returns the maximum key in the tree.
      t.prototype.ge = function () {
        return this.right.B() ? this.key : this.right.ge();
      }, // Returns new tree, with the key/value added.
      t.prototype.Ae = function (t, e, n) {
        var r = this,
            i = n(t, r.key);
        return (r = i < 0 ? r.me(null, null, null, r.left.Ae(t, e, n), null) : 0 === i ? r.me(null, e, null, null, null) : r.me(null, null, null, null, r.right.Ae(t, e, n))).Le();
      }, t.prototype.Me = function () {
        if (this.left.B()) return t.EMPTY;
        var e = this;
        return e.left.Oe() || e.left.left.Oe() || (e = e.xe()), (e = e.me(null, null, null, e.left.Me(), null)).Le();
      }, // Returns new tree, with the specified item removed.
      t.prototype.remove = function (e, n) {
        var r,
            i = this;
        if (n(e, i.key) < 0) i.left.B() || i.left.Oe() || i.left.left.Oe() || (i = i.xe()), i = i.me(null, null, null, i.left.remove(e, n), null);else {
          if (i.left.Oe() && (i = i.Be()), i.right.B() || i.right.Oe() || i.right.left.Oe() || (i = i.qe()), 0 === n(e, i.key)) {
            if (i.right.B()) return t.EMPTY;
            r = i.right.min(), i = i.me(r.key, r.value, null, null, i.right.Me());
          }

          i = i.me(null, null, null, null, i.right.remove(e, n));
        }
        return i.Le();
      }, t.prototype.Oe = function () {
        return this.color;
      }, // Returns new tree after performing any needed rotations.
      t.prototype.Le = function () {
        var t = this;
        return t.right.Oe() && !t.left.Oe() && (t = t.Ue()), t.left.Oe() && t.left.left.Oe() && (t = t.Be()), t.left.Oe() && t.right.Oe() && (t = t.Qe()), t;
      }, t.prototype.xe = function () {
        var t = this.Qe();
        return t.right.left.Oe() && (t = (t = (t = t.me(null, null, null, null, t.right.Be())).Ue()).Qe()), t;
      }, t.prototype.qe = function () {
        var t = this.Qe();
        return t.left.left.Oe() && (t = (t = t.Be()).Qe()), t;
      }, t.prototype.Ue = function () {
        var e = this.me(null, null, t.RED, null, this.right.left);
        return this.right.me(null, null, this.color, e, null);
      }, t.prototype.Be = function () {
        var e = this.me(null, null, t.RED, this.left.right, null);
        return this.left.me(null, null, this.color, null, e);
      }, t.prototype.Qe = function () {
        var t = this.left.me(null, null, !this.left.color, null, null),
            e = this.right.me(null, null, !this.right.color, null, null);
        return this.me(null, null, !this.color, t, e);
      }, // For testing.
      t.prototype.We = function () {
        var t = this.je();
        return Math.pow(2, t) <= this.size + 1;
      }, // In a balanced RB tree, the black-depth (number of black nodes) from root to
      // leaves is equal on both sides.  This function verifies that or asserts.
      t.prototype.je = function () {
        if (this.Oe() && this.left.Oe()) throw ge();
        if (this.right.Oe()) throw ge();
        var t = this.left.je();
        if (t !== this.right.je()) throw ge();
        return t + (this.Oe() ? 0 : 1);
      }, t;
    }(); // end SortedMap
    // An iterator over an LLRBNode.
    // end LLRBNode
    // Empty node is shared between all LLRB trees.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any


    Vt.EMPTY = null, Vt.RED = !0, Vt.Pe = !1, // end LLRBEmptyNode
    Vt.EMPTY = new (
    /** @class */
    function () {
      function t() {
        this.size = 0;
      }

      return Object.defineProperty(t.prototype, "key", {
        get: function get() {
          throw ge();
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(t.prototype, "value", {
        get: function get() {
          throw ge();
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(t.prototype, "color", {
        get: function get() {
          throw ge();
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(t.prototype, "left", {
        get: function get() {
          throw ge();
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(t.prototype, "right", {
        get: function get() {
          throw ge();
        },
        enumerable: !0,
        configurable: !0
      }), // Returns a copy of the current node.
      t.prototype.me = function (t, e, n, r, i) {
        return this;
      }, // Returns a copy of the tree, with the specified key/value added.
      t.prototype.Ae = function (t, e, n) {
        return new Vt(t, e);
      }, // Returns a copy of the tree, with the specified key removed.
      t.prototype.remove = function (t, e) {
        return this;
      }, t.prototype.B = function () {
        return !0;
      }, t.prototype.pe = function (t) {
        return !1;
      }, t.prototype.ye = function (t) {
        return !1;
      }, t.prototype.Ve = function () {
        return null;
      }, t.prototype.ge = function () {
        return null;
      }, t.prototype.Oe = function () {
        return !1;
      }, // For testing.
      t.prototype.We = function () {
        return !0;
      }, t.prototype.je = function () {
        return 0;
      }, t;
    }())();
    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /**
     * SortedSet is an immutable (copy-on-write) collection that holds elements
     * in order specified by the provided comparator.
     *
     * NOTE: if provided comparator returns 0 for two elements, we consider them to
     * be equal!
     */

    var Pt =
    /** @class */
    function () {
      function t(t) {
        this.N = t, this.data = new Lt(this.N);
      }

      return t.prototype.has = function (t) {
        return null !== this.data.get(t);
      }, t.prototype.first = function () {
        return this.data.Ve();
      }, t.prototype.last = function () {
        return this.data.ge();
      }, Object.defineProperty(t.prototype, "size", {
        get: function get() {
          return this.data.size;
        },
        enumerable: !0,
        configurable: !0
      }), t.prototype.indexOf = function (t) {
        return this.data.indexOf(t);
      },
      /** Iterates elements in order defined by "comparator" */
      t.prototype.forEach = function (t) {
        this.data.pe(function (e, n) {
          return t(e), !1;
        });
      },
      /** Iterates over `elem`s such that: range[0] <= elem < range[1]. */
      t.prototype.Ke = function (t, e) {
        for (var n = this.data.ve(t[0]); n.$e();) {
          var r = n.Ne();
          if (this.N(r.key, t[1]) >= 0) return;
          e(r.key);
        }
      },
      /**
       * Iterates over `elem`s such that: start <= elem until false is returned.
       */
      t.prototype.Ge = function (t, e) {
        var n;

        for (n = void 0 !== e ? this.data.ve(e) : this.data.be(); n.$e();) {
          if (!t(n.Ne().key)) return;
        }
      },
      /** Finds the least element greater than or equal to `elem`. */
      t.prototype.ze = function (t) {
        var e = this.data.ve(t);
        return e.$e() ? e.Ne().key : null;
      }, t.prototype.be = function () {
        return new Ut(this.data.be());
      }, t.prototype.ve = function (t) {
        return new Ut(this.data.ve(t));
      },
      /** Inserts or updates an element */
      t.prototype.add = function (t) {
        return this.me(this.data.remove(t).Ae(t, !0));
      },
      /** Deletes an element */
      t.prototype["delete"] = function (t) {
        return this.has(t) ? this.me(this.data.remove(t)) : this;
      }, t.prototype.B = function () {
        return this.data.B();
      }, t.prototype.He = function (t) {
        var e = this; // Make sure `result` always refers to the larger one of the two sets.

        return e.size < t.size && (e = t, t = this), t.forEach(function (t) {
          e = e.add(t);
        }), e;
      }, t.prototype.isEqual = function (e) {
        if (!(e instanceof t)) return !1;
        if (this.size !== e.size) return !1;

        for (var n = this.data.be(), r = e.data.be(); n.$e();) {
          var i = n.Ne().key,
              o = r.Ne().key;
          if (0 !== this.N(i, o)) return !1;
        }

        return !0;
      }, t.prototype.W = function () {
        var t = [];
        return this.forEach(function (e) {
          t.push(e);
        }), t;
      }, t.prototype.toString = function () {
        var t = [];
        return this.forEach(function (e) {
          return t.push(e);
        }), "SortedSet(" + t.toString() + ")";
      }, t.prototype.me = function (e) {
        var n = new t(this.N);
        return n.data = e, n;
      }, t;
    }(),
        Ut =
    /** @class */
    function () {
      function t(t) {
        this.Ye = t;
      }

      return t.prototype.Ne = function () {
        return this.Ye.Ne().key;
      }, t.prototype.$e = function () {
        return this.Ye.$e();
      }, t;
    }(),
        Ct = new Lt(_.N);

    function qt() {
      return Ct;
    }

    function Mt() {
      return qt();
    }

    var jt = new Lt(_.N);

    function Ft() {
      return jt;
    }

    var Bt = new Lt(_.N);

    function zt() {
      return Bt;
    }

    var Gt = new Pt(_.N);

    function Wt() {
      for (var t = [], e = 0; e < arguments.length; e++) {
        t[e] = arguments[e];
      }

      for (var n = Gt, r = 0, i = t; r < i.length; r++) {
        var o = i[r];
        n = n.add(o);
      }

      return n;
    }

    var Qt = new Pt(be);

    function Kt() {
      return Qt;
    }
    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /**
     * DocumentSet is an immutable (copy-on-write) collection that holds documents
     * in order specified by the provided comparator. We always add a document key
     * comparator on top of what is provided to guarantee document equality based on
     * the key.
     */


    var Yt =
    /** @class */
    function () {
      /** The default ordering is by key if the comparator is omitted */
      function t(t) {
        // We are adding document key comparator to the end as it's the only
        // guaranteed unique property of a document.
        this.N = t ? function (e, n) {
          return t(e, n) || _.N(e.key, n.key);
        } : function (t, e) {
          return _.N(t.key, e.key);
        }, this.Je = Ft(), this.Xe = new Lt(this.N)
        /**
        * Returns an empty copy of the existing DocumentSet, using the same
        * comparator.
        */
        ;
      }

      return t.Ze = function (e) {
        return new t(e.N);
      }, t.prototype.has = function (t) {
        return null != this.Je.get(t);
      }, t.prototype.get = function (t) {
        return this.Je.get(t);
      }, t.prototype.first = function () {
        return this.Xe.Ve();
      }, t.prototype.last = function () {
        return this.Xe.ge();
      }, t.prototype.B = function () {
        return this.Xe.B();
      },
      /**
       * Returns the index of the provided key in the document set, or -1 if the
       * document key is not present in the set;
       */
      t.prototype.indexOf = function (t) {
        var e = this.Je.get(t);
        return e ? this.Xe.indexOf(e) : -1;
      }, Object.defineProperty(t.prototype, "size", {
        get: function get() {
          return this.Xe.size;
        },
        enumerable: !0,
        configurable: !0
      }),
      /** Iterates documents in order defined by "comparator" */
      t.prototype.forEach = function (t) {
        this.Xe.pe(function (e, n) {
          return t(e), !1;
        });
      },
      /** Inserts or updates a document with the same key */
      t.prototype.add = function (t) {
        // First remove the element if we have it.
        var e = this["delete"](t.key);
        return e.me(e.Je.Ae(t.key, t), e.Xe.Ae(t, null));
      },
      /** Deletes a document with a given key */
      t.prototype["delete"] = function (t) {
        var e = this.get(t);
        return e ? this.me(this.Je.remove(t), this.Xe.remove(e)) : this;
      }, t.prototype.isEqual = function (e) {
        if (!(e instanceof t)) return !1;
        if (this.size !== e.size) return !1;

        for (var n = this.Xe.be(), r = e.Xe.be(); n.$e();) {
          var i = n.Ne().key,
              o = r.Ne().key;
          if (!i.isEqual(o)) return !1;
        }

        return !0;
      }, t.prototype.toString = function () {
        var t = [];
        return this.forEach(function (e) {
          t.push(e.toString());
        }), 0 === t.length ? "DocumentSet ()" : "DocumentSet (\n  " + t.join("  \n") + "\n)";
      }, t.prototype.me = function (e, n) {
        var r = new t();
        return r.N = this.N, r.Je = e, r.Xe = n, r;
      }, t;
    }(),
        $t =
    /** @class */
    function () {
      function t() {
        this.ts = new Lt(_.N);
      }

      return t.prototype.track = function (t) {
        var e = t.doc.key,
            n = this.ts.get(e);
        n ? // Merge the new change with the existing change.
        0
        /* Added */
        !== t.type && 3
        /* Metadata */
        === n.type ? this.ts = this.ts.Ae(e, t) : 3
        /* Metadata */
        === t.type && 1
        /* Removed */
        !== n.type ? this.ts = this.ts.Ae(e, {
          type: n.type,
          doc: t.doc
        }) : 2
        /* Modified */
        === t.type && 2
        /* Modified */
        === n.type ? this.ts = this.ts.Ae(e, {
          type: 2
          /* Modified */
          ,
          doc: t.doc
        }) : 2
        /* Modified */
        === t.type && 0
        /* Added */
        === n.type ? this.ts = this.ts.Ae(e, {
          type: 0
          /* Added */
          ,
          doc: t.doc
        }) : 1
        /* Removed */
        === t.type && 0
        /* Added */
        === n.type ? this.ts = this.ts.remove(e) : 1
        /* Removed */
        === t.type && 2
        /* Modified */
        === n.type ? this.ts = this.ts.Ae(e, {
          type: 1
          /* Removed */
          ,
          doc: n.doc
        }) : 0
        /* Added */
        === t.type && 1
        /* Removed */
        === n.type ? this.ts = this.ts.Ae(e, {
          type: 2
          /* Modified */
          ,
          doc: t.doc
        }) : // This includes these cases, which don't make sense:
        // Added->Added
        // Removed->Removed
        // Modified->Added
        // Removed->Modified
        // Metadata->Added
        // Removed->Metadata
        ge() : this.ts = this.ts.Ae(e, t);
      }, t.prototype.es = function () {
        var t = [];
        return this.ts.pe(function (e, n) {
          t.push(n);
        }), t;
      }, t;
    }(),
        Jt =
    /** @class */
    function () {
      function t(t, e, n, r, i, o, s, u) {
        this.query = t, this.docs = e, this.ss = n, this.docChanges = r, this.ns = i, this.fromCache = o, this.rs = s, this.hs = u
        /** Returns a view snapshot as if all documents in the snapshot were added. */
        ;
      }

      return t.os = function (e, n, r, i) {
        var o = [];
        return n.forEach(function (t) {
          o.push({
            type: 0
            /* Added */
            ,
            doc: t
          });
        }), new t(e, n, Yt.Ze(n), o, r, i,
        /* syncStateChanged= */
        !0,
        /* excludesMetadataChanges= */
        !1);
      }, Object.defineProperty(t.prototype, "hasPendingWrites", {
        get: function get() {
          return !this.ns.B();
        },
        enumerable: !0,
        configurable: !0
      }), t.prototype.isEqual = function (t) {
        if (!(this.fromCache === t.fromCache && this.rs === t.rs && this.ns.isEqual(t.ns) && this.query.isEqual(t.query) && this.docs.isEqual(t.docs) && this.ss.isEqual(t.ss))) return !1;
        var e = this.docChanges,
            n = t.docChanges;
        if (e.length !== n.length) return !1;

        for (var r = 0; r < e.length; r++) {
          if (e[r].type !== n[r].type || !e[r].doc.isEqual(n[r].doc)) return !1;
        }

        return !0;
      }, t;
    }(),
        Ht =
    /** @class */
    function () {
      function t(
      /**
       * The snapshot version this event brings us up to, or MIN if not set.
       */
      t,
      /**
       * A map from target to changes to the target. See TargetChange.
       */
      e,
      /**
       * A set of targets that is known to be inconsistent. Listens for these
       * targets should be re-established without resume tokens.
       */
      n,
      /**
       * A set of which documents have changed or been deleted, along with the
       * doc's new values (if not deleted).
       */
      r,
      /**
       * A set of which document updates are due only to limbo resolution targets.
       */
      i) {
        this.Ee = t, this.as = e, this.us = n, this.cs = r, this._s = i;
      }
      /**
       * HACK: Views require RemoteEvents in order to determine whether the view is
       * CURRENT, but secondary tabs don't receive remote events. So this method is
       * used to create a synthesized RemoteEvent that can be used to apply a
       * CURRENT status change to a View, for queries executed in a different tab.
       */
      // PORTING NOTE: Multi-tab only


      return t.ls = function (e, n) {
        var r = new Map();
        return r.set(e, Xt.ds(e, n)), new t(g.min(), r, Kt(), qt(), Wt());
      }, t;
    }(),
        Xt =
    /** @class */
    function () {
      function t(
      /**
       * An opaque, server-assigned token that allows watching a query to be resumed
       * after disconnecting without retransmitting all the data that matches the
       * query. The resume token essentially identifies a point in time from which
       * the server should resume sending results.
       */
      t,
      /**
       * The "current" (synced) status of this target. Note that "current"
       * has special meaning in the RPC protocol that implies that a target is
       * both up-to-date and consistent with the rest of the watch stream.
       */
      e,
      /**
       * The set of documents that were newly assigned to this target as part of
       * this remote event.
       */
      n,
      /**
       * The set of documents that were already assigned to this target but received
       * an update during this remote event.
       */
      r,
      /**
       * The set of documents that were removed from this target as part of this
       * remote event.
       */
      i) {
        this.resumeToken = t, this.fs = e, this.Ts = n, this.Es = r, this.Is = i
        /**
        * This method is used to create a synthesized TargetChanges that can be used to
        * apply a CURRENT status change to a View (for queries executed in a different
        * tab) or for new queries (to raise snapshots with correct CURRENT status).
        */
        ;
      }

      return t.ds = function (e, n) {
        return new t(A.ht, n, Wt(), Wt(), Wt());
      }, t;
    }(),
        Zt = function Zt(
    /** The new document applies to all of these targets. */
    t,
    /** The new document is removed from all of these targets. */
    e,
    /** The key of the document for this change. */
    n,
    /**
         * The new document or NoDocument if it was deleted. Is null if the
         * document went out of view without the server sending a new document.
         */
    r) {
      this.ws = t, this.removedTargetIds = e, this.key = n, this.Rs = r;
    },
        te = function te(t, e) {
      this.targetId = t, this.As = e;
    },
        ee = function ee(
    /** What kind of change occurred to the watch target. */
    t,
    /** The target IDs that were added/removed/set. */
    e,
    /**
         * An opaque, server-assigned token that allows watching a target to be
         * resumed after disconnecting without retransmitting all the data that
         * matches the target. The resume token essentially identifies a point in
         * time from which the server should resume sending results.
         */
    n
    /** An RPC error indicating why the watch failed. */
    , r) {
      void 0 === n && (n = A.ht), void 0 === r && (r = null), this.state = t, this.targetIds = e, this.resumeToken = n, this.cause = r;
    },
        ne =
    /** @class */
    function () {
      function t() {
        /**
         * The number of pending responses (adds or removes) that we are waiting on.
         * We only consider targets active that have no pending responses.
         */
        this.ms = 0,
        /**
             * Keeps track of the document changes since the last raised snapshot.
             *
             * These changes are continuously updated as we receive document updates and
             * always reflect the current set of changes against the last issued snapshot.
             */
        this.Ps = oe(),
        /** See public getters for explanations of these fields. */
        this.Vs = A.ht, this.gs = !1,
        /**
             * Whether this target state should be included in the next snapshot. We
             * initialize to true so that newly-added targets are included in the next
             * RemoteEvent.
             */
        this.ps = !0;
      }

      return Object.defineProperty(t.prototype, "fs", {
        /**
         * Whether this target has been marked 'current'.
         *
         * 'Current' has special meaning in the RPC protocol: It implies that the
         * Watch backend has sent us all changes up to the point at which the target
         * was added and that the target is consistent with the rest of the watch
         * stream.
         */
        get: function get() {
          return this.gs;
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(t.prototype, "resumeToken", {
        /** The last resume token sent to us for this target. */
        get: function get() {
          return this.Vs;
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(t.prototype, "ys", {
        /** Whether this target has pending target adds or target removes. */
        get: function get() {
          return 0 !== this.ms;
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(t.prototype, "bs", {
        /** Whether we have modified any state that should trigger a snapshot. */
        get: function get() {
          return this.ps;
        },
        enumerable: !0,
        configurable: !0
      }),
      /**
       * Applies the resume token to the TargetChange, but only when it has a new
       * value. Empty resumeTokens are discarded.
       */
      t.prototype.vs = function (t) {
        t.rt() > 0 && (this.ps = !0, this.Vs = t);
      },
      /**
       * Creates a target change from the current set of changes.
       *
       * To reset the document changes after raising this snapshot, call
       * `clearPendingChanges()`.
       */
      t.prototype.Ss = function () {
        var t = Wt(),
            e = Wt(),
            n = Wt();
        return this.Ps.forEach(function (r, i) {
          switch (i) {
            case 0
            /* Added */
            :
              t = t.add(r);
              break;

            case 2
            /* Modified */
            :
              e = e.add(r);
              break;

            case 1
            /* Removed */
            :
              n = n.add(r);
              break;

            default:
              ge();
          }
        }), new Xt(this.Vs, this.gs, t, e, n);
      },
      /**
       * Resets the document changes and sets `hasPendingChanges` to false.
       */
      t.prototype.Ds = function () {
        this.ps = !1, this.Ps = oe();
      }, t.prototype.Cs = function (t, e) {
        this.ps = !0, this.Ps = this.Ps.Ae(t, e);
      }, t.prototype.Fs = function (t) {
        this.ps = !0, this.Ps = this.Ps.remove(t);
      }, t.prototype.Ns = function () {
        this.ms += 1;
      }, t.prototype.$s = function () {
        this.ms -= 1;
      }, t.prototype.ks = function () {
        this.ps = !0, this.gs = !0;
      }, t;
    }(),
        re =
    /** @class */
    function () {
      function t(t) {
        this.Ls = t,
        /** The internal state of all tracked targets. */
        this.Ms = new Map(),
        /** Keeps track of the documents to update since the last raised snapshot. */
        this.Os = qt(),
        /** A mapping of document keys to their set of target IDs. */
        this.xs = ie(),
        /**
             * A list of targets with existence filter mismatches. These targets are
             * known to be inconsistent and their listens needs to be re-established by
             * RemoteStore.
             */
        this.Bs = new Pt(be)
        /**
        * Processes and adds the DocumentWatchChange to the current set of changes.
        */
        ;
      }

      return t.prototype.qs = function (t) {
        for (var e = 0, n = t.ws; e < n.length; e++) {
          var r = n[e];
          t.Rs instanceof yt ? this.Us(r, t.Rs) : t.Rs instanceof vt && this.Qs(r, t.key, t.Rs);
        }

        for (var i = 0, o = t.removedTargetIds; i < o.length; i++) {
          var s = o[i];
          this.Qs(s, t.key, t.Rs);
        }
      },
      /** Processes and adds the WatchTargetChange to the current set of changes. */
      t.prototype.Ws = function (t) {
        var e = this;
        this.js(t, function (n) {
          var r = e.Ks(n);

          switch (t.state) {
            case 0
            /* NoChange */
            :
              e.Gs(n) && r.vs(t.resumeToken);
              break;

            case 1
            /* Added */
            :
              // We need to decrement the number of pending acks needed from watch
              // for this targetId.
              r.$s(), r.ys || // We have a freshly added target, so we need to reset any state
              // that we had previously. This can happen e.g. when remove and add
              // back a target for existence filter mismatches.
              r.Ds(), r.vs(t.resumeToken);
              break;

            case 2
            /* Removed */
            :
              // We need to keep track of removed targets to we can post-filter and
              // remove any target changes.
              // We need to decrement the number of pending acks needed from watch
              // for this targetId.
              r.$s(), r.ys || e.removeTarget(n);
              break;

            case 3
            /* Current */
            :
              e.Gs(n) && (r.ks(), r.vs(t.resumeToken));
              break;

            case 4
            /* Reset */
            :
              e.Gs(n) && ( // Reset the target and synthesizes removes for all existing
              // documents. The backend will re-add any documents that still
              // match the target before it sends the next global snapshot.
              e.zs(n), r.vs(t.resumeToken));
              break;

            default:
              ge();
          }
        });
      },
      /**
       * Iterates over all targetIds that the watch change applies to: either the
       * targetIds explicitly listed in the change or the targetIds of all currently
       * active targets.
       */
      t.prototype.js = function (t, e) {
        var n = this;
        t.targetIds.length > 0 ? t.targetIds.forEach(e) : this.Ms.forEach(function (t, r) {
          n.Gs(r) && e(r);
        });
      },
      /**
       * Handles existence filters and synthesizes deletes for filter mismatches.
       * Targets that are invalidated by filter mismatches are added to
       * `pendingTargetResets`.
       */
      t.prototype.Hs = function (t) {
        var e = t.targetId,
            n = t.As.count,
            r = this.Ys(e);

        if (r) {
          var i = r.target;
          if (i.Ot()) {
            if (0 === n) {
              // The existence filter told us the document does not exist. We deduce
              // that this document does not exist and apply a deleted document to
              // our updates. Without applying this deleted document there might be
              // another query that will raise this document as part of a snapshot
              // until it is resolved, essentially exposing inconsistency between
              // queries.
              var o = new _(i.path);
              this.Qs(e, o, new vt(o, g.min()));
            } else me(1 === n);
          } else this.Js(e) !== n && ( // Existence filter mismatch: We reset the mapping and raise a new
          // snapshot with `isFromCache:true`.
          this.zs(e), this.Bs = this.Bs.add(e));
        }
      },
      /**
       * Converts the currently accumulated state into a remote event at the
       * provided snapshot version. Resets the accumulated changes before returning.
       */
      t.prototype.Xs = function (t) {
        var e = this,
            n = new Map();
        this.Ms.forEach(function (r, i) {
          var o = e.Ys(i);

          if (o) {
            if (r.fs && o.target.Ot()) {
              // Document queries for document that don't exist can produce an empty
              // result set. To update our local cache, we synthesize a document
              // delete if we have not previously received the document. This
              // resolves the limbo state of the document, removing it from
              // limboDocumentRefs.
              // TODO(dimond): Ideally we would have an explicit lookup target
              // instead resulting in an explicit delete message and we could
              // remove this special logic.
              var s = new _(o.target.path);
              null !== e.Os.get(s) || e.Zs(i, s) || e.Qs(i, s, new vt(s, t));
            }

            r.bs && (n.set(i, r.Ss()), r.Ds());
          }
        });
        var r = Wt(); // We extract the set of limbo-only document updates as the GC logic
        // special-cases documents that do not appear in the target cache.
        // TODO(gsoltis): Expand on this comment once GC is available in the JS
        // client.

        this.xs.forEach(function (t, n) {
          var i = !0;
          n.Ge(function (t) {
            var n = e.Ys(t);
            return !n || 2
            /* LimboResolution */
            === n.Te || (i = !1, !1);
          }), i && (r = r.add(t));
        });
        var i = new Ht(t, n, this.Bs, this.Os, r);
        return this.Os = qt(), this.xs = ie(), this.Bs = new Pt(be), i;
      },
      /**
       * Adds the provided document to the internal list of document updates and
       * its document key to the given target's mapping.
       */
      // Visible for testing.
      t.prototype.Us = function (t, e) {
        if (this.Gs(t)) {
          var n = this.Zs(t, e.key) ? 2
          /* Modified */
          : 0
          /* Added */
          ;
          this.Ks(t).Cs(e.key, n), this.Os = this.Os.Ae(e.key, e), this.xs = this.xs.Ae(e.key, this.ti(e.key).add(t));
        }
      },
      /**
       * Removes the provided document from the target mapping. If the
       * document no longer matches the target, but the document's state is still
       * known (e.g. we know that the document was deleted or we received the change
       * that caused the filter mismatch), the new document can be provided
       * to update the remote document cache.
       */
      // Visible for testing.
      t.prototype.Qs = function (t, e, n) {
        if (this.Gs(t)) {
          var r = this.Ks(t);
          this.Zs(t, e) ? r.Cs(e, 1
          /* Removed */
          ) : // The document may have entered and left the target before we raised a
          // snapshot, so we can just ignore the change.
          r.Fs(e), this.xs = this.xs.Ae(e, this.ti(e)["delete"](t)), n && (this.Os = this.Os.Ae(e, n));
        }
      }, t.prototype.removeTarget = function (t) {
        this.Ms["delete"](t);
      },
      /**
       * Returns the current count of documents in the target. This includes both
       * the number of documents that the LocalStore considers to be part of the
       * target as well as any accumulated changes.
       */
      t.prototype.Js = function (t) {
        var e = this.Ks(t).Ss();
        return this.Ls.ei(t).size + e.Ts.size - e.Is.size;
      },
      /**
       * Increment the number of acks needed from watch before we can consider the
       * server to be 'in-sync' with the client's active targets.
       */
      t.prototype.Ns = function (t) {
        this.Ks(t).Ns();
      }, t.prototype.Ks = function (t) {
        var e = this.Ms.get(t);
        return e || (e = new ne(), this.Ms.set(t, e)), e;
      }, t.prototype.ti = function (t) {
        var e = this.xs.get(t);
        return e || (e = new Pt(be), this.xs = this.xs.Ae(t, e)), e;
      },
      /**
       * Verifies that the user is still interested in this target (by calling
       * `getTargetDataForTarget()`) and that we are not waiting for pending ADDs
       * from watch.
       */
      t.prototype.Gs = function (t) {
        var e = null !== this.Ys(t);
        return e || de("WatchChangeAggregator", "Detected inactive target", t), e;
      },
      /**
       * Returns the TargetData for an active target (i.e. a target that the user
       * is still interested in that has no outstanding target change requests).
       */
      t.prototype.Ys = function (t) {
        var e = this.Ms.get(t);
        return e && e.ys ? null : this.Ls.si(t);
      },
      /**
       * Resets the state of a Watch target to its initial state (e.g. sets
       * 'current' to false, clears the resume token and removes its target mapping
       * from all documents).
       */
      t.prototype.zs = function (t) {
        var e = this;
        this.Ms.set(t, new ne()), this.Ls.ei(t).forEach(function (n) {
          e.Qs(t, n,
          /*updatedDocument=*/
          null);
        });
      },
      /**
       * Returns whether the LocalStore considers the document to be part of the
       * specified target.
       */
      t.prototype.Zs = function (t, e) {
        return this.Ls.ei(t).has(e);
      }, t;
    }();
    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /**
     * DocumentChangeSet keeps track of a set of changes to docs in a query, merging
     * duplicate events for the same doc.
     */


    function ie() {
      return new Lt(_.N);
    }

    function oe() {
      return new Lt(_.N);
    }
    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */


    var se = {
      asc: "ASCENDING",
      desc: "DESCENDING"
    },
        ue = {
      "<": "LESS_THAN",
      "<=": "LESS_THAN_OR_EQUAL",
      ">": "GREATER_THAN",
      ">=": "GREATER_THAN_OR_EQUAL",
      "==": "EQUAL",
      "array-contains": "ARRAY_CONTAINS",
      "in": "IN",
      "array-contains-any": "ARRAY_CONTAINS_ANY"
    },
        ae =
    /** @class */
    function () {
      function t(t, e) {
        this.ii = t, this.options = e;
      }

      return t.prototype.ni = function (t) {
        var e = void 0 === t.code ? h.UNKNOWN : Rt(t.code);
        return new c(e, t.message || "");
      },
      /**
       * Returns a value for a number (or null) that's appropriate to put into
       * a google.protobuf.Int32Value proto.
       * DO NOT USE THIS FOR ANYTHING ELSE.
       * This method cheats. It's typed as returning "number" because that's what
       * our generated proto interfaces say Int32Value must be. But GRPC actually
       * expects a { value: <number> } struct.
       */
      t.prototype.ri = function (t) {
        return this.options.hi || k(t) ? t : {
          value: t
        };
      },
      /**
       * Returns a number (or null) from a google.protobuf.Int32Value proto.
       */
      t.prototype.oi = function (t) {
        var e;
        return k(e = "object" == typeof t ? t.value : t) ? null : e;
      },
      /**
       * Returns an IntegerValue for `value`.
       */
      t.prototype._t = function (t) {
        return {
          integerValue: "" + t
        };
      },
      /**
       * Returns an DoubleValue for `value` that is encoded based the serializer's
       * `useProto3Json` setting.
       */
      t.prototype.lt = function (t) {
        if (this.options.hi) {
          if (isNaN(t)) return {
            doubleValue: "NaN"
          };
          if (t === 1 / 0) return {
            doubleValue: "Infinity"
          };
          if (t === -1 / 0) return {
            doubleValue: "-Infinity"
          };
        }

        return {
          doubleValue: D(t) ? "-0" : t
        };
      },
      /**
       * Returns a value for a number that's appropriate to put into a proto.
       * The return value is an IntegerValue if it can safely represent the value,
       * otherwise a DoubleValue is returned.
       */
      t.prototype.ai = function (t) {
        return x(t) ? this._t(t) : this.lt(t);
      },
      /**
       * Returns a value for a Date that's appropriate to put into a proto.
       */
      t.prototype.C = function (t) {
        return this.options.hi ? new Date(1e3 * t.seconds).toISOString().replace(/\.\d*/, "").replace("Z", "") + "." + ("000000000" + t.nanoseconds).slice(-9) + "Z" : {
          seconds: "" + t.seconds,
          nanos: t.nanoseconds
        };
      }, t.prototype.v = function (t) {
        var e = M(t);
        return new v(e.seconds, e.nanos);
      },
      /**
       * Returns a value for bytes that's appropriate to put in a proto.
       *
       * Visible for testing.
       */
      t.prototype.ui = function (t) {
        return this.options.hi ? t.toBase64() : t.toUint8Array();
      },
      /**
       * Returns a ByteString based on the proto string value.
       */
      t.prototype.ci = function (t) {
        return this.options.hi ? (me(void 0 === t || "string" == typeof t), A.fromBase64String(t || "")) : (me(void 0 === t || t instanceof Uint8Array), A.fromUint8Array(t || new Uint8Array()));
      }, t.prototype.toVersion = function (t) {
        return this.C(t.C());
      }, t.prototype.fromVersion = function (t) {
        return me(!!t), g.v(this.v(t));
      }, t.prototype._i = function (t, e) {
        return this.li(e || this.ii).child("documents").child(t).j();
      }, t.prototype.di = function (t) {
        var e = w.K(t);
        return me(he(e)), e;
      }, t.prototype.fi = function (t) {
        return this._i(t.path);
      }, t.prototype.Z = function (t) {
        var e = this.di(t);
        return me(e.get(1) === this.ii.projectId), me(!e.get(3) && !this.ii.database || e.get(3) === this.ii.database), new _(this.Ti(e));
      }, t.prototype.Ei = function (t) {
        return this._i(t);
      }, t.prototype.Ii = function (t) {
        var e = this.di(t); // In v1beta1 queries for collections at the root did not have a trailing
        // "/documents". In v1 all resource paths contain "/documents". Preserve the
        // ability to read the v1beta1 form for compatibility with queries persisted
        // in the local target cache.

        return 4 === e.length ? w.G : this.Ti(e);
      }, Object.defineProperty(t.prototype, "wi", {
        get: function get() {
          return new w(["projects", this.ii.projectId, "databases", this.ii.database]).j();
        },
        enumerable: !0,
        configurable: !0
      }), t.prototype.li = function (t) {
        return new w(["projects", t.projectId, "databases", t.database]);
      }, t.prototype.Ti = function (t) {
        return me(t.length > 4 && "documents" === t.get(4)), t.k(5);
      },
      /** Creates an api.Document from key and fields (but no create/update time) */
      t.prototype.Ri = function (t, e) {
        return {
          name: this.fi(t),
          fields: e.proto.mapValue.fields
        };
      }, t.prototype.Ai = function (t) {
        return {
          name: this.fi(t.key),
          fields: t.Lt().mapValue.fields,
          updateTime: this.C(t.version.C())
        };
      }, t.prototype.mi = function (t, e) {
        var n = this.Z(t.name),
            r = this.fromVersion(t.updateTime),
            i = new ht({
          mapValue: {
            fields: t.fields
          }
        });
        return new yt(n, r, i, {
          hasCommittedMutations: !!e
        });
      }, t.prototype.Pi = function (t) {
        me(!!t.found), t.found.name, t.found.updateTime;
        var e = this.Z(t.found.name),
            n = this.fromVersion(t.found.updateTime),
            r = new ht({
          mapValue: {
            fields: t.found.fields
          }
        });
        return new yt(e, n, r, {});
      }, t.prototype.Vi = function (t) {
        me(!!t.missing), me(!!t.readTime);
        var e = this.Z(t.missing),
            n = this.fromVersion(t.readTime);
        return new vt(e, n);
      }, t.prototype.gi = function (t) {
        return "found" in t ? this.Pi(t) : "missing" in t ? this.Vi(t) : ge();
      }, t.prototype.pi = function (t) {
        var e;

        if ("targetChange" in t) {
          t.targetChange; // proto3 default value is unset in JSON (undefined), so use 'NO_CHANGE'
          // if unset

          var n = this.yi(t.targetChange.targetChangeType || "NO_CHANGE"),
              r = t.targetChange.targetIds || [],
              i = this.ci(t.targetChange.resumeToken),
              o = t.targetChange.cause,
              s = o && this.ni(o);
          e = new ee(n, r, i, s || null);
        } else if ("documentChange" in t) {
          t.documentChange;
          var u = t.documentChange;
          u.document, u.document.name, u.document.updateTime;
          var a = this.Z(u.document.name),
              h = this.fromVersion(u.document.updateTime),
              c = new ht({
            mapValue: {
              fields: u.document.fields
            }
          }),
              f = new yt(a, h, c, {}),
              l = u.targetIds || [],
              p = u.removedTargetIds || [];
          e = new Zt(l, p, f.key, f);
        } else if ("documentDelete" in t) {
          t.documentDelete;
          var d = t.documentDelete;
          d.document;
          var y = this.Z(d.document),
              v = d.readTime ? this.fromVersion(d.readTime) : g.min(),
              m = new vt(y, v),
              w = d.removedTargetIds || [];
          e = new Zt([], w, m.key, m);
        } else if ("documentRemove" in t) {
          t.documentRemove;
          var E = t.documentRemove;
          E.document;

          var b = this.Z(E.document),
              _ = E.removedTargetIds || [];

          e = new Zt([], _, b, null);
        } else {
          if (!("filter" in t)) return ge();
          t.filter;
          var T = t.filter;
          T.targetId;
          var I = T.count || 0,
              N = new xt(I),
              A = T.targetId;
          e = new te(A, N);
        }

        return e;
      }, t.prototype.yi = function (t) {
        return "NO_CHANGE" === t ? 0
        /* NoChange */
        : "ADD" === t ? 1
        /* Added */
        : "REMOVE" === t ? 2
        /* Removed */
        : "CURRENT" === t ? 3
        /* Current */
        : "RESET" === t ? 4
        /* Reset */
        : ge();
      }, t.prototype.bi = function (t) {
        // We have only reached a consistent snapshot for the entire stream if there
        // is a read_time set and it applies to all targets (i.e. the list of
        // targets is empty). The backend is guaranteed to send such responses.
        if (!("targetChange" in t)) return g.min();
        var e = t.targetChange;
        return e.targetIds && e.targetIds.length ? g.min() : e.readTime ? this.fromVersion(e.readTime) : g.min();
      }, t.prototype.vi = function (t) {
        var e,
            n = this;
        if (t instanceof it) e = {
          update: this.Ri(t.key, t.value)
        };else if (t instanceof ut) e = {
          "delete": this.fi(t.key)
        };else if (t instanceof ot) e = {
          update: this.Ri(t.key, t.data),
          updateMask: this.Si(t.Vt)
        };else if (t instanceof st) e = {
          transform: {
            document: this.fi(t.key),
            fieldTransforms: t.fieldTransforms.map(function (t) {
              return n.Di(t);
            })
          }
        };else {
          if (!(t instanceof at)) return ge();
          e = {
            verify: this.fi(t.key)
          };
        }
        return t.Rt.Tt || (e.currentDocument = this.Ci(t.Rt)), e;
      }, t.prototype.Fi = function (t) {
        var e = this,
            n = t.currentDocument ? this.Ni(t.currentDocument) : nt.ft();

        if (t.update) {
          t.update.name;
          var r = this.Z(t.update.name),
              i = new ht({
            mapValue: {
              fields: t.update.fields
            }
          });

          if (t.updateMask) {
            var o = this.$i(t.updateMask);
            return new ot(r, i, o, n);
          }

          return new it(r, i, n);
        }

        if (t["delete"]) {
          var s = this.Z(t["delete"]);
          return new ut(s, n);
        }

        if (t.transform) {
          var u = this.Z(t.transform.document),
              a = t.transform.fieldTransforms.map(function (t) {
            return e.ki(t);
          });
          return me(!0 === n.exists), new st(u, a);
        }

        if (t.verify) {
          var h = this.Z(t.verify);
          return new at(h, n);
        }

        return ge();
      }, t.prototype.Ci = function (t) {
        return void 0 !== t.updateTime ? {
          updateTime: this.toVersion(t.updateTime)
        } : void 0 !== t.exists ? {
          exists: t.exists
        } : ge();
      }, t.prototype.Ni = function (t) {
        return void 0 !== t.updateTime ? nt.updateTime(this.fromVersion(t.updateTime)) : void 0 !== t.exists ? nt.exists(t.exists) : nt.ft();
      }, t.prototype.Li = function (t, e) {
        // NOTE: Deletes don't have an updateTime.
        var n = t.updateTime ? this.fromVersion(t.updateTime) : this.fromVersion(e);
        n.isEqual(g.min()) && ( // The Firestore Emulator currently returns an update time of 0 for
        // deletes of non-existing documents (rather than null). This breaks the
        // test "get deleted doc while offline with source=cache" as NoDocuments
        // with version 0 are filtered by IndexedDb's RemoteDocumentCache.
        // TODO(#2149): Remove this when Emulator is fixed
        n = this.fromVersion(e));
        var r = null;
        return t.transformResults && t.transformResults.length > 0 && (r = t.transformResults), new et(n, r);
      }, t.prototype.Mi = function (t, e) {
        var n = this;
        return t && t.length > 0 ? (me(void 0 !== e), t.map(function (t) {
          return n.Li(t, e);
        })) : [];
      }, t.prototype.Di = function (t) {
        var e = t.transform;
        if (e instanceof Y) return {
          fieldPath: t.field.j(),
          setToServerValue: "REQUEST_TIME"
        };
        if (e instanceof $) return {
          fieldPath: t.field.j(),
          appendMissingElements: {
            values: e.elements
          }
        };
        if (e instanceof J) return {
          fieldPath: t.field.j(),
          removeAllFromArray: {
            values: e.elements
          }
        };
        if (e instanceof H) return {
          fieldPath: t.field.j(),
          increment: e.ct
        };
        throw ge();
      }, t.prototype.ki = function (t) {
        var e = null;
        if ("setToServerValue" in t) me("REQUEST_TIME" === t.setToServerValue), e = Y.instance;else if ("appendMissingElements" in t) {
          var n = t.appendMissingElements.values || [];
          e = new $(n);
        } else if ("removeAllFromArray" in t) {
          var r = t.removeAllFromArray.values || [];
          e = new J(r);
        } else "increment" in t ? e = new H(this, t.increment) : ge();
        var i = b.X(t.fieldPath);
        return new tt(i, e);
      }, t.prototype.Oi = function (t) {
        return {
          documents: [this.Ei(t.path)]
        };
      }, t.prototype.xi = function (t) {
        me(1 === t.documents.length);
        var e = t.documents[0];
        return wt.Wt(this.Ii(e)).ee();
      }, t.prototype.Bi = function (t) {
        // Dissect the path into parent, collectionId, and optional key filter.
        var e = {
          structuredQuery: {}
        },
            n = t.path;
        null !== t.collectionGroup ? (e.parent = this.Ei(n), e.structuredQuery.from = [{
          collectionId: t.collectionGroup,
          allDescendants: !0
        }]) : (e.parent = this.Ei(n.L()), e.structuredQuery.from = [{
          collectionId: n.O()
        }]);
        var r = this.qi(t.filters);
        r && (e.structuredQuery.where = r);
        var i = this.Ui(t.orderBy);
        i && (e.structuredQuery.orderBy = i);
        var o = this.ri(t.limit);
        return null !== o && (e.structuredQuery.limit = o), t.startAt && (e.structuredQuery.startAt = this.Qi(t.startAt)), t.endAt && (e.structuredQuery.endAt = this.Qi(t.endAt)), e;
      }, t.prototype.Wi = function (t) {
        var e = this.Ii(t.parent),
            n = t.structuredQuery,
            r = n.from ? n.from.length : 0,
            i = null;

        if (r > 0) {
          me(1 === r);
          var o = n.from[0];
          o.allDescendants ? i = o.collectionId : e = e.child(o.collectionId);
        }

        var s = [];
        n.where && (s = this.ji(n.where));
        var u = [];
        n.orderBy && (u = this.Ki(n.orderBy));
        var a = null;
        n.limit && (a = this.oi(n.limit));
        var h = null;
        n.startAt && (h = this.Gi(n.startAt));
        var c = null;
        return n.endAt && (c = this.Gi(n.endAt)), new wt(e, i, u, s, a, "F"
        /* First */
        , h, c).ee();
      }, t.prototype.zi = function (t) {
        var e = this.Hi(t.Te);
        return null == e ? null : {
          "goog-listen-tags": e
        };
      }, t.prototype.Hi = function (t) {
        switch (t) {
          case 0
          /* Listen */
          :
            return null;

          case 1
          /* ExistenceFilterMismatch */
          :
            return "existence-filter-mismatch";

          case 2
          /* LimboResolution */
          :
            return "limbo-document";

          default:
            return ge();
        }
      }, t.prototype.ee = function (t) {
        var e,
            n = t.target;
        return (e = n.Ot() ? {
          documents: this.Oi(n)
        } : {
          query: this.Bi(n)
        }).targetId = t.targetId, t.resumeToken.rt() > 0 && (e.resumeToken = this.ui(t.resumeToken)), e;
      }, t.prototype.qi = function (t) {
        var e = this;

        if (0 !== t.length) {
          var n = t.map(function (t) {
            return t instanceof Et ? e.Yi(t) : ge();
          });
          return 1 === n.length ? n[0] : {
            compositeFilter: {
              op: "AND",
              filters: n
            }
          };
        }
      }, t.prototype.ji = function (t) {
        var e = this;
        return t ? void 0 !== t.unaryFilter ? [this.Ji(t)] : void 0 !== t.fieldFilter ? [this.Xi(t)] : void 0 !== t.compositeFilter ? t.compositeFilter.filters.map(function (t) {
          return e.ji(t);
        }).reduce(function (t, e) {
          return t.concat(e);
        }) : ge() : [];
      }, t.prototype.Ui = function (t) {
        var e = this;
        if (0 !== t.length) return t.map(function (t) {
          return e.Zi(t);
        });
      }, t.prototype.Ki = function (t) {
        var e = this;
        return t.map(function (t) {
          return e.tn(t);
        });
      }, t.prototype.Qi = function (t) {
        return {
          before: t.before,
          values: t.position
        };
      }, t.prototype.Gi = function (t) {
        var e = !!t.before,
            n = t.values || [];
        return new At(n, e);
      }, // visible for testing
      t.prototype.en = function (t) {
        return se[t];
      }, // visible for testing
      t.prototype.sn = function (t) {
        switch (t) {
          case "ASCENDING":
            return "asc"
            /* ASCENDING */
            ;

          case "DESCENDING":
            return "desc"
            /* DESCENDING */
            ;

          default:
            return;
        }
      }, // visible for testing
      t.prototype.nn = function (t) {
        return ue[t];
      }, t.prototype.rn = function (t) {
        switch (t) {
          case "EQUAL":
            return "=="
            /* EQUAL */
            ;

          case "GREATER_THAN":
            return ">"
            /* GREATER_THAN */
            ;

          case "GREATER_THAN_OR_EQUAL":
            return ">="
            /* GREATER_THAN_OR_EQUAL */
            ;

          case "LESS_THAN":
            return "<"
            /* LESS_THAN */
            ;

          case "LESS_THAN_OR_EQUAL":
            return "<="
            /* LESS_THAN_OR_EQUAL */
            ;

          case "ARRAY_CONTAINS":
            return "array-contains"
            /* ARRAY_CONTAINS */
            ;

          case "IN":
            return "in"
            /* IN */
            ;

          case "ARRAY_CONTAINS_ANY":
            return "array-contains-any"
            /* ARRAY_CONTAINS_ANY */
            ;

          case "OPERATOR_UNSPECIFIED":
          default:
            return ge();
        }
      }, t.prototype.hn = function (t) {
        return {
          fieldPath: t.j()
        };
      }, t.prototype.on = function (t) {
        return b.X(t.fieldPath);
      }, // visible for testing
      t.prototype.Zi = function (t) {
        return {
          field: this.hn(t.field),
          direction: this.en(t.dir)
        };
      }, t.prototype.tn = function (t) {
        return new kt(this.on(t.field), this.sn(t.direction));
      }, t.prototype.Xi = function (t) {
        return Et.create(this.on(t.fieldFilter.field), this.rn(t.fieldFilter.op), t.fieldFilter.value);
      }, // visible for testing
      t.prototype.Yi = function (t) {
        if ("=="
        /* EQUAL */
        === t.op) {
          if (Q(t.value)) return {
            unaryFilter: {
              field: this.hn(t.field),
              op: "IS_NAN"
            }
          };
          if (W(t.value)) return {
            unaryFilter: {
              field: this.hn(t.field),
              op: "IS_NULL"
            }
          };
        }

        return {
          fieldFilter: {
            field: this.hn(t.field),
            op: this.nn(t.op),
            value: t.value
          }
        };
      }, t.prototype.Ji = function (t) {
        switch (t.unaryFilter.op) {
          case "IS_NAN":
            var e = this.on(t.unaryFilter.field);
            return Et.create(e, "=="
            /* EQUAL */
            , {
              doubleValue: NaN
            });

          case "IS_NULL":
            var n = this.on(t.unaryFilter.field);
            return Et.create(n, "=="
            /* EQUAL */
            , {
              nullValue: "NULL_VALUE"
            });

          case "OPERATOR_UNSPECIFIED":
          default:
            return ge();
        }
      }, t.prototype.Si = function (t) {
        var e = [];
        return t.fields.forEach(function (t) {
          return e.push(t.j());
        }), {
          fieldPaths: e
        };
      }, t.prototype.$i = function (t) {
        var e = t.fieldPaths || [];
        return new Z(e.map(function (t) {
          return b.X(t);
        }));
      }, t;
    }();
    /**
     * Generates JsonObject values for the Datastore API suitable for sending to
     * either GRPC stub methods or via the JSON/HTTP REST API.
     * TODO(klimt): We can remove the databaseId argument if we keep the full
     * resource name in documents.
     */


    function he(t) {
      // Resource names have at least 4 components (project ID, database ID)
      return t.length >= 4 && "projects" === t.get(0) && "databases" === t.get(2);
    }
    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /**
     * Provides singleton helpers where setup code can inject a platform at runtime.
     * setPlatform needs to be set before Firestore is used and must be set exactly
     * once.
     */


    var ce =
    /** @class */
    function () {
      function t() {}

      return t.an = function (e) {
        t.platform && ge(), t.platform = e;
      }, t.nt = function () {
        return t.platform || ge(), t.platform;
      }, t;
    }(),
        fe = new r.Logger("@firebase/firestore");
    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    // Helper methods are needed because variables can't be exported as read/write


    function le() {
      return fe.logLevel;
    }

    function pe(t) {
      fe.logLevel = t;
    }

    function de(t) {
      for (var n = [], i = 1; i < arguments.length; i++) {
        n[i - 1] = arguments[i];
      }

      if (fe.logLevel <= r.LogLevel.DEBUG) {
        var o = n.map(ve);
        fe.debug.apply(fe, e.__spreadArrays(["Firestore (" + u + "): " + t], o));
      }
    }

    function ye(t) {
      for (var n = [], i = 1; i < arguments.length; i++) {
        n[i - 1] = arguments[i];
      }

      if (fe.logLevel <= r.LogLevel.ERROR) {
        var o = n.map(ve);
        fe.error.apply(fe, e.__spreadArrays(["Firestore (" + u + "): " + t], o));
      }
    }
    /**
     * Converts an additional log parameter to a string representation.
     */


    function ve(t) {
      if ("string" == typeof t) return t;
      var e = ce.nt();

      try {
        return e.un(t);
      } catch (e) {
        // Converting to JSON failed, just log the object directly
        return t;
      }
    }
    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /**
     * Unconditionally fails, throwing an Error with the given message.
     * Messages are stripped in production builds.
     *
     * Returns `never` and can be used in expressions:
     * @example
     * let futureVar = fail('not implemented yet');
     */


    function ge(t) {
      void 0 === t && (t = "Unexpected state"); // Log the failure in addition to throw an exception, just in case the
      // exception is swallowed.

      var e = "FIRESTORE (" + u + ") INTERNAL ASSERTION FAILED: " + t; // NOTE: We don't use FirestoreError here because these are internal failures
      // that cannot be handled by the user. (Also it would create a circular
      // dependency between the error and assert modules which doesn't work.)

      throw ye(e), new Error(e)
      /**
      * Fails if the given assertion condition is false, throwing an Error with the
      * given message if it did.
      *
      * Messages are stripped in production builds.
      */
      ;
    }

    function me(t, e) {
      t || ge();
    }
    /**
     * Casts `obj` to `T`. In non-production builds, verifies that `obj` is an
     * instance of `T` before casting.
     */


    function we(t, // eslint-disable-next-line @typescript-eslint/no-explicit-any
    e) {
      return t;
    }
    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */


    var Ee =
    /** @class */
    function () {
      function t() {}

      return t.cn = function () {
        for ( // Alphanumeric characters
        var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", e = Math.floor(256 / t.length) * t.length, n = "" // The largest byte value that is a multiple of `char.length`.
        ; n.length < 20;) {
          for (var r = ce.nt()._n(40), i = 0; i < r.length; ++i) {
            // Only accept values that are [0, maxMultiple), this ensures they can
            // be evenly mapped to indices of `chars` via a modulo operation.
            n.length < 20 && r[i] < e && (n += t.charAt(r[i] % t.length));
          }
        }

        return n;
      }, t;
    }();

    function be(t, e) {
      return t < e ? -1 : t > e ? 1 : 0;
    }
    /** Helper to compare arrays using isEqual(). */


    function _e(t, e, n) {
      return t.length === e.length && t.every(function (t, r) {
        return n(t, e[r]);
      });
    }
    /**
     * Returns the immediate lexicographically-following string. This is useful to
     * construct an inclusive range for indexeddb iterators.
     */


    function Te(t) {
      // Return the input string, with an additional NUL byte appended.
      return t + "\0";
    }
    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */


    var Ie =
    /**
         * Constructs a DatabaseInfo using the provided host, databaseId and
         * persistenceKey.
         *
         * @param databaseId The database to use.
         * @param persistenceKey A unique identifier for this Firestore's local
         * storage (used in conjunction with the databaseId).
         * @param host The Firestore backend host to connect to.
         * @param ssl Whether to use SSL when connecting.
         * @param forceLongPolling Whether to use the forceLongPolling option
         * when using WebChannel as the network transport.
         */
    function Ie(t, e, n, r, i) {
      this.ii = t, this.persistenceKey = e, this.host = n, this.ssl = r, this.forceLongPolling = i;
    },
        Ne =
    /** @class */
    function () {
      function t(t, e) {
        this.projectId = t, this.database = e || "(default)";
      }

      return Object.defineProperty(t.prototype, "ln", {
        get: function get() {
          return "(default)" === this.database;
        },
        enumerable: !0,
        configurable: !0
      }), t.prototype.isEqual = function (e) {
        return e instanceof t && e.projectId === this.projectId && e.database === this.database;
      }, t.prototype.S = function (t) {
        return be(this.projectId, t.projectId) || be(this.database, t.database);
      }, t;
    }(),
        Ae =
    /** @class */
    function () {
      function t(t) {
        this.dn = t,
        /**
             * The inner map for a key -> value pair. Due to the possibility of
             * collisions we keep a list of entries that we do a linear search through
             * to find an actual match. Note that collisions should be rare, so we still
             * expect near constant time lookups in practice.
             */
        this.fn = {}
        /** Get a value for this key, or undefined if it does not exist. */
        ;
      }

      return t.prototype.get = function (t) {
        var e = this.dn(t),
            n = this.fn[e];
        if (void 0 !== n) for (var r = 0, i = n; r < i.length; r++) {
          var o = i[r],
              s = o[0],
              u = o[1];
          if (s.isEqual(t)) return u;
        }
      }, t.prototype.has = function (t) {
        return void 0 !== this.get(t);
      },
      /** Put this key and value in the map. */
      t.prototype.set = function (t, e) {
        var n = this.dn(t),
            r = this.fn[n];

        if (void 0 !== r) {
          for (var i = 0; i < r.length; i++) {
            if (r[i][0].isEqual(t)) return void (r[i] = [t, e]);
          }

          r.push([t, e]);
        } else this.fn[n] = [[t, e]];
      },
      /**
       * Remove this key from the map. Returns a boolean if anything was deleted.
       */
      t.prototype["delete"] = function (t) {
        var e = this.dn(t),
            n = this.fn[e];
        if (void 0 === n) return !1;

        for (var r = 0; r < n.length; r++) {
          if (n[r][0].isEqual(t)) return 1 === n.length ? delete this.fn[e] : n.splice(r, 1), !0;
        }

        return !1;
      }, t.prototype.forEach = function (t) {
        I(this.fn, function (e, n) {
          for (var r = 0, i = n; r < i.length; r++) {
            var o = i[r],
                s = o[0],
                u = o[1];
            t(s, u);
          }
        });
      }, t.prototype.B = function () {
        return N(this.fn);
      }, t;
    }(),
        ke =
    /** @class */
    function () {
      /**
       * @param batchId The unique ID of this mutation batch.
       * @param localWriteTime The original write time of this mutation.
       * @param baseMutations Mutations that are used to populate the base
       * values when this mutation is applied locally. This can be used to locally
       * overwrite values that are persisted in the remote document cache. Base
       * mutations are never sent to the backend.
       * @param mutations The user-provided mutations in this mutation batch.
       * User-provided mutations are applied both locally and remotely on the
       * backend.
       */
      function t(t, e, n, r) {
        this.batchId = t, this.Tn = e, this.baseMutations = n, this.mutations = r
        /**
        * Applies all the mutations in this MutationBatch to the specified document
        * to create a new remote document
        *
        * @param docKey The key of the document to apply mutations to.
        * @param maybeDoc The document to apply mutations to.
        * @param batchResult The result of applying the MutationBatch to the
        * backend.
        */
        ;
      }

      return t.prototype.at = function (t, e, n) {
        for (var r = n.En, i = 0; i < this.mutations.length; i++) {
          var o = this.mutations[i];

          if (o.key.isEqual(t)) {
            var s = r[i];
            e = o.at(e, s);
          }
        }

        return e;
      },
      /**
       * Computes the local view of a document given all the mutations in this
       * batch.
       *
       * @param docKey The key of the document to apply mutations to.
       * @param maybeDoc The document to apply mutations to.
       */
      t.prototype.ot = function (t, e) {
        // First, apply the base state. This allows us to apply non-idempotent
        // transform against a consistent set of values.
        for (var n = 0, r = this.baseMutations; n < r.length; n++) {
          var i = r[n];
          i.key.isEqual(t) && (e = i.ot(e, e, this.Tn));
        } // Second, apply all user-provided mutations.


        for (var o = e, s = 0, u = this.mutations; s < u.length; s++) {
          var a = u[s];
          a.key.isEqual(t) && (e = a.ot(e, o, this.Tn));
        }

        return e;
      },
      /**
       * Computes the local view for all provided documents given the mutations in
       * this batch.
       */
      t.prototype.In = function (t) {
        var e = this,
            n = t; // TODO(mrschmidt): This implementation is O(n^2). If we apply the mutations
        // directly (as done in `applyToLocalView()`), we can reduce the complexity
        // to O(n).

        return this.mutations.forEach(function (r) {
          var i = e.ot(r.key, t.get(r.key));
          i && (n = n.Ae(r.key, i));
        }), n;
      }, t.prototype.keys = function () {
        return this.mutations.reduce(function (t, e) {
          return t.add(e.key);
        }, Wt());
      }, t.prototype.isEqual = function (t) {
        return this.batchId === t.batchId && _e(this.mutations, t.mutations, function (t, e) {
          return t.isEqual(e);
        }) && _e(this.baseMutations, t.baseMutations, function (t, e) {
          return t.isEqual(e);
        });
      }, t;
    }(),
        De =
    /** @class */
    function () {
      function t(t, e, n, r,
      /**
       * A pre-computed mapping from each mutated document to the resulting
       * version.
       */
      i) {
        this.batch = t, this.wn = e, this.En = n, this.streamToken = r, this.Rn = i
        /**
        * Creates a new MutationBatchResult for the given batch and results. There
        * must be one result for each mutation in the batch. This static factory
        * caches a document=>version mapping (docVersions).
        */
        ;
      }

      return t.from = function (e, n, r, i) {
        me(e.mutations.length === r.length);

        for (var o = zt(), s = e.mutations, u = 0; u < s.length; u++) {
          o = o.Ae(s[u].key, r[u].version);
        }

        return new t(e, n, r, i, o);
      }, t;
    }(),
        xe =
    /** @class */
    function () {
      function t(t) {
        var e = this; // NOTE: next/catchCallback will always point to our own wrapper functions,
        // not the user's raw next() or catch() callbacks.

        this.An = null, this.mn = null, // When the operation resolves, we'll set result or error and mark isDone.
        this.result = void 0, this.error = void 0, this.Pn = !1, // Set to true when .then() or .catch() are called and prevents additional
        // chaining.
        this.Vn = !1, t(function (t) {
          e.Pn = !0, e.result = t, e.An && // value should be defined unless T is Void, but we can't express
          // that in the type system.
          e.An(t);
        }, function (t) {
          e.Pn = !0, e.error = t, e.mn && e.mn(t);
        });
      }

      return t.prototype["catch"] = function (t) {
        return this.next(void 0, t);
      }, t.prototype.next = function (e, n) {
        var r = this;
        return this.Vn && ge(), this.Vn = !0, this.Pn ? this.error ? this.gn(n, this.error) : this.pn(e, this.result) : new t(function (t, i) {
          r.An = function (n) {
            r.pn(e, n).next(t, i);
          }, r.mn = function (e) {
            r.gn(n, e).next(t, i);
          };
        });
      }, t.prototype.yn = function () {
        var t = this;
        return new Promise(function (e, n) {
          t.next(e, n);
        });
      }, t.prototype.bn = function (e) {
        try {
          var n = e();
          return n instanceof t ? n : t.resolve(n);
        } catch (e) {
          return t.reject(e);
        }
      }, t.prototype.pn = function (e, n) {
        return e ? this.bn(function () {
          return e(n);
        }) : t.resolve(n);
      }, t.prototype.gn = function (e, n) {
        return e ? this.bn(function () {
          return e(n);
        }) : t.reject(n);
      }, t.resolve = function (e) {
        return new t(function (t, n) {
          t(e);
        });
      }, t.reject = function (e) {
        return new t(function (t, n) {
          n(e);
        });
      }, t.vn = function ( // Accept all Promise types in waitFor().
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      e) {
        return new t(function (t, n) {
          var r = 0,
              i = 0,
              o = !1;
          e.forEach(function (e) {
            ++r, e.next(function () {
              ++i, o && i === r && t();
            }, function (t) {
              return n(t);
            });
          }), o = !0, i === r && t();
        });
      },
      /**
       * Given an array of predicate functions that asynchronously evaluate to a
       * boolean, implements a short-circuiting `or` between the results. Predicates
       * will be evaluated until one of them returns `true`, then stop. The final
       * result will be whether any of them returned `true`.
       */
      t.Sn = function (e) {
        for (var n = t.resolve(!1), r = function r(e) {
          n = n.next(function (n) {
            return n ? t.resolve(n) : e();
          });
        }, i = 0, o = e; i < o.length; i++) {
          r(o[i]);
        }

        return n;
      }, t.forEach = function (t, e) {
        var n = this,
            r = [];
        return t.forEach(function (t, i) {
          r.push(e.call(n, t, i));
        }), this.vn(r);
      }, t;
    }(),
        Se =
    /** @class */
    function () {
      function t() {
        // A mapping of document key to the new cache entry that should be written (or null if any
        // existing cache entry should be removed).
        this.Dn = new Ae(function (t) {
          return t.toString();
        }), this.Cn = !1;
      }

      return Object.defineProperty(t.prototype, "readTime", {
        get: function get() {
          return this.Fn;
        },
        set: function set(t) {
          this.Fn = t;
        },
        enumerable: !0,
        configurable: !0
      }),
      /**
       * Buffers a `RemoteDocumentCache.addEntry()` call.
       *
       * You can only modify documents that have already been retrieved via
       * `getEntry()/getEntries()` (enforced via IndexedDbs `apply()`).
       */
      t.prototype.Nn = function (t, e) {
        this.$n(), this.readTime = e, this.Dn.set(t.key, t);
      },
      /**
       * Buffers a `RemoteDocumentCache.removeEntry()` call.
       *
       * You can only remove documents that have already been retrieved via
       * `getEntry()/getEntries()` (enforced via IndexedDbs `apply()`).
       */
      t.prototype.kn = function (t, e) {
        this.$n(), e && (this.readTime = e), this.Dn.set(t, null);
      },
      /**
       * Looks up an entry in the cache. The buffered changes will first be checked,
       * and if no buffered change applies, this will forward to
       * `RemoteDocumentCache.getEntry()`.
       *
       * @param transaction The transaction in which to perform any persistence
       *     operations.
       * @param documentKey The key of the entry to look up.
       * @return The cached Document or NoDocument entry, or null if we have nothing
       * cached.
       */
      t.prototype.Ln = function (t, e) {
        this.$n();
        var n = this.Dn.get(e);
        return void 0 !== n ? xe.resolve(n) : this.Mn(t, e);
      },
      /**
       * Looks up several entries in the cache, forwarding to
       * `RemoteDocumentCache.getEntry()`.
       *
       * @param transaction The transaction in which to perform any persistence
       *     operations.
       * @param documentKeys The keys of the entries to look up.
       * @return A map of cached `Document`s or `NoDocument`s, indexed by key. If an
       *     entry cannot be found, the corresponding key will be mapped to a null
       *     value.
       */
      t.prototype.getEntries = function (t, e) {
        return this.On(t, e);
      },
      /**
       * Applies buffered changes to the underlying RemoteDocumentCache, using
       * the provided transaction.
       */
      t.prototype.apply = function (t) {
        return this.$n(), this.Cn = !0, this.xn(t);
      },
      /** Helper to assert this.changes is not null  */
      t.prototype.$n = function () {}, t;
    }(),
        Re = "The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.",
        Le =
    /** @class */
    function () {
      function t() {
        this.Bn = [];
      }

      return t.prototype.qn = function (t) {
        this.Bn.push(t);
      }, t.prototype.Un = function () {
        this.Bn.forEach(function (t) {
          return t();
        });
      }, t;
    }(),
        Oe =
    /** @class */
    function () {
      function t(t, e, n) {
        this.Qn = t, this.Wn = e, this.jn = n
        /**
        * Get the local view of the document identified by `key`.
        *
        * @return Local view of the document or null if we don't have any cached
        * state for it.
        */
        ;
      }

      return t.prototype.Kn = function (t, e) {
        var n = this;
        return this.Wn.Gn(t, e).next(function (r) {
          return n.zn(t, e, r);
        });
      },
      /** Internal version of `getDocument` that allows reusing batches. */
      t.prototype.zn = function (t, e, n) {
        return this.Qn.Ln(t, e).next(function (t) {
          for (var r = 0, i = n; r < i.length; r++) {
            t = i[r].ot(e, t);
          }

          return t;
        });
      }, // Returns the view of the given `docs` as they would appear after applying
      // all mutations in the given `batches`.
      t.prototype.Hn = function (t, e, n) {
        var r = Mt();
        return e.forEach(function (t, e) {
          for (var i = 0, o = n; i < o.length; i++) {
            e = o[i].ot(t, e);
          }

          r = r.Ae(t, e);
        }), r;
      },
      /**
       * Gets the local view of the documents identified by `keys`.
       *
       * If we don't have cached state for a document in `keys`, a NoDocument will
       * be stored for that key in the resulting set.
       */
      t.prototype.Yn = function (t, e) {
        var n = this;
        return this.Qn.getEntries(t, e).next(function (e) {
          return n.Jn(t, e);
        });
      },
      /**
       * Similar to `getDocuments`, but creates the local view from the given
       * `baseDocs` without retrieving documents from the local store.
       */
      t.prototype.Jn = function (t, e) {
        var n = this;
        return this.Wn.Xn(t, e).next(function (r) {
          var i = n.Hn(t, e, r),
              o = qt();
          return i.forEach(function (t, e) {
            // TODO(http://b/32275378): Don't conflate missing / deleted.
            e || (e = new vt(t, g.min())), o = o.Ae(t, e);
          }), o;
        });
      },
      /**
       * Performs a query against the local view of all documents.
       *
       * @param transaction The persistence transaction.
       * @param query The query to match documents against.
       * @param sinceReadTime If not set to SnapshotVersion.min(), return only
       *     documents that have been read since this snapshot version (exclusive).
       */
      t.prototype.Zn = function (t, e, n) {
        return e.Ot() ? this.tr(t, e.path) : e._e() ? this.er(t, e, n) : this.sr(t, e, n);
      }, t.prototype.tr = function (t, e) {
        // Just do a simple document lookup.
        return this.Kn(t, new _(e)).next(function (t) {
          var e = Ft();
          return t instanceof yt && (e = e.Ae(t.key, t)), e;
        });
      }, t.prototype.er = function (t, e, n) {
        var r = this,
            i = e.collectionGroup,
            o = Ft();
        return this.jn.ir(t, i).next(function (s) {
          return xe.forEach(s, function (s) {
            var u = e.Zt(s.child(i));
            return r.sr(t, u, n).next(function (t) {
              t.forEach(function (t, e) {
                o = o.Ae(t, e);
              });
            });
          }).next(function () {
            return o;
          });
        });
      }, t.prototype.sr = function (t, e, n) {
        var r,
            i,
            o = this; // Query the remote documents and overlay mutations.

        return this.Qn.Zn(t, e, n).next(function (n) {
          return r = n, o.Wn.nr(t, e);
        }).next(function (e) {
          return i = e, o.rr(t, i, r).next(function (t) {
            r = t;

            for (var e = 0, n = i; e < n.length; e++) {
              for (var o = n[e], s = 0, u = o.mutations; s < u.length; s++) {
                var a = u[s],
                    h = a.key,
                    c = r.get(h),
                    f = a.ot(c, c, o.Tn);
                r = f instanceof yt ? r.Ae(h, f) : r.remove(h);
              }
            }
          });
        }).next(function () {
          // Finally, filter out any documents that don't actually match
          // the query.
          return r.forEach(function (t, n) {
            e.matches(n) || (r = r.remove(t));
          }), r;
        });
      }, t.prototype.rr = function (t, e, n) {
        for (var r = Wt(), i = 0, o = e; i < o.length; i++) {
          for (var s = 0, u = o[i].mutations; s < u.length; s++) {
            var a = u[s];
            a instanceof ot && null === n.get(a.key) && (r = r.add(a.key));
          }
        }

        var h = n;
        return this.Qn.getEntries(t, r).next(function (t) {
          return t.forEach(function (t, e) {
            null !== e && e instanceof yt && (h = h.Ae(t, e));
          }), h;
        });
      }, t;
    }(),
        Ve =
    /** @class */
    function () {
      function t(t, e, n, r) {
        this.targetId = t, this.fromCache = e, this.hr = n, this.or = r;
      }

      return t.ar = function (e, n) {
        for (var r = Wt(), i = Wt(), o = 0, s = n.docChanges; o < s.length; o++) {
          var u = s[o];

          switch (u.type) {
            case 0
            /* Added */
            :
              r = r.add(u.doc.key);
              break;

            case 1
            /* Removed */
            :
              i = i.add(u.doc.key);
            // do nothing
          }
        }

        return new t(e, n.fromCache, r, i);
      }, t;
    }(),
        Pe =
    /** @class */
    function () {
      function t(t, e) {
        var n = this;
        this.previousValue = t, e && (e.ur = function (t) {
          return n.cr(t);
        }, this._r = function (t) {
          return e.lr(t);
        });
      }

      return t.prototype.cr = function (t) {
        return this.previousValue = Math.max(t, this.previousValue), this.previousValue;
      }, t.prototype.next = function () {
        var t = ++this.previousValue;
        return this._r && this._r(t), t;
      }, t;
    }();
    /** The default database name for a project. */

    /** Represents the database ID a Firestore client is associated with. */


    Pe.dr = -1;
    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    var Ue = function Ue() {
      var t = this;
      this.promise = new Promise(function (e, n) {
        t.resolve = e, t.reject = n;
      });
    },
        Ce =
    /** @class */
    function () {
      function t(
      /**
       * The AsyncQueue to run backoff operations on.
       */
      t,
      /**
       * The ID to use when scheduling backoff operations on the AsyncQueue.
       */
      e,
      /**
       * The initial delay (used as the base delay on the first retry attempt).
       * Note that jitter will still be applied, so the actual delay could be as
       * little as 0.5*initialDelayMs.
       */
      n
      /**
       * The multiplier to use to determine the extended base delay after each
       * attempt.
       */
      , r
      /**
       * The maximum base delay after which no further backoff is performed.
       * Note that jitter will still be applied, so the actual delay could be as
       * much as 1.5*maxDelayMs.
       */
      , i) {
        void 0 === n && (n = 1e3), void 0 === r && (r = 1.5), void 0 === i && (i = 6e4), this.Tr = t, this.Er = e, this.Ir = n, this.wr = r, this.Rr = i, this.Ar = 0, this.mr = null,
        /** The last backoff attempt, as epoch milliseconds. */
        this.Pr = Date.now(), this.reset();
      }
      /**
       * Resets the backoff delay.
       *
       * The very next backoffAndWait() will have no delay. If it is called again
       * (i.e. due to an error), initialDelayMs (plus jitter) will be used, and
       * subsequent ones will increase according to the backoffFactor.
       */


      return t.prototype.reset = function () {
        this.Ar = 0;
      },
      /**
       * Resets the backoff delay to the maximum delay (e.g. for use after a
       * RESOURCE_EXHAUSTED error).
       */
      t.prototype.Vr = function () {
        this.Ar = this.Rr;
      },
      /**
       * Returns a promise that resolves after currentDelayMs, and increases the
       * delay for any subsequent attempts. If there was a pending backoff operation
       * already, it will be canceled.
       */
      t.prototype.gr = function (t) {
        var e = this; // Cancel any pending backoff operation.

        this.cancel(); // First schedule using the current base (which may be 0 and should be
        // honored as such).

        var n = Math.floor(this.Ar + this.pr()),
            r = Math.max(0, Date.now() - this.Pr),
            i = Math.max(0, n - r); // Guard against lastAttemptTime being in the future due to a clock change.

        i > 0 && de("ExponentialBackoff", "Backing off for " + i + " ms (base delay: " + this.Ar + " ms, delay with jitter: " + n + " ms, last attempt: " + r + " ms ago)"), this.mr = this.Tr.yr(this.Er, i, function () {
          return e.Pr = Date.now(), t();
        }), // Apply backoff factor to determine next delay and ensure it is within
        // bounds.
        this.Ar *= this.wr, this.Ar < this.Ir && (this.Ar = this.Ir), this.Ar > this.Rr && (this.Ar = this.Rr);
      }, t.prototype.br = function () {
        null !== this.mr && (this.mr.vr(), this.mr = null);
      }, t.prototype.cancel = function () {
        null !== this.mr && (this.mr.cancel(), this.mr = null);
      },
      /** Returns a random value in the range [-currentBaseMs/2, currentBaseMs/2] */
      t.prototype.pr = function () {
        return (Math.random() - .5) * this.Ar;
      }, t;
    }();
    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /**
     * A helper for running delayed tasks following an exponential backoff curve
     * between attempts.
     *
     * Each delay is made up of a "base" delay which follows the exponential
     * backoff curve, and a +/- 50% "jitter" that is calculated and added to the
     * base delay. This prevents clients from accidentally synchronizing their
     * delays causing spikes of load to the backend.
     */

    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /**
     * Encodes a resource path into a IndexedDb-compatible string form.
     */


    function qe(t) {
      for (var e = "", n = 0; n < t.length; n++) {
        e.length > 0 && (e = je(e)), e = Me(t.get(n), e);
      }

      return je(e);
    }
    /** Encodes a single segment of a resource path into the given result */


    function Me(t, e) {
      for (var n = e, r = t.length, i = 0; i < r; i++) {
        var o = t.charAt(i);

        switch (o) {
          case "\0":
            n += "";
            break;

          case "":
            n += "";
            break;

          default:
            n += o;
        }
      }

      return n;
    }
    /** Encodes a path separator into the given result */


    function je(t) {
      return t + "";
    }
    /**
     * Decodes the given IndexedDb-compatible string form of a resource path into
     * a ResourcePath instance. Note that this method is not suitable for use with
     * decoding resource names from the server; those are One Platform format
     * strings.
     */


    function Fe(t) {
      // Event the empty path must encode as a path of at least length 2. A path
      // with exactly 2 must be the empty path.
      var e = t.length;
      if (me(e >= 2), 2 === e) return me("" === t.charAt(0) && "" === t.charAt(1)), w.G; // Escape characters cannot exist past the second-to-last position in the
      // source value.

      for (var n = e - 2, r = [], i = "", o = 0; o < e;) {
        // The last two characters of a valid encoded path must be a separator, so
        // there must be an end to this segment.
        var s = t.indexOf("", o);

        switch ((s < 0 || s > n) && ge(), t.charAt(s + 1)) {
          case "":
            var u = t.substring(o, s),
                a = void 0;
            0 === i.length ? // Avoid copying for the common case of a segment that excludes \0
            // and \001
            a = u : (a = i += u, i = ""), r.push(a);
            break;

          case "":
            i += t.substring(o, s), i += "\0";
            break;

          case "":
            // The escape character can be used in the output to encode itself.
            i += t.substring(o, s + 1);
            break;

          default:
            ge();
        }

        o = s + 2;
      }

      return new w(r);
    }
    /**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /**
     * An in-memory implementation of IndexManager.
     */


    var Be =
    /** @class */
    function () {
      function t() {
        this.Sr = new ze();
      }

      return t.prototype.Dr = function (t, e) {
        return this.Sr.add(e), xe.resolve();
      }, t.prototype.ir = function (t, e) {
        return xe.resolve(this.Sr.getEntries(e));
      }, t;
    }(),
        ze =
    /** @class */
    function () {
      function t() {
        this.index = {};
      } // Returns false if the entry already existed.


      return t.prototype.add = function (t) {
        var e = t.O(),
            n = t.L(),
            r = this.index[e] || new Pt(w.N),
            i = !r.has(n);
        return this.index[e] = r.add(n), i;
      }, t.prototype.has = function (t) {
        var e = t.O(),
            n = t.L(),
            r = this.index[e];
        return r && r.has(n);
      }, t.prototype.getEntries = function (t) {
        return (this.index[t] || new Pt(w.N)).W();
      }, t;
    }(),
        Ge =
    /** @class */
    function () {
      function t() {
        /**
         * An in-memory copy of the index entries we've already written since the SDK
         * launched. Used to avoid re-writing the same entry repeatedly.
         *
         * This is *NOT* a complete cache of what's in persistence and so can never be used to
         * satisfy reads.
         */
        this.Cr = new ze();
      }
      /**
       * Adds a new entry to the collection parent index.
       *
       * Repeated calls for the same collectionPath should be avoided within a
       * transaction as IndexedDbIndexManager only caches writes once a transaction
       * has been committed.
       */


      return t.prototype.Dr = function (t, e) {
        var n = this;

        if (!this.Cr.has(e)) {
          var r = e.O(),
              i = e.L();
          t.qn(function () {
            // Add the collection to the in memory cache only if the transaction was
            // successfully committed.
            n.Cr.add(e);
          });
          var o = {
            collectionId: r,
            parent: qe(i)
          };
          return We(t).put(o);
        }

        return xe.resolve();
      }, t.prototype.ir = function (t, e) {
        var n = [],
            r = IDBKeyRange.bound([e, ""], [Te(e), ""],
        /*lowerOpen=*/
        !1,
        /*upperOpen=*/
        !0);
        return We(t).Fr(r).next(function (t) {
          for (var r = 0, i = t; r < i.length; r++) {
            var o = i[r]; // This collectionId guard shouldn't be necessary (and isn't as long
            // as we're running in a real browser), but there's a bug in
            // indexeddbshim that breaks our range in our tests running in node:
            // https://github.com/axemclion/IndexedDBShim/issues/334

            if (o.collectionId !== e) break;
            n.push(Fe(o.parent));
          }

          return n;
        });
      }, t;
    }();
    /**
     * Internal implementation of the collection-parent index exposed by MemoryIndexManager.
     * Also used for in-memory caching by IndexedDbIndexManager and initial index population
     * in indexeddb_schema.ts
     */

    /**
     * Helper to get a typed SimpleDbStore for the collectionParents
     * document store.
     */


    function We(t) {
      return sn.Nr(t, Rn.store);
    }
    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */


    var Qe =
    /** @class */
    function () {
      /**
       * @param {LocalSerializer} serializer The document serializer.
       * @param {IndexManager} indexManager The query indexes that need to be maintained.
       */
      function t(t, e) {
        this.serializer = t, this.jn = e
        /**
        * Adds the supplied entries to the cache.
        *
        * All calls of `addEntry` are required to go through the RemoteDocumentChangeBuffer
        * returned by `newChangeBuffer()` to ensure proper accounting of metadata.
        */
        ;
      }

      return t.prototype.Nn = function (t, e, n) {
        return Ye(t).put($e(e), n);
      },
      /**
       * Removes a document from the cache.
       *
       * All calls of `removeEntry`  are required to go through the RemoteDocumentChangeBuffer
       * returned by `newChangeBuffer()` to ensure proper accounting of metadata.
       */
      t.prototype.kn = function (t, e) {
        var n = Ye(t),
            r = $e(e);
        return n["delete"](r);
      },
      /**
       * Updates the current cache size.
       *
       * Callers to `addEntry()` and `removeEntry()` *must* call this afterwards to update the
       * cache's metadata.
       */
      t.prototype.updateMetadata = function (t, e) {
        var n = this;
        return this.getMetadata(t).next(function (r) {
          return r.byteSize += e, n.$r(t, r);
        });
      }, t.prototype.Ln = function (t, e) {
        var n = this;
        return Ye(t).get($e(e)).next(function (t) {
          return n.kr(t);
        });
      },
      /**
       * Looks up an entry in the cache.
       *
       * @param documentKey The key of the entry to look up.
       * @return The cached MaybeDocument entry and its size, or null if we have nothing cached.
       */
      t.prototype.Lr = function (t, e) {
        var n = this;
        return Ye(t).get($e(e)).next(function (t) {
          var e = n.kr(t);
          return e ? {
            Mr: e,
            size: Je(t)
          } : null;
        });
      }, t.prototype.getEntries = function (t, e) {
        var n = this,
            r = Mt();
        return this.Or(t, e, function (t, e) {
          var i = n.kr(e);
          r = r.Ae(t, i);
        }).next(function () {
          return r;
        });
      },
      /**
       * Looks up several entries in the cache.
       *
       * @param documentKeys The set of keys entries to look up.
       * @return A map of MaybeDocuments indexed by key (if a document cannot be
       *     found, the key will be mapped to null) and a map of sizes indexed by
       *     key (zero if the key cannot be found).
       */
      t.prototype.xr = function (t, e) {
        var n = this,
            r = Mt(),
            i = new Lt(_.N);
        return this.Or(t, e, function (t, e) {
          var o = n.kr(e);
          o ? (r = r.Ae(t, o), i = i.Ae(t, Je(e))) : (r = r.Ae(t, null), i = i.Ae(t, 0));
        }).next(function () {
          return {
            Br: r,
            qr: i
          };
        });
      }, t.prototype.Or = function (t, e, n) {
        if (e.B()) return xe.resolve();
        var r = IDBKeyRange.bound(e.first().path.W(), e.last().path.W()),
            i = e.be(),
            o = i.Ne();
        return Ye(t).Ur({
          range: r
        }, function (t, e, r) {
          // Go through keys not found in cache.
          for (var s = _.st(t); o && _.N(o, s) < 0;) {
            n(o, null), o = i.Ne();
          }

          o && o.isEqual(s) && ( // Key found in cache.
          n(o, e), o = i.$e() ? i.Ne() : null), // Skip to the next key (if there is one).
          o ? r.Qr(o.path.W()) : r.done();
        }).next(function () {
          // The rest of the keys are not in the cache. One case where `iterate`
          // above won't go through them is when the cache is empty.
          for (; o;) {
            n(o, null), o = i.$e() ? i.Ne() : null;
          }
        });
      }, t.prototype.Zn = function (t, e, n) {
        var r = this,
            i = Ft(),
            o = e.path.length + 1,
            s = {};

        if (n.isEqual(g.min())) {
          // Documents are ordered by key, so we can use a prefix scan to narrow
          // down the documents we need to match the query against.
          var u = e.path.W();
          s.range = IDBKeyRange.lowerBound(u);
        } else {
          // Execute an index-free query and filter by read time. This is safe
          // since all document changes to queries that have a
          // lastLimboFreeSnapshotVersion (`sinceReadTime`) have a read time set.
          var a = e.path.W(),
              h = this.serializer.Wr(n);
          s.range = IDBKeyRange.lowerBound([a, h],
          /* open= */
          !0), s.index = An.collectionReadTimeIndex;
        }

        return Ye(t).Ur(s, function (t, n, s) {
          // The query is actually returning any path that starts with the query
          // path prefix which may include documents in subcollections. For
          // example, a query on 'rooms' will return rooms/abc/messages/xyx but we
          // shouldn't match it. Fix this by discarding rows with document keys
          // more than one segment longer than the query path.
          if (t.length === o) {
            var u = r.serializer.jr(n);
            e.path.q(u.key.path) ? u instanceof yt && e.matches(u) && (i = i.Ae(u.key, u)) : s.done();
          }
        }).next(function () {
          return i;
        });
      },
      /**
       * Returns the set of documents that have changed since the specified read
       * time.
       */
      // PORTING NOTE: This is only used for multi-tab synchronization.
      t.prototype.Kr = function (t, e) {
        var n = this,
            r = qt(),
            i = this.serializer.Wr(e),
            o = Ye(t),
            s = IDBKeyRange.lowerBound(i, !0);
        return o.Ur({
          index: An.readTimeIndex,
          range: s
        }, function (t, e) {
          // Unlike `getEntry()` and others, `getNewDocumentChanges()` parses
          // the documents directly since we want to keep sentinel deletes.
          var o = n.serializer.jr(e);
          r = r.Ae(o.key, o), i = e.readTime;
        }).next(function () {
          return {
            Gr: r,
            readTime: n.serializer.zr(i)
          };
        });
      },
      /**
       * Returns the read time of the most recently read document in the cache, or
       * SnapshotVersion.min() if not available.
       */
      // PORTING NOTE: This is only used for multi-tab synchronization.
      t.prototype.Hr = function (t) {
        var e = this,
            n = Ye(t),
            r = g.min();
        return n.Ur({
          index: An.readTimeIndex,
          reverse: !0
        }, function (t, n, i) {
          n.readTime && (r = e.serializer.zr(n.readTime)), i.done();
        }).next(function () {
          return r;
        });
      }, t.prototype.Yr = function (e) {
        return new t.Jr(this, !!e && e.Xr);
      }, t.prototype.Zr = function (t) {
        return this.getMetadata(t).next(function (t) {
          return t.byteSize;
        });
      }, t.prototype.getMetadata = function (t) {
        return Ke(t).get(kn.key).next(function (t) {
          return me(!!t), t;
        });
      }, t.prototype.$r = function (t, e) {
        return Ke(t).put(kn.key, e);
      },
      /**
       * Decodes `remoteDoc` and returns the document (or null, if the document
       * corresponds to the format used for sentinel deletes).
       */
      t.prototype.kr = function (t) {
        if (t) {
          var e = this.serializer.jr(t);
          return e instanceof vt && e.version.isEqual(g.min()) ? null : e;
        }

        return null;
      }, t;
    }();
    /**
     * Handles the details of adding and updating documents in the IndexedDbRemoteDocumentCache.
     *
     * Unlike the MemoryRemoteDocumentChangeBuffer, the IndexedDb implementation computes the size
     * delta for all submitted changes. This avoids having to re-read all documents from IndexedDb
     * when we apply the changes.
     */


    function Ke(t) {
      return sn.Nr(t, kn.store);
    }
    /**
     * Helper to get a typed SimpleDbStore for the remoteDocuments object store.
     */


    function Ye(t) {
      return sn.Nr(t, An.store);
    }

    function $e(t) {
      return t.path.W();
    }
    /**
     * Retrusn an approximate size for the given document.
     */


    function Je(t) {
      var e;
      if (t.document) e = t.document;else if (t.unknownDocument) e = t.unknownDocument;else {
        if (!t.noDocument) throw ge();
        e = t.noDocument;
      }
      return JSON.stringify(e).length;
    }
    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /** Offset to ensure non-overlapping target ids. */


    Qe.Jr =
    /** @class */
    function (t) {
      /**
       * @param documentCache The IndexedDbRemoteDocumentCache to apply the changes to.
       * @param trackRemovals Whether to create sentinel deletes that can be tracked by
       * `getNewDocumentChanges()`.
       */
      function n(e, n) {
        var r = this;
        return (r = t.call(this) || this).th = e, r.Xr = n, // A map of document sizes prior to applying the changes in this buffer.
        r.eh = new Ae(function (t) {
          return t.toString();
        }), r;
      }

      return e.__extends(n, t), n.prototype.xn = function (t) {
        var e = this,
            n = [],
            r = 0,
            i = new Pt(function (t, e) {
          return be(t.j(), e.j());
        });
        return this.Dn.forEach(function (o, s) {
          var u = e.eh.get(o);

          if (s) {
            var a = e.th.serializer.sh(s, e.readTime);
            i = i.add(o.path.L());
            var h = Je(a);
            r += h - u, n.push(e.th.Nn(t, o, a));
          } else if (r -= u, e.Xr) {
            // In order to track removals, we store a "sentinel delete" in the
            // RemoteDocumentCache. This entry is represented by a NoDocument
            // with a version of 0 and ignored by `maybeDecodeDocument()` but
            // preserved in `getNewDocumentChanges()`.
            var c = e.th.serializer.sh(new vt(o, g.min()), e.readTime);
            n.push(e.th.Nn(t, o, c));
          } else n.push(e.th.kn(t, o));
        }), i.forEach(function (r) {
          n.push(e.th.jn.Dr(t, r));
        }), n.push(this.th.updateMetadata(t, r)), xe.vn(n);
      }, n.prototype.Mn = function (t, e) {
        var n = this; // Record the size of everything we load from the cache so we can compute a delta later.

        return this.th.Lr(t, e).next(function (t) {
          return null === t ? (n.eh.set(e, 0), null) : (n.eh.set(e, t.size), t.Mr);
        });
      }, n.prototype.On = function (t, e) {
        var n = this; // Record the size of everything we load from the cache so we can compute
        // a delta later.

        return this.th.xr(t, e).next(function (t) {
          var e = t.Br; // Note: `getAllFromCache` returns two maps instead of a single map from
          // keys to `DocumentSizeEntry`s. This is to allow returning the
          // `NullableMaybeDocumentMap` directly, without a conversion.

          return t.qr.forEach(function (t, e) {
            n.eh.set(t, e);
          }), e;
        });
      }, n;
    }(Se);
    /**
     * Generates monotonically increasing target IDs for sending targets to the
     * watch stream.
     *
     * The client constructs two generators, one for the target cache, and one for
     * for the sync engine (to generate limbo documents targets). These
     * generators produce non-overlapping IDs (by using even and odd IDs
     * respectively).
     *
     * By separating the target ID space, the query cache can generate target IDs
     * that persist across client restarts, while sync engine can independently
     * generate in-memory target IDs that are transient and can be reused after a
     * restart.
     */


    var He =
    /** @class */
    function () {
      function t(t) {
        this.ih = t;
      }

      return t.prototype.next = function () {
        return this.ih += 2, this.ih;
      }, t.nh = function () {
        // The target cache generator must return '2' in its first call to `next()`
        // as there is no differentiation in the protocol layer between an unset
        // number and the number '0'. If we were to sent a target with target ID
        // '0', the backend would consider it unset and replace it with its own ID.
        return new t(0);
      }, t.rh = function () {
        // Sync engine assigns target IDs for limbo document detection.
        return new t(-1);
      }, t;
    }(),
        Xe =
    /** @class */
    function () {
      function t(t, e) {
        this.hh = t, this.serializer = e;
      } // PORTING NOTE: We don't cache global metadata for the target cache, since
      // some of it (in particular `highestTargetId`) can be modified by secondary
      // tabs. We could perhaps be more granular (and e.g. still cache
      // `lastRemoteSnapshotVersion` in memory) but for simplicity we currently go
      // to IndexedDb whenever we need to read metadata. We can revisit if it turns
      // out to have a meaningful performance impact.


      return t.prototype.oh = function (t) {
        var e = this;
        return this.ah(t).next(function (n) {
          var r = new He(n.highestTargetId);
          return n.highestTargetId = r.next(), e.uh(t, n).next(function () {
            return n.highestTargetId;
          });
        });
      }, t.prototype._h = function (t) {
        return this.ah(t).next(function (t) {
          return g.v(new v(t.lastRemoteSnapshotVersion.seconds, t.lastRemoteSnapshotVersion.nanoseconds));
        });
      }, t.prototype.lh = function (t) {
        return this.ah(t).next(function (t) {
          return t.highestListenSequenceNumber;
        });
      }, t.prototype.dh = function (t, e, n) {
        var r = this;
        return this.ah(t).next(function (i) {
          return i.highestListenSequenceNumber = e, n && (i.lastRemoteSnapshotVersion = n.C()), e > i.highestListenSequenceNumber && (i.highestListenSequenceNumber = e), r.uh(t, i);
        });
      }, t.prototype.fh = function (t, e) {
        var n = this;
        return this.Th(t, e).next(function () {
          return n.ah(t).next(function (r) {
            return r.targetCount += 1, n.Eh(e, r), n.uh(t, r);
          });
        });
      }, t.prototype.Ih = function (t, e) {
        return this.Th(t, e);
      }, t.prototype.wh = function (t, e) {
        var n = this;
        return this.Rh(t, e.targetId).next(function () {
          return Ze(t)["delete"](e.targetId);
        }).next(function () {
          return n.ah(t);
        }).next(function (e) {
          return me(e.targetCount > 0), e.targetCount -= 1, n.uh(t, e);
        });
      },
      /**
       * Drops any targets with sequence number less than or equal to the upper bound, excepting those
       * present in `activeTargetIds`. Document associations for the removed targets are also removed.
       * Returns the number of targets removed.
       */
      t.prototype.Ah = function (t, e, n) {
        var r = this,
            i = 0,
            o = [];
        return Ze(t).Ur(function (s, u) {
          var a = r.serializer.mh(u);
          a.sequenceNumber <= e && null === n.get(a.targetId) && (i++, o.push(r.wh(t, a)));
        }).next(function () {
          return xe.vn(o);
        }).next(function () {
          return i;
        });
      },
      /**
       * Call provided function with each `TargetData` that we have cached.
       */
      t.prototype.js = function (t, e) {
        var n = this;
        return Ze(t).Ur(function (t, r) {
          var i = n.serializer.mh(r);
          e(i);
        });
      }, t.prototype.ah = function (t) {
        return tn(t).get(Sn.key).next(function (t) {
          return me(null !== t), t;
        });
      }, t.prototype.uh = function (t, e) {
        return tn(t).put(Sn.key, e);
      }, t.prototype.Th = function (t, e) {
        return Ze(t).put(this.serializer.Ph(e));
      },
      /**
       * In-place updates the provided metadata to account for values in the given
       * TargetData. Saving is done separately. Returns true if there were any
       * changes to the metadata.
       */
      t.prototype.Eh = function (t, e) {
        var n = !1;
        return t.targetId > e.highestTargetId && (e.highestTargetId = t.targetId, n = !0), t.sequenceNumber > e.highestListenSequenceNumber && (e.highestListenSequenceNumber = t.sequenceNumber, n = !0), n;
      }, t.prototype.Vh = function (t) {
        return this.ah(t).next(function (t) {
          return t.targetCount;
        });
      }, t.prototype.gh = function (t, e) {
        var n = this,
            r = e.canonicalId(),
            i = IDBKeyRange.bound([r, Number.NEGATIVE_INFINITY], [r, Number.POSITIVE_INFINITY]),
            o = null; // Iterating by the canonicalId may yield more than one result because
        // canonicalId values are not required to be unique per target. This query
        // depends on the queryTargets index to be efficient.

        return Ze(t).Ur({
          range: i,
          index: Dn.queryTargetsIndexName
        }, function (t, r, i) {
          var s = n.serializer.mh(r); // After finding a potential match, check that the target is
          // actually equal to the requested target.

          e.isEqual(s.target) && (o = s, i.done());
        }).next(function () {
          return o;
        });
      }, t.prototype.ph = function (t, e, n) {
        var r = this,
            i = [],
            o = en(t); // PORTING NOTE: The reverse index (documentsTargets) is maintained by
        // IndexedDb.

        return e.forEach(function (e) {
          var s = qe(e.path);
          i.push(o.put(new xn(n, s))), i.push(r.hh.yh(t, n, e));
        }), xe.vn(i);
      }, t.prototype.bh = function (t, e, n) {
        var r = this,
            i = en(t); // PORTING NOTE: The reverse index (documentsTargets) is maintained by
        // IndexedDb.

        return xe.forEach(e, function (e) {
          var o = qe(e.path);
          return xe.vn([i["delete"]([n, o]), r.hh.vh(t, n, e)]);
        });
      }, t.prototype.Rh = function (t, e) {
        var n = en(t),
            r = IDBKeyRange.bound([e], [e + 1],
        /*lowerOpen=*/
        !1,
        /*upperOpen=*/
        !0);
        return n["delete"](r);
      }, t.prototype.Sh = function (t, e) {
        var n = IDBKeyRange.bound([e], [e + 1],
        /*lowerOpen=*/
        !1,
        /*upperOpen=*/
        !0),
            r = en(t),
            i = Wt();
        return r.Ur({
          range: n,
          Dh: !0
        }, function (t, e, n) {
          var r = Fe(t[1]),
              o = new _(r);
          i = i.add(o);
        }).next(function () {
          return i;
        });
      }, t.prototype.Ch = function (t, e) {
        var n = qe(e.path),
            r = IDBKeyRange.bound([n], [Te(n)],
        /*lowerOpen=*/
        !1,
        /*upperOpen=*/
        !0),
            i = 0;
        return en(t).Ur({
          index: xn.documentTargetsIndex,
          Dh: !0,
          range: r
        }, function (t, e, n) {
          var r = t[0]; // Having a sentinel row for a document does not count as containing that document;
          // For the target cache, containing the document means the document is part of some
          // target.

          t[1];
          0 !== r && (i++, n.done());
        }).next(function () {
          return i > 0;
        });
      },
      /**
       * Looks up a TargetData entry by target ID.
       *
       * @param targetId The target ID of the TargetData entry to look up.
       * @return The cached TargetData entry, or null if the cache has no entry for
       * the target.
       */
      // PORTING NOTE: Multi-tab only.
      t.prototype.si = function (t, e) {
        var n = this;
        return Ze(t).get(e).next(function (t) {
          return t ? n.serializer.mh(t) : null;
        });
      }, t;
    }();
    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /**
     * Helper to get a typed SimpleDbStore for the queries object store.
     */


    function Ze(t) {
      return sn.Nr(t, Dn.store);
    }
    /**
     * Helper to get a typed SimpleDbStore for the target globals object store.
     */


    function tn(t) {
      return sn.Nr(t, Sn.store);
    }
    /**
     * Helper to get a typed SimpleDbStore for the document target object store.
     */


    function en(t) {
      return sn.Nr(t, xn.store);
    }
    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /** Serializer for values stored in the LocalStore. */


    var nn =
    /** @class */
    function () {
      function t(t) {
        this.Fh = t;
      }
      /** Decodes a remote document from storage locally to a Document. */


      return t.prototype.jr = function (t) {
        if (t.document) return this.Fh.mi(t.document, !!t.hasCommittedMutations);

        if (t.noDocument) {
          var e = _.st(t.noDocument.path),
              n = this.Nh(t.noDocument.readTime);

          return new vt(e, n, {
            hasCommittedMutations: !!t.hasCommittedMutations
          });
        }

        if (t.unknownDocument) {
          var r = _.st(t.unknownDocument.path),
              i = this.Nh(t.unknownDocument.version);

          return new gt(r, i);
        }

        return ge();
      },
      /** Encodes a document for storage locally. */
      t.prototype.sh = function (t, e) {
        var n = this.Wr(e),
            r = t.key.path.L().W();

        if (t instanceof yt) {
          var i = this.Fh.Ai(t),
              o = t.hasCommittedMutations;
          return new An(
          /* unknownDocument= */
          null,
          /* noDocument= */
          null, i, o, n, r);
        }

        if (t instanceof vt) {
          var s = t.key.path.W(),
              u = this.$h(t.version),
              a = t.hasCommittedMutations;
          return new An(
          /* unknownDocument= */
          null, new In(s, u),
          /* document= */
          null, a, n, r);
        }

        if (t instanceof gt) {
          var h = t.key.path.W(),
              c = this.$h(t.version);
          return new An(new Nn(h, c),
          /* noDocument= */
          null,
          /* document= */
          null,
          /* hasCommittedMutations= */
          !0, n, r);
        }

        return ge();
      }, t.prototype.Wr = function (t) {
        var e = t.C();
        return [e.seconds, e.nanoseconds];
      }, t.prototype.zr = function (t) {
        var e = new v(t[0], t[1]);
        return g.v(e);
      }, t.prototype.$h = function (t) {
        var e = t.C();
        return new wn(e.seconds, e.nanoseconds);
      }, t.prototype.Nh = function (t) {
        var e = new v(t.seconds, t.nanoseconds);
        return g.v(e);
      },
      /** Encodes a batch of mutations into a DbMutationBatch for local storage. */
      t.prototype.kh = function (t, e) {
        var n = this,
            r = e.baseMutations.map(function (t) {
          return n.Fh.vi(t);
        }),
            i = e.mutations.map(function (t) {
          return n.Fh.vi(t);
        });
        return new _n(t, e.batchId, e.Tn.toMillis(), r, i);
      },
      /** Decodes a DbMutationBatch into a MutationBatch */
      t.prototype.Lh = function (t) {
        var e = this,
            n = (t.baseMutations || []).map(function (t) {
          return e.Fh.Fi(t);
        }),
            r = t.mutations.map(function (t) {
          return e.Fh.Fi(t);
        }),
            i = v.fromMillis(t.localWriteTimeMs);
        return new ke(t.batchId, i, n, r);
      },
      /** Decodes a DbTarget into TargetData */
      t.prototype.mh = function (t) {
        var e,
            n = this.Nh(t.readTime),
            r = void 0 !== t.lastLimboFreeSnapshotVersion ? this.Nh(t.lastLimboFreeSnapshotVersion) : g.min();
        return e = void 0 !== t.query.documents ? this.Fh.xi(t.query) : this.Fh.Wi(t.query), new Dt(e, t.targetId, 0
        /* Listen */
        , t.lastListenSequenceNumber, n, r, A.fromBase64String(t.resumeToken));
      },
      /** Encodes TargetData into a DbTarget for storage locally. */
      t.prototype.Ph = function (t) {
        var e,
            n = this.$h(t.Ee),
            r = this.$h(t.lastLimboFreeSnapshotVersion);
        e = t.target.Ot() ? this.Fh.Oi(t.target) : this.Fh.Bi(t.target); // We can't store the resumeToken as a ByteString in IndexedDb, so we
        // convert it to a base64 string for storage.

        var i = t.resumeToken.toBase64(); // lastListenSequenceNumber is always 0 until we do real GC.

        return new Dn(t.targetId, t.target.canonicalId(), n, i, t.sequenceNumber, r, e);
      }, t;
    }(),
        rn = "Failed to obtain exclusive access to the persistence layer. To allow shared access, make sure to invoke `enablePersistence()` with `synchronizeTabs:true` in all tabs.",
        on =
    /** @class */
    function (t) {
      function n(e, n) {
        var r = this;
        return (r = t.call(this) || this).Mh = e, r.Oh = n, r;
      }

      return e.__extends(n, t), n;
    }(Le),
        sn =
    /** @class */
    function () {
      function t(e, n, r, i, o, s, u, a) {
        if (this.allowTabSynchronization = e, this.persistenceKey = n, this.clientId = r, this.Tr = s, this.xh = a, this.Bh = null, this.qh = !1, this.isPrimary = !1, this.networkEnabled = !0,
        /** Our window.unload handler, if registered. */
        this.Uh = null, this.inForeground = !1,
        /** Our 'visibilitychange' listener if registered. */
        this.Qh = null,
        /** The client metadata refresh task. */
        this.Wh = null,
        /** The last time we garbage collected the client metadata object store. */
        this.jh = Number.NEGATIVE_INFINITY,
        /** A listener to notify on primary state changes. */
        this.Kh = function (t) {
          return Promise.resolve();
        }, !t.Gh()) throw new c(h.UNIMPLEMENTED, "This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");
        if (this.hh = new hn(this, o), this.zh = n + t.Hh, this.serializer = new nn(u), this.document = i.document, this.Yh = new Xe(this.hh, this.serializer), this.jn = new Ge(), this.Qn = new Qe(this.serializer, this.jn), !i.window || !i.window.localStorage) throw new c(h.UNIMPLEMENTED, "IndexedDB persistence is only available on platforms that support LocalStorage.");
        this.window = i.window, this.Jh = this.window.localStorage;
      }

      return t.Nr = function (t, e) {
        if (t instanceof on) return Pn.Nr(t.Mh, e);
        throw ge();
      },
      /**
       * Attempt to start IndexedDb persistence.
       *
       * @return {Promise<void>} Whether persistence was enabled.
       */
      t.prototype.start = function () {
        var t = this;
        return Pn.Xh(this.zh, gn, new mn(this.serializer)).then(function (e) {
          return t.Zh = e, t.to();
        }).then(function () {
          if (!t.isPrimary && !t.allowTabSynchronization) // Fail `start()` if `synchronizeTabs` is disabled and we cannot
            // obtain the primary lease.
            throw new c(h.FAILED_PRECONDITION, rn);
          return t.eo(), t.so(), t.io(), t.runTransaction("getHighestListenSequenceNumber", "readonly", function (e) {
            return t.Yh.lh(e);
          });
        }).then(function (e) {
          t.Bh = new Pe(e, t.xh);
        }).then(function () {
          t.qh = !0;
        })["catch"](function (e) {
          return t.Zh && t.Zh.close(), Promise.reject(e);
        });
      },
      /**
       * Registers a listener that gets called when the primary state of the
       * instance changes. Upon registering, this listener is invoked immediately
       * with the current primary state.
       *
       * PORTING NOTE: This is only used for Web multi-tab.
       */
      t.prototype.no = function (t) {
        var n = this;
        return this.Kh = function (r) {
          return e.__awaiter(n, void 0, void 0, function () {
            return e.__generator(this, function (e) {
              return this.ro ? [2
              /*return*/
              , t(r)] : [2
              /*return*/
              ];
            });
          });
        }, t(this.isPrimary);
      },
      /**
       * Registers a listener that gets called when the database receives a
       * version change event indicating that it has deleted.
       *
       * PORTING NOTE: This is only used for Web multi-tab.
       */
      t.prototype.ho = function (t) {
        var n = this;
        this.Zh.oo(function (r) {
          return e.__awaiter(n, void 0, void 0, function () {
            return e.__generator(this, function (e) {
              switch (e.label) {
                case 0:
                  return null === r.newVersion ? [4
                  /*yield*/
                  , t()] : [3
                  /*break*/
                  , 2];

                case 1:
                  e.sent(), e.label = 2;

                case 2:
                  return [2
                  /*return*/
                  ];
              }
            });
          });
        });
      },
      /**
       * Adjusts the current network state in the client's metadata, potentially
       * affecting the primary lease.
       *
       * PORTING NOTE: This is only used for Web multi-tab.
       */
      t.prototype.ao = function (t) {
        var n = this;
        this.networkEnabled !== t && (this.networkEnabled = t, // Schedule a primary lease refresh for immediate execution. The eventual
        // lease update will be propagated via `primaryStateListener`.
        this.Tr.uo(function () {
          return e.__awaiter(n, void 0, void 0, function () {
            return e.__generator(this, function (t) {
              switch (t.label) {
                case 0:
                  return this.ro ? [4
                  /*yield*/
                  , this.to()] : [3
                  /*break*/
                  , 2];

                case 1:
                  t.sent(), t.label = 2;

                case 2:
                  return [2
                  /*return*/
                  ];
              }
            });
          });
        }));
      },
      /**
       * Updates the client metadata in IndexedDb and attempts to either obtain or
       * extend the primary lease for the local client. Asynchronously notifies the
       * primary state listener if the client either newly obtained or released its
       * primary lease.
       */
      t.prototype.to = function () {
        var t = this;
        return this.runTransaction("updateClientMetadataAndTryBecomePrimary", "readwrite", function (e) {
          return an(e).put(new On(t.clientId, Date.now(), t.networkEnabled, t.inForeground)).next(function () {
            if (t.isPrimary) return t.co(e).next(function (e) {
              e || (t.isPrimary = !1, t.Tr.uo(function () {
                return t.Kh(!1);
              }));
            });
          }).next(function () {
            return t._o(e);
          }).next(function (n) {
            return t.isPrimary && !n ? t.lo(e).next(function () {
              return !1;
            }) : !!n && t["do"](e).next(function () {
              return !0;
            });
          });
        })["catch"](function (e) {
          if (!t.allowTabSynchronization) {
            if (qn(e)) // Proceed with the existing state. Any subsequent access to
              // IndexedDB will verify the lease.
              return de("IndexedDbPersistence", "Failed to extend owner lease: ", e), t.isPrimary;
            throw e;
          }

          return de("IndexedDbPersistence", "Releasing owner lease after error during lease refresh", e),
          /* isPrimary= */
          !1;
        }).then(function (e) {
          t.isPrimary !== e && t.Tr.uo(function () {
            return t.Kh(e);
          }), t.isPrimary = e;
        });
      }, t.prototype.co = function (t) {
        var e = this;
        return un(t).get(En.key).next(function (t) {
          return xe.resolve(e.fo(t));
        });
      }, t.prototype.To = function (t) {
        return an(t)["delete"](this.clientId);
      },
      /**
       * If the garbage collection threshold has passed, prunes the
       * RemoteDocumentChanges and the ClientMetadata store based on the last update
       * time of all clients.
       */
      t.prototype.Eo = function () {
        return e.__awaiter(this, void 0, void 0, function () {
          var n = this;
          return e.__generator(this, function (e) {
            switch (e.label) {
              case 0:
                return !this.isPrimary || this.Io(this.jh, 18e5) ? [3
                /*break*/
                , 2] : (this.jh = Date.now(), [4
                /*yield*/
                , this.runTransaction("maybeGarbageCollectMultiClientState", "readwrite-primary", function (e) {
                  var r = t.Nr(e, On.store);
                  return r.Fr().next(function (t) {
                    var e = n.wo(t, 18e5),
                        i = t.filter(function (t) {
                      return -1 === e.indexOf(t);
                    }); // Delete metadata for clients that are no longer considered active.

                    return xe.forEach(i, function (t) {
                      return r["delete"](t.clientId);
                    }).next(function () {
                      return i;
                    });
                  });
                })["catch"](function () {
                  return [];
                })]);

              case 1:
                // Delete potential leftover entries that may continue to mark the
                // inactive clients as zombied in LocalStorage.
                // Ideally we'd delete the IndexedDb and LocalStorage zombie entries for
                // the client atomically, but we can't. So we opt to delete the IndexedDb
                // entries first to avoid potentially reviving a zombied client.
                e.sent().forEach(function (t) {
                  n.window.localStorage.removeItem(n.Ro(t.clientId));
                }), e.label = 2;

              case 2:
                return [2
                /*return*/
                ];
            }
          });
        });
      },
      /**
       * Schedules a recurring timer to update the client metadata and to either
       * extend or acquire the primary lease if the client is eligible.
       */
      t.prototype.io = function () {
        var t = this;
        this.Wh = this.Tr.yr("client_metadata_refresh"
        /* ClientMetadataRefresh */
        , 4e3, function () {
          return t.to().then(function () {
            return t.Eo();
          }).then(function () {
            return t.io();
          });
        });
      },
      /** Checks whether `client` is the local client. */
      t.prototype.fo = function (t) {
        return !!t && t.ownerId === this.clientId;
      },
      /**
       * Evaluate the state of all active clients and determine whether the local
       * client is or can act as the holder of the primary lease. Returns whether
       * the client is eligible for the lease, but does not actually acquire it.
       * May return 'false' even if there is no active leaseholder and another
       * (foreground) client should become leaseholder instead.
       */
      t.prototype._o = function (t) {
        var e = this;
        return un(t).get(En.key).next(function (n) {
          // A client is eligible for the primary lease if:
          // - its network is enabled and the client's tab is in the foreground.
          // - its network is enabled and no other client's tab is in the
          //   foreground.
          // - every clients network is disabled and the client's tab is in the
          //   foreground.
          // - every clients network is disabled and no other client's tab is in
          //   the foreground.
          if (null !== n && e.Io(n.leaseTimestampMs, 5e3) && !e.Ao(n.ownerId)) {
            if (e.fo(n) && e.networkEnabled) return !0;

            if (!e.fo(n)) {
              if (!n.allowTabSynchronization) // Fail the `canActAsPrimary` check if the current leaseholder has
                // not opted into multi-tab synchronization. If this happens at
                // client startup, we reject the Promise returned by
                // `enablePersistence()` and the user can continue to use Firestore
                // with in-memory persistence.
                // If this fails during a lease refresh, we will instead block the
                // AsyncQueue from executing further operations. Note that this is
                // acceptable since mixing & matching different `synchronizeTabs`
                // settings is not supported.
                // TODO(b/114226234): Remove this check when `synchronizeTabs` can
                // no longer be turned off.
                throw new c(h.FAILED_PRECONDITION, rn);
              return !1;
            }
          }

          return !(!e.networkEnabled || !e.inForeground) || an(t).Fr().next(function (t) {
            return void 0 === e.wo(t, 5e3).find(function (t) {
              if (e.clientId !== t.clientId) {
                var n = !e.networkEnabled && t.networkEnabled,
                    r = !e.inForeground && t.inForeground,
                    i = e.networkEnabled === t.networkEnabled;
                if (n || r && i) return !0;
              }

              return !1;
            });
          });
        }).next(function (t) {
          return e.isPrimary !== t && de("IndexedDbPersistence", "Client " + (t ? "is" : "is not") + " eligible for a primary lease."), t;
        });
      }, t.prototype.mo = function () {
        return e.__awaiter(this, void 0, void 0, function () {
          var t = this;
          return e.__generator(this, function (e) {
            switch (e.label) {
              case 0:
                // The shutdown() operations are idempotent and can be called even when
                // start() aborted (e.g. because it couldn't acquire the persistence lease).
                return this.qh = !1, this.Po(), this.Wh && (this.Wh.cancel(), this.Wh = null), this.Vo(), this.po(), [4
                /*yield*/
                , this.runTransaction("shutdown", "readwrite", function (e) {
                  return t.lo(e).next(function () {
                    return t.To(e);
                  });
                })["catch"](function (t) {
                  de("IndexedDbPersistence", "Proceeding with shutdown despite failure: ", t);
                })];

              case 1:
                // The shutdown() operations are idempotent and can be called even when
                // start() aborted (e.g. because it couldn't acquire the persistence lease).
                return e.sent(), this.Zh.close(), // Remove the entry marking the client as zombied from LocalStorage since
                // we successfully deleted its metadata from IndexedDb.
                this.yo(), [2
                /*return*/
                ];
            }
          });
        });
      },
      /**
       * Returns clients that are not zombied and have an updateTime within the
       * provided threshold.
       */
      t.prototype.wo = function (t, e) {
        var n = this;
        return t.filter(function (t) {
          return n.Io(t.updateTimeMs, e) && !n.Ao(t.clientId);
        });
      },
      /**
       * Returns the IDs of the clients that are currently active. If multi-tab
       * is not supported, returns an array that only contains the local client's
       * ID.
       *
       * PORTING NOTE: This is only used for Web multi-tab.
       */
      t.prototype.bo = function () {
        var t = this;
        return this.runTransaction("getActiveClients", "readonly", function (e) {
          return an(e).Fr().next(function (e) {
            return t.wo(e, 18e5).map(function (t) {
              return t.clientId;
            });
          });
        });
      }, t.clearPersistence = function (n) {
        return e.__awaiter(this, void 0, void 0, function () {
          var r;
          return e.__generator(this, function (e) {
            switch (e.label) {
              case 0:
                return t.Gh() ? (r = n + t.Hh, [4
                /*yield*/
                , Pn["delete"](r)]) : [2
                /*return*/
                , Promise.resolve()];

              case 1:
                return e.sent(), [2
                /*return*/
                ];
            }
          });
        });
      }, Object.defineProperty(t.prototype, "ro", {
        get: function get() {
          return this.qh;
        },
        enumerable: !0,
        configurable: !0
      }), t.prototype.vo = function (t) {
        return fn.So(t, this.serializer, this.jn, this.hh);
      }, t.prototype.Do = function () {
        return this.Yh;
      }, t.prototype.Co = function () {
        return this.Qn;
      }, t.prototype.Fo = function () {
        return this.jn;
      }, t.prototype.runTransaction = function (t, e, n) {
        var r = this;
        de("IndexedDbPersistence", "Starting transaction:", t);
        var i,
            o = "readonly" === e ? "readonly" : "readwrite"; // Do all transactions as readwrite against all object stores, since we
        // are the only reader/writer.

        return this.Zh.runTransaction(o, Vn, function (o) {
          return i = new on(o, r.Bh ? r.Bh.next() : Pe.dr), "readwrite-primary" === e ? r.co(i).next(function (t) {
            return !!t || r._o(i);
          }).next(function (e) {
            if (!e) throw ye("Failed to obtain primary lease for action '" + t + "'."), r.isPrimary = !1, r.Tr.uo(function () {
              return r.Kh(!1);
            }), new c(h.FAILED_PRECONDITION, Re);
            return n(i);
          }).next(function (t) {
            return r["do"](i).next(function () {
              return t;
            });
          }) : r.No(i).next(function () {
            return n(i);
          });
        }).then(function (t) {
          return i.Un(), t;
        });
      },
      /**
       * Verifies that the current tab is the primary leaseholder or alternatively
       * that the leaseholder has opted into multi-tab synchronization.
       */
      // TODO(b/114226234): Remove this check when `synchronizeTabs` can no longer
      // be turned off.
      t.prototype.No = function (t) {
        var e = this;
        return un(t).get(En.key).next(function (t) {
          if (null !== t && e.Io(t.leaseTimestampMs, 5e3) && !e.Ao(t.ownerId) && !e.fo(t) && (!e.allowTabSynchronization || !t.allowTabSynchronization)) throw new c(h.FAILED_PRECONDITION, rn);
        });
      },
      /**
       * Obtains or extends the new primary lease for the local client. This
       * method does not verify that the client is eligible for this lease.
       */
      t.prototype["do"] = function (t) {
        var e = new En(this.clientId, this.allowTabSynchronization, Date.now());
        return un(t).put(En.key, e);
      }, t.Gh = function () {
        return Pn.Gh();
      },
      /**
       * Generates a string used as a prefix when storing data in IndexedDB and
       * LocalStorage.
       */
      t.$o = function (t) {
        // Use two different prefix formats:
        //   * firestore / persistenceKey / projectID . databaseID / ...
        //   * firestore / persistenceKey / projectID / ...
        // projectIDs are DNS-compatible names and cannot contain dots
        // so there's no danger of collisions.
        var e = t.ii.projectId;
        return t.ii.ln || (e += "." + t.ii.database), "firestore/" + t.persistenceKey + "/" + e + "/";
      },
      /** Checks the primary lease and removes it if we are the current primary. */
      t.prototype.lo = function (t) {
        var e = this,
            n = un(t);
        return n.get(En.key).next(function (t) {
          return e.fo(t) ? (de("IndexedDbPersistence", "Releasing primary lease."), n["delete"](En.key)) : xe.resolve();
        });
      },
      /** Verifies that `updateTimeMs` is within `maxAgeMs`. */
      t.prototype.Io = function (t, e) {
        var n = Date.now();
        return !(t < n - e || t > n && (ye("Detected an update time that is in the future: " + t + " > " + n), 1));
      }, t.prototype.eo = function () {
        var t = this;
        null !== this.document && "function" == typeof this.document.addEventListener && (this.Qh = function () {
          t.Tr.uo(function () {
            return t.inForeground = "visible" === t.document.visibilityState, t.to();
          });
        }, this.document.addEventListener("visibilitychange", this.Qh), this.inForeground = "visible" === this.document.visibilityState);
      }, t.prototype.Vo = function () {
        this.Qh && (this.document.removeEventListener("visibilitychange", this.Qh), this.Qh = null);
      },
      /**
       * Attaches a window.unload handler that will synchronously write our
       * clientId to a "zombie client id" location in LocalStorage. This can be used
       * by tabs trying to acquire the primary lease to determine that the lease
       * is no longer valid even if the timestamp is recent. This is particularly
       * important for the refresh case (so the tab correctly re-acquires the
       * primary lease). LocalStorage is used for this rather than IndexedDb because
       * it is a synchronous API and so can be used reliably from  an unload
       * handler.
       */
      t.prototype.so = function () {
        var t = this;
        "function" == typeof this.window.addEventListener && (this.Uh = function () {
          // Note: In theory, this should be scheduled on the AsyncQueue since it
          // accesses internal state. We execute this code directly during shutdown
          // to make sure it gets a chance to run.
          t.Po(), t.Tr.uo(function () {
            return t.mo();
          });
        }, this.window.addEventListener("unload", this.Uh));
      }, t.prototype.po = function () {
        this.Uh && (this.window.removeEventListener("unload", this.Uh), this.Uh = null);
      },
      /**
       * Returns whether a client is "zombied" based on its LocalStorage entry.
       * Clients become zombied when their tab closes without running all of the
       * cleanup logic in `shutdown()`.
       */
      t.prototype.Ao = function (t) {
        try {
          var e = null !== this.Jh.getItem(this.Ro(t));
          return de("IndexedDbPersistence", "Client '" + t + "' " + (e ? "is" : "is not") + " zombied in LocalStorage"), e;
        } catch (t) {
          // Gracefully handle if LocalStorage isn't working.
          return ye("IndexedDbPersistence", "Failed to get zombied client id.", t), !1;
        }
      },
      /**
       * Record client as zombied (a client that had its tab closed). Zombied
       * clients are ignored during primary tab selection.
       */
      t.prototype.Po = function () {
        try {
          this.Jh.setItem(this.Ro(this.clientId), String(Date.now()));
        } catch (t) {
          // Gracefully handle if LocalStorage isn't available / working.
          ye("Failed to set zombie client id.", t);
        }
      },
      /** Removes the zombied client entry if it exists. */
      t.prototype.yo = function () {
        try {
          this.Jh.removeItem(this.Ro(this.clientId));
        } catch (t) {// Ignore
        }
      }, t.prototype.Ro = function (t) {
        return "firestore_zombie_" + this.persistenceKey + "_" + t;
      }, t;
    }();
    /**
     * A helper function for figuring out what kind of query has been stored.
     */

    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /**
     * The name of the main (and currently only) IndexedDB database. this name is
     * appended to the prefix provided to the IndexedDbPersistence constructor.
     */

    /**
     * Helper to get a typed SimpleDbStore for the primary client object store.
     */


    function un(t) {
      return sn.Nr(t, En.store);
    }
    /**
     * Helper to get a typed SimpleDbStore for the client metadata object store.
     */


    function an(t) {
      return sn.Nr(t, On.store);
    }
    /** Provides LRU functionality for IndexedDB persistence. */


    sn.Hh = "main";

    var hn =
    /** @class */
    function () {
      function t(t, e) {
        this.db = t, this.ko = new Xn(this, e);
      }

      return t.prototype.Lo = function (t) {
        var e = this.Mo(t);
        return this.db.Do().Vh(t).next(function (t) {
          return e.next(function (e) {
            return t + e;
          });
        });
      }, t.prototype.Mo = function (t) {
        var e = 0;
        return this.Oo(t, function (t) {
          e++;
        }).next(function () {
          return e;
        });
      }, t.prototype.js = function (t, e) {
        return this.db.Do().js(t, e);
      }, t.prototype.Oo = function (t, e) {
        return this.xo(t, function (t, n) {
          return e(n);
        });
      }, t.prototype.yh = function (t, e, n) {
        return cn(t, n);
      }, t.prototype.vh = function (t, e, n) {
        return cn(t, n);
      }, t.prototype.Ah = function (t, e, n) {
        return this.db.Do().Ah(t, e, n);
      }, t.prototype.Bo = function (t, e) {
        return cn(t, e);
      },
      /**
       * Returns true if anything would prevent this document from being garbage
       * collected, given that the document in question is not present in any
       * targets and has a sequence number less than or equal to the upper bound for
       * the collection run.
       */
      t.prototype.qo = function (t, e) {
        /** Returns true if any mutation queue contains the given document. */
        return function (t, e) {
          var n = !1;
          return vn(t).Uo(function (r) {
            return ln(t, r, e).next(function (t) {
              return t && (n = !0), xe.resolve(!t);
            });
          }).next(function () {
            return n;
          });
        }(t, e);
      }, t.prototype.Qo = function (t, e) {
        var n = this,
            r = this.db.Co().Yr(),
            i = [],
            o = 0;
        return this.xo(t, function (s, u) {
          if (u <= e) {
            var a = n.qo(t, s).next(function (e) {
              if (!e) // Our size accounting requires us to read all documents before
                // removing them.
                return o++, r.Ln(t, s).next(function () {
                  return r.kn(s), en(t)["delete"]([0, qe(s.path)]);
                });
            });
            i.push(a);
          }
        }).next(function () {
          return xe.vn(i);
        }).next(function () {
          return r.apply(t);
        }).next(function () {
          return o;
        });
      }, t.prototype.removeTarget = function (t, e) {
        var n = e.Ie(t.Oh);
        return this.db.Do().Ih(t, n);
      }, t.prototype.Wo = function (t, e) {
        return cn(t, e);
      },
      /**
       * Call provided function for each document in the cache that is 'orphaned'. Orphaned
       * means not a part of any target, so the only entry in the target-document index for
       * that document will be the sentinel row (targetId 0), which will also have the sequence
       * number for the last time the document was accessed.
       */
      t.prototype.xo = function (t, e) {
        var n,
            r = en(t),
            i = Pe.dr;
        return r.Ur({
          index: xn.documentTargetsIndex
        }, function (t, r) {
          var o = t[0],
              s = (t[1], r.path),
              u = r.sequenceNumber;
          0 === o ? ( // if nextToReport is valid, report it, this is a new key so the
          // last one must not be a member of any targets.
          i !== Pe.dr && e(new _(Fe(n)), i), // set nextToReport to be this sequence number. It's the next one we
          // might report, if we don't find any targets for this document.
          // Note that the sequence number must be defined when the targetId
          // is 0.
          i = u, n = s) : // set nextToReport to be invalid, we know we don't need to report
          // this one since we found a target for it.
          i = Pe.dr;
        }).next(function () {
          // Since we report sequence numbers after getting to the next key, we
          // need to check if the last key we iterated over was an orphaned
          // document and report it.
          i !== Pe.dr && e(new _(Fe(n)), i);
        });
      }, t.prototype.jo = function (t) {
        return this.db.Co().Zr(t);
      }, t;
    }();

    function cn(t, e) {
      return en(t).put(
      /**
      * @return A value suitable for writing a sentinel row in the target-document
      * store.
      */
      function (t, e) {
        return new xn(0, qe(t.path), e);
      }(e, t.Oh));
    }
    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /** A mutation queue for a specific user, backed by IndexedDB. */


    var fn =
    /** @class */
    function () {
      function t(
      /**
       * The normalized userId (e.g. null UID => "" userId) used to store /
       * retrieve mutations.
       */
      t, e, n, r) {
        this.userId = t, this.serializer = e, this.jn = n, this.hh = r,
        /**
             * Caches the document keys for pending mutation batches. If the mutation
             * has been removed from IndexedDb, the cached value may continue to
             * be used to retrieve the batch's document keys. To remove a cached value
             * locally, `removeCachedMutationKeys()` should be invoked either directly
             * or through `removeMutationBatches()`.
             *
             * With multi-tab, when the primary client acknowledges or rejects a mutation,
             * this cache is used by secondary clients to invalidate the local
             * view of the documents that were previously affected by the mutation.
             */
        // PORTING NOTE: Multi-tab only.
        this.Ko = {}
        /**
        * Creates a new mutation queue for the given user.
        * @param user The user for which to create a mutation queue.
        * @param serializer The serializer to use when persisting to IndexedDb.
        */
        ;
      }

      return t.So = function (e, n, r, i) {
        // TODO(mcg): Figure out what constraints there are on userIDs
        // In particular, are there any reserved characters? are empty ids allowed?
        // For the moment store these together in the same mutations table assuming
        // that empty userIDs aren't allowed.
        return me("" !== e.uid), new t(e.t() ? e.uid : "", n, r, i);
      }, t.prototype.Go = function (t) {
        var e = !0,
            n = IDBKeyRange.bound([this.userId, Number.NEGATIVE_INFINITY], [this.userId, Number.POSITIVE_INFINITY]);
        return dn(t).Ur({
          index: _n.userMutationsIndex,
          range: n
        }, function (t, n, r) {
          e = !1, r.done();
        }).next(function () {
          return e;
        });
      }, t.prototype.zo = function (t, e, n) {
        return this.Ho(t).next(function (e) {
          // We can't store the resumeToken as a ByteString in IndexedDB, so we
          // convert it to a Base64 string for storage.
          return e.lastStreamToken = n.toBase64(), vn(t).put(e);
        });
      }, t.prototype.Yo = function (t) {
        return this.Ho(t).next(function (t) {
          return A.fromBase64String(t.lastStreamToken);
        });
      }, t.prototype.Jo = function (t, e) {
        return this.Ho(t).next(function (n) {
          // We can't store the resumeToken as a ByteString in IndexedDB, so we
          // convert it to a Base64 string for storage.
          return n.lastStreamToken = e.toBase64(), vn(t).put(n);
        });
      }, t.prototype.Xo = function (t, e, n, r) {
        var i = this,
            o = yn(t),
            s = dn(t); // The IndexedDb implementation in Chrome (and Firefox) does not handle
        // compound indices that include auto-generated keys correctly. To ensure
        // that the index entry is added correctly in all browsers, we perform two
        // writes: The first write is used to retrieve the next auto-generated Batch
        // ID, and the second write populates the index and stores the actual
        // mutation batch.
        // See: https://bugs.chromium.org/p/chromium/issues/detail?id=701972
        // We write an empty object to obtain key
        // eslint-disable-next-line @typescript-eslint/no-explicit-any

        return s.add({}).next(function (u) {
          me("number" == typeof u);

          for (var a = new ke(u, e, n, r), h = i.serializer.kh(i.userId, a), c = [], f = new Pt(function (t, e) {
            return be(t.j(), e.j());
          }), l = 0, p = r; l < p.length; l++) {
            var d = p[l],
                y = Tn.key(i.userId, d.key.path, u);
            f = f.add(d.key.path.L()), c.push(s.put(h)), c.push(o.put(y, Tn.PLACEHOLDER));
          }

          return f.forEach(function (e) {
            c.push(i.jn.Dr(t, e));
          }), t.qn(function () {
            i.Ko[u] = a.keys();
          }), xe.vn(c).next(function () {
            return a;
          });
        });
      }, t.prototype.Zo = function (t, e) {
        var n = this;
        return dn(t).get(e).next(function (t) {
          return t ? (me(t.userId === n.userId), n.serializer.Lh(t)) : null;
        });
      },
      /**
       * Returns the document keys for the mutation batch with the given batchId.
       * For primary clients, this method returns `null` after
       * `removeMutationBatches()` has been called. Secondary clients return a
       * cached result until `removeCachedMutationKeys()` is invoked.
       */
      // PORTING NOTE: Multi-tab only.
      t.prototype.ta = function (t, e) {
        var n = this;
        return this.Ko[e] ? xe.resolve(this.Ko[e]) : this.Zo(t, e).next(function (t) {
          if (t) {
            var r = t.keys();
            return n.Ko[e] = r, r;
          }

          return null;
        });
      }, t.prototype.ea = function (t, e) {
        var n = this,
            r = e + 1,
            i = IDBKeyRange.lowerBound([this.userId, r]),
            o = null;
        return dn(t).Ur({
          index: _n.userMutationsIndex,
          range: i
        }, function (t, e, i) {
          e.userId === n.userId && (me(e.batchId >= r), o = n.serializer.Lh(e)), i.done();
        }).next(function () {
          return o;
        });
      }, t.prototype.sa = function (t) {
        var e = IDBKeyRange.upperBound([this.userId, Number.POSITIVE_INFINITY]),
            n = -1;
        return dn(t).Ur({
          index: _n.userMutationsIndex,
          range: e,
          reverse: !0
        }, function (t, e, r) {
          n = e.batchId, r.done();
        }).next(function () {
          return n;
        });
      }, t.prototype.ia = function (t) {
        var e = this,
            n = IDBKeyRange.bound([this.userId, -1], [this.userId, Number.POSITIVE_INFINITY]);
        return dn(t).Fr(_n.userMutationsIndex, n).next(function (t) {
          return t.map(function (t) {
            return e.serializer.Lh(t);
          });
        });
      }, t.prototype.Gn = function (t, e) {
        var n = this,
            r = Tn.prefixForPath(this.userId, e.path),
            i = IDBKeyRange.lowerBound(r),
            o = []; // Scan the document-mutation index starting with a prefix starting with
        // the given documentKey.

        return yn(t).Ur({
          range: i
        }, function (r, i, s) {
          var u = r[0],
              a = r[1],
              h = r[2],
              c = Fe(a); // Only consider rows matching exactly the specific key of
          // interest. Note that because we order by path first, and we
          // order terminators before path separators, we'll encounter all
          // the index rows for documentKey contiguously. In particular, all
          // the rows for documentKey will occur before any rows for
          // documents nested in a subcollection beneath documentKey so we
          // can stop as soon as we hit any such row.

          if (u === n.userId && e.path.isEqual(c)) // Look up the mutation batch in the store.
            return dn(t).get(h).next(function (t) {
              if (!t) throw ge();
              me(t.userId === n.userId), o.push(n.serializer.Lh(t));
            });
          s.done();
        }).next(function () {
          return o;
        });
      }, t.prototype.Xn = function (t, e) {
        var n = this,
            r = new Pt(be),
            i = [];
        return e.forEach(function (e) {
          var o = Tn.prefixForPath(n.userId, e.path),
              s = IDBKeyRange.lowerBound(o),
              u = yn(t).Ur({
            range: s
          }, function (t, i, o) {
            var s = t[0],
                u = t[1],
                a = t[2],
                h = Fe(u); // Only consider rows matching exactly the specific key of
            // interest. Note that because we order by path first, and we
            // order terminators before path separators, we'll encounter all
            // the index rows for documentKey contiguously. In particular, all
            // the rows for documentKey will occur before any rows for
            // documents nested in a subcollection beneath documentKey so we
            // can stop as soon as we hit any such row.

            s === n.userId && e.path.isEqual(h) ? r = r.add(a) : o.done();
          });
          i.push(u);
        }), xe.vn(i).next(function () {
          return n.na(t, r);
        });
      }, t.prototype.nr = function (t, e) {
        var n = this,
            r = e.path,
            i = r.length + 1,
            o = Tn.prefixForPath(this.userId, r),
            s = IDBKeyRange.lowerBound(o),
            u = new Pt(be);
        return yn(t).Ur({
          range: s
        }, function (t, e, o) {
          var s = t[0],
              a = t[1],
              h = t[2],
              c = Fe(a);
          s === n.userId && r.q(c) ? // Rows with document keys more than one segment longer than the
          // query path can't be matches. For example, a query on 'rooms'
          // can't match the document /rooms/abc/messages/xyx.
          // TODO(mcg): we'll need a different scanner when we implement
          // ancestor queries.
          c.length === i && (u = u.add(h)) : o.done();
        }).next(function () {
          return n.na(t, u);
        });
      }, t.prototype.na = function (t, e) {
        var n = this,
            r = [],
            i = []; // TODO(rockwood): Implement this using iterate.

        return e.forEach(function (e) {
          i.push(dn(t).get(e).next(function (t) {
            if (null === t) throw ge();
            me(t.userId === n.userId), r.push(n.serializer.Lh(t));
          }));
        }), xe.vn(i).next(function () {
          return r;
        });
      }, t.prototype.ra = function (t, e) {
        var n = this;
        return pn(t.Mh, this.userId, e).next(function (r) {
          return t.qn(function () {
            n.ha(e.batchId);
          }), xe.forEach(r, function (e) {
            return n.hh.Bo(t, e);
          });
        });
      },
      /**
       * Clears the cached keys for a mutation batch. This method should be
       * called by secondary clients after they process mutation updates.
       *
       * Note that this method does not have to be called from primary clients as
       * the corresponding cache entries are cleared when an acknowledged or
       * rejected batch is removed from the mutation queue.
       */
      // PORTING NOTE: Multi-tab only
      t.prototype.ha = function (t) {
        delete this.Ko[t];
      }, t.prototype.oa = function (t) {
        var e = this;
        return this.Go(t).next(function (n) {
          if (!n) return xe.resolve(); // Verify that there are no entries in the documentMutations index if
          // the queue is empty.

          var r = IDBKeyRange.lowerBound(Tn.prefixForUser(e.userId)),
              i = [];
          return yn(t).Ur({
            range: r
          }, function (t, n, r) {
            if (t[0] === e.userId) {
              var o = Fe(t[1]);
              i.push(o);
            } else r.done();
          }).next(function () {
            me(0 === i.length);
          });
        });
      }, t.prototype.Ch = function (t, e) {
        return ln(t, this.userId, e);
      }, // PORTING NOTE: Multi-tab only (state is held in memory in other clients).

      /** Returns the mutation queue's metadata from IndexedDb. */
      t.prototype.Ho = function (t) {
        var e = this;
        return vn(t).get(this.userId).next(function (t) {
          return t || new bn(e.userId, -1,
          /*lastStreamToken=*/
          "");
        });
      }, t;
    }();
    /**
     * @return true if the mutation queue for the given user contains a pending
     *         mutation for the given key.
     */


    function ln(t, e, n) {
      var r = Tn.prefixForPath(e, n.path),
          i = r[1],
          o = IDBKeyRange.lowerBound(r),
          s = !1;
      return yn(t).Ur({
        range: o,
        Dh: !0
      }, function (t, n, r) {
        var o = t[0],
            u = t[1];
        t[2];
        o === e && u === i && (s = !0), r.done();
      }).next(function () {
        return s;
      });
    }

    function pn(t, e, n) {
      var r = t.store(_n.store),
          i = t.store(Tn.store),
          o = [],
          s = IDBKeyRange.only(n.batchId),
          u = 0,
          a = r.Ur({
        range: s
      }, function (t, e, n) {
        return u++, n["delete"]();
      });
      o.push(a.next(function () {
        me(1 === u);
      }));

      for (var h = [], c = 0, f = n.mutations; c < f.length; c++) {
        var l = f[c],
            p = Tn.key(e, l.key.path, n.batchId);
        o.push(i["delete"](p)), h.push(l.key);
      }

      return xe.vn(o).next(function () {
        return h;
      });
    }
    /**
     * Helper to get a typed SimpleDbStore for the mutations object store.
     */


    function dn(t) {
      return sn.Nr(t, _n.store);
    }
    /**
     * Helper to get a typed SimpleDbStore for the mutationQueues object store.
     */


    function yn(t) {
      return sn.Nr(t, Tn.store);
    }
    /**
     * Helper to get a typed SimpleDbStore for the mutationQueues object store.
     */


    function vn(t) {
      return sn.Nr(t, bn.store);
    }
    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /**
     * Schema Version for the Web client:
     * 1.  Initial version including Mutation Queue, Query Cache, and Remote
     *     Document Cache
     * 2.  Used to ensure a targetGlobal object exists and add targetCount to it. No
     *     longer required because migration 3 unconditionally clears it.
     * 3.  Dropped and re-created Query Cache to deal with cache corruption related
     *     to limbo resolution. Addresses
     *     https://github.com/firebase/firebase-ios-sdk/issues/1548
     * 4.  Multi-Tab Support.
     * 5.  Removal of held write acks.
     * 6.  Create document global for tracking document cache size.
     * 7.  Ensure every cached document has a sentinel row with a sequence number.
     * 8.  Add collection-parent index for Collection Group queries.
     * 9.  Change RemoteDocumentChanges store to be keyed by readTime rather than
     *     an auto-incrementing ID. This is required for Index-Free queries.
     * 10. Rewrite the canonical IDs to the explicit Protobuf-based format.
     */


    var gn = 10,
        mn =
    /** @class */
    function () {
      function t(t) {
        this.serializer = t;
      }
      /**
       * Performs database creation and schema upgrades.
       *
       * Note that in production, this method is only ever used to upgrade the schema
       * to SCHEMA_VERSION. Different values of toVersion are only used for testing
       * and local feature development.
       */


      return t.prototype.createOrUpgrade = function (t, e, n, r) {
        var i = this;
        me(n < r && n >= 0 && r <= gn);
        var o = new Mn(e);
        n < 1 && r >= 1 && (function (t) {
          t.createObjectStore(En.store);
        }(t), function (t) {
          t.createObjectStore(bn.store, {
            keyPath: bn.keyPath
          }), t.createObjectStore(_n.store, {
            keyPath: _n.keyPath,
            autoIncrement: !0
          }).createIndex(_n.userMutationsIndex, _n.userMutationsKeyPath, {
            unique: !0
          }), t.createObjectStore(Tn.store);
        }(t), Ln(t), function (t) {
          t.createObjectStore(An.store);
        }(t)); // Migration 2 to populate the targetGlobal object no longer needed since
        // migration 3 unconditionally clears it.

        var s = xe.resolve();
        return n < 3 && r >= 3 && ( // Brand new clients don't need to drop and recreate--only clients that
        // potentially have corrupt data.
        0 !== n && (function (t) {
          t.deleteObjectStore(xn.store), t.deleteObjectStore(Dn.store), t.deleteObjectStore(Sn.store);
        }(t), Ln(t)), s = s.next(function () {
          /**
          * Creates the target global singleton row.
          *
          * @param {IDBTransaction} txn The version upgrade transaction for indexeddb
          */
          return function (t) {
            var e = t.store(Sn.store),
                n = new Sn(
            /*highestTargetId=*/
            0,
            /*lastListenSequenceNumber=*/
            0, g.min().C(),
            /*targetCount=*/
            0);
            return e.put(Sn.key, n);
          }(o);
        })), n < 4 && r >= 4 && (0 !== n && ( // Schema version 3 uses auto-generated keys to generate globally unique
        // mutation batch IDs (this was previously ensured internally by the
        // client). To migrate to the new schema, we have to read all mutations
        // and write them back out. We preserve the existing batch IDs to guarantee
        // consistency with other object stores. Any further mutation batch IDs will
        // be auto-generated.
        s = s.next(function () {
          return function (t, e) {
            return e.store(_n.store).Fr().next(function (n) {
              t.deleteObjectStore(_n.store), t.createObjectStore(_n.store, {
                keyPath: _n.keyPath,
                autoIncrement: !0
              }).createIndex(_n.userMutationsIndex, _n.userMutationsKeyPath, {
                unique: !0
              });
              var r = e.store(_n.store),
                  i = n.map(function (t) {
                return r.put(t);
              });
              return xe.vn(i);
            });
          }(t, o);
        })), s = s.next(function () {
          !function (t) {
            t.createObjectStore(On.store, {
              keyPath: On.keyPath
            });
          }(t);
        })), n < 5 && r >= 5 && (s = s.next(function () {
          return i.removeAcknowledgedMutations(o);
        })), n < 6 && r >= 6 && (s = s.next(function () {
          return function (t) {
            t.createObjectStore(kn.store);
          }(t), i.addDocumentGlobal(o);
        })), n < 7 && r >= 7 && (s = s.next(function () {
          return i.ensureSequenceNumbers(o);
        })), n < 8 && r >= 8 && (s = s.next(function () {
          return i.createCollectionParentIndex(t, o);
        })), n < 9 && r >= 9 && (s = s.next(function () {
          // Multi-Tab used to manage its own changelog, but this has been moved
          // to the DbRemoteDocument object store itself. Since the previous change
          // log only contained transient data, we can drop its object store.
          !function (t) {
            t.objectStoreNames.contains("remoteDocumentChanges") && t.deleteObjectStore("remoteDocumentChanges");
          }(t), function (t) {
            var e = t.objectStore(An.store);
            e.createIndex(An.readTimeIndex, An.readTimeIndexPath, {
              unique: !1
            }), e.createIndex(An.collectionReadTimeIndex, An.collectionReadTimeIndexPath, {
              unique: !1
            });
          }(e);
        })), n < 10 && r >= 10 && (s = s.next(function () {
          return i.rewriteCanonicalIds(o);
        })), s;
      }, t.prototype.addDocumentGlobal = function (t) {
        var e = 0;
        return t.store(An.store).Ur(function (t, n) {
          e += Je(n);
        }).next(function () {
          var n = new kn(e);
          return t.store(kn.store).put(kn.key, n);
        });
      }, t.prototype.removeAcknowledgedMutations = function (t) {
        var e = this,
            n = t.store(bn.store),
            r = t.store(_n.store);
        return n.Fr().next(function (n) {
          return xe.forEach(n, function (n) {
            var i = IDBKeyRange.bound([n.userId, -1], [n.userId, n.lastAcknowledgedBatchId]);
            return r.Fr(_n.userMutationsIndex, i).next(function (r) {
              return xe.forEach(r, function (r) {
                me(r.userId === n.userId);
                var i = e.serializer.Lh(r);
                return pn(t, n.userId, i).next(function () {});
              });
            });
          });
        });
      },
      /**
       * Ensures that every document in the remote document cache has a corresponding sentinel row
       * with a sequence number. Missing rows are given the most recently used sequence number.
       */
      t.prototype.ensureSequenceNumbers = function (t) {
        var e = t.store(xn.store),
            n = t.store(An.store);
        return t.store(Sn.store).get(Sn.key).next(function (t) {
          var r = [];
          return n.Ur(function (n, i) {
            var o = new w(n),
                s = function (t) {
              return [0, qe(t)];
            }(o);

            r.push(e.get(s).next(function (n) {
              return n ? xe.resolve() : function (n) {
                return e.put(new xn(0, qe(n), t.highestListenSequenceNumber));
              }(o);
            }));
          }).next(function () {
            return xe.vn(r);
          });
        });
      }, t.prototype.createCollectionParentIndex = function (t, e) {
        // Create the index.
        t.createObjectStore(Rn.store, {
          keyPath: Rn.keyPath
        });

        var n = e.store(Rn.store),
            r = new ze(),
            i = function i(t) {
          if (r.add(t)) {
            var e = t.O(),
                i = t.L();
            return n.put({
              collectionId: e,
              parent: qe(i)
            });
          }
        }; // Helper to add an index entry iff we haven't already written it.
        // Index existing remote documents.


        return e.store(An.store).Ur({
          Dh: !0
        }, function (t, e) {
          var n = new w(t);
          return i(n.L());
        }).next(function () {
          return e.store(Tn.store).Ur({
            Dh: !0
          }, function (t, e) {
            t[0];
            var n = t[1],
                r = (t[2], Fe(n));
            return i(r.L());
          });
        });
      }, t.prototype.rewriteCanonicalIds = function (t) {
        var e = this,
            n = t.store(Dn.store);
        return n.Ur(function (t, r) {
          var i = e.serializer.mh(r),
              o = e.serializer.Ph(i);
          return n.put(o);
        });
      }, t;
    }(),
        wn = function wn(t, e) {
      this.seconds = t, this.nanoseconds = e;
    },
        En = function En(t,
    /** Whether to allow shared access from multiple tabs. */
    e, n) {
      this.ownerId = t, this.allowTabSynchronization = e, this.leaseTimestampMs = n;
    };
    /** Performs database creation and schema upgrades. */

    /**
     * Name of the IndexedDb object store.
     *
     * Note that the name 'owner' is chosen to ensure backwards compatibility with
     * older clients that only supported single locked access to the persistence
     * layer.
     */


    En.store = "owner",
    /**
         * The key string used for the single object that exists in the
         * DbPrimaryClient store.
         */
    En.key = "owner";

    var bn = function bn(
    /**
         * The normalized user ID to which this queue belongs.
         */
    t,
    /**
         * An identifier for the highest numbered batch that has been acknowledged
         * by the server. All MutationBatches in this queue with batchIds less
         * than or equal to this value are considered to have been acknowledged by
         * the server.
         *
         * NOTE: this is deprecated and no longer used by the code.
         */
    e,
    /**
         * A stream token that was previously sent by the server.
         *
         * See StreamingWriteRequest in datastore.proto for more details about
         * usage.
         *
         * After sending this token, earlier tokens may not be used anymore so
         * only a single stream token is retained.
         */
    n) {
      this.userId = t, this.lastAcknowledgedBatchId = e, this.lastStreamToken = n;
    };
    /** Name of the IndexedDb object store.  */


    bn.store = "mutationQueues",
    /** Keys are automatically assigned via the userId property. */
    bn.keyPath = "userId";
    /**
     * An object to be stored in the 'mutations' store in IndexedDb.
     *
     * Represents a batch of user-level mutations intended to be sent to the server
     * in a single write. Each user-level batch gets a separate DbMutationBatch
     * with a new batchId.
     */

    var _n = function _n(
    /**
         * The normalized user ID to which this batch belongs.
         */
    t,
    /**
         * An identifier for this batch, allocated using an auto-generated key.
         */
    e,
    /**
         * The local write time of the batch, stored as milliseconds since the
         * epoch.
         */
    n,
    /**
         * A list of "mutations" that represent a partial base state from when this
         * write batch was initially created. During local application of the write
         * batch, these baseMutations are applied prior to the real writes in order
         * to override certain document fields from the remote document cache. This
         * is necessary in the case of non-idempotent writes (e.g. `increment()`
         * transforms) to make sure that the local view of the modified documents
         * doesn't flicker if the remote document cache receives the result of the
         * non-idempotent write before the write is removed from the queue.
         *
         * These mutations are never sent to the backend.
         */
    r,
    /**
         * A list of mutations to apply. All mutations will be applied atomically.
         *
         * Mutations are serialized via JsonProtoSerializer.toMutation().
         */
    i) {
      this.userId = t, this.batchId = e, this.localWriteTimeMs = n, this.baseMutations = r, this.mutations = i;
    };
    /** Name of the IndexedDb object store.  */


    _n.store = "mutations",
    /** Keys are automatically assigned via the userId, batchId properties. */
    _n.keyPath = "batchId",
    /** The index name for lookup of mutations by user. */
    _n.userMutationsIndex = "userMutationsIndex",
    /** The user mutations index is keyed by [userId, batchId] pairs. */
    _n.userMutationsKeyPath = ["userId", "batchId"];

    var Tn =
    /** @class */
    function () {
      function t() {}
      /**
       * Creates a [userId] key for use in the DbDocumentMutations index to iterate
       * over all of a user's document mutations.
       */


      return t.prefixForUser = function (t) {
        return [t];
      },
      /**
       * Creates a [userId, encodedPath] key for use in the DbDocumentMutations
       * index to iterate over all at document mutations for a given path or lower.
       */
      t.prefixForPath = function (t, e) {
        return [t, qe(e)];
      },
      /**
       * Creates a full index key of [userId, encodedPath, batchId] for inserting
       * and deleting into the DbDocumentMutations index.
       */
      t.key = function (t, e, n) {
        return [t, qe(e), n];
      }, t;
    }();

    Tn.store = "documentMutations",
    /**
         * Because we store all the useful information for this store in the key,
         * there is no useful information to store as the value. The raw (unencoded)
         * path cannot be stored because IndexedDb doesn't store prototype
         * information.
         */
    Tn.PLACEHOLDER = new Tn();

    var In = function In(t, e) {
      this.path = t, this.readTime = e;
    },
        Nn = function Nn(t, e) {
      this.path = t, this.version = e;
    },
        An = // TODO: We are currently storing full document keys almost three times
    // (once as part of the primary key, once - partly - as `parentPath` and once
    // inside the encoded documents). During our next migration, we should
    // rewrite the primary key as parentPath + document ID which would allow us
    // to drop one value.
    function An(
    /**
         * Set to an instance of DbUnknownDocument if the data for a document is
         * not known, but it is known that a document exists at the specified
         * version (e.g. it had a successful update applied to it)
         */
    t,
    /**
         * Set to an instance of a DbNoDocument if it is known that no document
         * exists.
         */
    e,
    /**
         * Set to an instance of a Document if there's a cached version of the
         * document.
         */
    n,
    /**
         * Documents that were written to the remote document store based on
         * a write acknowledgment are marked with `hasCommittedMutations`. These
         * documents are potentially inconsistent with the backend's copy and use
         * the write's commit version as their document version.
         */
    r,
    /**
         * When the document was read from the backend. Undefined for data written
         * prior to schema version 9.
         */
    i,
    /**
         * The path of the collection this document is part of. Undefined for data
         * written prior to schema version 9.
         */
    o) {
      this.unknownDocument = t, this.noDocument = e, this.document = n, this.hasCommittedMutations = r, this.readTime = i, this.parentPath = o;
    };
    /**
     * Represents a document that is known to exist but whose data is unknown.
     * Stored in IndexedDb as part of a DbRemoteDocument object.
     */


    An.store = "remoteDocuments",
    /**
         * An index that provides access to all entries sorted by read time (which
         * corresponds to the last modification time of each row).
         *
         * This index is used to provide a changelog for Multi-Tab.
         */
    An.readTimeIndex = "readTimeIndex", An.readTimeIndexPath = "readTime",
    /**
         * An index that provides access to documents in a collection sorted by read
         * time.
         *
         * This index is used to allow the RemoteDocumentCache to fetch newly changed
         * documents in a collection.
         */
    An.collectionReadTimeIndex = "collectionReadTimeIndex", An.collectionReadTimeIndexPath = ["parentPath", "readTime"];
    /**
     * Contains a single entry that has metadata about the remote document cache.
     */

    var kn =
    /**
         * @param byteSize Approximately the total size in bytes of all the documents in the document
         * cache.
         */
    function kn(t) {
      this.byteSize = t;
    };

    kn.store = "remoteDocumentGlobal", kn.key = "remoteDocumentGlobalKey";

    var Dn = function Dn(
    /**
         * An auto-generated sequential numeric identifier for the query.
         *
         * Queries are stored using their canonicalId as the key, but these
         * canonicalIds can be quite long so we additionally assign a unique
         * queryId which can be used by referenced data structures (e.g.
         * indexes) to minimize the on-disk cost.
         */
    t,
    /**
         * The canonical string representing this query. This is not unique.
         */
    e,
    /**
         * The last readTime received from the Watch Service for this query.
         *
         * This is the same value as TargetChange.read_time in the protos.
         */
    n,
    /**
         * An opaque, server-assigned token that allows watching a query to be
         * resumed after disconnecting without retransmitting all the data
         * that matches the query. The resume token essentially identifies a
         * point in time from which the server should resume sending results.
         *
         * This is related to the snapshotVersion in that the resumeToken
         * effectively also encodes that value, but the resumeToken is opaque
         * and sometimes encodes additional information.
         *
         * A consequence of this is that the resumeToken should be used when
         * asking the server to reason about where this client is in the watch
         * stream, but the client should use the snapshotVersion for its own
         * purposes.
         *
         * This is the same value as TargetChange.resume_token in the protos.
         */
    r,
    /**
         * A sequence number representing the last time this query was
         * listened to, used for garbage collection purposes.
         *
         * Conventionally this would be a timestamp value, but device-local
         * clocks are unreliable and they must be able to create new listens
         * even while disconnected. Instead this should be a monotonically
         * increasing number that's incremented on each listen call.
         *
         * This is different from the queryId since the queryId is an
         * immutable identifier assigned to the Query on first use while
         * lastListenSequenceNumber is updated every time the query is
         * listened to.
         */
    i,
    /**
         * Denotes the maximum snapshot version at which the associated query view
         * contained no limbo documents.  Undefined for data written prior to
         * schema version 9.
         */
    o,
    /**
         * The query for this target.
         *
         * Because canonical ids are not unique we must store the actual query. We
         * use the proto to have an object we can persist without having to
         * duplicate translation logic to and from a `Query` object.
         */
    s) {
      this.targetId = t, this.canonicalId = e, this.readTime = n, this.resumeToken = r, this.lastListenSequenceNumber = i, this.lastLimboFreeSnapshotVersion = o, this.query = s;
    };

    Dn.store = "targets",
    /** Keys are automatically assigned via the targetId property. */
    Dn.keyPath = "targetId",
    /** The name of the queryTargets index. */
    Dn.queryTargetsIndexName = "queryTargetsIndex",
    /**
         * The index of all canonicalIds to the targets that they match. This is not
         * a unique mapping because canonicalId does not promise a unique name for all
         * possible queries, so we append the targetId to make the mapping unique.
         */
    Dn.queryTargetsKeyPath = ["canonicalId", "targetId"];
    /**
     * An object representing an association between a target and a document, or a
     * sentinel row marking the last sequence number at which a document was used.
     * Each document cached must have a corresponding sentinel row before lru
     * garbage collection is enabled.
     *
     * The target associations and sentinel rows are co-located so that orphaned
     * documents and their sequence numbers can be identified efficiently via a scan
     * of this store.
     */

    var xn = function xn(
    /**
         * The targetId identifying a target or 0 for a sentinel row.
         */
    t,
    /**
         * The path to the document, as encoded in the key.
         */
    e,
    /**
         * If this is a sentinel row, this should be the sequence number of the last
         * time the document specified by `path` was used. Otherwise, it should be
         * `undefined`.
         */
    n) {
      this.targetId = t, this.path = e, this.sequenceNumber = n;
    };
    /** Name of the IndexedDb object store.  */


    xn.store = "targetDocuments",
    /** Keys are automatically assigned via the targetId, path properties. */
    xn.keyPath = ["targetId", "path"],
    /** The index name for the reverse index. */
    xn.documentTargetsIndex = "documentTargetsIndex",
    /** We also need to create the reverse index for these properties. */
    xn.documentTargetsKeyPath = ["path", "targetId"];
    /**
     * A record of global state tracked across all Targets, tracked separately
     * to avoid the need for extra indexes.
     *
     * This should be kept in-sync with the proto used in the iOS client.
     */

    var Sn = function Sn(
    /**
         * The highest numbered target id across all targets.
         *
         * See DbTarget.targetId.
         */
    t,
    /**
         * The highest numbered lastListenSequenceNumber across all targets.
         *
         * See DbTarget.lastListenSequenceNumber.
         */
    e,
    /**
         * A global snapshot version representing the last consistent snapshot we
         * received from the backend. This is monotonically increasing and any
         * snapshots received from the backend prior to this version (e.g. for
         * targets resumed with a resumeToken) should be suppressed (buffered)
         * until the backend has caught up to this snapshot version again. This
         * prevents our cache from ever going backwards in time.
         */
    n,
    /**
         * The number of targets persisted.
         */
    r) {
      this.highestTargetId = t, this.highestListenSequenceNumber = e, this.lastRemoteSnapshotVersion = n, this.targetCount = r;
    };
    /**
     * The key string used for the single object that exists in the
     * DbTargetGlobal store.
     */


    Sn.key = "targetGlobalKey", Sn.store = "targetGlobal";
    /**
     * An object representing an association between a Collection id (e.g. 'messages')
     * to a parent path (e.g. '/chats/123') that contains it as a (sub)collection.
     * This is used to efficiently find all collections to query when performing
     * a Collection Group query.
     */

    var Rn = function Rn(
    /**
         * The collectionId (e.g. 'messages')
         */
    t,
    /**
         * The path to the parent (either a document location or an empty path for
         * a root-level collection).
         */
    e) {
      this.collectionId = t, this.parent = e;
    };
    /** Name of the IndexedDb object store. */


    function Ln(t) {
      t.createObjectStore(xn.store, {
        keyPath: xn.keyPath
      }).createIndex(xn.documentTargetsIndex, xn.documentTargetsKeyPath, {
        unique: !0
      }), // NOTE: This is unique only because the TargetId is the suffix.
      t.createObjectStore(Dn.store, {
        keyPath: Dn.keyPath
      }).createIndex(Dn.queryTargetsIndexName, Dn.queryTargetsKeyPath, {
        unique: !0
      }), t.createObjectStore(Sn.store);
    }

    Rn.store = "collectionParents",
    /** Keys are automatically assigned via the collectionId, parent properties. */
    Rn.keyPath = ["collectionId", "parent"];

    var On = function On( // Note: Previous schema versions included a field
    // "lastProcessedDocumentChangeId". Don't use anymore.

    /** The auto-generated client id assigned at client startup. */
    t,
    /** The last time this state was updated. */
    e,
    /** Whether the client's network connection is enabled. */
    n,
    /** Whether this client is running in a foreground tab. */
    r) {
      this.clientId = t, this.updateTimeMs = e, this.networkEnabled = n, this.inForeground = r;
    };
    /** Name of the IndexedDb object store. */


    On.store = "clientMetadata",
    /** Keys are automatically assigned via the clientId properties. */
    On.keyPath = "clientId";

    var Vn = e.__spreadArrays(e.__spreadArrays(e.__spreadArrays([bn.store, _n.store, Tn.store, An.store, Dn.store, En.store, Sn.store, xn.store], [On.store]), [kn.store]), [Rn.store]),
        Pn =
    /** @class */
    function () {
      function t(e) {
        this.db = e, // NOTE: According to https://bugs.webkit.org/show_bug.cgi?id=197050, the
        // bug we're checking for should exist in iOS >= 12.2 and < 13, but for
        // whatever reason it's much harder to hit after 12.2 so we only proactively
        // log on 12.2.
        12.2 === t.aa(i.getUA()) && ye("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")
        /**
        * Opens the specified database, creating or upgrading it if necessary.
        *
        * Note that `version` must not be a downgrade. IndexedDB does not support downgrading the schema
        * version. We currently do not support any way to do versioning outside of IndexedDB's versioning
        * mechanism, as only version-upgrade transactions are allowed to do things like create
        * objectstores.
        */
        ;
      }

      return t.Xh = function (e, n, r) {
        return de("SimpleDb", "Opening database:", e), new xe(function (i, o) {
          // TODO(mikelehen): Investigate browser compatibility.
          // https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API/Using_IndexedDB
          // suggests IE9 and older WebKit browsers handle upgrade
          // differently. They expect setVersion, as described here:
          // https://developer.mozilla.org/en-US/docs/Web/API/IDBVersionChangeRequest/setVersion
          var s = window.indexedDB.open(e, n);
          s.onsuccess = function (e) {
            var n = e.target.result;
            i(new t(n));
          }, s.onblocked = function () {
            o(new c(h.FAILED_PRECONDITION, "Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."));
          }, s.onerror = function (t) {
            var e = t.target.error;
            "VersionError" === e.name ? o(new c(h.FAILED_PRECONDITION, "A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")) : o(e);
          }, s.onupgradeneeded = function (t) {
            de("SimpleDb", 'Database "' + e + '" requires upgrade from version:', t.oldVersion);
            var n = t.target.result;
            r.createOrUpgrade(n, s.transaction, t.oldVersion, gn).next(function () {
              de("SimpleDb", "Database upgrade to version " + gn + " complete");
            });
          };
        }).yn();
      },
      /** Deletes the specified database. */
      t["delete"] = function (t) {
        return de("SimpleDb", "Removing database:", t), Fn(window.indexedDB.deleteDatabase(t)).yn();
      },
      /** Returns true if IndexedDB is available in the current environment. */
      t.Gh = function () {
        if ("undefined" == typeof window || null == window.indexedDB) return !1;
        if (t.ua()) return !0; // In some Node environments, `window` is defined, but `window.navigator` is
        // not. We don't support IndexedDB persistence in Node if the
        // isMockPersistence() check above returns false.

        if (void 0 === window.navigator) return !1; // We extensively use indexed array values and compound keys,
        // which IE and Edge do not support. However, they still have indexedDB
        // defined on the window, so we need to check for them here and make sure
        // to return that persistence is not enabled for those browsers.
        // For tracking support of this feature, see here:
        // https://developer.microsoft.com/en-us/microsoft-edge/platform/status/indexeddbarraysandmultientrysupport/
        // Check the UA string to find out the browser.

        var e = i.getUA(),
            n = t.aa(e),
            r = 0 < n && n < 10,
            o = t.ca(e),
            s = 0 < o && o < 4.5; // IE 10
        // ua = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)';
        // IE 11
        // ua = 'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko';
        // Edge
        // ua = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML,
        // like Gecko) Chrome/39.0.2171.71 Safari/537.36 Edge/12.0';
        // iOS Safari: Disable for users running iOS version < 10.

        return !(e.indexOf("MSIE ") > 0 || e.indexOf("Trident/") > 0 || e.indexOf("Edge/") > 0 || r || s);
      },
      /**
       * Returns true if the backing IndexedDB store is the Node IndexedDBShim
       * (see https://github.com/axemclion/IndexedDBShim).
       */
      t.ua = function () {
        var t;
        return "undefined" != typeof __PRIVATE_process && "YES" === (null === (t = __PRIVATE_process.__PRIVATE_env) || void 0 === t ? void 0 : t._a);
      },
      /** Helper to get a typed SimpleDbStore from a transaction. */
      t.Nr = function (t, e) {
        return t.store(e);
      }, // visible for testing

      /** Parse User Agent to determine iOS version. Returns -1 if not found. */
      t.aa = function (t) {
        var e = t.match(/i(?:phone|pad|pod) os ([\d_]+)/i),
            n = e ? e[1].split("_").slice(0, 2).join(".") : "-1";
        return Number(n);
      }, // visible for testing

      /** Parse User Agent to determine Android version. Returns -1 if not found. */
      t.ca = function (t) {
        var e = t.match(/Android ([\d.]+)/i),
            n = e ? e[1].split(".").slice(0, 2).join(".") : "-1";
        return Number(n);
      }, t.prototype.oo = function (t) {
        this.db.onversionchange = function (e) {
          return t(e);
        };
      }, t.prototype.runTransaction = function (t, n, r) {
        return e.__awaiter(this, void 0, void 0, function () {
          var i, o, s, u, a;
          return e.__generator(this, function (h) {
            switch (h.label) {
              case 0:
                i = "readonly" === t, o = 0, s = function s() {
                  var t, s, a, h, c;
                  return e.__generator(this, function (e) {
                    switch (e.label) {
                      case 0:
                        ++o, t = Mn.open(u.db, i ? "readonly" : "readwrite", n), e.label = 1;

                      case 1:
                        // Wait for the transaction to complete (i.e. IndexedDb's onsuccess event to
                        // fire), but still return the original transactionFnResult back to the
                        // caller.
                        return e.trys.push([1, 3,, 4]), s = r(t)["catch"](function (e) {
                          // Abort the transaction if there was an error.
                          return t.abort(e), xe.reject(e);
                        }).yn(), a = {}, s["catch"](function () {}), [4
                        /*yield*/
                        , t.la];

                      case 2:
                        return [2
                        /*return*/
                        , (a.value = ( // Wait for the transaction to complete (i.e. IndexedDb's onsuccess event to
                        // fire), but still return the original transactionFnResult back to the
                        // caller.
                        e.sent(), s), a)];

                      case 3:
                        return h = e.sent(), c = "FirebaseError" !== h.name && o < 3, de("SimpleDb", "Transaction failed with error: %s. Retrying: %s.", h.message, c), c ? [3
                        /*break*/
                        , 4] : [2
                        /*return*/
                        , {
                          value: Promise.reject(h)
                        }];

                      case 4:
                        return [2
                        /*return*/
                        ];
                    }
                  });
                }, u = this, h.label = 1;

              case 1:
                return [5
                /*yield**/
                , s()];

              case 2:
                if ("object" == typeof (a = h.sent())) return [2
                /*return*/
                , a.value];
                h.label = 3;

              case 3:
                return [3
                /*break*/
                , 1];

              case 4:
                return [2
                /*return*/
                ];
            }
          });
        });
      }, t.prototype.close = function () {
        this.db.close();
      }, t;
    }(),
        Un =
    /** @class */
    function () {
      function t(t) {
        this.da = t, this.fa = !1, this.Ta = null;
      }

      return Object.defineProperty(t.prototype, "Pn", {
        get: function get() {
          return this.fa;
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(t.prototype, "Ea", {
        get: function get() {
          return this.Ta;
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(t.prototype, "cursor", {
        set: function set(t) {
          this.da = t;
        },
        enumerable: !0,
        configurable: !0
      }),
      /**
       * This function can be called to stop iteration at any point.
       */
      t.prototype.done = function () {
        this.fa = !0;
      },
      /**
       * This function can be called to skip to that next key, which could be
       * an index or a primary key.
       */
      t.prototype.Qr = function (t) {
        this.Ta = t;
      },
      /**
       * Delete the current cursor value from the object store.
       *
       * NOTE: You CANNOT do this with a keysOnly query.
       */
      t.prototype["delete"] = function () {
        return Fn(this.da["delete"]());
      }, t;
    }(),
        Cn =
    /** @class */
    function (t) {
      function n(e) {
        var n = this;
        return (n = t.call(this, h.UNAVAILABLE, "IndexedDB transaction failed: " + e) || this).name = "IndexedDbTransactionError", n;
      }

      return e.__extends(n, t), n;
    }(c); // V2 is no longer usable (see comment at top of file)
    // Visible for testing

    /**
     * Provides a wrapper around IndexedDb with a simplified interface that uses
     * Promise-like return values to chain operations. Real promises cannot be used
     * since .then() continuations are executed asynchronously (e.g. via
     * .setImmediate), which would cause IndexedDB to end the transaction.
     * See PersistencePromise for more details.
     */

    /** Verifies whether `e` is an IndexedDbTransactionError. */


    function qn(t) {
      // Use name equality, as instanceof checks on errors don't work with errors
      // that wrap other errors.
      return "IndexedDbTransactionError" === t.name;
    }
    /**
     * Wraps an IDBTransaction and exposes a store() method to get a handle to a
     * specific object store.
     */


    var Mn =
    /** @class */
    function () {
      function t(t) {
        var e = this;
        this.transaction = t, this.aborted = !1,
        /**
             * A promise that resolves with the result of the IndexedDb transaction.
             */
        this.Ia = new Ue(), this.transaction.oncomplete = function () {
          e.Ia.resolve();
        }, this.transaction.onabort = function () {
          t.error ? e.Ia.reject(new Cn(t.error)) : e.Ia.resolve();
        }, this.transaction.onerror = function (t) {
          var n = zn(t.target.error);
          e.Ia.reject(new Cn(n));
        };
      }

      return t.open = function (e, n, r) {
        return new t(e.transaction(r, n));
      }, Object.defineProperty(t.prototype, "la", {
        get: function get() {
          return this.Ia.promise;
        },
        enumerable: !0,
        configurable: !0
      }), t.prototype.abort = function (t) {
        t && this.Ia.reject(t), this.aborted || (de("SimpleDb", "Aborting transaction:", t ? t.message : "Client-initiated abort"), this.aborted = !0, this.transaction.abort());
      },
      /**
       * Returns a SimpleDbStore<KeyType, ValueType> for the specified store. All
       * operations performed on the SimpleDbStore happen within the context of this
       * transaction and it cannot be used anymore once the transaction is
       * completed.
       *
       * Note that we can't actually enforce that the KeyType and ValueType are
       * correct, but they allow type safety through the rest of the consuming code.
       */
      t.prototype.store = function (t) {
        var e = this.transaction.objectStore(t);
        return new jn(e);
      }, t;
    }(),
        jn =
    /** @class */
    function () {
      function t(t) {
        this.store = t;
      }

      return t.prototype.put = function (t, e) {
        var n;
        return void 0 !== e ? (de("SimpleDb", "PUT", this.store.name, t, e), n = this.store.put(e, t)) : (de("SimpleDb", "PUT", this.store.name, "<auto-key>", t), n = this.store.put(t)), Fn(n);
      },
      /**
       * Adds a new value into an Object Store and returns the new key. Similar to
       * IndexedDb's `add()`, this method will fail on primary key collisions.
       *
       * @param value The object to write.
       * @return The key of the value to add.
       */
      t.prototype.add = function (t) {
        return de("SimpleDb", "ADD", this.store.name, t, t), Fn(this.store.add(t));
      },
      /**
       * Gets the object with the specified key from the specified store, or null
       * if no object exists with the specified key.
       *
       * @key The key of the object to get.
       * @return The object with the specified key or null if no object exists.
       */
      t.prototype.get = function (t) {
        var e = this; // We're doing an unsafe cast to ValueType.
        // eslint-disable-next-line @typescript-eslint/no-explicit-any

        return Fn(this.store.get(t)).next(function (n) {
          // Normalize nonexistence to null.
          return void 0 === n && (n = null), de("SimpleDb", "GET", e.store.name, t, n), n;
        });
      }, t.prototype["delete"] = function (t) {
        return de("SimpleDb", "DELETE", this.store.name, t), Fn(this.store["delete"](t));
      },
      /**
       * If we ever need more of the count variants, we can add overloads. For now,
       * all we need is to count everything in a store.
       *
       * Returns the number of rows in the store.
       */
      t.prototype.count = function () {
        return de("SimpleDb", "COUNT", this.store.name), Fn(this.store.count());
      }, t.prototype.Fr = function (t, e) {
        var n = this.cursor(this.options(t, e)),
            r = [];
        return this.wa(n, function (t, e) {
          r.push(e);
        }).next(function () {
          return r;
        });
      }, t.prototype.Ra = function (t, e) {
        de("SimpleDb", "DELETE ALL", this.store.name);
        var n = this.options(t, e);
        n.Dh = !1;
        var r = this.cursor(n);
        return this.wa(r, function (t, e, n) {
          return n["delete"]();
        });
      }, t.prototype.Ur = function (t, e) {
        var n;
        e ? n = t : (n = {}, e = t);
        var r = this.cursor(n);
        return this.wa(r, e);
      },
      /**
       * Iterates over a store, but waits for the given callback to complete for
       * each entry before iterating the next entry. This allows the callback to do
       * asynchronous work to determine if this iteration should continue.
       *
       * The provided callback should return `true` to continue iteration, and
       * `false` otherwise.
       */
      t.prototype.Uo = function (t) {
        var e = this.cursor({});
        return new xe(function (n, r) {
          e.onerror = function (t) {
            var e = zn(t.target.error);
            r(e);
          }, e.onsuccess = function (e) {
            var r = e.target.result;
            r ? t(r.primaryKey, r.value).next(function (t) {
              t ? r["continue"]() : n();
            }) : n();
          };
        });
      }, t.prototype.wa = function (t, e) {
        var n = [];
        return new xe(function (r, i) {
          t.onerror = function (t) {
            i(t.target.error);
          }, t.onsuccess = function (t) {
            var i = t.target.result;

            if (i) {
              var o = new Un(i),
                  s = e(i.primaryKey, i.value, o);

              if (s instanceof xe) {
                var u = s["catch"](function (t) {
                  return o.done(), xe.reject(t);
                });
                n.push(u);
              }

              o.Pn ? r() : null === o.Ea ? i["continue"]() : i["continue"](o.Ea);
            } else r();
          };
        }).next(function () {
          return xe.vn(n);
        });
      }, t.prototype.options = function (t, e) {
        var n = void 0;
        return void 0 !== t && ("string" == typeof t ? n = t : e = t), {
          index: n,
          range: e
        };
      }, t.prototype.cursor = function (t) {
        var e = "next";

        if (t.reverse && (e = "prev"), t.index) {
          var n = this.store.index(t.index);
          return t.Dh ? n.openKeyCursor(t.range, e) : n.openCursor(t.range, e);
        }

        return this.store.openCursor(t.range, e);
      }, t;
    }();
    /**
     * A wrapper around an IDBObjectStore providing an API that:
     *
     * 1) Has generic KeyType / ValueType parameters to provide strongly-typed
     * methods for acting against the object store.
     * 2) Deals with IndexedDB's onsuccess / onerror event callbacks, making every
     * method return a PersistencePromise instead.
     * 3) Provides a higher-level API to avoid needing to do excessive wrapping of
     * intermediate IndexedDB types (IDBCursorWithValue, etc.)
     */

    /**
     * Wraps an IDBRequest in a PersistencePromise, using the onsuccess / onerror
     * handlers to resolve / reject the PersistencePromise as appropriate.
     */


    function Fn(t) {
      return new xe(function (e, n) {
        t.onsuccess = function (t) {
          var n = t.target.result;
          e(n);
        }, t.onerror = function (t) {
          var e = zn(t.target.error);
          n(e);
        };
      });
    } // Guard so we only report the error once.


    var Bn = !1;

    function zn(t) {
      var e = Pn.aa(i.getUA());

      if (e >= 12.2 && e < 13) {
        var n = "An internal error was encountered in the Indexed Database server";

        if (t.message.indexOf(n) >= 0) {
          // Wrap error in a more descriptive one.
          var r = new c("internal", "IOS_INDEXEDDB_BUG1: IndexedDb has thrown '" + n + "'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.");
          return Bn || (Bn = !0, // Throw a global exception outside of this promise chain, for the user to
          // potentially catch.
          setTimeout(function () {
            throw r;
          }, 0)), r;
        }
      }

      return t;
    }
    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /**
     * Represents an operation scheduled to be run in the future on an AsyncQueue.
     *
     * It is created via DelayedOperation.createAndSchedule().
     *
     * Supports cancellation (via cancel()) and early execution (via skipDelay()).
     *
     * Note: We implement `PromiseLike` instead of `Promise`, as the `Promise` type
     * in newer versions of TypeScript defines `finally`, which is not available in
     * IE.
     */


    var Gn =
    /** @class */
    function () {
      function t(t, e, n, r, i) {
        this.Aa = t, this.Er = e, this.ma = n, this.op = r, this.Pa = i, this.Va = new Ue(), this.then = this.Va.promise.then.bind(this.Va.promise), // It's normal for the deferred promise to be canceled (due to cancellation)
        // and so we attach a dummy catch callback to avoid
        // 'UnhandledPromiseRejectionWarning' log spam.
        this.Va.promise["catch"](function (t) {})
        /**
        * Creates and returns a DelayedOperation that has been scheduled to be
        * executed on the provided asyncQueue after the provided delayMs.
        *
        * @param asyncQueue The queue to schedule the operation on.
        * @param id A Timer ID identifying the type of operation this is.
        * @param delayMs The delay (ms) before the operation should be scheduled.
        * @param op The operation to run.
        * @param removalCallback A callback to be called synchronously once the
        *   operation is executed or canceled, notifying the AsyncQueue to remove it
        *   from its delayedOperations list.
        *   PORTING NOTE: This exists to prevent making removeDelayedOperation() and
        *   the DelayedOperation class public.
        */
        ;
      }

      return t.ga = function (e, n, r, i, o) {
        var s = new t(e, n, Date.now() + r, i, o);
        return s.start(r), s;
      },
      /**
       * Starts the timer. This is called immediately after construction by
       * createAndSchedule().
       */
      t.prototype.start = function (t) {
        var e = this;
        this.pa = setTimeout(function () {
          return e.ya();
        }, t);
      },
      /**
       * Queues the operation to run immediately (if it hasn't already been run or
       * canceled).
       */
      t.prototype.vr = function () {
        return this.ya();
      },
      /**
       * Cancels the operation if it hasn't already been executed or canceled. The
       * promise will be rejected.
       *
       * As long as the operation has not yet been run, calling cancel() provides a
       * guarantee that the operation will not be run.
       */
      t.prototype.cancel = function (t) {
        null !== this.pa && (this.clearTimeout(), this.Va.reject(new c(h.CANCELLED, "Operation cancelled" + (t ? ": " + t : ""))));
      }, t.prototype.ya = function () {
        var t = this;
        this.Aa.uo(function () {
          return null !== t.pa ? (t.clearTimeout(), t.op().then(function (e) {
            return t.Va.resolve(e);
          })) : Promise.resolve();
        });
      }, t.prototype.clearTimeout = function () {
        null !== this.pa && (this.Pa(this), clearTimeout(this.pa), this.pa = null);
      }, t;
    }(),
        Wn =
    /** @class */
    function () {
      function t() {
        var t = this; // The last promise in the queue.

        this.ba = Promise.resolve(), // The last retryable operation. Retryable operation are run in order and
        // retried with backoff.
        this.va = Promise.resolve(), // Is this AsyncQueue being shut down? Once it is set to true, it will not
        // be changed again.
        this.Sa = !1, // Operations scheduled to be queued in the future. Operations are
        // automatically removed after they are run or canceled.
        this.Da = [], // visible for testing
        this.Ca = null, // Flag set while there's an outstanding AsyncQueue operation, used for
        // assertion sanity-checks.
        this.Fa = !1, // List of TimerIds to fast-forward delays for.
        this.Na = [], // Backoff timer used to schedule retries for retryable operations
        this.$a = new Ce(this, "async_queue_retry"
        /* AsyncQueueRetry */
        ), // Visibility handler that triggers an immediate retry of all retryable
        // operations. Meant to speed up recovery when we regain file system access
        // after page comes into foreground.
        this.ka = function () {
          return t.$a.br();
        };
        var e = ce.nt().window;
        e && "function" == typeof e.addEventListener && e.addEventListener("visibilitychange", this.ka);
      }

      return Object.defineProperty(t.prototype, "La", {
        // Is this AsyncQueue being shut down? If true, this instance will not enqueue
        // any new operations, Promises from enqueue requests will not resolve.
        get: function get() {
          return this.Sa;
        },
        enumerable: !0,
        configurable: !0
      }),
      /**
       * Adds a new operation to the queue without waiting for it to complete (i.e.
       * we ignore the Promise result).
       */
      t.prototype.uo = function (t) {
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this.enqueue(t);
      },
      /**
       * Regardless if the queue has initialized shutdown, adds a new operation to the
       * queue without waiting for it to complete (i.e. we ignore the Promise result).
       */
      t.prototype.Ma = function (t) {
        this.Oa(), // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this.xa(t);
      },
      /**
       * Regardless if the queue has initialized shutdown, adds a new operation to the
       * queue.
       */
      t.prototype.Ba = function (t) {
        return this.Oa(), this.xa(t);
      },
      /**
       * Adds a new operation to the queue and initialize the shut down of this queue.
       * Returns a promise that will be resolved when the promise returned by the new
       * operation is (with its value).
       * Once this method is called, the only possible way to request running an operation
       * is through `enqueueAndForgetEvenAfterShutdown`.
       */
      t.prototype.qa = function (t) {
        return e.__awaiter(this, void 0, void 0, function () {
          var n;
          return e.__generator(this, function (e) {
            switch (e.label) {
              case 0:
                return this.Oa(), this.Sa ? [3
                /*break*/
                , 2] : (this.Sa = !0, (n = ce.nt().window) && n.removeEventListener("visibilitychange", this.ka), [4
                /*yield*/
                , this.Ba(t)]);

              case 1:
                e.sent(), e.label = 2;

              case 2:
                return [2
                /*return*/
                ];
            }
          });
        });
      },
      /**
       * Adds a new operation to the queue. Returns a promise that will be resolved
       * when the promise returned by the new operation is (with its value).
       */
      t.prototype.enqueue = function (t) {
        return this.Oa(), this.Sa ? new Promise(function (t) {}) : this.xa(t);
      },
      /**
       * Enqueue a retryable operation.
       *
       * A retryable operation is rescheduled with backoff if it fails with a
       * IndexedDbTransactionError (the error type used by SimpleDb). All
       * retryable operations are executed in order and only run if all prior
       * operations were retried successfully.
       */
      t.prototype.Ua = function (t) {
        var n = this;
        this.Oa(), this.Sa || (this.va = this.va.then(function () {
          var r = new Ue(),
              i = function i() {
            return e.__awaiter(n, void 0, void 0, function () {
              var n;
              return e.__generator(this, function (e) {
                switch (e.label) {
                  case 0:
                    return e.trys.push([0, 2,, 3]), [4
                    /*yield*/
                    , t()];

                  case 1:
                    return e.sent(), r.resolve(), this.$a.reset(), [3
                    /*break*/
                    , 3];

                  case 2:
                    if (!qn(n = e.sent())) throw r.resolve(), n; // Failure will be handled by AsyncQueue

                    return de("AsyncQueue", "Operation failed with retryable error: " + n), this.$a.gr(i), [3
                    /*break*/
                    , 3];

                  case 3:
                    return [2
                    /*return*/
                    ];
                }
              });
            });
          };

          return n.uo(i), r.promise;
        }));
      }, t.prototype.xa = function (t) {
        var e = this,
            n = this.ba.then(function () {
          return e.Fa = !0, t()["catch"](function (t) {
            // Re-throw the error so that this.tail becomes a rejected Promise and
            // all further attempts to chain (via .then) will just short-circuit
            // and return the rejected Promise.
            throw e.Ca = t, e.Fa = !1, ye("INTERNAL UNHANDLED ERROR: ", t.stack || t.message || ""), t;
          }).then(function (t) {
            return e.Fa = !1, t;
          });
        });
        return this.ba = n, n;
      },
      /**
       * Schedules an operation to be queued on the AsyncQueue once the specified
       * `delayMs` has elapsed. The returned DelayedOperation can be used to cancel
       * or fast-forward the operation prior to its running.
       */
      t.prototype.yr = function (t, e, n) {
        var r = this;
        this.Oa(), // Fast-forward delays for timerIds that have been overriden.
        this.Na.indexOf(t) > -1 && (e = 0);
        var i = Gn.ga(this, t, e, n, function (t) {
          return r.Qa(t);
        });
        return this.Da.push(i), i;
      }, t.prototype.Oa = function () {
        this.Ca && ge();
      },
      /**
       * Verifies there's an operation currently in-progress on the AsyncQueue.
       * Unfortunately we can't verify that the running code is in the promise chain
       * of that operation, so this isn't a foolproof check, but it should be enough
       * to catch some bugs.
       */
      t.prototype.Wa = function () {},
      /**
       * Waits until all currently queued tasks are finished executing. Delayed
       * operations are not run.
       */
      t.prototype.ja = function () {
        return e.__awaiter(this, void 0, void 0, function () {
          var t;
          return e.__generator(this, function (e) {
            switch (e.label) {
              case 0:
                return [4
                /*yield*/
                , t = this.ba];

              case 1:
                e.sent(), e.label = 2;

              case 2:
                if (t !== this.ba) return [3
                /*break*/
                , 0];
                e.label = 3;

              case 3:
                return [2
                /*return*/
                ];
            }
          });
        });
      },
      /**
       * For Tests: Determine if a delayed operation with a particular TimerId
       * exists.
       */
      t.prototype.Ka = function (t) {
        for (var e = 0, n = this.Da; e < n.length; e++) {
          if (n[e].Er === t) return !0;
        }

        return !1;
      },
      /**
       * For Tests: Runs some or all delayed operations early.
       *
       * @param lastTimerId Delayed operations up to and including this TimerId will
       *  be drained. Pass TimerId.All to run all delayed operations.
       * @returns a Promise that resolves once all operations have been run.
       */
      t.prototype.Ga = function (t) {
        var e = this; // Note that draining may generate more delayed ops, so we do that first.

        return this.ja().then(function () {
          // Run ops in the same order they'd run if they ran naturally.
          e.Da.sort(function (t, e) {
            return t.ma - e.ma;
          });

          for (var n = 0, r = e.Da; n < r.length; n++) {
            var i = r[n];
            if (i.vr(), "all"
            /* All */
            !== t && i.Er === t) break;
          }

          return e.ja();
        });
      },
      /**
       * For Tests: Skip all subsequent delays for a timer id.
       */
      t.prototype.za = function (t) {
        this.Na.push(t);
      },
      /** Called once a DelayedOperation is run or canceled. */
      t.prototype.Qa = function (t) {
        // NOTE: indexOf / slice are O(n), but delayedOperations is expected to be small.
        var e = this.Da.indexOf(t);
        this.Da.splice(e, 1);
      }, t;
    }();
    /**
     * Returns a FirestoreError that can be surfaced to the user if the provided
     * error is an IndexedDbTransactionError. Re-throws the error otherwise.
     */


    function Qn(t, e) {
      if (ye("AsyncQueue", e + ": " + t), qn(t)) return new c(h.UNAVAILABLE, e + ": " + t);
      throw t;
    }
    /**
     * @license
     * Copyright 2018 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */


    function Kn(t, e) {
      var n = t[0],
          r = t[1],
          i = e[0],
          o = e[1],
          s = be(n, i);
      return 0 === s ? be(r, o) : s;
    }
    /**
     * Used to calculate the nth sequence number. Keeps a rolling buffer of the
     * lowest n values passed to `addElement`, and finally reports the largest of
     * them in `maxValue`.
     */


    var Yn =
    /** @class */
    function () {
      function t(t) {
        this.Ha = t, this.buffer = new Pt(Kn), this.Ya = 0;
      }

      return t.prototype.Ja = function () {
        return ++this.Ya;
      }, t.prototype.Xa = function (t) {
        var e = [t, this.Ja()];
        if (this.buffer.size < this.Ha) this.buffer = this.buffer.add(e);else {
          var n = this.buffer.last();
          Kn(e, n) < 0 && (this.buffer = this.buffer["delete"](n).add(e));
        }
      }, Object.defineProperty(t.prototype, "maxValue", {
        get: function get() {
          // Guaranteed to be non-empty. If we decide we are not collecting any
          // sequence numbers, nthSequenceNumber below short-circuits. If we have
          // decided that we are collecting n sequence numbers, it's because n is some
          // percentage of the existing sequence numbers. That means we should never
          // be in a situation where we are collecting sequence numbers but don't
          // actually have any.
          return this.buffer.last()[0];
        },
        enumerable: !0,
        configurable: !0
      }), t;
    }(),
        $n = {
      Za: !1,
      tu: 0,
      eu: 0,
      su: 0
    },
        Jn =
    /** @class */
    function () {
      function t( // When we attempt to collect, we will only do so if the cache size is greater than this
      // threshold. Passing `COLLECTION_DISABLED` here will cause collection to always be skipped.
      t, // The percentage of sequence numbers that we will attempt to collect
      e, // A cap on the total number of sequence numbers that will be collected. This prevents
      // us from collecting a huge number of sequence numbers if the cache has grown very large.
      n) {
        this.iu = t, this.nu = e, this.ru = n;
      }

      return t.hu = function (e) {
        return new t(e, t.ou, t.au);
      }, t;
    }();

    Jn.uu = -1, Jn.cu = 1048576, Jn._u = 41943040, Jn.ou = 10, Jn.au = 1e3, Jn.lu = new Jn(Jn._u, Jn.ou, Jn.au), Jn.DISABLED = new Jn(Jn.uu, 0, 0);
    /**
     * This class is responsible for the scheduling of LRU garbage collection. It handles checking
     * whether or not GC is enabled, as well as which delay to use before the next run.
     */

    var Hn =
    /** @class */
    function () {
      function t(t, e) {
        this.ko = t, this.Aa = e, this.du = !1, this.fu = null;
      }

      return t.prototype.start = function (t) {
        this.ko.Tu.iu !== Jn.uu && this.Eu(t);
      }, t.prototype.stop = function () {
        this.fu && (this.fu.cancel(), this.fu = null);
      }, Object.defineProperty(t.prototype, "ro", {
        get: function get() {
          return null !== this.fu;
        },
        enumerable: !0,
        configurable: !0
      }), t.prototype.Eu = function (t) {
        var n = this,
            r = this.du ? 3e5 : 6e4;
        de("LruGarbageCollector", "Garbage collection scheduled in " + r + "ms"), this.fu = this.Aa.yr("lru_garbage_collection"
        /* LruGarbageCollection */
        , r, function () {
          return e.__awaiter(n, void 0, void 0, function () {
            var n;
            return e.__generator(this, function (e) {
              switch (e.label) {
                case 0:
                  this.fu = null, this.du = !0, e.label = 1;

                case 1:
                  return e.trys.push([1, 3,, 7]), [4
                  /*yield*/
                  , t.Iu(this.ko)];

                case 2:
                  return e.sent(), [3
                  /*break*/
                  , 7];

                case 3:
                  return qn(n = e.sent()) ? (de("LruGarbageCollector", "Ignoring IndexedDB error during garbage collection: ", n), [3
                  /*break*/
                  , 6]) : [3
                  /*break*/
                  , 4];

                case 4:
                  return [4
                  /*yield*/
                  , er(n)];

                case 5:
                  e.sent(), e.label = 6;

                case 6:
                  return [3
                  /*break*/
                  , 7];

                case 7:
                  return [4
                  /*yield*/
                  , this.Eu(t)];

                case 8:
                  return e.sent(), [2
                  /*return*/
                  ];
              }
            });
          });
        });
      }, t;
    }(),
        Xn =
    /** @class */
    function () {
      function t(t, e) {
        this.wu = t, this.Tu = e
        /** Given a percentile of target to collect, returns the number of targets to collect. */
        ;
      }

      return t.prototype.Ru = function (t, e) {
        return this.wu.Lo(t).next(function (t) {
          return Math.floor(e / 100 * t);
        });
      },
      /** Returns the nth sequence number, counting in order from the smallest. */
      t.prototype.Au = function (t, e) {
        var n = this;
        if (0 === e) return xe.resolve(Pe.dr);
        var r = new Yn(e);
        return this.wu.js(t, function (t) {
          return r.Xa(t.sequenceNumber);
        }).next(function () {
          return n.wu.Oo(t, function (t) {
            return r.Xa(t);
          });
        }).next(function () {
          return r.maxValue;
        });
      },
      /**
       * Removes targets with a sequence number equal to or less than the given upper bound, and removes
       * document associations with those targets.
       */
      t.prototype.Ah = function (t, e, n) {
        return this.wu.Ah(t, e, n);
      },
      /**
       * Removes documents that have a sequence number equal to or less than the upper bound and are not
       * otherwise pinned.
       */
      t.prototype.Qo = function (t, e) {
        return this.wu.Qo(t, e);
      }, t.prototype.mu = function (t, e) {
        var n = this;
        return this.Tu.iu === Jn.uu ? (de("LruGarbageCollector", "Garbage collection skipped; disabled"), xe.resolve($n)) : this.jo(t).next(function (r) {
          return r < n.Tu.iu ? (de("LruGarbageCollector", "Garbage collection skipped; Cache size " + r + " is lower than threshold " + n.Tu.iu), $n) : n.Pu(t, e);
        });
      }, t.prototype.jo = function (t) {
        return this.wu.jo(t);
      }, t.prototype.Pu = function (t, e) {
        var n,
            i,
            o,
            s,
            u,
            a,
            h,
            c = this,
            f = Date.now();
        return this.Ru(t, this.Tu.nu).next(function (e) {
          // Cap at the configured max
          return e > c.Tu.ru ? (de("LruGarbageCollector", "Capping sequence numbers to collect down to the maximum of " + c.Tu.ru + " from " + e), i = c.Tu.ru) : i = e, s = Date.now(), c.Au(t, i);
        }).next(function (r) {
          return n = r, u = Date.now(), c.Ah(t, n, e);
        }).next(function (e) {
          return o = e, a = Date.now(), c.Qo(t, n);
        }).next(function (t) {
          return h = Date.now(), le() <= r.LogLevel.DEBUG && de("LruGarbageCollector", "LRU Garbage Collection\n\tCounted targets in " + (s - f) + "ms\n\tDetermined least recently used " + i + " in " + (u - s) + "ms\n\tRemoved " + o + " targets in " + (a - u) + "ms\n\tRemoved " + t + " documents in " + (h - a) + "ms\nTotal Duration: " + (h - f) + "ms"), xe.resolve({
            Za: !0,
            tu: i,
            eu: o,
            su: t
          });
        });
      }, t;
    }(),
        Zn =
    /** @class */
    function () {
      function t(
      /** Manages our in-memory or durable persistence. */
      t, e, n) {
        this.persistence = t, this.Vu = e,
        /**
             * Maps a targetID to data about its target.
             *
             * PORTING NOTE: We are using an immutable data structure on Web to make re-runs
             * of `applyRemoteEvent()` idempotent.
             */
        this.gu = new Lt(be),
        /** Maps a target to its targetID. */
        // TODO(wuandy): Evaluate if TargetId can be part of Target.
        this.pu = new Ae(function (t) {
          return t.canonicalId();
        }),
        /**
             * The read time of the last entry processed by `getNewDocumentChanges()`.
             *
             * PORTING NOTE: This is only used for multi-tab synchronization.
             */
        this.yu = g.min(), this.Wn = t.vo(n), this.bu = t.Co(), this.Yh = t.Do(), this.vu = new Oe(this.bu, this.Wn, this.persistence.Fo()), this.Vu.Su(this.vu)
        /** Starts the LocalStore. */
        ;
      }

      return t.prototype.start = function () {
        return Promise.resolve();
      },
      /**
       * Tells the LocalStore that the currently authenticated user has changed.
       *
       * In response the local store switches the mutation queue to the new user and
       * returns any resulting document changes.
       */
      // PORTING NOTE: Android and iOS only return the documents affected by the
      // change.
      t.prototype.Du = function (t) {
        return e.__awaiter(this, void 0, void 0, function () {
          var n,
              r,
              i,
              o = this;
          return e.__generator(this, function (e) {
            switch (e.label) {
              case 0:
                return n = this.Wn, r = this.vu, [4
                /*yield*/
                , this.persistence.runTransaction("Handle user change", "readonly", function (e) {
                  // Swap out the mutation queue, grabbing the pending mutation batches
                  // before and after.
                  var i;
                  return o.Wn.ia(e).next(function (s) {
                    return i = s, n = o.persistence.vo(t), // Recreate our LocalDocumentsView using the new
                    // MutationQueue.
                    r = new Oe(o.bu, n, o.persistence.Fo()), n.ia(e);
                  }).next(function (t) {
                    for (var n = [], o = [], s = Wt(), u = 0, a = i // Union the old/new changed keys.
                    ; u < a.length; u++) {
                      var h = a[u];
                      n.push(h.batchId);

                      for (var c = 0, f = h.mutations; c < f.length; c++) {
                        var l = f[c];
                        s = s.add(l.key);
                      }
                    }

                    for (var p = 0, d = t; p < d.length; p++) {
                      var y = d[p];
                      o.push(y.batchId);

                      for (var v = 0, g = y.mutations; v < g.length; v++) {
                        var m = g[v];
                        s = s.add(m.key);
                      }
                    } // Return the set of all (potentially) changed documents and the list
                    // of mutation batch IDs that were affected by change.


                    return r.Yn(e, s).next(function (t) {
                      return {
                        Cu: t,
                        Fu: n,
                        Nu: o
                      };
                    });
                  });
                })];

              case 1:
                return i = e.sent(), [2
                /*return*/
                , (this.Wn = n, this.vu = r, this.Vu.Su(this.vu), i)];
            }
          });
        });
      },
      /* Accept locally generated Mutations and commit them to storage. */
      t.prototype.$u = function (t) {
        var e,
            n = this,
            r = v.now(),
            i = t.reduce(function (t, e) {
          return t.add(e.key);
        }, Wt());
        return this.persistence.runTransaction("Locally write mutations", "readwrite", function (o) {
          return n.vu.Yn(o, i).next(function (i) {
            e = i;

            for ( // For non-idempotent mutations (such as `FieldValue.increment()`),
            // we record the base state in a separate patch mutation. This is
            // later used to guarantee consistent values and prevents flicker
            // even if the backend sends us an update that already includes our
            // transform.
            var s = [], u = 0, a = t; u < a.length; u++) {
              var h = a[u],
                  c = h.Pt(e.get(h.key));
              null != c && // NOTE: The base state should only be applied if there's some
              // existing document to override, so use a Precondition of
              // exists=true
              s.push(new ot(h.key, c, ft(c.proto.mapValue), nt.exists(!0)));
            }

            return n.Wn.Xo(o, r, s, t);
          });
        }).then(function (t) {
          var n = t.In(e);
          return {
            batchId: t.batchId,
            Dn: n
          };
        });
      },
      /**
       * Acknowledge the given batch.
       *
       * On the happy path when a batch is acknowledged, the local store will
       *
       *  + remove the batch from the mutation queue;
       *  + apply the changes to the remote document cache;
       *  + recalculate the latency compensated view implied by those changes (there
       *    may be mutations in the queue that affect the documents but haven't been
       *    acknowledged yet); and
       *  + give the changed documents back the sync engine
       *
       * @returns The resulting (modified) documents.
       */
      t.prototype.zo = function (t) {
        var e = this;
        return this.persistence.runTransaction("Acknowledge batch", "readwrite-primary", function (n) {
          var r = t.batch.keys(),
              i = e.bu.Yr({
            Xr: !0
          });
          return e.Wn.zo(n, t.batch, t.streamToken).next(function () {
            return e.ku(n, t, i);
          }).next(function () {
            return i.apply(n);
          }).next(function () {
            return e.Wn.oa(n);
          }).next(function () {
            return e.vu.Yn(n, r);
          });
        });
      },
      /**
       * Remove mutations from the MutationQueue for the specified batch;
       * LocalDocuments will be recalculated.
       *
       * @returns The resulting modified documents.
       */
      t.prototype.Lu = function (t) {
        var e = this;
        return this.persistence.runTransaction("Reject batch", "readwrite-primary", function (n) {
          var r;
          return e.Wn.Zo(n, t).next(function (t) {
            return me(null !== t), r = t.keys(), e.Wn.ra(n, t);
          }).next(function () {
            return e.Wn.oa(n);
          }).next(function () {
            return e.vu.Yn(n, r);
          });
        });
      },
      /**
       * Returns the largest (latest) batch id in mutation queue that is pending server response.
       * Returns `BATCHID_UNKNOWN` if the queue is empty.
       */
      t.prototype.sa = function () {
        var t = this;
        return this.persistence.runTransaction("Get highest unacknowledged batch id", "readonly", function (e) {
          return t.Wn.sa(e);
        });
      },
      /** Returns the last recorded stream token for the current user. */
      t.prototype.Yo = function () {
        var t = this;
        return this.persistence.runTransaction("Get last stream token", "readonly", function (e) {
          return t.Wn.Yo(e);
        });
      },
      /**
       * Sets the stream token for the current user without acknowledging any
       * mutation batch. This is usually only useful after a stream handshake or in
       * response to an error that requires clearing the stream token.
       */
      t.prototype.Jo = function (t) {
        var e = this;
        return this.persistence.runTransaction("Set last stream token", "readwrite-primary", function (n) {
          return e.Wn.Jo(n, t);
        });
      },
      /**
       * Returns the last consistent snapshot processed (used by the RemoteStore to
       * determine whether to buffer incoming snapshots from the backend).
       */
      t.prototype._h = function () {
        var t = this;
        return this.persistence.runTransaction("Get last remote snapshot version", "readonly", function (e) {
          return t.Yh._h(e);
        });
      },
      /**
       * Update the "ground-state" (remote) documents. We assume that the remote
       * event reflects any write batches that have been acknowledged or rejected
       * (i.e. we do not re-apply local mutations to updates from this event).
       *
       * LocalDocuments are re-calculated if there are remaining mutations in the
       * queue.
       */
      t.prototype.Mu = function (e) {
        var n = this,
            r = e.Ee,
            i = this.gu;
        return this.persistence.runTransaction("Apply remote event", "readwrite-primary", function (o) {
          var s = n.bu.Yr({
            Xr: !0
          }); // Reset newTargetDataByTargetMap in case this transaction gets re-run.

          i = n.gu;
          var u = [];
          e.as.forEach(function (e, s) {
            var a = i.get(s);

            if (a) {
              // Only update the remote keys if the target is still active. This
              // ensures that we can persist the updated target data along with
              // the updated assignment.
              u.push(n.Yh.bh(o, e.Is, s).next(function () {
                return n.Yh.ph(o, e.Ts, s);
              }));
              var h = e.resumeToken; // Update the resume token if the change includes one.

              if (h.rt() > 0) {
                var c = a.we(h, r).Ie(o.Oh);
                i = i.Ae(s, c), // Update the target data if there are target changes (or if
                // sufficient time has passed since the last update).
                t.Ou(a, c, e) && u.push(n.Yh.Ih(o, c));
              }
            }
          });
          var a = qt(),
              h = Wt(); // HACK: The only reason we allow a null snapshot version is so that we
          // can synthesize remote events when we get permission denied errors while
          // trying to resolve the state of a locally cached document that is in
          // limbo.

          if (e.cs.forEach(function (t, e) {
            h = h.add(t);
          }), // Each loop iteration only affects its "own" doc, so it's safe to get all the remote
          // documents in advance in a single call.
          u.push(s.getEntries(o, h).next(function (t) {
            e.cs.forEach(function (i, h) {
              var c = t.get(i); // Note: The order of the steps below is important, since we want
              // to ensure that rejected limbo resolutions (which fabricate
              // NoDocuments with SnapshotVersion.min()) never add documents to
              // cache.

              h instanceof vt && h.version.isEqual(g.min()) ? ( // NoDocuments with SnapshotVersion.min() are used in manufactured
              // events. We remove these documents from cache since we lost
              // access.
              s.kn(i, r), a = a.Ae(i, h)) : null == c || h.version.S(c.version) > 0 || 0 === h.version.S(c.version) && c.hasPendingWrites ? (s.Nn(h, r), a = a.Ae(i, h)) : de("LocalStore", "Ignoring outdated watch update for ", i, ". Current version:", c.version, " Watch version:", h.version), e._s.has(i) && u.push(n.persistence.hh.Wo(o, i));
            });
          })), !r.isEqual(g.min())) {
            var c = n.Yh._h(o).next(function (t) {
              return n.Yh.dh(o, o.Oh, r);
            });

            u.push(c);
          }

          return xe.vn(u).next(function () {
            return s.apply(o);
          }).next(function () {
            return n.vu.Jn(o, a);
          });
        }).then(function (t) {
          return n.gu = i, t;
        });
      },
      /**
       * Returns true if the newTargetData should be persisted during an update of
       * an active target. TargetData should always be persisted when a target is
       * being released and should not call this function.
       *
       * While the target is active, TargetData updates can be omitted when nothing
       * about the target has changed except metadata like the resume token or
       * snapshot version. Occasionally it's worth the extra write to prevent these
       * values from getting too stale after a crash, but this doesn't have to be
       * too frequent.
       */
      t.Ou = function (t, e, n) {
        // Always persist target data if we don't already have a resume token.
        return me(e.resumeToken.rt() > 0), 0 === t.resumeToken.rt() || e.Ee.D() - t.Ee.D() >= this.xu || n.Ts.size + n.Es.size + n.Is.size > 0; // Don't allow resume token changes to be buffered indefinitely. This
        // allows us to be reasonably up-to-date after a crash and avoids needing
        // to loop over all active queries on shutdown. Especially in the browser
        // we may not get time to do anything interesting while the current tab is
        // closing.
      },
      /**
       * Notify local store of the changed views to locally pin documents.
       */
      t.prototype.Bu = function (t) {
        return e.__awaiter(this, void 0, void 0, function () {
          var n,
              r,
              i,
              o,
              s,
              u,
              a,
              h,
              c = this;
          return e.__generator(this, function (e) {
            switch (e.label) {
              case 0:
                return e.trys.push([0, 2,, 3]), [4
                /*yield*/
                , this.persistence.runTransaction("notifyLocalViewChanges", "readwrite", function (e) {
                  return xe.forEach(t, function (t) {
                    return xe.forEach(t.hr, function (n) {
                      return c.persistence.hh.yh(e, t.targetId, n);
                    }).next(function () {
                      return xe.forEach(t.or, function (n) {
                        return c.persistence.hh.vh(e, t.targetId, n);
                      });
                    });
                  });
                })];

              case 1:
                return e.sent(), [3
                /*break*/
                , 3];

              case 2:
                if (!qn(n = e.sent())) throw n; // If `notifyLocalViewChanges` fails, we did not advance the sequence
                // number for the documents that were included in this transaction.
                // This might trigger them to be deleted earlier than they otherwise
                // would have, but it should not invalidate the integrity of the data.

                return de("LocalStore", "Failed to update sequence numbers: " + n), [3
                /*break*/
                , 3];

              case 3:
                for (r = 0, i = t; r < i.length; r++) {
                  o = i[r], s = o.targetId, o.fromCache || (u = this.gu.get(s), a = u.Ee, h = u.Re(a), // Advance the last limbo free snapshot version
                  this.gu = this.gu.Ae(s, h));
                }

                return [2
                /*return*/
                ];
            }
          });
        });
      },
      /**
       * Gets the mutation batch after the passed in batchId in the mutation queue
       * or null if empty.
       * @param afterBatchId If provided, the batch to search after.
       * @returns The next mutation or null if there wasn't one.
       */
      t.prototype.qu = function (t) {
        var e = this;
        return this.persistence.runTransaction("Get next mutation batch", "readonly", function (n) {
          return void 0 === t && (t = -1), e.Wn.ea(n, t);
        });
      },
      /**
       * Read the current value of a Document with a given key or null if not
       * found - used for testing.
       */
      t.prototype.Uu = function (t) {
        var e = this;
        return this.persistence.runTransaction("read document", "readonly", function (n) {
          return e.vu.Kn(n, t);
        });
      },
      /**
       * Assigns the given target an internal ID so that its results can be pinned so
       * they don't get GC'd. A target must be allocated in the local store before
       * the store can be used to manage its view.
       *
       * Allocating an already allocated `Target` will return the existing `TargetData`
       * for that `Target`.
       */
      t.prototype.Qu = function (t) {
        var e = this;
        return this.persistence.runTransaction("Allocate target", "readwrite", function (n) {
          var r;
          return e.Yh.gh(n, t).next(function (i) {
            return i ? ( // This target has been listened to previously, so reuse the
            // previous targetID.
            // TODO(mcg): freshen last accessed date?
            r = i, xe.resolve(r)) : e.Yh.oh(n).next(function (i) {
              return r = new Dt(t, i, 0
              /* Listen */
              , n.Oh), e.Yh.fh(n, r).next(function () {
                return r;
              });
            });
          });
        }).then(function (n) {
          return null === e.gu.get(n.targetId) && (e.gu = e.gu.Ae(n.targetId, n), e.pu.set(t, n.targetId)), n;
        });
      },
      /**
       * Returns the TargetData as seen by the LocalStore, including updates that may
       * have not yet been persisted to the TargetCache.
       */
      // Visible for testing.
      t.prototype.gh = function (t, e) {
        var n = this.pu.get(e);
        return void 0 !== n ? xe.resolve(this.gu.get(n)) : this.Yh.gh(t, e);
      },
      /**
       * Unpin all the documents associated with the given target. If
       * `keepPersistedTargetData` is set to false and Eager GC enabled, the method
       * directly removes the associated target data from the target cache.
       *
       * Releasing a non-existing `Target` is a no-op.
       */
      // PORTING NOTE: `keepPersistedTargetData` is multi-tab only.
      t.prototype.Wu = function (t, e) {
        var n = this,
            r = this.gu.get(t),
            i = e ? "readwrite" : "readwrite-primary";
        return this.persistence.runTransaction("Release target", i, function (t) {
          return e ? xe.resolve() : n.persistence.hh.removeTarget(t, r);
        }).then(function () {
          n.gu = n.gu.remove(t), n.pu["delete"](r.target);
        });
      },
      /**
       * Runs the specified query against the local store and returns the results,
       * potentially taking advantage of query data from previous executions (such
       * as the set of remote keys).
       *
       * @param usePreviousResults Whether results from previous executions can
       * be used to optimize this query execution.
       */
      t.prototype.ju = function (t, e) {
        var n = this,
            r = g.min(),
            i = Wt();
        return this.persistence.runTransaction("Execute query", "readonly", function (o) {
          return n.gh(o, t.ee()).next(function (t) {
            if (t) return r = t.lastLimboFreeSnapshotVersion, n.Yh.Sh(o, t.targetId).next(function (t) {
              i = t;
            });
          }).next(function () {
            return n.Vu.Zn(o, t, e ? r : g.min(), e ? i : Wt());
          }).next(function (t) {
            return {
              documents: t,
              Ku: i
            };
          });
        });
      }, t.prototype.ku = function (t, e, n) {
        var r = this,
            i = e.batch,
            o = i.keys(),
            s = xe.resolve();
        return o.forEach(function (r) {
          s = s.next(function () {
            return n.Ln(t, r);
          }).next(function (t) {
            var o = t,
                s = e.Rn.get(r);
            me(null !== s), (!o || o.version.S(s) < 0) && (o = i.at(r, o, e)) && // We use the commitVersion as the readTime rather than the
            // document's updateTime since the updateTime is not advanced
            // for updates that do not modify the underlying document.
            n.Nn(o, e.wn);
          });
        }), s.next(function () {
          return r.Wn.ra(t, i);
        });
      }, t.prototype.Iu = function (t) {
        var e = this;
        return this.persistence.runTransaction("Collect garbage", "readwrite-primary", function (n) {
          return t.mu(n, e.gu);
        });
      }, t;
    }();
    /** Implements the steps for LRU garbage collection. */

    /**
     * The maximum time to leave a resume token buffered without writing it out.
     * This value is arbitrary: it's long enough to avoid several writes
     * (possibly indefinitely if updates come more frequently than this) but
     * short enough that restarting after crashing will still have a pretty
     * recent resume token.
     */


    Zn.xu = 3e8;
    /**
     * An implementation of LocalStore that provides additional functionality
     * for MultiTabSyncEngine.
     */
    // PORTING NOTE: Web only.

    var tr =
    /** @class */
    function (t) {
      function n(e, n, r) {
        var i = this;
        return (i = t.call(this, e, n, r) || this).persistence = e, i.Wn = e.vo(r), i.bu = e.Co(), i.Yh = e.Do(), i;
      }
      /** Starts the LocalStore. */


      return e.__extends(n, t), n.prototype.start = function () {
        return this.Gu();
      },
      /** Returns the local view of the documents affected by a mutation batch. */
      n.prototype.zu = function (t) {
        var e = this;
        return this.persistence.runTransaction("Lookup mutation documents", "readonly", function (n) {
          return e.Wn.ta(n, t).next(function (t) {
            return t ? e.vu.Yn(n, t) : xe.resolve(null);
          });
        });
      }, n.prototype.Hu = function (t) {
        this.Wn.ha(t);
      }, n.prototype.ao = function (t) {
        this.persistence.ao(t);
      }, n.prototype.bo = function () {
        return this.persistence.bo();
      }, n.prototype.Yu = function (t) {
        var e = this,
            n = this.gu.get(t);
        return n ? Promise.resolve(n.target) : this.persistence.runTransaction("Get target data", "readonly", function (n) {
          return e.Yh.si(n, t).next(function (t) {
            return t ? t.target : null;
          });
        });
      },
      /**
       * Returns the set of documents that have been updated since the last call.
       * If this is the first call, returns the set of changes since client
       * initialization. Further invocations will return document changes since
       * the point of rejection.
       */
      n.prototype.Kr = function () {
        var t = this;
        return this.persistence.runTransaction("Get new document changes", "readonly", function (e) {
          return t.bu.Kr(e, t.yu);
        }).then(function (e) {
          var n = e.Gr,
              r = e.readTime;
          return t.yu = r, n;
        });
      },
      /**
       * Reads the newest document change from persistence and forwards the internal
       * synchronization marker so that calls to `getNewDocumentChanges()`
       * only return changes that happened after client initialization.
       */
      n.prototype.Gu = function () {
        return e.__awaiter(this, void 0, void 0, function () {
          var t,
              n = this;
          return e.__generator(this, function (e) {
            switch (e.label) {
              case 0:
                return t = this, [4
                /*yield*/
                , this.persistence.runTransaction("Synchronize last document change read time", "readonly", function (t) {
                  return n.bu.Hr(t);
                })];

              case 1:
                return t.yu = e.sent(), [2
                /*return*/
                ];
            }
          });
        });
      }, n;
    }(Zn);
    /**
     * Verifies the error thrown by a LocalStore operation. If a LocalStore
     * operation fails because the primary lease has been taken by another client,
     * we ignore the error (the persistence layer will immediately call
     * `applyPrimaryLease` to propagate the primary state change). All other errors
     * are re-thrown.
     *
     * @param err An error returned by a LocalStore operation.
     * @return A Promise that resolves after we recovered, or the original error.
     */


    function er(t) {
      return e.__awaiter(this, void 0, void 0, function () {
        return e.__generator(this, function (e) {
          if (t.code !== h.FAILED_PRECONDITION || t.message !== Re) throw t;
          return de("LocalStore", "Unexpectedly lost primary lease"), [2
          /*return*/
          ];
        });
      });
    }
    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /**
     * A collection of references to a document from some kind of numbered entity
     * (either a target ID or batch ID). As references are added to or removed from
     * the set corresponding events are emitted to a registered garbage collector.
     *
     * Each reference is represented by a DocumentReference object. Each of them
     * contains enough information to uniquely identify the reference. They are all
     * stored primarily in a set sorted by key. A document is considered garbage if
     * there's no references in that set (this can be efficiently checked thanks to
     * sorting by key).
     *
     * ReferenceSet also keeps a secondary set that contains references sorted by
     * IDs. This one is used to efficiently implement removal of all references by
     * some target ID.
     */


    var nr =
    /** @class */
    function () {
      function t() {
        // A set of outstanding references to a document sorted by key.
        this.Ju = new Pt(rr.Xu), // A set of outstanding references to a document sorted by target id.
        this.Zu = new Pt(rr.tc)
        /** Returns true if the reference set contains no references. */
        ;
      }

      return t.prototype.B = function () {
        return this.Ju.B();
      },
      /** Adds a reference to the given document key for the given ID. */
      t.prototype.yh = function (t, e) {
        var n = new rr(t, e);
        this.Ju = this.Ju.add(n), this.Zu = this.Zu.add(n);
      },
      /** Add references to the given document keys for the given ID. */
      t.prototype.ec = function (t, e) {
        var n = this;
        t.forEach(function (t) {
          return n.yh(t, e);
        });
      },
      /**
       * Removes a reference to the given document key for the given
       * ID.
       */
      t.prototype.vh = function (t, e) {
        this.sc(new rr(t, e));
      }, t.prototype.ic = function (t, e) {
        var n = this;
        t.forEach(function (t) {
          return n.vh(t, e);
        });
      },
      /**
       * Clears all references with a given ID. Calls removeRef() for each key
       * removed.
       */
      t.prototype.nc = function (t) {
        var e = this,
            n = _.EMPTY,
            r = new rr(n, t),
            i = new rr(n, t + 1),
            o = [];
        return this.Zu.Ke([r, i], function (t) {
          e.sc(t), o.push(t.key);
        }), o;
      }, t.prototype.rc = function () {
        var t = this;
        this.Ju.forEach(function (e) {
          return t.sc(e);
        });
      }, t.prototype.sc = function (t) {
        this.Ju = this.Ju["delete"](t), this.Zu = this.Zu["delete"](t);
      }, t.prototype.hc = function (t) {
        var e = _.EMPTY,
            n = new rr(e, t),
            r = new rr(e, t + 1),
            i = Wt();
        return this.Zu.Ke([n, r], function (t) {
          i = i.add(t.key);
        }), i;
      }, t.prototype.Ch = function (t) {
        var e = new rr(t, 0),
            n = this.Ju.ze(e);
        return null !== n && t.isEqual(n.key);
      }, t;
    }(),
        rr =
    /** @class */
    function () {
      function t(t, e) {
        this.key = t, this.oc = e
        /** Compare by key then by ID */
        ;
      }

      return t.Xu = function (t, e) {
        return _.N(t.key, e.key) || be(t.oc, e.oc);
      },
      /** Compare by ID then by key */
      t.tc = function (t, e) {
        return be(t.oc, e.oc) || _.N(t.key, e.key);
      }, t;
    }();
    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /**
     * Validates that no arguments were passed in the invocation of functionName.
     *
     * Forward the magic "arguments" variable as second parameter on which the
     * parameter validation is performed:
     * validateNoArgs('myFunction', arguments);
     */


    function ir(t, e) {
      if (0 !== e.length) throw new c(h.INVALID_ARGUMENT, "Function " + t + "() does not support arguments, but was called with " + br(e.length, "argument") + ".");
    }
    /**
     * Validates the invocation of functionName has the exact number of arguments.
     *
     * Forward the magic "arguments" variable as second parameter on which the
     * parameter validation is performed:
     * validateExactNumberOfArgs('myFunction', arguments, 2);
     */


    function or(t, e, n) {
      if (e.length !== n) throw new c(h.INVALID_ARGUMENT, "Function " + t + "() requires " + br(n, "argument") + ", but was called with " + br(e.length, "argument") + ".");
    }
    /**
     * Validates the invocation of functionName has at least the provided number of
     * arguments (but can have many more).
     *
     * Forward the magic "arguments" variable as second parameter on which the
     * parameter validation is performed:
     * validateAtLeastNumberOfArgs('myFunction', arguments, 2);
     */


    function sr(t, e, n) {
      if (e.length < n) throw new c(h.INVALID_ARGUMENT, "Function " + t + "() requires at least " + br(n, "argument") + ", but was called with " + br(e.length, "argument") + ".");
    }
    /**
     * Validates the invocation of functionName has number of arguments between
     * the values provided.
     *
     * Forward the magic "arguments" variable as second parameter on which the
     * parameter validation is performed:
     * validateBetweenNumberOfArgs('myFunction', arguments, 2, 3);
     */


    function ur(t, e, n, r) {
      if (e.length < n || e.length > r) throw new c(h.INVALID_ARGUMENT, "Function " + t + "() requires between " + n + " and " + r + " arguments, but was called with " + br(e.length, "argument") + ".");
    }
    /**
     * Validates the provided argument is an array and has as least the expected
     * number of elements.
     */

    /**
     * Validates the provided positional argument has the native JavaScript type
     * using typeof checks.
     */


    function ar(t, e, n, r) {
      pr(t, e, Er(n) + " argument", r);
    }
    /**
     * Validates the provided argument has the native JavaScript type using
     * typeof checks or is undefined.
     */


    function hr(t, e, n, r) {
      void 0 !== r && ar(t, e, n, r);
    }
    /**
     * Validates the provided named option has the native JavaScript type using
     * typeof checks.
     */


    function cr(t, e, n, r) {
      pr(t, e, n + " option", r);
    }
    /**
     * Validates the provided named option has the native JavaScript type using
     * typeof checks or is undefined.
     */


    function fr(t, e, n, r) {
      void 0 !== r && cr(t, e, n, r);
    }
    /**
     * Validates that the provided named option equals one of the expected values.
     */

    /**
     * Validates that the provided named option equals one of the expected values or
     * is undefined.
     */


    function lr(t, e, n, r, i) {
      void 0 !== r && function (t, e, n, r, i) {
        for (var o = [], s = 0, u = i; s < u.length; s++) {
          var a = u[s];
          if (a === r) return;
          o.push(yr(a));
        }

        var f = yr(r);
        throw new c(h.INVALID_ARGUMENT, "Invalid value " + f + " provided to function " + t + '() for option "' + n + '". Acceptable values: ' + o.join(", "));
      }(t, 0, n, r, i);
    }
    /**
     * Validates that the provided argument is a valid enum.
     *
     * @param functionName Function making the validation call.
     * @param enums Array containing all possible values for the enum.
     * @param position Position of the argument in `functionName`.
     * @param argument Argument to validate.
     * @return The value as T if the argument can be converted.
     */

    /** Helper to validate the type of a provided input. */


    function pr(t, e, n, r) {
      if (!("object" === e ? dr(r) : "non-empty string" === e ? "string" == typeof r && "" !== r : typeof r === e)) {
        var i = yr(r);
        throw new c(h.INVALID_ARGUMENT, "Function " + t + "() requires its " + n + " to be of type " + e + ", but it was: " + i);
      }
    }
    /**
     * Returns true if it's a non-null object without a custom prototype
     * (i.e. excludes Array, Date, etc.).
     */


    function dr(t) {
      return "object" == typeof t && null !== t && (Object.getPrototypeOf(t) === Object.prototype || null === Object.getPrototypeOf(t));
    }
    /** Returns a string describing the type / value of the provided input. */


    function yr(t) {
      if (void 0 === t) return "undefined";
      if (null === t) return "null";
      if ("string" == typeof t) return t.length > 20 && (t = t.substring(0, 20) + "..."), JSON.stringify(t);
      if ("number" == typeof t || "boolean" == typeof t) return "" + t;

      if ("object" == typeof t) {
        if (t instanceof Array) return "an array";

        var e =
        /** Hacky method to try to get the constructor name for an object. */
        function (t) {
          if (t.constructor) {
            var e = /function\s+([^\s(]+)\s*\(/.exec(t.constructor.toString());
            if (e && e.length > 1) return e[1];
          }

          return null;
        }(t);

        return e ? "a custom " + e + " object" : "an object";
      }

      return "function" == typeof t ? "a function" : ge();
    }

    function vr(t, e, n) {
      if (void 0 === n) throw new c(h.INVALID_ARGUMENT, "Function " + t + "() requires a valid " + Er(e) + " argument, but it was undefined.");
    }
    /**
     * Validates the provided positional argument is an object, and its keys and
     * values match the expected keys and types provided in optionTypes.
     */


    function gr(t, e, n) {
      I(e, function (e, r) {
        if (n.indexOf(e) < 0) throw new c(h.INVALID_ARGUMENT, "Unknown option '" + e + "' passed to function " + t + "(). Available options: " + n.join(", "));
      });
    }
    /**
     * Helper method to throw an error that the provided argument did not pass
     * an instanceof check.
     */


    function mr(t, e, n, r) {
      var i = yr(r);
      return new c(h.INVALID_ARGUMENT, "Function " + t + "() requires its " + Er(n) + " argument to be a " + e + ", but it was: " + i);
    }

    function wr(t, e, n) {
      if (n <= 0) throw new c(h.INVALID_ARGUMENT, "Function " + t + "() requires its " + Er(e) + " argument to be a positive number, but it was: " + n + ".");
    }
    /** Converts a number to its english word representation */


    function Er(t) {
      switch (t) {
        case 1:
          return "first";

        case 2:
          return "second";

        case 3:
          return "third";

        default:
          return t + "th";
      }
    }
    /**
     * Formats the given word as plural conditionally given the preceding number.
     */


    function br(t, e) {
      return t + " " + e + (1 === t ? "" : "s");
    }
    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /** Helper function to assert Uint8Array is available at runtime. */


    function _r() {
      if ("undefined" == typeof Uint8Array) throw new c(h.UNIMPLEMENTED, "Uint8Arrays are not available in this environment.");
    }
    /** Helper function to assert Base64 functions are available at runtime. */


    function Tr() {
      if (!ce.nt().ac) throw new c(h.UNIMPLEMENTED, "Blobs are unavailable in Firestore in this environment.");
    }
    /**
     * Immutable class holding a blob (binary data).
     * This class is directly exposed in the public API.
     *
     * Note that while you can't hide the constructor in JavaScript code, we are
     * using the hack above to make sure no-one outside this module can call it.
     */


    var Ir =
    /** @class */
    function () {
      function t(t) {
        Tr(), this.uc = t;
      }

      return t.fromBase64String = function (e) {
        or("Blob.fromBase64String", arguments, 1), ar("Blob.fromBase64String", "string", 1, e), Tr();

        try {
          return new t(A.fromBase64String(e));
        } catch (e) {
          throw new c(h.INVALID_ARGUMENT, "Failed to construct Blob from Base64 string: " + e);
        }
      }, t.fromUint8Array = function (e) {
        if (or("Blob.fromUint8Array", arguments, 1), _r(), !(e instanceof Uint8Array)) throw mr("Blob.fromUint8Array", "Uint8Array", 1, e);
        return new t(A.fromUint8Array(e));
      }, t.prototype.toBase64 = function () {
        return or("Blob.toBase64", arguments, 0), Tr(), this.uc.toBase64();
      }, t.prototype.toUint8Array = function () {
        return or("Blob.toUint8Array", arguments, 0), _r(), this.uc.toUint8Array();
      }, t.prototype.toString = function () {
        return "Blob(base64: " + this.toBase64() + ")";
      }, t.prototype.isEqual = function (t) {
        return this.uc.isEqual(t.uc);
      }, t;
    }(),
        Nr =
    /** @class */
    function () {
      /**
       * Creates a FieldPath from the provided field names. If more than one field
       * name is provided, the path will point to a nested field in a document.
       *
       * @param fieldNames A list of field names.
       */
      function t() {
        for (var t = [], e = 0; e < arguments.length; e++) {
          t[e] = arguments[e];
        }

        !function (t, e, n, r) {
          if (!(e instanceof Array) || e.length < 1) throw new c(h.INVALID_ARGUMENT, "Function FieldPath() requires its fieldNames argument to be an array with at least " + br(1, "element") + ".");
        }(0, t);

        for (var n = 0; n < t.length; ++n) {
          if (ar("FieldPath", "string", n, t[n]), 0 === t[n].length) throw new c(h.INVALID_ARGUMENT, "Invalid field name at argument $(i + 1). Field names must not be empty.");
        }

        this.cc = new b(t);
      }

      return t.documentId = function () {
        return t._c;
      }, t.prototype.isEqual = function (e) {
        if (!(e instanceof t)) throw mr("isEqual", "FieldPath", 1, e);
        return this.cc.isEqual(e.cc);
      }, t;
    }();
    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    // The objects that are a part of this API are exposed to third-parties as
    // compiled javascript so we want to flag our private members with a leading
    // underscore to discourage their use.

    /**
     * A FieldPath refers to a field in a document. The path may consist of a single
     * field name (referring to a top-level field in the document), or a list of
     * field names (referring to a nested field in the document).
     */

    /**
     * Internal Note: The backend doesn't technically support querying by
     * document ID. Instead it queries by the entire document name (full path
     * included), but in the cases we currently support documentId(), the net
     * effect is the same.
     */


    Nr._c = new Nr(b.J().j());
    /**
     * Matches any characters in a field path string that are reserved.
     */

    var Ar = new RegExp("[~\\*/\\[\\]]"),
        kr = function kr(t) {
      this.lc = t;
    },
        Dr =
    /** @class */
    function (t) {
      function n() {
        return t.call(this, "FieldValue.delete") || this;
      }

      return e.__extends(n, t), n.prototype.Di = function (t) {
        if (2
        /* MergeSet */
        !== t.dc) throw 1
        /* Update */
        === t.dc ? t.fc("FieldValue.delete() can only appear at the top level of your update data") : t.fc("FieldValue.delete() cannot be used with set() unless you pass {merge:true}"); // No transform to add for a delete, but we need to add it to our
        // fieldMask so it gets deleted.

        return t.Vt.push(t.path), null;
      }, n.prototype.isEqual = function (t) {
        return t instanceof n;
      }, n;
    }(kr),
        xr =
    /** @class */
    function (t) {
      function n() {
        return t.call(this, "FieldValue.serverTimestamp") || this;
      }

      return e.__extends(n, t), n.prototype.Di = function (t) {
        return new tt(t.path, Y.instance);
      }, n.prototype.isEqual = function (t) {
        return t instanceof n;
      }, n;
    }(kr),
        Sr =
    /** @class */
    function (t) {
      function n(e) {
        var n = this;
        return (n = t.call(this, "FieldValue.arrayUnion") || this).Tc = e, n;
      }

      return e.__extends(n, t), n.prototype.Di = function (t) {
        // Although array transforms are used with writes, the actual elements
        // being uniomed or removed are not considered writes since they cannot
        // contain any FieldValue sentinels, etc.
        var e = new qr({
          dc: 3
          /* Argument */
          ,
          methodName: this.lc,
          Ec: !0
        }, t.ii, t.serializer, t.ignoreUndefinedProperties),
            n = this.Tc.map(function (t) {
          return jr(t, e);
        }),
            r = new $(n);
        return new tt(t.path, r);
      }, n.prototype.isEqual = function (t) {
        // TODO(mrschmidt): Implement isEquals
        return this === t;
      }, n;
    }(kr),
        Rr =
    /** @class */
    function (t) {
      function n(e) {
        var n = this;
        return (n = t.call(this, "FieldValue.arrayRemove") || this).Tc = e, n;
      }

      return e.__extends(n, t), n.prototype.Di = function (t) {
        // Although array transforms are used with writes, the actual elements
        // being unioned or removed are not considered writes since they cannot
        // contain any FieldValue sentinels, etc.
        var e = new qr({
          dc: 3
          /* Argument */
          ,
          methodName: this.lc,
          Ec: !0
        }, t.ii, t.serializer, t.ignoreUndefinedProperties),
            n = this.Tc.map(function (t) {
          return jr(t, e);
        }),
            r = new J(n);
        return new tt(t.path, r);
      }, n.prototype.isEqual = function (t) {
        // TODO(mrschmidt): Implement isEquals
        return this === t;
      }, n;
    }(kr),
        Lr =
    /** @class */
    function (t) {
      function n(e) {
        var n = this;
        return (n = t.call(this, "FieldValue.increment") || this).Ic = e, n;
      }

      return e.__extends(n, t), n.prototype.Di = function (t) {
        var e = new qr({
          dc: 3
          /* Argument */
          ,
          methodName: this.lc
        }, t.ii, t.serializer, t.ignoreUndefinedProperties),
            n = jr(this.Ic, e),
            r = new H(t.serializer, n);
        return new tt(t.path, r);
      }, n.prototype.isEqual = function (t) {
        // TODO(mrschmidt): Implement isEquals
        return this === t;
      }, n;
    }(kr),
        Or =
    /** @class */
    function () {
      function t(t, e) {
        if (or("GeoPoint", arguments, 2), ar("GeoPoint", "number", 1, t), ar("GeoPoint", "number", 2, e), !isFinite(t) || t < -90 || t > 90) throw new c(h.INVALID_ARGUMENT, "Latitude must be a number between -90 and 90, but was: " + t);
        if (!isFinite(e) || e < -180 || e > 180) throw new c(h.INVALID_ARGUMENT, "Longitude must be a number between -180 and 180, but was: " + e);
        this.wc = t, this.Rc = e;
      }

      return Object.defineProperty(t.prototype, "latitude", {
        /**
         * Returns the latitude of this geo point, a number between -90 and 90.
         */
        get: function get() {
          return this.wc;
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(t.prototype, "longitude", {
        /**
         * Returns the longitude of this geo point, a number between -180 and 180.
         */
        get: function get() {
          return this.Rc;
        },
        enumerable: !0,
        configurable: !0
      }), t.prototype.isEqual = function (t) {
        return this.wc === t.wc && this.Rc === t.Rc;
      },
      /**
       * Actually private to JS consumers of our API, so this function is prefixed
       * with an underscore.
       */
      t.prototype.p = function (t) {
        return be(this.wc, t.wc) || be(this.Rc, t.Rc);
      }, t;
    }(),
        Vr = /^__.*__$/,
        Pr =
    /** @class */
    function () {
      function t(t, e, n) {
        this.data = t, this.Vt = e, this.fieldTransforms = n;
      }

      return t.prototype.Ac = function (t, e) {
        var n = [];
        return null !== this.Vt ? n.push(new ot(t, this.data, this.Vt, e)) : n.push(new it(t, this.data, e)), this.fieldTransforms.length > 0 && n.push(new st(t, this.fieldTransforms)), n;
      }, t;
    }(),
        Ur =
    /** @class */
    function () {
      function t(t, e, n) {
        this.data = t, this.Vt = e, this.fieldTransforms = n;
      }

      return t.prototype.Ac = function (t, e) {
        var n = [new ot(t, this.data, this.Vt, e)];
        return this.fieldTransforms.length > 0 && n.push(new st(t, this.fieldTransforms)), n;
      }, t;
    }();
    /**
     * Parses a field path string into a FieldPath, treating dots as separators.
     */

    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /**
     * An opaque base class for FieldValue sentinel objects in our public API,
     * with public static methods for creating said sentinel objects.
     */


    function Cr(t) {
      switch (t) {
        case 0
        /* Set */
        : // fall through

        case 2
        /* MergeSet */
        : // fall through

        case 1
        /* Update */
        :
          return !0;

        case 3
        /* Argument */
        :
        case 4
        /* ArrayArgument */
        :
          return !1;

        default:
          throw ge();
      }
    }
    /** A "context" object passed around while parsing user data. */


    var qr =
    /** @class */
    function () {
      /**
       * Initializes a ParseContext with the given source and path.
       *
       * @param settings The settings for the parser.
       * @param databaseId The database ID of the Firestore instance.
       * @param serializer The serializer to use to generate the Value proto.
       * @param ignoreUndefinedProperties Whether to ignore undefined properties
       * rather than throw.
       * @param fieldTransforms A mutable list of field transforms encountered while
       *     parsing the data.
       * @param fieldMask A mutable list of field paths encountered while parsing
       *     the data.
       *
       * TODO(b/34871131): We don't support array paths right now, so path can be
       * null to indicate the context represents any location within an array (in
       * which case certain features will not work and errors will be somewhat
       * compromised).
       */
      function t(t, e, n, r, i, o) {
        this.settings = t, this.ii = e, this.serializer = n, this.ignoreUndefinedProperties = r, // Minor hack: If fieldTransforms is undefined, we assume this is an
        // external call and we need to validate the entire path.
        void 0 === i && this.mc(), this.fieldTransforms = i || [], this.Vt = o || [];
      }

      return Object.defineProperty(t.prototype, "path", {
        get: function get() {
          return this.settings.path;
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(t.prototype, "dc", {
        get: function get() {
          return this.settings.dc;
        },
        enumerable: !0,
        configurable: !0
      }),
      /** Returns a new context with the specified settings overwritten. */
      t.prototype.Pc = function (e) {
        return new t(Object.assign(Object.assign({}, this.settings), e), this.ii, this.serializer, this.ignoreUndefinedProperties, this.fieldTransforms, this.Vt);
      }, t.prototype.Vc = function (t) {
        var e,
            n = null === (e = this.path) || void 0 === e ? void 0 : e.child(t),
            r = this.Pc({
          path: n,
          Ec: !1
        });
        return r.gc(t), r;
      }, t.prototype.pc = function (t) {
        var e,
            n = null === (e = this.path) || void 0 === e ? void 0 : e.child(t),
            r = this.Pc({
          path: n,
          Ec: !1
        });
        return r.mc(), r;
      }, t.prototype.yc = function (t) {
        // TODO(b/34871131): We don't support array paths right now; so make path
        // undefined.
        return this.Pc({
          path: void 0,
          Ec: !0
        });
      }, t.prototype.fc = function (t) {
        var e = !this.path || this.path.B() ? "" : " (found in field " + this.path.toString() + ")";
        return new c(h.INVALID_ARGUMENT, "Function " + this.settings.methodName + "() called with invalid data. " + t + e);
      },
      /** Returns 'true' if 'fieldPath' was traversed when creating this context. */
      t.prototype.contains = function (t) {
        return void 0 !== this.Vt.find(function (e) {
          return t.q(e);
        }) || void 0 !== this.fieldTransforms.find(function (e) {
          return t.q(e.field);
        });
      }, t.prototype.mc = function () {
        // TODO(b/34871131): Remove null check once we have proper paths for fields
        // within arrays.
        if (this.path) for (var t = 0; t < this.path.length; t++) {
          this.gc(this.path.get(t));
        }
      }, t.prototype.gc = function (t) {
        if (0 === t.length) throw this.fc("Document fields must not be empty");
        if (Cr(this.dc) && Vr.test(t)) throw this.fc('Document fields cannot begin and end with "__"');
      }, t;
    }(),
        Mr =
    /** @class */
    function () {
      function t(t, e, n) {
        this.ii = t, this.ignoreUndefinedProperties = e, this.serializer = n || ce.nt().bc(t)
        /** Parse document data from a non-merge set() call. */
        ;
      }

      return t.prototype.vc = function (t, e) {
        var n = this.Sc(0
        /* Set */
        , t);
        zr("Data must be an object, but it was:", n, e);
        var r = Fr(e, n);
        return new Pr(new ht(r),
        /* fieldMask= */
        null, n.fieldTransforms);
      },
      /** Parse document data from a set() call with '{merge:true}'. */
      t.prototype.Dc = function (t, e, n) {
        var r = this.Sc(2
        /* MergeSet */
        , t);
        zr("Data must be an object, but it was:", r, e);
        var i,
            o,
            s = Fr(e, r);

        if (n) {
          for (var u = [], a = 0, f = n; a < f.length; a++) {
            var l = f[a],
                p = void 0;
            if (l instanceof Nr) p = l.cc;else {
              if ("string" != typeof l) throw ge();
              p = Wr(t, l);
            }
            if (!r.contains(p)) throw new c(h.INVALID_ARGUMENT, "Field '" + p + "' is specified in your field mask but missing from your input data.");
            Qr(u, p) || u.push(p);
          }

          i = new Z(u), o = r.fieldTransforms.filter(function (t) {
            return i.dt(t.field);
          });
        } else i = new Z(r.Vt), o = r.fieldTransforms;

        return new Pr(new ht(s), i, o);
      },
      /** Parse update data from an update() call. */
      t.prototype.Cc = function (t, e) {
        var n = this.Sc(1
        /* Update */
        , t);
        zr("Data must be an object, but it was:", n, e);
        var r = [],
            i = new ct();
        I(e, function (e, o) {
          var s = Wr(t, e),
              u = n.pc(s);
          if (o instanceof Dr) // Add it to the field mask, but don't add anything to updateData.
            r.push(s);else {
            var a = jr(o, u);
            null != a && (r.push(s), i.set(s, a));
          }
        });
        var o = new Z(r);
        return new Ur(i.yt(), o, n.fieldTransforms);
      },
      /** Parse update data from a list of field/value arguments. */
      t.prototype.Fc = function (t, e, n, r) {
        var i = this.Sc(1
        /* Update */
        , t),
            o = [Gr(t, e)],
            s = [n];
        if (r.length % 2 != 0) throw new c(h.INVALID_ARGUMENT, "Function " + t + "() needs to be called with an even number of arguments that alternate between field names and values.");

        for (var u = 0; u < r.length; u += 2) {
          o.push(Gr(t, r[u])), s.push(r[u + 1]);
        } // We iterate in reverse order to pick the last value for a field if the
        // user specified the field multiple times.


        for (var a = [], f = new ct(), l = o.length - 1; l >= 0; --l) {
          if (!Qr(a, o[l])) {
            var p = o[l],
                d = s[l],
                y = i.pc(p);
            if (d instanceof Dr) // Add it to the field mask, but don't add anything to updateData.
              a.push(p);else {
              var v = jr(d, y);
              null != v && (a.push(p), f.set(p, v));
            }
          }
        }

        var g = new Z(a);
        return new Ur(f.yt(), g, i.fieldTransforms);
      },
      /** Creates a new top-level parse context. */
      t.prototype.Sc = function (t, e) {
        return new qr({
          dc: t,
          methodName: e,
          path: b.G,
          Ec: !1
        }, this.ii, this.serializer, this.ignoreUndefinedProperties);
      },
      /**
       * Parse a "query value" (e.g. value in a where filter or a value in a cursor
       * bound).
       *
       * @param allowArrays Whether the query value is an array that may directly
       * contain additional arrays (e.g. the operand of an `in` query).
       */
      t.prototype.Nc = function (t, e, n) {
        return void 0 === n && (n = !1), jr(e, this.Sc(n ? 4
        /* ArrayArgument */
        : 3
        /* Argument */
        , t));
      }, t;
    }();
    /**
     * Helper for parsing raw user input (provided via the API) into internal model
     * classes.
     */

    /**
     * Parses user data to Protobuf Values.
     *
     * @param input Data to be parsed.
     * @param context A context object representing the current path being parsed,
     * the source of the data being parsed, etc.
     * @return The parsed value, or null if the value was a FieldValue sentinel
     * that should not be included in the resulting parsed data.
     */


    function jr(t, e) {
      if (Br(t)) return zr("Unsupported field value:", e, t), Fr(t, e);
      if (t instanceof kr) // FieldValues usually parse into transforms (except FieldValue.delete())
        // in which case we do not want to include this field in our parsed data
        // (as doing so will overwrite the field directly prior to the transform
        // trying to transform it). So we don't add this location to
        // context.fieldMask and we return null as our parsing result.

        /**
         * "Parses" the provided FieldValueImpl, adding any necessary transforms to
         * context.fieldTransforms.
         */
        return function (t, e) {
          // Sentinels are only supported with writes, and not within arrays.
          if (!Cr(e.dc)) throw e.fc(t.lc + "() can only be used with update() and set()");
          if (null === e.path) throw e.fc(t.lc + "() is not currently supported inside arrays");
          var n = t.Di(e);
          n && e.fieldTransforms.push(n);
        }(t, e), null;

      if ( // If context.path is null we are inside an array and we don't support
      // field mask paths more granular than the top-level array.
      e.path && e.Vt.push(e.path), t instanceof Array) {
        // TODO(b/34871131): Include the path containing the array in the error
        // message.
        // In the case of IN queries, the parsed data is an array (representing
        // the set of values to be included for the IN query) that may directly
        // contain additional arrays (each representing an individual field
        // value), so we disable this validation.
        if (e.settings.Ec && 4
        /* ArrayArgument */
        !== e.dc) throw e.fc("Nested arrays are not supported");
        return function (t, e) {
          for (var n = [], r = 0, i = 0, o = t; i < o.length; i++) {
            var s = jr(o[i], e.yc(r));
            null == s && ( // Just include nulls in the array for fields being replaced with a
            // sentinel.
            s = {
              nullValue: "NULL_VALUE"
            }), n.push(s), r++;
          }

          return {
            arrayValue: {
              values: n
            }
          };
        }(t, e);
      }

      return function (t, e) {
        if (null === t) return {
          nullValue: "NULL_VALUE"
        };
        if ("number" == typeof t) return e.serializer.ai(t);
        if ("boolean" == typeof t) return {
          booleanValue: t
        };
        if ("string" == typeof t) return {
          stringValue: t
        };

        if (t instanceof Date) {
          var n = v.fromDate(t);
          return {
            timestampValue: e.serializer.C(n)
          };
        }

        if (t instanceof v) {
          // Firestore backend truncates precision down to microseconds. To ensure
          // offline mode works the same with regards to truncation, perform the
          // truncation immediately without waiting for the backend to do that.
          var r = new v(t.seconds, 1e3 * Math.floor(t.nanoseconds / 1e3));
          return {
            timestampValue: e.serializer.C(r)
          };
        }

        if (t instanceof Or) return {
          geoPointValue: {
            latitude: t.latitude,
            longitude: t.longitude
          }
        };
        if (t instanceof Ir) return {
          bytesValue: e.serializer.ui(t)
        };

        if (t instanceof Mi) {
          var i = e.ii,
              o = t.firestore.$c;
          if (!o.isEqual(i)) throw e.fc("Document reference is for database " + o.projectId + "/" + o.database + " but should be for database " + i.projectId + "/" + i.database);
          return {
            referenceValue: e.serializer._i(t.kc.path, t.firestore.$c)
          };
        }

        if (void 0 === t && e.ignoreUndefinedProperties) return null;
        throw e.fc("Unsupported field value: " + yr(t));
      }(t, e);
    }

    function Fr(t, e) {
      var n = {};
      return N(t) ? // If we encounter an empty object, we explicitly add it to the update
      // mask to ensure that the server creates a map entry.
      e.path && e.path.length > 0 && e.Vt.push(e.path) : I(t, function (t, r) {
        var i = jr(r, e.Vc(t));
        null != i && (n[t] = i);
      }), {
        mapValue: {
          fields: n
        }
      };
    }

    function Br(t) {
      return !("object" != typeof t || null === t || t instanceof Array || t instanceof Date || t instanceof v || t instanceof Or || t instanceof Ir || t instanceof Mi || t instanceof kr);
    }

    function zr(t, e, n) {
      if (!Br(n) || !dr(n)) {
        var r = yr(n);
        throw "an object" === r ? e.fc(t + " a custom object") : e.fc(t + " " + r);
      }
    }
    /**
     * Helper that calls fromDotSeparatedString() but wraps any error thrown.
     */


    function Gr(t, e) {
      if (e instanceof Nr) return e.cc;
      if ("string" == typeof e) return Wr(t, e);
      throw new c(h.INVALID_ARGUMENT, "Function " + t + "() called with invalid data. Field path arguments must be of type string or FieldPath.");
    }
    /**
     * Wraps fromDotSeparatedString with an error message about the method that
     * was thrown.
     * @param methodName The publicly visible method name
     * @param path The dot-separated string form of a field path which will be split
     * on dots.
     */


    function Wr(t, n) {
      try {
        return function (t) {
          if (t.search(Ar) >= 0) throw new c(h.INVALID_ARGUMENT, "Invalid field path (" + t + "). Paths must not contain '~', '*', '/', '[', or ']'");

          try {
            return new (Nr.bind.apply(Nr, e.__spreadArrays([void 0], t.split("."))))();
          } catch (e) {
            throw new c(h.INVALID_ARGUMENT, "Invalid field path (" + t + "). Paths must not be empty, begin with '.', end with '.', or contain '..'");
          }
        }(n).cc;
      } catch (n) {
        var r = (i = n) instanceof Error ? i.message : i.toString();
        throw new c(h.INVALID_ARGUMENT, "Function " + t + "() called with invalid data. " + r);
      }
      /**
      * Extracts the message from a caught exception, which should be an Error object
      * though JS doesn't guarantee that.
      */


      var i;
      /** Checks `haystack` if FieldPath `needle` is present. Runs in O(n). */
    }

    function Qr(t, e) {
      return t.some(function (t) {
        return t.isEqual(e);
      });
    }
    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /**
     * A PersistentStream is an abstract base class that represents a streaming RPC
     * to the Firestore backend. It's built on top of the connections own support
     * for streaming RPCs, and adds several critical features for our clients:
     *
     *   - Exponential backoff on failure
     *   - Authentication via CredentialsProvider
     *   - Dispatching all callbacks into the shared worker queue
     *   - Closing idle streams after 60 seconds of inactivity
     *
     * Subclasses of PersistentStream implement serialization of models to and
     * from the JSON representation of the protocol buffers for a specific
     * streaming RPC.
     *
     * ## Starting and Stopping
     *
     * Streaming RPCs are stateful and need to be start()ed before messages can
     * be sent and received. The PersistentStream will call the onOpen() function
     * of the listener once the stream is ready to accept requests.
     *
     * Should a start() fail, PersistentStream will call the registered onClose()
     * listener with a FirestoreError indicating what went wrong.
     *
     * A PersistentStream can be started and stopped repeatedly.
     *
     * Generic types:
     *  SendType: The type of the outgoing message of the underlying
     *    connection stream
     *  ReceiveType: The type of the incoming message of the underlying
     *    connection stream
     *  ListenerType: The type of the listener that will be used for callbacks
     */


    var Kr =
    /** @class */
    function () {
      function t(t, e, n, r, i, o) {
        this.Tr = t, this.Lc = n, this.Mc = r, this.Oc = i, this.listener = o, this.state = 0
        /* Initial */
        ,
        /**
             * A close count that's incremented every time the stream is closed; used by
             * getCloseGuardedDispatcher() to invalidate callbacks that happen after
             * close.
             */
        this.xc = 0, this.Bc = null, this.stream = null, this.$a = new Ce(t, e)
        /**
        * Returns true if start() has been called and no error has occurred. True
        * indicates the stream is open or in the process of opening (which
        * encompasses respecting backoff, getting auth tokens, and starting the
        * actual RPC). Use isOpen() to determine if the stream is open and ready for
        * outbound requests.
        */
        ;
      }

      return t.prototype.qc = function () {
        return 1
        /* Starting */
        === this.state || 2
        /* Open */
        === this.state || 4
        /* Backoff */
        === this.state;
      },
      /**
       * Returns true if the underlying RPC is open (the onOpen() listener has been
       * called) and the stream is ready for outbound requests.
       */
      t.prototype.Uc = function () {
        return 2
        /* Open */
        === this.state;
      },
      /**
       * Starts the RPC. Only allowed if isStarted() returns false. The stream is
       * not immediately ready for use: onOpen() will be invoked when the RPC is
       * ready for outbound requests, at which point isOpen() will return true.
       *
       * When start returns, isStarted() will return true.
       */
      t.prototype.start = function () {
        3
        /* Error */
        !== this.state ? this.auth() : this.Qc();
      },
      /**
       * Stops the RPC. This call is idempotent and allowed regardless of the
       * current isStarted() state.
       *
       * When stop returns, isStarted() and isOpen() will both return false.
       */
      t.prototype.stop = function () {
        return e.__awaiter(this, void 0, void 0, function () {
          return e.__generator(this, function (t) {
            switch (t.label) {
              case 0:
                return this.qc() ? [4
                /*yield*/
                , this.close(0
                /* Initial */
                )] : [3
                /*break*/
                , 2];

              case 1:
                t.sent(), t.label = 2;

              case 2:
                return [2
                /*return*/
                ];
            }
          });
        });
      },
      /**
       * After an error the stream will usually back off on the next attempt to
       * start it. If the error warrants an immediate restart of the stream, the
       * sender can use this to indicate that the receiver should not back off.
       *
       * Each error will call the onClose() listener. That function can decide to
       * inhibit backoff if required.
       */
      t.prototype.Wc = function () {
        this.state = 0
        /* Initial */
        , this.$a.reset();
      },
      /**
       * Marks this stream as idle. If no further actions are performed on the
       * stream for one minute, the stream will automatically close itself and
       * notify the stream's onClose() handler with Status.OK. The stream will then
       * be in a !isStarted() state, requiring the caller to start the stream again
       * before further use.
       *
       * Only streams that are in state 'Open' can be marked idle, as all other
       * states imply pending network operations.
       */
      t.prototype.jc = function () {
        var t = this; // Starts the idle time if we are in state 'Open' and are not yet already
        // running a timer (in which case the previous idle timeout still applies).

        this.Uc() && null === this.Bc && (this.Bc = this.Tr.yr(this.Lc, 6e4, function () {
          return t.Kc();
        }));
      },
      /** Sends a message to the underlying stream. */
      t.prototype.Gc = function (t) {
        this.zc(), this.stream.send(t);
      },
      /** Called by the idle timer when the stream should close due to inactivity. */
      t.prototype.Kc = function () {
        return e.__awaiter(this, void 0, void 0, function () {
          return e.__generator(this, function (t) {
            return this.Uc() ? [2
            /*return*/
            , this.close(0
            /* Initial */
            )] : [2
            /*return*/
            ];
          });
        });
      },
      /** Marks the stream as active again. */
      t.prototype.zc = function () {
        this.Bc && (this.Bc.cancel(), this.Bc = null);
      },
      /**
       * Closes the stream and cleans up as necessary:
       *
       * * closes the underlying GRPC stream;
       * * calls the onClose handler with the given 'error';
       * * sets internal stream state to 'finalState';
       * * adjusts the backoff timer based on the error
       *
       * A new stream can be opened by calling start().
       *
       * @param finalState the intended state of the stream after closing.
       * @param error the error the connection was closed with.
       */
      t.prototype.close = function (t, n) {
        return e.__awaiter(this, void 0, void 0, function () {
          return e.__generator(this, function (e) {
            switch (e.label) {
              case 0:
                // Notify the listener that the stream closed.
                // Cancel any outstanding timers (they're guaranteed not to execute).
                return this.zc(), this.$a.cancel(), // Invalidates any stream-related callbacks (e.g. from auth or the
                // underlying stream), guaranteeing they won't execute.
                this.xc++, 3
                /* Error */
                !== t ? // If this is an intentional close ensure we don't delay our next connection attempt.
                this.$a.reset() : n && n.code === h.RESOURCE_EXHAUSTED ? ( // Log the error. (Probably either 'quota exceeded' or 'max queue length reached'.)
                ye(n.toString()), ye("Using maximum backoff delay to prevent overloading the backend."), this.$a.Vr()) : n && n.code === h.UNAUTHENTICATED && // "unauthenticated" error means the token was rejected. Try force refreshing it in case it
                // just expired.
                this.Oc._(), // Clean up the underlying stream because we are no longer interested in events.
                null !== this.stream && (this.Hc(), this.stream.close(), this.stream = null), // This state must be assigned before calling onClose() to allow the callback to
                // inhibit backoff or otherwise manipulate the state in its non-started state.
                this.state = t, [4
                /*yield*/
                , this.listener.Yc(n)];

              case 1:
                // Cancel any outstanding timers (they're guaranteed not to execute).
                // Notify the listener that the stream closed.
                return e.sent(), [2
                /*return*/
                ];
            }
          });
        });
      },
      /**
       * Can be overridden to perform additional cleanup before the stream is closed.
       * Calling super.tearDown() is not required.
       */
      t.prototype.Hc = function () {}, t.prototype.auth = function () {
        var t = this;
        this.state = 1
        /* Starting */
        ;
        var e = this.Jc(this.xc),
            n = this.xc; // TODO(mikelehen): Just use dispatchIfNotClosed, but see TODO below.

        this.Oc.getToken().then(function (e) {
          // Stream can be stopped while waiting for authentication.
          // TODO(mikelehen): We really should just use dispatchIfNotClosed
          // and let this dispatch onto the queue, but that opened a spec test can
          // of worms that I don't want to deal with in this PR.
          t.xc === n && // Normally we'd have to schedule the callback on the AsyncQueue.
          // However, the following calls are safe to be called outside the
          // AsyncQueue since they don't chain asynchronous calls
          t.Xc(e);
        }, function (n) {
          e(function () {
            var e = new c(h.UNKNOWN, "Fetching auth token failed: " + n.message);
            return t.Zc(e);
          });
        });
      }, t.prototype.Xc = function (t) {
        var e = this,
            n = this.Jc(this.xc);
        this.stream = this.t_(t), this.stream.e_(function () {
          n(function () {
            return e.state = 2
            /* Open */
            , e.listener.e_();
          });
        }), this.stream.Yc(function (t) {
          n(function () {
            return e.Zc(t);
          });
        }), this.stream.onMessage(function (t) {
          n(function () {
            return e.onMessage(t);
          });
        });
      }, t.prototype.Qc = function () {
        var t = this;
        this.state = 4
        /* Backoff */
        , this.$a.gr(function () {
          return e.__awaiter(t, void 0, void 0, function () {
            return e.__generator(this, function (t) {
              return this.state = 0
              /* Initial */
              , this.start(), [2
              /*return*/
              ];
            });
          });
        });
      }, // Visible for tests
      t.prototype.Zc = function (t) {
        // In theory the stream could close cleanly, however, in our current model
        // we never expect this to happen because if we stop a stream ourselves,
        // this callback will never be called. To prevent cases where we retry
        // without a backoff accidentally, we set the stream to error in all cases.
        return de("PersistentStream", "close with error: " + t), this.stream = null, this.close(3
        /* Error */
        , t);
      },
      /**
       * Returns a "dispatcher" function that dispatches operations onto the
       * AsyncQueue but only runs them if closeCount remains unchanged. This allows
       * us to turn auth / stream callbacks into no-ops if the stream is closed /
       * re-opened, etc.
       */
      t.prototype.Jc = function (t) {
        var e = this;
        return function (n) {
          e.Tr.uo(function () {
            return e.xc === t ? n() : (de("PersistentStream", "stream callback skipped by getCloseGuardedDispatcher."), Promise.resolve());
          });
        };
      }, t;
    }(),
        Yr =
    /** @class */
    function (t) {
      function n(e, n, r, i, o) {
        var s = this;
        return (s = t.call(this, e, "listen_stream_connection_backoff"
        /* ListenStreamConnectionBackoff */
        , "listen_stream_idle"
        /* ListenStreamIdle */
        , n, r, o) || this).serializer = i, s;
      }

      return e.__extends(n, t), n.prototype.t_ = function (t) {
        return this.Mc.s_("Listen", t);
      }, n.prototype.onMessage = function (t) {
        // A successful response means the stream is healthy
        this.$a.reset();
        var e = this.serializer.pi(t),
            n = this.serializer.bi(t);
        return this.listener.i_(e, n);
      },
      /**
       * Registers interest in the results of the given target. If the target
       * includes a resumeToken it will be included in the request. Results that
       * affect the target will be streamed back as WatchChange messages that
       * reference the targetId.
       */
      n.prototype.n_ = function (t) {
        var e = {};
        e.database = this.serializer.wi, e.addTarget = this.serializer.ee(t);
        var n = this.serializer.zi(t);
        n && (e.labels = n), this.Gc(e);
      },
      /**
       * Unregisters interest in the results of the target associated with the
       * given targetId.
       */
      n.prototype.r_ = function (t) {
        var e = {};
        e.database = this.serializer.wi, e.removeTarget = t, this.Gc(e);
      }, n;
    }(Kr),
        $r =
    /** @class */
    function (t) {
      function n(e, n, r, i, o) {
        var s = this;
        return (s = t.call(this, e, "write_stream_connection_backoff"
        /* WriteStreamConnectionBackoff */
        , "write_stream_idle"
        /* WriteStreamIdle */
        , n, r, o) || this).serializer = i, s.h_ = !1,
        /**
             * The last received stream token from the server, used to acknowledge which
             * responses the client has processed. Stream tokens are opaque checkpoint
             * markers whose only real value is their inclusion in the next request.
             *
             * PersistentWriteStream manages propagating this value from responses to the
             * next request.
             */
        s.lastStreamToken = A.ht, s;
      }

      return e.__extends(n, t), Object.defineProperty(n.prototype, "o_", {
        /**
         * Tracks whether or not a handshake has been successfully exchanged and
         * the stream is ready to accept mutations.
         */
        get: function get() {
          return this.h_;
        },
        enumerable: !0,
        configurable: !0
      }), // Override of PersistentStream.start
      n.prototype.start = function () {
        this.h_ = !1, t.prototype.start.call(this);
      }, n.prototype.Hc = function () {
        this.h_ && this.a_([]);
      }, n.prototype.t_ = function (t) {
        return this.Mc.s_("Write", t);
      }, n.prototype.onMessage = function (t) {
        if ( // Always capture the last stream token.
        me(!!t.streamToken), this.lastStreamToken = this.serializer.ci(t.streamToken), this.h_) {
          // A successful first write response means the stream is healthy,
          // Note, that we could consider a successful handshake healthy, however,
          // the write itself might be causing an error we want to back off from.
          this.$a.reset();
          var e = this.serializer.Mi(t.writeResults, t.commitTime),
              n = this.serializer.fromVersion(t.commitTime);
          return this.listener.u_(n, e);
        } // The first response is always the handshake response


        return me(!t.writeResults || 0 === t.writeResults.length), this.h_ = !0, this.listener.c_();
      },
      /**
       * Sends an initial streamToken to the server, performing the handshake
       * required to make the StreamingWrite RPC work. Subsequent
       * calls should wait until onHandshakeComplete was called.
       */
      n.prototype.__ = function () {
        // TODO(dimond): Support stream resumption. We intentionally do not set the
        // stream token on the handshake, ignoring any stream token we might have.
        var t = {};
        t.database = this.serializer.wi, this.Gc(t);
      },
      /** Sends a group of mutations to the Firestore backend to apply. */
      n.prototype.a_ = function (t) {
        var e = this,
            n = {
          streamToken: this.serializer.ui(this.lastStreamToken),
          writes: t.map(function (t) {
            return e.serializer.vi(t);
          })
        };
        this.Gc(n);
      }, n;
    }(Kr),
        Jr =
    /** @class */
    function (t) {
      function n(e, n, r) {
        var i = this;
        return (i = t.call(this) || this).Mc = e, i.credentials = n, i.serializer = r, i;
      }
      /** Gets an auth token and invokes the provided RPC. */


      return e.__extends(n, t), n.prototype.d_ = function (t, e) {
        var n = this;
        return this.credentials.getToken().then(function (r) {
          return n.Mc.d_(t, e, r);
        })["catch"](function (t) {
          throw t.code === h.UNAUTHENTICATED && n.credentials._(), t;
        });
      },
      /** Gets an auth token and invokes the provided RPC with streamed results. */
      n.prototype.f_ = function (t, e) {
        var n = this;
        return this.credentials.getToken().then(function (r) {
          return n.Mc.f_(t, e, r);
        })["catch"](function (t) {
          throw t.code === h.UNAUTHENTICATED && n.credentials._(), t;
        });
      }, n;
    }(function () {
      // Make sure that the structural type of `Datastore` is unique.
      // See https://github.com/microsoft/TypeScript/issues/5451
      this.l_ = void 0;
    }),
        Hr =
    /** @class */
    function () {
      function t(t) {
        this.T_ = t, // The version of each document that was read during this transaction.
        this.E_ = zt(), this.mutations = [], this.I_ = !1,
        /**
             * A deferred usage error that occurred previously in this transaction that
             * will cause the transaction to fail once it actually commits.
             */
        this.w_ = null,
        /**
             * Set of documents that have been written in the transaction.
             *
             * When there's more than one write to the same key in a transaction, any
             * writes after the first are handled differently.
             */
        this.R_ = new Set();
      }

      return t.prototype.A_ = function (t) {
        return e.__awaiter(this, void 0, void 0, function () {
          var n,
              r = this;
          return e.__generator(this, function (i) {
            switch (i.label) {
              case 0:
                if (this.m_(), this.mutations.length > 0) throw new c(h.INVALID_ARGUMENT, "Firestore transactions require all reads to be executed before all writes.");
                return [4
                /*yield*/
                , function (t, n) {
                  return e.__awaiter(this, void 0, void 0, function () {
                    var r, i, o, s, u;
                    return e.__generator(this, function (e) {
                      switch (e.label) {
                        case 0:
                          return r = we(t), i = {
                            database: r.serializer.wi,
                            documents: n.map(function (t) {
                              return r.serializer.fi(t);
                            })
                          }, [4
                          /*yield*/
                          , r.f_("BatchGetDocuments", i)];

                        case 1:
                          return o = e.sent(), s = new Map(), o.forEach(function (t) {
                            var e = r.serializer.gi(t);
                            s.set(e.key.toString(), e);
                          }), u = [], [2
                          /*return*/
                          , (n.forEach(function (t) {
                            var e = s.get(t.toString());
                            me(!!e), u.push(e);
                          }), u)];
                      }
                    });
                  });
                }(this.T_, t)];

              case 1:
                return [2
                /*return*/
                , ((n = i.sent()).forEach(function (t) {
                  t instanceof vt || t instanceof yt ? r.P_(t) : ge();
                }), n)];
            }
          });
        });
      }, t.prototype.set = function (t, e) {
        this.write(e.Ac(t, this.Rt(t))), this.R_.add(t);
      }, t.prototype.update = function (t, e) {
        try {
          this.write(e.Ac(t, this.V_(t)));
        } catch (t) {
          this.w_ = t;
        }

        this.R_.add(t);
      }, t.prototype["delete"] = function (t) {
        this.write([new ut(t, this.Rt(t))]), this.R_.add(t);
      }, t.prototype.commit = function () {
        return e.__awaiter(this, void 0, void 0, function () {
          var t,
              n = this;
          return e.__generator(this, function (r) {
            switch (r.label) {
              case 0:
                if (this.m_(), this.w_) throw this.w_;
                return t = this.E_, // For each mutation, note that the doc was written.
                this.mutations.forEach(function (e) {
                  t = t.remove(e.key);
                }), // For each document that was read but not written to, we want to perform
                // a `verify` operation.
                t.forEach(function (t, e) {
                  n.mutations.push(new at(t, n.Rt(t)));
                }), [4
                /*yield*/
                , function (t, n) {
                  return e.__awaiter(this, void 0, void 0, function () {
                    var r, i, o;
                    return e.__generator(this, function (e) {
                      switch (e.label) {
                        case 0:
                          return r = we(t), i = {
                            database: r.serializer.wi,
                            writes: n.map(function (t) {
                              return r.serializer.vi(t);
                            })
                          }, [4
                          /*yield*/
                          , r.d_("Commit", i)];

                        case 1:
                          return o = e.sent(), [2
                          /*return*/
                          , r.serializer.Mi(o.writeResults, o.commitTime)];
                      }
                    });
                  });
                }(this.T_, this.mutations)];

              case 1:
                // For each mutation, note that the doc was written.
                return r.sent(), this.I_ = !0, [2
                /*return*/
                ];
            }
          });
        });
      }, t.prototype.P_ = function (t) {
        var e;
        if (t instanceof yt) e = t.version;else {
          if (!(t instanceof vt)) throw ge(); // For deleted docs, we must use baseVersion 0 when we overwrite them.

          e = g.min();
        }
        var n = this.E_.get(t.key);

        if (null !== n) {
          if (!e.isEqual(n)) // This transaction will fail no matter what.
            throw new c(h.ABORTED, "Document version changed between two reads.");
        } else this.E_ = this.E_.Ae(t.key, e);
      },
      /**
       * Returns the version of this document when it was read in this transaction,
       * as a precondition, or no precondition if it was not read.
       */
      t.prototype.Rt = function (t) {
        var e = this.E_.get(t);
        return !this.R_.has(t) && e ? nt.updateTime(e) : nt.ft();
      },
      /**
       * Returns the precondition for a document if the operation is an update.
       */
      t.prototype.V_ = function (t) {
        var e = this.E_.get(t); // The first time a document is written, we want to take into account the
        // read time and existence

        if (!this.R_.has(t) && e) {
          if (e.isEqual(g.min())) // The document doesn't exist, so fail the transaction.
            // This has to be validated locally because you can't send a
            // precondition that a document does not exist without changing the
            // semantics of the backend write to be an insert. This is the reverse
            // of what we want, since we want to assert that the document doesn't
            // exist but then send the update and have it fail. Since we can't
            // express that to the backend, we have to validate locally.
            // Note: this can change once we can send separate verify writes in the
            // transaction.
            throw new c(h.INVALID_ARGUMENT, "Can't update a document that doesn't exist."); // Document exists, base precondition on document update time.

          return nt.updateTime(e);
        } // Document was not read, so we just use the preconditions for a blind
        // update.


        return nt.exists(!0);
      }, t.prototype.write = function (t) {
        this.m_(), this.mutations = this.mutations.concat(t);
      }, t.prototype.m_ = function () {}, t;
    }(),
        Xr =
    /** @class */
    function () {
      function t(t, e) {
        this.Aa = t, this.g_ = e,
        /** The current OnlineState. */
        this.state = "Unknown"
        /* Unknown */
        ,
        /**
             * A count of consecutive failures to open the stream. If it reaches the
             * maximum defined by MAX_WATCH_STREAM_FAILURES, we'll set the OnlineState to
             * Offline.
             */
        this.p_ = 0,
        /**
             * A timer that elapses after ONLINE_STATE_TIMEOUT_MS, at which point we
             * transition from OnlineState.Unknown to OnlineState.Offline without waiting
             * for the stream to actually fail (MAX_WATCH_STREAM_FAILURES times).
             */
        this.y_ = null,
        /**
             * Whether the client should log a warning message if it fails to connect to
             * the backend (initially true, cleared after a successful stream, or if we've
             * logged the message already).
             */
        this.b_ = !0
        /**
        * Called by RemoteStore when a watch stream is started (including on each
        * backoff attempt).
        *
        * If this is the first attempt, it sets the OnlineState to Unknown and starts
        * the onlineStateTimer.
        */
        ;
      }

      return t.prototype.v_ = function () {
        var t = this;
        0 === this.p_ && (this.S_("Unknown"
        /* Unknown */
        ), this.y_ = this.Aa.yr("online_state_timeout"
        /* OnlineStateTimeout */
        , 1e4, function () {
          return t.y_ = null, t.D_("Backend didn't respond within 10 seconds."), t.S_("Offline"
          /* Offline */
          ), Promise.resolve();
        }));
      },
      /**
       * Updates our OnlineState as appropriate after the watch stream reports a
       * failure. The first failure moves us to the 'Unknown' state. We then may
       * allow multiple failures (based on MAX_WATCH_STREAM_FAILURES) before we
       * actually transition to the 'Offline' state.
       */
      t.prototype.C_ = function (t) {
        "Online"
        /* Online */
        === this.state ? this.S_("Unknown"
        /* Unknown */
        ) : (this.p_++, this.p_ >= 1 && (this.F_(), this.D_("Connection failed 1 times. Most recent error: " + t.toString()), this.S_("Offline"
        /* Offline */
        )));
      },
      /**
       * Explicitly sets the OnlineState to the specified state.
       *
       * Note that this resets our timers / failure counters, etc. used by our
       * Offline heuristics, so must not be used in place of
       * handleWatchStreamStart() and handleWatchStreamFailure().
       */
      t.prototype.set = function (t) {
        this.F_(), this.p_ = 0, "Online"
        /* Online */
        === t && ( // We've connected to watch at least once. Don't warn the developer
        // about being offline going forward.
        this.b_ = !1), this.S_(t);
      }, t.prototype.S_ = function (t) {
        t !== this.state && (this.state = t, this.g_(t));
      }, t.prototype.D_ = function (t) {
        var e = "Could not reach Cloud Firestore backend. " + t + "\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.";
        this.b_ ? (ye(e), this.b_ = !1) : de("OnlineStateTracker", e);
      }, t.prototype.F_ = function () {
        null !== this.y_ && (this.y_.cancel(), this.y_ = null);
      }, t;
    }(),
        Zr =
    /** @class */
    function () {
      function t(
      /**
       * The local store, used to fill the write pipeline with outbound mutations.
       */
      t,
      /** The client-side proxy for interacting with the backend. */
      n, r, i, o) {
        var s = this;
        this.N_ = t, this.T_ = n, this.Aa = r,
        /**
             * A list of up to MAX_PENDING_WRITES writes that we have fetched from the
             * LocalStore via fillWritePipeline() and have or will send to the write
             * stream.
             *
             * Whenever writePipeline.length > 0 the RemoteStore will attempt to start or
             * restart the write stream. When the stream is established the writes in the
             * pipeline will be sent in order.
             *
             * Writes remain in writePipeline until they are acknowledged by the backend
             * and thus will automatically be re-sent if the stream is interrupted /
             * restarted before they're acknowledged.
             *
             * Write responses from the backend are linked to their originating request
             * purely based on order, and so we can just shift() writes from the front of
             * the writePipeline as we receive responses.
             */
        this.k_ = [],
        /**
             * A mapping of watched targets that the client cares about tracking and the
             * user has explicitly called a 'listen' for this target.
             *
             * These targets may or may not have been sent to or acknowledged by the
             * server. On re-establishing the listen stream, these targets should be sent
             * to the server. The targets removed with unlistens are removed eagerly
             * without waiting for confirmation from the listen stream.
             */
        this.L_ = new Map(), this.M_ = null,
        /**
             * Set to true by enableNetwork() and false by disableNetwork() and indicates
             * the user-preferred network state.
             */
        this.networkEnabled = !1, this.isPrimary = !1,
        /**
             * When set to `true`, the network was taken offline due to an IndexedDB
             * failure. The state is flipped to `false` when access becomes available
             * again.
             */
        this.O_ = !1, this.x_ = o, this.x_.B_(function (t) {
          r.uo(function () {
            return e.__awaiter(s, void 0, void 0, function () {
              return e.__generator(this, function (t) {
                switch (t.label) {
                  case 0:
                    return this.q_() ? (de("RemoteStore", "Restarting streams for network reachability change."), [4
                    /*yield*/
                    , this.U_()]) : [3
                    /*break*/
                    , 2];

                  case 1:
                    t.sent(), t.label = 2;

                  case 2:
                    return [2
                    /*return*/
                    ];
                }
              });
            });
          });
        }), this.Q_ = new Xr(r, i), // Create streams (but note they're not started yet).
        this.W_ = function (t, e, n) {
          var r = we(t);
          return new Yr(e, r.Mc, r.credentials, r.serializer, n);
        }(this.T_, r, {
          e_: this.j_.bind(this),
          Yc: this.K_.bind(this),
          i_: this.G_.bind(this)
        }), this.z_ = function (t, e, n) {
          var r = we(t);
          return new $r(e, r.Mc, r.credentials, r.serializer, n);
        }(this.T_, r, {
          e_: this.H_.bind(this),
          Yc: this.Y_.bind(this),
          c_: this.J_.bind(this),
          u_: this.u_.bind(this)
        });
      }
      /**
       * Starts up the remote store, creating streams, restoring state from
       * LocalStore, etc.
       */


      return t.prototype.start = function () {
        return this.enableNetwork();
      },
      /** Re-enables the network. Idempotent. */
      t.prototype.enableNetwork = function () {
        return this.networkEnabled = !0, this.X_();
      }, t.prototype.X_ = function () {
        return e.__awaiter(this, void 0, void 0, function () {
          var t;
          return e.__generator(this, function (e) {
            switch (e.label) {
              case 0:
                return this.q_() ? (t = this.z_, [4
                /*yield*/
                , this.N_.Yo()]) : [3
                /*break*/
                , 3];

              case 1:
                // This will start the write stream if necessary.
                return t.lastStreamToken = e.sent(), this.Z_() ? this.tl() : this.Q_.set("Unknown"
                /* Unknown */
                ), [4
                /*yield*/
                , this.el()];

              case 2:
                // This will start the write stream if necessary.
                e.sent(), e.label = 3;

              case 3:
                return [2
                /*return*/
                ];
            }
          });
        });
      },
      /**
       * Temporarily disables the network. The network can be re-enabled using
       * enableNetwork().
       */
      t.prototype.disableNetwork = function () {
        return e.__awaiter(this, void 0, void 0, function () {
          return e.__generator(this, function (t) {
            switch (t.label) {
              case 0:
                return this.networkEnabled = !1, [4
                /*yield*/
                , this.sl()];

              case 1:
                return t.sent(), // Set the OnlineState to Offline so get()s return from cache, etc.
                this.Q_.set("Offline"
                /* Offline */
                ), [2
                /*return*/
                ];
            }
          });
        });
      }, t.prototype.sl = function () {
        return e.__awaiter(this, void 0, void 0, function () {
          return e.__generator(this, function (t) {
            switch (t.label) {
              case 0:
                return [4
                /*yield*/
                , this.z_.stop()];

              case 1:
                return t.sent(), [4
                /*yield*/
                , this.W_.stop()];

              case 2:
                return t.sent(), this.k_.length > 0 && (de("RemoteStore", "Stopping write stream with " + this.k_.length + " pending writes"), this.k_ = []), this.il(), [2
                /*return*/
                ];
            }
          });
        });
      }, t.prototype.mo = function () {
        return e.__awaiter(this, void 0, void 0, function () {
          return e.__generator(this, function (t) {
            switch (t.label) {
              case 0:
                return de("RemoteStore", "RemoteStore shutting down."), this.networkEnabled = !1, [4
                /*yield*/
                , this.sl()];

              case 1:
                return t.sent(), this.x_.mo(), // Set the OnlineState to Unknown (rather than Offline) to avoid potentially
                // triggering spurious listener events with cached data, etc.
                this.Q_.set("Unknown"
                /* Unknown */
                ), [2
                /*return*/
                ];
            }
          });
        });
      },
      /**
       * Starts new listen for the given target. Uses resume token if provided. It
       * is a no-op if the target of given `TargetData` is already being listened to.
       */
      t.prototype.listen = function (t) {
        this.L_.has(t.targetId) || ( // Mark this as something the client is currently listening for.
        this.L_.set(t.targetId, t), this.Z_() ? // The listen will be sent in onWatchStreamOpen
        this.tl() : this.W_.Uc() && this.nl(t));
      },
      /**
       * Removes the listen from server. It is a no-op if the given target id is
       * not being listened to.
       */
      t.prototype.rl = function (t) {
        this.L_["delete"](t), this.W_.Uc() && this.hl(t), 0 === this.L_.size && (this.W_.Uc() ? this.W_.jc() : this.q_() && // Revert to OnlineState.Unknown if the watch stream is not open and we
        // have no listeners, since without any listens to send we cannot
        // confirm if the stream is healthy and upgrade to OnlineState.Online.
        this.Q_.set("Unknown"
        /* Unknown */
        ));
      },
      /** {@link TargetMetadataProvider.getTargetDataForTarget} */
      t.prototype.si = function (t) {
        return this.L_.get(t) || null;
      },
      /** {@link TargetMetadataProvider.getRemoteKeysForTarget} */
      t.prototype.ei = function (t) {
        return this.ol.ei(t);
      },
      /**
       * We need to increment the the expected number of pending responses we're due
       * from watch so we wait for the ack to process any messages from this target.
       */
      t.prototype.nl = function (t) {
        this.M_.Ns(t.targetId), this.W_.n_(t);
      },
      /**
       * We need to increment the expected number of pending responses we're due
       * from watch so we wait for the removal on the server before we process any
       * messages from this target.
       */
      t.prototype.hl = function (t) {
        this.M_.Ns(t), this.W_.r_(t);
      }, t.prototype.tl = function () {
        this.M_ = new re(this), this.W_.start(), this.Q_.v_();
      },
      /**
       * Returns whether the watch stream should be started because it's necessary
       * and has not yet been started.
       */
      t.prototype.Z_ = function () {
        return this.q_() && !this.W_.qc() && this.L_.size > 0;
      }, t.prototype.q_ = function () {
        return !this.O_ && this.isPrimary && this.networkEnabled;
      }, t.prototype.il = function () {
        this.M_ = null;
      }, t.prototype.j_ = function () {
        return e.__awaiter(this, void 0, void 0, function () {
          var t = this;
          return e.__generator(this, function (e) {
            return this.L_.forEach(function (e, n) {
              t.nl(e);
            }), [2
            /*return*/
            ];
          });
        });
      }, t.prototype.K_ = function (t) {
        return e.__awaiter(this, void 0, void 0, function () {
          return e.__generator(this, function (e) {
            return this.il(), // If we still need the watch stream, retry the connection.
            this.Z_() ? (this.Q_.C_(t), this.tl()) : // No need to restart watch stream because there are no active targets.
            // The online state is set to unknown because there is no active attempt
            // at establishing a connection
            this.Q_.set("Unknown"
            /* Unknown */
            ), [2
            /*return*/
            ];
          });
        });
      }, t.prototype.G_ = function (t, n) {
        return e.__awaiter(this, void 0, void 0, function () {
          var r, i, o;
          return e.__generator(this, function (e) {
            switch (e.label) {
              case 0:
                if (this.Q_.set("Online"
                /* Online */
                ), !(t instanceof ee && 2
                /* Removed */
                === t.state && t.cause)) // Mark the client as online since we got a message from the server
                  return [3
                  /*break*/
                  , 6];
                e.label = 1;

              case 1:
                return e.trys.push([1, 3,, 5]), [4
                /*yield*/
                , this.al(t)];

              case 2:
                return e.sent(), [3
                /*break*/
                , 5];

              case 3:
                return r = e.sent(), de("RemoteStore", "Failed to remove targets %s: %s ", t.targetIds.join(","), r), [4
                /*yield*/
                , this.ul(r)];

              case 4:
                return e.sent(), [3
                /*break*/
                , 5];

              case 5:
                return [3
                /*break*/
                , 13];

              case 6:
                if (t instanceof Zt ? this.M_.qs(t) : t instanceof te ? this.M_.Hs(t) : this.M_.Ws(t), n.isEqual(g.min())) return [3
                /*break*/
                , 13];
                e.label = 7;

              case 7:
                return e.trys.push([7, 11,, 13]), [4
                /*yield*/
                , this.N_._h()];

              case 8:
                return i = e.sent(), n.S(i) >= 0 ? [4
                /*yield*/
                , this.cl(n)] : [3
                /*break*/
                , 10];
              // We have received a target change with a global snapshot if the snapshot
              // version is not equal to SnapshotVersion.min().

              case 9:
                // We have received a target change with a global snapshot if the snapshot
                // version is not equal to SnapshotVersion.min().
                e.sent(), e.label = 10;

              case 10:
                return [3
                /*break*/
                , 13];

              case 11:
                return de("RemoteStore", "Failed to raise snapshot:", o = e.sent()), [4
                /*yield*/
                , this.ul(o)];

              case 12:
                return e.sent(), [3
                /*break*/
                , 13];

              case 13:
                return [2
                /*return*/
                ];
            }
          });
        });
      },
      /**
       * Recovery logic for IndexedDB errors that takes the network offline until
       * IndexedDb probing succeeds. Retries are scheduled with backoff using
       * `enqueueRetryable()`.
       */
      t.prototype.ul = function (t) {
        return e.__awaiter(this, void 0, void 0, function () {
          var n = this;
          return e.__generator(this, function (r) {
            switch (r.label) {
              case 0:
                if (!qn(t)) throw t; // Disable network and raise offline snapshots

                return this.O_ = !0, [4
                /*yield*/
                , this.sl()];

              case 1:
                // Disable network and raise offline snapshots
                return r.sent(), this.Q_.set("Offline"
                /* Offline */
                ), // Probe IndexedDB periodically and re-enable network
                this.Aa.Ua(function () {
                  return e.__awaiter(n, void 0, void 0, function () {
                    return e.__generator(this, function (t) {
                      switch (t.label) {
                        case 0:
                          // Issue a simple read operation to determine if IndexedDB recovered.
                          // Ideally, we would expose a health check directly on SimpleDb, but
                          // RemoteStore only has access to persistence through LocalStore.
                          return de("RemoteStore", "Retrying IndexedDB access"), [4
                          /*yield*/
                          , this.N_._h()];

                        case 1:
                          // Issue a simple read operation to determine if IndexedDB recovered.
                          // Ideally, we would expose a health check directly on SimpleDb, but
                          // RemoteStore only has access to persistence through LocalStore.
                          return t.sent(), this.O_ = !1, [4
                          /*yield*/
                          , this.X_()];

                        case 2:
                          return t.sent(), [2
                          /*return*/
                          ];
                      }
                    });
                  });
                }), [2
                /*return*/
                ];
            }
          });
        });
      },
      /**
       * Takes a batch of changes from the Datastore, repackages them as a
       * RemoteEvent, and passes that on to the listener, which is typically the
       * SyncEngine.
       */
      t.prototype.cl = function (t) {
        var e = this,
            n = this.M_.Xs(t); // Update in-memory resume tokens. LocalStore will update the
        // persistent view of these when applying the completed RemoteEvent.
        // Finally raise remote event

        return n.as.forEach(function (n, r) {
          if (n.resumeToken.rt() > 0) {
            var i = e.L_.get(r); // A watched target might have been removed already.

            i && e.L_.set(r, i.we(n.resumeToken, t));
          }
        }), // Re-establish listens for the targets that have been invalidated by
        // existence filter mismatches.
        n.us.forEach(function (t) {
          var n = e.L_.get(t);

          if (n) {
            // Clear the resume token for the target, since we're in a known mismatch
            // state.
            e.L_.set(t, n.we(A.ht, n.Ee)), // Cause a hard reset by unwatching and rewatching immediately, but
            // deliberately don't send a resume token so that we get a full update.
            e.hl(t); // Mark the target we send as being on behalf of an existence filter
            // mismatch, but don't actually retain that in listenTargets. This ensures
            // that we flag the first re-listen this way without impacting future
            // listens of this target (that might happen e.g. on reconnect).

            var r = new Dt(n.target, t, 1
            /* ExistenceFilterMismatch */
            , n.sequenceNumber);
            e.nl(r);
          }
        }), this.ol.Mu(n);
      },
      /** Handles an error on a target */
      t.prototype.al = function (t) {
        return e.__awaiter(this, void 0, void 0, function () {
          var n, r, i, o;
          return e.__generator(this, function (e) {
            switch (e.label) {
              case 0:
                n = t.cause, r = 0, i = t.targetIds, e.label = 1;

              case 1:
                return r < i.length ? (o = i[r], this.L_.has(o) ? [4
                /*yield*/
                , this.ol._l(o, n)] : [3
                /*break*/
                , 3]) : [3
                /*break*/
                , 5];

              case 2:
                e.sent(), this.L_["delete"](o), this.M_.removeTarget(o), e.label = 3;

              case 3:
                e.label = 4;

              case 4:
                return r++, [3
                /*break*/
                , 1];

              case 5:
                return [2
                /*return*/
                ];
            }
          });
        });
      },
      /**
       * Attempts to fill our write pipeline with writes from the LocalStore.
       *
       * Called internally to bootstrap or refill the write pipeline and by
       * SyncEngine whenever there are new mutations to process.
       *
       * Starts the write stream if necessary.
       */
      t.prototype.el = function () {
        return e.__awaiter(this, void 0, void 0, function () {
          var t, n;
          return e.__generator(this, function (e) {
            switch (e.label) {
              case 0:
                return this.ll() ? (t = this.k_.length > 0 ? this.k_[this.k_.length - 1].batchId : -1, [4
                /*yield*/
                , this.N_.qu(t)]) : [3
                /*break*/
                , 5];

              case 1:
                return null !== (n = e.sent()) ? [3
                /*break*/
                , 2] : (0 === this.k_.length && this.z_.jc(), [3
                /*break*/
                , 4]);

              case 2:
                return this.dl(n), [4
                /*yield*/
                , this.el()];

              case 3:
                e.sent(), e.label = 4;

              case 4:
                e.label = 5;

              case 5:
                return this.fl() && this.Tl(), [2
                /*return*/
                ];
            }
          });
        });
      },
      /**
       * Returns true if we can add to the write pipeline (i.e. the network is
       * enabled and the write pipeline is not full).
       */
      t.prototype.ll = function () {
        return this.q_() && this.k_.length < 10;
      }, // For testing
      t.prototype.El = function () {
        return this.k_.length;
      },
      /**
       * Queues additional writes to be sent to the write stream, sending them
       * immediately if the write stream is established.
       */
      t.prototype.dl = function (t) {
        this.k_.push(t), this.z_.Uc() && this.z_.o_ && this.z_.a_(t.mutations);
      }, t.prototype.fl = function () {
        return this.q_() && !this.z_.qc() && this.k_.length > 0;
      }, t.prototype.Tl = function () {
        this.z_.start();
      }, t.prototype.H_ = function () {
        return e.__awaiter(this, void 0, void 0, function () {
          return e.__generator(this, function (t) {
            return this.z_.__(), [2
            /*return*/
            ];
          });
        });
      }, t.prototype.J_ = function () {
        var t = this; // Record the stream token.

        return this.N_.Jo(this.z_.lastStreamToken).then(function () {
          // Send the write pipeline now that the stream is established.
          for (var e = 0, n = t.k_; e < n.length; e++) {
            var r = n[e];
            t.z_.a_(r.mutations);
          }
        })["catch"](er);
      }, t.prototype.u_ = function (t, e) {
        var n = this,
            r = this.k_.shift(),
            i = De.from(r, t, e, this.z_.lastStreamToken);
        return this.ol.Il(i).then(function () {
          return n.el();
        });
      }, t.prototype.Y_ = function (t) {
        return e.__awaiter(this, void 0, void 0, function () {
          return e.__generator(this, function (e) {
            switch (e.label) {
              case 0:
                return t && this.k_.length > 0 ? this.z_.o_ ? [4
                /*yield*/
                , this.wl(t)] : [3
                /*break*/
                , 2] : [3
                /*break*/
                , 5];

              case 1:
                // This error affects the actual write.
                return e.sent(), [3
                /*break*/
                , 4];

              case 2:
                // If there was an error before the handshake has finished, it's
                // possible that the server is unable to process the stream token
                // we're sending. (Perhaps it's too old?)
                return [4
                /*yield*/
                , this.Rl(t)];

              case 3:
                // If there was an error before the handshake has finished, it's
                // possible that the server is unable to process the stream token
                // we're sending. (Perhaps it's too old?)
                e.sent(), e.label = 4;

              case 4:
                // The write stream might have been started by refilling the write
                // pipeline for failed writes
                this.fl() && this.Tl(), e.label = 5;

              case 5:
                return [2
                /*return*/
                ];
            }
          });
        });
      }, t.prototype.Rl = function (t) {
        return e.__awaiter(this, void 0, void 0, function () {
          return e.__generator(this, function (e) {
            // Reset the token if it's a permanent error, signaling the write stream is
            // no longer valid. Note that the handshake does not count as a write: see
            // comments on isPermanentWriteError for details.
            return St(t.code) ? [2
            /*return*/
            , (de("RemoteStore", "RemoteStore error before completed handshake; resetting stream token: ", this.z_.lastStreamToken), this.z_.lastStreamToken = A.ht, this.N_.Jo(A.ht)["catch"](er))] : [2
            /*return*/
            ];
          });
        });
      }, t.prototype.wl = function (t) {
        return e.__awaiter(this, void 0, void 0, function () {
          var n,
              r,
              i = this;
          return e.__generator(this, function (e) {
            // Only handle permanent errors here. If it's transient, just let the retry
            // logic kick in.
            return St(r = t.code) && r !== h.ABORTED ? (n = this.k_.shift(), [2
            /*return*/
            , (this.z_.Wc(), this.ol.Al(n.batchId, t).then(function () {
              return i.el();
            }))]) : [2
            /*return*/
            ];
          });
        });
      }, t.prototype.ml = function () {
        return new Hr(this.T_);
      }, t.prototype.U_ = function () {
        return e.__awaiter(this, void 0, void 0, function () {
          return e.__generator(this, function (t) {
            switch (t.label) {
              case 0:
                return this.networkEnabled = !1, [4
                /*yield*/
                , this.sl()];

              case 1:
                return t.sent(), this.Q_.set("Unknown"
                /* Unknown */
                ), [4
                /*yield*/
                , this.enableNetwork()];

              case 2:
                return t.sent(), [2
                /*return*/
                ];
            }
          });
        });
      }, t.prototype.Pl = function () {
        return e.__awaiter(this, void 0, void 0, function () {
          return e.__generator(this, function (t) {
            switch (t.label) {
              case 0:
                return this.q_() ? ( // Tear down and re-create our network streams. This will ensure we get a fresh auth token
                // for the new user and re-fill the write pipeline with new mutations from the LocalStore
                // (since mutations are per-user).
                de("RemoteStore", "RemoteStore restarting streams for new credential"), [4
                /*yield*/
                , this.U_()]) : [3
                /*break*/
                , 2];

              case 1:
                t.sent(), t.label = 2;

              case 2:
                return [2
                /*return*/
                ];
            }
          });
        });
      },
      /**
       * Toggles the network state when the client gains or loses its primary lease.
       */
      t.prototype.Vl = function (t) {
        return e.__awaiter(this, void 0, void 0, function () {
          var n;
          return e.__generator(this, function (e) {
            switch (e.label) {
              case 0:
                return this.isPrimary = t, t && this.networkEnabled ? [4
                /*yield*/
                , this.enableNetwork()] : [3
                /*break*/
                , 2];

              case 1:
                return e.sent(), [3
                /*break*/
                , 5];

              case 2:
                return (n = t) ? [3
                /*break*/
                , 4] : [4
                /*yield*/
                , this.sl()];

              case 3:
                e.sent(), n = this.Q_.set("Unknown"
                /* Unknown */
                ), e.label = 4;

              case 4:
                n, e.label = 5;

              case 5:
                return [2
                /*return*/
                ];
            }
          });
        });
      }, t;
    }();
    /**
     * A PersistentStream that implements the Listen RPC.
     *
     * Once the Listen stream has called the onOpen() listener, any number of
     * listen() and unlisten() calls can be made to control what changes will be
     * sent from the server for ListenResponses.
     */

    /**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    // The format of the LocalStorage key that stores the client state is:
    //     firestore_clients_<persistence_prefix>_<instance_key>

    /** Assembles the key for a client state in WebStorage */


    function ti(t, e) {
      return "firestore_clients_" + t + "_" + e;
    } // The format of the WebStorage key that stores the mutation state is:
    //     firestore_mutations_<persistence_prefix>_<batch_id>
    //     (for unauthenticated users)
    // or: firestore_mutations_<persistence_prefix>_<batch_id>_<user_uid>
    // 'user_uid' is last to avoid needing to escape '_' characters that it might
    // contain.

    /** Assembles the key for a mutation batch in WebStorage */


    function ei(t, e, n) {
      var r = "firestore_mutations_" + t + "_" + n;
      return e.t() && (r += "_" + e.uid), r;
    } // The format of the WebStorage key that stores a query target's metadata is:
    //     firestore_targets_<persistence_prefix>_<target_id>

    /** Assembles the key for a query state in WebStorage */


    function ni(t, e) {
      return "firestore_targets_" + t + "_" + e;
    } // The WebStorage prefix that stores the primary tab's online state. The
    // format of the key is:
    //     firestore_online_state_<persistence_prefix>

    /**
     * Holds the state of a mutation batch, including its user ID, batch ID and
     * whether the batch is 'pending', 'acknowledged' or 'rejected'.
     */
    // Visible for testing


    var ri =
    /** @class */
    function () {
      function t(t, e, n, r) {
        this.user = t, this.batchId = e, this.state = n, this.error = r
        /**
        * Parses a MutationMetadata from its JSON representation in WebStorage.
        * Logs a warning and returns null if the format of the data is not valid.
        */
        ;
      }

      return t.gl = function (e, n, r) {
        var i = JSON.parse(r),
            o = "object" == typeof i && -1 !== ["pending", "acknowledged", "rejected"].indexOf(i.state) && (void 0 === i.error || "object" == typeof i.error),
            s = void 0;
        return o && i.error && (o = "string" == typeof i.error.message && "string" == typeof i.error.code) && (s = new c(i.error.code, i.error.message)), o ? new t(e, n, i.state, s) : (ye("SharedClientState", "Failed to parse mutation state for ID '" + n + "': " + r), null);
      }, t.prototype.pl = function () {
        var t = {
          state: this.state,
          updateTimeMs: Date.now()
        };
        return this.error && (t.error = {
          code: this.error.code,
          message: this.error.message
        }), JSON.stringify(t);
      }, t;
    }(),
        ii =
    /** @class */
    function () {
      function t(t, e, n) {
        this.targetId = t, this.state = e, this.error = n
        /**
        * Parses a QueryTargetMetadata from its JSON representation in WebStorage.
        * Logs a warning and returns null if the format of the data is not valid.
        */
        ;
      }

      return t.gl = function (e, n) {
        var r = JSON.parse(n),
            i = "object" == typeof r && -1 !== ["not-current", "current", "rejected"].indexOf(r.state) && (void 0 === r.error || "object" == typeof r.error),
            o = void 0;
        return i && r.error && (i = "string" == typeof r.error.message && "string" == typeof r.error.code) && (o = new c(r.error.code, r.error.message)), i ? new t(e, r.state, o) : (ye("SharedClientState", "Failed to parse target state for ID '" + e + "': " + n), null);
      }, t.prototype.pl = function () {
        var t = {
          state: this.state,
          updateTimeMs: Date.now()
        };
        return this.error && (t.error = {
          code: this.error.code,
          message: this.error.message
        }), JSON.stringify(t);
      }, t;
    }(),
        oi =
    /** @class */
    function () {
      function t(t, e) {
        this.clientId = t, this.activeTargetIds = e
        /**
        * Parses a RemoteClientState from the JSON representation in WebStorage.
        * Logs a warning and returns null if the format of the data is not valid.
        */
        ;
      }

      return t.gl = function (e, n) {
        for (var r = JSON.parse(n), i = "object" == typeof r && r.activeTargetIds instanceof Array, o = Kt(), s = 0; i && s < r.activeTargetIds.length; ++s) {
          i = x(r.activeTargetIds[s]), o = o.add(r.activeTargetIds[s]);
        }

        return i ? new t(e, o) : (ye("SharedClientState", "Failed to parse client data for instance '" + e + "': " + n), null);
      }, t;
    }(),
        si =
    /** @class */
    function () {
      function t(t, e) {
        this.clientId = t, this.onlineState = e
        /**
        * Parses a SharedOnlineState from its JSON representation in WebStorage.
        * Logs a warning and returns null if the format of the data is not valid.
        */
        ;
      }

      return t.gl = function (e) {
        var n = JSON.parse(e);
        return "object" == typeof n && -1 !== ["Unknown", "Online", "Offline"].indexOf(n.onlineState) && "string" == typeof n.clientId ? new t(n.clientId, n.onlineState) : (ye("SharedClientState", "Failed to parse online state: " + e), null);
      }, t;
    }(),
        ui =
    /** @class */
    function () {
      function t() {
        this.activeTargetIds = Kt();
      }

      return t.prototype.yl = function (t) {
        this.activeTargetIds = this.activeTargetIds.add(t);
      }, t.prototype.bl = function (t) {
        this.activeTargetIds = this.activeTargetIds["delete"](t);
      },
      /**
       * Converts this entry into a JSON-encoded format we can use for WebStorage.
       * Does not encode `clientId` as it is part of the key in WebStorage.
       */
      t.prototype.pl = function () {
        var t = {
          activeTargetIds: this.activeTargetIds.W(),
          updateTimeMs: Date.now()
        };
        return JSON.stringify(t);
      }, t;
    }(),
        ai =
    /** @class */
    function () {
      function t(e, n, r, i, o) {
        if (this.Tr = e, this.platform = n, this.persistenceKey = r, this.vl = i, this.ol = null, this.g_ = null, this.ur = null, this.Sl = this.Dl.bind(this), this.Cl = new Lt(be), this.ro = !1,
        /**
             * Captures WebStorage events that occur before `start()` is called. These
             * events are replayed once `WebStorageSharedClientState` is started.
             */
        this.Fl = [], !t.Gh(this.platform)) throw new c(h.UNIMPLEMENTED, "LocalStorage is not available on this platform."); // Escape the special characters mentioned here:
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

        var s = r.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        this.storage = this.platform.window.localStorage, this.currentUser = o, this.Nl = ti(this.persistenceKey, this.vl), this.$l =
        /** Assembles the key for the current sequence number. */
        function (t) {
          return "firestore_sequence_number_" + t;
        }(this.persistenceKey), this.Cl = this.Cl.Ae(this.vl, new ui()), this.kl = new RegExp("^firestore_clients_" + s + "_([^_]*)$"), this.Ll = new RegExp("^firestore_mutations_" + s + "_(\\d+)(?:_(.*))?$"), this.Ml = new RegExp("^firestore_targets_" + s + "_(\\d+)$"), this.Ol =
        /** Assembles the key for the online state of the primary tab. */
        function (t) {
          return "firestore_online_state_" + t;
        }(this.persistenceKey), // Rather than adding the storage observer during start(), we add the
        // storage observer during initialization. This ensures that we collect
        // events before other components populate their initial state (during their
        // respective start() calls). Otherwise, we might for example miss a
        // mutation that is added after LocalStore's start() processed the existing
        // mutations but before we observe WebStorage events.
        this.platform.window.addEventListener("storage", this.Sl);
      }
      /** Returns 'true' if WebStorage is available in the current environment. */


      return t.Gh = function (t) {
        return !(!t.window || null == t.window.localStorage);
      }, t.prototype.start = function () {
        return e.__awaiter(this, void 0, void 0, function () {
          var t,
              n,
              r,
              i,
              o,
              s,
              u,
              a,
              h,
              c,
              f,
              l = this;
          return e.__generator(this, function (e) {
            switch (e.label) {
              case 0:
                return [4
                /*yield*/
                , this.ol.bo()];

              case 1:
                for (t = e.sent(), n = 0, r = t; n < r.length; n++) {
                  (i = r[n]) !== this.vl && (o = this.getItem(ti(this.persistenceKey, i))) && (s = oi.gl(i, o)) && (this.Cl = this.Cl.Ae(s.clientId, s));
                }

                for (this.xl(), (u = this.storage.getItem(this.Ol)) && (a = this.Bl(u)) && this.ql(a), h = 0, c = this.Fl; h < c.length; h++) {
                  f = c[h], this.Dl(f);
                }

                return this.Fl = [], // Register a window unload hook to remove the client metadata entry from
                // WebStorage even if `shutdown()` was not called.
                this.platform.window.addEventListener("unload", function () {
                  return l.mo();
                }), this.ro = !0, [2
                /*return*/
                ];
            }
          });
        });
      }, t.prototype.lr = function (t) {
        this.setItem(this.$l, JSON.stringify(t));
      }, t.prototype.Ul = function () {
        return this.Ql(this.Cl);
      }, t.prototype.Wl = function (t) {
        var e = !1;
        return this.Cl.forEach(function (n, r) {
          r.activeTargetIds.has(t) && (e = !0);
        }), e;
      }, t.prototype.jl = function (t) {
        this.Kl(t, "pending");
      }, t.prototype.Gl = function (t, e, n) {
        this.Kl(t, e, n), // Once a final mutation result is observed by other clients, they no longer
        // access the mutation's metadata entry. Since WebStorage replays events
        // in order, it is safe to delete the entry right after updating it.
        this.zl(t);
      }, t.prototype.Hl = function (t) {
        var e = "not-current"; // Lookup an existing query state if the target ID was already registered
        // by another tab

        if (this.Wl(t)) {
          var n = this.storage.getItem(ni(this.persistenceKey, t));

          if (n) {
            var r = ii.gl(t, n);
            r && (e = r.state);
          }
        }

        return this.Yl.yl(t), this.xl(), e;
      }, t.prototype.Jl = function (t) {
        this.Yl.bl(t), this.xl();
      }, t.prototype.Xl = function (t) {
        return this.Yl.activeTargetIds.has(t);
      }, t.prototype.Zl = function (t) {
        this.removeItem(ni(this.persistenceKey, t));
      }, t.prototype.td = function (t, e, n) {
        this.ed(t, e, n);
      }, t.prototype.Du = function (t, e, n) {
        var r = this;
        e.forEach(function (t) {
          r.zl(t);
        }), this.currentUser = t, n.forEach(function (t) {
          r.jl(t);
        });
      }, t.prototype.sd = function (t) {
        this.nd(t);
      }, t.prototype.mo = function () {
        this.ro && (this.platform.window.removeEventListener("storage", this.Sl), this.removeItem(this.Nl), this.ro = !1);
      }, t.prototype.getItem = function (t) {
        var e = this.storage.getItem(t);
        return de("SharedClientState", "READ", t, e), e;
      }, t.prototype.setItem = function (t, e) {
        de("SharedClientState", "SET", t, e), this.storage.setItem(t, e);
      }, t.prototype.removeItem = function (t) {
        de("SharedClientState", "REMOVE", t), this.storage.removeItem(t);
      }, t.prototype.Dl = function (t) {
        var n = this;

        if (t.storageArea === this.storage) {
          if (de("SharedClientState", "EVENT", t.key, t.newValue), t.key === this.Nl) return void ye("Received WebStorage notification for local change. Another client might have garbage-collected our state");
          this.Tr.Ua(function () {
            return e.__awaiter(n, void 0, void 0, function () {
              var n, r, i, o, s, u;
              return e.__generator(this, function (e) {
                if (this.ro) {
                  if (null !== t.key) if (this.kl.test(t.key)) {
                    if (null == t.newValue) return n = this.rd(t.key), [2
                    /*return*/
                    , this.hd(n, null)];
                    if (r = this.od(t.key, t.newValue)) return [2
                    /*return*/
                    , this.hd(r.clientId, r)];
                  } else if (this.Ll.test(t.key)) {
                    if (null !== t.newValue && (i = this.ad(t.key, t.newValue))) return [2
                    /*return*/
                    , this.ud(i)];
                  } else if (this.Ml.test(t.key)) {
                    if (null !== t.newValue && (o = this._d(t.key, t.newValue))) return [2
                    /*return*/
                    , this.ld(o)];
                  } else if (t.key === this.Ol) {
                    if (null !== t.newValue && (s = this.Bl(t.newValue))) return [2
                    /*return*/
                    , this.ql(s)];
                  } else t.key === this.$l && (u = function (t) {
                    var e = Pe.dr;
                    if (null != t) try {
                      var n = JSON.parse(t);
                      me("number" == typeof n), e = n;
                    } catch (t) {
                      ye("SharedClientState", "Failed to read sequence number from WebStorage", t);
                    }
                    return e;
                  }(t.newValue)) !== Pe.dr && this.ur(u);
                } else this.Fl.push(t);

                return [2
                /*return*/
                ];
              });
            });
          });
        }
      }, Object.defineProperty(t.prototype, "Yl", {
        get: function get() {
          return this.Cl.get(this.vl);
        },
        enumerable: !0,
        configurable: !0
      }), t.prototype.xl = function () {
        this.setItem(this.Nl, this.Yl.pl());
      }, t.prototype.Kl = function (t, e, n) {
        var r = new ri(this.currentUser, t, e, n),
            i = ei(this.persistenceKey, this.currentUser, t);
        this.setItem(i, r.pl());
      }, t.prototype.zl = function (t) {
        var e = ei(this.persistenceKey, this.currentUser, t);
        this.removeItem(e);
      }, t.prototype.nd = function (t) {
        var e = {
          clientId: this.vl,
          onlineState: t
        };
        this.storage.setItem(this.Ol, JSON.stringify(e));
      }, t.prototype.ed = function (t, e, n) {
        var r = ni(this.persistenceKey, t),
            i = new ii(t, e, n);
        this.setItem(r, i.pl());
      },
      /**
       * Parses a client state key in WebStorage. Returns null if the key does not
       * match the expected key format.
       */
      t.prototype.rd = function (t) {
        var e = this.kl.exec(t);
        return e ? e[1] : null;
      },
      /**
       * Parses a client state in WebStorage. Returns 'null' if the value could not
       * be parsed.
       */
      t.prototype.od = function (t, e) {
        var n = this.rd(t);
        return oi.gl(n, e);
      },
      /**
       * Parses a mutation batch state in WebStorage. Returns 'null' if the value
       * could not be parsed.
       */
      t.prototype.ad = function (t, e) {
        var n = this.Ll.exec(t),
            r = Number(n[1]),
            i = void 0 !== n[2] ? n[2] : null;
        return ri.gl(new a(i), r, e);
      },
      /**
       * Parses a query target state from WebStorage. Returns 'null' if the value
       * could not be parsed.
       */
      t.prototype._d = function (t, e) {
        var n = this.Ml.exec(t),
            r = Number(n[1]);
        return ii.gl(r, e);
      },
      /**
       * Parses an online state from WebStorage. Returns 'null' if the value
       * could not be parsed.
       */
      t.prototype.Bl = function (t) {
        return si.gl(t);
      }, t.prototype.ud = function (t) {
        return e.__awaiter(this, void 0, void 0, function () {
          return e.__generator(this, function (e) {
            return t.user.uid === this.currentUser.uid ? [2
            /*return*/
            , this.ol.dd(t.batchId, t.state, t.error)] : (de("SharedClientState", "Ignoring mutation for non-active user " + t.user.uid), [2
            /*return*/
            ]);
          });
        });
      }, t.prototype.ld = function (t) {
        return this.ol.fd(t.targetId, t.state, t.error);
      }, t.prototype.hd = function (t, e) {
        var n = this,
            r = e ? this.Cl.Ae(t, e) : this.Cl.remove(t),
            i = this.Ql(this.Cl),
            o = this.Ql(r),
            s = [],
            u = [];
        return o.forEach(function (t) {
          i.has(t) || s.push(t);
        }), i.forEach(function (t) {
          o.has(t) || u.push(t);
        }), this.ol.Td(s, u).then(function () {
          n.Cl = r;
        });
      }, t.prototype.ql = function (t) {
        // We check whether the client that wrote this online state is still active
        // by comparing its client ID to the list of clients kept active in
        // IndexedDb. If a client does not update their IndexedDb client state
        // within 5 seconds, it is considered inactive and we don't emit an online
        // state event.
        this.Cl.get(t.clientId) && this.g_(t.onlineState);
      }, t.prototype.Ql = function (t) {
        var e = Kt();
        return t.forEach(function (t, n) {
          e = e.He(n.activeTargetIds);
        }), e;
      }, t;
    }(),
        hi =
    /** @class */
    function () {
      function t() {
        this.Ed = new ui(), this.Id = {}, this.ol = null, this.g_ = null, this.ur = null;
      }

      return t.prototype.jl = function (t) {// No op.
      }, t.prototype.Gl = function (t, e, n) {// No op.
      }, t.prototype.Hl = function (t) {
        return this.Ed.yl(t), this.Id[t] || "not-current";
      }, t.prototype.td = function (t, e, n) {
        this.Id[t] = e;
      }, t.prototype.Jl = function (t) {
        this.Ed.bl(t);
      }, t.prototype.Xl = function (t) {
        return this.Ed.activeTargetIds.has(t);
      }, t.prototype.Zl = function (t) {
        delete this.Id[t];
      }, t.prototype.Ul = function () {
        return this.Ed.activeTargetIds;
      }, t.prototype.Wl = function (t) {
        return this.Ed.activeTargetIds.has(t);
      }, t.prototype.start = function () {
        return this.Ed = new ui(), Promise.resolve();
      }, t.prototype.Du = function (t, e, n) {// No op.
      }, t.prototype.sd = function (t) {// No op.
      }, t.prototype.mo = function () {}, t.prototype.lr = function (t) {}, t;
    }(),
        ci = function ci(t) {
      this.key = t;
    },
        fi = function fi(t) {
      this.key = t;
    },
        li =
    /** @class */
    function () {
      function t(t,
      /** Documents included in the remote target */
      e) {
        this.query = t, this.wd = e, this.Rd = null,
        /**
             * A flag whether the view is current with the backend. A view is considered
             * current after it has seen the current flag from the backend and did not
             * lose consistency within the watch stream (e.g. because of an existence
             * filter mismatch).
             */
        this.fs = !1,
        /** Documents in the view but not in the remote target */
        this.Ad = Wt(),
        /** Document Keys that have local changes */
        this.ns = Wt(), this.md = new Yt(t.se.bind(t));
      }

      return Object.defineProperty(t.prototype, "Pd", {
        /**
         * The set of remote documents that the server has told us belongs to the target associated with
         * this view.
         */
        get: function get() {
          return this.wd;
        },
        enumerable: !0,
        configurable: !0
      }),
      /**
       * Iterates over a set of doc changes, applies the query limit, and computes
       * what the new results should be, what the changes were, and whether we may
       * need to go back to the local cache for more results. Does not make any
       * changes to the view.
       * @param docChanges The doc changes to apply to this view.
       * @param previousChanges If this is being called with a refill, then start
       *        with this set of docs and changes instead of the current view.
       * @return a new set of docs, changes, and refill flag.
       */
      t.prototype.Vd = function (t, e) {
        var n = this,
            r = e ? e.gd : new $t(),
            i = e ? e.md : this.md,
            o = e ? e.ns : this.ns,
            s = i,
            u = !1,
            a = this.query.oe() && i.size === this.query.limit ? i.last() : null,
            h = this.query.ae() && i.size === this.query.limit ? i.first() : null; // Drop documents out to meet limit/limitToLast requirement.

        if (t.pe(function (t, e) {
          var c = i.get(t),
              f = e instanceof yt ? e : null;
          f && (f = n.query.matches(f) ? f : null);
          var l = !!c && n.ns.has(c.key),
              p = !!f && (f.At || // We only consider committed mutations for documents that were
          // mutated during the lifetime of the view.
          n.ns.has(f.key) && f.hasCommittedMutations),
              d = !1; // Calculate change

          c && f ? c.data().isEqual(f.data()) ? l !== p && (r.track({
            type: 3
            /* Metadata */
            ,
            doc: f
          }), d = !0) : n.pd(c, f) || (r.track({
            type: 2
            /* Modified */
            ,
            doc: f
          }), d = !0, (a && n.query.se(f, a) > 0 || h && n.query.se(f, h) < 0) && ( // This doc moved from inside the limit to outside the limit.
          // That means there may be some other doc in the local cache
          // that should be included instead.
          u = !0)) : !c && f ? (r.track({
            type: 0
            /* Added */
            ,
            doc: f
          }), d = !0) : c && !f && (r.track({
            type: 1
            /* Removed */
            ,
            doc: c
          }), d = !0, (a || h) && ( // A doc was removed from a full limit query. We'll need to
          // requery from the local cache to see if we know about some other
          // doc that should be in the results.
          u = !0)), d && (f ? (s = s.add(f), o = p ? o.add(t) : o["delete"](t)) : (s = s["delete"](t), o = o["delete"](t)));
        }), this.query.oe() || this.query.ae()) for (; s.size > this.query.limit;) {
          var c = this.query.oe() ? s.last() : s.first();
          s = s["delete"](c.key), o = o["delete"](c.key), r.track({
            type: 1
            /* Removed */
            ,
            doc: c
          });
        }
        return {
          md: s,
          gd: r,
          yd: u,
          ns: o
        };
      }, t.prototype.pd = function (t, e) {
        // We suppress the initial change event for documents that were modified as
        // part of a write acknowledgment (e.g. when the value of a server transform
        // is applied) as Watch will send us the same document again.
        // By suppressing the event, we only raise two user visible events (one with
        // `hasPendingWrites` and the final state of the document) instead of three
        // (one with `hasPendingWrites`, the modified document with
        // `hasPendingWrites` and the final state of the document).
        return t.At && e.hasCommittedMutations && !e.At;
      },
      /**
       * Updates the view with the given ViewDocumentChanges and optionally updates
       * limbo docs and sync state from the provided target change.
       * @param docChanges The set of changes to make to the view's docs.
       * @param updateLimboDocuments Whether to update limbo documents based on this
       *        change.
       * @param targetChange A target change to apply for computing limbo docs and
       *        sync state.
       * @return A new ViewChange with the given docs, changes, and sync state.
       */
      // PORTING NOTE: The iOS/Android clients always compute limbo document changes.
      t.prototype.xn = function (t, e, n) {
        var r = this,
            i = this.md;
        this.md = t.md, this.ns = t.ns; // Sort changes based on type and query comparator

        var o = t.gd.es();
        o.sort(function (t, e) {
          return function (t, e) {
            var n = function n(t) {
              switch (t) {
                case 0
                /* Added */
                :
                  return 1;

                case 2
                /* Modified */
                :
                case 3
                /* Metadata */
                :
                  // A metadata change is converted to a modified change at the public
                  // api layer.  Since we sort by document key and then change type,
                  // metadata and modified changes must be sorted equivalently.
                  return 2;

                case 1
                /* Removed */
                :
                  return 0;

                default:
                  return ge();
              }
            };

            return n(t) - n(e);
          }(t.type, e.type) || r.query.se(t.doc, e.doc);
        }), this.bd(n);
        var s = e ? this.vd() : [],
            u = 0 === this.Ad.size && this.fs ? 1
        /* Synced */
        : 0
        /* Local */
        ,
            a = u !== this.Rd;
        return this.Rd = u, 0 !== o.length || a ? {
          snapshot: new Jt(this.query, t.md, i, o, t.ns, 0
          /* Local */
          === u, a,
          /* excludesMetadataChanges= */
          !1),
          Sd: s
        } : {
          Sd: s
        }; // no changes
      },
      /**
       * Applies an OnlineState change to the view, potentially generating a
       * ViewChange if the view's syncState changes as a result.
       */
      t.prototype.Dd = function (t) {
        return this.fs && "Offline"
        /* Offline */
        === t ? ( // If we're offline, set `current` to false and then call applyChanges()
        // to refresh our syncState and generate a ViewChange as appropriate. We
        // are guaranteed to get a new TargetChange that sets `current` back to
        // true once the client is back online.
        this.fs = !1, this.xn({
          md: this.md,
          gd: new $t(),
          ns: this.ns,
          yd: !1
        },
        /* updateLimboDocuments= */
        !1)) : {
          Sd: []
        };
      },
      /**
       * Returns whether the doc for the given key should be in limbo.
       */
      t.prototype.Cd = function (t) {
        // If the remote end says it's part of this query, it's not in limbo.
        return !this.wd.has(t) && // The local store doesn't think it's a result, so it shouldn't be in limbo.
        !!this.md.has(t) && !this.md.get(t).At;
      },
      /**
       * Updates syncedDocuments, current, and limbo docs based on the given change.
       * Returns the list of changes to which docs are in limbo.
       */
      t.prototype.bd = function (t) {
        var e = this;
        t && (t.Ts.forEach(function (t) {
          return e.wd = e.wd.add(t);
        }), t.Es.forEach(function (t) {}), t.Is.forEach(function (t) {
          return e.wd = e.wd["delete"](t);
        }), this.fs = t.fs);
      }, t.prototype.vd = function () {
        var t = this; // We can only determine limbo documents when we're in-sync with the server.

        if (!this.fs) return []; // TODO(klimt): Do this incrementally so that it's not quadratic when
        // updating many documents.

        var e = this.Ad;
        this.Ad = Wt(), this.md.forEach(function (e) {
          t.Cd(e.key) && (t.Ad = t.Ad.add(e.key));
        }); // Diff the new limbo docs with the old limbo docs.

        var n = [];
        return e.forEach(function (e) {
          t.Ad.has(e) || n.push(new fi(e));
        }), this.Ad.forEach(function (t) {
          e.has(t) || n.push(new ci(t));
        }), n;
      },
      /**
       * Update the in-memory state of the current view with the state read from
       * persistence.
       *
       * We update the query view whenever a client's primary status changes:
       * - When a client transitions from primary to secondary, it can miss
       *   LocalStorage updates and its query views may temporarily not be
       *   synchronized with the state on disk.
       * - For secondary to primary transitions, the client needs to update the list
       *   of `syncedDocuments` since secondary clients update their query views
       *   based purely on synthesized RemoteEvents.
       *
       * @param queryResult.documents - The documents that match the query according
       * to the LocalStore.
       * @param queryResult.remoteKeys - The keys of the documents that match the
       * query according to the backend.
       *
       * @return The ViewChange that resulted from this synchronization.
       */
      // PORTING NOTE: Multi-tab only.
      t.prototype.Fd = function (t) {
        this.wd = t.Ku, this.Ad = Wt();
        var e = this.Vd(t.documents);
        return this.xn(e,
        /*updateLimboDocuments=*/
        !0);
      },
      /**
       * Returns a view snapshot as if this query was just listened to. Contains
       * a document add for every existing document and the `fromCache` and
       * `hasPendingWrites` status of the already established view.
       */
      // PORTING NOTE: Multi-tab only.
      t.prototype.Nd = function () {
        return Jt.os(this.query, this.md, this.ns, 0
        /* Local */
        === this.Rd);
      }, t;
    }(),
        pi =
    /** @class */
    function () {
      function t(t, e, n, r) {
        this.Aa = t, this.$d = e, this.updateFunction = n, this.Va = r, this.kd = 5, this.$a = new Ce(this.Aa, "transaction_retry"
        /* TransactionRetry */
        )
        /** Runs the transaction and sets the result on deferred. */
        ;
      }

      return t.prototype.Ld = function () {
        this.Md();
      }, t.prototype.Md = function () {
        var t = this;
        this.$a.gr(function () {
          return e.__awaiter(t, void 0, void 0, function () {
            var t,
                n,
                r = this;
            return e.__generator(this, function (e) {
              return t = this.$d.ml(), (n = this.Od(t)) && n.then(function (e) {
                r.Aa.uo(function () {
                  return t.commit().then(function () {
                    r.Va.resolve(e);
                  })["catch"](function (t) {
                    r.xd(t);
                  });
                });
              })["catch"](function (t) {
                r.xd(t);
              }), [2
              /*return*/
              ];
            });
          });
        });
      }, t.prototype.Od = function (t) {
        try {
          var e = this.updateFunction(t);
          return !k(e) && e["catch"] && e.then ? e : (this.Va.reject(Error("Transaction callback must return a Promise")), null);
        } catch (t) {
          // Do not retry errors thrown by user provided updateFunction.
          return this.Va.reject(t), null;
        }
      }, t.prototype.xd = function (t) {
        var e = this;
        this.kd > 0 && this.Bd(t) ? (this.kd -= 1, this.Aa.uo(function () {
          return e.Md(), Promise.resolve();
        })) : this.Va.reject(t);
      }, t.prototype.Bd = function (t) {
        if ("FirebaseError" === t.name) {
          // In transactions, the backend will fail outdated reads with FAILED_PRECONDITION and
          // non-matching document versions with ABORTED. These errors should be retried.
          var e = t.code;
          return "aborted" === e || "failed-precondition" === e || !St(e);
        }

        return !1;
      }, t;
    }(),
        di = function di(
    /**
         * The query itself.
         */
    t,
    /**
         * The target number created by the client that is used in the watch
         * stream to identify this query.
         */
    e,
    /**
         * The view is responsible for computing the final merged truth of what
         * docs are in the query. It gets notified of local and remote changes,
         * and applies the query filters and limits to determine the most correct
         * possible results.
         */
    n) {
      this.query = t, this.targetId = e, this.view = n;
    },
        yi = function yi(t) {
      this.key = t,
      /**
               * Set to true once we've received a document. This is used in
               * getRemoteKeysForTarget() and ultimately used by WatchChangeAggregator to
               * decide whether it needs to manufacture a delete event for the target once
               * the target is CURRENT.
               */
      this.qd = !1;
    },
        vi =
    /** @class */
    function () {
      function t(t, e, // PORTING NOTE: Manages state synchronization in multi-tab environments.
      n, r, i) {
        this.N_ = t, this.$d = e, this.Ud = n, this.currentUser = r, this.Qd = i, this.Wd = null, this.jd = new Ae(function (t) {
          return t.canonicalId();
        }), this.Kd = new Map(),
        /**
             * The keys of documents that are in limbo for which we haven't yet started a
             * limbo resolution query.
             */
        this.Gd = [],
        /**
             * Keeps track of the target ID for each document that is in limbo with an
             * active target.
             */
        this.zd = new Lt(_.N),
        /**
             * Keeps track of the information about an active limbo resolution for each
             * active target ID that was started for the purpose of limbo resolution.
             */
        this.Hd = new Map(), this.Yd = new nr(),
        /** Stores user completion handlers, indexed by User and BatchId. */
        this.Jd = {},
        /** Stores user callbacks waiting for all pending writes to be acknowledged. */
        this.Xd = new Map(), this.Zd = He.rh(), this.onlineState = "Unknown"
        /* Unknown */
        ;
      }

      return Object.defineProperty(t.prototype, "tf", {
        get: function get() {
          return !0;
        },
        enumerable: !0,
        configurable: !0
      }),
      /** Subscribes to SyncEngine notifications. Has to be called exactly once. */
      t.prototype.subscribe = function (t) {
        this.Wd = t;
      },
      /**
       * Initiates the new listen, resolves promise when listen enqueued to the
       * server. All the subsequent view snapshots or errors are sent to the
       * subscribed handlers. Returns the initial snapshot.
       */
      t.prototype.listen = function (t) {
        return e.__awaiter(this, void 0, void 0, function () {
          var n, r, i, o, s;
          return e.__generator(this, function (e) {
            switch (e.label) {
              case 0:
                return this.ef("listen()"), (i = this.jd.get(t)) ? ( // PORTING NOTE: With Multi-Tab Web, it is possible that a query view
                // already exists when EventManager calls us for the first time. This
                // happens when the primary tab is already listening to this query on
                // behalf of another tab and the user of the primary also starts listening
                // to the query. EventManager will not have an assigned target ID in this
                // case and calls `listen` to obtain this ID.
                n = i.targetId, this.Ud.Hl(n), r = i.view.Nd(), [3
                /*break*/
                , 4]) : [3
                /*break*/
                , 1];

              case 1:
                return [4
                /*yield*/
                , this.N_.Qu(t.ee())];

              case 2:
                return o = e.sent(), s = this.Ud.Hl(o.targetId), n = o.targetId, [4
                /*yield*/
                , this.sf(t, n, "current" === s)];

              case 3:
                r = e.sent(), this.tf && this.$d.listen(o), e.label = 4;

              case 4:
                return [2
                /*return*/
                , r];
            }
          });
        });
      },
      /**
       * Registers a view for a previously unknown query and computes its initial
       * snapshot.
       */
      t.prototype.sf = function (t, n, r) {
        return e.__awaiter(this, void 0, void 0, function () {
          var i, o, s, u, a, h;
          return e.__generator(this, function (e) {
            switch (e.label) {
              case 0:
                return [4
                /*yield*/
                , this.N_.ju(t,
                /* usePreviousResults= */
                !0)];

              case 1:
                return i = e.sent(), o = new li(t, i.Ku), s = o.Vd(i.documents), u = Xt.ds(n, r && "Offline"
                /* Offline */
                !== this.onlineState), a = o.xn(s,
                /* updateLimboDocuments= */
                this.tf, u), this["if"](n, a.Sd), h = new di(t, n, o), [2
                /*return*/
                , (this.jd.set(t, h), this.Kd.has(n) ? this.Kd.get(n).push(t) : this.Kd.set(n, [t]), a.snapshot)];
            }
          });
        });
      },
      /** Stops listening to the query. */
      t.prototype.rl = function (t) {
        return e.__awaiter(this, void 0, void 0, function () {
          var n,
              r,
              i = this;
          return e.__generator(this, function (e) {
            switch (e.label) {
              case 0:
                // Only clean up the query view and target if this is the only query mapped
                // to the target.
                return this.ef("unlisten()"), n = this.jd.get(t), (r = this.Kd.get(n.targetId)).length > 1 ? [2
                /*return*/
                , (this.Kd.set(n.targetId, r.filter(function (e) {
                  return !e.isEqual(t);
                })), void this.jd["delete"](t))] : this.tf ? ( // We need to remove the local query target first to allow us to verify
                // whether any other client is still interested in this target.
                this.Ud.Jl(n.targetId), this.Ud.Wl(n.targetId) ? [3
                /*break*/
                , 2] : [4
                /*yield*/
                , this.N_.Wu(n.targetId,
                /*keepPersistedTargetData=*/
                !1).then(function () {
                  i.Ud.Zl(n.targetId), i.$d.rl(n.targetId), i.nf(n.targetId);
                })["catch"](er)]) : [3
                /*break*/
                , 3];

              case 1:
                e.sent(), e.label = 2;

              case 2:
                return [3
                /*break*/
                , 5];

              case 3:
                return this.nf(n.targetId), [4
                /*yield*/
                , this.N_.Wu(n.targetId,
                /*keepPersistedTargetData=*/
                !0)];

              case 4:
                e.sent(), e.label = 5;

              case 5:
                return [2
                /*return*/
                ];
            }
          });
        });
      },
      /**
       * Initiates the write of local mutation batch which involves adding the
       * writes to the mutation queue, notifying the remote store about new
       * mutations and raising events for any changes this write caused.
       *
       * The promise returned by this call is resolved when the above steps
       * have completed, *not* when the write was acked by the backend. The
       * userCallback is resolved once the write was acked/rejected by the
       * backend (or failed locally for any other reason).
       */
      t.prototype.write = function (t, n) {
        return e.__awaiter(this, void 0, void 0, function () {
          var r, i, o;
          return e.__generator(this, function (e) {
            switch (e.label) {
              case 0:
                this.ef("write()"), e.label = 1;

              case 1:
                return e.trys.push([1, 5,, 6]), [4
                /*yield*/
                , this.N_.$u(t)];

              case 2:
                return r = e.sent(), this.Ud.jl(r.batchId), this.rf(r.batchId, n), [4
                /*yield*/
                , this.hf(r.Dn)];

              case 3:
                return e.sent(), [4
                /*yield*/
                , this.$d.el()];

              case 4:
                return e.sent(), [3
                /*break*/
                , 6];

              case 5:
                return i = e.sent(), o = Qn(i, "Failed to persist write"), n.reject(o), [3
                /*break*/
                , 6];

              case 6:
                return [2
                /*return*/
                ];
            }
          });
        });
      },
      /**
       * Takes an updateFunction in which a set of reads and writes can be performed
       * atomically. In the updateFunction, the client can read and write values
       * using the supplied transaction object. After the updateFunction, all
       * changes will be committed. If a retryable error occurs (ex: some other
       * client has changed any of the data referenced), then the updateFunction
       * will be called again after a backoff. If the updateFunction still fails
       * after all retries, then the transaction will be rejected.
       *
       * The transaction object passed to the updateFunction contains methods for
       * accessing documents and collections. Unlike other datastore access, data
       * accessed with the transaction will not reflect local changes that have not
       * been committed. For this reason, it is required that all reads are
       * performed before any writes. Transactions must be performed while online.
       *
       * The Deferred input is resolved when the transaction is fully committed.
       */
      t.prototype.runTransaction = function (t, e, n) {
        new pi(t, this.$d, e, n).Ld();
      }, t.prototype.Mu = function (t) {
        return e.__awaiter(this, void 0, void 0, function () {
          var n,
              r = this;
          return e.__generator(this, function (e) {
            switch (e.label) {
              case 0:
                this.ef("applyRemoteEvent()"), e.label = 1;

              case 1:
                return e.trys.push([1, 4,, 6]), [4
                /*yield*/
                , this.N_.Mu(t)];

              case 2:
                return n = e.sent(), // Update `receivedDocument` as appropriate for any limbo targets.
                t.as.forEach(function (t, e) {
                  var n = r.Hd.get(e);
                  n && ( // Since this is a limbo resolution lookup, it's for a single document
                  // and it could be added, modified, or removed, but not a combination.
                  me(t.Ts.size + t.Es.size + t.Is.size <= 1), t.Ts.size > 0 ? n.qd = !0 : t.Es.size > 0 ? me(n.qd) : t.Is.size > 0 && (me(n.qd), n.qd = !1));
                }), [4
                /*yield*/
                , this.hf(n, t)];

              case 3:
                // Update `receivedDocument` as appropriate for any limbo targets.
                return e.sent(), [3
                /*break*/
                , 6];

              case 4:
                return [4
                /*yield*/
                , er(e.sent())];

              case 5:
                return e.sent(), [3
                /*break*/
                , 6];

              case 6:
                return [2
                /*return*/
                ];
            }
          });
        });
      },
      /**
       * Applies an OnlineState change to the sync engine and notifies any views of
       * the change.
       */
      t.prototype.Dd = function (t, e) {
        this.ef("applyOnlineStateChange()");
        var n = [];
        this.jd.forEach(function (e, r) {
          var i = r.view.Dd(t);
          i.snapshot && n.push(i.snapshot);
        }), this.Wd.af(t), this.Wd.i_(n), this.onlineState = t;
      }, t.prototype._l = function (t, n) {
        return e.__awaiter(this, void 0, void 0, function () {
          var r,
              i,
              o,
              s,
              u,
              a = this;
          return e.__generator(this, function (e) {
            switch (e.label) {
              case 0:
                return this.ef("rejectListens()"), // PORTING NOTE: Multi-tab only.
                this.Ud.td(t, "rejected", n), r = this.Hd.get(t), (i = r && r.key) ? (o = (o = new Lt(_.N)).Ae(i, new vt(i, g.min())), s = Wt().add(i), u = new Ht(g.min(),
                /* targetChanges= */
                new Map(),
                /* targetMismatches= */
                new Pt(be), o, s), [4
                /*yield*/
                , this.Mu(u)]) : [3
                /*break*/
                , 2];

              case 1:
                return e.sent(), // Since this query failed, we won't want to manually unlisten to it.
                // We only remove it from bookkeeping after we successfully applied the
                // RemoteEvent. If `applyRemoteEvent()` throws, we want to re-listen to
                // this query when the RemoteStore restarts the Watch stream, which should
                // re-trigger the target failure.
                this.zd = this.zd.remove(i), this.Hd["delete"](t), this.uf(), [3
                /*break*/
                , 4];

              case 2:
                return [4
                /*yield*/
                , this.N_.Wu(t,
                /* keepPersistedTargetData */
                !1).then(function () {
                  return a.nf(t, n);
                })["catch"](er)];

              case 3:
                e.sent(), e.label = 4;

              case 4:
                return [2
                /*return*/
                ];
            }
          });
        });
      }, t.prototype.Il = function (t) {
        return e.__awaiter(this, void 0, void 0, function () {
          var n, r;
          return e.__generator(this, function (e) {
            switch (e.label) {
              case 0:
                this.ef("applySuccessfulWrite()"), n = t.batch.batchId, // The local store may or may not be able to apply the write result and
                // raise events immediately (depending on whether the watcher is caught
                // up), so we raise user callbacks first so that they consistently happen
                // before listen events.
                this.cf(n,
                /*error=*/
                null), this._f(n), e.label = 1;

              case 1:
                return e.trys.push([1, 4,, 6]), [4
                /*yield*/
                , this.N_.zo(t)];

              case 2:
                return r = e.sent(), this.Ud.Gl(n, "acknowledged"), [4
                /*yield*/
                , this.hf(r)];

              case 3:
                return e.sent(), [3
                /*break*/
                , 6];

              case 4:
                return [4
                /*yield*/
                , er(e.sent())];

              case 5:
                return e.sent(), [3
                /*break*/
                , 6];

              case 6:
                return [2
                /*return*/
                ];
            }
          });
        });
      }, t.prototype.Al = function (t, n) {
        return e.__awaiter(this, void 0, void 0, function () {
          var r;
          return e.__generator(this, function (e) {
            switch (e.label) {
              case 0:
                this.ef("rejectFailedWrite()"), // The local store may or may not be able to apply the write result and
                // raise events immediately (depending on whether the watcher is caught up),
                // so we raise user callbacks first so that they consistently happen before
                // listen events.
                this.cf(t, n), this._f(t), e.label = 1;

              case 1:
                return e.trys.push([1, 4,, 6]), [4
                /*yield*/
                , this.N_.Lu(t)];

              case 2:
                return r = e.sent(), this.Ud.Gl(t, "rejected", n), [4
                /*yield*/
                , this.hf(r)];

              case 3:
                return e.sent(), [3
                /*break*/
                , 6];

              case 4:
                return [4
                /*yield*/
                , er(e.sent())];

              case 5:
                return e.sent(), [3
                /*break*/
                , 6];

              case 6:
                return [2
                /*return*/
                ];
            }
          });
        });
      },
      /**
       * Registers a user callback that resolves when all pending mutations at the moment of calling
       * are acknowledged .
       */
      t.prototype.lf = function (t) {
        return e.__awaiter(this, void 0, void 0, function () {
          var n, r, i, o;
          return e.__generator(this, function (e) {
            switch (e.label) {
              case 0:
                this.$d.q_() || de("SyncEngine", "The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled."), e.label = 1;

              case 1:
                return e.trys.push([1, 3,, 4]), [4
                /*yield*/
                , this.N_.sa()];

              case 2:
                return -1 === (n = e.sent()) ? [2
                /*return*/
                , void t.resolve()] : ((r = this.Xd.get(n) || []).push(t), this.Xd.set(n, r), [3
                /*break*/
                , 4]);

              case 3:
                return i = e.sent(), o = Qn(i, "Initialization of waitForPendingWrites() operation failed"), t.reject(o), [3
                /*break*/
                , 4];

              case 4:
                return [2
                /*return*/
                ];
            }
          });
        });
      },
      /**
       * Triggers the callbacks that are waiting for this batch id to get acknowledged by server,
       * if there are any.
       */
      t.prototype._f = function (t) {
        (this.Xd.get(t) || []).forEach(function (t) {
          t.resolve();
        }), this.Xd["delete"](t);
      },
      /** Reject all outstanding callbacks waiting for pending writes to complete. */
      t.prototype.df = function (t) {
        this.Xd.forEach(function (e) {
          e.forEach(function (e) {
            e.reject(new c(h.CANCELLED, t));
          });
        }), this.Xd.clear();
      }, t.prototype.rf = function (t, e) {
        var n = this.Jd[this.currentUser.s()];
        n || (n = new Lt(be)), n = n.Ae(t, e), this.Jd[this.currentUser.s()] = n;
      },
      /**
       * Resolves or rejects the user callback for the given batch and then discards
       * it.
       */
      t.prototype.cf = function (t, e) {
        var n = this.Jd[this.currentUser.s()]; // NOTE: Mutations restored from persistence won't have callbacks, so it's
        // okay for there to be no callback for this ID.

        if (n) {
          var r = n.get(t);
          r && (e ? r.reject(e) : r.resolve(), n = n.remove(t)), this.Jd[this.currentUser.s()] = n;
        }
      }, t.prototype.nf = function (t, e) {
        var n = this;
        void 0 === e && (e = null), this.Ud.Jl(t);

        for (var r = 0, i = this.Kd.get(t); r < i.length; r++) {
          var o = i[r];
          this.jd["delete"](o), e && this.Wd.ff(o, e);
        }

        this.Kd["delete"](t), this.tf && this.Yd.nc(t).forEach(function (t) {
          n.Yd.Ch(t) || // We removed the last reference for this key
          n.Tf(t);
        });
      }, t.prototype.Tf = function (t) {
        // It's possible that the target already got removed because the query failed. In that case,
        // the key won't exist in `limboTargetsByKey`. Only do the cleanup if we still have the target.
        var e = this.zd.get(t);
        null !== e && (this.$d.rl(e), this.zd = this.zd.remove(t), this.Hd["delete"](e), this.uf());
      }, t.prototype["if"] = function (t, e) {
        for (var n = 0, r = e; n < r.length; n++) {
          var i = r[n];
          i instanceof ci ? (this.Yd.yh(i.key, t), this.Ef(i)) : i instanceof fi ? (de("SyncEngine", "Document no longer in limbo: " + i.key), this.Yd.vh(i.key, t), this.Yd.Ch(i.key) || // We removed the last reference for this key
          this.Tf(i.key)) : ge();
        }
      }, t.prototype.Ef = function (t) {
        var e = t.key;
        this.zd.get(e) || (de("SyncEngine", "New document in limbo: " + e), this.Gd.push(e), this.uf());
      },
      /**
       * Starts listens for documents in limbo that are enqueued for resolution,
       * subject to a maximum number of concurrent resolutions.
       *
       * Without bounding the number of concurrent resolutions, the server can fail
       * with "resource exhausted" errors which can lead to pathological client
       * behavior as seen in https://github.com/firebase/firebase-js-sdk/issues/2683.
       */
      t.prototype.uf = function () {
        for (; this.Gd.length > 0 && this.zd.size < this.Qd;) {
          var t = this.Gd.shift(),
              e = this.Zd.next();
          this.Hd.set(e, new yi(t)), this.zd = this.zd.Ae(t, e), this.$d.listen(new Dt(wt.Wt(t.path).ee(), e, 2
          /* LimboResolution */
          , Pe.dr));
        }
      }, // Visible for testing
      t.prototype.If = function () {
        return this.zd;
      }, // Visible for testing
      t.prototype.wf = function () {
        return this.Gd;
      }, t.prototype.hf = function (t, n) {
        return e.__awaiter(this, void 0, void 0, function () {
          var r,
              i,
              o,
              s = this;
          return e.__generator(this, function (e) {
            switch (e.label) {
              case 0:
                return r = [], i = [], o = [], this.jd.forEach(function (e, u) {
                  o.push(Promise.resolve().then(function () {
                    var e = u.view.Vd(t);
                    return e.yd ? s.N_.ju(u.query,
                    /* usePreviousResults= */
                    !1).then(function (t) {
                      var n = t.documents;
                      return u.view.Vd(n, e);
                    }) : e; // The query has a limit and some docs were removed, so we need
                    // to re-run the query against the local store to make sure we
                    // didn't lose any good docs that had been past the limit.
                  }).then(function (t) {
                    var e = n && n.as.get(u.targetId),
                        o = u.view.xn(t,
                    /* updateLimboDocuments= */
                    s.tf, e);

                    if (s["if"](u.targetId, o.Sd), o.snapshot) {
                      s.tf && s.Ud.td(u.targetId, o.snapshot.fromCache ? "not-current" : "current"), r.push(o.snapshot);
                      var a = Ve.ar(u.targetId, o.snapshot);
                      i.push(a);
                    }
                  }));
                }), [4
                /*yield*/
                , Promise.all(o)];

              case 1:
                return e.sent(), this.Wd.i_(r), [4
                /*yield*/
                , this.N_.Bu(i)];

              case 2:
                return e.sent(), [2
                /*return*/
                ];
            }
          });
        });
      }, t.prototype.ef = function (t) {}, t.prototype.Pl = function (t) {
        return e.__awaiter(this, void 0, void 0, function () {
          var n;
          return e.__generator(this, function (e) {
            switch (e.label) {
              case 0:
                return this.currentUser.isEqual(t) ? [3
                /*break*/
                , 3] : [4
                /*yield*/
                , this.N_.Du(t)];

              case 1:
                return n = e.sent(), this.currentUser = t, // Fails tasks waiting for pending writes requested by previous user.
                this.df("'waitForPendingWrites' promise is rejected due to a user change."), // TODO(b/114226417): Consider calling this only in the primary tab.
                this.Ud.Du(t, n.Fu, n.Nu), [4
                /*yield*/
                , this.hf(n.Cu)];

              case 2:
                e.sent(), e.label = 3;

              case 3:
                return [4
                /*yield*/
                , this.$d.Pl()];

              case 4:
                return e.sent(), [2
                /*return*/
                ];
            }
          });
        });
      }, t.prototype.enableNetwork = function () {
        return this.$d.enableNetwork();
      }, t.prototype.disableNetwork = function () {
        return this.$d.disableNetwork();
      }, t.prototype.ei = function (t) {
        var e = this.Hd.get(t);
        if (e && e.qd) return Wt().add(e.key);
        var n = Wt(),
            r = this.Kd.get(t);
        if (!r) return n;

        for (var i = 0, o = r; i < o.length; i++) {
          var s = o[i],
              u = this.jd.get(s);
          n = n.He(u.view.Pd);
        }

        return n;
      }, t;
    }(),
        gi =
    /** @class */
    function (t) {
      function n(e, n, r, i, o) {
        var s = this;
        return (s = t.call(this, e, n, r, i, o) || this).N_ = e, // The primary state is set to `true` or `false` immediately after Firestore
        // startup. In the interim, a client should only be considered primary if
        // `isPrimary` is true.
        s.Rf = void 0, s;
      }

      return e.__extends(n, t), Object.defineProperty(n.prototype, "tf", {
        get: function get() {
          return !0 === this.Rf;
        },
        enumerable: !0,
        configurable: !0
      }), n.prototype.enableNetwork = function () {
        return this.N_.ao(!0), t.prototype.enableNetwork.call(this);
      }, n.prototype.disableNetwork = function () {
        return this.N_.ao(!1), t.prototype.disableNetwork.call(this);
      },
      /**
       * Reconcile the list of synced documents in an existing view with those
       * from persistence.
       */
      n.prototype.Af = function (t) {
        return e.__awaiter(this, void 0, void 0, function () {
          var n, r;
          return e.__generator(this, function (e) {
            switch (e.label) {
              case 0:
                return [4
                /*yield*/
                , this.N_.ju(t.query,
                /* usePreviousResults= */
                !0)];

              case 1:
                return n = e.sent(), r = t.view.Fd(n), [2
                /*return*/
                , (this.Rf && this["if"](t.targetId, r.Sd), r)];
            }
          });
        });
      }, n.prototype.Dd = function (e, n) {
        // If we are the primary client, the online state of all clients only
        // depends on the online state of the local RemoteStore.
        this.tf && 0
        /* RemoteStore */
        === n && (t.prototype.Dd.call(this, e, n), this.Ud.sd(e)), // If we are the secondary client, we explicitly ignore the remote store's
        // online state (the local client may go offline, even though the primary
        // tab remains online) and only apply the primary tab's online state from
        // SharedClientState.
        this.tf || 1
        /* SharedClientState */
        !== n || t.prototype.Dd.call(this, e, n);
      }, n.prototype.dd = function (t, n, r) {
        return e.__awaiter(this, void 0, void 0, function () {
          var i;
          return e.__generator(this, function (e) {
            switch (e.label) {
              case 0:
                return this.ef("applyBatchState()"), [4
                /*yield*/
                , this.N_.zu(t)];

              case 1:
                return null === (i = e.sent()) ? [3
                /*break*/
                , 6] : "pending" !== n ? [3
                /*break*/
                , 3] : [4
                /*yield*/
                , this.$d.el()];

              case 2:
                // If we are the primary client, we need to send this write to the
                // backend. Secondary clients will ignore these writes since their remote
                // connection is disabled.
                return e.sent(), [3
                /*break*/
                , 4];

              case 3:
                "acknowledged" === n || "rejected" === n ? ( // NOTE: Both these methods are no-ops for batches that originated from
                // other clients.
                this.cf(t, r || null), this.N_.Hu(t)) : ge(), e.label = 4;

              case 4:
                return [4
                /*yield*/
                , this.hf(i)];

              case 5:
                return e.sent(), [3
                /*break*/
                , 7];

              case 6:
                // A throttled tab may not have seen the mutation before it was completed
                // and removed from the mutation queue, in which case we won't have cached
                // the affected documents. In this case we can safely ignore the update
                // since that means we didn't apply the mutation locally at all (if we
                // had, we would have cached the affected documents), and so we will just
                // see any resulting document changes via normal remote document updates
                // as applicable.
                de("SyncEngine", "Cannot apply mutation batch with id: " + t), e.label = 7;

              case 7:
                return [2
                /*return*/
                ];
            }
          });
        });
      }, n.prototype.Vl = function (t) {
        return e.__awaiter(this, void 0, void 0, function () {
          var n,
              r,
              i,
              o,
              s,
              u,
              a,
              h = this;
          return e.__generator(this, function (e) {
            switch (e.label) {
              case 0:
                return !0 !== t || !0 === this.Rf ? [3
                /*break*/
                , 3] : (n = this.Ud.Ul(), [4
                /*yield*/
                , this.mf(n.W(),
                /*transitionToPrimary=*/
                !0)]);

              case 1:
                return r = e.sent(), this.Rf = !0, [4
                /*yield*/
                , this.$d.Vl(!0)];

              case 2:
                for (e.sent(), i = 0, o = r; i < o.length; i++) {
                  s = o[i], this.$d.listen(s);
                }

                return [3
                /*break*/
                , 7];

              case 3:
                return !1 !== t || !1 === this.Rf ? [3
                /*break*/
                , 7] : (u = [], a = Promise.resolve(), this.Kd.forEach(function (t, e) {
                  h.Ud.Xl(e) ? u.push(e) : a = a.then(function () {
                    return h.nf(e), h.N_.Wu(e,
                    /*keepPersistedTargetData=*/
                    !0);
                  }), h.$d.rl(e);
                }), [4
                /*yield*/
                , a]);

              case 4:
                return e.sent(), [4
                /*yield*/
                , this.mf(u,
                /*transitionToPrimary=*/
                !1)];

              case 5:
                return e.sent(), this.Pf(), this.Rf = !1, [4
                /*yield*/
                , this.$d.Vl(!1)];

              case 6:
                e.sent(), e.label = 7;

              case 7:
                return [2
                /*return*/
                ];
            }
          });
        });
      }, n.prototype.Pf = function () {
        var t = this;
        this.Hd.forEach(function (e, n) {
          t.$d.rl(n);
        }), this.Yd.rc(), this.Hd = new Map(), this.zd = new Lt(_.N);
      },
      /**
       * Reconcile the query views of the provided query targets with the state from
       * persistence. Raises snapshots for any changes that affect the local
       * client and returns the updated state of all target's query data.
       *
       * @param targets the list of targets with views that need to be recomputed
       * @param transitionToPrimary `true` iff the tab transitions from a secondary
       * tab to a primary tab
       */
      n.prototype.mf = function (t, n) {
        return e.__awaiter(this, void 0, void 0, function () {
          var n, r, i, o, s, u, a, h, c, f, l, p, d;
          return e.__generator(this, function (e) {
            switch (e.label) {
              case 0:
                n = [], r = [], i = 0, o = t, e.label = 1;

              case 1:
                return i < o.length ? (s = o[i], u = void 0, (a = this.Kd.get(s)) && 0 !== a.length ? [4
                /*yield*/
                , this.N_.Wu(s,
                /*keepPersistedTargetData=*/
                !0)] : [3
                /*break*/
                , 8]) : [3
                /*break*/
                , 14];

              case 2:
                // For queries that have a local View, we need to update their state
                // in LocalStore (as the resume token and the snapshot version
                // might have changed) and reconcile their views with the persisted
                // state (the list of syncedDocuments may have gotten out of sync).
                return e.sent(), [4
                /*yield*/
                , this.N_.Qu(a[0].ee())];

              case 3:
                // For queries that have a local View, we need to update their state
                // in LocalStore (as the resume token and the snapshot version
                // might have changed) and reconcile their views with the persisted
                // state (the list of syncedDocuments may have gotten out of sync).
                u = e.sent(), h = 0, c = a, e.label = 4;

              case 4:
                return h < c.length ? (f = c[h], l = this.jd.get(f), [4
                /*yield*/
                , this.Af(l)]) : [3
                /*break*/
                , 7];

              case 5:
                (p = e.sent()).snapshot && r.push(p.snapshot), e.label = 6;

              case 6:
                return h++, [3
                /*break*/
                , 4];

              case 7:
                return [3
                /*break*/
                , 12];

              case 8:
                return [4
                /*yield*/
                , this.N_.Yu(s)];

              case 9:
                return d = e.sent(), [4
                /*yield*/
                , this.N_.Qu(d)];

              case 10:
                return u = e.sent(), [4
                /*yield*/
                , this.sf(this.Vf(d), s,
                /*current=*/
                !1)];

              case 11:
                e.sent(), e.label = 12;

              case 12:
                n.push(u), e.label = 13;

              case 13:
                return i++, [3
                /*break*/
                , 1];

              case 14:
                return [2
                /*return*/
                , (this.Wd.i_(r), n)];
            }
          });
        });
      },
      /**
       * Creates a `Query` object from the specified `Target`. There is no way to
       * obtain the original `Query`, so we synthesize a `Query` from the `Target`
       * object.
       *
       * The synthesized result might be different from the original `Query`, but
       * since the synthesized `Query` should return the same results as the
       * original one (only the presentation of results might differ), the potential
       * difference will not cause issues.
       */
      n.prototype.Vf = function (t) {
        return new wt(t.path, t.collectionGroup, t.orderBy, t.filters, t.limit, "F"
        /* First */
        , t.startAt, t.endAt);
      }, n.prototype.bo = function () {
        return this.N_.bo();
      }, n.prototype.fd = function (t, n, r) {
        return e.__awaiter(this, void 0, void 0, function () {
          var i, o;
          return e.__generator(this, function (e) {
            switch (e.label) {
              case 0:
                return this.Rf ? ( // If we receive a target state notification via WebStorage, we are
                // either already secondary or another tab has taken the primary lease.
                de("SyncEngine", "Ignoring unexpected query state notification."), [3
                /*break*/
                , 8]) : [3
                /*break*/
                , 1];

              case 1:
                if (!this.Kd.has(t)) return [3
                /*break*/
                , 8];

                switch (n) {
                  case "current":
                  case "not-current":
                    return [3
                    /*break*/
                    , 2];

                  case "rejected":
                    return [3
                    /*break*/
                    , 5];
                }

                return [3
                /*break*/
                , 7];

              case 2:
                return [4
                /*yield*/
                , this.N_.Kr()];

              case 3:
                return i = e.sent(), o = Ht.ls(t, "current" === n), [4
                /*yield*/
                , this.hf(i, o)];

              case 4:
                return e.sent(), [3
                /*break*/
                , 8];

              case 5:
                return [4
                /*yield*/
                , this.N_.Wu(t,
                /* keepPersistedTargetData */
                !0)];

              case 6:
                return e.sent(), this.nf(t, r), [3
                /*break*/
                , 8];

              case 7:
                ge(), e.label = 8;

              case 8:
                return [2
                /*return*/
                ];
            }
          });
        });
      }, n.prototype.Td = function (t, n) {
        return e.__awaiter(this, void 0, void 0, function () {
          var r,
              i,
              o,
              s,
              u,
              a,
              h,
              c,
              f,
              l,
              p = this;
          return e.__generator(this, function (d) {
            switch (d.label) {
              case 0:
                if (!this.Rf) return [3
                /*break*/
                , 10];
                r = 0, i = t, d.label = 1;

              case 1:
                return r < i.length ? (o = i[r], this.Kd.has(o) ? ( // A target might have been added in a previous attempt
                de("SyncEngine", "Adding an already active target " + o), [3
                /*break*/
                , 5]) : [4
                /*yield*/
                , this.N_.Yu(o)]) : [3
                /*break*/
                , 6];

              case 2:
                return s = d.sent(), [4
                /*yield*/
                , this.N_.Qu(s)];

              case 3:
                return u = d.sent(), [4
                /*yield*/
                , this.sf(this.Vf(s), u.targetId,
                /*current=*/
                !1)];

              case 4:
                d.sent(), this.$d.listen(u), d.label = 5;

              case 5:
                return r++, [3
                /*break*/
                , 1];

              case 6:
                a = function a(t) {
                  return e.__generator(this, function (e) {
                    switch (e.label) {
                      case 0:
                        return h.Kd.has(t) ? [4
                        /*yield*/
                        , h.N_.Wu(t,
                        /* keepPersistedTargetData */
                        !1).then(function () {
                          p.$d.rl(t), p.nf(t);
                        })["catch"](er)] : [3
                        /*break*/
                        , 2];
                      // Release queries that are still active.

                      case 1:
                        // Release queries that are still active.
                        e.sent(), e.label = 2;

                      case 2:
                        return [2
                        /*return*/
                        ];
                    }
                  });
                }, h = this, c = 0, f = n, d.label = 7;

              case 7:
                return c < f.length ? (l = f[c], [5
                /*yield**/
                , a(l)]) : [3
                /*break*/
                , 10];

              case 8:
                d.sent(), d.label = 9;

              case 9:
                return c++, [3
                /*break*/
                , 7];

              case 10:
                return [2
                /*return*/
                ];
            }
          });
        });
      }, n;
    }(vi),
        mi = function mi() {
      this.gf = void 0, this.pf = [];
    },
        wi =
    /** @class */
    function () {
      function t(t) {
        this.ol = t, this.yf = new Ae(function (t) {
          return t.canonicalId();
        }), this.onlineState = "Unknown"
        /* Unknown */
        , this.bf = new Set(), this.ol.subscribe(this);
      }

      return t.prototype.listen = function (t) {
        return e.__awaiter(this, void 0, void 0, function () {
          var n, r, i, o, s, u;
          return e.__generator(this, function (e) {
            switch (e.label) {
              case 0:
                if (n = t.query, r = !1, (i = this.yf.get(n)) || (r = !0, i = new mi()), !r) return [3
                /*break*/
                , 4];
                e.label = 1;

              case 1:
                return e.trys.push([1, 3,, 4]), o = i, [4
                /*yield*/
                , this.ol.listen(n)];

              case 2:
                return o.gf = e.sent(), [3
                /*break*/
                , 4];

              case 3:
                return s = e.sent(), u = Qn(s, "Initialization of query '" + t.query + "' failed"), [2
                /*return*/
                , void t.onError(u)];

              case 4:
                return this.yf.set(n, i), i.pf.push(t), // Run global snapshot listeners if a consistent snapshot has been emitted.
                t.Dd(this.onlineState), i.gf && t.vf(i.gf) && this.Sf(), [2
                /*return*/
                ];
            }
          });
        });
      }, t.prototype.rl = function (t) {
        return e.__awaiter(this, void 0, void 0, function () {
          var n, r, i, o;
          return e.__generator(this, function (e) {
            return n = t.query, r = !1, (i = this.yf.get(n)) && (o = i.pf.indexOf(t)) >= 0 && (i.pf.splice(o, 1), r = 0 === i.pf.length), r ? [2
            /*return*/
            , (this.yf["delete"](n), this.ol.rl(n))] : [2
            /*return*/
            ];
          });
        });
      }, t.prototype.i_ = function (t) {
        for (var e = !1, n = 0, r = t; n < r.length; n++) {
          var i = r[n],
              o = i.query,
              s = this.yf.get(o);

          if (s) {
            for (var u = 0, a = s.pf; u < a.length; u++) {
              a[u].vf(i) && (e = !0);
            }

            s.gf = i;
          }
        }

        e && this.Sf();
      }, t.prototype.ff = function (t, e) {
        var n = this.yf.get(t);
        if (n) for (var r = 0, i = n.pf; r < i.length; r++) {
          i[r].onError(e);
        } // Remove all listeners. NOTE: We don't need to call syncEngine.unlisten()
        // after an error.

        this.yf["delete"](t);
      }, t.prototype.af = function (t) {
        this.onlineState = t;
        var e = !1;
        this.yf.forEach(function (n, r) {
          for (var i = 0, o = r.pf; i < o.length; i++) {
            // Run global snapshot listeners if a consistent snapshot has been emitted.
            o[i].Dd(t) && (e = !0);
          }
        }), e && this.Sf();
      }, t.prototype.Df = function (t) {
        this.bf.add(t), // Immediately fire an initial event, indicating all existing listeners
        // are in-sync.
        t.next();
      }, t.prototype.Cf = function (t) {
        this.bf["delete"](t);
      }, // Call all global snapshot listeners that have been set.
      t.prototype.Sf = function () {
        this.bf.forEach(function (t) {
          t.next();
        });
      }, t;
    }(),
        Ei =
    /** @class */
    function () {
      function t(t, e, n) {
        this.query = t, this.Ff = e,
        /**
             * Initial snapshots (e.g. from cache) may not be propagated to the wrapped
             * observer. This flag is set to true once we've actually raised an event.
             */
        this.Nf = !1, this.$f = null, this.onlineState = "Unknown"
        /* Unknown */
        , this.options = n || {}
        /**
        * Applies the new ViewSnapshot to this listener, raising a user-facing event
        * if applicable (depending on what changed, whether the user has opted into
        * metadata-only changes, etc.). Returns true if a user-facing event was
        * indeed raised.
        */
        ;
      }

      return t.prototype.vf = function (t) {
        if (!this.options.includeMetadataChanges) {
          for ( // Remove the metadata only changes.
          var e = [], n = 0, r = t.docChanges; n < r.length; n++) {
            var i = r[n];
            3
            /* Metadata */
            !== i.type && e.push(i);
          }

          t = new Jt(t.query, t.docs, t.ss, e, t.ns, t.fromCache, t.rs,
          /* excludesMetadataChanges= */
          !0);
        }

        var o = !1;
        return this.Nf ? this.kf(t) && (this.Ff.next(t), o = !0) : this.Lf(t, this.onlineState) && (this.Mf(t), o = !0), this.$f = t, o;
      }, t.prototype.onError = function (t) {
        this.Ff.error(t);
      },
      /** Returns whether a snapshot was raised. */
      t.prototype.Dd = function (t) {
        this.onlineState = t;
        var e = !1;
        return this.$f && !this.Nf && this.Lf(this.$f, t) && (this.Mf(this.$f), e = !0), e;
      }, t.prototype.Lf = function (t, e) {
        // Always raise the first event when we're synced
        if (!t.fromCache) return !0; // NOTE: We consider OnlineState.Unknown as online (it should become Offline
        // or Online if we wait long enough).

        var n = "Offline"
        /* Offline */
        !== e; // Don't raise the event if we're online, aren't synced yet (checked
        // above) and are waiting for a sync.

        return !(this.options.Of && n || t.docs.B() && "Offline"
        /* Offline */
        !== e); // Raise data from cache if we have any documents or we are offline
      }, t.prototype.kf = function (t) {
        // We don't need to handle includeDocumentMetadataChanges here because
        // the Metadata only changes have already been stripped out if needed.
        // At this point the only changes we will see are the ones we should
        // propagate.
        if (t.docChanges.length > 0) return !0;
        var e = this.$f && this.$f.hasPendingWrites !== t.hasPendingWrites;
        return !(!t.rs && !e) && !0 === this.options.includeMetadataChanges; // Generally we should have hit one of the cases above, but it's possible
        // to get here if there were only metadata docChanges and they got
        // stripped out.
      }, t.prototype.Mf = function (t) {
        t = Jt.os(t.query, t.docs, t.ns, t.fromCache), this.Nf = !0, this.Ff.next(t);
      }, t;
    }(),
        bi =
    /** @class */
    function () {
      function t() {}

      return t.prototype.Su = function (t) {
        this.xf = t;
      }, t.prototype.Zn = function (t, e, n, i) {
        var o = this; // Queries that match all documents don't benefit from using
        // IndexFreeQueries. It is more efficient to scan all documents in a
        // collection, rather than to perform individual lookups.

        return e.te() || n.isEqual(g.min()) ? this.Bf(t, e) : this.xf.Yn(t, i).next(function (s) {
          var u = o.qf(e, s);
          return (e.oe() || e.ae()) && o.yd(e.Bt, u, i, n) ? o.Bf(t, e) : (le() <= r.LogLevel.DEBUG && de("IndexFreeQueryEngine", "Re-using previous result from %s to execute query: %s", n.toString(), e.toString()), o.xf.Zn(t, e, n).next(function (t) {
            // We merge `previousResults` into `updateResults`, since
            // `updateResults` is already a DocumentMap. If a document is
            // contained in both lists, then its contents are the same.
            return u.forEach(function (e) {
              t = t.Ae(e.key, e);
            }), t;
          }));
        }); // Queries that have never seen a snapshot without limbo free documents
        // should also be run as a full collection scan.
      },
      /** Applies the query filter and sorting to the provided documents.  */
      t.prototype.qf = function (t, e) {
        // Sort the documents and re-apply the query filter since previously
        // matching documents do not necessarily still match the query.
        var n = new Pt(function (e, n) {
          return t.se(e, n);
        });
        return e.forEach(function (e, r) {
          r instanceof yt && t.matches(r) && (n = n.add(r));
        }), n;
      },
      /**
       * Determines if a limit query needs to be refilled from cache, making it
       * ineligible for index-free execution.
       *
       * @param sortedPreviousResults The documents that matched the query when it
       * was last synchronized, sorted by the query's comparator.
       * @param remoteKeys The document keys that matched the query at the last
       * snapshot.
       * @param limboFreeSnapshotVersion The version of the snapshot when the query
       * was last synchronized.
       */
      t.prototype.yd = function (t, e, n, r) {
        // The query needs to be refilled if a previously matching document no
        // longer matches.
        if (n.size !== e.size) return !0; // Limit queries are not eligible for index-free query execution if there is
        // a potential that an older document from cache now sorts before a document
        // that was previously part of the limit. This, however, can only happen if
        // the document at the edge of the limit goes out of limit.
        // If a document that is not the limit boundary sorts differently,
        // the boundary of the limit itself did not change and documents from cache
        // will continue to be "rejected" by this boundary. Therefore, we can ignore
        // any modifications that don't affect the last document.

        var i = "F"
        /* First */
        === t ? e.last() : e.first();
        return !!i && (i.hasPendingWrites || i.version.S(r) > 0);
      }, t.prototype.Bf = function (t, e) {
        return le() <= r.LogLevel.DEBUG && de("IndexFreeQueryEngine", "Using full collection scan to execute query:", e.toString()), this.xf.Zn(t, e, g.min());
      }, t;
    }(),
        _i =
    /** @class */
    function () {
      function t(t, e) {
        this.jn = t, this.hh = e,
        /**
             * The set of all mutations that have been sent but not yet been applied to
             * the backend.
             */
        this.Wn = [],
        /** Next value to use when assigning sequential IDs to each mutation batch. */
        this.Uf = 1,
        /** The last received stream token from the server, used to acknowledge which
             * responses the client has processed. Stream tokens are opaque checkpoint
             * markers whose only real value is their inclusion in the next request.
             */
        this.lastStreamToken = A.ht,
        /** An ordered mapping between documents and the mutations batch IDs. */
        this.Qf = new Pt(rr.Xu);
      }

      return t.prototype.Go = function (t) {
        return xe.resolve(0 === this.Wn.length);
      }, t.prototype.zo = function (t, e, n) {
        var r = e.batchId,
            i = this.Wf(r, "acknowledged");
        return me(0 === i), // Verify that the batch in the queue is the one to be acknowledged.
        this.Wn[i], this.lastStreamToken = n, xe.resolve();
      }, t.prototype.Yo = function (t) {
        return xe.resolve(this.lastStreamToken);
      }, t.prototype.Jo = function (t, e) {
        return this.lastStreamToken = e, xe.resolve();
      }, t.prototype.Xo = function (t, e, n, r) {
        var i = this.Uf;
        this.Uf++, this.Wn.length > 0 && this.Wn[this.Wn.length - 1];
        var o = new ke(i, e, n, r);
        this.Wn.push(o); // Track references by document key and index collection parents.

        for (var s = 0, u = r; s < u.length; s++) {
          var a = u[s];
          this.Qf = this.Qf.add(new rr(a.key, i)), this.jn.Dr(t, a.key.path.L());
        }

        return xe.resolve(o);
      }, t.prototype.Zo = function (t, e) {
        return xe.resolve(this.jf(e));
      }, t.prototype.ea = function (t, e) {
        var n = e + 1,
            r = this.Kf(n),
            i = r < 0 ? 0 : r; // The requested batchId may still be out of range so normalize it to the
        // start of the queue.

        return xe.resolve(this.Wn.length > i ? this.Wn[i] : null);
      }, t.prototype.sa = function () {
        return xe.resolve(0 === this.Wn.length ? -1 : this.Uf - 1);
      }, t.prototype.ia = function (t) {
        return xe.resolve(this.Wn.slice());
      }, t.prototype.Gn = function (t, e) {
        var n = this,
            r = new rr(e, 0),
            i = new rr(e, Number.POSITIVE_INFINITY),
            o = [];
        return this.Qf.Ke([r, i], function (t) {
          var e = n.jf(t.oc);
          o.push(e);
        }), xe.resolve(o);
      }, t.prototype.Xn = function (t, e) {
        var n = this,
            r = new Pt(be);
        return e.forEach(function (t) {
          var e = new rr(t, 0),
              i = new rr(t, Number.POSITIVE_INFINITY);
          n.Qf.Ke([e, i], function (t) {
            r = r.add(t.oc);
          });
        }), xe.resolve(this.Gf(r));
      }, t.prototype.nr = function (t, e) {
        // Use the query path as a prefix for testing if a document matches the
        // query.
        var n = e.path,
            r = n.length + 1,
            i = n; // Construct a document reference for actually scanning the index. Unlike
        // the prefix the document key in this reference must have an even number of
        // segments. The empty segment can be used a suffix of the query path
        // because it precedes all other segments in an ordered traversal.

        _.et(i) || (i = i.child(""));
        var o = new rr(new _(i), 0),
            s = new Pt(be); // Find unique batchIDs referenced by all documents potentially matching the
        // query.

        return this.Qf.Ge(function (t) {
          var e = t.key.path;
          return !!n.q(e) && ( // Rows with document keys more than one segment longer than the query
          // path can't be matches. For example, a query on 'rooms' can't match
          // the document /rooms/abc/messages/xyx.
          // TODO(mcg): we'll need a different scanner when we implement
          // ancestor queries.
          e.length === r && (s = s.add(t.oc)), !0);
        }, o), xe.resolve(this.Gf(s));
      }, t.prototype.Gf = function (t) {
        var e = this,
            n = []; // Construct an array of matching batches, sorted by batchID to ensure that
        // multiple mutations affecting the same document key are applied in order.

        return t.forEach(function (t) {
          var r = e.jf(t);
          null !== r && n.push(r);
        }), n;
      }, t.prototype.ra = function (t, e) {
        var n = this;
        me(0 === this.Wf(e.batchId, "removed")), this.Wn.shift();
        var r = this.Qf;
        return xe.forEach(e.mutations, function (i) {
          var o = new rr(i.key, e.batchId);
          return r = r["delete"](o), n.hh.Bo(t, i.key);
        }).next(function () {
          n.Qf = r;
        });
      }, t.prototype.ha = function (t) {// No-op since the memory mutation queue does not maintain a separate cache.
      }, t.prototype.Ch = function (t, e) {
        var n = new rr(e, 0),
            r = this.Qf.ze(n);
        return xe.resolve(e.isEqual(r && r.key));
      }, t.prototype.oa = function (t) {
        return this.Wn.length, xe.resolve();
      },
      /**
       * Finds the index of the given batchId in the mutation queue and asserts that
       * the resulting index is within the bounds of the queue.
       *
       * @param batchId The batchId to search for
       * @param action A description of what the caller is doing, phrased in passive
       * form (e.g. "acknowledged" in a routine that acknowledges batches).
       */
      t.prototype.Wf = function (t, e) {
        return this.Kf(t);
      },
      /**
       * Finds the index of the given batchId in the mutation queue. This operation
       * is O(1).
       *
       * @return The computed index of the batch with the given batchId, based on
       * the state of the queue. Note this index can be negative if the requested
       * batchId has already been remvoed from the queue or past the end of the
       * queue if the batchId is larger than the last added batch.
       */
      t.prototype.Kf = function (t) {
        return 0 === this.Wn.length ? 0 : t - this.Wn[0].batchId; // Examine the front of the queue to figure out the difference between the
        // batchId and indexes in the array. Note that since the queue is ordered
        // by batchId, if the first batch has a larger batchId then the requested
        // batchId doesn't exist in the queue.
      },
      /**
       * A version of lookupMutationBatch that doesn't return a promise, this makes
       * other functions that uses this code easier to read and more efficent.
       */
      t.prototype.jf = function (t) {
        var e = this.Kf(t);
        return e < 0 || e >= this.Wn.length ? null : this.Wn[e];
      }, t;
    }(),
        Ti =
    /** @class */
    function () {
      /**
       * @param sizer Used to assess the size of a document. For eager GC, this is expected to just
       * return 0 to avoid unnecessarily doing the work of calculating the size.
       */
      function t(t, e) {
        this.jn = t, this.zf = e,
        /** Underlying cache of documents and their read times. */
        this.docs = new Lt(_.N),
        /** Size of all cached documents. */
        this.size = 0
        /**
        * Adds the supplied entry to the cache and updates the cache size as appropriate.
        *
        * All calls of `addEntry`  are required to go through the RemoteDocumentChangeBuffer
        * returned by `newChangeBuffer()`.
        */
        ;
      }

      return t.prototype.Nn = function (t, e, n) {
        var r = e.key,
            i = this.docs.get(r),
            o = i ? i.size : 0,
            s = this.zf(e);
        return this.docs = this.docs.Ae(r, {
          Mr: e,
          size: s,
          readTime: n
        }), this.size += s - o, this.jn.Dr(t, r.path.L());
      },
      /**
       * Removes the specified entry from the cache and updates the cache size as appropriate.
       *
       * All calls of `removeEntry` are required to go through the RemoteDocumentChangeBuffer
       * returned by `newChangeBuffer()`.
       */
      t.prototype.kn = function (t) {
        var e = this.docs.get(t);
        e && (this.docs = this.docs.remove(t), this.size -= e.size);
      }, t.prototype.Ln = function (t, e) {
        var n = this.docs.get(e);
        return xe.resolve(n ? n.Mr : null);
      }, t.prototype.getEntries = function (t, e) {
        var n = this,
            r = Mt();
        return e.forEach(function (t) {
          var e = n.docs.get(t);
          r = r.Ae(t, e ? e.Mr : null);
        }), xe.resolve(r);
      }, t.prototype.Zn = function (t, e, n) {
        for (var r = Ft(), i = new _(e.path.child("")), o = this.docs.ve(i) // Documents are ordered by key, so we can use a prefix scan to narrow down
        // the documents we need to match the query against.
        ; o.$e();) {
          var s = o.Ne(),
              u = s.key,
              a = s.value,
              h = a.Mr,
              c = a.readTime;
          if (!e.path.q(u.path)) break;
          c.S(n) <= 0 || h instanceof yt && e.matches(h) && (r = r.Ae(h.key, h));
        }

        return xe.resolve(r);
      }, t.prototype.Hf = function (t, e) {
        return xe.forEach(this.docs, function (t) {
          return e(t);
        });
      }, t.prototype.Yr = function (e) {
        // `trackRemovals` is ignores since the MemoryRemoteDocumentCache keeps
        // a separate changelog and does not need special handling for removals.
        return new t.Jr(this);
      }, t.prototype.Zr = function (t) {
        return xe.resolve(this.size);
      }, t;
    }();
    /**
     * Holds the state of a query target, including its target ID and whether the
     * target is 'not-current', 'current' or 'rejected'.
     */
    // Visible for testing

    /**
     * Handles the details of adding and updating documents in the MemoryRemoteDocumentCache.
     */


    Ti.Jr =
    /** @class */
    function (t) {
      function n(e) {
        var n = this;
        return (n = t.call(this) || this).th = e, n;
      }

      return e.__extends(n, t), n.prototype.xn = function (t) {
        var e = this,
            n = [];
        return this.Dn.forEach(function (r, i) {
          i ? n.push(e.th.Nn(t, i, e.readTime)) : e.th.kn(r);
        }), xe.vn(n);
      }, n.prototype.Mn = function (t, e) {
        return this.th.Ln(t, e);
      }, n.prototype.On = function (t, e) {
        return this.th.getEntries(t, e);
      }, n;
    }(Se);
    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */


    var Ii =
    /** @class */
    function () {
      function t(t) {
        this.persistence = t,
        /**
             * Maps a target to the data about that target
             */
        this.Yf = new Ae(function (t) {
          return t.canonicalId();
        }),
        /** The last received snapshot version. */
        this.lastRemoteSnapshotVersion = g.min(),
        /** The highest numbered target ID encountered. */
        this.highestTargetId = 0,
        /** The highest sequence number encountered. */
        this.Jf = 0,
        /**
             * A ordered bidirectional mapping between documents and the remote target
             * IDs.
             */
        this.Xf = new nr(), this.targetCount = 0, this.Zf = He.nh();
      }

      return t.prototype.js = function (t, e) {
        return this.Yf.forEach(function (t, n) {
          return e(n);
        }), xe.resolve();
      }, t.prototype._h = function (t) {
        return xe.resolve(this.lastRemoteSnapshotVersion);
      }, t.prototype.lh = function (t) {
        return xe.resolve(this.Jf);
      }, t.prototype.oh = function (t) {
        return this.highestTargetId = this.Zf.next(), xe.resolve(this.highestTargetId);
      }, t.prototype.dh = function (t, e, n) {
        return n && (this.lastRemoteSnapshotVersion = n), e > this.Jf && (this.Jf = e), xe.resolve();
      }, t.prototype.Th = function (t) {
        this.Yf.set(t.target, t);
        var e = t.targetId;
        e > this.highestTargetId && (this.Zf = new He(e), this.highestTargetId = e), t.sequenceNumber > this.Jf && (this.Jf = t.sequenceNumber);
      }, t.prototype.fh = function (t, e) {
        return this.Th(e), this.targetCount += 1, xe.resolve();
      }, t.prototype.Ih = function (t, e) {
        return this.Th(e), xe.resolve();
      }, t.prototype.wh = function (t, e) {
        return this.Yf["delete"](e.target), this.Xf.nc(e.targetId), this.targetCount -= 1, xe.resolve();
      }, t.prototype.Ah = function (t, e, n) {
        var r = this,
            i = 0,
            o = [];
        return this.Yf.forEach(function (s, u) {
          u.sequenceNumber <= e && null === n.get(u.targetId) && (r.Yf["delete"](s), o.push(r.Rh(t, u.targetId)), i++);
        }), xe.vn(o).next(function () {
          return i;
        });
      }, t.prototype.Vh = function (t) {
        return xe.resolve(this.targetCount);
      }, t.prototype.gh = function (t, e) {
        var n = this.Yf.get(e) || null;
        return xe.resolve(n);
      }, t.prototype.ph = function (t, e, n) {
        return this.Xf.ec(e, n), xe.resolve();
      }, t.prototype.bh = function (t, e, n) {
        this.Xf.ic(e, n);
        var r = this.persistence.hh,
            i = [];
        return r && e.forEach(function (e) {
          i.push(r.Bo(t, e));
        }), xe.vn(i);
      }, t.prototype.Rh = function (t, e) {
        return this.Xf.nc(e), xe.resolve();
      }, t.prototype.Sh = function (t, e) {
        var n = this.Xf.hc(e);
        return xe.resolve(n);
      }, t.prototype.Ch = function (t, e) {
        return xe.resolve(this.Xf.Ch(e));
      }, t;
    }(),
        Ni =
    /** @class */
    function () {
      /**
       * The constructor accepts a factory for creating a reference delegate. This
       * allows both the delegate and this instance to have strong references to
       * each other without having nullable fields that would then need to be
       * checked or asserted on every access.
       */
      function t(t) {
        var e = this;
        this.tT = {}, this.Bh = new Pe(0), this.qh = !1, this.qh = !0, this.hh = t(this), this.Yh = new Ii(this), this.jn = new Be(), this.Qn = new Ti(this.jn, function (t) {
          return e.hh.eT(t);
        });
      }

      return t.prototype.start = function () {
        return Promise.resolve();
      }, t.prototype.mo = function () {
        // No durable state to ensure is closed on shutdown.
        return this.qh = !1, Promise.resolve();
      }, Object.defineProperty(t.prototype, "ro", {
        get: function get() {
          return this.qh;
        },
        enumerable: !0,
        configurable: !0
      }), t.prototype.ho = function () {// No op.
      }, t.prototype.Fo = function () {
        return this.jn;
      }, t.prototype.vo = function (t) {
        var e = this.tT[t.s()];
        return e || (e = new _i(this.jn, this.hh), this.tT[t.s()] = e), e;
      }, t.prototype.Do = function () {
        return this.Yh;
      }, t.prototype.Co = function () {
        return this.Qn;
      }, t.prototype.runTransaction = function (t, e, n) {
        var r = this;
        de("MemoryPersistence", "Starting transaction:", t);
        var i = new Ai(this.Bh.next());
        return this.hh.sT(), n(i).next(function (t) {
          return r.hh.iT(i).next(function () {
            return t;
          });
        }).yn().then(function (t) {
          return i.Un(), t;
        });
      }, t.prototype.nT = function (t, e) {
        return xe.Sn(Object.values(this.tT).map(function (n) {
          return function () {
            return n.Ch(t, e);
          };
        }));
      }, t;
    }(),
        Ai =
    /** @class */
    function (t) {
      function n(e) {
        var n = this;
        return (n = t.call(this) || this).Oh = e, n;
      }

      return e.__extends(n, t), n;
    }(Le),
        ki =
    /** @class */
    function () {
      function t(t) {
        this.persistence = t,
        /** Tracks all documents that are active in Query views. */
        this.rT = new nr(),
        /** The list of documents that are potentially GCed after each transaction. */
        this.hT = null;
      }

      return t.oT = function (e) {
        return new t(e);
      }, Object.defineProperty(t.prototype, "aT", {
        get: function get() {
          if (this.hT) return this.hT;
          throw ge();
        },
        enumerable: !0,
        configurable: !0
      }), t.prototype.yh = function (t, e, n) {
        return this.rT.yh(n, e), this.aT["delete"](n), xe.resolve();
      }, t.prototype.vh = function (t, e, n) {
        return this.rT.vh(n, e), this.aT.add(n), xe.resolve();
      }, t.prototype.Bo = function (t, e) {
        return this.aT.add(e), xe.resolve();
      }, t.prototype.removeTarget = function (t, e) {
        var n = this;
        this.rT.nc(e.targetId).forEach(function (t) {
          return n.aT.add(t);
        });
        var r = this.persistence.Do();
        return r.Sh(t, e.targetId).next(function (t) {
          t.forEach(function (t) {
            return n.aT.add(t);
          });
        }).next(function () {
          return r.wh(t, e);
        });
      }, t.prototype.sT = function () {
        this.hT = new Set();
      }, t.prototype.iT = function (t) {
        var e = this,
            n = this.persistence.Co().Yr(); // Remove newly orphaned documents.

        return xe.forEach(this.aT, function (r) {
          return e.uT(t, r).next(function (t) {
            t || n.kn(r);
          });
        }).next(function () {
          return e.hT = null, n.apply(t);
        });
      }, t.prototype.Wo = function (t, e) {
        var n = this;
        return this.uT(t, e).next(function (t) {
          t ? n.aT["delete"](e) : n.aT.add(e);
        });
      }, t.prototype.eT = function (t) {
        // For eager GC, we don't care about the document size, there are no size thresholds.
        return 0;
      }, t.prototype.uT = function (t, e) {
        var n = this;
        return xe.Sn([function () {
          return xe.resolve(n.rT.Ch(e));
        }, function () {
          return n.persistence.Do().Ch(t, e);
        }, function () {
          return n.persistence.nT(t, e);
        }]);
      }, t;
    }(),
        Di =
    /** @class */
    function () {
      function t() {}

      return t.prototype.initialize = function (t) {
        return e.__awaiter(this, void 0, void 0, function () {
          var n = this;
          return e.__generator(this, function (e) {
            switch (e.label) {
              case 0:
                return this.Ud = this.cT(t), this.persistence = this._T(t), [4
                /*yield*/
                , this.persistence.start()];

              case 1:
                return e.sent(), this.lT = this.dT(t), this.N_ = this.fT(t), this.$d = this.TT(t), this.ol = this.ET(t), this.IT = this.wT(t), this.Ud.g_ = function (t) {
                  return n.ol.Dd(t, 1
                  /* SharedClientState */
                  );
                }, this.$d.ol = this.ol, [4
                /*yield*/
                , this.N_.start()];

              case 2:
                return e.sent(), [4
                /*yield*/
                , this.Ud.start()];

              case 3:
                return e.sent(), [4
                /*yield*/
                , this.$d.start()];

              case 4:
                return e.sent(), [4
                /*yield*/
                , this.$d.Vl(this.ol.tf)];

              case 5:
                return e.sent(), [2
                /*return*/
                ];
            }
          });
        });
      }, t.prototype.wT = function (t) {
        return new wi(this.ol);
      }, t.prototype.dT = function (t) {
        return null;
      }, t.prototype.fT = function (t) {
        return new Zn(this.persistence, new bi(), t.RT);
      }, t.prototype._T = function (t) {
        return new Ni(ki.oT);
      }, t.prototype.TT = function (t) {
        var e = this;
        return new Zr(this.N_, t.T_, t.Aa, function (t) {
          return e.ol.Dd(t, 0
          /* RemoteStore */
          );
        }, t.platform.AT());
      }, t.prototype.cT = function (t) {
        return new hi();
      }, t.prototype.ET = function (t) {
        return new vi(this.N_, this.$d, this.Ud, t.RT, t.Qd);
      }, t.prototype.clearPersistence = function (t) {
        throw new c(h.FAILED_PRECONDITION, "You are using the memory-only build of Firestore. Persistence support is only available via the @firebase/firestore bundle or the firebase-firestore.js build.");
      }, t;
    }(),
        xi =
    /** @class */
    function (t) {
      function n() {
        return null !== t && t.apply(this, arguments) || this;
      }

      return e.__extends(n, t), n.prototype.initialize = function (n) {
        return e.__awaiter(this, void 0, void 0, function () {
          var r = this;
          return e.__generator(this, function (i) {
            switch (i.label) {
              case 0:
                return [4
                /*yield*/
                , t.prototype.initialize.call(this, n)];

              case 1:
                // NOTE: This will immediately call the listener, so we make sure to
                // set it after localStore / remoteStore are started.
                return i.sent(), [4
                /*yield*/
                , this.persistence.no(function (t) {
                  return e.__awaiter(r, void 0, void 0, function () {
                    return e.__generator(this, function (e) {
                      switch (e.label) {
                        case 0:
                          return [4
                          /*yield*/
                          , this.ol.Vl(t)];

                        case 1:
                          return e.sent(), this.lT && (t && !this.lT.ro ? this.lT.start(this.N_) : t || this.lT.stop()), [2
                          /*return*/
                          ];
                      }
                    });
                  });
                })];

              case 2:
                // NOTE: This will immediately call the listener, so we make sure to
                // set it after localStore / remoteStore are started.
                return i.sent(), [2
                /*return*/
                ];
            }
          });
        });
      }, n.prototype.fT = function (t) {
        return new tr(this.persistence, new bi(), t.RT);
      }, n.prototype.ET = function (t) {
        var e = new gi(this.N_, this.$d, this.Ud, t.RT, t.Qd);
        return this.Ud instanceof ai && (this.Ud.ol = e), e;
      }, n.prototype.dT = function (t) {
        var e = this.persistence.hh.ko;
        return new Hn(e, t.Aa);
      }, n.prototype._T = function (t) {
        var e = sn.$o(t.mT),
            n = t.platform.bc(t.mT.ii);
        return new sn(t.PT.synchronizeTabs, e, t.clientId, t.platform, Jn.hu(t.PT.cacheSizeBytes), t.Aa, n, this.Ud);
      }, n.prototype.cT = function (t) {
        if (t.PT.VT && t.PT.synchronizeTabs) {
          if (!ai.Gh(t.platform)) throw new c(h.UNIMPLEMENTED, "IndexedDB persistence is only available on platforms that support LocalStorage.");
          var e = sn.$o(t.mT);
          return new ai(t.Aa, t.platform, e, t.clientId, t.RT);
        }

        return new hi();
      }, n.prototype.clearPersistence = function (t) {
        var e = sn.$o(t);
        return sn.clearPersistence(e);
      }, n;
    }(Di),
        Si =
    /** @class */
    function () {
      function t(t, e, n,
      /**
       * Asynchronous queue responsible for all of our internal processing. When
       * we get incoming work from the user (via public API) or the network
       * (incoming GRPC messages), we should always schedule onto this queue.
       * This ensures all of our work is properly serialized (e.g. we don't
       * start processing a new operation while the previous one is waiting for
       * an async I/O to complete).
       */
      r) {
        this.platform = t, this.mT = e, this.credentials = n, this.Aa = r, this.clientId = Ee.cn()
        /**
        * Starts up the FirestoreClient, returning only whether or not enabling
        * persistence succeeded.
        *
        * The intent here is to "do the right thing" as far as users are concerned.
        * Namely, in cases where offline persistence is requested and possible,
        * enable it, but otherwise fall back to persistence disabled. For the most
        * part we expect this to succeed one way or the other so we don't expect our
        * users to actually wait on the firestore.enablePersistence Promise since
        * they generally won't care.
        *
        * Of course some users actually do care about whether or not persistence
        * was successfully enabled, so the Promise returned from this method
        * indicates this outcome.
        *
        * This presents a problem though: even before enablePersistence resolves or
        * rejects, users may have made calls to e.g. firestore.collection() which
        * means that the FirestoreClient in there will be available and will be
        * enqueuing actions on the async queue.
        *
        * Meanwhile any failure of an operation on the async queue causes it to
        * panic and reject any further work, on the premise that unhandled errors
        * are fatal.
        *
        * Consequently the fallback is handled internally here in start, and if the
        * fallback succeeds we signal success to the async queue even though the
        * start() itself signals failure.
        *
        * @param componentProvider Provider that returns all core components.
        * @param persistenceSettings Settings object to configure offline
        *     persistence.
        * @returns A deferred result indicating the user-visible result of enabling
        *     offline persistence. This method will reject this if IndexedDB fails to
        *     start for any reason. If usePersistence is false this is
        *     unconditionally resolved.
        */
        ;
      }

      return t.prototype.start = function (t, e) {
        var n = this;
        this.gT(); // We defer our initialization until we get the current user from
        // setChangeListener(). We block the async queue until we got the initial
        // user and the initialization is completed. This will prevent any scheduled
        // work from happening before initialization is completed.
        // If initializationDone resolved then the FirestoreClient is in a usable
        // state.

        var r = new Ue(),
            i = new Ue(),
            o = !1; // If usePersistence is true, certain classes of errors while starting are
        // recoverable but only by falling back to persistence disabled.
        // If there's an error in the first case but not in recovery we cannot
        // reject the promise blocking the async queue because this will cause the
        // async queue to panic.
        // Return only the result of enabling persistence. Note that this does not
        // need to await the completion of initializationDone because the result of
        // this method should not reflect any other kind of failure to start.

        return this.credentials.l(function (s) {
          if (!o) return o = !0, de("FirestoreClient", "Initializing. user=", s.uid), n.pT(t, e, s, i).then(r.resolve, r.reject);
          n.Aa.Ua(function () {
            return n.Pl(s);
          });
        }), // Block the async queue until initialization is done
        this.Aa.uo(function () {
          return r.promise;
        }), i.promise;
      },
      /** Enables the network connection and requeues all pending operations. */
      t.prototype.enableNetwork = function () {
        var t = this;
        return this.gT(), this.Aa.enqueue(function () {
          return t.ol.enableNetwork();
        });
      },
      /**
       * Initializes persistent storage, attempting to use IndexedDB if
       * usePersistence is true or memory-only if false.
       *
       * If IndexedDB fails because it's already open in another tab or because the
       * platform can't possibly support our implementation then this method rejects
       * the persistenceResult and falls back on memory-only persistence.
       *
       * @param componentProvider The provider that provides all core componennts
       *     for IndexedDB or memory-backed persistence
       * @param persistenceSettings Settings object to configure offline persistence
       * @param user The initial user
       * @param persistenceResult A deferred result indicating the user-visible
       *     result of enabling offline persistence. This method will reject this if
       *     IndexedDB fails to start for any reason. If usePersistence is false
       *     this is unconditionally resolved.
       * @returns a Promise indicating whether or not initialization should
       *     continue, i.e. that one of the persistence implementations actually
       *     succeeded.
       */
      t.prototype.pT = function (t, n, r, i) {
        return e.__awaiter(this, void 0, void 0, function () {
          var o,
              s,
              u,
              a,
              h = this;
          return e.__generator(this, function (c) {
            switch (c.label) {
              case 0:
                return c.trys.push([0, 3,, 4]), [4
                /*yield*/
                , this.platform.yT(this.mT)];

              case 1:
                return o = c.sent(), s = this.platform.bc(this.mT.ii), u = function (t, e, n) {
                  return new Jr(t, e, n);
                }(o, this.credentials, s), [4
                /*yield*/
                , t.initialize({
                  Aa: this.Aa,
                  mT: this.mT,
                  platform: this.platform,
                  T_: u,
                  clientId: this.clientId,
                  RT: r,
                  Qd: 100,
                  PT: n
                })];

              case 2:
                return c.sent(), this.persistence = t.persistence, this.Ud = t.Ud, this.N_ = t.N_, this.$d = t.$d, this.ol = t.ol, this.lT = t.lT, this.bT = t.IT, // When a user calls clearPersistence() in one client, all other clients
                // need to be terminated to allow the delete to succeed.
                this.persistence.ho(function () {
                  return e.__awaiter(h, void 0, void 0, function () {
                    return e.__generator(this, function (t) {
                      switch (t.label) {
                        case 0:
                          return [4
                          /*yield*/
                          , this.terminate()];

                        case 1:
                          return t.sent(), [2
                          /*return*/
                          ];
                      }
                    });
                  });
                }), i.resolve(), [3
                /*break*/
                , 4];

              case 3:
                // An unknown failure on the first stage shuts everything down.
                if (a = c.sent(), // Regardless of whether or not the retry succeeds, from an user
                // perspective, offline persistence has failed.
                i.reject(a), !this.vT(a)) throw a;
                return [2
                /*return*/
                , (console.warn("Error enabling offline persistence. Falling back to persistence disabled: " + a), this.pT(new Di(), {
                  VT: !1
                }, r, i))];

              case 4:
                return [2
                /*return*/
                ];
            }
          });
        });
      },
      /**
       * Decides whether the provided error allows us to gracefully disable
       * persistence (as opposed to crashing the client).
       */
      t.prototype.vT = function (t) {
        return "FirebaseError" === t.name ? t.code === h.FAILED_PRECONDITION || t.code === h.UNIMPLEMENTED : !("undefined" != typeof DOMException && t instanceof DOMException) || // When the browser is out of quota we could get either quota exceeded
        // or an aborted error depending on whether the error happened during
        // schema migration.
        22 === t.code || 20 === t.code || // Firefox Private Browsing mode disables IndexedDb and returns
        // INVALID_STATE for any usage.
        11 === t.code;
      },
      /**
       * Checks that the client has not been terminated. Ensures that other methods on
       * this class cannot be called after the client is terminated.
       */
      t.prototype.gT = function () {
        if (this.Aa.La) throw new c(h.FAILED_PRECONDITION, "The client has already been terminated.");
      }, t.prototype.Pl = function (t) {
        return this.Aa.Wa(), de("FirestoreClient", "Credential Changed. Current user: " + t.uid), this.ol.Pl(t);
      },
      /** Disables the network connection. Pending operations will not complete. */
      t.prototype.disableNetwork = function () {
        var t = this;
        return this.gT(), this.Aa.enqueue(function () {
          return t.ol.disableNetwork();
        });
      }, t.prototype.terminate = function () {
        var t = this;
        return this.Aa.qa(function () {
          return e.__awaiter(t, void 0, void 0, function () {
            return e.__generator(this, function (t) {
              switch (t.label) {
                case 0:
                  // PORTING NOTE: LocalStore does not need an explicit shutdown on web.
                  return this.lT && this.lT.stop(), [4
                  /*yield*/
                  , this.$d.mo()];

                case 1:
                  return t.sent(), [4
                  /*yield*/
                  , this.Ud.mo()];

                case 2:
                  return t.sent(), [4
                  /*yield*/
                  , this.persistence.mo()];

                case 3:
                  // PORTING NOTE: LocalStore does not need an explicit shutdown on web.
                  return t.sent(), // `removeChangeListener` must be called after shutting down the
                  // RemoteStore as it will prevent the RemoteStore from retrieving
                  // auth tokens.
                  this.credentials.T(), [2
                  /*return*/
                  ];
              }
            });
          });
        });
      },
      /**
       * Returns a Promise that resolves when all writes that were pending at the time this
       * method was called received server acknowledgement. An acknowledgement can be either acceptance
       * or rejection.
       */
      t.prototype.waitForPendingWrites = function () {
        var t = this;
        this.gT();
        var e = new Ue();
        return this.Aa.uo(function () {
          return t.ol.lf(e);
        }), e.promise;
      }, t.prototype.listen = function (t, e, n) {
        var r = this;
        this.gT();
        var i = new Ei(t, e, n);
        return this.Aa.uo(function () {
          return r.bT.listen(i);
        }), i;
      }, t.prototype.rl = function (t) {
        var e = this; // Checks for termination but does not raise error, allowing unlisten after
        // termination to be a no-op.

        this.ST || this.Aa.uo(function () {
          return e.bT.rl(t);
        });
      }, t.prototype.DT = function (t) {
        return e.__awaiter(this, void 0, void 0, function () {
          var n,
              r = this;
          return e.__generator(this, function (i) {
            switch (i.label) {
              case 0:
                return this.gT(), n = new Ue(), [4
                /*yield*/
                , this.Aa.enqueue(function () {
                  return e.__awaiter(r, void 0, void 0, function () {
                    var r, i, o;
                    return e.__generator(this, function (e) {
                      switch (e.label) {
                        case 0:
                          return e.trys.push([0, 2,, 3]), [4
                          /*yield*/
                          , this.N_.Uu(t)];

                        case 1:
                          return (r = e.sent()) instanceof yt ? n.resolve(r) : r instanceof vt ? n.resolve(null) : n.reject(new c(h.UNAVAILABLE, "Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)")), [3
                          /*break*/
                          , 3];

                        case 2:
                          return i = e.sent(), o = Qn(i, "Failed to get document '" + t + " from cache"), n.reject(o), [3
                          /*break*/
                          , 3];

                        case 3:
                          return [2
                          /*return*/
                          ];
                      }
                    });
                  });
                })];

              case 1:
                return [2
                /*return*/
                , (i.sent(), n.promise)];
            }
          });
        });
      }, t.prototype.CT = function (t) {
        return e.__awaiter(this, void 0, void 0, function () {
          var n,
              r = this;
          return e.__generator(this, function (i) {
            switch (i.label) {
              case 0:
                return this.gT(), n = new Ue(), [4
                /*yield*/
                , this.Aa.enqueue(function () {
                  return e.__awaiter(r, void 0, void 0, function () {
                    var r, i, o, s, u, a;
                    return e.__generator(this, function (e) {
                      switch (e.label) {
                        case 0:
                          return e.trys.push([0, 2,, 3]), [4
                          /*yield*/
                          , this.N_.ju(t,
                          /* usePreviousResults= */
                          !0)];

                        case 1:
                          return r = e.sent(), i = new li(t, r.Ku), o = i.Vd(r.documents), s = i.xn(o,
                          /* updateLimboDocuments= */
                          !1), n.resolve(s.snapshot), [3
                          /*break*/
                          , 3];

                        case 2:
                          return u = e.sent(), a = Qn(u, "Failed to execute query '" + t + " against cache"), n.reject(a), [3
                          /*break*/
                          , 3];

                        case 3:
                          return [2
                          /*return*/
                          ];
                      }
                    });
                  });
                })];

              case 1:
                return [2
                /*return*/
                , (i.sent(), n.promise)];
            }
          });
        });
      }, t.prototype.write = function (t) {
        var e = this;
        this.gT();
        var n = new Ue();
        return this.Aa.uo(function () {
          return e.ol.write(t, n);
        }), n.promise;
      }, t.prototype.ii = function () {
        return this.mT.ii;
      }, t.prototype.Df = function (t) {
        var e = this;
        this.gT(), this.Aa.uo(function () {
          return e.bT.Df(t), Promise.resolve();
        });
      }, t.prototype.Cf = function (t) {
        var e = this; // Checks for shutdown but does not raise error, allowing remove after
        // shutdown to be a no-op.

        this.ST || this.Aa.uo(function () {
          return e.bT.Cf(t), Promise.resolve();
        });
      }, Object.defineProperty(t.prototype, "ST", {
        get: function get() {
          // Technically, the asyncQueue is still running, but only accepting operations
          // related to termination or supposed to be run after termination. It is effectively
          // terminated to the eyes of users.
          return this.Aa.La;
        },
        enumerable: !0,
        configurable: !0
      }), t.prototype.transaction = function (t) {
        var e = this;
        this.gT();
        var n = new Ue();
        return this.Aa.uo(function () {
          return e.ol.runTransaction(e.Aa, t, n), Promise.resolve();
        }), n.promise;
      }, t;
    }(),
        Ri =
    /** @class */
    function () {
      function t(t) {
        this.observer = t,
        /**
             * When set to true, will not raise future events. Necessary to deal with
             * async detachment of listener.
             */
        this.muted = !1;
      }

      return t.prototype.next = function (t) {
        this.FT(this.observer.next, t);
      }, t.prototype.error = function (t) {
        this.FT(this.observer.error, t);
      }, t.prototype.NT = function () {
        this.muted = !0;
      }, t.prototype.FT = function (t, e) {
        var n = this;
        this.muted || setTimeout(function () {
          n.muted || t(e);
        }, 0);
      }, t;
    }();
    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /**
     * A memory-backed instance of Persistence. Data is stored only in RAM and
     * not persisted across sessions.
     */

    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */


    function Li(t) {
      /**
      * Returns true if obj is an object and contains at least one of the specified
      * methods.
      */
      return function (t, e) {
        if ("object" != typeof t || null === t) return !1;

        for (var n = t, r = 0, i = ["next", "error", "complete"]; r < i.length; r++) {
          var o = i[r];
          if (o in n && "function" == typeof n[o]) return !0;
        }

        return !1;
      }(t);
    }

    var Oi =
    /** @class */
    function () {
      function t(t, e, n, r) {
        this.firestore = t, this.timestampsInSnapshots = e, this.$T = n, this.converter = r;
      }

      return t.prototype.kT = function (t) {
        switch (O(t)) {
          case 0
          /* NullValue */
          :
            return null;

          case 1
          /* BooleanValue */
          :
            return t.booleanValue;

          case 2
          /* NumberValue */
          :
            return j(t.integerValue || t.doubleValue);

          case 3
          /* TimestampValue */
          :
            return this.LT(t.timestampValue);

          case 4
          /* ServerTimestampValue */
          :
            return this.MT(t);

          case 5
          /* StringValue */
          :
            return t.stringValue;

          case 6
          /* BlobValue */
          :
            return new Ir(F(t.bytesValue));

          case 7
          /* RefValue */
          :
            return this.OT(t.referenceValue);

          case 8
          /* GeoPointValue */
          :
            return this.xT(t.geoPointValue);

          case 9
          /* ArrayValue */
          :
            return this.BT(t.arrayValue);

          case 10
          /* ObjectValue */
          :
            return this.qT(t.mapValue);

          default:
            throw ge();
        }
      }, t.prototype.qT = function (t) {
        var e = this,
            n = {};
        return I(t.fields || {}, function (t, r) {
          n[t] = e.kT(r);
        }), n;
      }, t.prototype.xT = function (t) {
        return new Or(j(t.latitude), j(t.longitude));
      }, t.prototype.BT = function (t) {
        var e = this;
        return (t.values || []).map(function (t) {
          return e.kT(t);
        });
      }, t.prototype.MT = function (t) {
        switch (this.$T) {
          case "previous":
            var e = function t(e) {
              var n = e.mapValue.fields.__previous_value__;
              return S(n) ? t(n) : n;
            }(t);

            return null == e ? null : this.kT(e);

          case "estimate":
            return this.LT(R(t));

          default:
            return null;
        }
      }, t.prototype.LT = function (t) {
        var e = M(t),
            n = new v(e.seconds, e.nanos);
        return this.timestampsInSnapshots ? n : n.toDate();
      }, t.prototype.OT = function (t) {
        var e = w.K(t);
        me(he(e));
        var n = new Ne(e.get(1), e.get(3)),
            r = new _(e.k(5));
        return n.isEqual(this.firestore.$c) || // TODO(b/64130202): Somehow support foreign references.
        ye("Document " + r + " contains a document reference within a different database (" + n.projectId + "/" + n.database + ") which is not supported. It will be treated as a reference in the current database (" + this.firestore.$c.projectId + "/" + this.firestore.$c.database + ") instead."), new Mi(r, this.firestore, this.converter);
      }, t;
    }(),
        Vi = Jn.uu,
        Pi =
    /** @class */
    function () {
      function t(t) {
        var e, n, r, i;

        if (void 0 === t.host) {
          if (void 0 !== t.ssl) throw new c(h.INVALID_ARGUMENT, "Can't provide ssl option if host option is not set");
          this.host = "firestore.googleapis.com", this.ssl = !0;
        } else cr("settings", "non-empty string", "host", t.host), this.host = t.host, fr("settings", "boolean", "ssl", t.ssl), this.ssl = null === (e = t.ssl) || void 0 === e || e;

        if (gr("settings", t, ["host", "ssl", "credentials", "timestampsInSnapshots", "cacheSizeBytes", "experimentalForceLongPolling", "ignoreUndefinedProperties"]), fr("settings", "object", "credentials", t.credentials), this.credentials = t.credentials, fr("settings", "boolean", "timestampsInSnapshots", t.timestampsInSnapshots), fr("settings", "boolean", "ignoreUndefinedProperties", t.ignoreUndefinedProperties), // Nobody should set timestampsInSnapshots anymore, but the error depends on
        // whether they set it to true or false...
        !0 === t.timestampsInSnapshots ? ye("The setting 'timestampsInSnapshots: true' is no longer required and should be removed.") : !1 === t.timestampsInSnapshots && ye("Support for 'timestampsInSnapshots: false' will be removed soon. You must update your code to handle Timestamp objects."), this.timestampsInSnapshots = null === (n = t.timestampsInSnapshots) || void 0 === n || n, this.ignoreUndefinedProperties = null !== (r = t.ignoreUndefinedProperties) && void 0 !== r && r, fr("settings", "number", "cacheSizeBytes", t.cacheSizeBytes), void 0 === t.cacheSizeBytes) this.cacheSizeBytes = Jn._u;else {
          if (t.cacheSizeBytes !== Vi && t.cacheSizeBytes < Jn.cu) throw new c(h.INVALID_ARGUMENT, "cacheSizeBytes must be at least " + Jn.cu);
          this.cacheSizeBytes = t.cacheSizeBytes;
        }
        fr("settings", "boolean", "experimentalForceLongPolling", t.experimentalForceLongPolling), this.forceLongPolling = null !== (i = t.experimentalForceLongPolling) && void 0 !== i && i;
      }

      return t.prototype.isEqual = function (t) {
        return this.host === t.host && this.ssl === t.ssl && this.timestampsInSnapshots === t.timestampsInSnapshots && this.credentials === t.credentials && this.cacheSizeBytes === t.cacheSizeBytes && this.forceLongPolling === t.forceLongPolling && this.ignoreUndefinedProperties === t.ignoreUndefinedProperties;
      }, t;
    }(),
        Ui =
    /** @class */
    function () {
      // Note: We are using `MemoryComponentProvider` as a default
      // ComponentProvider to ensure backwards compatibility with the format
      // expected by the console build.
      function t(n, r, i) {
        var o = this;

        if (void 0 === i && (i = new Di()), this.UT = null, // Public for use in tests.
        // TODO(mikelehen): Use modularized initialization instead.
        this.QT = new Wn(), this.INTERNAL = {
          "delete": function _delete() {
            return e.__awaiter(o, void 0, void 0, function () {
              return e.__generator(this, function (t) {
                switch (t.label) {
                  case 0:
                    // The client must be initalized to ensure that all subsequent API usage
                    // throws an exception.
                    return this.WT(), [4
                    /*yield*/
                    , this.jT.terminate()];

                  case 1:
                    // The client must be initalized to ensure that all subsequent API usage
                    // throws an exception.
                    return t.sent(), [2
                    /*return*/
                    ];
                }
              });
            });
          }
        }, "object" == typeof n.options) {
          // This is very likely a Firebase app object
          // TODO(b/34177605): Can we somehow use instanceof?
          var s = n;
          this.UT = s, this.$c = t.KT(s), this.GT = s.name, this.zT = new p(r);
        } else {
          var u = n;
          if (!u.projectId) throw new c(h.INVALID_ARGUMENT, "Must provide projectId");
          this.$c = new Ne(u.projectId, u.database), // Use a default persistenceKey that lines up with FirebaseApp.
          this.GT = "[DEFAULT]", this.zT = new l();
        }

        this.HT = i, this.YT = new Pi({});
      }

      return Object.defineProperty(t.prototype, "JT", {
        get: function get() {
          return this.XT || ( // Lazy initialize UserDataReader once the settings are frozen
          this.XT = new Mr(this.$c, this.YT.ignoreUndefinedProperties)), this.XT;
        },
        enumerable: !0,
        configurable: !0
      }), t.prototype.settings = function (t) {
        or("Firestore.settings", arguments, 1), ar("Firestore.settings", "object", 1, t);
        var e = new Pi(t);
        if (this.jT && !this.YT.isEqual(e)) throw new c(h.FAILED_PRECONDITION, "Firestore has already been started and its settings can no longer be changed. You can only call settings() before calling any other methods on a Firestore object.");
        this.YT = e, void 0 !== e.credentials && (this.zT = function (t) {
          if (!t) return new l();

          switch (t.type) {
            case "gapi":
              var e = t.ZT; // Make sure this really is a Gapi client.

              return me(!("object" != typeof e || null === e || !e.auth || !e.auth.getAuthHeaderValueForFirstParty)), new y(e, t.V || "0");

            case "provider":
              return t.ZT;

            default:
              throw new c(h.INVALID_ARGUMENT, "makeCredentialsProvider failed due to invalid credential type");
          }
        }(e.credentials));
      }, t.prototype.enableNetwork = function () {
        return this.WT(), this.jT.enableNetwork();
      }, t.prototype.disableNetwork = function () {
        return this.WT(), this.jT.disableNetwork();
      }, t.prototype.enablePersistence = function (t) {
        var e, n;
        if (this.jT) throw new c(h.FAILED_PRECONDITION, "Firestore has already been started and persistence can no longer be enabled. You can only call enablePersistence() before calling any other methods on a Firestore object.");
        var r = !1;
        return t && (void 0 !== t.experimentalTabSynchronization && ye("The 'experimentalTabSynchronization' setting will be removed. Use 'synchronizeTabs' instead."), r = null !== (n = null !== (e = t.synchronizeTabs) && void 0 !== e ? e : t.experimentalTabSynchronization) && void 0 !== n && n), this.tE(this.HT, {
          VT: !0,
          cacheSizeBytes: this.YT.cacheSizeBytes,
          synchronizeTabs: r
        });
      }, t.prototype.clearPersistence = function () {
        return e.__awaiter(this, void 0, void 0, function () {
          var t,
              n = this;
          return e.__generator(this, function (r) {
            if (void 0 !== this.jT && !this.jT.ST) throw new c(h.FAILED_PRECONDITION, "Persistence cannot be cleared after this Firestore instance is initialized.");
            return t = new Ue(), [2
            /*return*/
            , (this.QT.Ma(function () {
              return e.__awaiter(n, void 0, void 0, function () {
                var n, r;
                return e.__generator(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return e.trys.push([0, 2,, 3]), n = this.eE(), [4
                      /*yield*/
                      , this.HT.clearPersistence(n)];

                    case 1:
                      return e.sent(), t.resolve(), [3
                      /*break*/
                      , 3];

                    case 2:
                      return r = e.sent(), t.reject(r), [3
                      /*break*/
                      , 3];

                    case 3:
                      return [2
                      /*return*/
                      ];
                  }
                });
              });
            }), t.promise)];
          });
        });
      }, t.prototype.terminate = function () {
        return this.app._removeServiceInstance("firestore"), this.INTERNAL["delete"]();
      }, Object.defineProperty(t.prototype, "sE", {
        get: function get() {
          return this.WT(), this.jT.ST;
        },
        enumerable: !0,
        configurable: !0
      }), t.prototype.waitForPendingWrites = function () {
        return this.WT(), this.jT.waitForPendingWrites();
      }, t.prototype.onSnapshotsInSync = function (t) {
        if (this.WT(), Li(t)) return this.iE(t);
        ar("Firestore.onSnapshotsInSync", "function", 1, t);
        var e = {
          next: t
        };
        return this.iE(e);
      }, t.prototype.iE = function (t) {
        var e = this,
            n = new Ri({
          next: function next() {
            t.next && t.next();
          },
          error: function error(t) {
            throw ge();
          }
        });
        return this.jT.Df(n), function () {
          n.NT(), e.jT.Cf(n);
        };
      }, t.prototype.WT = function () {
        return this.jT || // Kick off starting the client but don't actually wait for it.
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this.tE(new Di(), {
          VT: !1
        }), this.jT;
      }, t.prototype.eE = function () {
        return new Ie(this.$c, this.GT, this.YT.host, this.YT.ssl, this.YT.forceLongPolling);
      }, t.prototype.tE = function (t, e) {
        var n = this.eE();
        return this.jT = new Si(ce.nt(), n, this.zT, this.QT), this.jT.start(t, e);
      }, t.KT = function (t) {
        if (e = t.options, "projectId", !Object.prototype.hasOwnProperty.call(e, "projectId")) throw new c(h.INVALID_ARGUMENT, '"projectId" not provided in firebase.initializeApp.');
        var e,
            n = t.options.projectId;
        /**
        * @license
        * Copyright 2017 Google LLC
        *
        * Licensed under the Apache License, Version 2.0 (the "License");
        * you may not use this file except in compliance with the License.
        * You may obtain a copy of the License at
        *
        *   http://www.apache.org/licenses/LICENSE-2.0
        *
        * Unless required by applicable law or agreed to in writing, software
        * distributed under the License is distributed on an "AS IS" BASIS,
        * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
        * See the License for the specific language governing permissions and
        * limitations under the License.
        */

        /**
        * Helper function to prevent instantiation through the constructor.
        *
        * This method creates a new constructor that throws when it's invoked.
        * The prototype of that constructor is then set to the prototype of the hidden
        * "class" to expose all the prototype methods and allow for instanceof
        * checks.
        *
        * To also make all the static methods available, all properties of the
        * original constructor are copied to the new constructor.
        */

        if (!n || "string" != typeof n) throw new c(h.INVALID_ARGUMENT, "projectId must be a string in FirebaseApp.options");
        return new Ne(n);
      }, Object.defineProperty(t.prototype, "app", {
        get: function get() {
          if (!this.UT) throw new c(h.FAILED_PRECONDITION, "Firestore was not initialized using the Firebase SDK. 'app' is not available");
          return this.UT;
        },
        enumerable: !0,
        configurable: !0
      }), t.prototype.collection = function (t) {
        return or("Firestore.collection", arguments, 1), ar("Firestore.collection", "non-empty string", 1, t), this.WT(), new Wi(w.K(t), this);
      }, t.prototype.doc = function (t) {
        return or("Firestore.doc", arguments, 1), ar("Firestore.doc", "non-empty string", 1, t), this.WT(), Mi.nE(w.K(t), this);
      }, t.prototype.collectionGroup = function (t) {
        if (or("Firestore.collectionGroup", arguments, 1), ar("Firestore.collectionGroup", "non-empty string", 1, t), t.indexOf("/") >= 0) throw new c(h.INVALID_ARGUMENT, "Invalid collection ID '" + t + "' passed to function Firestore.collectionGroup(). Collection IDs must not contain '/'.");
        return this.WT(), new zi(new wt(w.G, t), this);
      }, t.prototype.runTransaction = function (t) {
        var e = this;
        return or("Firestore.runTransaction", arguments, 1), ar("Firestore.runTransaction", "function", 1, t), this.WT().transaction(function (n) {
          return t(new Ci(e, n));
        });
      }, t.prototype.batch = function () {
        return this.WT(), new qi(this);
      }, Object.defineProperty(t, "logLevel", {
        get: function get() {
          switch (le()) {
            case r.LogLevel.DEBUG:
              return "debug";

            case r.LogLevel.SILENT:
              return "silent";

            default:
              // The default log level is error
              return "error";
          }
        },
        enumerable: !0,
        configurable: !0
      }), t.setLogLevel = function (t) {
        switch (or("Firestore.setLogLevel", arguments, 1), ar("Firestore.setLogLevel", "non-empty string", 1, t), t) {
          case "debug":
            pe(r.LogLevel.DEBUG);
            break;

          case "error":
            pe(r.LogLevel.ERROR);
            break;

          case "silent":
            pe(r.LogLevel.SILENT);
            break;

          default:
            throw new c(h.INVALID_ARGUMENT, "Invalid log level: " + t);
        }
      }, // Note: this is not a property because the minifier can't work correctly with
      // the way TypeScript compiler outputs properties.
      t.prototype.rE = function () {
        return this.YT.timestampsInSnapshots;
      }, t;
    }(),
        Ci =
    /** @class */
    function () {
      function t(t, e) {
        this.hE = t, this.oE = e;
      }

      return t.prototype.get = function (t) {
        var e = this;
        or("Transaction.get", arguments, 1);
        var n = $i("Transaction.get", t, this.hE);
        return this.oE.A_([n.kc]).then(function (t) {
          if (!t || 1 !== t.length) return ge();
          var r = t[0];
          if (r instanceof vt) return new Fi(e.hE, n.kc, null,
          /* fromCache= */
          !1,
          /* hasPendingWrites= */
          !1, n.aE);
          if (r instanceof yt) return new Fi(e.hE, n.kc, r,
          /* fromCache= */
          !1,
          /* hasPendingWrites= */
          !1, n.aE);
          throw ge();
        });
      }, t.prototype.set = function (t, e, n) {
        ur("Transaction.set", arguments, 2, 3);
        var r = $i("Transaction.set", t, this.hE);
        n = Qi("Transaction.set", n);
        var i = Hi(r.aE, e, "Transaction.set"),
            o = i[0],
            s = i[1],
            u = n.merge || n.mergeFields ? this.hE.JT.Dc(s, o, n.mergeFields) : this.hE.JT.vc(s, o);
        return this.oE.set(r.kc, u), this;
      }, t.prototype.update = function (t, e, n) {
        for (var r, i, o = [], s = 3; s < arguments.length; s++) {
          o[s - 3] = arguments[s];
        }

        return "string" == typeof e || e instanceof Nr ? (sr("Transaction.update", arguments, 3), r = $i("Transaction.update", t, this.hE), i = this.hE.JT.Fc("Transaction.update", e, n, o)) : (or("Transaction.update", arguments, 2), r = $i("Transaction.update", t, this.hE), i = this.hE.JT.Cc("Transaction.update", e)), this.oE.update(r.kc, i), this;
      }, t.prototype["delete"] = function (t) {
        or("Transaction.delete", arguments, 1);
        var e = $i("Transaction.delete", t, this.hE);
        return this.oE["delete"](e.kc), this;
      }, t;
    }(),
        qi =
    /** @class */
    function () {
      function t(t) {
        this.hE = t, this.uE = [], this.cE = !1;
      }

      return t.prototype.set = function (t, e, n) {
        ur("WriteBatch.set", arguments, 2, 3), this._E();
        var r = $i("WriteBatch.set", t, this.hE);
        n = Qi("WriteBatch.set", n);
        var i = Hi(r.aE, e, "WriteBatch.set"),
            o = i[0],
            s = i[1],
            u = n.merge || n.mergeFields ? this.hE.JT.Dc(s, o, n.mergeFields) : this.hE.JT.vc(s, o);
        return this.uE = this.uE.concat(u.Ac(r.kc, nt.ft())), this;
      }, t.prototype.update = function (t, e, n) {
        for (var r, i, o = [], s = 3; s < arguments.length; s++) {
          o[s - 3] = arguments[s];
        }

        return this._E(), "string" == typeof e || e instanceof Nr ? (sr("WriteBatch.update", arguments, 3), r = $i("WriteBatch.update", t, this.hE), i = this.hE.JT.Fc("WriteBatch.update", e, n, o)) : (or("WriteBatch.update", arguments, 2), r = $i("WriteBatch.update", t, this.hE), i = this.hE.JT.Cc("WriteBatch.update", e)), this.uE = this.uE.concat(i.Ac(r.kc, nt.exists(!0))), this;
      }, t.prototype["delete"] = function (t) {
        or("WriteBatch.delete", arguments, 1), this._E();
        var e = $i("WriteBatch.delete", t, this.hE);
        return this.uE = this.uE.concat(new ut(e.kc, nt.ft())), this;
      }, t.prototype.commit = function () {
        return this._E(), this.cE = !0, this.uE.length > 0 ? this.hE.WT().write(this.uE) : Promise.resolve();
      }, t.prototype._E = function () {
        if (this.cE) throw new c(h.FAILED_PRECONDITION, "A write batch can no longer be used after commit() has been called.");
      }, t;
    }(),
        Mi =
    /** @class */
    function () {
      function t(t, e, n) {
        this.kc = t, this.firestore = e, this.aE = n, this.jT = this.firestore.WT();
      }

      return t.nE = function (e, n, r) {
        if (e.length % 2 != 0) throw new c(h.INVALID_ARGUMENT, "Invalid document reference. Document references must have an even number of segments, but " + e.j() + " has " + e.length);
        return new t(new _(e), n, r);
      }, Object.defineProperty(t.prototype, "id", {
        get: function get() {
          return this.kc.path.O();
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(t.prototype, "parent", {
        get: function get() {
          return new Wi(this.kc.path.L(), this.firestore, this.aE);
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(t.prototype, "path", {
        get: function get() {
          return this.kc.path.j();
        },
        enumerable: !0,
        configurable: !0
      }), t.prototype.collection = function (t) {
        if (or("DocumentReference.collection", arguments, 1), ar("DocumentReference.collection", "non-empty string", 1, t), !t) throw new c(h.INVALID_ARGUMENT, "Must provide a non-empty collection name to collection()");
        var e = w.K(t);
        return new Wi(this.kc.path.child(e), this.firestore);
      }, t.prototype.isEqual = function (e) {
        if (!(e instanceof t)) throw mr("isEqual", "DocumentReference", 1, e);
        return this.firestore === e.firestore && this.kc.isEqual(e.kc) && this.aE === e.aE;
      }, t.prototype.set = function (t, e) {
        ur("DocumentReference.set", arguments, 1, 2), e = Qi("DocumentReference.set", e);
        var n = Hi(this.aE, t, "DocumentReference.set"),
            r = n[0],
            i = n[1],
            o = e.merge || e.mergeFields ? this.firestore.JT.Dc(i, r, e.mergeFields) : this.firestore.JT.vc(i, r);
        return this.jT.write(o.Ac(this.kc, nt.ft()));
      }, t.prototype.update = function (t, e) {
        for (var n, r = [], i = 2; i < arguments.length; i++) {
          r[i - 2] = arguments[i];
        }

        return "string" == typeof t || t instanceof Nr ? (sr("DocumentReference.update", arguments, 2), n = this.firestore.JT.Fc("DocumentReference.update", t, e, r)) : (or("DocumentReference.update", arguments, 1), n = this.firestore.JT.Cc("DocumentReference.update", t)), this.jT.write(n.Ac(this.kc, nt.exists(!0)));
      }, t.prototype["delete"] = function () {
        return or("DocumentReference.delete", arguments, 0), this.jT.write([new ut(this.kc, nt.ft())]);
      }, t.prototype.onSnapshot = function () {
        for (var t = [], e = 0; e < arguments.length; e++) {
          t[e] = arguments[e];
        }

        ur("DocumentReference.onSnapshot", arguments, 1, 4);
        var n,
            r = {
          includeMetadataChanges: !1
        },
            i = 0;
        "object" != typeof t[i] || Li(t[i]) || (gr("DocumentReference.onSnapshot", r = t[i], ["includeMetadataChanges"]), fr("DocumentReference.onSnapshot", "boolean", "includeMetadataChanges", r.includeMetadataChanges), i++);
        var o = {
          includeMetadataChanges: r.includeMetadataChanges
        };
        return Li(t[i]) ? n = t[i] : (ar("DocumentReference.onSnapshot", "function", i, t[i]), hr("DocumentReference.onSnapshot", "function", i + 1, t[i + 1]), hr("DocumentReference.onSnapshot", "function", i + 2, t[i + 2]), n = {
          next: t[i],
          error: t[i + 1],
          complete: t[i + 2]
        }), this.lE(o, n);
      }, t.prototype.lE = function (t, e) {
        var n = this,
            r = function r(t) {
          console.error("Uncaught Error in onSnapshot:", t);
        };

        e.error && (r = e.error.bind(e));
        var i = new Ri({
          next: function next(t) {
            if (e.next) {
              var r = t.docs.get(n.kc);
              e.next(new Fi(n.firestore, n.kc, r, t.fromCache, t.hasPendingWrites, n.aE));
            }
          },
          error: r
        }),
            o = this.jT.listen(wt.Wt(this.kc.path), i, t);
        return function () {
          i.NT(), n.jT.rl(o);
        };
      }, t.prototype.get = function (t) {
        var e = this;
        return ur("DocumentReference.get", arguments, 0, 1), Yi("DocumentReference.get", t), new Promise(function (n, r) {
          t && "cache" === t.source ? e.firestore.WT().DT(e.kc).then(function (t) {
            n(new Fi(e.firestore, e.kc, t,
            /*fromCache=*/
            !0, t instanceof yt && t.At, e.aE));
          }, r) : e.dE(n, r, t);
        });
      }, t.prototype.dE = function (t, e, n) {
        var r = this.lE({
          includeMetadataChanges: !0,
          Of: !0
        }, {
          next: function next(i) {
            // Remove query first before passing event to user to avoid
            // user actions affecting the now stale query.
            r(), !i.exists && i.metadata.fromCache ? // TODO(dimond): If we're online and the document doesn't
            // exist then we resolve with a doc.exists set to false. If
            // we're offline however, we reject the Promise in this
            // case. Two options: 1) Cache the negative response from
            // the server so we can deliver that even when you're
            // offline 2) Actually reject the Promise in the online case
            // if the document doesn't exist.
            e(new c(h.UNAVAILABLE, "Failed to get document because the client is offline.")) : i.exists && i.metadata.fromCache && n && "server" === n.source ? e(new c(h.UNAVAILABLE, 'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')) : t(i);
          },
          error: e
        });
      }, t.prototype.withConverter = function (e) {
        return new t(this.kc, this.firestore, e);
      }, t;
    }(),
        ji =
    /** @class */
    function () {
      function t(t, e) {
        this.hasPendingWrites = t, this.fromCache = e;
      }

      return t.prototype.isEqual = function (t) {
        return this.hasPendingWrites === t.hasPendingWrites && this.fromCache === t.fromCache;
      }, t;
    }(),
        Fi =
    /** @class */
    function () {
      function t(t, e, n, r, i, o) {
        this.hE = t, this.kc = e, this.fE = n, this.TE = r, this.EE = i, this.aE = o;
      }

      return t.prototype.data = function (t) {
        if (ur("DocumentSnapshot.data", arguments, 0, 1), t = Ki("DocumentSnapshot.data", t), this.fE) {
          // We only want to use the converter and create a new DocumentSnapshot
          // if a converter has been provided.
          if (this.aE) {
            var e = new Bi(this.hE, this.kc, this.fE, this.TE, this.EE);
            return this.aE.fromFirestore(e, t);
          }

          return new Oi(this.hE, this.hE.rE(), t.serverTimestamps,
          /* converter= */
          void 0).kT(this.fE.Lt());
        }
      }, t.prototype.get = function (t, e) {
        if (ur("DocumentSnapshot.get", arguments, 1, 2), e = Ki("DocumentSnapshot.get", e), this.fE) {
          var n = this.fE.data().field(Gr("DocumentSnapshot.get", t));
          if (null !== n) return new Oi(this.hE, this.hE.rE(), e.serverTimestamps, this.aE).kT(n);
        }
      }, Object.defineProperty(t.prototype, "id", {
        get: function get() {
          return this.kc.path.O();
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(t.prototype, "ref", {
        get: function get() {
          return new Mi(this.kc, this.hE, this.aE);
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(t.prototype, "exists", {
        get: function get() {
          return null !== this.fE;
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(t.prototype, "metadata", {
        get: function get() {
          return new ji(this.EE, this.TE);
        },
        enumerable: !0,
        configurable: !0
      }), t.prototype.isEqual = function (e) {
        if (!(e instanceof t)) throw mr("isEqual", "DocumentSnapshot", 1, e);
        return this.hE === e.hE && this.TE === e.TE && this.kc.isEqual(e.kc) && (null === this.fE ? null === e.fE : this.fE.isEqual(e.fE)) && this.aE === e.aE;
      }, t;
    }(),
        Bi =
    /** @class */
    function (t) {
      function n() {
        return null !== t && t.apply(this, arguments) || this;
      }

      return e.__extends(n, t), n.prototype.data = function (e) {
        return t.prototype.data.call(this, e);
      }, n;
    }(Fi),
        zi =
    /** @class */
    function () {
      function t(t, e, n) {
        this.IE = t, this.firestore = e, this.aE = n;
      }

      return t.prototype.where = function (e, n, r) {
        or("Query.where", arguments, 3), vr("Query.where", 3, r); // Enumerated from the WhereFilterOp type in index.d.ts.

        var i,
            o = function (t, e, n, r) {
          if (!e.some(function (t) {
            return t === r;
          })) throw new c(h.INVALID_ARGUMENT, "Invalid value " + yr(r) + " provided to function Query.where() for its " + Er(2) + " argument. Acceptable values: " + e.join(", "));
          return r;
        }(0, ["<"
        /* LESS_THAN */
        , "<="
        /* LESS_THAN_OR_EQUAL */
        , "=="
        /* EQUAL */
        , ">="
        /* GREATER_THAN_OR_EQUAL */
        , ">"
        /* GREATER_THAN */
        , "array-contains"
        /* ARRAY_CONTAINS */
        , "in"
        /* IN */
        , "array-contains-any"
        /* ARRAY_CONTAINS_ANY */
        ], 0, n),
            s = Gr("Query.where", e);

        if (s.Y()) {
          if ("array-contains"
          /* ARRAY_CONTAINS */
          === o || "array-contains-any"
          /* ARRAY_CONTAINS_ANY */
          === o) throw new c(h.INVALID_ARGUMENT, "Invalid Query. You can't perform '" + o + "' queries on FieldPath.documentId().");

          if ("in"
          /* IN */
          === o) {
            this.wE(r, o);

            for (var u = [], a = 0, f = r; a < f.length; a++) {
              var l = f[a];
              u.push(this.RE(l));
            }

            i = {
              arrayValue: {
                values: u
              }
            };
          } else i = this.RE(r);
        } else "in"
        /* IN */
        !== o && "array-contains-any"
        /* ARRAY_CONTAINS_ANY */
        !== o || this.wE(r, o), i = this.firestore.JT.Nc("Query.where", r, // We only allow nested arrays for IN queries.

        /** allowArrays = */
        "in"
        /* IN */
        === o);

        var p = Et.create(s, o, i);
        return this.AE(p), new t(this.IE.Gt(p), this.firestore, this.aE);
      }, t.prototype.orderBy = function (e, n) {
        var r;
        if (ur("Query.orderBy", arguments, 1, 2), hr("Query.orderBy", "non-empty string", 2, n), void 0 === n || "asc" === n) r = "asc"
        /* ASCENDING */
        ;else {
          if ("desc" !== n) throw new c(h.INVALID_ARGUMENT, "Function Query.orderBy() has unknown direction '" + n + "', expected 'asc' or 'desc'.");
          r = "desc"
          /* DESCENDING */
          ;
        }
        if (null !== this.IE.startAt) throw new c(h.INVALID_ARGUMENT, "Invalid query. You must not call Query.startAt() or Query.startAfter() before calling Query.orderBy().");
        if (null !== this.IE.endAt) throw new c(h.INVALID_ARGUMENT, "Invalid query. You must not call Query.endAt() or Query.endBefore() before calling Query.orderBy().");
        var i = Gr("Query.orderBy", e),
            o = new kt(i, r);
        return this.mE(o), new t(this.IE.zt(o), this.firestore, this.aE);
      }, t.prototype.limit = function (e) {
        return or("Query.limit", arguments, 1), ar("Query.limit", "number", 1, e), wr("Query.limit", 1, e), new t(this.IE.Ht(e), this.firestore, this.aE);
      }, t.prototype.limitToLast = function (e) {
        return or("Query.limitToLast", arguments, 1), ar("Query.limitToLast", "number", 1, e), wr("Query.limitToLast", 1, e), new t(this.IE.Yt(e), this.firestore, this.aE);
      }, t.prototype.startAt = function (e) {
        for (var n = [], r = 1; r < arguments.length; r++) {
          n[r - 1] = arguments[r];
        }

        sr("Query.startAt", arguments, 1);
        var i = this.PE("Query.startAt", e, n,
        /*before=*/
        !0);
        return new t(this.IE.Jt(i), this.firestore, this.aE);
      }, t.prototype.startAfter = function (e) {
        for (var n = [], r = 1; r < arguments.length; r++) {
          n[r - 1] = arguments[r];
        }

        sr("Query.startAfter", arguments, 1);
        var i = this.PE("Query.startAfter", e, n,
        /*before=*/
        !1);
        return new t(this.IE.Jt(i), this.firestore, this.aE);
      }, t.prototype.endBefore = function (e) {
        for (var n = [], r = 1; r < arguments.length; r++) {
          n[r - 1] = arguments[r];
        }

        sr("Query.endBefore", arguments, 1);
        var i = this.PE("Query.endBefore", e, n,
        /*before=*/
        !0);
        return new t(this.IE.Xt(i), this.firestore, this.aE);
      }, t.prototype.endAt = function (e) {
        for (var n = [], r = 1; r < arguments.length; r++) {
          n[r - 1] = arguments[r];
        }

        sr("Query.endAt", arguments, 1);
        var i = this.PE("Query.endAt", e, n,
        /*before=*/
        !1);
        return new t(this.IE.Xt(i), this.firestore, this.aE);
      }, t.prototype.isEqual = function (e) {
        if (!(e instanceof t)) throw mr("isEqual", "Query", 1, e);
        return this.firestore === e.firestore && this.IE.isEqual(e.IE);
      }, t.prototype.withConverter = function (e) {
        return new t(this.IE, this.firestore, e);
      },
      /** Helper function to create a bound from a document or fields */
      t.prototype.PE = function (t, e, n, r) {
        if (vr(t, 1, e), e instanceof Fi) {
          if (n.length > 0) throw new c(h.INVALID_ARGUMENT, "Too many arguments provided to " + t + "().");
          var i = e;
          if (!i.exists) throw new c(h.NOT_FOUND, "Can't use a DocumentSnapshot that doesn't exist for " + t + "().");
          return this.VE(i.fE, r);
        }

        var o = [e].concat(n);
        return this.gE(t, o, r);
      },
      /**
       * Create a Bound from a query and a document.
       *
       * Note that the Bound will always include the key of the document
       * and so only the provided document will compare equal to the returned
       * position.
       *
       * Will throw if the document does not contain all fields of the order by
       * of the query or if any of the fields in the order by are an uncommitted
       * server timestamp.
       */
      t.prototype.VE = function (t, e) {
        // Because people expect to continue/end a query at the exact document
        // provided, we need to use the implicit sort order rather than the explicit
        // sort order, because it's guaranteed to contain the document key. That way
        // the position becomes unambiguous and the query continues/ends exactly at
        // the provided document. Without the key (by using the explicit sort
        // orders), multiple documents could match the position, yielding duplicate
        // results.
        for (var n = [], r = 0, i = this.IE.orderBy; r < i.length; r++) {
          var o = i[r];
          if (o.field.Y()) n.push(B(this.firestore.$c, t.key));else {
            var s = t.field(o.field);
            if (S(s)) throw new c(h.INVALID_ARGUMENT, 'Invalid query. You are trying to start or end a query using a document for which the field "' + o.field + '" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');

            if (null === s) {
              var u = o.field.j();
              throw new c(h.INVALID_ARGUMENT, "Invalid query. You are trying to start or end a query using a document for which the field '" + u + "' (used as the orderBy) does not exist.");
            }

            n.push(s);
          }
        }

        return new At(n, e);
      },
      /**
       * Converts a list of field values to a Bound for the given query.
       */
      t.prototype.gE = function (t, e, n) {
        // Use explicit order by's because it has to match the query the user made
        var r = this.IE.xt;
        if (e.length > r.length) throw new c(h.INVALID_ARGUMENT, "Too many arguments provided to " + t + "(). The number of arguments must be less than or equal to the number of Query.orderBy() clauses");

        for (var i = [], o = 0; o < e.length; o++) {
          var s = e[o];

          if (r[o].field.Y()) {
            if ("string" != typeof s) throw new c(h.INVALID_ARGUMENT, "Invalid query. Expected a string for document ID in " + t + "(), but got a " + typeof s);
            if (!this.IE._e() && -1 !== s.indexOf("/")) throw new c(h.INVALID_ARGUMENT, "Invalid query. When querying a collection and ordering by FieldPath.documentId(), the value passed to " + t + "() must be a plain document ID, but '" + s + "' contains a slash.");
            var u = this.IE.path.child(w.K(s));
            if (!_.et(u)) throw new c(h.INVALID_ARGUMENT, "Invalid query. When querying a collection group and ordering by FieldPath.documentId(), the value passed to " + t + "() must result in a valid document path, but '" + u + "' is not because it contains an odd number of segments.");
            var a = new _(u);
            i.push(B(this.firestore.$c, a));
          } else {
            var f = this.firestore.JT.Nc(t, s);
            i.push(f);
          }
        }

        return new At(i, n);
      }, t.prototype.onSnapshot = function () {
        for (var t = [], e = 0; e < arguments.length; e++) {
          t[e] = arguments[e];
        }

        ur("Query.onSnapshot", arguments, 1, 4);
        var n,
            r = {},
            i = 0;
        return "object" != typeof t[i] || Li(t[i]) || (gr("Query.onSnapshot", r = t[i], ["includeMetadataChanges"]), fr("Query.onSnapshot", "boolean", "includeMetadataChanges", r.includeMetadataChanges), i++), Li(t[i]) ? n = t[i] : (ar("Query.onSnapshot", "function", i, t[i]), hr("Query.onSnapshot", "function", i + 1, t[i + 1]), hr("Query.onSnapshot", "function", i + 2, t[i + 2]), n = {
          next: t[i],
          error: t[i + 1],
          complete: t[i + 2]
        }), this.pE(this.IE), this.lE(r, n);
      }, t.prototype.lE = function (t, e) {
        var n = this,
            r = function r(t) {
          console.error("Uncaught Error in onSnapshot:", t);
        };

        e.error && (r = e.error.bind(e));
        var i = new Ri({
          next: function next(t) {
            e.next && e.next(new Gi(n.firestore, n.IE, t, n.aE));
          },
          error: r
        }),
            o = this.firestore.WT(),
            s = o.listen(this.IE, i, t);
        return function () {
          i.NT(), o.rl(s);
        };
      }, t.prototype.pE = function (t) {
        if (t.ae() && 0 === t.xt.length) throw new c(h.UNIMPLEMENTED, "limitToLast() queries require specifying at least one orderBy() clause");
      }, t.prototype.get = function (t) {
        var e = this;
        return ur("Query.get", arguments, 0, 1), Yi("Query.get", t), this.pE(this.IE), new Promise(function (n, r) {
          t && "cache" === t.source ? e.firestore.WT().CT(e.IE).then(function (t) {
            n(new Gi(e.firestore, e.IE, t, e.aE));
          }, r) : e.dE(n, r, t);
        });
      }, t.prototype.dE = function (t, e, n) {
        var r = this.lE({
          includeMetadataChanges: !0,
          Of: !0
        }, {
          next: function next(i) {
            // Remove query first before passing event to user to avoid
            // user actions affecting the now stale query.
            r(), i.metadata.fromCache && n && "server" === n.source ? e(new c(h.UNAVAILABLE, 'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')) : t(i);
          },
          error: e
        });
      },
      /**
       * Parses the given documentIdValue into a ReferenceValue, throwing
       * appropriate errors if the value is anything other than a DocumentReference
       * or String, or if the string is malformed.
       */
      t.prototype.RE = function (t) {
        if ("string" == typeof t) {
          if ("" === t) throw new c(h.INVALID_ARGUMENT, "Invalid query. When querying with FieldPath.documentId(), you must provide a valid document ID, but it was an empty string.");
          if (!this.IE._e() && -1 !== t.indexOf("/")) throw new c(h.INVALID_ARGUMENT, "Invalid query. When querying a collection by FieldPath.documentId(), you must provide a plain document ID, but '" + t + "' contains a '/' character.");
          var e = this.IE.path.child(w.K(t));
          if (!_.et(e)) throw new c(h.INVALID_ARGUMENT, "Invalid query. When querying a collection group by FieldPath.documentId(), the value provided must result in a valid document path, but '" + e + "' is not because it has an odd number of segments (" + e.length + ").");
          return B(this.firestore.$c, new _(e));
        }

        if (t instanceof Mi) {
          var n = t;
          return B(this.firestore.$c, n.kc);
        }

        throw new c(h.INVALID_ARGUMENT, "Invalid query. When querying with FieldPath.documentId(), you must provide a valid string or a DocumentReference, but it was: " + yr(t) + ".");
      },
      /**
       * Validates that the value passed into a disjunctrive filter satisfies all
       * array requirements.
       */
      t.prototype.wE = function (t, e) {
        if (!Array.isArray(t) || 0 === t.length) throw new c(h.INVALID_ARGUMENT, "Invalid Query. A non-empty array is required for '" + e.toString() + "' filters.");
        if (t.length > 10) throw new c(h.INVALID_ARGUMENT, "Invalid Query. '" + e.toString() + "' filters support a maximum of 10 elements in the value array.");
        if (t.indexOf(null) >= 0) throw new c(h.INVALID_ARGUMENT, "Invalid Query. '" + e.toString() + "' filters cannot contain 'null' in the value array.");
        if (t.filter(function (t) {
          return Number.isNaN(t);
        }).length > 0) throw new c(h.INVALID_ARGUMENT, "Invalid Query. '" + e.toString() + "' filters cannot contain 'NaN' in the value array.");
      }, t.prototype.AE = function (t) {
        if (t instanceof Et) {
          var e = ["array-contains"
          /* ARRAY_CONTAINS */
          , "array-contains-any"
          /* ARRAY_CONTAINS_ANY */
          ],
              n = ["in"
          /* IN */
          , "array-contains-any"
          /* ARRAY_CONTAINS_ANY */
          ],
              r = e.indexOf(t.op) >= 0,
              i = n.indexOf(t.op) >= 0;

          if (t.ue()) {
            var o = this.IE.jt();
            if (null !== o && !o.isEqual(t.field)) throw new c(h.INVALID_ARGUMENT, "Invalid query. All where filters with an inequality (<, <=, >, or >=) must be on the same field. But you have inequality filters on '" + o.toString() + "' and '" + t.field.toString() + "'");
            var s = this.IE.Kt();
            null !== s && this.yE(t.field, s);
          } else if (i || r) {
            // You can have at most 1 disjunctive filter and 1 array filter. Check if
            // the new filter conflicts with an existing one.
            var u = null;
            if (i && (u = this.IE.ce(n)), null === u && r && (u = this.IE.ce(e)), null != u) // We special case when it's a duplicate op to give a slightly clearer error message.
              throw u === t.op ? new c(h.INVALID_ARGUMENT, "Invalid query. You cannot use more than one '" + t.op.toString() + "' filter.") : new c(h.INVALID_ARGUMENT, "Invalid query. You cannot use '" + t.op.toString() + "' filters with '" + u.toString() + "' filters.");
          }
        }
      }, t.prototype.mE = function (t) {
        if (null === this.IE.Kt()) {
          // This is the first order by. It must match any inequality.
          var e = this.IE.jt();
          null !== e && this.yE(e, t.field);
        }
      }, t.prototype.yE = function (t, e) {
        if (!e.isEqual(t)) throw new c(h.INVALID_ARGUMENT, "Invalid query. You have a where filter with an inequality (<, <=, >, or >=) on field '" + t.toString() + "' and so you must also use '" + t.toString() + "' as your first Query.orderBy(), but your first Query.orderBy() is on field '" + e.toString() + "' instead.");
      }, t;
    }(),
        Gi =
    /** @class */
    function () {
      function t(t, e, n, r) {
        this.hE = t, this.bE = e, this.vE = n, this.aE = r, this.SE = null, this.DE = null, this.metadata = new ji(n.hasPendingWrites, n.fromCache);
      }

      return Object.defineProperty(t.prototype, "docs", {
        get: function get() {
          var t = [];
          return this.forEach(function (e) {
            return t.push(e);
          }), t;
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(t.prototype, "empty", {
        get: function get() {
          return this.vE.docs.B();
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(t.prototype, "size", {
        get: function get() {
          return this.vE.docs.size;
        },
        enumerable: !0,
        configurable: !0
      }), t.prototype.forEach = function (t, e) {
        var n = this;
        ur("QuerySnapshot.forEach", arguments, 1, 2), ar("QuerySnapshot.forEach", "function", 1, t), this.vE.docs.forEach(function (r) {
          t.call(e, n.CE(r));
        });
      }, Object.defineProperty(t.prototype, "query", {
        get: function get() {
          return new zi(this.bE, this.hE, this.aE);
        },
        enumerable: !0,
        configurable: !0
      }), t.prototype.docChanges = function (t) {
        t && (gr("QuerySnapshot.docChanges", t, ["includeMetadataChanges"]), fr("QuerySnapshot.docChanges", "boolean", "includeMetadataChanges", t.includeMetadataChanges));
        var e = !(!t || !t.includeMetadataChanges);
        if (e && this.vE.hs) throw new c(h.INVALID_ARGUMENT, "To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");
        return this.SE && this.DE === e || (this.SE =
        /**
        * Calculates the array of firestore.DocumentChange's for a given ViewSnapshot.
        *
        * Exported for testing.
        */
        function (t, e, n, r) {
          if (n.ss.B()) {
            // Special case the first snapshot because index calculation is easy and
            // fast
            var i = 0;
            return n.docChanges.map(function (e) {
              var o = new Bi(t, e.doc.key, e.doc, n.fromCache, n.ns.has(e.doc.key), r);
              return e.doc, {
                type: "added",
                doc: o,
                oldIndex: -1,
                newIndex: i++
              };
            });
          } // A DocumentSet that is updated incrementally as changes are applied to use
          // to lookup the index of a document.


          var o = n.ss;
          return n.docChanges.filter(function (t) {
            return e || 3
            /* Metadata */
            !== t.type;
          }).map(function (e) {
            var i = new Bi(t, e.doc.key, e.doc, n.fromCache, n.ns.has(e.doc.key), r),
                s = -1,
                u = -1;
            return 0
            /* Added */
            !== e.type && (s = o.indexOf(e.doc.key), o = o["delete"](e.doc.key)), 1
            /* Removed */
            !== e.type && (u = (o = o.add(e.doc)).indexOf(e.doc.key)), {
              type: Ji(e.type),
              doc: i,
              oldIndex: s,
              newIndex: u
            };
          });
        }(this.hE, e, this.vE, this.aE), this.DE = e), this.SE;
      },
      /** Check the equality. The call can be very expensive. */
      t.prototype.isEqual = function (e) {
        if (!(e instanceof t)) throw mr("isEqual", "QuerySnapshot", 1, e);
        return this.hE === e.hE && this.bE.isEqual(e.bE) && this.vE.isEqual(e.vE) && this.aE === e.aE;
      }, t.prototype.CE = function (t) {
        return new Bi(this.hE, t.key, t, this.metadata.fromCache, this.vE.ns.has(t.key), this.aE);
      }, t;
    }(),
        Wi =
    /** @class */
    function (t) {
      function n(e, n, r) {
        var i = this;
        if ((i = t.call(this, wt.Wt(e), n, r) || this).FE = e, e.length % 2 != 1) throw new c(h.INVALID_ARGUMENT, "Invalid collection reference. Collection references must have an odd number of segments, but " + e.j() + " has " + e.length);
        return i;
      }

      return e.__extends(n, t), Object.defineProperty(n.prototype, "id", {
        get: function get() {
          return this.IE.path.O();
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(n.prototype, "parent", {
        get: function get() {
          var t = this.IE.path.L();
          return t.B() ? null : new Mi(new _(t), this.firestore);
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(n.prototype, "path", {
        get: function get() {
          return this.IE.path.j();
        },
        enumerable: !0,
        configurable: !0
      }), n.prototype.doc = function (t) {
        if (ur("CollectionReference.doc", arguments, 0, 1), // We allow omission of 'pathString' but explicitly prohibit passing in both
        // 'undefined' and 'null'.
        0 === arguments.length && (t = Ee.cn()), ar("CollectionReference.doc", "non-empty string", 1, t), "" === t) throw new c(h.INVALID_ARGUMENT, "Document path must be a non-empty string");
        var e = w.K(t);
        return Mi.nE(this.IE.path.child(e), this.firestore, this.aE);
      }, n.prototype.add = function (t) {
        or("CollectionReference.add", arguments, 1), ar("CollectionReference.add", "object", 1, this.aE ? this.aE.toFirestore(t) : t);
        var e = this.doc();
        return e.set(t).then(function () {
          return e;
        });
      }, n.prototype.withConverter = function (t) {
        return new n(this.FE, this.firestore, t);
      }, n;
    }(zi);
    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    // settings() defaults:


    function Qi(t, e) {
      if (void 0 === e) return {
        merge: !1
      };
      if (gr(t, e, ["merge", "mergeFields"]), fr(t, "boolean", "merge", e.merge), function (t, e, n, r, i) {
        void 0 !== r && function (t, e, n, r, i) {
          if (!(r instanceof Array)) throw new c(h.INVALID_ARGUMENT, "Function " + t + "() requires its " + e + " option to be an array, but it was: " + yr(r));

          for (var o = 0; o < r.length; ++o) {
            if (!i(r[o])) throw new c(h.INVALID_ARGUMENT, "Function " + t + "() requires all " + e + " elements to be " + n + ", but the value at index " + o + " was: " + yr(r[o]));
          }
        }(t, e, n, r, i);
      }(t, "mergeFields", "a string or a FieldPath", e.mergeFields, function (t) {
        return "string" == typeof t || t instanceof Nr;
      }), void 0 !== e.mergeFields && void 0 !== e.merge) throw new c(h.INVALID_ARGUMENT, "Invalid options passed to function " + t + '(): You cannot specify both "merge" and "mergeFields".');
      return e;
    }

    function Ki(t, e) {
      return void 0 === e ? {} : (gr(t, e, ["serverTimestamps"]), lr(t, 0, "serverTimestamps", e.serverTimestamps, ["estimate", "previous", "none"]), e);
    }

    function Yi(t, e) {
      hr(t, "object", 1, e), e && (gr(t, e, ["source"]), lr(t, 0, "source", e.source, ["default", "server", "cache"]));
    }

    function $i(t, e, n) {
      if (e instanceof Mi) {
        if (e.firestore !== n) throw new c(h.INVALID_ARGUMENT, "Provided document reference is from a different Firestore instance.");
        return e;
      }

      throw mr(t, "DocumentReference", 1, e);
    }

    function Ji(t) {
      switch (t) {
        case 0
        /* Added */
        :
          return "added";

        case 2
        /* Modified */
        :
        case 3
        /* Metadata */
        :
          return "modified";

        case 1
        /* Removed */
        :
          return "removed";

        default:
          return ge();
      }
    }
    /**
     * Converts custom model object of type T into DocumentData by applying the
     * converter if it exists.
     *
     * This function is used when converting user objects to DocumentData
     * because we want to provide the user with a more specific error message if
     * their set() or fails due to invalid data originating from a toFirestore()
     * call.
     */


    function Hi(t, e, n) {
      var r;
      return t ? (r = t.toFirestore(e), n = "toFirestore() in " + n) : r = e, [r, n];
    }

    function Xi(t, e) {
      function n() {
        var t = "This constructor is private.";
        throw e && (t += " ", t += e), new c(h.INVALID_ARGUMENT, t);
      } // Make sure instanceof checks work and all methods are exposed on the public
      // constructor
      // eslint-disable-next-line @typescript-eslint/no-explicit-any


      return n.prototype = t.prototype, // Copy any static methods/members
      Object.assign(n, t), n;
    }
    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    // Public instance that disallows construction at runtime. Note that this still
    // allows instanceof checks.


    var Zi = Xi(Ui, "Use firebase.firestore() instead."),
        to = Xi(Ci, "Use firebase.firestore().runTransaction() instead."),
        eo = Xi(qi, "Use firebase.firestore().batch() instead."),
        no = Xi(Mi, "Use firebase.firestore().doc() instead."),
        ro = Xi(Fi),
        io = Xi(Bi),
        oo = Xi(zi),
        so = Xi(Gi),
        uo = Xi(Wi, "Use firebase.firestore().collection() instead."),
        ao = Xi(
    /** @class */
    function () {
      function t() {}

      return t["delete"] = function () {
        return ir("FieldValue.delete", arguments), new Dr();
      }, t.serverTimestamp = function () {
        return ir("FieldValue.serverTimestamp", arguments), new xr();
      }, t.arrayUnion = function () {
        for (var t = [], e = 0; e < arguments.length; e++) {
          t[e] = arguments[e];
        } // NOTE: We don't actually parse the data until it's used in set() or
        // update() since we need access to the Firestore instance.


        return sr("FieldValue.arrayUnion", arguments, 1), new Sr(t);
      }, t.arrayRemove = function () {
        for (var t = [], e = 0; e < arguments.length; e++) {
          t[e] = arguments[e];
        } // NOTE: We don't actually parse the data until it's used in set() or
        // update() since we need access to the Firestore instance.


        return sr("FieldValue.arrayRemove", arguments, 1), new Rr(t);
      }, t.increment = function (t) {
        return ar("FieldValue.increment", "number", 1, t), or("FieldValue.increment", arguments, 1), new Lr(t);
      }, t.prototype.isEqual = function (t) {
        return this === t;
      }, t;
    }(), "Use FieldValue.<field>() instead."),
        ho = Xi(Ir, "Use Blob.fromUint8Array() or Blob.fromBase64String() instead."),
        co = {
      Firestore: Zi,
      GeoPoint: Or,
      Timestamp: v,
      Blob: ho,
      Transaction: to,
      WriteBatch: eo,
      DocumentReference: no,
      DocumentSnapshot: ro,
      Query: oo,
      QueryDocumentSnapshot: io,
      QuerySnapshot: so,
      CollectionReference: uo,
      FieldPath: Nr,
      FieldValue: ao,
      setLogLevel: Ui.setLogLevel,
      CACHE_SIZE_UNLIMITED: Vi
    },
        fo =
    /** @class */
    function () {
      function t() {}

      return t.prototype.B_ = function (t) {// No-op.
      }, t.prototype.mo = function () {// No-op.
      }, t;
    }(),
        lo =
    /** @class */
    function () {
      function t() {
        var t = this;
        this.NE = function () {
          return t.$E();
        }, this.kE = function () {
          return t.LE();
        }, this.ME = [], this.OE();
      }

      return t.prototype.B_ = function (t) {
        this.ME.push(t);
      }, t.prototype.mo = function () {
        window.removeEventListener("online", this.NE), window.removeEventListener("offline", this.kE);
      }, t.prototype.OE = function () {
        window.addEventListener("online", this.NE), window.addEventListener("offline", this.kE);
      }, t.prototype.$E = function () {
        de("ConnectivityMonitor", "Network connectivity changed: AVAILABLE");

        for (var t = 0, e = this.ME; t < e.length; t++) {
          (0, e[t])(0
          /* AVAILABLE */
          );
        }
      }, t.prototype.LE = function () {
        de("ConnectivityMonitor", "Network connectivity changed: UNAVAILABLE");

        for (var t = 0, e = this.ME; t < e.length; t++) {
          (0, e[t])(1
          /* UNAVAILABLE */
          );
        }
      }, // TODO(chenbrian): Consider passing in window either into this component or
      // here for testing via FakeWindow.

      /** Checks that all used attributes of window are available. */
      t.Gh = function () {
        return "undefined" != typeof window && void 0 !== window.addEventListener && void 0 !== window.removeEventListener;
      }, t;
    }(),
        po =
    /** @class */
    function () {
      function t(t) {
        this.xE = t.xE, this.BE = t.BE;
      }

      return t.prototype.e_ = function (t) {
        this.qE = t;
      }, t.prototype.Yc = function (t) {
        this.UE = t;
      }, t.prototype.onMessage = function (t) {
        this.QE = t;
      }, t.prototype.close = function () {
        this.BE();
      }, t.prototype.send = function (t) {
        this.xE(t);
      }, t.prototype.WE = function () {
        this.qE();
      }, t.prototype.jE = function (t) {
        this.UE(t);
      }, t.prototype.KE = function (t) {
        this.QE(t);
      }, t;
    }(),
        yo = {
      BatchGetDocuments: "batchGet",
      Commit: "commit"
    },
        vo = "gl-js/ fire/" + u,
        go =
    /** @class */
    function () {
      function t(t) {
        this.ii = t.ii;
        var e = t.ssl ? "https" : "http";
        this.GE = e + "://" + t.host, this.forceLongPolling = t.forceLongPolling;
      }
      /**
       * Modifies the headers for a request, adding any authorization token if
       * present and any additional headers for the request.
       */


      return t.prototype.zE = function (t, e) {
        if (e) for (var n in e.o) {
          e.o.hasOwnProperty(n) && (t[n] = e.o[n]);
        }
        t["X-Goog-Api-Client"] = vo;
      }, t.prototype.d_ = function (t, e, n) {
        var r = this,
            i = this.HE(t);
        return new Promise(function (o, u) {
          var a = new s.XhrIo();
          a.listenOnce(s.EventType.COMPLETE, function () {
            try {
              switch (a.getLastErrorCode()) {
                case s.ErrorCode.NO_ERROR:
                  var e = a.getResponseJson();
                  de("Connection", "XHR received:", JSON.stringify(e)), o(e);
                  break;

                case s.ErrorCode.TIMEOUT:
                  de("Connection", 'RPC "' + t + '" timed out'), u(new c(h.DEADLINE_EXCEEDED, "Request time out"));
                  break;

                case s.ErrorCode.HTTP_ERROR:
                  var n = a.getStatus();

                  if (de("Connection", 'RPC "' + t + '" failed with status:', n, "response text:", a.getResponseText()), n > 0) {
                    var r = a.getResponseJson().error;

                    if (r && r.status && r.message) {
                      var i = function (t) {
                        var e = t.toLowerCase().replace("_", "-");
                        return Object.values(h).indexOf(e) >= 0 ? e : h.UNKNOWN;
                      }(r.status);

                      u(new c(i, r.message));
                    } else u(new c(h.UNKNOWN, "Server responded with status " + a.getStatus()));
                  } else // If we received an HTTP_ERROR but there's no status code,
                    // it's most probably a connection issue
                    de("Connection", 'RPC "' + t + '" failed'), u(new c(h.UNAVAILABLE, "Connection failed."));

                  break;

                default:
                  ge();
              }
            } finally {
              de("Connection", 'RPC "' + t + '" completed.');
            }
          }); // The database field is already encoded in URL. Specifying it again in
          // the body is not necessary in production, and will cause duplicate field
          // errors in the Firestore Emulator. Let's remove it.

          var f = Object.assign({}, e);
          delete f.database;
          var l = JSON.stringify(f);
          de("Connection", "XHR sending: ", i + " " + l); // Content-Type: text/plain will avoid preflight requests which might
          // mess with CORS and redirects by proxies. If we add custom headers
          // we will need to change this code to potentially use the
          // $httpOverwrite parameter supported by ESF to avoid
          // triggering preflight requests.

          var p = {
            "Content-Type": "text/plain"
          };
          r.zE(p, n), a.send(i, "POST", l, p, 15);
        });
      }, t.prototype.f_ = function (t, e, n) {
        // The REST API automatically aggregates all of the streamed results, so we
        // can just use the normal invoke() method.
        return this.d_(t, e, n);
      }, t.prototype.s_ = function (t, e) {
        var n = [this.GE, "/", "google.firestore.v1.Firestore", "/", t, "/channel"],
            r = s.createWebChannelTransport(),
            o = {
          // Required for backend stickiness, routing behavior is based on this
          // parameter.
          httpSessionIdParam: "gsessionid",
          initMessageHeaders: {},
          messageUrlParams: {
            // This param is used to improve routing and project isolation by the
            // backend and must be included in every request.
            database: "projects/" + this.ii.projectId + "/databases/" + this.ii.database
          },
          sendRawJson: !0,
          supportsCrossDomainXhr: !0,
          internalChannelParams: {
            // Override the default timeout (randomized between 10-20 seconds) since
            // a large write batch on a slow internet connection may take a long
            // time to send to the backend. Rather than have WebChannel impose a
            // tight timeout which could lead to infinite timeouts and retries, we
            // set it very large (5-10 minutes) and rely on the browser's builtin
            // timeouts to kick in if the request isn't working.
            forwardChannelRequestTimeoutMs: 6e5
          },
          forceLongPolling: this.forceLongPolling
        };
        this.zE(o.initMessageHeaders, e), // Sending the custom headers we just added to request.initMessageHeaders
        // (Authorization, etc.) will trigger the browser to make a CORS preflight
        // request because the XHR will no longer meet the criteria for a "simple"
        // CORS request:
        // https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS#Simple_requests
        // Therefore to avoid the CORS preflight request (an extra network
        // roundtrip), we use the httpHeadersOverwriteParam option to specify that
        // the headers should instead be encoded into a special "$httpHeaders" query
        // parameter, which is recognized by the webchannel backend. This is
        // formally defined here:
        // https://github.com/google/closure-library/blob/b0e1815b13fb92a46d7c9b3c30de5d6a396a3245/closure/goog/net/rpc/httpcors.js#L32
        // TODO(b/145624756): There is a backend bug where $httpHeaders isn't respected if the request
        // doesn't have an Origin header. So we have to exclude a few browser environments that are
        // known to (sometimes) not include an Origin. See
        // https://github.com/firebase/firebase-js-sdk/issues/1491.
        i.isMobileCordova() || i.isReactNative() || i.isElectron() || i.isIE() || i.isUWP() || i.isBrowserExtension() || (o.httpHeadersOverwriteParam = "$httpHeaders");
        var u = n.join("");
        de("Connection", "Creating WebChannel: " + u + " " + o);

        var a = r.createWebChannel(u, o),
            f = !1,
            l = !1,
            p = new po({
          xE: function xE(t) {
            l ? de("Connection", "Not sending because WebChannel is closed:", t) : (f || (de("Connection", "Opening WebChannel transport."), a.open(), f = !0), de("Connection", "WebChannel sending:", t), a.send(t));
          },
          BE: function BE() {
            return a.close();
          }
        }),
            d = function d(t, e) {
          // TODO(dimond): closure typing seems broken because WebChannel does
          // not implement goog.events.Listenable
          a.listen(t, function (t) {
            try {
              e(t);
            } catch (t) {
              setTimeout(function () {
                throw t;
              }, 0);
            }
          });
        }; // WebChannel supports sending the first message with the handshake - saving
        // a network round trip. However, it will have to call send in the same
        // JS event loop as open. In order to enforce this, we delay actually
        // opening the WebChannel until send is called. Whether we have called
        // open is tracked with this variable.
        // Closure events are guarded and exceptions are swallowed, so catch any
        // exception and rethrow using a setTimeout so they become visible again.
        // Note that eventually this function could go away if we are confident
        // enough the code is exception free.


        return d(s.WebChannel.EventType.OPEN, function () {
          l || de("Connection", "WebChannel transport opened.");
        }), d(s.WebChannel.EventType.CLOSE, function () {
          l || (l = !0, de("Connection", "WebChannel transport closed"), p.jE());
        }), d(s.WebChannel.EventType.ERROR, function (t) {
          l || (l = !0, de("Connection", "WebChannel transport errored:", t), p.jE(new c(h.UNAVAILABLE, "The operation could not be completed")));
        }), d(s.WebChannel.EventType.MESSAGE, function (t) {
          var e;

          if (!l) {
            var n = t.data[0];
            me(!!n); // TODO(b/35143891): There is a bug in One Platform that caused errors
            // (and only errors) to be wrapped in an extra array. To be forward
            // compatible with the bug we need to check either condition. The latter
            // can be removed once the fix has been rolled out.
            // Use any because msgData.error is not typed.

            var r = n,
                i = r.error || (null === (e = r[0]) || void 0 === e ? void 0 : e.error);

            if (i) {
              de("Connection", "WebChannel received error:", i); // error.status will be a string like 'OK' or 'NOT_FOUND'.

              var o = i.status,
                  s = function (t) {
                // lookup by string
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                var e = lt[t];
                if (void 0 !== e) return Rt(e);
              }(o),
                  u = i.message;

              void 0 === s && (s = h.INTERNAL, u = "Unknown error status: " + o + " with message " + i.message), // Mark closed so no further events are propagated
              l = !0, p.jE(new c(s, u)), a.close();
            } else de("Connection", "WebChannel received:", n), p.KE(n);
          }
        }), setTimeout(function () {
          // Technically we could/should wait for the WebChannel opened event,
          // but because we want to send the first message with the WebChannel
          // handshake we pretend the channel opened here (asynchronously), and
          // then delay the actual open until the first message is sent.
          p.WE();
        }, 0), p;
      }, // visible for testing
      t.prototype.HE = function (t) {
        var e = yo[t];
        return this.GE + "/v1/projects/" + this.ii.projectId + "/databases/" + this.ii.database + "/documents:" + e;
      }, t;
    }();
    /**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    // Implements the Platform API for browsers and some browser-like environments
    // (including ReactNative).

    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /**
     * Registers the main Firestore build with the components framework.
     * Persistence can be enabled via `firebase.firestore().enablePersistence()`.
     */


    function mo(t) {
      /**
      * Configures Firestore as part of the Firebase SDK by calling registerService.
      *
      * @param firebase The FirebaseNamespace to register Firestore with
      * @param firestoreFactory A factory function that returns a new Firestore
      *    instance.
      */
      !function (t, e) {
        t.INTERNAL.registerComponent(new o.Component("firestore", function (t) {
          return function (t, e) {
            return new Ui(t, e, new xi());
          }(t.getProvider("app").getImmediate(), t.getProvider("auth-internal"));
        }, "PUBLIC"
        /* PUBLIC */
        ).setServiceProps(Object.assign({}, co)));
      }(t), t.registerVersion("@firebase/firestore", "1.14.6")
      /**
      * @license
      * Copyright 2017 Google LLC
      *
      * Licensed under the Apache License, Version 2.0 (the "License");
      * you may not use this file except in compliance with the License.
      * You may obtain a copy of the License at
      *
      *   http://www.apache.org/licenses/LICENSE-2.0
      *
      * Unless required by applicable law or agreed to in writing, software
      * distributed under the License is distributed on an "AS IS" BASIS,
      * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
      * See the License for the specific language governing permissions and
      * limitations under the License.
      */

      /**
      * This code needs to run before Firestore is used. This can be achieved in
      * several ways:
      *   1) Through the JSCompiler compiling this code and then (automatically)
      *      executing it before exporting the Firestore symbols.
      *   2) Through importing this module first in a Firestore main module
      */
      ;
    }

    ce.an(new (
    /** @class */
    function () {
      function t() {
        this.ac = "undefined" != typeof atob;
      }

      return Object.defineProperty(t.prototype, "document", {
        get: function get() {
          // `document` is not always available, e.g. in ReactNative and WebWorkers.
          // eslint-disable-next-line no-restricted-globals
          return "undefined" != typeof document ? document : null;
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(t.prototype, "window", {
        get: function get() {
          // `window` is not always available, e.g. in ReactNative and WebWorkers.
          // eslint-disable-next-line no-restricted-globals
          return "undefined" != typeof window ? window : null;
        },
        enumerable: !0,
        configurable: !0
      }), t.prototype.yT = function (t) {
        return Promise.resolve(new go(t));
      }, t.prototype.AT = function () {
        return lo.Gh() ? new lo() : new fo();
      }, t.prototype.bc = function (t) {
        return new ae(t, {
          hi: !0
        });
      }, t.prototype.un = function (t) {
        return JSON.stringify(t);
      }, t.prototype.atob = function (t) {
        return atob(t);
      }, t.prototype.btoa = function (t) {
        return btoa(t);
      }, t.prototype._n = function (t) {
        // Polyfills for IE and WebWorker by using `self` and `msCrypto` when `crypto` is not available.
        var e = // eslint-disable-next-line @typescript-eslint/no-explicit-any
        "undefined" != typeof self && (self.crypto || self.msCrypto),
            n = new Uint8Array(t);
        if (e) e.getRandomValues(n);else // Falls back to Math.random
          for (var r = 0; r < t; r++) {
            n[r] = Math.floor(256 * Math.random());
          }
        return n;
      }, t;
    }())()), mo(n), exports.__PRIVATE_registerFirestore = mo; //# sourceMappingURL=index.cjs.js.map

    /***/
  },

  /***/
  "./node_modules/@firebase/firestore/node_modules/tslib/tslib.es6.js":
  /*!**************************************************************************!*\
    !*** ./node_modules/@firebase/firestore/node_modules/tslib/tslib.es6.js ***!
    \**************************************************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesFirebaseFirestoreNode_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./node_modules/@firebase/webchannel-wrapper/dist/index.esm.js":
  /*!*********************************************************************!*\
    !*** ./node_modules/@firebase/webchannel-wrapper/dist/index.esm.js ***!
    \*********************************************************************/

  /*! exports provided: default, ErrorCode, EventType, WebChannel, XhrIo, createWebChannelTransport */

  /***/
  function node_modulesFirebaseWebchannelWrapperDistIndexEsmJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ErrorCode", function () {
      return esm_2;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EventType", function () {
      return esm_3;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WebChannel", function () {
      return esm_4;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "XhrIo", function () {
      return esm_5;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "createWebChannelTransport", function () {
      return esm_1;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */


    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};
    var g,
        goog = goog || {},
        k = commonjsGlobal || self;

    function aa() {}

    function ba(a) {
      var b = typeof a;
      if ("object" == b) {
        if (a) {
          if (a instanceof Array) return "array";
          if (a instanceof Object) return b;
          var c = Object.prototype.toString.call(a);
          if ("[object Window]" == c) return "object";
          if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
          if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function";
        } else return "null";
      } else if ("function" == b && "undefined" == typeof a.call) return "object";
      return b;
    }

    function da(a) {
      var b = ba(a);
      return "array" == b || "object" == b && "number" == typeof a.length;
    }

    function m(a) {
      var b = typeof a;
      return "object" == b && null != a || "function" == b;
    }

    function ea(a) {
      return Object.prototype.hasOwnProperty.call(a, fa) && a[fa] || (a[fa] = ++ha);
    }

    var fa = "closure_uid_" + (1E9 * Math.random() >>> 0),
        ha = 0;

    function ia(a, b, c) {
      return a.call.apply(a.bind, arguments);
    }

    function ja(a, b, c) {
      if (!a) throw Error();

      if (2 < arguments.length) {
        var d = Array.prototype.slice.call(arguments, 2);
        return function () {
          var e = Array.prototype.slice.call(arguments);
          Array.prototype.unshift.apply(e, d);
          return a.apply(b, e);
        };
      }

      return function () {
        return a.apply(b, arguments);
      };
    }

    function n(a, b, c) {
      Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? n = ia : n = ja;
      return n.apply(null, arguments);
    }

    function ka(a, b) {
      var c = Array.prototype.slice.call(arguments, 1);
      return function () {
        var d = c.slice();
        d.push.apply(d, arguments);
        return a.apply(this, d);
      };
    }

    var q = Date.now || function () {
      return +new Date();
    };

    function r(a, b) {
      function c() {}

      c.prototype = b.prototype;
      a.M = b.prototype;
      a.prototype = new c();
      a.prototype.constructor = a;
    }

    function t() {
      this.j = this.j;
      this.i = this.i;
    }

    var la = 0;
    t.prototype.j = !1;

    t.prototype.da = function () {
      if (!this.j && (this.j = !0, this.C(), 0 != la)) {
        var a = ea(this);
      }
    };

    t.prototype.C = function () {
      if (this.i) for (; this.i.length;) {
        this.i.shift()();
      }
    };

    var na = Array.prototype.indexOf ? function (a, b) {
      return Array.prototype.indexOf.call(a, b, void 0);
    } : function (a, b) {
      if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);

      for (var c = 0; c < a.length; c++) {
        if (c in a && a[c] === b) return c;
      }

      return -1;
    },
        oa = Array.prototype.forEach ? function (a, b, c) {
      Array.prototype.forEach.call(a, b, c);
    } : function (a, b, c) {
      for (var d = a.length, e = "string" === typeof a ? a.split("") : a, f = 0; f < d; f++) {
        f in e && b.call(c, e[f], f, a);
      }
    };

    function pa(a) {
      a: {
        var b = qa;

        for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++) {
          if (e in d && b.call(void 0, d[e], e, a)) {
            b = e;
            break a;
          }
        }

        b = -1;
      }

      return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b];
    }

    function ra(a) {
      return Array.prototype.concat.apply([], arguments);
    }

    function sa(a) {
      var b = a.length;

      if (0 < b) {
        for (var c = Array(b), d = 0; d < b; d++) {
          c[d] = a[d];
        }

        return c;
      }

      return [];
    }

    function wa(a) {
      return /^[\s\xa0]*$/.test(a);
    }

    var xa = String.prototype.trim ? function (a) {
      return a.trim();
    } : function (a) {
      return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1];
    };

    function u(a, b) {
      return -1 != a.indexOf(b);
    }

    function ya(a, b) {
      return a < b ? -1 : a > b ? 1 : 0;
    }

    var v;

    a: {
      var za = k.navigator;

      if (za) {
        var Aa = za.userAgent;

        if (Aa) {
          v = Aa;
          break a;
        }
      }

      v = "";
    }

    function Ba(a, b, c) {
      for (var d in a) {
        b.call(c, a[d], d, a);
      }
    }

    function Ca(a) {
      var b = {};

      for (var c in a) {
        b[c] = a[c];
      }

      return b;
    }

    var Da = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

    function Ea(a, b) {
      var c, d;

      for (var e = 1; e < arguments.length; e++) {
        d = arguments[e];

        for (c in d) {
          a[c] = d[c];
        }

        for (var f = 0; f < Da.length; f++) {
          c = Da[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
        }
      }
    }

    function Fa(a) {
      Fa[" "](a);
      return a;
    }

    Fa[" "] = aa;

    function Ga(a, b) {
      var c = Ha;
      return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : c[a] = b(a);
    }

    var Ia = u(v, "Opera"),
        w = u(v, "Trident") || u(v, "MSIE"),
        Ja = u(v, "Edge"),
        Ka = Ja || w,
        La = u(v, "Gecko") && !(u(v.toLowerCase(), "webkit") && !u(v, "Edge")) && !(u(v, "Trident") || u(v, "MSIE")) && !u(v, "Edge"),
        Ma = u(v.toLowerCase(), "webkit") && !u(v, "Edge");

    function Na() {
      var a = k.document;
      return a ? a.documentMode : void 0;
    }

    var Oa;

    a: {
      var Pa = "",
          Qa = function () {
        var a = v;
        if (La) return /rv:([^\);]+)(\)|;)/.exec(a);
        if (Ja) return /Edge\/([\d\.]+)/.exec(a);
        if (w) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
        if (Ma) return /WebKit\/(\S+)/.exec(a);
        if (Ia) return /(?:Version)[ \/]?(\S+)/.exec(a);
      }();

      Qa && (Pa = Qa ? Qa[1] : "");

      if (w) {
        var Ra = Na();

        if (null != Ra && Ra > parseFloat(Pa)) {
          Oa = String(Ra);
          break a;
        }
      }

      Oa = Pa;
    }

    var Ha = {};

    function Sa(a) {
      return Ga(a, function () {
        {
          var b = 0;
          var e = xa(String(Oa)).split("."),
              f = xa(String(a)).split("."),
              h = Math.max(e.length, f.length);

          for (var l = 0; 0 == b && l < h; l++) {
            var c = e[l] || "",
                d = f[l] || "";

            do {
              c = /(\d*)(\D*)(.*)/.exec(c) || ["", "", "", ""];
              d = /(\d*)(\D*)(.*)/.exec(d) || ["", "", "", ""];
              if (0 == c[0].length && 0 == d[0].length) break;
              b = ya(0 == c[1].length ? 0 : parseInt(c[1], 10), 0 == d[1].length ? 0 : parseInt(d[1], 10)) || ya(0 == c[2].length, 0 == d[2].length) || ya(c[2], d[2]);
              c = c[3];
              d = d[3];
            } while (0 == b);
          }
        }
        return 0 <= b;
      });
    }

    var Ta;

    if (k.document && w) {
      var Ua = Na();
      Ta = Ua ? Ua : parseInt(Oa, 10) || void 0;
    } else Ta = void 0;

    var Va = Ta;

    var Wa = !w || 9 <= Number(Va),
        Xa = w && !Sa("9"),
        Ya = function () {
      if (!k.addEventListener || !Object.defineProperty) return !1;
      var a = !1,
          b = Object.defineProperty({}, "passive", {
        get: function get() {
          a = !0;
        }
      });

      try {
        k.addEventListener("test", aa, b), k.removeEventListener("test", aa, b);
      } catch (c) {}

      return a;
    }();

    function x(a, b) {
      this.type = a;
      this.a = this.target = b;
      this.defaultPrevented = !1;
    }

    x.prototype.b = function () {
      this.defaultPrevented = !0;
    };

    function y(a, b) {
      x.call(this, a ? a.type : "");
      this.relatedTarget = this.a = this.target = null;
      this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0;
      this.key = "";
      this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
      this.pointerId = 0;
      this.pointerType = "";
      this.c = null;

      if (a) {
        var c = this.type = a.type,
            d = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null;
        this.target = a.target || a.srcElement;
        this.a = b;

        if (b = a.relatedTarget) {
          if (La) {
            a: {
              try {
                Fa(b.nodeName);
                var e = !0;
                break a;
              } catch (f) {}

              e = !1;
            }

            e || (b = null);
          }
        } else "mouseover" == c ? b = a.fromElement : "mouseout" == c && (b = a.toElement);

        this.relatedTarget = b;
        d ? (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX, this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY, this.screenX = d.screenX || 0, this.screenY = d.screenY || 0) : (this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0);
        this.button = a.button;
        this.key = a.key || "";
        this.ctrlKey = a.ctrlKey;
        this.altKey = a.altKey;
        this.shiftKey = a.shiftKey;
        this.metaKey = a.metaKey;
        this.pointerId = a.pointerId || 0;
        this.pointerType = "string" === typeof a.pointerType ? a.pointerType : Za[a.pointerType] || "";
        this.c = a;
        a.defaultPrevented && this.b();
      }
    }

    r(y, x);
    var Za = {
      2: "touch",
      3: "pen",
      4: "mouse"
    };

    y.prototype.b = function () {
      y.M.b.call(this);
      var a = this.c;
      if (a.preventDefault) a.preventDefault();else if (a.returnValue = !1, Xa) try {
        if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) a.keyCode = -1;
      } catch (b) {}
    };

    var A = "closure_listenable_" + (1E6 * Math.random() | 0),
        $a = 0;

    function ab(a, b, c, d, e) {
      this.listener = a;
      this.proxy = null;
      this.src = b;
      this.type = c;
      this.capture = !!d;
      this.aa = e;
      this.key = ++$a;
      this.V = this.X = !1;
    }

    function bb(a) {
      a.V = !0;
      a.listener = null;
      a.proxy = null;
      a.src = null;
      a.aa = null;
    }

    function cb(a) {
      this.src = a;
      this.a = {};
      this.b = 0;
    }

    cb.prototype.add = function (a, b, c, d, e) {
      var f = a.toString();
      a = this.a[f];
      a || (a = this.a[f] = [], this.b++);
      var h = db(a, b, d, e);
      -1 < h ? (b = a[h], c || (b.X = !1)) : (b = new ab(b, this.src, f, !!d, e), b.X = c, a.push(b));
      return b;
    };

    function eb(a, b) {
      var c = b.type;

      if (c in a.a) {
        var d = a.a[c],
            e = na(d, b),
            f;
        (f = 0 <= e) && Array.prototype.splice.call(d, e, 1);
        f && (bb(b), 0 == a.a[c].length && (delete a.a[c], a.b--));
      }
    }

    function db(a, b, c, d) {
      for (var e = 0; e < a.length; ++e) {
        var f = a[e];
        if (!f.V && f.listener == b && f.capture == !!c && f.aa == d) return e;
      }

      return -1;
    }

    var fb = "closure_lm_" + (1E6 * Math.random() | 0),
        gb = {};

    function ib(a, b, c, d, e) {
      if (d && d.once) return jb(a, b, c, d, e);

      if (Array.isArray(b)) {
        for (var f = 0; f < b.length; f++) {
          ib(a, b[f], c, d, e);
        }

        return null;
      }

      c = kb(c);
      return a && a[A] ? a.ra(b, c, m(d) ? !!d.capture : !!d, e) : lb(a, b, c, !1, d, e);
    }

    function lb(a, b, c, d, e, f) {
      if (!b) throw Error("Invalid event type");
      var h = m(e) ? !!e.capture : !!e;
      if (h && !Wa) return null;
      var l = mb(a);
      l || (a[fb] = l = new cb(a));
      c = l.add(b, c, d, h, f);
      if (c.proxy) return c;
      d = nb();
      c.proxy = d;
      d.src = a;
      d.listener = c;
      if (a.addEventListener) Ya || (e = h), void 0 === e && (e = !1), a.addEventListener(b.toString(), d, e);else if (a.attachEvent) a.attachEvent(ob(b.toString()), d);else if (a.addListener && a.removeListener) a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");
      return c;
    }

    function nb() {
      var a = pb,
          b = Wa ? function (c) {
        return a.call(b.src, b.listener, c);
      } : function (c) {
        c = a.call(b.src, b.listener, c);
        if (!c) return c;
      };
      return b;
    }

    function jb(a, b, c, d, e) {
      if (Array.isArray(b)) {
        for (var f = 0; f < b.length; f++) {
          jb(a, b[f], c, d, e);
        }

        return null;
      }

      c = kb(c);
      return a && a[A] ? a.sa(b, c, m(d) ? !!d.capture : !!d, e) : lb(a, b, c, !0, d, e);
    }

    function qb(a, b, c, d, e) {
      if (Array.isArray(b)) for (var f = 0; f < b.length; f++) {
        qb(a, b[f], c, d, e);
      } else (d = m(d) ? !!d.capture : !!d, c = kb(c), a && a[A]) ? (a = a.c, b = String(b).toString(), b in a.a && (f = a.a[b], c = db(f, c, d, e), -1 < c && (bb(f[c]), Array.prototype.splice.call(f, c, 1), 0 == f.length && (delete a.a[b], a.b--)))) : a && (a = mb(a)) && (b = a.a[b.toString()], a = -1, b && (a = db(b, c, d, e)), (c = -1 < a ? b[a] : null) && rb(c));
    }

    function rb(a) {
      if ("number" !== typeof a && a && !a.V) {
        var b = a.src;
        if (b && b[A]) eb(b.c, a);else {
          var c = a.type,
              d = a.proxy;
          b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent ? b.detachEvent(ob(c), d) : b.addListener && b.removeListener && b.removeListener(d);
          (c = mb(b)) ? (eb(c, a), 0 == c.b && (c.src = null, b[fb] = null)) : bb(a);
        }
      }
    }

    function ob(a) {
      return a in gb ? gb[a] : gb[a] = "on" + a;
    }

    function sb(a, b) {
      var c = a.listener,
          d = a.aa || a.src;
      a.X && rb(a);
      return c.call(d, b);
    }

    function pb(a, b) {
      if (a.V) return !0;

      if (!Wa) {
        if (!b) a: {
          b = ["window", "event"];

          for (var c = k, d = 0; d < b.length; d++) {
            if (c = c[b[d]], null == c) {
              b = null;
              break a;
            }
          }

          b = c;
        }
        b = new y(b, this);
        return sb(a, b);
      }

      return sb(a, new y(b, this));
    }

    function mb(a) {
      a = a[fb];
      return a instanceof cb ? a : null;
    }

    var tb = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);

    function kb(a) {
      if ("function" == ba(a)) return a;
      a[tb] || (a[tb] = function (b) {
        return a.handleEvent(b);
      });
      return a[tb];
    }

    function B() {
      t.call(this);
      this.c = new cb(this);
      this.J = this;
      this.A = null;
    }

    r(B, t);
    B.prototype[A] = !0;
    g = B.prototype;

    g.addEventListener = function (a, b, c, d) {
      ib(this, a, b, c, d);
    };

    g.removeEventListener = function (a, b, c, d) {
      qb(this, a, b, c, d);
    };

    g.dispatchEvent = function (a) {
      var b,
          c = this.A;
      if (c) for (b = []; c; c = c.A) {
        b.push(c);
      }
      c = this.J;
      var d = a.type || a;
      if ("string" === typeof a) a = new x(a, c);else if (a instanceof x) a.target = a.target || c;else {
        var e = a;
        a = new x(d, c);
        Ea(a, e);
      }
      e = !0;
      if (b) for (var f = b.length - 1; 0 <= f; f--) {
        var h = a.a = b[f];
        e = ub(h, d, !0, a) && e;
      }
      h = a.a = c;
      e = ub(h, d, !0, a) && e;
      e = ub(h, d, !1, a) && e;
      if (b) for (f = 0; f < b.length; f++) {
        h = a.a = b[f], e = ub(h, d, !1, a) && e;
      }
      return e;
    };

    g.C = function () {
      B.M.C.call(this);

      if (this.c) {
        var a = this.c,
            c;

        for (c in a.a) {
          for (var d = a.a[c], e = 0; e < d.length; e++) {
            bb(d[e]);
          }

          delete a.a[c];
          a.b--;
        }
      }

      this.A = null;
    };

    g.ra = function (a, b, c, d) {
      return this.c.add(String(a), b, !1, c, d);
    };

    g.sa = function (a, b, c, d) {
      return this.c.add(String(a), b, !0, c, d);
    };

    function ub(a, b, c, d) {
      b = a.c.a[String(b)];
      if (!b) return !0;
      b = b.concat();

      for (var e = !0, f = 0; f < b.length; ++f) {
        var h = b[f];

        if (h && !h.V && h.capture == c) {
          var l = h.listener,
              p = h.aa || h.src;
          h.X && eb(a.c, h);
          e = !1 !== l.call(p, d) && e;
        }
      }

      return e && !d.defaultPrevented;
    }

    var vb = k.JSON.stringify;

    function wb() {
      this.b = this.a = null;
    }

    var yb = new (
    /** @class */
    function () {
      function class_1(a, b, c) {
        this.f = c;
        this.c = a;
        this.g = b;
        this.b = 0;
        this.a = null;
      }

      class_1.prototype.get = function () {
        var a;
        0 < this.b ? (this.b--, a = this.a, this.a = a.next, a.next = null) : a = this.c();
        return a;
      };

      return class_1;
    }())(function () {
      return new xb();
    }, function (a) {
      a.reset();
    }, 100);

    wb.prototype.add = function (a, b) {
      var c = yb.get();
      c.set(a, b);
      this.b ? this.b.next = c : this.a = c;
      this.b = c;
    };

    function zb() {
      var a = Ab,
          b = null;
      a.a && (b = a.a, a.a = a.a.next, a.a || (a.b = null), b.next = null);
      return b;
    }

    function xb() {
      this.next = this.b = this.a = null;
    }

    xb.prototype.set = function (a, b) {
      this.a = a;
      this.b = b;
      this.next = null;
    };

    xb.prototype.reset = function () {
      this.next = this.b = this.a = null;
    };

    function Bb(a) {
      k.setTimeout(function () {
        throw a;
      }, 0);
    }

    function Cb(a, b) {
      Db || Eb();
      Fb || (Db(), Fb = !0);
      Ab.add(a, b);
    }

    var Db;

    function Eb() {
      var a = k.Promise.resolve(void 0);

      Db = function Db() {
        a.then(Gb);
      };
    }

    var Fb = !1,
        Ab = new wb();

    function Gb() {
      for (var a; a = zb();) {
        try {
          a.a.call(a.b);
        } catch (c) {
          Bb(c);
        }

        var b = yb;
        b.g(a);
        b.b < b.f && (b.b++, a.next = b.a, b.a = a);
      }

      Fb = !1;
    }

    function Hb(a, b) {
      B.call(this);
      this.b = a || 1;
      this.a = b || k;
      this.f = n(this.Ua, this);
      this.g = q();
    }

    r(Hb, B);
    g = Hb.prototype;
    g.Z = !1;
    g.L = null;

    g.Ua = function () {
      if (this.Z) {
        var a = q() - this.g;
        0 < a && a < .8 * this.b ? this.L = this.a.setTimeout(this.f, this.b - a) : (this.L && (this.a.clearTimeout(this.L), this.L = null), this.dispatchEvent("tick"), this.Z && (Ib(this), this.start()));
      }
    };

    g.start = function () {
      this.Z = !0;
      this.L || (this.L = this.a.setTimeout(this.f, this.b), this.g = q());
    };

    function Ib(a) {
      a.Z = !1;
      a.L && (a.a.clearTimeout(a.L), a.L = null);
    }

    g.C = function () {
      Hb.M.C.call(this);
      Ib(this);
      delete this.a;
    };

    function Jb(a, b, c) {
      if ("function" == ba(a)) c && (a = n(a, c));else if (a && "function" == typeof a.handleEvent) a = n(a.handleEvent, a);else throw Error("Invalid listener argument");
      return 2147483647 < Number(b) ? -1 : k.setTimeout(a, b || 0);
    }

    function Kb(a, b, c) {
      t.call(this);
      this.f = null != c ? n(a, c) : a;
      this.c = b;
      this.b = n(this.Pa, this);
      this.a = [];
    }

    r(Kb, t);
    g = Kb.prototype;
    g.ba = !1;
    g.T = null;

    g.Ia = function (a) {
      this.a = arguments;
      this.T ? this.ba = !0 : Lb(this);
    };

    g.C = function () {
      Kb.M.C.call(this);
      this.T && (k.clearTimeout(this.T), this.T = null, this.ba = !1, this.a = []);
    };

    g.Pa = function () {
      this.T = null;
      this.ba && (this.ba = !1, Lb(this));
    };

    function Lb(a) {
      a.T = Jb(a.b, a.c);
      a.f.apply(null, a.a);
    }

    function C(a) {
      t.call(this);
      this.b = a;
      this.a = {};
    }

    r(C, t);
    var Mb = [];

    function Nb(a, b, c, d) {
      Array.isArray(c) || (c && (Mb[0] = c.toString()), c = Mb);

      for (var e = 0; e < c.length; e++) {
        var f = ib(b, c[e], d || a.handleEvent, !1, a.b || a);
        if (!f) break;
        a.a[f.key] = f;
      }
    }

    function Ob(a) {
      Ba(a.a, function (b, c) {
        this.a.hasOwnProperty(c) && rb(b);
      }, a);
      a.a = {};
    }

    C.prototype.C = function () {
      C.M.C.call(this);
      Ob(this);
    };

    C.prototype.handleEvent = function () {
      throw Error("EventHandler.handleEvent not implemented");
    };

    function Pb() {}

    var Qb = null;

    function Rb() {
      return Qb = Qb || new B();
    }

    function Sb(a) {
      x.call(this, "serverreachability", a);
    }

    r(Sb, x);

    function E(a) {
      var b = Rb();
      b.dispatchEvent(new Sb(b, a));
    }

    function Tb(a) {
      x.call(this, "statevent", a);
    }

    r(Tb, x);

    function F(a) {
      var b = Rb();
      b.dispatchEvent(new Tb(b, a));
    }

    function Ub(a) {
      x.call(this, "timingevent", a);
    }

    r(Ub, x);

    function Vb(a, b) {
      if ("function" != ba(a)) throw Error("Fn must not be null and must be a function");
      return k.setTimeout(function () {
        a();
      }, b);
    }

    var Wb = {
      NO_ERROR: 0,
      Va: 1,
      bb: 2,
      ab: 3,
      Ya: 4,
      $a: 5,
      cb: 6,
      za: 7,
      TIMEOUT: 8,
      gb: 9
    };
    var Xb = {
      Xa: "complete",
      kb: "success",
      Aa: "error",
      za: "abort",
      ib: "ready",
      jb: "readystatechange",
      TIMEOUT: "timeout",
      eb: "incrementaldata",
      hb: "progress",
      Za: "downloadprogress",
      lb: "uploadprogress"
    };

    function Yb() {}

    Yb.prototype.a = null;

    function Zb(a) {
      var b;
      (b = a.a) || (b = a.a = {});
      return b;
    }

    function $b() {}

    var G = {
      OPEN: "a",
      Wa: "b",
      Aa: "c",
      fb: "d"
    };

    function ac() {
      x.call(this, "d");
    }

    r(ac, x);

    function bc() {
      x.call(this, "c");
    }

    r(bc, x);
    var cc;

    function dc() {}

    r(dc, Yb);
    cc = new dc();

    function H(a, b, c) {
      this.g = a;
      this.W = b;
      this.U = c || 1;
      this.G = new C(this);
      this.N = ec;
      a = Ka ? 125 : void 0;
      this.O = new Hb(a);
      this.m = null;
      this.b = !1;
      this.j = this.A = this.f = this.B = this.s = this.P = this.h = null;
      this.i = [];
      this.a = null;
      this.w = 0;
      this.c = this.v = null;
      this.H = -1;
      this.l = !1;
      this.J = 0;
      this.D = null;
      this.o = this.R = this.F = !1;
    }

    var ec = 45E3,
        fc = {},
        gc = {};
    g = H.prototype;

    g.setTimeout = function (a) {
      this.N = a;
    };

    function hc(a, b, c) {
      a.B = 1;
      a.f = ic(I(b));
      a.j = c;
      a.F = !0;
      jc(a, null);
    }

    function jc(a, b) {
      a.s = q();
      J(a);
      a.A = I(a.f);
      var c = a.A,
          d = a.U;
      Array.isArray(d) || (d = [String(d)]);
      kc(c.b, "t", d);
      a.w = 0;
      a.a = lc(a.g, a.g.w ? b : null);
      0 < a.J && (a.D = new Kb(n(a.ya, a, a.a), a.J));
      Nb(a.G, a.a, "readystatechange", a.Sa);
      b = a.m ? Ca(a.m) : {};
      a.j ? (a.v || (a.v = "POST"), b["Content-Type"] = "application/x-www-form-urlencoded", a.a.$(a.A, a.v, a.j, b)) : (a.v = "GET", a.a.$(a.A, a.v, null, b));
      E(1);
    }

    g.Sa = function (a) {
      a = a.target;
      var b = this.D;
      b && 3 == K(a) ? b.Ia() : this.ya(a);
    };

    g.ya = function (a) {
      try {
        if (a == this.a) a: {
          var b = K(this.a),
              c = this.a.qa(),
              d = this.a.S();

          if (!(3 > b || 3 == b && !Ka && !this.a.Y())) {
            this.l || 4 != b || 7 == c || (8 == c || 0 >= d ? E(3) : E(2));
            mc(this);
            var e = this.a.S();
            this.H = e;
            var f = this.a.Y();

            if (this.b = 200 == e) {
              if (this.R && !this.o) {
                b: {
                  if (this.a) {
                    var h,
                        l = this.a;

                    if ((h = l.a ? l.a.getResponseHeader("X-HTTP-Initial-Response") : null) && !wa(h)) {
                      var p = h;
                      break b;
                    }
                  }

                  p = null;
                }

                if (p) this.o = !0, nc(this, p);else {
                  this.b = !1;
                  this.c = 3;
                  F(12);
                  L(this);
                  pc(this);
                  break a;
                }
              }

              this.F ? (qc(this, b, f), Ka && this.b && 3 == b && (Nb(this.G, this.O, "tick", this.Ra), this.O.start())) : nc(this, f);
              4 == b && L(this);
              this.b && !this.l && (4 == b ? rc(this.g, this) : (this.b = !1, J(this)));
            } else 400 == e && 0 < f.indexOf("Unknown SID") ? (this.c = 3, F(12)) : (this.c = 0, F(13)), L(this), pc(this);
          }
        }
      } catch (D) {} finally {}
    };

    function qc(a, b, c) {
      for (var d = !0; !a.l && a.w < c.length;) {
        var e = tc(a, c);

        if (e == gc) {
          4 == b && (a.c = 4, F(14), d = !1);
          break;
        } else if (e == fc) {
          a.c = 4;
          F(15);
          d = !1;
          break;
        } else nc(a, e);
      }

      4 == b && 0 == c.length && (a.c = 1, F(16), d = !1);
      a.b = a.b && d;
      d || (L(a), pc(a));
    }

    g.Ra = function () {
      if (this.a) {
        var a = K(this.a),
            b = this.a.Y();
        this.w < b.length && (mc(this), qc(this, a, b), this.b && 4 != a && J(this));
      }
    };

    function tc(a, b) {
      var c = a.w,
          d = b.indexOf("\n", c);
      if (-1 == d) return gc;
      c = Number(b.substring(c, d));
      if (isNaN(c)) return fc;
      d += 1;
      if (d + c > b.length) return gc;
      b = b.substr(d, c);
      a.w = d + c;
      return b;
    }

    g.cancel = function () {
      this.l = !0;
      L(this);
    };

    function J(a) {
      a.P = q() + a.N;
      uc(a, a.N);
    }

    function uc(a, b) {
      if (null != a.h) throw Error("WatchDog timer not null");
      a.h = Vb(n(a.Qa, a), b);
    }

    function mc(a) {
      a.h && (k.clearTimeout(a.h), a.h = null);
    }

    g.Qa = function () {
      this.h = null;
      var a = q();
      0 <= a - this.P ? (2 != this.B && (E(3), F(17)), L(this), this.c = 2, pc(this)) : uc(this, this.P - a);
    };

    function pc(a) {
      0 == a.g.u || a.l || rc(a.g, a);
    }

    function L(a) {
      mc(a);
      var b = a.D;
      b && "function" == typeof b.da && b.da();
      a.D = null;
      Ib(a.O);
      Ob(a.G);
      a.a && (b = a.a, a.a = null, b.abort(), b.da());
    }

    function nc(a, b) {
      try {
        var c = a.g;
        if (0 != c.u && (c.a == a || vc(c.b, a))) if (c.A = a.H, !a.o && vc(c.b, a) && 3 == c.u) {
          try {
            var d = c.ja.a.parse(b);
          } catch (oc) {
            d = null;
          }

          if (Array.isArray(d) && 3 == d.length) {
            var e = d;
            if (0 == e[0]) a: {
              if (!c.i) {
                if (c.a) if (c.a.s + 3E3 < a.s) wc(c), c.a.cancel(), c.a = null;else break a;
                xc(c);
                F(18);
              }
            } else c.ia = e[1], 0 < c.ia - c.G && 37500 > e[2] && c.U && 0 == c.m && !c.l && (c.l = Vb(n(c.Na, c), 6E3));

            if (1 >= yc(c.b) && c.O) {
              try {
                c.O();
              } catch (oc) {}

              c.O = void 0;
            }
          } else M(c, 11);
        } else if ((a.o || c.a == a) && wc(c), !wa(b)) for (b = d = c.ja.a.parse(b), d = 0; d < b.length; d++) {
          if (e = b[d], c.G = e[0], e = e[1], 2 == c.u) {
            if ("c" == e[0]) {
              c.B = e[1];
              c.R = e[2];
              var f = e[3];
              null != f && (c.oa = f);
              var h = e[5];
              null != h && "number" === typeof h && 0 < h && (c.D = 1.5 * h);
              var l = c,
                  p = a.a;

              if (p) {
                var D = p.a ? p.a.getResponseHeader("X-Client-Wire-Protocol") : null;

                if (D) {
                  var z = l.b;
                  !z.a && (u(D, "spdy") || u(D, "quic") || u(D, "h2")) && (z.f = z.g, z.a = new Set(), z.b && (zc(z, z.b), z.b = null));
                }

                if (l.s) {
                  var ta = p.a ? p.a.getResponseHeader("X-HTTP-Session-Id") : null;
                  ta && (l.ha = ta, N(l.v, l.s, ta));
                }
              }

              c.u = 3;
              c.c && c.c.na();
              l = c;
              var ua = a;
              l.ea = Ac(l, l.w ? l.R : null, l.P);

              if (ua.o) {
                Bc(l.b, ua);
                var va = ua,
                    sc = l.D;
                sc && va.setTimeout(sc);
                va.h && (mc(va), J(va));
                l.a = ua;
              } else Cc(l);

              0 < c.f.length && Dc(c);
            } else "stop" != e[0] && "close" != e[0] || M(c, 7);
          } else 3 == c.u && ("stop" == e[0] || "close" == e[0] ? "stop" == e[0] ? M(c, 7) : Ec(c) : "noop" != e[0] && c.c && c.c.ma(e), c.m = 0);
        }
        E(4);
      } catch (oc) {}
    }

    function Fc(a) {
      if (a.I && "function" == typeof a.I) return a.I();
      if ("string" === typeof a) return a.split("");

      if (da(a)) {
        for (var b = [], c = a.length, d = 0; d < c; d++) {
          b.push(a[d]);
        }

        return b;
      }

      b = [];
      c = 0;

      for (d in a) {
        b[c++] = a[d];
      }

      return a = b;
    }

    function Gc(a, b) {
      if (a.forEach && "function" == typeof a.forEach) a.forEach(b, void 0);else if (da(a) || "string" === typeof a) oa(a, b, void 0);else {
        if (a.K && "function" == typeof a.K) var c = a.K();else if (a.I && "function" == typeof a.I) c = void 0;else if (da(a) || "string" === typeof a) {
          c = [];

          for (var d = a.length, e = 0; e < d; e++) {
            c.push(e);
          }
        } else for (e in c = [], d = 0, a) {
          c[d++] = e;
        }
        d = Fc(a);
        e = d.length;

        for (var f = 0; f < e; f++) {
          b.call(void 0, d[f], c && c[f], a);
        }
      }
    }

    function O(a, b) {
      this.b = {};
      this.a = [];
      this.c = 0;
      var c = arguments.length;

      if (1 < c) {
        if (c % 2) throw Error("Uneven number of arguments");

        for (var d = 0; d < c; d += 2) {
          this.set(arguments[d], arguments[d + 1]);
        }
      } else if (a) if (a instanceof O) for (c = a.K(), d = 0; d < c.length; d++) {
        this.set(c[d], a.get(c[d]));
      } else for (d in a) {
        this.set(d, a[d]);
      }
    }

    g = O.prototype;

    g.I = function () {
      Hc(this);

      for (var a = [], b = 0; b < this.a.length; b++) {
        a.push(this.b[this.a[b]]);
      }

      return a;
    };

    g.K = function () {
      Hc(this);
      return this.a.concat();
    };

    function Hc(a) {
      if (a.c != a.a.length) {
        for (var b = 0, c = 0; b < a.a.length;) {
          var d = a.a[b];
          P(a.b, d) && (a.a[c++] = d);
          b++;
        }

        a.a.length = c;
      }

      if (a.c != a.a.length) {
        var e = {};

        for (c = b = 0; b < a.a.length;) {
          d = a.a[b], P(e, d) || (a.a[c++] = d, e[d] = 1), b++;
        }

        a.a.length = c;
      }
    }

    g.get = function (a, b) {
      return P(this.b, a) ? this.b[a] : b;
    };

    g.set = function (a, b) {
      P(this.b, a) || (this.c++, this.a.push(a));
      this.b[a] = b;
    };

    g.forEach = function (a, b) {
      for (var c = this.K(), d = 0; d < c.length; d++) {
        var e = c[d],
            f = this.get(e);
        a.call(b, f, e, this);
      }
    };

    function P(a, b) {
      return Object.prototype.hasOwnProperty.call(a, b);
    }

    var Ic = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;

    function Jc(a, b) {
      if (a) {
        a = a.split("&");

        for (var c = 0; c < a.length; c++) {
          var d = a[c].indexOf("="),
              e = null;

          if (0 <= d) {
            var f = a[c].substring(0, d);
            e = a[c].substring(d + 1);
          } else f = a[c];

          b(f, e ? decodeURIComponent(e.replace(/\+/g, " ")) : "");
        }
      }
    }

    function Q(a, b) {
      this.c = this.j = this.f = "";
      this.h = null;
      this.i = this.g = "";
      this.a = !1;

      if (a instanceof Q) {
        this.a = void 0 !== b ? b : a.a;
        Kc(this, a.f);
        this.j = a.j;
        Lc(this, a.c);
        Mc(this, a.h);
        this.g = a.g;
        b = a.b;
        var c = new R();
        c.c = b.c;
        b.a && (c.a = new O(b.a), c.b = b.b);
        Nc(this, c);
        this.i = a.i;
      } else a && (c = String(a).match(Ic)) ? (this.a = !!b, Kc(this, c[1] || "", !0), this.j = S(c[2] || ""), Lc(this, c[3] || "", !0), Mc(this, c[4]), this.g = S(c[5] || "", !0), Nc(this, c[6] || "", !0), this.i = S(c[7] || "")) : (this.a = !!b, this.b = new R(null, this.a));
    }

    Q.prototype.toString = function () {
      var a = [],
          b = this.f;
      b && a.push(T(b, Oc, !0), ":");
      var c = this.c;
      if (c || "file" == b) a.push("//"), (b = this.j) && a.push(T(b, Oc, !0), "@"), a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), c = this.h, null != c && a.push(":", String(c));
      if (c = this.g) this.c && "/" != c.charAt(0) && a.push("/"), a.push(T(c, "/" == c.charAt(0) ? Pc : Qc, !0));
      (c = this.b.toString()) && a.push("?", c);
      (c = this.i) && a.push("#", T(c, Rc));
      return a.join("");
    };

    function I(a) {
      return new Q(a);
    }

    function Kc(a, b, c) {
      a.f = c ? S(b, !0) : b;
      a.f && (a.f = a.f.replace(/:$/, ""));
    }

    function Lc(a, b, c) {
      a.c = c ? S(b, !0) : b;
    }

    function Mc(a, b) {
      if (b) {
        b = Number(b);
        if (isNaN(b) || 0 > b) throw Error("Bad port number " + b);
        a.h = b;
      } else a.h = null;
    }

    function Nc(a, b, c) {
      b instanceof R ? (a.b = b, Sc(a.b, a.a)) : (c || (b = T(b, Tc)), a.b = new R(b, a.a));
    }

    function N(a, b, c) {
      a.b.set(b, c);
    }

    function ic(a) {
      N(a, "zx", Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ q()).toString(36));
      return a;
    }

    function Uc(a) {
      return a instanceof Q ? I(a) : new Q(a, void 0);
    }

    function Vc(a, b, c, d) {
      var e = new Q(null, void 0);
      a && Kc(e, a);
      b && Lc(e, b);
      c && Mc(e, c);
      d && (e.g = d);
      return e;
    }

    function S(a, b) {
      return a ? b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : "";
    }

    function T(a, b, c) {
      return "string" === typeof a ? (a = encodeURI(a).replace(b, Wc), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null;
    }

    function Wc(a) {
      a = a.charCodeAt(0);
      return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16);
    }

    var Oc = /[#\/\?@]/g,
        Qc = /[#\?:]/g,
        Pc = /[#\?]/g,
        Tc = /[#\?@]/g,
        Rc = /#/g;

    function R(a, b) {
      this.b = this.a = null;
      this.c = a || null;
      this.f = !!b;
    }

    function U(a) {
      a.a || (a.a = new O(), a.b = 0, a.c && Jc(a.c, function (b, c) {
        a.add(decodeURIComponent(b.replace(/\+/g, " ")), c);
      }));
    }

    g = R.prototype;

    g.add = function (a, b) {
      U(this);
      this.c = null;
      a = V(this, a);
      var c = this.a.get(a);
      c || this.a.set(a, c = []);
      c.push(b);
      this.b += 1;
      return this;
    };

    function Xc(a, b) {
      U(a);
      b = V(a, b);
      P(a.a.b, b) && (a.c = null, a.b -= a.a.get(b).length, a = a.a, P(a.b, b) && (delete a.b[b], a.c--, a.a.length > 2 * a.c && Hc(a)));
    }

    function Yc(a, b) {
      U(a);
      b = V(a, b);
      return P(a.a.b, b);
    }

    g.forEach = function (a, b) {
      U(this);
      this.a.forEach(function (c, d) {
        oa(c, function (e) {
          a.call(b, e, d, this);
        }, this);
      }, this);
    };

    g.K = function () {
      U(this);

      for (var a = this.a.I(), b = this.a.K(), c = [], d = 0; d < b.length; d++) {
        for (var e = a[d], f = 0; f < e.length; f++) {
          c.push(b[d]);
        }
      }

      return c;
    };

    g.I = function (a) {
      U(this);
      var b = [];
      if ("string" === typeof a) Yc(this, a) && (b = ra(b, this.a.get(V(this, a))));else {
        a = this.a.I();

        for (var c = 0; c < a.length; c++) {
          b = ra(b, a[c]);
        }
      }
      return b;
    };

    g.set = function (a, b) {
      U(this);
      this.c = null;
      a = V(this, a);
      Yc(this, a) && (this.b -= this.a.get(a).length);
      this.a.set(a, [b]);
      this.b += 1;
      return this;
    };

    g.get = function (a, b) {
      if (!a) return b;
      a = this.I(a);
      return 0 < a.length ? String(a[0]) : b;
    };

    function kc(a, b, c) {
      Xc(a, b);
      0 < c.length && (a.c = null, a.a.set(V(a, b), sa(c)), a.b += c.length);
    }

    g.toString = function () {
      if (this.c) return this.c;
      if (!this.a) return "";

      for (var a = [], b = this.a.K(), c = 0; c < b.length; c++) {
        var d = b[c],
            e = encodeURIComponent(String(d));
        d = this.I(d);

        for (var f = 0; f < d.length; f++) {
          var h = e;
          "" !== d[f] && (h += "=" + encodeURIComponent(String(d[f])));
          a.push(h);
        }
      }

      return this.c = a.join("&");
    };

    function V(a, b) {
      b = String(b);
      a.f && (b = b.toLowerCase());
      return b;
    }

    function Sc(a, b) {
      b && !a.f && (U(a), a.c = null, a.a.forEach(function (c, d) {
        var e = d.toLowerCase();
        d != e && (Xc(this, d), kc(this, e, c));
      }, a));
      a.f = b;
    }

    function Zc(a, b) {
      this.b = a;
      this.a = b;
    }

    function $c(a) {
      this.g = a || ad;
      k.PerformanceNavigationTiming ? (a = k.performance.getEntriesByType("navigation"), a = 0 < a.length && ("hq" == a[0].nextHopProtocol || "h2" == a[0].nextHopProtocol)) : a = !!(k.ca && k.ca.ua && k.ca.ua() && k.ca.ua().mb);
      this.f = a ? this.g : 1;
      this.a = null;
      1 < this.f && (this.a = new Set());
      this.b = null;
      this.c = [];
    }

    var ad = 10;

    function bd(a) {
      return a.b ? !0 : a.a ? a.a.size >= a.f : !1;
    }

    function yc(a) {
      return a.b ? 1 : a.a ? a.a.size : 0;
    }

    function vc(a, b) {
      return a.b ? a.b == b : a.a ? a.a.has(b) : !1;
    }

    function zc(a, b) {
      a.a ? a.a.add(b) : a.b = b;
    }

    function Bc(a, b) {
      a.b && a.b == b ? a.b = null : a.a && a.a.has(b) && a.a["delete"](b);
    }

    $c.prototype.cancel = function () {
      var e_1, _a;

      this.c = cd(this);
      if (this.b) this.b.cancel(), this.b = null;else if (this.a && 0 !== this.a.size) {
        try {
          for (var _b = __values(this.a.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
            var a = _c.value;
            a.cancel();
          }
        } catch (e_1_1) {
          e_1 = {
            error: e_1_1
          };
        } finally {
          try {
            if (_c && !_c.done && (_a = _b["return"])) _a.call(_b);
          } finally {
            if (e_1) throw e_1.error;
          }
        }

        this.a.clear();
      }
    };

    function cd(a) {
      var e_2, _a;

      if (null != a.b) return a.c.concat(a.b.i);

      if (null != a.a && 0 !== a.a.size) {
        var b = a.c;

        try {
          for (var _b = __values(a.a.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
            var c = _c.value;
            b = b.concat(c.i);
          }
        } catch (e_2_1) {
          e_2 = {
            error: e_2_1
          };
        } finally {
          try {
            if (_c && !_c.done && (_a = _b["return"])) _a.call(_b);
          } finally {
            if (e_2) throw e_2.error;
          }
        }

        return b;
      }

      return sa(a.c);
    }

    function dd() {}

    dd.prototype.stringify = function (a) {
      return k.JSON.stringify(a, void 0);
    };

    dd.prototype.parse = function (a) {
      return k.JSON.parse(a, void 0);
    };

    function ed() {
      this.a = new dd();
    }

    function fd(a, b, c) {
      var d = c || "";

      try {
        Gc(a, function (e, f) {
          var h = e;
          m(e) && (h = vb(e));
          b.push(d + f + "=" + encodeURIComponent(h));
        });
      } catch (e) {
        throw b.push(d + "type=" + encodeURIComponent("_badmap")), e;
      }
    }

    function gd(a, b) {
      var c = new Pb();

      if (k.Image) {
        var d = new Image();
        d.onload = ka(hd, c, d, "TestLoadImage: loaded", !0, b);
        d.onerror = ka(hd, c, d, "TestLoadImage: error", !1, b);
        d.onabort = ka(hd, c, d, "TestLoadImage: abort", !1, b);
        d.ontimeout = ka(hd, c, d, "TestLoadImage: timeout", !1, b);
        k.setTimeout(function () {
          if (d.ontimeout) d.ontimeout();
        }, 1E4);
        d.src = a;
      } else b(!1);
    }

    function hd(a, b, c, d, e) {
      try {
        b.onload = null, b.onerror = null, b.onabort = null, b.ontimeout = null, e(d);
      } catch (f) {}
    }

    var id = k.JSON.parse;

    function W(a) {
      B.call(this);
      this.headers = new O();
      this.G = a || null;
      this.b = !1;
      this.s = this.a = null;
      this.D = "";
      this.h = 0;
      this.f = "";
      this.g = this.w = this.l = this.v = !1;
      this.o = 0;
      this.m = null;
      this.H = jd;
      this.B = this.F = !1;
    }

    r(W, B);
    var jd = "",
        kd = /^https?$/i,
        ld = ["POST", "PUT"];
    g = W.prototype;

    g.$ = function (a, b, c, d) {
      if (this.a) throw Error("[goog.net.XhrIo] Object is active with another request=" + this.D + "; newUri=" + a);
      b = b ? b.toUpperCase() : "GET";
      this.D = a;
      this.f = "";
      this.h = 0;
      this.v = !1;
      this.b = !0;
      this.a = new XMLHttpRequest();
      this.s = this.G ? Zb(this.G) : Zb(cc);
      this.a.onreadystatechange = n(this.va, this);

      try {
        this.w = !0, this.a.open(b, String(a), !0), this.w = !1;
      } catch (f) {
        md(this, f);
        return;
      }

      a = c || "";
      var e = new O(this.headers);
      d && Gc(d, function (f, h) {
        e.set(h, f);
      });
      d = pa(e.K());
      c = k.FormData && a instanceof k.FormData;
      !(0 <= na(ld, b)) || d || c || e.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
      e.forEach(function (f, h) {
        this.a.setRequestHeader(h, f);
      }, this);
      this.H && (this.a.responseType = this.H);
      "withCredentials" in this.a && this.a.withCredentials !== this.F && (this.a.withCredentials = this.F);

      try {
        nd(this), 0 < this.o && ((this.B = od(this.a)) ? (this.a.timeout = this.o, this.a.ontimeout = n(this.ta, this)) : this.m = Jb(this.ta, this.o, this)), this.l = !0, this.a.send(a), this.l = !1;
      } catch (f) {
        md(this, f);
      }
    };

    function od(a) {
      return w && Sa(9) && "number" === typeof a.timeout && void 0 !== a.ontimeout;
    }

    function qa(a) {
      return "content-type" == a.toLowerCase();
    }

    g.ta = function () {
      "undefined" != typeof goog && this.a && (this.f = "Timed out after " + this.o + "ms, aborting", this.h = 8, this.dispatchEvent("timeout"), this.abort(8));
    };

    function md(a, b) {
      a.b = !1;
      a.a && (a.g = !0, a.a.abort(), a.g = !1);
      a.f = b;
      a.h = 5;
      pd(a);
      qd(a);
    }

    function pd(a) {
      a.v || (a.v = !0, a.dispatchEvent("complete"), a.dispatchEvent("error"));
    }

    g.abort = function (a) {
      this.a && this.b && (this.b = !1, this.g = !0, this.a.abort(), this.g = !1, this.h = a || 7, this.dispatchEvent("complete"), this.dispatchEvent("abort"), qd(this));
    };

    g.C = function () {
      this.a && (this.b && (this.b = !1, this.g = !0, this.a.abort(), this.g = !1), qd(this, !0));
      W.M.C.call(this);
    };

    g.va = function () {
      this.j || (this.w || this.l || this.g ? rd(this) : this.Oa());
    };

    g.Oa = function () {
      rd(this);
    };

    function rd(a) {
      if (a.b && "undefined" != typeof goog && (!a.s[1] || 4 != K(a) || 2 != a.S())) if (a.l && 4 == K(a)) Jb(a.va, 0, a);else if (a.dispatchEvent("readystatechange"), 4 == K(a)) {
        a.b = !1;

        try {
          var b = a.S();

          a: switch (b) {
            case 200:
            case 201:
            case 202:
            case 204:
            case 206:
            case 304:
            case 1223:
              var c = !0;
              break a;

            default:
              c = !1;
          }

          var d;

          if (!(d = c)) {
            var e;

            if (e = 0 === b) {
              var f = String(a.D).match(Ic)[1] || null;

              if (!f && k.self && k.self.location) {
                var h = k.self.location.protocol;
                f = h.substr(0, h.length - 1);
              }

              e = !kd.test(f ? f.toLowerCase() : "");
            }

            d = e;
          }

          if (d) a.dispatchEvent("complete"), a.dispatchEvent("success");else {
            a.h = 6;

            try {
              var l = 2 < K(a) ? a.a.statusText : "";
            } catch (p) {
              l = "";
            }

            a.f = l + " [" + a.S() + "]";
            pd(a);
          }
        } finally {
          qd(a);
        }
      }
    }

    function qd(a, b) {
      if (a.a) {
        nd(a);
        var c = a.a,
            d = a.s[0] ? aa : null;
        a.a = null;
        a.s = null;
        b || a.dispatchEvent("ready");

        try {
          c.onreadystatechange = d;
        } catch (e) {}
      }
    }

    function nd(a) {
      a.a && a.B && (a.a.ontimeout = null);
      a.m && (k.clearTimeout(a.m), a.m = null);
    }

    function K(a) {
      return a.a ? a.a.readyState : 0;
    }

    g.S = function () {
      try {
        return 2 < K(this) ? this.a.status : -1;
      } catch (a) {
        return -1;
      }
    };

    g.Y = function () {
      try {
        return this.a ? this.a.responseText : "";
      } catch (a) {
        return "";
      }
    };

    g.Ja = function (a) {
      if (this.a) {
        var b = this.a.responseText;
        a && 0 == b.indexOf(a) && (b = b.substring(a.length));
        return id(b);
      }
    };

    g.qa = function () {
      return this.h;
    };

    g.Ma = function () {
      return "string" === typeof this.f ? this.f : String(this.f);
    };

    function sd(a) {
      var b = "";
      Ba(a, function (c, d) {
        b += d;
        b += ":";
        b += c;
        b += "\r\n";
      });
      return b;
    }

    function td(a, b, c) {
      a: {
        for (d in c) {
          var d = !1;
          break a;
        }

        d = !0;
      }

      d || (c = sd(c), "string" === typeof a ? null != c && encodeURIComponent(String(c)) : N(a, b, c));
    }

    function X(a, b, c) {
      return c && c.internalChannelParams ? c.internalChannelParams[a] || b : b;
    }

    function ud(a) {
      this.f = [];
      this.R = this.ea = this.v = this.P = this.a = this.ha = this.s = this.N = this.h = this.F = this.j = null;
      this.Fa = this.H = 0;
      this.Ca = X("failFast", !1, a);
      this.U = this.l = this.i = this.g = this.c = null;
      this.W = !0;
      this.A = this.ia = this.G = -1;
      this.J = this.m = this.o = 0;
      this.Ba = X("baseRetryDelayMs", 5E3, a);
      this.Ga = X("retryDelaySeedMs", 1E4, a);
      this.Da = X("forwardChannelMaxRetries", 2, a);
      this.ga = X("forwardChannelRequestTimeoutMs", 2E4, a);
      this.Ea = a && a.nb || void 0;
      this.D = void 0;
      this.w = a && a.supportsCrossDomainXhr || !1;
      this.B = "";
      this.b = new $c(a && a.concurrentRequestLimit);
      this.ja = new ed();
      this.fa = a && a.fastHandshake || !1;
      a && a.forceLongPolling && (this.W = !1);
      this.O = void 0;
    }

    g = ud.prototype;
    g.oa = 8;
    g.u = 1;

    function Ec(a) {
      vd(a);

      if (3 == a.u) {
        var b = a.H++,
            c = I(a.v);
        N(c, "SID", a.B);
        N(c, "RID", b);
        N(c, "TYPE", "terminate");
        wd(a, c);
        b = new H(a, b, void 0);
        b.B = 2;
        b.f = ic(I(c));
        c = !1;
        k.navigator && k.navigator.sendBeacon && (c = k.navigator.sendBeacon(b.f.toString(), ""));
        !c && k.Image && (new Image().src = b.f, c = !0);
        c || (b.a = lc(b.g, null), b.a.$(b.f));
        b.s = q();
        J(b);
      }

      xd(a);
    }

    function vd(a) {
      a.a && (a.a.cancel(), a.a = null);
      a.i && (k.clearTimeout(a.i), a.i = null);
      wc(a);
      a.b.cancel();
      a.g && ("number" === typeof a.g && k.clearTimeout(a.g), a.g = null);
    }

    function yd(a, b) {
      a.f.push(new Zc(a.Fa++, b));
      3 == a.u && Dc(a);
    }

    function Dc(a) {
      bd(a.b) || a.g || (a.g = !0, Cb(a.xa, a), a.o = 0);
    }

    function zd(a, b) {
      if (yc(a.b) >= a.b.f - (a.g ? 1 : 0)) return !1;
      if (a.g) return a.f = b.i.concat(a.f), !0;
      if (1 == a.u || 2 == a.u || a.o >= (a.Ca ? 0 : a.Da)) return !1;
      a.g = Vb(n(a.xa, a, b), Ad(a, a.o));
      a.o++;
      return !0;
    }

    g.xa = function (a) {
      if (this.g) if (this.g = null, 1 == this.u) {
        if (!a) {
          this.H = Math.floor(1E5 * Math.random());
          a = this.H++;
          var b = new H(this, a, void 0),
              c = this.j;
          this.F && (c ? (c = Ca(c), Ea(c, this.F)) : c = this.F);
          null === this.h && (b.m = c);
          var d;
          if (this.fa) a: {
            for (var e = d = 0; e < this.f.length; e++) {
              b: {
                var f = this.f[e];

                if ("__data__" in f.a && (f = f.a.__data__, "string" === typeof f)) {
                  f = f.length;
                  break b;
                }

                f = void 0;
              }

              if (void 0 === f) break;
              d += f;

              if (4096 < d) {
                d = e;
                break a;
              }

              if (4096 === d || e === this.f.length - 1) {
                d = e + 1;
                break a;
              }
            }

            d = 1E3;
          } else d = 1E3;
          d = Bd(this, b, d);
          e = I(this.v);
          N(e, "RID", a);
          N(e, "CVER", 22);
          this.s && N(e, "X-HTTP-Session-Id", this.s);
          wd(this, e);
          this.h && c && td(e, this.h, c);
          zc(this.b, b);
          this.fa ? (N(e, "$req", d), N(e, "SID", "null"), b.R = !0, hc(b, e, null)) : hc(b, e, d);
          this.u = 2;
        }
      } else 3 == this.u && (a ? Cd(this, a) : 0 == this.f.length || bd(this.b) || Cd(this));
    };

    function Cd(a, b) {
      var c;
      b ? c = b.W : c = a.H++;
      var d = I(a.v);
      N(d, "SID", a.B);
      N(d, "RID", c);
      N(d, "AID", a.G);
      wd(a, d);
      a.h && a.j && td(d, a.h, a.j);
      c = new H(a, c, a.o + 1);
      null === a.h && (c.m = a.j);
      b && (a.f = b.i.concat(a.f));
      b = Bd(a, c, 1E3);
      c.setTimeout(Math.round(.5 * a.ga) + Math.round(.5 * a.ga * Math.random()));
      zc(a.b, c);
      hc(c, d, b);
    }

    function wd(a, b) {
      a.c && Gc({}, function (c, d) {
        N(b, d, c);
      });
    }

    function Bd(a, b, c) {
      c = Math.min(a.f.length, c);
      var d = a.c ? n(a.c.Ha, a.c, a) : null;

      a: for (var e = a.f, f = -1;;) {
        var h = ["count=" + c];
        -1 == f ? 0 < c ? (f = e[0].b, h.push("ofs=" + f)) : f = 0 : h.push("ofs=" + f);

        for (var l = !0, p = 0; p < c; p++) {
          var D = e[p].b,
              z = e[p].a;
          D -= f;
          if (0 > D) f = Math.max(0, e[p].b - 100), l = !1;else try {
            fd(z, h, "req" + D + "_");
          } catch (ta) {
            d && d(z);
          }
        }

        if (l) {
          d = h.join("&");
          break a;
        }
      }

      a = a.f.splice(0, c);
      b.i = a;
      return d;
    }

    function Cc(a) {
      a.a || a.i || (a.J = 1, Cb(a.wa, a), a.m = 0);
    }

    function xc(a) {
      if (a.a || a.i || 3 <= a.m) return !1;
      a.J++;
      a.i = Vb(n(a.wa, a), Ad(a, a.m));
      a.m++;
      return !0;
    }

    g.wa = function () {
      this.i = null;
      this.a = new H(this, "rpc", this.J);
      null === this.h && (this.a.m = this.j);
      this.a.J = 0;
      var a = I(this.ea);
      N(a, "RID", "rpc");
      N(a, "SID", this.B);
      N(a, "CI", this.U ? "0" : "1");
      N(a, "AID", this.G);
      wd(this, a);
      N(a, "TYPE", "xmlhttp");
      this.h && this.j && td(a, this.h, this.j);
      this.D && this.a.setTimeout(this.D);
      var b = this.a,
          c = this.R;
      b.B = 1;
      b.f = ic(I(a));
      b.j = null;
      b.F = !0;
      jc(b, c);
    };

    g.Na = function () {
      null != this.l && (this.l = null, this.a.cancel(), this.a = null, xc(this), F(19));
    };

    function wc(a) {
      null != a.l && (k.clearTimeout(a.l), a.l = null);
    }

    function rc(a, b) {
      var c = null;

      if (a.a == b) {
        wc(a);
        a.a = null;
        var d = 2;
      } else if (vc(a.b, b)) c = b.i, Bc(a.b, b), d = 1;else return;

      a.A = b.H;
      if (0 != a.u) if (b.b) {
        if (1 == d) {
          c = b.j ? b.j.length : 0;
          b = q() - b.s;
          var e = a.o;
          d = Rb();
          d.dispatchEvent(new Ub(d, c, b, e));
          Dc(a);
        } else Cc(a);
      } else if (e = b.c, 3 == e || 0 == e && 0 < a.A || !(1 == d && zd(a, b) || 2 == d && xc(a))) switch (c && 0 < c.length && (b = a.b, b.c = b.c.concat(c)), e) {
        case 1:
          M(a, 5);
          break;

        case 4:
          M(a, 10);
          break;

        case 3:
          M(a, 6);
          break;

        default:
          M(a, 2);
      }
    }

    function Ad(a, b) {
      var c = a.Ba + Math.floor(Math.random() * a.Ga);
      a.c || (c *= 2);
      return c * b;
    }

    function M(a, b) {
      if (2 == b) {
        var c = null;
        a.c && (c = null);
        var d = n(a.Ta, a);
        c || (c = new Q("//www.google.com/images/cleardot.gif"), k.location && "http" == k.location.protocol || Kc(c, "https"), ic(c));
        gd(c.toString(), d);
      } else F(2);

      a.u = 0;
      a.c && a.c.la(b);
      xd(a);
      vd(a);
    }

    g.Ta = function (a) {
      a ? F(2) : F(1);
    };

    function xd(a) {
      a.u = 0;
      a.A = -1;

      if (a.c) {
        if (0 != cd(a.b).length || 0 != a.f.length) a.b.c.length = 0, sa(a.f), a.f.length = 0;
        a.c.ka();
      }
    }

    function Ac(a, b, c) {
      var d = Uc(c);
      if ("" != d.c) b && Lc(d, b + "." + d.c), Mc(d, d.h);else {
        var e = k.location;
        d = Vc(e.protocol, b ? b + "." + e.hostname : e.hostname, +e.port, c);
      }
      a.N && Ba(a.N, function (f, h) {
        N(d, h, f);
      });
      b = a.s;
      c = a.ha;
      b && c && N(d, b, c);
      N(d, "VER", a.oa);
      wd(a, d);
      return d;
    }

    function lc(a, b) {
      if (b && !a.w) throw Error("Can't create secondary domain capable XhrIo object.");
      b = new W(a.Ea);
      b.F = a.w;
      return b;
    }

    function Dd() {}

    g = Dd.prototype;

    g.na = function () {};

    g.ma = function () {};

    g.la = function () {};

    g.ka = function () {};

    g.Ha = function () {};

    function Ed() {
      if (w && !(10 <= Number(Va))) throw Error("Environmental error: no available transport.");
    }

    Ed.prototype.a = function (a, b) {
      return new Y(a, b);
    };

    function Y(a, b) {
      B.call(this);
      this.a = new ud(b);
      this.l = a;
      this.b = b && b.messageUrlParams || null;
      a = b && b.messageHeaders || null;
      b && b.clientProtocolHeaderRequired && (a ? a["X-Client-Protocol"] = "webchannel" : a = {
        "X-Client-Protocol": "webchannel"
      });
      this.a.j = a;
      a = b && b.initMessageHeaders || null;
      b && b.messageContentType && (a ? a["X-WebChannel-Content-Type"] = b.messageContentType : a = {
        "X-WebChannel-Content-Type": b.messageContentType
      });
      b && b.pa && (a ? a["X-WebChannel-Client-Profile"] = b.pa : a = {
        "X-WebChannel-Client-Profile": b.pa
      });
      this.a.F = a;
      (a = b && b.httpHeadersOverwriteParam) && !wa(a) && (this.a.h = a);
      this.h = b && b.supportsCrossDomainXhr || !1;
      this.g = b && b.sendRawJson || !1;
      (b = b && b.httpSessionIdParam) && !wa(b) && (this.a.s = b, a = this.b, null !== a && b in a && (a = this.b, b in a && delete a[b]));
      this.f = new Z(this);
    }

    r(Y, B);
    g = Y.prototype;

    g.addEventListener = function (a, b, c, d) {
      Y.M.addEventListener.call(this, a, b, c, d);
    };

    g.removeEventListener = function (a, b, c, d) {
      Y.M.removeEventListener.call(this, a, b, c, d);
    };

    g.Ka = function () {
      this.a.c = this.f;
      this.h && (this.a.w = !0);
      var a = this.a,
          b = this.l,
          c = this.b || void 0;
      F(0);
      a.P = b;
      a.N = c || {};
      a.U = a.W;
      a.v = Ac(a, null, a.P);
      Dc(a);
    };

    g.close = function () {
      Ec(this.a);
    };

    g.La = function (a) {
      if ("string" === typeof a) {
        var b = {};
        b.__data__ = a;
        yd(this.a, b);
      } else this.g ? (b = {}, b.__data__ = vb(a), yd(this.a, b)) : yd(this.a, a);
    };

    g.C = function () {
      this.a.c = null;
      delete this.f;
      Ec(this.a);
      delete this.a;
      Y.M.C.call(this);
    };

    function Fd(a) {
      ac.call(this);
      var b = a.__sm__;

      if (b) {
        a: {
          for (var c in b) {
            a = c;
            break a;
          }

          a = void 0;
        }

        (this.c = a) ? (a = this.c, this.data = null !== b && a in b ? b[a] : void 0) : this.data = b;
      } else this.data = a;
    }

    r(Fd, ac);

    function Gd() {
      bc.call(this);
      this.status = 1;
    }

    r(Gd, bc);

    function Z(a) {
      this.a = a;
    }

    r(Z, Dd);

    Z.prototype.na = function () {
      this.a.dispatchEvent("a");
    };

    Z.prototype.ma = function (a) {
      this.a.dispatchEvent(new Fd(a));
    };

    Z.prototype.la = function (a) {
      this.a.dispatchEvent(new Gd(a));
    };

    Z.prototype.ka = function () {
      this.a.dispatchEvent("b");
    };
    /*
    Copyright 2017 Google Inc.
    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at
    http://www.apache.org/licenses/LICENSE-2.0
    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
    */


    Ed.prototype.createWebChannel = Ed.prototype.a;
    Y.prototype.send = Y.prototype.La;
    Y.prototype.open = Y.prototype.Ka;
    Y.prototype.close = Y.prototype.close;
    Wb.NO_ERROR = 0;
    Wb.TIMEOUT = 8;
    Wb.HTTP_ERROR = 6;
    Xb.COMPLETE = "complete";
    $b.EventType = G;
    G.OPEN = "a";
    G.CLOSE = "b";
    G.ERROR = "c";
    G.MESSAGE = "d";
    B.prototype.listen = B.prototype.ra;
    W.prototype.listenOnce = W.prototype.sa;
    W.prototype.getLastError = W.prototype.Ma;
    W.prototype.getLastErrorCode = W.prototype.qa;
    W.prototype.getStatus = W.prototype.S;
    W.prototype.getResponseJson = W.prototype.Ja;
    W.prototype.getResponseText = W.prototype.Y;
    W.prototype.send = W.prototype.$;
    var esm = {
      createWebChannelTransport: function createWebChannelTransport() {
        return new Ed();
      },
      ErrorCode: Wb,
      EventType: Xb,
      WebChannel: $b,
      XhrIo: W
    };
    var esm_1 = esm.createWebChannelTransport;
    var esm_2 = esm.ErrorCode;
    var esm_3 = esm.EventType;
    var esm_4 = esm.WebChannel;
    var esm_5 = esm.XhrIo;
    /* harmony default export */

    __webpack_exports__["default"] = esm; //# sourceMappingURL=index.esm.js.map

    /***/
  },

  /***/
  "./node_modules/firebase/firestore/dist/index.esm.js":
  /*!***********************************************************!*\
    !*** ./node_modules/firebase/firestore/dist/index.esm.js ***!
    \***********************************************************/

  /*! no exports provided */

  /***/
  function node_modulesFirebaseFirestoreDistIndexEsmJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @firebase/firestore */
    "./node_modules/@firebase/firestore/dist/index.cjs.js");
    /* harmony import */


    var _firebase_firestore__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_firebase_firestore__WEBPACK_IMPORTED_MODULE_0__); //# sourceMappingURL=index.esm.js.map

    /***/

  },

  /***/
  "./src/app/services/categorie.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/services/categorie.service.ts ***!
    \***********************************************/

  /*! exports provided: CategorieService */

  /***/
  function srcAppServicesCategorieServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategorieService", function () {
      return CategorieService;
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


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var CategorieService = /*#__PURE__*/function () {
      function CategorieService(db) {
        _classCallCheck(this, CategorieService);

        this.categoriesCollection = db.collection('categories');
        this.categories = this.categoriesCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (actions) {
          return actions.map(function (a) {
            var data = a.payload.doc.data();
            var id = a.payload.doc.id;
            return Object.assign({
              id: id
            }, data);
          });
        }));
      }

      _createClass(CategorieService, [{
        key: "getCategories",
        value: function getCategories() {
          return this.categories;
        }
      }, {
        key: "getCategorie",
        value: function getCategorie(id) {
          return this.categoriesCollection.doc(id).valueChanges();
        }
      }, {
        key: "updateCategorie",
        value: function updateCategorie(categorie, id) {
          return this.categoriesCollection.doc(id).update(categorie);
        }
      }, {
        key: "addCategorie",
        value: function addCategorie(categorie) {
          return this.categoriesCollection.add(categorie);
        }
      }, {
        key: "removeCategorie",
        value: function removeCategorie(id) {
          return this.categoriesCollection.doc(id)["delete"]();
        }
      }]);

      return CategorieService;
    }();

    CategorieService.ctorParameters = function () {
      return [{
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
      }];
    };

    CategorieService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], CategorieService);
    /***/
  }
}]);
//# sourceMappingURL=default~categorie-details-categorie-details-module~categories-categories-module-es5.js.map