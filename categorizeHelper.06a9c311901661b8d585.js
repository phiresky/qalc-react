/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 139);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(32);
} else {}


/***/ }),

/***/ 1:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process, global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$mobx", function() { return $mobx; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlowCancellationError", function() { return FlowCancellationError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IDerivationState", function() { return IDerivationState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObservableMap", function() { return ObservableMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObservableSet", function() { return ObservableSet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Reaction", function() { return Reaction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_allowStateChanges", function() { return allowStateChanges; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_allowStateChangesInsideComputed", function() { return allowStateChangesInsideComputed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_allowStateReadsEnd", function() { return allowStateReadsEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_allowStateReadsStart", function() { return allowStateReadsStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_endAction", function() { return _endAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_getAdministration", function() { return getAdministration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_getGlobalState", function() { return getGlobalState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_interceptReads", function() { return interceptReads; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_isComputingDerivation", function() { return isComputingDerivation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_resetGlobalState", function() { return resetGlobalState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_startAction", function() { return _startAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "action", function() { return action; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "autorun", function() { return autorun; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "comparer", function() { return comparer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computed", function() { return computed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configure", function() { return configure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAtom", function() { return createAtom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decorate", function() { return decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "entries", function() { return entries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extendObservable", function() { return extendObservable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flow", function() { return flow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAtom", function() { return getAtom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDebugName", function() { return getDebugName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDependencyTree", function() { return getDependencyTree; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getObserverTree", function() { return getObserverTree; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "has", function() { return has; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "intercept", function() { return intercept; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAction", function() { return isAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isArrayLike", function() { return isArrayLike; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBoxedObservable", function() { return isObservableValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isComputed", function() { return isComputed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isComputedProp", function() { return isComputedProp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFlowCancellationError", function() { return isFlowCancellationError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObservable", function() { return isObservable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObservableArray", function() { return isObservableArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObservableMap", function() { return isObservableMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObservableObject", function() { return isObservableObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObservableProp", function() { return isObservableProp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObservableSet", function() { return isObservableSet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keys", function() { return keys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "observable", function() { return observable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "observe", function() { return observe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onBecomeObserved", function() { return onBecomeObserved; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onBecomeUnobserved", function() { return onBecomeUnobserved; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onReactionError", function() { return onReactionError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reaction", function() { return reaction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return remove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "runInAction", function() { return runInAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spy", function() { return spy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toJS", function() { return toJS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trace", function() { return trace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transaction", function() { return transaction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "untracked", function() { return untracked; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "values", function() { return values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "when", function() { return when; });
/** MobX - (c) Michel Weststrate 2015 - 2020 - MIT Licensed */
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

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

var OBFUSCATED_ERROR = "An invariant failed, however the error is obfuscated because this is a production build.";
var EMPTY_ARRAY = [];
Object.freeze(EMPTY_ARRAY);
var EMPTY_OBJECT = {};
Object.freeze(EMPTY_OBJECT);
function getNextId() {
    return ++globalState.mobxGuid;
}
function fail(message) {
    invariant(false, message);
    throw "X"; // unreachable
}
function invariant(check, message) {
    if (!check)
        throw new Error("[mobx] " + (message || OBFUSCATED_ERROR));
}
/**
 * Prints a deprecation message, but only one time.
 * Returns false if the deprecated message was already printed before
 */
var deprecatedMessages = [];
function deprecated(msg, thing) {
    if (true)
        return false;
    if (thing) {
        return deprecated("'" + msg + "', use '" + thing + "' instead.");
    }
    if (deprecatedMessages.indexOf(msg) !== -1)
        return false;
    deprecatedMessages.push(msg);
    console.error("[mobx] Deprecated: " + msg);
    return true;
}
/**
 * Makes sure that the provided function is invoked at most once.
 */
function once(func) {
    var invoked = false;
    return function () {
        if (invoked)
            return;
        invoked = true;
        return func.apply(this, arguments);
    };
}
var noop = function () { };
function unique(list) {
    var res = [];
    list.forEach(function (item) {
        if (res.indexOf(item) === -1)
            res.push(item);
    });
    return res;
}
function isObject(value) {
    return value !== null && typeof value === "object";
}
function isPlainObject(value) {
    if (value === null || typeof value !== "object")
        return false;
    var proto = Object.getPrototypeOf(value);
    return proto === Object.prototype || proto === null;
}
function addHiddenProp(object, propName, value) {
    Object.defineProperty(object, propName, {
        enumerable: false,
        writable: true,
        configurable: true,
        value: value
    });
}
function addHiddenFinalProp(object, propName, value) {
    Object.defineProperty(object, propName, {
        enumerable: false,
        writable: false,
        configurable: true,
        value: value
    });
}
function isPropertyConfigurable(object, prop) {
    var descriptor = Object.getOwnPropertyDescriptor(object, prop);
    return !descriptor || (descriptor.configurable !== false && descriptor.writable !== false);
}
function assertPropertyConfigurable(object, prop) {
    if (false)
        {}
}
function createInstanceofPredicate(name, clazz) {
    var propName = "isMobX" + name;
    clazz.prototype[propName] = true;
    return function (x) {
        return isObject(x) && x[propName] === true;
    };
}
/**
 * Returns whether the argument is an array, disregarding observability.
 */
function isArrayLike(x) {
    return Array.isArray(x) || isObservableArray(x);
}
function isES6Map(thing) {
    return thing instanceof Map;
}
function isES6Set(thing) {
    return thing instanceof Set;
}
/**
 * Returns the following: own keys, prototype keys & own symbol keys, if they are enumerable.
 */
function getPlainObjectKeys(object) {
    var enumerables = new Set();
    for (var key in object)
        enumerables.add(key); // *all* enumerables
    Object.getOwnPropertySymbols(object).forEach(function (k) {
        if (Object.getOwnPropertyDescriptor(object, k).enumerable)
            enumerables.add(k);
    }); // *own* symbols
    // Note: this implementation is missing enumerable, inherited, symbolic property names! That would however pretty expensive to add,
    // as there is no efficient iterator that returns *all* properties
    return Array.from(enumerables);
}
function stringifyKey(key) {
    if (key && key.toString)
        return key.toString();
    else
        return new String(key).toString();
}
function getMapLikeKeys(map) {
    if (isPlainObject(map))
        return Object.keys(map);
    if (Array.isArray(map))
        return map.map(function (_a) {
            var _b = __read(_a, 1), key = _b[0];
            return key;
        });
    if (isES6Map(map) || isObservableMap(map))
        return Array.from(map.keys());
    return fail("Cannot get keys from '" + map + "'");
}
function toPrimitive(value) {
    return value === null ? null : typeof value === "object" ? "" + value : value;
}

var $mobx = Symbol("mobx administration");
var Atom = /** @class */ (function () {
    /**
     * Create a new atom. For debugging purposes it is recommended to give it a name.
     * The onBecomeObserved and onBecomeUnobserved callbacks can be used for resource management.
     */
    function Atom(name) {
        if (name === void 0) { name = "Atom@" + getNextId(); }
        this.name = name;
        this.isPendingUnobservation = false; // for effective unobserving. BaseAtom has true, for extra optimization, so its onBecomeUnobserved never gets called, because it's not needed
        this.isBeingObserved = false;
        this.observers = new Set();
        this.diffValue = 0;
        this.lastAccessedBy = 0;
        this.lowestObserverState = IDerivationState.NOT_TRACKING;
    }
    Atom.prototype.onBecomeObserved = function () {
        if (this.onBecomeObservedListeners) {
            this.onBecomeObservedListeners.forEach(function (listener) { return listener(); });
        }
    };
    Atom.prototype.onBecomeUnobserved = function () {
        if (this.onBecomeUnobservedListeners) {
            this.onBecomeUnobservedListeners.forEach(function (listener) { return listener(); });
        }
    };
    /**
     * Invoke this method to notify mobx that your atom has been used somehow.
     * Returns true if there is currently a reactive context.
     */
    Atom.prototype.reportObserved = function () {
        return reportObserved(this);
    };
    /**
     * Invoke this method _after_ this method has changed to signal mobx that all its observers should invalidate.
     */
    Atom.prototype.reportChanged = function () {
        startBatch();
        propagateChanged(this);
        endBatch();
    };
    Atom.prototype.toString = function () {
        return this.name;
    };
    return Atom;
}());
var isAtom = createInstanceofPredicate("Atom", Atom);
function createAtom(name, onBecomeObservedHandler, onBecomeUnobservedHandler) {
    if (onBecomeObservedHandler === void 0) { onBecomeObservedHandler = noop; }
    if (onBecomeUnobservedHandler === void 0) { onBecomeUnobservedHandler = noop; }
    var atom = new Atom(name);
    // default `noop` listener will not initialize the hook Set
    if (onBecomeObservedHandler !== noop) {
        onBecomeObserved(atom, onBecomeObservedHandler);
    }
    if (onBecomeUnobservedHandler !== noop) {
        onBecomeUnobserved(atom, onBecomeUnobservedHandler);
    }
    return atom;
}

function identityComparer(a, b) {
    return a === b;
}
function structuralComparer(a, b) {
    return deepEqual(a, b);
}
function shallowComparer(a, b) {
    return deepEqual(a, b, 1);
}
function defaultComparer(a, b) {
    return Object.is(a, b);
}
var comparer = {
    identity: identityComparer,
    structural: structuralComparer,
    default: defaultComparer,
    shallow: shallowComparer
};

var mobxDidRunLazyInitializersSymbol = Symbol("mobx did run lazy initializers");
var mobxPendingDecorators = Symbol("mobx pending decorators");
var enumerableDescriptorCache = {};
var nonEnumerableDescriptorCache = {};
function createPropertyInitializerDescriptor(prop, enumerable) {
    var cache = enumerable ? enumerableDescriptorCache : nonEnumerableDescriptorCache;
    return (cache[prop] ||
        (cache[prop] = {
            configurable: true,
            enumerable: enumerable,
            get: function () {
                initializeInstance(this);
                return this[prop];
            },
            set: function (value) {
                initializeInstance(this);
                this[prop] = value;
            }
        }));
}
function initializeInstance(target) {
    var e_1, _a;
    if (target[mobxDidRunLazyInitializersSymbol] === true)
        return;
    var decorators = target[mobxPendingDecorators];
    if (decorators) {
        addHiddenProp(target, mobxDidRunLazyInitializersSymbol, true);
        // Build property key array from both strings and symbols
        var keys = __spread(Object.getOwnPropertySymbols(decorators), Object.keys(decorators));
        try {
            for (var keys_1 = __values(keys), keys_1_1 = keys_1.next(); !keys_1_1.done; keys_1_1 = keys_1.next()) {
                var key = keys_1_1.value;
                var d = decorators[key];
                d.propertyCreator(target, d.prop, d.descriptor, d.decoratorTarget, d.decoratorArguments);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (keys_1_1 && !keys_1_1.done && (_a = keys_1.return)) _a.call(keys_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    }
}
function createPropDecorator(propertyInitiallyEnumerable, propertyCreator) {
    return function decoratorFactory() {
        var decoratorArguments;
        var decorator = function decorate(target, prop, descriptor, applyImmediately
        // This is a special parameter to signal the direct application of a decorator, allow extendObservable to skip the entire type decoration part,
        // as the instance to apply the decorator to equals the target
        ) {
            if (applyImmediately === true) {
                propertyCreator(target, prop, descriptor, target, decoratorArguments);
                return null;
            }
            if (false)
                {}
            if (!Object.prototype.hasOwnProperty.call(target, mobxPendingDecorators)) {
                var inheritedDecorators = target[mobxPendingDecorators];
                addHiddenProp(target, mobxPendingDecorators, __assign({}, inheritedDecorators));
            }
            target[mobxPendingDecorators][prop] = {
                prop: prop,
                propertyCreator: propertyCreator,
                descriptor: descriptor,
                decoratorTarget: target,
                decoratorArguments: decoratorArguments
            };
            return createPropertyInitializerDescriptor(prop, propertyInitiallyEnumerable);
        };
        if (quacksLikeADecorator(arguments)) {
            // @decorator
            decoratorArguments = EMPTY_ARRAY;
            return decorator.apply(null, arguments);
        }
        else {
            // @decorator(args)
            decoratorArguments = Array.prototype.slice.call(arguments);
            return decorator;
        }
    };
}
function quacksLikeADecorator(args) {
    return (((args.length === 2 || args.length === 3) &&
        (typeof args[1] === "string" || typeof args[1] === "symbol")) ||
        (args.length === 4 && args[3] === true));
}

function deepEnhancer(v, _, name) {
    // it is an observable already, done
    if (isObservable(v))
        return v;
    // something that can be converted and mutated?
    if (Array.isArray(v))
        return observable.array(v, { name: name });
    if (isPlainObject(v))
        return observable.object(v, undefined, { name: name });
    if (isES6Map(v))
        return observable.map(v, { name: name });
    if (isES6Set(v))
        return observable.set(v, { name: name });
    return v;
}
function shallowEnhancer(v, _, name) {
    if (v === undefined || v === null)
        return v;
    if (isObservableObject(v) || isObservableArray(v) || isObservableMap(v) || isObservableSet(v))
        return v;
    if (Array.isArray(v))
        return observable.array(v, { name: name, deep: false });
    if (isPlainObject(v))
        return observable.object(v, undefined, { name: name, deep: false });
    if (isES6Map(v))
        return observable.map(v, { name: name, deep: false });
    if (isES6Set(v))
        return observable.set(v, { name: name, deep: false });
    return fail( false &&
        false);
}
function referenceEnhancer(newValue) {
    // never turn into an observable
    return newValue;
}
function refStructEnhancer(v, oldValue, name) {
    if (false)
        {}
    if (deepEqual(v, oldValue))
        return oldValue;
    return v;
}

function createDecoratorForEnhancer(enhancer) {
    invariant(enhancer);
    var decorator = createPropDecorator(true, function (target, propertyName, descriptor, _decoratorTarget, decoratorArgs) {
        if (false) {}
        var initialValue = descriptor
            ? descriptor.initializer
                ? descriptor.initializer.call(target)
                : descriptor.value
            : undefined;
        asObservableObject(target).addObservableProp(propertyName, initialValue, enhancer);
    });
    var res = 
    // Extra process checks, as this happens during module initialization
    typeof process !== "undefined" && process.env && "production" !== "production"
        ? function observableDecorator() {
            // This wrapper function is just to detect illegal decorator invocations, deprecate in a next version
            // and simply return the created prop decorator
            if (arguments.length < 2)
                return fail("Incorrect decorator invocation. @observable decorator doesn't expect any arguments");
            return decorator.apply(null, arguments);
        }
        : decorator;
    res.enhancer = enhancer;
    return res;
}

// Predefined bags of create observable options, to avoid allocating temporarily option objects
// in the majority of cases
var defaultCreateObservableOptions = {
    deep: true,
    name: undefined,
    defaultDecorator: undefined,
    proxy: true
};
Object.freeze(defaultCreateObservableOptions);
function assertValidOption(key) {
    if (!/^(deep|name|equals|defaultDecorator|proxy)$/.test(key))
        fail("invalid option for (extend)observable: " + key);
}
function asCreateObservableOptions(thing) {
    if (thing === null || thing === undefined)
        return defaultCreateObservableOptions;
    if (typeof thing === "string")
        return { name: thing, deep: true, proxy: true };
    if (false) {}
    return thing;
}
var deepDecorator = createDecoratorForEnhancer(deepEnhancer);
var shallowDecorator = createDecoratorForEnhancer(shallowEnhancer);
var refDecorator = createDecoratorForEnhancer(referenceEnhancer);
var refStructDecorator = createDecoratorForEnhancer(refStructEnhancer);
function getEnhancerFromOptions(options) {
    return options.defaultDecorator
        ? options.defaultDecorator.enhancer
        : options.deep === false
            ? referenceEnhancer
            : deepEnhancer;
}
/**
 * Turns an object, array or function into a reactive structure.
 * @param v the value which should become observable.
 */
function createObservable(v, arg2, arg3) {
    // @observable someProp;
    if (typeof arguments[1] === "string" || typeof arguments[1] === "symbol") {
        return deepDecorator.apply(null, arguments);
    }
    // it is an observable already, done
    if (isObservable(v))
        return v;
    // something that can be converted and mutated?
    var res = isPlainObject(v)
        ? observable.object(v, arg2, arg3)
        : Array.isArray(v)
            ? observable.array(v, arg2)
            : isES6Map(v)
                ? observable.map(v, arg2)
                : isES6Set(v)
                    ? observable.set(v, arg2)
                    : v;
    // this value could be converted to a new observable data structure, return it
    if (res !== v)
        return res;
    // otherwise, just box it
    fail( false &&
        false);
}
var observableFactories = {
    box: function (value, options) {
        if (arguments.length > 2)
            incorrectlyUsedAsDecorator("box");
        var o = asCreateObservableOptions(options);
        return new ObservableValue(value, getEnhancerFromOptions(o), o.name, true, o.equals);
    },
    array: function (initialValues, options) {
        if (arguments.length > 2)
            incorrectlyUsedAsDecorator("array");
        var o = asCreateObservableOptions(options);
        return createObservableArray(initialValues, getEnhancerFromOptions(o), o.name);
    },
    map: function (initialValues, options) {
        if (arguments.length > 2)
            incorrectlyUsedAsDecorator("map");
        var o = asCreateObservableOptions(options);
        return new ObservableMap(initialValues, getEnhancerFromOptions(o), o.name);
    },
    set: function (initialValues, options) {
        if (arguments.length > 2)
            incorrectlyUsedAsDecorator("set");
        var o = asCreateObservableOptions(options);
        return new ObservableSet(initialValues, getEnhancerFromOptions(o), o.name);
    },
    object: function (props, decorators, options) {
        if (typeof arguments[1] === "string")
            incorrectlyUsedAsDecorator("object");
        var o = asCreateObservableOptions(options);
        if (o.proxy === false) {
            return extendObservable({}, props, decorators, o);
        }
        else {
            var defaultDecorator = getDefaultDecoratorFromObjectOptions(o);
            var base = extendObservable({}, undefined, undefined, o);
            var proxy = createDynamicObservableObject(base);
            extendObservableObjectWithProperties(proxy, props, decorators, defaultDecorator);
            return proxy;
        }
    },
    ref: refDecorator,
    shallow: shallowDecorator,
    deep: deepDecorator,
    struct: refStructDecorator
};
var observable = createObservable;
// weird trick to keep our typings nicely with our funcs, and still extend the observable function
Object.keys(observableFactories).forEach(function (name) { return (observable[name] = observableFactories[name]); });
function incorrectlyUsedAsDecorator(methodName) {
    fail(
    // process.env.NODE_ENV !== "production" &&
    "Expected one or two arguments to observable." + methodName + ". Did you accidentally try to use observable." + methodName + " as decorator?");
}

var computedDecorator = createPropDecorator(false, function (instance, propertyName, descriptor, decoratorTarget, decoratorArgs) {
    var get = descriptor.get, set = descriptor.set; // initialValue is the descriptor for get / set props
    // Optimization: faster on decorator target or instance? Assuming target
    // Optimization: find out if declaring on instance isn't just faster. (also makes the property descriptor simpler). But, more memory usage..
    // Forcing instance now, fixes hot reloadig issues on React Native:
    var options = decoratorArgs[0] || {};
    asObservableObject(instance).addComputedProp(instance, propertyName, __assign({ get: get,
        set: set, context: instance }, options));
});
var computedStructDecorator = computedDecorator({ equals: comparer.structural });
/**
 * Decorator for class properties: @computed get value() { return expr; }.
 * For legacy purposes also invokable as ES5 observable created: `computed(() => expr)`;
 */
var computed = function computed(arg1, arg2, arg3) {
    if (typeof arg2 === "string") {
        // @computed
        return computedDecorator.apply(null, arguments);
    }
    if (arg1 !== null && typeof arg1 === "object" && arguments.length === 1) {
        // @computed({ options })
        return computedDecorator.apply(null, arguments);
    }
    // computed(expr, options?)
    if (false) {}
    var opts = typeof arg2 === "object" ? arg2 : {};
    opts.get = arg1;
    opts.set = typeof arg2 === "function" ? arg2 : opts.set;
    opts.name = opts.name || arg1.name || ""; /* for generated name */
    return new ComputedValue(opts);
};
computed.struct = computedStructDecorator;

var IDerivationState;
(function (IDerivationState) {
    // before being run or (outside batch and not being observed)
    // at this point derivation is not holding any data about dependency tree
    IDerivationState[IDerivationState["NOT_TRACKING"] = -1] = "NOT_TRACKING";
    // no shallow dependency changed since last computation
    // won't recalculate derivation
    // this is what makes mobx fast
    IDerivationState[IDerivationState["UP_TO_DATE"] = 0] = "UP_TO_DATE";
    // some deep dependency changed, but don't know if shallow dependency changed
    // will require to check first if UP_TO_DATE or POSSIBLY_STALE
    // currently only ComputedValue will propagate POSSIBLY_STALE
    //
    // having this state is second big optimization:
    // don't have to recompute on every dependency change, but only when it's needed
    IDerivationState[IDerivationState["POSSIBLY_STALE"] = 1] = "POSSIBLY_STALE";
    // A shallow dependency has changed since last computation and the derivation
    // will need to recompute when it's needed next.
    IDerivationState[IDerivationState["STALE"] = 2] = "STALE";
})(IDerivationState || (IDerivationState = {}));
var TraceMode;
(function (TraceMode) {
    TraceMode[TraceMode["NONE"] = 0] = "NONE";
    TraceMode[TraceMode["LOG"] = 1] = "LOG";
    TraceMode[TraceMode["BREAK"] = 2] = "BREAK";
})(TraceMode || (TraceMode = {}));
var CaughtException = /** @class */ (function () {
    function CaughtException(cause) {
        this.cause = cause;
        // Empty
    }
    return CaughtException;
}());
function isCaughtException(e) {
    return e instanceof CaughtException;
}
/**
 * Finds out whether any dependency of the derivation has actually changed.
 * If dependenciesState is 1 then it will recalculate dependencies,
 * if any dependency changed it will propagate it by changing dependenciesState to 2.
 *
 * By iterating over the dependencies in the same order that they were reported and
 * stopping on the first change, all the recalculations are only called for ComputedValues
 * that will be tracked by derivation. That is because we assume that if the first x
 * dependencies of the derivation doesn't change then the derivation should run the same way
 * up until accessing x-th dependency.
 */
function shouldCompute(derivation) {
    switch (derivation.dependenciesState) {
        case IDerivationState.UP_TO_DATE:
            return false;
        case IDerivationState.NOT_TRACKING:
        case IDerivationState.STALE:
            return true;
        case IDerivationState.POSSIBLY_STALE: {
            // state propagation can occur outside of action/reactive context #2195
            var prevAllowStateReads = allowStateReadsStart(true);
            var prevUntracked = untrackedStart(); // no need for those computeds to be reported, they will be picked up in trackDerivedFunction.
            var obs = derivation.observing, l = obs.length;
            for (var i = 0; i < l; i++) {
                var obj = obs[i];
                if (isComputedValue(obj)) {
                    if (globalState.disableErrorBoundaries) {
                        obj.get();
                    }
                    else {
                        try {
                            obj.get();
                        }
                        catch (e) {
                            // we are not interested in the value *or* exception at this moment, but if there is one, notify all
                            untrackedEnd(prevUntracked);
                            allowStateReadsEnd(prevAllowStateReads);
                            return true;
                        }
                    }
                    // if ComputedValue `obj` actually changed it will be computed and propagated to its observers.
                    // and `derivation` is an observer of `obj`
                    // invariantShouldCompute(derivation)
                    if (derivation.dependenciesState === IDerivationState.STALE) {
                        untrackedEnd(prevUntracked);
                        allowStateReadsEnd(prevAllowStateReads);
                        return true;
                    }
                }
            }
            changeDependenciesStateTo0(derivation);
            untrackedEnd(prevUntracked);
            allowStateReadsEnd(prevAllowStateReads);
            return false;
        }
    }
}
// function invariantShouldCompute(derivation: IDerivation) {
//     const newDepState = (derivation as any).dependenciesState
//     if (
//         process.env.NODE_ENV === "production" &&
//         (newDepState === IDerivationState.POSSIBLY_STALE ||
//             newDepState === IDerivationState.NOT_TRACKING)
//     )
//         fail("Illegal dependency state")
// }
function isComputingDerivation() {
    return globalState.trackingDerivation !== null; // filter out actions inside computations
}
function checkIfStateModificationsAreAllowed(atom) {
    var hasObservers = atom.observers.size > 0;
    // Should never be possible to change an observed observable from inside computed, see #798
    if (globalState.computationDepth > 0 && hasObservers)
        fail( false &&
            false);
    // Should not be possible to change observed state outside strict mode, except during initialization, see #563
    if (!globalState.allowStateChanges && (hasObservers || globalState.enforceActions === "strict"))
        fail( false &&
            false);
}
function checkIfStateReadsAreAllowed(observable) {
    if (false) {}
}
/**
 * Executes the provided function `f` and tracks which observables are being accessed.
 * The tracking information is stored on the `derivation` object and the derivation is registered
 * as observer of any of the accessed observables.
 */
function trackDerivedFunction(derivation, f, context) {
    var prevAllowStateReads = allowStateReadsStart(true);
    // pre allocate array allocation + room for variation in deps
    // array will be trimmed by bindDependencies
    changeDependenciesStateTo0(derivation);
    derivation.newObserving = new Array(derivation.observing.length + 100);
    derivation.unboundDepsCount = 0;
    derivation.runId = ++globalState.runId;
    var prevTracking = globalState.trackingDerivation;
    globalState.trackingDerivation = derivation;
    var result;
    if (globalState.disableErrorBoundaries === true) {
        result = f.call(context);
    }
    else {
        try {
            result = f.call(context);
        }
        catch (e) {
            result = new CaughtException(e);
        }
    }
    globalState.trackingDerivation = prevTracking;
    bindDependencies(derivation);
    warnAboutDerivationWithoutDependencies(derivation);
    allowStateReadsEnd(prevAllowStateReads);
    return result;
}
function warnAboutDerivationWithoutDependencies(derivation) {
    if (true)
        return;
    if (derivation.observing.length !== 0)
        return;
    if (globalState.reactionRequiresObservable || derivation.requiresObservable) {
        console.warn("[mobx] Derivation " + derivation.name + " is created/updated without reading any observable value");
    }
}
/**
 * diffs newObserving with observing.
 * update observing to be newObserving with unique observables
 * notify observers that become observed/unobserved
 */
function bindDependencies(derivation) {
    // invariant(derivation.dependenciesState !== IDerivationState.NOT_TRACKING, "INTERNAL ERROR bindDependencies expects derivation.dependenciesState !== -1");
    var prevObserving = derivation.observing;
    var observing = (derivation.observing = derivation.newObserving);
    var lowestNewObservingDerivationState = IDerivationState.UP_TO_DATE;
    // Go through all new observables and check diffValue: (this list can contain duplicates):
    //   0: first occurrence, change to 1 and keep it
    //   1: extra occurrence, drop it
    var i0 = 0, l = derivation.unboundDepsCount;
    for (var i = 0; i < l; i++) {
        var dep = observing[i];
        if (dep.diffValue === 0) {
            dep.diffValue = 1;
            if (i0 !== i)
                observing[i0] = dep;
            i0++;
        }
        // Upcast is 'safe' here, because if dep is IObservable, `dependenciesState` will be undefined,
        // not hitting the condition
        if (dep.dependenciesState > lowestNewObservingDerivationState) {
            lowestNewObservingDerivationState = dep.dependenciesState;
        }
    }
    observing.length = i0;
    derivation.newObserving = null; // newObserving shouldn't be needed outside tracking (statement moved down to work around FF bug, see #614)
    // Go through all old observables and check diffValue: (it is unique after last bindDependencies)
    //   0: it's not in new observables, unobserve it
    //   1: it keeps being observed, don't want to notify it. change to 0
    l = prevObserving.length;
    while (l--) {
        var dep = prevObserving[l];
        if (dep.diffValue === 0) {
            removeObserver(dep, derivation);
        }
        dep.diffValue = 0;
    }
    // Go through all new observables and check diffValue: (now it should be unique)
    //   0: it was set to 0 in last loop. don't need to do anything.
    //   1: it wasn't observed, let's observe it. set back to 0
    while (i0--) {
        var dep = observing[i0];
        if (dep.diffValue === 1) {
            dep.diffValue = 0;
            addObserver(dep, derivation);
        }
    }
    // Some new observed derivations may become stale during this derivation computation
    // so they have had no chance to propagate staleness (#916)
    if (lowestNewObservingDerivationState !== IDerivationState.UP_TO_DATE) {
        derivation.dependenciesState = lowestNewObservingDerivationState;
        derivation.onBecomeStale();
    }
}
function clearObserving(derivation) {
    // invariant(globalState.inBatch > 0, "INTERNAL ERROR clearObserving should be called only inside batch");
    var obs = derivation.observing;
    derivation.observing = [];
    var i = obs.length;
    while (i--)
        removeObserver(obs[i], derivation);
    derivation.dependenciesState = IDerivationState.NOT_TRACKING;
}
function untracked(action) {
    var prev = untrackedStart();
    try {
        return action();
    }
    finally {
        untrackedEnd(prev);
    }
}
function untrackedStart() {
    var prev = globalState.trackingDerivation;
    globalState.trackingDerivation = null;
    return prev;
}
function untrackedEnd(prev) {
    globalState.trackingDerivation = prev;
}
function allowStateReadsStart(allowStateReads) {
    var prev = globalState.allowStateReads;
    globalState.allowStateReads = allowStateReads;
    return prev;
}
function allowStateReadsEnd(prev) {
    globalState.allowStateReads = prev;
}
/**
 * needed to keep `lowestObserverState` correct. when changing from (2 or 1) to 0
 *
 */
function changeDependenciesStateTo0(derivation) {
    if (derivation.dependenciesState === IDerivationState.UP_TO_DATE)
        return;
    derivation.dependenciesState = IDerivationState.UP_TO_DATE;
    var obs = derivation.observing;
    var i = obs.length;
    while (i--)
        obs[i].lowestObserverState = IDerivationState.UP_TO_DATE;
}

// we don't use globalState for these in order to avoid possible issues with multiple
// mobx versions
var currentActionId = 0;
var nextActionId = 1;
var functionNameDescriptor = Object.getOwnPropertyDescriptor(function () { }, "name");
var isFunctionNameConfigurable = functionNameDescriptor && functionNameDescriptor.configurable;
function createAction(actionName, fn, ref) {
    if (false) {}
    var res = function () {
        return executeAction(actionName, fn, ref || this, arguments);
    };
    res.isMobxAction = true;
    if (false) {}
    return res;
}
function executeAction(actionName, fn, scope, args) {
    var runInfo = _startAction(actionName, scope, args);
    try {
        return fn.apply(scope, args);
    }
    catch (err) {
        runInfo.error = err;
        throw err;
    }
    finally {
        _endAction(runInfo);
    }
}
function _startAction(actionName, scope, args) {
    var notifySpy = isSpyEnabled() && !!actionName;
    var startTime = 0;
    if (notifySpy && "production" !== "production") {
        startTime = Date.now();
        var l = (args && args.length) || 0;
        var flattendArgs = new Array(l);
        if (l > 0)
            for (var i = 0; i < l; i++)
                flattendArgs[i] = args[i];
        spyReportStart({
            type: "action",
            name: actionName,
            object: scope,
            arguments: flattendArgs
        });
    }
    var prevDerivation = untrackedStart();
    startBatch();
    var prevAllowStateChanges = allowStateChangesStart(true);
    var prevAllowStateReads = allowStateReadsStart(true);
    var runInfo = {
        prevDerivation: prevDerivation,
        prevAllowStateChanges: prevAllowStateChanges,
        prevAllowStateReads: prevAllowStateReads,
        notifySpy: notifySpy,
        startTime: startTime,
        actionId: nextActionId++,
        parentActionId: currentActionId
    };
    currentActionId = runInfo.actionId;
    return runInfo;
}
function _endAction(runInfo) {
    if (currentActionId !== runInfo.actionId) {
        fail("invalid action stack. did you forget to finish an action?");
    }
    currentActionId = runInfo.parentActionId;
    if (runInfo.error !== undefined) {
        globalState.suppressReactionErrors = true;
    }
    allowStateChangesEnd(runInfo.prevAllowStateChanges);
    allowStateReadsEnd(runInfo.prevAllowStateReads);
    endBatch();
    untrackedEnd(runInfo.prevDerivation);
    if (runInfo.notifySpy && "production" !== "production") {
        spyReportEnd({ time: Date.now() - runInfo.startTime });
    }
    globalState.suppressReactionErrors = false;
}
function allowStateChanges(allowStateChanges, func) {
    var prev = allowStateChangesStart(allowStateChanges);
    var res;
    try {
        res = func();
    }
    finally {
        allowStateChangesEnd(prev);
    }
    return res;
}
function allowStateChangesStart(allowStateChanges) {
    var prev = globalState.allowStateChanges;
    globalState.allowStateChanges = allowStateChanges;
    return prev;
}
function allowStateChangesEnd(prev) {
    globalState.allowStateChanges = prev;
}
function allowStateChangesInsideComputed(func) {
    var prev = globalState.computationDepth;
    globalState.computationDepth = 0;
    var res;
    try {
        res = func();
    }
    finally {
        globalState.computationDepth = prev;
    }
    return res;
}

var ObservableValue = /** @class */ (function (_super) {
    __extends(ObservableValue, _super);
    function ObservableValue(value, enhancer, name, notifySpy, equals) {
        if (name === void 0) { name = "ObservableValue@" + getNextId(); }
        if (notifySpy === void 0) { notifySpy = true; }
        if (equals === void 0) { equals = comparer.default; }
        var _this = _super.call(this, name) || this;
        _this.enhancer = enhancer;
        _this.name = name;
        _this.equals = equals;
        _this.hasUnreportedChange = false;
        _this.value = enhancer(value, undefined, name);
        if (notifySpy && isSpyEnabled() && "production" !== "production") {
            // only notify spy if this is a stand-alone observable
            spyReport({ type: "create", name: _this.name, newValue: "" + _this.value });
        }
        return _this;
    }
    ObservableValue.prototype.dehanceValue = function (value) {
        if (this.dehancer !== undefined)
            return this.dehancer(value);
        return value;
    };
    ObservableValue.prototype.set = function (newValue) {
        var oldValue = this.value;
        newValue = this.prepareNewValue(newValue);
        if (newValue !== globalState.UNCHANGED) {
            var notifySpy = isSpyEnabled();
            if (notifySpy && "production" !== "production") {
                spyReportStart({
                    type: "update",
                    name: this.name,
                    newValue: newValue,
                    oldValue: oldValue
                });
            }
            this.setNewValue(newValue);
            if (notifySpy && "production" !== "production")
                spyReportEnd();
        }
    };
    ObservableValue.prototype.prepareNewValue = function (newValue) {
        checkIfStateModificationsAreAllowed(this);
        if (hasInterceptors(this)) {
            var change = interceptChange(this, {
                object: this,
                type: "update",
                newValue: newValue
            });
            if (!change)
                return globalState.UNCHANGED;
            newValue = change.newValue;
        }
        // apply modifier
        newValue = this.enhancer(newValue, this.value, this.name);
        return this.equals(this.value, newValue) ? globalState.UNCHANGED : newValue;
    };
    ObservableValue.prototype.setNewValue = function (newValue) {
        var oldValue = this.value;
        this.value = newValue;
        this.reportChanged();
        if (hasListeners(this)) {
            notifyListeners(this, {
                type: "update",
                object: this,
                newValue: newValue,
                oldValue: oldValue
            });
        }
    };
    ObservableValue.prototype.get = function () {
        this.reportObserved();
        return this.dehanceValue(this.value);
    };
    ObservableValue.prototype.intercept = function (handler) {
        return registerInterceptor(this, handler);
    };
    ObservableValue.prototype.observe = function (listener, fireImmediately) {
        if (fireImmediately)
            listener({
                object: this,
                type: "update",
                newValue: this.value,
                oldValue: undefined
            });
        return registerListener(this, listener);
    };
    ObservableValue.prototype.toJSON = function () {
        return this.get();
    };
    ObservableValue.prototype.toString = function () {
        return this.name + "[" + this.value + "]";
    };
    ObservableValue.prototype.valueOf = function () {
        return toPrimitive(this.get());
    };
    ObservableValue.prototype[Symbol.toPrimitive] = function () {
        return this.valueOf();
    };
    return ObservableValue;
}(Atom));
var isObservableValue = createInstanceofPredicate("ObservableValue", ObservableValue);

/**
 * A node in the state dependency root that observes other nodes, and can be observed itself.
 *
 * ComputedValue will remember the result of the computation for the duration of the batch, or
 * while being observed.
 *
 * During this time it will recompute only when one of its direct dependencies changed,
 * but only when it is being accessed with `ComputedValue.get()`.
 *
 * Implementation description:
 * 1. First time it's being accessed it will compute and remember result
 *    give back remembered result until 2. happens
 * 2. First time any deep dependency change, propagate POSSIBLY_STALE to all observers, wait for 3.
 * 3. When it's being accessed, recompute if any shallow dependency changed.
 *    if result changed: propagate STALE to all observers, that were POSSIBLY_STALE from the last step.
 *    go to step 2. either way
 *
 * If at any point it's outside batch and it isn't observed: reset everything and go to 1.
 */
var ComputedValue = /** @class */ (function () {
    /**
     * Create a new computed value based on a function expression.
     *
     * The `name` property is for debug purposes only.
     *
     * The `equals` property specifies the comparer function to use to determine if a newly produced
     * value differs from the previous value. Two comparers are provided in the library; `defaultComparer`
     * compares based on identity comparison (===), and `structualComparer` deeply compares the structure.
     * Structural comparison can be convenient if you always produce a new aggregated object and
     * don't want to notify observers if it is structurally the same.
     * This is useful for working with vectors, mouse coordinates etc.
     */
    function ComputedValue(options) {
        this.dependenciesState = IDerivationState.NOT_TRACKING;
        this.observing = []; // nodes we are looking at. Our value depends on these nodes
        this.newObserving = null; // during tracking it's an array with new observed observers
        this.isBeingObserved = false;
        this.isPendingUnobservation = false;
        this.observers = new Set();
        this.diffValue = 0;
        this.runId = 0;
        this.lastAccessedBy = 0;
        this.lowestObserverState = IDerivationState.UP_TO_DATE;
        this.unboundDepsCount = 0;
        this.__mapid = "#" + getNextId();
        this.value = new CaughtException(null);
        this.isComputing = false; // to check for cycles
        this.isRunningSetter = false;
        this.isTracing = TraceMode.NONE;
        invariant(options.get, "missing option for computed: get");
        this.derivation = options.get;
        this.name = options.name || "ComputedValue@" + getNextId();
        if (options.set)
            this.setter = createAction(this.name + "-setter", options.set);
        this.equals =
            options.equals ||
                (options.compareStructural || options.struct
                    ? comparer.structural
                    : comparer.default);
        this.scope = options.context;
        this.requiresReaction = !!options.requiresReaction;
        this.keepAlive = !!options.keepAlive;
    }
    ComputedValue.prototype.onBecomeStale = function () {
        propagateMaybeChanged(this);
    };
    ComputedValue.prototype.onBecomeObserved = function () {
        if (this.onBecomeObservedListeners) {
            this.onBecomeObservedListeners.forEach(function (listener) { return listener(); });
        }
    };
    ComputedValue.prototype.onBecomeUnobserved = function () {
        if (this.onBecomeUnobservedListeners) {
            this.onBecomeUnobservedListeners.forEach(function (listener) { return listener(); });
        }
    };
    /**
     * Returns the current value of this computed value.
     * Will evaluate its computation first if needed.
     */
    ComputedValue.prototype.get = function () {
        if (this.isComputing)
            fail("Cycle detected in computation " + this.name + ": " + this.derivation);
        if (globalState.inBatch === 0 && this.observers.size === 0 && !this.keepAlive) {
            if (shouldCompute(this)) {
                this.warnAboutUntrackedRead();
                startBatch(); // See perf test 'computed memoization'
                this.value = this.computeValue(false);
                endBatch();
            }
        }
        else {
            reportObserved(this);
            if (shouldCompute(this))
                if (this.trackAndCompute())
                    propagateChangeConfirmed(this);
        }
        var result = this.value;
        if (isCaughtException(result))
            throw result.cause;
        return result;
    };
    ComputedValue.prototype.peek = function () {
        var res = this.computeValue(false);
        if (isCaughtException(res))
            throw res.cause;
        return res;
    };
    ComputedValue.prototype.set = function (value) {
        if (this.setter) {
            invariant(!this.isRunningSetter, "The setter of computed value '" + this.name + "' is trying to update itself. Did you intend to update an _observable_ value, instead of the computed property?");
            this.isRunningSetter = true;
            try {
                this.setter.call(this.scope, value);
            }
            finally {
                this.isRunningSetter = false;
            }
        }
        else
            invariant(false,  false &&
                false);
    };
    ComputedValue.prototype.trackAndCompute = function () {
        if (isSpyEnabled() && "production" !== "production") {
            spyReport({
                object: this.scope,
                type: "compute",
                name: this.name
            });
        }
        var oldValue = this.value;
        var wasSuspended = 
        /* see #1208 */ this.dependenciesState === IDerivationState.NOT_TRACKING;
        var newValue = this.computeValue(true);
        var changed = wasSuspended ||
            isCaughtException(oldValue) ||
            isCaughtException(newValue) ||
            !this.equals(oldValue, newValue);
        if (changed) {
            this.value = newValue;
        }
        return changed;
    };
    ComputedValue.prototype.computeValue = function (track) {
        this.isComputing = true;
        globalState.computationDepth++;
        var res;
        if (track) {
            res = trackDerivedFunction(this, this.derivation, this.scope);
        }
        else {
            if (globalState.disableErrorBoundaries === true) {
                res = this.derivation.call(this.scope);
            }
            else {
                try {
                    res = this.derivation.call(this.scope);
                }
                catch (e) {
                    res = new CaughtException(e);
                }
            }
        }
        globalState.computationDepth--;
        this.isComputing = false;
        return res;
    };
    ComputedValue.prototype.suspend = function () {
        if (!this.keepAlive) {
            clearObserving(this);
            this.value = undefined; // don't hold on to computed value!
        }
    };
    ComputedValue.prototype.observe = function (listener, fireImmediately) {
        var _this = this;
        var firstTime = true;
        var prevValue = undefined;
        return autorun(function () {
            var newValue = _this.get();
            if (!firstTime || fireImmediately) {
                var prevU = untrackedStart();
                listener({
                    type: "update",
                    object: _this,
                    newValue: newValue,
                    oldValue: prevValue
                });
                untrackedEnd(prevU);
            }
            firstTime = false;
            prevValue = newValue;
        });
    };
    ComputedValue.prototype.warnAboutUntrackedRead = function () {
        if (true)
            return;
        if (this.requiresReaction === true) {
            fail("[mobx] Computed value " + this.name + " is read outside a reactive context");
        }
        if (this.isTracing !== TraceMode.NONE) {
            console.log("[mobx.trace] '" + this.name + "' is being read outside a reactive context. Doing a full recompute");
        }
        if (globalState.computedRequiresReaction) {
            console.warn("[mobx] Computed value " + this.name + " is being read outside a reactive context. Doing a full recompute");
        }
    };
    ComputedValue.prototype.toJSON = function () {
        return this.get();
    };
    ComputedValue.prototype.toString = function () {
        return this.name + "[" + this.derivation.toString() + "]";
    };
    ComputedValue.prototype.valueOf = function () {
        return toPrimitive(this.get());
    };
    ComputedValue.prototype[Symbol.toPrimitive] = function () {
        return this.valueOf();
    };
    return ComputedValue;
}());
var isComputedValue = createInstanceofPredicate("ComputedValue", ComputedValue);

/**
 * These values will persist if global state is reset
 */
var persistentKeys = [
    "mobxGuid",
    "spyListeners",
    "enforceActions",
    "computedRequiresReaction",
    "reactionRequiresObservable",
    "observableRequiresReaction",
    "allowStateReads",
    "disableErrorBoundaries",
    "runId",
    "UNCHANGED"
];
var MobXGlobals = /** @class */ (function () {
    function MobXGlobals() {
        /**
         * MobXGlobals version.
         * MobX compatiblity with other versions loaded in memory as long as this version matches.
         * It indicates that the global state still stores similar information
         *
         * N.B: this version is unrelated to the package version of MobX, and is only the version of the
         * internal state storage of MobX, and can be the same across many different package versions
         */
        this.version = 5;
        /**
         * globally unique token to signal unchanged
         */
        this.UNCHANGED = {};
        /**
         * Currently running derivation
         */
        this.trackingDerivation = null;
        /**
         * Are we running a computation currently? (not a reaction)
         */
        this.computationDepth = 0;
        /**
         * Each time a derivation is tracked, it is assigned a unique run-id
         */
        this.runId = 0;
        /**
         * 'guid' for general purpose. Will be persisted amongst resets.
         */
        this.mobxGuid = 0;
        /**
         * Are we in a batch block? (and how many of them)
         */
        this.inBatch = 0;
        /**
         * Observables that don't have observers anymore, and are about to be
         * suspended, unless somebody else accesses it in the same batch
         *
         * @type {IObservable[]}
         */
        this.pendingUnobservations = [];
        /**
         * List of scheduled, not yet executed, reactions.
         */
        this.pendingReactions = [];
        /**
         * Are we currently processing reactions?
         */
        this.isRunningReactions = false;
        /**
         * Is it allowed to change observables at this point?
         * In general, MobX doesn't allow that when running computations and React.render.
         * To ensure that those functions stay pure.
         */
        this.allowStateChanges = true;
        /**
         * Is it allowed to read observables at this point?
         * Used to hold the state needed for `observableRequiresReaction`
         */
        this.allowStateReads = true;
        /**
         * If strict mode is enabled, state changes are by default not allowed
         */
        this.enforceActions = false;
        /**
         * Spy callbacks
         */
        this.spyListeners = [];
        /**
         * Globally attached error handlers that react specifically to errors in reactions
         */
        this.globalReactionErrorHandlers = [];
        /**
         * Warn if computed values are accessed outside a reactive context
         */
        this.computedRequiresReaction = false;
        /**
         * (Experimental)
         * Warn if you try to create to derivation / reactive context without accessing any observable.
         */
        this.reactionRequiresObservable = false;
        /**
         * (Experimental)
         * Warn if observables are accessed outside a reactive context
         */
        this.observableRequiresReaction = false;
        /**
         * Allows overwriting of computed properties, useful in tests but not prod as it can cause
         * memory leaks. See https://github.com/mobxjs/mobx/issues/1867
         */
        this.computedConfigurable = false;
        /*
         * Don't catch and rethrow exceptions. This is useful for inspecting the state of
         * the stack when an exception occurs while debugging.
         */
        this.disableErrorBoundaries = false;
        /*
         * If true, we are already handling an exception in an action. Any errors in reactions should be suppressed, as
         * they are not the cause, see: https://github.com/mobxjs/mobx/issues/1836
         */
        this.suppressReactionErrors = false;
    }
    return MobXGlobals;
}());
var mockGlobal = {};
function getGlobal() {
    if (typeof window !== "undefined") {
        return window;
    }
    if (typeof global !== "undefined") {
        return global;
    }
    if (typeof self !== "undefined") {
        return self;
    }
    return mockGlobal;
}
var canMergeGlobalState = true;
var isolateCalled = false;
var globalState = (function () {
    var global = getGlobal();
    if (global.__mobxInstanceCount > 0 && !global.__mobxGlobals)
        canMergeGlobalState = false;
    if (global.__mobxGlobals && global.__mobxGlobals.version !== new MobXGlobals().version)
        canMergeGlobalState = false;
    if (!canMergeGlobalState) {
        setTimeout(function () {
            if (!isolateCalled) {
                fail("There are multiple, different versions of MobX active. Make sure MobX is loaded only once or use `configure({ isolateGlobalState: true })`");
            }
        }, 1);
        return new MobXGlobals();
    }
    else if (global.__mobxGlobals) {
        global.__mobxInstanceCount += 1;
        if (!global.__mobxGlobals.UNCHANGED)
            global.__mobxGlobals.UNCHANGED = {}; // make merge backward compatible
        return global.__mobxGlobals;
    }
    else {
        global.__mobxInstanceCount = 1;
        return (global.__mobxGlobals = new MobXGlobals());
    }
})();
function isolateGlobalState() {
    if (globalState.pendingReactions.length ||
        globalState.inBatch ||
        globalState.isRunningReactions)
        fail("isolateGlobalState should be called before MobX is running any reactions");
    isolateCalled = true;
    if (canMergeGlobalState) {
        if (--getGlobal().__mobxInstanceCount === 0)
            getGlobal().__mobxGlobals = undefined;
        globalState = new MobXGlobals();
    }
}
function getGlobalState() {
    return globalState;
}
/**
 * For testing purposes only; this will break the internal state of existing observables,
 * but can be used to get back at a stable state after throwing errors
 */
function resetGlobalState() {
    var defaultGlobals = new MobXGlobals();
    for (var key in defaultGlobals)
        if (persistentKeys.indexOf(key) === -1)
            globalState[key] = defaultGlobals[key];
    globalState.allowStateChanges = !globalState.enforceActions;
}

function hasObservers(observable) {
    return observable.observers && observable.observers.size > 0;
}
function getObservers(observable) {
    return observable.observers;
}
// function invariantObservers(observable: IObservable) {
//     const list = observable.observers
//     const map = observable.observersIndexes
//     const l = list.length
//     for (let i = 0; i < l; i++) {
//         const id = list[i].__mapid
//         if (i) {
//             invariant(map[id] === i, "INTERNAL ERROR maps derivation.__mapid to index in list") // for performance
//         } else {
//             invariant(!(id in map), "INTERNAL ERROR observer on index 0 shouldn't be held in map.") // for performance
//         }
//     }
//     invariant(
//         list.length === 0 || Object.keys(map).length === list.length - 1,
//         "INTERNAL ERROR there is no junk in map"
//     )
// }
function addObserver(observable, node) {
    // invariant(node.dependenciesState !== -1, "INTERNAL ERROR, can add only dependenciesState !== -1");
    // invariant(observable._observers.indexOf(node) === -1, "INTERNAL ERROR add already added node");
    // invariantObservers(observable);
    observable.observers.add(node);
    if (observable.lowestObserverState > node.dependenciesState)
        observable.lowestObserverState = node.dependenciesState;
    // invariantObservers(observable);
    // invariant(observable._observers.indexOf(node) !== -1, "INTERNAL ERROR didn't add node");
}
function removeObserver(observable, node) {
    // invariant(globalState.inBatch > 0, "INTERNAL ERROR, remove should be called only inside batch");
    // invariant(observable._observers.indexOf(node) !== -1, "INTERNAL ERROR remove already removed node");
    // invariantObservers(observable);
    observable.observers.delete(node);
    if (observable.observers.size === 0) {
        // deleting last observer
        queueForUnobservation(observable);
    }
    // invariantObservers(observable);
    // invariant(observable._observers.indexOf(node) === -1, "INTERNAL ERROR remove already removed node2");
}
function queueForUnobservation(observable) {
    if (observable.isPendingUnobservation === false) {
        // invariant(observable._observers.length === 0, "INTERNAL ERROR, should only queue for unobservation unobserved observables");
        observable.isPendingUnobservation = true;
        globalState.pendingUnobservations.push(observable);
    }
}
/**
 * Batch starts a transaction, at least for purposes of memoizing ComputedValues when nothing else does.
 * During a batch `onBecomeUnobserved` will be called at most once per observable.
 * Avoids unnecessary recalculations.
 */
function startBatch() {
    globalState.inBatch++;
}
function endBatch() {
    if (--globalState.inBatch === 0) {
        runReactions();
        // the batch is actually about to finish, all unobserving should happen here.
        var list = globalState.pendingUnobservations;
        for (var i = 0; i < list.length; i++) {
            var observable = list[i];
            observable.isPendingUnobservation = false;
            if (observable.observers.size === 0) {
                if (observable.isBeingObserved) {
                    // if this observable had reactive observers, trigger the hooks
                    observable.isBeingObserved = false;
                    observable.onBecomeUnobserved();
                }
                if (observable instanceof ComputedValue) {
                    // computed values are automatically teared down when the last observer leaves
                    // this process happens recursively, this computed might be the last observabe of another, etc..
                    observable.suspend();
                }
            }
        }
        globalState.pendingUnobservations = [];
    }
}
function reportObserved(observable) {
    checkIfStateReadsAreAllowed(observable);
    var derivation = globalState.trackingDerivation;
    if (derivation !== null) {
        /**
         * Simple optimization, give each derivation run an unique id (runId)
         * Check if last time this observable was accessed the same runId is used
         * if this is the case, the relation is already known
         */
        if (derivation.runId !== observable.lastAccessedBy) {
            observable.lastAccessedBy = derivation.runId;
            // Tried storing newObserving, or observing, or both as Set, but performance didn't come close...
            derivation.newObserving[derivation.unboundDepsCount++] = observable;
            if (!observable.isBeingObserved) {
                observable.isBeingObserved = true;
                observable.onBecomeObserved();
            }
        }
        return true;
    }
    else if (observable.observers.size === 0 && globalState.inBatch > 0) {
        queueForUnobservation(observable);
    }
    return false;
}
// function invariantLOS(observable: IObservable, msg: string) {
//     // it's expensive so better not run it in produciton. but temporarily helpful for testing
//     const min = getObservers(observable).reduce((a, b) => Math.min(a, b.dependenciesState), 2)
//     if (min >= observable.lowestObserverState) return // <- the only assumption about `lowestObserverState`
//     throw new Error(
//         "lowestObserverState is wrong for " +
//             msg +
//             " because " +
//             min +
//             " < " +
//             observable.lowestObserverState
//     )
// }
/**
 * NOTE: current propagation mechanism will in case of self reruning autoruns behave unexpectedly
 * It will propagate changes to observers from previous run
 * It's hard or maybe impossible (with reasonable perf) to get it right with current approach
 * Hopefully self reruning autoruns aren't a feature people should depend on
 * Also most basic use cases should be ok
 */
// Called by Atom when its value changes
function propagateChanged(observable) {
    // invariantLOS(observable, "changed start");
    if (observable.lowestObserverState === IDerivationState.STALE)
        return;
    observable.lowestObserverState = IDerivationState.STALE;
    // Ideally we use for..of here, but the downcompiled version is really slow...
    observable.observers.forEach(function (d) {
        if (d.dependenciesState === IDerivationState.UP_TO_DATE) {
            if (d.isTracing !== TraceMode.NONE) {
                logTraceInfo(d, observable);
            }
            d.onBecomeStale();
        }
        d.dependenciesState = IDerivationState.STALE;
    });
    // invariantLOS(observable, "changed end");
}
// Called by ComputedValue when it recalculate and its value changed
function propagateChangeConfirmed(observable) {
    // invariantLOS(observable, "confirmed start");
    if (observable.lowestObserverState === IDerivationState.STALE)
        return;
    observable.lowestObserverState = IDerivationState.STALE;
    observable.observers.forEach(function (d) {
        if (d.dependenciesState === IDerivationState.POSSIBLY_STALE)
            d.dependenciesState = IDerivationState.STALE;
        else if (d.dependenciesState === IDerivationState.UP_TO_DATE // this happens during computing of `d`, just keep lowestObserverState up to date.
        )
            observable.lowestObserverState = IDerivationState.UP_TO_DATE;
    });
    // invariantLOS(observable, "confirmed end");
}
// Used by computed when its dependency changed, but we don't wan't to immediately recompute.
function propagateMaybeChanged(observable) {
    // invariantLOS(observable, "maybe start");
    if (observable.lowestObserverState !== IDerivationState.UP_TO_DATE)
        return;
    observable.lowestObserverState = IDerivationState.POSSIBLY_STALE;
    observable.observers.forEach(function (d) {
        if (d.dependenciesState === IDerivationState.UP_TO_DATE) {
            d.dependenciesState = IDerivationState.POSSIBLY_STALE;
            if (d.isTracing !== TraceMode.NONE) {
                logTraceInfo(d, observable);
            }
            d.onBecomeStale();
        }
    });
    // invariantLOS(observable, "maybe end");
}
function logTraceInfo(derivation, observable) {
    console.log("[mobx.trace] '" + derivation.name + "' is invalidated due to a change in: '" + observable.name + "'");
    if (derivation.isTracing === TraceMode.BREAK) {
        var lines = [];
        printDepTree(getDependencyTree(derivation), lines, 1);
        // prettier-ignore
        new Function("debugger;\n/*\nTracing '" + derivation.name + "'\n\nYou are entering this break point because derivation '" + derivation.name + "' is being traced and '" + observable.name + "' is now forcing it to update.\nJust follow the stacktrace you should now see in the devtools to see precisely what piece of your code is causing this update\nThe stackframe you are looking for is at least ~6-8 stack-frames up.\n\n" + (derivation instanceof ComputedValue ? derivation.derivation.toString().replace(/[*]\//g, "/") : "") + "\n\nThe dependencies for this derivation are:\n\n" + lines.join("\n") + "\n*/\n    ")();
    }
}
function printDepTree(tree, lines, depth) {
    if (lines.length >= 1000) {
        lines.push("(and many more)");
        return;
    }
    lines.push("" + new Array(depth).join("\t") + tree.name); // MWE: not the fastest, but the easiest way :)
    if (tree.dependencies)
        tree.dependencies.forEach(function (child) { return printDepTree(child, lines, depth + 1); });
}

var Reaction = /** @class */ (function () {
    function Reaction(name, onInvalidate, errorHandler, requiresObservable) {
        if (name === void 0) { name = "Reaction@" + getNextId(); }
        if (requiresObservable === void 0) { requiresObservable = false; }
        this.name = name;
        this.onInvalidate = onInvalidate;
        this.errorHandler = errorHandler;
        this.requiresObservable = requiresObservable;
        this.observing = []; // nodes we are looking at. Our value depends on these nodes
        this.newObserving = [];
        this.dependenciesState = IDerivationState.NOT_TRACKING;
        this.diffValue = 0;
        this.runId = 0;
        this.unboundDepsCount = 0;
        this.__mapid = "#" + getNextId();
        this.isDisposed = false;
        this._isScheduled = false;
        this._isTrackPending = false;
        this._isRunning = false;
        this.isTracing = TraceMode.NONE;
    }
    Reaction.prototype.onBecomeStale = function () {
        this.schedule();
    };
    Reaction.prototype.schedule = function () {
        if (!this._isScheduled) {
            this._isScheduled = true;
            globalState.pendingReactions.push(this);
            runReactions();
        }
    };
    Reaction.prototype.isScheduled = function () {
        return this._isScheduled;
    };
    /**
     * internal, use schedule() if you intend to kick off a reaction
     */
    Reaction.prototype.runReaction = function () {
        if (!this.isDisposed) {
            startBatch();
            this._isScheduled = false;
            if (shouldCompute(this)) {
                this._isTrackPending = true;
                try {
                    this.onInvalidate();
                    if (this._isTrackPending &&
                        isSpyEnabled() &&
                        "production" !== "production") {
                        // onInvalidate didn't trigger track right away..
                        spyReport({
                            name: this.name,
                            type: "scheduled-reaction"
                        });
                    }
                }
                catch (e) {
                    this.reportExceptionInDerivation(e);
                }
            }
            endBatch();
        }
    };
    Reaction.prototype.track = function (fn) {
        if (this.isDisposed) {
            return;
            // console.warn("Reaction already disposed") // Note: Not a warning / error in mobx 4 either
        }
        startBatch();
        var notify = isSpyEnabled();
        var startTime;
        if (notify && "production" !== "production") {
            startTime = Date.now();
            spyReportStart({
                name: this.name,
                type: "reaction"
            });
        }
        this._isRunning = true;
        var result = trackDerivedFunction(this, fn, undefined);
        this._isRunning = false;
        this._isTrackPending = false;
        if (this.isDisposed) {
            // disposed during last run. Clean up everything that was bound after the dispose call.
            clearObserving(this);
        }
        if (isCaughtException(result))
            this.reportExceptionInDerivation(result.cause);
        if (notify && "production" !== "production") {
            spyReportEnd({
                time: Date.now() - startTime
            });
        }
        endBatch();
    };
    Reaction.prototype.reportExceptionInDerivation = function (error) {
        var _this = this;
        if (this.errorHandler) {
            this.errorHandler(error, this);
            return;
        }
        if (globalState.disableErrorBoundaries)
            throw error;
        var message = "[mobx] Encountered an uncaught exception that was thrown by a reaction or observer component, in: '" + this + "'";
        if (globalState.suppressReactionErrors) {
            console.warn("[mobx] (error in reaction '" + this.name + "' suppressed, fix error of causing action below)"); // prettier-ignore
        }
        else {
            console.error(message, error);
            /** If debugging brought you here, please, read the above message :-). Tnx! */
        }
        if (isSpyEnabled()) {
            spyReport({
                type: "error",
                name: this.name,
                message: message,
                error: "" + error
            });
        }
        globalState.globalReactionErrorHandlers.forEach(function (f) { return f(error, _this); });
    };
    Reaction.prototype.dispose = function () {
        if (!this.isDisposed) {
            this.isDisposed = true;
            if (!this._isRunning) {
                // if disposed while running, clean up later. Maybe not optimal, but rare case
                startBatch();
                clearObserving(this);
                endBatch();
            }
        }
    };
    Reaction.prototype.getDisposer = function () {
        var r = this.dispose.bind(this);
        r[$mobx] = this;
        return r;
    };
    Reaction.prototype.toString = function () {
        return "Reaction[" + this.name + "]";
    };
    Reaction.prototype.trace = function (enterBreakPoint) {
        if (enterBreakPoint === void 0) { enterBreakPoint = false; }
        trace(this, enterBreakPoint);
    };
    return Reaction;
}());
function onReactionError(handler) {
    globalState.globalReactionErrorHandlers.push(handler);
    return function () {
        var idx = globalState.globalReactionErrorHandlers.indexOf(handler);
        if (idx >= 0)
            globalState.globalReactionErrorHandlers.splice(idx, 1);
    };
}
/**
 * Magic number alert!
 * Defines within how many times a reaction is allowed to re-trigger itself
 * until it is assumed that this is gonna be a never ending loop...
 */
var MAX_REACTION_ITERATIONS = 100;
var reactionScheduler = function (f) { return f(); };
function runReactions() {
    // Trampolining, if runReactions are already running, new reactions will be picked up
    if (globalState.inBatch > 0 || globalState.isRunningReactions)
        return;
    reactionScheduler(runReactionsHelper);
}
function runReactionsHelper() {
    globalState.isRunningReactions = true;
    var allReactions = globalState.pendingReactions;
    var iterations = 0;
    // While running reactions, new reactions might be triggered.
    // Hence we work with two variables and check whether
    // we converge to no remaining reactions after a while.
    while (allReactions.length > 0) {
        if (++iterations === MAX_REACTION_ITERATIONS) {
            console.error("Reaction doesn't converge to a stable state after " + MAX_REACTION_ITERATIONS + " iterations." +
                (" Probably there is a cycle in the reactive function: " + allReactions[0]));
            allReactions.splice(0); // clear reactions
        }
        var remainingReactions = allReactions.splice(0);
        for (var i = 0, l = remainingReactions.length; i < l; i++)
            remainingReactions[i].runReaction();
    }
    globalState.isRunningReactions = false;
}
var isReaction = createInstanceofPredicate("Reaction", Reaction);
function setReactionScheduler(fn) {
    var baseScheduler = reactionScheduler;
    reactionScheduler = function (f) { return fn(function () { return baseScheduler(f); }); };
}

function isSpyEnabled() {
    return  false && false;
}
function spyReport(event) {
    if (true)
        return; // dead code elimination can do the rest
    if (!globalState.spyListeners.length)
        return;
    var listeners = globalState.spyListeners;
    for (var i = 0, l = listeners.length; i < l; i++)
        listeners[i](event);
}
function spyReportStart(event) {
    if (true)
        return;
    var change = __assign(__assign({}, event), { spyReportStart: true });
    spyReport(change);
}
var END_EVENT = { spyReportEnd: true };
function spyReportEnd(change) {
    if (true)
        return;
    if (change)
        spyReport(__assign(__assign({}, change), { spyReportEnd: true }));
    else
        spyReport(END_EVENT);
}
function spy(listener) {
    if (true) {
        console.warn("[mobx.spy] Is a no-op in production builds");
        return function () { };
    }
    else {}
}

function dontReassignFields() {
    fail( false && false);
}
function namedActionDecorator(name) {
    return function (target, prop, descriptor) {
        if (descriptor) {
            if (false) {}
            // babel / typescript
            // @action method() { }
            if (descriptor.value) {
                // typescript
                return {
                    value: createAction(name, descriptor.value),
                    enumerable: false,
                    configurable: true,
                    writable: true // for typescript, this must be writable, otherwise it cannot inherit :/ (see inheritable actions test)
                };
            }
            // babel only: @action method = () => {}
            var initializer_1 = descriptor.initializer;
            return {
                enumerable: false,
                configurable: true,
                writable: true,
                initializer: function () {
                    // N.B: we can't immediately invoke initializer; this would be wrong
                    return createAction(name, initializer_1.call(this));
                }
            };
        }
        // bound instance methods
        return actionFieldDecorator(name).apply(this, arguments);
    };
}
function actionFieldDecorator(name) {
    // Simple property that writes on first invocation to the current instance
    return function (target, prop, descriptor) {
        Object.defineProperty(target, prop, {
            configurable: true,
            enumerable: false,
            get: function () {
                return undefined;
            },
            set: function (value) {
                addHiddenProp(this, prop, action(name, value));
            }
        });
    };
}
function boundActionDecorator(target, propertyName, descriptor, applyToInstance) {
    if (applyToInstance === true) {
        defineBoundAction(target, propertyName, descriptor.value);
        return null;
    }
    if (descriptor) {
        // if (descriptor.value)
        // Typescript / Babel: @action.bound method() { }
        // also: babel @action.bound method = () => {}
        return {
            configurable: true,
            enumerable: false,
            get: function () {
                defineBoundAction(this, propertyName, descriptor.value || descriptor.initializer.call(this));
                return this[propertyName];
            },
            set: dontReassignFields
        };
    }
    // field decorator Typescript @action.bound method = () => {}
    return {
        enumerable: false,
        configurable: true,
        set: function (v) {
            defineBoundAction(this, propertyName, v);
        },
        get: function () {
            return undefined;
        }
    };
}

var action = function action(arg1, arg2, arg3, arg4) {
    // action(fn() {})
    if (arguments.length === 1 && typeof arg1 === "function")
        return createAction(arg1.name || "<unnamed action>", arg1);
    // action("name", fn() {})
    if (arguments.length === 2 && typeof arg2 === "function")
        return createAction(arg1, arg2);
    // @action("name") fn() {}
    if (arguments.length === 1 && typeof arg1 === "string")
        return namedActionDecorator(arg1);
    // @action fn() {}
    if (arg4 === true) {
        // apply to instance immediately
        addHiddenProp(arg1, arg2, createAction(arg1.name || arg2, arg3.value, this));
    }
    else {
        return namedActionDecorator(arg2).apply(null, arguments);
    }
};
action.bound = boundActionDecorator;
function runInAction(arg1, arg2) {
    var actionName = typeof arg1 === "string" ? arg1 : arg1.name || "<unnamed action>";
    var fn = typeof arg1 === "function" ? arg1 : arg2;
    if (false) {}
    return executeAction(actionName, fn, this, undefined);
}
function isAction(thing) {
    return typeof thing === "function" && thing.isMobxAction === true;
}
function defineBoundAction(target, propertyName, fn) {
    addHiddenProp(target, propertyName, createAction(propertyName, fn.bind(target)));
}

/**
 * Creates a named reactive view and keeps it alive, so that the view is always
 * updated if one of the dependencies changes, even when the view is not further used by something else.
 * @param view The reactive view
 * @returns disposer function, which can be used to stop the view from being updated in the future.
 */
function autorun(view, opts) {
    if (opts === void 0) { opts = EMPTY_OBJECT; }
    if (false) {}
    var name = (opts && opts.name) || view.name || "Autorun@" + getNextId();
    var runSync = !opts.scheduler && !opts.delay;
    var reaction;
    if (runSync) {
        // normal autorun
        reaction = new Reaction(name, function () {
            this.track(reactionRunner);
        }, opts.onError, opts.requiresObservable);
    }
    else {
        var scheduler_1 = createSchedulerFromOptions(opts);
        // debounced autorun
        var isScheduled_1 = false;
        reaction = new Reaction(name, function () {
            if (!isScheduled_1) {
                isScheduled_1 = true;
                scheduler_1(function () {
                    isScheduled_1 = false;
                    if (!reaction.isDisposed)
                        reaction.track(reactionRunner);
                });
            }
        }, opts.onError, opts.requiresObservable);
    }
    function reactionRunner() {
        view(reaction);
    }
    reaction.schedule();
    return reaction.getDisposer();
}
var run = function (f) { return f(); };
function createSchedulerFromOptions(opts) {
    return opts.scheduler
        ? opts.scheduler
        : opts.delay
            ? function (f) { return setTimeout(f, opts.delay); }
            : run;
}
function reaction(expression, effect, opts) {
    if (opts === void 0) { opts = EMPTY_OBJECT; }
    if (false) {}
    var name = opts.name || "Reaction@" + getNextId();
    var effectAction = action(name, opts.onError ? wrapErrorHandler(opts.onError, effect) : effect);
    var runSync = !opts.scheduler && !opts.delay;
    var scheduler = createSchedulerFromOptions(opts);
    var firstTime = true;
    var isScheduled = false;
    var value;
    var equals = opts.compareStructural
        ? comparer.structural
        : opts.equals || comparer.default;
    var r = new Reaction(name, function () {
        if (firstTime || runSync) {
            reactionRunner();
        }
        else if (!isScheduled) {
            isScheduled = true;
            scheduler(reactionRunner);
        }
    }, opts.onError, opts.requiresObservable);
    function reactionRunner() {
        isScheduled = false; // Q: move into reaction runner?
        if (r.isDisposed)
            return;
        var changed = false;
        r.track(function () {
            var nextValue = expression(r);
            changed = firstTime || !equals(value, nextValue);
            value = nextValue;
        });
        if (firstTime && opts.fireImmediately)
            effectAction(value, r);
        if (!firstTime && changed === true)
            effectAction(value, r);
        if (firstTime)
            firstTime = false;
    }
    r.schedule();
    return r.getDisposer();
}
function wrapErrorHandler(errorHandler, baseFn) {
    return function () {
        try {
            return baseFn.apply(this, arguments);
        }
        catch (e) {
            errorHandler.call(this, e);
        }
    };
}

function onBecomeObserved(thing, arg2, arg3) {
    return interceptHook("onBecomeObserved", thing, arg2, arg3);
}
function onBecomeUnobserved(thing, arg2, arg3) {
    return interceptHook("onBecomeUnobserved", thing, arg2, arg3);
}
function interceptHook(hook, thing, arg2, arg3) {
    var atom = typeof arg3 === "function" ? getAtom(thing, arg2) : getAtom(thing);
    var cb = typeof arg3 === "function" ? arg3 : arg2;
    var listenersKey = hook + "Listeners";
    if (atom[listenersKey]) {
        atom[listenersKey].add(cb);
    }
    else {
        atom[listenersKey] = new Set([cb]);
    }
    var orig = atom[hook];
    if (typeof orig !== "function")
        return fail( false && false);
    return function () {
        var hookListeners = atom[listenersKey];
        if (hookListeners) {
            hookListeners.delete(cb);
            if (hookListeners.size === 0) {
                delete atom[listenersKey];
            }
        }
    };
}

function configure(options) {
    var enforceActions = options.enforceActions, computedRequiresReaction = options.computedRequiresReaction, computedConfigurable = options.computedConfigurable, disableErrorBoundaries = options.disableErrorBoundaries, reactionScheduler = options.reactionScheduler, reactionRequiresObservable = options.reactionRequiresObservable, observableRequiresReaction = options.observableRequiresReaction;
    if (options.isolateGlobalState === true) {
        isolateGlobalState();
    }
    if (enforceActions !== undefined) {
        if (typeof enforceActions === "boolean" || enforceActions === "strict")
            deprecated("Deprecated value for 'enforceActions', use 'false' => '\"never\"', 'true' => '\"observed\"', '\"strict\"' => \"'always'\" instead");
        var ea = void 0;
        switch (enforceActions) {
            case true:
            case "observed":
                ea = true;
                break;
            case false:
            case "never":
                ea = false;
                break;
            case "strict":
            case "always":
                ea = "strict";
                break;
            default:
                fail("Invalid value for 'enforceActions': '" + enforceActions + "', expected 'never', 'always' or 'observed'");
        }
        globalState.enforceActions = ea;
        globalState.allowStateChanges = ea === true || ea === "strict" ? false : true;
    }
    if (computedRequiresReaction !== undefined) {
        globalState.computedRequiresReaction = !!computedRequiresReaction;
    }
    if (reactionRequiresObservable !== undefined) {
        globalState.reactionRequiresObservable = !!reactionRequiresObservable;
    }
    if (observableRequiresReaction !== undefined) {
        globalState.observableRequiresReaction = !!observableRequiresReaction;
        globalState.allowStateReads = !globalState.observableRequiresReaction;
    }
    if (computedConfigurable !== undefined) {
        globalState.computedConfigurable = !!computedConfigurable;
    }
    if (disableErrorBoundaries !== undefined) {
        if (disableErrorBoundaries === true)
            console.warn("WARNING: Debug feature only. MobX will NOT recover from errors when `disableErrorBoundaries` is enabled.");
        globalState.disableErrorBoundaries = !!disableErrorBoundaries;
    }
    if (reactionScheduler) {
        setReactionScheduler(reactionScheduler);
    }
}

function decorate(thing, decorators) {
     false &&
        false;
    var target = typeof thing === "function" ? thing.prototype : thing;
    var _loop_1 = function (prop) {
        var propertyDecorators = decorators[prop];
        if (!Array.isArray(propertyDecorators)) {
            propertyDecorators = [propertyDecorators];
        }
         false &&
            false;
        var descriptor = Object.getOwnPropertyDescriptor(target, prop);
        var newDescriptor = propertyDecorators.reduce(function (accDescriptor, decorator) { return decorator(target, prop, accDescriptor); }, descriptor);
        if (newDescriptor)
            Object.defineProperty(target, prop, newDescriptor);
    };
    for (var prop in decorators) {
        _loop_1(prop);
    }
    return thing;
}

function extendObservable(target, properties, decorators, options) {
    if (false) {}
    options = asCreateObservableOptions(options);
    var defaultDecorator = getDefaultDecoratorFromObjectOptions(options);
    initializeInstance(target); // Fixes #1740
    asObservableObject(target, options.name, defaultDecorator.enhancer); // make sure object is observable, even without initial props
    if (properties)
        extendObservableObjectWithProperties(target, properties, decorators, defaultDecorator);
    return target;
}
function getDefaultDecoratorFromObjectOptions(options) {
    return options.defaultDecorator || (options.deep === false ? refDecorator : deepDecorator);
}
function extendObservableObjectWithProperties(target, properties, decorators, defaultDecorator) {
    var e_1, _a, e_2, _b;
    if (false) { var key, keys_1, keys_1_1, keys; }
    startBatch();
    try {
        var keys = getPlainObjectKeys(properties);
        try {
            for (var keys_2 = __values(keys), keys_2_1 = keys_2.next(); !keys_2_1.done; keys_2_1 = keys_2.next()) {
                var key = keys_2_1.value;
                var descriptor = Object.getOwnPropertyDescriptor(properties, key);
                if (false) {}
                var decorator = decorators && key in decorators
                    ? decorators[key]
                    : descriptor.get
                        ? computedDecorator
                        : defaultDecorator;
                if (false)
                    {}
                var resultDescriptor = decorator(target, key, descriptor, true);
                if (resultDescriptor // otherwise, assume already applied, due to `applyToInstance`
                )
                    Object.defineProperty(target, key, resultDescriptor);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (keys_2_1 && !keys_2_1.done && (_b = keys_2.return)) _b.call(keys_2);
            }
            finally { if (e_2) throw e_2.error; }
        }
    }
    finally {
        endBatch();
    }
}

function getDependencyTree(thing, property) {
    return nodeToDependencyTree(getAtom(thing, property));
}
function nodeToDependencyTree(node) {
    var result = {
        name: node.name
    };
    if (node.observing && node.observing.length > 0)
        result.dependencies = unique(node.observing).map(nodeToDependencyTree);
    return result;
}
function getObserverTree(thing, property) {
    return nodeToObserverTree(getAtom(thing, property));
}
function nodeToObserverTree(node) {
    var result = {
        name: node.name
    };
    if (hasObservers(node))
        result.observers = Array.from(getObservers(node)).map(nodeToObserverTree);
    return result;
}

var generatorId = 0;
function FlowCancellationError() {
    this.message = "FLOW_CANCELLED";
}
FlowCancellationError.prototype = Object.create(Error.prototype);
function isFlowCancellationError(error) {
    return error instanceof FlowCancellationError;
}
function flow(generator) {
    if (arguments.length !== 1)
        fail( true && "Flow expects 1 argument and cannot be used as decorator");
    var name = generator.name || "<unnamed flow>";
    // Implementation based on https://github.com/tj/co/blob/master/index.js
    return function () {
        var ctx = this;
        var args = arguments;
        var runId = ++generatorId;
        var gen = action(name + " - runid: " + runId + " - init", generator).apply(ctx, args);
        var rejector;
        var pendingPromise = undefined;
        var promise = new Promise(function (resolve, reject) {
            var stepId = 0;
            rejector = reject;
            function onFulfilled(res) {
                pendingPromise = undefined;
                var ret;
                try {
                    ret = action(name + " - runid: " + runId + " - yield " + stepId++, gen.next).call(gen, res);
                }
                catch (e) {
                    return reject(e);
                }
                next(ret);
            }
            function onRejected(err) {
                pendingPromise = undefined;
                var ret;
                try {
                    ret = action(name + " - runid: " + runId + " - yield " + stepId++, gen.throw).call(gen, err);
                }
                catch (e) {
                    return reject(e);
                }
                next(ret);
            }
            function next(ret) {
                if (ret && typeof ret.then === "function") {
                    // an async iterator
                    ret.then(next, reject);
                    return;
                }
                if (ret.done)
                    return resolve(ret.value);
                pendingPromise = Promise.resolve(ret.value);
                return pendingPromise.then(onFulfilled, onRejected);
            }
            onFulfilled(undefined); // kick off the process
        });
        promise.cancel = action(name + " - runid: " + runId + " - cancel", function () {
            try {
                if (pendingPromise)
                    cancelPromise(pendingPromise);
                // Finally block can return (or yield) stuff..
                var res = gen.return(undefined);
                // eat anything that promise would do, it's cancelled!
                var yieldedPromise = Promise.resolve(res.value);
                yieldedPromise.then(noop, noop);
                cancelPromise(yieldedPromise); // maybe it can be cancelled :)
                // reject our original promise
                rejector(new FlowCancellationError());
            }
            catch (e) {
                rejector(e); // there could be a throwing finally block
            }
        });
        return promise;
    };
}
function cancelPromise(promise) {
    if (typeof promise.cancel === "function")
        promise.cancel();
}

function interceptReads(thing, propOrHandler, handler) {
    var target;
    if (isObservableMap(thing) || isObservableArray(thing) || isObservableValue(thing)) {
        target = getAdministration(thing);
    }
    else if (isObservableObject(thing)) {
        if (typeof propOrHandler !== "string")
            return fail( false &&
                false);
        target = getAdministration(thing, propOrHandler);
    }
    else {
        return fail( false &&
            false);
    }
    if (target.dehancer !== undefined)
        return fail( false && false);
    target.dehancer = typeof propOrHandler === "function" ? propOrHandler : handler;
    return function () {
        target.dehancer = undefined;
    };
}

function intercept(thing, propOrHandler, handler) {
    if (typeof handler === "function")
        return interceptProperty(thing, propOrHandler, handler);
    else
        return interceptInterceptable(thing, propOrHandler);
}
function interceptInterceptable(thing, handler) {
    return getAdministration(thing).intercept(handler);
}
function interceptProperty(thing, property, handler) {
    return getAdministration(thing, property).intercept(handler);
}

function _isComputed(value, property) {
    if (value === null || value === undefined)
        return false;
    if (property !== undefined) {
        if (isObservableObject(value) === false)
            return false;
        if (!value[$mobx].values.has(property))
            return false;
        var atom = getAtom(value, property);
        return isComputedValue(atom);
    }
    return isComputedValue(value);
}
function isComputed(value) {
    if (arguments.length > 1)
        return fail( false &&
            false);
    return _isComputed(value);
}
function isComputedProp(value, propName) {
    if (typeof propName !== "string")
        return fail( false &&
            false);
    return _isComputed(value, propName);
}

function _isObservable(value, property) {
    if (value === null || value === undefined)
        return false;
    if (property !== undefined) {
        if (false)
            {}
        if (isObservableObject(value)) {
            return value[$mobx].values.has(property);
        }
        return false;
    }
    // For first check, see #701
    return (isObservableObject(value) ||
        !!value[$mobx] ||
        isAtom(value) ||
        isReaction(value) ||
        isComputedValue(value));
}
function isObservable(value) {
    if (arguments.length !== 1)
        fail( false &&
            false);
    return _isObservable(value);
}
function isObservableProp(value, propName) {
    if (typeof propName !== "string")
        return fail( false && false);
    return _isObservable(value, propName);
}

function keys(obj) {
    if (isObservableObject(obj)) {
        return obj[$mobx].getKeys();
    }
    if (isObservableMap(obj)) {
        return Array.from(obj.keys());
    }
    if (isObservableSet(obj)) {
        return Array.from(obj.keys());
    }
    if (isObservableArray(obj)) {
        return obj.map(function (_, index) { return index; });
    }
    return fail( false &&
        false);
}
function values(obj) {
    if (isObservableObject(obj)) {
        return keys(obj).map(function (key) { return obj[key]; });
    }
    if (isObservableMap(obj)) {
        return keys(obj).map(function (key) { return obj.get(key); });
    }
    if (isObservableSet(obj)) {
        return Array.from(obj.values());
    }
    if (isObservableArray(obj)) {
        return obj.slice();
    }
    return fail( false &&
        false);
}
function entries(obj) {
    if (isObservableObject(obj)) {
        return keys(obj).map(function (key) { return [key, obj[key]]; });
    }
    if (isObservableMap(obj)) {
        return keys(obj).map(function (key) { return [key, obj.get(key)]; });
    }
    if (isObservableSet(obj)) {
        return Array.from(obj.entries());
    }
    if (isObservableArray(obj)) {
        return obj.map(function (key, index) { return [index, key]; });
    }
    return fail( false &&
        false);
}
function set(obj, key, value) {
    if (arguments.length === 2 && !isObservableSet(obj)) {
        startBatch();
        var values_1 = key;
        try {
            for (var key_1 in values_1)
                set(obj, key_1, values_1[key_1]);
        }
        finally {
            endBatch();
        }
        return;
    }
    if (isObservableObject(obj)) {
        var adm = obj[$mobx];
        var existingObservable = adm.values.get(key);
        if (existingObservable) {
            adm.write(key, value);
        }
        else {
            adm.addObservableProp(key, value, adm.defaultEnhancer);
        }
    }
    else if (isObservableMap(obj)) {
        obj.set(key, value);
    }
    else if (isObservableSet(obj)) {
        obj.add(key);
    }
    else if (isObservableArray(obj)) {
        if (typeof key !== "number")
            key = parseInt(key, 10);
        invariant(key >= 0, "Not a valid index: '" + key + "'");
        startBatch();
        if (key >= obj.length)
            obj.length = key + 1;
        obj[key] = value;
        endBatch();
    }
    else {
        return fail( false &&
            false);
    }
}
function remove(obj, key) {
    if (isObservableObject(obj)) {
        obj[$mobx].remove(key);
    }
    else if (isObservableMap(obj)) {
        obj.delete(key);
    }
    else if (isObservableSet(obj)) {
        obj.delete(key);
    }
    else if (isObservableArray(obj)) {
        if (typeof key !== "number")
            key = parseInt(key, 10);
        invariant(key >= 0, "Not a valid index: '" + key + "'");
        obj.splice(key, 1);
    }
    else {
        return fail( false &&
            false);
    }
}
function has(obj, key) {
    if (isObservableObject(obj)) {
        // return keys(obj).indexOf(key) >= 0
        var adm = getAdministration(obj);
        return adm.has(key);
    }
    else if (isObservableMap(obj)) {
        return obj.has(key);
    }
    else if (isObservableSet(obj)) {
        return obj.has(key);
    }
    else if (isObservableArray(obj)) {
        return key >= 0 && key < obj.length;
    }
    else {
        return fail( false &&
            false);
    }
}
function get(obj, key) {
    if (!has(obj, key))
        return undefined;
    if (isObservableObject(obj)) {
        return obj[key];
    }
    else if (isObservableMap(obj)) {
        return obj.get(key);
    }
    else if (isObservableArray(obj)) {
        return obj[key];
    }
    else {
        return fail( false &&
            false);
    }
}

function observe(thing, propOrCb, cbOrFire, fireImmediately) {
    if (typeof cbOrFire === "function")
        return observeObservableProperty(thing, propOrCb, cbOrFire, fireImmediately);
    else
        return observeObservable(thing, propOrCb, cbOrFire);
}
function observeObservable(thing, listener, fireImmediately) {
    return getAdministration(thing).observe(listener, fireImmediately);
}
function observeObservableProperty(thing, property, listener, fireImmediately) {
    return getAdministration(thing, property).observe(listener, fireImmediately);
}

var defaultOptions = {
    detectCycles: true,
    exportMapsAsObjects: true,
    recurseEverything: false
};
function cache(map, key, value, options) {
    if (options.detectCycles)
        map.set(key, value);
    return value;
}
function toJSHelper(source, options, __alreadySeen) {
    if (!options.recurseEverything && !isObservable(source))
        return source;
    if (typeof source !== "object")
        return source;
    // Directly return null if source is null
    if (source === null)
        return null;
    // Directly return the Date object itself if contained in the observable
    if (source instanceof Date)
        return source;
    if (isObservableValue(source))
        return toJSHelper(source.get(), options, __alreadySeen);
    // make sure we track the keys of the object
    if (isObservable(source))
        keys(source);
    var detectCycles = options.detectCycles === true;
    if (detectCycles && source !== null && __alreadySeen.has(source)) {
        return __alreadySeen.get(source);
    }
    if (isObservableArray(source) || Array.isArray(source)) {
        var res_1 = cache(__alreadySeen, source, [], options);
        var toAdd = source.map(function (value) { return toJSHelper(value, options, __alreadySeen); });
        res_1.length = toAdd.length;
        for (var i = 0, l = toAdd.length; i < l; i++)
            res_1[i] = toAdd[i];
        return res_1;
    }
    if (isObservableSet(source) || Object.getPrototypeOf(source) === Set.prototype) {
        if (options.exportMapsAsObjects === false) {
            var res_2 = cache(__alreadySeen, source, new Set(), options);
            source.forEach(function (value) {
                res_2.add(toJSHelper(value, options, __alreadySeen));
            });
            return res_2;
        }
        else {
            var res_3 = cache(__alreadySeen, source, [], options);
            source.forEach(function (value) {
                res_3.push(toJSHelper(value, options, __alreadySeen));
            });
            return res_3;
        }
    }
    if (isObservableMap(source) || Object.getPrototypeOf(source) === Map.prototype) {
        if (options.exportMapsAsObjects === false) {
            var res_4 = cache(__alreadySeen, source, new Map(), options);
            source.forEach(function (value, key) {
                res_4.set(key, toJSHelper(value, options, __alreadySeen));
            });
            return res_4;
        }
        else {
            var res_5 = cache(__alreadySeen, source, {}, options);
            source.forEach(function (value, key) {
                res_5[key] = toJSHelper(value, options, __alreadySeen);
            });
            return res_5;
        }
    }
    // Fallback to the situation that source is an ObservableObject or a plain object
    var res = cache(__alreadySeen, source, {}, options);
    getPlainObjectKeys(source).forEach(function (key) {
        res[key] = toJSHelper(source[key], options, __alreadySeen);
    });
    return res;
}
function toJS(source, options) {
    // backward compatibility
    if (typeof options === "boolean")
        options = { detectCycles: options };
    if (!options)
        options = defaultOptions;
    options.detectCycles =
        options.detectCycles === undefined
            ? options.recurseEverything === true
            : options.detectCycles === true;
    var __alreadySeen;
    if (options.detectCycles)
        __alreadySeen = new Map();
    return toJSHelper(source, options, __alreadySeen);
}

function trace() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var enterBreakPoint = false;
    if (typeof args[args.length - 1] === "boolean")
        enterBreakPoint = args.pop();
    var derivation = getAtomFromArgs(args);
    if (!derivation) {
        return fail( false &&
            false);
    }
    if (derivation.isTracing === TraceMode.NONE) {
        console.log("[mobx.trace] '" + derivation.name + "' tracing enabled");
    }
    derivation.isTracing = enterBreakPoint ? TraceMode.BREAK : TraceMode.LOG;
}
function getAtomFromArgs(args) {
    switch (args.length) {
        case 0:
            return globalState.trackingDerivation;
        case 1:
            return getAtom(args[0]);
        case 2:
            return getAtom(args[0], args[1]);
    }
}

/**
 * During a transaction no views are updated until the end of the transaction.
 * The transaction will be run synchronously nonetheless.
 *
 * @param action a function that updates some reactive state
 * @returns any value that was returned by the 'action' parameter.
 */
function transaction(action, thisArg) {
    if (thisArg === void 0) { thisArg = undefined; }
    startBatch();
    try {
        return action.apply(thisArg);
    }
    finally {
        endBatch();
    }
}

function when(predicate, arg1, arg2) {
    if (arguments.length === 1 || (arg1 && typeof arg1 === "object"))
        return whenPromise(predicate, arg1);
    return _when(predicate, arg1, arg2 || {});
}
function _when(predicate, effect, opts) {
    var timeoutHandle;
    if (typeof opts.timeout === "number") {
        timeoutHandle = setTimeout(function () {
            if (!disposer[$mobx].isDisposed) {
                disposer();
                var error = new Error("WHEN_TIMEOUT");
                if (opts.onError)
                    opts.onError(error);
                else
                    throw error;
            }
        }, opts.timeout);
    }
    opts.name = opts.name || "When@" + getNextId();
    var effectAction = createAction(opts.name + "-effect", effect);
    var disposer = autorun(function (r) {
        if (predicate()) {
            r.dispose();
            if (timeoutHandle)
                clearTimeout(timeoutHandle);
            effectAction();
        }
    }, opts);
    return disposer;
}
function whenPromise(predicate, opts) {
    if (false)
        {}
    var cancel;
    var res = new Promise(function (resolve, reject) {
        var disposer = _when(predicate, resolve, __assign(__assign({}, opts), { onError: reject }));
        cancel = function () {
            disposer();
            reject("WHEN_CANCELLED");
        };
    });
    res.cancel = cancel;
    return res;
}

function getAdm(target) {
    return target[$mobx];
}
function isPropertyKey(val) {
    return typeof val === "string" || typeof val === "number" || typeof val === "symbol";
}
// Optimization: we don't need the intermediate objects and could have a completely custom administration for DynamicObjects,
// and skip either the internal values map, or the base object with its property descriptors!
var objectProxyTraps = {
    has: function (target, name) {
        if (name === $mobx || name === "constructor" || name === mobxDidRunLazyInitializersSymbol)
            return true;
        var adm = getAdm(target);
        // MWE: should `in` operator be reactive? If not, below code path will be faster / more memory efficient
        // TODO: check performance stats!
        // if (adm.values.get(name as string)) return true
        if (isPropertyKey(name))
            return adm.has(name);
        return name in target;
    },
    get: function (target, name) {
        if (name === $mobx || name === "constructor" || name === mobxDidRunLazyInitializersSymbol)
            return target[name];
        var adm = getAdm(target);
        var observable = adm.values.get(name);
        if (observable instanceof Atom) {
            var result = observable.get();
            if (result === undefined) {
                // This fixes #1796, because deleting a prop that has an
                // undefined value won't retrigger a observer (no visible effect),
                // the autorun wouldn't subscribe to future key changes (see also next comment)
                adm.has(name);
            }
            return result;
        }
        // make sure we start listening to future keys
        // note that we only do this here for optimization
        if (isPropertyKey(name))
            adm.has(name);
        return target[name];
    },
    set: function (target, name, value) {
        if (!isPropertyKey(name))
            return false;
        set(target, name, value);
        return true;
    },
    deleteProperty: function (target, name) {
        if (!isPropertyKey(name))
            return false;
        var adm = getAdm(target);
        adm.remove(name);
        return true;
    },
    ownKeys: function (target) {
        var adm = getAdm(target);
        adm.keysAtom.reportObserved();
        return Reflect.ownKeys(target);
    },
    preventExtensions: function (target) {
        fail("Dynamic observable objects cannot be frozen");
        return false;
    }
};
function createDynamicObservableObject(base) {
    var proxy = new Proxy(base, objectProxyTraps);
    base[$mobx].proxy = proxy;
    return proxy;
}

function hasInterceptors(interceptable) {
    return interceptable.interceptors !== undefined && interceptable.interceptors.length > 0;
}
function registerInterceptor(interceptable, handler) {
    var interceptors = interceptable.interceptors || (interceptable.interceptors = []);
    interceptors.push(handler);
    return once(function () {
        var idx = interceptors.indexOf(handler);
        if (idx !== -1)
            interceptors.splice(idx, 1);
    });
}
function interceptChange(interceptable, change) {
    var prevU = untrackedStart();
    try {
        // Interceptor can modify the array, copy it to avoid concurrent modification, see #1950
        var interceptors = __spread((interceptable.interceptors || []));
        for (var i = 0, l = interceptors.length; i < l; i++) {
            change = interceptors[i](change);
            invariant(!change || change.type, "Intercept handlers should return nothing or a change object");
            if (!change)
                break;
        }
        return change;
    }
    finally {
        untrackedEnd(prevU);
    }
}

function hasListeners(listenable) {
    return listenable.changeListeners !== undefined && listenable.changeListeners.length > 0;
}
function registerListener(listenable, handler) {
    var listeners = listenable.changeListeners || (listenable.changeListeners = []);
    listeners.push(handler);
    return once(function () {
        var idx = listeners.indexOf(handler);
        if (idx !== -1)
            listeners.splice(idx, 1);
    });
}
function notifyListeners(listenable, change) {
    var prevU = untrackedStart();
    var listeners = listenable.changeListeners;
    if (!listeners)
        return;
    listeners = listeners.slice();
    for (var i = 0, l = listeners.length; i < l; i++) {
        listeners[i](change);
    }
    untrackedEnd(prevU);
}

var MAX_SPLICE_SIZE = 10000; // See e.g. https://github.com/mobxjs/mobx/issues/859
var arrayTraps = {
    get: function (target, name) {
        if (name === $mobx)
            return target[$mobx];
        if (name === "length")
            return target[$mobx].getArrayLength();
        if (typeof name === "number") {
            return arrayExtensions.get.call(target, name);
        }
        if (typeof name === "string" && !isNaN(name)) {
            return arrayExtensions.get.call(target, parseInt(name));
        }
        if (arrayExtensions.hasOwnProperty(name)) {
            return arrayExtensions[name];
        }
        return target[name];
    },
    set: function (target, name, value) {
        if (name === "length") {
            target[$mobx].setArrayLength(value);
        }
        if (typeof name === "number") {
            arrayExtensions.set.call(target, name, value);
        }
        if (typeof name === "symbol" || isNaN(name)) {
            target[name] = value;
        }
        else {
            // numeric string
            arrayExtensions.set.call(target, parseInt(name), value);
        }
        return true;
    },
    preventExtensions: function (target) {
        fail("Observable arrays cannot be frozen");
        return false;
    }
};
function createObservableArray(initialValues, enhancer, name, owned) {
    if (name === void 0) { name = "ObservableArray@" + getNextId(); }
    if (owned === void 0) { owned = false; }
    var adm = new ObservableArrayAdministration(name, enhancer, owned);
    addHiddenFinalProp(adm.values, $mobx, adm);
    var proxy = new Proxy(adm.values, arrayTraps);
    adm.proxy = proxy;
    if (initialValues && initialValues.length) {
        var prev = allowStateChangesStart(true);
        adm.spliceWithArray(0, 0, initialValues);
        allowStateChangesEnd(prev);
    }
    return proxy;
}
var ObservableArrayAdministration = /** @class */ (function () {
    function ObservableArrayAdministration(name, enhancer, owned) {
        this.owned = owned;
        this.values = [];
        this.proxy = undefined;
        this.lastKnownLength = 0;
        this.atom = new Atom(name || "ObservableArray@" + getNextId());
        this.enhancer = function (newV, oldV) { return enhancer(newV, oldV, name + "[..]"); };
    }
    ObservableArrayAdministration.prototype.dehanceValue = function (value) {
        if (this.dehancer !== undefined)
            return this.dehancer(value);
        return value;
    };
    ObservableArrayAdministration.prototype.dehanceValues = function (values) {
        if (this.dehancer !== undefined && values.length > 0)
            return values.map(this.dehancer);
        return values;
    };
    ObservableArrayAdministration.prototype.intercept = function (handler) {
        return registerInterceptor(this, handler);
    };
    ObservableArrayAdministration.prototype.observe = function (listener, fireImmediately) {
        if (fireImmediately === void 0) { fireImmediately = false; }
        if (fireImmediately) {
            listener({
                object: this.proxy,
                type: "splice",
                index: 0,
                added: this.values.slice(),
                addedCount: this.values.length,
                removed: [],
                removedCount: 0
            });
        }
        return registerListener(this, listener);
    };
    ObservableArrayAdministration.prototype.getArrayLength = function () {
        this.atom.reportObserved();
        return this.values.length;
    };
    ObservableArrayAdministration.prototype.setArrayLength = function (newLength) {
        if (typeof newLength !== "number" || newLength < 0)
            throw new Error("[mobx.array] Out of range: " + newLength);
        var currentLength = this.values.length;
        if (newLength === currentLength)
            return;
        else if (newLength > currentLength) {
            var newItems = new Array(newLength - currentLength);
            for (var i = 0; i < newLength - currentLength; i++)
                newItems[i] = undefined; // No Array.fill everywhere...
            this.spliceWithArray(currentLength, 0, newItems);
        }
        else
            this.spliceWithArray(newLength, currentLength - newLength);
    };
    ObservableArrayAdministration.prototype.updateArrayLength = function (oldLength, delta) {
        if (oldLength !== this.lastKnownLength)
            throw new Error("[mobx] Modification exception: the internal structure of an observable array was changed.");
        this.lastKnownLength += delta;
    };
    ObservableArrayAdministration.prototype.spliceWithArray = function (index, deleteCount, newItems) {
        var _this = this;
        checkIfStateModificationsAreAllowed(this.atom);
        var length = this.values.length;
        if (index === undefined)
            index = 0;
        else if (index > length)
            index = length;
        else if (index < 0)
            index = Math.max(0, length + index);
        if (arguments.length === 1)
            deleteCount = length - index;
        else if (deleteCount === undefined || deleteCount === null)
            deleteCount = 0;
        else
            deleteCount = Math.max(0, Math.min(deleteCount, length - index));
        if (newItems === undefined)
            newItems = EMPTY_ARRAY;
        if (hasInterceptors(this)) {
            var change = interceptChange(this, {
                object: this.proxy,
                type: "splice",
                index: index,
                removedCount: deleteCount,
                added: newItems
            });
            if (!change)
                return EMPTY_ARRAY;
            deleteCount = change.removedCount;
            newItems = change.added;
        }
        newItems = newItems.length === 0 ? newItems : newItems.map(function (v) { return _this.enhancer(v, undefined); });
        if (false) { var lengthDelta; }
        var res = this.spliceItemsIntoValues(index, deleteCount, newItems);
        if (deleteCount !== 0 || newItems.length !== 0)
            this.notifyArraySplice(index, newItems, res);
        return this.dehanceValues(res);
    };
    ObservableArrayAdministration.prototype.spliceItemsIntoValues = function (index, deleteCount, newItems) {
        var _a;
        if (newItems.length < MAX_SPLICE_SIZE) {
            return (_a = this.values).splice.apply(_a, __spread([index, deleteCount], newItems));
        }
        else {
            var res = this.values.slice(index, index + deleteCount);
            this.values = this.values
                .slice(0, index)
                .concat(newItems, this.values.slice(index + deleteCount));
            return res;
        }
    };
    ObservableArrayAdministration.prototype.notifyArrayChildUpdate = function (index, newValue, oldValue) {
        var notifySpy = !this.owned && isSpyEnabled();
        var notify = hasListeners(this);
        var change = notify || notifySpy
            ? {
                object: this.proxy,
                type: "update",
                index: index,
                newValue: newValue,
                oldValue: oldValue
            }
            : null;
        // The reason why this is on right hand side here (and not above), is this way the uglifier will drop it, but it won't
        // cause any runtime overhead in development mode without NODE_ENV set, unless spying is enabled
        if (notifySpy && "production" !== "production")
            spyReportStart(__assign(__assign({}, change), { name: this.atom.name }));
        this.atom.reportChanged();
        if (notify)
            notifyListeners(this, change);
        if (notifySpy && "production" !== "production")
            spyReportEnd();
    };
    ObservableArrayAdministration.prototype.notifyArraySplice = function (index, added, removed) {
        var notifySpy = !this.owned && isSpyEnabled();
        var notify = hasListeners(this);
        var change = notify || notifySpy
            ? {
                object: this.proxy,
                type: "splice",
                index: index,
                removed: removed,
                added: added,
                removedCount: removed.length,
                addedCount: added.length
            }
            : null;
        if (notifySpy && "production" !== "production")
            spyReportStart(__assign(__assign({}, change), { name: this.atom.name }));
        this.atom.reportChanged();
        // conform: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/observe
        if (notify)
            notifyListeners(this, change);
        if (notifySpy && "production" !== "production")
            spyReportEnd();
    };
    return ObservableArrayAdministration;
}());
var arrayExtensions = {
    intercept: function (handler) {
        return this[$mobx].intercept(handler);
    },
    observe: function (listener, fireImmediately) {
        if (fireImmediately === void 0) { fireImmediately = false; }
        var adm = this[$mobx];
        return adm.observe(listener, fireImmediately);
    },
    clear: function () {
        return this.splice(0);
    },
    replace: function (newItems) {
        var adm = this[$mobx];
        return adm.spliceWithArray(0, adm.values.length, newItems);
    },
    /**
     * Converts this array back to a (shallow) javascript structure.
     * For a deep clone use mobx.toJS
     */
    toJS: function () {
        return this.slice();
    },
    toJSON: function () {
        // Used by JSON.stringify
        return this.toJS();
    },
    /*
     * functions that do alter the internal structure of the array, (based on lib.es6.d.ts)
     * since these functions alter the inner structure of the array, the have side effects.
     * Because the have side effects, they should not be used in computed function,
     * and for that reason the do not call dependencyState.notifyObserved
     */
    splice: function (index, deleteCount) {
        var newItems = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            newItems[_i - 2] = arguments[_i];
        }
        var adm = this[$mobx];
        switch (arguments.length) {
            case 0:
                return [];
            case 1:
                return adm.spliceWithArray(index);
            case 2:
                return adm.spliceWithArray(index, deleteCount);
        }
        return adm.spliceWithArray(index, deleteCount, newItems);
    },
    spliceWithArray: function (index, deleteCount, newItems) {
        var adm = this[$mobx];
        return adm.spliceWithArray(index, deleteCount, newItems);
    },
    push: function () {
        var items = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            items[_i] = arguments[_i];
        }
        var adm = this[$mobx];
        adm.spliceWithArray(adm.values.length, 0, items);
        return adm.values.length;
    },
    pop: function () {
        return this.splice(Math.max(this[$mobx].values.length - 1, 0), 1)[0];
    },
    shift: function () {
        return this.splice(0, 1)[0];
    },
    unshift: function () {
        var items = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            items[_i] = arguments[_i];
        }
        var adm = this[$mobx];
        adm.spliceWithArray(0, 0, items);
        return adm.values.length;
    },
    reverse: function () {
        // reverse by default mutates in place before returning the result
        // which makes it both a 'derivation' and a 'mutation'.
        // so we deviate from the default and just make it an dervitation
        if (false) {}
        var clone = this.slice();
        return clone.reverse.apply(clone, arguments);
    },
    sort: function (compareFn) {
        // sort by default mutates in place before returning the result
        // which goes against all good practices. Let's not change the array in place!
        if (false) {}
        var clone = this.slice();
        return clone.sort.apply(clone, arguments);
    },
    remove: function (value) {
        var adm = this[$mobx];
        var idx = adm.dehanceValues(adm.values).indexOf(value);
        if (idx > -1) {
            this.splice(idx, 1);
            return true;
        }
        return false;
    },
    get: function (index) {
        var adm = this[$mobx];
        if (adm) {
            if (index < adm.values.length) {
                adm.atom.reportObserved();
                return adm.dehanceValue(adm.values[index]);
            }
            console.warn("[mobx.array] Attempt to read an array index (" + index + ") that is out of bounds (" + adm.values.length + "). Please check length first. Out of bound indices will not be tracked by MobX");
        }
        return undefined;
    },
    set: function (index, newValue) {
        var adm = this[$mobx];
        var values = adm.values;
        if (index < values.length) {
            // update at index in range
            checkIfStateModificationsAreAllowed(adm.atom);
            var oldValue = values[index];
            if (hasInterceptors(adm)) {
                var change = interceptChange(adm, {
                    type: "update",
                    object: adm.proxy,
                    index: index,
                    newValue: newValue
                });
                if (!change)
                    return;
                newValue = change.newValue;
            }
            newValue = adm.enhancer(newValue, oldValue);
            var changed = newValue !== oldValue;
            if (changed) {
                values[index] = newValue;
                adm.notifyArrayChildUpdate(index, newValue, oldValue);
            }
        }
        else if (index === values.length) {
            // add a new item
            adm.spliceWithArray(index, 0, [newValue]);
        }
        else {
            // out of bounds
            throw new Error("[mobx.array] Index out of bounds, " + index + " is larger than " + values.length);
        }
    }
};
[
    "concat",
    "every",
    "filter",
    "forEach",
    "indexOf",
    "join",
    "lastIndexOf",
    "map",
    "reduce",
    "reduceRight",
    "slice",
    "some",
    "toString",
    "toLocaleString"
].forEach(function (funcName) {
    arrayExtensions[funcName] = function () {
        var adm = this[$mobx];
        adm.atom.reportObserved();
        var res = adm.dehanceValues(adm.values);
        return res[funcName].apply(res, arguments);
    };
});
var isObservableArrayAdministration = createInstanceofPredicate("ObservableArrayAdministration", ObservableArrayAdministration);
function isObservableArray(thing) {
    return isObject(thing) && isObservableArrayAdministration(thing[$mobx]);
}

var _a;
var ObservableMapMarker = {};
// just extend Map? See also https://gist.github.com/nestharus/13b4d74f2ef4a2f4357dbd3fc23c1e54
// But: https://github.com/mobxjs/mobx/issues/1556
var ObservableMap = /** @class */ (function () {
    function ObservableMap(initialData, enhancer, name) {
        if (enhancer === void 0) { enhancer = deepEnhancer; }
        if (name === void 0) { name = "ObservableMap@" + getNextId(); }
        this.enhancer = enhancer;
        this.name = name;
        this[_a] = ObservableMapMarker;
        this._keysAtom = createAtom(this.name + ".keys()");
        this[Symbol.toStringTag] = "Map";
        if (typeof Map !== "function") {
            throw new Error("mobx.map requires Map polyfill for the current browser. Check babel-polyfill or core-js/es6/map.js");
        }
        this._data = new Map();
        this._hasMap = new Map();
        this.merge(initialData);
    }
    ObservableMap.prototype._has = function (key) {
        return this._data.has(key);
    };
    ObservableMap.prototype.has = function (key) {
        var _this = this;
        if (!globalState.trackingDerivation)
            return this._has(key);
        var entry = this._hasMap.get(key);
        if (!entry) {
            // todo: replace with atom (breaking change)
            var newEntry = (entry = new ObservableValue(this._has(key), referenceEnhancer, this.name + "." + stringifyKey(key) + "?", false));
            this._hasMap.set(key, newEntry);
            onBecomeUnobserved(newEntry, function () { return _this._hasMap.delete(key); });
        }
        return entry.get();
    };
    ObservableMap.prototype.set = function (key, value) {
        var hasKey = this._has(key);
        if (hasInterceptors(this)) {
            var change = interceptChange(this, {
                type: hasKey ? "update" : "add",
                object: this,
                newValue: value,
                name: key
            });
            if (!change)
                return this;
            value = change.newValue;
        }
        if (hasKey) {
            this._updateValue(key, value);
        }
        else {
            this._addValue(key, value);
        }
        return this;
    };
    ObservableMap.prototype.delete = function (key) {
        var _this = this;
        if (hasInterceptors(this)) {
            var change = interceptChange(this, {
                type: "delete",
                object: this,
                name: key
            });
            if (!change)
                return false;
        }
        if (this._has(key)) {
            var notifySpy = isSpyEnabled();
            var notify = hasListeners(this);
            var change = notify || notifySpy
                ? {
                    type: "delete",
                    object: this,
                    oldValue: this._data.get(key).value,
                    name: key
                }
                : null;
            if (notifySpy && "production" !== "production")
                spyReportStart(__assign(__assign({}, change), { name: this.name, key: key }));
            transaction(function () {
                _this._keysAtom.reportChanged();
                _this._updateHasMapEntry(key, false);
                var observable = _this._data.get(key);
                observable.setNewValue(undefined);
                _this._data.delete(key);
            });
            if (notify)
                notifyListeners(this, change);
            if (notifySpy && "production" !== "production")
                spyReportEnd();
            return true;
        }
        return false;
    };
    ObservableMap.prototype._updateHasMapEntry = function (key, value) {
        var entry = this._hasMap.get(key);
        if (entry) {
            entry.setNewValue(value);
        }
    };
    ObservableMap.prototype._updateValue = function (key, newValue) {
        var observable = this._data.get(key);
        newValue = observable.prepareNewValue(newValue);
        if (newValue !== globalState.UNCHANGED) {
            var notifySpy = isSpyEnabled();
            var notify = hasListeners(this);
            var change = notify || notifySpy
                ? {
                    type: "update",
                    object: this,
                    oldValue: observable.value,
                    name: key,
                    newValue: newValue
                }
                : null;
            if (notifySpy && "production" !== "production")
                spyReportStart(__assign(__assign({}, change), { name: this.name, key: key }));
            observable.setNewValue(newValue);
            if (notify)
                notifyListeners(this, change);
            if (notifySpy && "production" !== "production")
                spyReportEnd();
        }
    };
    ObservableMap.prototype._addValue = function (key, newValue) {
        var _this = this;
        checkIfStateModificationsAreAllowed(this._keysAtom);
        transaction(function () {
            var observable = new ObservableValue(newValue, _this.enhancer, _this.name + "." + stringifyKey(key), false);
            _this._data.set(key, observable);
            newValue = observable.value; // value might have been changed
            _this._updateHasMapEntry(key, true);
            _this._keysAtom.reportChanged();
        });
        var notifySpy = isSpyEnabled();
        var notify = hasListeners(this);
        var change = notify || notifySpy
            ? {
                type: "add",
                object: this,
                name: key,
                newValue: newValue
            }
            : null;
        if (notifySpy && "production" !== "production")
            spyReportStart(__assign(__assign({}, change), { name: this.name, key: key }));
        if (notify)
            notifyListeners(this, change);
        if (notifySpy && "production" !== "production")
            spyReportEnd();
    };
    ObservableMap.prototype.get = function (key) {
        if (this.has(key))
            return this.dehanceValue(this._data.get(key).get());
        return this.dehanceValue(undefined);
    };
    ObservableMap.prototype.dehanceValue = function (value) {
        if (this.dehancer !== undefined) {
            return this.dehancer(value);
        }
        return value;
    };
    ObservableMap.prototype.keys = function () {
        this._keysAtom.reportObserved();
        return this._data.keys();
    };
    ObservableMap.prototype.values = function () {
        var self = this;
        var nextIndex = 0;
        var keys = Array.from(this.keys());
        return makeIterable({
            next: function () {
                return nextIndex < keys.length
                    ? { value: self.get(keys[nextIndex++]), done: false }
                    : { done: true };
            }
        });
    };
    ObservableMap.prototype.entries = function () {
        var self = this;
        var nextIndex = 0;
        var keys = Array.from(this.keys());
        return makeIterable({
            next: function () {
                if (nextIndex < keys.length) {
                    var key = keys[nextIndex++];
                    return {
                        value: [key, self.get(key)],
                        done: false
                    };
                }
                return { done: true };
            }
        });
    };
    ObservableMap.prototype[(_a = $mobx, Symbol.iterator)] = function () {
        return this.entries();
    };
    ObservableMap.prototype.forEach = function (callback, thisArg) {
        var e_1, _b;
        try {
            for (var _c = __values(this), _d = _c.next(); !_d.done; _d = _c.next()) {
                var _e = __read(_d.value, 2), key = _e[0], value = _e[1];
                callback.call(thisArg, value, key, this);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    /** Merge another object into this object, returns this. */
    ObservableMap.prototype.merge = function (other) {
        var _this = this;
        if (isObservableMap(other)) {
            other = other.toJS();
        }
        transaction(function () {
            if (isPlainObject(other))
                getPlainObjectKeys(other).forEach(function (key) { return _this.set(key, other[key]); });
            else if (Array.isArray(other))
                other.forEach(function (_b) {
                    var _c = __read(_b, 2), key = _c[0], value = _c[1];
                    return _this.set(key, value);
                });
            else if (isES6Map(other)) {
                if (other.constructor !== Map)
                    fail("Cannot initialize from classes that inherit from Map: " + other.constructor.name); // prettier-ignore
                other.forEach(function (value, key) { return _this.set(key, value); });
            }
            else if (other !== null && other !== undefined)
                fail("Cannot initialize map from " + other);
        });
        return this;
    };
    ObservableMap.prototype.clear = function () {
        var _this = this;
        transaction(function () {
            untracked(function () {
                var e_2, _b;
                try {
                    for (var _c = __values(_this.keys()), _d = _c.next(); !_d.done; _d = _c.next()) {
                        var key = _d.value;
                        _this.delete(key);
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
            });
        });
    };
    ObservableMap.prototype.replace = function (values) {
        var _this = this;
        transaction(function () {
            // grab all the keys that are present in the new map but not present in the current map
            // and delete them from the map, then merge the new map
            // this will cause reactions only on changed values
            var newKeys = getMapLikeKeys(values);
            var oldKeys = Array.from(_this.keys());
            var missingKeys = oldKeys.filter(function (k) { return newKeys.indexOf(k) === -1; });
            missingKeys.forEach(function (k) { return _this.delete(k); });
            _this.merge(values);
        });
        return this;
    };
    Object.defineProperty(ObservableMap.prototype, "size", {
        get: function () {
            this._keysAtom.reportObserved();
            return this._data.size;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Returns a plain object that represents this map.
     * Note that all the keys being stringified.
     * If there are duplicating keys after converting them to strings, behaviour is undetermined.
     */
    ObservableMap.prototype.toPOJO = function () {
        var e_3, _b;
        var res = {};
        try {
            for (var _c = __values(this), _d = _c.next(); !_d.done; _d = _c.next()) {
                var _e = __read(_d.value, 2), key = _e[0], value = _e[1];
                // We lie about symbol key types due to https://github.com/Microsoft/TypeScript/issues/1863
                res[typeof key === "symbol" ? key : stringifyKey(key)] = value;
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
            }
            finally { if (e_3) throw e_3.error; }
        }
        return res;
    };
    /**
     * Returns a shallow non observable object clone of this map.
     * Note that the values migth still be observable. For a deep clone use mobx.toJS.
     */
    ObservableMap.prototype.toJS = function () {
        return new Map(this);
    };
    ObservableMap.prototype.toJSON = function () {
        // Used by JSON.stringify
        return this.toPOJO();
    };
    ObservableMap.prototype.toString = function () {
        var _this = this;
        return (this.name +
            "[{ " +
            Array.from(this.keys())
                .map(function (key) { return stringifyKey(key) + ": " + ("" + _this.get(key)); })
                .join(", ") +
            " }]");
    };
    /**
     * Observes this object. Triggers for the events 'add', 'update' and 'delete'.
     * See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/observe
     * for callback details
     */
    ObservableMap.prototype.observe = function (listener, fireImmediately) {
         false &&
            false;
        return registerListener(this, listener);
    };
    ObservableMap.prototype.intercept = function (handler) {
        return registerInterceptor(this, handler);
    };
    return ObservableMap;
}());
/* 'var' fixes small-build issue */
var isObservableMap = createInstanceofPredicate("ObservableMap", ObservableMap);

var _a$1;
var ObservableSetMarker = {};
var ObservableSet = /** @class */ (function () {
    function ObservableSet(initialData, enhancer, name) {
        if (enhancer === void 0) { enhancer = deepEnhancer; }
        if (name === void 0) { name = "ObservableSet@" + getNextId(); }
        this.name = name;
        this[_a$1] = ObservableSetMarker;
        this._data = new Set();
        this._atom = createAtom(this.name);
        this[Symbol.toStringTag] = "Set";
        if (typeof Set !== "function") {
            throw new Error("mobx.set requires Set polyfill for the current browser. Check babel-polyfill or core-js/es6/set.js");
        }
        this.enhancer = function (newV, oldV) { return enhancer(newV, oldV, name); };
        if (initialData) {
            this.replace(initialData);
        }
    }
    ObservableSet.prototype.dehanceValue = function (value) {
        if (this.dehancer !== undefined) {
            return this.dehancer(value);
        }
        return value;
    };
    ObservableSet.prototype.clear = function () {
        var _this = this;
        transaction(function () {
            untracked(function () {
                var e_1, _b;
                try {
                    for (var _c = __values(_this._data.values()), _d = _c.next(); !_d.done; _d = _c.next()) {
                        var value = _d.value;
                        _this.delete(value);
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            });
        });
    };
    ObservableSet.prototype.forEach = function (callbackFn, thisArg) {
        var e_2, _b;
        try {
            for (var _c = __values(this), _d = _c.next(); !_d.done; _d = _c.next()) {
                var value = _d.value;
                callbackFn.call(thisArg, value, value, this);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
            }
            finally { if (e_2) throw e_2.error; }
        }
    };
    Object.defineProperty(ObservableSet.prototype, "size", {
        get: function () {
            this._atom.reportObserved();
            return this._data.size;
        },
        enumerable: true,
        configurable: true
    });
    ObservableSet.prototype.add = function (value) {
        var _this = this;
        checkIfStateModificationsAreAllowed(this._atom);
        if (hasInterceptors(this)) {
            var change = interceptChange(this, {
                type: "add",
                object: this,
                newValue: value
            });
            if (!change)
                return this;
            // TODO: ideally, value = change.value would be done here, so that values can be
            // changed by interceptor. Same applies for other Set and Map api's.
        }
        if (!this.has(value)) {
            transaction(function () {
                _this._data.add(_this.enhancer(value, undefined));
                _this._atom.reportChanged();
            });
            var notifySpy = isSpyEnabled();
            var notify = hasListeners(this);
            var change = notify || notifySpy
                ? {
                    type: "add",
                    object: this,
                    newValue: value
                }
                : null;
            if (notifySpy && "production" !== "production")
                spyReportStart(change);
            if (notify)
                notifyListeners(this, change);
            if (notifySpy && "production" !== "production")
                spyReportEnd();
        }
        return this;
    };
    ObservableSet.prototype.delete = function (value) {
        var _this = this;
        if (hasInterceptors(this)) {
            var change = interceptChange(this, {
                type: "delete",
                object: this,
                oldValue: value
            });
            if (!change)
                return false;
        }
        if (this.has(value)) {
            var notifySpy = isSpyEnabled();
            var notify = hasListeners(this);
            var change = notify || notifySpy
                ? {
                    type: "delete",
                    object: this,
                    oldValue: value
                }
                : null;
            if (notifySpy && "production" !== "production")
                spyReportStart(__assign(__assign({}, change), { name: this.name }));
            transaction(function () {
                _this._atom.reportChanged();
                _this._data.delete(value);
            });
            if (notify)
                notifyListeners(this, change);
            if (notifySpy && "production" !== "production")
                spyReportEnd();
            return true;
        }
        return false;
    };
    ObservableSet.prototype.has = function (value) {
        this._atom.reportObserved();
        return this._data.has(this.dehanceValue(value));
    };
    ObservableSet.prototype.entries = function () {
        var nextIndex = 0;
        var keys = Array.from(this.keys());
        var values = Array.from(this.values());
        return makeIterable({
            next: function () {
                var index = nextIndex;
                nextIndex += 1;
                return index < values.length
                    ? { value: [keys[index], values[index]], done: false }
                    : { done: true };
            }
        });
    };
    ObservableSet.prototype.keys = function () {
        return this.values();
    };
    ObservableSet.prototype.values = function () {
        this._atom.reportObserved();
        var self = this;
        var nextIndex = 0;
        var observableValues = Array.from(this._data.values());
        return makeIterable({
            next: function () {
                return nextIndex < observableValues.length
                    ? { value: self.dehanceValue(observableValues[nextIndex++]), done: false }
                    : { done: true };
            }
        });
    };
    ObservableSet.prototype.replace = function (other) {
        var _this = this;
        if (isObservableSet(other)) {
            other = other.toJS();
        }
        transaction(function () {
            if (Array.isArray(other)) {
                _this.clear();
                other.forEach(function (value) { return _this.add(value); });
            }
            else if (isES6Set(other)) {
                _this.clear();
                other.forEach(function (value) { return _this.add(value); });
            }
            else if (other !== null && other !== undefined) {
                fail("Cannot initialize set from " + other);
            }
        });
        return this;
    };
    ObservableSet.prototype.observe = function (listener, fireImmediately) {
        // TODO 'fireImmediately' can be true?
         false &&
            false;
        return registerListener(this, listener);
    };
    ObservableSet.prototype.intercept = function (handler) {
        return registerInterceptor(this, handler);
    };
    ObservableSet.prototype.toJS = function () {
        return new Set(this);
    };
    ObservableSet.prototype.toString = function () {
        return this.name + "[ " + Array.from(this).join(", ") + " ]";
    };
    ObservableSet.prototype[(_a$1 = $mobx, Symbol.iterator)] = function () {
        return this.values();
    };
    return ObservableSet;
}());
var isObservableSet = createInstanceofPredicate("ObservableSet", ObservableSet);

var ObservableObjectAdministration = /** @class */ (function () {
    function ObservableObjectAdministration(target, values, name, defaultEnhancer) {
        if (values === void 0) { values = new Map(); }
        this.target = target;
        this.values = values;
        this.name = name;
        this.defaultEnhancer = defaultEnhancer;
        this.keysAtom = new Atom(name + ".keys");
    }
    ObservableObjectAdministration.prototype.read = function (key) {
        return this.values.get(key).get();
    };
    ObservableObjectAdministration.prototype.write = function (key, newValue) {
        var instance = this.target;
        var observable = this.values.get(key);
        if (observable instanceof ComputedValue) {
            observable.set(newValue);
            return;
        }
        // intercept
        if (hasInterceptors(this)) {
            var change = interceptChange(this, {
                type: "update",
                object: this.proxy || instance,
                name: key,
                newValue: newValue
            });
            if (!change)
                return;
            newValue = change.newValue;
        }
        newValue = observable.prepareNewValue(newValue);
        // notify spy & observers
        if (newValue !== globalState.UNCHANGED) {
            var notify = hasListeners(this);
            var notifySpy = isSpyEnabled();
            var change = notify || notifySpy
                ? {
                    type: "update",
                    object: this.proxy || instance,
                    oldValue: observable.value,
                    name: key,
                    newValue: newValue
                }
                : null;
            if (notifySpy && "production" !== "production")
                spyReportStart(__assign(__assign({}, change), { name: this.name, key: key }));
            observable.setNewValue(newValue);
            if (notify)
                notifyListeners(this, change);
            if (notifySpy && "production" !== "production")
                spyReportEnd();
        }
    };
    ObservableObjectAdministration.prototype.has = function (key) {
        var map = this.pendingKeys || (this.pendingKeys = new Map());
        var entry = map.get(key);
        if (entry)
            return entry.get();
        else {
            var exists = !!this.values.get(key);
            // Possible optimization: Don't have a separate map for non existing keys,
            // but store them in the values map instead, using a special symbol to denote "not existing"
            entry = new ObservableValue(exists, referenceEnhancer, this.name + "." + stringifyKey(key) + "?", false);
            map.set(key, entry);
            return entry.get(); // read to subscribe
        }
    };
    ObservableObjectAdministration.prototype.addObservableProp = function (propName, newValue, enhancer) {
        if (enhancer === void 0) { enhancer = this.defaultEnhancer; }
        var target = this.target;
        assertPropertyConfigurable(target, propName);
        if (hasInterceptors(this)) {
            var change = interceptChange(this, {
                object: this.proxy || target,
                name: propName,
                type: "add",
                newValue: newValue
            });
            if (!change)
                return;
            newValue = change.newValue;
        }
        var observable = new ObservableValue(newValue, enhancer, this.name + "." + stringifyKey(propName), false);
        this.values.set(propName, observable);
        newValue = observable.value; // observableValue might have changed it
        Object.defineProperty(target, propName, generateObservablePropConfig(propName));
        this.notifyPropertyAddition(propName, newValue);
    };
    ObservableObjectAdministration.prototype.addComputedProp = function (propertyOwner, // where is the property declared?
    propName, options) {
        var target = this.target;
        options.name = options.name || this.name + "." + stringifyKey(propName);
        this.values.set(propName, new ComputedValue(options));
        if (propertyOwner === target || isPropertyConfigurable(propertyOwner, propName))
            Object.defineProperty(propertyOwner, propName, generateComputedPropConfig(propName));
    };
    ObservableObjectAdministration.prototype.remove = function (key) {
        if (!this.values.has(key))
            return;
        var target = this.target;
        if (hasInterceptors(this)) {
            var change = interceptChange(this, {
                object: this.proxy || target,
                name: key,
                type: "remove"
            });
            if (!change)
                return;
        }
        try {
            startBatch();
            var notify = hasListeners(this);
            var notifySpy = isSpyEnabled();
            var oldObservable = this.values.get(key);
            var oldValue = oldObservable && oldObservable.get();
            oldObservable && oldObservable.set(undefined);
            // notify key and keyset listeners
            this.keysAtom.reportChanged();
            this.values.delete(key);
            if (this.pendingKeys) {
                var entry = this.pendingKeys.get(key);
                if (entry)
                    entry.set(false);
            }
            // delete the prop
            delete this.target[key];
            var change = notify || notifySpy
                ? {
                    type: "remove",
                    object: this.proxy || target,
                    oldValue: oldValue,
                    name: key
                }
                : null;
            if (notifySpy && "production" !== "production")
                spyReportStart(__assign(__assign({}, change), { name: this.name, key: key }));
            if (notify)
                notifyListeners(this, change);
            if (notifySpy && "production" !== "production")
                spyReportEnd();
        }
        finally {
            endBatch();
        }
    };
    ObservableObjectAdministration.prototype.illegalAccess = function (owner, propName) {
        /**
         * This happens if a property is accessed through the prototype chain, but the property was
         * declared directly as own property on the prototype.
         *
         * E.g.:
         * class A {
         * }
         * extendObservable(A.prototype, { x: 1 })
         *
         * classB extens A {
         * }
         * console.log(new B().x)
         *
         * It is unclear whether the property should be considered 'static' or inherited.
         * Either use `console.log(A.x)`
         * or: decorate(A, { x: observable })
         *
         * When using decorate, the property will always be redeclared as own property on the actual instance
         */
        console.warn("Property '" + propName + "' of '" + owner + "' was accessed through the prototype chain. Use 'decorate' instead to declare the prop or access it statically through it's owner");
    };
    /**
     * Observes this object. Triggers for the events 'add', 'update' and 'delete'.
     * See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/observe
     * for callback details
     */
    ObservableObjectAdministration.prototype.observe = function (callback, fireImmediately) {
         false &&
            false;
        return registerListener(this, callback);
    };
    ObservableObjectAdministration.prototype.intercept = function (handler) {
        return registerInterceptor(this, handler);
    };
    ObservableObjectAdministration.prototype.notifyPropertyAddition = function (key, newValue) {
        var notify = hasListeners(this);
        var notifySpy = isSpyEnabled();
        var change = notify || notifySpy
            ? {
                type: "add",
                object: this.proxy || this.target,
                name: key,
                newValue: newValue
            }
            : null;
        if (notifySpy && "production" !== "production")
            spyReportStart(__assign(__assign({}, change), { name: this.name, key: key }));
        if (notify)
            notifyListeners(this, change);
        if (notifySpy && "production" !== "production")
            spyReportEnd();
        if (this.pendingKeys) {
            var entry = this.pendingKeys.get(key);
            if (entry)
                entry.set(true);
        }
        this.keysAtom.reportChanged();
    };
    ObservableObjectAdministration.prototype.getKeys = function () {
        var e_1, _a;
        this.keysAtom.reportObserved();
        // return Reflect.ownKeys(this.values) as any
        var res = [];
        try {
            for (var _b = __values(this.values), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = __read(_c.value, 2), key = _d[0], value = _d[1];
                if (value instanceof ObservableValue)
                    res.push(key);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return res;
    };
    return ObservableObjectAdministration;
}());
function asObservableObject(target, name, defaultEnhancer) {
    if (name === void 0) { name = ""; }
    if (defaultEnhancer === void 0) { defaultEnhancer = deepEnhancer; }
    if (Object.prototype.hasOwnProperty.call(target, $mobx))
        return target[$mobx];
     false &&
        false;
    if (!isPlainObject(target))
        name = (target.constructor.name || "ObservableObject") + "@" + getNextId();
    if (!name)
        name = "ObservableObject@" + getNextId();
    var adm = new ObservableObjectAdministration(target, new Map(), stringifyKey(name), defaultEnhancer);
    addHiddenProp(target, $mobx, adm);
    return adm;
}
var observablePropertyConfigs = Object.create(null);
var computedPropertyConfigs = Object.create(null);
function generateObservablePropConfig(propName) {
    return (observablePropertyConfigs[propName] ||
        (observablePropertyConfigs[propName] = {
            configurable: true,
            enumerable: true,
            get: function () {
                return this[$mobx].read(propName);
            },
            set: function (v) {
                this[$mobx].write(propName, v);
            }
        }));
}
function getAdministrationForComputedPropOwner(owner) {
    var adm = owner[$mobx];
    if (!adm) {
        // because computed props are declared on proty,
        // the current instance might not have been initialized yet
        initializeInstance(owner);
        return owner[$mobx];
    }
    return adm;
}
function generateComputedPropConfig(propName) {
    return (computedPropertyConfigs[propName] ||
        (computedPropertyConfigs[propName] = {
            configurable: globalState.computedConfigurable,
            enumerable: false,
            get: function () {
                return getAdministrationForComputedPropOwner(this).read(propName);
            },
            set: function (v) {
                getAdministrationForComputedPropOwner(this).write(propName, v);
            }
        }));
}
var isObservableObjectAdministration = createInstanceofPredicate("ObservableObjectAdministration", ObservableObjectAdministration);
function isObservableObject(thing) {
    if (isObject(thing)) {
        // Initializers run lazily when transpiling to babel, so make sure they are run...
        initializeInstance(thing);
        return isObservableObjectAdministration(thing[$mobx]);
    }
    return false;
}

function getAtom(thing, property) {
    if (typeof thing === "object" && thing !== null) {
        if (isObservableArray(thing)) {
            if (property !== undefined)
                fail( false &&
                    false);
            return thing[$mobx].atom;
        }
        if (isObservableSet(thing)) {
            return thing[$mobx];
        }
        if (isObservableMap(thing)) {
            var anyThing = thing;
            if (property === undefined)
                return anyThing._keysAtom;
            var observable = anyThing._data.get(property) || anyThing._hasMap.get(property);
            if (!observable)
                fail( false &&
                    false);
            return observable;
        }
        // Initializers run lazily when transpiling to babel, so make sure they are run...
        initializeInstance(thing);
        if (property && !thing[$mobx])
            thing[property]; // See #1072
        if (isObservableObject(thing)) {
            if (!property)
                return fail( false && false);
            var observable = thing[$mobx].values.get(property);
            if (!observable)
                fail( false &&
                    false);
            return observable;
        }
        if (isAtom(thing) || isComputedValue(thing) || isReaction(thing)) {
            return thing;
        }
    }
    else if (typeof thing === "function") {
        if (isReaction(thing[$mobx])) {
            // disposer function
            return thing[$mobx];
        }
    }
    return fail( false && false);
}
function getAdministration(thing, property) {
    if (!thing)
        fail("Expecting some object");
    if (property !== undefined)
        return getAdministration(getAtom(thing, property));
    if (isAtom(thing) || isComputedValue(thing) || isReaction(thing))
        return thing;
    if (isObservableMap(thing) || isObservableSet(thing))
        return thing;
    // Initializers run lazily when transpiling to babel, so make sure they are run...
    initializeInstance(thing);
    if (thing[$mobx])
        return thing[$mobx];
    fail( false && false);
}
function getDebugName(thing, property) {
    var named;
    if (property !== undefined)
        named = getAtom(thing, property);
    else if (isObservableObject(thing) || isObservableMap(thing) || isObservableSet(thing))
        named = getAdministration(thing);
    else
        named = getAtom(thing); // valid for arrays as well
    return named.name;
}

var toString = Object.prototype.toString;
function deepEqual(a, b, depth) {
    if (depth === void 0) { depth = -1; }
    return eq(a, b, depth);
}
// Copied from https://github.com/jashkenas/underscore/blob/5c237a7c682fb68fd5378203f0bf22dce1624854/underscore.js#L1186-L1289
// Internal recursive comparison function for `isEqual`.
function eq(a, b, depth, aStack, bStack) {
    // Identical objects are equal. `0 === -0`, but they aren't identical.
    // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
    if (a === b)
        return a !== 0 || 1 / a === 1 / b;
    // `null` or `undefined` only equal to itself (strict comparison).
    if (a == null || b == null)
        return false;
    // `NaN`s are equivalent, but non-reflexive.
    if (a !== a)
        return b !== b;
    // Exhaust primitive checks
    var type = typeof a;
    if (type !== "function" && type !== "object" && typeof b != "object")
        return false;
    // Compare `[[Class]]` names.
    var className = toString.call(a);
    if (className !== toString.call(b))
        return false;
    switch (className) {
        // Strings, numbers, regular expressions, dates, and booleans are compared by value.
        case "[object RegExp]":
        // RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')
        case "[object String]":
            // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
            // equivalent to `new String("5")`.
            return "" + a === "" + b;
        case "[object Number]":
            // `NaN`s are equivalent, but non-reflexive.
            // Object(NaN) is equivalent to NaN.
            if (+a !== +a)
                return +b !== +b;
            // An `egal` comparison is performed for other numeric values.
            return +a === 0 ? 1 / +a === 1 / b : +a === +b;
        case "[object Date]":
        case "[object Boolean]":
            // Coerce dates and booleans to numeric primitive values. Dates are compared by their
            // millisecond representations. Note that invalid dates with millisecond representations
            // of `NaN` are not equivalent.
            return +a === +b;
        case "[object Symbol]":
            return (typeof Symbol !== "undefined" && Symbol.valueOf.call(a) === Symbol.valueOf.call(b));
        case "[object Map]":
        case "[object Set]":
            // Maps and Sets are unwrapped to arrays of entry-pairs, adding an incidental level.
            // Hide this extra level by increasing the depth.
            if (depth >= 0) {
                depth++;
            }
            break;
    }
    // Unwrap any wrapped objects.
    a = unwrap(a);
    b = unwrap(b);
    var areArrays = className === "[object Array]";
    if (!areArrays) {
        if (typeof a != "object" || typeof b != "object")
            return false;
        // Objects with different constructors are not equivalent, but `Object`s or `Array`s
        // from different frames are.
        var aCtor = a.constructor, bCtor = b.constructor;
        if (aCtor !== bCtor &&
            !(typeof aCtor === "function" &&
                aCtor instanceof aCtor &&
                typeof bCtor === "function" &&
                bCtor instanceof bCtor) &&
            ("constructor" in a && "constructor" in b)) {
            return false;
        }
    }
    if (depth === 0) {
        return false;
    }
    else if (depth < 0) {
        depth = -1;
    }
    // Assume equality for cyclic structures. The algorithm for detecting cyclic
    // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.
    // Initializing stack of traversed objects.
    // It's done here since we only need them for objects and arrays comparison.
    aStack = aStack || [];
    bStack = bStack || [];
    var length = aStack.length;
    while (length--) {
        // Linear search. Performance is inversely proportional to the number of
        // unique nested structures.
        if (aStack[length] === a)
            return bStack[length] === b;
    }
    // Add the first object to the stack of traversed objects.
    aStack.push(a);
    bStack.push(b);
    // Recursively compare objects and arrays.
    if (areArrays) {
        // Compare array lengths to determine if a deep comparison is necessary.
        length = a.length;
        if (length !== b.length)
            return false;
        // Deep compare the contents, ignoring non-numeric properties.
        while (length--) {
            if (!eq(a[length], b[length], depth - 1, aStack, bStack))
                return false;
        }
    }
    else {
        // Deep compare objects.
        var keys = Object.keys(a);
        var key = void 0;
        length = keys.length;
        // Ensure that both objects contain the same number of properties before comparing deep equality.
        if (Object.keys(b).length !== length)
            return false;
        while (length--) {
            // Deep compare each member
            key = keys[length];
            if (!(has$1(b, key) && eq(a[key], b[key], depth - 1, aStack, bStack)))
                return false;
        }
    }
    // Remove the first object from the stack of traversed objects.
    aStack.pop();
    bStack.pop();
    return true;
}
function unwrap(a) {
    if (isObservableArray(a))
        return a.slice();
    if (isES6Map(a) || isObservableMap(a))
        return Array.from(a.entries());
    if (isES6Set(a) || isObservableSet(a))
        return Array.from(a.entries());
    return a;
}
function has$1(a, key) {
    return Object.prototype.hasOwnProperty.call(a, key);
}

function makeIterable(iterator) {
    iterator[Symbol.iterator] = getSelf;
    return iterator;
}
function getSelf() {
    return this;
}

/*
The only reason for this file to exist is pure horror:
Without it rollup can make the bundling fail at any point in time; when it rolls up the files in the wrong order
it will cause undefined errors (for example because super classes or local variables not being hoisted).
With this file that will still happen,
but at least in this file we can magically reorder the imports with trial and error until the build succeeds again.
*/

/**
 * (c) Michel Weststrate 2015 - 2018
 * MIT Licensed
 *
 * Welcome to the mobx sources! To get an global overview of how MobX internally works,
 * this is a good place to start:
 * https://medium.com/@mweststrate/becoming-fully-reactive-an-in-depth-explanation-of-mobservable-55995262a254#.xvbh6qd74
 *
 * Source folders:
 * ===============
 *
 * - api/     Most of the public static methods exposed by the module can be found here.
 * - core/    Implementation of the MobX algorithm; atoms, derivations, reactions, dependency trees, optimizations. Cool stuff can be found here.
 * - types/   All the magic that is need to have observable objects, arrays and values is in this folder. Including the modifiers like `asFlat`.
 * - utils/   Utility stuff.
 *
 */
if (typeof Proxy === "undefined" || typeof Symbol === "undefined") {
    throw new Error("[mobx] MobX 5+ requires Proxy and Symbol objects. If your environment doesn't support Symbol or Proxy objects, please downgrade to MobX 4. For React Native Android, consider upgrading JSCore.");
}
try {
    // define process.env if needed
    // if this is not a production build in the first place
    // (in which case the expression below would be substituted with 'production')
    "production";
}
catch (e) {
    var g = getGlobal();
    if (typeof process === "undefined")
        g.process = {};
    g.process.env = {};
}
(function () {
    function testCodeMinification() { }
    if (testCodeMinification.name !== "testCodeMinification" &&
        "production" !== "production" &&
        typeof process !== 'undefined' && process.env.IGNORE_MOBX_MINIFY_WARNING !== "true") {
        // trick so it doesn't get replaced
        var varName = ["process", "env", "NODE_ENV"].join(".");
        console.warn("[mobx] you are running a minified build, but '" + varName + "' was not set to 'production' in your bundler. This results in an unnecessarily large and slow bundle");
    }
})();
if (typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ === "object") {
    // See: https://github.com/andykog/mobx-devtools/
    __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({
        spy: spy,
        extras: {
            getDebugName: getDebugName
        },
        $mobx: $mobx
    });
}



/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(23), __webpack_require__(19)))

/***/ }),

/***/ 11:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Type; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CategorizeStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return splitOnce; });
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Type;
(function (Type) {
    Type[Type["Deleted"] = 0] = "Deleted";
    Type[Type["Normal"] = 1] = "Normal";
    Type[Type["Heading"] = 2] = "Heading";
})(Type || (Type = {}));
class CategorizeStore {
    constructor(data, changes = []) {
        this.executed = [];
        this.boxes = [];
        this.selectionStart = -1;
        this.selectionEnd = -1;
        this.lines = data.split("\n");
        this.lines.unshift(""); // pretend it's one indexed
        this.boxes = autoparseText(this.lines);
        this.executeAll(changes);
    }
    executeAll(changes) {
        for (const change of changes)
            this.execute(change);
    }
    execute(cmd) {
        console.log("run: ", ...cmd);
        this.executed.push(cmd);
        const [command, ...args] = cmd;
        this[command](...args);
    }
    markSelection(a, b, type) {
        const [startI, endI] = this.findBounds(this.boxes, a, b);
        for (let i = startI; i <= endI; i++)
            this.boxes[i].type = type;
    }
    unifySelection(a, b) {
        const [startI, endI] = this.findBounds(this.boxes, a, b);
        const type = this.boxes[startI].type;
        this.boxes.splice(startI, endI - startI + 1, {
            start: a,
            end: b,
            type,
        });
        this.selectionStart = -1;
        this.selectionEnd = -1;
    }
    splitSelection(a, b) {
        const [startI, endI] = this.findBounds(this.boxes, a, b);
        const newBs = [];
        const type = this.boxes[startI].type;
        for (let i = a; i <= b; i++) {
            newBs.push({ start: i, end: i, type });
        }
        this.boxes.splice(startI, endI - startI + 1, ...newBs);
        this.selectionStart = -1;
        this.selectionEnd = -1;
    }
    setHeadingDepth(a, b, headingLevel) {
        const [startI, endI] = this.findBounds(this.boxes, a, b);
        for (let i = startI; i <= endI; i++)
            if (this.boxes[i].type === Type.Heading)
                this.boxes[i].headingLevel = headingLevel;
    }
    findBounds(boxes, l, r) {
        return [
            binarySearchIndex(boxes, x => x.start, l),
            binarySearchIndex(boxes, x => x.end, r),
        ];
    }
    getTableOfContents() {
        const root = {
            name: "",
            path: [],
            children: [],
            catChildren: [],
        };
        const catTree = [{ str: "", num: 0 }];
        function addToRoot([first, ...rest], child, target) {
            if (typeof first !== "number") {
                target.children.push(child);
                return;
            }
            if (rest.length === 0) {
                if (child.type === "category") {
                    if (target.catChildren[first]) {
                        throw Error("already exists");
                    }
                    target.catChildren[first] = child.category;
                    target.children.push(child);
                }
                else {
                    if (!target.catChildren[first])
                        console.log("no place", target, first);
                    else
                        target.catChildren[first].children.push(child);
                }
            }
            else {
                addToRoot(rest, child, target.catChildren[first]);
                return;
            }
        }
        for (let i = 0; i < this.boxes.length; i++) {
            const box = this.boxes[i];
            const level = box.headingLevel || catTree.length - 1;
            if (box.type === Type.Heading && level <= catTree.length) {
                const [old = { str: "", num: -1 }] = catTree.splice(level);
                const heading = this.getUncommentedText(box);
                catTree.push({
                    num: old.num + 1,
                    str: heading,
                });
                const path = catTree.map(x => x.num).slice(1);
                addToRoot(path, {
                    type: "category",
                    category: {
                        name: heading,
                        path: path,
                        children: [],
                        catChildren: [],
                    },
                }, root);
            }
            else {
                const path = catTree.map(x => x.num).slice(1);
                addToRoot(path, { type: "box", box }, root);
            }
        }
        console.log(root);
        return root.children;
    }
    categoryTreeOf(line) {
        const boxI = Math.min(binarySearchIndex(this.boxes, x => x.start, line, false), binarySearchIndex(this.boxes, x => x.end, line, false));
        const catTree = [{ str: "", num: 0 }];
        for (let i = 0; i <= boxI; i++) {
            const box = this.boxes[i];
            const level = box.headingLevel || catTree.length - 1;
            if (box.type === Type.Heading && level <= catTree.length) {
                const [old = { str: "", num: 0 }] = catTree.splice(level);
                catTree.push({
                    num: old.num + 1,
                    str: this.getUncommentedText(box),
                });
            }
        }
        catTree.shift();
        const box = this.boxes[boxI];
        const comment = this.getRawLines(box)
            .map(line => (line.split("#")[1] || "").trim())
            .join("\n")
            .trim();
        return {
            headingsIndex: catTree.map(x => x.num),
            headingLevel: catTree.length,
            headings: catTree.map((x, i) => catTree
                .slice(0, i + 1)
                .reduce((cum, n) => `${cum}${n.num}.`, "") +
                " " +
                x.str),
            comment,
        };
    }
    getBoxContent(box) {
        if (box.type === Type.Heading)
            throw Error("is heading");
        const split = this.getRawLines(box).map(line => {
            const [content, comment] = splitOnce(/#/, line, true);
            return {
                content,
                comment: comment.substring(1).trim(),
            };
        });
        const comment = split
            .map(({ comment }) => comment)
            .join("\n")
            .trim();
        const content = split
            .map(({ content }) => content)
            .join("\n")
            .trim();
        return { content, comment };
    }
    getRawLines(box) {
        return this.lines.slice(box.start, box.end + 1);
    }
    getRawText(box) {
        return this.getRawLines(box).join("\n");
    }
    getUncommentedText(box) {
        return this.getRawLines(box)
            .map(line => line
            .replace(/\s+/g, " ")
            .replace(/#/g, "")
            .trim())
            .join("\n")
            .trim();
    }
}
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__["observable"]
], CategorizeStore.prototype, "executed", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__["observable"]
], CategorizeStore.prototype, "boxes", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__["observable"]
], CategorizeStore.prototype, "selectionStart", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__["observable"]
], CategorizeStore.prototype, "selectionEnd", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__["action"]
], CategorizeStore.prototype, "executeAll", null);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__["action"]
], CategorizeStore.prototype, "execute", null);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__["action"]
], CategorizeStore.prototype, "markSelection", null);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__["action"]
], CategorizeStore.prototype, "unifySelection", null);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__["action"]
], CategorizeStore.prototype, "splitSelection", null);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__["action"]
], CategorizeStore.prototype, "setHeadingDepth", null);
function autoparseText(lines) {
    const boxes = [];
    let boxStart = 0;
    let currentAliases = [];
    let lastHadBackslash = false;
    for (let i = 0; i < lines.length; i++) {
        let [line, comment] = splitOnce(/#/, lines[i], true);
        let [variable, value] = splitOnce(/\s/, line, true);
        if (lastHadBackslash) {
            lastHadBackslash = line.endsWith("\\");
            continue;
        }
        lastHadBackslash = line.endsWith("\\");
        if (line.length > 0) {
            if (!line.startsWith("!")) {
                //console.log(currentAliases, value);
                if (currentAliases.indexOf(value) >= 0) {
                    currentAliases.push(variable);
                    continue;
                }
            }
        }
        else if (comment.length > 0)
            continue;
        // end box
        if (i > 0)
            boxes.push({
                start: boxStart,
                end: i - 1,
                type: currentAliases.length > 0
                    ? Type.Normal
                    : i - 1 - boxStart == 0 ? Type.Deleted : Type.Heading,
            });
        boxStart = i;
        currentAliases = [variable, value].filter(x => x.length > 0);
    }
    if (boxStart < lines.length)
        boxes.push({
            start: boxStart,
            end: lines.length - 1,
            type: Type.Deleted,
        });
    return boxes;
}
function binarySearchIndex(array, accessor, search, exact = true, min = 0, max = array.length - 1) {
    if (min === max)
        if (exact && accessor(array[min]) !== search)
            throw Error("can't find element" + search);
        else
            return min;
    const mid = ((min + max) / 2) | 0;
    if (accessor(array[mid]) < search)
        return binarySearchIndex(array, accessor, search, exact, mid + 1, max);
    else
        return binarySearchIndex(array, accessor, search, exact, min, mid);
}
function splitOnce(x, str, trim = false) {
    const i = str.search(x);
    if (i < 0)
        return [str, ""];
    const [a, b] = [str.substr(0, i), str.substr(i)];
    if (trim)
        return [a.trim(), b.trim()];
    else
        return [a, b];
}


/***/ }),

/***/ 12:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "Observer", function() { return /* reexport */ ObserverComponent; });
__webpack_require__.d(__webpack_exports__, "isUsingStaticRendering", function() { return /* reexport */ isUsingStaticRendering; });
__webpack_require__.d(__webpack_exports__, "useAsObservableSource", function() { return /* reexport */ useAsObservableSource; });
__webpack_require__.d(__webpack_exports__, "useLocalStore", function() { return /* reexport */ useLocalStore; });
__webpack_require__.d(__webpack_exports__, "useObserver", function() { return /* reexport */ useObserver; });
__webpack_require__.d(__webpack_exports__, "useStaticRendering", function() { return /* reexport */ useStaticRendering; });
__webpack_require__.d(__webpack_exports__, "MobXProviderContext", function() { return /* binding */ MobXProviderContext; });
__webpack_require__.d(__webpack_exports__, "PropTypes", function() { return /* binding */ PropTypes; });
__webpack_require__.d(__webpack_exports__, "Provider", function() { return /* binding */ Provider; });
__webpack_require__.d(__webpack_exports__, "disposeOnUnmount", function() { return /* binding */ disposeOnUnmount; });
__webpack_require__.d(__webpack_exports__, "inject", function() { return /* binding */ inject; });
__webpack_require__.d(__webpack_exports__, "observer", function() { return /* binding */ mobxreact_esm_observer; });

// EXTERNAL MODULE: ./node_modules/mobx/lib/mobx.module.js
var mobx_module = __webpack_require__(1);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(6);

// CONCATENATED MODULE: ./node_modules/mobx-react-lite/dist/index.module.js



if (!react["useState"]) {
    throw new Error("mobx-react-lite requires React with Hooks support");
}
if (!mobx_module["spy"]) {
    throw new Error("mobx-react-lite requires mobx at least version 4 to be available");
}

function useObservable(initialValue) {
    var observableRef = Object(react["useRef"])(null);
    if (!observableRef.current) {
        observableRef.current = Object(mobx_module["observable"])(initialValue);
    }
    return observableRef.current;
}

function useComputed(func, inputs) {
    if (inputs === void 0) { inputs = []; }
    var computed$1 = Object(react["useMemo"])(function () { return Object(mobx_module["computed"])(func); }, inputs);
    return computed$1.get();
}

var doNothingDisposer = function () {
    // empty
};
/**
 * Adds an observable effect (reaction, autorun, or anything else that returns a disposer) that will be registered upon component creation and disposed upon unmounting.
 * Returns the generated disposer for early disposal.
 *
 * @export
 * @template D
 * @param {() => D} disposerGenerator A function that returns the disposer of the wanted effect.
 * @param {ReadonlyArray<any>} [inputs=[]] If you want the effect to be automatically re-created when some variable(s) are changed then pass them in this array.
 * @returns {D}
 */
function useDisposable(disposerGenerator, inputs) {
    if (inputs === void 0) { inputs = []; }
    var disposerRef = Object(react["useRef"])(null);
    var earlyDisposedRef = Object(react["useRef"])(false);
    Object(react["useEffect"])(function () {
        return lazyCreateDisposer(false);
    }, inputs);
    function lazyCreateDisposer(earlyDisposal) {
        // ensure that we won't create a new disposer if it was early disposed
        if (earlyDisposedRef.current) {
            return doNothingDisposer;
        }
        if (!disposerRef.current) {
            var newDisposer = disposerGenerator();
            if (typeof newDisposer !== "function") {
                var error = new Error("generated disposer must be a function");
                {
                    // tslint:disable-next-line:no-console
                    console.error(error);
                    return doNothingDisposer;
                }
            }
            disposerRef.current = newDisposer;
        }
        return function () {
            if (disposerRef.current) {
                disposerRef.current();
                disposerRef.current = null;
            }
            if (earlyDisposal) {
                earlyDisposedRef.current = true;
            }
        };
    }
    return lazyCreateDisposer(true);
}

var globalIsUsingStaticRendering = false;
function useStaticRendering(enable) {
    globalIsUsingStaticRendering = enable;
}
function isUsingStaticRendering() {
    return globalIsUsingStaticRendering;
}

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

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function printDebugValue(v) {
    if (!v.current) {
        return "<unknown>";
    }
    return Object(mobx_module["getDependencyTree"])(v.current);
}

var EMPTY_ARRAY = [];
function useUnmount(fn) {
    Object(react["useEffect"])(function () { return fn; }, EMPTY_ARRAY);
}
function useForceUpdate() {
    var _a = __read(Object(react["useState"])(0), 2), setTick = _a[1];
    var update = Object(react["useCallback"])(function () {
        setTick(function (tick) { return tick + 1; });
    }, []);
    return update;
}
function isPlainObject(value) {
    if (!value || typeof value !== "object") {
        return false;
    }
    var proto = Object.getPrototypeOf(value);
    return !proto || proto === Object.prototype;
}

var EMPTY_OBJECT = {};
function useObserver(fn, baseComponentName, options) {
    if (baseComponentName === void 0) { baseComponentName = "observed"; }
    if (options === void 0) { options = EMPTY_OBJECT; }
    if (isUsingStaticRendering()) {
        return fn();
    }
    var wantedForceUpdateHook = options.useForceUpdate || useForceUpdate;
    var forceUpdate = wantedForceUpdateHook();
    var reaction = Object(react["useRef"])(null);
    if (!reaction.current) {
        reaction.current = new mobx_module["Reaction"]("observer(" + baseComponentName + ")", function () {
            forceUpdate();
        });
    }
    var dispose = function () {
        if (reaction.current && !reaction.current.isDisposed) {
            reaction.current.dispose();
            reaction.current = null;
        }
    };
    Object(react["useDebugValue"])(reaction, printDebugValue);
    useUnmount(function () {
        dispose();
    });
    // render the original component, but have the
    // reaction track the observables, so that rendering
    // can be invalidated (see above) once a dependency changes
    var rendering;
    var exception;
    reaction.current.track(function () {
        try {
            rendering = fn();
        }
        catch (e) {
            exception = e;
        }
    });
    if (exception) {
        dispose();
        throw exception; // re-throw any exceptions catched during rendering
    }
    return rendering;
}

// n.b. base case is not used for actual typings or exported in the typing files
function observer(baseComponent, options) {
    // The working of observer is explained step by step in this talk: https://www.youtube.com/watch?v=cPF4iBedoF0&feature=youtu.be&t=1307
    if (isUsingStaticRendering()) {
        return baseComponent;
    }
    var realOptions = __assign({ forwardRef: false }, options);
    var baseComponentName = baseComponent.displayName || baseComponent.name;
    var wrappedComponent = function (props, ref) {
        return useObserver(function () { return baseComponent(props, ref); }, baseComponentName);
    };
    wrappedComponent.displayName = baseComponentName;
    // memo; we are not intested in deep updates
    // in props; we assume that if deep objects are changed,
    // this is in observables, which would have been tracked anyway
    var memoComponent;
    if (realOptions.forwardRef) {
        // we have to use forwardRef here because:
        // 1. it cannot go before memo, only after it
        // 2. forwardRef converts the function into an actual component, so we can't let the baseComponent do it
        //    since it wouldn't be a callable function anymore
        memoComponent = Object(react["memo"])(Object(react["forwardRef"])(wrappedComponent));
    }
    else {
        memoComponent = Object(react["memo"])(wrappedComponent);
    }
    copyStaticProperties(baseComponent, memoComponent);
    memoComponent.displayName = baseComponentName;
    return memoComponent;
}
// based on https://github.com/mridgway/hoist-non-react-statics/blob/master/src/index.js
var hoistBlackList = {
    $$typeof: true,
    render: true,
    compare: true,
    type: true
};
function copyStaticProperties(base, target) {
    Object.keys(base).forEach(function (key) {
        if (base.hasOwnProperty(key) && !hoistBlackList[key]) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(base, key));
        }
    });
}

function ObserverComponent(_a) {
    var children = _a.children, render = _a.render;
    var component = children || render;
    if (typeof component !== "function") {
        return null;
    }
    return useObserver(component);
}
ObserverComponent.propTypes = {
    children: ObserverPropsCheck,
    render: ObserverPropsCheck
};
ObserverComponent.displayName = "Observer";
function ObserverPropsCheck(props, key, componentName, location, propFullName) {
    var extraKey = key === "children" ? "render" : "children";
    var hasProp = typeof props[key] === "function";
    var hasExtraProp = typeof props[extraKey] === "function";
    if (hasProp && hasExtraProp) {
        return new Error("MobX Observer: Do not use children and render in the same time in`" + componentName);
    }
    if (hasProp || hasExtraProp) {
        return null;
    }
    return new Error("Invalid prop `" +
        propFullName +
        "` of type `" +
        typeof props[key] +
        "` supplied to" +
        " `" +
        componentName +
        "`, expected `function`.");
}

function useAsObservableSourceInternal(current, usedByLocalStore) {
    if (usedByLocalStore && current === undefined) {
        return undefined;
    }
    var _a = __read(react_default.a.useState(function () { return Object(mobx_module["observable"])(current, {}, { deep: false }); }), 1), res = _a[0];
    Object(mobx_module["runInAction"])(function () {
        Object.assign(res, current);
    });
    return res;
}
function useAsObservableSource(current) {
    return useAsObservableSourceInternal(current, false);
}

function useLocalStore(initializer, current) {
    var source = useAsObservableSourceInternal(current, true);
    return react_default.a.useState(function () {
        var local = Object(mobx_module["observable"])(initializer(source));
        if (isPlainObject(local)) {
            Object(mobx_module["runInAction"])(function () {
                Object.keys(local).forEach(function (key) {
                    var value = local[key];
                    if (typeof value === "function") {
                        // @ts-ignore No idea why ts2536 is popping out here
                        local[key] = wrapInTransaction(value, local);
                    }
                });
            });
        }
        return local;
    })[0];
}
// tslint:disable-next-line: ban-types
function wrapInTransaction(fn, context) {
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return Object(mobx_module["transaction"])(function () { return fn.apply(context, args); });
    };
}

var optimizeScheduler = function (reactionScheduler) {
    if (typeof reactionScheduler === "function") {
        Object(mobx_module["configure"])({ reactionScheduler: reactionScheduler });
    }
};



// CONCATENATED MODULE: ./node_modules/mobx-react/dist/mobxreact.esm.js






var symbolId = 0;

function createSymbol(name) {
  if (typeof Symbol === "function") {
    return Symbol(name);
  }

  var symbol = "__$mobx-react " + name + " (" + symbolId + ")";
  symbolId++;
  return symbol;
}

var createdSymbols = {};
function newSymbol(name) {
  if (!createdSymbols[name]) {
    createdSymbols[name] = createSymbol(name);
  }

  return createdSymbols[name];
}
function shallowEqual(objA, objB) {
  //From: https://github.com/facebook/fbjs/blob/c69904a511b900266935168223063dd8772dfc40/packages/fbjs/src/core/shallowEqual.js
  if (is(objA, objB)) return true;

  if (typeof objA !== "object" || objA === null || typeof objB !== "object" || objB === null) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);
  if (keysA.length !== keysB.length) return false;

  for (var i = 0; i < keysA.length; i++) {
    if (!Object.hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }

  return true;
}

function is(x, y) {
  // From: https://github.com/facebook/fbjs/blob/c69904a511b900266935168223063dd8772dfc40/packages/fbjs/src/core/shallowEqual.js
  if (x === y) {
    return x !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
} // based on https://github.com/mridgway/hoist-non-react-statics/blob/master/src/index.js


var mobxreact_esm_hoistBlackList = {
  $$typeof: 1,
  render: 1,
  compare: 1,
  type: 1,
  childContextTypes: 1,
  contextType: 1,
  contextTypes: 1,
  defaultProps: 1,
  getDefaultProps: 1,
  getDerivedStateFromError: 1,
  getDerivedStateFromProps: 1,
  mixins: 1,
  propTypes: 1
};
function mobxreact_esm_copyStaticProperties(base, target) {
  var protoProps = Object.getOwnPropertyNames(Object.getPrototypeOf(base));
  Object.getOwnPropertyNames(base).forEach(function (key) {
    if (!mobxreact_esm_hoistBlackList[key] && protoProps.indexOf(key) === -1) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(base, key));
    }
  });
}
/**
 * Helper to set `prop` to `this` as non-enumerable (hidden prop)
 * @param target
 * @param prop
 * @param value
 */

function setHiddenProp(target, prop, value) {
  if (!Object.hasOwnProperty.call(target, prop)) {
    Object.defineProperty(target, prop, {
      enumerable: false,
      configurable: true,
      writable: true,
      value: value
    });
  } else {
    target[prop] = value;
  }
}
/**
 * Utilities for patching componentWillUnmount, to make sure @disposeOnUnmount works correctly icm with user defined hooks
 * and the handler provided by mobx-react
 */

var mobxMixins =
/*#__PURE__*/
newSymbol("patchMixins");
var mobxPatchedDefinition =
/*#__PURE__*/
newSymbol("patchedDefinition");

function getMixins(target, methodName) {
  var mixins = target[mobxMixins] = target[mobxMixins] || {};
  var methodMixins = mixins[methodName] = mixins[methodName] || {};
  methodMixins.locks = methodMixins.locks || 0;
  methodMixins.methods = methodMixins.methods || [];
  return methodMixins;
}

function wrapper(realMethod, mixins) {
  var _this = this;

  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  // locks are used to ensure that mixins are invoked only once per invocation, even on recursive calls
  mixins.locks++;

  try {
    var retVal;

    if (realMethod !== undefined && realMethod !== null) {
      retVal = realMethod.apply(this, args);
    }

    return retVal;
  } finally {
    mixins.locks--;

    if (mixins.locks === 0) {
      mixins.methods.forEach(function (mx) {
        mx.apply(_this, args);
      });
    }
  }
}

function wrapFunction(realMethod, mixins) {
  var fn = function fn() {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    wrapper.call.apply(wrapper, [this, realMethod, mixins].concat(args));
  };

  return fn;
}

function patch(target, methodName, mixinMethod) {
  var mixins = getMixins(target, methodName);

  if (mixins.methods.indexOf(mixinMethod) < 0) {
    mixins.methods.push(mixinMethod);
  }

  var oldDefinition = Object.getOwnPropertyDescriptor(target, methodName);

  if (oldDefinition && oldDefinition[mobxPatchedDefinition]) {
    // already patched definition, do not repatch
    return;
  }

  var originalMethod = target[methodName];
  var newDefinition = createDefinition(target, methodName, oldDefinition ? oldDefinition.enumerable : undefined, mixins, originalMethod);
  Object.defineProperty(target, methodName, newDefinition);
}

function createDefinition(target, methodName, enumerable, mixins, originalMethod) {
  var _ref;

  var wrappedFunc = wrapFunction(originalMethod, mixins);
  return _ref = {}, _ref[mobxPatchedDefinition] = true, _ref.get = function get() {
    return wrappedFunc;
  }, _ref.set = function set(value) {
    if (this === target) {
      wrappedFunc = wrapFunction(value, mixins);
    } else {
      // when it is an instance of the prototype/a child prototype patch that particular case again separately
      // since we need to store separate values depending on wether it is the actual instance, the prototype, etc
      // e.g. the method for super might not be the same as the method for the prototype which might be not the same
      // as the method for the instance
      var newDefinition = createDefinition(this, methodName, enumerable, mixins, value);
      Object.defineProperty(this, methodName, newDefinition);
    }
  }, _ref.configurable = true, _ref.enumerable = enumerable, _ref;
}

var mobxAdminProperty = mobx_module["$mobx"] || "$mobx";
var mobxIsUnmounted =
/*#__PURE__*/
newSymbol("isUnmounted");
var skipRenderKey =
/*#__PURE__*/
newSymbol("skipRender");
var isForcingUpdateKey =
/*#__PURE__*/
newSymbol("isForcingUpdate");
function makeClassComponentObserver(componentClass) {
  var target = componentClass.prototype;
  if (target.componentWillReact) throw new Error("The componentWillReact life-cycle event is no longer supported");

  if (componentClass["__proto__"] !== react["PureComponent"]) {
    if (!target.shouldComponentUpdate) target.shouldComponentUpdate = observerSCU;else if (target.shouldComponentUpdate !== observerSCU) // n.b. unequal check, instead of existence check, as @observer might be on superclass as well
      throw new Error("It is not allowed to use shouldComponentUpdate in observer based components.");
  } // this.props and this.state are made observable, just to make sure @computed fields that
  // are defined inside the component, and which rely on state or props, re-compute if state or props change
  // (otherwise the computed wouldn't update and become stale on props change, since props are not observable)
  // However, this solution is not without it's own problems: https://github.com/mobxjs/mobx-react/issues?utf8=%E2%9C%93&q=is%3Aissue+label%3Aobservable-props-or-not+


  makeObservableProp(target, "props");
  makeObservableProp(target, "state");
  var baseRender = target.render;

  target.render = function () {
    return makeComponentReactive.call(this, baseRender);
  };

  patch(target, "componentWillUnmount", function () {
    if (isUsingStaticRendering() === true) return;

    if (this.render[mobxAdminProperty]) {
      this.render[mobxAdminProperty].dispose();
    } else if (false) { var displayName; }

    this[mobxIsUnmounted] = true;
  });
  return componentClass;
} // Generates a friendly name for debugging

function getDisplayName(comp) {
  return comp.displayName || comp.name || comp.constructor && (comp.constructor.displayName || comp.constructor.name) || "<component>";
}

function makeComponentReactive(render) {
  var _this = this;

  if (isUsingStaticRendering() === true) return render.call(this);
  /**
   * If props are shallowly modified, react will render anyway,
   * so atom.reportChanged() should not result in yet another re-render
   */

  setHiddenProp(this, skipRenderKey, false);
  /**
   * forceUpdate will re-assign this.props. We don't want that to cause a loop,
   * so detect these changes
   */

  setHiddenProp(this, isForcingUpdateKey, false);
  var initialName = getDisplayName(this);
  var baseRender = render.bind(this);
  var isRenderingPending = false;
  var reaction = new mobx_module["Reaction"](initialName + ".render()", function () {
    if (!isRenderingPending) {
      // N.B. Getting here *before mounting* means that a component constructor has side effects (see the relevant test in misc.js)
      // This unidiomatic React usage but React will correctly warn about this so we continue as usual
      // See #85 / Pull #44
      isRenderingPending = true;

      if (_this[mobxIsUnmounted] !== true) {
        var hasError = true;

        try {
          setHiddenProp(_this, isForcingUpdateKey, true);
          if (!_this[skipRenderKey]) react["Component"].prototype.forceUpdate.call(_this);
          hasError = false;
        } finally {
          setHiddenProp(_this, isForcingUpdateKey, false);
          if (hasError) reaction.dispose();
        }
      }
    }
  });
  reaction["reactComponent"] = this;
  reactiveRender[mobxAdminProperty] = reaction;
  this.render = reactiveRender;

  function reactiveRender() {
    isRenderingPending = false;
    var exception = undefined;
    var rendering = undefined;
    reaction.track(function () {
      try {
        rendering = Object(mobx_module["_allowStateChanges"])(false, baseRender);
      } catch (e) {
        exception = e;
      }
    });

    if (exception) {
      throw exception;
    }

    return rendering;
  }

  return reactiveRender.call(this);
}

function observerSCU(nextProps, nextState) {
  if (isUsingStaticRendering()) {
    console.warn("[mobx-react] It seems that a re-rendering of a React component is triggered while in static (server-side) mode. Please make sure components are rendered only once server-side.");
  } // update on any state changes (as is the default)


  if (this.state !== nextState) {
    return true;
  } // update if props are shallowly not equal, inspired by PureRenderMixin
  // we could return just 'false' here, and avoid the `skipRender` checks etc
  // however, it is nicer if lifecycle events are triggered like usually,
  // so we return true here if props are shallowly modified.


  return !shallowEqual(this.props, nextProps);
}

function makeObservableProp(target, propName) {
  var valueHolderKey = newSymbol("reactProp_" + propName + "_valueHolder");
  var atomHolderKey = newSymbol("reactProp_" + propName + "_atomHolder");

  function getAtom() {
    if (!this[atomHolderKey]) {
      setHiddenProp(this, atomHolderKey, Object(mobx_module["createAtom"])("reactive " + propName));
    }

    return this[atomHolderKey];
  }

  Object.defineProperty(target, propName, {
    configurable: true,
    enumerable: true,
    get: function get() {
      var prevReadState = false;

      if (mobx_module["_allowStateReadsStart"] && mobx_module["_allowStateReadsEnd"]) {
        prevReadState = Object(mobx_module["_allowStateReadsStart"])(true);
      }

      getAtom.call(this).reportObserved();

      if (mobx_module["_allowStateReadsStart"] && mobx_module["_allowStateReadsEnd"]) {
        Object(mobx_module["_allowStateReadsEnd"])(prevReadState);
      }

      return this[valueHolderKey];
    },
    set: function set(v) {
      if (!this[isForcingUpdateKey] && !shallowEqual(this[valueHolderKey], v)) {
        setHiddenProp(this, valueHolderKey, v);
        setHiddenProp(this, skipRenderKey, true);
        getAtom.call(this).reportChanged();
        setHiddenProp(this, skipRenderKey, false);
      } else {
        setHiddenProp(this, valueHolderKey, v);
      }
    }
  });
}

var hasSymbol = typeof Symbol === "function" && Symbol.for; // Using react-is had some issues (and operates on elements, not on types), see #608 / #609

var ReactForwardRefSymbol = hasSymbol ?
/*#__PURE__*/
Symbol.for("react.forward_ref") : typeof react["forwardRef"] === "function" &&
/*#__PURE__*/
Object(react["forwardRef"])(function (props) {
  return null;
})["$$typeof"];
var ReactMemoSymbol = hasSymbol ?
/*#__PURE__*/
Symbol.for("react.memo") : typeof react["memo"] === "function" &&
/*#__PURE__*/
Object(react["memo"])(function (props) {
  return null;
})["$$typeof"];
/**
 * Observer function / decorator
 */

function mobxreact_esm_observer(component) {
  if (component["isMobxInjector"] === true) {
    console.warn("Mobx observer: You are trying to use 'observer' on a component that already has 'inject'. Please apply 'observer' before applying 'inject'");
  }

  if (ReactMemoSymbol && component["$$typeof"] === ReactMemoSymbol) {
    throw new Error("Mobx observer: You are trying to use 'observer' on function component wrapped to either another observer or 'React.memo'. The observer already applies 'React.memo' for you.");
  } // Unwrap forward refs into `<Observer>` component
  // we need to unwrap the render, because it is the inner render that needs to be tracked,
  // not the ForwardRef HoC


  if (ReactForwardRefSymbol && component["$$typeof"] === ReactForwardRefSymbol) {
    var baseRender = component["render"];
    if (typeof baseRender !== "function") throw new Error("render property of ForwardRef was not a function");
    return Object(react["forwardRef"])(function ObserverForwardRef() {
      var args = arguments;
      return Object(react["createElement"])(ObserverComponent, null, function () {
        return baseRender.apply(undefined, args);
      });
    });
  } // Function component


  if (typeof component === "function" && (!component.prototype || !component.prototype.render) && !component["isReactClass"] && !Object.prototype.isPrototypeOf.call(react["Component"], component)) {
    return observer(component);
  }

  return makeClassComponentObserver(component);
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var MobXProviderContext =
/*#__PURE__*/
react_default.a.createContext({});
function Provider(props) {
  var children = props.children,
      stores = _objectWithoutPropertiesLoose(props, ["children"]);

  var parentValue = react_default.a.useContext(MobXProviderContext);
  var mutableProviderRef = react_default.a.useRef(_extends({}, parentValue, {}, stores));
  var value = mutableProviderRef.current;

  if (false) { var newValue; }

  return react_default.a.createElement(MobXProviderContext.Provider, {
    value: value
  }, children);
}
Provider.displayName = "MobXProvider";

/**
 * Store Injection
 */

function createStoreInjector(grabStoresFn, component, injectNames, makeReactive) {
  // Support forward refs
  var Injector = react_default.a.forwardRef(function (props, ref) {
    var newProps = _extends({}, props);

    var context = react_default.a.useContext(MobXProviderContext);
    Object.assign(newProps, grabStoresFn(context || {}, newProps) || {});

    if (ref) {
      newProps.ref = ref;
    }

    return react_default.a.createElement(component, newProps);
  });
  if (makeReactive) Injector = mobxreact_esm_observer(Injector);
  Injector["isMobxInjector"] = true; // assigned late to suppress observer warning
  // Static fields from component should be visible on the generated Injector

  mobxreact_esm_copyStaticProperties(component, Injector);
  Injector["wrappedComponent"] = component;
  Injector.displayName = getInjectName(component, injectNames);
  return Injector;
}

function getInjectName(component, injectNames) {
  var displayName;
  var componentName = component.displayName || component.name || component.constructor && component.constructor.name || "Component";
  if (injectNames) displayName = "inject-with-" + injectNames + "(" + componentName + ")";else displayName = "inject(" + componentName + ")";
  return displayName;
}

function grabStoresByName(storeNames) {
  return function (baseStores, nextProps) {
    storeNames.forEach(function (storeName) {
      if (storeName in nextProps // prefer props over stores
      ) return;
      if (!(storeName in baseStores)) throw new Error("MobX injector: Store '" + storeName + "' is not available! Make sure it is provided by some Provider");
      nextProps[storeName] = baseStores[storeName];
    });
    return nextProps;
  };
}
/**
 * higher order component that injects stores to a child.
 * takes either a varargs list of strings, which are stores read from the context,
 * or a function that manually maps the available stores from the context to props:
 * storesToProps(mobxStores, props, context) => newProps
 */


function inject() {
  for (var _len = arguments.length, storeNames = new Array(_len), _key = 0; _key < _len; _key++) {
    storeNames[_key] = arguments[_key];
  }

  if (typeof arguments[0] === "function") {
    var grabStoresFn = arguments[0];
    return function (componentClass) {
      return createStoreInjector(grabStoresFn, componentClass, grabStoresFn.name, true);
    };
  } else {
    return function (componentClass) {
      return createStoreInjector(grabStoresByName(storeNames), componentClass, storeNames.join("-"), false);
    };
  }
}

var protoStoreKey =
/*#__PURE__*/
newSymbol("disposeOnUnmountProto");
var instStoreKey =
/*#__PURE__*/
newSymbol("disposeOnUnmountInst");

function runDisposersOnWillUnmount() {
  var _this = this;
  [].concat(this[protoStoreKey] || [], this[instStoreKey] || []).forEach(function (propKeyOrFunction) {
    var prop = typeof propKeyOrFunction === "string" ? _this[propKeyOrFunction] : propKeyOrFunction;

    if (prop !== undefined && prop !== null) {
      if (Array.isArray(prop)) prop.map(function (f) {
        return f();
      });else prop();
    }
  });
}

function disposeOnUnmount(target, propertyKeyOrFunction) {
  if (Array.isArray(propertyKeyOrFunction)) {
    return propertyKeyOrFunction.map(function (fn) {
      return disposeOnUnmount(target, fn);
    });
  }

  var c = Object.getPrototypeOf(target).constructor || Object.getPrototypeOf(target.constructor);
  var c2 = Object.getPrototypeOf(target.constructor);

  if (!(c === react_default.a.Component || c === react_default.a.PureComponent || c2 === react_default.a.Component || c2 === react_default.a.PureComponent)) {
    throw new Error("[mobx-react] disposeOnUnmount only supports direct subclasses of React.Component or React.PureComponent.");
  }

  if (typeof propertyKeyOrFunction !== "string" && typeof propertyKeyOrFunction !== "function" && !Array.isArray(propertyKeyOrFunction)) {
    throw new Error("[mobx-react] disposeOnUnmount only works if the parameter is either a property key or a function.");
  } // decorator's target is the prototype, so it doesn't have any instance properties like props


  var isDecorator = typeof propertyKeyOrFunction === "string"; // add property key / function we want run (disposed) to the store

  var componentWasAlreadyModified = !!target[protoStoreKey] || !!target[instStoreKey];
  var store = isDecorator ? // decorators are added to the prototype store
  target[protoStoreKey] || (target[protoStoreKey] = []) : // functions are added to the instance store
  target[instStoreKey] || (target[instStoreKey] = []);
  store.push(propertyKeyOrFunction); // tweak the component class componentWillUnmount if not done already

  if (!componentWasAlreadyModified) {
    patch(target, "componentWillUnmount", runDisposersOnWillUnmount);
  } // return the disposer as is if invoked as a non decorator


  if (typeof propertyKeyOrFunction !== "string") {
    return propertyKeyOrFunction;
  }
}

function createChainableTypeChecker(validator) {
  function checkType(isRequired, props, propName, componentName, location, propFullName) {
    for (var _len = arguments.length, rest = new Array(_len > 6 ? _len - 6 : 0), _key = 6; _key < _len; _key++) {
      rest[_key - 6] = arguments[_key];
    }

    return Object(mobx_module["untracked"])(function () {
      componentName = componentName || "<<anonymous>>";
      propFullName = propFullName || propName;

      if (props[propName] == null) {
        if (isRequired) {
          var actual = props[propName] === null ? "null" : "undefined";
          return new Error("The " + location + " `" + propFullName + "` is marked as required " + "in `" + componentName + "`, but its value is `" + actual + "`.");
        }

        return null;
      } else {
        // @ts-ignore rest arg is necessary for some React internals - fails tests otherwise
        return validator.apply(void 0, [props, propName, componentName, location, propFullName].concat(rest));
      }
    });
  }

  var chainedCheckType = checkType.bind(null, false); // Add isRequired to satisfy Requirable

  chainedCheckType.isRequired = checkType.bind(null, true);
  return chainedCheckType;
} // Copied from React.PropTypes


function isSymbol(propType, propValue) {
  // Native Symbol.
  if (propType === "symbol") {
    return true;
  } // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'


  if (propValue["@@toStringTag"] === "Symbol") {
    return true;
  } // Fallback for non-spec compliant Symbols which are polyfilled.


  if (typeof Symbol === "function" && propValue instanceof Symbol) {
    return true;
  }

  return false;
} // Copied from React.PropTypes


function getPropType(propValue) {
  var propType = typeof propValue;

  if (Array.isArray(propValue)) {
    return "array";
  }

  if (propValue instanceof RegExp) {
    // Old webkits (at least until Android 4.0) return 'function' rather than
    // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
    // passes PropTypes.object.
    return "object";
  }

  if (isSymbol(propType, propValue)) {
    return "symbol";
  }

  return propType;
} // This handles more types than `getPropType`. Only used for error messages.
// Copied from React.PropTypes


function getPreciseType(propValue) {
  var propType = getPropType(propValue);

  if (propType === "object") {
    if (propValue instanceof Date) {
      return "date";
    } else if (propValue instanceof RegExp) {
      return "regexp";
    }
  }

  return propType;
}

function createObservableTypeCheckerCreator(allowNativeType, mobxType) {
  return createChainableTypeChecker(function (props, propName, componentName, location, propFullName) {
    return Object(mobx_module["untracked"])(function () {
      if (allowNativeType) {
        if (getPropType(props[propName]) === mobxType.toLowerCase()) return null;
      }

      var mobxChecker;

      switch (mobxType) {
        case "Array":
          mobxChecker = mobx_module["isObservableArray"];
          break;

        case "Object":
          mobxChecker = mobx_module["isObservableObject"];
          break;

        case "Map":
          mobxChecker = mobx_module["isObservableMap"];
          break;

        default:
          throw new Error("Unexpected mobxType: " + mobxType);
      }

      var propValue = props[propName];

      if (!mobxChecker(propValue)) {
        var preciseType = getPreciseType(propValue);
        var nativeTypeExpectationMessage = allowNativeType ? " or javascript `" + mobxType.toLowerCase() + "`" : "";
        return new Error("Invalid prop `" + propFullName + "` of type `" + preciseType + "` supplied to" + " `" + componentName + "`, expected `mobx.Observable" + mobxType + "`" + nativeTypeExpectationMessage + ".");
      }

      return null;
    });
  });
}

function createObservableArrayOfTypeChecker(allowNativeType, typeChecker) {
  return createChainableTypeChecker(function (props, propName, componentName, location, propFullName) {
    for (var _len2 = arguments.length, rest = new Array(_len2 > 5 ? _len2 - 5 : 0), _key2 = 5; _key2 < _len2; _key2++) {
      rest[_key2 - 5] = arguments[_key2];
    }

    return Object(mobx_module["untracked"])(function () {
      if (typeof typeChecker !== "function") {
        return new Error("Property `" + propFullName + "` of component `" + componentName + "` has " + "invalid PropType notation.");
      } else {
        var error = createObservableTypeCheckerCreator(allowNativeType, "Array")(props, propName, componentName, location, propFullName);
        if (error instanceof Error) return error;
        var propValue = props[propName];

        for (var i = 0; i < propValue.length; i++) {
          error = typeChecker.apply(void 0, [propValue, i, componentName, location, propFullName + "[" + i + "]"].concat(rest));
          if (error instanceof Error) return error;
        }

        return null;
      }
    });
  });
}

var observableArray =
/*#__PURE__*/
createObservableTypeCheckerCreator(false, "Array");
var observableArrayOf =
/*#__PURE__*/
createObservableArrayOfTypeChecker.bind(null, false);
var observableMap =
/*#__PURE__*/
createObservableTypeCheckerCreator(false, "Map");
var observableObject =
/*#__PURE__*/
createObservableTypeCheckerCreator(false, "Object");
var arrayOrObservableArray =
/*#__PURE__*/
createObservableTypeCheckerCreator(true, "Array");
var arrayOrObservableArrayOf =
/*#__PURE__*/
createObservableArrayOfTypeChecker.bind(null, true);
var objectOrObservableObject =
/*#__PURE__*/
createObservableTypeCheckerCreator(true, "Object");
var PropTypes = {
  observableArray: observableArray,
  observableArrayOf: observableArrayOf,
  observableMap: observableMap,
  observableObject: observableObject,
  arrayOrObservableArray: arrayOrObservableArray,
  arrayOrObservableArrayOf: arrayOrObservableArrayOf,
  objectOrObservableObject: objectOrObservableObject
};

if (!react["Component"]) throw new Error("mobx-react requires React to be available");
if (!mobx_module["observable"]) throw new Error("mobx-react requires mobx to be available");
if (typeof react_dom["unstable_batchedUpdates"] === "function") Object(mobx_module["configure"])({
  reactionScheduler: react_dom["unstable_batchedUpdates"]
});


//# sourceMappingURL=mobxreact.esm.js.map


/***/ }),

/***/ 139:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(143);


/***/ }),

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./units-2.12/definitions.units
var definitions_units = __webpack_require__(40);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(6);

// CONCATENATED MODULE: ./node_modules/whatwg-fetch/fetch.js
var support = {
  searchParams: 'URLSearchParams' in self,
  iterable: 'Symbol' in self && 'iterator' in Symbol,
  blob:
    'FileReader' in self &&
    'Blob' in self &&
    (function() {
      try {
        new Blob()
        return true
      } catch (e) {
        return false
      }
    })(),
  formData: 'FormData' in self,
  arrayBuffer: 'ArrayBuffer' in self
}

function isDataView(obj) {
  return obj && DataView.prototype.isPrototypeOf(obj)
}

if (support.arrayBuffer) {
  var viewClasses = [
    '[object Int8Array]',
    '[object Uint8Array]',
    '[object Uint8ClampedArray]',
    '[object Int16Array]',
    '[object Uint16Array]',
    '[object Int32Array]',
    '[object Uint32Array]',
    '[object Float32Array]',
    '[object Float64Array]'
  ]

  var isArrayBufferView =
    ArrayBuffer.isView ||
    function(obj) {
      return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
    }
}

function normalizeName(name) {
  if (typeof name !== 'string') {
    name = String(name)
  }
  if (/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(name)) {
    throw new TypeError('Invalid character in header field name')
  }
  return name.toLowerCase()
}

function normalizeValue(value) {
  if (typeof value !== 'string') {
    value = String(value)
  }
  return value
}

// Build a destructive iterator for the value list
function iteratorFor(items) {
  var iterator = {
    next: function() {
      var value = items.shift()
      return {done: value === undefined, value: value}
    }
  }

  if (support.iterable) {
    iterator[Symbol.iterator] = function() {
      return iterator
    }
  }

  return iterator
}

function Headers(headers) {
  this.map = {}

  if (headers instanceof Headers) {
    headers.forEach(function(value, name) {
      this.append(name, value)
    }, this)
  } else if (Array.isArray(headers)) {
    headers.forEach(function(header) {
      this.append(header[0], header[1])
    }, this)
  } else if (headers) {
    Object.getOwnPropertyNames(headers).forEach(function(name) {
      this.append(name, headers[name])
    }, this)
  }
}

Headers.prototype.append = function(name, value) {
  name = normalizeName(name)
  value = normalizeValue(value)
  var oldValue = this.map[name]
  this.map[name] = oldValue ? oldValue + ', ' + value : value
}

Headers.prototype['delete'] = function(name) {
  delete this.map[normalizeName(name)]
}

Headers.prototype.get = function(name) {
  name = normalizeName(name)
  return this.has(name) ? this.map[name] : null
}

Headers.prototype.has = function(name) {
  return this.map.hasOwnProperty(normalizeName(name))
}

Headers.prototype.set = function(name, value) {
  this.map[normalizeName(name)] = normalizeValue(value)
}

Headers.prototype.forEach = function(callback, thisArg) {
  for (var name in this.map) {
    if (this.map.hasOwnProperty(name)) {
      callback.call(thisArg, this.map[name], name, this)
    }
  }
}

Headers.prototype.keys = function() {
  var items = []
  this.forEach(function(value, name) {
    items.push(name)
  })
  return iteratorFor(items)
}

Headers.prototype.values = function() {
  var items = []
  this.forEach(function(value) {
    items.push(value)
  })
  return iteratorFor(items)
}

Headers.prototype.entries = function() {
  var items = []
  this.forEach(function(value, name) {
    items.push([name, value])
  })
  return iteratorFor(items)
}

if (support.iterable) {
  Headers.prototype[Symbol.iterator] = Headers.prototype.entries
}

function consumed(body) {
  if (body.bodyUsed) {
    return Promise.reject(new TypeError('Already read'))
  }
  body.bodyUsed = true
}

function fileReaderReady(reader) {
  return new Promise(function(resolve, reject) {
    reader.onload = function() {
      resolve(reader.result)
    }
    reader.onerror = function() {
      reject(reader.error)
    }
  })
}

function readBlobAsArrayBuffer(blob) {
  var reader = new FileReader()
  var promise = fileReaderReady(reader)
  reader.readAsArrayBuffer(blob)
  return promise
}

function readBlobAsText(blob) {
  var reader = new FileReader()
  var promise = fileReaderReady(reader)
  reader.readAsText(blob)
  return promise
}

function readArrayBufferAsText(buf) {
  var view = new Uint8Array(buf)
  var chars = new Array(view.length)

  for (var i = 0; i < view.length; i++) {
    chars[i] = String.fromCharCode(view[i])
  }
  return chars.join('')
}

function bufferClone(buf) {
  if (buf.slice) {
    return buf.slice(0)
  } else {
    var view = new Uint8Array(buf.byteLength)
    view.set(new Uint8Array(buf))
    return view.buffer
  }
}

function Body() {
  this.bodyUsed = false

  this._initBody = function(body) {
    this._bodyInit = body
    if (!body) {
      this._bodyText = ''
    } else if (typeof body === 'string') {
      this._bodyText = body
    } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
      this._bodyBlob = body
    } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
      this._bodyFormData = body
    } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
      this._bodyText = body.toString()
    } else if (support.arrayBuffer && support.blob && isDataView(body)) {
      this._bodyArrayBuffer = bufferClone(body.buffer)
      // IE 10-11 can't handle a DataView body.
      this._bodyInit = new Blob([this._bodyArrayBuffer])
    } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
      this._bodyArrayBuffer = bufferClone(body)
    } else {
      this._bodyText = body = Object.prototype.toString.call(body)
    }

    if (!this.headers.get('content-type')) {
      if (typeof body === 'string') {
        this.headers.set('content-type', 'text/plain;charset=UTF-8')
      } else if (this._bodyBlob && this._bodyBlob.type) {
        this.headers.set('content-type', this._bodyBlob.type)
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8')
      }
    }
  }

  if (support.blob) {
    this.blob = function() {
      var rejected = consumed(this)
      if (rejected) {
        return rejected
      }

      if (this._bodyBlob) {
        return Promise.resolve(this._bodyBlob)
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(new Blob([this._bodyArrayBuffer]))
      } else if (this._bodyFormData) {
        throw new Error('could not read FormData body as blob')
      } else {
        return Promise.resolve(new Blob([this._bodyText]))
      }
    }

    this.arrayBuffer = function() {
      if (this._bodyArrayBuffer) {
        return consumed(this) || Promise.resolve(this._bodyArrayBuffer)
      } else {
        return this.blob().then(readBlobAsArrayBuffer)
      }
    }
  }

  this.text = function() {
    var rejected = consumed(this)
    if (rejected) {
      return rejected
    }

    if (this._bodyBlob) {
      return readBlobAsText(this._bodyBlob)
    } else if (this._bodyArrayBuffer) {
      return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))
    } else if (this._bodyFormData) {
      throw new Error('could not read FormData body as text')
    } else {
      return Promise.resolve(this._bodyText)
    }
  }

  if (support.formData) {
    this.formData = function() {
      return this.text().then(decode)
    }
  }

  this.json = function() {
    return this.text().then(JSON.parse)
  }

  return this
}

// HTTP methods whose capitalization should be normalized
var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']

function normalizeMethod(method) {
  var upcased = method.toUpperCase()
  return methods.indexOf(upcased) > -1 ? upcased : method
}

function Request(input, options) {
  options = options || {}
  var body = options.body

  if (input instanceof Request) {
    if (input.bodyUsed) {
      throw new TypeError('Already read')
    }
    this.url = input.url
    this.credentials = input.credentials
    if (!options.headers) {
      this.headers = new Headers(input.headers)
    }
    this.method = input.method
    this.mode = input.mode
    this.signal = input.signal
    if (!body && input._bodyInit != null) {
      body = input._bodyInit
      input.bodyUsed = true
    }
  } else {
    this.url = String(input)
  }

  this.credentials = options.credentials || this.credentials || 'same-origin'
  if (options.headers || !this.headers) {
    this.headers = new Headers(options.headers)
  }
  this.method = normalizeMethod(options.method || this.method || 'GET')
  this.mode = options.mode || this.mode || null
  this.signal = options.signal || this.signal
  this.referrer = null

  if ((this.method === 'GET' || this.method === 'HEAD') && body) {
    throw new TypeError('Body not allowed for GET or HEAD requests')
  }
  this._initBody(body)
}

Request.prototype.clone = function() {
  return new Request(this, {body: this._bodyInit})
}

function decode(body) {
  var form = new FormData()
  body
    .trim()
    .split('&')
    .forEach(function(bytes) {
      if (bytes) {
        var split = bytes.split('=')
        var name = split.shift().replace(/\+/g, ' ')
        var value = split.join('=').replace(/\+/g, ' ')
        form.append(decodeURIComponent(name), decodeURIComponent(value))
      }
    })
  return form
}

function parseHeaders(rawHeaders) {
  var headers = new Headers()
  // Replace instances of \r\n and \n followed by at least one space or horizontal tab with a space
  // https://tools.ietf.org/html/rfc7230#section-3.2
  var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, ' ')
  preProcessedHeaders.split(/\r?\n/).forEach(function(line) {
    var parts = line.split(':')
    var key = parts.shift().trim()
    if (key) {
      var value = parts.join(':').trim()
      headers.append(key, value)
    }
  })
  return headers
}

Body.call(Request.prototype)

function Response(bodyInit, options) {
  if (!options) {
    options = {}
  }

  this.type = 'default'
  this.status = options.status === undefined ? 200 : options.status
  this.ok = this.status >= 200 && this.status < 300
  this.statusText = 'statusText' in options ? options.statusText : 'OK'
  this.headers = new Headers(options.headers)
  this.url = options.url || ''
  this._initBody(bodyInit)
}

Body.call(Response.prototype)

Response.prototype.clone = function() {
  return new Response(this._bodyInit, {
    status: this.status,
    statusText: this.statusText,
    headers: new Headers(this.headers),
    url: this.url
  })
}

Response.error = function() {
  var response = new Response(null, {status: 0, statusText: ''})
  response.type = 'error'
  return response
}

var redirectStatuses = [301, 302, 303, 307, 308]

Response.redirect = function(url, status) {
  if (redirectStatuses.indexOf(status) === -1) {
    throw new RangeError('Invalid status code')
  }

  return new Response(null, {status: status, headers: {location: url}})
}

var DOMException = self.DOMException
try {
  new DOMException()
} catch (err) {
  DOMException = function(message, name) {
    this.message = message
    this.name = name
    var error = Error(message)
    this.stack = error.stack
  }
  DOMException.prototype = Object.create(Error.prototype)
  DOMException.prototype.constructor = DOMException
}

function fetch(input, init) {
  return new Promise(function(resolve, reject) {
    var request = new Request(input, init)

    if (request.signal && request.signal.aborted) {
      return reject(new DOMException('Aborted', 'AbortError'))
    }

    var xhr = new XMLHttpRequest()

    function abortXhr() {
      xhr.abort()
    }

    xhr.onload = function() {
      var options = {
        status: xhr.status,
        statusText: xhr.statusText,
        headers: parseHeaders(xhr.getAllResponseHeaders() || '')
      }
      options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL')
      var body = 'response' in xhr ? xhr.response : xhr.responseText
      resolve(new Response(body, options))
    }

    xhr.onerror = function() {
      reject(new TypeError('Network request failed'))
    }

    xhr.ontimeout = function() {
      reject(new TypeError('Network request failed'))
    }

    xhr.onabort = function() {
      reject(new DOMException('Aborted', 'AbortError'))
    }

    xhr.open(request.method, request.url, true)

    if (request.credentials === 'include') {
      xhr.withCredentials = true
    } else if (request.credentials === 'omit') {
      xhr.withCredentials = false
    }

    if ('responseType' in xhr && support.blob) {
      xhr.responseType = 'blob'
    }

    request.headers.forEach(function(value, name) {
      xhr.setRequestHeader(name, value)
    })

    if (request.signal) {
      request.signal.addEventListener('abort', abortXhr)

      xhr.onreadystatechange = function() {
        // DONE (success or failure)
        if (xhr.readyState === 4) {
          request.signal.removeEventListener('abort', abortXhr)
        }
      }
    }

    xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit)
  })
}

fetch.polyfill = true

if (!self.fetch) {
  self.fetch = fetch
  self.Headers = Headers
  self.Request = Request
  self.Response = Response
}

// EXTERNAL MODULE: ./node_modules/mobx/lib/mobx.module.js
var mobx_module = __webpack_require__(1);

// EXTERNAL MODULE: ./node_modules/mobx-react/dist/mobxreact.esm.js + 1 modules
var mobxreact_esm = __webpack_require__(12);

// EXTERNAL MODULE: ./node_modules/mobx-react-devtools/index.js
var mobx_react_devtools = __webpack_require__(86);
var mobx_react_devtools_default = /*#__PURE__*/__webpack_require__.n(mobx_react_devtools);

// EXTERNAL MODULE: ./src/units-importer/CategorizeStore.ts
var CategorizeStore = __webpack_require__(11);

// CONCATENATED MODULE: ./src/units-importer/GnuUnitsCategorizeHelper.tsx
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







function download(content, filename) {
    var a = window.document.createElement("a");
    a.href = window.URL.createObjectURL(new Blob([content], { type: "text/plain" }));
    a.download = filename;
    // Append anchor to body.
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}
let GnuUnitsCategorizeHelper_HelperGui = class HelperGui extends react["Component"] {
    constructor(props) {
        super(props);
        this.pres = new Map();
        this.store = this.props.store;
        document.addEventListener("selectionchange", _ => this.getSelection(document.getSelection()), false);
        document.addEventListener("keyup", e => this.commandKey(e, String.fromCharCode(e.keyCode)));
        mobx_module["autorun"](() => this.checkConsistency(), {
            name: "consistency check",
        });
        mobx_module["reaction"](() => JSON.stringify(this.store.executed), data => {
            console.log("set localStorage");
            localStorage.setItem("executed", data);
        }, {
            name: "save to localStorage",
            fireImmediately: false,
            delay: 500,
        });
    }
    commandKey(e, key) {
        if (e.shiftKey || e.altKey || e.metaKey || e.ctrlKey)
            return;
        const sel = [this.store.selectionStart, this.store.selectionEnd];
        if (sel[0] == -1 || sel[1] == -1) {
            console.log("no selection");
            return;
        }
        if (key == "T") {
            console.log(this.store.categoryTreeOf(sel[0]));
            return;
        }
        else if (key == "C") {
            console.log(this.store.lines
                .slice(sel[0], sel[1] + 1)
                .map(x => x.replace(/^\s*#/g, ""))
                .join("\n"));
        }
        const cmds = {
            J: ["unifySelection", ...sel],
            S: ["splitSelection", ...sel],
            D: ["markSelection", ...sel, CategorizeStore["a" /* Type */].Deleted],
            H: ["markSelection", ...sel, CategorizeStore["a" /* Type */].Heading],
            N: ["markSelection", ...sel, CategorizeStore["a" /* Type */].Normal],
        };
        let cmd = cmds[key];
        if (/[0-9]/.test(key))
            cmd = ["setHeadingDepth", ...sel, +key];
        else if (!cmds[key]) {
            console.log("unknown command: " + key);
            return;
        }
        this.store.execute(cmd);
    }
    getSelection(s) {
        // const [boxes, lines] = [this.store.boxes, this.store.lines];
        let boxStartI = s.anchorNode
            ? this.pres.get(s.anchorNode) ||
                this.pres.get(s.anchorNode.parentElement)
            : undefined;
        let boxEndI = s.focusNode
            ? this.pres.get(s.focusNode) ||
                this.pres.get(s.focusNode.parentNode)
            : undefined;
        if (boxStartI === undefined || boxEndI === undefined) {
            boxStartI = -1;
            boxEndI = -1;
        }
        if (boxEndI < boxStartI)
            [boxStartI, boxEndI] = [boxEndI, boxStartI];
        const [a, b] = [
            this.store.boxes[boxStartI].start,
            this.store.boxes[boxEndI].end,
        ];
        this.store.selectionStart = a;
        this.store.selectionEnd = b;
    }
    render() {
        const { boxes } = this.store;
        let currentIndent = 0;
        return (react["createElement"]("div", { className: "container gnu-units-categorize" },
            react["createElement"]("div", { className: "page-header" },
                react["createElement"]("p", null,
                    "Select boxes with the mouse. ",
                    react["createElement"]("br", null),
                    "Then press J to join boxes, S to split them, ",
                    react["createElement"]("br", null),
                    "H to mark them as a heading ",
                    react["createElement"]("br", null),
                    "N to mark them as normal ",
                    react["createElement"]("br", null),
                    "D to mark them as deleted ",
                    react["createElement"]("br", null),
                    "T to print the category tree of the first box to the console. ",
                    react["createElement"]("br", null),
                    "Use 1-9 to set the level of the heading, 0 to set it to the level of the previous heading ",
                    react["createElement"]("br", null)),
                react["createElement"]("p", null,
                    "The data is saved to localStorage.executed as a list of the executed commands.",
                    " ",
                    react["createElement"]("button", { onClick: () => {
                            localStorage.clear();
                            location.reload();
                        } }, "Clear"),
                    react["createElement"]("button", { onClick: () => download(JSON.stringify(this.store.executed, null, "\t"), "executed.json") }, "Download"))),
            boxes.map((box, i) => {
                if (box.headingLevel)
                    currentIndent = box.headingLevel;
                const thisIndent = currentIndent + (box.type == CategorizeStore["a" /* Type */].Heading ? 0 : 1);
                return (react["createElement"]("pre", { style: Object.assign({}, typeStyles[box.type], {
                        marginLeft: (thisIndent - 1) * 70 + "px",
                    }), className: box.start >= this.store.selectionStart &&
                        box.end <= this.store.selectionEnd
                        ? "alert alert-info"
                        : "", key: box.start + "," + box.end, ref: e => this.pres.set(e, i) }, this.store.getRawText(box)));
            })));
    }
    checkConsistency() {
        let i = 0;
        for (const box of this.store.boxes) {
            if (box.start !== i)
                console.error("inconsistency: end=", i, "!=", box.start, "=start");
            if (box.end < box.start)
                console.error("inconsistency box < 0", box);
            i = box.end + 1;
        }
    }
};
__decorate([
    mobx_module["action"]
], GnuUnitsCategorizeHelper_HelperGui.prototype, "getSelection", null);
GnuUnitsCategorizeHelper_HelperGui = __decorate([
    mobxreact_esm["observer"]
], GnuUnitsCategorizeHelper_HelperGui);
const styles = {
    box: {
        borderBottom: "1px solid black",
        borderRadius: "0px",
        padding: "2px",
        margin: 0,
        maxHeight: "300px",
    },
};
const typeStyles = {
    [CategorizeStore["a" /* Type */].Deleted]: Object.assign({}, styles.box, {
        color: "lightgray",
    }),
    [CategorizeStore["a" /* Type */].Normal]: Object.assign({}, styles.box, {}),
    [CategorizeStore["a" /* Type */].Heading]: Object.assign({}, styles.box, {
        fontWeight: "bold",
        fontSize: "120%",
    }),
};
function init(str, preloadSteps) {
    const actions = JSON.parse(localStorage.getItem("executed") || "null") || preloadSteps;
    react_dom["render"](react["createElement"]("div", null,
        react["createElement"](GnuUnitsCategorizeHelper_HelperGui, { store: new CategorizeStore["b" /* default */](str, actions), ref: guiInst => Object.assign(window, { guiInst }) }),
        react["createElement"](mobx_react_devtools_default.a, null)), document.getElementById("app"));
}

// EXTERNAL MODULE: ./data/gnu-units-categorize-steps.json
var gnu_units_categorize_steps = __webpack_require__(41);

// EXTERNAL MODULE: ./style.scss
var style = __webpack_require__(38);

// CONCATENATED MODULE: ./src/units-importer/GnuUnitsCategorizeHelperMain.ts




if (typeof window !== "undefined")
    init(definitions_units["a" /* default */], gnu_units_categorize_steps);


/***/ }),

/***/ 15:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ 19:
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ 23:
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ 29:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ 30:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ 32:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.1
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var l=__webpack_require__(15),n="function"===typeof Symbol&&Symbol.for,p=n?Symbol.for("react.element"):60103,q=n?Symbol.for("react.portal"):60106,r=n?Symbol.for("react.fragment"):60107,t=n?Symbol.for("react.strict_mode"):60108,u=n?Symbol.for("react.profiler"):60114,v=n?Symbol.for("react.provider"):60109,w=n?Symbol.for("react.context"):60110,x=n?Symbol.for("react.forward_ref"):60112,y=n?Symbol.for("react.suspense"):60113,z=n?Symbol.for("react.memo"):60115,A=n?Symbol.for("react.lazy"):
60116,B="function"===typeof Symbol&&Symbol.iterator;function C(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return"Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}
var D={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E={};function F(a,b,c){this.props=a;this.context=b;this.refs=E;this.updater=c||D}F.prototype.isReactComponent={};F.prototype.setState=function(a,b){if("object"!==typeof a&&"function"!==typeof a&&null!=a)throw Error(C(85));this.updater.enqueueSetState(this,a,b,"setState")};F.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate")};
function G(){}G.prototype=F.prototype;function H(a,b,c){this.props=a;this.context=b;this.refs=E;this.updater=c||D}var I=H.prototype=new G;I.constructor=H;l(I,F.prototype);I.isPureReactComponent=!0;var J={current:null},K=Object.prototype.hasOwnProperty,L={key:!0,ref:!0,__self:!0,__source:!0};
function M(a,b,c){var e,d={},g=null,k=null;if(null!=b)for(e in void 0!==b.ref&&(k=b.ref),void 0!==b.key&&(g=""+b.key),b)K.call(b,e)&&!L.hasOwnProperty(e)&&(d[e]=b[e]);var f=arguments.length-2;if(1===f)d.children=c;else if(1<f){for(var h=Array(f),m=0;m<f;m++)h[m]=arguments[m+2];d.children=h}if(a&&a.defaultProps)for(e in f=a.defaultProps,f)void 0===d[e]&&(d[e]=f[e]);return{$$typeof:p,type:a,key:g,ref:k,props:d,_owner:J.current}}
function N(a,b){return{$$typeof:p,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function O(a){return"object"===typeof a&&null!==a&&a.$$typeof===p}function escape(a){var b={"=":"=0",":":"=2"};return"$"+(""+a).replace(/[=:]/g,function(a){return b[a]})}var P=/\/+/g,Q=[];function R(a,b,c,e){if(Q.length){var d=Q.pop();d.result=a;d.keyPrefix=b;d.func=c;d.context=e;d.count=0;return d}return{result:a,keyPrefix:b,func:c,context:e,count:0}}
function S(a){a.result=null;a.keyPrefix=null;a.func=null;a.context=null;a.count=0;10>Q.length&&Q.push(a)}
function T(a,b,c,e){var d=typeof a;if("undefined"===d||"boolean"===d)a=null;var g=!1;if(null===a)g=!0;else switch(d){case "string":case "number":g=!0;break;case "object":switch(a.$$typeof){case p:case q:g=!0}}if(g)return c(e,a,""===b?"."+U(a,0):b),1;g=0;b=""===b?".":b+":";if(Array.isArray(a))for(var k=0;k<a.length;k++){d=a[k];var f=b+U(d,k);g+=T(d,f,c,e)}else if(null===a||"object"!==typeof a?f=null:(f=B&&a[B]||a["@@iterator"],f="function"===typeof f?f:null),"function"===typeof f)for(a=f.call(a),k=
0;!(d=a.next()).done;)d=d.value,f=b+U(d,k++),g+=T(d,f,c,e);else if("object"===d)throw c=""+a,Error(C(31,"[object Object]"===c?"object with keys {"+Object.keys(a).join(", ")+"}":c,""));return g}function V(a,b,c){return null==a?0:T(a,"",b,c)}function U(a,b){return"object"===typeof a&&null!==a&&null!=a.key?escape(a.key):b.toString(36)}function W(a,b){a.func.call(a.context,b,a.count++)}
function aa(a,b,c){var e=a.result,d=a.keyPrefix;a=a.func.call(a.context,b,a.count++);Array.isArray(a)?X(a,e,c,function(a){return a}):null!=a&&(O(a)&&(a=N(a,d+(!a.key||b&&b.key===a.key?"":(""+a.key).replace(P,"$&/")+"/")+c)),e.push(a))}function X(a,b,c,e,d){var g="";null!=c&&(g=(""+c).replace(P,"$&/")+"/");b=R(b,g,e,d);V(a,aa,b);S(b)}var Y={current:null};function Z(){var a=Y.current;if(null===a)throw Error(C(321));return a}
var ba={ReactCurrentDispatcher:Y,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:J,IsSomeRendererActing:{current:!1},assign:l};exports.Children={map:function(a,b,c){if(null==a)return a;var e=[];X(a,e,null,b,c);return e},forEach:function(a,b,c){if(null==a)return a;b=R(null,null,b,c);V(a,W,b);S(b)},count:function(a){return V(a,function(){return null},null)},toArray:function(a){var b=[];X(a,b,null,function(a){return a});return b},only:function(a){if(!O(a))throw Error(C(143));return a}};
exports.Component=F;exports.Fragment=r;exports.Profiler=u;exports.PureComponent=H;exports.StrictMode=t;exports.Suspense=y;exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ba;
exports.cloneElement=function(a,b,c){if(null===a||void 0===a)throw Error(C(267,a));var e=l({},a.props),d=a.key,g=a.ref,k=a._owner;if(null!=b){void 0!==b.ref&&(g=b.ref,k=J.current);void 0!==b.key&&(d=""+b.key);if(a.type&&a.type.defaultProps)var f=a.type.defaultProps;for(h in b)K.call(b,h)&&!L.hasOwnProperty(h)&&(e[h]=void 0===b[h]&&void 0!==f?f[h]:b[h])}var h=arguments.length-2;if(1===h)e.children=c;else if(1<h){f=Array(h);for(var m=0;m<h;m++)f[m]=arguments[m+2];e.children=f}return{$$typeof:p,type:a.type,
key:d,ref:g,props:e,_owner:k}};exports.createContext=function(a,b){void 0===b&&(b=null);a={$$typeof:w,_calculateChangedBits:b,_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null};a.Provider={$$typeof:v,_context:a};return a.Consumer=a};exports.createElement=M;exports.createFactory=function(a){var b=M.bind(null,a);b.type=a;return b};exports.createRef=function(){return{current:null}};exports.forwardRef=function(a){return{$$typeof:x,render:a}};exports.isValidElement=O;
exports.lazy=function(a){return{$$typeof:A,_ctor:a,_status:-1,_result:null}};exports.memo=function(a,b){return{$$typeof:z,type:a,compare:void 0===b?null:b}};exports.useCallback=function(a,b){return Z().useCallback(a,b)};exports.useContext=function(a,b){return Z().useContext(a,b)};exports.useDebugValue=function(){};exports.useEffect=function(a,b){return Z().useEffect(a,b)};exports.useImperativeHandle=function(a,b,c){return Z().useImperativeHandle(a,b,c)};
exports.useLayoutEffect=function(a,b){return Z().useLayoutEffect(a,b)};exports.useMemo=function(a,b){return Z().useMemo(a,b)};exports.useReducer=function(a,b,c){return Z().useReducer(a,b,c)};exports.useRef=function(a){return Z().useRef(a)};exports.useState=function(a){return Z().useState(a)};exports.version="16.13.1";


/***/ }),

/***/ 33:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.1
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/*
 Modernizr 3.0.0pre (Custom Build) | MIT
*/
var aa=__webpack_require__(0),n=__webpack_require__(15),r=__webpack_require__(34);function u(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return"Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}if(!aa)throw Error(u(227));
function ba(a,b,c,d,e,f,g,h,k){var l=Array.prototype.slice.call(arguments,3);try{b.apply(c,l)}catch(m){this.onError(m)}}var da=!1,ea=null,fa=!1,ha=null,ia={onError:function(a){da=!0;ea=a}};function ja(a,b,c,d,e,f,g,h,k){da=!1;ea=null;ba.apply(ia,arguments)}function ka(a,b,c,d,e,f,g,h,k){ja.apply(this,arguments);if(da){if(da){var l=ea;da=!1;ea=null}else throw Error(u(198));fa||(fa=!0,ha=l)}}var la=null,ma=null,na=null;
function oa(a,b,c){var d=a.type||"unknown-event";a.currentTarget=na(c);ka(d,b,void 0,a);a.currentTarget=null}var pa=null,qa={};
function ra(){if(pa)for(var a in qa){var b=qa[a],c=pa.indexOf(a);if(!(-1<c))throw Error(u(96,a));if(!sa[c]){if(!b.extractEvents)throw Error(u(97,a));sa[c]=b;c=b.eventTypes;for(var d in c){var e=void 0;var f=c[d],g=b,h=d;if(ta.hasOwnProperty(h))throw Error(u(99,h));ta[h]=f;var k=f.phasedRegistrationNames;if(k){for(e in k)k.hasOwnProperty(e)&&ua(k[e],g,h);e=!0}else f.registrationName?(ua(f.registrationName,g,h),e=!0):e=!1;if(!e)throw Error(u(98,d,a));}}}}
function ua(a,b,c){if(va[a])throw Error(u(100,a));va[a]=b;wa[a]=b.eventTypes[c].dependencies}var sa=[],ta={},va={},wa={};function xa(a){var b=!1,c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];if(!qa.hasOwnProperty(c)||qa[c]!==d){if(qa[c])throw Error(u(102,c));qa[c]=d;b=!0}}b&&ra()}var ya=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),za=null,Aa=null,Ba=null;
function Ca(a){if(a=ma(a)){if("function"!==typeof za)throw Error(u(280));var b=a.stateNode;b&&(b=la(b),za(a.stateNode,a.type,b))}}function Da(a){Aa?Ba?Ba.push(a):Ba=[a]:Aa=a}function Ea(){if(Aa){var a=Aa,b=Ba;Ba=Aa=null;Ca(a);if(b)for(a=0;a<b.length;a++)Ca(b[a])}}function Fa(a,b){return a(b)}function Ga(a,b,c,d,e){return a(b,c,d,e)}function Ha(){}var Ia=Fa,Ja=!1,Ka=!1;function La(){if(null!==Aa||null!==Ba)Ha(),Ea()}
function Ma(a,b,c){if(Ka)return a(b,c);Ka=!0;try{return Ia(a,b,c)}finally{Ka=!1,La()}}var Na=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Oa=Object.prototype.hasOwnProperty,Pa={},Qa={};
function Ra(a){if(Oa.call(Qa,a))return!0;if(Oa.call(Pa,a))return!1;if(Na.test(a))return Qa[a]=!0;Pa[a]=!0;return!1}function Sa(a,b,c,d){if(null!==c&&0===c.type)return!1;switch(typeof b){case "function":case "symbol":return!0;case "boolean":if(d)return!1;if(null!==c)return!c.acceptsBooleans;a=a.toLowerCase().slice(0,5);return"data-"!==a&&"aria-"!==a;default:return!1}}
function Ta(a,b,c,d){if(null===b||"undefined"===typeof b||Sa(a,b,c,d))return!0;if(d)return!1;if(null!==c)switch(c.type){case 3:return!b;case 4:return!1===b;case 5:return isNaN(b);case 6:return isNaN(b)||1>b}return!1}function v(a,b,c,d,e,f){this.acceptsBooleans=2===b||3===b||4===b;this.attributeName=d;this.attributeNamespace=e;this.mustUseProperty=c;this.propertyName=a;this.type=b;this.sanitizeURL=f}var C={};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a){C[a]=new v(a,0,!1,a,null,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(a){var b=a[0];C[b]=new v(b,1,!1,a[1],null,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(a){C[a]=new v(a,2,!1,a.toLowerCase(),null,!1)});
["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(a){C[a]=new v(a,2,!1,a,null,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a){C[a]=new v(a,3,!1,a.toLowerCase(),null,!1)});
["checked","multiple","muted","selected"].forEach(function(a){C[a]=new v(a,3,!0,a,null,!1)});["capture","download"].forEach(function(a){C[a]=new v(a,4,!1,a,null,!1)});["cols","rows","size","span"].forEach(function(a){C[a]=new v(a,6,!1,a,null,!1)});["rowSpan","start"].forEach(function(a){C[a]=new v(a,5,!1,a.toLowerCase(),null,!1)});var Ua=/[\-:]([a-z])/g;function Va(a){return a[1].toUpperCase()}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a){var b=a.replace(Ua,
Va);C[b]=new v(b,1,!1,a,null,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a){var b=a.replace(Ua,Va);C[b]=new v(b,1,!1,a,"http://www.w3.org/1999/xlink",!1)});["xml:base","xml:lang","xml:space"].forEach(function(a){var b=a.replace(Ua,Va);C[b]=new v(b,1,!1,a,"http://www.w3.org/XML/1998/namespace",!1)});["tabIndex","crossOrigin"].forEach(function(a){C[a]=new v(a,1,!1,a.toLowerCase(),null,!1)});
C.xlinkHref=new v("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0);["src","href","action","formAction"].forEach(function(a){C[a]=new v(a,1,!1,a.toLowerCase(),null,!0)});var Wa=aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;Wa.hasOwnProperty("ReactCurrentDispatcher")||(Wa.ReactCurrentDispatcher={current:null});Wa.hasOwnProperty("ReactCurrentBatchConfig")||(Wa.ReactCurrentBatchConfig={suspense:null});
function Xa(a,b,c,d){var e=C.hasOwnProperty(b)?C[b]:null;var f=null!==e?0===e.type:d?!1:!(2<b.length)||"o"!==b[0]&&"O"!==b[0]||"n"!==b[1]&&"N"!==b[1]?!1:!0;f||(Ta(b,c,e,d)&&(c=null),d||null===e?Ra(b)&&(null===c?a.removeAttribute(b):a.setAttribute(b,""+c)):e.mustUseProperty?a[e.propertyName]=null===c?3===e.type?!1:"":c:(b=e.attributeName,d=e.attributeNamespace,null===c?a.removeAttribute(b):(e=e.type,c=3===e||4===e&&!0===c?"":""+c,d?a.setAttributeNS(d,b,c):a.setAttribute(b,c))))}
var Ya=/^(.*)[\\\/]/,E="function"===typeof Symbol&&Symbol.for,Za=E?Symbol.for("react.element"):60103,$a=E?Symbol.for("react.portal"):60106,ab=E?Symbol.for("react.fragment"):60107,bb=E?Symbol.for("react.strict_mode"):60108,cb=E?Symbol.for("react.profiler"):60114,db=E?Symbol.for("react.provider"):60109,eb=E?Symbol.for("react.context"):60110,fb=E?Symbol.for("react.concurrent_mode"):60111,gb=E?Symbol.for("react.forward_ref"):60112,hb=E?Symbol.for("react.suspense"):60113,ib=E?Symbol.for("react.suspense_list"):
60120,jb=E?Symbol.for("react.memo"):60115,kb=E?Symbol.for("react.lazy"):60116,lb=E?Symbol.for("react.block"):60121,mb="function"===typeof Symbol&&Symbol.iterator;function nb(a){if(null===a||"object"!==typeof a)return null;a=mb&&a[mb]||a["@@iterator"];return"function"===typeof a?a:null}function ob(a){if(-1===a._status){a._status=0;var b=a._ctor;b=b();a._result=b;b.then(function(b){0===a._status&&(b=b.default,a._status=1,a._result=b)},function(b){0===a._status&&(a._status=2,a._result=b)})}}
function pb(a){if(null==a)return null;if("function"===typeof a)return a.displayName||a.name||null;if("string"===typeof a)return a;switch(a){case ab:return"Fragment";case $a:return"Portal";case cb:return"Profiler";case bb:return"StrictMode";case hb:return"Suspense";case ib:return"SuspenseList"}if("object"===typeof a)switch(a.$$typeof){case eb:return"Context.Consumer";case db:return"Context.Provider";case gb:var b=a.render;b=b.displayName||b.name||"";return a.displayName||(""!==b?"ForwardRef("+b+")":
"ForwardRef");case jb:return pb(a.type);case lb:return pb(a.render);case kb:if(a=1===a._status?a._result:null)return pb(a)}return null}function qb(a){var b="";do{a:switch(a.tag){case 3:case 4:case 6:case 7:case 10:case 9:var c="";break a;default:var d=a._debugOwner,e=a._debugSource,f=pb(a.type);c=null;d&&(c=pb(d.type));d=f;f="";e?f=" (at "+e.fileName.replace(Ya,"")+":"+e.lineNumber+")":c&&(f=" (created by "+c+")");c="\n    in "+(d||"Unknown")+f}b+=c;a=a.return}while(a);return b}
function rb(a){switch(typeof a){case "boolean":case "number":case "object":case "string":case "undefined":return a;default:return""}}function sb(a){var b=a.type;return(a=a.nodeName)&&"input"===a.toLowerCase()&&("checkbox"===b||"radio"===b)}
function tb(a){var b=sb(a)?"checked":"value",c=Object.getOwnPropertyDescriptor(a.constructor.prototype,b),d=""+a[b];if(!a.hasOwnProperty(b)&&"undefined"!==typeof c&&"function"===typeof c.get&&"function"===typeof c.set){var e=c.get,f=c.set;Object.defineProperty(a,b,{configurable:!0,get:function(){return e.call(this)},set:function(a){d=""+a;f.call(this,a)}});Object.defineProperty(a,b,{enumerable:c.enumerable});return{getValue:function(){return d},setValue:function(a){d=""+a},stopTracking:function(){a._valueTracker=
null;delete a[b]}}}}function xb(a){a._valueTracker||(a._valueTracker=tb(a))}function yb(a){if(!a)return!1;var b=a._valueTracker;if(!b)return!0;var c=b.getValue();var d="";a&&(d=sb(a)?a.checked?"true":"false":a.value);a=d;return a!==c?(b.setValue(a),!0):!1}function zb(a,b){var c=b.checked;return n({},b,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=c?c:a._wrapperState.initialChecked})}
function Ab(a,b){var c=null==b.defaultValue?"":b.defaultValue,d=null!=b.checked?b.checked:b.defaultChecked;c=rb(null!=b.value?b.value:c);a._wrapperState={initialChecked:d,initialValue:c,controlled:"checkbox"===b.type||"radio"===b.type?null!=b.checked:null!=b.value}}function Bb(a,b){b=b.checked;null!=b&&Xa(a,"checked",b,!1)}
function Cb(a,b){Bb(a,b);var c=rb(b.value),d=b.type;if(null!=c)if("number"===d){if(0===c&&""===a.value||a.value!=c)a.value=""+c}else a.value!==""+c&&(a.value=""+c);else if("submit"===d||"reset"===d){a.removeAttribute("value");return}b.hasOwnProperty("value")?Db(a,b.type,c):b.hasOwnProperty("defaultValue")&&Db(a,b.type,rb(b.defaultValue));null==b.checked&&null!=b.defaultChecked&&(a.defaultChecked=!!b.defaultChecked)}
function Eb(a,b,c){if(b.hasOwnProperty("value")||b.hasOwnProperty("defaultValue")){var d=b.type;if(!("submit"!==d&&"reset"!==d||void 0!==b.value&&null!==b.value))return;b=""+a._wrapperState.initialValue;c||b===a.value||(a.value=b);a.defaultValue=b}c=a.name;""!==c&&(a.name="");a.defaultChecked=!!a._wrapperState.initialChecked;""!==c&&(a.name=c)}
function Db(a,b,c){if("number"!==b||a.ownerDocument.activeElement!==a)null==c?a.defaultValue=""+a._wrapperState.initialValue:a.defaultValue!==""+c&&(a.defaultValue=""+c)}function Fb(a){var b="";aa.Children.forEach(a,function(a){null!=a&&(b+=a)});return b}function Gb(a,b){a=n({children:void 0},b);if(b=Fb(b.children))a.children=b;return a}
function Hb(a,b,c,d){a=a.options;if(b){b={};for(var e=0;e<c.length;e++)b["$"+c[e]]=!0;for(c=0;c<a.length;c++)e=b.hasOwnProperty("$"+a[c].value),a[c].selected!==e&&(a[c].selected=e),e&&d&&(a[c].defaultSelected=!0)}else{c=""+rb(c);b=null;for(e=0;e<a.length;e++){if(a[e].value===c){a[e].selected=!0;d&&(a[e].defaultSelected=!0);return}null!==b||a[e].disabled||(b=a[e])}null!==b&&(b.selected=!0)}}
function Ib(a,b){if(null!=b.dangerouslySetInnerHTML)throw Error(u(91));return n({},b,{value:void 0,defaultValue:void 0,children:""+a._wrapperState.initialValue})}function Jb(a,b){var c=b.value;if(null==c){c=b.children;b=b.defaultValue;if(null!=c){if(null!=b)throw Error(u(92));if(Array.isArray(c)){if(!(1>=c.length))throw Error(u(93));c=c[0]}b=c}null==b&&(b="");c=b}a._wrapperState={initialValue:rb(c)}}
function Kb(a,b){var c=rb(b.value),d=rb(b.defaultValue);null!=c&&(c=""+c,c!==a.value&&(a.value=c),null==b.defaultValue&&a.defaultValue!==c&&(a.defaultValue=c));null!=d&&(a.defaultValue=""+d)}function Lb(a){var b=a.textContent;b===a._wrapperState.initialValue&&""!==b&&null!==b&&(a.value=b)}var Mb={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};
function Nb(a){switch(a){case "svg":return"http://www.w3.org/2000/svg";case "math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ob(a,b){return null==a||"http://www.w3.org/1999/xhtml"===a?Nb(b):"http://www.w3.org/2000/svg"===a&&"foreignObject"===b?"http://www.w3.org/1999/xhtml":a}
var Pb,Qb=function(a){return"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(b,c,d,e){MSApp.execUnsafeLocalFunction(function(){return a(b,c,d,e)})}:a}(function(a,b){if(a.namespaceURI!==Mb.svg||"innerHTML"in a)a.innerHTML=b;else{Pb=Pb||document.createElement("div");Pb.innerHTML="<svg>"+b.valueOf().toString()+"</svg>";for(b=Pb.firstChild;a.firstChild;)a.removeChild(a.firstChild);for(;b.firstChild;)a.appendChild(b.firstChild)}});
function Rb(a,b){if(b){var c=a.firstChild;if(c&&c===a.lastChild&&3===c.nodeType){c.nodeValue=b;return}}a.textContent=b}function Sb(a,b){var c={};c[a.toLowerCase()]=b.toLowerCase();c["Webkit"+a]="webkit"+b;c["Moz"+a]="moz"+b;return c}var Tb={animationend:Sb("Animation","AnimationEnd"),animationiteration:Sb("Animation","AnimationIteration"),animationstart:Sb("Animation","AnimationStart"),transitionend:Sb("Transition","TransitionEnd")},Ub={},Vb={};
ya&&(Vb=document.createElement("div").style,"AnimationEvent"in window||(delete Tb.animationend.animation,delete Tb.animationiteration.animation,delete Tb.animationstart.animation),"TransitionEvent"in window||delete Tb.transitionend.transition);function Wb(a){if(Ub[a])return Ub[a];if(!Tb[a])return a;var b=Tb[a],c;for(c in b)if(b.hasOwnProperty(c)&&c in Vb)return Ub[a]=b[c];return a}
var Xb=Wb("animationend"),Yb=Wb("animationiteration"),Zb=Wb("animationstart"),$b=Wb("transitionend"),ac="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),bc=new ("function"===typeof WeakMap?WeakMap:Map);function cc(a){var b=bc.get(a);void 0===b&&(b=new Map,bc.set(a,b));return b}
function dc(a){var b=a,c=a;if(a.alternate)for(;b.return;)b=b.return;else{a=b;do b=a,0!==(b.effectTag&1026)&&(c=b.return),a=b.return;while(a)}return 3===b.tag?c:null}function ec(a){if(13===a.tag){var b=a.memoizedState;null===b&&(a=a.alternate,null!==a&&(b=a.memoizedState));if(null!==b)return b.dehydrated}return null}function fc(a){if(dc(a)!==a)throw Error(u(188));}
function gc(a){var b=a.alternate;if(!b){b=dc(a);if(null===b)throw Error(u(188));return b!==a?null:a}for(var c=a,d=b;;){var e=c.return;if(null===e)break;var f=e.alternate;if(null===f){d=e.return;if(null!==d){c=d;continue}break}if(e.child===f.child){for(f=e.child;f;){if(f===c)return fc(e),a;if(f===d)return fc(e),b;f=f.sibling}throw Error(u(188));}if(c.return!==d.return)c=e,d=f;else{for(var g=!1,h=e.child;h;){if(h===c){g=!0;c=e;d=f;break}if(h===d){g=!0;d=e;c=f;break}h=h.sibling}if(!g){for(h=f.child;h;){if(h===
c){g=!0;c=f;d=e;break}if(h===d){g=!0;d=f;c=e;break}h=h.sibling}if(!g)throw Error(u(189));}}if(c.alternate!==d)throw Error(u(190));}if(3!==c.tag)throw Error(u(188));return c.stateNode.current===c?a:b}function hc(a){a=gc(a);if(!a)return null;for(var b=a;;){if(5===b.tag||6===b.tag)return b;if(b.child)b.child.return=b,b=b.child;else{if(b===a)break;for(;!b.sibling;){if(!b.return||b.return===a)return null;b=b.return}b.sibling.return=b.return;b=b.sibling}}return null}
function ic(a,b){if(null==b)throw Error(u(30));if(null==a)return b;if(Array.isArray(a)){if(Array.isArray(b))return a.push.apply(a,b),a;a.push(b);return a}return Array.isArray(b)?[a].concat(b):[a,b]}function jc(a,b,c){Array.isArray(a)?a.forEach(b,c):a&&b.call(c,a)}var kc=null;
function lc(a){if(a){var b=a._dispatchListeners,c=a._dispatchInstances;if(Array.isArray(b))for(var d=0;d<b.length&&!a.isPropagationStopped();d++)oa(a,b[d],c[d]);else b&&oa(a,b,c);a._dispatchListeners=null;a._dispatchInstances=null;a.isPersistent()||a.constructor.release(a)}}function mc(a){null!==a&&(kc=ic(kc,a));a=kc;kc=null;if(a){jc(a,lc);if(kc)throw Error(u(95));if(fa)throw a=ha,fa=!1,ha=null,a;}}
function nc(a){a=a.target||a.srcElement||window;a.correspondingUseElement&&(a=a.correspondingUseElement);return 3===a.nodeType?a.parentNode:a}function oc(a){if(!ya)return!1;a="on"+a;var b=a in document;b||(b=document.createElement("div"),b.setAttribute(a,"return;"),b="function"===typeof b[a]);return b}var pc=[];function qc(a){a.topLevelType=null;a.nativeEvent=null;a.targetInst=null;a.ancestors.length=0;10>pc.length&&pc.push(a)}
function rc(a,b,c,d){if(pc.length){var e=pc.pop();e.topLevelType=a;e.eventSystemFlags=d;e.nativeEvent=b;e.targetInst=c;return e}return{topLevelType:a,eventSystemFlags:d,nativeEvent:b,targetInst:c,ancestors:[]}}
function sc(a){var b=a.targetInst,c=b;do{if(!c){a.ancestors.push(c);break}var d=c;if(3===d.tag)d=d.stateNode.containerInfo;else{for(;d.return;)d=d.return;d=3!==d.tag?null:d.stateNode.containerInfo}if(!d)break;b=c.tag;5!==b&&6!==b||a.ancestors.push(c);c=tc(d)}while(c);for(c=0;c<a.ancestors.length;c++){b=a.ancestors[c];var e=nc(a.nativeEvent);d=a.topLevelType;var f=a.nativeEvent,g=a.eventSystemFlags;0===c&&(g|=64);for(var h=null,k=0;k<sa.length;k++){var l=sa[k];l&&(l=l.extractEvents(d,b,f,e,g))&&(h=
ic(h,l))}mc(h)}}function uc(a,b,c){if(!c.has(a)){switch(a){case "scroll":vc(b,"scroll",!0);break;case "focus":case "blur":vc(b,"focus",!0);vc(b,"blur",!0);c.set("blur",null);c.set("focus",null);break;case "cancel":case "close":oc(a)&&vc(b,a,!0);break;case "invalid":case "submit":case "reset":break;default:-1===ac.indexOf(a)&&F(a,b)}c.set(a,null)}}
var wc,xc,yc,zc=!1,Ac=[],Bc=null,Cc=null,Dc=null,Ec=new Map,Fc=new Map,Gc=[],Hc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput close cancel copy cut paste click change contextmenu reset submit".split(" "),Ic="focus blur dragenter dragleave mouseover mouseout pointerover pointerout gotpointercapture lostpointercapture".split(" ");
function Jc(a,b){var c=cc(b);Hc.forEach(function(a){uc(a,b,c)});Ic.forEach(function(a){uc(a,b,c)})}function Kc(a,b,c,d,e){return{blockedOn:a,topLevelType:b,eventSystemFlags:c|32,nativeEvent:e,container:d}}
function Lc(a,b){switch(a){case "focus":case "blur":Bc=null;break;case "dragenter":case "dragleave":Cc=null;break;case "mouseover":case "mouseout":Dc=null;break;case "pointerover":case "pointerout":Ec.delete(b.pointerId);break;case "gotpointercapture":case "lostpointercapture":Fc.delete(b.pointerId)}}function Mc(a,b,c,d,e,f){if(null===a||a.nativeEvent!==f)return a=Kc(b,c,d,e,f),null!==b&&(b=Nc(b),null!==b&&xc(b)),a;a.eventSystemFlags|=d;return a}
function Oc(a,b,c,d,e){switch(b){case "focus":return Bc=Mc(Bc,a,b,c,d,e),!0;case "dragenter":return Cc=Mc(Cc,a,b,c,d,e),!0;case "mouseover":return Dc=Mc(Dc,a,b,c,d,e),!0;case "pointerover":var f=e.pointerId;Ec.set(f,Mc(Ec.get(f)||null,a,b,c,d,e));return!0;case "gotpointercapture":return f=e.pointerId,Fc.set(f,Mc(Fc.get(f)||null,a,b,c,d,e)),!0}return!1}
function Pc(a){var b=tc(a.target);if(null!==b){var c=dc(b);if(null!==c)if(b=c.tag,13===b){if(b=ec(c),null!==b){a.blockedOn=b;r.unstable_runWithPriority(a.priority,function(){yc(c)});return}}else if(3===b&&c.stateNode.hydrate){a.blockedOn=3===c.tag?c.stateNode.containerInfo:null;return}}a.blockedOn=null}function Qc(a){if(null!==a.blockedOn)return!1;var b=Rc(a.topLevelType,a.eventSystemFlags,a.container,a.nativeEvent);if(null!==b){var c=Nc(b);null!==c&&xc(c);a.blockedOn=b;return!1}return!0}
function Sc(a,b,c){Qc(a)&&c.delete(b)}function Tc(){for(zc=!1;0<Ac.length;){var a=Ac[0];if(null!==a.blockedOn){a=Nc(a.blockedOn);null!==a&&wc(a);break}var b=Rc(a.topLevelType,a.eventSystemFlags,a.container,a.nativeEvent);null!==b?a.blockedOn=b:Ac.shift()}null!==Bc&&Qc(Bc)&&(Bc=null);null!==Cc&&Qc(Cc)&&(Cc=null);null!==Dc&&Qc(Dc)&&(Dc=null);Ec.forEach(Sc);Fc.forEach(Sc)}function Uc(a,b){a.blockedOn===b&&(a.blockedOn=null,zc||(zc=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Tc)))}
function Vc(a){function b(b){return Uc(b,a)}if(0<Ac.length){Uc(Ac[0],a);for(var c=1;c<Ac.length;c++){var d=Ac[c];d.blockedOn===a&&(d.blockedOn=null)}}null!==Bc&&Uc(Bc,a);null!==Cc&&Uc(Cc,a);null!==Dc&&Uc(Dc,a);Ec.forEach(b);Fc.forEach(b);for(c=0;c<Gc.length;c++)d=Gc[c],d.blockedOn===a&&(d.blockedOn=null);for(;0<Gc.length&&(c=Gc[0],null===c.blockedOn);)Pc(c),null===c.blockedOn&&Gc.shift()}
var Wc={},Yc=new Map,Zc=new Map,$c=["abort","abort",Xb,"animationEnd",Yb,"animationIteration",Zb,"animationStart","canplay","canPlay","canplaythrough","canPlayThrough","durationchange","durationChange","emptied","emptied","encrypted","encrypted","ended","ended","error","error","gotpointercapture","gotPointerCapture","load","load","loadeddata","loadedData","loadedmetadata","loadedMetadata","loadstart","loadStart","lostpointercapture","lostPointerCapture","playing","playing","progress","progress","seeking",
"seeking","stalled","stalled","suspend","suspend","timeupdate","timeUpdate",$b,"transitionEnd","waiting","waiting"];function ad(a,b){for(var c=0;c<a.length;c+=2){var d=a[c],e=a[c+1],f="on"+(e[0].toUpperCase()+e.slice(1));f={phasedRegistrationNames:{bubbled:f,captured:f+"Capture"},dependencies:[d],eventPriority:b};Zc.set(d,b);Yc.set(d,f);Wc[e]=f}}
ad("blur blur cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focus focus input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "),0);
ad("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "),1);ad($c,2);for(var bd="change selectionchange textInput compositionstart compositionend compositionupdate".split(" "),cd=0;cd<bd.length;cd++)Zc.set(bd[cd],0);
var dd=r.unstable_UserBlockingPriority,ed=r.unstable_runWithPriority,fd=!0;function F(a,b){vc(b,a,!1)}function vc(a,b,c){var d=Zc.get(b);switch(void 0===d?2:d){case 0:d=gd.bind(null,b,1,a);break;case 1:d=hd.bind(null,b,1,a);break;default:d=id.bind(null,b,1,a)}c?a.addEventListener(b,d,!0):a.addEventListener(b,d,!1)}function gd(a,b,c,d){Ja||Ha();var e=id,f=Ja;Ja=!0;try{Ga(e,a,b,c,d)}finally{(Ja=f)||La()}}function hd(a,b,c,d){ed(dd,id.bind(null,a,b,c,d))}
function id(a,b,c,d){if(fd)if(0<Ac.length&&-1<Hc.indexOf(a))a=Kc(null,a,b,c,d),Ac.push(a);else{var e=Rc(a,b,c,d);if(null===e)Lc(a,d);else if(-1<Hc.indexOf(a))a=Kc(e,a,b,c,d),Ac.push(a);else if(!Oc(e,a,b,c,d)){Lc(a,d);a=rc(a,d,null,b);try{Ma(sc,a)}finally{qc(a)}}}}
function Rc(a,b,c,d){c=nc(d);c=tc(c);if(null!==c){var e=dc(c);if(null===e)c=null;else{var f=e.tag;if(13===f){c=ec(e);if(null!==c)return c;c=null}else if(3===f){if(e.stateNode.hydrate)return 3===e.tag?e.stateNode.containerInfo:null;c=null}else e!==c&&(c=null)}}a=rc(a,d,c,b);try{Ma(sc,a)}finally{qc(a)}return null}
var jd={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,
floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},kd=["Webkit","ms","Moz","O"];Object.keys(jd).forEach(function(a){kd.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1);jd[b]=jd[a]})});function ld(a,b,c){return null==b||"boolean"===typeof b||""===b?"":c||"number"!==typeof b||0===b||jd.hasOwnProperty(a)&&jd[a]?(""+b).trim():b+"px"}
function md(a,b){a=a.style;for(var c in b)if(b.hasOwnProperty(c)){var d=0===c.indexOf("--"),e=ld(c,b[c],d);"float"===c&&(c="cssFloat");d?a.setProperty(c,e):a[c]=e}}var nd=n({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});
function od(a,b){if(b){if(nd[a]&&(null!=b.children||null!=b.dangerouslySetInnerHTML))throw Error(u(137,a,""));if(null!=b.dangerouslySetInnerHTML){if(null!=b.children)throw Error(u(60));if(!("object"===typeof b.dangerouslySetInnerHTML&&"__html"in b.dangerouslySetInnerHTML))throw Error(u(61));}if(null!=b.style&&"object"!==typeof b.style)throw Error(u(62,""));}}
function pd(a,b){if(-1===a.indexOf("-"))return"string"===typeof b.is;switch(a){case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":return!1;default:return!0}}var qd=Mb.html;function rd(a,b){a=9===a.nodeType||11===a.nodeType?a:a.ownerDocument;var c=cc(a);b=wa[b];for(var d=0;d<b.length;d++)uc(b[d],a,c)}function sd(){}
function td(a){a=a||("undefined"!==typeof document?document:void 0);if("undefined"===typeof a)return null;try{return a.activeElement||a.body}catch(b){return a.body}}function ud(a){for(;a&&a.firstChild;)a=a.firstChild;return a}function vd(a,b){var c=ud(a);a=0;for(var d;c;){if(3===c.nodeType){d=a+c.textContent.length;if(a<=b&&d>=b)return{node:c,offset:b-a};a=d}a:{for(;c;){if(c.nextSibling){c=c.nextSibling;break a}c=c.parentNode}c=void 0}c=ud(c)}}
function wd(a,b){return a&&b?a===b?!0:a&&3===a.nodeType?!1:b&&3===b.nodeType?wd(a,b.parentNode):"contains"in a?a.contains(b):a.compareDocumentPosition?!!(a.compareDocumentPosition(b)&16):!1:!1}function xd(){for(var a=window,b=td();b instanceof a.HTMLIFrameElement;){try{var c="string"===typeof b.contentWindow.location.href}catch(d){c=!1}if(c)a=b.contentWindow;else break;b=td(a.document)}return b}
function yd(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return b&&("input"===b&&("text"===a.type||"search"===a.type||"tel"===a.type||"url"===a.type||"password"===a.type)||"textarea"===b||"true"===a.contentEditable)}var zd="$",Ad="/$",Bd="$?",Cd="$!",Dd=null,Ed=null;function Fd(a,b){switch(a){case "button":case "input":case "select":case "textarea":return!!b.autoFocus}return!1}
function Gd(a,b){return"textarea"===a||"option"===a||"noscript"===a||"string"===typeof b.children||"number"===typeof b.children||"object"===typeof b.dangerouslySetInnerHTML&&null!==b.dangerouslySetInnerHTML&&null!=b.dangerouslySetInnerHTML.__html}var Hd="function"===typeof setTimeout?setTimeout:void 0,Id="function"===typeof clearTimeout?clearTimeout:void 0;function Jd(a){for(;null!=a;a=a.nextSibling){var b=a.nodeType;if(1===b||3===b)break}return a}
function Kd(a){a=a.previousSibling;for(var b=0;a;){if(8===a.nodeType){var c=a.data;if(c===zd||c===Cd||c===Bd){if(0===b)return a;b--}else c===Ad&&b++}a=a.previousSibling}return null}var Ld=Math.random().toString(36).slice(2),Md="__reactInternalInstance$"+Ld,Nd="__reactEventHandlers$"+Ld,Od="__reactContainere$"+Ld;
function tc(a){var b=a[Md];if(b)return b;for(var c=a.parentNode;c;){if(b=c[Od]||c[Md]){c=b.alternate;if(null!==b.child||null!==c&&null!==c.child)for(a=Kd(a);null!==a;){if(c=a[Md])return c;a=Kd(a)}return b}a=c;c=a.parentNode}return null}function Nc(a){a=a[Md]||a[Od];return!a||5!==a.tag&&6!==a.tag&&13!==a.tag&&3!==a.tag?null:a}function Pd(a){if(5===a.tag||6===a.tag)return a.stateNode;throw Error(u(33));}function Qd(a){return a[Nd]||null}
function Rd(a){do a=a.return;while(a&&5!==a.tag);return a?a:null}
function Sd(a,b){var c=a.stateNode;if(!c)return null;var d=la(c);if(!d)return null;c=d[b];a:switch(b){case "onClick":case "onClickCapture":case "onDoubleClick":case "onDoubleClickCapture":case "onMouseDown":case "onMouseDownCapture":case "onMouseMove":case "onMouseMoveCapture":case "onMouseUp":case "onMouseUpCapture":case "onMouseEnter":(d=!d.disabled)||(a=a.type,d=!("button"===a||"input"===a||"select"===a||"textarea"===a));a=!d;break a;default:a=!1}if(a)return null;if(c&&"function"!==typeof c)throw Error(u(231,
b,typeof c));return c}function Td(a,b,c){if(b=Sd(a,c.dispatchConfig.phasedRegistrationNames[b]))c._dispatchListeners=ic(c._dispatchListeners,b),c._dispatchInstances=ic(c._dispatchInstances,a)}function Ud(a){if(a&&a.dispatchConfig.phasedRegistrationNames){for(var b=a._targetInst,c=[];b;)c.push(b),b=Rd(b);for(b=c.length;0<b--;)Td(c[b],"captured",a);for(b=0;b<c.length;b++)Td(c[b],"bubbled",a)}}
function Vd(a,b,c){a&&c&&c.dispatchConfig.registrationName&&(b=Sd(a,c.dispatchConfig.registrationName))&&(c._dispatchListeners=ic(c._dispatchListeners,b),c._dispatchInstances=ic(c._dispatchInstances,a))}function Wd(a){a&&a.dispatchConfig.registrationName&&Vd(a._targetInst,null,a)}function Xd(a){jc(a,Ud)}var Yd=null,Zd=null,$d=null;
function ae(){if($d)return $d;var a,b=Zd,c=b.length,d,e="value"in Yd?Yd.value:Yd.textContent,f=e.length;for(a=0;a<c&&b[a]===e[a];a++);var g=c-a;for(d=1;d<=g&&b[c-d]===e[f-d];d++);return $d=e.slice(a,1<d?1-d:void 0)}function be(){return!0}function ce(){return!1}
function G(a,b,c,d){this.dispatchConfig=a;this._targetInst=b;this.nativeEvent=c;a=this.constructor.Interface;for(var e in a)a.hasOwnProperty(e)&&((b=a[e])?this[e]=b(c):"target"===e?this.target=d:this[e]=c[e]);this.isDefaultPrevented=(null!=c.defaultPrevented?c.defaultPrevented:!1===c.returnValue)?be:ce;this.isPropagationStopped=ce;return this}
n(G.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():"unknown"!==typeof a.returnValue&&(a.returnValue=!1),this.isDefaultPrevented=be)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():"unknown"!==typeof a.cancelBubble&&(a.cancelBubble=!0),this.isPropagationStopped=be)},persist:function(){this.isPersistent=be},isPersistent:ce,destructor:function(){var a=this.constructor.Interface,
b;for(b in a)this[b]=null;this.nativeEvent=this._targetInst=this.dispatchConfig=null;this.isPropagationStopped=this.isDefaultPrevented=ce;this._dispatchInstances=this._dispatchListeners=null}});G.Interface={type:null,target:null,currentTarget:function(){return null},eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(a){return a.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null};
G.extend=function(a){function b(){}function c(){return d.apply(this,arguments)}var d=this;b.prototype=d.prototype;var e=new b;n(e,c.prototype);c.prototype=e;c.prototype.constructor=c;c.Interface=n({},d.Interface,a);c.extend=d.extend;de(c);return c};de(G);function ee(a,b,c,d){if(this.eventPool.length){var e=this.eventPool.pop();this.call(e,a,b,c,d);return e}return new this(a,b,c,d)}
function fe(a){if(!(a instanceof this))throw Error(u(279));a.destructor();10>this.eventPool.length&&this.eventPool.push(a)}function de(a){a.eventPool=[];a.getPooled=ee;a.release=fe}var ge=G.extend({data:null}),he=G.extend({data:null}),ie=[9,13,27,32],je=ya&&"CompositionEvent"in window,ke=null;ya&&"documentMode"in document&&(ke=document.documentMode);
var le=ya&&"TextEvent"in window&&!ke,me=ya&&(!je||ke&&8<ke&&11>=ke),ne=String.fromCharCode(32),oe={beforeInput:{phasedRegistrationNames:{bubbled:"onBeforeInput",captured:"onBeforeInputCapture"},dependencies:["compositionend","keypress","textInput","paste"]},compositionEnd:{phasedRegistrationNames:{bubbled:"onCompositionEnd",captured:"onCompositionEndCapture"},dependencies:"blur compositionend keydown keypress keyup mousedown".split(" ")},compositionStart:{phasedRegistrationNames:{bubbled:"onCompositionStart",
captured:"onCompositionStartCapture"},dependencies:"blur compositionstart keydown keypress keyup mousedown".split(" ")},compositionUpdate:{phasedRegistrationNames:{bubbled:"onCompositionUpdate",captured:"onCompositionUpdateCapture"},dependencies:"blur compositionupdate keydown keypress keyup mousedown".split(" ")}},pe=!1;
function qe(a,b){switch(a){case "keyup":return-1!==ie.indexOf(b.keyCode);case "keydown":return 229!==b.keyCode;case "keypress":case "mousedown":case "blur":return!0;default:return!1}}function re(a){a=a.detail;return"object"===typeof a&&"data"in a?a.data:null}var se=!1;function te(a,b){switch(a){case "compositionend":return re(b);case "keypress":if(32!==b.which)return null;pe=!0;return ne;case "textInput":return a=b.data,a===ne&&pe?null:a;default:return null}}
function ue(a,b){if(se)return"compositionend"===a||!je&&qe(a,b)?(a=ae(),$d=Zd=Yd=null,se=!1,a):null;switch(a){case "paste":return null;case "keypress":if(!(b.ctrlKey||b.altKey||b.metaKey)||b.ctrlKey&&b.altKey){if(b.char&&1<b.char.length)return b.char;if(b.which)return String.fromCharCode(b.which)}return null;case "compositionend":return me&&"ko"!==b.locale?null:b.data;default:return null}}
var ve={eventTypes:oe,extractEvents:function(a,b,c,d){var e;if(je)b:{switch(a){case "compositionstart":var f=oe.compositionStart;break b;case "compositionend":f=oe.compositionEnd;break b;case "compositionupdate":f=oe.compositionUpdate;break b}f=void 0}else se?qe(a,c)&&(f=oe.compositionEnd):"keydown"===a&&229===c.keyCode&&(f=oe.compositionStart);f?(me&&"ko"!==c.locale&&(se||f!==oe.compositionStart?f===oe.compositionEnd&&se&&(e=ae()):(Yd=d,Zd="value"in Yd?Yd.value:Yd.textContent,se=!0)),f=ge.getPooled(f,
b,c,d),e?f.data=e:(e=re(c),null!==e&&(f.data=e)),Xd(f),e=f):e=null;(a=le?te(a,c):ue(a,c))?(b=he.getPooled(oe.beforeInput,b,c,d),b.data=a,Xd(b)):b=null;return null===e?b:null===b?e:[e,b]}},we={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xe(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return"input"===b?!!we[a.type]:"textarea"===b?!0:!1}
var ye={change:{phasedRegistrationNames:{bubbled:"onChange",captured:"onChangeCapture"},dependencies:"blur change click focus input keydown keyup selectionchange".split(" ")}};function ze(a,b,c){a=G.getPooled(ye.change,a,b,c);a.type="change";Da(c);Xd(a);return a}var Ae=null,Be=null;function Ce(a){mc(a)}function De(a){var b=Pd(a);if(yb(b))return a}function Ee(a,b){if("change"===a)return b}var Fe=!1;ya&&(Fe=oc("input")&&(!document.documentMode||9<document.documentMode));
function Ge(){Ae&&(Ae.detachEvent("onpropertychange",He),Be=Ae=null)}function He(a){if("value"===a.propertyName&&De(Be))if(a=ze(Be,a,nc(a)),Ja)mc(a);else{Ja=!0;try{Fa(Ce,a)}finally{Ja=!1,La()}}}function Ie(a,b,c){"focus"===a?(Ge(),Ae=b,Be=c,Ae.attachEvent("onpropertychange",He)):"blur"===a&&Ge()}function Je(a){if("selectionchange"===a||"keyup"===a||"keydown"===a)return De(Be)}function Ke(a,b){if("click"===a)return De(b)}function Le(a,b){if("input"===a||"change"===a)return De(b)}
var Me={eventTypes:ye,_isInputEventSupported:Fe,extractEvents:function(a,b,c,d){var e=b?Pd(b):window,f=e.nodeName&&e.nodeName.toLowerCase();if("select"===f||"input"===f&&"file"===e.type)var g=Ee;else if(xe(e))if(Fe)g=Le;else{g=Je;var h=Ie}else(f=e.nodeName)&&"input"===f.toLowerCase()&&("checkbox"===e.type||"radio"===e.type)&&(g=Ke);if(g&&(g=g(a,b)))return ze(g,c,d);h&&h(a,e,b);"blur"===a&&(a=e._wrapperState)&&a.controlled&&"number"===e.type&&Db(e,"number",e.value)}},Ne=G.extend({view:null,detail:null}),
Oe={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Pe(a){var b=this.nativeEvent;return b.getModifierState?b.getModifierState(a):(a=Oe[a])?!!b[a]:!1}function Qe(){return Pe}
var Re=0,Se=0,Te=!1,Ue=!1,Ve=Ne.extend({screenX:null,screenY:null,clientX:null,clientY:null,pageX:null,pageY:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,getModifierState:Qe,button:null,buttons:null,relatedTarget:function(a){return a.relatedTarget||(a.fromElement===a.srcElement?a.toElement:a.fromElement)},movementX:function(a){if("movementX"in a)return a.movementX;var b=Re;Re=a.screenX;return Te?"mousemove"===a.type?a.screenX-b:0:(Te=!0,0)},movementY:function(a){if("movementY"in a)return a.movementY;
var b=Se;Se=a.screenY;return Ue?"mousemove"===a.type?a.screenY-b:0:(Ue=!0,0)}}),We=Ve.extend({pointerId:null,width:null,height:null,pressure:null,tangentialPressure:null,tiltX:null,tiltY:null,twist:null,pointerType:null,isPrimary:null}),Xe={mouseEnter:{registrationName:"onMouseEnter",dependencies:["mouseout","mouseover"]},mouseLeave:{registrationName:"onMouseLeave",dependencies:["mouseout","mouseover"]},pointerEnter:{registrationName:"onPointerEnter",dependencies:["pointerout","pointerover"]},pointerLeave:{registrationName:"onPointerLeave",
dependencies:["pointerout","pointerover"]}},Ye={eventTypes:Xe,extractEvents:function(a,b,c,d,e){var f="mouseover"===a||"pointerover"===a,g="mouseout"===a||"pointerout"===a;if(f&&0===(e&32)&&(c.relatedTarget||c.fromElement)||!g&&!f)return null;f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window;if(g){if(g=b,b=(b=c.relatedTarget||c.toElement)?tc(b):null,null!==b){var h=dc(b);if(b!==h||5!==b.tag&&6!==b.tag)b=null}}else g=null;if(g===b)return null;if("mouseout"===a||"mouseover"===
a){var k=Ve;var l=Xe.mouseLeave;var m=Xe.mouseEnter;var p="mouse"}else if("pointerout"===a||"pointerover"===a)k=We,l=Xe.pointerLeave,m=Xe.pointerEnter,p="pointer";a=null==g?f:Pd(g);f=null==b?f:Pd(b);l=k.getPooled(l,g,c,d);l.type=p+"leave";l.target=a;l.relatedTarget=f;c=k.getPooled(m,b,c,d);c.type=p+"enter";c.target=f;c.relatedTarget=a;d=g;p=b;if(d&&p)a:{k=d;m=p;g=0;for(a=k;a;a=Rd(a))g++;a=0;for(b=m;b;b=Rd(b))a++;for(;0<g-a;)k=Rd(k),g--;for(;0<a-g;)m=Rd(m),a--;for(;g--;){if(k===m||k===m.alternate)break a;
k=Rd(k);m=Rd(m)}k=null}else k=null;m=k;for(k=[];d&&d!==m;){g=d.alternate;if(null!==g&&g===m)break;k.push(d);d=Rd(d)}for(d=[];p&&p!==m;){g=p.alternate;if(null!==g&&g===m)break;d.push(p);p=Rd(p)}for(p=0;p<k.length;p++)Vd(k[p],"bubbled",l);for(p=d.length;0<p--;)Vd(d[p],"captured",c);return 0===(e&64)?[l]:[l,c]}};function Ze(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}var $e="function"===typeof Object.is?Object.is:Ze,af=Object.prototype.hasOwnProperty;
function bf(a,b){if($e(a,b))return!0;if("object"!==typeof a||null===a||"object"!==typeof b||null===b)return!1;var c=Object.keys(a),d=Object.keys(b);if(c.length!==d.length)return!1;for(d=0;d<c.length;d++)if(!af.call(b,c[d])||!$e(a[c[d]],b[c[d]]))return!1;return!0}
var cf=ya&&"documentMode"in document&&11>=document.documentMode,df={select:{phasedRegistrationNames:{bubbled:"onSelect",captured:"onSelectCapture"},dependencies:"blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange".split(" ")}},ef=null,ff=null,gf=null,hf=!1;
function jf(a,b){var c=b.window===b?b.document:9===b.nodeType?b:b.ownerDocument;if(hf||null==ef||ef!==td(c))return null;c=ef;"selectionStart"in c&&yd(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset});return gf&&bf(gf,c)?null:(gf=c,a=G.getPooled(df.select,ff,a,b),a.type="select",a.target=ef,Xd(a),a)}
var kf={eventTypes:df,extractEvents:function(a,b,c,d,e,f){e=f||(d.window===d?d.document:9===d.nodeType?d:d.ownerDocument);if(!(f=!e)){a:{e=cc(e);f=wa.onSelect;for(var g=0;g<f.length;g++)if(!e.has(f[g])){e=!1;break a}e=!0}f=!e}if(f)return null;e=b?Pd(b):window;switch(a){case "focus":if(xe(e)||"true"===e.contentEditable)ef=e,ff=b,gf=null;break;case "blur":gf=ff=ef=null;break;case "mousedown":hf=!0;break;case "contextmenu":case "mouseup":case "dragend":return hf=!1,jf(c,d);case "selectionchange":if(cf)break;
case "keydown":case "keyup":return jf(c,d)}return null}},lf=G.extend({animationName:null,elapsedTime:null,pseudoElement:null}),mf=G.extend({clipboardData:function(a){return"clipboardData"in a?a.clipboardData:window.clipboardData}}),nf=Ne.extend({relatedTarget:null});function of(a){var b=a.keyCode;"charCode"in a?(a=a.charCode,0===a&&13===b&&(a=13)):a=b;10===a&&(a=13);return 32<=a||13===a?a:0}
var pf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},qf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",
116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},rf=Ne.extend({key:function(a){if(a.key){var b=pf[a.key]||a.key;if("Unidentified"!==b)return b}return"keypress"===a.type?(a=of(a),13===a?"Enter":String.fromCharCode(a)):"keydown"===a.type||"keyup"===a.type?qf[a.keyCode]||"Unidentified":""},location:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,repeat:null,locale:null,getModifierState:Qe,charCode:function(a){return"keypress"===
a.type?of(a):0},keyCode:function(a){return"keydown"===a.type||"keyup"===a.type?a.keyCode:0},which:function(a){return"keypress"===a.type?of(a):"keydown"===a.type||"keyup"===a.type?a.keyCode:0}}),sf=Ve.extend({dataTransfer:null}),tf=Ne.extend({touches:null,targetTouches:null,changedTouches:null,altKey:null,metaKey:null,ctrlKey:null,shiftKey:null,getModifierState:Qe}),uf=G.extend({propertyName:null,elapsedTime:null,pseudoElement:null}),vf=Ve.extend({deltaX:function(a){return"deltaX"in a?a.deltaX:"wheelDeltaX"in
a?-a.wheelDeltaX:0},deltaY:function(a){return"deltaY"in a?a.deltaY:"wheelDeltaY"in a?-a.wheelDeltaY:"wheelDelta"in a?-a.wheelDelta:0},deltaZ:null,deltaMode:null}),wf={eventTypes:Wc,extractEvents:function(a,b,c,d){var e=Yc.get(a);if(!e)return null;switch(a){case "keypress":if(0===of(c))return null;case "keydown":case "keyup":a=rf;break;case "blur":case "focus":a=nf;break;case "click":if(2===c.button)return null;case "auxclick":case "dblclick":case "mousedown":case "mousemove":case "mouseup":case "mouseout":case "mouseover":case "contextmenu":a=
Ve;break;case "drag":case "dragend":case "dragenter":case "dragexit":case "dragleave":case "dragover":case "dragstart":case "drop":a=sf;break;case "touchcancel":case "touchend":case "touchmove":case "touchstart":a=tf;break;case Xb:case Yb:case Zb:a=lf;break;case $b:a=uf;break;case "scroll":a=Ne;break;case "wheel":a=vf;break;case "copy":case "cut":case "paste":a=mf;break;case "gotpointercapture":case "lostpointercapture":case "pointercancel":case "pointerdown":case "pointermove":case "pointerout":case "pointerover":case "pointerup":a=
We;break;default:a=G}b=a.getPooled(e,b,c,d);Xd(b);return b}};if(pa)throw Error(u(101));pa=Array.prototype.slice.call("ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" "));ra();var xf=Nc;la=Qd;ma=xf;na=Pd;xa({SimpleEventPlugin:wf,EnterLeaveEventPlugin:Ye,ChangeEventPlugin:Me,SelectEventPlugin:kf,BeforeInputEventPlugin:ve});var yf=[],zf=-1;function H(a){0>zf||(a.current=yf[zf],yf[zf]=null,zf--)}
function I(a,b){zf++;yf[zf]=a.current;a.current=b}var Af={},J={current:Af},K={current:!1},Bf=Af;function Cf(a,b){var c=a.type.contextTypes;if(!c)return Af;var d=a.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===b)return d.__reactInternalMemoizedMaskedChildContext;var e={},f;for(f in c)e[f]=b[f];d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=b,a.__reactInternalMemoizedMaskedChildContext=e);return e}function L(a){a=a.childContextTypes;return null!==a&&void 0!==a}
function Df(){H(K);H(J)}function Ef(a,b,c){if(J.current!==Af)throw Error(u(168));I(J,b);I(K,c)}function Ff(a,b,c){var d=a.stateNode;a=b.childContextTypes;if("function"!==typeof d.getChildContext)return c;d=d.getChildContext();for(var e in d)if(!(e in a))throw Error(u(108,pb(b)||"Unknown",e));return n({},c,{},d)}function Gf(a){a=(a=a.stateNode)&&a.__reactInternalMemoizedMergedChildContext||Af;Bf=J.current;I(J,a);I(K,K.current);return!0}
function Hf(a,b,c){var d=a.stateNode;if(!d)throw Error(u(169));c?(a=Ff(a,b,Bf),d.__reactInternalMemoizedMergedChildContext=a,H(K),H(J),I(J,a)):H(K);I(K,c)}
var If=r.unstable_runWithPriority,Jf=r.unstable_scheduleCallback,Kf=r.unstable_cancelCallback,Lf=r.unstable_requestPaint,Mf=r.unstable_now,Nf=r.unstable_getCurrentPriorityLevel,Of=r.unstable_ImmediatePriority,Pf=r.unstable_UserBlockingPriority,Qf=r.unstable_NormalPriority,Rf=r.unstable_LowPriority,Sf=r.unstable_IdlePriority,Tf={},Uf=r.unstable_shouldYield,Vf=void 0!==Lf?Lf:function(){},Wf=null,Xf=null,Yf=!1,Zf=Mf(),$f=1E4>Zf?Mf:function(){return Mf()-Zf};
function ag(){switch(Nf()){case Of:return 99;case Pf:return 98;case Qf:return 97;case Rf:return 96;case Sf:return 95;default:throw Error(u(332));}}function bg(a){switch(a){case 99:return Of;case 98:return Pf;case 97:return Qf;case 96:return Rf;case 95:return Sf;default:throw Error(u(332));}}function cg(a,b){a=bg(a);return If(a,b)}function dg(a,b,c){a=bg(a);return Jf(a,b,c)}function eg(a){null===Wf?(Wf=[a],Xf=Jf(Of,fg)):Wf.push(a);return Tf}function gg(){if(null!==Xf){var a=Xf;Xf=null;Kf(a)}fg()}
function fg(){if(!Yf&&null!==Wf){Yf=!0;var a=0;try{var b=Wf;cg(99,function(){for(;a<b.length;a++){var c=b[a];do c=c(!0);while(null!==c)}});Wf=null}catch(c){throw null!==Wf&&(Wf=Wf.slice(a+1)),Jf(Of,gg),c;}finally{Yf=!1}}}function hg(a,b,c){c/=10;return 1073741821-(((1073741821-a+b/10)/c|0)+1)*c}function ig(a,b){if(a&&a.defaultProps){b=n({},b);a=a.defaultProps;for(var c in a)void 0===b[c]&&(b[c]=a[c])}return b}var jg={current:null},kg=null,lg=null,mg=null;function ng(){mg=lg=kg=null}
function og(a){var b=jg.current;H(jg);a.type._context._currentValue=b}function pg(a,b){for(;null!==a;){var c=a.alternate;if(a.childExpirationTime<b)a.childExpirationTime=b,null!==c&&c.childExpirationTime<b&&(c.childExpirationTime=b);else if(null!==c&&c.childExpirationTime<b)c.childExpirationTime=b;else break;a=a.return}}function qg(a,b){kg=a;mg=lg=null;a=a.dependencies;null!==a&&null!==a.firstContext&&(a.expirationTime>=b&&(rg=!0),a.firstContext=null)}
function sg(a,b){if(mg!==a&&!1!==b&&0!==b){if("number"!==typeof b||1073741823===b)mg=a,b=1073741823;b={context:a,observedBits:b,next:null};if(null===lg){if(null===kg)throw Error(u(308));lg=b;kg.dependencies={expirationTime:0,firstContext:b,responders:null}}else lg=lg.next=b}return a._currentValue}var tg=!1;function ug(a){a.updateQueue={baseState:a.memoizedState,baseQueue:null,shared:{pending:null},effects:null}}
function vg(a,b){a=a.updateQueue;b.updateQueue===a&&(b.updateQueue={baseState:a.baseState,baseQueue:a.baseQueue,shared:a.shared,effects:a.effects})}function wg(a,b){a={expirationTime:a,suspenseConfig:b,tag:0,payload:null,callback:null,next:null};return a.next=a}function xg(a,b){a=a.updateQueue;if(null!==a){a=a.shared;var c=a.pending;null===c?b.next=b:(b.next=c.next,c.next=b);a.pending=b}}
function yg(a,b){var c=a.alternate;null!==c&&vg(c,a);a=a.updateQueue;c=a.baseQueue;null===c?(a.baseQueue=b.next=b,b.next=b):(b.next=c.next,c.next=b)}
function zg(a,b,c,d){var e=a.updateQueue;tg=!1;var f=e.baseQueue,g=e.shared.pending;if(null!==g){if(null!==f){var h=f.next;f.next=g.next;g.next=h}f=g;e.shared.pending=null;h=a.alternate;null!==h&&(h=h.updateQueue,null!==h&&(h.baseQueue=g))}if(null!==f){h=f.next;var k=e.baseState,l=0,m=null,p=null,x=null;if(null!==h){var z=h;do{g=z.expirationTime;if(g<d){var ca={expirationTime:z.expirationTime,suspenseConfig:z.suspenseConfig,tag:z.tag,payload:z.payload,callback:z.callback,next:null};null===x?(p=x=
ca,m=k):x=x.next=ca;g>l&&(l=g)}else{null!==x&&(x=x.next={expirationTime:1073741823,suspenseConfig:z.suspenseConfig,tag:z.tag,payload:z.payload,callback:z.callback,next:null});Ag(g,z.suspenseConfig);a:{var D=a,t=z;g=b;ca=c;switch(t.tag){case 1:D=t.payload;if("function"===typeof D){k=D.call(ca,k,g);break a}k=D;break a;case 3:D.effectTag=D.effectTag&-4097|64;case 0:D=t.payload;g="function"===typeof D?D.call(ca,k,g):D;if(null===g||void 0===g)break a;k=n({},k,g);break a;case 2:tg=!0}}null!==z.callback&&
(a.effectTag|=32,g=e.effects,null===g?e.effects=[z]:g.push(z))}z=z.next;if(null===z||z===h)if(g=e.shared.pending,null===g)break;else z=f.next=g.next,g.next=h,e.baseQueue=f=g,e.shared.pending=null}while(1)}null===x?m=k:x.next=p;e.baseState=m;e.baseQueue=x;Bg(l);a.expirationTime=l;a.memoizedState=k}}
function Cg(a,b,c){a=b.effects;b.effects=null;if(null!==a)for(b=0;b<a.length;b++){var d=a[b],e=d.callback;if(null!==e){d.callback=null;d=e;e=c;if("function"!==typeof d)throw Error(u(191,d));d.call(e)}}}var Dg=Wa.ReactCurrentBatchConfig,Eg=(new aa.Component).refs;function Fg(a,b,c,d){b=a.memoizedState;c=c(d,b);c=null===c||void 0===c?b:n({},b,c);a.memoizedState=c;0===a.expirationTime&&(a.updateQueue.baseState=c)}
var Jg={isMounted:function(a){return(a=a._reactInternalFiber)?dc(a)===a:!1},enqueueSetState:function(a,b,c){a=a._reactInternalFiber;var d=Gg(),e=Dg.suspense;d=Hg(d,a,e);e=wg(d,e);e.payload=b;void 0!==c&&null!==c&&(e.callback=c);xg(a,e);Ig(a,d)},enqueueReplaceState:function(a,b,c){a=a._reactInternalFiber;var d=Gg(),e=Dg.suspense;d=Hg(d,a,e);e=wg(d,e);e.tag=1;e.payload=b;void 0!==c&&null!==c&&(e.callback=c);xg(a,e);Ig(a,d)},enqueueForceUpdate:function(a,b){a=a._reactInternalFiber;var c=Gg(),d=Dg.suspense;
c=Hg(c,a,d);d=wg(c,d);d.tag=2;void 0!==b&&null!==b&&(d.callback=b);xg(a,d);Ig(a,c)}};function Kg(a,b,c,d,e,f,g){a=a.stateNode;return"function"===typeof a.shouldComponentUpdate?a.shouldComponentUpdate(d,f,g):b.prototype&&b.prototype.isPureReactComponent?!bf(c,d)||!bf(e,f):!0}
function Lg(a,b,c){var d=!1,e=Af;var f=b.contextType;"object"===typeof f&&null!==f?f=sg(f):(e=L(b)?Bf:J.current,d=b.contextTypes,f=(d=null!==d&&void 0!==d)?Cf(a,e):Af);b=new b(c,f);a.memoizedState=null!==b.state&&void 0!==b.state?b.state:null;b.updater=Jg;a.stateNode=b;b._reactInternalFiber=a;d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=e,a.__reactInternalMemoizedMaskedChildContext=f);return b}
function Mg(a,b,c,d){a=b.state;"function"===typeof b.componentWillReceiveProps&&b.componentWillReceiveProps(c,d);"function"===typeof b.UNSAFE_componentWillReceiveProps&&b.UNSAFE_componentWillReceiveProps(c,d);b.state!==a&&Jg.enqueueReplaceState(b,b.state,null)}
function Ng(a,b,c,d){var e=a.stateNode;e.props=c;e.state=a.memoizedState;e.refs=Eg;ug(a);var f=b.contextType;"object"===typeof f&&null!==f?e.context=sg(f):(f=L(b)?Bf:J.current,e.context=Cf(a,f));zg(a,c,e,d);e.state=a.memoizedState;f=b.getDerivedStateFromProps;"function"===typeof f&&(Fg(a,b,f,c),e.state=a.memoizedState);"function"===typeof b.getDerivedStateFromProps||"function"===typeof e.getSnapshotBeforeUpdate||"function"!==typeof e.UNSAFE_componentWillMount&&"function"!==typeof e.componentWillMount||
(b=e.state,"function"===typeof e.componentWillMount&&e.componentWillMount(),"function"===typeof e.UNSAFE_componentWillMount&&e.UNSAFE_componentWillMount(),b!==e.state&&Jg.enqueueReplaceState(e,e.state,null),zg(a,c,e,d),e.state=a.memoizedState);"function"===typeof e.componentDidMount&&(a.effectTag|=4)}var Og=Array.isArray;
function Pg(a,b,c){a=c.ref;if(null!==a&&"function"!==typeof a&&"object"!==typeof a){if(c._owner){c=c._owner;if(c){if(1!==c.tag)throw Error(u(309));var d=c.stateNode}if(!d)throw Error(u(147,a));var e=""+a;if(null!==b&&null!==b.ref&&"function"===typeof b.ref&&b.ref._stringRef===e)return b.ref;b=function(a){var b=d.refs;b===Eg&&(b=d.refs={});null===a?delete b[e]:b[e]=a};b._stringRef=e;return b}if("string"!==typeof a)throw Error(u(284));if(!c._owner)throw Error(u(290,a));}return a}
function Qg(a,b){if("textarea"!==a.type)throw Error(u(31,"[object Object]"===Object.prototype.toString.call(b)?"object with keys {"+Object.keys(b).join(", ")+"}":b,""));}
function Rg(a){function b(b,c){if(a){var d=b.lastEffect;null!==d?(d.nextEffect=c,b.lastEffect=c):b.firstEffect=b.lastEffect=c;c.nextEffect=null;c.effectTag=8}}function c(c,d){if(!a)return null;for(;null!==d;)b(c,d),d=d.sibling;return null}function d(a,b){for(a=new Map;null!==b;)null!==b.key?a.set(b.key,b):a.set(b.index,b),b=b.sibling;return a}function e(a,b){a=Sg(a,b);a.index=0;a.sibling=null;return a}function f(b,c,d){b.index=d;if(!a)return c;d=b.alternate;if(null!==d)return d=d.index,d<c?(b.effectTag=
2,c):d;b.effectTag=2;return c}function g(b){a&&null===b.alternate&&(b.effectTag=2);return b}function h(a,b,c,d){if(null===b||6!==b.tag)return b=Tg(c,a.mode,d),b.return=a,b;b=e(b,c);b.return=a;return b}function k(a,b,c,d){if(null!==b&&b.elementType===c.type)return d=e(b,c.props),d.ref=Pg(a,b,c),d.return=a,d;d=Ug(c.type,c.key,c.props,null,a.mode,d);d.ref=Pg(a,b,c);d.return=a;return d}function l(a,b,c,d){if(null===b||4!==b.tag||b.stateNode.containerInfo!==c.containerInfo||b.stateNode.implementation!==
c.implementation)return b=Vg(c,a.mode,d),b.return=a,b;b=e(b,c.children||[]);b.return=a;return b}function m(a,b,c,d,f){if(null===b||7!==b.tag)return b=Wg(c,a.mode,d,f),b.return=a,b;b=e(b,c);b.return=a;return b}function p(a,b,c){if("string"===typeof b||"number"===typeof b)return b=Tg(""+b,a.mode,c),b.return=a,b;if("object"===typeof b&&null!==b){switch(b.$$typeof){case Za:return c=Ug(b.type,b.key,b.props,null,a.mode,c),c.ref=Pg(a,null,b),c.return=a,c;case $a:return b=Vg(b,a.mode,c),b.return=a,b}if(Og(b)||
nb(b))return b=Wg(b,a.mode,c,null),b.return=a,b;Qg(a,b)}return null}function x(a,b,c,d){var e=null!==b?b.key:null;if("string"===typeof c||"number"===typeof c)return null!==e?null:h(a,b,""+c,d);if("object"===typeof c&&null!==c){switch(c.$$typeof){case Za:return c.key===e?c.type===ab?m(a,b,c.props.children,d,e):k(a,b,c,d):null;case $a:return c.key===e?l(a,b,c,d):null}if(Og(c)||nb(c))return null!==e?null:m(a,b,c,d,null);Qg(a,c)}return null}function z(a,b,c,d,e){if("string"===typeof d||"number"===typeof d)return a=
a.get(c)||null,h(b,a,""+d,e);if("object"===typeof d&&null!==d){switch(d.$$typeof){case Za:return a=a.get(null===d.key?c:d.key)||null,d.type===ab?m(b,a,d.props.children,e,d.key):k(b,a,d,e);case $a:return a=a.get(null===d.key?c:d.key)||null,l(b,a,d,e)}if(Og(d)||nb(d))return a=a.get(c)||null,m(b,a,d,e,null);Qg(b,d)}return null}function ca(e,g,h,k){for(var l=null,t=null,m=g,y=g=0,A=null;null!==m&&y<h.length;y++){m.index>y?(A=m,m=null):A=m.sibling;var q=x(e,m,h[y],k);if(null===q){null===m&&(m=A);break}a&&
m&&null===q.alternate&&b(e,m);g=f(q,g,y);null===t?l=q:t.sibling=q;t=q;m=A}if(y===h.length)return c(e,m),l;if(null===m){for(;y<h.length;y++)m=p(e,h[y],k),null!==m&&(g=f(m,g,y),null===t?l=m:t.sibling=m,t=m);return l}for(m=d(e,m);y<h.length;y++)A=z(m,e,y,h[y],k),null!==A&&(a&&null!==A.alternate&&m.delete(null===A.key?y:A.key),g=f(A,g,y),null===t?l=A:t.sibling=A,t=A);a&&m.forEach(function(a){return b(e,a)});return l}function D(e,g,h,l){var k=nb(h);if("function"!==typeof k)throw Error(u(150));h=k.call(h);
if(null==h)throw Error(u(151));for(var m=k=null,t=g,y=g=0,A=null,q=h.next();null!==t&&!q.done;y++,q=h.next()){t.index>y?(A=t,t=null):A=t.sibling;var D=x(e,t,q.value,l);if(null===D){null===t&&(t=A);break}a&&t&&null===D.alternate&&b(e,t);g=f(D,g,y);null===m?k=D:m.sibling=D;m=D;t=A}if(q.done)return c(e,t),k;if(null===t){for(;!q.done;y++,q=h.next())q=p(e,q.value,l),null!==q&&(g=f(q,g,y),null===m?k=q:m.sibling=q,m=q);return k}for(t=d(e,t);!q.done;y++,q=h.next())q=z(t,e,y,q.value,l),null!==q&&(a&&null!==
q.alternate&&t.delete(null===q.key?y:q.key),g=f(q,g,y),null===m?k=q:m.sibling=q,m=q);a&&t.forEach(function(a){return b(e,a)});return k}return function(a,d,f,h){var k="object"===typeof f&&null!==f&&f.type===ab&&null===f.key;k&&(f=f.props.children);var l="object"===typeof f&&null!==f;if(l)switch(f.$$typeof){case Za:a:{l=f.key;for(k=d;null!==k;){if(k.key===l){switch(k.tag){case 7:if(f.type===ab){c(a,k.sibling);d=e(k,f.props.children);d.return=a;a=d;break a}break;default:if(k.elementType===f.type){c(a,
k.sibling);d=e(k,f.props);d.ref=Pg(a,k,f);d.return=a;a=d;break a}}c(a,k);break}else b(a,k);k=k.sibling}f.type===ab?(d=Wg(f.props.children,a.mode,h,f.key),d.return=a,a=d):(h=Ug(f.type,f.key,f.props,null,a.mode,h),h.ref=Pg(a,d,f),h.return=a,a=h)}return g(a);case $a:a:{for(k=f.key;null!==d;){if(d.key===k)if(4===d.tag&&d.stateNode.containerInfo===f.containerInfo&&d.stateNode.implementation===f.implementation){c(a,d.sibling);d=e(d,f.children||[]);d.return=a;a=d;break a}else{c(a,d);break}else b(a,d);d=
d.sibling}d=Vg(f,a.mode,h);d.return=a;a=d}return g(a)}if("string"===typeof f||"number"===typeof f)return f=""+f,null!==d&&6===d.tag?(c(a,d.sibling),d=e(d,f),d.return=a,a=d):(c(a,d),d=Tg(f,a.mode,h),d.return=a,a=d),g(a);if(Og(f))return ca(a,d,f,h);if(nb(f))return D(a,d,f,h);l&&Qg(a,f);if("undefined"===typeof f&&!k)switch(a.tag){case 1:case 0:throw a=a.type,Error(u(152,a.displayName||a.name||"Component"));}return c(a,d)}}var Xg=Rg(!0),Yg=Rg(!1),Zg={},$g={current:Zg},ah={current:Zg},bh={current:Zg};
function ch(a){if(a===Zg)throw Error(u(174));return a}function dh(a,b){I(bh,b);I(ah,a);I($g,Zg);a=b.nodeType;switch(a){case 9:case 11:b=(b=b.documentElement)?b.namespaceURI:Ob(null,"");break;default:a=8===a?b.parentNode:b,b=a.namespaceURI||null,a=a.tagName,b=Ob(b,a)}H($g);I($g,b)}function eh(){H($g);H(ah);H(bh)}function fh(a){ch(bh.current);var b=ch($g.current);var c=Ob(b,a.type);b!==c&&(I(ah,a),I($g,c))}function gh(a){ah.current===a&&(H($g),H(ah))}var M={current:0};
function hh(a){for(var b=a;null!==b;){if(13===b.tag){var c=b.memoizedState;if(null!==c&&(c=c.dehydrated,null===c||c.data===Bd||c.data===Cd))return b}else if(19===b.tag&&void 0!==b.memoizedProps.revealOrder){if(0!==(b.effectTag&64))return b}else if(null!==b.child){b.child.return=b;b=b.child;continue}if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return null;b=b.return}b.sibling.return=b.return;b=b.sibling}return null}function ih(a,b){return{responder:a,props:b}}
var jh=Wa.ReactCurrentDispatcher,kh=Wa.ReactCurrentBatchConfig,lh=0,N=null,O=null,P=null,mh=!1;function Q(){throw Error(u(321));}function nh(a,b){if(null===b)return!1;for(var c=0;c<b.length&&c<a.length;c++)if(!$e(a[c],b[c]))return!1;return!0}
function oh(a,b,c,d,e,f){lh=f;N=b;b.memoizedState=null;b.updateQueue=null;b.expirationTime=0;jh.current=null===a||null===a.memoizedState?ph:qh;a=c(d,e);if(b.expirationTime===lh){f=0;do{b.expirationTime=0;if(!(25>f))throw Error(u(301));f+=1;P=O=null;b.updateQueue=null;jh.current=rh;a=c(d,e)}while(b.expirationTime===lh)}jh.current=sh;b=null!==O&&null!==O.next;lh=0;P=O=N=null;mh=!1;if(b)throw Error(u(300));return a}
function th(){var a={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};null===P?N.memoizedState=P=a:P=P.next=a;return P}function uh(){if(null===O){var a=N.alternate;a=null!==a?a.memoizedState:null}else a=O.next;var b=null===P?N.memoizedState:P.next;if(null!==b)P=b,O=a;else{if(null===a)throw Error(u(310));O=a;a={memoizedState:O.memoizedState,baseState:O.baseState,baseQueue:O.baseQueue,queue:O.queue,next:null};null===P?N.memoizedState=P=a:P=P.next=a}return P}
function vh(a,b){return"function"===typeof b?b(a):b}
function wh(a){var b=uh(),c=b.queue;if(null===c)throw Error(u(311));c.lastRenderedReducer=a;var d=O,e=d.baseQueue,f=c.pending;if(null!==f){if(null!==e){var g=e.next;e.next=f.next;f.next=g}d.baseQueue=e=f;c.pending=null}if(null!==e){e=e.next;d=d.baseState;var h=g=f=null,k=e;do{var l=k.expirationTime;if(l<lh){var m={expirationTime:k.expirationTime,suspenseConfig:k.suspenseConfig,action:k.action,eagerReducer:k.eagerReducer,eagerState:k.eagerState,next:null};null===h?(g=h=m,f=d):h=h.next=m;l>N.expirationTime&&
(N.expirationTime=l,Bg(l))}else null!==h&&(h=h.next={expirationTime:1073741823,suspenseConfig:k.suspenseConfig,action:k.action,eagerReducer:k.eagerReducer,eagerState:k.eagerState,next:null}),Ag(l,k.suspenseConfig),d=k.eagerReducer===a?k.eagerState:a(d,k.action);k=k.next}while(null!==k&&k!==e);null===h?f=d:h.next=g;$e(d,b.memoizedState)||(rg=!0);b.memoizedState=d;b.baseState=f;b.baseQueue=h;c.lastRenderedState=d}return[b.memoizedState,c.dispatch]}
function xh(a){var b=uh(),c=b.queue;if(null===c)throw Error(u(311));c.lastRenderedReducer=a;var d=c.dispatch,e=c.pending,f=b.memoizedState;if(null!==e){c.pending=null;var g=e=e.next;do f=a(f,g.action),g=g.next;while(g!==e);$e(f,b.memoizedState)||(rg=!0);b.memoizedState=f;null===b.baseQueue&&(b.baseState=f);c.lastRenderedState=f}return[f,d]}
function yh(a){var b=th();"function"===typeof a&&(a=a());b.memoizedState=b.baseState=a;a=b.queue={pending:null,dispatch:null,lastRenderedReducer:vh,lastRenderedState:a};a=a.dispatch=zh.bind(null,N,a);return[b.memoizedState,a]}function Ah(a,b,c,d){a={tag:a,create:b,destroy:c,deps:d,next:null};b=N.updateQueue;null===b?(b={lastEffect:null},N.updateQueue=b,b.lastEffect=a.next=a):(c=b.lastEffect,null===c?b.lastEffect=a.next=a:(d=c.next,c.next=a,a.next=d,b.lastEffect=a));return a}
function Bh(){return uh().memoizedState}function Ch(a,b,c,d){var e=th();N.effectTag|=a;e.memoizedState=Ah(1|b,c,void 0,void 0===d?null:d)}function Dh(a,b,c,d){var e=uh();d=void 0===d?null:d;var f=void 0;if(null!==O){var g=O.memoizedState;f=g.destroy;if(null!==d&&nh(d,g.deps)){Ah(b,c,f,d);return}}N.effectTag|=a;e.memoizedState=Ah(1|b,c,f,d)}function Eh(a,b){return Ch(516,4,a,b)}function Fh(a,b){return Dh(516,4,a,b)}function Gh(a,b){return Dh(4,2,a,b)}
function Hh(a,b){if("function"===typeof b)return a=a(),b(a),function(){b(null)};if(null!==b&&void 0!==b)return a=a(),b.current=a,function(){b.current=null}}function Ih(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return Dh(4,2,Hh.bind(null,b,a),c)}function Jh(){}function Kh(a,b){th().memoizedState=[a,void 0===b?null:b];return a}function Lh(a,b){var c=uh();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&nh(b,d[1]))return d[0];c.memoizedState=[a,b];return a}
function Mh(a,b){var c=uh();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&nh(b,d[1]))return d[0];a=a();c.memoizedState=[a,b];return a}function Nh(a,b,c){var d=ag();cg(98>d?98:d,function(){a(!0)});cg(97<d?97:d,function(){var d=kh.suspense;kh.suspense=void 0===b?null:b;try{a(!1),c()}finally{kh.suspense=d}})}
function zh(a,b,c){var d=Gg(),e=Dg.suspense;d=Hg(d,a,e);e={expirationTime:d,suspenseConfig:e,action:c,eagerReducer:null,eagerState:null,next:null};var f=b.pending;null===f?e.next=e:(e.next=f.next,f.next=e);b.pending=e;f=a.alternate;if(a===N||null!==f&&f===N)mh=!0,e.expirationTime=lh,N.expirationTime=lh;else{if(0===a.expirationTime&&(null===f||0===f.expirationTime)&&(f=b.lastRenderedReducer,null!==f))try{var g=b.lastRenderedState,h=f(g,c);e.eagerReducer=f;e.eagerState=h;if($e(h,g))return}catch(k){}finally{}Ig(a,
d)}}
var sh={readContext:sg,useCallback:Q,useContext:Q,useEffect:Q,useImperativeHandle:Q,useLayoutEffect:Q,useMemo:Q,useReducer:Q,useRef:Q,useState:Q,useDebugValue:Q,useResponder:Q,useDeferredValue:Q,useTransition:Q},ph={readContext:sg,useCallback:Kh,useContext:sg,useEffect:Eh,useImperativeHandle:function(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return Ch(4,2,Hh.bind(null,b,a),c)},useLayoutEffect:function(a,b){return Ch(4,2,a,b)},useMemo:function(a,b){var c=th();b=void 0===b?null:b;a=a();c.memoizedState=[a,
b];return a},useReducer:function(a,b,c){var d=th();b=void 0!==c?c(b):b;d.memoizedState=d.baseState=b;a=d.queue={pending:null,dispatch:null,lastRenderedReducer:a,lastRenderedState:b};a=a.dispatch=zh.bind(null,N,a);return[d.memoizedState,a]},useRef:function(a){var b=th();a={current:a};return b.memoizedState=a},useState:yh,useDebugValue:Jh,useResponder:ih,useDeferredValue:function(a,b){var c=yh(a),d=c[0],e=c[1];Eh(function(){var c=kh.suspense;kh.suspense=void 0===b?null:b;try{e(a)}finally{kh.suspense=
c}},[a,b]);return d},useTransition:function(a){var b=yh(!1),c=b[0];b=b[1];return[Kh(Nh.bind(null,b,a),[b,a]),c]}},qh={readContext:sg,useCallback:Lh,useContext:sg,useEffect:Fh,useImperativeHandle:Ih,useLayoutEffect:Gh,useMemo:Mh,useReducer:wh,useRef:Bh,useState:function(){return wh(vh)},useDebugValue:Jh,useResponder:ih,useDeferredValue:function(a,b){var c=wh(vh),d=c[0],e=c[1];Fh(function(){var c=kh.suspense;kh.suspense=void 0===b?null:b;try{e(a)}finally{kh.suspense=c}},[a,b]);return d},useTransition:function(a){var b=
wh(vh),c=b[0];b=b[1];return[Lh(Nh.bind(null,b,a),[b,a]),c]}},rh={readContext:sg,useCallback:Lh,useContext:sg,useEffect:Fh,useImperativeHandle:Ih,useLayoutEffect:Gh,useMemo:Mh,useReducer:xh,useRef:Bh,useState:function(){return xh(vh)},useDebugValue:Jh,useResponder:ih,useDeferredValue:function(a,b){var c=xh(vh),d=c[0],e=c[1];Fh(function(){var c=kh.suspense;kh.suspense=void 0===b?null:b;try{e(a)}finally{kh.suspense=c}},[a,b]);return d},useTransition:function(a){var b=xh(vh),c=b[0];b=b[1];return[Lh(Nh.bind(null,
b,a),[b,a]),c]}},Oh=null,Ph=null,Qh=!1;function Rh(a,b){var c=Sh(5,null,null,0);c.elementType="DELETED";c.type="DELETED";c.stateNode=b;c.return=a;c.effectTag=8;null!==a.lastEffect?(a.lastEffect.nextEffect=c,a.lastEffect=c):a.firstEffect=a.lastEffect=c}
function Th(a,b){switch(a.tag){case 5:var c=a.type;b=1!==b.nodeType||c.toLowerCase()!==b.nodeName.toLowerCase()?null:b;return null!==b?(a.stateNode=b,!0):!1;case 6:return b=""===a.pendingProps||3!==b.nodeType?null:b,null!==b?(a.stateNode=b,!0):!1;case 13:return!1;default:return!1}}
function Uh(a){if(Qh){var b=Ph;if(b){var c=b;if(!Th(a,b)){b=Jd(c.nextSibling);if(!b||!Th(a,b)){a.effectTag=a.effectTag&-1025|2;Qh=!1;Oh=a;return}Rh(Oh,c)}Oh=a;Ph=Jd(b.firstChild)}else a.effectTag=a.effectTag&-1025|2,Qh=!1,Oh=a}}function Vh(a){for(a=a.return;null!==a&&5!==a.tag&&3!==a.tag&&13!==a.tag;)a=a.return;Oh=a}
function Wh(a){if(a!==Oh)return!1;if(!Qh)return Vh(a),Qh=!0,!1;var b=a.type;if(5!==a.tag||"head"!==b&&"body"!==b&&!Gd(b,a.memoizedProps))for(b=Ph;b;)Rh(a,b),b=Jd(b.nextSibling);Vh(a);if(13===a.tag){a=a.memoizedState;a=null!==a?a.dehydrated:null;if(!a)throw Error(u(317));a:{a=a.nextSibling;for(b=0;a;){if(8===a.nodeType){var c=a.data;if(c===Ad){if(0===b){Ph=Jd(a.nextSibling);break a}b--}else c!==zd&&c!==Cd&&c!==Bd||b++}a=a.nextSibling}Ph=null}}else Ph=Oh?Jd(a.stateNode.nextSibling):null;return!0}
function Xh(){Ph=Oh=null;Qh=!1}var Yh=Wa.ReactCurrentOwner,rg=!1;function R(a,b,c,d){b.child=null===a?Yg(b,null,c,d):Xg(b,a.child,c,d)}function Zh(a,b,c,d,e){c=c.render;var f=b.ref;qg(b,e);d=oh(a,b,c,d,f,e);if(null!==a&&!rg)return b.updateQueue=a.updateQueue,b.effectTag&=-517,a.expirationTime<=e&&(a.expirationTime=0),$h(a,b,e);b.effectTag|=1;R(a,b,d,e);return b.child}
function ai(a,b,c,d,e,f){if(null===a){var g=c.type;if("function"===typeof g&&!bi(g)&&void 0===g.defaultProps&&null===c.compare&&void 0===c.defaultProps)return b.tag=15,b.type=g,ci(a,b,g,d,e,f);a=Ug(c.type,null,d,null,b.mode,f);a.ref=b.ref;a.return=b;return b.child=a}g=a.child;if(e<f&&(e=g.memoizedProps,c=c.compare,c=null!==c?c:bf,c(e,d)&&a.ref===b.ref))return $h(a,b,f);b.effectTag|=1;a=Sg(g,d);a.ref=b.ref;a.return=b;return b.child=a}
function ci(a,b,c,d,e,f){return null!==a&&bf(a.memoizedProps,d)&&a.ref===b.ref&&(rg=!1,e<f)?(b.expirationTime=a.expirationTime,$h(a,b,f)):di(a,b,c,d,f)}function ei(a,b){var c=b.ref;if(null===a&&null!==c||null!==a&&a.ref!==c)b.effectTag|=128}function di(a,b,c,d,e){var f=L(c)?Bf:J.current;f=Cf(b,f);qg(b,e);c=oh(a,b,c,d,f,e);if(null!==a&&!rg)return b.updateQueue=a.updateQueue,b.effectTag&=-517,a.expirationTime<=e&&(a.expirationTime=0),$h(a,b,e);b.effectTag|=1;R(a,b,c,e);return b.child}
function fi(a,b,c,d,e){if(L(c)){var f=!0;Gf(b)}else f=!1;qg(b,e);if(null===b.stateNode)null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2),Lg(b,c,d),Ng(b,c,d,e),d=!0;else if(null===a){var g=b.stateNode,h=b.memoizedProps;g.props=h;var k=g.context,l=c.contextType;"object"===typeof l&&null!==l?l=sg(l):(l=L(c)?Bf:J.current,l=Cf(b,l));var m=c.getDerivedStateFromProps,p="function"===typeof m||"function"===typeof g.getSnapshotBeforeUpdate;p||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&
"function"!==typeof g.componentWillReceiveProps||(h!==d||k!==l)&&Mg(b,g,d,l);tg=!1;var x=b.memoizedState;g.state=x;zg(b,d,g,e);k=b.memoizedState;h!==d||x!==k||K.current||tg?("function"===typeof m&&(Fg(b,c,m,d),k=b.memoizedState),(h=tg||Kg(b,c,h,d,x,k,l))?(p||"function"!==typeof g.UNSAFE_componentWillMount&&"function"!==typeof g.componentWillMount||("function"===typeof g.componentWillMount&&g.componentWillMount(),"function"===typeof g.UNSAFE_componentWillMount&&g.UNSAFE_componentWillMount()),"function"===
typeof g.componentDidMount&&(b.effectTag|=4)):("function"===typeof g.componentDidMount&&(b.effectTag|=4),b.memoizedProps=d,b.memoizedState=k),g.props=d,g.state=k,g.context=l,d=h):("function"===typeof g.componentDidMount&&(b.effectTag|=4),d=!1)}else g=b.stateNode,vg(a,b),h=b.memoizedProps,g.props=b.type===b.elementType?h:ig(b.type,h),k=g.context,l=c.contextType,"object"===typeof l&&null!==l?l=sg(l):(l=L(c)?Bf:J.current,l=Cf(b,l)),m=c.getDerivedStateFromProps,(p="function"===typeof m||"function"===
typeof g.getSnapshotBeforeUpdate)||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||(h!==d||k!==l)&&Mg(b,g,d,l),tg=!1,k=b.memoizedState,g.state=k,zg(b,d,g,e),x=b.memoizedState,h!==d||k!==x||K.current||tg?("function"===typeof m&&(Fg(b,c,m,d),x=b.memoizedState),(m=tg||Kg(b,c,h,d,k,x,l))?(p||"function"!==typeof g.UNSAFE_componentWillUpdate&&"function"!==typeof g.componentWillUpdate||("function"===typeof g.componentWillUpdate&&g.componentWillUpdate(d,
x,l),"function"===typeof g.UNSAFE_componentWillUpdate&&g.UNSAFE_componentWillUpdate(d,x,l)),"function"===typeof g.componentDidUpdate&&(b.effectTag|=4),"function"===typeof g.getSnapshotBeforeUpdate&&(b.effectTag|=256)):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&k===a.memoizedState||(b.effectTag|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&k===a.memoizedState||(b.effectTag|=256),b.memoizedProps=d,b.memoizedState=x),g.props=d,g.state=x,g.context=l,d=m):
("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&k===a.memoizedState||(b.effectTag|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&k===a.memoizedState||(b.effectTag|=256),d=!1);return gi(a,b,c,d,f,e)}
function gi(a,b,c,d,e,f){ei(a,b);var g=0!==(b.effectTag&64);if(!d&&!g)return e&&Hf(b,c,!1),$h(a,b,f);d=b.stateNode;Yh.current=b;var h=g&&"function"!==typeof c.getDerivedStateFromError?null:d.render();b.effectTag|=1;null!==a&&g?(b.child=Xg(b,a.child,null,f),b.child=Xg(b,null,h,f)):R(a,b,h,f);b.memoizedState=d.state;e&&Hf(b,c,!0);return b.child}function hi(a){var b=a.stateNode;b.pendingContext?Ef(a,b.pendingContext,b.pendingContext!==b.context):b.context&&Ef(a,b.context,!1);dh(a,b.containerInfo)}
var ii={dehydrated:null,retryTime:0};
function ji(a,b,c){var d=b.mode,e=b.pendingProps,f=M.current,g=!1,h;(h=0!==(b.effectTag&64))||(h=0!==(f&2)&&(null===a||null!==a.memoizedState));h?(g=!0,b.effectTag&=-65):null!==a&&null===a.memoizedState||void 0===e.fallback||!0===e.unstable_avoidThisFallback||(f|=1);I(M,f&1);if(null===a){void 0!==e.fallback&&Uh(b);if(g){g=e.fallback;e=Wg(null,d,0,null);e.return=b;if(0===(b.mode&2))for(a=null!==b.memoizedState?b.child.child:b.child,e.child=a;null!==a;)a.return=e,a=a.sibling;c=Wg(g,d,c,null);c.return=
b;e.sibling=c;b.memoizedState=ii;b.child=e;return c}d=e.children;b.memoizedState=null;return b.child=Yg(b,null,d,c)}if(null!==a.memoizedState){a=a.child;d=a.sibling;if(g){e=e.fallback;c=Sg(a,a.pendingProps);c.return=b;if(0===(b.mode&2)&&(g=null!==b.memoizedState?b.child.child:b.child,g!==a.child))for(c.child=g;null!==g;)g.return=c,g=g.sibling;d=Sg(d,e);d.return=b;c.sibling=d;c.childExpirationTime=0;b.memoizedState=ii;b.child=c;return d}c=Xg(b,a.child,e.children,c);b.memoizedState=null;return b.child=
c}a=a.child;if(g){g=e.fallback;e=Wg(null,d,0,null);e.return=b;e.child=a;null!==a&&(a.return=e);if(0===(b.mode&2))for(a=null!==b.memoizedState?b.child.child:b.child,e.child=a;null!==a;)a.return=e,a=a.sibling;c=Wg(g,d,c,null);c.return=b;e.sibling=c;c.effectTag|=2;e.childExpirationTime=0;b.memoizedState=ii;b.child=e;return c}b.memoizedState=null;return b.child=Xg(b,a,e.children,c)}
function ki(a,b){a.expirationTime<b&&(a.expirationTime=b);var c=a.alternate;null!==c&&c.expirationTime<b&&(c.expirationTime=b);pg(a.return,b)}function li(a,b,c,d,e,f){var g=a.memoizedState;null===g?a.memoizedState={isBackwards:b,rendering:null,renderingStartTime:0,last:d,tail:c,tailExpiration:0,tailMode:e,lastEffect:f}:(g.isBackwards=b,g.rendering=null,g.renderingStartTime=0,g.last=d,g.tail=c,g.tailExpiration=0,g.tailMode=e,g.lastEffect=f)}
function mi(a,b,c){var d=b.pendingProps,e=d.revealOrder,f=d.tail;R(a,b,d.children,c);d=M.current;if(0!==(d&2))d=d&1|2,b.effectTag|=64;else{if(null!==a&&0!==(a.effectTag&64))a:for(a=b.child;null!==a;){if(13===a.tag)null!==a.memoizedState&&ki(a,c);else if(19===a.tag)ki(a,c);else if(null!==a.child){a.child.return=a;a=a.child;continue}if(a===b)break a;for(;null===a.sibling;){if(null===a.return||a.return===b)break a;a=a.return}a.sibling.return=a.return;a=a.sibling}d&=1}I(M,d);if(0===(b.mode&2))b.memoizedState=
null;else switch(e){case "forwards":c=b.child;for(e=null;null!==c;)a=c.alternate,null!==a&&null===hh(a)&&(e=c),c=c.sibling;c=e;null===c?(e=b.child,b.child=null):(e=c.sibling,c.sibling=null);li(b,!1,e,c,f,b.lastEffect);break;case "backwards":c=null;e=b.child;for(b.child=null;null!==e;){a=e.alternate;if(null!==a&&null===hh(a)){b.child=e;break}a=e.sibling;e.sibling=c;c=e;e=a}li(b,!0,c,null,f,b.lastEffect);break;case "together":li(b,!1,null,null,void 0,b.lastEffect);break;default:b.memoizedState=null}return b.child}
function $h(a,b,c){null!==a&&(b.dependencies=a.dependencies);var d=b.expirationTime;0!==d&&Bg(d);if(b.childExpirationTime<c)return null;if(null!==a&&b.child!==a.child)throw Error(u(153));if(null!==b.child){a=b.child;c=Sg(a,a.pendingProps);b.child=c;for(c.return=b;null!==a.sibling;)a=a.sibling,c=c.sibling=Sg(a,a.pendingProps),c.return=b;c.sibling=null}return b.child}var ni,oi,pi,qi;
ni=function(a,b){for(var c=b.child;null!==c;){if(5===c.tag||6===c.tag)a.appendChild(c.stateNode);else if(4!==c.tag&&null!==c.child){c.child.return=c;c=c.child;continue}if(c===b)break;for(;null===c.sibling;){if(null===c.return||c.return===b)return;c=c.return}c.sibling.return=c.return;c=c.sibling}};oi=function(){};
pi=function(a,b,c,d,e){var f=a.memoizedProps;if(f!==d){var g=b.stateNode;ch($g.current);a=null;switch(c){case "input":f=zb(g,f);d=zb(g,d);a=[];break;case "option":f=Gb(g,f);d=Gb(g,d);a=[];break;case "select":f=n({},f,{value:void 0});d=n({},d,{value:void 0});a=[];break;case "textarea":f=Ib(g,f);d=Ib(g,d);a=[];break;default:"function"!==typeof f.onClick&&"function"===typeof d.onClick&&(g.onclick=sd)}od(c,d);var h,k;c=null;for(h in f)if(!d.hasOwnProperty(h)&&f.hasOwnProperty(h)&&null!=f[h])if("style"===
h)for(k in g=f[h],g)g.hasOwnProperty(k)&&(c||(c={}),c[k]="");else"dangerouslySetInnerHTML"!==h&&"children"!==h&&"suppressContentEditableWarning"!==h&&"suppressHydrationWarning"!==h&&"autoFocus"!==h&&(va.hasOwnProperty(h)?a||(a=[]):(a=a||[]).push(h,null));for(h in d){var l=d[h];g=null!=f?f[h]:void 0;if(d.hasOwnProperty(h)&&l!==g&&(null!=l||null!=g))if("style"===h)if(g){for(k in g)!g.hasOwnProperty(k)||l&&l.hasOwnProperty(k)||(c||(c={}),c[k]="");for(k in l)l.hasOwnProperty(k)&&g[k]!==l[k]&&(c||(c={}),
c[k]=l[k])}else c||(a||(a=[]),a.push(h,c)),c=l;else"dangerouslySetInnerHTML"===h?(l=l?l.__html:void 0,g=g?g.__html:void 0,null!=l&&g!==l&&(a=a||[]).push(h,l)):"children"===h?g===l||"string"!==typeof l&&"number"!==typeof l||(a=a||[]).push(h,""+l):"suppressContentEditableWarning"!==h&&"suppressHydrationWarning"!==h&&(va.hasOwnProperty(h)?(null!=l&&rd(e,h),a||g===l||(a=[])):(a=a||[]).push(h,l))}c&&(a=a||[]).push("style",c);e=a;if(b.updateQueue=e)b.effectTag|=4}};
qi=function(a,b,c,d){c!==d&&(b.effectTag|=4)};function ri(a,b){switch(a.tailMode){case "hidden":b=a.tail;for(var c=null;null!==b;)null!==b.alternate&&(c=b),b=b.sibling;null===c?a.tail=null:c.sibling=null;break;case "collapsed":c=a.tail;for(var d=null;null!==c;)null!==c.alternate&&(d=c),c=c.sibling;null===d?b||null===a.tail?a.tail=null:a.tail.sibling=null:d.sibling=null}}
function si(a,b,c){var d=b.pendingProps;switch(b.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return null;case 1:return L(b.type)&&Df(),null;case 3:return eh(),H(K),H(J),c=b.stateNode,c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),null!==a&&null!==a.child||!Wh(b)||(b.effectTag|=4),oi(b),null;case 5:gh(b);c=ch(bh.current);var e=b.type;if(null!==a&&null!=b.stateNode)pi(a,b,e,d,c),a.ref!==b.ref&&(b.effectTag|=128);else{if(!d){if(null===b.stateNode)throw Error(u(166));
return null}a=ch($g.current);if(Wh(b)){d=b.stateNode;e=b.type;var f=b.memoizedProps;d[Md]=b;d[Nd]=f;switch(e){case "iframe":case "object":case "embed":F("load",d);break;case "video":case "audio":for(a=0;a<ac.length;a++)F(ac[a],d);break;case "source":F("error",d);break;case "img":case "image":case "link":F("error",d);F("load",d);break;case "form":F("reset",d);F("submit",d);break;case "details":F("toggle",d);break;case "input":Ab(d,f);F("invalid",d);rd(c,"onChange");break;case "select":d._wrapperState=
{wasMultiple:!!f.multiple};F("invalid",d);rd(c,"onChange");break;case "textarea":Jb(d,f),F("invalid",d),rd(c,"onChange")}od(e,f);a=null;for(var g in f)if(f.hasOwnProperty(g)){var h=f[g];"children"===g?"string"===typeof h?d.textContent!==h&&(a=["children",h]):"number"===typeof h&&d.textContent!==""+h&&(a=["children",""+h]):va.hasOwnProperty(g)&&null!=h&&rd(c,g)}switch(e){case "input":xb(d);Eb(d,f,!0);break;case "textarea":xb(d);Lb(d);break;case "select":case "option":break;default:"function"===typeof f.onClick&&
(d.onclick=sd)}c=a;b.updateQueue=c;null!==c&&(b.effectTag|=4)}else{g=9===c.nodeType?c:c.ownerDocument;a===qd&&(a=Nb(e));a===qd?"script"===e?(a=g.createElement("div"),a.innerHTML="<script>\x3c/script>",a=a.removeChild(a.firstChild)):"string"===typeof d.is?a=g.createElement(e,{is:d.is}):(a=g.createElement(e),"select"===e&&(g=a,d.multiple?g.multiple=!0:d.size&&(g.size=d.size))):a=g.createElementNS(a,e);a[Md]=b;a[Nd]=d;ni(a,b,!1,!1);b.stateNode=a;g=pd(e,d);switch(e){case "iframe":case "object":case "embed":F("load",
a);h=d;break;case "video":case "audio":for(h=0;h<ac.length;h++)F(ac[h],a);h=d;break;case "source":F("error",a);h=d;break;case "img":case "image":case "link":F("error",a);F("load",a);h=d;break;case "form":F("reset",a);F("submit",a);h=d;break;case "details":F("toggle",a);h=d;break;case "input":Ab(a,d);h=zb(a,d);F("invalid",a);rd(c,"onChange");break;case "option":h=Gb(a,d);break;case "select":a._wrapperState={wasMultiple:!!d.multiple};h=n({},d,{value:void 0});F("invalid",a);rd(c,"onChange");break;case "textarea":Jb(a,
d);h=Ib(a,d);F("invalid",a);rd(c,"onChange");break;default:h=d}od(e,h);var k=h;for(f in k)if(k.hasOwnProperty(f)){var l=k[f];"style"===f?md(a,l):"dangerouslySetInnerHTML"===f?(l=l?l.__html:void 0,null!=l&&Qb(a,l)):"children"===f?"string"===typeof l?("textarea"!==e||""!==l)&&Rb(a,l):"number"===typeof l&&Rb(a,""+l):"suppressContentEditableWarning"!==f&&"suppressHydrationWarning"!==f&&"autoFocus"!==f&&(va.hasOwnProperty(f)?null!=l&&rd(c,f):null!=l&&Xa(a,f,l,g))}switch(e){case "input":xb(a);Eb(a,d,!1);
break;case "textarea":xb(a);Lb(a);break;case "option":null!=d.value&&a.setAttribute("value",""+rb(d.value));break;case "select":a.multiple=!!d.multiple;c=d.value;null!=c?Hb(a,!!d.multiple,c,!1):null!=d.defaultValue&&Hb(a,!!d.multiple,d.defaultValue,!0);break;default:"function"===typeof h.onClick&&(a.onclick=sd)}Fd(e,d)&&(b.effectTag|=4)}null!==b.ref&&(b.effectTag|=128)}return null;case 6:if(a&&null!=b.stateNode)qi(a,b,a.memoizedProps,d);else{if("string"!==typeof d&&null===b.stateNode)throw Error(u(166));
c=ch(bh.current);ch($g.current);Wh(b)?(c=b.stateNode,d=b.memoizedProps,c[Md]=b,c.nodeValue!==d&&(b.effectTag|=4)):(c=(9===c.nodeType?c:c.ownerDocument).createTextNode(d),c[Md]=b,b.stateNode=c)}return null;case 13:H(M);d=b.memoizedState;if(0!==(b.effectTag&64))return b.expirationTime=c,b;c=null!==d;d=!1;null===a?void 0!==b.memoizedProps.fallback&&Wh(b):(e=a.memoizedState,d=null!==e,c||null===e||(e=a.child.sibling,null!==e&&(f=b.firstEffect,null!==f?(b.firstEffect=e,e.nextEffect=f):(b.firstEffect=b.lastEffect=
e,e.nextEffect=null),e.effectTag=8)));if(c&&!d&&0!==(b.mode&2))if(null===a&&!0!==b.memoizedProps.unstable_avoidThisFallback||0!==(M.current&1))S===ti&&(S=ui);else{if(S===ti||S===ui)S=vi;0!==wi&&null!==T&&(xi(T,U),yi(T,wi))}if(c||d)b.effectTag|=4;return null;case 4:return eh(),oi(b),null;case 10:return og(b),null;case 17:return L(b.type)&&Df(),null;case 19:H(M);d=b.memoizedState;if(null===d)return null;e=0!==(b.effectTag&64);f=d.rendering;if(null===f)if(e)ri(d,!1);else{if(S!==ti||null!==a&&0!==(a.effectTag&
64))for(f=b.child;null!==f;){a=hh(f);if(null!==a){b.effectTag|=64;ri(d,!1);e=a.updateQueue;null!==e&&(b.updateQueue=e,b.effectTag|=4);null===d.lastEffect&&(b.firstEffect=null);b.lastEffect=d.lastEffect;for(d=b.child;null!==d;)e=d,f=c,e.effectTag&=2,e.nextEffect=null,e.firstEffect=null,e.lastEffect=null,a=e.alternate,null===a?(e.childExpirationTime=0,e.expirationTime=f,e.child=null,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null):(e.childExpirationTime=a.childExpirationTime,
e.expirationTime=a.expirationTime,e.child=a.child,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,f=a.dependencies,e.dependencies=null===f?null:{expirationTime:f.expirationTime,firstContext:f.firstContext,responders:f.responders}),d=d.sibling;I(M,M.current&1|2);return b.child}f=f.sibling}}else{if(!e)if(a=hh(f),null!==a){if(b.effectTag|=64,e=!0,c=a.updateQueue,null!==c&&(b.updateQueue=c,b.effectTag|=4),ri(d,!0),null===d.tail&&"hidden"===d.tailMode&&!f.alternate)return b=
b.lastEffect=d.lastEffect,null!==b&&(b.nextEffect=null),null}else 2*$f()-d.renderingStartTime>d.tailExpiration&&1<c&&(b.effectTag|=64,e=!0,ri(d,!1),b.expirationTime=b.childExpirationTime=c-1);d.isBackwards?(f.sibling=b.child,b.child=f):(c=d.last,null!==c?c.sibling=f:b.child=f,d.last=f)}return null!==d.tail?(0===d.tailExpiration&&(d.tailExpiration=$f()+500),c=d.tail,d.rendering=c,d.tail=c.sibling,d.lastEffect=b.lastEffect,d.renderingStartTime=$f(),c.sibling=null,b=M.current,I(M,e?b&1|2:b&1),c):null}throw Error(u(156,
b.tag));}function zi(a){switch(a.tag){case 1:L(a.type)&&Df();var b=a.effectTag;return b&4096?(a.effectTag=b&-4097|64,a):null;case 3:eh();H(K);H(J);b=a.effectTag;if(0!==(b&64))throw Error(u(285));a.effectTag=b&-4097|64;return a;case 5:return gh(a),null;case 13:return H(M),b=a.effectTag,b&4096?(a.effectTag=b&-4097|64,a):null;case 19:return H(M),null;case 4:return eh(),null;case 10:return og(a),null;default:return null}}function Ai(a,b){return{value:a,source:b,stack:qb(b)}}
var Bi="function"===typeof WeakSet?WeakSet:Set;function Ci(a,b){var c=b.source,d=b.stack;null===d&&null!==c&&(d=qb(c));null!==c&&pb(c.type);b=b.value;null!==a&&1===a.tag&&pb(a.type);try{console.error(b)}catch(e){setTimeout(function(){throw e;})}}function Di(a,b){try{b.props=a.memoizedProps,b.state=a.memoizedState,b.componentWillUnmount()}catch(c){Ei(a,c)}}function Fi(a){var b=a.ref;if(null!==b)if("function"===typeof b)try{b(null)}catch(c){Ei(a,c)}else b.current=null}
function Gi(a,b){switch(b.tag){case 0:case 11:case 15:case 22:return;case 1:if(b.effectTag&256&&null!==a){var c=a.memoizedProps,d=a.memoizedState;a=b.stateNode;b=a.getSnapshotBeforeUpdate(b.elementType===b.type?c:ig(b.type,c),d);a.__reactInternalSnapshotBeforeUpdate=b}return;case 3:case 5:case 6:case 4:case 17:return}throw Error(u(163));}
function Hi(a,b){b=b.updateQueue;b=null!==b?b.lastEffect:null;if(null!==b){var c=b=b.next;do{if((c.tag&a)===a){var d=c.destroy;c.destroy=void 0;void 0!==d&&d()}c=c.next}while(c!==b)}}function Ii(a,b){b=b.updateQueue;b=null!==b?b.lastEffect:null;if(null!==b){var c=b=b.next;do{if((c.tag&a)===a){var d=c.create;c.destroy=d()}c=c.next}while(c!==b)}}
function Ji(a,b,c){switch(c.tag){case 0:case 11:case 15:case 22:Ii(3,c);return;case 1:a=c.stateNode;if(c.effectTag&4)if(null===b)a.componentDidMount();else{var d=c.elementType===c.type?b.memoizedProps:ig(c.type,b.memoizedProps);a.componentDidUpdate(d,b.memoizedState,a.__reactInternalSnapshotBeforeUpdate)}b=c.updateQueue;null!==b&&Cg(c,b,a);return;case 3:b=c.updateQueue;if(null!==b){a=null;if(null!==c.child)switch(c.child.tag){case 5:a=c.child.stateNode;break;case 1:a=c.child.stateNode}Cg(c,b,a)}return;
case 5:a=c.stateNode;null===b&&c.effectTag&4&&Fd(c.type,c.memoizedProps)&&a.focus();return;case 6:return;case 4:return;case 12:return;case 13:null===c.memoizedState&&(c=c.alternate,null!==c&&(c=c.memoizedState,null!==c&&(c=c.dehydrated,null!==c&&Vc(c))));return;case 19:case 17:case 20:case 21:return}throw Error(u(163));}
function Ki(a,b,c){"function"===typeof Li&&Li(b);switch(b.tag){case 0:case 11:case 14:case 15:case 22:a=b.updateQueue;if(null!==a&&(a=a.lastEffect,null!==a)){var d=a.next;cg(97<c?97:c,function(){var a=d;do{var c=a.destroy;if(void 0!==c){var g=b;try{c()}catch(h){Ei(g,h)}}a=a.next}while(a!==d)})}break;case 1:Fi(b);c=b.stateNode;"function"===typeof c.componentWillUnmount&&Di(b,c);break;case 5:Fi(b);break;case 4:Mi(a,b,c)}}
function Ni(a){var b=a.alternate;a.return=null;a.child=null;a.memoizedState=null;a.updateQueue=null;a.dependencies=null;a.alternate=null;a.firstEffect=null;a.lastEffect=null;a.pendingProps=null;a.memoizedProps=null;a.stateNode=null;null!==b&&Ni(b)}function Oi(a){return 5===a.tag||3===a.tag||4===a.tag}
function Pi(a){a:{for(var b=a.return;null!==b;){if(Oi(b)){var c=b;break a}b=b.return}throw Error(u(160));}b=c.stateNode;switch(c.tag){case 5:var d=!1;break;case 3:b=b.containerInfo;d=!0;break;case 4:b=b.containerInfo;d=!0;break;default:throw Error(u(161));}c.effectTag&16&&(Rb(b,""),c.effectTag&=-17);a:b:for(c=a;;){for(;null===c.sibling;){if(null===c.return||Oi(c.return)){c=null;break a}c=c.return}c.sibling.return=c.return;for(c=c.sibling;5!==c.tag&&6!==c.tag&&18!==c.tag;){if(c.effectTag&2)continue b;
if(null===c.child||4===c.tag)continue b;else c.child.return=c,c=c.child}if(!(c.effectTag&2)){c=c.stateNode;break a}}d?Qi(a,c,b):Ri(a,c,b)}
function Qi(a,b,c){var d=a.tag,e=5===d||6===d;if(e)a=e?a.stateNode:a.stateNode.instance,b?8===c.nodeType?c.parentNode.insertBefore(a,b):c.insertBefore(a,b):(8===c.nodeType?(b=c.parentNode,b.insertBefore(a,c)):(b=c,b.appendChild(a)),c=c._reactRootContainer,null!==c&&void 0!==c||null!==b.onclick||(b.onclick=sd));else if(4!==d&&(a=a.child,null!==a))for(Qi(a,b,c),a=a.sibling;null!==a;)Qi(a,b,c),a=a.sibling}
function Ri(a,b,c){var d=a.tag,e=5===d||6===d;if(e)a=e?a.stateNode:a.stateNode.instance,b?c.insertBefore(a,b):c.appendChild(a);else if(4!==d&&(a=a.child,null!==a))for(Ri(a,b,c),a=a.sibling;null!==a;)Ri(a,b,c),a=a.sibling}
function Mi(a,b,c){for(var d=b,e=!1,f,g;;){if(!e){e=d.return;a:for(;;){if(null===e)throw Error(u(160));f=e.stateNode;switch(e.tag){case 5:g=!1;break a;case 3:f=f.containerInfo;g=!0;break a;case 4:f=f.containerInfo;g=!0;break a}e=e.return}e=!0}if(5===d.tag||6===d.tag){a:for(var h=a,k=d,l=c,m=k;;)if(Ki(h,m,l),null!==m.child&&4!==m.tag)m.child.return=m,m=m.child;else{if(m===k)break a;for(;null===m.sibling;){if(null===m.return||m.return===k)break a;m=m.return}m.sibling.return=m.return;m=m.sibling}g?(h=
f,k=d.stateNode,8===h.nodeType?h.parentNode.removeChild(k):h.removeChild(k)):f.removeChild(d.stateNode)}else if(4===d.tag){if(null!==d.child){f=d.stateNode.containerInfo;g=!0;d.child.return=d;d=d.child;continue}}else if(Ki(a,d,c),null!==d.child){d.child.return=d;d=d.child;continue}if(d===b)break;for(;null===d.sibling;){if(null===d.return||d.return===b)return;d=d.return;4===d.tag&&(e=!1)}d.sibling.return=d.return;d=d.sibling}}
function Si(a,b){switch(b.tag){case 0:case 11:case 14:case 15:case 22:Hi(3,b);return;case 1:return;case 5:var c=b.stateNode;if(null!=c){var d=b.memoizedProps,e=null!==a?a.memoizedProps:d;a=b.type;var f=b.updateQueue;b.updateQueue=null;if(null!==f){c[Nd]=d;"input"===a&&"radio"===d.type&&null!=d.name&&Bb(c,d);pd(a,e);b=pd(a,d);for(e=0;e<f.length;e+=2){var g=f[e],h=f[e+1];"style"===g?md(c,h):"dangerouslySetInnerHTML"===g?Qb(c,h):"children"===g?Rb(c,h):Xa(c,g,h,b)}switch(a){case "input":Cb(c,d);break;
case "textarea":Kb(c,d);break;case "select":b=c._wrapperState.wasMultiple,c._wrapperState.wasMultiple=!!d.multiple,a=d.value,null!=a?Hb(c,!!d.multiple,a,!1):b!==!!d.multiple&&(null!=d.defaultValue?Hb(c,!!d.multiple,d.defaultValue,!0):Hb(c,!!d.multiple,d.multiple?[]:"",!1))}}}return;case 6:if(null===b.stateNode)throw Error(u(162));b.stateNode.nodeValue=b.memoizedProps;return;case 3:b=b.stateNode;b.hydrate&&(b.hydrate=!1,Vc(b.containerInfo));return;case 12:return;case 13:c=b;null===b.memoizedState?
d=!1:(d=!0,c=b.child,Ti=$f());if(null!==c)a:for(a=c;;){if(5===a.tag)f=a.stateNode,d?(f=f.style,"function"===typeof f.setProperty?f.setProperty("display","none","important"):f.display="none"):(f=a.stateNode,e=a.memoizedProps.style,e=void 0!==e&&null!==e&&e.hasOwnProperty("display")?e.display:null,f.style.display=ld("display",e));else if(6===a.tag)a.stateNode.nodeValue=d?"":a.memoizedProps;else if(13===a.tag&&null!==a.memoizedState&&null===a.memoizedState.dehydrated){f=a.child.sibling;f.return=a;a=
f;continue}else if(null!==a.child){a.child.return=a;a=a.child;continue}if(a===c)break;for(;null===a.sibling;){if(null===a.return||a.return===c)break a;a=a.return}a.sibling.return=a.return;a=a.sibling}Ui(b);return;case 19:Ui(b);return;case 17:return}throw Error(u(163));}function Ui(a){var b=a.updateQueue;if(null!==b){a.updateQueue=null;var c=a.stateNode;null===c&&(c=a.stateNode=new Bi);b.forEach(function(b){var d=Vi.bind(null,a,b);c.has(b)||(c.add(b),b.then(d,d))})}}
var Wi="function"===typeof WeakMap?WeakMap:Map;function Xi(a,b,c){c=wg(c,null);c.tag=3;c.payload={element:null};var d=b.value;c.callback=function(){Yi||(Yi=!0,Zi=d);Ci(a,b)};return c}
function $i(a,b,c){c=wg(c,null);c.tag=3;var d=a.type.getDerivedStateFromError;if("function"===typeof d){var e=b.value;c.payload=function(){Ci(a,b);return d(e)}}var f=a.stateNode;null!==f&&"function"===typeof f.componentDidCatch&&(c.callback=function(){"function"!==typeof d&&(null===aj?aj=new Set([this]):aj.add(this),Ci(a,b));var c=b.stack;this.componentDidCatch(b.value,{componentStack:null!==c?c:""})});return c}
var bj=Math.ceil,cj=Wa.ReactCurrentDispatcher,dj=Wa.ReactCurrentOwner,V=0,ej=8,fj=16,gj=32,ti=0,hj=1,ij=2,ui=3,vi=4,jj=5,W=V,T=null,X=null,U=0,S=ti,kj=null,lj=1073741823,mj=1073741823,nj=null,wi=0,oj=!1,Ti=0,pj=500,Y=null,Yi=!1,Zi=null,aj=null,qj=!1,rj=null,sj=90,tj=null,uj=0,vj=null,wj=0;function Gg(){return(W&(fj|gj))!==V?1073741821-($f()/10|0):0!==wj?wj:wj=1073741821-($f()/10|0)}
function Hg(a,b,c){b=b.mode;if(0===(b&2))return 1073741823;var d=ag();if(0===(b&4))return 99===d?1073741823:1073741822;if((W&fj)!==V)return U;if(null!==c)a=hg(a,c.timeoutMs|0||5E3,250);else switch(d){case 99:a=1073741823;break;case 98:a=hg(a,150,100);break;case 97:case 96:a=hg(a,5E3,250);break;case 95:a=2;break;default:throw Error(u(326));}null!==T&&a===U&&--a;return a}
function Ig(a,b){if(50<uj)throw uj=0,vj=null,Error(u(185));a=xj(a,b);if(null!==a){var c=ag();1073741823===b?(W&ej)!==V&&(W&(fj|gj))===V?yj(a):(Z(a),W===V&&gg()):Z(a);(W&4)===V||98!==c&&99!==c||(null===tj?tj=new Map([[a,b]]):(c=tj.get(a),(void 0===c||c>b)&&tj.set(a,b)))}}
function xj(a,b){a.expirationTime<b&&(a.expirationTime=b);var c=a.alternate;null!==c&&c.expirationTime<b&&(c.expirationTime=b);var d=a.return,e=null;if(null===d&&3===a.tag)e=a.stateNode;else for(;null!==d;){c=d.alternate;d.childExpirationTime<b&&(d.childExpirationTime=b);null!==c&&c.childExpirationTime<b&&(c.childExpirationTime=b);if(null===d.return&&3===d.tag){e=d.stateNode;break}d=d.return}null!==e&&(T===e&&(Bg(b),S===vi&&xi(e,U)),yi(e,b));return e}
function zj(a){var b=a.lastExpiredTime;if(0!==b)return b;b=a.firstPendingTime;if(!Aj(a,b))return b;var c=a.lastPingedTime;a=a.nextKnownPendingLevel;a=c>a?c:a;return 2>=a&&b!==a?0:a}
function Z(a){if(0!==a.lastExpiredTime)a.callbackExpirationTime=1073741823,a.callbackPriority=99,a.callbackNode=eg(yj.bind(null,a));else{var b=zj(a),c=a.callbackNode;if(0===b)null!==c&&(a.callbackNode=null,a.callbackExpirationTime=0,a.callbackPriority=90);else{var d=Gg();1073741823===b?d=99:1===b||2===b?d=95:(d=10*(1073741821-b)-10*(1073741821-d),d=0>=d?99:250>=d?98:5250>=d?97:95);if(null!==c){var e=a.callbackPriority;if(a.callbackExpirationTime===b&&e>=d)return;c!==Tf&&Kf(c)}a.callbackExpirationTime=
b;a.callbackPriority=d;b=1073741823===b?eg(yj.bind(null,a)):dg(d,Bj.bind(null,a),{timeout:10*(1073741821-b)-$f()});a.callbackNode=b}}}
function Bj(a,b){wj=0;if(b)return b=Gg(),Cj(a,b),Z(a),null;var c=zj(a);if(0!==c){b=a.callbackNode;if((W&(fj|gj))!==V)throw Error(u(327));Dj();a===T&&c===U||Ej(a,c);if(null!==X){var d=W;W|=fj;var e=Fj();do try{Gj();break}catch(h){Hj(a,h)}while(1);ng();W=d;cj.current=e;if(S===hj)throw b=kj,Ej(a,c),xi(a,c),Z(a),b;if(null===X)switch(e=a.finishedWork=a.current.alternate,a.finishedExpirationTime=c,d=S,T=null,d){case ti:case hj:throw Error(u(345));case ij:Cj(a,2<c?2:c);break;case ui:xi(a,c);d=a.lastSuspendedTime;
c===d&&(a.nextKnownPendingLevel=Ij(e));if(1073741823===lj&&(e=Ti+pj-$f(),10<e)){if(oj){var f=a.lastPingedTime;if(0===f||f>=c){a.lastPingedTime=c;Ej(a,c);break}}f=zj(a);if(0!==f&&f!==c)break;if(0!==d&&d!==c){a.lastPingedTime=d;break}a.timeoutHandle=Hd(Jj.bind(null,a),e);break}Jj(a);break;case vi:xi(a,c);d=a.lastSuspendedTime;c===d&&(a.nextKnownPendingLevel=Ij(e));if(oj&&(e=a.lastPingedTime,0===e||e>=c)){a.lastPingedTime=c;Ej(a,c);break}e=zj(a);if(0!==e&&e!==c)break;if(0!==d&&d!==c){a.lastPingedTime=
d;break}1073741823!==mj?d=10*(1073741821-mj)-$f():1073741823===lj?d=0:(d=10*(1073741821-lj)-5E3,e=$f(),c=10*(1073741821-c)-e,d=e-d,0>d&&(d=0),d=(120>d?120:480>d?480:1080>d?1080:1920>d?1920:3E3>d?3E3:4320>d?4320:1960*bj(d/1960))-d,c<d&&(d=c));if(10<d){a.timeoutHandle=Hd(Jj.bind(null,a),d);break}Jj(a);break;case jj:if(1073741823!==lj&&null!==nj){f=lj;var g=nj;d=g.busyMinDurationMs|0;0>=d?d=0:(e=g.busyDelayMs|0,f=$f()-(10*(1073741821-f)-(g.timeoutMs|0||5E3)),d=f<=e?0:e+d-f);if(10<d){xi(a,c);a.timeoutHandle=
Hd(Jj.bind(null,a),d);break}}Jj(a);break;default:throw Error(u(329));}Z(a);if(a.callbackNode===b)return Bj.bind(null,a)}}return null}
function yj(a){var b=a.lastExpiredTime;b=0!==b?b:1073741823;if((W&(fj|gj))!==V)throw Error(u(327));Dj();a===T&&b===U||Ej(a,b);if(null!==X){var c=W;W|=fj;var d=Fj();do try{Kj();break}catch(e){Hj(a,e)}while(1);ng();W=c;cj.current=d;if(S===hj)throw c=kj,Ej(a,b),xi(a,b),Z(a),c;if(null!==X)throw Error(u(261));a.finishedWork=a.current.alternate;a.finishedExpirationTime=b;T=null;Jj(a);Z(a)}return null}function Lj(){if(null!==tj){var a=tj;tj=null;a.forEach(function(a,c){Cj(c,a);Z(c)});gg()}}
function Mj(a,b){var c=W;W|=1;try{return a(b)}finally{W=c,W===V&&gg()}}function Nj(a,b){var c=W;W&=-2;W|=ej;try{return a(b)}finally{W=c,W===V&&gg()}}
function Ej(a,b){a.finishedWork=null;a.finishedExpirationTime=0;var c=a.timeoutHandle;-1!==c&&(a.timeoutHandle=-1,Id(c));if(null!==X)for(c=X.return;null!==c;){var d=c;switch(d.tag){case 1:d=d.type.childContextTypes;null!==d&&void 0!==d&&Df();break;case 3:eh();H(K);H(J);break;case 5:gh(d);break;case 4:eh();break;case 13:H(M);break;case 19:H(M);break;case 10:og(d)}c=c.return}T=a;X=Sg(a.current,null);U=b;S=ti;kj=null;mj=lj=1073741823;nj=null;wi=0;oj=!1}
function Hj(a,b){do{try{ng();jh.current=sh;if(mh)for(var c=N.memoizedState;null!==c;){var d=c.queue;null!==d&&(d.pending=null);c=c.next}lh=0;P=O=N=null;mh=!1;if(null===X||null===X.return)return S=hj,kj=b,X=null;a:{var e=a,f=X.return,g=X,h=b;b=U;g.effectTag|=2048;g.firstEffect=g.lastEffect=null;if(null!==h&&"object"===typeof h&&"function"===typeof h.then){var k=h;if(0===(g.mode&2)){var l=g.alternate;l?(g.updateQueue=l.updateQueue,g.memoizedState=l.memoizedState,g.expirationTime=l.expirationTime):(g.updateQueue=
null,g.memoizedState=null)}var m=0!==(M.current&1),p=f;do{var x;if(x=13===p.tag){var z=p.memoizedState;if(null!==z)x=null!==z.dehydrated?!0:!1;else{var ca=p.memoizedProps;x=void 0===ca.fallback?!1:!0!==ca.unstable_avoidThisFallback?!0:m?!1:!0}}if(x){var D=p.updateQueue;if(null===D){var t=new Set;t.add(k);p.updateQueue=t}else D.add(k);if(0===(p.mode&2)){p.effectTag|=64;g.effectTag&=-2981;if(1===g.tag)if(null===g.alternate)g.tag=17;else{var y=wg(1073741823,null);y.tag=2;xg(g,y)}g.expirationTime=1073741823;
break a}h=void 0;g=b;var A=e.pingCache;null===A?(A=e.pingCache=new Wi,h=new Set,A.set(k,h)):(h=A.get(k),void 0===h&&(h=new Set,A.set(k,h)));if(!h.has(g)){h.add(g);var q=Oj.bind(null,e,k,g);k.then(q,q)}p.effectTag|=4096;p.expirationTime=b;break a}p=p.return}while(null!==p);h=Error((pb(g.type)||"A React component")+" suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display."+qb(g))}S!==
jj&&(S=ij);h=Ai(h,g);p=f;do{switch(p.tag){case 3:k=h;p.effectTag|=4096;p.expirationTime=b;var B=Xi(p,k,b);yg(p,B);break a;case 1:k=h;var w=p.type,ub=p.stateNode;if(0===(p.effectTag&64)&&("function"===typeof w.getDerivedStateFromError||null!==ub&&"function"===typeof ub.componentDidCatch&&(null===aj||!aj.has(ub)))){p.effectTag|=4096;p.expirationTime=b;var vb=$i(p,k,b);yg(p,vb);break a}}p=p.return}while(null!==p)}X=Pj(X)}catch(Xc){b=Xc;continue}break}while(1)}
function Fj(){var a=cj.current;cj.current=sh;return null===a?sh:a}function Ag(a,b){a<lj&&2<a&&(lj=a);null!==b&&a<mj&&2<a&&(mj=a,nj=b)}function Bg(a){a>wi&&(wi=a)}function Kj(){for(;null!==X;)X=Qj(X)}function Gj(){for(;null!==X&&!Uf();)X=Qj(X)}function Qj(a){var b=Rj(a.alternate,a,U);a.memoizedProps=a.pendingProps;null===b&&(b=Pj(a));dj.current=null;return b}
function Pj(a){X=a;do{var b=X.alternate;a=X.return;if(0===(X.effectTag&2048)){b=si(b,X,U);if(1===U||1!==X.childExpirationTime){for(var c=0,d=X.child;null!==d;){var e=d.expirationTime,f=d.childExpirationTime;e>c&&(c=e);f>c&&(c=f);d=d.sibling}X.childExpirationTime=c}if(null!==b)return b;null!==a&&0===(a.effectTag&2048)&&(null===a.firstEffect&&(a.firstEffect=X.firstEffect),null!==X.lastEffect&&(null!==a.lastEffect&&(a.lastEffect.nextEffect=X.firstEffect),a.lastEffect=X.lastEffect),1<X.effectTag&&(null!==
a.lastEffect?a.lastEffect.nextEffect=X:a.firstEffect=X,a.lastEffect=X))}else{b=zi(X);if(null!==b)return b.effectTag&=2047,b;null!==a&&(a.firstEffect=a.lastEffect=null,a.effectTag|=2048)}b=X.sibling;if(null!==b)return b;X=a}while(null!==X);S===ti&&(S=jj);return null}function Ij(a){var b=a.expirationTime;a=a.childExpirationTime;return b>a?b:a}function Jj(a){var b=ag();cg(99,Sj.bind(null,a,b));return null}
function Sj(a,b){do Dj();while(null!==rj);if((W&(fj|gj))!==V)throw Error(u(327));var c=a.finishedWork,d=a.finishedExpirationTime;if(null===c)return null;a.finishedWork=null;a.finishedExpirationTime=0;if(c===a.current)throw Error(u(177));a.callbackNode=null;a.callbackExpirationTime=0;a.callbackPriority=90;a.nextKnownPendingLevel=0;var e=Ij(c);a.firstPendingTime=e;d<=a.lastSuspendedTime?a.firstSuspendedTime=a.lastSuspendedTime=a.nextKnownPendingLevel=0:d<=a.firstSuspendedTime&&(a.firstSuspendedTime=
d-1);d<=a.lastPingedTime&&(a.lastPingedTime=0);d<=a.lastExpiredTime&&(a.lastExpiredTime=0);a===T&&(X=T=null,U=0);1<c.effectTag?null!==c.lastEffect?(c.lastEffect.nextEffect=c,e=c.firstEffect):e=c:e=c.firstEffect;if(null!==e){var f=W;W|=gj;dj.current=null;Dd=fd;var g=xd();if(yd(g)){if("selectionStart"in g)var h={start:g.selectionStart,end:g.selectionEnd};else a:{h=(h=g.ownerDocument)&&h.defaultView||window;var k=h.getSelection&&h.getSelection();if(k&&0!==k.rangeCount){h=k.anchorNode;var l=k.anchorOffset,
m=k.focusNode;k=k.focusOffset;try{h.nodeType,m.nodeType}catch(wb){h=null;break a}var p=0,x=-1,z=-1,ca=0,D=0,t=g,y=null;b:for(;;){for(var A;;){t!==h||0!==l&&3!==t.nodeType||(x=p+l);t!==m||0!==k&&3!==t.nodeType||(z=p+k);3===t.nodeType&&(p+=t.nodeValue.length);if(null===(A=t.firstChild))break;y=t;t=A}for(;;){if(t===g)break b;y===h&&++ca===l&&(x=p);y===m&&++D===k&&(z=p);if(null!==(A=t.nextSibling))break;t=y;y=t.parentNode}t=A}h=-1===x||-1===z?null:{start:x,end:z}}else h=null}h=h||{start:0,end:0}}else h=
null;Ed={activeElementDetached:null,focusedElem:g,selectionRange:h};fd=!1;Y=e;do try{Tj()}catch(wb){if(null===Y)throw Error(u(330));Ei(Y,wb);Y=Y.nextEffect}while(null!==Y);Y=e;do try{for(g=a,h=b;null!==Y;){var q=Y.effectTag;q&16&&Rb(Y.stateNode,"");if(q&128){var B=Y.alternate;if(null!==B){var w=B.ref;null!==w&&("function"===typeof w?w(null):w.current=null)}}switch(q&1038){case 2:Pi(Y);Y.effectTag&=-3;break;case 6:Pi(Y);Y.effectTag&=-3;Si(Y.alternate,Y);break;case 1024:Y.effectTag&=-1025;break;case 1028:Y.effectTag&=
-1025;Si(Y.alternate,Y);break;case 4:Si(Y.alternate,Y);break;case 8:l=Y,Mi(g,l,h),Ni(l)}Y=Y.nextEffect}}catch(wb){if(null===Y)throw Error(u(330));Ei(Y,wb);Y=Y.nextEffect}while(null!==Y);w=Ed;B=xd();q=w.focusedElem;h=w.selectionRange;if(B!==q&&q&&q.ownerDocument&&wd(q.ownerDocument.documentElement,q)){null!==h&&yd(q)&&(B=h.start,w=h.end,void 0===w&&(w=B),"selectionStart"in q?(q.selectionStart=B,q.selectionEnd=Math.min(w,q.value.length)):(w=(B=q.ownerDocument||document)&&B.defaultView||window,w.getSelection&&
(w=w.getSelection(),l=q.textContent.length,g=Math.min(h.start,l),h=void 0===h.end?g:Math.min(h.end,l),!w.extend&&g>h&&(l=h,h=g,g=l),l=vd(q,g),m=vd(q,h),l&&m&&(1!==w.rangeCount||w.anchorNode!==l.node||w.anchorOffset!==l.offset||w.focusNode!==m.node||w.focusOffset!==m.offset)&&(B=B.createRange(),B.setStart(l.node,l.offset),w.removeAllRanges(),g>h?(w.addRange(B),w.extend(m.node,m.offset)):(B.setEnd(m.node,m.offset),w.addRange(B))))));B=[];for(w=q;w=w.parentNode;)1===w.nodeType&&B.push({element:w,left:w.scrollLeft,
top:w.scrollTop});"function"===typeof q.focus&&q.focus();for(q=0;q<B.length;q++)w=B[q],w.element.scrollLeft=w.left,w.element.scrollTop=w.top}fd=!!Dd;Ed=Dd=null;a.current=c;Y=e;do try{for(q=a;null!==Y;){var ub=Y.effectTag;ub&36&&Ji(q,Y.alternate,Y);if(ub&128){B=void 0;var vb=Y.ref;if(null!==vb){var Xc=Y.stateNode;switch(Y.tag){case 5:B=Xc;break;default:B=Xc}"function"===typeof vb?vb(B):vb.current=B}}Y=Y.nextEffect}}catch(wb){if(null===Y)throw Error(u(330));Ei(Y,wb);Y=Y.nextEffect}while(null!==Y);Y=
null;Vf();W=f}else a.current=c;if(qj)qj=!1,rj=a,sj=b;else for(Y=e;null!==Y;)b=Y.nextEffect,Y.nextEffect=null,Y=b;b=a.firstPendingTime;0===b&&(aj=null);1073741823===b?a===vj?uj++:(uj=0,vj=a):uj=0;"function"===typeof Uj&&Uj(c.stateNode,d);Z(a);if(Yi)throw Yi=!1,a=Zi,Zi=null,a;if((W&ej)!==V)return null;gg();return null}function Tj(){for(;null!==Y;){var a=Y.effectTag;0!==(a&256)&&Gi(Y.alternate,Y);0===(a&512)||qj||(qj=!0,dg(97,function(){Dj();return null}));Y=Y.nextEffect}}
function Dj(){if(90!==sj){var a=97<sj?97:sj;sj=90;return cg(a,Vj)}}function Vj(){if(null===rj)return!1;var a=rj;rj=null;if((W&(fj|gj))!==V)throw Error(u(331));var b=W;W|=gj;for(a=a.current.firstEffect;null!==a;){try{var c=a;if(0!==(c.effectTag&512))switch(c.tag){case 0:case 11:case 15:case 22:Hi(5,c),Ii(5,c)}}catch(d){if(null===a)throw Error(u(330));Ei(a,d)}c=a.nextEffect;a.nextEffect=null;a=c}W=b;gg();return!0}
function Wj(a,b,c){b=Ai(c,b);b=Xi(a,b,1073741823);xg(a,b);a=xj(a,1073741823);null!==a&&Z(a)}function Ei(a,b){if(3===a.tag)Wj(a,a,b);else for(var c=a.return;null!==c;){if(3===c.tag){Wj(c,a,b);break}else if(1===c.tag){var d=c.stateNode;if("function"===typeof c.type.getDerivedStateFromError||"function"===typeof d.componentDidCatch&&(null===aj||!aj.has(d))){a=Ai(b,a);a=$i(c,a,1073741823);xg(c,a);c=xj(c,1073741823);null!==c&&Z(c);break}}c=c.return}}
function Oj(a,b,c){var d=a.pingCache;null!==d&&d.delete(b);T===a&&U===c?S===vi||S===ui&&1073741823===lj&&$f()-Ti<pj?Ej(a,U):oj=!0:Aj(a,c)&&(b=a.lastPingedTime,0!==b&&b<c||(a.lastPingedTime=c,Z(a)))}function Vi(a,b){var c=a.stateNode;null!==c&&c.delete(b);b=0;0===b&&(b=Gg(),b=Hg(b,a,null));a=xj(a,b);null!==a&&Z(a)}var Rj;
Rj=function(a,b,c){var d=b.expirationTime;if(null!==a){var e=b.pendingProps;if(a.memoizedProps!==e||K.current)rg=!0;else{if(d<c){rg=!1;switch(b.tag){case 3:hi(b);Xh();break;case 5:fh(b);if(b.mode&4&&1!==c&&e.hidden)return b.expirationTime=b.childExpirationTime=1,null;break;case 1:L(b.type)&&Gf(b);break;case 4:dh(b,b.stateNode.containerInfo);break;case 10:d=b.memoizedProps.value;e=b.type._context;I(jg,e._currentValue);e._currentValue=d;break;case 13:if(null!==b.memoizedState){d=b.child.childExpirationTime;
if(0!==d&&d>=c)return ji(a,b,c);I(M,M.current&1);b=$h(a,b,c);return null!==b?b.sibling:null}I(M,M.current&1);break;case 19:d=b.childExpirationTime>=c;if(0!==(a.effectTag&64)){if(d)return mi(a,b,c);b.effectTag|=64}e=b.memoizedState;null!==e&&(e.rendering=null,e.tail=null);I(M,M.current);if(!d)return null}return $h(a,b,c)}rg=!1}}else rg=!1;b.expirationTime=0;switch(b.tag){case 2:d=b.type;null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2);a=b.pendingProps;e=Cf(b,J.current);qg(b,c);e=oh(null,
b,d,a,e,c);b.effectTag|=1;if("object"===typeof e&&null!==e&&"function"===typeof e.render&&void 0===e.$$typeof){b.tag=1;b.memoizedState=null;b.updateQueue=null;if(L(d)){var f=!0;Gf(b)}else f=!1;b.memoizedState=null!==e.state&&void 0!==e.state?e.state:null;ug(b);var g=d.getDerivedStateFromProps;"function"===typeof g&&Fg(b,d,g,a);e.updater=Jg;b.stateNode=e;e._reactInternalFiber=b;Ng(b,d,a,c);b=gi(null,b,d,!0,f,c)}else b.tag=0,R(null,b,e,c),b=b.child;return b;case 16:a:{e=b.elementType;null!==a&&(a.alternate=
null,b.alternate=null,b.effectTag|=2);a=b.pendingProps;ob(e);if(1!==e._status)throw e._result;e=e._result;b.type=e;f=b.tag=Xj(e);a=ig(e,a);switch(f){case 0:b=di(null,b,e,a,c);break a;case 1:b=fi(null,b,e,a,c);break a;case 11:b=Zh(null,b,e,a,c);break a;case 14:b=ai(null,b,e,ig(e.type,a),d,c);break a}throw Error(u(306,e,""));}return b;case 0:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:ig(d,e),di(a,b,d,e,c);case 1:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:ig(d,e),fi(a,b,d,e,c);
case 3:hi(b);d=b.updateQueue;if(null===a||null===d)throw Error(u(282));d=b.pendingProps;e=b.memoizedState;e=null!==e?e.element:null;vg(a,b);zg(b,d,null,c);d=b.memoizedState.element;if(d===e)Xh(),b=$h(a,b,c);else{if(e=b.stateNode.hydrate)Ph=Jd(b.stateNode.containerInfo.firstChild),Oh=b,e=Qh=!0;if(e)for(c=Yg(b,null,d,c),b.child=c;c;)c.effectTag=c.effectTag&-3|1024,c=c.sibling;else R(a,b,d,c),Xh();b=b.child}return b;case 5:return fh(b),null===a&&Uh(b),d=b.type,e=b.pendingProps,f=null!==a?a.memoizedProps:
null,g=e.children,Gd(d,e)?g=null:null!==f&&Gd(d,f)&&(b.effectTag|=16),ei(a,b),b.mode&4&&1!==c&&e.hidden?(b.expirationTime=b.childExpirationTime=1,b=null):(R(a,b,g,c),b=b.child),b;case 6:return null===a&&Uh(b),null;case 13:return ji(a,b,c);case 4:return dh(b,b.stateNode.containerInfo),d=b.pendingProps,null===a?b.child=Xg(b,null,d,c):R(a,b,d,c),b.child;case 11:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:ig(d,e),Zh(a,b,d,e,c);case 7:return R(a,b,b.pendingProps,c),b.child;case 8:return R(a,
b,b.pendingProps.children,c),b.child;case 12:return R(a,b,b.pendingProps.children,c),b.child;case 10:a:{d=b.type._context;e=b.pendingProps;g=b.memoizedProps;f=e.value;var h=b.type._context;I(jg,h._currentValue);h._currentValue=f;if(null!==g)if(h=g.value,f=$e(h,f)?0:("function"===typeof d._calculateChangedBits?d._calculateChangedBits(h,f):1073741823)|0,0===f){if(g.children===e.children&&!K.current){b=$h(a,b,c);break a}}else for(h=b.child,null!==h&&(h.return=b);null!==h;){var k=h.dependencies;if(null!==
k){g=h.child;for(var l=k.firstContext;null!==l;){if(l.context===d&&0!==(l.observedBits&f)){1===h.tag&&(l=wg(c,null),l.tag=2,xg(h,l));h.expirationTime<c&&(h.expirationTime=c);l=h.alternate;null!==l&&l.expirationTime<c&&(l.expirationTime=c);pg(h.return,c);k.expirationTime<c&&(k.expirationTime=c);break}l=l.next}}else g=10===h.tag?h.type===b.type?null:h.child:h.child;if(null!==g)g.return=h;else for(g=h;null!==g;){if(g===b){g=null;break}h=g.sibling;if(null!==h){h.return=g.return;g=h;break}g=g.return}h=
g}R(a,b,e.children,c);b=b.child}return b;case 9:return e=b.type,f=b.pendingProps,d=f.children,qg(b,c),e=sg(e,f.unstable_observedBits),d=d(e),b.effectTag|=1,R(a,b,d,c),b.child;case 14:return e=b.type,f=ig(e,b.pendingProps),f=ig(e.type,f),ai(a,b,e,f,d,c);case 15:return ci(a,b,b.type,b.pendingProps,d,c);case 17:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:ig(d,e),null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2),b.tag=1,L(d)?(a=!0,Gf(b)):a=!1,qg(b,c),Lg(b,d,e),Ng(b,d,e,c),gi(null,
b,d,!0,a,c);case 19:return mi(a,b,c)}throw Error(u(156,b.tag));};var Uj=null,Li=null;function Yj(a){if("undefined"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__)return!1;var b=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(b.isDisabled||!b.supportsFiber)return!0;try{var c=b.inject(a);Uj=function(a){try{b.onCommitFiberRoot(c,a,void 0,64===(a.current.effectTag&64))}catch(e){}};Li=function(a){try{b.onCommitFiberUnmount(c,a)}catch(e){}}}catch(d){}return!0}
function Zj(a,b,c,d){this.tag=a;this.key=c;this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null;this.index=0;this.ref=null;this.pendingProps=b;this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null;this.mode=d;this.effectTag=0;this.lastEffect=this.firstEffect=this.nextEffect=null;this.childExpirationTime=this.expirationTime=0;this.alternate=null}function Sh(a,b,c,d){return new Zj(a,b,c,d)}
function bi(a){a=a.prototype;return!(!a||!a.isReactComponent)}function Xj(a){if("function"===typeof a)return bi(a)?1:0;if(void 0!==a&&null!==a){a=a.$$typeof;if(a===gb)return 11;if(a===jb)return 14}return 2}
function Sg(a,b){var c=a.alternate;null===c?(c=Sh(a.tag,b,a.key,a.mode),c.elementType=a.elementType,c.type=a.type,c.stateNode=a.stateNode,c.alternate=a,a.alternate=c):(c.pendingProps=b,c.effectTag=0,c.nextEffect=null,c.firstEffect=null,c.lastEffect=null);c.childExpirationTime=a.childExpirationTime;c.expirationTime=a.expirationTime;c.child=a.child;c.memoizedProps=a.memoizedProps;c.memoizedState=a.memoizedState;c.updateQueue=a.updateQueue;b=a.dependencies;c.dependencies=null===b?null:{expirationTime:b.expirationTime,
firstContext:b.firstContext,responders:b.responders};c.sibling=a.sibling;c.index=a.index;c.ref=a.ref;return c}
function Ug(a,b,c,d,e,f){var g=2;d=a;if("function"===typeof a)bi(a)&&(g=1);else if("string"===typeof a)g=5;else a:switch(a){case ab:return Wg(c.children,e,f,b);case fb:g=8;e|=7;break;case bb:g=8;e|=1;break;case cb:return a=Sh(12,c,b,e|8),a.elementType=cb,a.type=cb,a.expirationTime=f,a;case hb:return a=Sh(13,c,b,e),a.type=hb,a.elementType=hb,a.expirationTime=f,a;case ib:return a=Sh(19,c,b,e),a.elementType=ib,a.expirationTime=f,a;default:if("object"===typeof a&&null!==a)switch(a.$$typeof){case db:g=
10;break a;case eb:g=9;break a;case gb:g=11;break a;case jb:g=14;break a;case kb:g=16;d=null;break a;case lb:g=22;break a}throw Error(u(130,null==a?a:typeof a,""));}b=Sh(g,c,b,e);b.elementType=a;b.type=d;b.expirationTime=f;return b}function Wg(a,b,c,d){a=Sh(7,a,d,b);a.expirationTime=c;return a}function Tg(a,b,c){a=Sh(6,a,null,b);a.expirationTime=c;return a}
function Vg(a,b,c){b=Sh(4,null!==a.children?a.children:[],a.key,b);b.expirationTime=c;b.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation};return b}
function ak(a,b,c){this.tag=b;this.current=null;this.containerInfo=a;this.pingCache=this.pendingChildren=null;this.finishedExpirationTime=0;this.finishedWork=null;this.timeoutHandle=-1;this.pendingContext=this.context=null;this.hydrate=c;this.callbackNode=null;this.callbackPriority=90;this.lastExpiredTime=this.lastPingedTime=this.nextKnownPendingLevel=this.lastSuspendedTime=this.firstSuspendedTime=this.firstPendingTime=0}
function Aj(a,b){var c=a.firstSuspendedTime;a=a.lastSuspendedTime;return 0!==c&&c>=b&&a<=b}function xi(a,b){var c=a.firstSuspendedTime,d=a.lastSuspendedTime;c<b&&(a.firstSuspendedTime=b);if(d>b||0===c)a.lastSuspendedTime=b;b<=a.lastPingedTime&&(a.lastPingedTime=0);b<=a.lastExpiredTime&&(a.lastExpiredTime=0)}
function yi(a,b){b>a.firstPendingTime&&(a.firstPendingTime=b);var c=a.firstSuspendedTime;0!==c&&(b>=c?a.firstSuspendedTime=a.lastSuspendedTime=a.nextKnownPendingLevel=0:b>=a.lastSuspendedTime&&(a.lastSuspendedTime=b+1),b>a.nextKnownPendingLevel&&(a.nextKnownPendingLevel=b))}function Cj(a,b){var c=a.lastExpiredTime;if(0===c||c>b)a.lastExpiredTime=b}
function bk(a,b,c,d){var e=b.current,f=Gg(),g=Dg.suspense;f=Hg(f,e,g);a:if(c){c=c._reactInternalFiber;b:{if(dc(c)!==c||1!==c.tag)throw Error(u(170));var h=c;do{switch(h.tag){case 3:h=h.stateNode.context;break b;case 1:if(L(h.type)){h=h.stateNode.__reactInternalMemoizedMergedChildContext;break b}}h=h.return}while(null!==h);throw Error(u(171));}if(1===c.tag){var k=c.type;if(L(k)){c=Ff(c,k,h);break a}}c=h}else c=Af;null===b.context?b.context=c:b.pendingContext=c;b=wg(f,g);b.payload={element:a};d=void 0===
d?null:d;null!==d&&(b.callback=d);xg(e,b);Ig(e,f);return f}function ck(a){a=a.current;if(!a.child)return null;switch(a.child.tag){case 5:return a.child.stateNode;default:return a.child.stateNode}}function dk(a,b){a=a.memoizedState;null!==a&&null!==a.dehydrated&&a.retryTime<b&&(a.retryTime=b)}function ek(a,b){dk(a,b);(a=a.alternate)&&dk(a,b)}
function fk(a,b,c){c=null!=c&&!0===c.hydrate;var d=new ak(a,b,c),e=Sh(3,null,null,2===b?7:1===b?3:0);d.current=e;e.stateNode=d;ug(e);a[Od]=d.current;c&&0!==b&&Jc(a,9===a.nodeType?a:a.ownerDocument);this._internalRoot=d}fk.prototype.render=function(a){bk(a,this._internalRoot,null,null)};fk.prototype.unmount=function(){var a=this._internalRoot,b=a.containerInfo;bk(null,a,null,function(){b[Od]=null})};
function gk(a){return!(!a||1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType&&(8!==a.nodeType||" react-mount-point-unstable "!==a.nodeValue))}function hk(a,b){b||(b=a?9===a.nodeType?a.documentElement:a.firstChild:null,b=!(!b||1!==b.nodeType||!b.hasAttribute("data-reactroot")));if(!b)for(var c;c=a.lastChild;)a.removeChild(c);return new fk(a,0,b?{hydrate:!0}:void 0)}
function ik(a,b,c,d,e){var f=c._reactRootContainer;if(f){var g=f._internalRoot;if("function"===typeof e){var h=e;e=function(){var a=ck(g);h.call(a)}}bk(b,g,a,e)}else{f=c._reactRootContainer=hk(c,d);g=f._internalRoot;if("function"===typeof e){var k=e;e=function(){var a=ck(g);k.call(a)}}Nj(function(){bk(b,g,a,e)})}return ck(g)}function jk(a,b,c){var d=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:$a,key:null==d?null:""+d,children:a,containerInfo:b,implementation:c}}
wc=function(a){if(13===a.tag){var b=hg(Gg(),150,100);Ig(a,b);ek(a,b)}};xc=function(a){13===a.tag&&(Ig(a,3),ek(a,3))};yc=function(a){if(13===a.tag){var b=Gg();b=Hg(b,a,null);Ig(a,b);ek(a,b)}};
za=function(a,b,c){switch(b){case "input":Cb(a,c);b=c.name;if("radio"===c.type&&null!=b){for(c=a;c.parentNode;)c=c.parentNode;c=c.querySelectorAll("input[name="+JSON.stringify(""+b)+'][type="radio"]');for(b=0;b<c.length;b++){var d=c[b];if(d!==a&&d.form===a.form){var e=Qd(d);if(!e)throw Error(u(90));yb(d);Cb(d,e)}}}break;case "textarea":Kb(a,c);break;case "select":b=c.value,null!=b&&Hb(a,!!c.multiple,b,!1)}};Fa=Mj;
Ga=function(a,b,c,d,e){var f=W;W|=4;try{return cg(98,a.bind(null,b,c,d,e))}finally{W=f,W===V&&gg()}};Ha=function(){(W&(1|fj|gj))===V&&(Lj(),Dj())};Ia=function(a,b){var c=W;W|=2;try{return a(b)}finally{W=c,W===V&&gg()}};function kk(a,b){var c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!gk(b))throw Error(u(200));return jk(a,b,null,c)}var lk={Events:[Nc,Pd,Qd,xa,ta,Xd,function(a){jc(a,Wd)},Da,Ea,id,mc,Dj,{current:!1}]};
(function(a){var b=a.findFiberByHostInstance;return Yj(n({},a,{overrideHookState:null,overrideProps:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Wa.ReactCurrentDispatcher,findHostInstanceByFiber:function(a){a=hc(a);return null===a?null:a.stateNode},findFiberByHostInstance:function(a){return b?b(a):null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null}))})({findFiberByHostInstance:tc,bundleType:0,version:"16.13.1",
rendererPackageName:"react-dom"});exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=lk;exports.createPortal=kk;exports.findDOMNode=function(a){if(null==a)return null;if(1===a.nodeType)return a;var b=a._reactInternalFiber;if(void 0===b){if("function"===typeof a.render)throw Error(u(188));throw Error(u(268,Object.keys(a)));}a=hc(b);a=null===a?null:a.stateNode;return a};
exports.flushSync=function(a,b){if((W&(fj|gj))!==V)throw Error(u(187));var c=W;W|=1;try{return cg(99,a.bind(null,b))}finally{W=c,gg()}};exports.hydrate=function(a,b,c){if(!gk(b))throw Error(u(200));return ik(null,a,b,!0,c)};exports.render=function(a,b,c){if(!gk(b))throw Error(u(200));return ik(null,a,b,!1,c)};
exports.unmountComponentAtNode=function(a){if(!gk(a))throw Error(u(40));return a._reactRootContainer?(Nj(function(){ik(null,null,a,!1,function(){a._reactRootContainer=null;a[Od]=null})}),!0):!1};exports.unstable_batchedUpdates=Mj;exports.unstable_createPortal=function(a,b){return kk(a,b,2<arguments.length&&void 0!==arguments[2]?arguments[2]:null)};
exports.unstable_renderSubtreeIntoContainer=function(a,b,c,d){if(!gk(c))throw Error(u(200));if(null==a||void 0===a._reactInternalFiber)throw Error(u(38));return ik(a,b,c,!1,d)};exports.version="16.13.1";


/***/ }),

/***/ 34:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(35);
} else {}


/***/ }),

/***/ 35:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v0.19.1
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var f,g,h,k,l;
if("undefined"===typeof window||"function"!==typeof MessageChannel){var p=null,q=null,t=function(){if(null!==p)try{var a=exports.unstable_now();p(!0,a);p=null}catch(b){throw setTimeout(t,0),b;}},u=Date.now();exports.unstable_now=function(){return Date.now()-u};f=function(a){null!==p?setTimeout(f,0,a):(p=a,setTimeout(t,0))};g=function(a,b){q=setTimeout(a,b)};h=function(){clearTimeout(q)};k=function(){return!1};l=exports.unstable_forceFrameRate=function(){}}else{var w=window.performance,x=window.Date,
y=window.setTimeout,z=window.clearTimeout;if("undefined"!==typeof console){var A=window.cancelAnimationFrame;"function"!==typeof window.requestAnimationFrame&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills");"function"!==typeof A&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills")}if("object"===
typeof w&&"function"===typeof w.now)exports.unstable_now=function(){return w.now()};else{var B=x.now();exports.unstable_now=function(){return x.now()-B}}var C=!1,D=null,E=-1,F=5,G=0;k=function(){return exports.unstable_now()>=G};l=function(){};exports.unstable_forceFrameRate=function(a){0>a||125<a?console.error("forceFrameRate takes a positive int between 0 and 125, forcing framerates higher than 125 fps is not unsupported"):F=0<a?Math.floor(1E3/a):5};var H=new MessageChannel,I=H.port2;H.port1.onmessage=
function(){if(null!==D){var a=exports.unstable_now();G=a+F;try{D(!0,a)?I.postMessage(null):(C=!1,D=null)}catch(b){throw I.postMessage(null),b;}}else C=!1};f=function(a){D=a;C||(C=!0,I.postMessage(null))};g=function(a,b){E=y(function(){a(exports.unstable_now())},b)};h=function(){z(E);E=-1}}function J(a,b){var c=a.length;a.push(b);a:for(;;){var d=c-1>>>1,e=a[d];if(void 0!==e&&0<K(e,b))a[d]=b,a[c]=e,c=d;else break a}}function L(a){a=a[0];return void 0===a?null:a}
function M(a){var b=a[0];if(void 0!==b){var c=a.pop();if(c!==b){a[0]=c;a:for(var d=0,e=a.length;d<e;){var m=2*(d+1)-1,n=a[m],v=m+1,r=a[v];if(void 0!==n&&0>K(n,c))void 0!==r&&0>K(r,n)?(a[d]=r,a[v]=c,d=v):(a[d]=n,a[m]=c,d=m);else if(void 0!==r&&0>K(r,c))a[d]=r,a[v]=c,d=v;else break a}}return b}return null}function K(a,b){var c=a.sortIndex-b.sortIndex;return 0!==c?c:a.id-b.id}var N=[],O=[],P=1,Q=null,R=3,S=!1,T=!1,U=!1;
function V(a){for(var b=L(O);null!==b;){if(null===b.callback)M(O);else if(b.startTime<=a)M(O),b.sortIndex=b.expirationTime,J(N,b);else break;b=L(O)}}function W(a){U=!1;V(a);if(!T)if(null!==L(N))T=!0,f(X);else{var b=L(O);null!==b&&g(W,b.startTime-a)}}
function X(a,b){T=!1;U&&(U=!1,h());S=!0;var c=R;try{V(b);for(Q=L(N);null!==Q&&(!(Q.expirationTime>b)||a&&!k());){var d=Q.callback;if(null!==d){Q.callback=null;R=Q.priorityLevel;var e=d(Q.expirationTime<=b);b=exports.unstable_now();"function"===typeof e?Q.callback=e:Q===L(N)&&M(N);V(b)}else M(N);Q=L(N)}if(null!==Q)var m=!0;else{var n=L(O);null!==n&&g(W,n.startTime-b);m=!1}return m}finally{Q=null,R=c,S=!1}}
function Y(a){switch(a){case 1:return-1;case 2:return 250;case 5:return 1073741823;case 4:return 1E4;default:return 5E3}}var Z=l;exports.unstable_IdlePriority=5;exports.unstable_ImmediatePriority=1;exports.unstable_LowPriority=4;exports.unstable_NormalPriority=3;exports.unstable_Profiling=null;exports.unstable_UserBlockingPriority=2;exports.unstable_cancelCallback=function(a){a.callback=null};exports.unstable_continueExecution=function(){T||S||(T=!0,f(X))};
exports.unstable_getCurrentPriorityLevel=function(){return R};exports.unstable_getFirstCallbackNode=function(){return L(N)};exports.unstable_next=function(a){switch(R){case 1:case 2:case 3:var b=3;break;default:b=R}var c=R;R=b;try{return a()}finally{R=c}};exports.unstable_pauseExecution=function(){};exports.unstable_requestPaint=Z;exports.unstable_runWithPriority=function(a,b){switch(a){case 1:case 2:case 3:case 4:case 5:break;default:a=3}var c=R;R=a;try{return b()}finally{R=c}};
exports.unstable_scheduleCallback=function(a,b,c){var d=exports.unstable_now();if("object"===typeof c&&null!==c){var e=c.delay;e="number"===typeof e&&0<e?d+e:d;c="number"===typeof c.timeout?c.timeout:Y(a)}else c=Y(a),e=d;c=e+c;a={id:P++,callback:b,priorityLevel:a,startTime:e,expirationTime:c,sortIndex:-1};e>d?(a.sortIndex=e,J(O,a),null===L(N)&&a===L(O)&&(U?h():U=!0,g(W,e-d))):(a.sortIndex=c,J(N,a),T||S||(T=!0,f(X)));return a};
exports.unstable_shouldYield=function(){var a=exports.unstable_now();V(a);var b=L(N);return b!==Q&&null!==Q&&null!==b&&null!==b.callback&&b.startTime<=a&&b.expirationTime<Q.expirationTime||k()};exports.unstable_wrapCallback=function(a){var b=R;return function(){var c=R;R=b;try{return a.apply(this,arguments)}finally{R=c}}};


/***/ }),

/***/ 38:
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(29);
            var content = __webpack_require__(39);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ 39:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(30);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "#app{max-width:900px;margin:0 auto}.pull-right{float:right}.calc-ui{box-sizing:border-box}.calc-ui .gui-line{font-family:monospace}.calc-ui .gui-line.unit-complete input{font-family:monospace;font-size:inherit;border:1px solid gray;padding:4px}.calc-ui .gui-line.unit-complete .prompt,.calc-ui .gui-line.unit-complete .inline-response{padding-top:4px;padding-bottom:4px}.calc-ui .gui-line.unit-complete .inline-query,.calc-ui .gui-line.unit-complete .inline-response{display:inline-block;vertical-align:text-top}.calc-ui .gui-line.unit-complete .dropdown-menu{margin:0;list-style:none;padding-left:0;padding:1ex;position:absolute;max-height:300px;background-color:white;border:1px solid black;box-shadow:5px 5px 5px rgba(0,0,0,0.3);overflow-y:auto;border-radius:5px}.tagged-string-display{font-family:monospace;white-space:pre-wrap}a.unit-href,a.unit-href:visited,a.unit-href:hover,a.unit-href:active{color:#00e}.gnu-units-categorize ::selection{background-color:#cff}.gnu-rewrite-test{white-space:pre}.gnu-rewrite-test .clickable{cursor:pointer}.gnu-rewrite-test ul.table-of-contents{list-style:none}.gnu-rewrite-test ul.table-of-contents .toc-line{text-indent:-2em;padding-left:2em}.gnu-rewrite-test .deleted-box{font-style:italic;color:gray}.gnu-rewrite-test .normal-box{display:inline-block}.gnu-rewrite-test .normal-box.well{margin-bottom:0}.gnu-rewrite-test .normal-box td{padding:8px}.gnu-rewrite-test .normal-box .content,.gnu-rewrite-test .normal-box .comment{float:left}.gnu-rewrite-test .normal-box .comment{margin-left:1em;margin-bottom:0}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ("#\n# This file is the units database for use with GNU units, a units conversion\n# program by Adrian Mariano adrianm@gnu.org\n#\n# August 2015 Version 2.13\n#\n# Copyright (C) 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2004, 2005, 2006\n#               2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015\n# Free Software Foundation, Inc\n#\n# This program is free software; you can redistribute it and/or modify\n# it under the terms of the GNU General Public License as published by\n# the Free Software Foundation; either version 3 of the License, or\n# (at your option) any later version.\n#\n# This program is distributed in the hope that it will be useful,\n# but WITHOUT ANY WARRANTY; without even the implied warranty of\n# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n# GNU General Public License for more details.\n#\n# You should have received a copy of the GNU General Public License\n# along with this program; if not, write to the Free Software\n# Foundation, Inc., 51 Franklin Street, Fifth Floor,\n# Boston, MA  02110-1301  USA\n#\n############################################################################\n#\n# Improvements and corrections are welcome.\n#\n# Fundamental constants in this file are the 2014 CODATA recommended values.\n#\n# Most units data was drawn from\n#            1. NIST Special Publication 811, Guide for the\n#                 Use of the International System of Units (SI).\n#                 Barry N. Taylor. 1995\n#            2. CRC Handbook of Chemistry and Physics 70th edition\n#            3. Oxford English Dictionary\n#            4. Websters New Universal Unabridged Dictionary\n#            5. Units of Measure by Stephen Dresner\n#            6. A Dictionary of English Weights and Measures by Ronald Zupko\n#            7. British Weights and Measures by Ronald Zupko\n#            8. Realm of Measure by Isaac Asimov\n#            9. United States standards of weights and measures, their\n#                   creation and creators by Arthur H. Frazier.\n#           10. French weights and measures before the Revolution: a\n#                   dictionary of provincial and local units by Ronald Zupko\n#           11. Weights and Measures: their ancient origins and their\n#                   development in Great Britain up to AD 1855 by FG Skinner\n#           12. The World of Measurements by H. Arthur Klein\n#           13. For Good Measure by William Johnstone\n#           14. NTC's Encyclopedia of International Weights and Measures\n#                   by William Johnstone\n#           15. Sizes by John Lord\n#           16. Sizesaurus by Stephen Strauss\n#           17. CODATA Recommended Values of Physical Constants available at\n#                   http://physics.nist.gov/cuu/Constants/index.html\n#           18. How Many?  A Dictionary of Units of Measurement.  Available at\n#                   http://www.unc.edu/~rowlett/units/index.html\n#           19. Numericana.  http://www.numericana.com\n#           20. UK history of measurement\n#                   http://www.ukmetrication.com/history.htm\n#           21. NIST Handbook 44, Specifications, Tolerances, and\n#                 Other Technical Requirements for Weighing and Measuring\n#                 Devices. 2011\n#           22. NIST Special Publication 447, Weights and Measures Standards\n#                 of the the United States: a brief history. Lewis V. Judson.\n#                 1963; rev. 1976\n#\n# Thanks to Jeff Conrad for assistance in ferreting out unit definitions.\n#\n###########################################################################\n#\n# If units you use are missing or defined incorrectly, please contact me.\n# If your country's local units are missing and you are willing to supply\n# them, please send me a list.\n#\n# I added shoe size information but I'm not convinced that it's correct.\n# If you know anything about shoe sizes please contact me.\n#\n###########################################################################\n\n###########################################################################\n#\n# Brief Philosophy of this file\n#\n# Most unit definitions are made in terms of integers or simple fractions of\n# other definitions.  The typical exceptions are when converting between two\n# different unit systems, or the values of measured physical constants.  In\n# this file definitions are given in the most natural and revealing way in\n# terms of integer factors.\n#\n# If you make changes be sure to run 'units --check' to check your work.\n#\n# The file is USA-centric, but there is some modest effort to support other\n# countries.  This file is now coded in UTF-8.  To support environments where\n# UTF-8 is not available, definitions that require this character set are\n# wrapped in !utf8 directives.\n#\n# When a unit name is used in different countries with the different meanings\n# the system should be as follows:\n#\n# Suppose countries ABC and XYZ both use the \"foo\".  Then globally define\n#\n#   ABCfoo  <some value>\n#   XYZfoo  <different value>\n#\n# Then, using the !locale directive, define the \"foo\" appropriately for each of\n# the two countries with a definition like\n#\n# !locale ABC\n#    foo  ABCfoo\n# !endlocale\n#\n###########################################################################\n\n!locale en_US\n!  set UNITS_ENGLISH US\n!endlocale\n\n!locale en_GB\n!  set UNITS_ENGLISH GB\n!endlocale\n\n!set UNITS_ENGLISH US   # Default setting for English units\n\n###########################################################################\n#                                                                         #\n# Primitive units.  Any unit defined to contain a '!' character is a      #\n# primitive unit which will not be reduced any further.  All units should #\n# reduce to primitive units.                                              #\n#                                                                         #\n###########################################################################\n\n#\n# SI units\n#\n\nkg        !      # Mass of the international prototype\nkilogram  kg\n\ns         !      # Duration of 9192631770 periods of the radiation\nsecond    s      #   corresponding to the transition between the two hyperfine\n                 #   levels of the ground state of the cesium-133 atom\n\nm         !      # Length of the path traveled by light in a vacuum\nmeter     m      #   during 1|299792458 seconds.  Originally meant to be\n                 #   1e-7 of the length along a meridian from the equator\n                 #   to a pole.\n\nA         !      # The current which produces a force of 2e-7 N/m between two\nampere    A      #   infinitely long wires that are 1 meter apart\namp       ampere\n\ncd        !      # Luminous intensity in a given direction of a source which\ncandela   cd     #   emits monochromatic radiation at 540e12 Hz with radiant\n                 #   intensity 1|683 W/steradian.  (This differs from radiant\n                 #   intensity (W/sr) in that it is adjusted for human\n                 #   perceptual dependence on wavelength.  The frequency of\n                 #   540e12 Hz (yellow) is where human perception is most\n                 #   efficient.)\n\nmol       !      # The amount of substance of a system which contains as many\nmole      mol    #   elementary entities as there are atoms in 0.012 kg of\n                 #   carbon 12.  The elementary entities must be specified and\n                 #   may be atoms, molecules, ions, electrons, or other\n                 #   particles or groups of particles.  It is understood that\n                 #   unbound atoms of carbon 12, at rest and in the ground\n                 #   state, are referred to.\n\nK         !      # 1|273.16 of the thermodynamic temperature of the triple\nkelvin    K      #   point of water\n\n#\n# The radian and steradian are defined as dimensionless primitive units.\n# The radian is equal to m/m and the steradian to m^2/m^2 so these units are\n# dimensionless.  Retaining them as named units is useful because it allows\n# clarity in expressions and makes the meaning of unit definitions more clear.\n# These units will reduce to 1 in conversions but not for sums of units or for\n# arguments to functions.\n#\n\nradian    !dimensionless   # The angle subtended at the center of a circle by\n                           #   an arc equal in length to the radius of the\n                           #   circle\nsr        !dimensionless   # Solid angle which cuts off an area of the surface\nsteradian sr               #   of the sphere equal to that of a square with\n                           #   sides of length equal to the radius of the\n                           #   sphere\n\n#\n# Some primitive non-SI units\n#\n\nUS$       !      # The US dollar is chosen arbitrarily to be the primitive\n                 #   unit of money.\n\nbit       !      # Basic unit of information (entropy).  The entropy in bits\n                 #   of a random variable over a finite alphabet is defined\n                 #   to be the sum of -p(i)*log2(p(i)) over the alphabet where\n                 #   p(i) is the probability that the random variable takes\n                 #   on the value i.\n\n###########################################################################\n#                                                                         #\n# Prefixes (longer names must come first)                                 #\n#                                                                         #\n###########################################################################\n\nyotta-                  1e24     # Greek or Latin octo, \"eight\"\nzetta-                  1e21     # Latin septem, \"seven\"\nexa-                    1e18     # Greek hex, \"six\"\npeta-                   1e15     # Greek pente, \"five\"\ntera-                   1e12     # Greek teras, \"monster\"\ngiga-                   1e9      # Greek gigas, \"giant\"\nmega-                   1e6      # Greek megas, \"large\"\nmyria-                  1e4      # Not an official SI prefix\nkilo-                   1e3      # Greek chilioi, \"thousand\"\nhecto-                  1e2      # Greek hekaton, \"hundred\"\ndeca-                   1e1      # Greek deka, \"ten\"\ndeka-                   deca\ndeci-                   1e-1     # Latin decimus, \"tenth\"\ncenti-                  1e-2     # Latin centum, \"hundred\"\nmilli-                  1e-3     # Latin mille, \"thousand\"\nmicro-                  1e-6     # Latin micro or Greek mikros, \"small\"\nnano-                   1e-9     # Latin nanus or Greek nanos, \"dwarf\"\npico-                   1e-12    # Spanish pico, \"a bit\"\nfemto-                  1e-15    # Danish-Norwegian femten, \"fifteen\"\natto-                   1e-18    # Danish-Norwegian atten, \"eighteen\"\nzepto-                  1e-21    # Latin septem, \"seven\"\nyocto-                  1e-24    # Greek or Latin octo, \"eight\"\n\nquarter-                1|4\nsemi-                   0.5\ndemi-                   0.5\nhemi-                   0.5\nhalf-                   0.5\ndouble-                 2\ntriple-                 3\ntreble-                 3\n\nkibi-                   2^10     # In response to the convention of illegally\nmebi-                   2^20     # and confusingly using metric prefixes for\ngibi-                   2^30     # powers of two, the International\ntebi-                   2^40     # Electrotechnical Commission aproved these\npebi-                   2^50     # binary prefixes for use in 1998.  If you\nexbi-                   2^60     # want to refer to \"megabytes\" using the\nKi-                     kibi     # binary definition, use these prefixes.\nMi-                     mebi\nGi-                     gibi\nTi-                     tebi\nPi-                     pebi\nEi-                     exbi\n\nY-                      yotta\nZ-                      zetta\nE-                      exa\nP-                      peta\nT-                      tera\nG-                      giga\nM-                      mega\nk-                      kilo\nh-                      hecto\nda-                     deka\nd-                      deci\nc-                      centi\nm-                      milli\nu-                      micro   # it should be a mu but u is easy to type\nn-                      nano\np-                      pico\nf-                      femto\na-                      atto\nz-                      zepto\ny-                      yocto\n\n#\n# Names of some numbers\n#\n\none                     1\ntwo                     2\ndouble                  2\ncouple                  2\nthree                   3\ntriple                  3\nfour                    4\nquadruple               4\nfive                    5\nquintuple               5\nsix                     6\nseven                   7\neight                   8\nnine                    9\nten                     10\neleven                  11\ntwelve                  12\nthirteen                13\nfourteen                14\nfifteen                 15\nsixteen                 16\nseventeen               17\neighteen                18\nnineteen                19\ntwenty                  20\nthirty                  30\nforty                   40\nfifty                   50\nsixty                   60\nseventy                 70\neighty                  80\nninety                  90\nhundred                 100\nthousand                1000\nmillion                 1e6\n\n# These number terms were described by N. Chuquet and De la Roche in the 16th\n# century as being successive powers of a million.  These definitions are still\n# used in most European countries.  The current US definitions for these\n# numbers arose in the 17th century and don't make nearly as much sense.  These\n# numbers are listed in the CRC Concise Encyclopedia of Mathematics by Eric\n# W. Weisstein.\n\nshortbillion               1e9\nshorttrillion              1e12\nshortquadrillion           1e15\nshortquintillion           1e18\nshortsextillion            1e21\nshortseptillion            1e24\nshortoctillion             1e27\nshortnonillion             1e30\nshortnoventillion          shortnonillion\nshortdecillion             1e33\nshortundecillion           1e36\nshortduodecillion          1e39\nshorttredecillion          1e42\nshortquattuordecillion     1e45\nshortquindecillion         1e48\nshortsexdecillion          1e51\nshortseptendecillion       1e54\nshortoctodecillion         1e57\nshortnovemdecillion        1e60\nshortvigintillion          1e63\n\ncentillion              1e303\ngoogol                  1e100\n\nlongbillion               million^2\nlongtrillion              million^3\nlongquadrillion           million^4\nlongquintillion           million^5\nlongsextillion            million^6\nlongseptillion            million^7\nlongoctillion             million^8\nlongnonillion             million^9\nlongnoventillion          longnonillion\nlongdecillion             million^10\nlongundecillion           million^11\nlongduodecillion          million^12\nlongtredecillion          million^13\nlongquattuordecillion     million^14\nlongquindecillion         million^15\nlongsexdecillion          million^16\nlongseptdecillion         million^17\nlongoctodecillion         million^18\nlongnovemdecillion        million^19\nlongvigintillion          million^20\n\n# These numbers fill the gaps left by the long system above.\n\nmilliard                1000 million\nbilliard                1000 million^2\ntrilliard               1000 million^3\nquadrilliard            1000 million^4\nquintilliard            1000 million^5\nsextilliard             1000 million^6\nseptilliard             1000 million^7\noctilliard              1000 million^8\nnonilliard              1000 million^9\nnoventilliard           nonilliard\ndecilliard              1000 million^10\n\n# For consistency\n\nlongmilliard              milliard\nlongbilliard              billiard\nlongtrilliard             trilliard\nlongquadrilliard          quadrilliard\nlongquintilliard          quintilliard\nlongsextilliard           sextilliard\nlongseptilliard           septilliard\nlongoctilliard            octilliard\nlongnonilliard            nonilliard\nlongnoventilliard         noventilliard\nlongdecilliard            decilliard\n\n# The long centillion would be 1e600.  The googolplex is another\n# familiar large number equal to 10^googol.  These numbers give overflows.\n\n#\n# The short system prevails in English speaking countries\n#\n\nbillion                 shortbillion\ntrillion                shorttrillion\nquadrillion             shortquadrillion\nquintillion             shortquintillion\nsextillion              shortsextillion\nseptillion              shortseptillion\noctillion               shortoctillion\nnonillion               shortnonillion\nnoventillion            shortnoventillion\ndecillion               shortdecillion\nundecillion             shortundecillion\nduodecillion            shortduodecillion\ntredecillion            shorttredecillion\nquattuordecillion       shortquattuordecillion\nquindecillion           shortquindecillion\nsexdecillion            shortsexdecillion\nseptendecillion         shortseptendecillion\noctodecillion           shortoctodecillion\nnovemdecillion          shortnovemdecillion\nvigintillion            shortvigintillion\n\n#\n# Numbers used in India \n#\n\nlakh                    1e5\ncrore                   1e7\narab                    1e9\nkharab                  1e11\nneel                    1e13\npadm                    1e15\nshankh                  1e17\n\n#############################################################################\n#                                                                           #\n# Derived units which can be reduced to the primitive units                 #\n#                                                                           #\n#############################################################################\n\n\n\n#\n# Named SI derived units (officially accepted)\n#\n\nnewton                  kg m / s^2   # force\nN                       newton\npascal                  N/m^2        # pressure or stress\nPa                      pascal\njoule                   N m          # energy\nJ                       joule\nwatt                    J/s          # power\nW                       watt\ncoulomb                 A s          # charge\nC                       coulomb\nvolt                    W/A          # potential difference\nV                       volt\nohm                     V/A          # electrical resistance\nsiemens                 A/V          # electrical conductance\nS                       siemens\nfarad                   C/V          # capacitance\nF                       farad\nweber                   V s          # magnetic flux\nWb                      weber\nhenry                   Wb/A         # inductance\nH                       henry\ntesla                   Wb/m^2       # magnetic flux density\nT                       tesla\nhertz                   /s           # frequency\nHz                      hertz\n\n#\n# Dimensions.  These are here to help with dimensional analysis and\n# because they will appear in the list produced by hitting '?' at the\n# \"You want:\" prompt to tell the user the dimension of the unit.\n#\n\nLENGTH                  meter\nAREA                    LENGTH^2\nVOLUME                  LENGTH^3\nMASS                    kilogram\nCURRENT                 ampere\nAMOUNT                  mole\nANGLE                   radian\nSOLID_ANGLE             steradian\nMONEY                   US$\nFORCE                   newton\nPRESSURE                FORCE / AREA\nSTRESS                  FORCE / AREA\nCHARGE                  coulomb\nCAPACITANCE             farad\nRESISTANCE              ohm\nCONDUCTANCE             siemens\nINDUCTANCE              henry\nFREQUENCY               hertz\nVELOCITY                LENGTH / TIME\nACCELERATION            VELOCITY / TIME\nDENSITY                 MASS / VOLUME\nLINEAR_DENSITY          MASS / LENGTH\nVISCOSITY               FORCE TIME / AREA\nKINEMATIC_VISCOSITY     VISCOSITY / DENSITY\n\n\n#\n# units derived easily from SI units\n#\n\ngram                    millikg\ngm                      gram\ng                       gram\ntonne                   1000 kg\nt                       tonne\nmetricton               tonne\nsthene                  tonne m / s^2\nfunal                   sthene\npieze                   sthene / m^2\nquintal                 100 kg\nbar                     1e5 Pa     # About 1 atm\nb                       bar\nvac                     millibar\nmicron                  micrometer # One millionth of a meter\nbicron                  picometer  # One brbillionth of a meter\ncc                      cm^3\nare                     100 m^2\na                       are\nliter                   1000 cc       # The liter was defined in 1901 as the\noldliter                1.000028 dm^3 # space occupied by 1 kg of pure water at\nL                       liter         # the temperature of its maximum density\nl                       liter         # under a pressure of 1 atm.  This was\n                                      # supposed to be 1000 cubic cm, but it\n                                      # was discovered that the original\n                                      # measurement was off.  In 1964, the\n                                      # liter was redefined to be exactly 1000\n                                      # cubic centimeters.\nmho                     siemens    # Inverse of ohm, hence ohm spelled backward\ngalvat                  ampere     # Named after Luigi Galvani\nangstrom                1e-10 m    # Convenient for describing molecular sizes\nxunit                   xunit_cu      # Used for measuring x-ray wavelengths.\nsiegbahn                xunit         # Originally defined to be 1|3029.45 of\nxunit_cu             1.00207697e-13 m # the spacing of calcite planes at 18\nxunit_mo             1.00209952e-13 m # degC.  It was intended to be exactly\n                                      # 1e-13 m, but was later found to be\n                                      # slightly off.  Current usage is with\n                                      # reference to common x-ray lines, either\n                                      # the K-alpha 1 line of copper or the\n                                      # same line of molybdenum.\nangstromstar            1.00001495 angstrom # Defined by JA Bearden in 1965\nfermi                   1e-15 m    # Convenient for describing nuclear sizes\n                                   #   Nuclear radius is from 1 to 10 fermis\nbarn                    1e-28 m^2  # Used to measure cross section for\n                                   #   particle physics collision, said to\n                                   #   have originated in the phrase \"big as\n                                   #   a barn\".\nshed                    1e-24 barn # Defined to be a smaller companion to the\n                                   #   barn, but it's too small to be of\n                                   #   much use.\nbrewster                micron^2/N # measures stress-optical coef\ndiopter                 /m         # measures reciprocal of lens focal length\nfresnel                 1e12 Hz    # occasionally used in spectroscopy\nshake                   1e-8 sec\nsvedberg                1e-13 s    # Used for measuring the sedimentation\n                                   # coefficient for centrifuging.\ngamma                   microgram  # Also used for 1e-9 tesla\nlambda                  microliter\nspat                    1e12 m     # Rarely used for astronomical measurements\npreece                  1e13 ohm m # resistivity\nplanck                  J s        # action of one joule over one second\nsturgeon                /henry     # magnetic reluctance\ndaraf                   1/farad    # elastance (farad spelled backwards)\nleo                     10 m/s^2\npoiseuille              N s / m^2  # viscosity\nmayer                   J/g K      # specific heat\nmired                   / microK   # reciprocal color temperature.  The name\n                                   #   abbreviates micro reciprocal degree.\ncrocodile               megavolt   # used informally in UK physics labs\nmetricounce             25 g\nmounce                  metricounce\nfinsenunit              1e5 W/m^2  # Measures intensity of ultraviolet light\n                                   # with wavelength 296.7 nm.\nfluxunit                1e-26 W/m^2 Hz # Used in radio astronomy to measure\n                                       #   the energy incident on the receiving\n                                       #   body across a specified frequency\n                                       #   bandwidth.  [12]\njansky                  fluxunit   # K. G. Jansky identified radio waves coming\nJy                      jansky     # from outer space in 1931.\nflick       W / cm^2 sr micrometer # Spectral radiance or irradiance\npfu                    / cm^2 sr s # particle flux unit -- Used to measure\n                                   #   rate at which particles are received by\n                                   #   a spacecraft as particles per solid\n                                   #   angle per detector area per second. [18]\npyron            cal_IT / cm^2 min # Measures heat flow from solar radiation,\n                                   #   from Greek work \"pyr\" for fire.\nkatal                   mol/sec    # Measure of the amount of a catalyst.  One\nkat                     katal      #   katal of catalyst enables the reaction\n                                   #   to consume or produce on mol/sec.\nsolarluminosity         384.6e24 W # A common yardstick for comparing the\n                                   #   output of different stars.\n                # http://nssdc.gsfc.nasa.gov/planetary/factsheet/sunfact.html\n\n#\n# time\n#\n\nsec                     s\nminute                  60 s\nmin                     minute\nhour                    60 min\nhr                      hour\nday                     24 hr\nd                       day\nda                      day\nweek                    7 day\nwk                      week\nsennight                7 day\nfortnight               14 day\nblink                   1e-5 day   # Actual human blink takes 1|3 second\nce                      1e-2 day\ncron                    1e6 years\nwatch                   4 hours    # time a sentry stands watch or a ship's\n                                   # crew is on duty.\nbell                    1|8 watch  # Bell would be sounded every 30 minutes.\n\n# French Revolutionary Time or Decimal Time.  It was Proposed during\n# the French Revolution.  A few clocks were made, but it never caught\n# on.  In 1998 Swatch defined a time measurement called \".beat\" and\n# sold some watches that displayed time in this unit.\n\ndecimalhour             1|10 day            \ndecimalminute           1|100 decimalhour   \ndecimalsecond           1|100 decimalminute \nbeat                    decimalminute          # Swatch Internet Time\n\n#\n# angular measure\n#\n\ncircle                  2 pi radian\ndegree                  1|360 circle\ndeg                     degree\narcdeg                  degree\narcmin                  1|60 degree\narcminute               arcmin\n'                       arcmin\narcsec                  1|60 arcmin\narcsecond               arcsec\n\"                       arcsec\n''                      \"\nrightangle              90 degrees\nquadrant                1|4 circle\nquintant                1|5 circle\nsextant                 1|6 circle\n\nsign                    1|12 circle # Angular extent of one sign of the zodiac\nturn                    circle\nrevolution              turn\nrev                     turn\npulsatance              radian / sec\ngon                     1|100 rightangle  # measure of grade\ngrade                   gon\ncentesimalminute        1|100 grade\ncentesimalsecond        1|100 centesimalminute\nmilangle                1|6400 circle     # Official NIST definition.\n                                          # Another choice is 1e-3 radian.\npointangle              1|32 circle  # Used for reporting compass readings\ncentrad                 0.01 radian  # Used for angular deviation of light\n                                     # through a prism.\nmas                     milli arcsec # Used by astronomers\nseclongitude            circle (seconds/day) # Astronomers measure longitude\n                                     # (which they call right ascension) in\n                                     # time units by dividing the equator into\n                                     # 24 hours instead of 360 degrees.\n#\n# Some geometric formulas\n#\n\ncirclearea(r)   units=[m;m^2] range=[0,) pi r^2 ; sqrt(circlearea/pi)\nspherevolume(r) units=[m;m^3] range=[0,) 4|3 pi r^3 ; \\\n                                         cuberoot(spherevolume/4|3 pi)\nspherevol()     spherevolume\nsquare(x)       range=[0,)          x^2 ; sqrt(square)\n\n#\n# Solid angle measure\n#\n\nsphere                  4 pi sr\nsquaredegree            1|180^2 pi^2 sr\nsquareminute            1|60^2 squaredegree\nsquaresecond            1|60^2 squareminute\nsquarearcmin            squareminute\nsquarearcsec            squaresecond\nsphericalrightangle     0.5 pi sr\noctant                  0.5 pi sr\n\n#\n# Concentration measures\n#\n\npercent                 0.01\n%                       percent\nmill                    0.001     # Originally established by Congress in 1791\n                                  # as a unit of money equal to 0.001 dollars,\n                                  # it has come to refer to 0.001 in general.\n                                  # Used by some towns to set their property\n                                  # tax rate, and written with a symbol similar\n                                  # to the % symbol but with two 0's in the\n                                  # denominator.  [18]\nproof                   1|200     # Alcohol content measured by volume at\n                                  # 60 degrees Fahrenheit.  This is a USA\n                                  # measure.  In Europe proof=percent.\nppm                     1e-6\npartspermillion         ppm\nppb                     1e-9\npartsperbillion         ppb       # USA billion\nppt                     1e-12\npartspertrillion        ppt       # USA trillion\nkarat                   1|24      # measure of gold purity\ncaratgold               karat\ngammil                  mg/l\nbasispoint              0.01 %    # Used in finance\nfine                    1|1000    # Measure of gold purity\n\n# The pH scale is used to measure the concentration of hydronium (H3O+) ions in\n# a solution.  A neutral solution has a pH of 7 as a result of dissociated\n# water molecules.\n\npH(x) units=[1;mol/liter] range=(0,) 10^(-x) mol/liter ; (-log(pH liters/mol))\n\n\n#\n# Temperature\n#\n# Two types of units are defined: units for converting temperature differences\n# and functions for converting absolute temperatures.  Conversions for\n# differences start with \"deg\" and conversions for absolute temperature start\n# with \"temp\".\n#\n\nTEMPERATURE             kelvin\nTEMPERATURE_DIFFERENCE  kelvin\n\n# In 1741 Anders Celsius introduced a temperature scale with water boiling at\n# 0 degrees and freezing at 100 degrees at standard pressure. After his death\n# the fixed points were reversed and the scale was called the centigrade\n# scale.  Due to the difficulty of accurately measuring the temperature of\n# melting ice at standard pressure, the centigrade scale was replaced in 1954\n# by the Celsius scale which is defined by subtracting 273.15 from the\n# temperature in Kelvins.  This definition differed slightly from the old\n# centigrade definition, but the Kelvin scale depends on the triple point of\n# water rather than a melting point, so it can be measured accurately.\n\ntempC(x) units=[1;K] domain=[-273.15,) range=[0,) \\\n                             x K + stdtemp ; (tempC +(-stdtemp))/K\ntempcelsius() tempC\ndegcelsius              K\ndegC                    K\n\n# Fahrenheit defined his temperature scale by setting 0 to the coldest\n# temperature he could produce in his lab with a salt water solution and by\n# setting 96 degrees to body heat.  In Fahrenheit's words:\n#\n#    Placing the thermometer in a mixture of sal ammoniac or sea\n#    salt, ice, and water a point on the scale will be found which\n#    is denoted as zero. A second point is obtained if the same\n#    mixture is used without salt. Denote this position as 30. A\n#    third point, designated as 96, is obtained if the thermometer\n#    is placed in the mouth so as to acquire the heat of a healthy\n#    man.\"  (D. G. Fahrenheit, Phil. Trans. (London) 33, 78, 1724)\n\ntempF(x) units=[1;K] domain=[-459.67,) range=[0,) \\\n                (x+(-32)) degF + stdtemp ; (tempF+(-stdtemp))/degF + 32\ntempfahrenheit() tempF\ndegfahrenheit           5|9 degC\ndegF                    5|9 degC\n\n\ndegreesrankine          degF              # The Rankine scale has the\ndegrankine              degreesrankine    # Fahrenheit degree, but its zero\ndegreerankine           degF              # is at absolute zero.\ndegR                    degrankine\ntempR                   degrankine\ntemprankine             degrankine\n\ntempreaumur(x)    units=[1;K] domain=[-218.52,) range=[0,) \\\n                  x degreaumur+stdtemp ; (tempreaumur+(-stdtemp))/degreaumur\ndegreaumur              10|8 degC # The Reaumur scale was used in Europe and\n                                  # particularly in France.  It is defined\n                                  # to be 0 at the freezing point of water\n                                  # and 80 at the boiling point.  Reaumur\n                                  # apparently selected 80 because it is\n                                  # divisible by many numbers.\n\ndegK                    K         # \"Degrees Kelvin\" is forbidden usage.\ntempK                   K         # For consistency\n\n# Gas mark is implemented below but in a terribly ugly way.  There is\n# a simple formula, but it requires a conditional which is not\n# presently supported.\n#\n# The formula to convert to degrees Fahrenheit is:\n#\n# 25 log2(gasmark) + k_f   gasmark<=1\n# 25 (gasmark-1) + k_f     gasmark>=1\n#\n# k_f = 275\n#\ngasmark[degR] \\\n  .0625    634.67 \\\n  .125     659.67 \\\n  .25      684.67 \\\n  .5       709.67 \\\n  1        734.67 \\\n  2        759.67 \\\n  3        784.67 \\\n  4        809.67 \\\n  5        834.67 \\\n  6        859.67 \\\n  7        884.67 \\\n  8        909.67 \\\n  9        934.67 \\\n  10       959.67\n\n# Units cannot handle wind chill or heat index because they are two variable\n# functions, but they are included here for your edification.  Clearly these\n# equations are the result of a model fitting operation.\n#\n# wind chill index (WCI) a measurement of the combined cooling effect of low\n#      air temperature and wind on the human body. The index was first defined\n#      by the American Antarctic explorer Paul Siple in 1939. As currently used\n#      by U.S. meteorologists, the wind chill index is computed from the\n#      temperature T (in °F) and wind speed V (in mi/hr) using the formula:\n#          WCI = 0.0817(3.71 sqrt(V) + 5.81 - 0.25V)(T - 91.4) + 91.4.\n#      For very low wind speeds, below 4 mi/hr, the WCI is actually higher than\n#      the air temperature, but for higher wind speeds it is lower than the air\n#      temperature.\n#\n# heat index (HI or HX) a measure of the combined effect of heat and\n#      humidity on the human body. U.S. meteorologists compute the index\n#      from the temperature T (in °F) and the relative humidity H (as a\n#      value from 0 to 1).\n#        HI = -42.379 + 2.04901523 T + 1014.333127 H - 22.475541 TH\n#             - .00683783 T^2 - 548.1717 H^2 + 0.122874 T^2 H + 8.5282 T H^2\n#             - 0.0199 T^2 H^2.\n\n#\n# Physical constants\n#\n\n# Basic constants\n\npi                      3.14159265358979323846\nc                       2.99792458e8 m/s # speed of light in vacuum (exact)\nlight                   c\nmu0                     4 pi 1e-7 H/m    # permeability of vacuum (exact)\nepsilon0                1/mu0 c^2        # permittivity of vacuum (exact)\nenergy                  c^2              # convert mass to energy\ne                     1.6021766208e-19 C # electron charge\nh                   4.135667662e-15 eV s # Planck constant\nhbar                    h / 2 pi\nspin                    hbar\nG               6.67408e-11 N m^2 / kg^2 # Newtonian gravitational constant\n                                         #    This is the NIST 2006 value.\n                                         #    The relative uncertainty on this\n                                         #    is 1e-4.\ncoulombconst            1/4 pi epsilon0  # listed as \"k\" sometimes\n\n# Physico-chemical constants\n\natomicmassunit        1.660539040e-27 kg # atomic mass unit (defined to be\nu                       atomicmassunit   #   1|12 of the mass of carbon 12)\namu                     atomicmassunit\namu_chem                1.66026e-27 kg   # 1|16 of the weighted average mass of\n                                         #   the 3 naturally occuring neutral\n                                         #   isotopes of oxygen\namu_phys                1.65981e-27 kg   # 1|16 of the mass of a neutral\n                                         #   oxygen 16 atom\ndalton                  u                # Maybe this should be amu_chem?\navogadro                grams/amu mol    # size of a mole\nN_A                     avogadro\ngasconstant             k N_A            # molar gas constant\nR                       gasconstant\nboltzmann             1.38064852e-23 J/K # Boltzmann constant\nk                       boltzmann\nkboltzmann              boltzmann\nmolarvolume         mol R stdtemp / atm  # Volume occupied by one mole of an\n                                         #   ideal gas at STP.\nloschmidt     avogadro mol / molarvolume # Molecules per cubic meter of an\n                                         #   ideal gas at STP.  Loschmidt did\n                                         #   work similar to Avogadro.\nstefanboltzmann pi^2 k^4 / 60 hbar^3 c^2 # The power per area radiated by a\nsigma                   stefanboltzmann  #   blackbody at temperature T is\n                                         #   given by sigma T^4.\nwiendisplacement        2.8977729e-3 m K # Wien's Displacement Law gives the\n                                         #   frequency at which the the Planck\n                                         #   spectrum has maximum intensity.\n                                         #   The relation is lambda T = b where\n                                         #   lambda is wavelength, T is\n                                         #   temperature and b is the Wien\n                                         #   displacement.  This relation is\n                                         #   used to determine the temperature\n                                         #   of stars.\nK_J90 483597.9 GHz/V    # Direct measurement of the volt is difficult.  Until\nK_J   483597.8525 GHz/V #   recently, laboratories kept Weston cadmium cells as\n                        #   a reference, but they could drift.  In 1987 the\n                        #   CGPM officially recommended the use of the\n                        #   Josephson effect as a laboratory representation of\n                        #   the volt.  The Josephson effect occurs when two\n                        #   superconductors are separated by a thin insulating\n                        #   layer.  A \"supercurrent\" flows across the insulator\n                        #   with a frequency that depends on the potential\n                        #   applied across the superconductors.  This frequency\n                        #   can be very accurately measured.  The Josephson\n                        #   constant K_J, which is equal to 2e/h, relates the\n                        #   measured frequency to the potential.  Two values\n                        #   given, the conventional (exact) value from 1990 and\n                        #   the current CODATA measured value.  \nR_K90 25812.807 ohm     # Measurement of the ohm also presents difficulties.\nR_K   25812.8074555 ohm #   The old approach involved maintaining resistances\n                        #   that were subject to drift.  The new standard is\n                        #   based on the Hall effect.  When a current carrying\n                        #   ribbon is placed in a magnetic field, a potential\n                        #   difference develops across the ribbon.  The ratio\n                        #   of the potential difference to the current is\n                        #   called the Hall resistance.  Klaus von Klitzing\n                        #   discovered in 1980 that the Hall resistance varies\n                        #   in discrete jumps when the magnetic field is very\n                        #   large and the temperature very low.  This enables\n                        #   accurate realization of the resistance h/e^2 in the\n                        #   lab.  Two values given, the conventional (exact)\n                        #   value from 1990 and the current CODATA measured\n                        #   value.\n\n# Various conventional values\n\ngravity                 9.80665 m/s^2    # std acceleration of gravity (exact)\nforce                   gravity          # use to turn masses into forces\natm                     101325 Pa        # Standard atmospheric pressure\natmosphere              atm\nHg             13.5951 gram force / cm^3 # Standard weight of mercury (exact)\nwater                   gram force/cm^3  # Standard weight of water (exact)\nwaterdensity            gram / cm^3      # Density of water\nH2O                     water\nwc                      water            # water column\nmach                    331.46 m/s       # speed of sound in dry air at STP\nstandardtemp            273.15 K         # standard temperature\nstdtemp                 standardtemp\nnormaltemp              tempF(70)        # for gas density, from NIST\nnormtemp                normaltemp       # Handbook 44\n\n# Weight of mercury and water at different temperatures using the standard\n# force of gravity.\n\nHg10C         13.5708 force gram / cm^3  # These units, when used to form\nHg20C         13.5462 force gram / cm^3  # pressure measures, are not accurate\nHg23C         13.5386 force gram / cm^3  # because of considerations of the\nHg30C         13.5217 force gram / cm^3  # revised practical temperature scale.\nHg40C         13.4973 force gram / cm^3\nHg60F         13.5574 force gram / cm^3\nH2O0C         0.99987 force gram / cm^3\nH2O5C         0.99999 force gram / cm^3\nH2O10C        0.99973 force gram / cm^3\nH2O15C        0.99913 force gram / cm^3\nH2O18C        0.99862 force gram / cm^3\nH2O20C        0.99823 force gram / cm^3\nH2O25C        0.99707 force gram / cm^3\nH2O50C        0.98807 force gram / cm^3\nH2O100C       0.95838 force gram / cm^3\n\n# Atomic constants\n\nRinfinity            10973731.568539 /m  # The wavelengths of a spectral series\nR_H                     10967760 /m      #   can be expressed as\n                                         #     1/lambda = R (1/m^2 - 1/n^2).\n                                         #   where R is a number that various\n                                         #   slightly from element to element.\n                                         #   For hydrogen, R_H is the value,\n                                         #   and for heavy elements, the value\n                                         #   approaches Rinfinity, which can be\n                                         #   computed from\n                                         #        m_e c alpha^2 / 2 h\n                                         #   with a loss of 4 digits\n                                         #   of precision.\nalpha                   7.2973525664e-3  # The fine structure constant was\n                                         #   introduced to explain fine\n                                         #   structure visible in spectral\n                                         #   lines.  It can be computed from\n                                         #         mu0 c e^2 / 2 h\n                                         #   with a loss of 3 digits precision\n                                         #   and loss of precision in derived\n                                         #   values which use alpha.\nbohrradius              alpha / 4 pi Rinfinity\nprout                   185.5 keV        # nuclear binding energy equal to 1|12\n                                         #   binding energy of the deuteron\n# Planck constants\n\nplanckmass              2.17651e-8 kg     # sqrt(hbar c / G)\nm_P                     planckmass\nplancktime              hbar / planckmass c^2\nt_P                     plancktime\nplancklength            plancktime c\nl_P                     plancklength\n\n# Particle radius\n\nelectronradius    (1/4 pi epsilon0) e^2 / electronmass c^2   # Classical\ndeuteronchargeradius    2.1413e-15 m\nprotonchargeradius      0.8751e-15 m\n\n# Masses of elementary particles\n\nelectronmass            5.48579909070e-4 u\nm_e                     electronmass\nprotonmass              1.007276466879 u\nm_p                     protonmass\nneutronmass             1.00866491588 u\nm_n                     neutronmass\nmuonmass                0.1134289257 u\nm_mu                    muonmass\ndeuteronmass            2.013553212745 u\nm_d                     deuteronmass\nalphaparticlemass       4.001506179127 u\nm_alpha                 alphaparticlemass\ntaumass                 1.90749 u\nm_tau                   taumass\ntritonmass              3.01550071632 u\nm_t                     tritonmass\nhelionmass              3.01493224673 u\nm_h                     helionmass\n\n\n\n# particle wavelengths: the compton wavelength of a particle is\n# defined as h / m c where m is the mass of the particle.\n\nelectronwavelength      h / m_e c\nlambda_C                electronwavelength\nprotonwavelength        h / m_p c\nlambda_C,p              protonwavelength\nneutronwavelength       h / m_n c\nlambda_C,n              neutronwavelength\n\n# Magnetic moments\n\nbohrmagneton            e hbar / 2 electronmass\nmu_B                    bohrmagneton\nnuclearmagneton         e hbar /  2 protonmass\nmu_N                    nuclearmagneton\nmu_mu                  -4.49044826e-26 J/T   # Muon magnetic moment\nmu_p                    1.4106067873e-26 J/T # Proton magnetic moment\nmu_e                   -928.4764620e-26 J/T  # Electron magnetic moment\nmu_n                   -0.96623650e-26 J/T   # Neutron magnetic moment\nmu_d                    0.4330735040e-26 J/T # Deuteron magnetic moment\nmu_t                    1.504609503e-26 J/T  # Triton magnetic moment\nmu_h                   -1.074617522e-26 J/T  # Helion magnetic moment\n\n\n#\n# Units derived from physical constants\n#\n\nkgf                     kg force\ntechnicalatmosphere     kgf / cm^2\nat                      technicalatmosphere\nhyl                     kgf s^2 / m   # Also gram-force s^2/m according to [15]\nmmHg                    mm Hg\ntorr                    atm / 760  # These units, both named after Evangelista\ntor                     Pa         # Torricelli, should not be confused.  The\ninHg                    inch Hg    # torr is very close to the mm Hg. \ninH2O                   inch water\nmmH2O                   mm water\neV                      e V      # Energy acquired by a particle with charge e\nelectronvolt            eV       #   when it is accelerated through 1 V\nlightyear               c julianyear # The 365.25 day year is specified in\nly                      lightyear    # NIST publication 811\nlightsecond             c s\nlightminute             c min\nparsec                  au / tan(arcsec)    # Unit of length equal to distance\npc                      parsec              #   from the sun to a point having\n                                            #   heliocentric parallax of 1\n                                            #   arcsec (derived from parallax\n                                            #   second).  A distant object with\n                                            #   paralax theta will be about\n                                            #   (arcsec/theta) parsecs from the\n                                            #   sun (using the approximation\n                                            #   that tan(theta) = theta).\nrydberg                 h c Rinfinity       # Rydberg energy\ncrith                   0.089885 gram       # The crith is the mass of one\n                                            #   liter of hydrogen at standard\n                                            #   temperature and pressure.\namagatvolume            molarvolume\namagat                  mol/amagatvolume    # Used to measure gas densities\nlorentz                 bohrmagneton / h c  # Used to measure the extent\n                                            #   that the frequency of light\n                                            #   is shifted by a magnetic field.\ncminv                   h c / cm            # Unit of energy used in infrared\ninvcm                   cminv               #   spectroscopy.\nwavenumber              cminv\nkcal_mol                kcal_th / mol N_A   # kcal/mol is used as a unit of\n                                            #   energy by physical chemists.\n#\n# CGS system based on centimeter, gram and second\n#\n\ndyne                    cm gram / s^2   # force\ndyn                     dyne\nerg                     cm dyne         # energy\npoise                   gram / cm s     # viscosity, honors Jean Poiseuille\nP                       poise\nrhe                     /poise          # reciprocal viscosity\nstokes                  cm^2 / s        # kinematic viscosity\nSt                      stokes\nstoke                   stokes\nlentor                  stokes          # old name\nGal                     cm / s^2        # acceleration, used in geophysics\ngalileo                 Gal             # for earth's gravitational field\n                                        # (note that \"gal\" is for gallon\n                                        # but \"Gal\" is the standard symbol\n                                        # for the gal which is evidently a\n                                        # shortened form of \"galileo\".)\nbarye                   dyne/cm^2       # pressure\nbarad                   barye           # old name\nkayser                  1/cm            # Proposed as a unit for wavenumber\nbalmer                  kayser          # Even less common name than \"kayser\"\nkine                    cm/s            # velocity\nbole                    g cm / s        # momentum\npond                    gram force\nglug                gram force s^2 / cm # Mass which is accelerated at\n                                        #   1 cm/s^2 by 1 gram force\ndarcy           centipoise cm^2 / s atm # Measures permeability to fluid flow.\n\n                                        #   One darcy is the permeability of a\n                                        #   medium that allows a flow of cc/s\n                                        #   of a liquid of centipoise viscosity\n                                        #   under a pressure gradient of\n                                        #   atm/cm.  Named for H. Darcy.\n\nmobileohm               cm / dyn s      # mobile ohm, measure of mechanical\n                                        #   mobility\nmechanicalohm           dyn s / cm      # mechanical resistance\nacousticalohm           dyn s / cm^5    # ratio of the sound pressure of\n                                        #   1 dyn/cm^2 to a source of strength\n                                        #   1 cm^3/s\nray                     acousticalohm\nrayl                    dyn s / cm^3    # Specific acoustical resistance\neotvos                  1e-9 Gal/cm     # Change in gravitational acceleration\n                                        #   over horizontal distance\n\n# Electromagnetic units derived from the abampere\n\nabampere                10 A            # Current which produces a force of\nabamp                   abampere        #   2 dyne/cm between two infinitely\naA                      abampere        #   long wires that are 1 cm apart\nbiot                    aA              # alternative name for abamp\nBi                      biot\nabcoulomb               abamp sec\nabcoul                  abcoulomb\nabfarad                 abampere sec / abvolt\nabhenry                 abvolt sec / abamp\nabvolt                  dyne cm  / abamp sec\nabohm                   abvolt / abamp\nabmho                   /abohm\ngauss                   abvolt sec / cm^2\nGs                      gauss\nmaxwell                 abvolt sec      # Also called the \"line\"\nMx                      maxwell\noersted                 gauss / mu0\nOe                      oersted\ngilbert                 gauss cm / mu0\nGb                      gilbert\nGi                      gilbert\nunitpole                4 pi maxwell\nemu                     erg/gauss  # \"electro-magnetic unit\", a measure of\n                                   # magnetic moment, often used as emu/cm^3\n                                   # to specify magnetic moment density.\n\n# Gaussian system: electromagnetic units derived from statampere.\n#\n# Note that the Gaussian units are often used in such a way that Coulomb's law\n# has the form F= q1 * q2 / r^2.  The constant 1|4*pi*epsilon0 is incorporated\n# into the units.  From this, we can get the relation force=charge^2/dist^2.\n# This means that the simplification esu^2 = dyne cm^2 can be used to simplify\n# units in the Gaussian system, with the curious result that capacitance can be\n# measured in cm, resistance in sec/cm, and inductance in sec^2/cm.  These\n# units are given the names statfarad, statohm and stathenry below.\n\nstatampere              10 A cm / s c\nstatamp                 statampere\nstatvolt                dyne cm / statamp sec\nstatcoulomb             statamp s\nesu                     statcoulomb\nstatcoul                statcoulomb\nstatfarad               statamp sec / statvolt\ncmcapacitance           statfarad\nstathenry               statvolt sec / statamp\nstatohm                 statvolt / statamp\nstatmho                 /statohm\nstatmaxwell             statvolt sec\nfranklin                statcoulomb\ndebye                   1e-18 statcoul cm # unit of electrical dipole moment\nhelmholtz               debye/angstrom^2  # Dipole moment per area\njar                     1000 statfarad    # approx capacitance of Leyden jar\n\n#\n# Some historical electromagnetic units\n#\n\nintampere               0.999835 A    # Defined as the current which in one\nintamp                  intampere     #   second deposits .001118 gram of\n                                      #   silver from an aqueous solution of\n                                      #   silver nitrate.\nintfarad                0.999505 F\nintvolt                 1.00033 V\nintohm                  1.000495 ohm  # Defined as the resistance of a\n                                      #   uniform column of mercury containing\n                                      #   14.4521 gram in a column 1.063 m\n                                      #   long and maintained at 0 degC.\ndaniell                 1.042 V       # Meant to be electromotive force of a\n                                      #   Daniell cell, but in error by .04 V\nfaraday                 N_A e mol     # Charge that must flow to deposit or\nfaraday_phys            96521.9 C     #   liberate one gram equivalent of any\nfaraday_chem            96495.7 C     #   element.  (The chemical and physical\n                                      #   values are off slightly from what is\n                                      #   obtained by multiplying by amu_chem\n                                      #   or amu_phys.  These values are from\n                                      #   a 1991 NIST publication.)  Note that\n                                      #   there is a Faraday constant which is\n                                      #   equal to N_A e and hence has units of\n                                      #   C/mol.\nkappline                6000 maxwell  # Named by and for Gisbert Kapp\nsiemensunit             0.9534 ohm    # Resistance of a meter long column of\n                                      #   mercury with a 1 mm cross section.\n#\n# Printed circuit board units.  \n#\n# http://www.ndt-ed.org/GeneralResources/IACS/IACS.htm.  \n#\n# Conductivity is often expressed as a percentage of IACS.  A copper wire a\n# meter long with a 1 mm^2 cross section has a resistance of 1|58 ohm at \n# 20 deg C.  Copper density is also standarized at that temperature. \n#\n\ncopperconductivity      58 siemens m / mm^2     # A wire a meter long with\nIACS                    copperconductivity      #   a 1 mm^2 cross section\ncopperdensity           8.89 g/cm^3             # The \"ounce\" measures the     \nouncecopper             oz / ft^2 copperdensity #   thickness of copper used   \nozcu                    ouncecopper             #   in circuitboard fabrication\n                                                \n#\n# Photometric units\n#\n\nLUMINOUS_INTENSITY      candela\nLUMINOUS_FLUX           lumen\nLUMINOUS_ENERGY         talbot\nILLUMINANCE             lux\nEXITANCE                lux\n\ncandle                  1.02 candela  # Standard unit for luminous intensity\nhefnerunit              0.9 candle    #   in use before candela\nhefnercandle            hefnerunit    #\nviolle                  20.17 cd      # luminous intensity of 1 cm^2 of\n                                      #   platinum at its temperature of\n                                      #   solidification (2045 K)\n\nlumen                   cd sr         # Luminous flux (luminous energy per\nlm                      lumen         #    time unit)\n\ntalbot                  lumen s       # Luminous energy\nlumberg                 talbot        # References give these values for\nlumerg                  talbot        #    lumerg and lumberg both.  Note that\n                                      #    a paper from 1948 suggests that\n                                      #    lumerg should be 1e-7 talbots so\n                                      #    that lumergs/erg = talbots/joule.\n                                      #    lumerg = luminous erg\nlux                     lm/m^2        # Illuminance or exitance (luminous\nlx                      lux           #   flux incident on or coming from\nphot                    lumen / cm^2  #   a surface)\nph                      phot          #\nfootcandle              lumen/ft^2    # Illuminance from a 1 candela source\n                                      #    at a distance of one foot\nmetercandle             lumen/m^2     # Illuminance from a 1 candela source\n                                      #    at a distance of one meter\n\nmcs                     metercandle s # luminous energy per area, used to\n                                      #    measure photographic exposure\n\nnox                     1e-3 lux      # These two units were proposed for\nskot                    1e-3 apostilb # measurements relating to dark adapted\n                                      # eyes.\n# Luminance measures\n\nLUMINANCE               nit\n\nnit                     cd/m^2        # Luminance: the intensity per projected\nstilb                   cd / cm^2     # area of an extended luminous source.\nsb                      stilb         # (nit is from latin nitere = to shine.)\n\napostilb                cd/pi m^2\nasb                     apostilb\nblondel                 apostilb      # Named after a French scientist.\n\n# Equivalent luminance measures.  These units are units which measure\n# the luminance of a surface with a specified exitance which obeys\n# Lambert's law.  (Lambert's law specifies that luminous intensity of\n# a perfectly diffuse luminous surface is proportional to the cosine\n# of the angle at which you view the luminous surface.)\n\nequivalentlux           cd / pi m^2   # luminance of a 1 lux surface\nequivalentphot          cd / pi cm^2  # luminance of a 1 phot surface\nlambert                 cd / pi cm^2\nfootlambert             cd / pi ft^2\n\n# The bril is used to express \"brilliance\" of a source of light on a\n# logarithmic scale to correspond to subjective perception.  An increase of 1\n# bril means doubling the luminance.  A luminance of 1 lambert is defined to\n# have a brilliance of 1 bril.\n\nbril(x) units=[1;lambert]  2^(x+-100) lamberts ;log2(bril/lambert)+100\n\n# Some luminance data from the IES Lighting Handbook, 8th ed, 1993\n\nsunlum                  1.6e9 cd/m^2  # at zenith\nsunillum                100e3 lux     # clear sky\nsunillum_o              10e3 lux      # overcast sky\nsunlum_h                6e6 cd/m^2    # value at horizon\nskylum                  8000 cd/m^2   # average, clear sky\nskylum_o                2000 cd/m^2   # average, overcast sky\nmoonlum                 2500 cd/m^2\n\n#\n# Photographic Exposure Value\n# This section by Jeff Conrad (jeff_conrad@msn.com)\n#\n# The Additive system of Photographic EXposure (APEX) proposed in ASA\n# PH2.5-1960 was an attempt to simplify exposure determination for people who\n# relied on exposure tables rather than exposure meters.  Shortly thereafter,\n# nearly all cameras incorporated exposure meters, so the APEX system never\n# caught on, but the concept of exposure value remains in use.  Though given as\n# 'Ev' in ASA PH2.5-1960, it is now more commonly indicated by 'EV'.  EV is\n# related to exposure parameters by\n#\n#            A^2   LS   ES\n#     2^EV = --- = -- = --\n#             t    K    C\n#\n# Where\n#     A = Relative aperture (f-number)\n#     t = Exposure time in seconds\n#     L = Scene luminance in cd/m2\n#     E = Scene illuminance in lux\n#     S = Arithmetic ISO speed\n#     K = Reflected-light meter calibration constant\n#     C = Incident-light meter calibration constant\n#\n# Strictly, an exposure value is a combination of aperture and exposure time,\n# but it's also commonly used to indicate luminance (or illuminance).\n# Conversion to luminance or illuminance units depends on the ISO speed and the\n# meter calibration constant.  Common practice is to use an ISO speed of 100.\n# Calibration constants vary among camera and meter manufacturers: Canon,\n# Nikon, and Sekonic use a value of 12.5 for reflected-light meters, while\n# Kenko (formerly Minolta) and Pentax use a value of 14.  Kenko and Sekonic use\n# a value of 250 for incident-light meters with flat receptors.\n#\n# The values for in-camera meters apply only averaging, weighted-averaging, or\n# spot metering--the multi-segment metering incorporated in most current\n# cameras uses proprietary algorithms that evaluate many factors related to the\n# luminance distribution of what is being metered; they are not amenable to\n# simple conversions, and are usually not disclosed by the manufacturers.\n\ns100                    100 / lx s            # ISO 100 speed\niso100                  s100\n\n# Reflected-light meter calibration constant with ISO 100 speed\n\nk1250                   12.5 (cd/m2) / lx s   # For Canon, Nikon, and Sekonic\nk1400                   14   (cd/m2) / lx s   # For Kenko (Minolta) and Pentax\n\n# Incident-light meter calibration constant with ISO 100 film\n\nc250                    250 lx / lx s         # flat-disc receptor\n\n# Exposure value to scene luminance with ISO 100 imaging media\n\n# For Kenko (Minolta) or Pentax\n#ev100(x) units=[;cd/m^2] range=(0,) 2^x k1400 / s100; log2(ev100 s100/k1400)\n# For Canon, Nikon, or Sekonic\nev100(x) units=[1;cd/m^2] range=(0,) 2^x k1250 / s100; log2(ev100 s100/k1250)\nEV100()  ev100\n\n# Exposure value to scene illuminance with ISO 100 imaging media\n\niv100(x) units=[1;lx] range=(0,) 2^x c250 / s100; log2(iv100 s100 / c250)\n\n# Other Photographic Exposure Conversions\n# \n# As part of APEX, ASA PH2.5-1960 proposed several logarithmic quantities\n# related by\n#\n#    Ev = Av + Tv = Bv + Sv\n#\n# where\n#  Av = log2(A^2)       Aperture value\n#  Tv = log2(1/t)       Time value\n#  Sv = log2(N Sx)      Speed value\n#  Bv = log2(B S / K)   Luminance (\"brightness\") value\n#  Iv = log2(I S / C)   Illuminance value\n#\n# and\n#  A  = Relative aperture (f-number)\n#  t  = Exposure time in seconds\n#  Sx = Arithmetic ISO speed in 1/lux s\n#  B  = luminance in cd/m2\n#  I  = luminance in lux\n\n# The constant N derives from the arcane relationship between arithmetic\n# and logarithmic speed given in ASA PH2.5-1960.  That relationship\n# apparently was not obvious--so much so that it was thought necessary\n# to explain it in PH2.12-1961.  The constant has had several values\n# over the years, usually without explanation for the changes.  Although\n# APEX had little impact on consumer cameras, it has seen a partial\n# resurrection in the Exif standards published by the Camera & Imaging\n# Products Association of Japan.\n\n#N_apex         2^-1.75 lx s    # precise value implied in ASA PH2.12-1961,\n                                # derived from ASA PH2.5-1960.\n#N_apex         0.30 lx s       # rounded value in ASA PH2.5-1960, \n                                # ASA PH2.12-1961, and ANSI PH2.7-1986\n#N_apex         0.3162 lx s     # value in ANSI PH2.7-1973\nN_exif          1|3.125 lx s    # value in Exif 2.3 (2010), making Sv(5) = 100\nK_apex1961      11.4 (cd/m2) / lx s    # value in ASA PH2.12-1961\nK_apex1971      12.5 (cd/m2) / lx s    # value in ANSI PH3.49-1971; more common\nC_apex1961      224 lx / lx s   # value in PH2.12-1961 (20.83 for I in \n                                #   footcandles; flat sensor?)\nC_apex1971      322 lx / lx s   # mean value in PH3.49-1971 (30 +/- 5 for I in\n                                # footcandles; hemispherical sensor?)\nN_speed         N_exif\nK_lum           K_apex1971\nC_illum         C_apex1961\n\n# Units for Photographic Exposure Variables\n#\n# Practical photography sometimes pays scant attention to units for exposure\n# variables.  In particular, the \"speed\" of the imaging medium is treated as if\n# it were dimensionless when it should have units of reciprocal lux seconds;\n# this practice works only because \"speed\" is almost invariably given in\n# accordance with international standards (or similar ones used by camera\n# manufacturers)--so the assumed units are invariant.  In calculating\n# logarithmic quantities--especially the time value Tv and the exposure value\n# EV--the units for exposure time (\"shutter speed\") are often ignored; this\n# practice works only because the units of exposure time are assumed to be in\n# seconds, and the missing units that make the argument to the logarithmic\n# function dimensionless are silently provided.\n#\n# In keeping with common practice, the definitions that follow treat \"speeds\"\n# as dimensionless, so ISO 100 speed is given simply as '100'.  When\n# calculating the logarithmic APEX quantities Av and Tv, the definitions\n# provide the missing units, so the times can be given with any appropriate\n# units.  For example, giving an exposure time of 1 minute as either '1 min' or\n# '60 s' will result in Tv of -5.9068906.\n#\n# Exposure Value from f-number and Exposure Time\n# \n# Because nonlinear unit conversions only accept a single quantity,\n# there is no direct conversion from f-number and exposure time to\n# exposure value EV.  But the EV can be obtained from a combination of\n# Av and Tv.  For example, the \"sunny 16\" rule states that correct\n# exposure for a sunlit scene can achieved by using f/16 and an exposure\n# time equal to the reciprocal of the ISO speed in seconds; this can be\n# calculated as\n#\n#    ~Av(16) + ~Tv(1|100 s),\n#\n# which gives 14.643856.  These conversions may be combined with the\n# ev100 conversion:\n#\n#    ev100(~Av(16) + ~Tv(1|100 s))\n#\n# to yield the assumed average scene luminance of 3200 cd/m^2.\n\n# convert relative aperture (f-number) to aperture value\nAv(A)           units=[1;1] domain=[-2,) range=[0.5,)  2^(A/2); 2 log2(Av)\n# convert exposure time to time value\nTv(t)           units=[1;s] range=(0,)  2^(-t) s; log2(s / Tv)\n# convert logarithmic speed Sv in ASA PH2.5-1960 to ASA/ISO arithmetic speed;\n# make arithmetic speed dimensionless\n# 'Sv' conflicts with the symbol for sievert; you can uncomment this function\n# definition if you don't need that symbol\n#Sv(S)    units=[1;1] range=(0,) 2^S / (N_speed/lx s); log2((N_speed/lx s) Sv)\nSval(S)   units=[1;1] range=(0,) 2^S / (N_speed/lx s); log2((N_speed/lx s) Sval)\n\n# convert luminance value Bv in ASA PH2.12-1961 to luminance\nBv(x)           units=[1;cd/m^2] range=(0,) \\\n                2^x K_lum N_speed ; log2(Bv / (K_lum N_speed))\n\n# convert illuminance value Iv in ASA PH2.12-1961 to illuminance\nIv(x)           units=[1;lx] range=(0,) \\\n                2^x C_illum N_speed ; log2(Iv / (C_illum N_speed))\n\n# convert ASA/ISO arithmetic speed Sx to ASA logarithmic speed in \n# ASA PH2.5-1960; make arithmetic speed dimensionless\nSx(S)           units=[1;1] domain=(0,) \\\n                log2((N_speed/lx s) S); 2^Sx / (N_speed/lx s)\n\n# convert DIN speed/ISO logarithmic speed in ISO 6:1993 to arithmetic speed\n# for convenience, speed is treated here as if it were dimensionless\nSdeg(S)         units=[1;1] range=(0,) 10^((S - 1) / 10) ; (1 + 10 log(Sdeg))\nSdin()          Sdeg\n\n# Numerical Aperture and f-Number of a Lens\n#\n# The numerical aperture (NA) is given by\n#\n#   NA = n sin(theta)\n#\n# where n is the index of refraction of the medium and theta is half\n# of the angle subtended by the aperture stop from a point in the image\n# or object plane. For a lens in air, n = 1, and\n#\n#   NA = 0.5 / f-number\n#\n# convert NA to f-number\nnumericalaperture(x) units=[1;1] domain=(0,1] range=[0.5,) \\\n                     0.5 / x ; 0.5 / numericalaperture\nNA()            numericalaperture\n#\n# convert f-number to itself; restrict values to those possible\nfnumber(x)      units=[1;1] domain=[0.5,) range=[0.5,) x ; fnumber\n\n# Referenced Photographic Standards\n#\n# ASA PH-2.5-1960. USA Standard, Method for Determining (Monochrome,\n#    Continuous-Tone) Speed of Photographic Negative Materials.\n# ASA PH2.12-1961. American Standard, General-Purpose Photographic\n#    Exposure Meters (photoelectric type).\n# ANSI PH3.49-1971. American National Standard for general-purpose\n#    photographic exposure meters (photoelectric type).\n# ANSI PH2.7-1973. American National Standard Photographic Exposure Guide.\n# ANSI PH2.7-1986. American National Standard for Photography --\n#    Photographic Exposure Guide.\n# CIPA DC-008-2010. Exchangeable image file format for digital still\n#    cameras: Exif Version 2.3\n# ISO 6:1993.  International Standard, Photography -- Black-and-white\n#    pictorial still camera negative film/process systems --\n#    Determination of ISO Speed.\n\n\n#\n# Astronomical time measurements\n#\n# Astronomical time measurement is a complicated matter.  The length of the\n# true day at a given place can be 21 seconds less than 24 hours or 30 seconds\n# over 24 hours.  The two main reasons for this are the varying speed of the\n# earth in its elliptical orbit and the fact that the sun moves on the ecliptic\n# instead of along the celestial equator.  To devise a workable system for time\n# measurement, Simon Newcomb (1835-1909) used a fictitious \"mean sun\".\n# Consider a first fictitious sun traveling along the ecliptic at a constant\n# speed and coinciding with the true sun at perigee and apogee.  Then\n# considering a second fictitious sun traveling along the celestial equator at\n# a constant speed and coinciding with the first fictitious sun at the\n# equinoxes.  The second fictitious sun is the \"mean sun\".  From this equations\n# can be written out to determine the length of the mean day, and the tropical\n# year.  The length of the second was determined based on the tropical year\n# from such a calculation and was officially used from 1960-1967 until atomic\n# clocks replaced astronomical measurements for a standard of time.  All of the\n# values below give the mean time for the specified interval.\n#\n# See \"Mathematical Astronomy Morsels\" by Jean Meeus for more details\n# and a description of how to compute the correction to mean time.\n#\n\nTIME                    second\n\nanomalisticyear         365.2596 days       # The time between successive\n                                            #   perihelion passages of the\n                                            #   earth.\nsiderealyear            365.256360417 day   # The time for the earth to make\n                                            #   one revolution around the sun\n                                            #   relative to the stars.\ntropicalyear            365.242198781 day   # The time needed for the mean sun\n                                            #   as defined above to increase\n                                            #   its longitude by 360 degrees.\n                                            #   Most references defined the\n                                            #   tropical year as the interval\n                                            #   between vernal equinoxes, but\n                                            #   this is misleading.  The length\n                                            #   of the season changes over time\n                                            #   because of the eccentricity of\n                                            #   the earth's orbit.  The time\n                                            #   between vernal equinoxes is\n                                            #   approximately 365.24237 days\n                                            #   around the year 2000.  See\n                                            #   \"Mathematical Astronomy\n                                            #   Morsels\" for more details.\neclipseyear             346.62 days         # The line of nodes is the\n                                            #   intersection of the plane of\n                                            #   Earth's orbit around the sun\n                                            #   with the plane of the moon's\n                                            #   orbit around earth.  Eclipses\n                                            #   can only occur when the moon\n                                            #   and sun are close to this\n                                            #   line.  The line rotates and\n                                            #   appearances of the sun on the\n                                            #   line of nodes occur every\n                                            #   eclipse year.\nsaros                   223 synodicmonth    # The earth, moon and sun appear in\n                                            #   the same arrangement every\n                                            #   saros, so if an eclipse occurs,\n                                            #   then one saros later, a similar\n                                            #   eclipse will occur.  (The saros\n                                            #   is close to 19 eclipse years.)\n                                            #   The eclipse will occur about\n                                            #   120 degrees west of the\n                                            #   preceeding one because the\n                                            #   saros is not an even number of\n                                            #   days.  After 3 saros, an\n                                            #   eclipse will occur at\n                                            #   approximately the same place.\nsiderealday             86164.09054 s       # The sidereal day is the interval\nsiderealhour            1|24 siderealday    #   between two successive transits\nsiderealminute          1|60 siderealhour   #   of a star over the meridian,\nsiderealsecond          1|60 siderealminute #   or the time required  for the\n                                            #   earth to make one rotation\n                                            #   relative to the stars.  The\n                                            #   more usual solar day is the\n                                            #   time required to make a\n                                            #   rotation relative to the sun.\n                                            #   Because the earth moves in its\n                                            #   orbit, it has to turn a bit\n                                            #   extra to face the sun again,\n                                            #   hence the solar day is slightly\n                                            #   longer.\nanomalisticmonth        27.55454977 day     # Time for the moon to travel from\n                                            #   perigee to perigee\nnodicalmonth            27.2122199 day      # The nodes are the points where\ndraconicmonth           nodicalmonth        #   an orbit crosses the ecliptic.\ndraconiticmonth         nodicalmonth        #   This is the time required to\n                                            #   travel from the ascending node\n                                            #   to the next ascending node.\nsiderealmonth           27.321661 day       # Time required for the moon to\n                                            #   orbit the earth\nlunarmonth              29 days + 12 hours + 44 minutes + 2.8 seconds\n                                            # Mean time between full moons.\nsynodicmonth            lunarmonth          #   Full moons occur when the sun\nlunation                synodicmonth        #   and moon are on opposite sides\nlune                    1|30 lunation       #   of the earth.  Since the earth\nlunour                  1|24 lune           #   moves around the sun, the moon\n                                            #   has to revolve a bit extra to\n                                            #   get into the full moon\n                                            #   configuration.\nyear                    tropicalyear\nyr                      year\nmonth                   1|12 year\nmo                      month\nlustrum                 5 years             # The Lustrum was a Roman\n                                            #   purification ceremony that took\n                                            #   place every five years.\n                                            #   Classically educated Englishmen\n                                            #   used this term.\ndecade                  10 years\ncentury                 100 years\nmillennium              1000 years\nmillennia               millennium\nsolaryear               year\nlunaryear               12 lunarmonth\ncalendaryear            365 day\ncommonyear              365 day\nleapyear                366 day\njulianyear              365.25 day\ngregorianyear           365.2425 day\nislamicyear             354 day          # A year of 12 lunar months. They\nislamicleapyear         355 day          # began counting on July 16, AD 622\n                                         # when Muhammad emigrated to Medina\n                                         # (the year of the Hegira).  They need\n                                         # 11 leap days in 30 years to stay in\n                                         # sync with the lunar year which is a\n                                         # bit longer than the 29.5 days of the\n                                         # average month.  The months do not\n                                         # keep to the same seasons, but\n                                         # regress through the seasons every\n                                         # 32.5 years.\nislamicmonth            1|12 islamicyear # They have 29 day and 30 day months.\n\n# The Hewbrew year is also based on lunar months, but synchronized to the solar\n# calendar.  The months vary irregularly between 29 and 30 days in length, and\n# the years likewise vary.  The regular year is 353, 354, or 355 days long.  To\n# keep up with the solar calendar, a leap month of 30 days is inserted every\n# 3rd, 6th, 8th, 11th, 14th, 17th, and 19th years of a 19 year cycle.  This\n# gives leap years that last 383, 384, or 385 days.\n\n\n# Sidereal days\n\nmercuryday              58.6462 day\nvenusday                243.01 day        # retrograde\nearthday                siderealday\nmarsday                 1.02595675 day\njupiterday              0.41354 day\nsaturnday               0.4375 day\nuranusday               0.65 day          # retrograde\nneptuneday              0.768 day\nplutoday                6.3867 day\n\n# Sidereal years from http://ssd.jpl.nasa.gov/phys_props_planets.html.  Data\n# was updated in May 2001 based on the 1992 Explanatory Supplement to the\n# Astronomical Almanac and the mean longitude rates.  Apparently the table of\n# years in that reference is incorrect.\n\nmercuryyear             0.2408467 julianyear\nvenusyear               0.61519726 julianyear\nearthyear               siderealyear\nmarsyear                1.8808476 julianyear\njupiteryear             11.862615 julianyear\nsaturnyear              29.447498 julianyear\nuranusyear              84.016846 julianyear\nneptuneyear             164.79132 julianyear\nplutoyear               247.92065 julianyear\n\n# Objects on the earth are charted relative to a perfect ellipsoid whose\n# dimensions are specified by different organizations.  The ellipsoid is\n# specified by an equatorial radius and a flattening value which defines the\n# polar radius.  These values are the 1996 values given by the International\n# Earth Rotation Service (IERS) whose reference documents can be found at\n# http://maia.usno.navy.mil/\n\nearthflattening         1|298.25642\nearthradius_equatorial  6378136.49 m\nearthradius_polar       (-earthflattening+1) earthradius_equatorial\n\nlandarea                148.847e6 km^2\noceanarea               361.254e6 km^2\n\nmoonradius              1738 km         # mean value\nsunradius               6.96e8 m\n\n# Many astronomical values can be measured most accurately in a system of units\n# using the astronomical unit and the mass of the sun as base units.  The\n# uncertainty in the gravitational constant makes conversion to SI units\n# significantly less accurate.\n\n# The astronomical unit was defined to be the length of the of the semimajor\n# axis of a massless object with the same year as the earth.  With such a\n# definition in force, and with the mass of the sun set equal to one, Kepler's\n# third law can be used to solve for the value of the gravitational constant.\n\n# Kepler's third law says that (2 pi / T)^2 a^3 = G M where T is the orbital\n# period, a is the size of the semimajor axis, G is the gravitational constant\n# and M is the mass.  With M = 1 and T and a chosen for the earth's orbit, we\n# find sqrt(G) = (2 pi / T) sqrt(AU^3).  This constant is called the Gaussian\n# gravitational constant, apparently because Gauss originally did the\n# calculations.  However, when the original calculation was done, the value\n# for the length of the earth's year was inaccurate.  The value used is called\n# the Gaussian year.  Changing the astronomical unit to bring it into\n# agreement with more accurate values for the year would have invalidated a\n# lot of previous work, so instead the astronomical unit has been kept equal\n# to this original value.  This is accomplished by using a standard value for\n# the Gaussian gravitational constant.  This constant is called k.\n# Many values below are from http://ssd.jpl.nasa.gov/?constants\n\ngauss_k                 0.01720209895   # This beast has dimensions of\n                                        # au^(3|2) / day and is exact.\ngaussianyear      (2 pi / gauss_k) days # Year that corresponds to the Gaussian\n                                        # gravitational constant. This is a\n                                        # fictional year, and doesn't\n                                        # correspond to any celestial event.\nastronomicalunit         149597870700 m # IAU definition from 2012, exact\nau                     astronomicalunit # ephemeris for the above described\n                                        # astronomical unit.  (See the NASA\n                                        # site listed above.)\nsolarmass                  1.9891e30 kg\nsunmass                       solarmass\n\n\nsundist                 1.0000010178 au # mean earth-sun distance\nmoondist                3.844e8 m       # mean earth-moon distance\nsundist_near            1.471e11 m      # earth-sun distance at perihelion\nsundist_far             1.521e11 m      # earth-sun distance at aphelion\n\n# The following are masses for planetary systems, not just the planet itself.\n# The comments give the uncertainty in the denominators.  As noted above,\n# masses are given relative to the solarmass because this is more accurate.\n# The conversion to SI is uncertain because of uncertainty in G, the\n# gravitational constant.\n#\n# Values are from http://ssd.jpl.nasa.gov/astro_constants.html\n\nmercurymass             solarmass / 6023600   # 250\nvenusmass               solarmass / 408523.71 # 0.06\nearthmoonmass           solarmass / 328900.56 # 0.02\nmarsmass                solarmass / 3098708   # 9\njupitermass             solarmass / 1047.3486 # 0.0008\nsaturnmass              solarmass / 3497.898  # 0.018\nuranusmass              solarmass / 22902.98  # 0.03\nneptunemass             solarmass / 19412.24  # 0.04\nplutomass               solarmass / 1.35e8    # 0.07e8\n\nmoonearthmassratio      0.012300034 # uncertainty 3 x 10-9\nearthmass               earthmoonmass / ( 1 + moonearthmassratio)\nmoonmass                moonearthmassratio earthmass\n\n# These are the old values for the planetary masses.  They may give\n# the masses of the planets alone.\n\noldmercurymass             0.33022e24 kg\noldvenusmass               4.8690e24 kg\noldmarsmass                0.64191e24 kg\noldjupitermass             1898.8e24 kg\noldsaturnmass              568.5e24 kg\nolduranusmass              86.625e24 kg\noldneptunemass             102.78e24 kg\noldplutomass               0.015e24 kg\n\n# Mean radius from http://ssd.jpl.nsaa.gov/phys_props_planets.html which in\n# turn cites Global Earth Physics by CF Yoder, 1995.\n\nmercuryradius           2440 km\nvenusradius             6051.84 km\nearthradius             6371.01 km\nmarsradius              3389.92 km\njupiterradius           69911 km\nsaturnradius            58232 km\nuranusradius            25362 km\nneptuneradius           24624 km\nplutoradius             1151 km\n\nmoongravity             1.62 m/s^2\n\n#\n# The Hartree system of atomic units, derived from fundamental units\n# of mass (of electron), action (planck's constant), charge, and\n# the coulomb constant.\n\n# Fundamental units\n\natomicmass              electronmass\natomiccharge            e\natomicaction            hbar\n\n# derived units (Warning: accuracy is lost from deriving them this way)\n\natomiclength            bohrradius\natomictime              hbar^3/coulombconst^2 atomicmass e^4 # Period of first\n                                                             # bohr orbit\natomicvelocity          atomiclength / atomictime\natomicenergy            hbar / atomictime\nhartree                 atomicenergy\n\n#\n# These thermal units treat entropy as charge, from [5]\n#\n\nthermalcoulomb          J/K        # entropy\nthermalampere           W/K        # entropy flow\nthermalfarad            J/K^2\nthermalohm              K^2/W      # thermal resistance\nfourier                 thermalohm\nthermalhenry            J K^2/W^2  # thermal inductance\nthermalvolt             K          # thermal potential difference\n\n\n#\n# United States units\n#\n\n# linear measure\n\n# The US Metric Law of 1866 legalized the metric system in the USA and\n# defined the meter in terms of the British system with the exact\n# 1 meter = 39.37 inches.  On April 5, 1893 Thomas Corwin Mendenhall,\n# Superintendent of Weights and Measures, decided, in what has become\n# known as the \"Mendenhall Order\" that the meter and kilogram would be the\n# fundamental standards in the USA.  The definition from 1866 was turned\n# around to give an exact definition of the yard as 3600|3937 meters This\n# definition was used until July of 1959 when the definition was changed\n# to bring the US and other English-speaking countries into agreement; the\n# Canadian value of 1 yard = 0.9144 meter (exactly) was chosen because it\n# was approximately halfway between the British and US values; it had the\n# added advantage of making 1 inch = 25.4 mm (exactly).  Since 1959, the\n# \"international\" foot has been exactly 0.3048 meters.  At the same time,\n# it was decided that any data expressed in feet derived from geodetic\n# surveys within the US would continue to use the old definition and call\n# the old unit the \"survey foot.\" The US continues to define the statute\n# mile, furlong, chain, rod, link, and fathom in terms of the US survey\n# foot.\n# Sources:\n# NIST Special Publication 447, Sects. 5, 7, and 8.\n# NIST Handbook 44, 2011 ed., Appendix C.\n# Canadian Journal of Physics, 1959, 37:(1) 84, 10.1139/p59-014.\n\nUS                      1200|3937 m/ft   # These four values will convert\nUS-                     US               #   international measures to\nsurvey-                 US               #   US Survey measures\ngeodetic-               US\nint                     3937|1200 ft/m   # Convert US Survey measures to\nint-                    int              #   international measures\n\ninch                    2.54 cm\nin                      inch\nfoot                    12 inch\nfeet                    foot\nft                      foot\nyard                    3 ft\nyd                      yard\nmile                    5280 ft          # The mile was enlarged from 5000 ft\n                                         # to this number in order to make\n                                         # it an even number of furlongs.\n                                         # (The Roman mile is 5000 romanfeet.)\nline                    1|12 inch  # Also defined as '.1 in' or as '1e-8 Wb'\nrod                     5.5 yard\nperch                   rod\nfurlong                 40 rod           # From \"furrow long\"\nstatutemile             mile\nleague                  3 mile           # Intended to be an an hour's walk\n\n# surveyor's measure\n\nsurveyorschain          66 surveyft\nsurveychain             surveyorschain\nsurveyorspole           1|4 surveyorschain\nsurveyorslink           1|100 surveyorschain\nchain                   66 ft\nlink                    1|100 chain\nch                      chain\nUSacre                  10 surveychain^2\nintacre                 10 chain^2       # Acre based on international ft\nintacrefoot             acre foot\nUSacrefoot              USacre surveyfoot\nacrefoot                intacrefoot\nacre                    intacre\nsection                 mile^2\ntownship                36 section\nhomestead               160 acre # Area of land granted by the 1862 Homestead\n                                 # Act of the United States Congress\ngunterschain            surveyorschain\n\nengineerschain          100 ft\nengineerslink           1|100 engineerschain\nramsdenschain           engineerschain\nramsdenslink            engineerslink\n\ngurleychain             33 feet           # Andrew Ellicott chain is the\ngurleylink              1|50 gurleychain  # same length\n\nwingchain               66 feet           # Chain from 1664, introduced by\nwinglink                1|80 wingchain    # Vincent Wing, also found in a\n                                          # 33 foot length with 40 links.\n# early US length standards\n\n# The US has had four standards for the yard: one by Troughton of London\n# (1815); bronze yard #11 (1856); the Mendhall yard (1893), consistent\n# with the definition of the meter in the metric joint resolution of\n# Congress in 1866, but defining the yard in terms of the meter; and the\n# international yard (1959), which standardized definitions for Australia,\n# Canada, New Zealand, South Africa, the UK, and the US.\n# Sources: Pat Naughtin (2009), Which Inch?, www.metricationmatters.com;\n# Lewis E.  Barbrow and Lewis V.  Judson (1976).  NBS Special Publication\n# 447, Weights and Measures Standards of the United States: A Brief\n# History.\n\ntroughtonyard           914.42190 mm\nbronzeyard11            914.39980 mm\nmendenhallyard          surveyyard\ninternationalyard       yard\n\n# nautical measure\n\nfathom                  6 ft     # Originally defined as the distance from\n                                 #   fingertip to fingertip with arms fully\n                                 #   extended.\nnauticalmile            1852 m   # Supposed to be one minute of latitude at\n                                 # the equator.  That value is about 1855 m.\n                                 # Early estimates of the earth's circumference\n                                 # were a bit off.  The value of 1852 m was\n                                 # made the international standard in 1929.\n                                 # The US did not accept this value until\n                                 # 1954.  The UK switched in 1970.\n\ncable                   1|10 nauticalmile\nintcable                cable              # international cable\ncablelength             cable\nUScable                 100 USfathom\nnavycablelength         720 USft           # used for depth in water\nmarineleague            3 nauticalmile\ngeographicalmile        brnauticalmile\nknot                    nauticalmile / hr\nclick                   km       # US military slang\nklick                   click\n\n# Avoirdupois weight\n\npound                   0.45359237 kg   # The one normally used\nlb                      pound           # From the latin libra\ngrain                   1|7000 pound    # The grain is the same in all three\n                                        # weight systems.  It was originally\n                                        # defined as the weight of a barley\n                                        # corn taken from the middle of the\n                                        # ear.\nounce                   1|16 pound\noz                      ounce\ndram                    1|16 ounce\ndr                      dram\nushundredweight         100 pounds\ncwt                     hundredweight\nshorthundredweight      ushundredweight\nuston                   shortton\nshortton                2000 lb\nquarterweight           1|4 uston\nshortquarterweight      1|4 shortton\nshortquarter            shortquarterweight\n\n# Troy Weight.  In 1828 the troy pound was made the first United States\n# standard weight.  It was to be used to regulate coinage.\n\ntroypound               5760 grain\ntroyounce               1|12 troypound\nozt                     troyounce\npennyweight             1|20 troyounce  # Abbreviated \"d\" in reference to a\ndwt                     pennyweight     #   Frankish coin called the \"denier\"\n                                        #   minted in the late 700's.  There\n                                        #   were 240 deniers to the pound.\nassayton                mg ton / troyounce  # mg / assayton = troyounce / ton\nusassayton              mg uston / troyounce\nbrassayton              mg brton / troyounce\nfineounce               troyounce       # A troy ounce of 99.5% pure gold\n\n# Some other jewelers units\n\nmetriccarat             0.2 gram        # Defined in 1907\nmetricgrain             50 mg\ncarat                   metriccarat\nct                      carat\njewelerspoint           1|100 carat\nsilversmithpoint        1|4000 inch\nmomme                   3.75 grams      # Traditional Japanese unit based\n                                        # on the chinese mace.  It is used for\n                                        # pearls in modern times and also for\n                                        # silk density.  The definition here\n                                        # was adopted in 1891.\n# Apothecaries' weight\n\nappound                 troypound\napounce                 troyounce\napdram                  1|8 apounce\napscruple               1|3 apdram\n\n# Liquid measure\n\nusgallon                231 in^3        # US liquid measure is derived from\ngal                     gallon          # the British wine gallon of 1707.\nquart                   1|4 gallon      # See the \"winegallon\" entry below\npint                    1|2 quart       # more historical information.\ngill                    1|4 pint\nusquart                 1|4 usgallon\nuspint                  1|2 usquart\nusgill                  1|4 uspint\nusfluidounce            1|16 uspint\nfluiddram               1|8 usfloz\nminimvolume             1|60 fluiddram\nqt                      quart\npt                      pint\nfloz                    fluidounce\nusfloz                  usfluidounce\nfldr                    fluiddram\nliquidbarrel            31.5 usgallon\nusbeerbarrel            2 beerkegs\nbeerkeg                 15.5 usgallon   # Various among brewers\nponykeg                 1|2 beerkeg\nwinekeg                 12 usgallon\npetroleumbarrel         42 usgallon     # Originated in Pennsylvania oil\nbarrel                  petroleumbarrel # fields, from the winetierce\nbbl                     barrel\nushogshead              2 liquidbarrel\nusfirkin                9 usgallon\n\n# Dry measures: The Winchester Bushel was defined by William III in 1702 and\n# legally adopted in the US in 1836.\n\nusbushel                2150.42 in^3  # Volume of 8 inch cylinder with 18.5\nbu                      bushel        # inch diameter (rounded)\npeck                    1|4 bushel\nuspeck                  1|4 usbushel\nbrpeck                  1|4 brbushel\npk                      peck\ndrygallon               1|2 uspeck\ndryquart                1|4 drygallon\ndrypint                 1|2 dryquart\ndrybarrel               7056 in^3     # Used in US for fruits, vegetables,\n                                      #   and other dry commodities except for\n                                      #   cranberries.\ncranberrybarrel         5826 in^3     # US cranberry barrel\nheapedbushel            1.278 usbushel# The following explanation for this\n                                      #   value was provided by Wendy Krieger\n                                      #   <os2fan2@yahoo.com> based on\n                                      #   guesswork.  The cylindrical vessel is\n                                      #   18.5 inches in diameter and 1|2 inch\n                                      #   thick.  A heaped bushel includes the\n                                      #   contents of this cylinder plus a heap\n                                      #   on top.  The heap is a cone 19.5\n                                      #   inches in diameter and 6 inches\n                                      #   high.  With these values, the volume\n                                      #   of the bushel is 684.5 pi in^3 and\n                                      #   the heap occupies 190.125 pi in^3.\n                                      #   Therefore, the heaped bushel is\n                                      #   874.625|684.5 bushels.  This value is\n                                      #   approximately 1.2777575 and it rounds\n                                      #   to the value listed for the size of\n                                      #   the heaped bushel.  Sometimes the\n                                      #   heaped bushel is reported as 1.25\n                                      #   bushels.  This same explanation gives\n                                      #   that value if the heap is taken to\n                                      #   have an 18.5 inch diameter.\n\n# Grain measures.  The bushel as it is used by farmers in the USA is actually\n# a measure of mass which varies for different commodities.  Canada uses the\n# same bushel masses for most commodities, but not for oats.\n\nwheatbushel             60 lb\nsoybeanbushel           60 lb\ncornbushel              56 lb\nryebushel               56 lb\nbarleybushel            48 lb\noatbushel               32 lb\nricebushel              45 lb\ncanada_oatbushel        34 lb\n\n# Wine and Spirits measure\n\nponyvolume              1 usfloz\njigger                  1.5 usfloz   # Can vary between 1 and 2 usfloz\nshot                    jigger     # Sometimes 1 usfloz\neushot                  25 ml      # EU standard spirits measure\nfifth                   1|5 usgallon\nwinebottle              750 ml     # US industry standard, 1979\nwinesplit               1|4 winebottle\nwineglass               4 usfloz\nmagnum                  1.5 liter  # Standardized in 1979, but given\n                                   # as 2 qt in some references\nmetrictenth             375 ml\nmetricfifth             750 ml\nmetricquart             1 liter\n\n# Old British bottle size\n\nreputedquart            1|6 brgallon\nreputedpint             1|2 reputedquart\nbrwinebottle            reputedquart       # Very close to 1|5 winegallon\n\n# French champagne bottle sizes\n\nsplit                   200 ml\njeroboam                2 magnum\nrehoboam                3 magnum\nmethuselah              4 magnum\nsalmanazar              6 magnum\nbalthazar               8 magnum\nnebuchadnezzar          10 magnum\n\n#\n# Water is \"hard\" if it contains various minerals, expecially calcium\n# carbonate.\n#\n\nclarkdegree     grains/brgallon # Content by weigh of calcium carbonate\ngpg             grains/usgallon # Divide by water's density to convert to\n                                #   a dimensionless concentration measure\n#\n# Shoe measures\n#\n\nshoeiron                1|48 inch    # Used to measure leather in soles\nshoeounce               1|64 inch    # Used to measure non-sole shoe leather\n\n# USA shoe sizes.  These express the length of the shoe or the length\n# of the \"last\", the form that the shoe is made on.  But note that\n# this only captures the length.  It appears that widths change 1/4\n# inch for each letter within the same size, and if you change the\n# length by half a size then the width changes between 1/8 inch and\n# 1/4 inch.  But this may not be standard.  If you know better, please\n# contact me.\n\nshoesize_delta          1|3 inch     # USA shoe sizes differ by this amount\nshoe_men0               8.25 inch\nshoe_women0             (7+11|12) inch\nshoe_boys0              (3+11|12) inch\nshoe_girls0             (3+7|12) inch\n\nshoesize_men(n) units=[1;inch]   shoe_men0 + n shoesize_delta ; \\\n                                (shoesize_men+(-shoe_men0))/shoesize_delta\nshoesize_women(n) units=[1;inch] shoe_women0 + n shoesize_delta ; \\\n                                (shoesize_women+(-shoe_women0))/shoesize_delta\nshoesize_boys(n) units=[1;inch]  shoe_boys0 + n shoesize_delta ; \\\n                                (shoesize_boys+(-shoe_boys0))/shoesize_delta\nshoesize_girls(n) units=[1;inch] shoe_girls0 + n shoesize_delta ; \\\n                                (shoesize_girls+(-shoe_girls0))/shoesize_delta\n\n# European shoe size.  According to\n#      http://www.shoeline.com/footnotes/shoeterm.shtml\n# shoe sizes in Europe are measured with Paris points which simply measure\n# the length of the shoe.\n\neuropeshoesize          2|3 cm\n\n#\n# USA slang units\n#\n\nbuck                    US$\nfin                     5 US$\nsawbuck                 10 US$\nusgrand                 1000 US$\ngreenback               US$\nkey                     kg           # usually of marijuana, 60's\nlid                     1 oz         # Another 60's weed unit\nfootballfield           usfootballfield\nusfootballfield         100 yards\ncanadafootballfield     110 yards    # And 65 yards wide\nmarathon                26 miles + 385 yards\n\n#\n# British\n#\n\n# The length measure in the UK was defined by a bronze bar manufactured in\n# 1844.  Various conversions were sanctioned for convenience at different\n# times, which makes conversions before 1963 a confusing matter.  Apparently\n# previous conversions were never explicitly revoked.  Four different\n# conversion factors appear below.  Multiply them times an imperial length\n# units as desired.  The Weights and Measures Act of 1963 switched the UK away\n# from their bronze standard and onto a definition of the yard in terms of the\n# meter.  This happened after an international agreement in 1959 to align the\n# world's measurement systems.\n\nUK                      UKlength_SJJ\nUK-                     UK\nbritish-                UK\n\nUKlength_B            0.9143992 meter / yard  # Benoit found the yard to be\n                                              #   0.9143992 m at a weights and\n                                              #   measures conference around\n                                              #   1896.   Legally sanctioned\n                                              #   in 1898.\nUKlength_SJJ          0.91439841 meter / yard # In 1922, Seers, Jolly and\n                                              #   Johnson found the yard to be\n                                              #   0.91439841 meters.\n                                              #   Used starting in the 1930's.\nUKlength_K              meter / 39.37079 inch # In 1816 Kater found this ratio\n                                              #   for the meter and inch.  This\n                                              #   value was used as the legal\n                                              #   conversion ratio when the\n                                              #   metric system was legalized\n                                              #   for contract in 1864.\nUKlength_C            meter / 1.09362311 yard # In 1866 Clarke found the meter\n                                              #   to be 1.09362311 yards.  This\n                                              #   conversion was legalized\n                                              #   around 1878.\nbrnauticalmile          6080 ft               # Used until 1970 when the UK\nbrknot                  brnauticalmile / hr   #   switched to the international\nbrcable                 1|10 brnauticalmile   #   nautical mile.\nadmiraltymile           brnauticalmile\nadmiraltyknot           brknot\nadmiraltycable          brcable\nseamile                 6000 ft\nshackle                 15 fathoms            # Adopted 1949 by British navy\n\n# British Imperial weight is mostly the same as US weight.  A few extra\n# units are added here.\n\nclove                   7 lb\nstone                   14 lb\ntod                     28 lb\nbrquarterweight         1|4 brhundredweight\nbrhundredweight         8 stone\nlonghundredweight       brhundredweight\nlongton                 20 brhundredweight\nbrton                   longton\n\n# British Imperial volume measures\n\nbrminim                 1|60 brdram\nbrscruple               1|3 brdram\nfluidscruple            brscruple\nbrdram                  1|8 brfloz\nbrfluidounce            1|20 brpint\nbrfloz                  brfluidounce\nbrgill                  1|4 brpint\nbrpint                  1|2 brquart\nbrquart                 1|4 brgallon\nbrgallon                4.54609 l      # The British Imperial gallon was\n                                       # defined in 1824 to be the volume of\n                                       # water which weighed 10 pounds at 62\n                                       # deg F with a pressure of 30 inHg.\n                                       # It was also defined as 277.274 in^3,\n                                       # Which is slightly in error.  In\n                                       # 1963 it was defined to be the volume\n                                       # occupied by 10 pounds of distilled\n                                       # water of density 0.998859 g/ml weighed\n                                       # in air of density 0.001217 g/ml\n                                       # against weights of density 8.136 g/ml.\n                                       # This gives a value of approximately\n                                       # 4.5459645 liters, but the old liter\n                                       # was in force at this time.  In 1976\n                                       # the definition was changed to exactly\n                                       # 4.54609 liters using the new\n                                       # definition of the liter (1 dm^3).\nbrbarrel                36 brgallon    # Used for beer\nbrbushel                8 brgallon\nbrheapedbushel          1.278 brbushel\nbrquarter               8 brbushel\nbrchaldron              36 brbushel\n\n# Obscure British volume measures.  These units are generally traditional\n# measures whose definitions have fluctuated over the years.  Often they\n# depended on the quantity being measured.  They are given here in terms of\n# British Imperial measures.  For example, the puncheon may have historically\n# been defined relative to the wine gallon or beer gallon or ale gallon\n# rather than the British Imperial gallon.\n\nbag                     4 brbushel\nbucket                  4 brgallon\nkilderkin               2 brfirkin\nlast                    40 brbushel\nnoggin                  brgill\npottle                  0.5 brgallon\npin                     4.5 brgallon\npuncheon                72 brgallon\nseam                    8 brbushel\ncoomb                   4 brbushel\nboll                    6 brbushel\nfirlot                  1|4 boll\nbrfirkin                9 brgallon     # Used for ale and beer\ncran                    37.5 brgallon  # measures herring, about 750 fish\nbrwinehogshead          52.5 brgallon  # This value is approximately equal\nbrhogshead              brwinehogshead #   to the old wine hogshead of 63\n                                       #   wine gallons.  This adjustment\n                                       #   is listed in the OED and in\n                                       #   \"The Weights and Measures of\n                                       #   England\" by R. D. Connor\nbrbeerhogshead          54 brgallon\nbrbeerbutt              2 brbeerhogshead\nregisterton             100 ft^3  # Used for internal capacity of ships\nshippington             40 ft^3   # Used for ship's cargo freight or timber\nbrshippington           42 ft^3   #\nfreightton            shippington # Both register ton and shipping ton derive\n                                  # from the \"tun cask\" of wine.\ndisplacementton         35 ft^3   # Approximate volume of a longton weight of\n                                  # sea water.  Measures water displaced by\n                                  # ships.\nwaterton                224 brgallon\nstrike                  70.5 l    # 16th century unit, sometimes\n                                  #   defined as .5, 2, or 4 bushels\n                                  #   depending on the location.  It\n                                  #   probably doesn't make a lot of\n                                  #   sense to define in terms of imperial\n                                  #   bushels.  Zupko gives a value of\n                                  #   2 Winchester grain bushels or about\n                                  #   70.5 liters.\namber                   4 brbushel# Used for dry and liquid capacity [18]\n\n# British volume measures with \"imperial\"\n\nimperialminim           brminim\nimperialscruple         brscruple\nimperialdram            brdram\nimperialfluidounce      brfluidounce\nimperialfloz            brfloz\nimperialgill            brgill\nimperialpint            brpint\nimperialquart           brquart\nimperialgallon          brgallon\nimperialbarrel          brbarrel\nimperialbushel          brbushel\nimperialheapedbushel    brheapedbushel\nimperialquarter         brquarter\nimperialchaldron        brchaldron\nimperialwinehogshead    brwinehogshead\nimperialhogshead        brhogshead\nimperialbeerhogshead    brbeerhogshead\nimperialbeerbutt        brbeerbutt\nimperialfirkin          brfirkin\n\n# obscure British lengths\n\nbarleycorn              1|3 UKinch   # Given in Realm of Measure as the\n                                     # difference between successive shoe sizes\nnail                    1|16 UKyard  # Originally the width of the thumbnail,\n                                     #   or 1|16 ft.  This took on the general\n                                     #   meaning of 1|16 and settled on the\n                                     #   nail of a yard or 1|16 yards as its\n                                     #   final value.  [12]\npole                    16.5 UKft    # This was 15 Saxon feet, the Saxon\nrope                    20 UKft      #   foot (aka northern foot) being longer\nenglishell              45 UKinch\nflemishell              27 UKinch\nell                     englishell   # supposed to be measure from elbow to\n                                     #   fingertips\nspan                    9 UKinch     # supposed to be distance from thumb\n                                     #   to pinky with full hand extension\ngoad                    4.5 UKft     # used for cloth, possibly named after the\n                                     #   stick used for prodding animals.\n\n# misc obscure British units\n\nhide                    120 acre  # English unit of land area dating to the 7th\n                                  #   century, originally the amount of land\n                                  #   that a single plowman could cultivate,\n                                  #   which varied from 60-180 acres regionally.\n                                  #   Standardized at Normon conquest.\nvirgate                 1|4 hide\nnook                    1|2 virgate\nrood                    furlong rod  # Area of a strip a rod by a furlong\nenglishcarat            troyounce/151.5 # Originally intended to be 4 grain\n                                        #   but this value ended up being\n                                        #   used in the London diamond market\nmancus                  2 oz\nmast                    2.5 lb\nnailkeg                 100 lbs\nbasebox                 31360 in^2      # Used in metal plating\n\n# alternate spellings\n\nmetre                   meter\ngramme                  gram\nlitre                   liter\ndioptre                 diopter\naluminium               aluminum\nsulphur                 sulfur\n\n#\n# Units derived the human body (may not be very accurate)\n#\n\ngeometricpace           5 ft   # distance between points where the same\n                               # foot hits the ground\npace                    2.5 ft # distance between points where alternate\n                               # feet touch the ground\nUSmilitarypace          30 in  # United States official military pace\nUSdoubletimepace        36 in  # United States official doubletime pace\nfingerbreadth           7|8 in # The finger is defined as either the width\nfingerlength            4.5 in #   or length of the finger\nfinger                  fingerbreadth\npalmwidth               hand   # The palm is a unit defined as either the width\npalmlength              8 in   #   or the length of the hand\nhand                    4 inch # width of hand\nshaftment               6 inch # Distance from tip of outstretched thumb to the\n                               #   opposite side of the palm of the hand.  The\n                               #   ending -ment is from the old English word\n                               #   for hand. [18]\nsmoot              5 ft + 7 in # Created as part of an MIT fraternity prank.\n                               #   In 1958 Oliver Smoot was used to measure\n                               #   the length of the Harvard Bridge, which was\n                               #   marked off in smooth lengths.  These\n                               #   markings have been maintained on the bridge\n                               #   since then and repainted by subsequent\n                               #   incoming fraternity members.  During a\n                               #   bridge rennovation the new sidewalk was\n                               #   scored every smooth rather than at the\n                               #   customary 6 ft spacing.\n#\n# Cooking measures\n#\n\n# Common abbreviations\n\ntbl                     tablespoon\ntbsp                    tablespoon\ntblsp                   tablespoon\nTb                      tablespoon\ntsp                     teaspoon\nsaltspoon               1|4 tsp\n\n# US measures\n\nuscup                   8 usfloz\nustablespoon            1|16 uscup\nusteaspoon              1|3 ustablespoon\nustbl                   ustablespoon\nustbsp                  ustablespoon\nustblsp                 ustablespoon\nustsp                   usteaspoon\nmetriccup               250 ml\nstickbutter             1|4 lb            # Butter in the USA is sold in one\n                                          # pound packages that contain four\n                                          # individually wrapped pieces.  The\n                                          # pieces are marked into tablespoons,\n                                          # making it possible to measure out\n                                          # butter by volume by slicing the\n                                          # butter.\n\nlegalcup                240 ml            # The cup used on nutrition labeling\nlegaltablespoon         1|16 legalcup\nlegaltbsp               legaltablespoon\n\n# Scoop size.  Ice cream scoops in the US are marked with numbers\n# indicating the number of scoops requird to fill a US quart.\n\nscoop(n)  units=[1;cup] domain=[4,100] range=[0.04,1] \\\n           32 usfloz / n ; 32 usfloz / scoop\n\n\n# US can sizes.\n\nnumber1can              10 usfloz\nnumber2can              19 usfloz\nnumber2.5can            3.5 uscups\nnumber3can              4 uscups\nnumber5can              7 uscups\nnumber10can             105 usfloz\n\n# British measures\n\nbrcup                   1|2 brpint\nbrteacup                1|3 brpint\nbrtablespoon            15 ml             # Also 5|8 brfloz, approx 17.7 ml\nbrteaspoon              1|3 brtablespoon  # Also 1|4 brtablespoon\nbrdessertspoon          2 brteaspoon\ndessertspoon            brdessertspoon\ndsp                     dessertspoon\nbrtsp                   brteaspoon\nbrtbl                   brtablespoon\nbrtbsp                  brtablespoon\nbrtblsp                 brtablespoon\n\n# Australian\n\naustraliatablespoon     20 ml\naustbl                  australiatablespoon\naustbsp                 australiatablespoon\naustblsp                australiatablespoon\naustraliateaspoon       1|4 australiatablespoon\naustsp                  australiateaspoon\n\n# Italian\n\netto                    100 g          # Used for buying items like meat and\netti                    etto           #   cheese.\n\n# Chinese\n\ncatty                   0.5 kg\noldcatty                4|3 lbs        # Before metric conversion.\ntael                    1|16 oldcatty  # Should the tael be defined both ways?\nmace                    0.1 tael\noldpicul                100 oldcatty\npicul                   100 catty      # Chinese usage\n\n# Indian\n\nseer                    14400 grain    # British Colonial standard\nser                     seer\nmaund                   40 seer\npakistanseer            1 kg\npakistanmaund           40 pakistanseer\nchittak                 1|16 seer\ntola                    1|5 chittak\nollock                  1|4 liter      # Is this right?\n\n# Japanese\n\njapancup                200 ml\n\n# densities of cooking ingredients from The Cake Bible by Rose Levy Beranbaum\n# so you can convert '2 cups sugar' to grams, for example, or in the other\n# direction grams could be converted to 'cup flour_scooped'.\n\nbutter                  8 oz/uscup\nbutter_clarified        6.8 oz/uscup\ncocoa_butter            9 oz/uscup\nshortening              6.75 oz/uscup   # vegetable shortening\noil                     7.5 oz/uscup\ncakeflour_sifted        3.5 oz/uscup    # The density of flour depends on the\ncakeflour_spooned       4 oz/uscup      # measuring method.  \"Scooped\",  or\ncakeflour_scooped       4.5 oz/uscup    # \"dip and sweep\" refers to dipping a\nflour_sifted            4 oz/uscup      # measure into a bin, and then sweeping\nflour_spooned           4.25 oz/uscup   # the excess off the top.  \"Spooned\"\nflour_scooped           5 oz/uscup      # means to lightly spoon into a measure\nbreadflour_sifted       4.25 oz/uscup   # and then sweep the top.  Sifted means\nbreadflour_spooned      4.5 oz/uscup    # sifting the flour directly into a\nbreadflour_scooped      5.5 oz/uscup    # measure and then sweeping the top.\ncornstarch              120 grams/uscup\ndutchcocoa_sifted       75 g/uscup      # These are for Dutch processed cocoa\ndutchcocoa_spooned      92 g/uscup\ndutchcocoa_scooped      95 g/uscup\ncocoa_sifted            75 g/uscup      # These are for nonalkalized cocoa\ncocoa_spooned           82 g/uscup\ncocoa_scooped           95 g/uscup\nheavycream              232 g/uscup\nmilk                    242 g/uscup\nsourcream               242 g/uscup\nmolasses                11.25 oz/uscup\ncornsyrup               11.5 oz/uscup\nhoney                   11.75 oz/uscup\nsugar                   200 g/uscup\npowdered_sugar          4 oz/uscup\nbrownsugar_light        217 g/uscup     # packed\nbrownsugar_dark         239 g/uscup\n\nbaking_powder           4.6 grams / ustsp\nsalt                    6 g / ustsp\nkoshersalt              2.8 g / ustsp   # Diamond Crystal kosher salt\nkoshersalt_morton       4.8 g / ustsp   # Morton kosher salt\n                                        # Values are from the nutrition info\n                                        # on the packages\n\n\n# Egg weights and volumes for a USA large egg\n\negg                     50 grams        # without shell\neggwhite                30 grams\neggyolk                 18.6 grams\neggvolume               3 ustablespoons + 1|2 ustsp\neggwhitevolume          2 ustablespoons\neggyolkvolume           3.5 ustsp\n\n#\n# Density measures.  Density has traditionally been measured on a variety of\n# bizarre nonlinear scales.\n#\n\n# Density of a sugar syrup is frequently measured in candy making procedures.\n# In the USA the boiling point of the syrup is measured.  Some recipes instead\n# specify the density using degrees Baume.  Conversion between degrees Baume\n# and the boiling point measure has proved elusive.  This table appeared in one\n# text, and provides a fragmentary relationship to the concentration.\n#\n# temp(C)  conc (%)\n#   100      30\n#   101      40\n#   102      50\n#   103      60\n#   106      70\n#   112      80\n#   123      90\n#   140      95\n#   151      97\n#   160      98.2\n#   166      99.5\n#   171      99.6\n#\n# The best source identified to date came from \"Boiling point elevation of\n# technical sugarcane solutions and its use in automatic pan boiling\" by\n# Michael Saska.  International Sugar Journal, 2002, 104, 1247, pp 500-507.\n#\n# But I'm using equation (3) which is credited to Starzak and Peacock,\n# \"Water activity coefficient in aqueous solutions of sucrose--A comprehensive\n# data analyzis.  Zuckerindustrie, 122, 380-387.  (I couldn't find this\n# document.)\n#\n# Note that the range of validity is uncertain, but answers are in agreement\n# with the above table all the way to 99.6.\n#\n# The original equation has a parameter for the boiling point of water, which\n# of course varies with altitude.  It also includes various other model\n# parameters.  The input is the molar concentration of sucrose in the solution,\n# (moles sucrose) / (total moles).\n#\n# Bsp 3797.06 degC\n# Csp 226.28 degC\n# QQ -17638 J/mol\n# asp -1.0038\n# bsp -0.24653\n# tbw 100 degC     # boiling point of water\n# sugar_bpe_orig(x) ((1-QQ/R Bsp * x^2 (1+asp x + bsp x^2) (tbw + Csp) \\\n#           /(tbw+stdtemp)) /  (1+(tbw + Csp)/Bsp *ln(1-x))-1) * (tbw + Csp)\n#\n# To convert mass concentration (brix) to molar concentration\n#\n# sc(x)  (x / 342.3) / (( x/342.3) + (100-x)/18.02); \\\n#        100 sc 342.3|18.02 / (sc (342.3|18.02-1)+1)\n#\n# Here is a simplfied version of this equation where the temperature of boiling\n# water has been fixed at 100 degrees Celcius and the argument is now the\n# concentration (brix).\n#\n# sugar_bpe(x) ((1+ 0.48851085 * sc(x)^2 (1+ -1.0038 sc(x) + -0.24653 sc(x)^2)) \\\n#                   / (1+0.08592964 ln(1-sc(x)))-1) 326.28 K\n#\n#\n# The formula is not invertible, so to implement it in units we unfortunately\n# must turn it into a table.\n\n# This table gives the boiling point elevation as a function of the sugar syrup\n# concentration expressed as a percentage.\n\nsugar_conc_bpe[K] \\\n 0 0.0000   5 0.0788  10 0.1690  15 0.2729  20 0.3936  25 0.5351  \\\n30 0.7027  35 0.9036  40 1.1475  42 1.2599  44 1.3825  46 1.5165  \\\n48 1.6634  50 1.8249  52 2.0031  54 2.2005  56 2.4200  58 2.6651  \\\n60 2.9400  61 3.0902  62 3.2499  63 3.4198  64 3.6010  65 3.7944  \\\n66 4.0012  67 4.2227  68 4.4603  69 4.7156  70 4.9905  71 5.2870  \\\n72 5.6075  73 5.9546  74 6.3316  75 6.7417  76 7.1892  77 7.6786  \\\n78.0  8.2155  79.0  8.8061  80.0  9.4578  80.5  9.8092  81.0 10.1793  \\\n81.5 10.5693  82.0 10.9807  82.5 11.4152  83.0 11.8743  83.5 12.3601  \\\n84.0 12.8744  84.5 13.4197  85.0 13.9982  85.5 14.6128  86.0 15.2663  \\\n86.5 15.9620  87.0 16.7033  87.5 17.4943  88.0 18.3391  88.5 19.2424  \\\n89.0 20.2092  89.5 21.2452  90.0 22.3564  90.5 23.5493  91.0 24.8309  \\\n91.5 26.2086  92.0 27.6903  92.5 29.2839  93.0 30.9972  93.5 32.8374  \\\n94.0 34.8104  94.5 36.9195  95.0 39.1636  95.5 41.5348  96.0 44.0142  \\\n96.5 46.5668  97.0 49.1350  97.5 51.6347  98.0 53.9681  98.1 54.4091  \\\n98.2 54.8423  98.3 55.2692  98.4 55.6928  98.5 56.1174  98.6 56.5497  \\\n98.7 56.9999  98.8 57.4828  98.9 58.0206  99.0 58.6455  99.1 59.4062  \\\n99.2 60.3763  99.3 61.6706  99.4 63.4751  99.5 66.1062  99.6 70.1448  \\\n99.7 76.7867\n\n# Using the brix table we can use this to produce a mapping from boiling point\n# to density which makes all of the units interconvertible.  Because the brix\n# table stops at 95 this approach works up to a boiling point elevation of 39 K\n# or a boiling point of 139 C / 282 F, which is the \"soft crack\" stage in candy\n# making.  The \"hard crack\" stage continues up to 310 F.\n\n# Boiling point elevation\nsugar_bpe(T) units=[K;g/cm^3] domain=[0,39.1636] range=[0.99717,1.5144619] \\\n               brix(~sugar_conc_bpe(T)); sugar_conc_bpe(~brix(sugar_bpe))\n# Absolute boiling point (produces an absolute temperature)\nsugar_bp(T) units=[K;g/cm^3] domain=[373.15,412.3136] \\\n                                         range=[0.99717,1.5144619] \\\n                        brix(~sugar_conc_bpe(T-tempC(100))) ;\\\n                        sugar_conc_bpe(~brix(sugar_bp))+tempC(100)\n\n# In practice dealing with the absolute temperature is annoying because it is\n# not possible to convert to a nested function, so you're stuck retyping the\n# absolute temperature in Kelvins to convert to celsius or Fahrenheit.  To\n# prevent this we supply definitions that build in the temperature conversion\n# and produce results in the Fahrenheit and Celcius scales.  So using these\n# measures, to convert 46 degrees Baume to a Fahrenheit boiling point:\n#\n#      You have: baume(45)\n#      You want: sugar_bpF\n#              239.05647\n#\nsugar_bpF(T) units=[1;g/cm^3] domain=[212,282.49448] range=[0.99717,1.5144619]\\\n                        brix(~sugar_conc_bpe(tempF(T)+-tempC(100))) ;\\\n                        ~tempF(sugar_conc_bpe(~brix(sugar_bpF))+tempC(100))\nsugar_bpC(T) units=[1;g/cm^3] domain=[100,139.1636] range=[0.99717,1.5144619]\\\n                        brix(~sugar_conc_bpe(tempC(T)+-tempC(100))) ;\\\n                        ~tempC(sugar_conc_bpe(~brix(sugar_bpC))+tempC(100))\n\n# Degrees Baume is used in European recipes to specify the density of a sugar\n# syrup.  An entirely different definition is used for densities below\n# 1 g/cm^3.  An arbitrary constant appears in the definition.  This value is\n# equal to 145 in the US, but was according to [], the old scale used in\n# Holland had a value of 144, and the new scale or Gerlach scale used 146.78.\n\nbaumeconst 145      # US value\nbaume(d) units=[1;g/cm^3] domain=[0,145) range=[1,) \\\n                          (baumeconst/(baumeconst+-d)) g/cm^3 ; \\\n                          (baume+((-g)/cm^3)) baumeconst / baume\n\n# It's not clear if this value was ever used with negative degrees.\ntwaddell(x) units=[1;g/cm^3] domain=[-200,) range=[0,) \\\n                             (1 + 0.005 x) g / cm^3 ; \\\n                             200 (twaddell / (g/cm^3) +- 1)\n\n# The degree quevenne is a unit for measuring the density of milk.\n# Similarly it's unclear if negative values were allowed here.\nquevenne(x) units=[1;g/cm^3] domain=[-1000,) range=[0,) \\\n                             (1 + 0.001 x) g / cm^3 ; \\\n                             1000 (quevenne / (g/cm^3) +- 1)\n\n# Degrees brix measures sugar concentration by weigh as a percentage, so a\n# solution that is 3 degrees brix is 3% sugar by weight.  This unit was named\n# after Adolf Brix who invented a hydrometer that read this percentage\n# directly.  This data is from Table 114 of NIST Circular 440, \"Polarimetry,\n# Saccharimetry and the Sugars\".  It gives apparent specific gravity at 20\n# degrees Celsius of various sugar concentrations.  As rendered below this\n# data is converted to apparent density at 20 degrees Celsius using the\n# density figure for water given in the same NIST reference.  They use the\n# word \"apparent\" to refer to measurements being made in air with brass\n# weights rather than vacuum.\n\nbrix[0.99717g/cm^3]\\\n    0 1.00000  1 1.00390  2 1.00780  3 1.01173  4 1.01569  5 1.01968 \\\n    6 1.02369  7 1.02773  8 1.03180  9 1.03590 10 1.04003 11 1.04418 \\\n   12 1.04837 13 1.05259 14 1.05683 15 1.06111 16 1.06542 17 1.06976 \\\n   18 1.07413 19 1.07853 20 1.08297 21 1.08744 22 1.09194 23 1.09647 \\\n   24 1.10104 25 1.10564 26 1.11027 27 1.11493 28 1.11963 29 1.12436 \\\n   30 1.12913 31 1.13394 32 1.13877 33 1.14364 34 1.14855 35 1.15350 \\\n   36 1.15847 37 1.16349 38 1.16853 39 1.17362 40 1.17874 41 1.18390 \\\n   42 1.18910 43 1.19434 44 1.19961 45 1.20491 46 1.21026 47 1.21564 \\\n   48 1.22106 49 1.22652 50 1.23202 51 1.23756 52 1.24313 53 1.24874 \\\n   54 1.25439 55 1.26007 56 1.26580 57 1.27156 58 1.27736 59 1.28320 \\\n   60 1.28909 61 1.29498 62 1.30093 63 1.30694 64 1.31297 65 1.31905 \\\n   66 1.32516 67 1.33129 68 1.33748 69 1.34371 70 1.34997 71 1.35627 \\\n   72 1.36261 73 1.36900 74 1.37541 75 1.38187 76 1.38835 77 1.39489 \\\n   78 1.40146 79 1.40806 80 1.41471 81 1.42138 82 1.42810 83 1.43486 \\\n   84 1.44165 85 1.44848 86 1.45535 87 1.46225 88 1.46919 89 1.47616 \\\n   90 1.48317 91 1.49022 92 1.49730 93 1.50442 94 1.51157 95 1.51876\n\n# Density measure invented by the American Petroleum Institute.  Lighter\n# petroleum products are more valuable, and they get a higher API degree.\n#\n# The intervals of range and domain should be open rather than closed.\n#\napidegree(x) units=[1;g/cm^3] domain=[-131.5,) range=[0,) \\\n                              141.5 g/cm^3 / (x+131.5) ; \\\n                              141.5 (g/cm^3) / apidegree + (-131.5)\n\n#\n# Units derived from imperial system\n#\n\nouncedal                oz ft / s^2     # force which accelerates an ounce\n                                        #    at 1 ft/s^2\npoundal                 lb ft / s^2     # same thing for a pound\ntondal                  longton ft / s^2    # and for a ton\npdl                     poundal\nosi                     ounce force / inch^2   # used in aviation\npsi                     pound force / inch^2\npsia                    psi             # absolute pressure\n\t\t\t\t\t#   Note that gauge pressure can be given\n\t\t\t\t\t#   using the gaugepressure() and\n\t\t\t\t\t#   psig() nonlinear unit definitions\ntsi                     ton force / inch^2\nreyn                    psi sec\nslug                    lbf s^2 / ft\nslugf                   slug force\nslinch                  lbf s^2 / inch  # Mass unit derived from inch second\nslinchf                 slinch force    #   pound-force system.  Used in space\n                                        #   applications where in/sec^2 was a\n                                        #   natural acceleration measure.\ngeepound                slug\nlbf                     lb force\ntonf                    ton force\nlbm                     lb\nkip                     1000 lbf     # from kilopound\nksi                     kip / in^2\nmil                     0.001 inch\nthou                    0.001 inch\ntenth                   0.0001 inch  # one tenth of one thousandth of an inch\nmillionth               1e-6 inch    # one millionth of an inch\ncircularinch            1|4 pi in^2  # area of a one-inch diameter circle\ncircleinch              circularinch #    A circle with diameter d inches has\n                                     #    an area of d^2 circularinches\ncylinderinch         circleinch inch # Cylinder h inch tall, d inches diameter\n                                     #    has volume d^2 h cylinder inches\ncircularmil             1|4 pi mil^2 # area of one-mil diameter circle\ncmil                    circularmil\n\ncental                  100 pound\ncentner                 cental\ncaliber                 0.01 inch    # for measuring bullets\nduty                    ft lbf\ncelo                    ft / s^2\njerk                    ft / s^3\naustraliapoint          0.01 inch    # The \"point\" is used to measure rainfall\n                                     #   in Australia\nsabin                   ft^2         # Measure of sound absorption equal to the\n                                     #   absorbing power of one square foot of\n                                     #   a perfectly absorbing material.  The\n                                     #   sound absorptivity of an object is the\n                                     #   area times a dimensionless\n                                     #   absorptivity coefficient.\nstandardgauge          4 ft + 8.5 in # Standard width between railroad track\nflag                   5 ft^2        # Construction term referring to sidewalk.\nrollwallpaper          30 ft^2       # Area of roll of wall paper\nfillpower              in^3 / ounce  # Density of down at standard pressure.\n                                     #   The best down has 750-800 fillpower.\npinlength              1|16 inch     # A #17 pin is 17/16 in long in the USA.\nbuttonline             1|40 inch     # The line was used in 19th century USA\n                                     #   to measure width of buttons.\nbeespace               1|4 inch      # Bees will fill any space that is smaller\n                                     #   than the bee space and leave open\n                                     #   spaces that are larger.  The size of\n                                     #   the space varies with species.\ndiamond                8|5 ft        # Marking on US tape measures that is\n                                     #   useful to carpenters who wish to place\n                                     #   five studs in an 8 ft distance.  Note\n                                     #   that the numbers appear in red every\n                                     #   16 inches as well, giving six\n                                     #   divisions in 8 feet.\nretmaunit              1.75 in       # Height of rack mountable equipment.\nU                      retmaunit     #   Equipment should be 1|32 inch narrower\nRU                     U             #   than its U measurement indicates to\n                                     #   allow for clearance, so 4U=(6+31|32)in\n                                     #   RETMA stands for the former name of\n                                     #   the standardizing organization, Radio\n                                     #   Electronics Television Manufacturers\n                                     #   Association.  This organization is now\n                                     #   called the Electronic Industries\n                                     #   Alliance (EIA) and the rack standard\n                                     #   is specified in EIA RS-310-D.\ncount                  per pound     # For measuring the size of shrimp\n\n#\n# Other units of work, energy, power, etc\n#\n\nENERGY                  joule\nWORK                    joule\n\n# Calories: energy to raise a gram of water one degree celsius\n\ncal_IT                  4.1868 J     # International Table calorie\ncal_th                  4.184 J      # Thermochemical calorie\ncal_fifteen             4.18580 J    # Energy to go from 14.5 to 15.5 degC\ncal_twenty              4.18190 J    # Energy to go from 19.5 to 20.5 degC\ncal_mean                4.19002 J    # 1|100 energy to go from 0 to 100 degC\ncalorie                 cal_IT\ncal                     calorie\ncalorie_IT              cal_IT\nthermcalorie            cal_th\ncalorie_th              thermcalorie\nCalorie                 kilocalorie  # the food Calorie\nthermie              1e6 cal_fifteen # Heat required to raise the\n                                     # temperature of a tonne of\n                                     # water from 14.5 to 15.5 degC.\n\n# btu definitions: energy to raise a pound of water 1 degF\n\nbtu                     cal lb degF / gram K # international table BTU\nbritishthermalunit      btu\nbtu_IT                  btu\nbtu_th                  cal_th lb degF / gram K\nbtu_mean                cal_mean lb degF / gram K\nquad                    quadrillion btu\n\nECtherm                 1.05506e8 J    # Exact definition, close to 1e5 btu\nUStherm                 1.054804e8 J   # Exact definition\ntherm                   UStherm\n\n# Water latent heat (from Wikipedia)\n\nwater_fusion_heat       79.8 calorie/g\nwater_vaporization_heat 1160 J/g\n\n# Specific heat capacities of various substances\n\nspecificheat_water      calorie / g K\nwater_specificheat      specificheat_water\n     # Values from www.engineeringtoolbox.com/specific-heat-metals-d_152.html\nspecificheat_aluminum   0.91 J/g K\nspecificheat_antimony   0.21 J/g K\nspecificheat_barium     0.20 J/g K\nspecificheat_beryllium  1.83 J/g K\nspecificheat_bismuth    0.13 J/g K\nspecificheat_cadmium    0.23 J/g K\nspecificheat_cesium     0.24 J/g K\nspecificheat_chromium   0.46 J/g K\nspecificheat_cobalt     0.42 J/g K\nspecificheat_copper     0.39 J/g K\nspecificheat_gallium    0.37 J/g K\nspecificheat_germanium  0.32 J/g K\nspecificheat_gold       0.13 J/g K\nspecificheat_hafnium    0.14 J/g K\nspecificheat_indium     0.24 J/g K\nspecificheat_iridium    0.13 J/g K\nspecificheat_iron       0.45 J/g K\nspecificheat_lanthanum  0.195 J/g K\nspecificheat_lead       0.13 J/g K\nspecificheat_lithium    3.57 J/g K\nspecificheat_lutetium   0.15 J/g K\nspecificheat_magnesium  1.05 J/g K\nspecificheat_manganese  0.48 J/g K\nspecificheat_mercury    0.14 J/g K\nspecificheat_molybdenum 0.25 J/g K\nspecificheat_nickel     0.44 J/g K\nspecificheat_osmium     0.13 J/g K\nspecificheat_palladium  0.24 J/g K\nspecificheat_platinum   0.13 J/g K\nspecificheat_plutonum   0.13 J/g K\nspecificheat_potassium  0.75 J/g K\nspecificheat_rhenium    0.14 J/g K\nspecificheat_rhodium    0.24 J/g K\nspecificheat_rubidium   0.36 J/g K\nspecificheat_ruthenium  0.24 J/g K\nspecificheat_scandium   0.57  J/g K\nspecificheat_selenium   0.32 J/g K\nspecificheat_silicon    0.71 J/g K\nspecificheat_silver     0.23 J/g K\nspecificheat_sodium     1.21 J/g K\nspecificheat_strontium  0.30 J/g K\nspecificheat_tantalum   0.14 J/g K\nspecificheat_thallium   0.13 J/g K\nspecificheat_thorium    0.13 J/g K\nspecificheat_tin        0.21 J/g K\nspecificheat_titanium   0.54 J/g K\nspecificheat_tungsten   0.13 J/g K\nspecificheat_uranium    0.12 J/g K\nspecificheat_vanadium   0.39 J/g K\nspecificheat_yttrium    0.30 J/g K\nspecificheat_zinc       0.39 J/g K\nspecificheat_zirconium  0.27 J/g K\nspecificheat_ethanol    2.3  J/g K\nspecificheat_ammonia    4.6 J/g K\nspecificheat_freon      0.91 J/g K   # R-12 at 0 degrees Fahrenheit\nspecificheat_gasoline   2.22 J/g K\nspecificheat_iodine     2.15 J/g K\nspecificheat_oliveoil   1.97 J/g K\n\n#  en.wikipedia.org/wiki/Heat_capacity#Table_of_specific_heat_capacities\nspecificheat_hydrogen   14.3 J/g K\nspecificheat_helium     5.1932 J/g K\nspecificheat_argon      0.5203 J/g K\nspecificheat_tissue     3.5 J/g K\nspecificheat_diamond    0.5091 J/g K\nspecificheat_granite    0.79 J/g K\nspecificheat_graphite   0.71 J/g K\nspecificheat_ice        2.11 J/g K\nspecificheat_asphalt    0.92 J/g K\nspecificheat_brick      0.84 J/g K\nspecificheat_concrete   0.88 J/g K\nspecificheat_glass_silica 0.84 J/g K\nspecificheat_glass_flint  0.503 J/g K\nspecificheat_glass_pyrex  0.753 J/g K\nspecificheat_gypsum     1.09 J/g K\nspecificheat_marble     0.88 J/g K\nspecificheat_sand       0.835 J/g K\nspecificheat_soil       0.835 J/g K\nspecificheat_wood       1.7 J/g K\n\nspecificheat_sucrose    1.244 J/g K #www.sugartech.co.za/heatcapacity/index.php\n\n\n# Energy densities of various fuels\n#\n# Most of these fuels have varying compositions or qualities and hence their\n# actual energy densities vary.  These numbers are hence only approximate.\n#\n# E1. http://bioenergy.ornl.gov/papers/misc/energy_conv.html\n# E2. http://www.aps.org/policy/reports/popa-reports/energy/units.cfm\n# E3. http://www.ior.com.au/ecflist.html\n\ntonoil                  1e10 cal_IT    # Ton oil equivalent.  A conventional\n                                       # value for the energy released by\ntoe                     tonoil         # burning one metric ton of oil. [18,E2]\n                                       # Note that energy per mass of petroleum\n                                       # products is fairly constant.\n                                       # Variations in volumetric energy\n                                       # density result from variations in the\n                                       # density (kg/m^3) of different fuels.\n                                       # This definition is given by the\n                                       # IEA/OECD.\ntoncoal                 7e9 cal_IT     # Energy in metric ton coal from [18].\n                                       # This is a nominal value which\n                                       # is close to the heat content\n                                       # of coal used in the 1950's\nbarreloil               5.8 Mbtu       # Conventional value for barrel of crude\n                                       # oil [E2].  Actual range is 5.6 - 6.3.\nnaturalgas_HHV          1027 btu/ft3   # Energy content of natural gas.  HHV\nnaturalgas_LHV          930 btu/ft3    # is for Higher Heating Value and\nnaturalgas              naturalgas_HHV # includes energy from condensation\n                                       # combustion products.  LHV is for Lower\n                                       # Heating Value and excludes these.\n                                       # American publications typically report\n                                       # HHV whereas European ones report LHV.\ncharcoal                30 GJ/tonne\nwoodenergy_dry          20 GJ/tonne    # HHV, a cord weights about a tonne\nwoodenergy_airdry       15 GJ/tonne    # 20% moisture content\ncoal_bituminous         27 GJ / tonne\ncoal_lignite            15 GJ / tonne\ncoal_US                 22 GJ / uston  # Average for US coal (short ton), 1995\nethanol_HHV         84000 btu/usgallon\nethanol_LHV         75700 btu/usgallon\ndiesel             130500 btu/usgallon\ngasoline_LHV       115000 btu/usgallon\ngasoline_HHV       125000 btu/usgallon\ngasoline                gasoline_HHV\nheating                 37.3 MJ/liter\nfueloil                 39.7 MJ/liter  # low sulphur\npropane                 93.3 MJ/m^3\nbutane                  124 MJ/m^3\n\n# These values give total energy from uranium fission.  Actual efficiency\n# of nuclear power plants is around 30%-40%.  Note also that some reactors\n# use enriched uranium around 3% U-235.  Uranium during processing or use\n# may be in a compound of uranium oxide or uranium hexafluoride, in which\n# case the energy density would be lower depending on how much uranium is\n# in the compound.\n\nuranium_pure     200 MeV avogadro / (235.0439299 g/mol)  # Pure U-235\nuranium_natural         0.7% uranium_pure        # Natural uranium: 0.7% U-235\n\n# Celsius heat unit: energy to raise a pound of water 1 degC\n\ncelsiusheatunit         cal lb degC / gram K\nchu                     celsiusheatunit\n\nPOWER                   watt\n\n# \"Apparent\" average power in an AC circuit, the product of rms voltage\n# and rms current, equal to the true power in watts when voltage and\n# current are in phase.  In a DC circuit, always equal to the true power.\n\nVA                      volt ampere\n\nkWh                     kilowatt hour\n\n# The horsepower is supposedly the power of one horse pulling.   Obviously\n# different people had different horses.\n\nhorsepower              550 foot pound force / sec    # Invented by James Watt\nmechanicalhorsepower    horsepower\nhp                      horsepower\nmetrichorsepower        75 kilogram force meter / sec # PS=Pferdestaerke in\nelectrichorsepower      746 W                         # Germany\nboilerhorsepower        9809.50 W\nwaterhorsepower         746.043 W\nbrhorsepower            745.70 W\ndonkeypower             250 W\nchevalvapeur            metrichorsepower\n\n#\n# Heat Transfer\n#\n# Thermal conductivity, K, measures the rate of heat transfer across\n# a material.  The heat transfered is\n#     Q = K dT A t / L\n# where dT is the temperature difference across the material, A is the\n# cross sectional area, t is the time, and L is the length (thickness).\n# Thermal conductivity is a material property.\n\nTHERMAL_CONDUCTIVITY    POWER / AREA (TEMPERATURE_DIFFERENCE/LENGTH)\nTHERMAL_RESISTIVITY     1/THERMAL_CONDUCTIVITY\n\n# Thermal conductance is the rate at which heat flows across a given\n# object, so the area and thickness have been fixed.  It depends on\n# the size of the object and is hence not a material property.\n\nTHERMAL_CONDUCTANCE     POWER / TEMPERATURE_DIFFERENCE\nTHERMAL_RESISTANCE      1/THERMAL_CONDUCTANCE\n\n# Thermal admittance is the rate of heat flow per area across an\n# object whose thickness has been fixed.  Its reciprocal, thermal\n# insulation, is used to for measuring the heat transfer per area\n# of sheets of insulation or cloth that are of specified thickness.\n\nTHERMAL_ADMITTANCE      THERMAL_CONDUCTIVITY / LENGTH\nTHERMAL_INSULANCE       THERMAL_RESISTIVITY LENGTH\nTHERMAL_INSULATION      THERMAL_RESISTIVITY LENGTH\n\nRvalue                  degF ft^2 hr / btu\nUvalue                  1/Rvalue\neuropeanUvalue          watt / m^2 K\nRSI                     degC m^2 / W\nclo                     0.155 degC m^2 / W # Supposed to be the insulance\n                                           # required to keep a resting person\n                                           # comfortable indoors.  The value\n                                           # given is from NIST and the CRC,\n                                           # but [5] gives a slightly different\n                                           # value of 0.875 ft^2 degF hr / btu.\ntog                     0.1 degC m^2 / W   # Also used for clothing.\n\n\n# The bel was defined by engineers of Bell Laboratories to describe the\n# reduction in audio level over a length of one mile. It was originally\n# called the transmission unit (TU) but was renamed around 1923 to honor\n# Alexander Graham Bell. The bel proved inconveniently large so the decibel\n# has become more common.  The decibel is dimensionless since it reports a\n# ratio, but it is used in various contexts to report a signal's power\n# relative to some reference level.\n\nbel(x)     units=[1;1] range=(0,) 10^(x);    log(bel)    # Basic bel definition\ndecibel(x) units=[1;1] range=(0,) 10^(x/10); 10 log(decibel) # Basic decibel\ndB()       decibel                                           # Abbreviation\ndBW(x)     units=[1;W] range=(0,) dB(x) W ;  ~dB(dBW/W)      # Reference = 1 W\ndBk(x)     units=[1;W] range=(0,) dB(x) kW ; ~dB(dBk/kW)     # Reference = 1 kW\ndBf(x)     units=[1;W] range=(0,) dB(x) fW ; ~dB(dBf/fW)     # Reference = 1 fW\ndBm(x)     units=[1;W] range=(0,) dB(x) mW ; ~dB(dBm/mW)     # Reference = 1 mW\ndBmW(x)    units=[1;W] range=(0,) dBm(x) ;   ~dBm(dBmW)      # Reference = 1 mW\ndBJ(x)     units=[1;J] range=(0,) dB(x) J; ~dB(dBJ/J)        # Energy relative\n                                     # to 1 joule.  Used for power spectral\n                                     # density since W/Hz = J\n\n# When used to measure amplitude, voltage, or current the signal is squared\n# because power is proportional to the square of these measures.  The root\n# mean square (RMS) voltage is typically used with these units.\n\ndBV(x)  units=[1;V] range=(0,) dB(0.5 x) V;~dB(dBV^2 / V^2) # Reference = 1 V\ndBmV(x) units=[1;V] range=(0,) dB(0.5 x) mV;~dB(dBmV^2/mV^2)# Reference = 1 mV\ndBuV(x) units=[1;V] range=(0,) dB(0.5 x) microV ; ~dB(dBuV^2 / microV^2)\n                                   # Reference = 1 microvolt\n\n# Referenced to the voltage that causes 1 mW dissipation in a 600 ohm load.\n# Originally defined as dBv but changed to prevent confusion with dBV.\n# The \"u\" is for unloaded.\ndBu(x) units=[1;V] range=(0,) dB(0.5 x) sqrt(mW 600 ohm) ; \\\n                              ~dB(dBu^2 / mW 600 ohm)\ndBv(x) units=[1;V] range=(0,) dBu(x) ; ~dBu(dBv)  # Synonym for dBu\n\n\n# Measurements for sound in air, referenced to the threshold of human hearing\n# Note that sound in other media typically uses 1 micropascal as a reference\n# for sound pressure.  Units dBA, dBB, dBC, refer to different frequency\n# weightings meant to approximate the human ear's response.\n\ndBSPL(x) units=[1;Pa] range=(0,) dB(0.5 x) 20 microPa ;  \\\n                                 ~dB(dBSPL^2 / (20 microPa)^2) # pressure\ndBSIL(x) units=[1;W/m^2] range=(0,) dB(x) 1e-12 W/m^2; \\\n                                    ~dB(dBSIL / (1e-12 W/m^2)) # intensity\ndBSWL(x) units=[1;W] range=(0,) dB(x) 1e-12 W; ~dB(dBSWL/1e-12 W)\n\n\n# Misc other measures\n\nENTROPY                 ENERGY / TEMPERATURE\nclausius                1e3 cal/K       # A unit of physical entropy\nlangley                 thermcalorie/cm^2    # Used in radiation theory\nponcelet                100 kg force m / s\ntonrefrigeration        uston 144 btu / lb day # One ton refrigeration is\n                                        # the rate of heat extraction required\n                                        # turn one ton of water to ice in\n                                        # a day.  Ice is defined to have a\n                                        # latent heat of 144 btu/lb.\ntonref                  tonrefrigeration\nrefrigeration           tonref / ton\nfrigorie                1000 cal_fifteen# Used in refrigeration engineering.\ntnt                     1e9 cal_th / ton# So you can write tons tnt. This\n                                        # is a defined, not measured, value.\nairwatt                 8.5 (ft^3/min) inH2O # Measure of vacuum power as\n                                             # pressure times air flow.\n\n#\n# Permeability: The permeability or permeance, n, of a substance determines\n# how fast vapor flows through the substance.  The formula W = n A dP\n# holds where W is the rate of flow (in mass/time), n is the permeability,\n# A is the area of the flow path, and dP is the vapor pressure difference.\n#\n\nperm_0C                 grain / hr ft^2 inHg\nperm_zero               perm_0C\nperm_0                  perm_0C\nperm                    perm_0C\nperm_23C                grain / hr ft^2 in Hg23C\nperm_twentythree        perm_23C\n\n#\n# Counting measures\n#\n\npair                    2\nbrace                   2\nnest                    3     # often used for items like bowls that\n                              #   nest together\nhattrick                3     # Used in sports, especially cricket and ice\n                              #   hockey to report the number of goals.\ndicker                  10\ndozen                   12\nbakersdozen             13\nscore                   20\nflock                   40\ntimer                   40\nshock                   60\ntoncount                100   # Used in sports in the UK\nlonghundred             120   # From a germanic counting system\ngross                   144\ngreatgross              12 gross\ntithe                   1|10  # From Anglo-Saxon word for tenth\n\n# Paper counting measure\n\nshortquire              24\nquire                   25\nshortream               480\nream                    500\nperfectream             516\nbundle                  2 reams\nbale                    5 bundles\n\n#\n# Paper measures\n#\n\n# USA paper sizes\n\nlettersize              8.5 inch 11 inch\nlegalsize               8.5 inch 14 inch\nledgersize              11 inch 17 inch\nexecutivesize           7.25 inch 10.5 inch\nApaper                  8.5 inch 11 inch\nBpaper                  11 inch 17 inch\nCpaper                  17 inch 22 inch\nDpaper                  22 inch 34 inch\nEpaper                  34 inch 44 inch\n\n# Correspondence envelope sizes.  #10 is the standard business\n# envelope in the USA. \n\nenvelope6_25size        3.5 inch 6 inch\nenvelope6_75size        3.625 inch 6.5 inch\nenvelope7size           3.75 inch 6.75 inch\nenvelope7_75size        3.875 inch 7.5 inch\nenvelope8_625size       3.625 inch 8.625 inch\nenvelope9size           3.875 inch 8.875 inch\nenvelope10size          4.125 inch 9.5 inch\nenvelope11size          4.5 inch 10.375 inch\nenvelope12size          4.75 inch 11 inch\nenvelope14size          5 inch 11.5 inch\nenvelope16size          6 inch 12 inch\n\n# Announcement envelope sizes (no relation to metric paper sizes like A4)\n\nenvelopeA1size          3.625 inch 5.125 inch  # same as 4bar\nenvelopeA2size          4.375 inch 5.75 inch\nenvelopeA6size          4.75 inch 6.5 inch\nenvelopeA7size          5.25 inch 7.25 inch\nenvelopeA8size          5.5 inch 8.125 inch   \nenvelopeA9size          5.75 inch 8.75 inch\nenvelopeA10size         6 inch 9.5 inch\n\n# Baronial envelopes\n\nenvelope4bar            3.625 inch 5.125 inch  # same as A1\nenvelope5_5bar          4.375 inch 5.75 inch\nenvelope6bar            4.75 inch 6.5 inch\n\n# Coin envelopes\n\nenvelope1baby           2.25 inch 3.5 inch     # same as #1 coin\nenvelope00coin          1.6875 inch 2.75 inch\nenvelope1coin           2.25 inch 3.5 inch\nenvelope3coin           2.5 inch 4.25 inch\nenvelope4coin           3 inch 4.5 inch\nenvelope4_5coin         3 inch 4.875 inch\nenvelope5coin           2.875 inch 5.25 inch\nenvelope5_5coin         3.125 inch 5.5 inch\nenvelope6coin           3.375 inch 6 inch\nenvelope7coin           3.5 inch 6.5 inch\n\n# The metric paper sizes are defined so that if a sheet is cut in half\n# along the short direction, the result is two sheets which are\n# similar to the original sheet.  This means that for any metric size,\n# the long side is close to sqrt(2) times the length of the short\n# side.  Each series of sizes is generated by repeated cuts in half,\n# with the values rounded down to the nearest millimeter.\n\nA0paper                 841 mm 1189 mm   # The basic size in the A series\nA1paper                 594 mm  841 mm   # is defined to have an area of\nA2paper                 420 mm  594 mm   # one square meter.\nA3paper                 297 mm  420 mm\nA4paper                 210 mm  297 mm\nA5paper                 148 mm  210 mm\nA6paper                 105 mm  148 mm\nA7paper                  74 mm  105 mm\nA8paper                  52 mm   74 mm\nA9paper                  37 mm   52 mm\nA10paper                 26 mm   37 mm\n\nB0paper                1000 mm 1414 mm   # The basic B size has an area\nB1paper                 707 mm 1000 mm   # of sqrt(2) square meters.\nB2paper                 500 mm  707 mm\nB3paper                 353 mm  500 mm\nB4paper                 250 mm  353 mm\nB5paper                 176 mm  250 mm\nB6paper                 125 mm  176 mm\nB7paper                  88 mm  125 mm\nB8paper                  62 mm   88 mm\nB9paper                  44 mm   62 mm\nB10paper                 31 mm   44 mm\n\nC0paper                 917 mm 1297 mm   # The basic C size has an area\nC1paper                 648 mm  917 mm   # of sqrt(sqrt(2)) square meters.\nC2paper                 458 mm  648 mm\nC3paper                 324 mm  458 mm   # Intended for envelope sizes\nC4paper                 229 mm  324 mm\nC5paper                 162 mm  229 mm\nC6paper                 114 mm  162 mm\nC7paper                  81 mm  114 mm\nC8paper                  57 mm   81 mm\nC9paper                  40 mm   57 mm\nC10paper                 28 mm   40 mm\n\n# gsm (Grams per Square Meter), a sane, metric paper weight measure\n\ngsm                     grams / meter^2\n\n# In the USA, a collection of crazy historical paper measures are used.  Paper\n# is measured as a weight of a ream of that particular type of paper.  This is\n# sometimes called the \"substance\" or \"basis\" (as in \"substance 20\" paper).\n# The standard sheet size or \"basis size\" varies depending on the type of\n# paper.  As a result, 20 pound bond paper and 50 pound text paper are actually\n# about the same weight.  The different sheet sizes were historically the most\n# convenient for printing or folding in the different applications.  These\n# different basis weights are standards maintained by American Society for\n# Testing Materials (ASTM) and the American Forest and Paper Association\n# (AF&PA).\n\npoundbookpaper          lb / 25 inch 38 inch ream\nlbbook                  poundbookpaper\npoundtextpaper          poundbookpaper\nlbtext                  poundtextpaper\npoundoffsetpaper        poundbookpaper    # For offset printing\nlboffset                poundoffsetpaper\npoundbiblepaper         poundbookpaper    # Designed to be lightweight, thin,\nlbbible                 poundbiblepaper   # strong and opaque.\npoundtagpaper           lb / 24 inch 36 inch ream\nlbtag                   poundtagpaper\npoundbagpaper           poundtagpaper\nlbbag                   poundbagpaper\npoundnewsprintpaper     poundtagpaper\nlbnewsprint             poundnewsprintpaper\npoundposterpaper        poundtagpaper\nlbposter                poundposterpaper\npoundtissuepaper        poundtagpaper\nlbtissue                poundtissuepaper\npoundwrappingpaper      poundtagpaper\nlbwrapping              poundwrappingpaper\npoundwaxingpaper        poundtagpaper\nlbwaxing                poundwaxingpaper\npoundglassinepaper      poundtagpaper\nlbglassine              poundglassinepaper\npoundcoverpaper         lb / 20 inch 26 inch ream\nlbcover                 poundcoverpaper\npoundindexpaper         lb / 25.5 inch 30.5 inch ream\nlbindex                 poundindexpaper\npoundindexbristolpaper  poundindexpaper\nlbindexbristol          poundindexpaper\npoundbondpaper          lb / 17 inch 22 inch ream  # Bond paper is stiff and\nlbbond                  poundbondpaper             # durable for repeated\npoundwritingpaper       poundbondpaper             # filing, and it resists\nlbwriting               poundwritingpaper          # ink penetration.\npoundledgerpaper        poundbondpaper\nlbledger                poundledgerpaper\npoundcopypaper          poundbondpaper\nlbcopy                  poundcopypaper\npoundblottingpaper      lb / 19 inch 24 inch ream\nlbblotting              poundblottingpaper\npoundblankspaper        lb / 22 inch 28 inch ream\nlbblanks                poundblankspaper\npoundpostcardpaper      lb / 22.5 inch 28.5 inch ream\nlbpostcard              poundpostcardpaper\npoundweddingbristol     poundpostcardpaper\nlbweddingbristol        poundweddingbristol\npoundbristolpaper       poundweddingbristol\nlbbristol               poundbristolpaper\npoundboxboard           lb / 1000 ft^2\nlbboxboard              poundboxboard\npoundpaperboard         poundboxboard\nlbpaperboard            poundpaperboard\n\n# When paper is marked in units of M, it means the weight of 1000 sheets of the\n# given size of paper.  To convert this to paper weight, divide by the size of\n# the paper in question.\n\npaperM                  lb / 1000\n\n# In addition paper weight is reported in \"caliper\" which is simply the\n# thickness of one sheet, typically in inches.  Thickness is also reported in\n# \"points\" where a point is 1|1000 inch.  These conversions are supplied to\n# convert these units roughly (using an approximate density) into the standard\n# paper weight values.\n\npointthickness          0.001 in\npaperdensity            0.8 g/cm^3        # approximate--paper densities vary!\npapercaliper            in paperdensity\npaperpoint              pointthickness paperdensity\n\n#\n# Printing\n#\n\nfournierpoint           0.1648 inch / 12  # First definition of the printers\n                                          # point made by Pierre Fournier who\n                                          # defined it in 1737 as 1|12 of a\n                                          # cicero which was 0.1648 inches.\nolddidotpoint           1|72 frenchinch   # François Ambroise Didot, one of\n                                          # a family of printers, changed\n                                          # Fournier's definition around 1770\n                                          # to fit to the French units then in\n                                          # use.\nbertholdpoint           1|2660 m          # H. Berthold tried to create a\n                                          # metric version of the didot point\n                                          # in 1878.\nINpoint                 0.4 mm            # This point was created by a\n                                          # group directed by Fermin Didot in\n                                          # 1881 and is associated with the\n                                          # imprimerie nationale.  It doesn't\n                                          # seem to have been used much.\ngermandidotpoint        0.376065 mm       # Exact definition appears in DIN\n                                          # 16507, a German standards document\n                                          # of 1954.  Adopted more broadly  in\n                                          # 1966 by ???\nmetricpoint             3|8 mm            # Proposed in 1977 by Eurograf\noldpoint                1|72.27 inch      # The American point was invented\nprinterspoint           oldpoint          # by Nelson Hawks in 1879 and\ntexpoint                oldpoint          # dominates USA publishing.\n                                          # It was standardized by the American\n                                          # Typefounders Association at the\n                                          # value of 0.013837 inches exactly.\n                                          # Knuth uses the approximation given\n                                          # here (which is very close).  The\n                                          # comp.fonts FAQ claims that this\n                                          # value is supposed to be 1|12 of a\n                                          # pica where 83 picas is equal to 35\n                                          # cm.  But this value differs from\n                                          # the standard.\ntexscaledpoint          1|65536 texpoint  # The TeX typesetting system uses\ntexsp                   texscaledpoint    # this for all computations.\ncomputerpoint           1|72 inch         # The American point was rounded\npoint                   computerpoint\ncomputerpica            12 computerpoint  # to an even 1|72 inch by computer\npostscriptpoint         computerpoint     # people at some point.\npspoint                 postscriptpoint\ntwip                    1|20 point        # TWentieth of an Imperial Point\nQ                       1|4 mm            # Used in Japanese phototypesetting\n                                          # Q is for quarter\nfrenchprinterspoint     olddidotpoint\ndidotpoint              germandidotpoint  # This seems to be the dominant value\neuropeanpoint           didotpoint        # for the point used in Europe\ncicero                  12 didotpoint\n\nstick                   2 inches\n\n# Type sizes\n\nexcelsior               3 oldpoint\nbrilliant               3.5 oldpoint\ndiamondtype             4 oldpoint\npearl                   5 oldpoint\nagate                   5.5 oldpoint  # Originally agate type was 14 lines per\n                                      #   inch, giving a value of 1|14 in.\nruby                    agate         # British\nnonpareil               6 oldpoint\nmignonette              6.5 oldpoint\nemerald                 mignonette    # British\nminion                  7 oldpoint\nbrevier                 8 oldpoint\nbourgeois               9 oldpoint\nlongprimer              10 oldpoint\nsmallpica               11 oldpoint\npica                    12 oldpoint\nenglish                 14 oldpoint\ncolumbian               16 oldpoint\ngreatprimer             18 oldpoint\nparagon                 20 oldpoint\nmeridian                44 oldpoint\ncanon                   48 oldpoint\n\n# German type sizes\n\nnonplusultra            2 didotpoint\nbrillant                3 didotpoint\ndiamant                 4 didotpoint\nperl                    5 didotpoint\nnonpareille             6 didotpoint\nkolonel                 7 didotpoint\npetit                   8 didotpoint\nborgis                  9 didotpoint\nkorpus                  10 didotpoint\ncorpus                  korpus\ngaramond                korpus\nmittel                  14 didotpoint\ntertia                  16 didotpoint\ntext                    18 didotpoint\nkleine_kanon            32 didotpoint\nkanon                   36 didotpoint\ngrobe_kanon             42 didotpoint\nmissal                  48 didotpoint\nkleine_sabon            72 didotpoint\ngrobe_sabon             84 didotpoint\n\n#\n# Information theory units.  Note that the name \"entropy\" is used both\n# to measure information and as a physical quantity.\n#\n\nINFORMATION             bit\n\nnat                     (1/ln(2)) bits       # Entropy measured base e\nhartley                 log2(10) bits        # Entropy of a uniformly\nban                     hartley              #   distributed random variable\n                                             #   over 10 symbols.\ndit                     hartley              # from Decimal digIT\n\n#\n# Computer\n#\n\nbps                     bit/sec              # Sometimes the term \"baud\" is\n                                             #   incorrectly used to refer to\n                                             #   bits per second.  Baud refers\n                                             #   to symbols per second.  Modern\n                                             #   modems transmit several bits\n                                             #   per symbol.\nbyte                    8 bit                # Not all machines had 8 bit\nB                       byte                 #   bytes, but these days most of\n                                             #   them do.  But beware: for\n                                             #   transmission over modems, a\n                                             #   few extra bits are used so\n                                             #   there are actually 10 bits per\n                                             #   byte.\noctet                   8 bits               # The octet is always 8 bits\nnybble                  4 bits               # Half of a byte. Sometimes\n                                             #   equal to different lengths\n                                             #   such as 3 bits.\nnibble                  nybble\nnyp                     2 bits               # Donald Knuth asks in an exercise\n                                             #   for a name for a 2 bit\n                                             #   quantity and gives the \"nyp\"\n                                             #   as a solution due to Gregor\n                                             #   Purdy.  Not in common use.\nmeg                     megabyte             # Some people consider these\n                                             # units along with the kilobyte\ngig                     gigabyte             # to be defined according to\n                                             # powers of 2 with the kilobyte\n                                             # equal to 2^10 bytes, the\n                                             # megabyte equal to 2^20 bytes and\n                                             # the gigabyte equal to 2^30 bytes\n                                             # but these usages are forbidden\n                                             # by SI.  Binary prefixes have\n                                             # been defined by IEC to replace\n                                             # the SI prefixes.  Use them to\n                                             # get the binary values: KiB, MiB,\n                                             # and GiB.\njiffy                   0.01 sec     # This is defined in the Jargon File\njiffies                 jiffy        # (http://www.jargon.org) as being the\n                                     # duration of a clock tick for measuring\n                                     # wall-clock time.  Supposedly the value\n                                     # used to be 1|60 sec or 1|50 sec\n                                     # depending on the frequency of AC power,\n                                     # but then 1|100 sec became more common.\n                                     # On linux systems, this term is used and\n                                     # for the Intel based chips, it does have\n                                     # the value of .01 sec.  The Jargon File\n                                     # also lists two other definitions:\n                                     # millisecond, and the time taken for\n                                     # light to travel one foot.\ncdaudiospeed      44.1 kHz 2*16 bits # CD audio data rate at 44.1 kHz with 2\n                                     # samples of sixteen bits each.\ncdromspeed       75 2048 bytes / sec # For data CDs (mode1) 75 sectors are read\n                                     # each second with 2048 bytes per sector.\n                                     # Audio CDs do not have sectors, but\n                                     # people sometimes divide the bit rate by\n                                     # 75 and claim a sector length of 2352.\n                                     # Data CDs have a lower rate due to\n                                     # increased error correction overhead.\n                                     # There is a rarely used mode (mode2) with\n                                     # 2336 bytes per sector that has fewer\n                                     # error correction bits than mode1.\ndvdspeed                 1385 kB/s   # This is the \"1x\" speed of a DVD using\n                                     # constant linear velocity (CLV) mode.\n                                     # Modern DVDs may vary the linear velocity\n                                     # as they go from the inside to the\n                                     # outside of the disc.\n                       # See http://www.osta.org/technology/dvdqa/dvdqa4.htm\n\n\n#\n# Musical measures.  Musical intervals expressed as ratios.  Multiply\n# two intervals together to get the sum of the interval.  The function\n# musicalcent can be used to convert ratios to cents.\n#\n\n# Perfect intervals\n\noctave                  2\nmajorsecond             musicalfifth^2 / octave\nmajorthird              5|4\nminorthird              6|5\nmusicalfourth           4|3\nmusicalfifth            3|2\nmajorsixth              musicalfourth majorthird\nminorsixth              musicalfourth minorthird\nmajorseventh            musicalfifth majorthird\nminorseventh            musicalfifth minorthird\n\npythagoreanthird        majorsecond musicalfifth^2 / octave\nsyntoniccomma           pythagoreanthird / majorthird\npythagoreancomma        musicalfifth^12 / octave^7\n\n# Equal tempered definitions\n\nsemitone                octave^(1|12)\nmusicalcent(x) units=[1;1] range=(0,) semitone^(x/100) ; \\\n                                      100 log(musicalcent)/log(semitone)\n\n#\n# Musical note lengths.\n#\n\nwholenote               !\nMUSICAL_NOTE_LENGTH     wholenote\nhalfnote                1|2 wholenote\nquarternote             1|4 wholenote\neighthnote              1|8 wholenote\nsixteenthnote           1|16 wholenote\nthirtysecondnote        1|32 wholenote\nsixtyfourthnote         1|64 wholenote\ndotted                  3|2\ndoubledotted            7|4\nbreve                   doublewholenote\nsemibreve               wholenote\nminimnote               halfnote\ncrotchet                quarternote\nquaver                  eighthnote\nsemiquaver              sixteenthnote\ndemisemiquaver          thirtysecondnote\nhemidemisemiquaver      sixtyfourthnote\nsemidemisemiquaver      hemidemisemiquaver\n\n#\n# yarn and cloth measures\n#\n\n# yarn linear density\n\nwoolyarnrun             1600 yard/pound # 1600 yds of \"number 1 yarn\" weighs\n                                        # a pound.\nyarncut                 300 yard/pound  # Less common system used in\n                                        # Pennsylvania for wool yarn\ncottonyarncount         840 yard/pound\nlinenyarncount          300 yard/pound  # Also used for hemp and ramie\nworstedyarncount        1680 ft/pound\nmetricyarncount         meter/gram\ndenier                  1|9 tex            # used for silk and rayon\nmanchesteryarnnumber    drams/1000 yards   # old system used for silk\npli                     lb/in\ntypp                    1000 yd/lb   # abbreviation for Thousand Yard Per Pound\nasbestoscut             100 yd/lb    # used for glass and asbestos yarn\n\ntex                     gram / km    # rational metric yarn measure, meant\ndrex                    0.1 tex      # to be used for any kind of yarn\npoumar                  lb / 1e6 yard\n\n# yarn and cloth length\n\nskeincotton             80*54 inch   # 80 turns of thread on a reel with a\n                                     #  54 in circumference (varies for other\n                                     #  kinds of thread)\ncottonbolt              120 ft       # cloth measurement\nwoolbolt                210 ft\nbolt                    cottonbolt\nheer                    600 yards\ncut                     300 yards    # used for wet-spun linen yarn\nlea                     300 yards\n\nsailmakersyard          28.5 in\nsailmakersounce         oz / sailmakersyard 36 inch\n\nsilkmomme               momme / 25 yards 1.49 inch  # Traditional silk weight\nsilkmm                  silkmomme        # But it is also defined as\n                                         # lb/100 yd 45 inch.  The two\n                                         # definitions are slightly different\n                                         # and neither one seems likely to be\n                                         # the true source definition.\n\n#\n# drug dosage\n#\n\nmcg                     microgram        # Frequently used for vitamins\niudiptheria             62.8 microgram   # IU is for international unit\niupenicillin            0.6 microgram\niuinsulin               41.67 microgram\ndrop                    1|20 ml          # The drop was an old \"unit\" that was\n                                         # replaced by the minim.  But I was\n                                         # told by a pharmacist that in his\n                                         # profession, the conversion of 20\n                                         # drops per ml is actually used.\nbloodunit               450 ml           # For whole blood.  For blood\n                                         # components, a blood unit is the\n                                         # quanity of the component found in a\n                                         # blood unit of whole blood.  The\n                                         # human body contains about 12 blood\n                                         # units of whole blood.\n\n#\n# misc medical measure\n#\n\nfrenchcathetersize      1|3 mm           # measure used for the outer diameter\n                                         # of a catheter\ncharriere               frenchcathetersize\n\n\n#\n# fixup units for times when prefix handling doesn't do the job\n#\n\nhectare                 hectoare\nmegohm                  megaohm\nkilohm                  kiloohm\nmicrohm                 microohm\nmegalerg                megaerg    # 'L' added to make it pronounceable [18].\n\n#\n# Money\n#\n# Note that US$ is the primitive unit so other currencies are\n# generally given in US$.\n#\n\nunitedstatesdollar      US$\nusdollar                US$\n$                       dollar\nmark                    germanymark\nbolivar                 venezuelabolivar\nvenezuelanbolivarfuerte venezuelabolivar\nbolivarfuerte           bolivar        # The currency was revalued by\noldbolivar              1|1000 bolivar # a factor of 1000.\npeseta                  spainpeseta\nrand                    southafricarand\nescudo                  portugalescudo\nguilder                 netherlandsguilder\nhollandguilder          netherlandsguilder\npeso                    mexicopeso\nyen                     japanyen\nlira                    italylira\nrupee                   indiarupee\ndrachma                 greecedrachma\nfranc                   francefranc\nmarkka                  finlandmarkka\nbritainpound            unitedkingdompound\ngreatbritainpound       unitedkingdompound\nunitedkingdompound      ukpound\npoundsterling           britainpound\nyuan                    chinayuan\n\n# Some European currencies have permanent fixed exchange rates with\n# the Euro.  These rates were taken from the EC's web site:\n# http://ec.europa.eu/economy_finance/euro/adoption/conversion/index_en.htm\n\naustriaschilling        1|13.7603 euro\nbelgiumfranc            1|40.3399 euro\nestoniakroon            1|15.6466 euro # Equal to 1|8 germanymark\nfinlandmarkka           1|5.94573 euro\nfrancefranc             1|6.55957 euro\ngermanymark             1|1.95583 euro\ngreecedrachma           1|340.75 euro\nirelandpunt             1|0.787564 euro\nitalylira               1|1936.27 euro\nluxembourgfranc         1|40.3399 euro\nnetherlandsguilder      1|2.20371 euro\nportugalescudo          1|200.482 euro\nspainpeseta             1|166.386 euro\ncypruspound             1|0.585274 euro\nmaltalira               1|0.429300 euro\nsloveniatolar           1|239.640 euro\nslovakiakoruna          1|30.1260 euro\n\nUKP                     GBP        # Not an ISO code, but looks like one, and\n                                   # sometimes used on usenet.\nVEB                     1|1000 VEF # old venezuelan bolivar\n\n!include currency.units\n\n# Money on the gold standard, used in the late 19th century and early\n# 20th century.\n\nolddollargold           23.22 grains goldprice  # Used until 1934\nnewdollargold           96|7 grains goldprice   # After Jan 31, 1934\ndollargold              newdollargold\npoundgold               113 grains goldprice\ngoldounce               goldprice troyounce\nsilverounce             silverprice troyounce\nplatinumounce\t\tplatinumprice troyounce\nXAU                     goldounce\nXPT                     platinumounce\nXAG                     silverounce\n\n# Nominal masses of US coins.  Note that dimes, quarters and half dollars\n# have weight proportional to value.  Before 1965 it was $40 / kg.\n\nUSpennyweight           2.5 grams         # Since 1982, 48 grains before\nUSnickelweight          5 grams\nUSdimeweight            US$ 0.10 / (20 US$ / lb)   # Since 1965\nUSquarterweight         US$ 0.25 / (20 US$ / lb)   # Since 1965\nUShalfdollarweight      US$ 0.50 / (20 US$ / lb)   # Since 1971\nUSdollarmass            8.1 grams\n\n# British currency\n\nquid                    britainpound        # Slang names\nfiver                   5 quid\ntenner                  10 quid\nmonkey                  500 quid\nbrgrand                 1000 quid\nbob                     shilling\n\nshilling                1|20 britainpound   # Before decimalisation, there\noldpence                1|12 shilling       # were 20 shillings to a pound,\nfarthing                1|4 oldpence        # each of twelve old pence\nguinea                  21 shilling         # Still used in horse racing\ncrown                   5 shilling\nflorin                  2 shilling\ngroat                   4 oldpence\ntanner                  6 oldpence\nbrpenny                 0.01 britainpound\npence                   brpenny\ntuppence                2 pence\ntuppenny                tuppence\nha'penny                halfbrpenny\nhapenny                 ha'penny\noldpenny                oldpence\noldtuppence             2 oldpence\noldtuppenny             oldtuppence\nthreepence              3 oldpence    # threepence never refers to new money\nthreepenny              threepence\noldthreepence           threepence\noldthreepenny           threepence\noldhalfpenny            halfoldpenny\noldha'penny             oldhalfpenny\noldhapenny              oldha'penny\nbrpony                  25 britainpound\n\n# Canadian currency\n\nloony                   1 canadadollar    # This coin depicts a loon\ntoony                   2 canadadollar\n\n#\n# Units used for measuring volume of wood\n#\n\ncord                    4*4*8 ft^3   # 4 ft by 4 ft by 8 ft bundle of wood\nfacecord                1|2 cord\ncordfoot                1|8 cord     # One foot long section of a cord\ncordfeet                cordfoot\nhousecord               1|3 cord     # Used to sell firewood for residences,\n                                     #   often confusingly called a \"cord\"\nboardfoot               ft^2 inch    # Usually 1 inch thick wood\nboardfeet               boardfoot\nfbm                     boardfoot    # feet board measure\nstack                   4 yard^3     # British, used for firewood and coal [18]\nrick                    4 ft 8 ft 16 inches # Stack of firewood, supposedly\n                                     #   sometimes called a face cord, but this\n                                     #   value is equal to 1|3 cord.  Name\n                                     #   comes from an old Norse word for a\n                                     #   stack of wood.\nstere                   m^3\ntimberfoot              ft^3         # Used for measuring solid blocks of wood\nstandard                120 12 ft 11 in 1.5 in  # This is the St Petersburg or\n                                     #   Pittsburg standard.  Apparently the\n                                     #   term is short for \"standard hundred\"\n                                     #   which was meant to refer to 100 pieces\n                                     #   of wood (deals).  However, this\n                                     #   particular standard is equal to 120\n                                     #   deals which are 12 ft by 11 in by 1.5\n                                     #   inches (not the standard deal).\nhoppusfoot               (4/pi) ft^3 # Volume calculation suggested in 1736\nhoppusboardfoot      1|12 hoppusfoot #   forestry manual by Edward Hoppus, for\nhoppuston              50 hoppusfoot #   estimating the usable volume of a log.\n                                     #   It results from computing the volume\n                                     #   of a cylindrical log of length, L, and\n                                     #   girth (circumference), G, by V=L(G/4)^2.\n                                     #   The hoppus ton is apparently still in\n                                     #   use for shipments from Southeast Asia.\n\n# In Britain, the deal is apparently any piece of wood over 6 feet long, over\n# 7 wide and 2.5 inches thick.  The OED doesn't give a standard size.  A piece\n# of wood less than 7 inches wide is called a \"batten\".  This unit is now used\n# exclusively for fir and pine.\n\ndeal              12 ft 11 in 2.5 in # The standard North American deal [OED]\nwholedeal        12 ft 11 in 1.25 in # If it's half as thick as the standard\n                                     #   deal it's called a \"whole deal\"!\nsplitdeal         12 ft 11 in 5|8 in # And half again as thick is a split deal.\n\n\n# Used for shellac mixing rate\n\npoundcut            pound / gallon\nlbcut               poundcut\n\n#\n# Gas and Liquid flow units\n#\n\nFLUID_FLOW              VOLUME / TIME\n\n# Some obvious volumetric gas flow units (cu is short for cubic)\n\ncumec                   m^3/s\ncusec                   ft^3/s\n\n# Conventional abbreviations for fluid flow units\n\ngph                     gal/hr\ngpm                     gal/min\nmgd                     megagal/day\ncfs                     ft^3/s\ncfh                     ft^3/hour\ncfm                     ft^3/min\nlpm                     liter/min\nlfm                     ft/min     # Used to report air flow produced by fans.\n                                   # Multiply by cross sectional area to get a\n                                   # flow in cfm.\n\npru                     mmHg / (ml/min)  # peripheral resistance unit, used in\n                                         # medicine to assess blood flow in\n                                         # the capillaries.\n\n# Miner's inch:  This is an old historic unit used in the Western  United\n# States.  It is generally defined as the rate of flow through a one square\n# inch hole at a specified depth such as 4 inches.  In the late 19th century,\n# volume of water was sometimes measured in the \"24 hour inch\".  Values for the\n# miner's inch were fixed by state statues.  (This information is from a web\n# site operated by the Nevada Division of Water Planning:  The Water Words\n# Dictionary at http://www.state.nv.us/cnr/ndwp/dict-1/waterwds.htm.)\n\nminersinchAZ            1.5 ft^3/min\nminersinchCA            1.5 ft^3/min\nminersinchMT            1.5 ft^3/min\nminersinchNV            1.5 ft^3/min\nminersinchOR            1.5 ft^3/min\nminersinchID            1.2 ft^3/min\nminersinchKS            1.2 ft^3/min\nminersinchNE            1.2 ft^3/min\nminersinchNM            1.2 ft^3/min\nminersinchND            1.2 ft^3/min\nminersinchSD            1.2 ft^3/min\nminersinchUT            1.2 ft^3/min\nminersinchCO            1 ft^3/sec / 38.4  # 38.4 miner's inches = 1 ft^3/sec\nminersinchBC            1.68 ft^3/min      # British Columbia\n\n# Oceanographic flow\n\nsverdrup                1e6 m^3 / sec   # Used to express flow of ocean\n                                        # currents.  Named after Norwegian\n                                        # oceanographer H. Sverdrup.\n\n# In vacuum science and some other applications, gas flow is measured\n# as the product of volumetric flow and pressure.  This is useful\n# because it makes it easy to compare with the flow at standard\n# pressure (one atmosphere).  It also directly relates to the number\n# of gas molecules per unit time, and hence to the mass flow if the\n# molecular mass is known.\n\nGAS_FLOW                PRESSURE FLUID_FLOW\n\nsccm                    atm cc/min     # 's' is for \"standard\" to indicate\nsccs                    atm cc/sec     # flow at standard pressure\nscfh                    atm ft^3/hour  #\nscfm                    atm ft^3/min\nslpm                    atm liter/min\nslph                    atm liter/hour\nlusec                   liter micron Hg / s  # Used in vacuum science\n\n# US Standard Atmosphere (1976)\n# Atmospheric temperature and pressure vs. geometric height above sea level\n# This definition covers only the troposphere (the lowest atmospheric\n# layer, up to 11 km), and assumes the layer is polytropic.\n# A polytropic process is one for which PV^k = const, where P is the\n# pressure, V is the volume, and k is the polytropic exponent.  The\n# polytropic index is n = 1 / (k - 1).  As noted in the Wikipedia article\n# https://en.wikipedia.org/wiki/Polytropic_process, some authors reverse\n# the definitions of \"exponent\" and \"index.\"  The functions below assume\n# the following parameters:\n\n# temperature lapse rate, -dT/dz, in troposphere\n\nlapserate\t6.5 K/km\t# US Std Atm (1976)\n\n# air molecular weight, including constituent mol wt, given\n# in Table 3, p. 3\n\nair_1976\t78.084   %    28.0134 \\\n\t      + 20.9476  %    31.9988 \\\n\t      + 9340     ppm  39.948 \\\n\t      +  314     ppm  44.00995 \\\n\t      +   18.18  ppm  20.183 \\\n\t      +    5.24  ppm   4.0026 \\\n\t      +    2     ppm  16.04303 \\\n\t      +    1.14  ppm  83.80 \\\n\t      +    0.55  ppm   2.01594 \\\n\t      +    0.087 ppm 131.30\n\n# universal gas constant\nR_1976\t\t8.31432e3 N m/(kmol K)\n\n# polytropic index n\npolyndx_1976\tair_1976 (kg/kmol) gravity/(R_1976 lapserate) - 1\n\n# If desired, redefine using current values for air mol wt and R\n\npolyndx\t\tpolyndx_1976\n# polyndx\tair (kg/kmol) gravity/(R lapserate) - 1\n\n# for comparison with various references\n\npolyexpnt\t(polyndx + 1) / polyndx\n\n# The model assumes the following reference values:\n# sea-level temperature and pressure\n\nstdatmT0\t288.15 K\nstdatmP0\tatm\n\n# \"effective radius\" for relation of geometric to geopotential height,\n# at a latitude at which g = 9.80665 m/s (approximately 45.543 deg); no\n# relation to actual radius\n\nearthradUSAtm\t6356766 m\n\n# Temperature vs. geopotential height h\n# Assumes 15 degC at sea level\n# Based on approx 45 deg latitude\n# Lower limits of domain and upper limits of range are those of the\n# tables in US Standard Atmosphere (NASA 1976)\n\nstdatmTH(h) units=[m;K] domain=[-5000,11e3] range=[217,321] \\\n    stdatmT0+(-lapserate h) ; (stdatmT0+(-stdatmTH))/lapserate\n\n# Temperature vs. geometric height z; based on approx 45 deg latitude\nstdatmT(z) units=[m;K] domain=[-5000,11e3] range=[217,321] \\\n    stdatmTH(geop_ht(z)) ; ~geop_ht(~stdatmTH(stdatmT))\n\n# Pressure vs. geopotential height h\n# Assumes 15 degC and 101325 Pa at sea level\n# Based on approx 45 deg latitude\n# Lower limits of domain and upper limits of range are those of the\n# tables in US Standard Atmosphere (NASA 1976)\n\nstdatmPH(h) units=[m;Pa] domain=[-5000,11e3] range=[22877,177764] \\\n    atm (1 - (lapserate/stdatmT0) h)^(polyndx + 1) ; \\\n    (stdatmT0/lapserate) (1+(-(stdatmPH/stdatmP0)^(1/(polyndx + 1))))\n\n# Pressure vs. geometric height z; based on approx 45 deg latitude\nstdatmP(z) units=[m;Pa] domain=[-5000,11e3] range=[22877,177764] \\\n   stdatmPH(geop_ht(z)); ~geop_ht(~stdatmPH(stdatmP))\n\n# Geopotential height from geometric height\n# Based on approx 45 deg latitude\n# Lower limits of domain and range are somewhat arbitrary; they\n# correspond to the limits in the US Std Atm tables\n\ngeop_ht(z) units=[m;m] domain=[-5000,) range=[-5004,) \\\n    (earthradUSAtm z) / (earthradUSAtm + z) ; \\\n    (earthradUSAtm geop_ht) / (earthradUSAtm + (-geop_ht))\n\n# The standard value for the sea-level acceleration due to gravity is\n# 9.80665 m/s^2, but the actual value varies with latitude (Harrison 1949)\n# R_eff = 2 g_phi / denom\n# g_phi = 978.0356e-2 (1+0.0052885 sin(lat)^2+(-0.0000059) sin(2 lat)^2)\n#   or\n# g_phi = 980.6160e-2 (1+(-0.0026373) cos(2 lat)+0.0000059 cos(2 lat)^2)\n# denom = 3.085462e-6+2.27e-9 cos(2 lat)+(-2e-12) cos(4 lat) (minutes?)\n# There is no inverse function; the standard value applies at a latitude\n# of about 45.543 deg\n\ng_phi(lat) units=[deg;m/s2] domain=[0,90] noerror  \\\n    980.6160e-2 (1+(-0.0026373) cos(2 lat)+0.0000059 cos(2 lat)^2) m/s2\n\n# effective Earth radius for relation of geometric height to\n# geopotential height, as function of latitude (Harrison 1949)\n\nearthradius_eff(lat) units=[deg;m] domain=[0,90] noerror \\\n    m 2 9.780356 (1+0.0052885 sin(lat)^2+(-0.0000059) sin(2 lat)^2) / \\\n    (3.085462e-6 + 2.27e-9 cos(2 lat) + (-2e-12) cos(4 lat))\n\n# References\n# Harrison, L.P. 1949.  Relation Between Geopotential and Geometric\n#   Height.  In Smithsonian Meteorological Tables. List, Robert J., ed.\n#   6th ed., 4th reprint, 1968.  Washington, DC: Smithsonian Institution.\n# NASA.  US National Aeronautics and Space Administration. 1976.\n#   US Standard Atmosphere 1976.  Washington, DC: US Government Printing Office.\n\n# Gauge pressure functions\n#\n# Gauge pressure is measured relative to atmospheric pressure.  In the English\n# system, where pressure is often given in pounds per square inch, gauge\n# pressure is often indicated by 'psig' to distinguish it from absolute\n# pressure, often indicated by 'psia'.  At the standard atmospheric pressure\n# of 14.696 psia, a gauge pressure of 0 psig is an absolute pressure of 14.696\n# psia; an automobile tire inflated to 31 psig has an absolute pressure of\n# 45.696 psia.\n#\n# With gaugepressure(), the units must be specified (e.g., gaugepressure(1.5\n# bar)); with psig(), the units are taken as psi, so the example above of tire\n# pressure could be given as psig(31).\n#\n# If the normal elevation is significantly different from sea level, change\n# Patm appropriately, and adjust the lower domain limit on the gaugepressure\n# definition.\n\nPatm\tatm\n\ngaugepressure(x) units=[Pa;Pa] domain=[-101325,) range=[0,) \\\n                x + Patm ; gaugepressure+(-Patm)\n\npsig(x) units=[1;Pa] domain=[-14.6959487755135,) range=[0,) \\\n    gaugepressure(x psi) ; ~gaugepressure(psig) / psi\n\n#\n# Wire Gauge\n#\n# This area is a nightmare with huge charts of wire gauge diameters\n# that usually have no clear origin.  There are at least 5 competing wire gauge\n# systems to add to the confusion.  The use of wire gauge is related to the\n# manufacturing method: a metal rod is heated and drawn through a hole.  The\n# size change can't be too big.  To get smaller wires, the process is repeated\n# with a series of smaller holes.  Generally larger gauges mean smaller wires.\n# The gauges often have values such as \"00\" and \"000\" which are larger sizes\n# than simply \"0\" gauge.  In the tables that appear below, these gauges must be\n# specified as negative numbers (e.g. \"00\" is -1, \"000\" is -2, etc).\n# Alternatively, you can use the following units:\n#\n\ng00                      (-1)\ng000                     (-2)\ng0000                    (-3)\ng00000                   (-4)\ng000000                  (-5)\ng0000000                 (-6)\n\n# American Wire Gauge (AWG) or Brown & Sharpe Gauge appears to be the most\n# important gauge. ASTM B-258 specifies that this gauge is based on geometric\n# interpolation between gauge 0000, which is 0.46 inches exactly, and gauge 36\n# which is 0.005 inches exactly.  Therefore, the diameter in inches of a wire\n# is given by the formula 1|200 92^((36-g)/39).  Note that 92^(1/39) is close\n# to 2^(1/6), so diameter is approximately halved for every 6 gauges.  For the\n# repeated zero values, use negative numbers in the formula.  The same document\n# also specifies rounding rules which seem to be ignored by makers of tables.\n# Gauges up to 44 are to be specified with up to 4 significant figures, but no\n# closer than 0.0001 inch.  Gauges from 44 to 56 are to be rounded to the\n# nearest 0.00001 inch.\n#\n# In addition to being used to measure wire thickness, this gauge is used to\n# measure the thickness of sheets of aluminum, copper, and most metals other\n# than steel, iron and zinc.\n\nwiregauge(g) units=[1;m] range=(0,) \\\n             1|200 92^((36+(-g))/39) in; 36+(-39)ln(200 wiregauge/in)/ln(92)\nawg()        wiregauge\n\n# Next we have the SWG, the Imperial or British Standard Wire Gauge.  This one\n# is piecewise linear.  It was used for aluminum sheets.\n\nbrwiregauge[in]  \\\n       -6 0.5    \\\n       -5 0.464  \\\n       -3 0.4    \\\n       -2 0.372  \\\n        3 0.252  \\\n        6 0.192  \\\n       10 0.128  \\\n       14 0.08   \\\n       19 0.04   \\\n       23 0.024  \\\n       26 0.018  \\\n       28 0.0148 \\\n       30 0.0124 \\\n       39 0.0052 \\\n       49 0.0012 \\\n       50 0.001\n\n# The following is from the Appendix to ASTM B 258\n#\n#    For example, in U.S. gage, the standard for sheet metal is based on the\n#    weight of the metal, not on the thickness. 16-gage is listed as\n#    approximately .0625 inch thick and 40 ounces per square foot (the original\n#    standard was based on wrought iron at .2778 pounds per cubic inch; steel\n#    has almost entirely superseded wrought iron for sheet use, at .2833 pounds\n#    per cubic inch). Smaller numbers refer to greater thickness. There is no\n#    formula for converting gage to thickness or weight.\n#\n# It's rather unclear from the passage above whether the plate gauge values are\n# therefore wrong if steel is being used.  Reference [15] states that steel is\n# in fact measured using this gauge (under the name Manufacturers' Standard\n# Gauge) with a density of 501.84 lb/ft3 = 0.2904 lb/in3 used for steel.\n# But this doesn't seem to be the correct density of steel (.2833 lb/in3 is\n# closer).\n#\n# This gauge was established in 1893 for purposes of taxation.\n\n# Old plate gauge for iron\n\nplategauge[(oz/ft^2)/(480*lb/ft^3)] \\\n      -5 300   \\\n       1 180   \\\n      14  50   \\\n      16  40   \\\n      17  36   \\\n      20  24   \\\n      26  12   \\\n      31   7   \\\n      36   4.5 \\\n      38   4\n\n# Manufacturers Standard Gage\n\nstdgauge[(oz/ft^2)/(501.84*lb/ft^3)] \\\n      -5 300   \\\n       1 180   \\\n      14  50   \\\n      16  40   \\\n      17  36   \\\n      20  24   \\\n      26  12   \\\n      31   7   \\\n      36   4.5 \\\n      38   4\n\n# A special gauge is used for zinc sheet metal.  Notice that larger gauges\n# indicate thicker sheets.\n\nzincgauge[in]    \\\n        1 0.002  \\\n       10 0.02   \\\n       15 0.04   \\\n       19 0.06   \\\n       23 0.1    \\\n       24 0.125  \\\n       27 0.5    \\\n       28 1\n\n#\n# Screw sizes\n#\n# In the USA, screw diameters are reported using a gauge number.\n# Metric screws are reported as Mxx where xx is the diameter in mm.\n#\n\nscrewgauge(g) units=[1;m] range=[0,) \\\n              (.06 + .013 g) in ; (screwgauge/in + (-.06)) / .013\n\n#\n# Abrasive grit size\n#\n# Standards governing abrasive grit sizes are complicated, specifying\n# fractions of particles that are passed or retained by different mesh\n# sizes.  As a result, it is not possible to make precise comparisons\n# of different grit standards.  The tables below allow the\n# determination of rough equivlants by using median particle size.\n#\n# Standards in the USA are determined by the Unified Abrasives\n# Manufacturers' Association (UAMA), which resulted from the merger of\n# several previous organizations.  One of the old organizations was\n# CAMI (Coated Abrasives Manufacturers' Institute).\n#\n# UAMA has a web page with plots showing abrasive particle ranges for\n# various different grits and comparisons between standards.\n#\n# http://www.uama.org/Abrasives101/101Standards.html\n#\n# Abrasives are grouped into \"bonded\" abrasives for use with grinding\n# wheels and \"coated\" abrasives for sandpapers and abrasive films.\n# The industry uses different grit standards for these two\n# categories.\n#\n# Another division is between \"macrogrits\", grits below 240 and\n# \"microgrits\", which are above 240.  Standards differ, as do methods\n# for determining particle size.  In the USA, ANSI B74.12 is the\n# standard governing macrogrits.  ANSI B74.10 covers bonded microgrit\n# abrasives, and ANSI B74.18 covers coated microgrit abrasives.  It\n# appears that the coated standard is identical to the bonded standard\n# for grits up through 600 but then diverges significantly.\n#\n# European grit sizes are determined by the Federation of European\n# Producers of Abrasives.  http://www.fepa-abrasives.org\n#\n# They give two standards, the \"F\" grit for bonded abrasives and the\n# \"P\" grit for coated abrasives.  This data is taken directly from\n# their web page.\n\n# FEPA P grit for coated abrasives is commonly seen on sandpaper in\n# the USA where the paper will be marked P600, for example.  FEPA P\n# grits are said to be more tightly constrained than comparable ANSI\n# grits so that the particles are more uniform in size and hence give\n# a better finish.\n\ngrit_P[micron] \\\n        12 1815 \\\n        16 1324 \\\n        20 1000 \\\n        24 764 \\\n        30 642 \\\n        36 538 \\\n        40 425 \\\n        50 336 \\\n        60 269 \\\n        80 201 \\\n        100 162 \\\n        120 125 \\\n        150 100 \\\n        180 82 \\\n        220 68 \\\n        240 58.5 \\\n        280 52.2 \\\n        320 46.2 \\\n        360 40.5 \\\n        400 35 \\\n        500 30.2 \\\n        600 25.8 \\\n        800 21.8 \\\n        1000 18.3 \\\n        1200 15.3 \\\n        1500 12.6 \\\n        2000 10.3 \\\n        2500 8.4\n\n# The F grit is the European standard for bonded abrasives such as\n# grinding wheels\n\ngrit_F[micron] \\\n        4 4890 \\\n        5 4125 \\\n        6 3460 \\\n        7 2900 \\\n        8 2460 \\\n        10 2085 \\\n        12 1765 \\\n        14 1470 \\\n        16 1230 \\\n        20 1040 \\\n        22 885 \\\n        24 745 \\\n        30 625 \\\n        36 525 \\\n        40 438 \\\n        46 370 \\\n        54 310 \\\n        60 260 \\\n        70 218 \\\n        80 185 \\\n        90 154 \\\n        100 129 \\\n        120 109 \\\n        150 82 \\\n        180 69 \\\n        220 58 \\\n        230 53 \\\n        240 44.5 \\\n        280 36.5 \\\n        320 29.2 \\\n        360 22.8 \\\n        400 17.3 \\\n        500 12.8 \\\n        600 9.3 \\\n        800 6.5 \\\n        1000 4.5 \\\n        1200 3 \\\n        1500 2.0 \\\n        2000 1.2\n\n# According to the UAMA web page, the ANSI bonded and ANSI coated standards\n# are identical to FEPA F in the macrogrit range (under 240 grit), so these\n# values are taken from the FEPA F table.  The values for 240 and above are\n# from the UAMA web site and represent the average of the \"d50\" range\n# endpoints listed there.\n\nansibonded[micron] \\\n    4 4890 \\\n    5 4125 \\\n    6 3460 \\\n    7 2900 \\\n    8 2460 \\\n    10 2085 \\\n    12 1765 \\\n    14 1470 \\\n    16 1230 \\\n    20 1040 \\\n    22 885 \\\n    24 745 \\\n    30 625 \\\n    36 525 \\\n    40 438 \\\n    46 370 \\\n    54 310 \\\n    60 260 \\\n    70 218 \\\n    80 185 \\\n    90 154 \\\n    100 129 \\\n    120 109 \\\n    150 82 \\\n    180 69 \\\n    220 58 \\\n    240 50 \\\n    280 39.5 \\\n    320 29.5 \\\n    360 23 \\\n    400 18.25 \\\n    500 13.9 \\\n    600 10.55 \\\n    800 7.65 \\\n    1000 5.8 \\\n    1200 3.8\n\ngrit_ansibonded() ansibonded\n\n# Like the bonded grit, the coated macrogrits below 240 are taken from the\n# FEPA F table.  Data above this is from the UAMA site.  Note that the coated\n# and bonded standards are evidently the same from 240 up to 600 grit, but\n# starting at 800 grit, the coated standard diverges.  The data from UAMA show\n# that 800 grit coated has an average size slightly larger than the average\n# size of 600 grit coated/bonded.  However, the 800 grit has a significantly\n# smaller particle size variation.\n#\n# Because of this non-monotonicity from 600 grit to 800 grit this definition\n# produces a warning about the lack of a unique inverse.\n\nansicoated[micron] noerror \\\n    4 4890 \\\n    5 4125 \\\n    6 3460 \\\n    7 2900 \\\n    8 2460 \\\n    10 2085 \\\n    12 1765 \\\n    14 1470 \\\n    16 1230 \\\n    20 1040 \\\n    22 885 \\\n    24 745 \\\n    30 625 \\\n    36 525 \\\n    40 438 \\\n    46 370 \\\n    54 310 \\\n    60 260 \\\n    70 218 \\\n    80 185 \\\n    90 154 \\\n    100 129 \\\n    120 109 \\\n    150 82 \\\n    180 69 \\\n    220 58 \\\n    240 50 \\\n    280 39.5 \\\n    320 29.5 \\\n    360 23 \\\n    400 18.25 \\\n    500 13.9 \\\n    600 10.55 \\\n    800 11.5 \\\n    1000 9.5 \\\n    2000 7.2 \\\n    2500 5.5 \\\n    3000 4 \\\n    4000 3 \\\n    6000 2 \\\n    8000 1.2\n\ngrit_ansicoated()  ansicoated\n\n\n#\n# Is this correct?  This is the JIS Japanese standard used on waterstones\n#\njisgrit[micron] \\\n     150 75 \\\n     180 63 \\\n     220 53 \\\n     280 48 \\\n     320 40 \\\n     360 35 \\\n     400 30 \\\n     600 20 \\\n     700 17 \\\n     800 14 \\\n     1000 11.5 \\\n     1200 9.5 \\\n     1500 8 \\\n     2000 6.7 \\\n     2500 5.5 \\\n     3000 4 \\\n     4000 3 \\\n     6000 2 \\\n     8000 1.2\n\n# The \"Finishing Scale\" marked with an A (e.g. A75).  This information\n# is from the web page of the sand paper manufacturer Klingspor\n# http://www.klingspor.com/gritgradingsystems.htm\n#\n# I have no information about what this scale is used for.\n\ngrit_A[micron]\\\n     16 15.3 \\\n     25 21.8 \\\n     30 23.6 \\\n     35 25.75 \\\n     45 35 \\\n     60 46.2 \\\n     65 53.5 \\\n     75 58.5 \\\n     90 65 \\\n     110 78 \\\n     130 93 \\\n     160 127 \\\n     200 156\n#\n# Grits for DMT brand diamond sharpening stones from\n# http://dmtsharp.com/products/colorcode.htm\n#\n\ndmtxxcoarse  120 micron    # 120 mesh\ndmtsilver    dmtxxcoarse\ndmtxx        dmtxxcoarse\ndmtxcoarse   60 micron     # 220 mesh\ndmtx         dmtxcoarse\ndmtblack     dmtxcoarse\ndmtcoarse    45 micron     # 325 mesh\ndmtc         dmtcoarse\ndmtblue      dmtcoarse\ndmtfine      25 micron     # 600 mesh\ndmtred       dmtfine\ndmtf         dmtfine\ndmtefine     9 micron      # 1200 mesh\ndmte         dmtefine\ndmtgreen     dmtefine\ndmtceramic   7 micron      # 2200 mesh\ndmtcer       dmtceramic\ndmtwhite     dmtceramic\ndmteefine    3 micron      # 8000 mesh\ndmttan       dmteefine\ndmtee        dmteefine\n\n#\n# The following values come from a page in the Norton Stones catalog,\n# available at their web page, http://www.nortonstones.com.\n#\n\nhardtranslucentarkansas  6 micron     # Natural novaculite (silicon quartz)\nsoftarkansas             22 micron    #   stones\n\nextrafineindia           22 micron    # India stones are Norton's manufactured\nfineindia                35 micron    #   aluminum oxide product\nmediumindia              53.5 micron\ncoarseindia              97 micron\n\nfinecrystolon            45 micron    # Crystolon stones are Norton's\nmediumcrystalon          78 micron    #   manufactured silicon carbide product\ncoarsecrystalon          127 micron\n\n# The following are not from the Norton catalog\nhardblackarkansas        6 micron\nhardwhitearkansas        11 micron\nwashita                  35 micron\n\n#\n# Ring size. All ring sizes are given as the circumference of the ring.\n#\n\n# USA ring sizes.  Several slightly different definitions seem to be in\n# circulation.  According to [15], the interior diameter of size n ring in\n# inches is 0.32 n + 0.458 for n ranging from 3 to 13.5 by steps of 0.5.  The\n# size 2 ring is inconsistently 0.538in and no 2.5 size is listed.\n#\n# However, other sources list 0.455 + 0.0326 n and 0.4525 + 0.0324 n as the\n# diameter and list no special case for size 2.  (Or alternatively they are\n# 1.43 + .102 n and 1.4216+.1018 n for measuring circumference in inches.)  One\n# reference claimed that the original system was that each size was 1|10 inch\n# circumference, but that source doesn't have an explanation for the modern\n# system which is somewhat different.\n\nringsize(n) units=[1;in] domain=[2,) range=[1.6252,) \\\n            (1.4216+.1018 n) in ; (ringsize/in + (-1.4216))/.1018\n\n# Old practice in the UK measured rings using the \"Wheatsheaf gauge\" with sizes\n# specified alphabetically and based on the ring inside diameter in steps of\n# 1|64 inch.  This system was replaced in 1987 by British Standard 6820 which\n# specifies sizes based on circumference.  Each size is 1.25 mm different from\n# the preceding size.  The baseline is size C which is 40 mm circumference.\n# The new sizes are close to the old ones.  Sometimes it's necessary to go\n# beyond size Z to Z+1, Z+2, etc.\n\nsizeAring               37.50 mm\nsizeBring               38.75 mm\nsizeCring               40.00 mm\nsizeDring               41.25 mm\nsizeEring               42.50 mm\nsizeFring               43.75 mm\nsizeGring               45.00 mm\nsizeHring               46.25 mm\nsizeIring               47.50 mm\nsizeJring               48.75 mm\nsizeKring               50.00 mm\nsizeLring               51.25 mm\nsizeMring               52.50 mm\nsizeNring               53.75 mm\nsizeOring               55.00 mm\nsizePring               56.25 mm\nsizeQring               57.50 mm\nsizeRring               58.75 mm\nsizeSring               60.00 mm\nsizeTring               61.25 mm\nsizeUring               62.50 mm\nsizeVring               63.75 mm\nsizeWring               65.00 mm\nsizeXring               66.25 mm\nsizeYring               67.50 mm\nsizeZring               68.75 mm\n\n# Japanese sizes start with size 1 at a 13mm inside diameter and each size is\n# 1|3 mm larger in diameter than the previous one.  They are multiplied by pi\n# to give circumference.\n\njpringsize(n)  units=[1;mm] domain=[1,) range=[0.040840704,) \\\n               (38|3 + n/3) pi mm ; 3 jpringsize/ pi mm + (-38)\n\n# The European ring sizes are the length of the circumference in mm minus 40.\n\neuringsize(n)  units=[1;mm] (n+40) mm ; euringsize/mm + (-40)\n\n#\n# Abbreviations\n#\n\nmph                     mile/hr\nmpg                     mile/gal\nkph                     km/hr\nfL                      footlambert\nfpm                     ft/min\nfps                     ft/s\nrpm                     rev/min\nrps                     rev/sec\nmi                      mile\nsmi                     mile\nnmi                     nauticalmile\nmbh                     1e3 btu/hour\nmcm                     1e3 circularmil\nipy                     inch/year    # used for corrosion rates\nccf                     100 ft^3     # used for selling water [18]\nMcf                     1000 ft^3    # not million cubic feet [18]\nkp                      kilopond\nkpm                     kp meter\nWh                      W hour\nhph                     hp hour\nplf                     lb / foot    # pounds per linear foot\n\n#\n# Compatibility units with unix version\n#\n\npa                      Pa\nev                      eV\nhg                      Hg\noe                      Oe\nmh                      mH\nrd                      rod\npf                      pF\ngr                      grain\nnt                      N\nhz                      Hz\nhd                      hogshead\ndry                     drygallon/gallon\nnmile                   nauticalmile\nbeV                     GeV\nbev                     beV\ncoul                    C\n\n#\n# Radioactivity units\n#\n\nbecquerel               /s           # Activity of radioactive source\nBq                      becquerel    #\ncurie                   3.7e10 Bq    # Defined in 1910 as the radioactivity\nCi                      curie        # emitted by the amount of radon that is\n                                     # in equilibrium with 1 gram of radium.\nrutherford              1e6 Bq       #\n\nRADIATION_DOSE          gray\ngray                    J/kg         # Absorbed dose of radiation\nGy                      gray         #\nrad                     1e-2 Gy      # From Radiation Absorbed Dose\nrep                     8.38 mGy     # Roentgen Equivalent Physical, the amount\n                                     #   of radiation which , absorbed in the\n                                     #   body, would liberate the same amount\n                                     #   of energy as 1 roentgen of X rays\n                                     #   would, or 97 ergs.\n\nsievert                 J/kg         # Dose equivalent:  dosage that has the\nSv                      sievert      #   same effect on human tissues as 200\nrem                     1e-2 Sv      #   keV X-rays.  Different types of\n                                     #   radiation are weighted by the\n                                     #   Relative Biological Effectiveness\n                                     #   (RBE).\n                                     #\n                                     #      Radiation type       RBE\n                                     #       X-ray, gamma ray     1\n                                     #       beta rays, > 1 MeV   1\n                                     #       beta rays, < 1 MeV  1.08\n                                     #       neutrons, < 1 MeV   4-5\n                                     #       neutrons, 1-10 MeV   10\n                                     #       protons, 1 MeV      8.5\n                                     #       protons, .1 MeV      10\n                                     #       alpha, 5 MeV         15\n                                     #       alpha, 1 MeV         20\n                                     #\n                                     #   The energies are the kinetic energy\n                                     #   of the particles.  Slower particles\n                                     #   interact more, so they are more\n                                     #   effective ionizers, and hence have\n                                     #   higher RBE values.\n                                     #\n                                     # rem stands for Roentgen Equivalent\n                                     # Mammal\n\nroentgen              2.58e-4 C / kg # Ionizing radiation that produces\n                                     #   1 statcoulomb of charge in 1 cc of\n                                     #   dry air at stp.\nrontgen                 roentgen     # Sometimes it appears spelled this way\nsievertunit             8.38 rontgen # Unit of gamma ray dose delivered in one\n                                     #   hour at a distance of 1 cm from a\n                                     #   point source of 1 mg of radium\n                                     #   enclosed in platinum .5 mm thick.\n\neman                    1e-7 Ci/m^3  # radioactive concentration\nmache                   3.7e-7 Ci/m^3\n\n#\n# Atomic weights.  The atomic weight of an element is the ratio of the mass of\n# a mole of the element to 1|12 of a mole of Carbon 12.  The Standard Atomic\n# Weights apply to the elements as they occur naturally on earth.  Elements\n# which do not occur naturally or which occur with wide isotopic variability do\n# not have Standard Atomic Weights.  For these elements, the atomic weight is\n# based on the longest lived isotope, as marked in the comments.  In some\n# cases, the comment for these entries also gives a number which is an atomic\n# weight for a different isotope that may be of more interest than the longest\n# lived isotope.\n#\n\nactinium                227.0278\naluminum                26.981539\namericium               243.0614     # Longest lived. 241.06\nantimony                121.760\nargon                   39.948\narsenic                 74.92159\nastatine                209.9871     # Longest lived\nbarium                  137.327\nberkelium               247.0703     # Longest lived. 249.08\nberyllium               9.012182\nbismuth                 208.98037\nboron                   10.811\nbromine                 79.904\ncadmium                 112.411\ncalcium                 40.078\ncalifornium             251.0796     # Longest lived.  252.08\ncarbon                  12.011\ncerium                  140.115\ncesium                  132.90543\nchlorine                35.4527\nchromium                51.9961\ncobalt                  58.93320\ncopper                  63.546\ncurium                  247.0703\ndeuterium               2.0141017778\ndysprosium              162.50\neinsteinium             252.083      # Longest lived\nerbium                  167.26\neuropium                151.965\nfermium                 257.0951     # Longest lived\nfluorine                18.9984032\nfrancium                223.0197     # Longest lived\ngadolinium              157.25\ngallium                 69.723\ngermanium               72.61\ngold                    196.96654\nhafnium                 178.49\nhelium                  4.002602\nholmium                 164.93032\nhydrogen                1.00794\nindium                  114.818\niodine                  126.90447\niridium                 192.217\niron                    55.845\nkrypton                 83.80\nlanthanum               138.9055\nlawrencium              262.11       # Longest lived\nlead                    207.2\nlithium                 6.941\nlutetium                174.967\nmagnesium               24.3050\nmanganese               54.93805\nmendelevium             258.10       # Longest lived\nmercury                 200.59\nmolybdenum              95.94\nneodymium               144.24\nneon                    20.1797\nneptunium               237.0482\nnickel                  58.6934\nniobium                 92.90638\nnitrogen                14.00674\nnobelium                259.1009     # Longest lived\nosmium                  190.23\noxygen                  15.9994\npalladium               106.42\nphosphorus              30.973762\nplatinum                195.08\nplutonium               244.0642     # Longest lived.  239.05\npolonium                208.9824     # Longest lived.  209.98\npotassium               39.0983\npraseodymium            140.90765\npromethium              144.9127     # Longest lived.  146.92\nprotactinium            231.03588\nradium                  226.0254\nradon                   222.0176     # Longest lived\nrhenium                 186.207\nrhodium                 102.90550\nrubidium                85.4678\nruthenium               101.07\nsamarium                150.36\nscandium                44.955910\nselenium                78.96\nsilicon                 28.0855\nsilver                  107.8682\nsodium                  22.989768\nstrontium               87.62\nsulfur                  32.066\ntantalum                180.9479\ntechnetium              97.9072      # Longest lived.  98.906\ntellurium               127.60\nterbium                 158.92534\nthallium                204.3833\nthorium                 232.0381\nthullium                168.93421\ntin                     118.710\ntitanium                47.867\ntungsten                183.84\nuranium                 238.0289\nvanadium                50.9415\nxenon                   131.29\nytterbium               173.04\nyttrium                 88.90585\nzinc                    65.39\nzirconium               91.224\n\n# Average molecular weight of air\n#\n# The atmospheric composition listed is from NASA Earth Fact Sheet (accessed\n# 28 August 2015)\n# http://nssdc.gsfc.nasa.gov/planetary/factsheet/earthfact.html\n# Numbers do not add up to exactly 100% due to roundoff and uncertainty Water\n# is highly variable, typically makes up about 1%\n\nair            78.08% nitrogen 2 \\\n              + 20.95% oxygen 2 \\\n              + 9340 ppm argon \\\n              +  400 ppm (carbon + oxygen 2) \\\n              +   18.18 ppm neon \\\n              +    5.24 ppm helium \\\n              +    1.7  ppm (carbon + 4 hydrogen) \\\n              +    1.14 ppm krypton \\\n              +    0.55 ppm hydrogen 2\n#\n# population units\n#\n\npeople                  1\nperson                  people\ndeath                   people\ncapita                  people\npercapita               per capita\n\n# TGM dozen based unit system listed on the \"dozenal\" forum\n# http://www.dozenalsociety.org.uk/apps/tgm.htm.  These units are\n# proposed as an allegedly more rational alternative to the SI system.\n\nTim                     12^-4 hour         # Time \nGrafut                  gravity Tim^2      # Length based on gravity\nSurf                    Grafut^2           # area\nVolm                    Grafut^3           # volume\nVlos                    Grafut/Tim         # speed\nDenz                    Maz/Volm           # density\nMag                     Maz gravity        # force\nMaz                     Volm kg / oldliter # mass based on water\n\nTm                      Tim                # Abbreviations\nGf                      Grafut\nSf                      Surf\nVm                      Volm\nVl                      Vlos\nMz                      Maz\nDz                      Denz\n\n# Dozen based unit prefixes\n\nZena-                   12\nDuna-                   12^2\nTrina-                  12^3\nQuedra-                 12^4\nQuena-                  12^5\nHesa-                   12^6\nSeva-                   12^7\nAka-                    12^8\nNeena-                  12^9\nDexa-                   12^10\nLefa-                   12^11\nZennila-                12^12\n\nZeni-                   12^-1\nDuni-                   12^-2\nTrini-                  12^-3\nQuedri-                 12^-4\nQueni-                  12^-5\nHesi-                   12^-6\nSevi-                   12^-7\nAki-                    12^-8\nNeeni-                  12^-9\nDexi-                   12^-10\nLefi-                   12^-11\nZennili-                12^-12\n\n#\n# Traditional Japanese units (shakkanhou)\n#\n# The traditional system of weights and measures is called shakkanhou from the\n# shaku and the ken.  Japan accepted SI units in 1891 and legalized conversions\n# to the traditional system.  In 1909 the inch-pound system was also legalized,\n# so Japan had three legally approved systems.  A change to the metric system\n# started in 1921 but there was a lot of resistance.  The Measurement Law of\n# October 1999 prohibits sales in anything but SI units.  However, the old\n# units still live on in construction and as the basis for paper sizes of books\n# and tools used for handicrafts.\n#\n# Note that units below use the Hepburn romanization system.  Some other\n# systems would render \"mou\", \"jou\", and \"chou\" as \"mo\", \"jo\" and \"cho\".\n#\n#\n# http://hiramatu-hifuka.com/onyak/onyindx.html\n\n# Japanese Proportions.  These are still in everyday use.  They also\n# get used as units to represent the proportion of the standard unit.\n\nwari_proportion      1|10\nwari                 wari_proportion\nbu_proportion        1|100    # The character bu can also be read fun or bun\n                              # but usually \"bu\" is used for units.\nrin_proportion       1|1000\nmou_proportion       1|10000\n\n\n# Japanese Length Measures\n#\n# The length system is called kanejaku or\n# square and originated in China.  It was\n# adopted as Japan's official measure in 701\n# by the Taiho Code.  This system is still in\n# common use in architecture and clothing.\n\nshaku              1|3.3 m\nmou                1|10000 shaku\nrin                1|1000 shaku\nbu_distance        1|100 shaku\nsun                1|10 shaku\njou_distance       10 shaku\njou                jou_distance\n\nkanejakusun        sun      # Alias to emphasize architectural name\nkanejaku           shaku\nkanejakujou        jou\n\n# http://en.wikipedia.org/wiki/Taiwanese_units_of_measurement\ntaichi             shaku   # http://zh.wikipedia.org/wiki/台尺\ntaicun             sun     # http://zh.wikipedia.org/wiki/台制\n!utf8\n台尺               taichi  # via Hanyu Pinyin romanizations\n台寸               taicun\n!endutf8\n\n# In context of clothing, shaku is different from architecture\n# http://www.scinet.co.jp/sci/sanwa/kakizaki-essay54.html\n\nkujirajaku         10|8 shaku\nkujirajakusun      1|10 kujirajaku\nkujirajakubu       1|100 kujirajaku\nkujirajakujou      10 kujirajaku\ntan_distance       3 kujirajakujou\n\nken                6 shaku  # Also sometimes 6.3, 6.5, or 6.6\n                            # http://www.homarewood.co.jp/syakusun.htm\n\n# mostly unused\nchou_distance      60 ken\nchou               chou_distance\nri                 36 chou\n\n# Japanese Area Measures\n\n# Tsubo is still used for land size, though the others are more\n# recognized by their homonyms in the other measurements.\n\ngou_area             1|10 tsubo\ntsubo                36 shaku^2    # Size of two tatami = ken^2 ??\nse                   30 tsubo\ntan_area             10 se\nchou_area            10 tan_area\n\n# http://en.wikipedia.org/wiki/Taiwanese_units_of_measurement\nping                 tsubo     # http://zh.wikipedia.org/wiki/坪\njia                  2934 ping # http://zh.wikipedia.org/wiki/甲_(单位)\nfen                  1|10 jia  # http://zh.wikipedia.org/wiki/分\nfen_area             1|10 jia  # Protection against future collisions\n!utf8\n坪                   ping      # via Hanyu Pinyin romanizations\n甲                   jia\n分                   fen\n分地                 fen_area  # Protection against future collisions\n!endutf8\n\n# Japanese architecture is based on a \"standard\" size of tatami mat.\n# Room sizes today are given in number of tatami, and this number\n# determines the spacing between colums and hence sizes of sliding\n# doors and paper screens.  However, every region has its own slightly\n# different tatami size.  Edoma, used in and around Tokyo and\n# Hokkaido, is becoming a nationwide standard.  Kyouma is used around\n# Kyoto, Osaka and Kyuushu, and Chuukyouma is used around Nagoya.\n# Note that the tatami all have the aspect ratio 2:1 so that the mats\n# can tile the room with some of them turned 90 degrees.\n#\n# http://www.moon2.net/tatami/infotatami/structure.html\n\nedoma                (5.8*2.9) shaku^2\nkyouma               (6.3*3.15) shaku^2\nchuukyouma           (6*3) shaku^2\njou_area             edoma\ntatami               jou_area\n\n# Japanese Volume Measures\n\n# The \"shou\" is still used for such things as alcohol and seasonings.\n# Large quantities of paint are still purchased in terms of \"to\".\n\nshaku_volume         1|10 gou_volume\ngou_volume           1|10 shou\ngou                  gou_volume\nshou                 (4.9*4.9*2.7) sun^3   # The character shou which is\n                                           # the same as masu refers to a\n                                           # rectangular wooden cup used to\n                                           # measure liquids and cereal.\n                                           # Sake is sometimes served in a masu\n                                           # Note that it happens to be\n                                           # EXACTLY 7^4/11^3 liters.\nto                   10 shou\nkoku                 10 to  # No longer used; historically a measure of rice\n\n# Japanese Weight Measures\n#\n# http://wyoming.hp.infoseek.co.jp/zatugaku/zamoney.html\n\n# Not really used anymore.\n\nrin_weight           1|10 bu_weight\nbu_weight            1|10 monme\nfun                  1|10 monme\nmonme                momme\nkin                  160 monme\nkan                  1000 monme\nkwan                 kan         # This was the old pronounciation of the unit.\n                                 # The old spelling persisted a few centuries\n                                 # longer and was not changed until around\n                                 # 1950.\n\n# http://en.wikipedia.org/wiki/Taiwanese_units_of_measurement\n# says: \"Volume measure in Taiwan is largely metric\".\ntaijin               kin      # http://zh.wikipedia.org/wiki/台斤\ntailiang             10 monme # http://zh.wikipedia.org/wiki/台斤\ntaiqian              monme    # http://zh.wikipedia.org/wiki/台制\n!utf8\n台斤                 taijin # via Hanyu Pinyin romanizations\n台兩                 tailiang\n台錢                 taiqian\n!endutf8\n\n#\n# Australian unit\n#\n\naustraliasquare         (10 ft)^2   # Used for house area\n\n\n#\n# A few German units as currently in use.\n#\n\nzentner                 50 kg\ndoppelzentner           2 zentner\npfund                   500 g\n\n#\n# Some traditional Russian measures\n#\n# If you would like to help expand this section and understand\n# cyrillic transliteration, let me know.  These measures are meant to\n# reflect common usage, e.g. in translated literature.  \n#\n\ndessiatine              2400 sazhen^2    # Land measure\ndessjatine              dessiatine\n\nfunt                    409.51718 grams  # similar to pound\nzolotnik                1|96 funt        # used for precious metal measure\npood                    40 funt          # common in agricultural measure\n\narshin                  (2 + 1|3) feet\nsazhen                  3 arshin         # analogous to fathom\nverst                   500 sazhen       # of similar use to mile\nversta                  verst\nborderverst             1000 sazhen\nrussianmile             7 verst\n\n\n\n\n#\n# Old French distance measures, from French Weights and Measures\n# Before the Revolution by Zupko\n#\n\nfrenchfoot              144|443.296 m     # pied de roi, the standard of Paris.\npied                    frenchfoot        #   Half of the hashimicubit,\nfrenchfeet              frenchfoot        #   instituted by Charlemagne.\nfrenchinch              1|12 frenchfoot   #   This exact definition comes from\nfrenchthumb             frenchinch        #   a law passed on 10 Dec 1799 which\npouce                   frenchthumb       #   fixed the meter at\n                                          #   3 frenchfeet + 11.296 lignes.\nfrenchline              1|12 frenchinch   # This is supposed to be the size\nligne                   frenchline        #   of the average barleycorn\nfrenchpoint             1|12 frenchline\ntoise                   6 frenchfeet\narpent                  180^2 pied^2      # The arpent is 100 square perches,\n                                          # but the perche seems to vary a lot\n                                          # and can be 18 feet, 20 feet, or 22\n                                          # feet.  This measure was described\n                                          # as being in common use in Canada in\n                                          # 1934 (Websters 2nd).  The value\n                                          # given here is the Paris standard\n                                          # arpent.\nfrenchgrain             1|18827.15 kg     # Weight of a wheat grain, hence\n                                          # smaller than the British grain.\nfrenchpound             9216 frenchgrain\n\n#\n# Before the Imperial Weights and Measures Act of 1824, various different\n# weights and measures were in use in different places.\n#\n\n# Scots linear measure\n\nscotsinch        1.00540054 UKinch\nscotslink        1|100 scotschain\nscotsfoot        12 scotsinch\nscotsfeet        scotsfoot\nscotsell         37 scotsinch\nscotsfall        6 scotsell\nscotschain       4 scotsfall\nscotsfurlong     10 scotschain\nscotsmile        8 scotsfurlong\n\n# Scots area measure\n\nscotsrood        40 scotsfall^2\nscotsacre        4 scotsrood\n\n# Irish linear measure\n\nirishinch       UKinch\nirishpalm       3 irishinch\nirishspan       3 irishpalm\nirishfoot       12 irishinch\nirishfeet       irishfoot\nirishcubit      18 irishinch\nirishyard       3 irishfeet\nirishpace       5 irishfeet\nirishfathom     6 irishfeet\nirishpole       7 irishyard      # Only these values\nirishperch      irishpole        # are different from\nirishchain      4 irishperch     # the British Imperial\nirishlink       1|100 irishchain # or English values for\nirishfurlong    10 irishchain    # these lengths.\nirishmile       8 irishfurlong   #\n\n#  Irish area measure\n\nirishrood       40 irishpole^2\nirishacre       4 irishrood\n\n# English wine capacity measures (Winchester measures)\n\nwinepint       1|2 winequart\nwinequart      1|4 winegallon\nwinegallon     231 UKinch^3   # Sometimes called the Winchester Wine Gallon,\n                              # it was legalized in 1707 by Queen Anne, and\n                              # given the definition of 231 cubic inches.  It\n                              # had been in use for a while as 8 pounds of wine\n                              # using a merchant's pound, but the definition of\n                              # the merchant's pound had become uncertain.  A\n                              # pound of 15 tower ounces (6750 grains) had been\n                              # common, but then a pound of 15 troy ounces\n                              # (7200 grains) gained popularity.  Because of\n                              # the switch in the value of the merchants pound,\n                              # the size of the wine gallon was uncertain in\n                              # the market, hence the official act in 1707.\n                              # The act allowed that a six inch tall cylinder\n                              # with a 7 inch diameter was a lawful wine\n                              # gallon.  (This comes out to 230.9 in^3.)\n                              # Note also that in Britain a legal conversion\n                              # was established to the 1824 Imperial gallon\n                              # then taken as 277.274 in^3 so that the wine\n                              # gallon was 0.8331 imperial gallons.  This is\n                              # 231.1 cubic inches (using the international\n                              # inch).\nwinerundlet    18 winegallon\nwinebarrel     31.5 winegallon\nwinetierce     42 winegallon\nwinehogshead   2 winebarrel\nwinepuncheon   2 winetierce\nwinebutt       2 winehogshead\nwinepipe       winebutt\nwinetun        2 winebutt\n\n# English beer and ale measures used 1803-1824 and used for beer before 1688\n\nbeerpint       1|2 beerquart\nbeerquart      1|4 beergallon\nbeergallon     282 UKinch^3\nbeerbarrel     36 beergallon\nbeerhogshead   1.5 beerbarrel\n\n# English ale measures used from 1688-1803 for both ale and beer\n\nalepint        1|2 alequart\nalequart       1|4 alegallon\nalegallon      beergallon\nalebarrel      34 alegallon\nalehogshead    1.5 alebarrel\n\n# Scots capacity measure\n\nscotsgill      1|4 mutchkin\nmutchkin       1|2 choppin\nchoppin        1|2 scotspint\nscotspint      1|2 scotsquart\nscotsquart     1|4 scotsgallon\nscotsgallon    827.232 UKinch^3\nscotsbarrel    8 scotsgallon\njug            scotspint\n\n# Scots dry capacity measure\n\nscotswheatlippy   137.333 UKinch^3    # Also used for peas, beans, rye, salt\nscotswheatlippies scotswheatlippy\nscotswheatpeck    4 scotswheatlippy\nscotswheatfirlot  4 scotswheatpeck\nscotswheatboll    4 scotswheatfirlot\nscotswheatchalder 16 scotswheatboll\n\nscotsoatlippy     200.345 UKinch^3    # Also used for barley and malt\nscotsoatlippies   scotsoatlippy\nscotsoatpeck      4 scotsoatlippy\nscotsoatfirlot    4 scotsoatpeck\nscotsoatboll      4 scotsoatfirlot\nscotsoatchalder   16 scotsoatboll\n\n# Scots Tron weight\n\ntrondrop       1|16 tronounce\ntronounce      1|20 tronpound\ntronpound      9520 grain\ntronstone      16 tronpound\n\n# Irish liquid capacity measure\n\nirishnoggin    1|4 irishpint\nirishpint      1|2 irishquart\nirishquart     1|2 irishpottle\nirishpottle    1|2 irishgallon\nirishgallon    217.6 UKinch^3\nirishrundlet   18 irishgallon\nirishbarrel    31.5 irishgallon\nirishtierce    42 irishgallon\nirishhogshead  2 irishbarrel\nirishpuncheon  2 irishtierce\nirishpipe      2 irishhogshead\nirishtun       2 irishpipe\n\n# Irish dry capacity measure\n\nirishpeck      2 irishgallon\nirishbushel    4 irishpeck\nirishstrike    2 irishbushel\nirishdrybarrel 2 irishstrike\nirishquarter   2 irishbarrel\n\n# English Tower weights, abolished in 1528\n\ntowerpound       5400 grain\ntowerounce       1|12 towerpound\ntowerpennyweight 1|20 towerounce\ntowergrain       1|32 towerpennyweight\n\n# English Mercantile weights, used since the late 12th century\n\nmercpound      6750 grain\nmercounce      1|15 mercpound\nmercpennyweight 1|20 mercounce\n\n# English weights for lead\n\nleadstone     12.5 lb\nfotmal        70 lb\nleadwey       14 leadstone\nfothers       12 leadwey\n\n# English Hay measure\n\nnewhaytruss 60 lb             # New and old here seem to refer to \"new\"\nnewhayload  36 newhaytruss    # hay and \"old\" hay rather than a new unit\noldhaytruss 56 lb             # and an old unit.\noldhayload  36 oldhaytruss\n\n# English wool measure\n\nwoolclove   7 lb\nwoolstone   2 woolclove\nwooltod     2 woolstone\nwoolwey     13 woolstone\nwoolsack    2 woolwey\nwoolsarpler 2 woolsack\nwoollast    6 woolsarpler\n\n#\n# Ancient history units:  There tends to be uncertainty in the definitions\n#                         of the units in this section\n# These units are from [11]\n\n# Roman measure.  The Romans had a well defined distance measure, but their\n# measures of weight were poor.  They adopted local weights in different\n# regions without distinguishing among them so that there are half a dozen\n# different Roman \"standard\" weight systems.\n\nromanfoot    296 mm          # There is some uncertainty in this definition\nromanfeet    romanfoot       # from which all the other units are derived.\npes          romanfoot       # This value appears in numerous sources. In \"The\npedes        romanfoot       # Roman Land Surveyors\", Dilke gives 295.7 mm.\nromaninch    1|12 romanfoot  # The subdivisions of the Roman foot have the\nromandigit   1|16 romanfoot  #   same names as the subdivisions of the pound,\nromanpalm    1|4 romanfoot   #   but we can't have the names for different\nromancubit   18 romaninch    #   units.\nromanpace    5 romanfeet     # Roman double pace (basic military unit)\npassus       romanpace\nromanperch   10 romanfeet\nstade        125 romanpaces\nstadia       stade\nstadium      stade\nromanmile    8 stadia        # 1000 paces\nromanleague  1.5 romanmile\nschoenus     4 romanmile\n\n# Other values for the Roman foot (from Dilke)\n\nearlyromanfoot    29.73 cm\npesdrusianus      33.3 cm    # or 33.35 cm, used in Gaul & Germany in 1st c BC\nlateromanfoot     29.42 cm\n\n# Roman areas\n\nactuslength  120 romanfeet     # length of a Roman furrow\nactus        120*4 romanfeet^2 # area of the furrow\nsquareactus  120^2 romanfeet^2 # actus quadratus\nacnua        squareactus\niugerum      2 squareactus\niugera       iugerum\njugerum      iugerum\njugera       iugerum\nheredium     2 iugera          # heritable plot\nheredia      heredium\ncenturia     100 heredia\ncenturium    centuria\n\n# Roman volumes\n\nsextarius       35.4 in^3      # Basic unit of Roman volume.  As always,\nsextarii        sextarius      # there is uncertainty.  Six large Roman\n                               # measures survive with volumes ranging from\n                               # 34.4 in^3 to 39.55 in^3.  Three of them\n                               # cluster around the size given here.\n                               #\n                               # But the values for this unit vary wildly\n                               # in other sources.  One reference  gives 0.547\n                               # liters, but then says the amphora is a\n                               # cubic Roman foot.  This gives a value for the\n                               # sextarius of 0.540 liters.  And the\n                               # encyclopedia Brittanica lists 0.53 liters for\n                               # this unit.  Both [7] and [11], which were\n                               # written by scholars of weights and measures,\n                               # give the value of 35.4 cubic inches.\ncochlearia      1|48 sextarius\ncyathi          1|12 sextarius\nacetabula       1|8 sextarius\nquartaria       1|4 sextarius\nquartarius      quartaria\nheminae         1|2 sextarius\nhemina          heminae\ncheonix         1.5 sextarii\n\n# Dry volume measures (usually)\n\nsemodius        8 sextarius\nsemodii         semodius\nmodius          16 sextarius\nmodii           modius\n\n# Liquid volume measures (usually)\n\ncongius         12 heminae\ncongii          congius\namphora         8 congii\namphorae        amphora      # Also a dry volume measure\nculleus         20 amphorae\nquadrantal      amphora\n\n# Roman weights\n\nlibra           5052 grain   # The Roman pound varied significantly\nlibrae          libra        # from 4210 grains to 5232 grains.  Most of\nromanpound      libra        # the standards were obtained from the weight\nuncia           1|12 libra   # of particular coins.  The one given here is\nunciae          uncia        # based on the Gold Aureus of Augustus which\nromanounce      uncia        # was in use from BC 27 to AD 296.\ndeunx           11 uncia\ndextans         10 uncia\ndodrans         9 uncia\nbes             8 uncia\nseprunx         7 uncia\nsemis           6 uncia\nquincunx        5 uncia\ntriens          4 uncia\nquadrans        3 uncia\nsextans         2 uncia\nsescuncia       1.5 uncia\nsemuncia        1|2 uncia\nsiscilius       1|4 uncia\nsextula         1|6 uncia\nsemisextula     1|12 uncia\nscriptulum      1|24 uncia\nscrupula        scriptulum\nromanobol       1|2 scrupula\n\nromanaspound    4210 grain    # Old pound based on bronze coinage, the\n                              # earliest money of Rome BC 338 to BC 268.\n\n# Egyptian length measure\n\negyptianroyalcubit      20.63 in    # plus or minus .2 in\negyptianpalm            1|7 egyptianroyalcubit\negyptiandigit           1|4 egyptianpalm\negyptianshortcubit      6 egyptianpalm\n\ndoubleremen             29.16 in  # Length of the diagonal of a square with\nremendigit       1|40 doubleremen # side length of 1 royal egyptian cubit.\n                                  # This is divided into 40 digits which are\n                                  # not the same size as the digits based on\n                                  # the royal cubit.\n\n# Greek length measures\n\ngreekfoot               12.45 in      # Listed as being derived from the\ngreekfeet               greekfoot     # Egyptian Royal cubit in [11].  It is\ngreekcubit              1.5 greekfoot # said to be 3|5 of a 20.75 in cubit.\npous                    greekfoot\npodes                   greekfoot\norguia                  6 greekfoot\ngreekfathom             orguia\nstadion                 100 orguia\nakaina                  10 greekfeet\nplethron                10 akaina\ngreekfinger             1|16 greekfoot\nhomericcubit            20 greekfingers  # Elbow to end of knuckles.\nshortgreekcubit         18 greekfingers  # Elbow to start of fingers.\n\nionicfoot               296 mm\ndoricfoot               326 mm\n\nolympiccubit            25 remendigit    # These olympic measures were not as\nolympicfoot             2|3 olympiccubit # common as the other greek measures.\nolympicfinger           1|16 olympicfoot # They were used in agriculture.\nolympicfeet             olympicfoot\nolympicdakylos          olympicfinger\nolympicpalm             1|4 olympicfoot\nolympicpalestra         olympicpalm\nolympicspithame         3|4 foot\nolympicspan             olympicspithame\nolympicbema             2.5 olympicfeet\nolympicpace             olympicbema\nolympicorguia           6 olympicfeet\nolympicfathom           olympicorguia\nolympiccord             60 olympicfeet\nolympicamma             olympiccord\nolympicplethron         100 olympicfeet\nolympicstadion          600 olympicfeet\n\n# Greek capacity measure\n\ngreekkotyle             270 ml           # This approximate value is obtained\nxestes                  2 greekkotyle    # from two earthenware vessels that\nkhous                   12 greekkotyle   # were reconstructed from fragments.\nmetretes                12 khous         # The kotyle is a day's corn ration\nchoinix                 4 greekkotyle    # for one man.\nhekteos                 8 choinix\nmedimnos                6 hekteos\n\n# Greek weight.  Two weight standards were used, an Aegina standard based\n# on the Beqa shekel and an Athens (attic) standard.\n\naeginastater            192 grain        # Varies up to 199 grain\naeginadrachmae          1|2 aeginastater\naeginaobol              1|6 aeginadrachmae\naeginamina              50 aeginastaters\naeginatalent            60 aeginamina    # Supposedly the mass of a cubic foot\n                                         # of water (whichever foot was in use)\n\natticstater             135 grain        # Varies 134-138 grain\natticdrachmae           1|2 atticstater\natticobol               1|6 atticdrachmae\natticmina               50 atticstaters\nattictalent             60 atticmina     # Supposedly the mass of a cubic foot\n                                         # of water (whichever foot was in use)\n\n# \"Northern\" cubit and foot.  This was used by the pre-Aryan civilization in\n# the Indus valley.  It was used in Mesopotamia, Egypt, North Africa, China,\n# central and Western Europe until modern times when it was displaced by\n# the metric system.\n\nnortherncubit           26.6 in           # plus/minus .2 in\nnorthernfoot            1|2 northerncubit\n\nsumeriancubit           495 mm\nkus                     sumeriancubit\nsumerianfoot            2|3 sumeriancubit\n\nassyriancubit           21.6 in\nassyrianfoot            1|2 assyriancubit\nassyrianpalm            1|3 assyrianfoot\nassyriansusi            1|20 assyrianpalm\nsusi                    assyriansusi\npersianroyalcubit       7 assyrianpalm\n\n\n# Arabic measures.  The arabic standards were meticulously kept.  Glass weights\n# accurate to .2 grains were made during AD 714-900.\n\nhashimicubit            25.56 in          # Standard of linear measure used\n                                          # in Persian dominions of the Arabic\n                                          # empire 7-8th cent.  Is equal to two\n                                          # French feet.\n\nblackcubit              21.28 in\narabicfeet              1|2 blackcubit\narabicfoot              arabicfeet\narabicinch              1|12 arabicfoot\narabicmile              4000 blackcubit\n\nsilverdirhem            45 grain  # The weights were derived from these two\ntradedirhem             48 grain  # units with two identically named systems\n                                  # used for silver and used for trade purposes\n\nsilverkirat             1|16 silverdirhem\nsilverwukiyeh           10 silverdirhem\nsilverrotl              12 silverwukiyeh\narabicsilverpound       silverrotl\n\ntradekirat              1|16 tradedirhem\ntradewukiyeh            10 tradedirhem\ntraderotl               12 tradewukiyeh\narabictradepound        traderotl\n\n# Miscellaneous ancient units\n\nparasang                3.5 mile # Persian unit of length usually thought\n                                 # to be between 3 and 3.5 miles\nbiblicalcubit           21.8 in\nhebrewcubit             17.58 in\nli                      10|27.8 mile  # Chinese unit of length\n                                      #   100 li is considered a day's march\nliang                   11|3 oz       # Chinese weight unit\n\n\n# Medieval time units.  According to the OED, these appear in Du Cange\n# by Papias.\n\ntimepoint               1|5 hour  # also given as 1|4\ntimeminute              1|10 hour\ntimeostent              1|60 hour\ntimeounce               1|8 timeostent\ntimeatom                1|47 timeounce\n\n# Given in [15], these subdivisions of the grain were supposedly used\n# by jewelers.  The mite may have been used but the blanc could not\n# have been accurately measured.\n\nmite                    1|20 grain\ndroit                   1|24 mite\nperiot                  1|20 droit\nblanc                   1|24 periot\n\n#\n# Localization\n#\n\n!var UNITS_ENGLISH US\nhundredweight           ushundredweight\nton                     uston\nscruple                 apscruple\nfluidounce              usfluidounce\ngallon                  usgallon\nbushel                  usbushel\nquarter                 quarterweight\ncup                     uscup\ntablespoon              ustablespoon\nteaspoon                usteaspoon\ndollar                  US$\ncent                    $ 0.01\npenny                   cent\nminim                   minimvolume\npony                    ponyvolume\ngrand                   usgrand\nfirkin                  usfirkin\nhogshead                ushogshead\n!endvar\n\n!var UNITS_ENGLISH GB\nhundredweight           brhundredweight\nton                     brton\nscruple                 brscruple\nfluidounce              brfluidounce\ngallon                  brgallon\nbushel                  brbushel\nquarter                 brquarter\nchaldron                brchaldron\ncup                     brcup\nteacup                  brteacup\ntablespoon              brtablespoon\nteaspoon                brteaspoon\ndollar                  US$\ncent                    $ 0.01\npenny                   brpenny\nminim                   minimnote\npony                    brpony\ngrand                   brgrand\nfirkin                  brfirkin\nhogshead                brhogshead\n!endvar\n\n!varnot UNITS_ENGLISH GB US\n!message Unknown value for environment variable UNITS_ENGLISH.  Should be GB or US.\n!endvar\n\n\n!utf8\n⅛-                      1|8\n¼-                      1|4\n⅜-                      3|8\n½-                      1|2\n⅝-                      5|8\n¾-                      3|4\n⅞-                      7|8\n⅙-                      1|6\n⅓-                      1|3\n⅔-                      2|3\n⅚-                      5|6\n⅕-                      1|5\n⅖-                      2|5\n⅗-                      3|5\n⅘-                      4|5\n# U+2150-               1|7  For some reason these characters are getting\n# U+2151-               1|9  flagged as invalid UTF8.\n# U+2152-               1|10\nℯ                       exp(1)      # U+212F, base of natural log\n\nµ-                      micro       # micro sign U+00B5\nμ-                      micro       # small mu U+03BC\nångström                angstrom\nÅ                       angstrom    # angstrom symbol U+212B\nÅ                       angstrom    # A with ring U+00C5\nröntgen                 roentgen\n°C                      degC\n°F                      degF\n°K                      K           # °K is incorrect notation\n°R                      degR\n°                       degree\n℃                       degC\n℉                       degF\nK                       K          # Kelvin symbol, U+212A\nℓ                       liter      # unofficial abbreviation used in some places\n¢                       cent\n£                       britainpound\n¥                       japanyen\n€                       euro\n₩                       southkoreawon\n₪                       israelnewshekel\n₤                       lira\n₨                       rupee\n\nΩ                       ohm       # Ohm symbol U+2126\nΩ                       ohm       # Greek capital omega U+03A9\n℧                       mho\nʒ                        dram     # U+0292\n℈                       scruple\n℥                       ounce\n℔                       lb\nℎ                       h\nℏ                       hbar\n‰                       1|1000\n‱                       1|10000\n′                       '        # U+2032\n″                       \"        # U+2033\n\n#\n# Square unicode symbols starting at U+3371\n#\n\n㍱                      hPa\n㍲                      da\n㍳                      au\n㍴                      bar\n# ㍵                          oV???\n㍶                      pc\n#㍷                      dm      invalid on Mac\n#㍸                      dm^2    invalid on Mac\n#㍹                      dm^3    invalid on Mac\n㎀                      pA\n㎁                      nA\n㎂                      µA\n㎃                      mA\n㎄                      kA\n㎅                      kB\n㎆                      MB\n㎇                      GB\n㎈                      cal\n㎉                      kcal\n㎊                      pF\n㎋                      nF\n㎌                      µF\n㎍                      µg\n㎎                      mg\n㎏                      kg\n㎐                      Hz\n㎑                      kHz\n㎒                      MHz\n㎓                      GHz\n㎔                      THz\n㎕                      µL\n㎖                      mL\n㎗                      dL\n㎘                      kL\n㎙                      fm\n㎚                      nm\n㎛                      µm\n㎜                      mm\n㎝                      cm\n㎞                      km\n㎟                      mm^2\n㎠                      cm^2\n㎡                      m^2\n㎢                      km^2\n㎣                      mm^3\n㎤                      cm^3\n㎥                      m^3\n㎦                      km^3\n㎧                      m/s\n㎨                      m/s^2\n㎩                      Pa\n㎪                      kPa\n㎫                      MPa\n㎬                      GPa\n㎭                      rad\n㎮                      rad/s\n㎯                      rad/s^2\n㎰                      ps\n㎱                      ns\n㎲                      µs\n㎳                      ms\n㎴                      pV\n㎵                      nV\n㎶                      µV\n㎷                      mV\n㎸                      kV\n㎹                      MV\n㎺                      pW\n㎻                      nW\n㎼                      µW\n㎽                      mW\n㎾                      kW\n㎿                      MW\n㏀                      kΩ\n㏁                      MΩ\n㏃                      Bq\n㏄                      cc\n㏅                      cd\n㏆                      C/kg\n㏈()                    dB\n㏉                      Gy\n㏊                      ha\n# ㏋  HP??\n㏌                      in\n# ㏍                      KK??\n# ㏎                      KM???\n㏏                      kt\n㏐                      lm\n# ㏑                      ln\n# ㏒                      log\n㏓                      lx\n㏔                      mb\n㏕                      mil\n㏖                      mol\n㏗()                    pH\n㏙                      ppm\n#   ㏚     PR???\n㏛                      sr\n㏜                      Sv\n㏝                      Wb\n#㏞                      V/m     Invalid on Mac\n#㏟                      A/m     Invalid on Mac\n#㏿                      gal     Invalid on Mac\n\n!endutf8\n\n############################################################################\n#\n# Unit list aliases\n#\n# These provide a shorthand for conversions to unit lists.\n#\n############################################################################\n\n!unitlist hms hr;min;sec\n!unitlist time year;day;hr;min;sec\n!unitlist dms deg;arcmin;arcsec\n!unitlist ftin ft;in;1|8 in\n!unitlist inchfine in;1|8 in;1|16 in;1|32 in;1|64 in\n!unitlist usvol cup;3|4 cup;2|3 cup;1|2 cup;1|3 cup;1|4 cup;\\\n                tbsp;tsp;1|2 tsp;1|4 tsp;1|8 tsp\n\n############################################################################\n#\n# The following units were in the unix units database but do not appear in\n# this file:\n#\n#      wey        used for cheese, salt and other goods.  Measured mass or\n#      waymass    volume depending on what was measured and where the measuring\n#                 took place.  A wey of cheese ranged from 200 to 324 pounds.\n#\n#      sack       No precise definition\n#\n#      spindle    The length depends on the type of yarn\n#\n#      block      Defined variously on different computer systems\n#\n#      erlang     A unit of telephone traffic defined variously.\n#                 Omitted because there are no other units for this\n#                 dimension.  Is this true?  What about CCS = 1/36 erlang?\n#                 Erlang is supposed to be dimensionless.  One erlang means\n#                 a single channel occupied for one hour.\n#\n############################################################################\n\n");

/***/ }),

/***/ 41:
/***/ (function(module) {

module.exports = JSON.parse("[[\"unifySelection\",241,252],[\"unifySelection\",527,535],[\"unifySelection\",539,547],[\"markSelection\",394,396,0],[\"markSelection\",0,80,0],[\"markSelection\",81,114,0],[\"markSelection\",116,124,0],[\"splitSelection\",669,675],[\"unifySelection\",669,672],[\"markSelection\",673,675,2],[\"unifySelection\",673,675],[\"markSelection\",723,728,1],[\"unifySelection\",723,728],[\"unifySelection\",742,757],[\"markSelection\",742,757,1],[\"unifySelection\",785,792],[\"markSelection\",823,844,0],[\"unifySelection\",903,917],[\"unifySelection\",918,932],[\"unifySelection\",954,968],[\"unifySelection\",972,983],[\"splitSelection\",993,995],[\"unifySelection\",993,994],[\"markSelection\",995,995,2],[\"unifySelection\",1067,1069],[\"splitSelection\",1099,1103],[\"unifySelection\",1101,1103],[\"unifySelection\",1099,1100],[\"splitSelection\",1111,1114],[\"unifySelection\",1111,1113],[\"markSelection\",1114,1114,0],[\"splitSelection\",1121,1122],[\"markSelection\",1122,1122,0],[\"unifySelection\",1130,1136],[\"unifySelection\",1220,1229],[\"splitSelection\",1231,1241],[\"unifySelection\",1231,1232],[\"unifySelection\",1233,1241],[\"unifySelection\",1245,1247],[\"unifySelection\",1259,1261],[\"unifySelection\",1276,1279],[\"unifySelection\",1288,1291],[\"splitSelection\",1288,1291],[\"unifySelection\",1288,1290],[\"markSelection\",1291,1291,2],[\"unifySelection\",1295,1297],[\"splitSelection\",1299,1301],[\"markSelection\",1313,1319,1],[\"unifySelection\",1313,1319],[\"unifySelection\",1394,1429],[\"splitSelection\",1480,1490],[\"markSelection\",1481,1482,1],[\"unifySelection\",1481,1482],[\"markSelection\",1483,1484,1],[\"unifySelection\",1483,1484],[\"markSelection\",1485,1490,1],[\"unifySelection\",1485,1490],[\"markSelection\",1491,1494,1],[\"unifySelection\",1491,1494],[\"markSelection\",1495,1498,1],[\"unifySelection\",1495,1498],[\"markSelection\",1499,1503,1],[\"unifySelection\",1499,1503],[\"markSelection\",1504,1508,1],[\"unifySelection\",1504,1508],[\"markSelection\",1509,1524,1],[\"unifySelection\",1509,1524],[\"markSelection\",1529,1545,0],[\"unifySelection\",1619,1632],[\"splitSelection\",1642,1645],[\"unifySelection\",1643,1650],[\"unifySelection\",1642,1650],[\"unifySelection\",1671,1681],[\"markSelection\",1683,1689,0],[\"unifySelection\",1735,1758],[\"unifySelection\",1941,1947],[\"splitSelection\",1941,1947],[\"unifySelection\",1941,1946],[\"markSelection\",1947,1947,2],[\"unifySelection\",1947,1958],[\"splitSelection\",2034,2039],[\"unifySelection\",2034,2038],[\"markSelection\",2039,2039,2],[\"unifySelection\",2048,2065],[\"unifySelection\",2078,2079],[\"splitSelection\",2164,2168],[\"unifySelection\",2164,2165],[\"unifySelection\",2166,2168],[\"markSelection\",2166,2168,2],[\"unifySelection\",2390,2391],[\"unifySelection\",2438,2439],[\"unifySelection\",2438,2440],[\"unifySelection\",2441,2442],[\"splitSelection\",2448,2460],[\"unifySelection\",2458,2460],[\"markSelection\",2458,2460,2],[\"unifySelection\",2448,2457],[\"unifySelection\",2570,2578],[\"splitSelection\",2711,2713],[\"unifySelection\",2711,2712],[\"markSelection\",2713,2713,2],[\"unifySelection\",2816,2819],[\"unifySelection\",2801,2804],[\"splitSelection\",2927,2929],[\"unifySelection\",2927,2928],[\"markSelection\",2929,2929,2],[\"unifySelection\",3038,3044],[\"unifySelection\",3093,3094],[\"unifySelection\",3325,3335],[\"unifySelection\",3337,3347],[\"unifySelection\",3349,3359],[\"unifySelection\",3487,3491],[\"unifySelection\",3590,3602],[\"unifySelection\",3709,3710],[\"unifySelection\",3785,3788],[\"unifySelection\",3868,3870],[\"unifySelection\",3928,3935],[\"splitSelection\",3909,3911],[\"unifySelection\",3942,3945],[\"unifySelection\",4019,4024],[\"unifySelection\",4606,4607],[\"unifySelection\",4606,4609],[\"unifySelection\",4603,4604],[\"unifySelection\",4611,4613],[\"unifySelection\",4753,4778],[\"splitSelection\",4917,4928],[\"unifySelection\",4917,4925],[\"unifySelection\",4926,4928],[\"markSelection\",4926,4928,2],[\"unifySelection\",4949,4955],[\"unifySelection\",5191,5197],[\"unifySelection\",5247,5252],[\"unifySelection\",5388,5391],[\"unifySelection\",5417,5420],[\"unifySelection\",5496,5501],[\"unifySelection\",5531,5535],[\"unifySelection\",5539,5541],[\"unifySelection\",5556,5572],[\"unifySelection\",5576,5582],[\"unifySelection\",5635,5637],[\"splitSelection\",5877,5879],[\"markSelection\",5878,5879,0],[\"splitSelection\",5881,5883],[\"markSelection\",5882,5883,0],[\"splitSelection\",5889,5890],[\"markSelection\",5890,5890,0],[\"splitSelection\",5797,5798],[\"markSelection\",5798,5798,0],[\"unifySelection\",219,220],[\"setHeadingDepth\",125,132,1],[\"setHeadingDepth\",133,136,2],[\"setHeadingDepth\",202,207,1],[\"setHeadingDepth\",274,277,1],[\"setHeadingDepth\",274,277,2],[\"setHeadingDepth\",274,277,0],[\"setHeadingDepth\",274,277,0],[\"setHeadingDepth\",274,277,1],[\"setHeadingDepth\",274,277,1],[\"setHeadingDepth\",274,277,2],[\"setHeadingDepth\",366,367,3],[\"setHeadingDepth\",314,320,3],[\"setHeadingDepth\",366,367,4],[\"setHeadingDepth\",434,439,1],[\"setHeadingDepth\",442,445,2],[\"setHeadingDepth\",623,627,3],[\"setHeadingDepth\",633,636,2],[\"setHeadingDepth\",673,675,2],[\"setHeadingDepth\",758,769,3],[\"setHeadingDepth\",796,807,3],[\"setHeadingDepth\",845,848,1],[\"setHeadingDepth\",849,850,2],[\"setHeadingDepth\",1057,1060,1],[\"setHeadingDepth\",1148,1149,2],[\"setHeadingDepth\",1302,1307,2],[\"setHeadingDepth\",1302,1307,3],[\"setHeadingDepth\",1330,1369,2],[\"setHeadingDepth\",1176,1185,3],[\"setHeadingDepth\",1248,1251,2],[\"setHeadingDepth\",1291,1291,3],[\"setHeadingDepth\",1302,1307,4],[\"setHeadingDepth\",1330,1369,3],[\"setHeadingDepth\",1373,1374,4],[\"splitSelection\",1384,1387],[\"markSelection\",1386,1386,1],[\"setHeadingDepth\",1385,1385,5],[\"setHeadingDepth\",1394,1429,4],[\"setHeadingDepth\",1390,1391,4],[\"splitSelection\",1509,1524],[\"unifySelection\",1510,1522],[\"markSelection\",1510,1522,2],[\"setHeadingDepth\",1547,1570,3],[\"setHeadingDepth\",1547,1570,2],[\"setHeadingDepth\",1691,1692,3],[\"setHeadingDepth\",125,132,1],[\"setHeadingDepth\",1718,1724,3],[\"setHeadingDepth\",1718,1724,2],[\"setHeadingDepth\",1778,1785,3],[\"setHeadingDepth\",1827,1831,2],[\"setHeadingDepth\",1832,1833,3],[\"setHeadingDepth\",1860,1863,1],[\"setHeadingDepth\",1864,1865,2],[\"setHeadingDepth\",1914,1915,3],[\"setHeadingDepth\",2202,2205,2],[\"setHeadingDepth\",2218,2221,1],[\"unifySelection\",1864,1888],[\"setHeadingDepth\",1864,1888,2],[\"setHeadingDepth\",1947,1958,2],[\"setHeadingDepth\",2025,2026,3],[\"setHeadingDepth\",2039,2039,2],[\"setHeadingDepth\",2172,2179,3],[\"setHeadingDepth\",2222,2231,2],[\"setHeadingDepth\",2310,2316,3],[\"setHeadingDepth\",2380,2381,2],[\"setHeadingDepth\",2427,2430,1],[\"setHeadingDepth\",2461,2462,2],[\"setHeadingDepth\",2492,2494,3],[\"setHeadingDepth\",2508,2509,2],[\"setHeadingDepth\",2618,2679,2],[\"setHeadingDepth\",2618,2679,3],[\"markSelection\",2680,2702,1],[\"unifySelection\",2680,2702],[\"unifySelection\",2580,2582],[\"unifySelection\",2583,2585],[\"setHeadingDepth\",2709,2710,3],[\"setHeadingDepth\",2709,2710,4],[\"setHeadingDepth\",2718,2729,3],[\"markSelection\",2709,2712,1],[\"unifySelection\",2709,2712],[\"markSelection\",2713,2717,1],[\"unifySelection\",2713,2717],[\"unifySelection\",2718,2735],[\"markSelection\",2718,2735,1],[\"setHeadingDepth\",2703,2708,3],[\"setHeadingDepth\",2703,2708,4],[\"markSelection\",2736,2746,1],[\"unifySelection\",2736,2746],[\"markSelection\",2747,2751,1],[\"unifySelection\",2747,2751],[\"markSelection\",2752,2757,1],[\"unifySelection\",2752,2757],[\"setHeadingDepth\",2752,2757,3],[\"setHeadingDepth\",2752,2757,3],[\"setHeadingDepth\",2752,2757,2],[\"setHeadingDepth\",2752,2757,0],[\"setHeadingDepth\",2787,2792,3],[\"setHeadingDepth\",2796,2799,1],[\"setHeadingDepth\",2889,2890,2],[\"unifySelection\",2929,2983],[\"markSelection\",2929,2983,1],[\"markSelection\",2988,3010,1],[\"unifySelection\",2988,3010],[\"splitSelection\",2988,3010],[\"unifySelection\",2989,3008],[\"setHeadingDepth\",3061,3067,3],[\"setHeadingDepth\",3071,3072,2],[\"unifySelection\",3086,3088],[\"markSelection\",3113,3118,1],[\"unifySelection\",3113,3118],[\"splitSelection\",3100,3109],[\"unifySelection\",3101,3103],[\"unifySelection\",3104,3109],[\"unifySelection\",3104,3111],[\"markSelection\",3104,3111,1],[\"setHeadingDepth\",3120,3124,3],[\"setHeadingDepth\",3142,3149,3],[\"setHeadingDepth\",3142,3149,2],[\"setHeadingDepth\",3162,3165,3],[\"setHeadingDepth\",3191,3192,1],[\"setHeadingDepth\",3773,3779,1],[\"setHeadingDepth\",3806,3809,2],[\"setHeadingDepth\",3898,3901,1],[\"setHeadingDepth\",3936,3940,2],[\"setHeadingDepth\",3947,3948,1],[\"setHeadingDepth\",3958,3959,2],[\"setHeadingDepth\",3980,3987,1],[\"markSelection\",4041,4054,1],[\"unifySelection\",4041,4054],[\"markSelection\",4037,4040,1],[\"unifySelection\",4037,4040],[\"markSelection\",4055,4057,1],[\"unifySelection\",4055,4057],[\"markSelection\",4058,4060,1],[\"unifySelection\",4058,4060],[\"markSelection\",4058,4062,1],[\"unifySelection\",4058,4062],[\"markSelection\",4066,4069,1],[\"unifySelection\",4066,4069],[\"splitSelection\",4064,4065],[\"markSelection\",4065,4065,0],[\"setHeadingDepth\",4070,4072,2],[\"markSelection\",4076,4081,1],[\"unifySelection\",4076,4081],[\"markSelection\",4070,4075,1],[\"unifySelection\",4070,4075],[\"markSelection\",4082,4090,1],[\"unifySelection\",4082,4090],[\"markSelection\",4091,4094,1],[\"unifySelection\",4091,4094],[\"markSelection\",4095,4104,1],[\"unifySelection\",4095,4104],[\"markSelection\",4105,4108,1],[\"unifySelection\",4105,4108],[\"markSelection\",4109,4117,1],[\"unifySelection\",4109,4117],[\"markSelection\",4118,4130,1],[\"unifySelection\",4118,4130],[\"markSelection\",4131,4137,1],[\"unifySelection\",4131,4137],[\"markSelection\",4138,4144,1],[\"markSelection\",4138,4144,0],[\"setHeadingDepth\",4193,4208,2],[\"setHeadingDepth\",4253,4254,3],[\"setHeadingDepth\",4294,4300,1],[\"markSelection\",4343,4378,1],[\"unifySelection\",4343,4378],[\"unifySelection\",4379,4422],[\"markSelection\",4379,4422,1],[\"markSelection\",4423,4466,1],[\"unifySelection\",4423,4466],[\"markSelection\",4469,4522,1],[\"unifySelection\",4469,4522],[\"setHeadingDepth\",4526,4529,2],[\"markSelection\",4526,4549,1],[\"unifySelection\",4526,4549],[\"markSelection\",4550,4574,1],[\"unifySelection\",4550,4574],[\"splitSelection\",4550,4574],[\"unifySelection\",4551,4570],[\"unifySelection\",4571,4596],[\"setHeadingDepth\",4614,4615,2],[\"setHeadingDepth\",4619,4622,1],[\"setHeadingDepth\",4623,4634,2],[\"markSelection\",4623,4637,1],[\"unifySelection\",4623,4637],[\"markSelection\",4638,4672,1],[\"unifySelection\",4638,4672],[\"markSelection\",4673,4679,1],[\"unifySelection\",4673,4679],[\"markSelection\",4680,4683,1],[\"unifySelection\",4680,4683],[\"setHeadingDepth\",4684,4687,1],[\"setHeadingDepth\",4731,4734,1],[\"setHeadingDepth\",4908,4915,1],[\"markSelection\",4908,4925,1],[\"unifySelection\",4908,4925],[\"setHeadingDepth\",4908,4925,0],[\"splitSelection\",4908,4925],[\"markSelection\",4910,4925,1],[\"unifySelection\",4910,4925],[\"setHeadingDepth\",4909,4909,1],[\"setHeadingDepth\",4909,4909,1],[\"markSelection\",4909,4909,2],[\"setHeadingDepth\",4956,4957,2],[\"setHeadingDepth\",4984,5001,1],[\"setHeadingDepth\",5002,5004,2],[\"setHeadingDepth\",5033,5034,1],[\"setHeadingDepth\",5033,5034,3],[\"markSelection\",5053,5054,0],[\"setHeadingDepth\",5058,5059,2],[\"setHeadingDepth\",5060,5062,3],[\"setHeadingDepth\",5099,5100,2],[\"unifySelection\",5099,5103],[\"setHeadingDepth\",5099,5103,2],[\"unifySelection\",5117,5122],[\"setHeadingDepth\",5145,5148,1],[\"setHeadingDepth\",5218,5219,2],[\"setHeadingDepth\",5402,5406,1],[\"setHeadingDepth\",5407,5411,2],[\"setHeadingDepth\",5430,5431,3],[\"setHeadingDepth\",5523,5524,2],[\"setHeadingDepth\",5573,5574,3],[\"setHeadingDepth\",5600,5604,2],[\"setHeadingDepth\",5677,5680,1],[\"setHeadingDepth\",5668,5671,1],[\"setHeadingDepth\",3247,3248,2],[\"setHeadingDepth\",3257,3260,1],[\"setHeadingDepth\",3261,3262,2],[\"setHeadingDepth\",3273,3275,3],[\"setHeadingDepth\",3317,3323,2],[\"setHeadingDepth\",3549,3553,1],[\"setHeadingDepth\",3562,3565,2],[\"setHeadingDepth\",3635,3640,1],[\"setHeadingDepth\",3641,3642,2],[\"setHeadingDepth\",3688,3691,1],[\"setHeadingDepth\",3692,3693,2],[\"setHeadingDepth\",3734,3737,1]]");

/***/ }),

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function checkDCE() {
  /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
  if (
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' ||
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function'
  ) {
    return;
  }
  if (false) {}
  try {
    // Verify that the code above has been dead code eliminated (DCE'd).
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
  } catch (err) {
    // DevTools shouldn't crash React, no matter what.
    // We should still report in case we break this code.
    console.error(err);
  }
}

if (true) {
  // DCE check should happen before ReactDOM bundle executes so that
  // DevTools can report bad minification during injection.
  checkDCE();
  module.exports = __webpack_require__(33);
} else {}


/***/ }),

/***/ 86:
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t(__webpack_require__(0),__webpack_require__(12),__webpack_require__(1)):undefined}(this,function(e,t,n){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=9)}([function(t,n){t.exports=e},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t._handleClick=t._handleMouseMove=t.restoreLogFromLocalstorage=t.restoreUpdatesFromLocalstorage=t.getGlobalState=t.setGlobalState=t.eventEmitter=void 0;var o=n(4),r=n(3),i=u(n(13)),a=u(n(14)),l=u(n(15));function u(e){return e&&e.__esModule?e:{default:e}}var s="mobx-react-devtool__updatesEnabled",c="mobx-react-devtool__logEnabled",d={updatesEnabled:!1,graphEnabled:!1,logEnabled:!1,hoverBoxes:[],renderingBoxes:[],logFilter:function(){return!0}},f=t.eventEmitter=new i.default;f.setMaxListeners(1/0);var p=void 0,g=t.setGlobalState=function(e){d.logEnabled!==e.logEnabled&&(!0===e.logEnabled?(p&&p(),p=(0,o.spy)(function(e){return(0,l.default)(e,d.logFilter)})):!1===e.logEnabled&&p&&p()),"undefined"!=typeof window&&window.localStorage&&(!0===e.updatesEnabled?window.localStorage.setItem(s,"YES"):!1===e.updatesEnabled&&window.localStorage.removeItem(s),!0===e.logEnabled?window.localStorage.setItem(c,"YES"):!1===e.logEnabled&&window.localStorage.removeItem(c)),!1===e.graphEnabled&&(e.hoverBoxes=[]),d=Object.assign({},d,e),f.emit("update")},h=(t.getGlobalState=function(){return d},t.restoreUpdatesFromLocalstorage=function(){if("undefined"!=typeof window&&window.localStorage){var e="YES"===window.localStorage.getItem(s);g({updatesEnabled:e})}},t.restoreLogFromLocalstorage=function(){if("undefined"!=typeof window&&window.localStorage){var e="YES"===window.localStorage.getItem(c);g({logEnabled:e})}},function(e){for(var t=e,n=void 0;t;){if(n=r.componentByNodeRegistery.get(t))return{component:n,node:t};t=t.parentNode}return{component:void 0,node:void 0}});t._handleMouseMove=function(e){if(d.graphEnabled){var t=e.target,n=h(t).node;if(n&&n.getBoundingClientRect){var o=n.getBoundingClientRect();g({hoverBoxes:[{id:"the hovered node",type:"hover",x:o.left,y:o.top,width:o.width,height:o.height,lifeTime:1/0}]})}}},t._handleClick=function(e){if(d.graphEnabled){var t=e.target,n=h(t).component;if(n){e.stopPropagation(),e.preventDefault();var r=(0,o.getDependencyTree)(n.render[o.$mobx]);(0,a.default)(r),g({dependencyTree:r,hoverBoxes:[],graphEnabled:!1})}}}},function(e,t,n){e.exports=n(11)()},function(e,n){e.exports=t},function(e,t){e.exports=n},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=n(0),i=function(e){return e&&e.__esModule?e:{default:e}}(r),a=n(3),l=n(1);function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var s=function(e){function t(){var e,n,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,i=Array(r),a=0;a<r;a++)i[a]=arguments[a];return n=o=u(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),o.handleUpdate=function(){return o.setState({})},o.handleToggleGraph=function(){var e=(0,l.getGlobalState)().graphEnabled;(0,l.setGlobalState)({hoverBoxes:[],graphEnabled:!e})},u(o,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.Component),o(t,[{key:"componentWillMount",value:function(){this.setState({})}},{key:"componentDidMount",value:function(){(0,a.trackComponents)(),l.eventEmitter.on("update",this.handleUpdate),"undefined"!=typeof window&&"undefined"!=typeof document&&(document.body.addEventListener("mousemove",l._handleMouseMove,!0),document.body.addEventListener("click",l._handleClick,!0))}},{key:"componentWillUnmount",value:function(){l.eventEmitter.removeListener("update",this.handleUpdate),"undefined"!=typeof document&&(document.body.removeEventListener("mousemove",l._handleMouseMove,!0),document.body.removeEventListener("click",l._handleMouseMove,!0))}},{key:"render",value:function(){var e=(0,l.getGlobalState)().graphEnabled,t=this.props.children;return i.default.cloneElement(t,{onToggle:this.handleToggleGraph,active:e})}}]),t}();t.default=s},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=n(0),i=function(e){return e&&e.__esModule?e:{default:e}}(r),a=n(1);function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var u=function(e){function t(){var e,n,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,i=Array(r),u=0;u<r;u++)i[u]=arguments[u];return n=o=l(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),o.handleUpdate=function(){o.setState({})},o.handleToggleLog=function(){var e=(0,a.getGlobalState)().logEnabled;(0,a.setGlobalState)({logEnabled:!e})},l(o,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.Component),o(t,[{key:"componentDidMount",value:function(){a.eventEmitter.on("update",this.handleUpdate),(0,a.restoreLogFromLocalstorage)()}},{key:"componentWillUnmount",value:function(){a.eventEmitter.removeListener("update",this.handleUpdate)}},{key:"render",value:function(){var e=(0,a.getGlobalState)().logEnabled,t=this.props.children;return i.default.cloneElement(t,{onToggle:this.handleToggleLog,active:e})}}]),t}();t.default=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=n(0),i=s(r),a=s(n(2)),l=s(n(17)),u=n(1);function s(e){return e&&e.__esModule?e:{default:e}}function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var d=function(e){function t(){var e,n,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,i=Array(r),a=0;a<r;a++)i[a]=arguments[a];return n=o=c(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),o.handleUpdate=function(){return o.setState({})},o.handleToggleUpdates=function(){var e=(0,u.getGlobalState)().updatesEnabled;(0,u.setGlobalState)({updatesEnabled:!e})},c(o,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.Component),o(t,[{key:"componentDidMount",value:function(){u.eventEmitter.on("update",this.handleUpdate);var e=this.props.highlightTimeout;this.renderingMonitor=new l.default({highlightTimeout:e}),(0,u.restoreUpdatesFromLocalstorage)()}},{key:"componentWillUnmount",value:function(){u.eventEmitter.removeListener("update",this.handleUpdate),this.renderingMonitor.dispose()}},{key:"render",value:function(){var e=(0,u.getGlobalState)().updatesEnabled,t=this.props.children;return i.default.cloneElement(t,{onToggle:this.handleToggleUpdates,active:e})}}]),t}();d.propTypes={highlightTimeout:a.default.number},d.defaultProps={highlightTimeout:1500},t.default=d},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.panel={position:"fixed",height:"26px",backgroundColor:"#fff",color:"rgba(0, 0, 0, 0.8)",borderRadius:"2px",borderStyle:"solid",borderWidth:"1px",borderColor:"rgba(0, 0, 0, 0.1)",zIndex:"65000",fontFamily:"Helvetica, sans-serif",display:"flex",padding:"0 5px"},t.button={opacity:.45,background:"transparent none center / 16px 16px no-repeat",width:"26px",margin:"0 10px",cursor:"pointer",border:"none",hover:{opacity:.7},active:{opacity:1,":hover":{opacity:1}}},t.buttonLog={backgroundImage:"url("+n(19)+")"},t.buttonLogActive={backgroundImage:"url("+n(20)+")"},t.buttonUpdates={backgroundImage:"url("+n(21)+")"},t.buttonUpdatesActive={backgroundImage:"url("+n(22)+")"},t.buttonGraph={backgroundImage:"url("+n(23)+")"},t.buttonGraphActive={backgroundImage:"url("+n(24)+")"}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.setLogEnabled=t.setGraphEnabled=t.setUpdatesEnabled=t.configureDevtool=t.UpdatesControl=t.LogControl=t.GraphControl=t.default=void 0;var o=n(10);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return u(o).default}});var r=n(5);Object.defineProperty(t,"GraphControl",{enumerable:!0,get:function(){return u(r).default}});var i=n(6);Object.defineProperty(t,"LogControl",{enumerable:!0,get:function(){return u(i).default}});var a=n(7);Object.defineProperty(t,"UpdatesControl",{enumerable:!0,get:function(){return u(a).default}});var l=n(1);function u(e){return e&&e.__esModule?e:{default:e}}var s=t.configureDevtool=function(e){var t=e.logEnabled,n=e.updatesEnabled,o=e.graphEnabled,r=e.logFilter,i={};void 0!==t&&(i.logEnabled=Boolean(t)),void 0!==n&&(i.updatesEnabled=Boolean(n)),void 0!==o&&(i.graphEnabled=Boolean(o)),"function"==typeof r&&(i.logFilter=r),(0,l.setGlobalState)(i)};t.setUpdatesEnabled=function(e){return s({updatesEnabled:e})},t.setGraphEnabled=function(e){return s({graphEnabled:e})},t.setLogEnabled=function(e){return s({logEnabled:e})}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=n(0),i=d(r),a=d(n(2)),l=n(1),u=d(n(16)),s=d(n(25)),c=d(n(27));function d(e){return e&&e.__esModule?e:{default:e}}function f(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var p=function(e){function t(){var e,n,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,i=Array(r),a=0;a<r;a++)i[a]=arguments[a];return n=o=f(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),o.handleUpdate=function(){return o.setState((0,l.getGlobalState)())},o.handleToggleGraph=function(){o.setState({hoverBoxes:[],graphEnabled:!o.state.graphEnabled})},f(o,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.Component),o(t,[{key:"componentWillMount",value:function(){this.setState((0,l.getGlobalState)())}},{key:"componentDidMount",value:function(){l.eventEmitter.on("update",this.handleUpdate)}},{key:"componentWillUnmount",value:function(){l.eventEmitter.removeListener("update",this.handleUpdate)}},{key:"render",value:function(){var e=this.props,t=e.noPanel,n=e.highlightTimeout,o=e.className,r=e.style,a=this.state,l=a.renderingBoxes,d=a.hoverBoxes;return i.default.createElement("div",null,!0!==t&&i.default.createElement(u.default,{position:this.props.position,highlightTimeout:n,className:o,style:r}),i.default.createElement(s.default,{boxes:l.concat(d)}),i.default.createElement(c.default,null))}}]),t}();p.propTypes={highlightTimeout:a.default.number,noPanel:a.default.bool,className:a.default.string,style:a.default.object,position:a.default.oneOfType(a.default.oneOf(["topRight","bottomRight","bottomLeft","topLeft"]),a.default.shape({top:a.default.string,right:a.default.string,bottom:a.default.string,left:a.default.string}))},p.defaultProps={noPanel:!1,className:""},t.default=p},function(e,t,n){"use strict";var o=n(12);function r(){}e.exports=function(){function e(e,t,n,r,i,a){if(a!==o){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return n.checkPropTypes=r,n.PropTypes=n,n}},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t){function n(){this._events=this._events||{},this._maxListeners=this._maxListeners||void 0}function o(e){return"function"==typeof e}function r(e){return"object"==typeof e&&null!==e}function i(e){return void 0===e}e.exports=n,n.EventEmitter=n,n.prototype._events=void 0,n.prototype._maxListeners=void 0,n.defaultMaxListeners=10,n.prototype.setMaxListeners=function(e){if(!function(e){return"number"==typeof e}(e)||e<0||isNaN(e))throw TypeError("n must be a positive number");return this._maxListeners=e,this},n.prototype.emit=function(e){var t,n,a,l,u,s;if(this._events||(this._events={}),"error"===e&&(!this._events.error||r(this._events.error)&&!this._events.error.length)){if((t=arguments[1])instanceof Error)throw t;var c=new Error('Uncaught, unspecified "error" event. ('+t+")");throw c.context=t,c}if(i(n=this._events[e]))return!1;if(o(n))switch(arguments.length){case 1:n.call(this);break;case 2:n.call(this,arguments[1]);break;case 3:n.call(this,arguments[1],arguments[2]);break;default:l=Array.prototype.slice.call(arguments,1),n.apply(this,l)}else if(r(n))for(l=Array.prototype.slice.call(arguments,1),a=(s=n.slice()).length,u=0;u<a;u++)s[u].apply(this,l);return!0},n.prototype.addListener=function(e,t){var a;if(!o(t))throw TypeError("listener must be a function");return this._events||(this._events={}),this._events.newListener&&this.emit("newListener",e,o(t.listener)?t.listener:t),this._events[e]?r(this._events[e])?this._events[e].push(t):this._events[e]=[this._events[e],t]:this._events[e]=t,r(this._events[e])&&!this._events[e].warned&&(a=i(this._maxListeners)?n.defaultMaxListeners:this._maxListeners)&&a>0&&this._events[e].length>a&&(this._events[e].warned=!0,console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",this._events[e].length),"function"==typeof console.trace&&console.trace()),this},n.prototype.on=n.prototype.addListener,n.prototype.once=function(e,t){if(!o(t))throw TypeError("listener must be a function");var n=!1;function r(){this.removeListener(e,r),n||(n=!0,t.apply(this,arguments))}return r.listener=t,this.on(e,r),this},n.prototype.removeListener=function(e,t){var n,i,a,l;if(!o(t))throw TypeError("listener must be a function");if(!this._events||!this._events[e])return this;if(a=(n=this._events[e]).length,i=-1,n===t||o(n.listener)&&n.listener===t)delete this._events[e],this._events.removeListener&&this.emit("removeListener",e,t);else if(r(n)){for(l=a;l-- >0;)if(n[l]===t||n[l].listener&&n[l].listener===t){i=l;break}if(i<0)return this;1===n.length?(n.length=0,delete this._events[e]):n.splice(i,1),this._events.removeListener&&this.emit("removeListener",e,t)}return this},n.prototype.removeAllListeners=function(e){var t,n;if(!this._events)return this;if(!this._events.removeListener)return 0===arguments.length?this._events={}:this._events[e]&&delete this._events[e],this;if(0===arguments.length){for(t in this._events)"removeListener"!==t&&this.removeAllListeners(t);return this.removeAllListeners("removeListener"),this._events={},this}if(o(n=this._events[e]))this.removeListener(e,n);else if(n)for(;n.length;)this.removeListener(e,n[n.length-1]);return delete this._events[e],this},n.prototype.listeners=function(e){return this._events&&this._events[e]?o(this._events[e])?[this._events[e]]:this._events[e].slice():[]},n.prototype.listenerCount=function(e){if(this._events){var t=this._events[e];if(o(t))return 1;if(t)return t.length}return 0},n.listenerCount=function(e,t){return e.listenerCount(t)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function e(t){if(t.dependencies){for(var n=t.dependencies.length-1;n>=0;n--)for(var o=t.dependencies[n].name,r=n-1;r>=0;r--)if(t.dependencies[r].name===o){t.dependencies[r].dependencies=[].concat(t.dependencies[r].dependencies||[],t.dependencies[n].dependencies||[]),t.dependencies.splice(n,1);break}t.dependencies.forEach(e)}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.default=function(e,t){!1===i&&"undefined"!=typeof navigator&&-1===navigator.userAgent.indexOf("Chrome")&&-1===navigator.userAgent.indexOf("Firefox")&&(console.warn("The output of the MobX logger is optimized for browsers with a modern console API like Chrome and Firefox"),i=!0);var n=!0===e.spyReportStart,o=!0===e.spyReportEnd,u=void 0;0===a?(u=t(e),n&&!u&&(l=!0)):o&&l&&1===a?(u=!1,l=!1):u=!0!==l;if(u&&o)d(e.time);else if(u){var h=n?c:f;switch(e.type){case"action":h("%caction '%s' %s","color:dodgerblue",e.name,b("(",m(e.target))),f(e.arguments),g();break;case"transaction":h("%ctransaction '%s' %s","color:gray",e.name,b("(",m(e.target)));break;case"scheduled-reaction":h("%cscheduled async reaction '%s'","color:#10a210",e.name);break;case"reaction":h("%creaction '%s'","color:#10a210",e.name),g();break;case"compute":c("%ccomputed '%s' %s","color:#10a210",e.name,b("(",m(e.target))),d();break;case"error":h("%cerror: %s","color:tomato",e.message),g(),function(){for(var e=0,t=s;e<t;e++)d()}();break;case"update":(0,r.isObservableArray)(e.object)?h("updated '%s[%s]': %s (was: %s)",y(e.object),e.index,v(e.newValue),v(e.oldValue)):(0,r.isObservableObject)(e.object)||(0,r.isObservableMap)(e.object)?h("updated '%s.%s': %s (was: %s)",e.name,e.key,v(e.newValue),v(e.oldValue)):h("updated '%s': %s (was: %s)",e.name,v(e.newValue),v(e.oldValue)),p({newValue:e.newValue,oldValue:e.oldValue}),g();break;case"splice":h("spliced '%s': index %d, added %d, removed %d",y(e.object),e.index,e.addedCount,e.removedCount),p({added:e.added,removed:e.removed}),g();break;case"add":h("set '%s.%s': %s",e.name,e.key,v(e.newValue)),p({newValue:e.newValue}),g();break;case"delete":case"remove":h("removed '%s.%s' (was %s)",e.name,e.key,v(e.oldValue)),p({oldValue:e.oldValue}),g();break;case"create":h("set '%s': %s",e.name,v(e.newValue)),p({newValue:e.newValue}),g();break;default:h(e.type),p(e)}}n&&a++;o&&a--};var r=n(4),i=!1,a=0,l=!1;var u="function"==typeof console.groupCollapsed,s=0;function c(){console[u?"groupCollapsed":"log"].apply(console,arguments),s++}function d(e){s--,"number"==typeof e&&f("%ctotal time: %sms","color:gray",e),u&&console.groupEnd()}function f(){console.log.apply(console,arguments)}function p(){console.dir.apply(console,arguments)}function g(){u&&console.groupCollapsed("stack"),console.trace("stack"),u&&console.groupEnd()}var h={'"':'"',"'":"'","(":")","[":"]","<":"]","#":""};function b(e,t){return t?(e||"")+t+(h[e]||""):""}function y(e){return e?(0,r.getDebugName)(e):String(e)}function v(e){return function(e){return null===e||void 0===e||"string"==typeof e||"number"==typeof e||"boolean"==typeof e}(e)?"string"==typeof e&&e.length>100?e.substr(0,97)+"...":e:b("(",m(e))}function m(e){if(null===e||void 0===e)return"";if(e&&"object"===(void 0===e?"undefined":o(e))){if(e&&e[r.$mobx])return e[r.$mobx].name;if(e.constructor)return e.constructor.name||"object"}return""+(void 0===e?"undefined":o(e))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=n(0),i=p(r),a=p(n(2)),l=n(1),u=p(n(5)),s=p(n(6)),c=p(n(7)),d=p(n(18)),f=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(8));function p(e){return e&&e.__esModule?e:{default:e}}function g(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var h=function(e){function t(){var e,n,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,i=Array(r),a=0;a<r;a++)i[a]=arguments[a];return n=o=g(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),o.handleUpdate=function(){return o.setState({})},g(o,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.Component),o(t,[{key:"componentDidMount",value:function(){l.eventEmitter.on("update",this.handleUpdate)}},{key:"componentWillUnmount",value:function(){l.eventEmitter.removeListener("update",this.handleUpdate)}},{key:"render",value:function(){var e=this.props,t=e.position,n=e.highlightTimeout,o=e.className,r=e.style,a={};if("string"==typeof t)switch(t){case"topRight":a.top="-2px",a.right="20px";break;case"bottomRight":a.bottom="-2px",a.right="20px";break;case"bottomLeft":a.bottom="-2px",a.left="20px";break;case"topLeft":a.top="-2px",a.left="20px"}else Object.assign(a,t);return i.default.createElement("div",null,i.default.createElement("div",{className:o,style:Object.assign({},f.panel,a,r)},i.default.createElement(c.default,{highlightTimeout:n},i.default.createElement(d.default,{id:"buttonUpdates"})),i.default.createElement(u.default,null,i.default.createElement(d.default,{id:"buttonGraph"})),i.default.createElement(s.default,null,i.default.createElement(d.default,{id:"buttonLog"}))))}}]),t}();h.propTypes={highlightTimeout:a.default.number,className:a.default.string,style:a.default.object},h.defaultProps={className:"",position:"bottomRight"},t.default=h},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=n(3),i=n(1);var a=function(e){switch(!0){case e<25:return"cheap";case e<100:return"acceptable";default:return"expensive"}},l=function(){function e(t){var n=this,o=t.highlightTimeout;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._boxesRegistry="undefined"!=typeof WeakMap?new WeakMap:new Map,this._renderReporterDisposer=r.renderReporter.on(function(e){if(!0===(0,i.getGlobalState)().updatesEnabled)switch(e.event){case"render":if(!e.node||!e.node.getBoundingClientRect||isNaN(e.renderTime))return;var t=e.node.getBoundingClientRect(),r=n.getBoxForNode(e.node);r.type="rendering",r.y=t.top,r.x=t.left,r.width=t.width,r.height=t.height,r.renderInfo={count:r.renderInfo&&++r.renderInfo.count||1,renderTime:e.renderTime,totalTime:e.totalTime,cost:a(e.renderTime)},r.lifeTime=o;var l=(0,i.getGlobalState)().renderingBoxes;return-1===l.indexOf(r)&&(l=l.concat([r])),(0,i.setGlobalState)({renderingBoxes:l}),r._timeout&&clearTimeout(r._timeout),void(r._timeout=setTimeout(function(){return n.removeBox(e.node,!0)},o));case"destroy":return n.removeBox(e.node),void n._boxesRegistry.delete(e.node);default:return}})}return o(e,[{key:"getBoxForNode",value:function(e){if(this._boxesRegistry.has(e))return this._boxesRegistry.get(e);var t={id:Math.random().toString(32).substr(2)};return this._boxesRegistry.set(e,t),t}},{key:"dispose",value:function(){this._renderReporterDisposer()}},{key:"removeBox",value:function(e){if(!1!==this._boxesRegistry.has(e)){var t=(0,i.getGlobalState)().renderingBoxes,n=t.indexOf(this._boxesRegistry.get(e));-1!==n&&(t=t.slice(0,n).concat(t.slice(n+1)),(0,i.setGlobalState)({renderingBoxes:t}))}}}]),e}();t.default=l},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=n(0),i=u(r),a=u(n(2)),l=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(8));function u(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var c=function(e){function t(){var e,n,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,i=Array(r),a=0;a<r;a++)i[a]=arguments[a];return n=o=s(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),o.state={hovered:!1},o.handleMouseOver=function(){return o.setState({hovered:!0})},o.handleMouseOut=function(){return o.setState({hovered:!1})},s(o,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.Component),o(t,[{key:"render",value:function(){var e=this.props,t=e.active,n=e.id,o=e.onToggle,r=this.state.hovered,a=function(){switch(n){case"buttonUpdates":return t?l.buttonUpdatesActive:l.buttonUpdates;case"buttonGraph":return t?l.buttonGraphActive:l.buttonGraph;case"buttonLog":return t?l.buttonLogActive:l.buttonLog}}(),u=function(){switch(n){case"buttonUpdates":return"Visualize component re-renders";case"buttonGraph":return"Select a component and show its dependency tree";case"buttonLog":return"Log all MobX state changes and reactions to the browser console (use F12 to show / hide the console). Use Chrome / Chromium for an optimal experience"}}(),s=Object.assign({},l.button,a,t&&l.button.active,r&&l.button.hover);return i.default.createElement("button",{type:"button",onClick:o,title:u,style:s,onMouseOver:this.handleMouseOver,onMouseOut:this.handleMouseOut})}}]),t}();c.props={onToggle:a.default.bool.isRequired,active:a.default.bool.isRequired,name:a.default.oneOf(["buttonUpdates","buttonGraph","buttonLog"]).isRequired},t.default=c},function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyBiYXNlUHJvZmlsZT0iYmFzaWMiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDE2IDE2IiBoZWlnaHQ9IjE2IiB3aWR0aD0iMTYiPgogICAgPGcgc3Ryb2tlPSIjMDAwIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjEiPgogICAgICAgIDxwYXRoIGQ9Ik0xMi41IDMuNWgtOGMtMS4xIDAtMiAuOS0yIDJ2NWMwIDEuMS45IDIgMiAyaDF2Mmw1LTJoMmMxLjEgMCAyLS45IDItMnYtNWMwLTEuMS0uOS0yLTItMnoiLz4KICAgICAgICA8cGF0aCBkPSJNNSA2LjVoNyIvPgogICAgICAgIDxwYXRoIGQ9Ik01IDkuNWg3Ii8+CiAgICA8L2c+Cjwvc3ZnPgo="},function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyBiYXNlUHJvZmlsZT0iYmFzaWMiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNiAxNiIgaGVpZ2h0PSIxNiIgd2lkdGg9IjE2Ij4KICAgIDxnIHN0cm9rZT0iIzE3ODBmYSIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxLjI1Ij4KICAgICAgICA8cGF0aCBkPSJNMTIuNSAzLjVoLThjLTEuMSAwLTIgLjktMiAydjVjMCAxLjEuOSAyIDIgMmgxdjJsNS0yaDJjMS4xIDAgMi0uOSAyLTJ2LTVjMC0xLjEtLjktMi0yLTJ6Ii8+CiAgICAgICAgPHBhdGggZD0iTTUgNi41aDciLz4KICAgICAgICA8cGF0aCBkPSJNNSA5LjVoNyIvPgogICAgPC9nPgo8L3N2Zz4K"},function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyBiYXNlUHJvZmlsZT0iYmFzaWMiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDE2IDE2IiBoZWlnaHQ9IjE2IiB3aWR0aD0iMTYiPgogICAgPGcgc3Ryb2tlPSIjMDAwIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjEiPgogICAgICAgIDxjaXJjbGUgY3g9IjguNSIgY3k9IjguNSIgcj0iNiIvPgogICAgICAgIDxwYXRoIGQ9Ik04LjUgMTBWNCIvPgogICAgPC9nPgogICAgPGcgc3Ryb2tlPSJub25lIiBmaWxsPSIjMDAwIj4KICAgICAgICA8Y2lyY2xlIGN4PSI4LjUiIGN5PSI4LjUiIHI9IjEiLz4KICAgICAgICA8cGF0aCBkPSJNNy41IDFoMnYxLjVoLTJ6Ii8+CiAgICAgICAgPHBhdGggZD0iTTE0IDEuNmwtLjcuNy4zLjMtLjcuOC43LjcuOC0uNy4zLjMuNy0uN3oiLz4KICAgIDwvZz4KPC9zdmc+Cg=="},function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyBiYXNlUHJvZmlsZT0iYmFzaWMiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDE2IDE2IiBoZWlnaHQ9IjE2IiB3aWR0aD0iMTYiPgogICAgPGcgc3Ryb2tlPSIjMTc4MGZhIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjEuMjUiPgogICAgICAgIDxjaXJjbGUgY3g9IjguNSIgY3k9IjguNSIgcj0iNiIvPgogICAgICAgIDxwYXRoIGQ9Ik04LjUgMTBWNCIvPgogICAgPC9nPgogICAgPGcgc3Ryb2tlPSJub25lIiBmaWxsPSIjMTc4MGZhIj4KICAgICAgICA8Y2lyY2xlIGN4PSI4LjUiIGN5PSI4LjUiIHI9IjEiLz4KICAgICAgICA8cGF0aCBkPSJNNy41IDFoMnYxLjVoLTJ6Ii8+CiAgICAgICAgPHBhdGggZD0iTTE0IDEuNmwtLjcuNy4zLjMtLjcuOC43LjcuOC0uNy4zLjMuNy0uN3oiLz4KICAgIDwvZz4KPC9zdmc+Cg=="},function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyBiYXNlUHJvZmlsZT0iYmFzaWMiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDE2IDE2IiBoZWlnaHQ9IjE2IiB3aWR0aD0iMTYiPgogICAgPGcgc3Ryb2tlPSIjMDAwIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjEiPgogICAgICAgIDxwYXRoIGQ9Ik0yLjUgMi41aDl2MmgtOXoiLz4KICAgICAgICA8cGF0aCBkPSJNNy41IDcuNWg3djJoLTd6Ii8+CiAgICAgICAgPHBhdGggZD0iTTcuNSAxMi41aDd2MmgtN3oiLz4KICAgICAgICA8cGF0aCBkPSJNNC41IDQuNXY5aDMiLz4KICAgICAgICA8cGF0aCBkPSJNNy41IDguNWgtMyIvPgogICAgPC9nPgo8L3N2Zz4K"},function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyBiYXNlUHJvZmlsZT0iYmFzaWMiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDE2IDE2IiBoZWlnaHQ9IjE2IiB3aWR0aD0iMTYiPgogICAgPGcgc3Ryb2tlPSIjMTc4MGZhIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjEuMjUiPgogICAgICAgIDxwYXRoIGQ9Ik0yLjUgMi41aDl2MmgtOXoiLz4KICAgICAgICA8cGF0aCBkPSJNNy41IDcuNWg3djJoLTd6Ii8+CiAgICAgICAgPHBhdGggZD0iTTcuNSAxMi41aDd2MmgtN3oiLz4KICAgICAgICA8cGF0aCBkPSJNNC41IDQuNXY5aDMiLz4KICAgICAgICA8cGF0aCBkPSJNNy41IDguNWgtMyIvPgogICAgPC9nPgo8L3N2Zz4K"},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=n(0),i=u(r),a=u(n(2)),l=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(26));function u(e){return e&&e.__esModule?e:{default:e}}var s=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.Component),o(t,[{key:"renderBox",value:function(e){switch(e.type){case"rendering":var t=l.rendering[e.renderInfo.cost]||{};return i.default.createElement("div",{key:e.id,ref:function(t){return setTimeout(function(){t&&(t.style.opacity=0)},e.lifeTime-500)},style:Object.assign({},l.box,l.rendering,t,{left:e.x,top:e.y,width:e.width,height:e.height})},i.default.createElement("span",{style:Object.assign({},l.text,t.text)},e.renderInfo.count,"x | ",e.renderInfo.renderTime," /"," ",e.renderInfo.totalTime," ms"));case"hover":return i.default.createElement("div",{key:e.id,style:Object.assign({},l.box,l.hover,{left:e.x,top:e.y,width:e.width,height:e.height})});default:throw new Error}}},{key:"render",value:function(){var e=this,t=this.props.boxes;return i.default.createElement("div",null,t.map(function(t){return e.renderBox(t)}))}}]),t}();s.propTypes={boxes:a.default.arrayOf(a.default.shape({type:a.default.oneOf(["rendering","hover"]).isRequired,x:a.default.number.isRequired,y:a.default.number.isRequired,width:a.default.number.isRequired,height:a.default.number.isRequired,renderInfo:a.default.shape({count:a.default.number.isRequired,renderTime:a.default.number.isRequired,totalTime:a.default.number.isRequired,cost:a.default.oneOf(["cheap","acceptable","expensive"]).isRequired}),lifeTime:a.default.number.isRequired})).isRequired},t.default=s},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.box={display:"block",position:"fixed",zIndex:"64998",minWidth:"60px",outline:"3px solid",pointerEvents:"none",transition:"opacity 500ms ease-in"},t.text={fontFamily:"verdana, sans-serif",padding:"0 4px 2px",color:"rgba(0, 0, 0, 0.6)",fontSize:"10px",lineHeight:"12px",pointerEvents:"none",float:"right",borderBottomRightRadius:"2px",maxWidth:"100%",maxHeight:"100%",overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"},t.rendering={cheap:{outlineColor:"rgba(182, 218, 146, 0.75)",text:{backgroundColor:"rgba(182, 218, 146, 0.75)"}},acceptable:{outlineColor:"rgba(228, 195, 66, 0.85)",text:{backgroundColor:"rgba(228, 195, 66, 0.85)"}},expensive:{outlineColor:"rgba(228, 171, 171, 0.95)",text:{backgroundColor:"rgba(228, 171, 171, 0.95)"}}},t.hover={outlineColor:"rgba(128, 128, 255, 0.5)"}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=n(0),i=s(r),a=s(n(28)),l=n(1),u=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(30));function s(e){return e&&e.__esModule?e:{default:e}}function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var d=function(e){function t(){var e,n,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,i=Array(r),a=0;a<r;a++)i[a]=arguments[a];return n=o=c(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),o.handleUpdate=function(){return o.setState({})},o.handleClose=function(){return(0,l.setGlobalState)({dependencyTree:void 0})},c(o,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.Component),o(t,[{key:"componentDidMount",value:function(){l.eventEmitter.on("update",this.handleUpdate)}},{key:"componentWillUnmount",value:function(){l.eventEmitter.removeListener("update",this.handleUpdate)}},{key:"renderTreeItem",value:function(e,t,n){var o=e.name,r=e.dependencies,a=this;return i.default.createElement("div",{style:u.item,key:o},i.default.createElement("span",{style:Object.assign({},u.box,n&&u.box.root)},o),r&&i.default.createElement("div",{style:u.tree},r.map(function(e,t){return a.renderTreeItem(e,t==r.length-1)})),!n&&i.default.createElement("span",{style:u.itemHorisontalDash}),!n&&i.default.createElement("span",{style:Object.assign({},u.itemVericalStick,t&&u.itemVericalStick.short)}))}},{key:"render",value:function(){var e=(0,l.getGlobalState)().dependencyTree;return i.default.createElement(a.default,{onOverlayClick:this.handleClose},e&&i.default.createElement("div",{style:u.graph},i.default.createElement("span",{style:u.close,onClick:this.handleClose},"×"),i.default.createElement("div",{style:u.tree},this.renderTreeItem(e,!0,!0))))}}]),t}();t.default=d},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=u(n(2)),i=n(0),a=u(i),l=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(29));function u(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var c=function(e){function t(){var e,n,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,i=Array(r),a=0;a<r;a++)i[a]=arguments[a];return n=o=s(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),o.stopPropagation=function(e){return e.stopPropagation()},s(o,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.Component),o(t,[{key:"componentDidUpdate",value:function(e){var t=document.body.parentNode;if(e.children&&!this.props.children)t.style.borderRight=null,t.style.overflow=null;else if(!e.children&&this.props.children){var n=t.offsetWidth;t.style.overflow="hidden";var o=t.offsetWidth,r=Math.max(0,o-n);t.style.borderRight=r+"px solid transparent"}}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.onOverlayClick;return t?a.default.createElement("div",{style:l.overlay,onClick:n},a.default.createElement("div",{key:"content",style:l.modal,onClick:this.stopPropagation},t)):null}}]),t}();c.propTypes={children:r.default.node,onOverlayClick:r.default.func.isRequired},t.default=c},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.overlay={position:"fixed",top:0,right:0,bottom:0,left:0,zIndex:66e3,overflow:"auto",WebkitOverflowScrolling:"touch",outline:0,backgroundColor:"rgba(40, 40, 50, 0.5)",transformOrigin:"50% 25%"},t.modal={position:"relative",width:"auto",margin:"5% 10%",zIndex:1060}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.graph={background:"white",padding:"40px"},t.close={color:"rgba(0, 0, 0, 0.2)",fontSize:"36px",position:"absolute",top:"5px",right:"5px",width:"40px",height:"40px",lineHeight:"34px",textAlign:"center",cursor:"pointer",":hover":{color:"rgba(0, 0, 0, 0.5)"}},t.tree={position:"relative",paddingLeft:"25px"},t.item={position:"relative"},t.box={padding:"4px 10px",background:"rgba(0, 0, 0, 0.05)",display:"inline-block",marginBottom:"8px",color:"#000",root:{fontSize:"15px",fontWeight:"bold",padding:"6px 13px"}},t.itemHorisontalDash={position:"absolute",left:"-12px",borderTop:"1px solid rgba(0, 0, 0, 0.2)",top:"14px",width:"12px",height:"0"},t.itemVericalStick={position:"absolute",left:"-12px",borderLeft:"1px solid rgba(0, 0, 0, 0.2)",height:"100%",width:0,top:"-8px",short:{height:"23px"}}}])});

/***/ })

/******/ });
//# sourceMappingURL=categorizeHelper.06a9c311901661b8d585.js.map