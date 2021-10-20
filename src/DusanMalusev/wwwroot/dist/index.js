// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"gwARK":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "4a236f9275d0a351";
module.bundle.HMR_BUNDLE_ID = "04dd7b59d969d973";
"use strict";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    var parents = getParents(module.bundle.root, id); // If no parents, the asset is new. Prevent reloading the page.
    if (!parents.length) return true;
    return parents.some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"1mazX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _subscribe = require("./subscribe");
var _subscribeDefault = parcelHelpers.interopDefault(_subscribe);
var _snow = require("./snow");
var _snowDefault = parcelHelpers.interopDefault(_snow);
var _elements = require("./elements");
const subscription = new _subscribeDefault.default();
document.addEventListener('DOMContentLoaded', async ()=>{
    await _snowDefault.default(_elements.SNOW_EFFECT);
    subscription.addListener();
});
window.addEventListener('beforeunload', ()=>{
    subscription.dispose();
});

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV","./subscribe":"a58Mn","./snow":"fkozp","./elements":"7Z7sx"}],"ciiiV":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"a58Mn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Subscribe
);
var _sweetalert2Js = require("sweetalert2/dist/sweetalert2.js");
var _sweetalert2JsDefault = parcelHelpers.interopDefault(_sweetalert2Js);
var _http = require("../http");
var _httpDefault = parcelHelpers.interopDefault(_http);
var _recaptcha = require("../recaptcha");
var _validation = require("./validation");
var _validationDefault = parcelHelpers.interopDefault(_validation);
var _errors = require("./errors");
var _errorsDefault = parcelHelpers.interopDefault(_errors);
const RECAPTCHA_EVENT = 'subscribe';
const SUBSCRIBE_ENDPOINT = '/subscribe/new';
var Elements;
(function(Elements) {
    Elements["Form"] = 'subscribe-form';
    Elements["Name"] = 'subscribe-form-name';
    Elements["Email"] = 'subscribe-form-email';
    Elements["NameError"] = 'subscribe-form-name-error';
    Elements["EmailError"] = 'subscribe-form-email-error';
})(Elements || (Elements = {
}));
class Subscribe {
    constructor(){
        this.client = new _httpDefault.default();
    }
    addListener() {
        this.form = document.getElementById(Elements.Form);
        this.name = document.getElementById(Elements.Name);
        this.email = document.getElementById(Elements.Email);
        this.nameError = document.getElementById(Elements.NameError);
        this.emailError = document.getElementById(Elements.EmailError);
        this.form.addEventListener('submit', this.subscribe.bind(this));
    }
    async subscribe(e) {
        e.preventDefault();
        const name = this.name.value;
        const email = this.email.value;
        try {
            await _validationDefault.default(name, email);
            await _recaptcha.ready();
            const token = await _recaptcha.execute(RECAPTCHA_EVENT);
            const payload = {
                name,
                email,
                [_http.RECAPTCHA_TOKEN_FIELD]: token
            };
            await this.client.post(SUBSCRIBE_ENDPOINT, payload);
            gtag('event', 'subscribe', {
                event_category: 'subscription',
                event_label: 'New user subscribed to news letters'
            });
            _sweetalert2JsDefault.default.fire({
                title: 'Success',
                text: 'You have successfully subscribed to newsletters',
                icon: 'success',
                timerProgressBar: true
            });
        } catch (err) {
            _errorsDefault.default(err, {
                email: this.email,
                emailError: this.emailError,
                name: this.name,
                nameError: this.nameError
            });
        }
    }
    dispose() {
        this.form.removeEventListener('submit', this.subscribe);
    }
}

},{"sweetalert2/dist/sweetalert2.js":"2rUmd","../http":"1nIup","../recaptcha":"dJlOb","./validation":"8Ctrd","./errors":"cqMkB","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"2rUmd":[function(require,module,exports) {
(function(global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() : typeof define === 'function' && define.amd ? define(factory) : (global = global || self, global.Sweetalert2 = factory());
})(this, function() {
    'use strict';
    function _typeof(obj) {
        if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function(obj) {
            return typeof obj;
        };
        else _typeof = function(obj) {
            return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
        };
        return _typeof(obj);
    }
    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
    }
    function _defineProperties(target, props) {
        for(var i = 0; i < props.length; i++){
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps) _defineProperties(Constructor.prototype, protoProps);
        if (staticProps) _defineProperties(Constructor, staticProps);
        return Constructor;
    }
    function _extends() {
        _extends = Object.assign || function(target) {
            for(var i = 1; i < arguments.length; i++){
                var source = arguments[i];
                for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
            }
            return target;
        };
        return _extends.apply(this, arguments);
    }
    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                writable: true,
                configurable: true
            }
        });
        if (superClass) _setPrototypeOf(subClass, superClass);
    }
    function _getPrototypeOf(o) {
        _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
            return o.__proto__ || Object.getPrototypeOf(o);
        };
        return _getPrototypeOf(o);
    }
    function _setPrototypeOf(o, p) {
        _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
            o.__proto__ = p;
            return o;
        };
        return _setPrototypeOf(o, p);
    }
    function _isNativeReflectConstruct() {
        if (typeof Reflect === "undefined" || !Reflect.construct) return false;
        if (Reflect.construct.sham) return false;
        if (typeof Proxy === "function") return true;
        try {
            Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
            }));
            return true;
        } catch (e) {
            return false;
        }
    }
    function _construct(Parent, args, Class) {
        if (_isNativeReflectConstruct()) _construct = Reflect.construct;
        else _construct = function _construct(Parent, args, Class) {
            var a = [
                null
            ];
            a.push.apply(a, args);
            var Constructor = Function.bind.apply(Parent, a);
            var instance = new Constructor();
            if (Class) _setPrototypeOf(instance, Class.prototype);
            return instance;
        };
        return _construct.apply(null, arguments);
    }
    function _assertThisInitialized(self) {
        if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return self;
    }
    function _possibleConstructorReturn(self, call) {
        if (call && (typeof call === "object" || typeof call === "function")) return call;
        return _assertThisInitialized(self);
    }
    function _createSuper(Derived) {
        var hasNativeReflectConstruct = _isNativeReflectConstruct();
        return function _createSuperInternal() {
            var Super = _getPrototypeOf(Derived), result;
            if (hasNativeReflectConstruct) {
                var NewTarget = _getPrototypeOf(this).constructor;
                result = Reflect.construct(Super, arguments, NewTarget);
            } else result = Super.apply(this, arguments);
            return _possibleConstructorReturn(this, result);
        };
    }
    function _superPropBase(object, property) {
        while(!Object.prototype.hasOwnProperty.call(object, property)){
            object = _getPrototypeOf(object);
            if (object === null) break;
        }
        return object;
    }
    function _get(target, property, receiver) {
        if (typeof Reflect !== "undefined" && Reflect.get) _get = Reflect.get;
        else _get = function _get(target, property, receiver) {
            var base = _superPropBase(target, property);
            if (!base) return;
            var desc = Object.getOwnPropertyDescriptor(base, property);
            if (desc.get) return desc.get.call(receiver);
            return desc.value;
        };
        return _get(target, property, receiver || target);
    }
    var consolePrefix = 'SweetAlert2:';
    /**
   * Filter the unique values into a new array
   * @param arr
   */ var uniqueArray = function uniqueArray(arr) {
        var result = [];
        for(var i = 0; i < arr.length; i++)if (result.indexOf(arr[i]) === -1) result.push(arr[i]);
        return result;
    };
    /**
   * Capitalize the first letter of a string
   * @param str
   */ var capitalizeFirstLetter = function capitalizeFirstLetter(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };
    /**
   * Returns the array of object values (Object.values isn't supported in IE11)
   * @param obj
   */ var objectValues = function objectValues(obj) {
        return Object.keys(obj).map(function(key) {
            return obj[key];
        });
    };
    /**
   * Convert NodeList to Array
   * @param nodeList
   */ var toArray = function toArray(nodeList) {
        return Array.prototype.slice.call(nodeList);
    };
    /**
   * Standardise console warnings
   * @param message
   */ var warn = function warn(message) {
        console.warn("".concat(consolePrefix, " ").concat(_typeof(message) === 'object' ? message.join(' ') : message));
    };
    /**
   * Standardise console errors
   * @param message
   */ var error = function error(message) {
        console.error("".concat(consolePrefix, " ").concat(message));
    };
    /**
   * Private global state for `warnOnce`
   * @type {Array}
   * @private
   */ var previousWarnOnceMessages = [];
    /**
   * Show a console warning, but only if it hasn't already been shown
   * @param message
   */ var warnOnce = function warnOnce(message) {
        if (!(previousWarnOnceMessages.indexOf(message) !== -1)) {
            previousWarnOnceMessages.push(message);
            warn(message);
        }
    };
    /**
   * Show a one-time console warning about deprecated params/methods
   */ var warnAboutDeprecation = function warnAboutDeprecation(deprecatedParam, useInstead) {
        warnOnce("\"".concat(deprecatedParam, "\" is deprecated and will be removed in the next major release. Please use \"").concat(useInstead, "\" instead."));
    };
    /**
   * If `arg` is a function, call it (with no arguments or context) and return the result.
   * Otherwise, just pass the value through
   * @param arg
   */ var callIfFunction = function callIfFunction(arg) {
        return typeof arg === 'function' ? arg() : arg;
    };
    var hasToPromiseFn = function hasToPromiseFn(arg) {
        return arg && typeof arg.toPromise === 'function';
    };
    var asPromise = function asPromise(arg) {
        return hasToPromiseFn(arg) ? arg.toPromise() : Promise.resolve(arg);
    };
    var isPromise = function isPromise(arg) {
        return arg && Promise.resolve(arg) === arg;
    };
    var DismissReason = Object.freeze({
        cancel: 'cancel',
        backdrop: 'backdrop',
        close: 'close',
        esc: 'esc',
        timer: 'timer'
    });
    var isJqueryElement = function isJqueryElement(elem) {
        return _typeof(elem) === 'object' && elem.jquery;
    };
    var isElement = function isElement(elem) {
        return elem instanceof Element || isJqueryElement(elem);
    };
    var argsToParams = function argsToParams(args) {
        var params = {
        };
        if (_typeof(args[0]) === 'object' && !isElement(args[0])) _extends(params, args[0]);
        else [
            'title',
            'html',
            'icon'
        ].forEach(function(name, index) {
            var arg = args[index];
            if (typeof arg === 'string' || isElement(arg)) params[name] = arg;
            else if (arg !== undefined) error("Unexpected type of ".concat(name, "! Expected \"string\" or \"Element\", got ").concat(_typeof(arg)));
        });
        return params;
    };
    var swalPrefix = 'swal2-';
    var prefix = function prefix(items) {
        var result = {
        };
        for(var i in items)result[items[i]] = swalPrefix + items[i];
        return result;
    };
    var swalClasses = prefix([
        'container',
        'shown',
        'height-auto',
        'iosfix',
        'popup',
        'modal',
        'no-backdrop',
        'no-transition',
        'toast',
        'toast-shown',
        'show',
        'hide',
        'close',
        'title',
        'header',
        'content',
        'html-container',
        'actions',
        'confirm',
        'deny',
        'cancel',
        'footer',
        'icon',
        'icon-content',
        'image',
        'input',
        'file',
        'range',
        'select',
        'radio',
        'checkbox',
        'label',
        'textarea',
        'inputerror',
        'input-label',
        'validation-message',
        'progress-steps',
        'active-progress-step',
        'progress-step',
        'progress-step-line',
        'loader',
        'loading',
        'styled',
        'top',
        'top-start',
        'top-end',
        'top-left',
        'top-right',
        'center',
        'center-start',
        'center-end',
        'center-left',
        'center-right',
        'bottom',
        'bottom-start',
        'bottom-end',
        'bottom-left',
        'bottom-right',
        'grow-row',
        'grow-column',
        'grow-fullscreen',
        'rtl',
        'timer-progress-bar',
        'timer-progress-bar-container',
        'scrollbar-measure',
        'icon-success',
        'icon-warning',
        'icon-info',
        'icon-question',
        'icon-error'
    ]);
    var iconTypes = prefix([
        'success',
        'warning',
        'info',
        'question',
        'error'
    ]);
    var getContainer = function getContainer() {
        return document.body.querySelector(".".concat(swalClasses.container));
    };
    var elementBySelector = function elementBySelector(selectorString) {
        var container = getContainer();
        return container ? container.querySelector(selectorString) : null;
    };
    var elementByClass = function elementByClass(className) {
        return elementBySelector(".".concat(className));
    };
    var getPopup = function getPopup() {
        return elementByClass(swalClasses.popup);
    };
    var getIcon = function getIcon() {
        return elementByClass(swalClasses.icon);
    };
    var getTitle = function getTitle() {
        return elementByClass(swalClasses.title);
    };
    var getContent = function getContent() {
        return elementByClass(swalClasses.content);
    };
    var getHtmlContainer = function getHtmlContainer() {
        return elementByClass(swalClasses['html-container']);
    };
    var getImage = function getImage() {
        return elementByClass(swalClasses.image);
    };
    var getProgressSteps = function getProgressSteps() {
        return elementByClass(swalClasses['progress-steps']);
    };
    var getValidationMessage = function getValidationMessage() {
        return elementByClass(swalClasses['validation-message']);
    };
    var getConfirmButton = function getConfirmButton() {
        return elementBySelector(".".concat(swalClasses.actions, " .").concat(swalClasses.confirm));
    };
    var getDenyButton = function getDenyButton() {
        return elementBySelector(".".concat(swalClasses.actions, " .").concat(swalClasses.deny));
    };
    var getInputLabel = function getInputLabel() {
        return elementByClass(swalClasses['input-label']);
    };
    var getLoader = function getLoader() {
        return elementBySelector(".".concat(swalClasses.loader));
    };
    var getCancelButton = function getCancelButton() {
        return elementBySelector(".".concat(swalClasses.actions, " .").concat(swalClasses.cancel));
    };
    var getActions = function getActions() {
        return elementByClass(swalClasses.actions);
    };
    var getHeader = function getHeader() {
        return elementByClass(swalClasses.header);
    };
    var getFooter = function getFooter() {
        return elementByClass(swalClasses.footer);
    };
    var getTimerProgressBar = function getTimerProgressBar() {
        return elementByClass(swalClasses['timer-progress-bar']);
    };
    var getCloseButton = function getCloseButton() {
        return elementByClass(swalClasses.close);
    }; // https://github.com/jkup/focusable/blob/master/index.js
    var focusable = "\n  a[href],\n  area[href],\n  input:not([disabled]),\n  select:not([disabled]),\n  textarea:not([disabled]),\n  button:not([disabled]),\n  iframe,\n  object,\n  embed,\n  [tabindex=\"0\"],\n  [contenteditable],\n  audio[controls],\n  video[controls],\n  summary\n";
    var getFocusableElements = function getFocusableElements() {
        var focusableElementsWithTabindex = toArray(getPopup().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')) // sort according to tabindex
        .sort(function(a, b) {
            a = parseInt(a.getAttribute('tabindex'));
            b = parseInt(b.getAttribute('tabindex'));
            if (a > b) return 1;
            else if (a < b) return -1;
            return 0;
        });
        var otherFocusableElements = toArray(getPopup().querySelectorAll(focusable)).filter(function(el) {
            return el.getAttribute('tabindex') !== '-1';
        });
        return uniqueArray(focusableElementsWithTabindex.concat(otherFocusableElements)).filter(function(el) {
            return isVisible(el);
        });
    };
    var isModal = function isModal() {
        return !isToast() && !document.body.classList.contains(swalClasses['no-backdrop']);
    };
    var isToast = function isToast() {
        return document.body.classList.contains(swalClasses['toast-shown']);
    };
    var isLoading = function isLoading() {
        return getPopup().hasAttribute('data-loading');
    };
    var states = {
        previousBodyPadding: null
    };
    var setInnerHtml = function setInnerHtml(elem, html) {
        // #1926
        elem.textContent = '';
        if (html) {
            var parser = new DOMParser();
            var parsed = parser.parseFromString(html, "text/html");
            toArray(parsed.querySelector('head').childNodes).forEach(function(child) {
                elem.appendChild(child);
            });
            toArray(parsed.querySelector('body').childNodes).forEach(function(child) {
                elem.appendChild(child);
            });
        }
    };
    var hasClass = function hasClass(elem, className) {
        if (!className) return false;
        var classList = className.split(/\s+/);
        for(var i = 0; i < classList.length; i++){
            if (!elem.classList.contains(classList[i])) return false;
        }
        return true;
    };
    var removeCustomClasses = function removeCustomClasses(elem, params) {
        toArray(elem.classList).forEach(function(className) {
            if (!(objectValues(swalClasses).indexOf(className) !== -1) && !(objectValues(iconTypes).indexOf(className) !== -1) && !(objectValues(params.showClass).indexOf(className) !== -1)) elem.classList.remove(className);
        });
    };
    var applyCustomClass = function applyCustomClass(elem, params, className) {
        removeCustomClasses(elem, params);
        if (params.customClass && params.customClass[className]) {
            if (typeof params.customClass[className] !== 'string' && !params.customClass[className].forEach) return warn("Invalid type of customClass.".concat(className, "! Expected string or iterable object, got \"").concat(_typeof(params.customClass[className]), "\""));
            addClass(elem, params.customClass[className]);
        }
    };
    function getInput(content, inputType) {
        if (!inputType) return null;
        switch(inputType){
            case 'select':
            case 'textarea':
            case 'file':
                return getChildByClass(content, swalClasses[inputType]);
            case 'checkbox':
                return content.querySelector(".".concat(swalClasses.checkbox, " input"));
            case 'radio':
                return content.querySelector(".".concat(swalClasses.radio, " input:checked")) || content.querySelector(".".concat(swalClasses.radio, " input:first-child"));
            case 'range':
                return content.querySelector(".".concat(swalClasses.range, " input"));
            default:
                return getChildByClass(content, swalClasses.input);
        }
    }
    var focusInput = function focusInput(input) {
        input.focus(); // place cursor at end of text in text input
        if (input.type !== 'file') {
            // http://stackoverflow.com/a/2345915
            var val = input.value;
            input.value = '';
            input.value = val;
        }
    };
    var toggleClass = function toggleClass(target, classList, condition) {
        if (!target || !classList) return;
        if (typeof classList === 'string') classList = classList.split(/\s+/).filter(Boolean);
        classList.forEach(function(className) {
            if (target.forEach) target.forEach(function(elem) {
                condition ? elem.classList.add(className) : elem.classList.remove(className);
            });
            else condition ? target.classList.add(className) : target.classList.remove(className);
        });
    };
    var addClass = function addClass(target, classList) {
        toggleClass(target, classList, true);
    };
    var removeClass = function removeClass(target, classList) {
        toggleClass(target, classList, false);
    };
    var getChildByClass = function getChildByClass(elem, className) {
        for(var i = 0; i < elem.childNodes.length; i++){
            if (hasClass(elem.childNodes[i], className)) return elem.childNodes[i];
        }
    };
    var applyNumericalStyle = function applyNumericalStyle(elem, property, value) {
        if (value === "".concat(parseInt(value))) value = parseInt(value);
        if (value || parseInt(value) === 0) elem.style[property] = typeof value === 'number' ? "".concat(value, "px") : value;
        else elem.style.removeProperty(property);
    };
    var show = function show(elem) {
        var display = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'flex';
        elem.style.display = display;
    };
    var hide = function hide(elem) {
        elem.style.display = 'none';
    };
    var setStyle = function setStyle(parent, selector, property, value) {
        var el = parent.querySelector(selector);
        if (el) el.style[property] = value;
    };
    var toggle = function toggle(elem, condition, display) {
        condition ? show(elem, display) : hide(elem);
    }; // borrowed from jquery $(elem).is(':visible') implementation
    var isVisible = function isVisible(elem) {
        return !!(elem && (elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length));
    };
    var allButtonsAreHidden = function allButtonsAreHidden() {
        return !isVisible(getConfirmButton()) && !isVisible(getDenyButton()) && !isVisible(getCancelButton());
    };
    var isScrollable = function isScrollable(elem) {
        return !!(elem.scrollHeight > elem.clientHeight);
    }; // borrowed from https://stackoverflow.com/a/46352119
    var hasCssAnimation = function hasCssAnimation(elem) {
        var style = window.getComputedStyle(elem);
        var animDuration = parseFloat(style.getPropertyValue('animation-duration') || '0');
        var transDuration = parseFloat(style.getPropertyValue('transition-duration') || '0');
        return animDuration > 0 || transDuration > 0;
    };
    var contains = function contains(haystack, needle) {
        if (typeof haystack.contains === 'function') return haystack.contains(needle);
    };
    var animateTimerProgressBar = function animateTimerProgressBar(timer) {
        var reset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var timerProgressBar = getTimerProgressBar();
        if (isVisible(timerProgressBar)) {
            if (reset) {
                timerProgressBar.style.transition = 'none';
                timerProgressBar.style.width = '100%';
            }
            setTimeout(function() {
                timerProgressBar.style.transition = "width ".concat(timer / 1000, "s linear");
                timerProgressBar.style.width = '0%';
            }, 10);
        }
    };
    var stopTimerProgressBar = function stopTimerProgressBar() {
        var timerProgressBar = getTimerProgressBar();
        var timerProgressBarWidth = parseInt(window.getComputedStyle(timerProgressBar).width);
        timerProgressBar.style.removeProperty('transition');
        timerProgressBar.style.width = '100%';
        var timerProgressBarFullWidth = parseInt(window.getComputedStyle(timerProgressBar).width);
        var timerProgressBarPercent = parseInt(timerProgressBarWidth / timerProgressBarFullWidth * 100);
        timerProgressBar.style.removeProperty('transition');
        timerProgressBar.style.width = "".concat(timerProgressBarPercent, "%");
    };
    // Detect Node env
    var isNodeEnv = function isNodeEnv() {
        return typeof window === 'undefined' || typeof document === 'undefined';
    };
    var sweetHTML = "\n <div aria-labelledby=\"".concat(swalClasses.title, "\" aria-describedby=\"").concat(swalClasses.content, "\" class=\"").concat(swalClasses.popup, "\" tabindex=\"-1\">\n   <div class=\"").concat(swalClasses.header, "\">\n     <ul class=\"").concat(swalClasses['progress-steps'], "\"></ul>\n     <div class=\"").concat(swalClasses.icon, "\"></div>\n     <img class=\"").concat(swalClasses.image, "\" />\n     <h2 class=\"").concat(swalClasses.title, "\" id=\"").concat(swalClasses.title, "\"></h2>\n     <button type=\"button\" class=\"").concat(swalClasses.close, "\"></button>\n   </div>\n   <div class=\"").concat(swalClasses.content, "\">\n     <div id=\"").concat(swalClasses.content, "\" class=\"").concat(swalClasses['html-container'], "\"></div>\n     <input class=\"").concat(swalClasses.input, "\" />\n     <input type=\"file\" class=\"").concat(swalClasses.file, "\" />\n     <div class=\"").concat(swalClasses.range, "\">\n       <input type=\"range\" />\n       <output></output>\n     </div>\n     <select class=\"").concat(swalClasses.select, "\"></select>\n     <div class=\"").concat(swalClasses.radio, "\"></div>\n     <label for=\"").concat(swalClasses.checkbox, "\" class=\"").concat(swalClasses.checkbox, "\">\n       <input type=\"checkbox\" />\n       <span class=\"").concat(swalClasses.label, "\"></span>\n     </label>\n     <textarea class=\"").concat(swalClasses.textarea, "\"></textarea>\n     <div class=\"").concat(swalClasses['validation-message'], "\" id=\"").concat(swalClasses['validation-message'], "\"></div>\n   </div>\n   <div class=\"").concat(swalClasses.actions, "\">\n     <div class=\"").concat(swalClasses.loader, "\"></div>\n     <button type=\"button\" class=\"").concat(swalClasses.confirm, "\"></button>\n     <button type=\"button\" class=\"").concat(swalClasses.deny, "\"></button>\n     <button type=\"button\" class=\"").concat(swalClasses.cancel, "\"></button>\n   </div>\n   <div class=\"").concat(swalClasses.footer, "\"></div>\n   <div class=\"").concat(swalClasses['timer-progress-bar-container'], "\">\n     <div class=\"").concat(swalClasses['timer-progress-bar'], "\"></div>\n   </div>\n </div>\n").replace(/(^|\n)\s*/g, '');
    var resetOldContainer = function resetOldContainer() {
        var oldContainer = getContainer();
        if (!oldContainer) return false;
        oldContainer.parentNode.removeChild(oldContainer);
        removeClass([
            document.documentElement,
            document.body
        ], [
            swalClasses['no-backdrop'],
            swalClasses['toast-shown'],
            swalClasses['has-column']
        ]);
        return true;
    };
    var oldInputVal; // IE11 workaround, see #1109 for details
    var resetValidationMessage = function resetValidationMessage(e) {
        if (Swal.isVisible() && oldInputVal !== e.target.value) Swal.resetValidationMessage();
        oldInputVal = e.target.value;
    };
    var addInputChangeListeners = function addInputChangeListeners() {
        var content = getContent();
        var input = getChildByClass(content, swalClasses.input);
        var file = getChildByClass(content, swalClasses.file);
        var range = content.querySelector(".".concat(swalClasses.range, " input"));
        var rangeOutput = content.querySelector(".".concat(swalClasses.range, " output"));
        var select = getChildByClass(content, swalClasses.select);
        var checkbox = content.querySelector(".".concat(swalClasses.checkbox, " input"));
        var textarea = getChildByClass(content, swalClasses.textarea);
        input.oninput = resetValidationMessage;
        file.onchange = resetValidationMessage;
        select.onchange = resetValidationMessage;
        checkbox.onchange = resetValidationMessage;
        textarea.oninput = resetValidationMessage;
        range.oninput = function(e) {
            resetValidationMessage(e);
            rangeOutput.value = range.value;
        };
        range.onchange = function(e) {
            resetValidationMessage(e);
            range.nextSibling.value = range.value;
        };
    };
    var getTarget = function getTarget(target) {
        return typeof target === 'string' ? document.querySelector(target) : target;
    };
    var setupAccessibility = function setupAccessibility(params) {
        var popup = getPopup();
        popup.setAttribute('role', params.toast ? 'alert' : 'dialog');
        popup.setAttribute('aria-live', params.toast ? 'polite' : 'assertive');
        if (!params.toast) popup.setAttribute('aria-modal', 'true');
    };
    var setupRTL = function setupRTL(targetElement) {
        if (window.getComputedStyle(targetElement).direction === 'rtl') addClass(getContainer(), swalClasses.rtl);
    };
    /*
   * Add modal + backdrop to DOM
   */ var init = function init(params) {
        // Clean up the old popup container if it exists
        var oldContainerExisted = resetOldContainer();
        /* istanbul ignore if */ if (isNodeEnv()) {
            error('SweetAlert2 requires document to initialize');
            return;
        }
        var container = document.createElement('div');
        container.className = swalClasses.container;
        if (oldContainerExisted) addClass(container, swalClasses['no-transition']);
        setInnerHtml(container, sweetHTML);
        var targetElement = getTarget(params.target);
        targetElement.appendChild(container);
        setupAccessibility(params);
        setupRTL(targetElement);
        addInputChangeListeners();
    };
    var parseHtmlToContainer = function parseHtmlToContainer(param, target) {
        // DOM element
        if (param instanceof HTMLElement) target.appendChild(param); // Object
        else if (_typeof(param) === 'object') handleObject(param, target); // Plain string
        else if (param) setInnerHtml(target, param);
    };
    var handleObject = function handleObject(param, target) {
        // JQuery element(s)
        if (param.jquery) handleJqueryElem(target, param); // For other objects use their string representation
        else setInnerHtml(target, param.toString());
    };
    var handleJqueryElem = function handleJqueryElem(target, elem) {
        target.textContent = '';
        if (0 in elem) for(var i = 0; (i in elem); i++)target.appendChild(elem[i].cloneNode(true));
        else target.appendChild(elem.cloneNode(true));
    };
    var animationEndEvent = function() {
        // Prevent run in Node env
        /* istanbul ignore if */ if (isNodeEnv()) return false;
        var testEl = document.createElement('div');
        var transEndEventNames = {
            WebkitAnimation: 'webkitAnimationEnd',
            OAnimation: 'oAnimationEnd oanimationend',
            animation: 'animationend'
        };
        for(var i in transEndEventNames){
            if (Object.prototype.hasOwnProperty.call(transEndEventNames, i) && typeof testEl.style[i] !== 'undefined') return transEndEventNames[i];
        }
        return false;
    }();
    // https://github.com/twbs/bootstrap/blob/master/js/src/modal.js
    var measureScrollbar = function measureScrollbar() {
        var scrollDiv = document.createElement('div');
        scrollDiv.className = swalClasses['scrollbar-measure'];
        document.body.appendChild(scrollDiv);
        var scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
        document.body.removeChild(scrollDiv);
        return scrollbarWidth;
    };
    var renderActions = function renderActions(instance, params) {
        var actions = getActions();
        var loader = getLoader();
        var confirmButton = getConfirmButton();
        var denyButton = getDenyButton();
        var cancelButton = getCancelButton(); // Actions (buttons) wrapper
        if (!params.showConfirmButton && !params.showDenyButton && !params.showCancelButton) hide(actions);
         // Custom class
        applyCustomClass(actions, params, 'actions'); // Render buttons
        renderButton(confirmButton, 'confirm', params);
        renderButton(denyButton, 'deny', params);
        renderButton(cancelButton, 'cancel', params);
        handleButtonsStyling(confirmButton, denyButton, cancelButton, params);
        if (params.reverseButtons) {
            actions.insertBefore(cancelButton, loader);
            actions.insertBefore(denyButton, loader);
            actions.insertBefore(confirmButton, loader);
        } // Loader
        setInnerHtml(loader, params.loaderHtml);
        applyCustomClass(loader, params, 'loader');
    };
    function handleButtonsStyling(confirmButton, denyButton, cancelButton, params) {
        if (!params.buttonsStyling) return removeClass([
            confirmButton,
            denyButton,
            cancelButton
        ], swalClasses.styled);
        addClass([
            confirmButton,
            denyButton,
            cancelButton
        ], swalClasses.styled); // Buttons background colors
        if (params.confirmButtonColor) confirmButton.style.backgroundColor = params.confirmButtonColor;
        if (params.denyButtonColor) denyButton.style.backgroundColor = params.denyButtonColor;
        if (params.cancelButtonColor) cancelButton.style.backgroundColor = params.cancelButtonColor;
    }
    function renderButton(button, buttonType, params) {
        toggle(button, params["show".concat(capitalizeFirstLetter(buttonType), "Button")], 'inline-block');
        setInnerHtml(button, params["".concat(buttonType, "ButtonText")]); // Set caption text
        button.setAttribute('aria-label', params["".concat(buttonType, "ButtonAriaLabel")]); // ARIA label
        // Add buttons custom classes
        button.className = swalClasses[buttonType];
        applyCustomClass(button, params, "".concat(buttonType, "Button"));
        addClass(button, params["".concat(buttonType, "ButtonClass")]);
    }
    function handleBackdropParam(container, backdrop) {
        if (typeof backdrop === 'string') container.style.background = backdrop;
        else if (!backdrop) addClass([
            document.documentElement,
            document.body
        ], swalClasses['no-backdrop']);
    }
    function handlePositionParam(container, position) {
        if (position in swalClasses) addClass(container, swalClasses[position]);
        else {
            warn('The "position" parameter is not valid, defaulting to "center"');
            addClass(container, swalClasses.center);
        }
    }
    function handleGrowParam(container, grow) {
        if (grow && typeof grow === 'string') {
            var growClass = "grow-".concat(grow);
            if (growClass in swalClasses) addClass(container, swalClasses[growClass]);
        }
    }
    var renderContainer = function renderContainer(instance, params) {
        var container = getContainer();
        if (!container) return;
        handleBackdropParam(container, params.backdrop);
        if (!params.backdrop && params.allowOutsideClick) warn('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');
        handlePositionParam(container, params.position);
        handleGrowParam(container, params.grow); // Custom class
        applyCustomClass(container, params, 'container'); // Set queue step attribute for getQueueStep() method
        var queueStep = document.body.getAttribute('data-swal2-queue-step');
        if (queueStep) {
            container.setAttribute('data-queue-step', queueStep);
            document.body.removeAttribute('data-swal2-queue-step');
        }
    };
    /**
   * This module containts `WeakMap`s for each effectively-"private  property" that a `Swal` has.
   * For example, to set the private property "foo" of `this` to "bar", you can `privateProps.foo.set(this, 'bar')`
   * This is the approach that Babel will probably take to implement private methods/fields
   *   https://github.com/tc39/proposal-private-methods
   *   https://github.com/babel/babel/pull/7555
   * Once we have the changes from that PR in Babel, and our core class fits reasonable in *one module*
   *   then we can use that language feature.
   */ var privateProps = {
        promise: new WeakMap(),
        innerParams: new WeakMap(),
        domCache: new WeakMap()
    };
    var inputTypes = [
        'input',
        'file',
        'range',
        'select',
        'radio',
        'checkbox',
        'textarea'
    ];
    var renderInput = function renderInput(instance, params) {
        var content = getContent();
        var innerParams = privateProps.innerParams.get(instance);
        var rerender = !innerParams || params.input !== innerParams.input;
        inputTypes.forEach(function(inputType) {
            var inputClass = swalClasses[inputType];
            var inputContainer = getChildByClass(content, inputClass); // set attributes
            setAttributes(inputType, params.inputAttributes); // set class
            inputContainer.className = inputClass;
            if (rerender) hide(inputContainer);
        });
        if (params.input) {
            if (rerender) showInput(params);
             // set custom class
            setCustomClass(params);
        }
    };
    var showInput = function showInput(params) {
        if (!renderInputType[params.input]) return error("Unexpected type of input! Expected \"text\", \"email\", \"password\", \"number\", \"tel\", \"select\", \"radio\", \"checkbox\", \"textarea\", \"file\" or \"url\", got \"".concat(params.input, "\""));
        var inputContainer = getInputContainer(params.input);
        var input = renderInputType[params.input](inputContainer, params);
        show(input); // input autofocus
        setTimeout(function() {
            focusInput(input);
        });
    };
    var removeAttributes = function removeAttributes(input) {
        for(var i = 0; i < input.attributes.length; i++){
            var attrName = input.attributes[i].name;
            if (!([
                'type',
                'value',
                'style'
            ].indexOf(attrName) !== -1)) input.removeAttribute(attrName);
        }
    };
    var setAttributes = function setAttributes(inputType, inputAttributes) {
        var input = getInput(getContent(), inputType);
        if (!input) return;
        removeAttributes(input);
        for(var attr in inputAttributes){
            // Do not set a placeholder for <input type="range">
            // it'll crash Edge, #1298
            if (inputType === 'range' && attr === 'placeholder') continue;
            input.setAttribute(attr, inputAttributes[attr]);
        }
    };
    var setCustomClass = function setCustomClass(params) {
        var inputContainer = getInputContainer(params.input);
        if (params.customClass) addClass(inputContainer, params.customClass.input);
    };
    var setInputPlaceholder = function setInputPlaceholder(input, params) {
        if (!input.placeholder || params.inputPlaceholder) input.placeholder = params.inputPlaceholder;
    };
    var setInputLabel = function setInputLabel(input, prependTo, params) {
        if (params.inputLabel) {
            input.id = swalClasses.input;
            var label = document.createElement('label');
            var labelClass = swalClasses['input-label'];
            label.setAttribute('for', input.id);
            label.className = labelClass;
            addClass(label, params.customClass.inputLabel);
            label.innerText = params.inputLabel;
            prependTo.insertAdjacentElement('beforebegin', label);
        }
    };
    var getInputContainer = function getInputContainer(inputType) {
        var inputClass = swalClasses[inputType] ? swalClasses[inputType] : swalClasses.input;
        return getChildByClass(getContent(), inputClass);
    };
    var renderInputType = {
    };
    renderInputType.text = renderInputType.email = renderInputType.password = renderInputType.number = renderInputType.tel = renderInputType.url = function(input, params) {
        if (typeof params.inputValue === 'string' || typeof params.inputValue === 'number') input.value = params.inputValue;
        else if (!isPromise(params.inputValue)) warn("Unexpected type of inputValue! Expected \"string\", \"number\" or \"Promise\", got \"".concat(_typeof(params.inputValue), "\""));
        setInputLabel(input, input, params);
        setInputPlaceholder(input, params);
        input.type = params.input;
        return input;
    };
    renderInputType.file = function(input, params) {
        setInputLabel(input, input, params);
        setInputPlaceholder(input, params);
        return input;
    };
    renderInputType.range = function(range, params) {
        var rangeInput = range.querySelector('input');
        var rangeOutput = range.querySelector('output');
        rangeInput.value = params.inputValue;
        rangeInput.type = params.input;
        rangeOutput.value = params.inputValue;
        setInputLabel(rangeInput, range, params);
        return range;
    };
    renderInputType.select = function(select, params) {
        select.textContent = '';
        if (params.inputPlaceholder) {
            var placeholder = document.createElement('option');
            setInnerHtml(placeholder, params.inputPlaceholder);
            placeholder.value = '';
            placeholder.disabled = true;
            placeholder.selected = true;
            select.appendChild(placeholder);
        }
        setInputLabel(select, select, params);
        return select;
    };
    renderInputType.radio = function(radio) {
        radio.textContent = '';
        return radio;
    };
    renderInputType.checkbox = function(checkboxContainer, params) {
        var checkbox = getInput(getContent(), 'checkbox');
        checkbox.value = 1;
        checkbox.id = swalClasses.checkbox;
        checkbox.checked = Boolean(params.inputValue);
        var label = checkboxContainer.querySelector('span');
        setInnerHtml(label, params.inputPlaceholder);
        return checkboxContainer;
    };
    renderInputType.textarea = function(textarea, params) {
        textarea.value = params.inputValue;
        setInputPlaceholder(textarea, params);
        setInputLabel(textarea, textarea, params);
        var getPadding = function getPadding(el) {
            return parseInt(window.getComputedStyle(el).paddingLeft) + parseInt(window.getComputedStyle(el).paddingRight);
        };
        if ('MutationObserver' in window) {
            // #1699
            var initialPopupWidth = parseInt(window.getComputedStyle(getPopup()).width);
            var outputsize = function outputsize() {
                var contentWidth = textarea.offsetWidth + getPadding(getPopup()) + getPadding(getContent());
                if (contentWidth > initialPopupWidth) getPopup().style.width = "".concat(contentWidth, "px");
                else getPopup().style.width = null;
            };
            new MutationObserver(outputsize).observe(textarea, {
                attributes: true,
                attributeFilter: [
                    'style'
                ]
            });
        }
        return textarea;
    };
    var renderContent = function renderContent(instance, params) {
        var htmlContainer = getHtmlContainer();
        applyCustomClass(htmlContainer, params, 'htmlContainer'); // Content as HTML
        if (params.html) {
            parseHtmlToContainer(params.html, htmlContainer);
            show(htmlContainer, 'block'); // Content as plain text
        } else if (params.text) {
            htmlContainer.textContent = params.text;
            show(htmlContainer, 'block'); // No content
        } else hide(htmlContainer);
        renderInput(instance, params); // Custom class
        applyCustomClass(getContent(), params, 'content');
    };
    var renderFooter = function renderFooter(instance, params) {
        var footer = getFooter();
        toggle(footer, params.footer);
        if (params.footer) parseHtmlToContainer(params.footer, footer);
         // Custom class
        applyCustomClass(footer, params, 'footer');
    };
    var renderCloseButton = function renderCloseButton(instance, params) {
        var closeButton = getCloseButton();
        setInnerHtml(closeButton, params.closeButtonHtml); // Custom class
        applyCustomClass(closeButton, params, 'closeButton');
        toggle(closeButton, params.showCloseButton);
        closeButton.setAttribute('aria-label', params.closeButtonAriaLabel);
    };
    var renderIcon = function renderIcon(instance, params) {
        var innerParams = privateProps.innerParams.get(instance);
        var icon = getIcon(); // if the given icon already rendered, apply the styling without re-rendering the icon
        if (innerParams && params.icon === innerParams.icon) {
            // Custom or default content
            setContent(icon, params);
            applyStyles(icon, params);
            return;
        }
        if (!params.icon && !params.iconHtml) return hide(icon);
        if (params.icon && Object.keys(iconTypes).indexOf(params.icon) === -1) {
            error("Unknown icon! Expected \"success\", \"error\", \"warning\", \"info\" or \"question\", got \"".concat(params.icon, "\""));
            return hide(icon);
        }
        show(icon); // Custom or default content
        setContent(icon, params);
        applyStyles(icon, params); // Animate icon
        addClass(icon, params.showClass.icon);
    };
    var applyStyles = function applyStyles(icon, params) {
        for(var iconType in iconTypes)if (params.icon !== iconType) removeClass(icon, iconTypes[iconType]);
        addClass(icon, iconTypes[params.icon]); // Icon color
        setColor(icon, params); // Success icon background color
        adjustSuccessIconBackgoundColor(); // Custom class
        applyCustomClass(icon, params, 'icon');
    }; // Adjust success icon background color to match the popup background color
    var adjustSuccessIconBackgoundColor = function adjustSuccessIconBackgoundColor() {
        var popup = getPopup();
        var popupBackgroundColor = window.getComputedStyle(popup).getPropertyValue('background-color');
        var successIconParts = popup.querySelectorAll('[class^=swal2-success-circular-line], .swal2-success-fix');
        for(var i = 0; i < successIconParts.length; i++)successIconParts[i].style.backgroundColor = popupBackgroundColor;
    };
    var setContent = function setContent(icon, params) {
        icon.textContent = '';
        if (params.iconHtml) setInnerHtml(icon, iconContent(params.iconHtml));
        else if (params.icon === 'success') setInnerHtml(icon, "\n      <div class=\"swal2-success-circular-line-left\"></div>\n      <span class=\"swal2-success-line-tip\"></span> <span class=\"swal2-success-line-long\"></span>\n      <div class=\"swal2-success-ring\"></div> <div class=\"swal2-success-fix\"></div>\n      <div class=\"swal2-success-circular-line-right\"></div>\n    ");
        else if (params.icon === 'error') setInnerHtml(icon, "\n      <span class=\"swal2-x-mark\">\n        <span class=\"swal2-x-mark-line-left\"></span>\n        <span class=\"swal2-x-mark-line-right\"></span>\n      </span>\n    ");
        else {
            var defaultIconHtml = {
                question: '?',
                warning: '!',
                info: 'i'
            };
            setInnerHtml(icon, iconContent(defaultIconHtml[params.icon]));
        }
    };
    var setColor = function setColor(icon, params) {
        if (!params.iconColor) return;
        icon.style.color = params.iconColor;
        icon.style.borderColor = params.iconColor;
        for(var _i = 0, _arr = [
            '.swal2-success-line-tip',
            '.swal2-success-line-long',
            '.swal2-x-mark-line-left',
            '.swal2-x-mark-line-right'
        ]; _i < _arr.length; _i++){
            var sel = _arr[_i];
            setStyle(icon, sel, 'backgroundColor', params.iconColor);
        }
        setStyle(icon, '.swal2-success-ring', 'borderColor', params.iconColor);
    };
    var iconContent = function iconContent(content) {
        return "<div class=\"".concat(swalClasses['icon-content'], "\">").concat(content, "</div>");
    };
    var renderImage = function renderImage(instance, params) {
        var image = getImage();
        if (!params.imageUrl) return hide(image);
        show(image, ''); // Src, alt
        image.setAttribute('src', params.imageUrl);
        image.setAttribute('alt', params.imageAlt); // Width, height
        applyNumericalStyle(image, 'width', params.imageWidth);
        applyNumericalStyle(image, 'height', params.imageHeight); // Class
        image.className = swalClasses.image;
        applyCustomClass(image, params, 'image');
    };
    var currentSteps = [];
    /*
   * Global function for chaining sweetAlert popups
   */ var queue = function queue(steps) {
        warnAboutDeprecation('Swal.queue()', "async/await");
        var Swal = this;
        currentSteps = steps;
        var resetAndResolve = function resetAndResolve(resolve, value) {
            currentSteps = [];
            resolve(value);
        };
        var queueResult = [];
        return new Promise(function(resolve) {
            (function step(i, callback) {
                if (i < currentSteps.length) {
                    document.body.setAttribute('data-swal2-queue-step', i);
                    Swal.fire(currentSteps[i]).then(function(result) {
                        if (typeof result.value !== 'undefined') {
                            queueResult.push(result.value);
                            step(i + 1, callback);
                        } else resetAndResolve(resolve, {
                            dismiss: result.dismiss
                        });
                    });
                } else resetAndResolve(resolve, {
                    value: queueResult
                });
            })(0);
        });
    };
    /*
   * Global function for getting the index of current popup in queue
   */ var getQueueStep = function getQueueStep() {
        return getContainer() && getContainer().getAttribute('data-queue-step');
    };
    /*
   * Global function for inserting a popup to the queue
   */ var insertQueueStep = function insertQueueStep(step, index) {
        if (index && index < currentSteps.length) return currentSteps.splice(index, 0, step);
        return currentSteps.push(step);
    };
    /*
   * Global function for deleting a popup from the queue
   */ var deleteQueueStep = function deleteQueueStep(index) {
        if (typeof currentSteps[index] !== 'undefined') currentSteps.splice(index, 1);
    };
    var createStepElement = function createStepElement(step) {
        var stepEl = document.createElement('li');
        addClass(stepEl, swalClasses['progress-step']);
        setInnerHtml(stepEl, step);
        return stepEl;
    };
    var createLineElement = function createLineElement(params) {
        var lineEl = document.createElement('li');
        addClass(lineEl, swalClasses['progress-step-line']);
        if (params.progressStepsDistance) lineEl.style.width = params.progressStepsDistance;
        return lineEl;
    };
    var renderProgressSteps = function renderProgressSteps(instance, params) {
        var progressStepsContainer = getProgressSteps();
        if (!params.progressSteps || params.progressSteps.length === 0) return hide(progressStepsContainer);
        show(progressStepsContainer);
        progressStepsContainer.textContent = '';
        var currentProgressStep = parseInt(params.currentProgressStep === undefined ? getQueueStep() : params.currentProgressStep);
        if (currentProgressStep >= params.progressSteps.length) warn("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)");
        params.progressSteps.forEach(function(step, index) {
            var stepEl = createStepElement(step);
            progressStepsContainer.appendChild(stepEl);
            if (index === currentProgressStep) addClass(stepEl, swalClasses['active-progress-step']);
            if (index !== params.progressSteps.length - 1) {
                var lineEl = createLineElement(params);
                progressStepsContainer.appendChild(lineEl);
            }
        });
    };
    var renderTitle = function renderTitle(instance, params) {
        var title = getTitle();
        toggle(title, params.title || params.titleText, 'block');
        if (params.title) parseHtmlToContainer(params.title, title);
        if (params.titleText) title.innerText = params.titleText;
         // Custom class
        applyCustomClass(title, params, 'title');
    };
    var renderHeader = function renderHeader(instance, params) {
        var header = getHeader(); // Custom class
        applyCustomClass(header, params, 'header'); // Progress steps
        renderProgressSteps(instance, params); // Icon
        renderIcon(instance, params); // Image
        renderImage(instance, params); // Title
        renderTitle(instance, params); // Close button
        renderCloseButton(instance, params);
    };
    var renderPopup = function renderPopup(instance, params) {
        var container = getContainer();
        var popup = getPopup(); // Width
        if (params.toast) {
            // #2170
            applyNumericalStyle(container, 'width', params.width);
            popup.style.width = '100%';
        } else applyNumericalStyle(popup, 'width', params.width);
         // Padding
        applyNumericalStyle(popup, 'padding', params.padding); // Background
        if (params.background) popup.style.background = params.background;
        hide(getValidationMessage()); // Classes
        addClasses(popup, params);
    };
    var addClasses = function addClasses(popup, params) {
        // Default Class + showClass when updating Swal.update({})
        popup.className = "".concat(swalClasses.popup, " ").concat(isVisible(popup) ? params.showClass.popup : '');
        if (params.toast) {
            addClass([
                document.documentElement,
                document.body
            ], swalClasses['toast-shown']);
            addClass(popup, swalClasses.toast);
        } else addClass(popup, swalClasses.modal);
         // Custom class
        applyCustomClass(popup, params, 'popup');
        if (typeof params.customClass === 'string') addClass(popup, params.customClass);
         // Icon class (#1842)
        if (params.icon) addClass(popup, swalClasses["icon-".concat(params.icon)]);
    };
    var render = function render(instance, params) {
        renderPopup(instance, params);
        renderContainer(instance, params);
        renderHeader(instance, params);
        renderContent(instance, params);
        renderActions(instance, params);
        renderFooter(instance, params);
        if (typeof params.didRender === 'function') params.didRender(getPopup());
        else if (typeof params.onRender === 'function') params.onRender(getPopup()); // @deprecated
    };
    /*
   * Global function to determine if SweetAlert2 popup is shown
   */ var isVisible$1 = function isVisible$$1() {
        return isVisible(getPopup());
    };
    /*
   * Global function to click 'Confirm' button
   */ var clickConfirm = function clickConfirm() {
        return getConfirmButton() && getConfirmButton().click();
    };
    /*
   * Global function to click 'Deny' button
   */ var clickDeny = function clickDeny() {
        return getDenyButton() && getDenyButton().click();
    };
    /*
   * Global function to click 'Cancel' button
   */ var clickCancel = function clickCancel() {
        return getCancelButton() && getCancelButton().click();
    };
    function fire() {
        var Swal = this;
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
        return _construct(Swal, args);
    }
    /**
   * Returns an extended version of `Swal` containing `params` as defaults.
   * Useful for reusing Swal configuration.
   *
   * For example:
   *
   * Before:
   * const textPromptOptions = { input: 'text', showCancelButton: true }
   * const {value: firstName} = await Swal.fire({ ...textPromptOptions, title: 'What is your first name?' })
   * const {value: lastName} = await Swal.fire({ ...textPromptOptions, title: 'What is your last name?' })
   *
   * After:
   * const TextPrompt = Swal.mixin({ input: 'text', showCancelButton: true })
   * const {value: firstName} = await TextPrompt('What is your first name?')
   * const {value: lastName} = await TextPrompt('What is your last name?')
   *
   * @param mixinParams
   */ function mixin(mixinParams) {
        var MixinSwal = /*#__PURE__*/ function(_this) {
            _inherits(MixinSwal, _this);
            var _super = _createSuper(MixinSwal);
            function MixinSwal() {
                _classCallCheck(this, MixinSwal);
                return _super.apply(this, arguments);
            }
            _createClass(MixinSwal, [
                {
                    key: "_main",
                    value: function _main(params, priorityMixinParams) {
                        return _get(_getPrototypeOf(MixinSwal.prototype), "_main", this).call(this, params, _extends({
                        }, mixinParams, priorityMixinParams));
                    }
                }
            ]);
            return MixinSwal;
        }(this);
        return MixinSwal;
    }
    /**
   * Shows loader (spinner), this is useful with AJAX requests.
   * By default the loader be shown instead of the "Confirm" button.
   */ var showLoading = function showLoading(buttonToReplace) {
        var popup = getPopup();
        if (!popup) Swal.fire();
        popup = getPopup();
        var actions = getActions();
        var loader = getLoader();
        if (!buttonToReplace && isVisible(getConfirmButton())) buttonToReplace = getConfirmButton();
        show(actions);
        if (buttonToReplace) {
            hide(buttonToReplace);
            loader.setAttribute('data-button-to-replace', buttonToReplace.className);
        }
        loader.parentNode.insertBefore(loader, buttonToReplace);
        addClass([
            popup,
            actions
        ], swalClasses.loading);
        show(loader);
        popup.setAttribute('data-loading', true);
        popup.setAttribute('aria-busy', true);
        popup.focus();
    };
    var RESTORE_FOCUS_TIMEOUT = 100;
    var globalState = {
    };
    var focusPreviousActiveElement = function focusPreviousActiveElement() {
        if (globalState.previousActiveElement && globalState.previousActiveElement.focus) {
            globalState.previousActiveElement.focus();
            globalState.previousActiveElement = null;
        } else if (document.body) document.body.focus();
    }; // Restore previous active (focused) element
    var restoreActiveElement = function restoreActiveElement(returnFocus) {
        return new Promise(function(resolve) {
            if (!returnFocus) return resolve();
            var x = window.scrollX;
            var y = window.scrollY;
            globalState.restoreFocusTimeout = setTimeout(function() {
                focusPreviousActiveElement();
                resolve();
            }, RESTORE_FOCUS_TIMEOUT); // issues/900
            if (typeof x !== 'undefined' && typeof y !== 'undefined') // IE doesn't have scrollX/scrollY support
            window.scrollTo(x, y);
        });
    };
    /**
   * If `timer` parameter is set, returns number of milliseconds of timer remained.
   * Otherwise, returns undefined.
   */ var getTimerLeft = function getTimerLeft() {
        return globalState.timeout && globalState.timeout.getTimerLeft();
    };
    /**
   * Stop timer. Returns number of milliseconds of timer remained.
   * If `timer` parameter isn't set, returns undefined.
   */ var stopTimer = function stopTimer() {
        if (globalState.timeout) {
            stopTimerProgressBar();
            return globalState.timeout.stop();
        }
    };
    /**
   * Resume timer. Returns number of milliseconds of timer remained.
   * If `timer` parameter isn't set, returns undefined.
   */ var resumeTimer = function resumeTimer() {
        if (globalState.timeout) {
            var remaining = globalState.timeout.start();
            animateTimerProgressBar(remaining);
            return remaining;
        }
    };
    /**
   * Resume timer. Returns number of milliseconds of timer remained.
   * If `timer` parameter isn't set, returns undefined.
   */ var toggleTimer = function toggleTimer() {
        var timer = globalState.timeout;
        return timer && (timer.running ? stopTimer() : resumeTimer());
    };
    /**
   * Increase timer. Returns number of milliseconds of an updated timer.
   * If `timer` parameter isn't set, returns undefined.
   */ var increaseTimer = function increaseTimer(n) {
        if (globalState.timeout) {
            var remaining = globalState.timeout.increase(n);
            animateTimerProgressBar(remaining, true);
            return remaining;
        }
    };
    /**
   * Check if timer is running. Returns true if timer is running
   * or false if timer is paused or stopped.
   * If `timer` parameter isn't set, returns undefined
   */ var isTimerRunning = function isTimerRunning() {
        return globalState.timeout && globalState.timeout.isRunning();
    };
    var bodyClickListenerAdded = false;
    var clickHandlers = {
    };
    function bindClickHandler() {
        var attr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'data-swal-template';
        clickHandlers[attr] = this;
        if (!bodyClickListenerAdded) {
            document.body.addEventListener('click', bodyClickListener);
            bodyClickListenerAdded = true;
        }
    }
    var bodyClickListener = function bodyClickListener(event) {
        // 1. using .parentNode instead of event.path because of better support by old browsers https://stackoverflow.com/a/39245638
        // 2. using .parentNode instead of .parentElement because of IE11 + SVG https://stackoverflow.com/a/36270354
        for(var el = event.target; el && el !== document; el = el.parentNode)for(var attr in clickHandlers){
            var template = el.getAttribute(attr);
            if (template) {
                clickHandlers[attr].fire({
                    template: template
                });
                return;
            }
        }
    };
    var defaultParams = {
        title: '',
        titleText: '',
        text: '',
        html: '',
        footer: '',
        icon: undefined,
        iconColor: undefined,
        iconHtml: undefined,
        template: undefined,
        toast: false,
        animation: true,
        showClass: {
            popup: 'swal2-show',
            backdrop: 'swal2-backdrop-show',
            icon: 'swal2-icon-show'
        },
        hideClass: {
            popup: 'swal2-hide',
            backdrop: 'swal2-backdrop-hide',
            icon: 'swal2-icon-hide'
        },
        customClass: {
        },
        target: 'body',
        backdrop: true,
        heightAuto: true,
        allowOutsideClick: true,
        allowEscapeKey: true,
        allowEnterKey: true,
        stopKeydownPropagation: true,
        keydownListenerCapture: false,
        showConfirmButton: true,
        showDenyButton: false,
        showCancelButton: false,
        preConfirm: undefined,
        preDeny: undefined,
        confirmButtonText: 'OK',
        confirmButtonAriaLabel: '',
        confirmButtonColor: undefined,
        denyButtonText: 'No',
        denyButtonAriaLabel: '',
        denyButtonColor: undefined,
        cancelButtonText: 'Cancel',
        cancelButtonAriaLabel: '',
        cancelButtonColor: undefined,
        buttonsStyling: true,
        reverseButtons: false,
        focusConfirm: true,
        focusDeny: false,
        focusCancel: false,
        returnFocus: true,
        showCloseButton: false,
        closeButtonHtml: '&times;',
        closeButtonAriaLabel: 'Close this dialog',
        loaderHtml: '',
        showLoaderOnConfirm: false,
        showLoaderOnDeny: false,
        imageUrl: undefined,
        imageWidth: undefined,
        imageHeight: undefined,
        imageAlt: '',
        timer: undefined,
        timerProgressBar: false,
        width: undefined,
        padding: undefined,
        background: undefined,
        input: undefined,
        inputPlaceholder: '',
        inputLabel: '',
        inputValue: '',
        inputOptions: {
        },
        inputAutoTrim: true,
        inputAttributes: {
        },
        inputValidator: undefined,
        returnInputValueOnDeny: false,
        validationMessage: undefined,
        grow: false,
        position: 'center',
        progressSteps: [],
        currentProgressStep: undefined,
        progressStepsDistance: undefined,
        onBeforeOpen: undefined,
        onOpen: undefined,
        willOpen: undefined,
        didOpen: undefined,
        onRender: undefined,
        didRender: undefined,
        onClose: undefined,
        onAfterClose: undefined,
        willClose: undefined,
        didClose: undefined,
        onDestroy: undefined,
        didDestroy: undefined,
        scrollbarPadding: true
    };
    var updatableParams = [
        'allowEscapeKey',
        'allowOutsideClick',
        'background',
        'buttonsStyling',
        'cancelButtonAriaLabel',
        'cancelButtonColor',
        'cancelButtonText',
        'closeButtonAriaLabel',
        'closeButtonHtml',
        'confirmButtonAriaLabel',
        'confirmButtonColor',
        'confirmButtonText',
        'currentProgressStep',
        'customClass',
        'denyButtonAriaLabel',
        'denyButtonColor',
        'denyButtonText',
        'didClose',
        'didDestroy',
        'footer',
        'hideClass',
        'html',
        'icon',
        'iconColor',
        'iconHtml',
        'imageAlt',
        'imageHeight',
        'imageUrl',
        'imageWidth',
        'onAfterClose',
        'onClose',
        'onDestroy',
        'progressSteps',
        'returnFocus',
        'reverseButtons',
        'showCancelButton',
        'showCloseButton',
        'showConfirmButton',
        'showDenyButton',
        'text',
        'title',
        'titleText',
        'willClose'
    ];
    var deprecatedParams = {
        animation: 'showClass" and "hideClass',
        onBeforeOpen: 'willOpen',
        onOpen: 'didOpen',
        onRender: 'didRender',
        onClose: 'willClose',
        onAfterClose: 'didClose',
        onDestroy: 'didDestroy'
    };
    var toastIncompatibleParams = [
        'allowOutsideClick',
        'allowEnterKey',
        'backdrop',
        'focusConfirm',
        'focusDeny',
        'focusCancel',
        'returnFocus',
        'heightAuto',
        'keydownListenerCapture'
    ];
    /**
   * Is valid parameter
   * @param {String} paramName
   */ var isValidParameter = function isValidParameter(paramName) {
        return Object.prototype.hasOwnProperty.call(defaultParams, paramName);
    };
    /**
   * Is valid parameter for Swal.update() method
   * @param {String} paramName
   */ var isUpdatableParameter = function isUpdatableParameter(paramName) {
        return updatableParams.indexOf(paramName) !== -1;
    };
    /**
   * Is deprecated parameter
   * @param {String} paramName
   */ var isDeprecatedParameter = function isDeprecatedParameter(paramName) {
        return deprecatedParams[paramName];
    };
    var checkIfParamIsValid = function checkIfParamIsValid(param) {
        if (!isValidParameter(param)) warn("Unknown parameter \"".concat(param, "\""));
    };
    var checkIfToastParamIsValid = function checkIfToastParamIsValid(param) {
        if (toastIncompatibleParams.indexOf(param) !== -1) warn("The parameter \"".concat(param, "\" is incompatible with toasts"));
    };
    var checkIfParamIsDeprecated = function checkIfParamIsDeprecated(param) {
        if (isDeprecatedParameter(param)) warnAboutDeprecation(param, isDeprecatedParameter(param));
    };
    /**
   * Show relevant warnings for given params
   *
   * @param params
   */ var showWarningsForParams = function showWarningsForParams(params) {
        for(var param in params){
            checkIfParamIsValid(param);
            if (params.toast) checkIfToastParamIsValid(param);
            checkIfParamIsDeprecated(param);
        }
    };
    var staticMethods = /*#__PURE__*/ Object.freeze({
        isValidParameter: isValidParameter,
        isUpdatableParameter: isUpdatableParameter,
        isDeprecatedParameter: isDeprecatedParameter,
        argsToParams: argsToParams,
        isVisible: isVisible$1,
        clickConfirm: clickConfirm,
        clickDeny: clickDeny,
        clickCancel: clickCancel,
        getContainer: getContainer,
        getPopup: getPopup,
        getTitle: getTitle,
        getContent: getContent,
        getHtmlContainer: getHtmlContainer,
        getImage: getImage,
        getIcon: getIcon,
        getInputLabel: getInputLabel,
        getCloseButton: getCloseButton,
        getActions: getActions,
        getConfirmButton: getConfirmButton,
        getDenyButton: getDenyButton,
        getCancelButton: getCancelButton,
        getLoader: getLoader,
        getHeader: getHeader,
        getFooter: getFooter,
        getTimerProgressBar: getTimerProgressBar,
        getFocusableElements: getFocusableElements,
        getValidationMessage: getValidationMessage,
        isLoading: isLoading,
        fire: fire,
        mixin: mixin,
        queue: queue,
        getQueueStep: getQueueStep,
        insertQueueStep: insertQueueStep,
        deleteQueueStep: deleteQueueStep,
        showLoading: showLoading,
        enableLoading: showLoading,
        getTimerLeft: getTimerLeft,
        stopTimer: stopTimer,
        resumeTimer: resumeTimer,
        toggleTimer: toggleTimer,
        increaseTimer: increaseTimer,
        isTimerRunning: isTimerRunning,
        bindClickHandler: bindClickHandler
    });
    /**
   * Hides loader and shows back the button which was hidden by .showLoading()
   */ function hideLoading() {
        // do nothing if popup is closed
        var innerParams = privateProps.innerParams.get(this);
        if (!innerParams) return;
        var domCache = privateProps.domCache.get(this);
        hide(domCache.loader);
        var buttonToReplace = domCache.popup.getElementsByClassName(domCache.loader.getAttribute('data-button-to-replace'));
        if (buttonToReplace.length) show(buttonToReplace[0], 'inline-block');
        else if (allButtonsAreHidden()) hide(domCache.actions);
        removeClass([
            domCache.popup,
            domCache.actions
        ], swalClasses.loading);
        domCache.popup.removeAttribute('aria-busy');
        domCache.popup.removeAttribute('data-loading');
        domCache.confirmButton.disabled = false;
        domCache.denyButton.disabled = false;
        domCache.cancelButton.disabled = false;
    }
    function getInput$1(instance) {
        var innerParams = privateProps.innerParams.get(instance || this);
        var domCache = privateProps.domCache.get(instance || this);
        if (!domCache) return null;
        return getInput(domCache.content, innerParams.input);
    }
    var fixScrollbar = function fixScrollbar() {
        // for queues, do not do this more than once
        if (states.previousBodyPadding !== null) return;
         // if the body has overflow
        if (document.body.scrollHeight > window.innerHeight) {
            // add padding so the content doesn't shift after removal of scrollbar
            states.previousBodyPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue('padding-right'));
            document.body.style.paddingRight = "".concat(states.previousBodyPadding + measureScrollbar(), "px");
        }
    };
    var undoScrollbar = function undoScrollbar() {
        if (states.previousBodyPadding !== null) {
            document.body.style.paddingRight = "".concat(states.previousBodyPadding, "px");
            states.previousBodyPadding = null;
        }
    };
    /* istanbul ignore file */ var iOSfix = function iOSfix() {
        var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream || navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1;
        if (iOS && !hasClass(document.body, swalClasses.iosfix)) {
            var offset = document.body.scrollTop;
            document.body.style.top = "".concat(offset * -1, "px");
            addClass(document.body, swalClasses.iosfix);
            lockBodyScroll();
            addBottomPaddingForTallPopups(); // #1948
        }
    };
    var addBottomPaddingForTallPopups = function addBottomPaddingForTallPopups() {
        var safari = !navigator.userAgent.match(/(CriOS|FxiOS|EdgiOS|YaBrowser|UCBrowser)/i);
        if (safari) {
            var bottomPanelHeight = 44;
            if (getPopup().scrollHeight > window.innerHeight - bottomPanelHeight) getContainer().style.paddingBottom = "".concat(bottomPanelHeight, "px");
        }
    };
    var lockBodyScroll = function lockBodyScroll() {
        // #1246
        var container = getContainer();
        var preventTouchMove;
        container.ontouchstart = function(e) {
            preventTouchMove = shouldPreventTouchMove(e);
        };
        container.ontouchmove = function(e) {
            if (preventTouchMove) {
                e.preventDefault();
                e.stopPropagation();
            }
        };
    };
    var shouldPreventTouchMove = function shouldPreventTouchMove(event) {
        var target = event.target;
        var container = getContainer();
        if (isStylys(event) || isZoom(event)) return false;
        if (target === container) return true;
        if (!isScrollable(container) && target.tagName !== 'INPUT' && !(isScrollable(getContent()) && getContent().contains(target))) return true;
        return false;
    };
    var isStylys = function isStylys(event) {
        // #1786
        return event.touches && event.touches.length && event.touches[0].touchType === 'stylus';
    };
    var isZoom = function isZoom(event) {
        // #1891
        return event.touches && event.touches.length > 1;
    };
    var undoIOSfix = function undoIOSfix() {
        if (hasClass(document.body, swalClasses.iosfix)) {
            var offset = parseInt(document.body.style.top, 10);
            removeClass(document.body, swalClasses.iosfix);
            document.body.style.top = '';
            document.body.scrollTop = offset * -1;
        }
    };
    /* istanbul ignore file */ var isIE11 = function isIE11() {
        return !!window.MSInputMethodContext && !!document.documentMode;
    }; // Fix IE11 centering sweetalert2/issues/933
    var fixVerticalPositionIE = function fixVerticalPositionIE() {
        var container = getContainer();
        var popup = getPopup();
        container.style.removeProperty('align-items');
        if (popup.offsetTop < 0) container.style.alignItems = 'flex-start';
    };
    var IEfix = function IEfix() {
        if (typeof window !== 'undefined' && isIE11()) {
            fixVerticalPositionIE();
            window.addEventListener('resize', fixVerticalPositionIE);
        }
    };
    var undoIEfix = function undoIEfix() {
        if (typeof window !== 'undefined' && isIE11()) window.removeEventListener('resize', fixVerticalPositionIE);
    };
    // Adding aria-hidden="true" to elements outside of the active modal dialog ensures that
    // elements not within the active modal dialog will not be surfaced if a user opens a screen
    // reader’s list of elements (headings, form controls, landmarks, etc.) in the document.
    var setAriaHidden = function setAriaHidden() {
        var bodyChildren = toArray(document.body.children);
        bodyChildren.forEach(function(el) {
            if (el === getContainer() || contains(el, getContainer())) return;
            if (el.hasAttribute('aria-hidden')) el.setAttribute('data-previous-aria-hidden', el.getAttribute('aria-hidden'));
            el.setAttribute('aria-hidden', 'true');
        });
    };
    var unsetAriaHidden = function unsetAriaHidden() {
        var bodyChildren = toArray(document.body.children);
        bodyChildren.forEach(function(el) {
            if (el.hasAttribute('data-previous-aria-hidden')) {
                el.setAttribute('aria-hidden', el.getAttribute('data-previous-aria-hidden'));
                el.removeAttribute('data-previous-aria-hidden');
            } else el.removeAttribute('aria-hidden');
        });
    };
    /**
   * This module containts `WeakMap`s for each effectively-"private  property" that a `Swal` has.
   * For example, to set the private property "foo" of `this` to "bar", you can `privateProps.foo.set(this, 'bar')`
   * This is the approach that Babel will probably take to implement private methods/fields
   *   https://github.com/tc39/proposal-private-methods
   *   https://github.com/babel/babel/pull/7555
   * Once we have the changes from that PR in Babel, and our core class fits reasonable in *one module*
   *   then we can use that language feature.
   */ var privateMethods = {
        swalPromiseResolve: new WeakMap()
    };
    /*
   * Instance method to close sweetAlert
   */ function removePopupAndResetState(instance, container, returnFocus, didClose) {
        if (isToast()) triggerDidCloseAndDispose(instance, didClose);
        else {
            restoreActiveElement(returnFocus).then(function() {
                return triggerDidCloseAndDispose(instance, didClose);
            });
            globalState.keydownTarget.removeEventListener('keydown', globalState.keydownHandler, {
                capture: globalState.keydownListenerCapture
            });
            globalState.keydownHandlerAdded = false;
        }
        if (container.parentNode && !document.body.getAttribute('data-swal2-queue-step')) container.parentNode.removeChild(container);
        if (isModal()) {
            undoScrollbar();
            undoIOSfix();
            undoIEfix();
            unsetAriaHidden();
        }
        removeBodyClasses();
    }
    function removeBodyClasses() {
        removeClass([
            document.documentElement,
            document.body
        ], [
            swalClasses.shown,
            swalClasses['height-auto'],
            swalClasses['no-backdrop'],
            swalClasses['toast-shown']
        ]);
    }
    function close(resolveValue) {
        var popup = getPopup();
        if (!popup) return;
        resolveValue = prepareResolveValue(resolveValue);
        var innerParams = privateProps.innerParams.get(this);
        if (!innerParams || hasClass(popup, innerParams.hideClass.popup)) return;
        var swalPromiseResolve = privateMethods.swalPromiseResolve.get(this);
        removeClass(popup, innerParams.showClass.popup);
        addClass(popup, innerParams.hideClass.popup);
        var backdrop = getContainer();
        removeClass(backdrop, innerParams.showClass.backdrop);
        addClass(backdrop, innerParams.hideClass.backdrop);
        handlePopupAnimation(this, popup, innerParams); // Resolve Swal promise
        swalPromiseResolve(resolveValue);
    }
    var prepareResolveValue = function prepareResolveValue(resolveValue) {
        // When user calls Swal.close()
        if (typeof resolveValue === 'undefined') return {
            isConfirmed: false,
            isDenied: false,
            isDismissed: true
        };
        return _extends({
            isConfirmed: false,
            isDenied: false,
            isDismissed: false
        }, resolveValue);
    };
    var handlePopupAnimation = function handlePopupAnimation(instance, popup, innerParams) {
        var container = getContainer(); // If animation is supported, animate
        var animationIsSupported = animationEndEvent && hasCssAnimation(popup);
        var onClose = innerParams.onClose, onAfterClose = innerParams.onAfterClose, willClose = innerParams.willClose, didClose = innerParams.didClose;
        runDidClose(popup, willClose, onClose);
        if (animationIsSupported) animatePopup(instance, popup, container, innerParams.returnFocus, didClose || onAfterClose);
        else // Otherwise, remove immediately
        removePopupAndResetState(instance, container, innerParams.returnFocus, didClose || onAfterClose);
    };
    var runDidClose = function runDidClose(popup, willClose, onClose) {
        if (willClose !== null && typeof willClose === 'function') willClose(popup);
        else if (onClose !== null && typeof onClose === 'function') onClose(popup); // @deprecated
    };
    var animatePopup = function animatePopup(instance, popup, container, returnFocus, didClose) {
        globalState.swalCloseEventFinishedCallback = removePopupAndResetState.bind(null, instance, container, returnFocus, didClose);
        popup.addEventListener(animationEndEvent, function(e) {
            if (e.target === popup) {
                globalState.swalCloseEventFinishedCallback();
                delete globalState.swalCloseEventFinishedCallback;
            }
        });
    };
    var triggerDidCloseAndDispose = function triggerDidCloseAndDispose(instance, didClose) {
        setTimeout(function() {
            if (typeof didClose === 'function') didClose();
            instance._destroy();
        });
    };
    function setButtonsDisabled(instance, buttons, disabled) {
        var domCache = privateProps.domCache.get(instance);
        buttons.forEach(function(button) {
            domCache[button].disabled = disabled;
        });
    }
    function setInputDisabled(input, disabled) {
        if (!input) return false;
        if (input.type === 'radio') {
            var radiosContainer = input.parentNode.parentNode;
            var radios = radiosContainer.querySelectorAll('input');
            for(var i = 0; i < radios.length; i++)radios[i].disabled = disabled;
        } else input.disabled = disabled;
    }
    function enableButtons() {
        setButtonsDisabled(this, [
            'confirmButton',
            'denyButton',
            'cancelButton'
        ], false);
    }
    function disableButtons() {
        setButtonsDisabled(this, [
            'confirmButton',
            'denyButton',
            'cancelButton'
        ], true);
    }
    function enableInput() {
        return setInputDisabled(this.getInput(), false);
    }
    function disableInput() {
        return setInputDisabled(this.getInput(), true);
    }
    function showValidationMessage(error) {
        var domCache = privateProps.domCache.get(this);
        var params = privateProps.innerParams.get(this);
        setInnerHtml(domCache.validationMessage, error);
        domCache.validationMessage.className = swalClasses['validation-message'];
        if (params.customClass && params.customClass.validationMessage) addClass(domCache.validationMessage, params.customClass.validationMessage);
        show(domCache.validationMessage);
        var input = this.getInput();
        if (input) {
            input.setAttribute('aria-invalid', true);
            input.setAttribute('aria-describedBy', swalClasses['validation-message']);
            focusInput(input);
            addClass(input, swalClasses.inputerror);
        }
    } // Hide block with validation message
    function resetValidationMessage$1() {
        var domCache = privateProps.domCache.get(this);
        if (domCache.validationMessage) hide(domCache.validationMessage);
        var input = this.getInput();
        if (input) {
            input.removeAttribute('aria-invalid');
            input.removeAttribute('aria-describedBy');
            removeClass(input, swalClasses.inputerror);
        }
    }
    function getProgressSteps$1() {
        var domCache = privateProps.domCache.get(this);
        return domCache.progressSteps;
    }
    var Timer = /*#__PURE__*/ function() {
        function Timer(callback, delay) {
            _classCallCheck(this, Timer);
            this.callback = callback;
            this.remaining = delay;
            this.running = false;
            this.start();
        }
        _createClass(Timer, [
            {
                key: "start",
                value: function start() {
                    if (!this.running) {
                        this.running = true;
                        this.started = new Date();
                        this.id = setTimeout(this.callback, this.remaining);
                    }
                    return this.remaining;
                }
            },
            {
                key: "stop",
                value: function stop() {
                    if (this.running) {
                        this.running = false;
                        clearTimeout(this.id);
                        this.remaining -= new Date() - this.started;
                    }
                    return this.remaining;
                }
            },
            {
                key: "increase",
                value: function increase(n) {
                    var running = this.running;
                    if (running) this.stop();
                    this.remaining += n;
                    if (running) this.start();
                    return this.remaining;
                }
            },
            {
                key: "getTimerLeft",
                value: function getTimerLeft() {
                    if (this.running) {
                        this.stop();
                        this.start();
                    }
                    return this.remaining;
                }
            },
            {
                key: "isRunning",
                value: function isRunning() {
                    return this.running;
                }
            }
        ]);
        return Timer;
    }();
    var defaultInputValidators = {
        email: function email(string, validationMessage) {
            return /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(string) ? Promise.resolve() : Promise.resolve(validationMessage || 'Invalid email address');
        },
        url: function url(string, validationMessage) {
            // taken from https://stackoverflow.com/a/3809435 with a small change from #1306 and #2013
            return /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(string) ? Promise.resolve() : Promise.resolve(validationMessage || 'Invalid URL');
        }
    };
    function setDefaultInputValidators(params) {
        // Use default `inputValidator` for supported input types if not provided
        if (!params.inputValidator) Object.keys(defaultInputValidators).forEach(function(key) {
            if (params.input === key) params.inputValidator = defaultInputValidators[key];
        });
    }
    function validateCustomTargetElement(params) {
        // Determine if the custom target element is valid
        if (!params.target || typeof params.target === 'string' && !document.querySelector(params.target) || typeof params.target !== 'string' && !params.target.appendChild) {
            warn('Target parameter is not valid, defaulting to "body"');
            params.target = 'body';
        }
    }
    /**
   * Set type, text and actions on popup
   *
   * @param params
   * @returns {boolean}
   */ function setParameters(params) {
        setDefaultInputValidators(params); // showLoaderOnConfirm && preConfirm
        if (params.showLoaderOnConfirm && !params.preConfirm) warn("showLoaderOnConfirm is set to true, but preConfirm is not defined.\nshowLoaderOnConfirm should be used together with preConfirm, see usage example:\nhttps://sweetalert2.github.io/#ajax-request");
         // params.animation will be actually used in renderPopup.js
        // but in case when params.animation is a function, we need to call that function
        // before popup (re)initialization, so it'll be possible to check Swal.isVisible()
        // inside the params.animation function
        params.animation = callIfFunction(params.animation);
        validateCustomTargetElement(params); // Replace newlines with <br> in title
        if (typeof params.title === 'string') params.title = params.title.split('\n').join('<br />');
        init(params);
    }
    var swalStringParams = [
        'swal-title',
        'swal-html',
        'swal-footer'
    ];
    var getTemplateParams = function getTemplateParams(params) {
        var template = typeof params.template === 'string' ? document.querySelector(params.template) : params.template;
        if (!template) return {
        };
        var templateContent = template.content || template; // IE11
        showWarningsForElements(templateContent);
        var result = _extends(getSwalParams(templateContent), getSwalButtons(templateContent), getSwalImage(templateContent), getSwalIcon(templateContent), getSwalInput(templateContent), getSwalStringParams(templateContent, swalStringParams));
        return result;
    };
    var getSwalParams = function getSwalParams(templateContent) {
        var result = {
        };
        toArray(templateContent.querySelectorAll('swal-param')).forEach(function(param) {
            showWarningsForAttributes(param, [
                'name',
                'value'
            ]);
            var paramName = param.getAttribute('name');
            var value = param.getAttribute('value');
            if (typeof defaultParams[paramName] === 'boolean' && value === 'false') value = false;
            if (_typeof(defaultParams[paramName]) === 'object') value = JSON.parse(value);
            result[paramName] = value;
        });
        return result;
    };
    var getSwalButtons = function getSwalButtons(templateContent) {
        var result = {
        };
        toArray(templateContent.querySelectorAll('swal-button')).forEach(function(button) {
            showWarningsForAttributes(button, [
                'type',
                'color',
                'aria-label'
            ]);
            var type = button.getAttribute('type');
            result["".concat(type, "ButtonText")] = button.innerHTML;
            result["show".concat(capitalizeFirstLetter(type), "Button")] = true;
            if (button.hasAttribute('color')) result["".concat(type, "ButtonColor")] = button.getAttribute('color');
            if (button.hasAttribute('aria-label')) result["".concat(type, "ButtonAriaLabel")] = button.getAttribute('aria-label');
        });
        return result;
    };
    var getSwalImage = function getSwalImage(templateContent) {
        var result = {
        };
        var image = templateContent.querySelector('swal-image');
        if (image) {
            showWarningsForAttributes(image, [
                'src',
                'width',
                'height',
                'alt'
            ]);
            if (image.hasAttribute('src')) result.imageUrl = image.getAttribute('src');
            if (image.hasAttribute('width')) result.imageWidth = image.getAttribute('width');
            if (image.hasAttribute('height')) result.imageHeight = image.getAttribute('height');
            if (image.hasAttribute('alt')) result.imageAlt = image.getAttribute('alt');
        }
        return result;
    };
    var getSwalIcon = function getSwalIcon(templateContent) {
        var result = {
        };
        var icon = templateContent.querySelector('swal-icon');
        if (icon) {
            showWarningsForAttributes(icon, [
                'type',
                'color'
            ]);
            if (icon.hasAttribute('type')) result.icon = icon.getAttribute('type');
            if (icon.hasAttribute('color')) result.iconColor = icon.getAttribute('color');
            result.iconHtml = icon.innerHTML;
        }
        return result;
    };
    var getSwalInput = function getSwalInput(templateContent) {
        var result = {
        };
        var input = templateContent.querySelector('swal-input');
        if (input) {
            showWarningsForAttributes(input, [
                'type',
                'label',
                'placeholder',
                'value'
            ]);
            result.input = input.getAttribute('type') || 'text';
            if (input.hasAttribute('label')) result.inputLabel = input.getAttribute('label');
            if (input.hasAttribute('placeholder')) result.inputPlaceholder = input.getAttribute('placeholder');
            if (input.hasAttribute('value')) result.inputValue = input.getAttribute('value');
        }
        var inputOptions = templateContent.querySelectorAll('swal-input-option');
        if (inputOptions.length) {
            result.inputOptions = {
            };
            toArray(inputOptions).forEach(function(option) {
                showWarningsForAttributes(option, [
                    'value'
                ]);
                var optionValue = option.getAttribute('value');
                var optionName = option.innerHTML;
                result.inputOptions[optionValue] = optionName;
            });
        }
        return result;
    };
    var getSwalStringParams = function getSwalStringParams(templateContent, paramNames) {
        var result = {
        };
        for(var i in paramNames){
            var paramName = paramNames[i];
            var tag = templateContent.querySelector(paramName);
            if (tag) {
                showWarningsForAttributes(tag, []);
                result[paramName.replace(/^swal-/, '')] = tag.innerHTML.trim();
            }
        }
        return result;
    };
    var showWarningsForElements = function showWarningsForElements(template) {
        var allowedElements = swalStringParams.concat([
            'swal-param',
            'swal-button',
            'swal-image',
            'swal-icon',
            'swal-input',
            'swal-input-option'
        ]);
        toArray(template.querySelectorAll('*')).forEach(function(el) {
            if (el.parentNode !== template) // can't use template.children because of IE11
            return;
            var tagName = el.tagName.toLowerCase();
            if (allowedElements.indexOf(tagName) === -1) warn("Unrecognized element <".concat(tagName, ">"));
        });
    };
    var showWarningsForAttributes = function showWarningsForAttributes(el, allowedAttributes) {
        toArray(el.attributes).forEach(function(attribute) {
            if (allowedAttributes.indexOf(attribute.name) === -1) warn([
                "Unrecognized attribute \"".concat(attribute.name, "\" on <").concat(el.tagName.toLowerCase(), ">."),
                "".concat(allowedAttributes.length ? "Allowed attributes are: ".concat(allowedAttributes.join(', ')) : 'To set the value, use HTML within the element.')
            ]);
        });
    };
    var SHOW_CLASS_TIMEOUT = 10;
    /**
   * Open popup, add necessary classes and styles, fix scrollbar
   *
   * @param params
   */ var openPopup = function openPopup(params) {
        var container = getContainer();
        var popup = getPopup();
        if (typeof params.willOpen === 'function') params.willOpen(popup);
        else if (typeof params.onBeforeOpen === 'function') params.onBeforeOpen(popup); // @deprecated
        var bodyStyles = window.getComputedStyle(document.body);
        var initialBodyOverflow = bodyStyles.overflowY;
        addClasses$1(container, popup, params); // scrolling is 'hidden' until animation is done, after that 'auto'
        setTimeout(function() {
            setScrollingVisibility(container, popup);
        }, SHOW_CLASS_TIMEOUT);
        if (isModal()) {
            fixScrollContainer(container, params.scrollbarPadding, initialBodyOverflow);
            setAriaHidden();
        }
        if (!isToast() && !globalState.previousActiveElement) globalState.previousActiveElement = document.activeElement;
        runDidOpen(popup, params);
        removeClass(container, swalClasses['no-transition']);
    };
    var runDidOpen = function runDidOpen(popup, params) {
        if (typeof params.didOpen === 'function') setTimeout(function() {
            return params.didOpen(popup);
        });
        else if (typeof params.onOpen === 'function') setTimeout(function() {
            return params.onOpen(popup);
        }); // @deprecated
    };
    var swalOpenAnimationFinished = function swalOpenAnimationFinished(event) {
        var popup = getPopup();
        if (event.target !== popup) return;
        var container = getContainer();
        popup.removeEventListener(animationEndEvent, swalOpenAnimationFinished);
        container.style.overflowY = 'auto';
    };
    var setScrollingVisibility = function setScrollingVisibility(container, popup) {
        if (animationEndEvent && hasCssAnimation(popup)) {
            container.style.overflowY = 'hidden';
            popup.addEventListener(animationEndEvent, swalOpenAnimationFinished);
        } else container.style.overflowY = 'auto';
    };
    var fixScrollContainer = function fixScrollContainer(container, scrollbarPadding, initialBodyOverflow) {
        iOSfix();
        IEfix();
        if (scrollbarPadding && initialBodyOverflow !== 'hidden') fixScrollbar();
         // sweetalert2/issues/1247
        setTimeout(function() {
            container.scrollTop = 0;
        });
    };
    var addClasses$1 = function addClasses(container, popup, params) {
        addClass(container, params.showClass.backdrop); // the workaround with setting/unsetting opacity is needed for #2019 and 2059
        popup.style.setProperty('opacity', '0', 'important');
        show(popup);
        setTimeout(function() {
            // Animate popup right after showing it
            addClass(popup, params.showClass.popup); // and remove the opacity workaround
            popup.style.removeProperty('opacity');
        }, SHOW_CLASS_TIMEOUT); // 10ms in order to fix #2062
        addClass([
            document.documentElement,
            document.body
        ], swalClasses.shown);
        if (params.heightAuto && params.backdrop && !params.toast) addClass([
            document.documentElement,
            document.body
        ], swalClasses['height-auto']);
    };
    var handleInputOptionsAndValue = function handleInputOptionsAndValue(instance, params) {
        if (params.input === 'select' || params.input === 'radio') handleInputOptions(instance, params);
        else if ([
            'text',
            'email',
            'number',
            'tel',
            'textarea'
        ].indexOf(params.input) !== -1 && (hasToPromiseFn(params.inputValue) || isPromise(params.inputValue))) handleInputValue(instance, params);
    };
    var getInputValue = function getInputValue(instance, innerParams) {
        var input = instance.getInput();
        if (!input) return null;
        switch(innerParams.input){
            case 'checkbox':
                return getCheckboxValue(input);
            case 'radio':
                return getRadioValue(input);
            case 'file':
                return getFileValue(input);
            default:
                return innerParams.inputAutoTrim ? input.value.trim() : input.value;
        }
    };
    var getCheckboxValue = function getCheckboxValue(input) {
        return input.checked ? 1 : 0;
    };
    var getRadioValue = function getRadioValue(input) {
        return input.checked ? input.value : null;
    };
    var getFileValue = function getFileValue(input) {
        return input.files.length ? input.getAttribute('multiple') !== null ? input.files : input.files[0] : null;
    };
    var handleInputOptions = function handleInputOptions(instance, params) {
        var content = getContent();
        var processInputOptions = function processInputOptions(inputOptions) {
            return populateInputOptions[params.input](content, formatInputOptions(inputOptions), params);
        };
        if (hasToPromiseFn(params.inputOptions) || isPromise(params.inputOptions)) {
            showLoading(getConfirmButton());
            asPromise(params.inputOptions).then(function(inputOptions) {
                instance.hideLoading();
                processInputOptions(inputOptions);
            });
        } else if (_typeof(params.inputOptions) === 'object') processInputOptions(params.inputOptions);
        else error("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(_typeof(params.inputOptions)));
    };
    var handleInputValue = function handleInputValue(instance, params) {
        var input = instance.getInput();
        hide(input);
        asPromise(params.inputValue).then(function(inputValue) {
            input.value = params.input === 'number' ? parseFloat(inputValue) || 0 : "".concat(inputValue);
            show(input);
            input.focus();
            instance.hideLoading();
        })["catch"](function(err) {
            error("Error in inputValue promise: ".concat(err));
            input.value = '';
            show(input);
            input.focus();
            instance.hideLoading();
        });
    };
    var populateInputOptions = {
        select: function select(content, inputOptions, params) {
            var select = getChildByClass(content, swalClasses.select);
            var renderOption = function renderOption(parent, optionLabel, optionValue) {
                var option = document.createElement('option');
                option.value = optionValue;
                setInnerHtml(option, optionLabel);
                option.selected = isSelected(optionValue, params.inputValue);
                parent.appendChild(option);
            };
            inputOptions.forEach(function(inputOption) {
                var optionValue = inputOption[0];
                var optionLabel = inputOption[1]; // <optgroup> spec:
                // https://www.w3.org/TR/html401/interact/forms.html#h-17.6
                // "...all OPTGROUP elements must be specified directly within a SELECT element (i.e., groups may not be nested)..."
                // check whether this is a <optgroup>
                if (Array.isArray(optionLabel)) {
                    // if it is an array, then it is an <optgroup>
                    var optgroup = document.createElement('optgroup');
                    optgroup.label = optionValue;
                    optgroup.disabled = false; // not configurable for now
                    select.appendChild(optgroup);
                    optionLabel.forEach(function(o) {
                        return renderOption(optgroup, o[1], o[0]);
                    });
                } else // case of <option>
                renderOption(select, optionLabel, optionValue);
            });
            select.focus();
        },
        radio: function radio(content, inputOptions, params) {
            var radio = getChildByClass(content, swalClasses.radio);
            inputOptions.forEach(function(inputOption) {
                var radioValue = inputOption[0];
                var radioLabel = inputOption[1];
                var radioInput = document.createElement('input');
                var radioLabelElement = document.createElement('label');
                radioInput.type = 'radio';
                radioInput.name = swalClasses.radio;
                radioInput.value = radioValue;
                if (isSelected(radioValue, params.inputValue)) radioInput.checked = true;
                var label = document.createElement('span');
                setInnerHtml(label, radioLabel);
                label.className = swalClasses.label;
                radioLabelElement.appendChild(radioInput);
                radioLabelElement.appendChild(label);
                radio.appendChild(radioLabelElement);
            });
            var radios = radio.querySelectorAll('input');
            if (radios.length) radios[0].focus();
        }
    };
    /**
   * Converts `inputOptions` into an array of `[value, label]`s
   * @param inputOptions
   */ var formatInputOptions = function formatInputOptions(inputOptions) {
        var result = [];
        if (typeof Map !== 'undefined' && inputOptions instanceof Map) inputOptions.forEach(function(value, key) {
            var valueFormatted = value;
            if (_typeof(valueFormatted) === 'object') // case of <optgroup>
            valueFormatted = formatInputOptions(valueFormatted);
            result.push([
                key,
                valueFormatted
            ]);
        });
        else Object.keys(inputOptions).forEach(function(key) {
            var valueFormatted = inputOptions[key];
            if (_typeof(valueFormatted) === 'object') // case of <optgroup>
            valueFormatted = formatInputOptions(valueFormatted);
            result.push([
                key,
                valueFormatted
            ]);
        });
        return result;
    };
    var isSelected = function isSelected(optionValue, inputValue) {
        return inputValue && inputValue.toString() === optionValue.toString();
    };
    var handleConfirmButtonClick = function handleConfirmButtonClick(instance, innerParams) {
        instance.disableButtons();
        if (innerParams.input) handleConfirmOrDenyWithInput(instance, innerParams, 'confirm');
        else confirm(instance, innerParams, true);
    };
    var handleDenyButtonClick = function handleDenyButtonClick(instance, innerParams) {
        instance.disableButtons();
        if (innerParams.returnInputValueOnDeny) handleConfirmOrDenyWithInput(instance, innerParams, 'deny');
        else deny(instance, innerParams, false);
    };
    var handleCancelButtonClick = function handleCancelButtonClick(instance, dismissWith) {
        instance.disableButtons();
        dismissWith(DismissReason.cancel);
    };
    var handleConfirmOrDenyWithInput = function handleConfirmOrDenyWithInput(instance, innerParams, type) {
        var inputValue = getInputValue(instance, innerParams);
        if (innerParams.inputValidator) handleInputValidator(instance, innerParams, inputValue);
        else if (!instance.getInput().checkValidity()) {
            instance.enableButtons();
            instance.showValidationMessage(innerParams.validationMessage);
        } else if (type === 'deny') deny(instance, innerParams, inputValue);
        else confirm(instance, innerParams, inputValue);
    };
    var handleInputValidator = function handleInputValidator(instance, innerParams, inputValue) {
        instance.disableInput();
        var validationPromise = Promise.resolve().then(function() {
            return asPromise(innerParams.inputValidator(inputValue, innerParams.validationMessage));
        });
        validationPromise.then(function(validationMessage) {
            instance.enableButtons();
            instance.enableInput();
            if (validationMessage) instance.showValidationMessage(validationMessage);
            else confirm(instance, innerParams, inputValue);
        });
    };
    var deny = function deny(instance, innerParams, value) {
        if (innerParams.showLoaderOnDeny) showLoading(getDenyButton());
        if (innerParams.preDeny) {
            var preDenyPromise = Promise.resolve().then(function() {
                return asPromise(innerParams.preDeny(value, innerParams.validationMessage));
            });
            preDenyPromise.then(function(preDenyValue) {
                if (preDenyValue === false) instance.hideLoading();
                else instance.closePopup({
                    isDenied: true,
                    value: typeof preDenyValue === 'undefined' ? value : preDenyValue
                });
            });
        } else instance.closePopup({
            isDenied: true,
            value: value
        });
    };
    var succeedWith = function succeedWith(instance, value) {
        instance.closePopup({
            isConfirmed: true,
            value: value
        });
    };
    var confirm = function confirm(instance, innerParams, value) {
        if (innerParams.showLoaderOnConfirm) showLoading(); // TODO: make showLoading an *instance* method
        if (innerParams.preConfirm) {
            instance.resetValidationMessage();
            var preConfirmPromise = Promise.resolve().then(function() {
                return asPromise(innerParams.preConfirm(value, innerParams.validationMessage));
            });
            preConfirmPromise.then(function(preConfirmValue) {
                if (isVisible(getValidationMessage()) || preConfirmValue === false) instance.hideLoading();
                else succeedWith(instance, typeof preConfirmValue === 'undefined' ? value : preConfirmValue);
            });
        } else succeedWith(instance, value);
    };
    var addKeydownHandler = function addKeydownHandler(instance, globalState, innerParams, dismissWith) {
        if (globalState.keydownTarget && globalState.keydownHandlerAdded) {
            globalState.keydownTarget.removeEventListener('keydown', globalState.keydownHandler, {
                capture: globalState.keydownListenerCapture
            });
            globalState.keydownHandlerAdded = false;
        }
        if (!innerParams.toast) {
            globalState.keydownHandler = function(e) {
                return keydownHandler(instance, e, dismissWith);
            };
            globalState.keydownTarget = innerParams.keydownListenerCapture ? window : getPopup();
            globalState.keydownListenerCapture = innerParams.keydownListenerCapture;
            globalState.keydownTarget.addEventListener('keydown', globalState.keydownHandler, {
                capture: globalState.keydownListenerCapture
            });
            globalState.keydownHandlerAdded = true;
        }
    }; // Focus handling
    var setFocus = function setFocus(innerParams, index, increment) {
        var focusableElements = getFocusableElements(); // search for visible elements and select the next possible match
        if (focusableElements.length) {
            index = index + increment; // rollover to first item
            if (index === focusableElements.length) index = 0; // go to last item
            else if (index === -1) index = focusableElements.length - 1;
            return focusableElements[index].focus();
        } // no visible focusable elements, focus the popup
        getPopup().focus();
    };
    var arrowKeysNextButton = [
        'ArrowRight',
        'ArrowDown',
        'Right',
        'Down' // IE11
    ];
    var arrowKeysPreviousButton = [
        'ArrowLeft',
        'ArrowUp',
        'Left',
        'Up' // IE11
    ];
    var escKeys = [
        'Escape',
        'Esc' // IE11
    ];
    var keydownHandler = function keydownHandler(instance, e, dismissWith) {
        var innerParams = privateProps.innerParams.get(instance);
        if (!innerParams) return; // This instance has already been destroyed
        if (innerParams.stopKeydownPropagation) e.stopPropagation();
         // ENTER
        if (e.key === 'Enter') handleEnter(instance, e, innerParams); // TAB
        else if (e.key === 'Tab') handleTab(e, innerParams); // ARROWS - switch focus between buttons
        else if ([].concat(arrowKeysNextButton, arrowKeysPreviousButton).indexOf(e.key) !== -1) handleArrows(e.key); // ESC
        else if (escKeys.indexOf(e.key) !== -1) handleEsc(e, innerParams, dismissWith);
    };
    var handleEnter = function handleEnter(instance, e, innerParams) {
        // #720 #721
        if (e.isComposing) return;
        if (e.target && instance.getInput() && e.target.outerHTML === instance.getInput().outerHTML) {
            if ([
                'textarea',
                'file'
            ].indexOf(innerParams.input) !== -1) return; // do not submit
            clickConfirm();
            e.preventDefault();
        }
    };
    var handleTab = function handleTab(e, innerParams) {
        var targetElement = e.target;
        var focusableElements = getFocusableElements();
        var btnIndex = -1;
        for(var i = 0; i < focusableElements.length; i++)if (targetElement === focusableElements[i]) {
            btnIndex = i;
            break;
        }
        if (!e.shiftKey) // Cycle to the next button
        setFocus(innerParams, btnIndex, 1);
        else // Cycle to the prev button
        setFocus(innerParams, btnIndex, -1);
        e.stopPropagation();
        e.preventDefault();
    };
    var handleArrows = function handleArrows(key) {
        var confirmButton = getConfirmButton();
        var denyButton = getDenyButton();
        var cancelButton = getCancelButton();
        if (!([
            confirmButton,
            denyButton,
            cancelButton
        ].indexOf(document.activeElement) !== -1)) return;
        var sibling = arrowKeysNextButton.indexOf(key) !== -1 ? 'nextElementSibling' : 'previousElementSibling';
        var buttonToFocus = document.activeElement[sibling];
        if (buttonToFocus) buttonToFocus.focus();
    };
    var handleEsc = function handleEsc(e, innerParams, dismissWith) {
        if (callIfFunction(innerParams.allowEscapeKey)) {
            e.preventDefault();
            dismissWith(DismissReason.esc);
        }
    };
    var handlePopupClick = function handlePopupClick(instance, domCache, dismissWith) {
        var innerParams = privateProps.innerParams.get(instance);
        if (innerParams.toast) handleToastClick(instance, domCache, dismissWith);
        else {
            // Ignore click events that had mousedown on the popup but mouseup on the container
            // This can happen when the user drags a slider
            handleModalMousedown(domCache); // Ignore click events that had mousedown on the container but mouseup on the popup
            handleContainerMousedown(domCache);
            handleModalClick(instance, domCache, dismissWith);
        }
    };
    var handleToastClick = function handleToastClick(instance, domCache, dismissWith) {
        // Closing toast by internal click
        domCache.popup.onclick = function() {
            var innerParams = privateProps.innerParams.get(instance);
            if (innerParams.showConfirmButton || innerParams.showDenyButton || innerParams.showCancelButton || innerParams.showCloseButton || innerParams.timer || innerParams.input) return;
            dismissWith(DismissReason.close);
        };
    };
    var ignoreOutsideClick = false;
    var handleModalMousedown = function handleModalMousedown(domCache) {
        domCache.popup.onmousedown = function() {
            domCache.container.onmouseup = function(e) {
                domCache.container.onmouseup = undefined; // We only check if the mouseup target is the container because usually it doesn't
                // have any other direct children aside of the popup
                if (e.target === domCache.container) ignoreOutsideClick = true;
            };
        };
    };
    var handleContainerMousedown = function handleContainerMousedown(domCache) {
        domCache.container.onmousedown = function() {
            domCache.popup.onmouseup = function(e) {
                domCache.popup.onmouseup = undefined; // We also need to check if the mouseup target is a child of the popup
                if (e.target === domCache.popup || domCache.popup.contains(e.target)) ignoreOutsideClick = true;
            };
        };
    };
    var handleModalClick = function handleModalClick(instance, domCache, dismissWith) {
        domCache.container.onclick = function(e) {
            var innerParams = privateProps.innerParams.get(instance);
            if (ignoreOutsideClick) {
                ignoreOutsideClick = false;
                return;
            }
            if (e.target === domCache.container && callIfFunction(innerParams.allowOutsideClick)) dismissWith(DismissReason.backdrop);
        };
    };
    function _main(userParams) {
        var mixinParams = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
        };
        showWarningsForParams(_extends({
        }, mixinParams, userParams));
        if (globalState.currentInstance) globalState.currentInstance._destroy();
        globalState.currentInstance = this;
        var innerParams = prepareParams(userParams, mixinParams);
        setParameters(innerParams);
        Object.freeze(innerParams); // clear the previous timer
        if (globalState.timeout) {
            globalState.timeout.stop();
            delete globalState.timeout;
        } // clear the restore focus timeout
        clearTimeout(globalState.restoreFocusTimeout);
        var domCache = populateDomCache(this);
        render(this, innerParams);
        privateProps.innerParams.set(this, innerParams);
        return swalPromise(this, domCache, innerParams);
    }
    var prepareParams = function prepareParams(userParams, mixinParams) {
        var templateParams = getTemplateParams(userParams);
        var params = _extends({
        }, defaultParams, mixinParams, templateParams, userParams); // precedence is described in #2131
        params.showClass = _extends({
        }, defaultParams.showClass, params.showClass);
        params.hideClass = _extends({
        }, defaultParams.hideClass, params.hideClass); // @deprecated
        if (userParams.animation === false) {
            params.showClass = {
                popup: 'swal2-noanimation',
                backdrop: 'swal2-noanimation'
            };
            params.hideClass = {
            };
        }
        return params;
    };
    var swalPromise = function swalPromise(instance, domCache, innerParams) {
        return new Promise(function(resolve) {
            // functions to handle all closings/dismissals
            var dismissWith = function dismissWith(dismiss) {
                instance.closePopup({
                    isDismissed: true,
                    dismiss: dismiss
                });
            };
            privateMethods.swalPromiseResolve.set(instance, resolve);
            domCache.confirmButton.onclick = function() {
                return handleConfirmButtonClick(instance, innerParams);
            };
            domCache.denyButton.onclick = function() {
                return handleDenyButtonClick(instance, innerParams);
            };
            domCache.cancelButton.onclick = function() {
                return handleCancelButtonClick(instance, dismissWith);
            };
            domCache.closeButton.onclick = function() {
                return dismissWith(DismissReason.close);
            };
            handlePopupClick(instance, domCache, dismissWith);
            addKeydownHandler(instance, globalState, innerParams, dismissWith);
            handleInputOptionsAndValue(instance, innerParams);
            openPopup(innerParams);
            setupTimer(globalState, innerParams, dismissWith);
            initFocus(domCache, innerParams); // Scroll container to top on open (#1247, #1946)
            setTimeout(function() {
                domCache.container.scrollTop = 0;
            });
        });
    };
    var populateDomCache = function populateDomCache(instance) {
        var domCache = {
            popup: getPopup(),
            container: getContainer(),
            content: getContent(),
            actions: getActions(),
            confirmButton: getConfirmButton(),
            denyButton: getDenyButton(),
            cancelButton: getCancelButton(),
            loader: getLoader(),
            closeButton: getCloseButton(),
            validationMessage: getValidationMessage(),
            progressSteps: getProgressSteps()
        };
        privateProps.domCache.set(instance, domCache);
        return domCache;
    };
    var setupTimer = function setupTimer(globalState$$1, innerParams, dismissWith) {
        var timerProgressBar = getTimerProgressBar();
        hide(timerProgressBar);
        if (innerParams.timer) {
            globalState$$1.timeout = new Timer(function() {
                dismissWith('timer');
                delete globalState$$1.timeout;
            }, innerParams.timer);
            if (innerParams.timerProgressBar) {
                show(timerProgressBar);
                setTimeout(function() {
                    if (globalState$$1.timeout && globalState$$1.timeout.running) // timer can be already stopped or unset at this point
                    animateTimerProgressBar(innerParams.timer);
                });
            }
        }
    };
    var initFocus = function initFocus(domCache, innerParams) {
        if (innerParams.toast) return;
        if (!callIfFunction(innerParams.allowEnterKey)) return blurActiveElement();
        if (!focusButton(domCache, innerParams)) setFocus(innerParams, -1, 1);
    };
    var focusButton = function focusButton(domCache, innerParams) {
        if (innerParams.focusDeny && isVisible(domCache.denyButton)) {
            domCache.denyButton.focus();
            return true;
        }
        if (innerParams.focusCancel && isVisible(domCache.cancelButton)) {
            domCache.cancelButton.focus();
            return true;
        }
        if (innerParams.focusConfirm && isVisible(domCache.confirmButton)) {
            domCache.confirmButton.focus();
            return true;
        }
        return false;
    };
    var blurActiveElement = function blurActiveElement() {
        if (document.activeElement && typeof document.activeElement.blur === 'function') document.activeElement.blur();
    };
    /**
   * Updates popup parameters.
   */ function update(params) {
        var popup = getPopup();
        var innerParams = privateProps.innerParams.get(this);
        if (!popup || hasClass(popup, innerParams.hideClass.popup)) return warn("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");
        var validUpdatableParams = {
        }; // assign valid params from `params` to `defaults`
        Object.keys(params).forEach(function(param) {
            if (Swal.isUpdatableParameter(param)) validUpdatableParams[param] = params[param];
            else warn("Invalid parameter to update: \"".concat(param, "\". Updatable params are listed here: https://github.com/sweetalert2/sweetalert2/blob/master/src/utils/params.js\n\nIf you think this parameter should be updatable, request it here: https://github.com/sweetalert2/sweetalert2/issues/new?template=02_feature_request.md"));
        });
        var updatedParams = _extends({
        }, innerParams, validUpdatableParams);
        render(this, updatedParams);
        privateProps.innerParams.set(this, updatedParams);
        Object.defineProperties(this, {
            params: {
                value: _extends({
                }, this.params, params),
                writable: false,
                enumerable: true
            }
        });
    }
    function _destroy() {
        var domCache = privateProps.domCache.get(this);
        var innerParams = privateProps.innerParams.get(this);
        if (!innerParams) return; // This instance has already been destroyed
         // Check if there is another Swal closing
        if (domCache.popup && globalState.swalCloseEventFinishedCallback) {
            globalState.swalCloseEventFinishedCallback();
            delete globalState.swalCloseEventFinishedCallback;
        } // Check if there is a swal disposal defer timer
        if (globalState.deferDisposalTimer) {
            clearTimeout(globalState.deferDisposalTimer);
            delete globalState.deferDisposalTimer;
        }
        runDidDestroy(innerParams);
        disposeSwal(this);
    }
    var runDidDestroy = function runDidDestroy(innerParams) {
        if (typeof innerParams.didDestroy === 'function') innerParams.didDestroy();
        else if (typeof innerParams.onDestroy === 'function') innerParams.onDestroy(); // @deprecated
    };
    var disposeSwal = function disposeSwal(instance) {
        // Unset this.params so GC will dispose it (#1569)
        delete instance.params; // Unset globalState props so GC will dispose globalState (#1569)
        delete globalState.keydownHandler;
        delete globalState.keydownTarget; // Unset WeakMaps so GC will be able to dispose them (#1569)
        unsetWeakMaps(privateProps);
        unsetWeakMaps(privateMethods);
    };
    var unsetWeakMaps = function unsetWeakMaps(obj) {
        for(var i in obj)obj[i] = new WeakMap();
    };
    var instanceMethods = /*#__PURE__*/ Object.freeze({
        hideLoading: hideLoading,
        disableLoading: hideLoading,
        getInput: getInput$1,
        close: close,
        closePopup: close,
        closeModal: close,
        closeToast: close,
        enableButtons: enableButtons,
        disableButtons: disableButtons,
        enableInput: enableInput,
        disableInput: disableInput,
        showValidationMessage: showValidationMessage,
        resetValidationMessage: resetValidationMessage$1,
        getProgressSteps: getProgressSteps$1,
        _main: _main,
        update: update,
        _destroy: _destroy
    });
    var currentInstance;
    var SweetAlert = /*#__PURE__*/ function() {
        function SweetAlert() {
            _classCallCheck(this, SweetAlert);
            // Prevent run in Node env
            if (typeof window === 'undefined') return;
             // Check for the existence of Promise
            if (typeof Promise === 'undefined') error('This package requires a Promise library, please include a shim to enable it in this browser (See: https://github.com/sweetalert2/sweetalert2/wiki/Migration-from-SweetAlert-to-SweetAlert2#1-ie-support)');
            currentInstance = this;
            for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
            var outerParams = Object.freeze(this.constructor.argsToParams(args));
            Object.defineProperties(this, {
                params: {
                    value: outerParams,
                    writable: false,
                    enumerable: true,
                    configurable: true
                }
            });
            var promise = this._main(this.params);
            privateProps.promise.set(this, promise);
        } // `catch` cannot be the name of a module export, so we define our thenable methods here instead
        _createClass(SweetAlert, [
            {
                key: "then",
                value: function then(onFulfilled) {
                    var promise = privateProps.promise.get(this);
                    return promise.then(onFulfilled);
                }
            },
            {
                key: "finally",
                value: function _finally(onFinally) {
                    var promise = privateProps.promise.get(this);
                    return promise["finally"](onFinally);
                }
            }
        ]);
        return SweetAlert;
    }(); // Assign instance methods from src/instanceMethods/*.js to prototype
    _extends(SweetAlert.prototype, instanceMethods); // Assign static methods from src/staticMethods/*.js to constructor
    _extends(SweetAlert, staticMethods); // Proxy to instance methods to constructor, for now, for backwards compatibility
    Object.keys(instanceMethods).forEach(function(key) {
        SweetAlert[key] = function() {
            if (currentInstance) {
                var _currentInstance;
                return (_currentInstance = currentInstance)[key].apply(_currentInstance, arguments);
            }
        };
    });
    SweetAlert.DismissReason = DismissReason;
    SweetAlert.version = '10.16.9';
    var Swal = SweetAlert;
    Swal["default"] = Swal;
    return Swal;
});
if (typeof this !== 'undefined' && this.Sweetalert2) this.swal = this.sweetAlert = this.Swal = this.SweetAlert = this.Sweetalert2;

},{}],"1nIup":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Http
);
parcelHelpers.export(exports, "HttpMethod", ()=>_methods.HttpMethod
);
parcelHelpers.export(exports, "RECAPTCHA_TOKEN_FIELD", ()=>RECAPTCHA_TOKEN_FIELD
);
parcelHelpers.export(exports, "HttpError", ()=>_errors.HttpError
);
parcelHelpers.export(exports, "ServerValidationError", ()=>_errors.ServerValidationError
);
parcelHelpers.export(exports, "BadRequest", ()=>_errors.BadRequest
);
parcelHelpers.export(exports, "ServerError", ()=>_errors.ServerError
);
parcelHelpers.export(exports, "Unauthorized", ()=>_errors.Unauthorized
);
parcelHelpers.export(exports, "Forbidden", ()=>_errors.Forbidden
);
parcelHelpers.export(exports, "ReCaptchaV3Error", ()=>_errors.ReCaptchaV3Error
);
var _errors = require("./errors");
var _methods = require("./methods");
const AJAX_REQUEST = 'XMLHttpRequest';
const RECAPTCHA_TOKEN_FIELD = 'recapcha_field';
var CommonHeaders;
(function(CommonHeaders) {
    CommonHeaders["ContentType"] = 'Content-Type';
    CommonHeaders["Ajax"] = 'X-Requested-With';
    CommonHeaders["RecaptchaV3"] = 'X-ReCaptchaV3-Token';
    CommonHeaders["CsrfToken"] = 'X-CSRF-TOKEN';
    CommonHeaders["Accept"] = 'Accept';
})(CommonHeaders || (CommonHeaders = {
}));
var ContentType;
(function(ContentType) {
    ContentType["JSON"] = 'application/json';
    ContentType["FORM_DATA"] = 'multipart/form-data';
})(ContentType || (ContentType = {
}));
class Http {
    get(url, headers = new Headers()) {
        return this.request(url, _methods.HttpMethod.GET, undefined, headers);
    }
    post(url, payload, headers = new Headers()) {
        return this.request(url, _methods.HttpMethod.POST, payload, headers);
    }
    puth(url, payload, headers = new Headers()) {
        return this.request(url, _methods.HttpMethod.PUT, payload, headers);
    }
    delete(url, headers = new Headers()) {
        return this.request(url, _methods.HttpMethod.DELETE, undefined, headers);
    }
    async request(url, method, payload, headers = new Headers()) {
        if (!headers.has(CommonHeaders.ContentType)) headers.append(CommonHeaders.ContentType, ContentType.JSON);
        if (!headers.has(CommonHeaders.Ajax)) headers.append(CommonHeaders.Ajax, AJAX_REQUEST);
        if (Http.isStateChangingMethod(method) && !headers.has(CommonHeaders.RecaptchaV3)) {
            headers.append(CommonHeaders.RecaptchaV3, payload[RECAPTCHA_TOKEN_FIELD]);
            delete payload[RECAPTCHA_TOKEN_FIELD];
        }
        if (!headers.has(CommonHeaders.Accept)) headers.append(CommonHeaders.Accept, ContentType.JSON);
        const csrfToken = Http.csrfToken.token;
        if (headers.has(CommonHeaders.CsrfToken)) headers.set(CommonHeaders.CsrfToken, csrfToken);
        else headers.append(CommonHeaders.CsrfToken, csrfToken);
        if (!url.startsWith('/')) url = `${Http.url}/${url}`;
        else url = `${Http.url}${url}`;
        const body = {
            method,
            headers,
            keepalive: true,
            credentials: 'include'
        };
        if (payload !== undefined) body.body = Http.serializeBody(headers.get(CommonHeaders.ContentType), payload);
        const res = await fetch(url, body);
        if (res.status > 399 && res.status < 500) await Http.handleClientError(res);
        if (res.status > 499 && res.status < 600) Http.handleServerError(res);
        return await res.json();
    }
    static async handleClientError(response) {
        switch(response.status){
            case 400:
                throw new _errors.BadRequest('Bad Request');
            case 401:
                throw new _errors.Unauthorized('Unauthorized');
            case 403:
                throw new _errors.Forbidden('Forbidden');
            case 409:
                throw new _errors.ConflictError('Record already exists in database');
            case 422:
                throw new _errors.ServerValidationError(await response.json());
            case 428:
                throw new _errors.ReCaptchaV3Error();
            default:
                throw new _errors.HttpError(response.status, 'Client Error');
        }
    }
    static handleServerError(response) {
        throw new _errors.ServerError(response.status);
    }
    static serializeBody(contentType, body) {
        if (!contentType) return JSON.stringify(body);
        switch(contentType){
            case ContentType.JSON:
                return JSON.stringify(body);
            case ContentType.FORM_DATA:
                const data = new FormData();
                for(const item in body)//@ts-ignore
                data.append(item, body[item]);
                return data;
            default:
                throw new Error('Cannot serialize data');
        }
    }
    static isStateChangingMethod(method) {
        return method === _methods.HttpMethod.POST || method === _methods.HttpMethod.PUT || method === _methods.HttpMethod.DELETE;
    }
    static set csrf(item) {
        Http.csrfToken = item;
    }
    static set baseUrl(url) {
        if (url.endsWith('/')) url = url.substring(0, url.length - 1);
        Http.url = url;
    }
}

},{"./errors":"22x3c","./methods":"iYN03","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"22x3c":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "HttpError", ()=>HttpError
);
parcelHelpers.export(exports, "BadRequest", ()=>BadRequest
);
parcelHelpers.export(exports, "ConflictError", ()=>ConflictError
);
parcelHelpers.export(exports, "Unauthorized", ()=>Unauthorized
);
parcelHelpers.export(exports, "Forbidden", ()=>Forbidden
);
parcelHelpers.export(exports, "ServerValidationError", ()=>ServerValidationError
);
parcelHelpers.export(exports, "ReCaptchaV3Error", ()=>ReCaptchaV3Error
);
parcelHelpers.export(exports, "ServerError", ()=>ServerError
);
class HttpError extends Error {
    constructor(status, message){
        super(message);
        this.status = status;
    }
}
class BadRequest extends HttpError {
    constructor(message){
        super(400, message);
    }
}
class ConflictError extends HttpError {
    constructor(message){
        super(409, message);
    }
}
class Unauthorized extends HttpError {
    constructor(message){
        super(401, message);
    }
}
class Forbidden extends HttpError {
    constructor(message){
        super(403, message);
    }
}
class ServerValidationError extends HttpError {
    constructor(errors){
        super(422, 'Check your input');
        this.errors = errors;
    }
}
class ReCaptchaV3Error extends HttpError {
    constructor(){
        super(428, 'ReCaptcha Error, please try again');
    }
}
class ServerError extends HttpError {
    constructor(status){
        super(status, 'Server Error. Please try again later');
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"iYN03":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "HttpMethod", ()=>HttpMethod
);
var HttpMethod;
(function(HttpMethod) {
    HttpMethod["GET"] = "GET";
    HttpMethod["POST"] = "POST";
    HttpMethod["PUT"] = "PUT";
    HttpMethod["DELETE"] = "DELETE";
})(HttpMethod || (HttpMethod = {
}));

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"dJlOb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ready", ()=>ready
);
parcelHelpers.export(exports, "execute", ()=>execute
);
parcelHelpers.export(exports, "setKey", ()=>setKey
);
let globalKey = null;
const setKey = (key)=>{
    globalKey = key;
};
const ready = ()=>new Promise((resolve, reject)=>{
        if (!('grecaptcha' in window)) {
            reject(new Error('ReCaptcha V3 is not loaded on the webpage'));
            return;
        }
        //@ts-ignore
        grecaptcha.ready(()=>{
            resolve();
        });
    })
;
const execute = (action)=>new Promise((resolve, reject)=>{
        if (globalKey === null || globalKey === undefined) {
            reject(new Error('Global Key for RecaptchaV3 must be set by calling setKey function'));
            return;
        }
        //@ts-ignore
        grecaptcha.execute(globalKey, {
            action
        }).then((token)=>{
            try {
                resolve(token);
            } catch (err) {
                reject(err);
            }
        }).catch((err)=>reject(err)
        );
    })
;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"8Ctrd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _yup = require("yup");
const schema = _yup.object().shape({
    name: _yup.string().required().max(50),
    email: _yup.string().required().email().max(150)
});
const validate = (name, email)=>{
    return schema.validate({
        name,
        email
    }, {
        recursive: true,
        abortEarly: false
    });
};
exports.default = validate;

},{"yup":"gvf4u","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"gvf4u":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "mixed", ()=>_mixed.create
);
parcelHelpers.export(exports, "bool", ()=>_boolean.create
);
parcelHelpers.export(exports, "boolean", ()=>_boolean.create
);
parcelHelpers.export(exports, "string", ()=>_string.create
);
parcelHelpers.export(exports, "number", ()=>_number.create
);
parcelHelpers.export(exports, "date", ()=>_date.create
);
parcelHelpers.export(exports, "object", ()=>_object.create
);
parcelHelpers.export(exports, "array", ()=>_array.create
);
parcelHelpers.export(exports, "ref", ()=>_reference.create
);
parcelHelpers.export(exports, "lazy", ()=>_lazy.create
);
parcelHelpers.export(exports, "reach", ()=>_reachDefault.default
);
parcelHelpers.export(exports, "isSchema", ()=>_isSchemaDefault.default
);
parcelHelpers.export(exports, "addMethod", ()=>addMethod
);
parcelHelpers.export(exports, "setLocale", ()=>_setLocaleDefault.default
);
parcelHelpers.export(exports, "ValidationError", ()=>_validationErrorDefault.default
);
parcelHelpers.export(exports, "BaseSchema", ()=>_schemaDefault.default
);
parcelHelpers.export(exports, "MixedSchema", ()=>_mixedDefault.default
);
parcelHelpers.export(exports, "BooleanSchema", ()=>_booleanDefault.default
);
parcelHelpers.export(exports, "StringSchema", ()=>_stringDefault.default
);
parcelHelpers.export(exports, "NumberSchema", ()=>_numberDefault.default
);
parcelHelpers.export(exports, "DateSchema", ()=>_dateDefault.default
);
parcelHelpers.export(exports, "ObjectSchema", ()=>_objectDefault.default
);
parcelHelpers.export(exports, "ArraySchema", ()=>_arrayDefault.default
);
var _mixed = require("./mixed");
var _mixedDefault = parcelHelpers.interopDefault(_mixed);
var _boolean = require("./boolean");
var _booleanDefault = parcelHelpers.interopDefault(_boolean);
var _string = require("./string");
var _stringDefault = parcelHelpers.interopDefault(_string);
var _number = require("./number");
var _numberDefault = parcelHelpers.interopDefault(_number);
var _date = require("./date");
var _dateDefault = parcelHelpers.interopDefault(_date);
var _object = require("./object");
var _objectDefault = parcelHelpers.interopDefault(_object);
var _array = require("./array");
var _arrayDefault = parcelHelpers.interopDefault(_array);
var _reference = require("./Reference");
var _lazy = require("./Lazy");
var _validationError = require("./ValidationError");
var _validationErrorDefault = parcelHelpers.interopDefault(_validationError);
var _reach = require("./util/reach");
var _reachDefault = parcelHelpers.interopDefault(_reach);
var _isSchema = require("./util/isSchema");
var _isSchemaDefault = parcelHelpers.interopDefault(_isSchema);
var _setLocale = require("./setLocale");
var _setLocaleDefault = parcelHelpers.interopDefault(_setLocale);
var _schema = require("./schema");
var _schemaDefault = parcelHelpers.interopDefault(_schema);
function addMethod(schemaType, name, fn) {
    if (!schemaType || !_isSchemaDefault.default(schemaType.prototype)) throw new TypeError('You must provide a yup schema constructor function');
    if (typeof name !== 'string') throw new TypeError('A Method name must be provided');
    if (typeof fn !== 'function') throw new TypeError('Method function must be provided');
    schemaType.prototype[name] = fn;
}

},{"./mixed":"aaH9q","./boolean":"fZ3pI","./string":"aHTIr","./number":"kLKPe","./date":"hFOxf","./object":"y6Ms6","./array":"6OF4j","./Reference":"1c78R","./Lazy":"kYdMq","./ValidationError":"bRNBk","./util/reach":"e3lLA","./util/isSchema":"iKh25","./setLocale":"6ynaU","./schema":"9QQkj","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"aaH9q":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "create", ()=>create
) // XXX: this is using the Base schema so that `addMethod(mixed)` works as a base class
;
var _schema = require("./schema");
var _schemaDefault = parcelHelpers.interopDefault(_schema);
const Mixed = _schemaDefault.default;
exports.default = Mixed;
function create() {
    return new Mixed();
}
create.prototype = Mixed.prototype;

},{"./schema":"9QQkj","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"9QQkj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// @ts-ignore
var _nanoclone = require("nanoclone");
var _nanocloneDefault = parcelHelpers.interopDefault(_nanoclone);
var _locale = require("./locale");
var _condition = require("./Condition");
var _conditionDefault = parcelHelpers.interopDefault(_condition);
var _runTests = require("./util/runTests");
var _runTestsDefault = parcelHelpers.interopDefault(_runTests);
var _createValidation = require("./util/createValidation");
var _createValidationDefault = parcelHelpers.interopDefault(_createValidation);
var _printValue = require("./util/printValue");
var _printValueDefault = parcelHelpers.interopDefault(_printValue);
var _reference = require("./Reference");
var _referenceDefault = parcelHelpers.interopDefault(_reference);
var _reach = require("./util/reach");
var _validationError = require("./ValidationError");
var _validationErrorDefault = parcelHelpers.interopDefault(_validationError);
var _referenceSet = require("./util/ReferenceSet");
var _referenceSetDefault = parcelHelpers.interopDefault(_referenceSet);
var _toArray = require("./util/toArray"); // const UNSET = 'unset' as const;
var _toArrayDefault = parcelHelpers.interopDefault(_toArray);
function _extends() {
    _extends = Object.assign || function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
        }
        return target;
    };
    return _extends.apply(this, arguments);
}
class BaseSchema {
    constructor(options){
        this.deps = [];
        this.tests = void 0;
        this.transforms = void 0;
        this.conditions = [];
        this._mutate = void 0;
        this._typeError = void 0;
        this._whitelist = new _referenceSetDefault.default();
        this._blacklist = new _referenceSetDefault.default();
        this.exclusiveTests = Object.create(null);
        this.spec = void 0;
        this.tests = [];
        this.transforms = [];
        this.withMutation(()=>{
            this.typeError(_locale.mixed.notType);
        });
        this.type = (options == null ? void 0 : options.type) || 'mixed';
        this.spec = _extends({
            strip: false,
            strict: false,
            abortEarly: true,
            recursive: true,
            nullable: false,
            presence: 'optional'
        }, options == null ? void 0 : options.spec);
    }
    get _type() {
        return this.type;
    }
    _typeCheck(_value) {
        return true;
    }
    clone(spec) {
        if (this._mutate) {
            if (spec) Object.assign(this.spec, spec);
            return this;
        } // if the nested value is a schema we can skip cloning, since
        // they are already immutable
        const next = Object.create(Object.getPrototypeOf(this)); // @ts-expect-error this is readonly
        next.type = this.type;
        next._typeError = this._typeError;
        next._whitelistError = this._whitelistError;
        next._blacklistError = this._blacklistError;
        next._whitelist = this._whitelist.clone();
        next._blacklist = this._blacklist.clone();
        next.exclusiveTests = _extends({
        }, this.exclusiveTests); // @ts-expect-error this is readonly
        next.deps = [
            ...this.deps
        ];
        next.conditions = [
            ...this.conditions
        ];
        next.tests = [
            ...this.tests
        ];
        next.transforms = [
            ...this.transforms
        ];
        next.spec = _nanocloneDefault.default(_extends({
        }, this.spec, spec));
        return next;
    }
    label(label) {
        let next = this.clone();
        next.spec.label = label;
        return next;
    }
    meta(...args) {
        if (args.length === 0) return this.spec.meta;
        let next = this.clone();
        next.spec.meta = Object.assign(next.spec.meta || {
        }, args[0]);
        return next;
    }
    //   TCast,
    //   TContext,
    //   TOutput
    // > {
    //   return this as any;
    // }
    withMutation(fn) {
        let before = this._mutate;
        this._mutate = true;
        let result = fn(this);
        this._mutate = before;
        return result;
    }
    concat(schema) {
        if (!schema || schema === this) return this;
        if (schema.type !== this.type && this.type !== 'mixed') throw new TypeError(`You cannot \`concat()\` schema's of different types: ${this.type} and ${schema.type}`);
        let base = this;
        let combined = schema.clone();
        const mergedSpec = _extends({
        }, base.spec, combined.spec); // if (combined.spec.nullable === UNSET)
        //   mergedSpec.nullable = base.spec.nullable;
        // if (combined.spec.presence === UNSET)
        //   mergedSpec.presence = base.spec.presence;
        combined.spec = mergedSpec;
        combined._typeError || (combined._typeError = base._typeError);
        combined._whitelistError || (combined._whitelistError = base._whitelistError);
        combined._blacklistError || (combined._blacklistError = base._blacklistError); // manually merge the blacklist/whitelist (the other `schema` takes
        // precedence in case of conflicts)
        combined._whitelist = base._whitelist.merge(schema._whitelist, schema._blacklist);
        combined._blacklist = base._blacklist.merge(schema._blacklist, schema._whitelist); // start with the current tests
        combined.tests = base.tests;
        combined.exclusiveTests = base.exclusiveTests; // manually add the new tests to ensure
        // the deduping logic is consistent
        combined.withMutation((next)=>{
            schema.tests.forEach((fn)=>{
                next.test(fn.OPTIONS);
            });
        });
        combined.transforms = [
            ...base.transforms,
            ...combined.transforms
        ];
        return combined;
    }
    isType(v) {
        if (this.spec.nullable && v === null) return true;
        return this._typeCheck(v);
    }
    resolve(options) {
        let schema = this;
        if (schema.conditions.length) {
            let conditions = schema.conditions;
            schema = schema.clone();
            schema.conditions = [];
            schema = conditions.reduce((schema, condition)=>condition.resolve(schema, options)
            , schema);
            schema = schema.resolve(options);
        }
        return schema;
    }
    /**
   *
   * @param {*} value
   * @param {Object} options
   * @param {*=} options.parent
   * @param {*=} options.context
   */ cast(value, options = {
    }) {
        let resolvedSchema = this.resolve(_extends({
            value
        }, options));
        let result = resolvedSchema._cast(value, options);
        if (value !== undefined && options.assert !== false && resolvedSchema.isType(result) !== true) {
            let formattedValue = _printValueDefault.default(value);
            let formattedResult = _printValueDefault.default(result);
            throw new TypeError(`The value of ${options.path || 'field'} could not be cast to a value ` + `that satisfies the schema type: "${resolvedSchema._type}". \n\n` + `attempted value: ${formattedValue} \n` + (formattedResult !== formattedValue ? `result of cast: ${formattedResult}` : ''));
        }
        return result;
    }
    _cast(rawValue, _options) {
        let value = rawValue === undefined ? rawValue : this.transforms.reduce((value, fn)=>fn.call(this, value, rawValue, this)
        , rawValue);
        if (value === undefined) value = this.getDefault();
        return value;
    }
    _validate(_value, options = {
    }, cb) {
        let { sync , path , from =[] , originalValue =_value , strict =this.spec.strict , abortEarly =this.spec.abortEarly  } = options;
        let value = _value;
        if (!strict) // this._validating = true;
        value = this._cast(value, _extends({
            assert: false
        }, options)); // this._validating = false;
         // value is cast, we can check if it meets type requirements
        let args = {
            value,
            path,
            options,
            originalValue,
            schema: this,
            label: this.spec.label,
            sync,
            from
        };
        let initialTests = [];
        if (this._typeError) initialTests.push(this._typeError);
        let finalTests = [];
        if (this._whitelistError) finalTests.push(this._whitelistError);
        if (this._blacklistError) finalTests.push(this._blacklistError);
        _runTestsDefault.default({
            args,
            value,
            path,
            sync,
            tests: initialTests,
            endEarly: abortEarly
        }, (err)=>{
            if (err) return void cb(err, value);
            _runTestsDefault.default({
                tests: this.tests.concat(finalTests),
                args,
                path,
                sync,
                value,
                endEarly: abortEarly
            }, cb);
        });
    }
    validate(value, options, maybeCb) {
        let schema = this.resolve(_extends({
        }, options, {
            value
        })); // callback case is for nested validations
        return typeof maybeCb === 'function' ? schema._validate(value, options, maybeCb) : new Promise((resolve, reject)=>schema._validate(value, options, (err, value)=>{
                if (err) reject(err);
                else resolve(value);
            })
        );
    }
    validateSync(value, options) {
        let schema = this.resolve(_extends({
        }, options, {
            value
        }));
        let result;
        schema._validate(value, _extends({
        }, options, {
            sync: true
        }), (err, value)=>{
            if (err) throw err;
            result = value;
        });
        return result;
    }
    isValid(value, options) {
        return this.validate(value, options).then(()=>true
        , (err)=>{
            if (_validationErrorDefault.default.isError(err)) return false;
            throw err;
        });
    }
    isValidSync(value, options) {
        try {
            this.validateSync(value, options);
            return true;
        } catch (err) {
            if (_validationErrorDefault.default.isError(err)) return false;
            throw err;
        }
    }
    _getDefault() {
        let defaultValue = this.spec.default;
        if (defaultValue == null) return defaultValue;
        return typeof defaultValue === 'function' ? defaultValue.call(this) : _nanocloneDefault.default(defaultValue);
    }
    getDefault(options) {
        let schema = this.resolve(options || {
        });
        return schema._getDefault();
    }
    default(def) {
        if (arguments.length === 0) return this._getDefault();
        let next = this.clone({
            default: def
        });
        return next;
    }
    strict(isStrict = true) {
        let next = this.clone();
        next.spec.strict = isStrict;
        return next;
    }
    _isPresent(value) {
        return value != null;
    }
    defined(message = _locale.mixed.defined) {
        return this.test({
            message,
            name: 'defined',
            exclusive: true,
            test (value) {
                return value !== undefined;
            }
        });
    }
    required(message = _locale.mixed.required) {
        return this.clone({
            presence: 'required'
        }).withMutation((s)=>s.test({
                message,
                name: 'required',
                exclusive: true,
                test (value) {
                    return this.schema._isPresent(value);
                }
            })
        );
    }
    notRequired() {
        let next = this.clone({
            presence: 'optional'
        });
        next.tests = next.tests.filter((test)=>test.OPTIONS.name !== 'required'
        );
        return next;
    }
    nullable(isNullable = true) {
        let next = this.clone({
            nullable: isNullable !== false
        });
        return next;
    }
    transform(fn) {
        let next = this.clone();
        next.transforms.push(fn);
        return next;
    }
    /**
   * Adds a test function to the schema's queue of tests.
   * tests can be exclusive or non-exclusive.
   *
   * - exclusive tests, will replace any existing tests of the same name.
   * - non-exclusive: can be stacked
   *
   * If a non-exclusive test is added to a schema with an exclusive test of the same name
   * the exclusive test is removed and further tests of the same name will be stacked.
   *
   * If an exclusive test is added to a schema with non-exclusive tests of the same name
   * the previous tests are removed and further tests of the same name will replace each other.
   */ test(...args) {
        let opts;
        if (args.length === 1) {
            if (typeof args[0] === 'function') opts = {
                test: args[0]
            };
            else opts = args[0];
        } else if (args.length === 2) opts = {
            name: args[0],
            test: args[1]
        };
        else opts = {
            name: args[0],
            message: args[1],
            test: args[2]
        };
        if (opts.message === undefined) opts.message = _locale.mixed.default;
        if (typeof opts.test !== 'function') throw new TypeError('`test` is a required parameters');
        let next = this.clone();
        let validate = _createValidationDefault.default(opts);
        let isExclusive = opts.exclusive || opts.name && next.exclusiveTests[opts.name] === true;
        if (opts.exclusive) {
            if (!opts.name) throw new TypeError('Exclusive tests must provide a unique `name` identifying the test');
        }
        if (opts.name) next.exclusiveTests[opts.name] = !!opts.exclusive;
        next.tests = next.tests.filter((fn)=>{
            if (fn.OPTIONS.name === opts.name) {
                if (isExclusive) return false;
                if (fn.OPTIONS.test === validate.OPTIONS.test) return false;
            }
            return true;
        });
        next.tests.push(validate);
        return next;
    }
    when(keys, options) {
        if (!Array.isArray(keys) && typeof keys !== 'string') {
            options = keys;
            keys = '.';
        }
        let next = this.clone();
        let deps = _toArrayDefault.default(keys).map((key)=>new _referenceDefault.default(key)
        );
        deps.forEach((dep)=>{
            // @ts-ignore
            if (dep.isSibling) next.deps.push(dep.key);
        });
        next.conditions.push(new _conditionDefault.default(deps, options));
        return next;
    }
    typeError(message) {
        let next = this.clone();
        next._typeError = _createValidationDefault.default({
            message,
            name: 'typeError',
            test (value) {
                if (value !== undefined && !this.schema.isType(value)) return this.createError({
                    params: {
                        type: this.schema._type
                    }
                });
                return true;
            }
        });
        return next;
    }
    oneOf(enums, message = _locale.mixed.oneOf) {
        let next = this.clone();
        enums.forEach((val)=>{
            next._whitelist.add(val);
            next._blacklist.delete(val);
        });
        next._whitelistError = _createValidationDefault.default({
            message,
            name: 'oneOf',
            test (value) {
                if (value === undefined) return true;
                let valids = this.schema._whitelist;
                let resolved = valids.resolveAll(this.resolve);
                return resolved.includes(value) ? true : this.createError({
                    params: {
                        values: valids.toArray().join(', '),
                        resolved
                    }
                });
            }
        });
        return next;
    }
    notOneOf(enums, message = _locale.mixed.notOneOf) {
        let next = this.clone();
        enums.forEach((val)=>{
            next._blacklist.add(val);
            next._whitelist.delete(val);
        });
        next._blacklistError = _createValidationDefault.default({
            message,
            name: 'notOneOf',
            test (value) {
                let invalids = this.schema._blacklist;
                let resolved = invalids.resolveAll(this.resolve);
                if (resolved.includes(value)) return this.createError({
                    params: {
                        values: invalids.toArray().join(', '),
                        resolved
                    }
                });
                return true;
            }
        });
        return next;
    }
    strip(strip = true) {
        let next = this.clone();
        next.spec.strip = strip;
        return next;
    }
    describe() {
        const next = this.clone();
        const { label , meta  } = next.spec;
        const description = {
            meta,
            label,
            type: next.type,
            oneOf: next._whitelist.describe(),
            notOneOf: next._blacklist.describe(),
            tests: next.tests.map((fn)=>({
                    name: fn.OPTIONS.name,
                    params: fn.OPTIONS.params
                })
            ).filter((n, idx, list)=>list.findIndex((c)=>c.name === n.name
                ) === idx
            )
        };
        return description;
    }
} // eslint-disable-next-line @typescript-eslint/no-unused-vars
exports.default = BaseSchema;
// @ts-expect-error
BaseSchema.prototype.__isYupSchema__ = true;
for (const method of [
    'validate',
    'validateSync'
])BaseSchema.prototype[`${method}At`] = function(path, value, options = {
}) {
    const { parent , parentPath , schema  } = _reach.getIn(this, path, value, options.context);
    return schema[method](parent && parent[parentPath], _extends({
    }, options, {
        parent,
        path
    }));
};
for (const alias of [
    'equals',
    'is'
])BaseSchema.prototype[alias] = BaseSchema.prototype.oneOf;
for (const alias1 of [
    'not',
    'nope'
])BaseSchema.prototype[alias1] = BaseSchema.prototype.notOneOf;
BaseSchema.prototype.optional = BaseSchema.prototype.notRequired;

},{"nanoclone":"hqXGC","./locale":"8waLz","./Condition":"66FfX","./util/runTests":"ylBJD","./util/createValidation":"kAja4","./util/printValue":"aWvvR","./Reference":"1c78R","./util/reach":"e3lLA","./ValidationError":"bRNBk","./util/ReferenceSet":"ergOl","./util/toArray":"fszoS","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"hqXGC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// ES6 Map
var map;
try {
    map = Map;
} catch (_) {
}
var set;
// ES6 Set
try {
    set = Set;
} catch (_1) {
}
function baseClone(src, circulars, clones) {
    // Null/undefined/functions/etc
    if (!src || typeof src !== 'object' || typeof src === 'function') return src;
    // DOM Node
    if (src.nodeType && 'cloneNode' in src) return src.cloneNode(true);
    // Date
    if (src instanceof Date) return new Date(src.getTime());
    // RegExp
    if (src instanceof RegExp) return new RegExp(src);
    // Arrays
    if (Array.isArray(src)) return src.map(clone);
    // ES6 Maps
    if (map && src instanceof map) return new Map(Array.from(src.entries()));
    // ES6 Sets
    if (set && src instanceof set) return new Set(Array.from(src.values()));
    // Object
    if (src instanceof Object) {
        circulars.push(src);
        var obj = Object.create(src);
        clones.push(obj);
        for(var key in src){
            var idx = circulars.findIndex(function(i) {
                return i === src[key];
            });
            obj[key] = idx > -1 ? clones[idx] : baseClone(src[key], circulars, clones);
        }
        return obj;
    }
    // ???
    return src;
}
function clone(src) {
    return baseClone(src, [], []);
}
exports.default = clone;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"8waLz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "mixed", ()=>mixed
);
parcelHelpers.export(exports, "string", ()=>string
);
parcelHelpers.export(exports, "number", ()=>number
);
parcelHelpers.export(exports, "date", ()=>date
);
parcelHelpers.export(exports, "boolean", ()=>boolean
);
parcelHelpers.export(exports, "object", ()=>object
);
parcelHelpers.export(exports, "array", ()=>array
);
var _printValue = require("./util/printValue");
var _printValueDefault = parcelHelpers.interopDefault(_printValue);
let mixed = {
    default: '${path} is invalid',
    required: '${path} is a required field',
    oneOf: '${path} must be one of the following values: ${values}',
    notOneOf: '${path} must not be one of the following values: ${values}',
    notType: ({ path , type , value , originalValue  })=>{
        let isCast = originalValue != null && originalValue !== value;
        let msg = `${path} must be a \`${type}\` type, ` + `but the final value was: \`${_printValueDefault.default(value, true)}\`` + (isCast ? ` (cast from the value \`${_printValueDefault.default(originalValue, true)}\`).` : '.');
        if (value === null) msg += `\n If "null" is intended as an empty value be sure to mark the schema as \`.nullable()\``;
        return msg;
    },
    defined: '${path} must be defined'
};
let string = {
    length: '${path} must be exactly ${length} characters',
    min: '${path} must be at least ${min} characters',
    max: '${path} must be at most ${max} characters',
    matches: '${path} must match the following: "${regex}"',
    email: '${path} must be a valid email',
    url: '${path} must be a valid URL',
    uuid: '${path} must be a valid UUID',
    trim: '${path} must be a trimmed string',
    lowercase: '${path} must be a lowercase string',
    uppercase: '${path} must be a upper case string'
};
let number = {
    min: '${path} must be greater than or equal to ${min}',
    max: '${path} must be less than or equal to ${max}',
    lessThan: '${path} must be less than ${less}',
    moreThan: '${path} must be greater than ${more}',
    positive: '${path} must be a positive number',
    negative: '${path} must be a negative number',
    integer: '${path} must be an integer'
};
let date = {
    min: '${path} field must be later than ${min}',
    max: '${path} field must be at earlier than ${max}'
};
let boolean = {
    isValue: '${path} field must be ${value}'
};
let object = {
    noUnknown: '${path} field has unspecified keys: ${unknown}'
};
let array = {
    min: '${path} field must have at least ${min} items',
    max: '${path} field must have less than or equal to ${max} items',
    length: '${path} must have ${length} items'
};
exports.default = Object.assign(Object.create(null), {
    mixed,
    string,
    number,
    date,
    object,
    array,
    boolean
});

},{"./util/printValue":"aWvvR","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"aWvvR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const toString = Object.prototype.toString;
const errorToString = Error.prototype.toString;
const regExpToString = RegExp.prototype.toString;
const symbolToString = typeof Symbol !== 'undefined' ? Symbol.prototype.toString : ()=>''
;
const SYMBOL_REGEXP = /^Symbol\((.*)\)(.*)$/;
function printNumber(val) {
    if (val != +val) return 'NaN';
    const isNegativeZero = val === 0 && 1 / val < 0;
    return isNegativeZero ? '-0' : '' + val;
}
function printSimpleValue(val, quoteStrings = false) {
    if (val == null || val === true || val === false) return '' + val;
    const typeOf = typeof val;
    if (typeOf === 'number') return printNumber(val);
    if (typeOf === 'string') return quoteStrings ? `"${val}"` : val;
    if (typeOf === 'function') return '[Function ' + (val.name || 'anonymous') + ']';
    if (typeOf === 'symbol') return symbolToString.call(val).replace(SYMBOL_REGEXP, 'Symbol($1)');
    const tag = toString.call(val).slice(8, -1);
    if (tag === 'Date') return isNaN(val.getTime()) ? '' + val : val.toISOString(val);
    if (tag === 'Error' || val instanceof Error) return '[' + errorToString.call(val) + ']';
    if (tag === 'RegExp') return regExpToString.call(val);
    return null;
}
function printValue(value, quoteStrings) {
    let result = printSimpleValue(value, quoteStrings);
    if (result !== null) return result;
    return JSON.stringify(value, function(key, value) {
        let result = printSimpleValue(this[key], quoteStrings);
        if (result !== null) return result;
        return value;
    }, 2);
}
exports.default = printValue;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"66FfX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _has = require("lodash/has");
var _hasDefault = parcelHelpers.interopDefault(_has);
var _isSchema = require("./util/isSchema");
var _isSchemaDefault = parcelHelpers.interopDefault(_isSchema);
class Condition {
    constructor(refs, options){
        this.fn = void 0;
        this.refs = refs;
        this.refs = refs;
        if (typeof options === 'function') {
            this.fn = options;
            return;
        }
        if (!_hasDefault.default(options, 'is')) throw new TypeError('`is:` is required for `when()` conditions');
        if (!options.then && !options.otherwise) throw new TypeError('either `then:` or `otherwise:` is required for `when()` conditions');
        let { is , then , otherwise  } = options;
        let check = typeof is === 'function' ? is : (...values)=>values.every((value)=>value === is
            )
        ;
        this.fn = function(...args) {
            let options = args.pop();
            let schema = args.pop();
            let branch = check(...args) ? then : otherwise;
            if (!branch) return undefined;
            if (typeof branch === 'function') return branch(schema);
            return schema.concat(branch.resolve(options));
        };
    }
    resolve(base, options) {
        let values = this.refs.map((ref)=>ref.getValue(options == null ? void 0 : options.value, options == null ? void 0 : options.parent, options == null ? void 0 : options.context)
        );
        let schema = this.fn.apply(base, values.concat(base, options));
        if (schema === undefined || schema === base) return base;
        if (!_isSchemaDefault.default(schema)) throw new TypeError('conditions must return a schema object');
        return schema.resolve(options);
    }
}
exports.default = Condition;

},{"lodash/has":"92WOZ","./util/isSchema":"iKh25","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"92WOZ":[function(require,module,exports) {
var baseHas = require('./_baseHas'), hasPath = require('./_hasPath');
/**
 * Checks if `path` is a direct property of `object`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = { 'a': { 'b': 2 } };
 * var other = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.has(object, 'a');
 * // => true
 *
 * _.has(object, 'a.b');
 * // => true
 *
 * _.has(object, ['a', 'b']);
 * // => true
 *
 * _.has(other, 'a');
 * // => false
 */ function has(object, path) {
    return object != null && hasPath(object, path, baseHas);
}
module.exports = has;

},{"./_baseHas":"hXKkI","./_hasPath":"iTR3P"}],"hXKkI":[function(require,module,exports) {
/** Used for built-in method references. */ var objectProto = Object.prototype;
/** Used to check objects for own properties. */ var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * The base implementation of `_.has` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */ function baseHas(object, key) {
    return object != null && hasOwnProperty.call(object, key);
}
module.exports = baseHas;

},{}],"iTR3P":[function(require,module,exports) {
var castPath = require('./_castPath'), isArguments = require('./isArguments'), isArray = require('./isArray'), isIndex = require('./_isIndex'), isLength = require('./isLength'), toKey = require('./_toKey');
/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */ function hasPath(object, path, hasFunc) {
    path = castPath(path, object);
    var index = -1, length = path.length, result = false;
    while(++index < length){
        var key = toKey(path[index]);
        if (!(result = object != null && hasFunc(object, key))) break;
        object = object[key];
    }
    if (result || ++index != length) return result;
    length = object == null ? 0 : object.length;
    return !!length && isLength(length) && isIndex(key, length) && (isArray(object) || isArguments(object));
}
module.exports = hasPath;

},{"./_castPath":"l9t5O","./isArguments":"lmClg","./isArray":"kFpV8","./_isIndex":"cM06B","./isLength":"g0eIg","./_toKey":"30fQL"}],"l9t5O":[function(require,module,exports) {
var isArray = require('./isArray'), isKey = require('./_isKey'), stringToPath = require('./_stringToPath'), toString = require('./toString');
/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */ function castPath(value, object) {
    if (isArray(value)) return value;
    return isKey(value, object) ? [
        value
    ] : stringToPath(toString(value));
}
module.exports = castPath;

},{"./isArray":"kFpV8","./_isKey":"6I3o3","./_stringToPath":"jkXOW","./toString":"lRX1t"}],"kFpV8":[function(require,module,exports) {
/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */ var isArray = Array.isArray;
module.exports = isArray;

},{}],"6I3o3":[function(require,module,exports) {
var isArray = require('./isArray'), isSymbol = require('./isSymbol');
/** Used to match property names within property paths. */ var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, reIsPlainProp = /^\w*$/;
/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */ function isKey(value, object) {
    if (isArray(value)) return false;
    var type = typeof value;
    if (type == 'number' || type == 'symbol' || type == 'boolean' || value == null || isSymbol(value)) return true;
    return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
}
module.exports = isKey;

},{"./isArray":"kFpV8","./isSymbol":"bepog"}],"bepog":[function(require,module,exports) {
var baseGetTag = require('./_baseGetTag'), isObjectLike = require('./isObjectLike');
/** `Object#toString` result references. */ var symbolTag = '[object Symbol]';
/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */ function isSymbol(value) {
    return typeof value == 'symbol' || isObjectLike(value) && baseGetTag(value) == symbolTag;
}
module.exports = isSymbol;

},{"./_baseGetTag":"0i2U0","./isObjectLike":"fDYnb"}],"0i2U0":[function(require,module,exports) {
var Symbol = require('./_Symbol'), getRawTag = require('./_getRawTag'), objectToString = require('./_objectToString');
/** `Object#toString` result references. */ var nullTag = '[object Null]', undefinedTag = '[object Undefined]';
/** Built-in value references. */ var symToStringTag = Symbol ? Symbol.toStringTag : undefined;
/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */ function baseGetTag(value) {
    if (value == null) return value === undefined ? undefinedTag : nullTag;
    return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
}
module.exports = baseGetTag;

},{"./_Symbol":"xWebb","./_getRawTag":"dGPaO","./_objectToString":"aobqC"}],"xWebb":[function(require,module,exports) {
var root = require('./_root');
/** Built-in value references. */ var Symbol = root.Symbol;
module.exports = Symbol;

},{"./_root":"11IUn"}],"11IUn":[function(require,module,exports) {
var freeGlobal = require('./_freeGlobal');
/** Detect free variable `self`. */ var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
/** Used as a reference to the global object. */ var root = freeGlobal || freeSelf || Function('return this')();
module.exports = root;

},{"./_freeGlobal":"349pR"}],"349pR":[function(require,module,exports) {
var global = arguments[3];
/** Detect free variable `global` from Node.js. */ var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;
module.exports = freeGlobal;

},{}],"dGPaO":[function(require,module,exports) {
var Symbol = require('./_Symbol');
/** Used for built-in method references. */ var objectProto = Object.prototype;
/** Used to check objects for own properties. */ var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */ var nativeObjectToString = objectProto.toString;
/** Built-in value references. */ var symToStringTag = Symbol ? Symbol.toStringTag : undefined;
/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */ function getRawTag(value) {
    var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
    try {
        value[symToStringTag] = undefined;
        var unmasked = true;
    } catch (e) {
    }
    var result = nativeObjectToString.call(value);
    if (unmasked) {
        if (isOwn) value[symToStringTag] = tag;
        else delete value[symToStringTag];
    }
    return result;
}
module.exports = getRawTag;

},{"./_Symbol":"xWebb"}],"aobqC":[function(require,module,exports) {
/** Used for built-in method references. */ var objectProto = Object.prototype;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */ var nativeObjectToString = objectProto.toString;
/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */ function objectToString(value) {
    return nativeObjectToString.call(value);
}
module.exports = objectToString;

},{}],"fDYnb":[function(require,module,exports) {
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */ function isObjectLike(value) {
    return value != null && typeof value == 'object';
}
module.exports = isObjectLike;

},{}],"jkXOW":[function(require,module,exports) {
var memoizeCapped = require('./_memoizeCapped');
/** Used to match property names within property paths. */ var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
/** Used to match backslashes in property paths. */ var reEscapeChar = /\\(\\)?/g;
/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */ var stringToPath = memoizeCapped(function(string) {
    var result = [];
    if (string.charCodeAt(0) === 46 /* . */ ) result.push('');
    string.replace(rePropName, function(match, number, quote, subString) {
        result.push(quote ? subString.replace(reEscapeChar, '$1') : number || match);
    });
    return result;
});
module.exports = stringToPath;

},{"./_memoizeCapped":"1GBEl"}],"1GBEl":[function(require,module,exports) {
var memoize = require('./memoize');
/** Used as the maximum memoize cache size. */ var MAX_MEMOIZE_SIZE = 500;
/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */ function memoizeCapped(func) {
    var result = memoize(func, function(key) {
        if (cache.size === MAX_MEMOIZE_SIZE) cache.clear();
        return key;
    });
    var cache = result.cache;
    return result;
}
module.exports = memoizeCapped;

},{"./memoize":"k514Y"}],"k514Y":[function(require,module,exports) {
var MapCache = require('./_MapCache');
/** Error message constants. */ var FUNC_ERROR_TEXT = 'Expected a function';
/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */ function memoize(func, resolver) {
    if (typeof func != 'function' || resolver != null && typeof resolver != 'function') throw new TypeError(FUNC_ERROR_TEXT);
    var memoized = function() {
        var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
        if (cache.has(key)) return cache.get(key);
        var result = func.apply(this, args);
        memoized.cache = cache.set(key, result) || cache;
        return result;
    };
    memoized.cache = new (memoize.Cache || MapCache);
    return memoized;
}
// Expose `MapCache`.
memoize.Cache = MapCache;
module.exports = memoize;

},{"./_MapCache":"j7pxA"}],"j7pxA":[function(require,module,exports) {
var mapCacheClear = require('./_mapCacheClear'), mapCacheDelete = require('./_mapCacheDelete'), mapCacheGet = require('./_mapCacheGet'), mapCacheHas = require('./_mapCacheHas'), mapCacheSet = require('./_mapCacheSet');
/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */ function MapCache(entries) {
    var index = -1, length = entries == null ? 0 : entries.length;
    this.clear();
    while(++index < length){
        var entry = entries[index];
        this.set(entry[0], entry[1]);
    }
}
// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;
module.exports = MapCache;

},{"./_mapCacheClear":"ds24B","./_mapCacheDelete":"q2iOv","./_mapCacheGet":"8F6m5","./_mapCacheHas":"kVBTF","./_mapCacheSet":"69lPZ"}],"ds24B":[function(require,module,exports) {
var Hash = require('./_Hash'), ListCache = require('./_ListCache'), Map = require('./_Map');
/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */ function mapCacheClear() {
    this.size = 0;
    this.__data__ = {
        'hash': new Hash,
        'map': new (Map || ListCache),
        'string': new Hash
    };
}
module.exports = mapCacheClear;

},{"./_Hash":"gp3n4","./_ListCache":"hAKMT","./_Map":"6yVwu"}],"gp3n4":[function(require,module,exports) {
var hashClear = require('./_hashClear'), hashDelete = require('./_hashDelete'), hashGet = require('./_hashGet'), hashHas = require('./_hashHas'), hashSet = require('./_hashSet');
/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */ function Hash(entries) {
    var index = -1, length = entries == null ? 0 : entries.length;
    this.clear();
    while(++index < length){
        var entry = entries[index];
        this.set(entry[0], entry[1]);
    }
}
// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;
module.exports = Hash;

},{"./_hashClear":"7Bme4","./_hashDelete":"fCndF","./_hashGet":"e3vpg","./_hashHas":"1s7AW","./_hashSet":"4TCKZ"}],"7Bme4":[function(require,module,exports) {
var nativeCreate = require('./_nativeCreate');
/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */ function hashClear() {
    this.__data__ = nativeCreate ? nativeCreate(null) : {
    };
    this.size = 0;
}
module.exports = hashClear;

},{"./_nativeCreate":"8pQd6"}],"8pQd6":[function(require,module,exports) {
var getNative = require('./_getNative');
/* Built-in method references that are verified to be native. */ var nativeCreate = getNative(Object, 'create');
module.exports = nativeCreate;

},{"./_getNative":"kCKt4"}],"kCKt4":[function(require,module,exports) {
var baseIsNative = require('./_baseIsNative'), getValue = require('./_getValue');
/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */ function getNative(object, key) {
    var value = getValue(object, key);
    return baseIsNative(value) ? value : undefined;
}
module.exports = getNative;

},{"./_baseIsNative":"l27Wa","./_getValue":"4cBDF"}],"l27Wa":[function(require,module,exports) {
var isFunction = require('./isFunction'), isMasked = require('./_isMasked'), isObject = require('./isObject'), toSource = require('./_toSource');
/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */ var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
/** Used to detect host constructors (Safari). */ var reIsHostCtor = /^\[object .+?Constructor\]$/;
/** Used for built-in method references. */ var funcProto = Function.prototype, objectProto = Object.prototype;
/** Used to resolve the decompiled source of functions. */ var funcToString = funcProto.toString;
/** Used to check objects for own properties. */ var hasOwnProperty = objectProto.hasOwnProperty;
/** Used to detect if a method is native. */ var reIsNative = RegExp('^' + funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */ function baseIsNative(value) {
    if (!isObject(value) || isMasked(value)) return false;
    var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
    return pattern.test(toSource(value));
}
module.exports = baseIsNative;

},{"./isFunction":"hgsN6","./_isMasked":"eQIOI","./isObject":"euXL6","./_toSource":"lfgIG"}],"hgsN6":[function(require,module,exports) {
var baseGetTag = require('./_baseGetTag'), isObject = require('./isObject');
/** `Object#toString` result references. */ var asyncTag = '[object AsyncFunction]', funcTag = '[object Function]', genTag = '[object GeneratorFunction]', proxyTag = '[object Proxy]';
/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */ function isFunction(value) {
    if (!isObject(value)) return false;
    // The use of `Object#toString` avoids issues with the `typeof` operator
    // in Safari 9 which returns 'object' for typed arrays and other constructors.
    var tag = baseGetTag(value);
    return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}
module.exports = isFunction;

},{"./_baseGetTag":"0i2U0","./isObject":"euXL6"}],"euXL6":[function(require,module,exports) {
/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */ function isObject(value) {
    var type = typeof value;
    return value != null && (type == 'object' || type == 'function');
}
module.exports = isObject;

},{}],"eQIOI":[function(require,module,exports) {
var coreJsData = require('./_coreJsData');
/** Used to detect methods masquerading as native. */ var maskSrcKey = function() {
    var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
    return uid ? 'Symbol(src)_1.' + uid : '';
}();
/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */ function isMasked(func) {
    return !!maskSrcKey && maskSrcKey in func;
}
module.exports = isMasked;

},{"./_coreJsData":"6WqWC"}],"6WqWC":[function(require,module,exports) {
var root = require('./_root');
/** Used to detect overreaching core-js shims. */ var coreJsData = root['__core-js_shared__'];
module.exports = coreJsData;

},{"./_root":"11IUn"}],"lfgIG":[function(require,module,exports) {
/** Used for built-in method references. */ var funcProto = Function.prototype;
/** Used to resolve the decompiled source of functions. */ var funcToString = funcProto.toString;
/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */ function toSource(func) {
    if (func != null) {
        try {
            return funcToString.call(func);
        } catch (e) {
        }
        try {
            return func + '';
        } catch (e1) {
        }
    }
    return '';
}
module.exports = toSource;

},{}],"4cBDF":[function(require,module,exports) {
/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */ function getValue(object, key) {
    return object == null ? undefined : object[key];
}
module.exports = getValue;

},{}],"fCndF":[function(require,module,exports) {
/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */ function hashDelete(key) {
    var result = this.has(key) && delete this.__data__[key];
    this.size -= result ? 1 : 0;
    return result;
}
module.exports = hashDelete;

},{}],"e3vpg":[function(require,module,exports) {
var nativeCreate = require('./_nativeCreate');
/** Used to stand-in for `undefined` hash values. */ var HASH_UNDEFINED = '__lodash_hash_undefined__';
/** Used for built-in method references. */ var objectProto = Object.prototype;
/** Used to check objects for own properties. */ var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */ function hashGet(key) {
    var data = this.__data__;
    if (nativeCreate) {
        var result = data[key];
        return result === HASH_UNDEFINED ? undefined : result;
    }
    return hasOwnProperty.call(data, key) ? data[key] : undefined;
}
module.exports = hashGet;

},{"./_nativeCreate":"8pQd6"}],"1s7AW":[function(require,module,exports) {
var nativeCreate = require('./_nativeCreate');
/** Used for built-in method references. */ var objectProto = Object.prototype;
/** Used to check objects for own properties. */ var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */ function hashHas(key) {
    var data = this.__data__;
    return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}
module.exports = hashHas;

},{"./_nativeCreate":"8pQd6"}],"4TCKZ":[function(require,module,exports) {
var nativeCreate = require('./_nativeCreate');
/** Used to stand-in for `undefined` hash values. */ var HASH_UNDEFINED = '__lodash_hash_undefined__';
/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */ function hashSet(key, value) {
    var data = this.__data__;
    this.size += this.has(key) ? 0 : 1;
    data[key] = nativeCreate && value === undefined ? HASH_UNDEFINED : value;
    return this;
}
module.exports = hashSet;

},{"./_nativeCreate":"8pQd6"}],"hAKMT":[function(require,module,exports) {
var listCacheClear = require('./_listCacheClear'), listCacheDelete = require('./_listCacheDelete'), listCacheGet = require('./_listCacheGet'), listCacheHas = require('./_listCacheHas'), listCacheSet = require('./_listCacheSet');
/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */ function ListCache(entries) {
    var index = -1, length = entries == null ? 0 : entries.length;
    this.clear();
    while(++index < length){
        var entry = entries[index];
        this.set(entry[0], entry[1]);
    }
}
// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;
module.exports = ListCache;

},{"./_listCacheClear":"hgUYk","./_listCacheDelete":"3OxlN","./_listCacheGet":"9eM5i","./_listCacheHas":"gvOcg","./_listCacheSet":"eB1OV"}],"hgUYk":[function(require,module,exports) {
/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */ function listCacheClear() {
    this.__data__ = [];
    this.size = 0;
}
module.exports = listCacheClear;

},{}],"3OxlN":[function(require,module,exports) {
var assocIndexOf = require('./_assocIndexOf');
/** Used for built-in method references. */ var arrayProto = Array.prototype;
/** Built-in value references. */ var splice = arrayProto.splice;
/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */ function listCacheDelete(key) {
    var data = this.__data__, index = assocIndexOf(data, key);
    if (index < 0) return false;
    var lastIndex = data.length - 1;
    if (index == lastIndex) data.pop();
    else splice.call(data, index, 1);
    --this.size;
    return true;
}
module.exports = listCacheDelete;

},{"./_assocIndexOf":"1J3EE"}],"1J3EE":[function(require,module,exports) {
var eq = require('./eq');
/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */ function assocIndexOf(array, key) {
    var length = array.length;
    while(length--){
        if (eq(array[length][0], key)) return length;
    }
    return -1;
}
module.exports = assocIndexOf;

},{"./eq":"6gSTc"}],"6gSTc":[function(require,module,exports) {
/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */ function eq(value, other) {
    return value === other || value !== value && other !== other;
}
module.exports = eq;

},{}],"9eM5i":[function(require,module,exports) {
var assocIndexOf = require('./_assocIndexOf');
/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */ function listCacheGet(key) {
    var data = this.__data__, index = assocIndexOf(data, key);
    return index < 0 ? undefined : data[index][1];
}
module.exports = listCacheGet;

},{"./_assocIndexOf":"1J3EE"}],"gvOcg":[function(require,module,exports) {
var assocIndexOf = require('./_assocIndexOf');
/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */ function listCacheHas(key) {
    return assocIndexOf(this.__data__, key) > -1;
}
module.exports = listCacheHas;

},{"./_assocIndexOf":"1J3EE"}],"eB1OV":[function(require,module,exports) {
var assocIndexOf = require('./_assocIndexOf');
/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */ function listCacheSet(key, value) {
    var data = this.__data__, index = assocIndexOf(data, key);
    if (index < 0) {
        ++this.size;
        data.push([
            key,
            value
        ]);
    } else data[index][1] = value;
    return this;
}
module.exports = listCacheSet;

},{"./_assocIndexOf":"1J3EE"}],"6yVwu":[function(require,module,exports) {
var getNative = require('./_getNative'), root = require('./_root');
/* Built-in method references that are verified to be native. */ var Map = getNative(root, 'Map');
module.exports = Map;

},{"./_getNative":"kCKt4","./_root":"11IUn"}],"q2iOv":[function(require,module,exports) {
var getMapData = require('./_getMapData');
/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */ function mapCacheDelete(key) {
    var result = getMapData(this, key)['delete'](key);
    this.size -= result ? 1 : 0;
    return result;
}
module.exports = mapCacheDelete;

},{"./_getMapData":"g3Xzr"}],"g3Xzr":[function(require,module,exports) {
var isKeyable = require('./_isKeyable');
/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */ function getMapData(map, key) {
    var data = map.__data__;
    return isKeyable(key) ? data[typeof key == 'string' ? 'string' : 'hash'] : data.map;
}
module.exports = getMapData;

},{"./_isKeyable":"4w1bD"}],"4w1bD":[function(require,module,exports) {
/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */ function isKeyable(value) {
    var type = typeof value;
    return type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean' ? value !== '__proto__' : value === null;
}
module.exports = isKeyable;

},{}],"8F6m5":[function(require,module,exports) {
var getMapData = require('./_getMapData');
/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */ function mapCacheGet(key) {
    return getMapData(this, key).get(key);
}
module.exports = mapCacheGet;

},{"./_getMapData":"g3Xzr"}],"kVBTF":[function(require,module,exports) {
var getMapData = require('./_getMapData');
/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */ function mapCacheHas(key) {
    return getMapData(this, key).has(key);
}
module.exports = mapCacheHas;

},{"./_getMapData":"g3Xzr"}],"69lPZ":[function(require,module,exports) {
var getMapData = require('./_getMapData');
/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */ function mapCacheSet(key, value) {
    var data = getMapData(this, key), size = data.size;
    data.set(key, value);
    this.size += data.size == size ? 0 : 1;
    return this;
}
module.exports = mapCacheSet;

},{"./_getMapData":"g3Xzr"}],"lRX1t":[function(require,module,exports) {
var baseToString = require('./_baseToString');
/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */ function toString(value) {
    return value == null ? '' : baseToString(value);
}
module.exports = toString;

},{"./_baseToString":"hGQ1A"}],"hGQ1A":[function(require,module,exports) {
var Symbol = require('./_Symbol'), arrayMap = require('./_arrayMap'), isArray = require('./isArray'), isSymbol = require('./isSymbol');
/** Used as references for various `Number` constants. */ var INFINITY = 1 / 0;
/** Used to convert symbols to primitives and strings. */ var symbolProto = Symbol ? Symbol.prototype : undefined, symbolToString = symbolProto ? symbolProto.toString : undefined;
/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */ function baseToString(value) {
    // Exit early for strings to avoid a performance hit in some environments.
    if (typeof value == 'string') return value;
    if (isArray(value)) // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
    if (isSymbol(value)) return symbolToString ? symbolToString.call(value) : '';
    var result = value + '';
    return result == '0' && 1 / value == -INFINITY ? '-0' : result;
}
module.exports = baseToString;

},{"./_Symbol":"xWebb","./_arrayMap":"62kux","./isArray":"kFpV8","./isSymbol":"bepog"}],"62kux":[function(require,module,exports) {
/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */ function arrayMap(array, iteratee) {
    var index = -1, length = array == null ? 0 : array.length, result = Array(length);
    while(++index < length)result[index] = iteratee(array[index], index, array);
    return result;
}
module.exports = arrayMap;

},{}],"lmClg":[function(require,module,exports) {
var baseIsArguments = require('./_baseIsArguments'), isObjectLike = require('./isObjectLike');
/** Used for built-in method references. */ var objectProto = Object.prototype;
/** Used to check objects for own properties. */ var hasOwnProperty = objectProto.hasOwnProperty;
/** Built-in value references. */ var propertyIsEnumerable = objectProto.propertyIsEnumerable;
/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */ var isArguments = baseIsArguments(function() {
    return arguments;
}()) ? baseIsArguments : function(value) {
    return isObjectLike(value) && hasOwnProperty.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee');
};
module.exports = isArguments;

},{"./_baseIsArguments":"9iHTo","./isObjectLike":"fDYnb"}],"9iHTo":[function(require,module,exports) {
var baseGetTag = require('./_baseGetTag'), isObjectLike = require('./isObjectLike');
/** `Object#toString` result references. */ var argsTag = '[object Arguments]';
/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */ function baseIsArguments(value) {
    return isObjectLike(value) && baseGetTag(value) == argsTag;
}
module.exports = baseIsArguments;

},{"./_baseGetTag":"0i2U0","./isObjectLike":"fDYnb"}],"cM06B":[function(require,module,exports) {
/** Used as references for various `Number` constants. */ var MAX_SAFE_INTEGER = 9007199254740991;
/** Used to detect unsigned integer values. */ var reIsUint = /^(?:0|[1-9]\d*)$/;
/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */ function isIndex(value, length) {
    var type = typeof value;
    length = length == null ? MAX_SAFE_INTEGER : length;
    return !!length && (type == 'number' || type != 'symbol' && reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
}
module.exports = isIndex;

},{}],"g0eIg":[function(require,module,exports) {
/** Used as references for various `Number` constants. */ var MAX_SAFE_INTEGER = 9007199254740991;
/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */ function isLength(value) {
    return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}
module.exports = isLength;

},{}],"30fQL":[function(require,module,exports) {
var isSymbol = require('./isSymbol');
/** Used as references for various `Number` constants. */ var INFINITY = 1 / 0;
/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */ function toKey(value) {
    if (typeof value == 'string' || isSymbol(value)) return value;
    var result = value + '';
    return result == '0' && 1 / value == -INFINITY ? '-0' : result;
}
module.exports = toKey;

},{"./isSymbol":"bepog"}],"iKh25":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const isSchema = (obj)=>obj && obj.__isYupSchema__
;
exports.default = isSchema;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"ylBJD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _validationError = require("../ValidationError");
var _validationErrorDefault = parcelHelpers.interopDefault(_validationError);
const once = (cb)=>{
    let fired = false;
    return (...args)=>{
        if (fired) return;
        fired = true;
        cb(...args);
    };
};
function runTests(options, cb) {
    let { endEarly , tests , args , value , errors , sort , path  } = options;
    let callback = once(cb);
    let count = tests.length;
    const nestedErrors = [];
    errors = errors ? errors : [];
    if (!count) return errors.length ? callback(new _validationErrorDefault.default(errors, value, path)) : callback(null, value);
    for(let i = 0; i < tests.length; i++){
        const test = tests[i];
        test(args, function finishTestRun(err) {
            if (err) {
                // always return early for non validation errors
                if (!_validationErrorDefault.default.isError(err)) return callback(err, value);
                if (endEarly) {
                    err.value = value;
                    return callback(err, value);
                }
                nestedErrors.push(err);
            }
            if (--count <= 0) {
                if (nestedErrors.length) {
                    if (sort) nestedErrors.sort(sort); //show parent errors after the nested ones: name.first, name
                    if (errors.length) nestedErrors.push(...errors);
                    errors = nestedErrors;
                }
                if (errors.length) {
                    callback(new _validationErrorDefault.default(errors, value, path), value);
                    return;
                }
                callback(null, value);
            }
        });
    }
}
exports.default = runTests;

},{"../ValidationError":"bRNBk","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"bRNBk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _printValue = require("./util/printValue");
var _printValueDefault = parcelHelpers.interopDefault(_printValue);
var _toArray = require("./util/toArray");
var _toArrayDefault = parcelHelpers.interopDefault(_toArray);
function _extends() {
    _extends = Object.assign || function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
        }
        return target;
    };
    return _extends.apply(this, arguments);
}
let strReg = /\$\{\s*(\w+)\s*\}/g;
class ValidationError extends Error {
    static formatError(message, params) {
        const path = params.label || params.path || 'this';
        if (path !== params.path) params = _extends({
        }, params, {
            path
        });
        if (typeof message === 'string') return message.replace(strReg, (_, key)=>_printValueDefault.default(params[key])
        );
        if (typeof message === 'function') return message(params);
        return message;
    }
    static isError(err) {
        return err && err.name === 'ValidationError';
    }
    constructor(errorOrErrors, value, field, type){
        super();
        this.value = void 0;
        this.path = void 0;
        this.type = void 0;
        this.errors = void 0;
        this.params = void 0;
        this.inner = void 0;
        this.name = 'ValidationError';
        this.value = value;
        this.path = field;
        this.type = type;
        this.errors = [];
        this.inner = [];
        _toArrayDefault.default(errorOrErrors).forEach((err)=>{
            if (ValidationError.isError(err)) {
                this.errors.push(...err.errors);
                this.inner = this.inner.concat(err.inner.length ? err.inner : err);
            } else this.errors.push(err);
        });
        this.message = this.errors.length > 1 ? `${this.errors.length} errors occurred` : this.errors[0];
        if (Error.captureStackTrace) Error.captureStackTrace(this, ValidationError);
    }
}
exports.default = ValidationError;

},{"./util/printValue":"aWvvR","./util/toArray":"fszoS","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"fszoS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function toArray(value) {
    return value == null ? [] : [].concat(value);
}
exports.default = toArray;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"kAja4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _mapValues = require("lodash/mapValues");
var _mapValuesDefault = parcelHelpers.interopDefault(_mapValues);
var _validationError = require("../ValidationError");
var _validationErrorDefault = parcelHelpers.interopDefault(_validationError);
var _reference = require("../Reference");
var _referenceDefault = parcelHelpers.interopDefault(_reference);
function _extends() {
    _extends = Object.assign || function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
        }
        return target;
    };
    return _extends.apply(this, arguments);
}
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {
    };
    var target = {
    };
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
function createValidation(config) {
    function validate(_ref, cb) {
        let { value , path ='' , label , options , originalValue , sync  } = _ref, rest = _objectWithoutPropertiesLoose(_ref, [
            "value",
            "path",
            "label",
            "options",
            "originalValue",
            "sync"
        ]);
        const { name , test , params , message  } = config;
        let { parent , context  } = options;
        function resolve(item) {
            return _referenceDefault.default.isRef(item) ? item.getValue(value, parent, context) : item;
        }
        function createError(overrides = {
        }) {
            const nextParams = _mapValuesDefault.default(_extends({
                value,
                originalValue,
                label,
                path: overrides.path || path
            }, params, overrides.params), resolve);
            const error = new _validationErrorDefault.default(_validationErrorDefault.default.formatError(overrides.message || message, nextParams), value, nextParams.path, overrides.type || name);
            error.params = nextParams;
            return error;
        }
        let ctx = _extends({
            path,
            parent,
            type: name,
            createError,
            resolve,
            options,
            originalValue
        }, rest);
        if (!sync) {
            try {
                Promise.resolve(test.call(ctx, value, ctx)).then((validOrError)=>{
                    if (_validationErrorDefault.default.isError(validOrError)) cb(validOrError);
                    else if (!validOrError) cb(createError());
                    else cb(null, validOrError);
                }).catch(cb);
            } catch (err) {
                cb(err);
            }
            return;
        }
        let result;
        try {
            var _ref2;
            result = test.call(ctx, value, ctx);
            if (typeof ((_ref2 = result) == null ? void 0 : _ref2.then) === 'function') throw new Error(`Validation test of type: "${ctx.type}" returned a Promise during a synchronous validate. ` + `This test will finish after the validate call has returned`);
        } catch (err) {
            cb(err);
            return;
        }
        if (_validationErrorDefault.default.isError(result)) cb(result);
        else if (!result) cb(createError());
        else cb(null, result);
    }
    validate.OPTIONS = config;
    return validate;
}
exports.default = createValidation;

},{"lodash/mapValues":"gWYFv","../ValidationError":"bRNBk","../Reference":"1c78R","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"gWYFv":[function(require,module,exports) {
var baseAssignValue = require('./_baseAssignValue'), baseForOwn = require('./_baseForOwn'), baseIteratee = require('./_baseIteratee');
/**
 * Creates an object with the same keys as `object` and values generated
 * by running each own enumerable string keyed property of `object` thru
 * `iteratee`. The iteratee is invoked with three arguments:
 * (value, key, object).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Object
 * @param {Object} object The object to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Object} Returns the new mapped object.
 * @see _.mapKeys
 * @example
 *
 * var users = {
 *   'fred':    { 'user': 'fred',    'age': 40 },
 *   'pebbles': { 'user': 'pebbles', 'age': 1 }
 * };
 *
 * _.mapValues(users, function(o) { return o.age; });
 * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
 *
 * // The `_.property` iteratee shorthand.
 * _.mapValues(users, 'age');
 * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
 */ function mapValues(object, iteratee) {
    var result = {
    };
    iteratee = baseIteratee(iteratee, 3);
    baseForOwn(object, function(value, key, object) {
        baseAssignValue(result, key, iteratee(value, key, object));
    });
    return result;
}
module.exports = mapValues;

},{"./_baseAssignValue":"1HqjL","./_baseForOwn":"pHSzI","./_baseIteratee":"dZOiR"}],"1HqjL":[function(require,module,exports) {
var defineProperty = require('./_defineProperty');
/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */ function baseAssignValue(object, key, value) {
    if (key == '__proto__' && defineProperty) defineProperty(object, key, {
        'configurable': true,
        'enumerable': true,
        'value': value,
        'writable': true
    });
    else object[key] = value;
}
module.exports = baseAssignValue;

},{"./_defineProperty":"fjMdD"}],"fjMdD":[function(require,module,exports) {
var getNative = require('./_getNative');
var defineProperty = function() {
    try {
        var func = getNative(Object, 'defineProperty');
        func({
        }, '', {
        });
        return func;
    } catch (e) {
    }
}();
module.exports = defineProperty;

},{"./_getNative":"kCKt4"}],"pHSzI":[function(require,module,exports) {
var baseFor = require('./_baseFor'), keys = require('./keys');
/**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */ function baseForOwn(object, iteratee) {
    return object && baseFor(object, iteratee, keys);
}
module.exports = baseForOwn;

},{"./_baseFor":"ezhil","./keys":"5kkas"}],"ezhil":[function(require,module,exports) {
var createBaseFor = require('./_createBaseFor');
/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */ var baseFor = createBaseFor();
module.exports = baseFor;

},{"./_createBaseFor":"dPu0h"}],"dPu0h":[function(require,module,exports) {
/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */ function createBaseFor(fromRight) {
    return function(object, iteratee, keysFunc) {
        var index = -1, iterable = Object(object), props = keysFunc(object), length = props.length;
        while(length--){
            var key = props[fromRight ? length : ++index];
            if (iteratee(iterable[key], key, iterable) === false) break;
        }
        return object;
    };
}
module.exports = createBaseFor;

},{}],"5kkas":[function(require,module,exports) {
var arrayLikeKeys = require('./_arrayLikeKeys'), baseKeys = require('./_baseKeys'), isArrayLike = require('./isArrayLike');
/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */ function keys(object) {
    return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}
module.exports = keys;

},{"./_arrayLikeKeys":"hybpk","./_baseKeys":"g9BND","./isArrayLike":"1oaHP"}],"hybpk":[function(require,module,exports) {
var baseTimes = require('./_baseTimes'), isArguments = require('./isArguments'), isArray = require('./isArray'), isBuffer = require('./isBuffer'), isIndex = require('./_isIndex'), isTypedArray = require('./isTypedArray');
/** Used for built-in method references. */ var objectProto = Object.prototype;
/** Used to check objects for own properties. */ var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */ function arrayLikeKeys(value, inherited) {
    var isArr = isArray(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length = result.length;
    for(var key in value)if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
    (key == 'length' || isBuff && (key == 'offset' || key == 'parent') || isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset') || // Skip index properties.
    isIndex(key, length)))) result.push(key);
    return result;
}
module.exports = arrayLikeKeys;

},{"./_baseTimes":"5FnyB","./isArguments":"lmClg","./isArray":"kFpV8","./isBuffer":"5iXbq","./_isIndex":"cM06B","./isTypedArray":"kkG0l"}],"5FnyB":[function(require,module,exports) {
/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */ function baseTimes(n, iteratee) {
    var index = -1, result = Array(n);
    while(++index < n)result[index] = iteratee(index);
    return result;
}
module.exports = baseTimes;

},{}],"5iXbq":[function(require,module,exports) {
var root = require('./_root'), stubFalse = require('./stubFalse');
/** Detect free variable `exports`. */ var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;
/** Detect free variable `module`. */ var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;
/** Detect the popular CommonJS extension `module.exports`. */ var moduleExports = freeModule && freeModule.exports === freeExports;
/** Built-in value references. */ var Buffer = moduleExports ? root.Buffer : undefined;
/* Built-in method references for those with the same name as other `lodash` methods. */ var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;
/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */ var isBuffer = nativeIsBuffer || stubFalse;
module.exports = isBuffer;

},{"./_root":"11IUn","./stubFalse":"jgg0s"}],"jgg0s":[function(require,module,exports) {
/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */ function stubFalse() {
    return false;
}
module.exports = stubFalse;

},{}],"kkG0l":[function(require,module,exports) {
var baseIsTypedArray = require('./_baseIsTypedArray'), baseUnary = require('./_baseUnary'), nodeUtil = require('./_nodeUtil');
/* Node.js helper references. */ var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */ var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
module.exports = isTypedArray;

},{"./_baseIsTypedArray":"iqfDQ","./_baseUnary":"g0s9S","./_nodeUtil":"b47VH"}],"iqfDQ":[function(require,module,exports) {
var baseGetTag = require('./_baseGetTag'), isLength = require('./isLength'), isObjectLike = require('./isObjectLike');
/** `Object#toString` result references. */ var argsTag = '[object Arguments]', arrayTag = '[object Array]', boolTag = '[object Boolean]', dateTag = '[object Date]', errorTag = '[object Error]', funcTag = '[object Function]', mapTag = '[object Map]', numberTag = '[object Number]', objectTag = '[object Object]', regexpTag = '[object RegExp]', setTag = '[object Set]', stringTag = '[object String]', weakMapTag = '[object WeakMap]';
var arrayBufferTag = '[object ArrayBuffer]', dataViewTag = '[object DataView]', float32Tag = '[object Float32Array]', float64Tag = '[object Float64Array]', int8Tag = '[object Int8Array]', int16Tag = '[object Int16Array]', int32Tag = '[object Int32Array]', uint8Tag = '[object Uint8Array]', uint8ClampedTag = '[object Uint8ClampedArray]', uint16Tag = '[object Uint16Array]', uint32Tag = '[object Uint32Array]';
/** Used to identify `toStringTag` values of typed arrays. */ var typedArrayTags = {
};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */ function baseIsTypedArray(value) {
    return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}
module.exports = baseIsTypedArray;

},{"./_baseGetTag":"0i2U0","./isLength":"g0eIg","./isObjectLike":"fDYnb"}],"g0s9S":[function(require,module,exports) {
/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */ function baseUnary(func) {
    return function(value) {
        return func(value);
    };
}
module.exports = baseUnary;

},{}],"b47VH":[function(require,module,exports) {
var freeGlobal = require('./_freeGlobal');
/** Detect free variable `exports`. */ var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;
/** Detect free variable `module`. */ var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;
/** Detect the popular CommonJS extension `module.exports`. */ var moduleExports = freeModule && freeModule.exports === freeExports;
/** Detect free variable `process` from Node.js. */ var freeProcess = moduleExports && freeGlobal.process;
/** Used to access faster Node.js helpers. */ var nodeUtil = function() {
    try {
        // Use `util.types` for Node.js 10+.
        var types = freeModule && freeModule.require && freeModule.require('util').types;
        if (types) return types;
        // Legacy `process.binding('util')` for Node.js < 10.
        return freeProcess && freeProcess.binding && freeProcess.binding('util');
    } catch (e) {
    }
}();
module.exports = nodeUtil;

},{"./_freeGlobal":"349pR"}],"g9BND":[function(require,module,exports) {
var isPrototype = require('./_isPrototype'), nativeKeys = require('./_nativeKeys');
/** Used for built-in method references. */ var objectProto = Object.prototype;
/** Used to check objects for own properties. */ var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */ function baseKeys(object) {
    if (!isPrototype(object)) return nativeKeys(object);
    var result = [];
    for(var key in Object(object))if (hasOwnProperty.call(object, key) && key != 'constructor') result.push(key);
    return result;
}
module.exports = baseKeys;

},{"./_isPrototype":"6PYDZ","./_nativeKeys":"4jxWd"}],"6PYDZ":[function(require,module,exports) {
/** Used for built-in method references. */ var objectProto = Object.prototype;
/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */ function isPrototype(value) {
    var Ctor = value && value.constructor, proto = typeof Ctor == 'function' && Ctor.prototype || objectProto;
    return value === proto;
}
module.exports = isPrototype;

},{}],"4jxWd":[function(require,module,exports) {
var overArg = require('./_overArg');
/* Built-in method references for those with the same name as other `lodash` methods. */ var nativeKeys = overArg(Object.keys, Object);
module.exports = nativeKeys;

},{"./_overArg":"bQdhf"}],"bQdhf":[function(require,module,exports) {
/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */ function overArg(func, transform) {
    return function(arg) {
        return func(transform(arg));
    };
}
module.exports = overArg;

},{}],"1oaHP":[function(require,module,exports) {
var isFunction = require('./isFunction'), isLength = require('./isLength');
/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */ function isArrayLike(value) {
    return value != null && isLength(value.length) && !isFunction(value);
}
module.exports = isArrayLike;

},{"./isFunction":"hgsN6","./isLength":"g0eIg"}],"dZOiR":[function(require,module,exports) {
var baseMatches = require('./_baseMatches'), baseMatchesProperty = require('./_baseMatchesProperty'), identity = require('./identity'), isArray = require('./isArray'), property = require('./property');
/**
 * The base implementation of `_.iteratee`.
 *
 * @private
 * @param {*} [value=_.identity] The value to convert to an iteratee.
 * @returns {Function} Returns the iteratee.
 */ function baseIteratee(value) {
    // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
    // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
    if (typeof value == 'function') return value;
    if (value == null) return identity;
    if (typeof value == 'object') return isArray(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
    return property(value);
}
module.exports = baseIteratee;

},{"./_baseMatches":"ekXFb","./_baseMatchesProperty":"kq8V3","./identity":"gD41M","./isArray":"kFpV8","./property":"i2lWi"}],"ekXFb":[function(require,module,exports) {
var baseIsMatch = require('./_baseIsMatch'), getMatchData = require('./_getMatchData'), matchesStrictComparable = require('./_matchesStrictComparable');
/**
 * The base implementation of `_.matches` which doesn't clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new spec function.
 */ function baseMatches(source) {
    var matchData = getMatchData(source);
    if (matchData.length == 1 && matchData[0][2]) return matchesStrictComparable(matchData[0][0], matchData[0][1]);
    return function(object) {
        return object === source || baseIsMatch(object, source, matchData);
    };
}
module.exports = baseMatches;

},{"./_baseIsMatch":"cRvjN","./_getMatchData":"4lson","./_matchesStrictComparable":"loNil"}],"cRvjN":[function(require,module,exports) {
var Stack = require('./_Stack'), baseIsEqual = require('./_baseIsEqual');
/** Used to compose bitmasks for value comparisons. */ var COMPARE_PARTIAL_FLAG = 1, COMPARE_UNORDERED_FLAG = 2;
/**
 * The base implementation of `_.isMatch` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @param {Array} matchData The property names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */ function baseIsMatch(object, source, matchData, customizer) {
    var index = matchData.length, length = index, noCustomizer = !customizer;
    if (object == null) return !length;
    object = Object(object);
    while(index--){
        var data = matchData[index];
        if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) return false;
    }
    while(++index < length){
        data = matchData[index];
        var key = data[0], objValue = object[key], srcValue = data[1];
        if (noCustomizer && data[2]) {
            if (objValue === undefined && !(key in object)) return false;
        } else {
            var stack = new Stack;
            if (customizer) var result = customizer(objValue, srcValue, key, object, source, stack);
            if (!(result === undefined ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack) : result)) return false;
        }
    }
    return true;
}
module.exports = baseIsMatch;

},{"./_Stack":"dftg4","./_baseIsEqual":"gCWQL"}],"dftg4":[function(require,module,exports) {
var ListCache = require('./_ListCache'), stackClear = require('./_stackClear'), stackDelete = require('./_stackDelete'), stackGet = require('./_stackGet'), stackHas = require('./_stackHas'), stackSet = require('./_stackSet');
/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */ function Stack(entries) {
    var data = this.__data__ = new ListCache(entries);
    this.size = data.size;
}
// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;
module.exports = Stack;

},{"./_ListCache":"hAKMT","./_stackClear":"ijn01","./_stackDelete":"gbSdR","./_stackGet":"es5S6","./_stackHas":"hYfRX","./_stackSet":"iPZfa"}],"ijn01":[function(require,module,exports) {
var ListCache = require('./_ListCache');
/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */ function stackClear() {
    this.__data__ = new ListCache;
    this.size = 0;
}
module.exports = stackClear;

},{"./_ListCache":"hAKMT"}],"gbSdR":[function(require,module,exports) {
/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */ function stackDelete(key) {
    var data = this.__data__, result = data['delete'](key);
    this.size = data.size;
    return result;
}
module.exports = stackDelete;

},{}],"es5S6":[function(require,module,exports) {
/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */ function stackGet(key) {
    return this.__data__.get(key);
}
module.exports = stackGet;

},{}],"hYfRX":[function(require,module,exports) {
/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */ function stackHas(key) {
    return this.__data__.has(key);
}
module.exports = stackHas;

},{}],"iPZfa":[function(require,module,exports) {
var ListCache = require('./_ListCache'), Map = require('./_Map'), MapCache = require('./_MapCache');
/** Used as the size to enable large array optimizations. */ var LARGE_ARRAY_SIZE = 200;
/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */ function stackSet(key, value) {
    var data = this.__data__;
    if (data instanceof ListCache) {
        var pairs = data.__data__;
        if (!Map || pairs.length < LARGE_ARRAY_SIZE - 1) {
            pairs.push([
                key,
                value
            ]);
            this.size = ++data.size;
            return this;
        }
        data = this.__data__ = new MapCache(pairs);
    }
    data.set(key, value);
    this.size = data.size;
    return this;
}
module.exports = stackSet;

},{"./_ListCache":"hAKMT","./_Map":"6yVwu","./_MapCache":"j7pxA"}],"gCWQL":[function(require,module,exports) {
var baseIsEqualDeep = require('./_baseIsEqualDeep'), isObjectLike = require('./isObjectLike');
/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */ function baseIsEqual(value, other, bitmask, customizer, stack) {
    if (value === other) return true;
    if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) return value !== value && other !== other;
    return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}
module.exports = baseIsEqual;

},{"./_baseIsEqualDeep":"c1lD8","./isObjectLike":"fDYnb"}],"c1lD8":[function(require,module,exports) {
var Stack = require('./_Stack'), equalArrays = require('./_equalArrays'), equalByTag = require('./_equalByTag'), equalObjects = require('./_equalObjects'), getTag = require('./_getTag'), isArray = require('./isArray'), isBuffer = require('./isBuffer'), isTypedArray = require('./isTypedArray');
/** Used to compose bitmasks for value comparisons. */ var COMPARE_PARTIAL_FLAG = 1;
/** `Object#toString` result references. */ var argsTag = '[object Arguments]', arrayTag = '[object Array]', objectTag = '[object Object]';
/** Used for built-in method references. */ var objectProto = Object.prototype;
/** Used to check objects for own properties. */ var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */ function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
    var objIsArr = isArray(object), othIsArr = isArray(other), objTag = objIsArr ? arrayTag : getTag(object), othTag = othIsArr ? arrayTag : getTag(other);
    objTag = objTag == argsTag ? objectTag : objTag;
    othTag = othTag == argsTag ? objectTag : othTag;
    var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
    if (isSameTag && isBuffer(object)) {
        if (!isBuffer(other)) return false;
        objIsArr = true;
        objIsObj = false;
    }
    if (isSameTag && !objIsObj) {
        stack || (stack = new Stack);
        return objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
    }
    if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
        var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'), othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');
        if (objIsWrapped || othIsWrapped) {
            var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
            stack || (stack = new Stack);
            return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
        }
    }
    if (!isSameTag) return false;
    stack || (stack = new Stack);
    return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}
module.exports = baseIsEqualDeep;

},{"./_Stack":"dftg4","./_equalArrays":"3htr2","./_equalByTag":"6umoV","./_equalObjects":"a03np","./_getTag":"bG1PE","./isArray":"kFpV8","./isBuffer":"5iXbq","./isTypedArray":"kkG0l"}],"3htr2":[function(require,module,exports) {
var SetCache = require('./_SetCache'), arraySome = require('./_arraySome'), cacheHas = require('./_cacheHas');
/** Used to compose bitmasks for value comparisons. */ var COMPARE_PARTIAL_FLAG = 1, COMPARE_UNORDERED_FLAG = 2;
/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */ function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
    var isPartial = bitmask & COMPARE_PARTIAL_FLAG, arrLength = array.length, othLength = other.length;
    if (arrLength != othLength && !(isPartial && othLength > arrLength)) return false;
    // Check that cyclic values are equal.
    var arrStacked = stack.get(array);
    var othStacked = stack.get(other);
    if (arrStacked && othStacked) return arrStacked == other && othStacked == array;
    var index = -1, result = true, seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache : undefined;
    stack.set(array, other);
    stack.set(other, array);
    // Ignore non-index properties.
    while(++index < arrLength){
        var arrValue = array[index], othValue = other[index];
        if (customizer) var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
        if (compared !== undefined) {
            if (compared) continue;
            result = false;
            break;
        }
        // Recursively compare arrays (susceptible to call stack limits).
        if (seen) {
            if (!arraySome(other, function(othValue, othIndex) {
                if (!cacheHas(seen, othIndex) && (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) return seen.push(othIndex);
            })) {
                result = false;
                break;
            }
        } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
            result = false;
            break;
        }
    }
    stack['delete'](array);
    stack['delete'](other);
    return result;
}
module.exports = equalArrays;

},{"./_SetCache":"g0RS0","./_arraySome":"df8z7","./_cacheHas":"gEHFB"}],"g0RS0":[function(require,module,exports) {
var MapCache = require('./_MapCache'), setCacheAdd = require('./_setCacheAdd'), setCacheHas = require('./_setCacheHas');
/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */ function SetCache(values) {
    var index = -1, length = values == null ? 0 : values.length;
    this.__data__ = new MapCache;
    while(++index < length)this.add(values[index]);
}
// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;
module.exports = SetCache;

},{"./_MapCache":"j7pxA","./_setCacheAdd":"dfpGu","./_setCacheHas":"90Y2k"}],"dfpGu":[function(require,module,exports) {
/** Used to stand-in for `undefined` hash values. */ var HASH_UNDEFINED = '__lodash_hash_undefined__';
/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */ function setCacheAdd(value) {
    this.__data__.set(value, HASH_UNDEFINED);
    return this;
}
module.exports = setCacheAdd;

},{}],"90Y2k":[function(require,module,exports) {
/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */ function setCacheHas(value) {
    return this.__data__.has(value);
}
module.exports = setCacheHas;

},{}],"df8z7":[function(require,module,exports) {
/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */ function arraySome(array, predicate) {
    var index = -1, length = array == null ? 0 : array.length;
    while(++index < length){
        if (predicate(array[index], index, array)) return true;
    }
    return false;
}
module.exports = arraySome;

},{}],"gEHFB":[function(require,module,exports) {
/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */ function cacheHas(cache, key) {
    return cache.has(key);
}
module.exports = cacheHas;

},{}],"6umoV":[function(require,module,exports) {
var Symbol = require('./_Symbol'), Uint8Array = require('./_Uint8Array'), eq = require('./eq'), equalArrays = require('./_equalArrays'), mapToArray = require('./_mapToArray'), setToArray = require('./_setToArray');
/** Used to compose bitmasks for value comparisons. */ var COMPARE_PARTIAL_FLAG = 1, COMPARE_UNORDERED_FLAG = 2;
/** `Object#toString` result references. */ var boolTag = '[object Boolean]', dateTag = '[object Date]', errorTag = '[object Error]', mapTag = '[object Map]', numberTag = '[object Number]', regexpTag = '[object RegExp]', setTag = '[object Set]', stringTag = '[object String]', symbolTag = '[object Symbol]';
var arrayBufferTag = '[object ArrayBuffer]', dataViewTag = '[object DataView]';
/** Used to convert symbols to primitives and strings. */ var symbolProto = Symbol ? Symbol.prototype : undefined, symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;
/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */ function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
    switch(tag){
        case dataViewTag:
            if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) return false;
            object = object.buffer;
            other = other.buffer;
        case arrayBufferTag:
            if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array(object), new Uint8Array(other))) return false;
            return true;
        case boolTag:
        case dateTag:
        case numberTag:
            // Coerce booleans to `1` or `0` and dates to milliseconds.
            // Invalid dates are coerced to `NaN`.
            return eq(+object, +other);
        case errorTag:
            return object.name == other.name && object.message == other.message;
        case regexpTag:
        case stringTag:
            // Coerce regexes to strings and treat strings, primitives and objects,
            // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
            // for more details.
            return object == other + '';
        case mapTag:
            var convert = mapToArray;
        case setTag:
            var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
            convert || (convert = setToArray);
            if (object.size != other.size && !isPartial) return false;
            // Assume cyclic values are equal.
            var stacked = stack.get(object);
            if (stacked) return stacked == other;
            bitmask |= COMPARE_UNORDERED_FLAG;
            // Recursively compare objects (susceptible to call stack limits).
            stack.set(object, other);
            var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
            stack['delete'](object);
            return result;
        case symbolTag:
            if (symbolValueOf) return symbolValueOf.call(object) == symbolValueOf.call(other);
    }
    return false;
}
module.exports = equalByTag;

},{"./_Symbol":"xWebb","./_Uint8Array":"kckJG","./eq":"6gSTc","./_equalArrays":"3htr2","./_mapToArray":"8D0Eg","./_setToArray":"2kMNQ"}],"kckJG":[function(require,module,exports) {
var root = require('./_root');
/** Built-in value references. */ var Uint8Array = root.Uint8Array;
module.exports = Uint8Array;

},{"./_root":"11IUn"}],"8D0Eg":[function(require,module,exports) {
/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */ function mapToArray(map) {
    var index = -1, result = Array(map.size);
    map.forEach(function(value, key) {
        result[++index] = [
            key,
            value
        ];
    });
    return result;
}
module.exports = mapToArray;

},{}],"2kMNQ":[function(require,module,exports) {
/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */ function setToArray(set) {
    var index = -1, result = Array(set.size);
    set.forEach(function(value) {
        result[++index] = value;
    });
    return result;
}
module.exports = setToArray;

},{}],"a03np":[function(require,module,exports) {
var getAllKeys = require('./_getAllKeys');
/** Used to compose bitmasks for value comparisons. */ var COMPARE_PARTIAL_FLAG = 1;
/** Used for built-in method references. */ var objectProto = Object.prototype;
/** Used to check objects for own properties. */ var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */ function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
    var isPartial = bitmask & COMPARE_PARTIAL_FLAG, objProps = getAllKeys(object), objLength = objProps.length, othProps = getAllKeys(other), othLength = othProps.length;
    if (objLength != othLength && !isPartial) return false;
    var index = objLength;
    while(index--){
        var key = objProps[index];
        if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) return false;
    }
    // Check that cyclic values are equal.
    var objStacked = stack.get(object);
    var othStacked = stack.get(other);
    if (objStacked && othStacked) return objStacked == other && othStacked == object;
    var result = true;
    stack.set(object, other);
    stack.set(other, object);
    var skipCtor = isPartial;
    while(++index < objLength){
        key = objProps[index];
        var objValue = object[key], othValue = other[key];
        if (customizer) var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
        // Recursively compare objects (susceptible to call stack limits).
        if (!(compared === undefined ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
            result = false;
            break;
        }
        skipCtor || (skipCtor = key == 'constructor');
    }
    if (result && !skipCtor) {
        var objCtor = object.constructor, othCtor = other.constructor;
        // Non `Object` object instances with different constructors are not equal.
        if (objCtor != othCtor && 'constructor' in object && 'constructor' in other && !(typeof objCtor == 'function' && objCtor instanceof objCtor && typeof othCtor == 'function' && othCtor instanceof othCtor)) result = false;
    }
    stack['delete'](object);
    stack['delete'](other);
    return result;
}
module.exports = equalObjects;

},{"./_getAllKeys":"8Kki6"}],"8Kki6":[function(require,module,exports) {
var baseGetAllKeys = require('./_baseGetAllKeys'), getSymbols = require('./_getSymbols'), keys = require('./keys');
/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */ function getAllKeys(object) {
    return baseGetAllKeys(object, keys, getSymbols);
}
module.exports = getAllKeys;

},{"./_baseGetAllKeys":"7FSz8","./_getSymbols":"eW8Tx","./keys":"5kkas"}],"7FSz8":[function(require,module,exports) {
var arrayPush = require('./_arrayPush'), isArray = require('./isArray');
/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */ function baseGetAllKeys(object, keysFunc, symbolsFunc) {
    var result = keysFunc(object);
    return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}
module.exports = baseGetAllKeys;

},{"./_arrayPush":"jhdIB","./isArray":"kFpV8"}],"jhdIB":[function(require,module,exports) {
/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */ function arrayPush(array, values) {
    var index = -1, length = values.length, offset = array.length;
    while(++index < length)array[offset + index] = values[index];
    return array;
}
module.exports = arrayPush;

},{}],"eW8Tx":[function(require,module,exports) {
var arrayFilter = require('./_arrayFilter'), stubArray = require('./stubArray');
/** Used for built-in method references. */ var objectProto = Object.prototype;
/** Built-in value references. */ var propertyIsEnumerable = objectProto.propertyIsEnumerable;
/* Built-in method references for those with the same name as other `lodash` methods. */ var nativeGetSymbols = Object.getOwnPropertySymbols;
/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */ var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
    if (object == null) return [];
    object = Object(object);
    return arrayFilter(nativeGetSymbols(object), function(symbol) {
        return propertyIsEnumerable.call(object, symbol);
    });
};
module.exports = getSymbols;

},{"./_arrayFilter":"7JFuv","./stubArray":"glJ5Q"}],"7JFuv":[function(require,module,exports) {
/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */ function arrayFilter(array, predicate) {
    var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
    while(++index < length){
        var value = array[index];
        if (predicate(value, index, array)) result[resIndex++] = value;
    }
    return result;
}
module.exports = arrayFilter;

},{}],"glJ5Q":[function(require,module,exports) {
/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */ function stubArray() {
    return [];
}
module.exports = stubArray;

},{}],"bG1PE":[function(require,module,exports) {
var DataView = require('./_DataView'), Map = require('./_Map'), Promise = require('./_Promise'), Set = require('./_Set'), WeakMap = require('./_WeakMap'), baseGetTag = require('./_baseGetTag'), toSource = require('./_toSource');
/** `Object#toString` result references. */ var mapTag = '[object Map]', objectTag = '[object Object]', promiseTag = '[object Promise]', setTag = '[object Set]', weakMapTag = '[object WeakMap]';
var dataViewTag = '[object DataView]';
/** Used to detect maps, sets, and weakmaps. */ var dataViewCtorString = toSource(DataView), mapCtorString = toSource(Map), promiseCtorString = toSource(Promise), setCtorString = toSource(Set), weakMapCtorString = toSource(WeakMap);
/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */ var getTag = baseGetTag;
// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map && getTag(new Map) != mapTag || Promise && getTag(Promise.resolve()) != promiseTag || Set && getTag(new Set) != setTag || WeakMap && getTag(new WeakMap) != weakMapTag) getTag = function(value) {
    var result = baseGetTag(value), Ctor = result == objectTag ? value.constructor : undefined, ctorString = Ctor ? toSource(Ctor) : '';
    if (ctorString) switch(ctorString){
        case dataViewCtorString:
            return dataViewTag;
        case mapCtorString:
            return mapTag;
        case promiseCtorString:
            return promiseTag;
        case setCtorString:
            return setTag;
        case weakMapCtorString:
            return weakMapTag;
    }
    return result;
};
module.exports = getTag;

},{"./_DataView":"6de8c","./_Map":"6yVwu","./_Promise":"ebS8G","./_Set":"4PD4x","./_WeakMap":"3Ssbw","./_baseGetTag":"0i2U0","./_toSource":"lfgIG"}],"6de8c":[function(require,module,exports) {
var getNative = require('./_getNative'), root = require('./_root');
/* Built-in method references that are verified to be native. */ var DataView = getNative(root, 'DataView');
module.exports = DataView;

},{"./_getNative":"kCKt4","./_root":"11IUn"}],"ebS8G":[function(require,module,exports) {
var getNative = require('./_getNative'), root = require('./_root');
/* Built-in method references that are verified to be native. */ var Promise = getNative(root, 'Promise');
module.exports = Promise;

},{"./_getNative":"kCKt4","./_root":"11IUn"}],"4PD4x":[function(require,module,exports) {
var getNative = require('./_getNative'), root = require('./_root');
/* Built-in method references that are verified to be native. */ var Set = getNative(root, 'Set');
module.exports = Set;

},{"./_getNative":"kCKt4","./_root":"11IUn"}],"3Ssbw":[function(require,module,exports) {
var getNative = require('./_getNative'), root = require('./_root');
/* Built-in method references that are verified to be native. */ var WeakMap = getNative(root, 'WeakMap');
module.exports = WeakMap;

},{"./_getNative":"kCKt4","./_root":"11IUn"}],"4lson":[function(require,module,exports) {
var isStrictComparable = require('./_isStrictComparable'), keys = require('./keys');
/**
 * Gets the property names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */ function getMatchData(object) {
    var result = keys(object), length = result.length;
    while(length--){
        var key = result[length], value = object[key];
        result[length] = [
            key,
            value,
            isStrictComparable(value)
        ];
    }
    return result;
}
module.exports = getMatchData;

},{"./_isStrictComparable":"6xl9M","./keys":"5kkas"}],"6xl9M":[function(require,module,exports) {
var isObject = require('./isObject');
/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */ function isStrictComparable(value) {
    return value === value && !isObject(value);
}
module.exports = isStrictComparable;

},{"./isObject":"euXL6"}],"loNil":[function(require,module,exports) {
/**
 * A specialized version of `matchesProperty` for source values suitable
 * for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */ function matchesStrictComparable(key, srcValue) {
    return function(object) {
        if (object == null) return false;
        return object[key] === srcValue && (srcValue !== undefined || key in Object(object));
    };
}
module.exports = matchesStrictComparable;

},{}],"kq8V3":[function(require,module,exports) {
var baseIsEqual = require('./_baseIsEqual'), get = require('./get'), hasIn = require('./hasIn'), isKey = require('./_isKey'), isStrictComparable = require('./_isStrictComparable'), matchesStrictComparable = require('./_matchesStrictComparable'), toKey = require('./_toKey');
/** Used to compose bitmasks for value comparisons. */ var COMPARE_PARTIAL_FLAG = 1, COMPARE_UNORDERED_FLAG = 2;
/**
 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */ function baseMatchesProperty(path, srcValue) {
    if (isKey(path) && isStrictComparable(srcValue)) return matchesStrictComparable(toKey(path), srcValue);
    return function(object) {
        var objValue = get(object, path);
        return objValue === undefined && objValue === srcValue ? hasIn(object, path) : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
    };
}
module.exports = baseMatchesProperty;

},{"./_baseIsEqual":"gCWQL","./get":"efq1u","./hasIn":"k4DDz","./_isKey":"6I3o3","./_isStrictComparable":"6xl9M","./_matchesStrictComparable":"loNil","./_toKey":"30fQL"}],"efq1u":[function(require,module,exports) {
var baseGet = require('./_baseGet');
/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */ function get(object, path, defaultValue) {
    var result = object == null ? undefined : baseGet(object, path);
    return result === undefined ? defaultValue : result;
}
module.exports = get;

},{"./_baseGet":"3E2uu"}],"3E2uu":[function(require,module,exports) {
var castPath = require('./_castPath'), toKey = require('./_toKey');
/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */ function baseGet(object, path) {
    path = castPath(path, object);
    var index = 0, length = path.length;
    while(object != null && index < length)object = object[toKey(path[index++])];
    return index && index == length ? object : undefined;
}
module.exports = baseGet;

},{"./_castPath":"l9t5O","./_toKey":"30fQL"}],"k4DDz":[function(require,module,exports) {
var baseHasIn = require('./_baseHasIn'), hasPath = require('./_hasPath');
/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */ function hasIn(object, path) {
    return object != null && hasPath(object, path, baseHasIn);
}
module.exports = hasIn;

},{"./_baseHasIn":"gGFBF","./_hasPath":"iTR3P"}],"gGFBF":[function(require,module,exports) {
/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */ function baseHasIn(object, key) {
    return object != null && key in Object(object);
}
module.exports = baseHasIn;

},{}],"gD41M":[function(require,module,exports) {
/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */ function identity(value) {
    return value;
}
module.exports = identity;

},{}],"i2lWi":[function(require,module,exports) {
var baseProperty = require('./_baseProperty'), basePropertyDeep = require('./_basePropertyDeep'), isKey = require('./_isKey'), toKey = require('./_toKey');
/**
 * Creates a function that returns the value at `path` of a given object.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 * @example
 *
 * var objects = [
 *   { 'a': { 'b': 2 } },
 *   { 'a': { 'b': 1 } }
 * ];
 *
 * _.map(objects, _.property('a.b'));
 * // => [2, 1]
 *
 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
 * // => [1, 2]
 */ function property(path) {
    return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
}
module.exports = property;

},{"./_baseProperty":"3F0SW","./_basePropertyDeep":"i2nAK","./_isKey":"6I3o3","./_toKey":"30fQL"}],"3F0SW":[function(require,module,exports) {
/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */ function baseProperty(key) {
    return function(object) {
        return object == null ? undefined : object[key];
    };
}
module.exports = baseProperty;

},{}],"i2nAK":[function(require,module,exports) {
var baseGet = require('./_baseGet');
/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 */ function basePropertyDeep(path) {
    return function(object) {
        return baseGet(object, path);
    };
}
module.exports = basePropertyDeep;

},{"./_baseGet":"3E2uu"}],"1c78R":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "create", ()=>create
);
var _propertyExpr = require("property-expr");
const prefixes = {
    context: '$',
    value: '.'
};
function create(key, options) {
    return new Reference(key, options);
}
class Reference {
    constructor(key, options = {
    }){
        this.key = void 0;
        this.isContext = void 0;
        this.isValue = void 0;
        this.isSibling = void 0;
        this.path = void 0;
        this.getter = void 0;
        this.map = void 0;
        if (typeof key !== 'string') throw new TypeError('ref must be a string, got: ' + key);
        this.key = key.trim();
        if (key === '') throw new TypeError('ref must be a non-empty string');
        this.isContext = this.key[0] === prefixes.context;
        this.isValue = this.key[0] === prefixes.value;
        this.isSibling = !this.isContext && !this.isValue;
        let prefix = this.isContext ? prefixes.context : this.isValue ? prefixes.value : '';
        this.path = this.key.slice(prefix.length);
        this.getter = this.path && _propertyExpr.getter(this.path, true);
        this.map = options.map;
    }
    getValue(value, parent, context) {
        let result = this.isContext ? context : this.isValue ? value : parent;
        if (this.getter) result = this.getter(result || {
        });
        if (this.map) result = this.map(result);
        return result;
    }
    /**
   *
   * @param {*} value
   * @param {Object} options
   * @param {Object=} options.context
   * @param {Object=} options.parent
   */ cast(value, options) {
        return this.getValue(value, options == null ? void 0 : options.parent, options == null ? void 0 : options.context);
    }
    resolve() {
        return this;
    }
    describe() {
        return {
            type: 'ref',
            key: this.key
        };
    }
    toString() {
        return `Ref(${this.key})`;
    }
    static isRef(value) {
        return value && value.__isYupRef;
    }
} // @ts-ignore
exports.default = Reference;
Reference.prototype.__isYupRef = true;

},{"property-expr":"gLFKs","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"gLFKs":[function(require,module,exports) {
/**
 * Based on Kendo UI Core expression code <https://github.com/telerik/kendo-ui-core#license-information>
 */ 'use strict';
function Cache(maxSize) {
    this._maxSize = maxSize;
    this.clear();
}
Cache.prototype.clear = function() {
    this._size = 0;
    this._values = Object.create(null);
};
Cache.prototype.get = function(key) {
    return this._values[key];
};
Cache.prototype.set = function(key, value) {
    this._size >= this._maxSize && this.clear();
    if (!(key in this._values)) this._size++;
    return this._values[key] = value;
};
var SPLIT_REGEX = /[^.^\]^[]+|(?=\[\]|\.\.)/g, DIGIT_REGEX = /^\d+$/, LEAD_DIGIT_REGEX = /^\d/, SPEC_CHAR_REGEX = /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g, CLEAN_QUOTES_REGEX = /^\s*(['"]?)(.*?)(\1)\s*$/, MAX_CACHE_SIZE = 512;
var pathCache = new Cache(MAX_CACHE_SIZE), setCache = new Cache(MAX_CACHE_SIZE), getCache = new Cache(MAX_CACHE_SIZE);
var config;
module.exports = {
    Cache: Cache,
    split: split,
    normalizePath: normalizePath,
    setter: function(path) {
        var parts = normalizePath(path);
        return setCache.get(path) || setCache.set(path, function setter(obj, value) {
            var index = 0;
            var len = parts.length;
            var data = obj;
            while(index < len - 1){
                var part = parts[index];
                if (part === '__proto__' || part === 'constructor' || part === 'prototype') return obj;
                data = data[parts[index++]];
            }
            data[parts[index]] = value;
        });
    },
    getter: function(path, safe) {
        var parts = normalizePath(path);
        return getCache.get(path) || getCache.set(path, function getter(data) {
            var index = 0, len = parts.length;
            while(index < len){
                if (data != null || !safe) data = data[parts[index++]];
                else return;
            }
            return data;
        });
    },
    join: function(segments) {
        return segments.reduce(function(path, part) {
            return path + (isQuoted(part) || DIGIT_REGEX.test(part) ? '[' + part + ']' : (path ? '.' : '') + part);
        }, '');
    },
    forEach: function(path, cb, thisArg) {
        forEach(Array.isArray(path) ? path : split(path), cb, thisArg);
    }
};
function normalizePath(path) {
    return pathCache.get(path) || pathCache.set(path, split(path).map(function(part) {
        return part.replace(CLEAN_QUOTES_REGEX, '$2');
    }));
}
function split(path) {
    return path.match(SPLIT_REGEX);
}
function forEach(parts, iter, thisArg) {
    var len = parts.length, part, idx, isArray, isBracket;
    for(idx = 0; idx < len; idx++){
        part = parts[idx];
        if (part) {
            if (shouldBeQuoted(part)) part = '"' + part + '"';
            isBracket = isQuoted(part);
            isArray = !isBracket && /^\d+$/.test(part);
            iter.call(thisArg, part, isBracket, isArray, idx, parts);
        }
    }
}
function isQuoted(str) {
    return typeof str === 'string' && str && [
        "'",
        '"'
    ].indexOf(str.charAt(0)) !== -1;
}
function hasLeadingNumber(part) {
    return part.match(LEAD_DIGIT_REGEX) && !part.match(DIGIT_REGEX);
}
function hasSpecialChars(part) {
    return SPEC_CHAR_REGEX.test(part);
}
function shouldBeQuoted(part) {
    return !isQuoted(part) && (hasLeadingNumber(part) || hasSpecialChars(part));
}

},{}],"e3lLA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getIn", ()=>getIn
);
var _propertyExpr = require("property-expr");
let trim = (part)=>part.substr(0, part.length - 1).substr(1)
;
function getIn(schema, path, value, context = value) {
    let parent, lastPart, lastPartDebug; // root path: ''
    if (!path) return {
        parent,
        parentPath: path,
        schema
    };
    _propertyExpr.forEach(path, (_part, isBracket, isArray)=>{
        let part = isBracket ? trim(_part) : _part;
        schema = schema.resolve({
            context,
            parent,
            value
        });
        if (schema.innerType) {
            let idx = isArray ? parseInt(part, 10) : 0;
            if (value && idx >= value.length) throw new Error(`Yup.reach cannot resolve an array item at index: ${_part}, in the path: ${path}. ` + `because there is no value at that index. `);
            parent = value;
            value = value && value[idx];
            schema = schema.innerType;
        } // sometimes the array index part of a path doesn't exist: "nested.arr.child"
        // in these cases the current part is the next schema and should be processed
        // in this iteration. For cases where the index signature is included this
        // check will fail and we'll handle the `child` part on the next iteration like normal
        if (!isArray) {
            if (!schema.fields || !schema.fields[part]) throw new Error(`The schema does not contain the path: ${path}. ` + `(failed at: ${lastPartDebug} which is a type: "${schema._type}")`);
            parent = value;
            value = value && value[part];
            schema = schema.fields[part];
        }
        lastPart = part;
        lastPartDebug = isBracket ? '[' + _part + ']' : '.' + _part;
    });
    return {
        schema,
        parent,
        parentPath: lastPart
    };
}
const reach = (obj, path, value, context)=>getIn(obj, path, value, context).schema
;
exports.default = reach;

},{"property-expr":"gLFKs","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"ergOl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _reference = require("../Reference");
var _referenceDefault = parcelHelpers.interopDefault(_reference);
class ReferenceSet {
    constructor(){
        this.list = void 0;
        this.refs = void 0;
        this.list = new Set();
        this.refs = new Map();
    }
    get size() {
        return this.list.size + this.refs.size;
    }
    describe() {
        const description = [];
        for (const item of this.list)description.push(item);
        for (const [, ref] of this.refs)description.push(ref.describe());
        return description;
    }
    toArray() {
        return Array.from(this.list).concat(Array.from(this.refs.values()));
    }
    resolveAll(resolve) {
        return this.toArray().reduce((acc, e)=>acc.concat(_referenceDefault.default.isRef(e) ? resolve(e) : e)
        , []);
    }
    add(value) {
        _referenceDefault.default.isRef(value) ? this.refs.set(value.key, value) : this.list.add(value);
    }
    delete(value) {
        _referenceDefault.default.isRef(value) ? this.refs.delete(value.key) : this.list.delete(value);
    }
    clone() {
        const next = new ReferenceSet();
        next.list = new Set(this.list);
        next.refs = new Map(this.refs);
        return next;
    }
    merge(newItems, removeItems) {
        const next = this.clone();
        newItems.list.forEach((value)=>next.add(value)
        );
        newItems.refs.forEach((value)=>next.add(value)
        );
        removeItems.list.forEach((value)=>next.delete(value)
        );
        removeItems.refs.forEach((value)=>next.delete(value)
        );
        return next;
    }
}
exports.default = ReferenceSet;

},{"../Reference":"1c78R","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"fZ3pI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "create", ()=>create
);
var _schema = require("./schema");
var _schemaDefault = parcelHelpers.interopDefault(_schema);
var _locale = require("./locale");
var _isAbsent = require("./util/isAbsent");
var _isAbsentDefault = parcelHelpers.interopDefault(_isAbsent);
function create() {
    return new BooleanSchema();
}
class BooleanSchema extends _schemaDefault.default {
    constructor(){
        super({
            type: 'boolean'
        });
        this.withMutation(()=>{
            this.transform(function(value) {
                if (!this.isType(value)) {
                    if (/^(true|1)$/i.test(String(value))) return true;
                    if (/^(false|0)$/i.test(String(value))) return false;
                }
                return value;
            });
        });
    }
    _typeCheck(v) {
        if (v instanceof Boolean) v = v.valueOf();
        return typeof v === 'boolean';
    }
    isTrue(message = _locale.boolean.isValue) {
        return this.test({
            message,
            name: 'is-value',
            exclusive: true,
            params: {
                value: 'true'
            },
            test (value) {
                return _isAbsentDefault.default(value) || value === true;
            }
        });
    }
    isFalse(message = _locale.boolean.isValue) {
        return this.test({
            message,
            name: 'is-value',
            exclusive: true,
            params: {
                value: 'false'
            },
            test (value) {
                return _isAbsentDefault.default(value) || value === false;
            }
        });
    }
}
exports.default = BooleanSchema;
create.prototype = BooleanSchema.prototype;

},{"./schema":"9QQkj","./locale":"8waLz","./util/isAbsent":"kqer7","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"kqer7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const isAbsent = (value)=>value == null
;
exports.default = isAbsent;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"aHTIr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "create", ()=>create
);
var _locale = require("./locale");
var _isAbsent = require("./util/isAbsent");
var _isAbsentDefault = parcelHelpers.interopDefault(_isAbsent);
var _schema = require("./schema"); // eslint-disable-next-line
var _schemaDefault = parcelHelpers.interopDefault(_schema);
let rEmail = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i; // eslint-disable-next-line
let rUrl = /^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i; // eslint-disable-next-line
let rUUID = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
let isTrimmed = (value)=>_isAbsentDefault.default(value) || value === value.trim()
;
let objStringTag = ({
}).toString();
function create() {
    return new StringSchema();
}
class StringSchema extends _schemaDefault.default {
    constructor(){
        super({
            type: 'string'
        });
        this.withMutation(()=>{
            this.transform(function(value) {
                if (this.isType(value)) return value;
                if (Array.isArray(value)) return value;
                const strValue = value != null && value.toString ? value.toString() : value;
                if (strValue === objStringTag) return value;
                return strValue;
            });
        });
    }
    _typeCheck(value) {
        if (value instanceof String) value = value.valueOf();
        return typeof value === 'string';
    }
    _isPresent(value) {
        return super._isPresent(value) && !!value.length;
    }
    length(length, message = _locale.string.length) {
        return this.test({
            message,
            name: 'length',
            exclusive: true,
            params: {
                length
            },
            test (value) {
                return _isAbsentDefault.default(value) || value.length === this.resolve(length);
            }
        });
    }
    min(min, message = _locale.string.min) {
        return this.test({
            message,
            name: 'min',
            exclusive: true,
            params: {
                min
            },
            test (value) {
                return _isAbsentDefault.default(value) || value.length >= this.resolve(min);
            }
        });
    }
    max(max, message = _locale.string.max) {
        return this.test({
            name: 'max',
            exclusive: true,
            message,
            params: {
                max
            },
            test (value) {
                return _isAbsentDefault.default(value) || value.length <= this.resolve(max);
            }
        });
    }
    matches(regex, options) {
        let excludeEmptyString = false;
        let message;
        let name;
        if (options) {
            if (typeof options === 'object') ({ excludeEmptyString =false , message , name  } = options);
            else message = options;
        }
        return this.test({
            name: name || 'matches',
            message: message || _locale.string.matches,
            params: {
                regex
            },
            test: (value)=>_isAbsentDefault.default(value) || value === '' && excludeEmptyString || value.search(regex) !== -1
        });
    }
    email(message = _locale.string.email) {
        return this.matches(rEmail, {
            name: 'email',
            message,
            excludeEmptyString: true
        });
    }
    url(message = _locale.string.url) {
        return this.matches(rUrl, {
            name: 'url',
            message,
            excludeEmptyString: true
        });
    }
    uuid(message = _locale.string.uuid) {
        return this.matches(rUUID, {
            name: 'uuid',
            message,
            excludeEmptyString: false
        });
    }
    ensure() {
        return this.default('').transform((val)=>val === null ? '' : val
        );
    }
    trim(message = _locale.string.trim) {
        return this.transform((val)=>val != null ? val.trim() : val
        ).test({
            message,
            name: 'trim',
            test: isTrimmed
        });
    }
    lowercase(message = _locale.string.lowercase) {
        return this.transform((value)=>!_isAbsentDefault.default(value) ? value.toLowerCase() : value
        ).test({
            message,
            name: 'string_case',
            exclusive: true,
            test: (value)=>_isAbsentDefault.default(value) || value === value.toLowerCase()
        });
    }
    uppercase(message = _locale.string.uppercase) {
        return this.transform((value)=>!_isAbsentDefault.default(value) ? value.toUpperCase() : value
        ).test({
            message,
            name: 'string_case',
            exclusive: true,
            test: (value)=>_isAbsentDefault.default(value) || value === value.toUpperCase()
        });
    }
}
exports.default = StringSchema;
create.prototype = StringSchema.prototype; //
 // String Interfaces
 //

},{"./locale":"8waLz","./util/isAbsent":"kqer7","./schema":"9QQkj","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"kLKPe":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "create", ()=>create
);
var _locale = require("./locale");
var _isAbsent = require("./util/isAbsent");
var _isAbsentDefault = parcelHelpers.interopDefault(_isAbsent);
var _schema = require("./schema");
var _schemaDefault = parcelHelpers.interopDefault(_schema);
let isNaN = (value)=>value != +value
;
function create() {
    return new NumberSchema();
}
class NumberSchema extends _schemaDefault.default {
    constructor(){
        super({
            type: 'number'
        });
        this.withMutation(()=>{
            this.transform(function(value) {
                let parsed = value;
                if (typeof parsed === 'string') {
                    parsed = parsed.replace(/\s/g, '');
                    if (parsed === '') return NaN; // don't use parseFloat to avoid positives on alpha-numeric strings
                    parsed = +parsed;
                }
                if (this.isType(parsed)) return parsed;
                return parseFloat(parsed);
            });
        });
    }
    _typeCheck(value) {
        if (value instanceof Number) value = value.valueOf();
        return typeof value === 'number' && !isNaN(value);
    }
    min(min, message = _locale.number.min) {
        return this.test({
            message,
            name: 'min',
            exclusive: true,
            params: {
                min
            },
            test (value) {
                return _isAbsentDefault.default(value) || value >= this.resolve(min);
            }
        });
    }
    max(max, message = _locale.number.max) {
        return this.test({
            message,
            name: 'max',
            exclusive: true,
            params: {
                max
            },
            test (value) {
                return _isAbsentDefault.default(value) || value <= this.resolve(max);
            }
        });
    }
    lessThan(less, message = _locale.number.lessThan) {
        return this.test({
            message,
            name: 'max',
            exclusive: true,
            params: {
                less
            },
            test (value) {
                return _isAbsentDefault.default(value) || value < this.resolve(less);
            }
        });
    }
    moreThan(more, message = _locale.number.moreThan) {
        return this.test({
            message,
            name: 'min',
            exclusive: true,
            params: {
                more
            },
            test (value) {
                return _isAbsentDefault.default(value) || value > this.resolve(more);
            }
        });
    }
    positive(msg = _locale.number.positive) {
        return this.moreThan(0, msg);
    }
    negative(msg = _locale.number.negative) {
        return this.lessThan(0, msg);
    }
    integer(message = _locale.number.integer) {
        return this.test({
            name: 'integer',
            message,
            test: (val)=>_isAbsentDefault.default(val) || Number.isInteger(val)
        });
    }
    truncate() {
        return this.transform((value)=>!_isAbsentDefault.default(value) ? value | 0 : value
        );
    }
    round(method) {
        var _method;
        let avail = [
            'ceil',
            'floor',
            'round',
            'trunc'
        ];
        method = ((_method = method) == null ? void 0 : _method.toLowerCase()) || 'round'; // this exists for symemtry with the new Math.trunc
        if (method === 'trunc') return this.truncate();
        if (avail.indexOf(method.toLowerCase()) === -1) throw new TypeError('Only valid options for round() are: ' + avail.join(', '));
        return this.transform((value)=>!_isAbsentDefault.default(value) ? Math[method](value) : value
        );
    }
}
exports.default = NumberSchema;
create.prototype = NumberSchema.prototype; //
 // Number Interfaces
 //

},{"./locale":"8waLz","./util/isAbsent":"kqer7","./schema":"9QQkj","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"hFOxf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "create", ()=>create
);
// @ts-ignore
var _isodate = require("./util/isodate");
var _isodateDefault = parcelHelpers.interopDefault(_isodate);
var _locale = require("./locale");
var _isAbsent = require("./util/isAbsent");
var _isAbsentDefault = parcelHelpers.interopDefault(_isAbsent);
var _reference = require("./Reference");
var _referenceDefault = parcelHelpers.interopDefault(_reference);
var _schema = require("./schema");
var _schemaDefault = parcelHelpers.interopDefault(_schema);
let invalidDate = new Date('');
let isDate = (obj)=>Object.prototype.toString.call(obj) === '[object Date]'
;
function create() {
    return new DateSchema();
}
class DateSchema extends _schemaDefault.default {
    constructor(){
        super({
            type: 'date'
        });
        this.withMutation(()=>{
            this.transform(function(value) {
                if (this.isType(value)) return value;
                value = _isodateDefault.default(value); // 0 is a valid timestamp equivalent to 1970-01-01T00:00:00Z(unix epoch) or before.
                return !isNaN(value) ? new Date(value) : invalidDate;
            });
        });
    }
    _typeCheck(v) {
        return isDate(v) && !isNaN(v.getTime());
    }
    prepareParam(ref, name) {
        let param;
        if (!_referenceDefault.default.isRef(ref)) {
            let cast = this.cast(ref);
            if (!this._typeCheck(cast)) throw new TypeError(`\`${name}\` must be a Date or a value that can be \`cast()\` to a Date`);
            param = cast;
        } else param = ref;
        return param;
    }
    min(min, message = _locale.date.min) {
        let limit = this.prepareParam(min, 'min');
        return this.test({
            message,
            name: 'min',
            exclusive: true,
            params: {
                min
            },
            test (value) {
                return _isAbsentDefault.default(value) || value >= this.resolve(limit);
            }
        });
    }
    max(max, message = _locale.date.max) {
        let limit = this.prepareParam(max, 'max');
        return this.test({
            message,
            name: 'max',
            exclusive: true,
            params: {
                max
            },
            test (value) {
                return _isAbsentDefault.default(value) || value <= this.resolve(limit);
            }
        });
    }
}
exports.default = DateSchema;
DateSchema.INVALID_DATE = invalidDate;
create.prototype = DateSchema.prototype;
create.INVALID_DATE = invalidDate;

},{"./util/isodate":"9eHwW","./locale":"8waLz","./util/isAbsent":"kqer7","./Reference":"1c78R","./schema":"9QQkj","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"9eHwW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/* eslint-disable */ /**
 *
 * Date.parse with progressive enhancement for ISO 8601 <https://github.com/csnover/js-iso8601>
 * NON-CONFORMANT EDITION.
 * © 2011 Colin Snover <http://zetafleet.com>
 * Released under MIT license.
 */ //              1 YYYY                 2 MM        3 DD              4 HH     5 mm        6 ss            7 msec         8 Z 9 ±    10 tzHH    11 tzmm
var isoReg = /^(\d{4}|[+\-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,\.](\d{1,}))?)?(?:(Z)|([+\-])(\d{2})(?::?(\d{2}))?)?)?$/;
function parseIsoDate(date) {
    var numericKeys = [
        1,
        4,
        5,
        6,
        7,
        10,
        11
    ], minutesOffset = 0, timestamp, struct;
    if (struct = isoReg.exec(date)) {
        // avoid NaN timestamps caused by “undefined” values being passed to Date.UTC
        for(var i = 0, k; k = numericKeys[i]; ++i)struct[k] = +struct[k] || 0; // allow undefined days and months
        struct[2] = (+struct[2] || 1) - 1;
        struct[3] = +struct[3] || 1; // allow arbitrary sub-second precision beyond milliseconds
        struct[7] = struct[7] ? String(struct[7]).substr(0, 3) : 0; // timestamps without timezone identifiers should be considered local time
        if ((struct[8] === undefined || struct[8] === '') && (struct[9] === undefined || struct[9] === '')) timestamp = +new Date(struct[1], struct[2], struct[3], struct[4], struct[5], struct[6], struct[7]);
        else {
            if (struct[8] !== 'Z' && struct[9] !== undefined) {
                minutesOffset = struct[10] * 60 + struct[11];
                if (struct[9] === '+') minutesOffset = 0 - minutesOffset;
            }
            timestamp = Date.UTC(struct[1], struct[2], struct[3], struct[4], struct[5] + minutesOffset, struct[6], struct[7]);
        }
    } else timestamp = Date.parse ? Date.parse(date) : NaN;
    return timestamp;
}
exports.default = parseIsoDate;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"y6Ms6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "create", ()=>create
);
var _has = require("lodash/has");
var _hasDefault = parcelHelpers.interopDefault(_has);
var _snakeCase = require("lodash/snakeCase");
var _snakeCaseDefault = parcelHelpers.interopDefault(_snakeCase);
var _camelCase = require("lodash/camelCase");
var _camelCaseDefault = parcelHelpers.interopDefault(_camelCase);
var _mapKeys = require("lodash/mapKeys");
var _mapKeysDefault = parcelHelpers.interopDefault(_mapKeys);
var _mapValues = require("lodash/mapValues");
var _mapValuesDefault = parcelHelpers.interopDefault(_mapValues);
var _propertyExpr = require("property-expr");
var _locale = require("./locale");
var _sortFields = require("./util/sortFields");
var _sortFieldsDefault = parcelHelpers.interopDefault(_sortFields);
var _sortByKeyOrder = require("./util/sortByKeyOrder");
var _sortByKeyOrderDefault = parcelHelpers.interopDefault(_sortByKeyOrder);
var _runTests = require("./util/runTests");
var _runTestsDefault = parcelHelpers.interopDefault(_runTests);
var _validationError = require("./ValidationError");
var _validationErrorDefault = parcelHelpers.interopDefault(_validationError);
var _schema = require("./schema");
var _schemaDefault = parcelHelpers.interopDefault(_schema);
function _extends() {
    _extends = Object.assign || function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
        }
        return target;
    };
    return _extends.apply(this, arguments);
}
let isObject = (obj)=>Object.prototype.toString.call(obj) === '[object Object]'
;
function unknown(ctx, value) {
    let known = Object.keys(ctx.fields);
    return Object.keys(value).filter((key)=>known.indexOf(key) === -1
    );
}
const defaultSort = _sortByKeyOrderDefault.default([]);
class ObjectSchema extends _schemaDefault.default {
    constructor(spec){
        super({
            type: 'object'
        });
        this.fields = Object.create(null);
        this._sortErrors = defaultSort;
        this._nodes = [];
        this._excludedEdges = [];
        this.withMutation(()=>{
            this.transform(function coerce(value) {
                if (typeof value === 'string') try {
                    value = JSON.parse(value);
                } catch (err) {
                    value = null;
                }
                if (this.isType(value)) return value;
                return null;
            });
            if (spec) this.shape(spec);
        });
    }
    _typeCheck(value) {
        return isObject(value) || typeof value === 'function';
    }
    _cast(_value, options = {
    }) {
        var _options$stripUnknown;
        let value = super._cast(_value, options); //should ignore nulls here
        if (value === undefined) return this.getDefault();
        if (!this._typeCheck(value)) return value;
        let fields = this.fields;
        let strip = (_options$stripUnknown = options.stripUnknown) != null ? _options$stripUnknown : this.spec.noUnknown;
        let props = this._nodes.concat(Object.keys(value).filter((v)=>this._nodes.indexOf(v) === -1
        ));
        let intermediateValue = {
        }; // is filled during the transform below
        let innerOptions = _extends({
        }, options, {
            parent: intermediateValue,
            __validating: options.__validating || false
        });
        let isChanged = false;
        for (const prop of props){
            let field = fields[prop];
            let exists = _hasDefault.default(value, prop);
            if (field) {
                let fieldValue;
                let inputValue = value[prop]; // safe to mutate since this is fired in sequence
                innerOptions.path = (options.path ? `${options.path}.` : '') + prop; // innerOptions.value = value[prop];
                field = field.resolve({
                    value: inputValue,
                    context: options.context,
                    parent: intermediateValue
                });
                let fieldSpec = 'spec' in field ? field.spec : undefined;
                let strict = fieldSpec == null ? void 0 : fieldSpec.strict;
                if (fieldSpec == null ? void 0 : fieldSpec.strip) {
                    isChanged = isChanged || prop in value;
                    continue;
                }
                fieldValue = !options.__validating || !strict ? field.cast(value[prop], innerOptions) : value[prop];
                if (fieldValue !== undefined) intermediateValue[prop] = fieldValue;
            } else if (exists && !strip) intermediateValue[prop] = value[prop];
            if (intermediateValue[prop] !== value[prop]) isChanged = true;
        }
        return isChanged ? intermediateValue : value;
    }
    _validate(_value, opts = {
    }, callback) {
        let errors = [];
        let { sync , from =[] , originalValue =_value , abortEarly =this.spec.abortEarly , recursive =this.spec.recursive  } = opts;
        from = [
            {
                schema: this,
                value: originalValue
            },
            ...from
        ]; // this flag is needed for handling `strict` correctly in the context of
        // validation vs just casting. e.g strict() on a field is only used when validating
        opts.__validating = true;
        opts.originalValue = originalValue;
        opts.from = from;
        super._validate(_value, opts, (err, value)=>{
            if (err) {
                if (!_validationErrorDefault.default.isError(err) || abortEarly) return void callback(err, value);
                errors.push(err);
            }
            if (!recursive || !isObject(value)) {
                callback(errors[0] || null, value);
                return;
            }
            originalValue = originalValue || value;
            let tests = this._nodes.map((key)=>(_, cb)=>{
                    let path = key.indexOf('.') === -1 ? (opts.path ? `${opts.path}.` : '') + key : `${opts.path || ''}["${key}"]`;
                    let field = this.fields[key];
                    if (field && 'validate' in field) {
                        field.validate(value[key], _extends({
                        }, opts, {
                            // @ts-ignore
                            path,
                            from,
                            // inner fields are always strict:
                            // 1. this isn't strict so the casting will also have cast inner values
                            // 2. this is strict in which case the nested values weren't cast either
                            strict: true,
                            parent: value,
                            originalValue: originalValue[key]
                        }), cb);
                        return;
                    }
                    cb(null);
                }
            );
            _runTestsDefault.default({
                sync,
                tests,
                value,
                errors,
                endEarly: abortEarly,
                sort: this._sortErrors,
                path: opts.path
            }, callback);
        });
    }
    clone(spec) {
        const next = super.clone(spec);
        next.fields = _extends({
        }, this.fields);
        next._nodes = this._nodes;
        next._excludedEdges = this._excludedEdges;
        next._sortErrors = this._sortErrors;
        return next;
    }
    concat(schema) {
        let next = super.concat(schema);
        let nextFields = next.fields;
        for (let [field, schemaOrRef] of Object.entries(this.fields)){
            const target = nextFields[field];
            if (target === undefined) nextFields[field] = schemaOrRef;
            else if (target instanceof _schemaDefault.default && schemaOrRef instanceof _schemaDefault.default) nextFields[field] = schemaOrRef.concat(target);
        }
        return next.withMutation(()=>next.shape(nextFields, this._excludedEdges)
        );
    }
    getDefaultFromShape() {
        let dft = {
        };
        this._nodes.forEach((key)=>{
            const field = this.fields[key];
            dft[key] = 'default' in field ? field.getDefault() : undefined;
        });
        return dft;
    }
    _getDefault() {
        if ('default' in this.spec) return super._getDefault();
         // if there is no default set invent one
        if (!this._nodes.length) return undefined;
        return this.getDefaultFromShape();
    }
    shape(additions, excludes = []) {
        let next = this.clone();
        let fields = Object.assign(next.fields, additions);
        next.fields = fields;
        next._sortErrors = _sortByKeyOrderDefault.default(Object.keys(fields));
        if (excludes.length) {
            // this is a convenience for when users only supply a single pair
            if (!Array.isArray(excludes[0])) excludes = [
                excludes
            ];
            next._excludedEdges = [
                ...next._excludedEdges,
                ...excludes
            ];
        }
        next._nodes = _sortFieldsDefault.default(fields, next._excludedEdges);
        return next;
    }
    pick(keys) {
        const picked = {
        };
        for (const key of keys)if (this.fields[key]) picked[key] = this.fields[key];
        return this.clone().withMutation((next)=>{
            next.fields = {
            };
            return next.shape(picked);
        });
    }
    omit(keys) {
        const next = this.clone();
        const fields = next.fields;
        next.fields = {
        };
        for (const key of keys)delete fields[key];
        return next.withMutation(()=>next.shape(fields)
        );
    }
    from(from, to, alias) {
        let fromGetter = _propertyExpr.getter(from, true);
        return this.transform((obj)=>{
            if (obj == null) return obj;
            let newObj = obj;
            if (_hasDefault.default(obj, from)) {
                newObj = _extends({
                }, obj);
                if (!alias) delete newObj[from];
                newObj[to] = fromGetter(obj);
            }
            return newObj;
        });
    }
    noUnknown(noAllow = true, message = _locale.object.noUnknown) {
        if (typeof noAllow === 'string') {
            message = noAllow;
            noAllow = true;
        }
        let next = this.test({
            name: 'noUnknown',
            exclusive: true,
            message: message,
            test (value) {
                if (value == null) return true;
                const unknownKeys = unknown(this.schema, value);
                return !noAllow || unknownKeys.length === 0 || this.createError({
                    params: {
                        unknown: unknownKeys.join(', ')
                    }
                });
            }
        });
        next.spec.noUnknown = noAllow;
        return next;
    }
    unknown(allow = true, message = _locale.object.noUnknown) {
        return this.noUnknown(!allow, message);
    }
    transformKeys(fn) {
        return this.transform((obj)=>obj && _mapKeysDefault.default(obj, (_, key)=>fn(key)
            )
        );
    }
    camelCase() {
        return this.transformKeys(_camelCaseDefault.default);
    }
    snakeCase() {
        return this.transformKeys(_snakeCaseDefault.default);
    }
    constantCase() {
        return this.transformKeys((key)=>_snakeCaseDefault.default(key).toUpperCase()
        );
    }
    describe() {
        let base = super.describe();
        base.fields = _mapValuesDefault.default(this.fields, (value)=>value.describe()
        );
        return base;
    }
}
exports.default = ObjectSchema;
function create(spec) {
    return new ObjectSchema(spec);
}
create.prototype = ObjectSchema.prototype;

},{"lodash/has":"92WOZ","lodash/snakeCase":"jVtJ0","lodash/camelCase":"hgQdX","lodash/mapKeys":"fsA1e","lodash/mapValues":"gWYFv","property-expr":"gLFKs","./locale":"8waLz","./util/sortFields":"2iTJ3","./util/sortByKeyOrder":"e6e8k","./util/runTests":"ylBJD","./ValidationError":"bRNBk","./schema":"9QQkj","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"jVtJ0":[function(require,module,exports) {
var createCompounder = require('./_createCompounder');
/**
 * Converts `string` to
 * [snake case](https://en.wikipedia.org/wiki/Snake_case).
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the snake cased string.
 * @example
 *
 * _.snakeCase('Foo Bar');
 * // => 'foo_bar'
 *
 * _.snakeCase('fooBar');
 * // => 'foo_bar'
 *
 * _.snakeCase('--FOO-BAR--');
 * // => 'foo_bar'
 */ var snakeCase = createCompounder(function(result, word, index) {
    return result + (index ? '_' : '') + word.toLowerCase();
});
module.exports = snakeCase;

},{"./_createCompounder":"3MuhA"}],"3MuhA":[function(require,module,exports) {
var arrayReduce = require('./_arrayReduce'), deburr = require('./deburr'), words = require('./words');
/** Used to compose unicode capture groups. */ var rsApos = "['\u2019]";
/** Used to match apostrophes. */ var reApos = RegExp(rsApos, 'g');
/**
 * Creates a function like `_.camelCase`.
 *
 * @private
 * @param {Function} callback The function to combine each word.
 * @returns {Function} Returns the new compounder function.
 */ function createCompounder(callback) {
    return function(string) {
        return arrayReduce(words(deburr(string).replace(reApos, '')), callback, '');
    };
}
module.exports = createCompounder;

},{"./_arrayReduce":"3THPo","./deburr":"3j1Sx","./words":"11TeC"}],"3THPo":[function(require,module,exports) {
/**
 * A specialized version of `_.reduce` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @param {boolean} [initAccum] Specify using the first element of `array` as
 *  the initial value.
 * @returns {*} Returns the accumulated value.
 */ function arrayReduce(array, iteratee, accumulator, initAccum) {
    var index = -1, length = array == null ? 0 : array.length;
    if (initAccum && length) accumulator = array[++index];
    while(++index < length)accumulator = iteratee(accumulator, array[index], index, array);
    return accumulator;
}
module.exports = arrayReduce;

},{}],"3j1Sx":[function(require,module,exports) {
var deburrLetter = require('./_deburrLetter'), toString = require('./toString');
/** Used to match Latin Unicode letters (excluding mathematical operators). */ var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;
/** Used to compose unicode character classes. */ var rsComboMarksRange = '\\u0300-\\u036f', reComboHalfMarksRange = '\\ufe20-\\ufe2f', rsComboSymbolsRange = '\\u20d0-\\u20ff', rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange;
/** Used to compose unicode capture groups. */ var rsCombo = '[' + rsComboRange + ']';
/**
 * Used to match [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks) and
 * [combining diacritical marks for symbols](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks_for_Symbols).
 */ var reComboMark = RegExp(rsCombo, 'g');
/**
 * Deburrs `string` by converting
 * [Latin-1 Supplement](https://en.wikipedia.org/wiki/Latin-1_Supplement_(Unicode_block)#Character_table)
 * and [Latin Extended-A](https://en.wikipedia.org/wiki/Latin_Extended-A)
 * letters to basic Latin letters and removing
 * [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks).
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to deburr.
 * @returns {string} Returns the deburred string.
 * @example
 *
 * _.deburr('déjà vu');
 * // => 'deja vu'
 */ function deburr(string) {
    string = toString(string);
    return string && string.replace(reLatin, deburrLetter).replace(reComboMark, '');
}
module.exports = deburr;

},{"./_deburrLetter":"dSjwp","./toString":"lRX1t"}],"dSjwp":[function(require,module,exports) {
var basePropertyOf = require('./_basePropertyOf');
/** Used to map Latin Unicode letters to basic Latin letters. */ var deburredLetters = {
    // Latin-1 Supplement block.
    '\xc0': 'A',
    '\xc1': 'A',
    '\xc2': 'A',
    '\xc3': 'A',
    '\xc4': 'A',
    '\xc5': 'A',
    '\xe0': 'a',
    '\xe1': 'a',
    '\xe2': 'a',
    '\xe3': 'a',
    '\xe4': 'a',
    '\xe5': 'a',
    '\xc7': 'C',
    '\xe7': 'c',
    '\xd0': 'D',
    '\xf0': 'd',
    '\xc8': 'E',
    '\xc9': 'E',
    '\xca': 'E',
    '\xcb': 'E',
    '\xe8': 'e',
    '\xe9': 'e',
    '\xea': 'e',
    '\xeb': 'e',
    '\xcc': 'I',
    '\xcd': 'I',
    '\xce': 'I',
    '\xcf': 'I',
    '\xec': 'i',
    '\xed': 'i',
    '\xee': 'i',
    '\xef': 'i',
    '\xd1': 'N',
    '\xf1': 'n',
    '\xd2': 'O',
    '\xd3': 'O',
    '\xd4': 'O',
    '\xd5': 'O',
    '\xd6': 'O',
    '\xd8': 'O',
    '\xf2': 'o',
    '\xf3': 'o',
    '\xf4': 'o',
    '\xf5': 'o',
    '\xf6': 'o',
    '\xf8': 'o',
    '\xd9': 'U',
    '\xda': 'U',
    '\xdb': 'U',
    '\xdc': 'U',
    '\xf9': 'u',
    '\xfa': 'u',
    '\xfb': 'u',
    '\xfc': 'u',
    '\xdd': 'Y',
    '\xfd': 'y',
    '\xff': 'y',
    '\xc6': 'Ae',
    '\xe6': 'ae',
    '\xde': 'Th',
    '\xfe': 'th',
    '\xdf': 'ss',
    // Latin Extended-A block.
    '\u0100': 'A',
    '\u0102': 'A',
    '\u0104': 'A',
    '\u0101': 'a',
    '\u0103': 'a',
    '\u0105': 'a',
    '\u0106': 'C',
    '\u0108': 'C',
    '\u010a': 'C',
    '\u010c': 'C',
    '\u0107': 'c',
    '\u0109': 'c',
    '\u010b': 'c',
    '\u010d': 'c',
    '\u010e': 'D',
    '\u0110': 'D',
    '\u010f': 'd',
    '\u0111': 'd',
    '\u0112': 'E',
    '\u0114': 'E',
    '\u0116': 'E',
    '\u0118': 'E',
    '\u011a': 'E',
    '\u0113': 'e',
    '\u0115': 'e',
    '\u0117': 'e',
    '\u0119': 'e',
    '\u011b': 'e',
    '\u011c': 'G',
    '\u011e': 'G',
    '\u0120': 'G',
    '\u0122': 'G',
    '\u011d': 'g',
    '\u011f': 'g',
    '\u0121': 'g',
    '\u0123': 'g',
    '\u0124': 'H',
    '\u0126': 'H',
    '\u0125': 'h',
    '\u0127': 'h',
    '\u0128': 'I',
    '\u012a': 'I',
    '\u012c': 'I',
    '\u012e': 'I',
    '\u0130': 'I',
    '\u0129': 'i',
    '\u012b': 'i',
    '\u012d': 'i',
    '\u012f': 'i',
    '\u0131': 'i',
    '\u0134': 'J',
    '\u0135': 'j',
    '\u0136': 'K',
    '\u0137': 'k',
    '\u0138': 'k',
    '\u0139': 'L',
    '\u013b': 'L',
    '\u013d': 'L',
    '\u013f': 'L',
    '\u0141': 'L',
    '\u013a': 'l',
    '\u013c': 'l',
    '\u013e': 'l',
    '\u0140': 'l',
    '\u0142': 'l',
    '\u0143': 'N',
    '\u0145': 'N',
    '\u0147': 'N',
    '\u014a': 'N',
    '\u0144': 'n',
    '\u0146': 'n',
    '\u0148': 'n',
    '\u014b': 'n',
    '\u014c': 'O',
    '\u014e': 'O',
    '\u0150': 'O',
    '\u014d': 'o',
    '\u014f': 'o',
    '\u0151': 'o',
    '\u0154': 'R',
    '\u0156': 'R',
    '\u0158': 'R',
    '\u0155': 'r',
    '\u0157': 'r',
    '\u0159': 'r',
    '\u015a': 'S',
    '\u015c': 'S',
    '\u015e': 'S',
    '\u0160': 'S',
    '\u015b': 's',
    '\u015d': 's',
    '\u015f': 's',
    '\u0161': 's',
    '\u0162': 'T',
    '\u0164': 'T',
    '\u0166': 'T',
    '\u0163': 't',
    '\u0165': 't',
    '\u0167': 't',
    '\u0168': 'U',
    '\u016a': 'U',
    '\u016c': 'U',
    '\u016e': 'U',
    '\u0170': 'U',
    '\u0172': 'U',
    '\u0169': 'u',
    '\u016b': 'u',
    '\u016d': 'u',
    '\u016f': 'u',
    '\u0171': 'u',
    '\u0173': 'u',
    '\u0174': 'W',
    '\u0175': 'w',
    '\u0176': 'Y',
    '\u0177': 'y',
    '\u0178': 'Y',
    '\u0179': 'Z',
    '\u017b': 'Z',
    '\u017d': 'Z',
    '\u017a': 'z',
    '\u017c': 'z',
    '\u017e': 'z',
    '\u0132': 'IJ',
    '\u0133': 'ij',
    '\u0152': 'Oe',
    '\u0153': 'oe',
    '\u0149': "'n",
    '\u017f': 's'
};
/**
 * Used by `_.deburr` to convert Latin-1 Supplement and Latin Extended-A
 * letters to basic Latin letters.
 *
 * @private
 * @param {string} letter The matched letter to deburr.
 * @returns {string} Returns the deburred letter.
 */ var deburrLetter = basePropertyOf(deburredLetters);
module.exports = deburrLetter;

},{"./_basePropertyOf":"9szZB"}],"9szZB":[function(require,module,exports) {
/**
 * The base implementation of `_.propertyOf` without support for deep paths.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Function} Returns the new accessor function.
 */ function basePropertyOf(object) {
    return function(key) {
        return object == null ? undefined : object[key];
    };
}
module.exports = basePropertyOf;

},{}],"11TeC":[function(require,module,exports) {
var asciiWords = require('./_asciiWords'), hasUnicodeWord = require('./_hasUnicodeWord'), toString = require('./toString'), unicodeWords = require('./_unicodeWords');
/**
 * Splits `string` into an array of its words.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to inspect.
 * @param {RegExp|string} [pattern] The pattern to match words.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {Array} Returns the words of `string`.
 * @example
 *
 * _.words('fred, barney, & pebbles');
 * // => ['fred', 'barney', 'pebbles']
 *
 * _.words('fred, barney, & pebbles', /[^, ]+/g);
 * // => ['fred', 'barney', '&', 'pebbles']
 */ function words(string, pattern, guard) {
    string = toString(string);
    pattern = guard ? undefined : pattern;
    if (pattern === undefined) return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
    return string.match(pattern) || [];
}
module.exports = words;

},{"./_asciiWords":"eecDg","./_hasUnicodeWord":"cRLJ5","./toString":"lRX1t","./_unicodeWords":"lsvIp"}],"eecDg":[function(require,module,exports) {
/** Used to match words composed of alphanumeric characters. */ var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
/**
 * Splits an ASCII `string` into an array of its words.
 *
 * @private
 * @param {string} The string to inspect.
 * @returns {Array} Returns the words of `string`.
 */ function asciiWords(string) {
    return string.match(reAsciiWord) || [];
}
module.exports = asciiWords;

},{}],"cRLJ5":[function(require,module,exports) {
/** Used to detect strings that need a more robust regexp to match words. */ var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
/**
 * Checks if `string` contains a word composed of Unicode symbols.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {boolean} Returns `true` if a word is found, else `false`.
 */ function hasUnicodeWord(string) {
    return reHasUnicodeWord.test(string);
}
module.exports = hasUnicodeWord;

},{}],"lsvIp":[function(require,module,exports) {
/** Used to compose unicode character classes. */ var rsAstralRange = '\\ud800-\\udfff', rsComboMarksRange = '\\u0300-\\u036f', reComboHalfMarksRange = '\\ufe20-\\ufe2f', rsComboSymbolsRange = '\\u20d0-\\u20ff', rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange, rsDingbatRange = '\\u2700-\\u27bf', rsLowerRange = 'a-z\\xdf-\\xf6\\xf8-\\xff', rsMathOpRange = '\\xac\\xb1\\xd7\\xf7', rsNonCharRange = '\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf', rsPunctuationRange = '\\u2000-\\u206f', rsSpaceRange = ' \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000', rsUpperRange = 'A-Z\\xc0-\\xd6\\xd8-\\xde', rsVarRange = '\\ufe0e\\ufe0f', rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;
/** Used to compose unicode capture groups. */ var rsApos = "['\u2019]", rsBreak = '[' + rsBreakRange + ']', rsCombo = '[' + rsComboRange + ']', rsDigits = '\\d+', rsDingbat = '[' + rsDingbatRange + ']', rsLower = '[' + rsLowerRange + ']', rsMisc = '[^' + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + ']', rsFitz = '\\ud83c[\\udffb-\\udfff]', rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')', rsNonAstral = '[^' + rsAstralRange + ']', rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}', rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]', rsUpper = '[' + rsUpperRange + ']', rsZWJ = '\\u200d';
/** Used to compose unicode regexes. */ var rsMiscLower = '(?:' + rsLower + '|' + rsMisc + ')', rsMiscUpper = '(?:' + rsUpper + '|' + rsMisc + ')', rsOptContrLower = '(?:' + rsApos + '(?:d|ll|m|re|s|t|ve))?', rsOptContrUpper = '(?:' + rsApos + '(?:D|LL|M|RE|S|T|VE))?', reOptMod = rsModifier + '?', rsOptVar = '[' + rsVarRange + ']?', rsOptJoin = '(?:' + rsZWJ + '(?:' + [
    rsNonAstral,
    rsRegional,
    rsSurrPair
].join('|') + ')' + rsOptVar + reOptMod + ')*', rsOrdLower = '\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])', rsOrdUpper = '\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])', rsSeq = rsOptVar + reOptMod + rsOptJoin, rsEmoji = '(?:' + [
    rsDingbat,
    rsRegional,
    rsSurrPair
].join('|') + ')' + rsSeq;
/** Used to match complex or compound words. */ var reUnicodeWord = RegExp([
    rsUpper + '?' + rsLower + '+' + rsOptContrLower + '(?=' + [
        rsBreak,
        rsUpper,
        '$'
    ].join('|') + ')',
    rsMiscUpper + '+' + rsOptContrUpper + '(?=' + [
        rsBreak,
        rsUpper + rsMiscLower,
        '$'
    ].join('|') + ')',
    rsUpper + '?' + rsMiscLower + '+' + rsOptContrLower,
    rsUpper + '+' + rsOptContrUpper,
    rsOrdUpper,
    rsOrdLower,
    rsDigits,
    rsEmoji
].join('|'), 'g');
/**
 * Splits a Unicode `string` into an array of its words.
 *
 * @private
 * @param {string} The string to inspect.
 * @returns {Array} Returns the words of `string`.
 */ function unicodeWords(string) {
    return string.match(reUnicodeWord) || [];
}
module.exports = unicodeWords;

},{}],"hgQdX":[function(require,module,exports) {
var capitalize = require('./capitalize'), createCompounder = require('./_createCompounder');
/**
 * Converts `string` to [camel case](https://en.wikipedia.org/wiki/CamelCase).
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the camel cased string.
 * @example
 *
 * _.camelCase('Foo Bar');
 * // => 'fooBar'
 *
 * _.camelCase('--foo-bar--');
 * // => 'fooBar'
 *
 * _.camelCase('__FOO_BAR__');
 * // => 'fooBar'
 */ var camelCase = createCompounder(function(result, word, index) {
    word = word.toLowerCase();
    return result + (index ? capitalize(word) : word);
});
module.exports = camelCase;

},{"./capitalize":"4iFvP","./_createCompounder":"3MuhA"}],"4iFvP":[function(require,module,exports) {
var toString = require('./toString'), upperFirst = require('./upperFirst');
/**
 * Converts the first character of `string` to upper case and the remaining
 * to lower case.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to capitalize.
 * @returns {string} Returns the capitalized string.
 * @example
 *
 * _.capitalize('FRED');
 * // => 'Fred'
 */ function capitalize(string) {
    return upperFirst(toString(string).toLowerCase());
}
module.exports = capitalize;

},{"./toString":"lRX1t","./upperFirst":"frseh"}],"frseh":[function(require,module,exports) {
var createCaseFirst = require('./_createCaseFirst');
/**
 * Converts the first character of `string` to upper case.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.upperFirst('fred');
 * // => 'Fred'
 *
 * _.upperFirst('FRED');
 * // => 'FRED'
 */ var upperFirst = createCaseFirst('toUpperCase');
module.exports = upperFirst;

},{"./_createCaseFirst":"jULPJ"}],"jULPJ":[function(require,module,exports) {
var castSlice = require('./_castSlice'), hasUnicode = require('./_hasUnicode'), stringToArray = require('./_stringToArray'), toString = require('./toString');
/**
 * Creates a function like `_.lowerFirst`.
 *
 * @private
 * @param {string} methodName The name of the `String` case method to use.
 * @returns {Function} Returns the new case function.
 */ function createCaseFirst(methodName) {
    return function(string) {
        string = toString(string);
        var strSymbols = hasUnicode(string) ? stringToArray(string) : undefined;
        var chr = strSymbols ? strSymbols[0] : string.charAt(0);
        var trailing = strSymbols ? castSlice(strSymbols, 1).join('') : string.slice(1);
        return chr[methodName]() + trailing;
    };
}
module.exports = createCaseFirst;

},{"./_castSlice":"3fKl3","./_hasUnicode":"e22tP","./_stringToArray":"hFqV0","./toString":"lRX1t"}],"3fKl3":[function(require,module,exports) {
var baseSlice = require('./_baseSlice');
/**
 * Casts `array` to a slice if it's needed.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {number} start The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the cast slice.
 */ function castSlice(array, start, end) {
    var length = array.length;
    end = end === undefined ? length : end;
    return !start && end >= length ? array : baseSlice(array, start, end);
}
module.exports = castSlice;

},{"./_baseSlice":"aUagZ"}],"aUagZ":[function(require,module,exports) {
/**
 * The base implementation of `_.slice` without an iteratee call guard.
 *
 * @private
 * @param {Array} array The array to slice.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the slice of `array`.
 */ function baseSlice(array, start, end) {
    var index = -1, length = array.length;
    if (start < 0) start = -start > length ? 0 : length + start;
    end = end > length ? length : end;
    if (end < 0) end += length;
    length = start > end ? 0 : end - start >>> 0;
    start >>>= 0;
    var result = Array(length);
    while(++index < length)result[index] = array[index + start];
    return result;
}
module.exports = baseSlice;

},{}],"e22tP":[function(require,module,exports) {
/** Used to compose unicode character classes. */ var rsAstralRange = '\\ud800-\\udfff', rsComboMarksRange = '\\u0300-\\u036f', reComboHalfMarksRange = '\\ufe20-\\ufe2f', rsComboSymbolsRange = '\\u20d0-\\u20ff', rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange, rsVarRange = '\\ufe0e\\ufe0f';
/** Used to compose unicode capture groups. */ var rsZWJ = '\\u200d';
/** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */ var reHasUnicode = RegExp('[' + rsZWJ + rsAstralRange + rsComboRange + rsVarRange + ']');
/**
 * Checks if `string` contains Unicode symbols.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {boolean} Returns `true` if a symbol is found, else `false`.
 */ function hasUnicode(string) {
    return reHasUnicode.test(string);
}
module.exports = hasUnicode;

},{}],"hFqV0":[function(require,module,exports) {
var asciiToArray = require('./_asciiToArray'), hasUnicode = require('./_hasUnicode'), unicodeToArray = require('./_unicodeToArray');
/**
 * Converts `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */ function stringToArray(string) {
    return hasUnicode(string) ? unicodeToArray(string) : asciiToArray(string);
}
module.exports = stringToArray;

},{"./_asciiToArray":"gd0DP","./_hasUnicode":"e22tP","./_unicodeToArray":"bUEmx"}],"gd0DP":[function(require,module,exports) {
/**
 * Converts an ASCII `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */ function asciiToArray(string) {
    return string.split('');
}
module.exports = asciiToArray;

},{}],"bUEmx":[function(require,module,exports) {
/** Used to compose unicode character classes. */ var rsAstralRange = '\\ud800-\\udfff', rsComboMarksRange = '\\u0300-\\u036f', reComboHalfMarksRange = '\\ufe20-\\ufe2f', rsComboSymbolsRange = '\\u20d0-\\u20ff', rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange, rsVarRange = '\\ufe0e\\ufe0f';
/** Used to compose unicode capture groups. */ var rsAstral = '[' + rsAstralRange + ']', rsCombo = '[' + rsComboRange + ']', rsFitz = '\\ud83c[\\udffb-\\udfff]', rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')', rsNonAstral = '[^' + rsAstralRange + ']', rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}', rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]', rsZWJ = '\\u200d';
/** Used to compose unicode regexes. */ var reOptMod = rsModifier + '?', rsOptVar = '[' + rsVarRange + ']?', rsOptJoin = '(?:' + rsZWJ + '(?:' + [
    rsNonAstral,
    rsRegional,
    rsSurrPair
].join('|') + ')' + rsOptVar + reOptMod + ')*', rsSeq = rsOptVar + reOptMod + rsOptJoin, rsSymbol = '(?:' + [
    rsNonAstral + rsCombo + '?',
    rsCombo,
    rsRegional,
    rsSurrPair,
    rsAstral
].join('|') + ')';
/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */ var reUnicode = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');
/**
 * Converts a Unicode `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */ function unicodeToArray(string) {
    return string.match(reUnicode) || [];
}
module.exports = unicodeToArray;

},{}],"fsA1e":[function(require,module,exports) {
var baseAssignValue = require('./_baseAssignValue'), baseForOwn = require('./_baseForOwn'), baseIteratee = require('./_baseIteratee');
/**
 * The opposite of `_.mapValues`; this method creates an object with the
 * same values as `object` and keys generated by running each own enumerable
 * string keyed property of `object` thru `iteratee`. The iteratee is invoked
 * with three arguments: (value, key, object).
 *
 * @static
 * @memberOf _
 * @since 3.8.0
 * @category Object
 * @param {Object} object The object to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Object} Returns the new mapped object.
 * @see _.mapValues
 * @example
 *
 * _.mapKeys({ 'a': 1, 'b': 2 }, function(value, key) {
 *   return key + value;
 * });
 * // => { 'a1': 1, 'b2': 2 }
 */ function mapKeys(object, iteratee) {
    var result = {
    };
    iteratee = baseIteratee(iteratee, 3);
    baseForOwn(object, function(value, key, object) {
        baseAssignValue(result, iteratee(value, key, object), value);
    });
    return result;
}
module.exports = mapKeys;

},{"./_baseAssignValue":"1HqjL","./_baseForOwn":"pHSzI","./_baseIteratee":"dZOiR"}],"2iTJ3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _has = require("lodash/has"); // @ts-expect-error
var _hasDefault = parcelHelpers.interopDefault(_has);
var _toposort = require("toposort");
var _toposortDefault = parcelHelpers.interopDefault(_toposort);
var _propertyExpr = require("property-expr");
var _reference = require("../Reference");
var _referenceDefault = parcelHelpers.interopDefault(_reference);
var _isSchema = require("./isSchema");
var _isSchemaDefault = parcelHelpers.interopDefault(_isSchema);
function sortFields(fields, excludedEdges = []) {
    let edges = [];
    let nodes = new Set();
    let excludes = new Set(excludedEdges.map(([a, b])=>`${a}-${b}`
    ));
    function addNode(depPath, key) {
        let node = _propertyExpr.split(depPath)[0];
        nodes.add(node);
        if (!excludes.has(`${key}-${node}`)) edges.push([
            key,
            node
        ]);
    }
    for(const key in fields)if (_hasDefault.default(fields, key)) {
        let value = fields[key];
        nodes.add(key);
        if (_referenceDefault.default.isRef(value) && value.isSibling) addNode(value.path, key);
        else if (_isSchemaDefault.default(value) && 'deps' in value) value.deps.forEach((path)=>addNode(path, key)
        );
    }
    return _toposortDefault.default.array(Array.from(nodes), edges).reverse();
}
exports.default = sortFields;

},{"lodash/has":"92WOZ","toposort":"1alHG","property-expr":"gLFKs","../Reference":"1c78R","./isSchema":"iKh25","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"1alHG":[function(require,module,exports) {
/**
 * Topological sorting function
 *
 * @param {Array} edges
 * @returns {Array}
 */ module.exports = function(edges) {
    return toposort(uniqueNodes(edges), edges);
};
module.exports.array = toposort;
function toposort(nodes, edges) {
    var cursor = nodes.length, sorted = new Array(cursor), visited = {
    }, i = cursor, outgoingEdges = makeOutgoingEdges(edges), nodesHash = makeNodesHash(nodes);
    // check for unknown nodes
    edges.forEach(function(edge) {
        if (!nodesHash.has(edge[0]) || !nodesHash.has(edge[1])) throw new Error('Unknown node. There is an unknown node in the supplied edges.');
    });
    while(i--)if (!visited[i]) visit(nodes[i], i, new Set());
    function visit(node, i, predecessors) {
        if (predecessors.has(node)) {
            var nodeRep;
            try {
                nodeRep = ", node was:" + JSON.stringify(node);
            } catch (e) {
                nodeRep = "";
            }
            throw new Error('Cyclic dependency' + nodeRep);
        }
        if (!nodesHash.has(node)) {
            throw new Error('Found unknown node. Make sure to provided all involved nodes. Unknown node: ' + JSON.stringify(node));
        }
        if (visited[i]) return;
        visited[i] = true;
        var outgoing = outgoingEdges.get(node) || new Set();
        outgoing = Array.from(outgoing);
        if (i = outgoing.length) {
            predecessors.add(node);
            do {
                var child = outgoing[--i];
                visit(child, nodesHash.get(child), predecessors);
            }while (i)
            predecessors.delete(node);
        }
        sorted[--cursor] = node;
    }
    return sorted;
}
function uniqueNodes(arr) {
    var res = new Set();
    for(var i = 0, len = arr.length; i < len; i++){
        var edge = arr[i];
        res.add(edge[0]);
        res.add(edge[1]);
    }
    return Array.from(res);
}
function makeOutgoingEdges(arr) {
    var edges = new Map();
    for(var i = 0, len = arr.length; i < len; i++){
        var edge = arr[i];
        if (!edges.has(edge[0])) edges.set(edge[0], new Set());
        if (!edges.has(edge[1])) edges.set(edge[1], new Set());
        edges.get(edge[0]).add(edge[1]);
    }
    return edges;
}
function makeNodesHash(arr) {
    var res = new Map();
    for(var i = 0, len = arr.length; i < len; i++)res.set(arr[i], i);
    return res;
}

},{}],"e6e8k":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function findIndex(arr, err) {
    let idx = Infinity;
    arr.some((key, ii)=>{
        var _err$path;
        if (((_err$path = err.path) == null ? void 0 : _err$path.indexOf(key)) !== -1) {
            idx = ii;
            return true;
        }
    });
    return idx;
}
function sortByKeyOrder(keys) {
    return (a, b)=>{
        return findIndex(keys, a) - findIndex(keys, b);
    };
}
exports.default = sortByKeyOrder;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"6OF4j":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "create", ()=>create
);
var _isAbsent = require("./util/isAbsent");
var _isAbsentDefault = parcelHelpers.interopDefault(_isAbsent);
var _isSchema = require("./util/isSchema");
var _isSchemaDefault = parcelHelpers.interopDefault(_isSchema);
var _printValue = require("./util/printValue");
var _printValueDefault = parcelHelpers.interopDefault(_printValue);
var _locale = require("./locale");
var _runTests = require("./util/runTests");
var _runTestsDefault = parcelHelpers.interopDefault(_runTests);
var _validationError = require("./ValidationError");
var _validationErrorDefault = parcelHelpers.interopDefault(_validationError);
var _schema = require("./schema");
var _schemaDefault = parcelHelpers.interopDefault(_schema);
function _extends() {
    _extends = Object.assign || function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
        }
        return target;
    };
    return _extends.apply(this, arguments);
}
function create(type) {
    return new ArraySchema(type);
}
class ArraySchema extends _schemaDefault.default {
    constructor(type){
        super({
            type: 'array'
        }); // `undefined` specifically means uninitialized, as opposed to
        // "no subtype"
        this.innerType = void 0;
        this.innerType = type;
        this.withMutation(()=>{
            this.transform(function(values) {
                if (typeof values === 'string') try {
                    values = JSON.parse(values);
                } catch (err) {
                    values = null;
                }
                return this.isType(values) ? values : null;
            });
        });
    }
    _typeCheck(v) {
        return Array.isArray(v);
    }
    get _subType() {
        return this.innerType;
    }
    _cast(_value, _opts) {
        const value = super._cast(_value, _opts); //should ignore nulls here
        if (!this._typeCheck(value) || !this.innerType) return value;
        let isChanged = false;
        const castArray = value.map((v, idx)=>{
            const castElement = this.innerType.cast(v, _extends({
            }, _opts, {
                path: `${_opts.path || ''}[${idx}]`
            }));
            if (castElement !== v) isChanged = true;
            return castElement;
        });
        return isChanged ? castArray : value;
    }
    _validate(_value, options = {
    }, callback) {
        var _options$abortEarly, _options$recursive;
        let errors = [];
        let sync = options.sync;
        let path = options.path;
        let innerType = this.innerType;
        let endEarly = (_options$abortEarly = options.abortEarly) != null ? _options$abortEarly : this.spec.abortEarly;
        let recursive = (_options$recursive = options.recursive) != null ? _options$recursive : this.spec.recursive;
        let originalValue = options.originalValue != null ? options.originalValue : _value;
        super._validate(_value, options, (err, value)=>{
            if (err) {
                if (!_validationErrorDefault.default.isError(err) || endEarly) return void callback(err, value);
                errors.push(err);
            }
            if (!recursive || !innerType || !this._typeCheck(value)) {
                callback(errors[0] || null, value);
                return;
            }
            originalValue = originalValue || value; // #950 Ensure that sparse array empty slots are validated
            let tests = new Array(value.length);
            for(let idx = 0; idx < value.length; idx++){
                let item = value[idx];
                let path = `${options.path || ''}[${idx}]`; // object._validate note for isStrict explanation
                let innerOptions = _extends({
                }, options, {
                    path,
                    strict: true,
                    parent: value,
                    index: idx,
                    originalValue: originalValue[idx]
                });
                tests[idx] = (_, cb)=>innerType.validate(item, innerOptions, cb)
                ;
            }
            _runTestsDefault.default({
                sync,
                path,
                value,
                errors,
                endEarly,
                tests
            }, callback);
        });
    }
    clone(spec) {
        const next = super.clone(spec);
        next.innerType = this.innerType;
        return next;
    }
    concat(schema) {
        let next = super.concat(schema);
        next.innerType = this.innerType;
        if (schema.innerType) next.innerType = next.innerType ? next.innerType.concat(schema.innerType) : schema.innerType;
        return next;
    }
    of(schema) {
        // FIXME: this should return a new instance of array without the default to be
        let next = this.clone();
        if (!_isSchemaDefault.default(schema)) throw new TypeError('`array.of()` sub-schema must be a valid yup schema not: ' + _printValueDefault.default(schema)); // FIXME(ts):
        next.innerType = schema;
        return next;
    }
    length(length, message = _locale.array.length) {
        return this.test({
            message,
            name: 'length',
            exclusive: true,
            params: {
                length
            },
            test (value) {
                return _isAbsentDefault.default(value) || value.length === this.resolve(length);
            }
        });
    }
    min(min, message) {
        message = message || _locale.array.min;
        return this.test({
            message,
            name: 'min',
            exclusive: true,
            params: {
                min
            },
            // FIXME(ts): Array<typeof T>
            test (value) {
                return _isAbsentDefault.default(value) || value.length >= this.resolve(min);
            }
        });
    }
    max(max, message) {
        message = message || _locale.array.max;
        return this.test({
            message,
            name: 'max',
            exclusive: true,
            params: {
                max
            },
            test (value) {
                return _isAbsentDefault.default(value) || value.length <= this.resolve(max);
            }
        });
    }
    ensure() {
        return this.default(()=>[]
        ).transform((val, original)=>{
            // We don't want to return `null` for nullable schema
            if (this._typeCheck(val)) return val;
            return original == null ? [] : [].concat(original);
        });
    }
    compact(rejector) {
        let reject = !rejector ? (v)=>!!v
         : (v, i, a)=>!rejector(v, i, a)
        ;
        return this.transform((values)=>values != null ? values.filter(reject) : values
        );
    }
    describe() {
        let base = super.describe();
        if (this.innerType) base.innerType = this.innerType.describe();
        return base;
    }
    nullable(isNullable = true) {
        return super.nullable(isNullable);
    }
    defined() {
        return super.defined();
    }
    required(msg) {
        return super.required(msg);
    }
}
exports.default = ArraySchema;
create.prototype = ArraySchema.prototype; //
 // Interfaces
 //

},{"./util/isAbsent":"kqer7","./util/isSchema":"iKh25","./util/printValue":"aWvvR","./locale":"8waLz","./util/runTests":"ylBJD","./ValidationError":"bRNBk","./schema":"9QQkj","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"kYdMq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "create", ()=>create
);
var _isSchema = require("./util/isSchema");
var _isSchemaDefault = parcelHelpers.interopDefault(_isSchema);
function create(builder) {
    return new Lazy(builder);
}
class Lazy {
    constructor(builder){
        this.type = 'lazy';
        this.__isYupSchema__ = true;
        this.__inputType = void 0;
        this.__outputType = void 0;
        this._resolve = (value, options = {
        })=>{
            let schema = this.builder(value, options);
            if (!_isSchemaDefault.default(schema)) throw new TypeError('lazy() functions must return a valid schema');
            return schema.resolve(options);
        };
        this.builder = builder;
    }
    resolve(options) {
        return this._resolve(options.value, options);
    }
    cast(value, options) {
        return this._resolve(value, options).cast(value, options);
    }
    validate(value, options, maybeCb) {
        // @ts-expect-error missing public callback on type
        return this._resolve(value, options).validate(value, options, maybeCb);
    }
    validateSync(value, options) {
        return this._resolve(value, options).validateSync(value, options);
    }
    validateAt(path, value, options) {
        return this._resolve(value, options).validateAt(path, value, options);
    }
    validateSyncAt(path, value, options) {
        return this._resolve(value, options).validateSyncAt(path, value, options);
    }
    describe() {
        return null;
    }
    isValid(value, options) {
        return this._resolve(value, options).isValid(value, options);
    }
    isValidSync(value, options) {
        return this._resolve(value, options).isValidSync(value, options);
    }
}
exports.default = Lazy;

},{"./util/isSchema":"iKh25","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"6ynaU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _locale = require("./locale");
var _localeDefault = parcelHelpers.interopDefault(_locale);
function setLocale(custom) {
    Object.keys(custom).forEach((type)=>{
        // @ts-ignore
        Object.keys(custom[type]).forEach((method)=>{
            // @ts-ignore
            _localeDefault.default[type][method] = custom[type][method];
        });
    });
}
exports.default = setLocale;

},{"./locale":"8waLz","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"cqMkB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _sweetalert2Js = require("sweetalert2/dist/sweetalert2.js");
var _sweetalert2JsDefault = parcelHelpers.interopDefault(_sweetalert2Js);
var _yup = require("yup");
var _http = require("../http");
var _validation = require("../validation");
var _validationDefault = parcelHelpers.interopDefault(_validation);
var _client = require("../validation/client");
var _clientDefault = parcelHelpers.interopDefault(_client);
const handleError = (error, elements)=>{
    if (error instanceof _http.ServerValidationError) {
        const errors = error.errors;
        _validationDefault.default(elements.name, elements.nameError, errors.Name);
        _validationDefault.default(elements.email, elements.emailError, errors.Email);
        return;
    }
    if (error instanceof _yup.ValidationError) {
        _clientDefault.default(error, elements);
        return;
    }
    console.log(error);
    let message = 'An error has occurred, please try again later';
    if (error instanceof _http.HttpError) message = error.message;
    _sweetalert2JsDefault.default.fire({
        title: 'Error',
        text: message,
        icon: 'error',
        timerProgressBar: true
    });
};
exports.default = handleError;

},{"sweetalert2/dist/sweetalert2.js":"2rUmd","yup":"gvf4u","../http":"1nIup","../validation":"jNDhn","../validation/client":"cDp8w","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"jNDhn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const addValidation = (element, errorEl, error, timeout = 4000)=>{
    if (!error || error === '') return;
    element.classList.add('input-error');
    errorEl.classList.remove('hidden');
    errorEl.innerText = error;
    setTimeout(()=>{
        errorEl.classList.add('hidden');
        element.classList.remove('input-error');
    }, timeout);
};
exports.default = addValidation;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"cDp8w":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _index = require("./index");
var _indexDefault = parcelHelpers.interopDefault(_index);
const showClientValidation = (error, elements)=>{
    error.inner.forEach((item)=>{
        const element = elements[item.path];
        const joined = `${item.path}Error`;
        const errorElement = elements[joined];
        _indexDefault.default(element, errorElement, item.errors[0]);
    });
};
exports.default = showClientValidation;

},{"./index":"jNDhn","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"fkozp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _tsparticles = require("tsparticles");
const particlesSnowEffect = async (snowItem)=>{
    await _tsparticles.tsParticles.load(snowItem, {
        particles: {
            number: {
                value: 80,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: '#ffffff'
            },
            shape: {
                type: 'image',
                stroke: {
                    width: 3,
                    color: '#fff'
                },
                polygon: {
                    nb_sides: 5
                },
                image: {
                    src: 'img/snow_flake.png',
                    width: 100,
                    height: 100
                }
            },
            opacity: {
                value: 0.7,
                random: true,
                anim: {
                    enable: true,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false
                }
            },
            size: {
                value: 5,
                random: true,
                anim: {
                    enable: false,
                    speed: 20,
                    size_min: 0.1,
                    sync: false
                }
            },
            line_linked: {
                enable: false,
                distance: 50,
                color: '#ffffff',
                opacity: 0.6,
                width: 1
            },
            move: {
                enable: true,
                speed: 5,
                direction: 'bottom',
                random: true,
                straight: false,
                out_mode: 'out',
                bounce: false,
                attract: {
                    enable: true,
                    rotateX: 300,
                    rotateY: 1200
                }
            }
        },
        retina_detect: true
    });
};
exports.default = particlesSnowEffect;

},{"tsparticles":"f4GOe","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"f4GOe":[function(require,module,exports) {
"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, {
        enumerable: true,
        get: function() {
            return m[k];
        }
    });
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = this && this.__exportStar || function(m, exports) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.tsParticles = exports.pJSDom = exports.particlesJS = exports.Main = exports.Rectangle = exports.Point = exports.Constants = exports.CircleWarp = exports.Circle = void 0;
const pjs_1 = require("./pjs");
const main_1 = require("./main");
Object.defineProperty(exports, "Main", {
    enumerable: true,
    get: function() {
        return main_1.Main;
    }
});
const Utils_1 = require("./Utils");
Object.defineProperty(exports, "Circle", {
    enumerable: true,
    get: function() {
        return Utils_1.Circle;
    }
});
Object.defineProperty(exports, "CircleWarp", {
    enumerable: true,
    get: function() {
        return Utils_1.CircleWarp;
    }
});
Object.defineProperty(exports, "Constants", {
    enumerable: true,
    get: function() {
        return Utils_1.Constants;
    }
});
Object.defineProperty(exports, "Point", {
    enumerable: true,
    get: function() {
        return Utils_1.Point;
    }
});
Object.defineProperty(exports, "Rectangle", {
    enumerable: true,
    get: function() {
        return Utils_1.Rectangle;
    }
});
const full_1 = require("./full");
const tsParticles = new main_1.Main();
exports.tsParticles = tsParticles;
tsParticles.init();
full_1.loadFull(tsParticles);
const { particlesJS , pJSDom  } = pjs_1.initPjs(tsParticles);
exports.particlesJS = particlesJS;
exports.pJSDom = pJSDom;
__exportStar(require("./Core/Particle/Vector"), exports);
__exportStar(require("./Core/Container"), exports);
__exportStar(require("./Enums"), exports);
__exportStar(require("./Plugins/Absorbers/Enums"), exports);
__exportStar(require("./Plugins/Emitters/Enums"), exports);
__exportStar(require("./Plugins/PolygonMask/Enums"), exports);
__exportStar(require("./Utils/CanvasUtils"), exports);
__exportStar(require("./Utils/ColorUtils"), exports);
__exportStar(require("./Utils/NumberUtils"), exports);
__exportStar(require("./Utils/Utils"), exports);
__exportStar(require("./Types"), exports);
__exportStar(require("./Core/Interfaces"), exports);
__exportStar(require("./Core/Particle"), exports);
__exportStar(require("./Core/ExternalInteractorBase"), exports);
__exportStar(require("./Core/ParticlesInteractorBase"), exports);

},{"./pjs":"9Pkd4","./main":"2Osjy","./Utils":"iU3t1","./full":"3qPVE","./Core/Particle/Vector":"c55jT","./Core/Container":"4aGTK","./Enums":"e5HNg","./Plugins/Absorbers/Enums":"aVogp","./Plugins/Emitters/Enums":"fWPq6","./Plugins/PolygonMask/Enums":"iD5qi","./Utils/CanvasUtils":"h933D","./Utils/ColorUtils":"btGYj","./Utils/NumberUtils":"9GjON","./Utils/Utils":"dgopB","./Types":"4N51F","./Core/Interfaces":"2WJnG","./Core/Particle":"1Xilt","./Core/ExternalInteractorBase":"coWPo","./Core/ParticlesInteractorBase":"6NWe3"}],"9Pkd4":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.initPjs = void 0;
const initPjs = (main)=>{
    const particlesJS = (tagId, options)=>{
        return main.load(tagId, options);
    };
    particlesJS.load = (tagId, pathConfigJson, callback)=>{
        main.loadJSON(tagId, pathConfigJson).then((container)=>{
            if (container) callback(container);
        }).catch(()=>{
            callback(undefined);
        });
    };
    particlesJS.setOnClickHandler = (callback)=>{
        main.setOnClickHandler(callback);
    };
    const pJSDom = main.dom();
    return {
        particlesJS,
        pJSDom
    };
};
exports.initPjs = initPjs;

},{}],"2Osjy":[function(require,module,exports) {
"use strict";
var __classPrivateFieldSet = this && this.__classPrivateFieldSet || function(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var __classPrivateFieldGet = this && this.__classPrivateFieldGet || function(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Main_initialized;
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Main = void 0;
const Utils_1 = require("./Utils");
const Loader_1 = require("./Core/Loader");
class Main {
    constructor(){
        _Main_initialized.set(this, void 0);
        __classPrivateFieldSet(this, _Main_initialized, false, "f");
    }
    init() {
        if (!__classPrivateFieldGet(this, _Main_initialized, "f")) __classPrivateFieldSet(this, _Main_initialized, true, "f");
    }
    async loadFromArray(tagId, options, index) {
        return Loader_1.Loader.load(tagId, options, index);
    }
    async load(tagId, options) {
        return Loader_1.Loader.load(tagId, options);
    }
    async set(id, element, options) {
        return Loader_1.Loader.set(id, element, options);
    }
    async loadJSON(tagId, pathConfigJson, index) {
        return Loader_1.Loader.loadJSON(tagId, pathConfigJson, index);
    }
    async setJSON(id, element, pathConfigJson, index) {
        return Loader_1.Loader.setJSON(id, element, pathConfigJson, index);
    }
    setOnClickHandler(callback) {
        Loader_1.Loader.setOnClickHandler(callback);
    }
    dom() {
        return Loader_1.Loader.dom();
    }
    domItem(index) {
        return Loader_1.Loader.domItem(index);
    }
    addShape(shape, drawer, init, afterEffect, destroy) {
        let customDrawer;
        if (typeof drawer === "function") customDrawer = {
            afterEffect: afterEffect,
            destroy: destroy,
            draw: drawer,
            init: init
        };
        else customDrawer = drawer;
        Utils_1.Plugins.addShapeDrawer(shape, customDrawer);
    }
    addPreset(preset, options, override = false) {
        Utils_1.Plugins.addPreset(preset, options, override);
    }
    addPlugin(plugin) {
        Utils_1.Plugins.addPlugin(plugin);
    }
    addPathGenerator(name, generator) {
        Utils_1.Plugins.addPathGenerator(name, generator);
    }
    addInteractor(name, interactorInitializer) {
        Utils_1.Plugins.addInteractor(name, interactorInitializer);
    }
    addParticleUpdater(name, updaterInitializer) {
        Utils_1.Plugins.addParticleUpdater(name, updaterInitializer);
    }
}
exports.Main = Main;
_Main_initialized = new WeakMap();

},{"./Utils":"iU3t1","./Core/Loader":"hkhPc"}],"iU3t1":[function(require,module,exports) {
"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, {
        enumerable: true,
        get: function() {
            return m[k];
        }
    });
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = this && this.__exportStar || function(m, exports) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
__exportStar(require("./CanvasUtils"), exports);
__exportStar(require("./Circle"), exports);
__exportStar(require("./CircleWarp"), exports);
__exportStar(require("./ColorUtils"), exports);
__exportStar(require("./Constants"), exports);
__exportStar(require("./EventListeners"), exports);
__exportStar(require("./NumberUtils"), exports);
__exportStar(require("./Plugins"), exports);
__exportStar(require("./Point"), exports);
__exportStar(require("./QuadTree"), exports);
__exportStar(require("./Range"), exports);
__exportStar(require("./Rectangle"), exports);
__exportStar(require("./Utils"), exports);

},{"./CanvasUtils":"h933D","./Circle":"1aYGd","./CircleWarp":"36hWe","./ColorUtils":"btGYj","./Constants":"bbBvo","./EventListeners":"fBNTq","./NumberUtils":"9GjON","./Plugins":"7ILp7","./Point":"2dEgD","./QuadTree":"jrrgO","./Range":"lxiz8","./Rectangle":"2ke5K","./Utils":"dgopB"}],"h933D":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.alterHsl = exports.drawEllipse = exports.drawParticlePlugin = exports.drawPlugin = exports.drawShapeAfterEffect = exports.drawShape = exports.drawParticle = exports.drawGrabLine = exports.gradient = exports.drawConnectLine = exports.drawLinkTriangle = exports.drawLinkLine = exports.clear = exports.paintBase = void 0;
const NumberUtils_1 = require("./NumberUtils");
const ColorUtils_1 = require("./ColorUtils");
const Enums_1 = require("../Enums");
function drawLine(context, begin, end) {
    context.beginPath();
    context.moveTo(begin.x, begin.y);
    context.lineTo(end.x, end.y);
    context.closePath();
}
function drawTriangle(context, p1, p2, p3) {
    context.beginPath();
    context.moveTo(p1.x, p1.y);
    context.lineTo(p2.x, p2.y);
    context.lineTo(p3.x, p3.y);
    context.closePath();
}
function paintBase(context, dimension, baseColor) {
    context.save();
    context.fillStyle = baseColor !== null && baseColor !== void 0 ? baseColor : "rgba(0,0,0,0)";
    context.fillRect(0, 0, dimension.width, dimension.height);
    context.restore();
}
exports.paintBase = paintBase;
function clear(context, dimension) {
    context.clearRect(0, 0, dimension.width, dimension.height);
}
exports.clear = clear;
function drawLinkLine(context, width, begin, end, maxDistance, canvasSize, warp, backgroundMask, composite, colorLine, opacity, shadow) {
    let drawn = false;
    if (NumberUtils_1.getDistance(begin, end) <= maxDistance) {
        drawLine(context, begin, end);
        drawn = true;
    } else if (warp) {
        let pi1;
        let pi2;
        const endNE = {
            x: end.x - canvasSize.width,
            y: end.y
        };
        const d1 = NumberUtils_1.getDistances(begin, endNE);
        if (d1.distance <= maxDistance) {
            const yi = begin.y - d1.dy / d1.dx * begin.x;
            pi1 = {
                x: 0,
                y: yi
            };
            pi2 = {
                x: canvasSize.width,
                y: yi
            };
        } else {
            const endSW = {
                x: end.x,
                y: end.y - canvasSize.height
            };
            const d2 = NumberUtils_1.getDistances(begin, endSW);
            if (d2.distance <= maxDistance) {
                const yi = begin.y - d2.dy / d2.dx * begin.x;
                const xi = -yi / (d2.dy / d2.dx);
                pi1 = {
                    x: xi,
                    y: 0
                };
                pi2 = {
                    x: xi,
                    y: canvasSize.height
                };
            } else {
                const endSE = {
                    x: end.x - canvasSize.width,
                    y: end.y - canvasSize.height
                };
                const d3 = NumberUtils_1.getDistances(begin, endSE);
                if (d3.distance <= maxDistance) {
                    const yi = begin.y - d3.dy / d3.dx * begin.x;
                    const xi = -yi / (d3.dy / d3.dx);
                    pi1 = {
                        x: xi,
                        y: yi
                    };
                    pi2 = {
                        x: pi1.x + canvasSize.width,
                        y: pi1.y + canvasSize.height
                    };
                }
            }
        }
        if (pi1 && pi2) {
            drawLine(context, begin, pi1);
            drawLine(context, end, pi2);
            drawn = true;
        }
    }
    if (!drawn) return;
    context.lineWidth = width;
    if (backgroundMask) context.globalCompositeOperation = composite;
    context.strokeStyle = ColorUtils_1.getStyleFromRgb(colorLine, opacity);
    if (shadow.enable) {
        const shadowColor = ColorUtils_1.colorToRgb(shadow.color);
        if (shadowColor) {
            context.shadowBlur = shadow.blur;
            context.shadowColor = ColorUtils_1.getStyleFromRgb(shadowColor);
        }
    }
    context.stroke();
}
exports.drawLinkLine = drawLinkLine;
function drawLinkTriangle(context, pos1, pos2, pos3, backgroundMask, composite, colorTriangle, opacityTriangle) {
    drawTriangle(context, pos1, pos2, pos3);
    if (backgroundMask) context.globalCompositeOperation = composite;
    context.fillStyle = ColorUtils_1.getStyleFromRgb(colorTriangle, opacityTriangle);
    context.fill();
}
exports.drawLinkTriangle = drawLinkTriangle;
function drawConnectLine(context, width, lineStyle, begin, end) {
    context.save();
    drawLine(context, begin, end);
    context.lineWidth = width;
    context.strokeStyle = lineStyle;
    context.stroke();
    context.restore();
}
exports.drawConnectLine = drawConnectLine;
function gradient(context, p1, p2, opacity) {
    const gradStop = Math.floor(p2.getRadius() / p1.getRadius());
    const color1 = p1.getFillColor();
    const color2 = p2.getFillColor();
    if (!color1 || !color2) return;
    const sourcePos = p1.getPosition();
    const destPos = p2.getPosition();
    const midRgb = ColorUtils_1.colorMix(color1, color2, p1.getRadius(), p2.getRadius());
    const grad = context.createLinearGradient(sourcePos.x, sourcePos.y, destPos.x, destPos.y);
    grad.addColorStop(0, ColorUtils_1.getStyleFromHsl(color1, opacity));
    grad.addColorStop(gradStop > 1 ? 1 : gradStop, ColorUtils_1.getStyleFromRgb(midRgb, opacity));
    grad.addColorStop(1, ColorUtils_1.getStyleFromHsl(color2, opacity));
    return grad;
}
exports.gradient = gradient;
function drawGrabLine(context, width, begin, end, colorLine, opacity) {
    context.save();
    drawLine(context, begin, end);
    context.strokeStyle = ColorUtils_1.getStyleFromRgb(colorLine, opacity);
    context.lineWidth = width;
    context.stroke();
    context.restore();
}
exports.drawGrabLine = drawGrabLine;
function drawParticle(container, context, particle, delta, fillColorValue, strokeColorValue, backgroundMask, composite, radius, opacity, shadow, gradient) {
    var _a, _b, _c, _d, _e, _f;
    const pos = particle.getPosition();
    const tiltOptions = particle.options.tilt;
    const rollOptions = particle.options.roll;
    context.save();
    if (tiltOptions.enable || rollOptions.enable) {
        const roll = rollOptions.enable && particle.roll;
        const tilt = tiltOptions.enable && particle.tilt;
        const rollHorizontal = roll && (rollOptions.mode === Enums_1.RollMode.horizontal || rollOptions.mode === Enums_1.RollMode.both);
        const rollVertical = roll && (rollOptions.mode === Enums_1.RollMode.vertical || rollOptions.mode === Enums_1.RollMode.both);
        context.setTransform(rollHorizontal ? Math.cos(particle.roll.angle) : 1, tilt ? Math.cos(particle.tilt.value) * particle.tilt.cosDirection : 0, tilt ? Math.sin(particle.tilt.value) * particle.tilt.sinDirection : 0, rollVertical ? Math.sin(particle.roll.angle) : 1, pos.x, pos.y);
    } else context.translate(pos.x, pos.y);
    context.beginPath();
    const angle = ((_b = (_a = particle.rotate) === null || _a === void 0 ? void 0 : _a.value) !== null && _b !== void 0 ? _b : 0) + (particle.options.rotate.path ? particle.velocity.angle : 0);
    if (angle !== 0) context.rotate(angle);
    if (backgroundMask) context.globalCompositeOperation = composite;
    const shadowColor = particle.shadowColor;
    if (shadow.enable && shadowColor) {
        context.shadowBlur = shadow.blur;
        context.shadowColor = ColorUtils_1.getStyleFromRgb(shadowColor);
        context.shadowOffsetX = shadow.offset.x;
        context.shadowOffsetY = shadow.offset.y;
    }
    if (gradient) {
        const gradientAngle = gradient.angle.value;
        const fillGradient = gradient.type === Enums_1.GradientType.radial ? context.createRadialGradient(0, 0, 0, 0, 0, radius) : context.createLinearGradient(Math.cos(gradientAngle) * -radius, Math.sin(gradientAngle) * -radius, Math.cos(gradientAngle) * radius, Math.sin(gradientAngle) * radius);
        for (const color of gradient.colors)fillGradient.addColorStop(color.stop, ColorUtils_1.getStyleFromHsl({
            h: color.value.h.value,
            s: color.value.s.value,
            l: color.value.l.value
        }, (_d = (_c = color.opacity) === null || _c === void 0 ? void 0 : _c.value) !== null && _d !== void 0 ? _d : opacity));
        context.fillStyle = fillGradient;
    } else if (fillColorValue) context.fillStyle = fillColorValue;
    const stroke = particle.stroke;
    context.lineWidth = (_e = particle.strokeWidth) !== null && _e !== void 0 ? _e : 0;
    if (strokeColorValue) context.strokeStyle = strokeColorValue;
    drawShape(container, context, particle, radius, opacity, delta);
    if (((_f = stroke === null || stroke === void 0 ? void 0 : stroke.width) !== null && _f !== void 0 ? _f : 0) > 0) context.stroke();
    if (particle.close) context.closePath();
    if (particle.fill) context.fill();
    context.restore();
    context.save();
    if (tiltOptions.enable && particle.tilt) context.setTransform(1, Math.cos(particle.tilt.value) * particle.tilt.cosDirection, Math.sin(particle.tilt.value) * particle.tilt.sinDirection, 1, pos.x, pos.y);
    else context.translate(pos.x, pos.y);
    if (angle !== 0) context.rotate(angle);
    if (backgroundMask) context.globalCompositeOperation = composite;
    drawShapeAfterEffect(container, context, particle, radius, opacity, delta);
    context.restore();
}
exports.drawParticle = drawParticle;
function drawShape(container, context, particle, radius, opacity, delta) {
    if (!particle.shape) return;
    const drawer = container.drawers.get(particle.shape);
    if (!drawer) return;
    drawer.draw(context, particle, radius, opacity, delta, container.retina.pixelRatio);
}
exports.drawShape = drawShape;
function drawShapeAfterEffect(container, context, particle, radius, opacity, delta) {
    if (!particle.shape) return;
    const drawer = container.drawers.get(particle.shape);
    if (!(drawer === null || drawer === void 0 ? void 0 : drawer.afterEffect)) return;
    drawer.afterEffect(context, particle, radius, opacity, delta, container.retina.pixelRatio);
}
exports.drawShapeAfterEffect = drawShapeAfterEffect;
function drawPlugin(context, plugin, delta) {
    if (!plugin.draw) return;
    context.save();
    plugin.draw(context, delta);
    context.restore();
}
exports.drawPlugin = drawPlugin;
function drawParticlePlugin(context, plugin, particle, delta) {
    if (plugin.drawParticle !== undefined) {
        context.save();
        plugin.drawParticle(context, particle, delta);
        context.restore();
    }
}
exports.drawParticlePlugin = drawParticlePlugin;
function drawEllipse(context, particle, fillColorValue, radius, opacity, width, rotation, start, end) {
    const pos = particle.getPosition();
    if (fillColorValue) context.strokeStyle = ColorUtils_1.getStyleFromHsl(fillColorValue, opacity);
    if (width === 0) return;
    context.lineWidth = width;
    const rotationRadian = rotation * Math.PI / 180;
    context.beginPath();
    context.ellipse(pos.x, pos.y, radius / 2, radius * 2, rotationRadian, start, end);
    context.stroke();
}
exports.drawEllipse = drawEllipse;
function alterHsl(color, type, value) {
    return {
        h: color.h,
        s: color.s,
        l: color.l + (type === Enums_1.AlterType.darken ? -1 : 1) * value
    };
}
exports.alterHsl = alterHsl;

},{"./NumberUtils":"9GjON","./ColorUtils":"btGYj","../Enums":"e5HNg"}],"9GjON":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.calcEasing = exports.collisionVelocity = exports.getParticleBaseVelocity = exports.getParticleDirectionAngle = exports.getDistance = exports.getDistances = exports.getValue = exports.setRangeValue = exports.getRangeMax = exports.getRangeMin = exports.getRangeValue = exports.randomInRange = exports.mix = exports.clamp = void 0;
const Enums_1 = require("../Enums");
const Vector_1 = require("../Core/Particle/Vector");
function clamp(num, min, max) {
    return Math.min(Math.max(num, min), max);
}
exports.clamp = clamp;
function mix(comp1, comp2, weight1, weight2) {
    return Math.floor((comp1 * weight1 + comp2 * weight2) / (weight1 + weight2));
}
exports.mix = mix;
function randomInRange(r) {
    const max = getRangeMax(r);
    let min = getRangeMin(r);
    if (max === min) min = 0;
    return Math.random() * (max - min) + min;
}
exports.randomInRange = randomInRange;
function getRangeValue(value) {
    return typeof value === "number" ? value : randomInRange(value);
}
exports.getRangeValue = getRangeValue;
function getRangeMin(value) {
    return typeof value === "number" ? value : value.min;
}
exports.getRangeMin = getRangeMin;
function getRangeMax(value) {
    return typeof value === "number" ? value : value.max;
}
exports.getRangeMax = getRangeMax;
function setRangeValue(source, value) {
    if (source === value || value === undefined && typeof source === "number") return source;
    const min = getRangeMin(source), max = getRangeMax(source);
    return value !== undefined ? {
        min: Math.min(min, value),
        max: Math.max(max, value)
    } : setRangeValue(min, max);
}
exports.setRangeValue = setRangeValue;
function getValue(options) {
    const random = options.random;
    const { enable , minimumValue  } = typeof random === "boolean" ? {
        enable: random,
        minimumValue: 0
    } : random;
    return enable ? getRangeValue(setRangeValue(options.value, minimumValue)) : getRangeValue(options.value);
}
exports.getValue = getValue;
function getDistances(pointA, pointB) {
    const dx = pointA.x - pointB.x;
    const dy = pointA.y - pointB.y;
    return {
        dx: dx,
        dy: dy,
        distance: Math.sqrt(dx * dx + dy * dy)
    };
}
exports.getDistances = getDistances;
function getDistance(pointA, pointB) {
    return getDistances(pointA, pointB).distance;
}
exports.getDistance = getDistance;
function getParticleDirectionAngle(direction) {
    if (typeof direction === "number") return direction * Math.PI / 180;
    else switch(direction){
        case Enums_1.MoveDirection.top:
            return -Math.PI / 2;
        case Enums_1.MoveDirection.topRight:
            return -Math.PI / 4;
        case Enums_1.MoveDirection.right:
            return 0;
        case Enums_1.MoveDirection.bottomRight:
            return Math.PI / 4;
        case Enums_1.MoveDirection.bottom:
            return Math.PI / 2;
        case Enums_1.MoveDirection.bottomLeft:
            return 3 * Math.PI / 4;
        case Enums_1.MoveDirection.left:
            return Math.PI;
        case Enums_1.MoveDirection.topLeft:
            return -3 * Math.PI / 4;
        case Enums_1.MoveDirection.none:
        default:
            return Math.random() * Math.PI * 2;
    }
}
exports.getParticleDirectionAngle = getParticleDirectionAngle;
function getParticleBaseVelocity(direction) {
    const baseVelocity = Vector_1.Vector.origin;
    baseVelocity.length = 1;
    baseVelocity.angle = direction;
    return baseVelocity;
}
exports.getParticleBaseVelocity = getParticleBaseVelocity;
function collisionVelocity(v1, v2, m1, m2) {
    return Vector_1.Vector.create(v1.x * (m1 - m2) / (m1 + m2) + v2.x * 2 * m2 / (m1 + m2), v1.y);
}
exports.collisionVelocity = collisionVelocity;
function calcEasing(value, type) {
    switch(type){
        case Enums_1.EasingType.easeOutQuad:
            return 1 - (1 - value) ** 2;
        case Enums_1.EasingType.easeOutCubic:
            return 1 - (1 - value) ** 3;
        case Enums_1.EasingType.easeOutQuart:
            return 1 - (1 - value) ** 4;
        case Enums_1.EasingType.easeOutQuint:
            return 1 - (1 - value) ** 5;
        case Enums_1.EasingType.easeOutExpo:
            return value === 1 ? 1 : 1 - Math.pow(2, -10 * value);
        case Enums_1.EasingType.easeOutSine:
            return Math.sin(value * Math.PI / 2);
        case Enums_1.EasingType.easeOutBack:
            {
                const c1 = 1.70158;
                const c3 = c1 + 1;
                return 1 + c3 * Math.pow(value - 1, 3) + c1 * Math.pow(value - 1, 2);
            }
        case Enums_1.EasingType.easeOutCirc:
            return Math.sqrt(1 - Math.pow(value - 1, 2));
        default:
            return value;
    }
}
exports.calcEasing = calcEasing;

},{"../Enums":"e5HNg","../Core/Particle/Vector":"c55jT"}],"e5HNg":[function(require,module,exports) {
"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, {
        enumerable: true,
        get: function() {
            return m[k];
        }
    });
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = this && this.__exportStar || function(m, exports) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
__exportStar(require("./Directions"), exports);
__exportStar(require("./Modes"), exports);
__exportStar(require("./AnimationStatus"), exports);
__exportStar(require("./Types"), exports);
__exportStar(require("./InteractivityDetect"), exports);

},{"./Directions":"h9AbC","./Modes":"mUZII","./AnimationStatus":"4VXq0","./Types":"1lydT","./InteractivityDetect":"iGjXp"}],"h9AbC":[function(require,module,exports) {
"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, {
        enumerable: true,
        get: function() {
            return m[k];
        }
    });
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = this && this.__exportStar || function(m, exports) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
__exportStar(require("./MoveDirection"), exports);
__exportStar(require("./RotateDirection"), exports);
__exportStar(require("./OutModeDirection"), exports);
__exportStar(require("./TiltDirection"), exports);

},{"./MoveDirection":"7ZAvn","./RotateDirection":"cPQGL","./OutModeDirection":"jLlrE","./TiltDirection":"81hJo"}],"7ZAvn":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MoveDirection = void 0;
var MoveDirection;
(function(MoveDirection) {
    MoveDirection["bottom"] = "bottom";
    MoveDirection["bottomLeft"] = "bottom-left";
    MoveDirection["bottomRight"] = "bottom-right";
    MoveDirection["left"] = "left";
    MoveDirection["none"] = "none";
    MoveDirection["right"] = "right";
    MoveDirection["top"] = "top";
    MoveDirection["topLeft"] = "top-left";
    MoveDirection["topRight"] = "top-right";
})(MoveDirection = exports.MoveDirection || (exports.MoveDirection = {
}));

},{}],"cPQGL":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RotateDirection = void 0;
var RotateDirection;
(function(RotateDirection) {
    RotateDirection["clockwise"] = "clockwise";
    RotateDirection["counterClockwise"] = "counter-clockwise";
    RotateDirection["random"] = "random";
})(RotateDirection = exports.RotateDirection || (exports.RotateDirection = {
}));

},{}],"jLlrE":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.OutModeDirection = void 0;
var OutModeDirection;
(function(OutModeDirection) {
    OutModeDirection["bottom"] = "bottom";
    OutModeDirection["left"] = "left";
    OutModeDirection["right"] = "right";
    OutModeDirection["top"] = "top";
})(OutModeDirection = exports.OutModeDirection || (exports.OutModeDirection = {
}));

},{}],"81hJo":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TiltDirection = void 0;
var TiltDirection;
(function(TiltDirection) {
    TiltDirection["clockwise"] = "clockwise";
    TiltDirection["counterClockwise"] = "counter-clockwise";
    TiltDirection["random"] = "random";
})(TiltDirection = exports.TiltDirection || (exports.TiltDirection = {
}));

},{}],"mUZII":[function(require,module,exports) {
"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, {
        enumerable: true,
        get: function() {
            return m[k];
        }
    });
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = this && this.__exportStar || function(m, exports) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
__exportStar(require("./ClickMode"), exports);
__exportStar(require("./DestroyMode"), exports);
__exportStar(require("./DivMode"), exports);
__exportStar(require("./HoverMode"), exports);
__exportStar(require("./CollisionMode"), exports);
__exportStar(require("./OutMode"), exports);
__exportStar(require("./RollMode"), exports);
__exportStar(require("./SizeMode"), exports);
__exportStar(require("./ThemeMode"), exports);

},{"./ClickMode":"1Csnq","./DestroyMode":"5GIex","./DivMode":"2vHo0","./HoverMode":"3tWYp","./CollisionMode":"d3uYg","./OutMode":"6s8yK","./RollMode":"bH1OQ","./SizeMode":"dq7g5","./ThemeMode":"7ivWb"}],"1Csnq":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ClickMode = void 0;
var ClickMode;
(function(ClickMode) {
    ClickMode["attract"] = "attract";
    ClickMode["bubble"] = "bubble";
    ClickMode["push"] = "push";
    ClickMode["remove"] = "remove";
    ClickMode["repulse"] = "repulse";
    ClickMode["pause"] = "pause";
    ClickMode["trail"] = "trail";
})(ClickMode = exports.ClickMode || (exports.ClickMode = {
}));

},{}],"5GIex":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DestroyMode = void 0;
var DestroyMode;
(function(DestroyMode) {
    DestroyMode["none"] = "none";
    DestroyMode["split"] = "split";
})(DestroyMode = exports.DestroyMode || (exports.DestroyMode = {
}));

},{}],"2vHo0":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DivMode = void 0;
var DivMode;
(function(DivMode) {
    DivMode["bounce"] = "bounce";
    DivMode["bubble"] = "bubble";
    DivMode["repulse"] = "repulse";
})(DivMode = exports.DivMode || (exports.DivMode = {
}));

},{}],"3tWYp":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.HoverMode = void 0;
var HoverMode;
(function(HoverMode) {
    HoverMode["attract"] = "attract";
    HoverMode["bounce"] = "bounce";
    HoverMode["bubble"] = "bubble";
    HoverMode["connect"] = "connect";
    HoverMode["grab"] = "grab";
    HoverMode["light"] = "light";
    HoverMode["repulse"] = "repulse";
    HoverMode["slow"] = "slow";
    HoverMode["trail"] = "trail";
})(HoverMode = exports.HoverMode || (exports.HoverMode = {
}));

},{}],"d3uYg":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CollisionMode = void 0;
var CollisionMode;
(function(CollisionMode) {
    CollisionMode["absorb"] = "absorb";
    CollisionMode["bounce"] = "bounce";
    CollisionMode["destroy"] = "destroy";
})(CollisionMode = exports.CollisionMode || (exports.CollisionMode = {
}));

},{}],"6s8yK":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.OutMode = void 0;
var OutMode;
(function(OutMode) {
    OutMode["bounce"] = "bounce";
    OutMode["bounceHorizontal"] = "bounce-horizontal";
    OutMode["bounceVertical"] = "bounce-vertical";
    OutMode["none"] = "none";
    OutMode["out"] = "out";
    OutMode["destroy"] = "destroy";
    OutMode["split"] = "split";
})(OutMode = exports.OutMode || (exports.OutMode = {
}));

},{}],"bH1OQ":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RollMode = void 0;
var RollMode;
(function(RollMode) {
    RollMode["both"] = "both";
    RollMode["horizontal"] = "horizontal";
    RollMode["vertical"] = "vertical";
})(RollMode = exports.RollMode || (exports.RollMode = {
}));

},{}],"dq7g5":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SizeMode = void 0;
var SizeMode;
(function(SizeMode) {
    SizeMode["precise"] = "precise";
    SizeMode["percent"] = "percent";
})(SizeMode = exports.SizeMode || (exports.SizeMode = {
}));

},{}],"7ivWb":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ThemeMode = void 0;
var ThemeMode;
(function(ThemeMode) {
    ThemeMode["any"] = "any";
    ThemeMode["dark"] = "dark";
    ThemeMode["light"] = "light";
})(ThemeMode = exports.ThemeMode || (exports.ThemeMode = {
}));

},{}],"4VXq0":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AnimationStatus = void 0;
var AnimationStatus;
(function(AnimationStatus) {
    AnimationStatus[AnimationStatus["increasing"] = 0] = "increasing";
    AnimationStatus[AnimationStatus["decreasing"] = 1] = "decreasing";
})(AnimationStatus = exports.AnimationStatus || (exports.AnimationStatus = {
}));

},{}],"1lydT":[function(require,module,exports) {
"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, {
        enumerable: true,
        get: function() {
            return m[k];
        }
    });
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = this && this.__exportStar || function(m, exports) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
__exportStar(require("./AlterType"), exports);
__exportStar(require("./DestroyType"), exports);
__exportStar(require("./GradientType"), exports);
__exportStar(require("./InteractorType"), exports);
__exportStar(require("./ShapeType"), exports);
__exportStar(require("./StartValueType"), exports);
__exportStar(require("./DivType"), exports);
__exportStar(require("./EasingType"), exports);
__exportStar(require("./OrbitType"), exports);

},{"./AlterType":"l0LAo","./DestroyType":"lUaAk","./GradientType":"dNiwn","./InteractorType":"ePNtX","./ShapeType":"lr0QI","./StartValueType":"dCzSV","./DivType":"dcGPd","./EasingType":"3cy7q","./OrbitType":"5dRFy"}],"l0LAo":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AlterType = void 0;
var AlterType;
(function(AlterType) {
    AlterType["darken"] = "darken";
    AlterType["enlighten"] = "enlighten";
})(AlterType = exports.AlterType || (exports.AlterType = {
}));

},{}],"lUaAk":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DestroyType = void 0;
var DestroyType;
(function(DestroyType) {
    DestroyType["none"] = "none";
    DestroyType["max"] = "max";
    DestroyType["min"] = "min";
})(DestroyType = exports.DestroyType || (exports.DestroyType = {
}));

},{}],"dNiwn":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.GradientType = void 0;
var GradientType;
(function(GradientType) {
    GradientType["linear"] = "linear";
    GradientType["radial"] = "radial";
    GradientType["random"] = "random";
})(GradientType = exports.GradientType || (exports.GradientType = {
}));

},{}],"ePNtX":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.InteractorType = void 0;
var InteractorType;
(function(InteractorType) {
    InteractorType[InteractorType["External"] = 0] = "External";
    InteractorType[InteractorType["Particles"] = 1] = "Particles";
})(InteractorType = exports.InteractorType || (exports.InteractorType = {
}));

},{}],"lr0QI":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ShapeType = void 0;
var ShapeType;
(function(ShapeType) {
    ShapeType["char"] = "char";
    ShapeType["character"] = "character";
    ShapeType["circle"] = "circle";
    ShapeType["edge"] = "edge";
    ShapeType["image"] = "image";
    ShapeType["images"] = "images";
    ShapeType["line"] = "line";
    ShapeType["polygon"] = "polygon";
    ShapeType["square"] = "square";
    ShapeType["star"] = "star";
    ShapeType["triangle"] = "triangle";
})(ShapeType = exports.ShapeType || (exports.ShapeType = {
}));

},{}],"dCzSV":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.StartValueType = void 0;
var StartValueType;
(function(StartValueType) {
    StartValueType["max"] = "max";
    StartValueType["min"] = "min";
    StartValueType["random"] = "random";
})(StartValueType = exports.StartValueType || (exports.StartValueType = {
}));

},{}],"dcGPd":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DivType = void 0;
var DivType;
(function(DivType) {
    DivType["circle"] = "circle";
    DivType["rectangle"] = "rectangle";
})(DivType = exports.DivType || (exports.DivType = {
}));

},{}],"3cy7q":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.EasingType = void 0;
var EasingType;
(function(EasingType) {
    EasingType["easeOutBack"] = "ease-out-back";
    EasingType["easeOutCirc"] = "ease-out-circ";
    EasingType["easeOutCubic"] = "ease-out-cubic";
    EasingType["easeOutQuad"] = "ease-out-quad";
    EasingType["easeOutQuart"] = "ease-out-quart";
    EasingType["easeOutQuint"] = "ease-out-quint";
    EasingType["easeOutExpo"] = "ease-out-expo";
    EasingType["easeOutSine"] = "ease-out-sine";
})(EasingType = exports.EasingType || (exports.EasingType = {
}));

},{}],"5dRFy":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.OrbitType = void 0;
var OrbitType;
(function(OrbitType) {
    OrbitType["front"] = "front";
    OrbitType["back"] = "back";
})(OrbitType = exports.OrbitType || (exports.OrbitType = {
}));

},{}],"iGjXp":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.InteractivityDetect = void 0;
var InteractivityDetect;
(function(InteractivityDetect) {
    InteractivityDetect["canvas"] = "canvas";
    InteractivityDetect["parent"] = "parent";
    InteractivityDetect["window"] = "window";
})(InteractivityDetect = exports.InteractivityDetect || (exports.InteractivityDetect = {
}));

},{}],"c55jT":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Vector = void 0;
class Vector {
    constructor(x, y){
        let defX, defY;
        if (y === undefined) {
            if (typeof x === "number") throw new Error("tsParticles - Vector not initialized correctly");
            const coords = x;
            [defX, defY] = [
                coords.x,
                coords.y
            ];
        } else [defX, defY] = [
            x,
            y
        ];
        this.x = defX;
        this.y = defY;
    }
    static clone(source) {
        return Vector.create(source.x, source.y);
    }
    static create(x, y) {
        return new Vector(x, y);
    }
    static get origin() {
        return Vector.create(0, 0);
    }
    get angle() {
        return Math.atan2(this.y, this.x);
    }
    set angle(angle) {
        this.updateFromAngle(angle, this.length);
    }
    get length() {
        return Math.sqrt(this.x ** 2 + this.y ** 2);
    }
    set length(length) {
        this.updateFromAngle(this.angle, length);
    }
    add(v) {
        return Vector.create(this.x + v.x, this.y + v.y);
    }
    addTo(v) {
        this.x += v.x;
        this.y += v.y;
    }
    sub(v) {
        return Vector.create(this.x - v.x, this.y - v.y);
    }
    subFrom(v) {
        this.x -= v.x;
        this.y -= v.y;
    }
    mult(n) {
        return Vector.create(this.x * n, this.y * n);
    }
    multTo(n) {
        this.x *= n;
        this.y *= n;
    }
    div(n) {
        return Vector.create(this.x / n, this.y / n);
    }
    divTo(n) {
        this.x /= n;
        this.y /= n;
    }
    distanceTo(v) {
        return this.sub(v).length;
    }
    getLengthSq() {
        return this.x ** 2 + this.y ** 2;
    }
    distanceToSq(v) {
        return this.sub(v).getLengthSq();
    }
    manhattanDistanceTo(v) {
        return Math.abs(v.x - this.x) + Math.abs(v.y - this.y);
    }
    copy() {
        return Vector.clone(this);
    }
    setTo(velocity) {
        this.x = velocity.x;
        this.y = velocity.y;
    }
    rotate(angle) {
        return Vector.create(this.x * Math.cos(angle) - this.y * Math.sin(angle), this.x * Math.sin(angle) + this.y * Math.cos(angle));
    }
    updateFromAngle(angle, length) {
        this.x = Math.cos(angle) * length;
        this.y = Math.sin(angle) * length;
    }
}
exports.Vector = Vector;

},{}],"btGYj":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getHslAnimationFromHsl = exports.getHslFromAnimation = exports.getLinkRandomColor = exports.getLinkColor = exports.colorMix = exports.getStyleFromHsv = exports.getStyleFromHsl = exports.getStyleFromRgb = exports.getRandomRgbColor = exports.rgbaToHsva = exports.rgbToHsv = exports.hsvaToRgba = exports.hsvToRgb = exports.hsvaToHsla = exports.hsvToHsl = exports.hslaToHsva = exports.hslToHsv = exports.hslaToRgba = exports.hslToRgb = exports.stringToRgb = exports.stringToAlpha = exports.rgbToHsl = exports.colorToHsl = exports.colorToRgb = void 0;
const Utils_1 = require("./Utils");
const Constants_1 = require("./Constants");
const NumberUtils_1 = require("./NumberUtils");
const Enums_1 = require("../Enums");
function hue2rgb(p, q, t) {
    let tCalc = t;
    if (tCalc < 0) tCalc += 1;
    if (tCalc > 1) tCalc -= 1;
    if (tCalc < 1 / 6) return p + (q - p) * 6 * tCalc;
    if (tCalc < 0.5) return q;
    if (tCalc < 2 / 3) return p + (q - p) * (2 / 3 - tCalc) * 6;
    return p;
}
function stringToRgba(input) {
    if (input.startsWith("rgb")) {
        const regex = /rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([\d.]+)\s*)?\)/i;
        const result = regex.exec(input);
        return result ? {
            a: result.length > 4 ? parseFloat(result[5]) : 1,
            b: parseInt(result[3], 10),
            g: parseInt(result[2], 10),
            r: parseInt(result[1], 10)
        } : undefined;
    } else if (input.startsWith("hsl")) {
        const regex = /hsla?\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*(,\s*([\d.]+)\s*)?\)/i;
        const result = regex.exec(input);
        return result ? hslaToRgba({
            a: result.length > 4 ? parseFloat(result[5]) : 1,
            h: parseInt(result[1], 10),
            l: parseInt(result[3], 10),
            s: parseInt(result[2], 10)
        }) : undefined;
    } else if (input.startsWith("hsv")) {
        const regex = /hsva?\(\s*(\d+)°\s*,\s*(\d+)%\s*,\s*(\d+)%\s*(,\s*([\d.]+)\s*)?\)/i;
        const result = regex.exec(input);
        return result ? hsvaToRgba({
            a: result.length > 4 ? parseFloat(result[5]) : 1,
            h: parseInt(result[1], 10),
            s: parseInt(result[2], 10),
            v: parseInt(result[3], 10)
        }) : undefined;
    } else {
        const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])([a-f\d])?$/i;
        const hexFixed = input.replace(shorthandRegex, (_m, r, g, b, a)=>{
            return r + r + g + g + b + b + (a !== undefined ? a + a : "");
        });
        const regex = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i;
        const result = regex.exec(hexFixed);
        return result ? {
            a: result[4] !== undefined ? parseInt(result[4], 16) / 255 : 1,
            b: parseInt(result[3], 16),
            g: parseInt(result[2], 16),
            r: parseInt(result[1], 16)
        } : undefined;
    }
}
function colorToRgb(input, index, useIndex = true) {
    var _a, _b, _c;
    if (input === undefined) return;
    const color = typeof input === "string" ? {
        value: input
    } : input;
    let res;
    if (typeof color.value === "string") {
        if (color.value === Constants_1.Constants.randomColorValue) res = getRandomRgbColor();
        else res = stringToRgb(color.value);
    } else if (color.value instanceof Array) {
        const colorSelected = Utils_1.itemFromArray(color.value, index, useIndex);
        res = colorToRgb({
            value: colorSelected
        });
    } else {
        const colorValue = color.value;
        const rgbColor = (_a = colorValue.rgb) !== null && _a !== void 0 ? _a : color.value;
        if (rgbColor.r !== undefined) res = rgbColor;
        else {
            const hslColor = (_b = colorValue.hsl) !== null && _b !== void 0 ? _b : color.value;
            if (hslColor.h !== undefined && hslColor.l !== undefined) res = hslToRgb(hslColor);
            else {
                const hsvColor = (_c = colorValue.hsv) !== null && _c !== void 0 ? _c : color.value;
                if (hsvColor.h !== undefined && hsvColor.v !== undefined) res = hsvToRgb(hsvColor);
            }
        }
    }
    return res;
}
exports.colorToRgb = colorToRgb;
function colorToHsl(color, index, useIndex = true) {
    const rgb = colorToRgb(color, index, useIndex);
    return rgb !== undefined ? rgbToHsl(rgb) : undefined;
}
exports.colorToHsl = colorToHsl;
function rgbToHsl(color) {
    const r1 = color.r / 255;
    const g1 = color.g / 255;
    const b1 = color.b / 255;
    const max = Math.max(r1, g1, b1);
    const min = Math.min(r1, g1, b1);
    const res = {
        h: 0,
        l: (max + min) / 2,
        s: 0
    };
    if (max != min) {
        res.s = res.l < 0.5 ? (max - min) / (max + min) : (max - min) / (2 - max - min);
        res.h = r1 === max ? (g1 - b1) / (max - min) : res.h = g1 === max ? 2 + (b1 - r1) / (max - min) : 4 + (r1 - g1) / (max - min);
    }
    res.l *= 100;
    res.s *= 100;
    res.h *= 60;
    if (res.h < 0) res.h += 360;
    return res;
}
exports.rgbToHsl = rgbToHsl;
function stringToAlpha(input) {
    var _a;
    return (_a = stringToRgba(input)) === null || _a === void 0 ? void 0 : _a.a;
}
exports.stringToAlpha = stringToAlpha;
function stringToRgb(input) {
    return stringToRgba(input);
}
exports.stringToRgb = stringToRgb;
function hslToRgb(hsl) {
    const result = {
        b: 0,
        g: 0,
        r: 0
    };
    const hslPercent = {
        h: hsl.h / 360,
        l: hsl.l / 100,
        s: hsl.s / 100
    };
    if (hslPercent.s === 0) {
        result.b = hslPercent.l;
        result.g = hslPercent.l;
        result.r = hslPercent.l;
    } else {
        const q = hslPercent.l < 0.5 ? hslPercent.l * (1 + hslPercent.s) : hslPercent.l + hslPercent.s - hslPercent.l * hslPercent.s;
        const p = 2 * hslPercent.l - q;
        result.r = hue2rgb(p, q, hslPercent.h + 1 / 3);
        result.g = hue2rgb(p, q, hslPercent.h);
        result.b = hue2rgb(p, q, hslPercent.h - 1 / 3);
    }
    result.r = Math.floor(result.r * 255);
    result.g = Math.floor(result.g * 255);
    result.b = Math.floor(result.b * 255);
    return result;
}
exports.hslToRgb = hslToRgb;
function hslaToRgba(hsla) {
    const rgbResult = hslToRgb(hsla);
    return {
        a: hsla.a,
        b: rgbResult.b,
        g: rgbResult.g,
        r: rgbResult.r
    };
}
exports.hslaToRgba = hslaToRgba;
function hslToHsv(hsl) {
    const l = hsl.l / 100, sl = hsl.s / 100;
    const v = l + sl * Math.min(l, 1 - l), sv = !v ? 0 : 2 * (1 - l / v);
    return {
        h: hsl.h,
        s: sv * 100,
        v: v * 100
    };
}
exports.hslToHsv = hslToHsv;
function hslaToHsva(hsla) {
    const hsvResult = hslToHsv(hsla);
    return {
        a: hsla.a,
        h: hsvResult.h,
        s: hsvResult.s,
        v: hsvResult.v
    };
}
exports.hslaToHsva = hslaToHsva;
function hsvToHsl(hsv) {
    const v = hsv.v / 100, sv = hsv.s / 100;
    const l = v * (1 - sv / 2), sl = l === 0 || l === 1 ? 0 : (v - l) / Math.min(l, 1 - l);
    return {
        h: hsv.h,
        l: l * 100,
        s: sl * 100
    };
}
exports.hsvToHsl = hsvToHsl;
function hsvaToHsla(hsva) {
    const hslResult = hsvToHsl(hsva);
    return {
        a: hsva.a,
        h: hslResult.h,
        l: hslResult.l,
        s: hslResult.s
    };
}
exports.hsvaToHsla = hsvaToHsla;
function hsvToRgb(hsv) {
    const result = {
        b: 0,
        g: 0,
        r: 0
    };
    const hsvPercent = {
        h: hsv.h / 60,
        s: hsv.s / 100,
        v: hsv.v / 100
    };
    const c = hsvPercent.v * hsvPercent.s, x = c * (1 - Math.abs(hsvPercent.h % 2 - 1));
    let tempRgb;
    if (hsvPercent.h >= 0 && hsvPercent.h <= 1) tempRgb = {
        r: c,
        g: x,
        b: 0
    };
    else if (hsvPercent.h > 1 && hsvPercent.h <= 2) tempRgb = {
        r: x,
        g: c,
        b: 0
    };
    else if (hsvPercent.h > 2 && hsvPercent.h <= 3) tempRgb = {
        r: 0,
        g: c,
        b: x
    };
    else if (hsvPercent.h > 3 && hsvPercent.h <= 4) tempRgb = {
        r: 0,
        g: x,
        b: c
    };
    else if (hsvPercent.h > 4 && hsvPercent.h <= 5) tempRgb = {
        r: x,
        g: 0,
        b: c
    };
    else if (hsvPercent.h > 5 && hsvPercent.h <= 6) tempRgb = {
        r: c,
        g: 0,
        b: x
    };
    if (tempRgb) {
        const m = hsvPercent.v - c;
        result.r = Math.floor((tempRgb.r + m) * 255);
        result.g = Math.floor((tempRgb.g + m) * 255);
        result.b = Math.floor((tempRgb.b + m) * 255);
    }
    return result;
}
exports.hsvToRgb = hsvToRgb;
function hsvaToRgba(hsva) {
    const rgbResult = hsvToRgb(hsva);
    return {
        a: hsva.a,
        b: rgbResult.b,
        g: rgbResult.g,
        r: rgbResult.r
    };
}
exports.hsvaToRgba = hsvaToRgba;
function rgbToHsv(rgb) {
    const rgbPercent = {
        r: rgb.r / 255,
        g: rgb.g / 255,
        b: rgb.b / 255
    }, xMax = Math.max(rgbPercent.r, rgbPercent.g, rgbPercent.b), xMin = Math.min(rgbPercent.r, rgbPercent.g, rgbPercent.b), v = xMax, c = xMax - xMin;
    let h = 0;
    if (v === rgbPercent.r) h = 60 * ((rgbPercent.g - rgbPercent.b) / c);
    else if (v === rgbPercent.g) h = 60 * (2 + (rgbPercent.b - rgbPercent.r) / c);
    else if (v === rgbPercent.b) h = 60 * (4 + (rgbPercent.r - rgbPercent.g) / c);
    const s = !v ? 0 : c / v;
    return {
        h,
        s: s * 100,
        v: v * 100
    };
}
exports.rgbToHsv = rgbToHsv;
function rgbaToHsva(rgba) {
    const hsvResult = rgbToHsv(rgba);
    return {
        a: rgba.a,
        h: hsvResult.h,
        s: hsvResult.s,
        v: hsvResult.v
    };
}
exports.rgbaToHsva = rgbaToHsva;
function getRandomRgbColor(min) {
    const fixedMin = min !== null && min !== void 0 ? min : 0;
    return {
        b: Math.floor(NumberUtils_1.randomInRange(NumberUtils_1.setRangeValue(fixedMin, 256))),
        g: Math.floor(NumberUtils_1.randomInRange(NumberUtils_1.setRangeValue(fixedMin, 256))),
        r: Math.floor(NumberUtils_1.randomInRange(NumberUtils_1.setRangeValue(fixedMin, 256)))
    };
}
exports.getRandomRgbColor = getRandomRgbColor;
function getStyleFromRgb(color, opacity) {
    return `rgba(${color.r}, ${color.g}, ${color.b}, ${opacity !== null && opacity !== void 0 ? opacity : 1})`;
}
exports.getStyleFromRgb = getStyleFromRgb;
function getStyleFromHsl(color, opacity) {
    return `hsla(${color.h}, ${color.s}%, ${color.l}%, ${opacity !== null && opacity !== void 0 ? opacity : 1})`;
}
exports.getStyleFromHsl = getStyleFromHsl;
function getStyleFromHsv(color, opacity) {
    return getStyleFromHsl(hsvToHsl(color), opacity);
}
exports.getStyleFromHsv = getStyleFromHsv;
function colorMix(color1, color2, size1, size2) {
    let rgb1 = color1;
    let rgb2 = color2;
    if (rgb1.r === undefined) rgb1 = hslToRgb(color1);
    if (rgb2.r === undefined) rgb2 = hslToRgb(color2);
    return {
        b: NumberUtils_1.mix(rgb1.b, rgb2.b, size1, size2),
        g: NumberUtils_1.mix(rgb1.g, rgb2.g, size1, size2),
        r: NumberUtils_1.mix(rgb1.r, rgb2.r, size1, size2)
    };
}
exports.colorMix = colorMix;
function getLinkColor(p1, p2, linkColor) {
    var _a, _b;
    if (linkColor === Constants_1.Constants.randomColorValue) return getRandomRgbColor();
    else if (linkColor === "mid") {
        const sourceColor = (_a = p1.getFillColor()) !== null && _a !== void 0 ? _a : p1.getStrokeColor();
        const destColor = (_b = p2 === null || p2 === void 0 ? void 0 : p2.getFillColor()) !== null && _b !== void 0 ? _b : p2 === null || p2 === void 0 ? void 0 : p2.getStrokeColor();
        if (sourceColor && destColor && p2) return colorMix(sourceColor, destColor, p1.getRadius(), p2.getRadius());
        else {
            const hslColor = sourceColor !== null && sourceColor !== void 0 ? sourceColor : destColor;
            if (hslColor) return hslToRgb(hslColor);
        }
    } else return linkColor;
}
exports.getLinkColor = getLinkColor;
function getLinkRandomColor(optColor, blink, consent) {
    const color = typeof optColor === "string" ? optColor : optColor.value;
    if (color === Constants_1.Constants.randomColorValue) {
        if (consent) return colorToRgb({
            value: color
        });
        else if (blink) return Constants_1.Constants.randomColorValue;
        else return Constants_1.Constants.midColorValue;
    } else return colorToRgb({
        value: color
    });
}
exports.getLinkRandomColor = getLinkRandomColor;
function getHslFromAnimation(animation) {
    return animation !== undefined ? {
        h: animation.h.value,
        s: animation.s.value,
        l: animation.l.value
    } : undefined;
}
exports.getHslFromAnimation = getHslFromAnimation;
function getHslAnimationFromHsl(hsl, animationOptions, reduceFactor) {
    const resColor = {
        h: {
            enable: false,
            value: hsl.h
        },
        s: {
            enable: false,
            value: hsl.s
        },
        l: {
            enable: false,
            value: hsl.l
        }
    };
    if (animationOptions) {
        setColorAnimation(resColor.h, animationOptions.h, reduceFactor);
        setColorAnimation(resColor.s, animationOptions.s, reduceFactor);
        setColorAnimation(resColor.l, animationOptions.l, reduceFactor);
    }
    return resColor;
}
exports.getHslAnimationFromHsl = getHslAnimationFromHsl;
function setColorAnimation(colorValue, colorAnimation, reduceFactor) {
    colorValue.enable = colorAnimation.enable;
    if (colorValue.enable) {
        colorValue.velocity = colorAnimation.speed / 100 * reduceFactor;
        if (colorAnimation.sync) return;
        colorValue.status = Enums_1.AnimationStatus.increasing;
        colorValue.velocity *= Math.random();
        if (colorValue.value) colorValue.value *= Math.random();
    } else colorValue.velocity = 0;
}

},{"./Utils":"dgopB","./Constants":"bbBvo","./NumberUtils":"9GjON","../Enums":"e5HNg"}],"dgopB":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.rectBounce = exports.circleBounce = exports.circleBounceDataFromParticle = exports.divMode = exports.singleDivModeExecute = exports.divModeExecute = exports.isDivModeEnabled = exports.deepExtend = exports.calculateBounds = exports.areBoundsInside = exports.isPointInside = exports.itemFromArray = exports.arrayRandomIndex = exports.loadFont = exports.isInArray = exports.cancelAnimation = exports.animate = exports.isSsr = void 0;
const Enums_1 = require("../Enums");
const NumberUtils_1 = require("./NumberUtils");
const Vector_1 = require("../Core/Particle/Vector");
function rectSideBounce(pSide, pOtherSide, rectSide, rectOtherSide, velocity, factor) {
    const res = {
        bounced: false
    };
    if (pOtherSide.min >= rectOtherSide.min && pOtherSide.min <= rectOtherSide.max && pOtherSide.max >= rectOtherSide.min && pOtherSide.max <= rectOtherSide.max) {
        if (pSide.max >= rectSide.min && pSide.max <= (rectSide.max + rectSide.min) / 2 && velocity > 0 || pSide.min <= rectSide.max && pSide.min > (rectSide.max + rectSide.min) / 2 && velocity < 0) {
            res.velocity = velocity * -factor;
            res.bounced = true;
        }
    }
    return res;
}
function checkSelector(element, selectors) {
    if (selectors instanceof Array) {
        for (const selector of selectors){
            if (element.matches(selector)) return true;
        }
        return false;
    } else return element.matches(selectors);
}
function isSsr() {
    return typeof window === "undefined" || !window || typeof window.document === "undefined" || !window.document;
}
exports.isSsr = isSsr;
function animate() {
    return isSsr() ? (callback)=>setTimeout(callback)
     : (callback)=>(window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || window.setTimeout)(callback)
    ;
}
exports.animate = animate;
function cancelAnimation() {
    return isSsr() ? (handle)=>clearTimeout(handle)
     : (handle)=>(window.cancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || window.clearTimeout)(handle)
    ;
}
exports.cancelAnimation = cancelAnimation;
function isInArray(value, array) {
    return value === array || array instanceof Array && array.indexOf(value) > -1;
}
exports.isInArray = isInArray;
async function loadFont(character) {
    var _a, _b;
    try {
        await document.fonts.load(`${(_a = character.weight) !== null && _a !== void 0 ? _a : "400"} 36px '${(_b = character.font) !== null && _b !== void 0 ? _b : "Verdana"}'`);
    } catch (_c) {
    }
}
exports.loadFont = loadFont;
function arrayRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
}
exports.arrayRandomIndex = arrayRandomIndex;
function itemFromArray(array, index, useIndex = true) {
    const fixedIndex = index !== undefined && useIndex ? index % array.length : arrayRandomIndex(array);
    return array[fixedIndex];
}
exports.itemFromArray = itemFromArray;
function isPointInside(point, size, radius, direction) {
    return areBoundsInside(calculateBounds(point, radius !== null && radius !== void 0 ? radius : 0), size, direction);
}
exports.isPointInside = isPointInside;
function areBoundsInside(bounds, size, direction) {
    let inside = true;
    if (!direction || direction === Enums_1.OutModeDirection.bottom) inside = bounds.top < size.height;
    if (inside && (!direction || direction === Enums_1.OutModeDirection.left)) inside = bounds.right > 0;
    if (inside && (!direction || direction === Enums_1.OutModeDirection.right)) inside = bounds.left < size.width;
    if (inside && (!direction || direction === Enums_1.OutModeDirection.top)) inside = bounds.bottom > 0;
    return inside;
}
exports.areBoundsInside = areBoundsInside;
function calculateBounds(point, radius) {
    return {
        bottom: point.y + radius,
        left: point.x - radius,
        right: point.x + radius,
        top: point.y - radius
    };
}
exports.calculateBounds = calculateBounds;
function deepExtend(destination, ...sources) {
    for (const source of sources){
        if (source === undefined || source === null) continue;
        if (typeof source !== "object") {
            destination = source;
            continue;
        }
        const sourceIsArray = Array.isArray(source);
        if (sourceIsArray && (typeof destination !== "object" || !destination || !Array.isArray(destination))) destination = [];
        else if (!sourceIsArray && (typeof destination !== "object" || !destination || Array.isArray(destination))) destination = {
        };
        for(const key in source){
            if (key === "__proto__") continue;
            const sourceDict = source;
            const value = sourceDict[key];
            const isObject = typeof value === "object";
            const destDict = destination;
            destDict[key] = isObject && Array.isArray(value) ? value.map((v)=>deepExtend(destDict[key], v)
            ) : deepExtend(destDict[key], value);
        }
    }
    return destination;
}
exports.deepExtend = deepExtend;
function isDivModeEnabled(mode, divs) {
    return divs instanceof Array ? !!divs.find((t)=>t.enable && isInArray(mode, t.mode)
    ) : isInArray(mode, divs.mode);
}
exports.isDivModeEnabled = isDivModeEnabled;
function divModeExecute(mode, divs, callback) {
    if (divs instanceof Array) for (const div of divs){
        const divMode = div.mode;
        const divEnabled = div.enable;
        if (divEnabled && isInArray(mode, divMode)) singleDivModeExecute(div, callback);
    }
    else {
        const divMode = divs.mode;
        const divEnabled = divs.enable;
        if (divEnabled && isInArray(mode, divMode)) singleDivModeExecute(divs, callback);
    }
}
exports.divModeExecute = divModeExecute;
function singleDivModeExecute(div, callback) {
    const selectors = div.selectors;
    if (selectors instanceof Array) for (const selector of selectors)callback(selector, div);
    else callback(selectors, div);
}
exports.singleDivModeExecute = singleDivModeExecute;
function divMode(divs, element) {
    if (!element || !divs) return;
    if (divs instanceof Array) return divs.find((d)=>checkSelector(element, d.selectors)
    );
    else if (checkSelector(element, divs.selectors)) return divs;
}
exports.divMode = divMode;
function circleBounceDataFromParticle(p) {
    return {
        position: p.getPosition(),
        radius: p.getRadius(),
        mass: p.getMass(),
        velocity: p.velocity,
        factor: Vector_1.Vector.create(NumberUtils_1.getValue(p.options.bounce.horizontal), NumberUtils_1.getValue(p.options.bounce.vertical))
    };
}
exports.circleBounceDataFromParticle = circleBounceDataFromParticle;
function circleBounce(p1, p2) {
    const xVelocityDiff = p1.velocity.x;
    const yVelocityDiff = p1.velocity.y;
    const pos1 = p1.position;
    const pos2 = p2.position;
    const xDist = pos2.x - pos1.x;
    const yDist = pos2.y - pos1.y;
    if (xVelocityDiff * xDist + yVelocityDiff * yDist >= 0) {
        const angle = -Math.atan2(pos2.y - pos1.y, pos2.x - pos1.x);
        const m1 = p1.mass;
        const m2 = p2.mass;
        const u1 = p1.velocity.rotate(angle);
        const u2 = p2.velocity.rotate(angle);
        const v1 = NumberUtils_1.collisionVelocity(u1, u2, m1, m2);
        const v2 = NumberUtils_1.collisionVelocity(u2, u1, m1, m2);
        const vFinal1 = v1.rotate(-angle);
        const vFinal2 = v2.rotate(-angle);
        p1.velocity.x = vFinal1.x * p1.factor.x;
        p1.velocity.y = vFinal1.y * p1.factor.y;
        p2.velocity.x = vFinal2.x * p2.factor.x;
        p2.velocity.y = vFinal2.y * p2.factor.y;
    }
}
exports.circleBounce = circleBounce;
function rectBounce(particle, divBounds) {
    const pPos = particle.getPosition();
    const size = particle.getRadius();
    const bounds = calculateBounds(pPos, size);
    const resH = rectSideBounce({
        min: bounds.left,
        max: bounds.right
    }, {
        min: bounds.top,
        max: bounds.bottom
    }, {
        min: divBounds.left,
        max: divBounds.right
    }, {
        min: divBounds.top,
        max: divBounds.bottom
    }, particle.velocity.x, NumberUtils_1.getValue(particle.options.bounce.horizontal));
    if (resH.bounced) {
        if (resH.velocity !== undefined) particle.velocity.x = resH.velocity;
        if (resH.position !== undefined) particle.position.x = resH.position;
    }
    const resV = rectSideBounce({
        min: bounds.top,
        max: bounds.bottom
    }, {
        min: bounds.left,
        max: bounds.right
    }, {
        min: divBounds.top,
        max: divBounds.bottom
    }, {
        min: divBounds.left,
        max: divBounds.right
    }, particle.velocity.y, NumberUtils_1.getValue(particle.options.bounce.vertical));
    if (resV.bounced) {
        if (resV.velocity !== undefined) particle.velocity.y = resV.velocity;
        if (resV.position !== undefined) particle.position.y = resV.position;
    }
}
exports.rectBounce = rectBounce;

},{"../Enums":"e5HNg","./NumberUtils":"9GjON","../Core/Particle/Vector":"c55jT"}],"bbBvo":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Constants = void 0;
class Constants {
}
exports.Constants = Constants;
Constants.canvasClass = "tsparticles-canvas-el";
Constants.randomColorValue = "random";
Constants.midColorValue = "mid";
Constants.touchEndEvent = "touchend";
Constants.mouseDownEvent = "mousedown";
Constants.mouseUpEvent = "mouseup";
Constants.mouseMoveEvent = "mousemove";
Constants.touchStartEvent = "touchstart";
Constants.touchMoveEvent = "touchmove";
Constants.mouseLeaveEvent = "mouseleave";
Constants.mouseOutEvent = "mouseout";
Constants.touchCancelEvent = "touchcancel";
Constants.resizeEvent = "resize";
Constants.visibilityChangeEvent = "visibilitychange";
Constants.noPolygonDataLoaded = "No polygon data loaded.";
Constants.noPolygonFound = "No polygon found, you need to specify SVG url in config.";

},{}],"1aYGd":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Circle = void 0;
const Range_1 = require("./Range");
const NumberUtils_1 = require("./NumberUtils");
class Circle extends Range_1.Range {
    constructor(x, y, radius){
        super(x, y);
        this.radius = radius;
    }
    contains(point) {
        return NumberUtils_1.getDistance(point, this.position) <= this.radius;
    }
    intersects(range) {
        const rect = range;
        const circle = range;
        const pos1 = this.position;
        const pos2 = range.position;
        const xDist = Math.abs(pos2.x - pos1.x);
        const yDist = Math.abs(pos2.y - pos1.y);
        const r = this.radius;
        if (circle.radius !== undefined) {
            const rSum = r + circle.radius;
            const dist = Math.sqrt(xDist * xDist + yDist + yDist);
            return rSum > dist;
        } else if (rect.size !== undefined) {
            const w = rect.size.width;
            const h = rect.size.height;
            const edges = Math.pow(xDist - w, 2) + Math.pow(yDist - h, 2);
            if (xDist > r + w || yDist > r + h) return false;
            if (xDist <= w || yDist <= h) return true;
            return edges <= r * r;
        }
        return false;
    }
}
exports.Circle = Circle;

},{"./Range":"lxiz8","./NumberUtils":"9GjON"}],"lxiz8":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Range = void 0;
class Range {
    constructor(x, y){
        this.position = {
            x: x,
            y: y
        };
    }
}
exports.Range = Range;

},{}],"36hWe":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CircleWarp = void 0;
const Rectangle_1 = require("./Rectangle");
const Circle_1 = require("./Circle");
class CircleWarp extends Circle_1.Circle {
    constructor(x, y, radius, canvasSize){
        super(x, y, radius);
        this.canvasSize = canvasSize;
        this.canvasSize = {
            height: canvasSize.height,
            width: canvasSize.width
        };
    }
    contains(point) {
        if (super.contains(point)) return true;
        const posNE = {
            x: point.x - this.canvasSize.width,
            y: point.y
        };
        if (super.contains(posNE)) return true;
        const posSE = {
            x: point.x - this.canvasSize.width,
            y: point.y - this.canvasSize.height
        };
        if (super.contains(posSE)) return true;
        const posSW = {
            x: point.x,
            y: point.y - this.canvasSize.height
        };
        return super.contains(posSW);
    }
    intersects(range) {
        if (super.intersects(range)) return true;
        const rect = range;
        const circle = range;
        const newPos = {
            x: range.position.x - this.canvasSize.width,
            y: range.position.y - this.canvasSize.height
        };
        if (circle.radius !== undefined) {
            const biggerCircle = new Circle_1.Circle(newPos.x, newPos.y, circle.radius * 2);
            return super.intersects(biggerCircle);
        } else if (rect.size !== undefined) {
            const rectSW = new Rectangle_1.Rectangle(newPos.x, newPos.y, rect.size.width * 2, rect.size.height * 2);
            return super.intersects(rectSW);
        }
        return false;
    }
}
exports.CircleWarp = CircleWarp;

},{"./Rectangle":"2ke5K","./Circle":"1aYGd"}],"2ke5K":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Rectangle = void 0;
const Range_1 = require("./Range");
class Rectangle extends Range_1.Range {
    constructor(x, y, width, height){
        super(x, y);
        this.size = {
            height: height,
            width: width
        };
    }
    contains(point) {
        const w = this.size.width;
        const h = this.size.height;
        const pos = this.position;
        return point.x >= pos.x && point.x <= pos.x + w && point.y >= pos.y && point.y <= pos.y + h;
    }
    intersects(range) {
        const rect = range;
        const circle = range;
        const w = this.size.width;
        const h = this.size.height;
        const pos1 = this.position;
        const pos2 = range.position;
        if (circle.radius !== undefined) return circle.intersects(this);
        else if (rect.size !== undefined) {
            const size2 = rect.size;
            const w2 = size2.width;
            const h2 = size2.height;
            return pos2.x < pos1.x + w && pos2.x + w2 > pos1.x && pos2.y < pos1.y + h && pos2.y + h2 > pos1.y;
        }
        return false;
    }
}
exports.Rectangle = Rectangle;

},{"./Range":"lxiz8"}],"fBNTq":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.EventListeners = void 0;
const Enums_1 = require("../Enums");
const Constants_1 = require("./Constants");
const Utils_1 = require("./Utils");
function manageListener(element, event, handler, add, options) {
    if (add) {
        let addOptions = {
            passive: true
        };
        if (typeof options === "boolean") addOptions.capture = options;
        else if (options !== undefined) addOptions = options;
        element.addEventListener(event, handler, addOptions);
    } else {
        const removeOptions = options;
        element.removeEventListener(event, handler, removeOptions);
    }
}
class EventListeners {
    constructor(container){
        this.container = container;
        this.canPush = true;
        this.mouseMoveHandler = (e)=>this.mouseTouchMove(e)
        ;
        this.touchStartHandler = (e)=>this.mouseTouchMove(e)
        ;
        this.touchMoveHandler = (e)=>this.mouseTouchMove(e)
        ;
        this.touchEndHandler = ()=>this.mouseTouchFinish()
        ;
        this.mouseLeaveHandler = ()=>this.mouseTouchFinish()
        ;
        this.touchCancelHandler = ()=>this.mouseTouchFinish()
        ;
        this.touchEndClickHandler = (e)=>this.mouseTouchClick(e)
        ;
        this.mouseUpHandler = (e)=>this.mouseTouchClick(e)
        ;
        this.mouseDownHandler = ()=>this.mouseDown()
        ;
        this.visibilityChangeHandler = ()=>this.handleVisibilityChange()
        ;
        this.themeChangeHandler = (e)=>this.handleThemeChange(e)
        ;
        this.resizeHandler = ()=>this.handleWindowResize()
        ;
    }
    addListeners() {
        this.manageListeners(true);
    }
    removeListeners() {
        this.manageListeners(false);
    }
    manageListeners(add) {
        var _a;
        const container = this.container;
        const options = container.actualOptions;
        const detectType = options.interactivity.detectsOn;
        let mouseLeaveEvent = Constants_1.Constants.mouseLeaveEvent;
        if (detectType === Enums_1.InteractivityDetect.window) {
            container.interactivity.element = window;
            mouseLeaveEvent = Constants_1.Constants.mouseOutEvent;
        } else if (detectType === Enums_1.InteractivityDetect.parent && container.canvas.element) {
            const canvasEl = container.canvas.element;
            container.interactivity.element = (_a = canvasEl.parentElement) !== null && _a !== void 0 ? _a : canvasEl.parentNode;
        } else container.interactivity.element = container.canvas.element;
        const mediaMatch = typeof matchMedia !== "undefined" && matchMedia("(prefers-color-scheme: dark)");
        if (mediaMatch) manageListener(mediaMatch, "change", this.themeChangeHandler, add);
        const interactivityEl = container.interactivity.element;
        if (!interactivityEl) return;
        const html = interactivityEl;
        if (options.interactivity.events.onHover.enable || options.interactivity.events.onClick.enable) {
            manageListener(interactivityEl, Constants_1.Constants.mouseMoveEvent, this.mouseMoveHandler, add);
            manageListener(interactivityEl, Constants_1.Constants.touchStartEvent, this.touchStartHandler, add);
            manageListener(interactivityEl, Constants_1.Constants.touchMoveEvent, this.touchMoveHandler, add);
            if (!options.interactivity.events.onClick.enable) manageListener(interactivityEl, Constants_1.Constants.touchEndEvent, this.touchEndHandler, add);
            else {
                manageListener(interactivityEl, Constants_1.Constants.touchEndEvent, this.touchEndClickHandler, add);
                manageListener(interactivityEl, Constants_1.Constants.mouseUpEvent, this.mouseUpHandler, add);
                manageListener(interactivityEl, Constants_1.Constants.mouseDownEvent, this.mouseDownHandler, add);
            }
            manageListener(interactivityEl, mouseLeaveEvent, this.mouseLeaveHandler, add);
            manageListener(interactivityEl, Constants_1.Constants.touchCancelEvent, this.touchCancelHandler, add);
        }
        if (container.canvas.element) container.canvas.element.style.pointerEvents = html === container.canvas.element ? "initial" : "none";
        if (options.interactivity.events.resize) {
            if (typeof ResizeObserver !== "undefined") {
                if (this.resizeObserver && !add) {
                    if (container.canvas.element) this.resizeObserver.unobserve(container.canvas.element);
                    this.resizeObserver.disconnect();
                    delete this.resizeObserver;
                } else if (!this.resizeObserver && add && container.canvas.element) {
                    this.resizeObserver = new ResizeObserver((entries)=>{
                        const entry = entries.find((e)=>e.target === container.canvas.element
                        );
                        if (!entry) return;
                        this.handleWindowResize();
                    });
                    this.resizeObserver.observe(container.canvas.element);
                }
            } else manageListener(window, Constants_1.Constants.resizeEvent, this.resizeHandler, add);
        }
        if (document) manageListener(document, Constants_1.Constants.visibilityChangeEvent, this.visibilityChangeHandler, add, false);
    }
    handleWindowResize() {
        if (this.resizeTimeout) {
            clearTimeout(this.resizeTimeout);
            delete this.resizeTimeout;
        }
        this.resizeTimeout = setTimeout(()=>{
            var _a;
            return (_a = this.container.canvas) === null || _a === void 0 ? void 0 : _a.windowResize();
        }, 500);
    }
    handleVisibilityChange() {
        const container = this.container;
        const options = container.actualOptions;
        this.mouseTouchFinish();
        if (!options.pauseOnBlur) return;
        if (document === null || document === void 0 ? void 0 : document.hidden) {
            container.pageHidden = true;
            container.pause();
        } else {
            container.pageHidden = false;
            if (container.getAnimationStatus()) container.play(true);
            else container.draw(true);
        }
    }
    mouseDown() {
        const interactivity = this.container.interactivity;
        if (interactivity) {
            const mouse = interactivity.mouse;
            mouse.clicking = true;
            mouse.downPosition = mouse.position;
        }
    }
    mouseTouchMove(e) {
        var _a, _b, _c, _d, _e, _f, _g;
        const container = this.container;
        const options = container.actualOptions;
        if (((_a = container.interactivity) === null || _a === void 0 ? void 0 : _a.element) === undefined) return;
        container.interactivity.mouse.inside = true;
        let pos;
        const canvas = container.canvas.element;
        if (e.type.startsWith("mouse")) {
            this.canPush = true;
            const mouseEvent = e;
            if (container.interactivity.element === window) {
                if (canvas) {
                    const clientRect = canvas.getBoundingClientRect();
                    pos = {
                        x: mouseEvent.clientX - clientRect.left,
                        y: mouseEvent.clientY - clientRect.top
                    };
                }
            } else if (options.interactivity.detectsOn === Enums_1.InteractivityDetect.parent) {
                const source = mouseEvent.target;
                const target = mouseEvent.currentTarget;
                const canvasEl = container.canvas.element;
                if (source && target && canvasEl) {
                    const sourceRect = source.getBoundingClientRect();
                    const targetRect = target.getBoundingClientRect();
                    const canvasRect = canvasEl.getBoundingClientRect();
                    pos = {
                        x: mouseEvent.offsetX + 2 * sourceRect.left - (targetRect.left + canvasRect.left),
                        y: mouseEvent.offsetY + 2 * sourceRect.top - (targetRect.top + canvasRect.top)
                    };
                } else pos = {
                    x: (_b = mouseEvent.offsetX) !== null && _b !== void 0 ? _b : mouseEvent.clientX,
                    y: (_c = mouseEvent.offsetY) !== null && _c !== void 0 ? _c : mouseEvent.clientY
                };
            } else if (mouseEvent.target === container.canvas.element) pos = {
                x: (_d = mouseEvent.offsetX) !== null && _d !== void 0 ? _d : mouseEvent.clientX,
                y: (_e = mouseEvent.offsetY) !== null && _e !== void 0 ? _e : mouseEvent.clientY
            };
        } else {
            this.canPush = e.type !== "touchmove";
            const touchEvent = e;
            const lastTouch = touchEvent.touches[touchEvent.touches.length - 1];
            const canvasRect = canvas === null || canvas === void 0 ? void 0 : canvas.getBoundingClientRect();
            pos = {
                x: lastTouch.clientX - ((_f = canvasRect === null || canvasRect === void 0 ? void 0 : canvasRect.left) !== null && _f !== void 0 ? _f : 0),
                y: lastTouch.clientY - ((_g = canvasRect === null || canvasRect === void 0 ? void 0 : canvasRect.top) !== null && _g !== void 0 ? _g : 0)
            };
        }
        const pxRatio = container.retina.pixelRatio;
        if (pos) {
            pos.x *= pxRatio;
            pos.y *= pxRatio;
        }
        container.interactivity.mouse.position = pos;
        container.interactivity.status = Constants_1.Constants.mouseMoveEvent;
    }
    mouseTouchFinish() {
        const interactivity = this.container.interactivity;
        if (interactivity === undefined) return;
        const mouse = interactivity.mouse;
        delete mouse.position;
        delete mouse.clickPosition;
        delete mouse.downPosition;
        interactivity.status = Constants_1.Constants.mouseLeaveEvent;
        mouse.inside = false;
        mouse.clicking = false;
    }
    mouseTouchClick(e) {
        const container = this.container;
        const options = container.actualOptions;
        const mouse = container.interactivity.mouse;
        mouse.inside = true;
        let handled = false;
        const mousePosition = mouse.position;
        if (mousePosition === undefined || !options.interactivity.events.onClick.enable) return;
        for (const [, plugin] of container.plugins)if (plugin.clickPositionValid !== undefined) {
            handled = plugin.clickPositionValid(mousePosition);
            if (handled) break;
        }
        if (!handled) this.doMouseTouchClick(e);
        mouse.clicking = false;
    }
    doMouseTouchClick(e) {
        const container = this.container;
        const options = container.actualOptions;
        if (this.canPush) {
            const mousePos = container.interactivity.mouse.position;
            if (mousePos) container.interactivity.mouse.clickPosition = {
                x: mousePos.x,
                y: mousePos.y
            };
            else return;
            container.interactivity.mouse.clickTime = new Date().getTime();
            const onClick = options.interactivity.events.onClick;
            if (onClick.mode instanceof Array) for (const mode of onClick.mode)this.handleClickMode(mode);
            else this.handleClickMode(onClick.mode);
        }
        if (e.type === "touchend") setTimeout(()=>this.mouseTouchFinish()
        , 500);
    }
    handleThemeChange(e) {
        const mediaEvent = e;
        const themeName = mediaEvent.matches ? this.container.options.defaultDarkTheme : this.container.options.defaultLightTheme;
        const theme = this.container.options.themes.find((theme)=>theme.name === themeName
        );
        if (theme && theme.default.auto) this.container.loadTheme(themeName);
    }
    handleClickMode(mode) {
        const container = this.container;
        const options = container.actualOptions;
        const pushNb = options.interactivity.modes.push.quantity;
        const removeNb = options.interactivity.modes.remove.quantity;
        switch(mode){
            case Enums_1.ClickMode.push:
                if (pushNb > 0) {
                    const pushOptions = options.interactivity.modes.push;
                    const group = Utils_1.itemFromArray([
                        undefined,
                        ...pushOptions.groups
                    ]);
                    const groupOptions = group !== undefined ? container.actualOptions.particles.groups[group] : undefined;
                    container.particles.push(pushNb, container.interactivity.mouse, groupOptions, group);
                }
                break;
            case Enums_1.ClickMode.remove:
                container.particles.removeQuantity(removeNb);
                break;
            case Enums_1.ClickMode.bubble:
                container.bubble.clicking = true;
                break;
            case Enums_1.ClickMode.repulse:
                container.repulse.clicking = true;
                container.repulse.count = 0;
                for (const particle of container.repulse.particles)particle.velocity.setTo(particle.initialVelocity);
                container.repulse.particles = [];
                container.repulse.finish = false;
                setTimeout(()=>{
                    if (!container.destroyed) container.repulse.clicking = false;
                }, options.interactivity.modes.repulse.duration * 1000);
                break;
            case Enums_1.ClickMode.attract:
                container.attract.clicking = true;
                container.attract.count = 0;
                for (const particle1 of container.attract.particles)particle1.velocity.setTo(particle1.initialVelocity);
                container.attract.particles = [];
                container.attract.finish = false;
                setTimeout(()=>{
                    if (!container.destroyed) container.attract.clicking = false;
                }, options.interactivity.modes.attract.duration * 1000);
                break;
            case Enums_1.ClickMode.pause:
                if (container.getAnimationStatus()) container.pause();
                else container.play();
                break;
        }
        for (const [, plugin] of container.plugins)if (plugin.handleClickMode) plugin.handleClickMode(mode);
    }
}
exports.EventListeners = EventListeners;

},{"../Enums":"e5HNg","./Constants":"bbBvo","./Utils":"dgopB"}],"7ILp7":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Plugins = void 0;
const plugins = [];
const interactorsInitializers = new Map();
const updatersInitializers = new Map();
const interactors = new Map();
const updaters = new Map();
const presets = new Map();
const drawers = new Map();
const pathGenerators = new Map();
class Plugins {
    static getPlugin(plugin) {
        return plugins.find((t)=>t.id === plugin
        );
    }
    static addPlugin(plugin) {
        if (!Plugins.getPlugin(plugin.id)) plugins.push(plugin);
    }
    static getAvailablePlugins(container) {
        const res = new Map();
        for (const plugin of plugins){
            if (!plugin.needsPlugin(container.actualOptions)) continue;
            res.set(plugin.id, plugin.getPlugin(container));
        }
        return res;
    }
    static loadOptions(options, sourceOptions) {
        for (const plugin of plugins)plugin.loadOptions(options, sourceOptions);
    }
    static getPreset(preset) {
        return presets.get(preset);
    }
    static addPreset(presetKey, options, override = false) {
        if (override || !Plugins.getPreset(presetKey)) presets.set(presetKey, options);
    }
    static addShapeDrawer(type, drawer) {
        if (!Plugins.getShapeDrawer(type)) drawers.set(type, drawer);
    }
    static getShapeDrawer(type) {
        return drawers.get(type);
    }
    static getSupportedShapes() {
        return drawers.keys();
    }
    static getPathGenerator(type) {
        return pathGenerators.get(type);
    }
    static addPathGenerator(type, pathGenerator) {
        if (!Plugins.getPathGenerator(type)) pathGenerators.set(type, pathGenerator);
    }
    static getInteractors(container) {
        let res = interactors.get(container);
        if (!res) {
            res = [
                ...interactorsInitializers.values()
            ].map((t)=>t(container)
            );
            interactors.set(container, res);
        }
        return res;
    }
    static addInteractor(name, initInteractor) {
        interactorsInitializers.set(name, initInteractor);
    }
    static getUpdaters(container) {
        let res = updaters.get(container);
        if (!res) {
            res = [
                ...updatersInitializers.values()
            ].map((t)=>t(container)
            );
            updaters.set(container, res);
        }
        return res;
    }
    static addParticleUpdater(name, initUpdater) {
        updatersInitializers.set(name, initUpdater);
    }
}
exports.Plugins = Plugins;

},{}],"2dEgD":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Point = void 0;
class Point {
    constructor(position, particle){
        this.position = position;
        this.particle = particle;
    }
}
exports.Point = Point;

},{}],"jrrgO":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.QuadTree = void 0;
const Rectangle_1 = require("./Rectangle");
const Circle_1 = require("./Circle");
const CircleWarp_1 = require("./CircleWarp");
const NumberUtils_1 = require("./NumberUtils");
class QuadTree {
    constructor(rectangle, capacity){
        this.rectangle = rectangle;
        this.capacity = capacity;
        this.points = [];
        this.divided = false;
    }
    subdivide() {
        const x = this.rectangle.position.x;
        const y = this.rectangle.position.y;
        const w = this.rectangle.size.width;
        const h = this.rectangle.size.height;
        const capacity = this.capacity;
        this.northEast = new QuadTree(new Rectangle_1.Rectangle(x, y, w / 2, h / 2), capacity);
        this.northWest = new QuadTree(new Rectangle_1.Rectangle(x + w / 2, y, w / 2, h / 2), capacity);
        this.southEast = new QuadTree(new Rectangle_1.Rectangle(x, y + h / 2, w / 2, h / 2), capacity);
        this.southWest = new QuadTree(new Rectangle_1.Rectangle(x + w / 2, y + h / 2, w / 2, h / 2), capacity);
        this.divided = true;
    }
    insert(point) {
        var _a, _b, _c, _d, _e;
        if (!this.rectangle.contains(point.position)) return false;
        if (this.points.length < this.capacity) {
            this.points.push(point);
            return true;
        }
        if (!this.divided) this.subdivide();
        return (_e = ((_a = this.northEast) === null || _a === void 0 ? void 0 : _a.insert(point)) || ((_b = this.northWest) === null || _b === void 0 ? void 0 : _b.insert(point)) || ((_c = this.southEast) === null || _c === void 0 ? void 0 : _c.insert(point)) || ((_d = this.southWest) === null || _d === void 0 ? void 0 : _d.insert(point))) !== null && _e !== void 0 ? _e : false;
    }
    queryCircle(position, radius) {
        return this.query(new Circle_1.Circle(position.x, position.y, radius));
    }
    queryCircleWarp(position, radius, containerOrSize) {
        const container = containerOrSize;
        const size = containerOrSize;
        return this.query(new CircleWarp_1.CircleWarp(position.x, position.y, radius, container.canvas !== undefined ? container.canvas.size : size));
    }
    queryRectangle(position, size) {
        return this.query(new Rectangle_1.Rectangle(position.x, position.y, size.width, size.height));
    }
    query(range, found) {
        var _a, _b, _c, _d;
        const res = found !== null && found !== void 0 ? found : [];
        if (!range.intersects(this.rectangle)) return [];
        else {
            for (const p of this.points){
                if (!range.contains(p.position) && NumberUtils_1.getDistance(range.position, p.position) > p.particle.getRadius()) continue;
                res.push(p.particle);
            }
            if (this.divided) {
                (_a = this.northEast) === null || _a === void 0 || _a.query(range, res);
                (_b = this.northWest) === null || _b === void 0 || _b.query(range, res);
                (_c = this.southEast) === null || _c === void 0 || _c.query(range, res);
                (_d = this.southWest) === null || _d === void 0 || _d.query(range, res);
            }
        }
        return res;
    }
}
exports.QuadTree = QuadTree;

},{"./Rectangle":"2ke5K","./Circle":"1aYGd","./CircleWarp":"36hWe","./NumberUtils":"9GjON"}],"hkhPc":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Loader = void 0;
const Container_1 = require("./Container");
const Utils_1 = require("../Utils");
const tsParticlesDom = [];
function fetchError(statusCode) {
    console.error(`Error tsParticles - fetch status: ${statusCode}`);
    console.error("Error tsParticles - File config not found");
}
class Loader {
    static dom() {
        return tsParticlesDom;
    }
    static domItem(index) {
        const dom = Loader.dom();
        const item = dom[index];
        if (item && !item.destroyed) return item;
        dom.splice(index, 1);
    }
    static async loadOptions(params) {
        var _a, _b, _c;
        const tagId = (_a = params.tagId) !== null && _a !== void 0 ? _a : `tsparticles${Math.floor(Math.random() * 10000)}`;
        const { options , index  } = params;
        let domContainer = (_b = params.element) !== null && _b !== void 0 ? _b : document.getElementById(tagId);
        if (!domContainer) {
            domContainer = document.createElement("div");
            domContainer.id = tagId;
            (_c = document.querySelector("body")) === null || _c === void 0 || _c.append(domContainer);
        }
        const currentOptions = options instanceof Array ? Utils_1.itemFromArray(options, index) : options;
        const dom = Loader.dom();
        const oldIndex = dom.findIndex((v)=>v.id === tagId
        );
        if (oldIndex >= 0) {
            const old = Loader.domItem(oldIndex);
            if (old && !old.destroyed) {
                old.destroy();
                dom.splice(oldIndex, 1);
            }
        }
        let canvasEl;
        let generatedCanvas;
        if (domContainer.tagName.toLowerCase() === "canvas") {
            canvasEl = domContainer;
            generatedCanvas = false;
        } else {
            const existingCanvases = domContainer.getElementsByTagName("canvas");
            if (existingCanvases.length) {
                canvasEl = existingCanvases[0];
                if (!canvasEl.className) canvasEl.className = Utils_1.Constants.canvasClass;
                generatedCanvas = false;
            } else {
                generatedCanvas = true;
                canvasEl = document.createElement("canvas");
                canvasEl.className = Utils_1.Constants.canvasClass;
                canvasEl.style.width = "100%";
                canvasEl.style.height = "100%";
                domContainer.appendChild(canvasEl);
            }
        }
        const newItem = new Container_1.Container(tagId, currentOptions);
        if (oldIndex >= 0) dom.splice(oldIndex, 0, newItem);
        else dom.push(newItem);
        newItem.canvas.loadCanvas(canvasEl, generatedCanvas);
        await newItem.start();
        return newItem;
    }
    static async loadRemoteOptions(params) {
        const { url: jsonUrl , index  } = params;
        const url = jsonUrl instanceof Array ? Utils_1.itemFromArray(jsonUrl, index) : jsonUrl;
        if (!url) return;
        const response = await fetch(url);
        if (!response.ok) {
            fetchError(response.status);
            return;
        }
        const data = await response.json();
        return await Loader.loadOptions({
            tagId: params.tagId,
            element: params.element,
            index,
            options: data
        });
    }
    static load(tagId, options, index) {
        const params = {
            index
        };
        if (typeof tagId === "string") params.tagId = tagId;
        else params.options = tagId;
        if (typeof options === "number") params.index = options !== null && options !== void 0 ? options : params.index;
        else params.options = options !== null && options !== void 0 ? options : params.options;
        return this.loadOptions(params);
    }
    static async set(id, domContainer, options, index) {
        const params = {
            index
        };
        if (typeof id === "string") params.tagId = id;
        else params.element = id;
        if (domContainer instanceof HTMLElement) params.element = domContainer;
        else params.options = domContainer;
        if (typeof options === "number") params.index = options;
        else params.options = options !== null && options !== void 0 ? options : params.options;
        return this.loadOptions(params);
    }
    static async loadJSON(tagId, jsonUrl, index) {
        let url, id;
        if (typeof jsonUrl === "number" || jsonUrl === undefined) url = tagId;
        else {
            id = tagId;
            url = jsonUrl;
        }
        return await Loader.loadRemoteOptions({
            tagId: id,
            url,
            index
        });
    }
    static async setJSON(id, domContainer, jsonUrl, index) {
        let url, newId, newIndex, element;
        if (id instanceof HTMLElement) {
            element = id;
            url = domContainer;
            newIndex = jsonUrl;
        } else {
            newId = id;
            element = domContainer;
            url = jsonUrl;
            newIndex = index;
        }
        return await Loader.loadRemoteOptions({
            tagId: newId,
            url,
            index: newIndex,
            element
        });
    }
    static setOnClickHandler(callback) {
        const dom = Loader.dom();
        if (dom.length === 0) throw new Error("Can only set click handlers after calling tsParticles.load() or tsParticles.loadJSON()");
        for (const domItem of dom)domItem.addClickHandler(callback);
    }
}
exports.Loader = Loader;

},{"./Container":"4aGTK","../Utils":"iU3t1"}],"4aGTK":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Container = void 0;
const Canvas_1 = require("./Canvas");
const Particles_1 = require("./Particles");
const Retina_1 = require("./Retina");
const FrameManager_1 = require("./FrameManager");
const Options_1 = require("../Options/Classes/Options");
const Utils_1 = require("../Utils");
const Vector_1 = require("./Particle/Vector");
class Container {
    constructor(id, sourceOptions, ...presets){
        this.id = id;
        this.fpsLimit = 60;
        this.duration = 0;
        this.lifeTime = 0;
        this.firstStart = true;
        this.started = false;
        this.destroyed = false;
        this.paused = true;
        this.lastFrameTime = 0;
        this.zLayers = 100;
        this.pageHidden = false;
        this._sourceOptions = sourceOptions;
        this.retina = new Retina_1.Retina(this);
        this.canvas = new Canvas_1.Canvas(this);
        this.particles = new Particles_1.Particles(this);
        this.drawer = new FrameManager_1.FrameManager(this);
        this.pathGenerator = {
            generate: ()=>{
                const v = Vector_1.Vector.create(0, 0);
                v.length = Math.random();
                v.angle = Math.random() * Math.PI * 2;
                return v;
            },
            init: ()=>{
            },
            update: ()=>{
            }
        };
        this.interactivity = {
            mouse: {
                clicking: false,
                inside: false
            }
        };
        this.bubble = {
        };
        this.repulse = {
            particles: []
        };
        this.attract = {
            particles: []
        };
        this.plugins = new Map();
        this.drawers = new Map();
        this.density = 1;
        this._options = new Options_1.Options();
        this.actualOptions = new Options_1.Options();
        for (const preset of presets)this._options.load(Utils_1.Plugins.getPreset(preset));
        const shapes = Utils_1.Plugins.getSupportedShapes();
        for (const type of shapes){
            const drawer = Utils_1.Plugins.getShapeDrawer(type);
            if (drawer) this.drawers.set(type, drawer);
        }
        this._options.load(this._sourceOptions);
        this.eventListeners = new Utils_1.EventListeners(this);
        if (typeof IntersectionObserver !== "undefined" && IntersectionObserver) this.intersectionObserver = new IntersectionObserver((entries)=>this.intersectionManager(entries)
        );
    }
    get options() {
        return this._options;
    }
    get sourceOptions() {
        return this._sourceOptions;
    }
    play(force) {
        const needsUpdate = this.paused || force;
        if (this.firstStart && !this.actualOptions.autoPlay) {
            this.firstStart = false;
            return;
        }
        if (this.paused) this.paused = false;
        if (needsUpdate) {
            for (const [, plugin] of this.plugins)if (plugin.play) plugin.play();
        }
        this.draw(needsUpdate || false);
    }
    pause() {
        if (this.drawAnimationFrame !== undefined) {
            Utils_1.cancelAnimation()(this.drawAnimationFrame);
            delete this.drawAnimationFrame;
        }
        if (this.paused) return;
        for (const [, plugin] of this.plugins)if (plugin.pause) plugin.pause();
        if (!this.pageHidden) this.paused = true;
    }
    draw(force) {
        let refreshTime = force;
        this.drawAnimationFrame = Utils_1.animate()((timestamp)=>{
            if (refreshTime) {
                this.lastFrameTime = undefined;
                refreshTime = false;
            }
            this.drawer.nextFrame(timestamp);
        });
    }
    getAnimationStatus() {
        return !this.paused && !this.pageHidden;
    }
    setNoise(noiseOrGenerator, init, update) {
        this.setPath(noiseOrGenerator, init, update);
    }
    setPath(pathOrGenerator, init, update) {
        if (!pathOrGenerator) return;
        if (typeof pathOrGenerator === "function") {
            this.pathGenerator.generate = pathOrGenerator;
            if (init) this.pathGenerator.init = init;
            if (update) this.pathGenerator.update = update;
        } else {
            if (pathOrGenerator.generate) this.pathGenerator.generate = pathOrGenerator.generate;
            if (pathOrGenerator.init) this.pathGenerator.init = pathOrGenerator.init;
            if (pathOrGenerator.update) this.pathGenerator.update = pathOrGenerator.update;
        }
    }
    destroy() {
        this.stop();
        this.canvas.destroy();
        for (const [, drawer] of this.drawers)if (drawer.destroy) drawer.destroy(this);
        for (const key of this.drawers.keys())this.drawers.delete(key);
        this.destroyed = true;
    }
    exportImg(callback) {
        this.exportImage(callback);
    }
    exportImage(callback, type, quality) {
        var _a;
        return (_a = this.canvas.element) === null || _a === void 0 ? void 0 : _a.toBlob(callback, type !== null && type !== void 0 ? type : "image/png", quality);
    }
    exportConfiguration() {
        return JSON.stringify(this.actualOptions, undefined, 2);
    }
    refresh() {
        this.stop();
        return this.start();
    }
    reset() {
        this._options = new Options_1.Options();
        return this.refresh();
    }
    stop() {
        if (!this.started) return;
        this.firstStart = true;
        this.started = false;
        this.eventListeners.removeListeners();
        this.pause();
        this.particles.clear();
        this.canvas.clear();
        if (this.interactivity.element instanceof HTMLElement && this.intersectionObserver) this.intersectionObserver.observe(this.interactivity.element);
        for (const [, plugin] of this.plugins)if (plugin.stop) plugin.stop();
        for (const key of this.plugins.keys())this.plugins.delete(key);
        this.particles.linksColors = new Map();
        delete this.particles.grabLineColor;
        delete this.particles.linksColor;
    }
    async loadTheme(name) {
        this.currentTheme = name;
        await this.refresh();
    }
    async start() {
        if (this.started) return;
        await this.init();
        this.started = true;
        this.eventListeners.addListeners();
        if (this.interactivity.element instanceof HTMLElement && this.intersectionObserver) this.intersectionObserver.observe(this.interactivity.element);
        for (const [, plugin] of this.plugins){
            if (plugin.startAsync !== undefined) await plugin.startAsync();
            else if (plugin.start !== undefined) plugin.start();
        }
        this.play();
    }
    addClickHandler(callback) {
        const el = this.interactivity.element;
        if (!el) return;
        const clickOrTouchHandler = (e, pos, radius)=>{
            if (this.destroyed) return;
            const pxRatio = this.retina.pixelRatio, posRetina = {
                x: pos.x * pxRatio,
                y: pos.y * pxRatio
            }, particles = this.particles.quadTree.queryCircle(posRetina, radius * pxRatio);
            callback(e, particles);
        };
        const clickHandler = (e)=>{
            if (this.destroyed) return;
            const mouseEvent = e;
            const pos = {
                x: mouseEvent.offsetX || mouseEvent.clientX,
                y: mouseEvent.offsetY || mouseEvent.clientY
            };
            clickOrTouchHandler(e, pos, 1);
        };
        const touchStartHandler = ()=>{
            if (this.destroyed) return;
            touched = true;
            touchMoved = false;
        };
        const touchMoveHandler = ()=>{
            if (this.destroyed) return;
            touchMoved = true;
        };
        const touchEndHandler = (e)=>{
            var _a, _b, _c;
            if (this.destroyed) return;
            if (touched && !touchMoved) {
                const touchEvent = e;
                let lastTouch = touchEvent.touches[touchEvent.touches.length - 1];
                if (!lastTouch) {
                    lastTouch = touchEvent.changedTouches[touchEvent.changedTouches.length - 1];
                    if (!lastTouch) return;
                }
                const canvasRect = (_a = this.canvas.element) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect();
                const pos = {
                    x: lastTouch.clientX - ((_b = canvasRect === null || canvasRect === void 0 ? void 0 : canvasRect.left) !== null && _b !== void 0 ? _b : 0),
                    y: lastTouch.clientY - ((_c = canvasRect === null || canvasRect === void 0 ? void 0 : canvasRect.top) !== null && _c !== void 0 ? _c : 0)
                };
                clickOrTouchHandler(e, pos, Math.max(lastTouch.radiusX, lastTouch.radiusY));
            }
            touched = false;
            touchMoved = false;
        };
        const touchCancelHandler = ()=>{
            if (this.destroyed) return;
            touched = false;
            touchMoved = false;
        };
        let touched = false;
        let touchMoved = false;
        el.addEventListener("click", clickHandler);
        el.addEventListener("touchstart", touchStartHandler);
        el.addEventListener("touchmove", touchMoveHandler);
        el.addEventListener("touchend", touchEndHandler);
        el.addEventListener("touchcancel", touchCancelHandler);
    }
    updateActualOptions() {
        this.actualOptions.responsive = [];
        const newMaxWidth = this.actualOptions.setResponsive(this.canvas.size.width, this.retina.pixelRatio, this._options);
        this.actualOptions.setTheme(this.currentTheme);
        if (this.responsiveMaxWidth != newMaxWidth) {
            this.responsiveMaxWidth = newMaxWidth;
            return true;
        }
        return false;
    }
    async init() {
        this.actualOptions = new Options_1.Options();
        this.actualOptions.load(this._options);
        this.retina.init();
        this.canvas.init();
        this.updateActualOptions();
        this.canvas.initBackground();
        this.canvas.resize();
        this.zLayers = this.actualOptions.zLayers;
        this.duration = Utils_1.getRangeValue(this.actualOptions.duration);
        this.lifeTime = 0;
        this.fpsLimit = this.actualOptions.fpsLimit > 0 ? this.actualOptions.fpsLimit : 60;
        const availablePlugins = Utils_1.Plugins.getAvailablePlugins(this);
        for (const [id, plugin] of availablePlugins)this.plugins.set(id, plugin);
        for (const [, drawer] of this.drawers)if (drawer.init) await drawer.init(this);
        for (const [, plugin1] of this.plugins){
            if (plugin1.init) plugin1.init(this.actualOptions);
            else if (plugin1.initAsync !== undefined) await plugin1.initAsync(this.actualOptions);
        }
        const pathOptions = this.actualOptions.particles.move.path;
        if (pathOptions.generator) {
            const customGenerator = Utils_1.Plugins.getPathGenerator(pathOptions.generator);
            if (customGenerator) {
                if (customGenerator.init) this.pathGenerator.init = customGenerator.init;
                if (customGenerator.generate) this.pathGenerator.generate = customGenerator.generate;
                if (customGenerator.update) this.pathGenerator.update = customGenerator.update;
            }
        }
        this.particles.init();
        this.particles.setDensity();
        for (const [, plugin2] of this.plugins)if (plugin2.particlesSetup !== undefined) plugin2.particlesSetup();
    }
    intersectionManager(entries) {
        if (!this.actualOptions.pauseOnOutsideViewport) return;
        for (const entry of entries){
            if (entry.target !== this.interactivity.element) continue;
            if (entry.isIntersecting) this.play();
            else this.pause();
        }
    }
}
exports.Container = Container;

},{"./Canvas":"gklFc","./Particles":"4IFzo","./Retina":"8DR5L","./FrameManager":"b1PYj","../Options/Classes/Options":"i9WSN","../Utils":"iU3t1","./Particle/Vector":"c55jT"}],"gklFc":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Canvas = void 0;
const Utils_1 = require("../Utils");
const Utils_2 = require("../Utils");
class Canvas {
    constructor(container){
        this.container = container;
        this.size = {
            height: 0,
            width: 0
        };
        this.context = null;
        this.generatedCanvas = false;
    }
    init() {
        this.resize();
        this.initStyle();
        this.initCover();
        this.initTrail();
        this.initBackground();
        this.paint();
    }
    loadCanvas(canvas, generatedCanvas) {
        var _a;
        if (!canvas.className) canvas.className = Utils_1.Constants.canvasClass;
        if (this.generatedCanvas) (_a = this.element) === null || _a === void 0 || _a.remove();
        this.generatedCanvas = generatedCanvas !== null && generatedCanvas !== void 0 ? generatedCanvas : this.generatedCanvas;
        this.element = canvas;
        this.originalStyle = Utils_1.deepExtend({
        }, this.element.style);
        this.size.height = canvas.offsetHeight;
        this.size.width = canvas.offsetWidth;
        this.context = this.element.getContext("2d");
        this.container.retina.init();
        this.initBackground();
    }
    destroy() {
        var _a;
        if (this.generatedCanvas) (_a = this.element) === null || _a === void 0 || _a.remove();
        this.draw((ctx)=>{
            Utils_2.clear(ctx, this.size);
        });
    }
    paint() {
        const options = this.container.actualOptions;
        this.draw((ctx)=>{
            if (options.backgroundMask.enable && options.backgroundMask.cover && this.coverColor) {
                Utils_2.clear(ctx, this.size);
                this.paintBase(Utils_1.getStyleFromRgb(this.coverColor, this.coverColor.a));
            } else this.paintBase();
        });
    }
    clear() {
        const options = this.container.actualOptions;
        const trail = options.particles.move.trail;
        if (options.backgroundMask.enable) this.paint();
        else if (trail.enable && trail.length > 0 && this.trailFillColor) this.paintBase(Utils_1.getStyleFromRgb(this.trailFillColor, 1 / trail.length));
        else this.draw((ctx)=>{
            Utils_2.clear(ctx, this.size);
        });
    }
    windowResize() {
        if (!this.element) return;
        const container = this.container;
        this.resize();
        const needsRefresh = container.updateActualOptions();
        container.particles.setDensity();
        for (const [, plugin] of container.plugins)if (plugin.resize !== undefined) plugin.resize();
        if (needsRefresh) container.refresh();
    }
    resize() {
        if (!this.element) return;
        const container = this.container;
        const pxRatio = container.retina.pixelRatio;
        const size = container.canvas.size;
        const oldSize = {
            width: size.width,
            height: size.height
        };
        size.width = this.element.offsetWidth * pxRatio;
        size.height = this.element.offsetHeight * pxRatio;
        this.element.width = size.width;
        this.element.height = size.height;
        if (this.container.started) this.resizeFactor = {
            width: size.width / oldSize.width,
            height: size.height / oldSize.height
        };
    }
    drawConnectLine(p1, p2) {
        this.draw((ctx)=>{
            var _a;
            const lineStyle = this.lineStyle(p1, p2);
            if (!lineStyle) return;
            const pos1 = p1.getPosition();
            const pos2 = p2.getPosition();
            Utils_1.drawConnectLine(ctx, (_a = p1.retina.linksWidth) !== null && _a !== void 0 ? _a : this.container.retina.linksWidth, lineStyle, pos1, pos2);
        });
    }
    drawGrabLine(particle, lineColor, opacity, mousePos) {
        const container = this.container;
        this.draw((ctx)=>{
            var _a;
            const beginPos = particle.getPosition();
            Utils_1.drawGrabLine(ctx, (_a = particle.retina.linksWidth) !== null && _a !== void 0 ? _a : container.retina.linksWidth, beginPos, mousePos, lineColor, opacity);
        });
    }
    drawParticle(particle, delta) {
        var _a, _b, _c, _d, _e, _f;
        if (particle.spawning || particle.destroyed) return;
        const pfColor = particle.getFillColor();
        const psColor = (_a = particle.getStrokeColor()) !== null && _a !== void 0 ? _a : pfColor;
        if (!pfColor && !psColor) return;
        let [fColor, sColor] = this.getPluginParticleColors(particle);
        const pOptions = particle.options;
        const twinkle = pOptions.twinkle.particles;
        const twinkling = twinkle.enable && Math.random() < twinkle.frequency;
        if (!fColor || !sColor) {
            const twinkleRgb = Utils_1.colorToHsl(twinkle.color);
            if (!fColor) fColor = twinkling && twinkleRgb !== undefined ? twinkleRgb : pfColor ? pfColor : undefined;
            if (!sColor) sColor = twinkling && twinkleRgb !== undefined ? twinkleRgb : psColor ? psColor : undefined;
        }
        const options = this.container.actualOptions;
        const zIndexOptions = particle.options.zIndex;
        const zOpacityFactor = (1 - particle.zIndexFactor) ** zIndexOptions.opacityRate;
        const radius = particle.getRadius();
        const opacity = twinkling ? twinkle.opacity : (_d = (_b = particle.bubble.opacity) !== null && _b !== void 0 ? _b : (_c = particle.opacity) === null || _c === void 0 ? void 0 : _c.value) !== null && _d !== void 0 ? _d : 1;
        const strokeOpacity = (_f = (_e = particle.stroke) === null || _e === void 0 ? void 0 : _e.opacity) !== null && _f !== void 0 ? _f : opacity;
        const zOpacity = opacity * zOpacityFactor;
        const fillColorValue = fColor ? Utils_1.getStyleFromHsl(fColor, zOpacity) : undefined;
        if (!fillColorValue && !sColor) return;
        this.draw((ctx)=>{
            const zSizeFactor = (1 - particle.zIndexFactor) ** zIndexOptions.sizeRate;
            const zStrokeOpacity = strokeOpacity * zOpacityFactor;
            const strokeColorValue = sColor ? Utils_1.getStyleFromHsl(sColor, zStrokeOpacity) : fillColorValue;
            if (radius <= 0) return;
            const container = this.container;
            for (const updater of container.particles.updaters)if (updater.beforeDraw) updater.beforeDraw(particle);
            Utils_1.drawParticle(this.container, ctx, particle, delta, fillColorValue, strokeColorValue, options.backgroundMask.enable, options.backgroundMask.composite, radius * zSizeFactor, zOpacity, particle.options.shadow, particle.gradient);
            for (const updater1 of container.particles.updaters)if (updater1.afterDraw) updater1.afterDraw(particle);
        });
    }
    drawPlugin(plugin, delta) {
        this.draw((ctx)=>{
            Utils_1.drawPlugin(ctx, plugin, delta);
        });
    }
    drawParticlePlugin(plugin, particle, delta) {
        this.draw((ctx)=>{
            Utils_1.drawParticlePlugin(ctx, plugin, particle, delta);
        });
    }
    initBackground() {
        const options = this.container.actualOptions;
        const background = options.background;
        const element = this.element;
        const elementStyle = element === null || element === void 0 ? void 0 : element.style;
        if (!elementStyle) return;
        if (background.color) {
            const color = Utils_1.colorToRgb(background.color);
            elementStyle.backgroundColor = color ? Utils_1.getStyleFromRgb(color, background.opacity) : "";
        } else elementStyle.backgroundColor = "";
        elementStyle.backgroundImage = background.image || "";
        elementStyle.backgroundPosition = background.position || "";
        elementStyle.backgroundRepeat = background.repeat || "";
        elementStyle.backgroundSize = background.size || "";
    }
    draw(cb) {
        if (!this.context) return;
        return cb(this.context);
    }
    initCover() {
        const options = this.container.actualOptions;
        const cover = options.backgroundMask.cover;
        const color = cover.color;
        const coverRgb = Utils_1.colorToRgb(color);
        if (coverRgb) this.coverColor = {
            r: coverRgb.r,
            g: coverRgb.g,
            b: coverRgb.b,
            a: cover.opacity
        };
    }
    initTrail() {
        const options = this.container.actualOptions;
        const trail = options.particles.move.trail;
        const fillColor = Utils_1.colorToRgb(trail.fillColor);
        if (fillColor) {
            const trail = options.particles.move.trail;
            this.trailFillColor = {
                r: fillColor.r,
                g: fillColor.g,
                b: fillColor.b,
                a: 1 / trail.length
            };
        }
    }
    getPluginParticleColors(particle) {
        let fColor;
        let sColor;
        for (const [, plugin] of this.container.plugins){
            if (!fColor && plugin.particleFillColor) fColor = Utils_1.colorToHsl(plugin.particleFillColor(particle));
            if (!sColor && plugin.particleStrokeColor) sColor = Utils_1.colorToHsl(plugin.particleStrokeColor(particle));
            if (fColor && sColor) break;
        }
        return [
            fColor,
            sColor
        ];
    }
    initStyle() {
        const element = this.element, options = this.container.actualOptions;
        if (!element) return;
        const originalStyle = this.originalStyle;
        if (options.fullScreen.enable) {
            this.originalStyle = Utils_1.deepExtend({
            }, element.style);
            element.style.position = "fixed";
            element.style.zIndex = options.fullScreen.zIndex.toString(10);
            element.style.top = "0";
            element.style.left = "0";
            element.style.width = "100%";
            element.style.height = "100%";
        } else if (originalStyle) {
            element.style.position = originalStyle.position;
            element.style.zIndex = originalStyle.zIndex;
            element.style.top = originalStyle.top;
            element.style.left = originalStyle.left;
            element.style.width = originalStyle.width;
            element.style.height = originalStyle.height;
        }
    }
    paintBase(baseColor) {
        this.draw((ctx)=>{
            Utils_1.paintBase(ctx, this.size, baseColor);
        });
    }
    lineStyle(p1, p2) {
        return this.draw((ctx)=>{
            const options = this.container.actualOptions;
            const connectOptions = options.interactivity.modes.connect;
            return Utils_1.gradient(ctx, p1, p2, connectOptions.links.opacity);
        });
    }
}
exports.Canvas = Canvas;

},{"../Utils":"iU3t1"}],"4IFzo":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Particles = void 0;
const Particle_1 = require("./Particle");
const Utils_1 = require("../Utils");
const InteractionManager_1 = require("./InteractionManager");
const ParticlesOptions_1 = require("../Options/Classes/Particles/ParticlesOptions");
const Mover_1 = require("./Particle/Mover");
class Particles {
    constructor(container){
        this.container = container;
        this.nextId = 0;
        this.array = [];
        this.zArray = [];
        this.mover = new Mover_1.Mover(container);
        this.limit = 0;
        this.needsSort = false;
        this.lastZIndex = 0;
        this.freqs = {
            links: new Map(),
            triangles: new Map()
        };
        this.interactionManager = new InteractionManager_1.InteractionManager(container);
        const canvasSize = this.container.canvas.size;
        this.linksColors = new Map();
        this.quadTree = new Utils_1.QuadTree(new Utils_1.Rectangle(-canvasSize.width / 4, -canvasSize.height / 4, canvasSize.width * 3 / 2, canvasSize.height * 3 / 2), 4);
        this.updaters = Utils_1.Plugins.getUpdaters(container);
    }
    get count() {
        return this.array.length;
    }
    init() {
        var _a;
        const container = this.container;
        const options = container.actualOptions;
        this.lastZIndex = 0;
        this.needsSort = false;
        this.freqs.links = new Map();
        this.freqs.triangles = new Map();
        let handled = false;
        for (const [, plugin] of container.plugins){
            if (plugin.particlesInitialization !== undefined) handled = plugin.particlesInitialization();
            if (handled) break;
        }
        this.addManualParticles();
        if (!handled) {
            for(const group in options.particles.groups){
                const groupOptions = options.particles.groups[group];
                for(let i = this.count, j = 0; j < ((_a = groupOptions.number) === null || _a === void 0 ? void 0 : _a.value) && i < options.particles.number.value; i++, j++)this.addParticle(undefined, groupOptions, group);
            }
            for(let i = this.count; i < options.particles.number.value; i++)this.addParticle();
        }
        container.pathGenerator.init(container);
    }
    redraw() {
        this.clear();
        this.init();
        this.draw({
            value: 0,
            factor: 0
        });
    }
    removeAt(index, quantity = 1, group, override) {
        if (!(index >= 0 && index <= this.count)) return;
        let deleted = 0;
        for(let i = index; deleted < quantity && i < this.count; i++){
            const particle = this.array[i];
            if (!particle || particle.group !== group) continue;
            particle.destroy(override);
            this.array.splice(i--, 1);
            const zIdx = this.zArray.indexOf(particle);
            this.zArray.splice(zIdx, 1);
            deleted++;
        }
    }
    remove(particle, group, override) {
        this.removeAt(this.array.indexOf(particle), undefined, group, override);
    }
    update(delta) {
        const container = this.container;
        const particlesToDelete = [];
        container.pathGenerator.update();
        for (const [, plugin] of container.plugins)if (plugin.update !== undefined) plugin.update(delta);
        for (const particle of this.array){
            const resizeFactor = container.canvas.resizeFactor;
            if (resizeFactor) {
                particle.position.x *= resizeFactor.width;
                particle.position.y *= resizeFactor.height;
            }
            particle.bubble.inRange = false;
            for (const [, plugin] of this.container.plugins){
                if (particle.destroyed) break;
                if (plugin.particleUpdate) plugin.particleUpdate(particle, delta);
            }
            this.mover.move(particle, delta);
            if (particle.destroyed) {
                particlesToDelete.push(particle);
                continue;
            }
            this.quadTree.insert(new Utils_1.Point(particle.getPosition(), particle));
        }
        for (const particle1 of particlesToDelete)this.remove(particle1);
        this.interactionManager.externalInteract(delta);
        for (const particle2 of container.particles.array){
            for (const updater of this.updaters)updater.update(particle2, delta);
            if (!particle2.destroyed && !particle2.spawning) this.interactionManager.particlesInteract(particle2, delta);
        }
        delete container.canvas.resizeFactor;
    }
    draw(delta) {
        const container = this.container;
        container.canvas.clear();
        const canvasSize = this.container.canvas.size;
        this.quadTree = new Utils_1.QuadTree(new Utils_1.Rectangle(-canvasSize.width / 4, -canvasSize.height / 4, canvasSize.width * 3 / 2, canvasSize.height * 3 / 2), 4);
        this.update(delta);
        if (this.needsSort) {
            this.zArray.sort((a, b)=>b.position.z - a.position.z || a.id - b.id
            );
            this.lastZIndex = this.zArray[this.zArray.length - 1].position.z;
            this.needsSort = false;
        }
        for (const [, plugin] of container.plugins)container.canvas.drawPlugin(plugin, delta);
        for (const p of this.zArray)p.draw(delta);
    }
    clear() {
        this.array = [];
        this.zArray = [];
    }
    push(nb, mouse, overrideOptions, group) {
        this.pushing = true;
        for(let i = 0; i < nb; i++)this.addParticle(mouse === null || mouse === void 0 ? void 0 : mouse.position, overrideOptions, group);
        this.pushing = false;
    }
    addParticle(position, overrideOptions, group) {
        const container = this.container;
        const options = container.actualOptions;
        const limit = options.particles.number.limit * container.density;
        if (limit > 0) {
            const countToRemove = this.count + 1 - limit;
            if (countToRemove > 0) this.removeQuantity(countToRemove);
        }
        return this.pushParticle(position, overrideOptions, group);
    }
    addSplitParticle(parent) {
        const splitOptions = parent.options.destroy.split;
        const options = new ParticlesOptions_1.ParticlesOptions();
        options.load(parent.options);
        const factor = Utils_1.getRangeValue(splitOptions.factor.value);
        options.color.load({
            value: {
                hsl: parent.getFillColor()
            }
        });
        if (typeof options.size.value === "number") options.size.value /= factor;
        else {
            options.size.value.min /= factor;
            options.size.value.max /= factor;
        }
        options.load(splitOptions.particles);
        const offset = splitOptions.sizeOffset ? Utils_1.setRangeValue(-parent.size.value, parent.size.value) : 0;
        const position = {
            x: parent.position.x + Utils_1.randomInRange(offset),
            y: parent.position.y + Utils_1.randomInRange(offset)
        };
        return this.pushParticle(position, options, parent.group, (particle)=>{
            if (particle.size.value < 0.5) return false;
            particle.velocity.length = Utils_1.randomInRange(Utils_1.setRangeValue(parent.velocity.length, particle.velocity.length));
            particle.splitCount = parent.splitCount + 1;
            particle.unbreakable = true;
            setTimeout(()=>{
                particle.unbreakable = false;
            }, 500);
            return true;
        });
    }
    removeQuantity(quantity, group) {
        this.removeAt(0, quantity, group);
    }
    getLinkFrequency(p1, p2) {
        const key = `${Math.min(p1.id, p2.id)}_${Math.max(p1.id, p2.id)}`;
        let res = this.freqs.links.get(key);
        if (res === undefined) {
            res = Math.random();
            this.freqs.links.set(key, res);
        }
        return res;
    }
    getTriangleFrequency(p1, p2, p3) {
        let [id1, id2, id3] = [
            p1.id,
            p2.id,
            p3.id
        ];
        if (id1 > id2) [id2, id1] = [
            id1,
            id2
        ];
        if (id2 > id3) [id3, id2] = [
            id2,
            id3
        ];
        if (id1 > id3) [id3, id1] = [
            id1,
            id3
        ];
        const key = `${id1}_${id2}_${id3}`;
        let res = this.freqs.triangles.get(key);
        if (res === undefined) {
            res = Math.random();
            this.freqs.triangles.set(key, res);
        }
        return res;
    }
    addManualParticles() {
        const container = this.container;
        const options = container.actualOptions;
        for (const particle of options.manualParticles){
            const pos = particle.position ? {
                x: particle.position.x * container.canvas.size.width / 100,
                y: particle.position.y * container.canvas.size.height / 100
            } : undefined;
            this.addParticle(pos, particle.options);
        }
    }
    setDensity() {
        const options = this.container.actualOptions;
        for(const group in options.particles.groups)this.applyDensity(options.particles.groups[group], 0, group);
        this.applyDensity(options.particles, options.manualParticles.length);
    }
    applyDensity(options, manualCount, group) {
        var _a;
        if (!((_a = options.number.density) === null || _a === void 0 ? void 0 : _a.enable)) return;
        const numberOptions = options.number;
        const densityFactor = this.initDensityFactor(numberOptions.density);
        const optParticlesNumber = numberOptions.value;
        const optParticlesLimit = numberOptions.limit > 0 ? numberOptions.limit : optParticlesNumber;
        const particlesNumber = Math.min(optParticlesNumber, optParticlesLimit) * densityFactor + manualCount;
        const particlesCount = Math.min(this.count, this.array.filter((t)=>t.group === group
        ).length);
        this.limit = numberOptions.limit * densityFactor;
        if (particlesCount < particlesNumber) this.push(Math.abs(particlesNumber - particlesCount), undefined, options, group);
        else if (particlesCount > particlesNumber) this.removeQuantity(particlesCount - particlesNumber, group);
    }
    initDensityFactor(densityOptions) {
        const container = this.container;
        if (!container.canvas.element || !densityOptions.enable) return 1;
        const canvas = container.canvas.element;
        const pxRatio = container.retina.pixelRatio;
        return canvas.width * canvas.height / (densityOptions.factor * pxRatio ** 2 * densityOptions.area);
    }
    pushParticle(position, overrideOptions, group, initializer) {
        try {
            const particle = new Particle_1.Particle(this.nextId, this.container, position, overrideOptions, group);
            let canAdd = true;
            if (initializer) canAdd = initializer(particle);
            if (!canAdd) return;
            this.array.push(particle);
            this.zArray.push(particle);
            this.nextId++;
            return particle;
        } catch (e) {
            console.warn(`error adding particle: ${e}`);
            return;
        }
    }
}
exports.Particles = Particles;

},{"./Particle":"1Xilt","../Utils":"iU3t1","./InteractionManager":"bR9Pf","../Options/Classes/Particles/ParticlesOptions":"7lNRz","./Particle/Mover":"hid9N"}],"1Xilt":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Particle = void 0;
const ParticlesOptions_1 = require("../Options/Classes/Particles/ParticlesOptions");
const Shape_1 = require("../Options/Classes/Particles/Shape/Shape");
const Enums_1 = require("../Enums");
const Utils_1 = require("../Utils");
const Vector_1 = require("./Particle/Vector");
const Vector3d_1 = require("./Particle/Vector3d");
const fixOutMode = (data)=>{
    if (Utils_1.isInArray(data.outMode, data.checkModes) || Utils_1.isInArray(data.outMode, data.checkModes)) {
        if (data.coord > data.maxCoord - data.radius * 2) data.setCb(-data.radius);
        else if (data.coord < data.radius * 2) data.setCb(data.radius);
    }
};
class Particle {
    constructor(id, container, position, overrideOptions, group){
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        this.id = id;
        this.container = container;
        this.group = group;
        this.fill = true;
        this.close = true;
        this.lastPathTime = 0;
        this.destroyed = false;
        this.unbreakable = false;
        this.splitCount = 0;
        this.misplaced = false;
        this.retina = {
            maxDistance: {
            }
        };
        const pxRatio = container.retina.pixelRatio;
        const mainOptions = container.actualOptions;
        const particlesOptions = new ParticlesOptions_1.ParticlesOptions();
        particlesOptions.load(mainOptions.particles);
        const shapeType = particlesOptions.shape.type;
        const reduceDuplicates = particlesOptions.reduceDuplicates;
        this.shape = shapeType instanceof Array ? Utils_1.itemFromArray(shapeType, this.id, reduceDuplicates) : shapeType;
        if (overrideOptions === null || overrideOptions === void 0 ? void 0 : overrideOptions.shape) {
            if (overrideOptions.shape.type) {
                const overrideShapeType = overrideOptions.shape.type;
                this.shape = overrideShapeType instanceof Array ? Utils_1.itemFromArray(overrideShapeType, this.id, reduceDuplicates) : overrideShapeType;
            }
            const shapeOptions = new Shape_1.Shape();
            shapeOptions.load(overrideOptions.shape);
            if (this.shape) this.shapeData = this.loadShapeData(shapeOptions, reduceDuplicates);
        } else this.shapeData = this.loadShapeData(particlesOptions.shape, reduceDuplicates);
        if (overrideOptions !== undefined) particlesOptions.load(overrideOptions);
        if (((_a = this.shapeData) === null || _a === void 0 ? void 0 : _a.particles) !== undefined) particlesOptions.load((_b = this.shapeData) === null || _b === void 0 ? void 0 : _b.particles);
        this.fill = (_d = (_c = this.shapeData) === null || _c === void 0 ? void 0 : _c.fill) !== null && _d !== void 0 ? _d : this.fill;
        this.close = (_f = (_e = this.shapeData) === null || _e === void 0 ? void 0 : _e.close) !== null && _f !== void 0 ? _f : this.close;
        this.options = particlesOptions;
        this.pathDelay = Utils_1.getValue(this.options.move.path.delay) * 1000;
        const zIndexValue = Utils_1.getRangeValue(this.options.zIndex.value);
        container.retina.initParticle(this);
        const sizeOptions = this.options.size, sizeRange = sizeOptions.value;
        this.size = {
            enable: sizeOptions.animation.enable,
            value: Utils_1.getValue(sizeOptions) * container.retina.pixelRatio,
            max: Utils_1.getRangeMax(sizeRange) * pxRatio,
            min: Utils_1.getRangeMin(sizeRange) * pxRatio,
            loops: 0,
            maxLoops: sizeOptions.animation.count
        };
        const sizeAnimation = sizeOptions.animation;
        if (sizeAnimation.enable) {
            this.size.status = Enums_1.AnimationStatus.increasing;
            switch(sizeAnimation.startValue){
                case Enums_1.StartValueType.min:
                    this.size.value = this.size.min;
                    this.size.status = Enums_1.AnimationStatus.increasing;
                    break;
                case Enums_1.StartValueType.random:
                    this.size.value = Utils_1.randomInRange(this.size) * pxRatio;
                    this.size.status = Math.random() >= 0.5 ? Enums_1.AnimationStatus.increasing : Enums_1.AnimationStatus.decreasing;
                    break;
                case Enums_1.StartValueType.max:
                default:
                    this.size.value = this.size.max;
                    this.size.status = Enums_1.AnimationStatus.decreasing;
                    break;
            }
            this.size.velocity = ((_g = this.retina.sizeAnimationSpeed) !== null && _g !== void 0 ? _g : container.retina.sizeAnimationSpeed) / 100 * container.retina.reduceFactor;
            if (!sizeAnimation.sync) this.size.velocity *= Math.random();
        }
        this.direction = Utils_1.getParticleDirectionAngle(this.options.move.direction);
        this.bubble = {
            inRange: false
        };
        this.initialVelocity = this.calculateVelocity();
        this.velocity = this.initialVelocity.copy();
        this.moveDecay = 1 - Utils_1.getRangeValue(this.options.move.decay);
        this.position = this.calcPosition(container, position, Utils_1.clamp(zIndexValue, 0, container.zLayers));
        this.initialPosition = this.position.copy();
        this.offset = Vector_1.Vector.origin;
        const particles = container.particles;
        particles.needsSort = particles.needsSort || particles.lastZIndex < this.position.z;
        particles.lastZIndex = this.position.z;
        this.zIndexFactor = this.position.z / container.zLayers;
        this.sides = 24;
        let drawer = container.drawers.get(this.shape);
        if (!drawer) {
            drawer = Utils_1.Plugins.getShapeDrawer(this.shape);
            if (drawer) container.drawers.set(this.shape, drawer);
        }
        if (drawer === null || drawer === void 0 ? void 0 : drawer.loadShape) drawer === null || drawer === void 0 || drawer.loadShape(this);
        const sideCountFunc = drawer === null || drawer === void 0 ? void 0 : drawer.getSidesCount;
        if (sideCountFunc) this.sides = sideCountFunc(this);
        this.life = this.loadLife();
        this.spawning = this.life.delay > 0;
        if (this.options.move.spin.enable) {
            const spinPos = (_h = this.options.move.spin.position) !== null && _h !== void 0 ? _h : {
                x: 50,
                y: 50
            };
            const spinCenter = {
                x: spinPos.x / 100 * container.canvas.size.width,
                y: spinPos.y / 100 * container.canvas.size.height
            };
            const pos = this.getPosition();
            const distance = Utils_1.getDistance(pos, spinCenter);
            this.spin = {
                center: spinCenter,
                direction: this.velocity.x >= 0 ? Enums_1.RotateDirection.clockwise : Enums_1.RotateDirection.counterClockwise,
                angle: this.velocity.angle,
                radius: distance,
                acceleration: (_j = this.retina.spinAcceleration) !== null && _j !== void 0 ? _j : Utils_1.getRangeValue(this.options.move.spin.acceleration)
            };
        }
        this.shadowColor = Utils_1.colorToRgb(this.options.shadow.color);
        for (const updater of container.particles.updaters)if (updater.init) updater.init(this);
        if (drawer && drawer.particleInit) drawer.particleInit(container, this);
        for (const [, plugin] of container.plugins)if (plugin.particleCreated) plugin.particleCreated(this);
    }
    isVisible() {
        return !this.destroyed && !this.spawning && this.isInsideCanvas();
    }
    isInsideCanvas() {
        const radius = this.getRadius();
        const canvasSize = this.container.canvas.size;
        return this.position.x >= -radius && this.position.y >= -radius && this.position.y <= canvasSize.height + radius && this.position.x <= canvasSize.width + radius;
    }
    draw(delta) {
        const container = this.container;
        for (const [, plugin] of container.plugins)container.canvas.drawParticlePlugin(plugin, this, delta);
        container.canvas.drawParticle(this, delta);
    }
    getPosition() {
        return {
            x: this.position.x + this.offset.x,
            y: this.position.y + this.offset.y,
            z: this.position.z
        };
    }
    getRadius() {
        var _a;
        return (_a = this.bubble.radius) !== null && _a !== void 0 ? _a : this.size.value;
    }
    getMass() {
        return this.getRadius() ** 2 * Math.PI / 2;
    }
    getFillColor() {
        var _a, _b, _c;
        const color = (_a = this.bubble.color) !== null && _a !== void 0 ? _a : Utils_1.getHslFromAnimation(this.color);
        if (color && this.roll && (this.backColor || this.roll.alter)) {
            const rolled = Math.floor(((_c = (_b = this.roll) === null || _b === void 0 ? void 0 : _b.angle) !== null && _c !== void 0 ? _c : 0) / (Math.PI / 2)) % 2;
            if (rolled) {
                if (this.backColor) return this.backColor;
                if (this.roll.alter) return Utils_1.alterHsl(color, this.roll.alter.type, this.roll.alter.value);
            }
        }
        return color;
    }
    getStrokeColor() {
        var _a, _b;
        return (_b = (_a = this.bubble.color) !== null && _a !== void 0 ? _a : Utils_1.getHslFromAnimation(this.strokeColor)) !== null && _b !== void 0 ? _b : this.getFillColor();
    }
    destroy(override) {
        this.destroyed = true;
        this.bubble.inRange = false;
        if (this.unbreakable) return;
        this.destroyed = true;
        this.bubble.inRange = false;
        for (const [, plugin] of this.container.plugins)if (plugin.particleDestroyed) plugin.particleDestroyed(this, override);
        if (override) return;
        const destroyOptions = this.options.destroy;
        if (destroyOptions.mode === Enums_1.DestroyMode.split) this.split();
    }
    reset() {
        if (this.opacity) this.opacity.loops = 0;
        this.size.loops = 0;
    }
    split() {
        const splitOptions = this.options.destroy.split;
        if (splitOptions.count >= 0 && (this.splitCount++) > splitOptions.count) return;
        const rate = Utils_1.getRangeValue(splitOptions.rate.value);
        for(let i = 0; i < rate; i++)this.container.particles.addSplitParticle(this);
    }
    calcPosition(container, position, zIndex, tryCount = 0) {
        var _a, _b, _c, _d, _e, _f;
        for (const [, plugin] of container.plugins){
            const pluginPos = plugin.particlePosition !== undefined ? plugin.particlePosition(position, this) : undefined;
            if (pluginPos !== undefined) return Vector3d_1.Vector3d.create(pluginPos.x, pluginPos.y, zIndex);
        }
        const canvasSize = container.canvas.size;
        const pos = Vector3d_1.Vector3d.create((_a = position === null || position === void 0 ? void 0 : position.x) !== null && _a !== void 0 ? _a : Math.random() * canvasSize.width, (_b = position === null || position === void 0 ? void 0 : position.y) !== null && _b !== void 0 ? _b : Math.random() * canvasSize.height, zIndex);
        const radius = this.getRadius();
        const outModes = this.options.move.outModes, fixHorizontal = (outMode)=>{
            fixOutMode({
                outMode,
                checkModes: [
                    Enums_1.OutMode.bounce,
                    Enums_1.OutMode.bounceHorizontal
                ],
                coord: pos.x,
                maxCoord: container.canvas.size.width,
                setCb: (value)=>pos.x += value
                ,
                radius
            });
        }, fixVertical = (outMode)=>{
            fixOutMode({
                outMode,
                checkModes: [
                    Enums_1.OutMode.bounce,
                    Enums_1.OutMode.bounceVertical
                ],
                coord: pos.y,
                maxCoord: container.canvas.size.height,
                setCb: (value)=>pos.y += value
                ,
                radius
            });
        };
        fixHorizontal((_c = outModes.left) !== null && _c !== void 0 ? _c : outModes.default);
        fixHorizontal((_d = outModes.right) !== null && _d !== void 0 ? _d : outModes.default);
        fixVertical((_e = outModes.top) !== null && _e !== void 0 ? _e : outModes.default);
        fixVertical((_f = outModes.bottom) !== null && _f !== void 0 ? _f : outModes.default);
        if (this.checkOverlap(pos, tryCount)) return this.calcPosition(container, undefined, zIndex, tryCount + 1);
        return pos;
    }
    checkOverlap(pos, tryCount = 0) {
        const collisionsOptions = this.options.collisions;
        const radius = this.getRadius();
        if (!collisionsOptions.enable) return false;
        const overlapOptions = collisionsOptions.overlap;
        if (overlapOptions.enable) return false;
        const retries = overlapOptions.retries;
        if (retries >= 0 && tryCount > retries) throw new Error("Particle is overlapping and can't be placed");
        let overlaps = false;
        for (const particle of this.container.particles.array)if (Utils_1.getDistance(pos, particle.position) < radius + particle.getRadius()) {
            overlaps = true;
            break;
        }
        return overlaps;
    }
    calculateVelocity() {
        const baseVelocity = Utils_1.getParticleBaseVelocity(this.direction);
        const res = baseVelocity.copy();
        const moveOptions = this.options.move;
        const rad = Math.PI / 180 * moveOptions.angle.value;
        const radOffset = Math.PI / 180 * moveOptions.angle.offset;
        const range = {
            left: radOffset - rad / 2,
            right: radOffset + rad / 2
        };
        if (!moveOptions.straight) res.angle += Utils_1.randomInRange(Utils_1.setRangeValue(range.left, range.right));
        if (moveOptions.random && typeof moveOptions.speed === "number") res.length *= Math.random();
        return res;
    }
    loadShapeData(shapeOptions, reduceDuplicates) {
        const shapeData = shapeOptions.options[this.shape];
        if (shapeData) return Utils_1.deepExtend({
        }, shapeData instanceof Array ? Utils_1.itemFromArray(shapeData, this.id, reduceDuplicates) : shapeData);
    }
    loadLife() {
        const container = this.container;
        const particlesOptions = this.options;
        const lifeOptions = particlesOptions.life;
        const life = {
            delay: container.retina.reduceFactor ? Utils_1.getRangeValue(lifeOptions.delay.value) * (lifeOptions.delay.sync ? 1 : Math.random()) / container.retina.reduceFactor * 1000 : 0,
            delayTime: 0,
            duration: container.retina.reduceFactor ? Utils_1.getRangeValue(lifeOptions.duration.value) * (lifeOptions.duration.sync ? 1 : Math.random()) / container.retina.reduceFactor * 1000 : 0,
            time: 0,
            count: particlesOptions.life.count
        };
        if (life.duration <= 0) life.duration = -1;
        if (life.count <= 0) life.count = -1;
        return life;
    }
}
exports.Particle = Particle;

},{"../Options/Classes/Particles/ParticlesOptions":"7lNRz","../Options/Classes/Particles/Shape/Shape":"6Pakd","../Enums":"e5HNg","../Utils":"iU3t1","./Particle/Vector":"c55jT","./Particle/Vector3d":"5YI4e"}],"7lNRz":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ParticlesOptions = void 0;
const Links_1 = require("./Links/Links");
const Move_1 = require("./Move/Move");
const ParticlesNumber_1 = require("./Number/ParticlesNumber");
const Opacity_1 = require("./Opacity/Opacity");
const Shape_1 = require("./Shape/Shape");
const Size_1 = require("./Size/Size");
const Rotate_1 = require("./Rotate/Rotate");
const Shadow_1 = require("./Shadow");
const Stroke_1 = require("./Stroke");
const Collisions_1 = require("./Collisions/Collisions");
const Twinkle_1 = require("./Twinkle/Twinkle");
const AnimatableColor_1 = require("../AnimatableColor");
const Life_1 = require("./Life/Life");
const Bounce_1 = require("./Bounce/Bounce");
const Destroy_1 = require("./Destroy/Destroy");
const Wobble_1 = require("./Wobble/Wobble");
const Tilt_1 = require("./Tilt/Tilt");
const Roll_1 = require("./Roll/Roll");
const ZIndex_1 = require("./ZIndex/ZIndex");
const Utils_1 = require("../../../Utils");
const Orbit_1 = require("./Orbit/Orbit");
const Repulse_1 = require("./Repulse/Repulse");
const AnimatableGradient_1 = require("../AnimatableGradient");
class ParticlesOptions {
    constructor(){
        this.bounce = new Bounce_1.Bounce();
        this.collisions = new Collisions_1.Collisions();
        this.color = new AnimatableColor_1.AnimatableColor();
        this.destroy = new Destroy_1.Destroy();
        this.gradient = [];
        this.groups = {
        };
        this.life = new Life_1.Life();
        this.links = new Links_1.Links();
        this.move = new Move_1.Move();
        this.number = new ParticlesNumber_1.ParticlesNumber();
        this.opacity = new Opacity_1.Opacity();
        this.orbit = new Orbit_1.Orbit();
        this.reduceDuplicates = false;
        this.repulse = new Repulse_1.Repulse();
        this.roll = new Roll_1.Roll();
        this.rotate = new Rotate_1.Rotate();
        this.shadow = new Shadow_1.Shadow();
        this.shape = new Shape_1.Shape();
        this.size = new Size_1.Size();
        this.stroke = new Stroke_1.Stroke();
        this.tilt = new Tilt_1.Tilt();
        this.twinkle = new Twinkle_1.Twinkle();
        this.wobble = new Wobble_1.Wobble();
        this.zIndex = new ZIndex_1.ZIndex();
    }
    get line_linked() {
        return this.links;
    }
    set line_linked(value) {
        this.links = value;
    }
    get lineLinked() {
        return this.links;
    }
    set lineLinked(value) {
        this.links = value;
    }
    load(data) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        if (data === undefined) return;
        this.bounce.load(data.bounce);
        this.color.load(AnimatableColor_1.AnimatableColor.create(this.color, data.color));
        this.destroy.load(data.destroy);
        this.life.load(data.life);
        const links = (_b = (_a = data.links) !== null && _a !== void 0 ? _a : data.lineLinked) !== null && _b !== void 0 ? _b : data.line_linked;
        if (links !== undefined) this.links.load(links);
        if (data.groups !== undefined) for(const group in data.groups){
            const item = data.groups[group];
            if (item !== undefined) this.groups[group] = Utils_1.deepExtend((_c = this.groups[group]) !== null && _c !== void 0 ? _c : {
            }, item);
        }
        this.move.load(data.move);
        this.number.load(data.number);
        this.opacity.load(data.opacity);
        this.orbit.load(data.orbit);
        if (data.reduceDuplicates !== undefined) this.reduceDuplicates = data.reduceDuplicates;
        this.repulse.load(data.repulse);
        this.roll.load(data.roll);
        this.rotate.load(data.rotate);
        this.shape.load(data.shape);
        this.size.load(data.size);
        this.shadow.load(data.shadow);
        this.tilt.load(data.tilt);
        this.twinkle.load(data.twinkle);
        this.wobble.load(data.wobble);
        this.zIndex.load(data.zIndex);
        const collisions = (_e = (_d = data.move) === null || _d === void 0 ? void 0 : _d.collisions) !== null && _e !== void 0 ? _e : (_f = data.move) === null || _f === void 0 ? void 0 : _f.bounce;
        if (collisions !== undefined) this.collisions.enable = collisions;
        this.collisions.load(data.collisions);
        const strokeToLoad = (_g = data.stroke) !== null && _g !== void 0 ? _g : (_h = data.shape) === null || _h === void 0 ? void 0 : _h.stroke;
        if (strokeToLoad) {
            if (strokeToLoad instanceof Array) this.stroke = strokeToLoad.map((s)=>{
                const tmp = new Stroke_1.Stroke();
                tmp.load(s);
                return tmp;
            });
            else {
                if (this.stroke instanceof Array) this.stroke = new Stroke_1.Stroke();
                this.stroke.load(strokeToLoad);
            }
        }
        const gradientToLoad = data.gradient;
        if (gradientToLoad) {
            if (gradientToLoad instanceof Array) this.gradient = gradientToLoad.map((s)=>{
                const tmp = new AnimatableGradient_1.AnimatableGradient();
                tmp.load(s);
                return tmp;
            });
            else {
                if (this.gradient instanceof Array) this.gradient = new AnimatableGradient_1.AnimatableGradient();
                this.gradient.load(gradientToLoad);
            }
        }
    }
}
exports.ParticlesOptions = ParticlesOptions;

},{"./Links/Links":"i1dXQ","./Move/Move":"7W6qE","./Number/ParticlesNumber":"jYqOx","./Opacity/Opacity":"aUwSn","./Shape/Shape":"6Pakd","./Size/Size":"ca5Li","./Rotate/Rotate":"k1Zcd","./Shadow":"d3Ulz","./Stroke":"8szx5","./Collisions/Collisions":"7itnl","./Twinkle/Twinkle":"foRKy","../AnimatableColor":"lIijz","./Life/Life":"hxJuW","./Bounce/Bounce":"lcdXd","./Destroy/Destroy":"itBLF","./Wobble/Wobble":"L3H6v","./Tilt/Tilt":"3JIOK","./Roll/Roll":"4ffM4","./ZIndex/ZIndex":"gt9I0","../../../Utils":"iU3t1","./Orbit/Orbit":"jWk2Q","./Repulse/Repulse":"gIXVB","../AnimatableGradient":"aSPRo"}],"i1dXQ":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Links = void 0;
const LinksShadow_1 = require("./LinksShadow");
const LinksTriangle_1 = require("./LinksTriangle");
const OptionsColor_1 = require("../../OptionsColor");
class Links {
    constructor(){
        this.blink = false;
        this.color = new OptionsColor_1.OptionsColor();
        this.consent = false;
        this.distance = 100;
        this.enable = false;
        this.frequency = 1;
        this.opacity = 1;
        this.shadow = new LinksShadow_1.LinksShadow();
        this.triangles = new LinksTriangle_1.LinksTriangle();
        this.width = 1;
        this.warp = false;
    }
    load(data) {
        if (data === undefined) return;
        if (data.id !== undefined) this.id = data.id;
        if (data.blink !== undefined) this.blink = data.blink;
        this.color = OptionsColor_1.OptionsColor.create(this.color, data.color);
        if (data.consent !== undefined) this.consent = data.consent;
        if (data.distance !== undefined) this.distance = data.distance;
        if (data.enable !== undefined) this.enable = data.enable;
        if (data.frequency !== undefined) this.frequency = data.frequency;
        if (data.opacity !== undefined) this.opacity = data.opacity;
        this.shadow.load(data.shadow);
        this.triangles.load(data.triangles);
        if (data.width !== undefined) this.width = data.width;
        if (data.warp !== undefined) this.warp = data.warp;
    }
}
exports.Links = Links;

},{"./LinksShadow":"6wV5a","./LinksTriangle":"dRl22","../../OptionsColor":"2UtQV"}],"6wV5a":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.LinksShadow = void 0;
const OptionsColor_1 = require("../../OptionsColor");
class LinksShadow {
    constructor(){
        this.blur = 5;
        this.color = new OptionsColor_1.OptionsColor();
        this.enable = false;
        this.color.value = "#00ff00";
    }
    load(data) {
        if (data === undefined) return;
        if (data.blur !== undefined) this.blur = data.blur;
        this.color = OptionsColor_1.OptionsColor.create(this.color, data.color);
        if (data.enable !== undefined) this.enable = data.enable;
    }
}
exports.LinksShadow = LinksShadow;

},{"../../OptionsColor":"2UtQV"}],"2UtQV":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.OptionsColor = void 0;
class OptionsColor {
    constructor(){
        this.value = "#fff";
    }
    static create(source, data) {
        const color = new OptionsColor();
        color.load(source);
        if (data !== undefined) {
            if (typeof data === "string" || data instanceof Array) color.load({
                value: data
            });
            else color.load(data);
        }
        return color;
    }
    load(data) {
        if ((data === null || data === void 0 ? void 0 : data.value) === undefined) return;
        this.value = data.value;
    }
}
exports.OptionsColor = OptionsColor;

},{}],"dRl22":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.LinksTriangle = void 0;
const OptionsColor_1 = require("../../OptionsColor");
class LinksTriangle {
    constructor(){
        this.enable = false;
        this.frequency = 1;
    }
    load(data) {
        if (data === undefined) return;
        if (data.color !== undefined) this.color = OptionsColor_1.OptionsColor.create(this.color, data.color);
        if (data.enable !== undefined) this.enable = data.enable;
        if (data.frequency !== undefined) this.frequency = data.frequency;
        if (data.opacity !== undefined) this.opacity = data.opacity;
    }
}
exports.LinksTriangle = LinksTriangle;

},{"../../OptionsColor":"2UtQV"}],"7W6qE":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Move = void 0;
const Attract_1 = require("./Attract");
const Enums_1 = require("../../../../Enums");
const Trail_1 = require("./Trail");
const Path_1 = require("./Path/Path");
const MoveAngle_1 = require("./MoveAngle");
const MoveGravity_1 = require("./MoveGravity");
const OutModes_1 = require("./OutModes");
const Utils_1 = require("../../../../Utils");
const Spin_1 = require("./Spin");
class Move {
    constructor(){
        this.angle = new MoveAngle_1.MoveAngle();
        this.attract = new Attract_1.Attract();
        this.decay = 0;
        this.distance = {
        };
        this.direction = Enums_1.MoveDirection.none;
        this.drift = 0;
        this.enable = false;
        this.gravity = new MoveGravity_1.MoveGravity();
        this.path = new Path_1.Path();
        this.outModes = new OutModes_1.OutModes();
        this.random = false;
        this.size = false;
        this.speed = 2;
        this.spin = new Spin_1.Spin();
        this.straight = false;
        this.trail = new Trail_1.Trail();
        this.vibrate = false;
        this.warp = false;
    }
    get collisions() {
        return false;
    }
    set collisions(value) {
    }
    get bounce() {
        return this.collisions;
    }
    set bounce(value) {
        this.collisions = value;
    }
    get out_mode() {
        return this.outMode;
    }
    set out_mode(value) {
        this.outMode = value;
    }
    get outMode() {
        return this.outModes.default;
    }
    set outMode(value) {
        this.outModes.default = value;
    }
    get noise() {
        return this.path;
    }
    set noise(value) {
        this.path = value;
    }
    load(data) {
        var _a, _b, _c;
        if (data === undefined) return;
        if (data.angle !== undefined) {
            if (typeof data.angle === "number") this.angle.value = data.angle;
            else this.angle.load(data.angle);
        }
        this.attract.load(data.attract);
        if (data.decay !== undefined) this.decay = data.decay;
        if (data.direction !== undefined) this.direction = data.direction;
        if (data.distance !== undefined) this.distance = typeof data.distance === "number" ? {
            horizontal: data.distance,
            vertical: data.distance
        } : Utils_1.deepExtend({
        }, data.distance);
        if (data.drift !== undefined) this.drift = Utils_1.setRangeValue(data.drift);
        if (data.enable !== undefined) this.enable = data.enable;
        this.gravity.load(data.gravity);
        const outMode = (_a = data.outMode) !== null && _a !== void 0 ? _a : data.out_mode;
        if (data.outModes !== undefined || outMode !== undefined) {
            if (typeof data.outModes === "string" || data.outModes === undefined && outMode !== undefined) this.outModes.load({
                default: (_b = data.outModes) !== null && _b !== void 0 ? _b : outMode
            });
            else this.outModes.load(data.outModes);
        }
        this.path.load((_c = data.path) !== null && _c !== void 0 ? _c : data.noise);
        if (data.random !== undefined) this.random = data.random;
        if (data.size !== undefined) this.size = data.size;
        if (data.speed !== undefined) this.speed = Utils_1.setRangeValue(data.speed);
        this.spin.load(data.spin);
        if (data.straight !== undefined) this.straight = data.straight;
        this.trail.load(data.trail);
        if (data.vibrate !== undefined) this.vibrate = data.vibrate;
        if (data.warp !== undefined) this.warp = data.warp;
    }
}
exports.Move = Move;

},{"./Attract":"cDhrg","../../../../Enums":"e5HNg","./Trail":"i6g6x","./Path/Path":"fbAuh","./MoveAngle":"fgN5B","./MoveGravity":"dXsow","./OutModes":"1ya6Y","../../../../Utils":"iU3t1","./Spin":"3KzHD"}],"cDhrg":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Attract = void 0;
class Attract {
    constructor(){
        this.distance = 200;
        this.enable = false;
        this.rotate = {
            x: 3000,
            y: 3000
        };
    }
    get rotateX() {
        return this.rotate.x;
    }
    set rotateX(value) {
        this.rotate.x = value;
    }
    get rotateY() {
        return this.rotate.y;
    }
    set rotateY(value) {
        this.rotate.y = value;
    }
    load(data) {
        var _a, _b, _c, _d;
        if (!data) return;
        if (data.distance !== undefined) this.distance = data.distance;
        if (data.enable !== undefined) this.enable = data.enable;
        const rotateX = (_b = (_a = data.rotate) === null || _a === void 0 ? void 0 : _a.x) !== null && _b !== void 0 ? _b : data.rotateX;
        if (rotateX !== undefined) this.rotate.x = rotateX;
        const rotateY = (_d = (_c = data.rotate) === null || _c === void 0 ? void 0 : _c.y) !== null && _d !== void 0 ? _d : data.rotateY;
        if (rotateY !== undefined) this.rotate.y = rotateY;
    }
}
exports.Attract = Attract;

},{}],"i6g6x":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Trail = void 0;
const OptionsColor_1 = require("../../OptionsColor");
class Trail {
    constructor(){
        this.enable = false;
        this.length = 10;
        this.fillColor = new OptionsColor_1.OptionsColor();
        this.fillColor.value = "#000000";
    }
    load(data) {
        if (data === undefined) return;
        if (data.enable !== undefined) this.enable = data.enable;
        this.fillColor = OptionsColor_1.OptionsColor.create(this.fillColor, data.fillColor);
        if (data.length !== undefined) this.length = data.length;
    }
}
exports.Trail = Trail;

},{"../../OptionsColor":"2UtQV"}],"fbAuh":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Path = void 0;
const PathDelay_1 = require("./PathDelay");
const Utils_1 = require("../../../../../Utils");
class Path {
    constructor(){
        this.clamp = true;
        this.delay = new PathDelay_1.PathDelay();
        this.enable = false;
        this.options = {
        };
    }
    load(data) {
        if (data === undefined) return;
        if (data.clamp !== undefined) this.clamp = data.clamp;
        this.delay.load(data.delay);
        if (data.enable !== undefined) this.enable = data.enable;
        this.generator = data.generator;
        if (data.options) this.options = Utils_1.deepExtend(this.options, data.options);
    }
}
exports.Path = Path;

},{"./PathDelay":"6WAZD","../../../../../Utils":"iU3t1"}],"6WAZD":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PathDelay = void 0;
const ValueWithRandom_1 = require("../../../ValueWithRandom");
class PathDelay extends ValueWithRandom_1.ValueWithRandom {
    constructor(){
        super();
    }
}
exports.PathDelay = PathDelay;

},{"../../../ValueWithRandom":"hwYiV"}],"hwYiV":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ValueWithRandom = void 0;
const Random_1 = require("./Random");
const Utils_1 = require("../../Utils");
class ValueWithRandom {
    constructor(){
        this.random = new Random_1.Random();
        this.value = 0;
    }
    load(data) {
        if (!data) return;
        if (typeof data.random === "boolean") this.random.enable = data.random;
        else this.random.load(data.random);
        if (data.value !== undefined) this.value = Utils_1.setRangeValue(data.value, this.random.enable ? this.random.minimumValue : undefined);
    }
}
exports.ValueWithRandom = ValueWithRandom;

},{"./Random":"35IuY","../../Utils":"iU3t1"}],"35IuY":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Random = void 0;
class Random {
    constructor(){
        this.enable = false;
        this.minimumValue = 0;
    }
    load(data) {
        if (!data) return;
        if (data.enable !== undefined) this.enable = data.enable;
        if (data.minimumValue !== undefined) this.minimumValue = data.minimumValue;
    }
}
exports.Random = Random;

},{}],"fgN5B":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MoveAngle = void 0;
class MoveAngle {
    constructor(){
        this.offset = 0;
        this.value = 90;
    }
    load(data) {
        if (data === undefined) return;
        if (data.offset !== undefined) this.offset = data.offset;
        if (data.value !== undefined) this.value = data.value;
    }
}
exports.MoveAngle = MoveAngle;

},{}],"dXsow":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MoveGravity = void 0;
class MoveGravity {
    constructor(){
        this.acceleration = 9.81;
        this.enable = false;
        this.inverse = false;
        this.maxSpeed = 50;
    }
    load(data) {
        if (!data) return;
        if (data.acceleration !== undefined) this.acceleration = data.acceleration;
        if (data.enable !== undefined) this.enable = data.enable;
        if (data.inverse !== undefined) this.inverse = data.inverse;
        if (data.maxSpeed !== undefined) this.maxSpeed = data.maxSpeed;
    }
}
exports.MoveGravity = MoveGravity;

},{}],"1ya6Y":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.OutModes = void 0;
const Modes_1 = require("../../../../Enums/Modes");
class OutModes {
    constructor(){
        this.default = Modes_1.OutMode.out;
    }
    load(data) {
        var _a, _b, _c, _d;
        if (!data) return;
        if (data.default !== undefined) this.default = data.default;
        this.bottom = (_a = data.bottom) !== null && _a !== void 0 ? _a : data.default;
        this.left = (_b = data.left) !== null && _b !== void 0 ? _b : data.default;
        this.right = (_c = data.right) !== null && _c !== void 0 ? _c : data.default;
        this.top = (_d = data.top) !== null && _d !== void 0 ? _d : data.default;
    }
}
exports.OutModes = OutModes;

},{"../../../../Enums/Modes":"mUZII"}],"3KzHD":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Spin = void 0;
const Utils_1 = require("../../../../Utils");
class Spin {
    constructor(){
        this.acceleration = 0;
        this.enable = false;
    }
    load(data) {
        if (!data) return;
        if (data.acceleration !== undefined) this.acceleration = Utils_1.setRangeValue(data.acceleration);
        if (data.enable !== undefined) this.enable = data.enable;
        this.position = data.position ? Utils_1.deepExtend({
        }, data.position) : undefined;
    }
}
exports.Spin = Spin;

},{"../../../../Utils":"iU3t1"}],"jYqOx":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ParticlesNumber = void 0;
const Density_1 = require("./Density");
class ParticlesNumber {
    constructor(){
        this.density = new Density_1.Density();
        this.limit = 0;
        this.value = 100;
    }
    get max() {
        return this.limit;
    }
    set max(value) {
        this.limit = value;
    }
    load(data) {
        var _a;
        if (data === undefined) return;
        this.density.load(data.density);
        const limit = (_a = data.limit) !== null && _a !== void 0 ? _a : data.max;
        if (limit !== undefined) this.limit = limit;
        if (data.value !== undefined) this.value = data.value;
    }
}
exports.ParticlesNumber = ParticlesNumber;

},{"./Density":"dI86f"}],"dI86f":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Density = void 0;
class Density {
    constructor(){
        this.enable = false;
        this.area = 800;
        this.factor = 1000;
    }
    get value_area() {
        return this.area;
    }
    set value_area(value) {
        this.area = value;
    }
    load(data) {
        var _a;
        if (data === undefined) return;
        if (data.enable !== undefined) this.enable = data.enable;
        const area = (_a = data.area) !== null && _a !== void 0 ? _a : data.value_area;
        if (area !== undefined) this.area = area;
        if (data.factor !== undefined) this.factor = data.factor;
    }
}
exports.Density = Density;

},{}],"aUwSn":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Opacity = void 0;
const OpacityAnimation_1 = require("./OpacityAnimation");
const ValueWithRandom_1 = require("../../ValueWithRandom");
const Utils_1 = require("../../../../Utils");
class Opacity extends ValueWithRandom_1.ValueWithRandom {
    constructor(){
        super();
        this.animation = new OpacityAnimation_1.OpacityAnimation();
        this.random.minimumValue = 0.1;
        this.value = 1;
    }
    get anim() {
        return this.animation;
    }
    set anim(value) {
        this.animation = value;
    }
    load(data) {
        var _a;
        if (!data) return;
        super.load(data);
        const animation = (_a = data.animation) !== null && _a !== void 0 ? _a : data.anim;
        if (animation !== undefined) {
            this.animation.load(animation);
            this.value = Utils_1.setRangeValue(this.value, this.animation.enable ? this.animation.minimumValue : undefined);
        }
    }
}
exports.Opacity = Opacity;

},{"./OpacityAnimation":"cUKRO","../../ValueWithRandom":"hwYiV","../../../../Utils":"iU3t1"}],"cUKRO":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.OpacityAnimation = void 0;
const Enums_1 = require("../../../../Enums");
const AnimationOptions_1 = require("../../AnimationOptions");
class OpacityAnimation extends AnimationOptions_1.AnimationOptions {
    constructor(){
        super();
        this.destroy = Enums_1.DestroyType.none;
        this.enable = false;
        this.speed = 2;
        this.startValue = Enums_1.StartValueType.random;
        this.sync = false;
    }
    get opacity_min() {
        return this.minimumValue;
    }
    set opacity_min(value) {
        this.minimumValue = value;
    }
    load(data) {
        var _a;
        if (data === undefined) return;
        super.load(data);
        if (data.destroy !== undefined) this.destroy = data.destroy;
        if (data.enable !== undefined) this.enable = data.enable;
        this.minimumValue = (_a = data.minimumValue) !== null && _a !== void 0 ? _a : data.opacity_min;
        if (data.speed !== undefined) this.speed = data.speed;
        if (data.startValue !== undefined) this.startValue = data.startValue;
        if (data.sync !== undefined) this.sync = data.sync;
    }
}
exports.OpacityAnimation = OpacityAnimation;

},{"../../../../Enums":"e5HNg","../../AnimationOptions":"4LJrM"}],"4LJrM":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AnimationOptions = void 0;
class AnimationOptions {
    constructor(){
        this.count = 0;
        this.enable = false;
        this.speed = 1;
        this.sync = false;
    }
    load(data) {
        if (!data) return;
        if (data.count !== undefined) this.count = data.count;
        if (data.enable !== undefined) this.enable = data.enable;
        if (data.speed !== undefined) this.speed = data.speed;
        if (data.sync !== undefined) this.sync = data.sync;
    }
}
exports.AnimationOptions = AnimationOptions;

},{}],"6Pakd":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Shape = void 0;
const Enums_1 = require("../../../../Enums");
const Utils_1 = require("../../../../Utils");
class Shape {
    constructor(){
        this.options = {
        };
        this.type = Enums_1.ShapeType.circle;
    }
    get image() {
        var _a;
        return (_a = this.options[Enums_1.ShapeType.image]) !== null && _a !== void 0 ? _a : this.options[Enums_1.ShapeType.images];
    }
    set image(value) {
        this.options[Enums_1.ShapeType.image] = value;
        this.options[Enums_1.ShapeType.images] = value;
    }
    get custom() {
        return this.options;
    }
    set custom(value) {
        this.options = value;
    }
    get images() {
        return this.image;
    }
    set images(value) {
        this.image = value;
    }
    get stroke() {
        return [];
    }
    set stroke(_value) {
    }
    get character() {
        var _a;
        return (_a = this.options[Enums_1.ShapeType.character]) !== null && _a !== void 0 ? _a : this.options[Enums_1.ShapeType.char];
    }
    set character(value) {
        this.options[Enums_1.ShapeType.character] = value;
        this.options[Enums_1.ShapeType.char] = value;
    }
    get polygon() {
        var _a;
        return (_a = this.options[Enums_1.ShapeType.polygon]) !== null && _a !== void 0 ? _a : this.options[Enums_1.ShapeType.star];
    }
    set polygon(value) {
        this.options[Enums_1.ShapeType.polygon] = value;
        this.options[Enums_1.ShapeType.star] = value;
    }
    load(data) {
        var _a, _b, _c;
        if (data === undefined) return;
        const options = (_a = data.options) !== null && _a !== void 0 ? _a : data.custom;
        if (options !== undefined) for(const shape in options){
            const item = options[shape];
            if (item !== undefined) this.options[shape] = Utils_1.deepExtend((_b = this.options[shape]) !== null && _b !== void 0 ? _b : {
            }, item);
        }
        this.loadShape(data.character, Enums_1.ShapeType.character, Enums_1.ShapeType.char, true);
        this.loadShape(data.polygon, Enums_1.ShapeType.polygon, Enums_1.ShapeType.star, false);
        this.loadShape((_c = data.image) !== null && _c !== void 0 ? _c : data.images, Enums_1.ShapeType.image, Enums_1.ShapeType.images, true);
        if (data.type !== undefined) this.type = data.type;
    }
    loadShape(item, mainKey, altKey, altOverride) {
        var _a, _b, _c, _d;
        if (item === undefined) return;
        if (item instanceof Array) {
            if (!(this.options[mainKey] instanceof Array)) {
                this.options[mainKey] = [];
                if (!this.options[altKey] || altOverride) this.options[altKey] = [];
            }
            this.options[mainKey] = Utils_1.deepExtend((_a = this.options[mainKey]) !== null && _a !== void 0 ? _a : [], item);
            if (!this.options[altKey] || altOverride) this.options[altKey] = Utils_1.deepExtend((_b = this.options[altKey]) !== null && _b !== void 0 ? _b : [], item);
        } else {
            if (this.options[mainKey] instanceof Array) {
                this.options[mainKey] = {
                };
                if (!this.options[altKey] || altOverride) this.options[altKey] = {
                };
            }
            this.options[mainKey] = Utils_1.deepExtend((_c = this.options[mainKey]) !== null && _c !== void 0 ? _c : {
            }, item);
            if (!this.options[altKey] || altOverride) this.options[altKey] = Utils_1.deepExtend((_d = this.options[altKey]) !== null && _d !== void 0 ? _d : {
            }, item);
        }
    }
}
exports.Shape = Shape;

},{"../../../../Enums":"e5HNg","../../../../Utils":"iU3t1"}],"ca5Li":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Size = void 0;
const SizeAnimation_1 = require("./SizeAnimation");
const ValueWithRandom_1 = require("../../ValueWithRandom");
const Utils_1 = require("../../../../Utils");
class Size extends ValueWithRandom_1.ValueWithRandom {
    constructor(){
        super();
        this.animation = new SizeAnimation_1.SizeAnimation();
        this.random.minimumValue = 1;
        this.value = 3;
    }
    get anim() {
        return this.animation;
    }
    set anim(value) {
        this.animation = value;
    }
    load(data) {
        var _a;
        if (!data) return;
        super.load(data);
        const animation = (_a = data.animation) !== null && _a !== void 0 ? _a : data.anim;
        if (animation !== undefined) {
            this.animation.load(animation);
            this.value = Utils_1.setRangeValue(this.value, this.animation.enable ? this.animation.minimumValue : undefined);
        }
    }
}
exports.Size = Size;

},{"./SizeAnimation":"6MDRG","../../ValueWithRandom":"hwYiV","../../../../Utils":"iU3t1"}],"6MDRG":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SizeAnimation = void 0;
const Enums_1 = require("../../../../Enums");
const AnimationOptions_1 = require("../../AnimationOptions");
class SizeAnimation extends AnimationOptions_1.AnimationOptions {
    constructor(){
        super();
        this.destroy = Enums_1.DestroyType.none;
        this.enable = false;
        this.speed = 5;
        this.startValue = Enums_1.StartValueType.random;
        this.sync = false;
    }
    get size_min() {
        return this.minimumValue;
    }
    set size_min(value) {
        this.minimumValue = value;
    }
    load(data) {
        var _a;
        if (data === undefined) return;
        super.load(data);
        if (data.destroy !== undefined) this.destroy = data.destroy;
        if (data.enable !== undefined) this.enable = data.enable;
        this.minimumValue = (_a = data.minimumValue) !== null && _a !== void 0 ? _a : data.size_min;
        if (data.speed !== undefined) this.speed = data.speed;
        if (data.startValue !== undefined) this.startValue = data.startValue;
        if (data.sync !== undefined) this.sync = data.sync;
    }
}
exports.SizeAnimation = SizeAnimation;

},{"../../../../Enums":"e5HNg","../../AnimationOptions":"4LJrM"}],"k1Zcd":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Rotate = void 0;
const RotateAnimation_1 = require("./RotateAnimation");
const Enums_1 = require("../../../../Enums");
const ValueWithRandom_1 = require("../../ValueWithRandom");
class Rotate extends ValueWithRandom_1.ValueWithRandom {
    constructor(){
        super();
        this.animation = new RotateAnimation_1.RotateAnimation();
        this.direction = Enums_1.RotateDirection.clockwise;
        this.path = false;
        this.value = 0;
    }
    load(data) {
        if (!data) return;
        super.load(data);
        if (data.direction !== undefined) this.direction = data.direction;
        this.animation.load(data.animation);
        if (data.path !== undefined) this.path = data.path;
    }
}
exports.Rotate = Rotate;

},{"./RotateAnimation":"earPW","../../../../Enums":"e5HNg","../../ValueWithRandom":"hwYiV"}],"earPW":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RotateAnimation = void 0;
class RotateAnimation {
    constructor(){
        this.enable = false;
        this.speed = 0;
        this.sync = false;
    }
    load(data) {
        if (data === undefined) return;
        if (data.enable !== undefined) this.enable = data.enable;
        if (data.speed !== undefined) this.speed = data.speed;
        if (data.sync !== undefined) this.sync = data.sync;
    }
}
exports.RotateAnimation = RotateAnimation;

},{}],"d3Ulz":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Shadow = void 0;
const OptionsColor_1 = require("../OptionsColor");
class Shadow {
    constructor(){
        this.blur = 0;
        this.color = new OptionsColor_1.OptionsColor();
        this.enable = false;
        this.offset = {
            x: 0,
            y: 0
        };
        this.color.value = "#000000";
    }
    load(data) {
        if (data === undefined) return;
        if (data.blur !== undefined) this.blur = data.blur;
        this.color = OptionsColor_1.OptionsColor.create(this.color, data.color);
        if (data.enable !== undefined) this.enable = data.enable;
        if (data.offset === undefined) return;
        if (data.offset.x !== undefined) this.offset.x = data.offset.x;
        if (data.offset.y !== undefined) this.offset.y = data.offset.y;
    }
}
exports.Shadow = Shadow;

},{"../OptionsColor":"2UtQV"}],"8szx5":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Stroke = void 0;
const AnimatableColor_1 = require("../AnimatableColor");
class Stroke {
    constructor(){
        this.width = 0;
    }
    load(data) {
        if (data === undefined) return;
        if (data.color !== undefined) this.color = AnimatableColor_1.AnimatableColor.create(this.color, data.color);
        if (data.width !== undefined) this.width = data.width;
        if (data.opacity !== undefined) this.opacity = data.opacity;
    }
}
exports.Stroke = Stroke;

},{"../AnimatableColor":"lIijz"}],"lIijz":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AnimatableColor = void 0;
const OptionsColor_1 = require("./OptionsColor");
const HslAnimation_1 = require("./HslAnimation");
class AnimatableColor extends OptionsColor_1.OptionsColor {
    constructor(){
        super();
        this.animation = new HslAnimation_1.HslAnimation();
    }
    static create(source, data) {
        const color = new AnimatableColor();
        color.load(source);
        if (data !== undefined) {
            if (typeof data === "string" || data instanceof Array) color.load({
                value: data
            });
            else color.load(data);
        }
        return color;
    }
    load(data) {
        super.load(data);
        if (!data) return;
        const colorAnimation = data.animation;
        if (colorAnimation !== undefined) {
            if (colorAnimation.enable !== undefined) this.animation.h.load(colorAnimation);
            else this.animation.load(data.animation);
        }
    }
}
exports.AnimatableColor = AnimatableColor;

},{"./OptionsColor":"2UtQV","./HslAnimation":"8602R"}],"8602R":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.HslAnimation = void 0;
const ColorAnimation_1 = require("./ColorAnimation");
class HslAnimation {
    constructor(){
        this.h = new ColorAnimation_1.ColorAnimation();
        this.s = new ColorAnimation_1.ColorAnimation();
        this.l = new ColorAnimation_1.ColorAnimation();
    }
    load(data) {
        if (!data) return;
        this.h.load(data.h);
        this.s.load(data.s);
        this.l.load(data.l);
    }
}
exports.HslAnimation = HslAnimation;

},{"./ColorAnimation":"jtc31"}],"jtc31":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ColorAnimation = void 0;
const Utils_1 = require("../../Utils");
class ColorAnimation {
    constructor(){
        this.count = 0;
        this.enable = false;
        this.offset = 0;
        this.speed = 1;
        this.sync = true;
    }
    load(data) {
        if (data === undefined) return;
        if (data.count !== undefined) this.count = data.count;
        if (data.enable !== undefined) this.enable = data.enable;
        if (data.offset !== undefined) this.offset = Utils_1.setRangeValue(data.offset);
        if (data.speed !== undefined) this.speed = data.speed;
        if (data.sync !== undefined) this.sync = data.sync;
    }
}
exports.ColorAnimation = ColorAnimation;

},{"../../Utils":"iU3t1"}],"7itnl":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Collisions = void 0;
const Enums_1 = require("../../../../Enums");
const Bounce_1 = require("../Bounce/Bounce");
const CollisionsOverlap_1 = require("./CollisionsOverlap");
class Collisions {
    constructor(){
        this.bounce = new Bounce_1.Bounce();
        this.enable = false;
        this.mode = Enums_1.CollisionMode.bounce;
        this.overlap = new CollisionsOverlap_1.CollisionsOverlap();
    }
    load(data) {
        if (data === undefined) return;
        this.bounce.load(data.bounce);
        if (data.enable !== undefined) this.enable = data.enable;
        if (data.mode !== undefined) this.mode = data.mode;
        this.overlap.load(data.overlap);
    }
}
exports.Collisions = Collisions;

},{"../../../../Enums":"e5HNg","../Bounce/Bounce":"lcdXd","./CollisionsOverlap":"3aU8J"}],"lcdXd":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Bounce = void 0;
const BounceFactor_1 = require("./BounceFactor");
class Bounce {
    constructor(){
        this.horizontal = new BounceFactor_1.BounceFactor();
        this.vertical = new BounceFactor_1.BounceFactor();
    }
    load(data) {
        if (!data) return;
        this.horizontal.load(data.horizontal);
        this.vertical.load(data.vertical);
    }
}
exports.Bounce = Bounce;

},{"./BounceFactor":"5N0SO"}],"5N0SO":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.BounceFactor = void 0;
const ValueWithRandom_1 = require("../../ValueWithRandom");
class BounceFactor extends ValueWithRandom_1.ValueWithRandom {
    constructor(){
        super();
        this.random.minimumValue = 0.1;
        this.value = 1;
    }
}
exports.BounceFactor = BounceFactor;

},{"../../ValueWithRandom":"hwYiV"}],"3aU8J":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CollisionsOverlap = void 0;
class CollisionsOverlap {
    constructor(){
        this.enable = true;
        this.retries = 0;
    }
    load(data) {
        if (!data) return;
        if (data.enable !== undefined) this.enable = data.enable;
        if (data.retries !== undefined) this.retries = data.retries;
    }
}
exports.CollisionsOverlap = CollisionsOverlap;

},{}],"foRKy":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Twinkle = void 0;
const TwinkleValues_1 = require("./TwinkleValues");
class Twinkle {
    constructor(){
        this.lines = new TwinkleValues_1.TwinkleValues();
        this.particles = new TwinkleValues_1.TwinkleValues();
    }
    load(data) {
        if (data === undefined) return;
        this.lines.load(data.lines);
        this.particles.load(data.particles);
    }
}
exports.Twinkle = Twinkle;

},{"./TwinkleValues":"1B4bR"}],"1B4bR":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TwinkleValues = void 0;
const OptionsColor_1 = require("../../OptionsColor");
class TwinkleValues {
    constructor(){
        this.enable = false;
        this.frequency = 0.05;
        this.opacity = 1;
    }
    load(data) {
        if (data === undefined) return;
        if (data.color !== undefined) this.color = OptionsColor_1.OptionsColor.create(this.color, data.color);
        if (data.enable !== undefined) this.enable = data.enable;
        if (data.frequency !== undefined) this.frequency = data.frequency;
        if (data.opacity !== undefined) this.opacity = data.opacity;
    }
}
exports.TwinkleValues = TwinkleValues;

},{"../../OptionsColor":"2UtQV"}],"hxJuW":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Life = void 0;
const LifeDelay_1 = require("./LifeDelay");
const LifeDuration_1 = require("./LifeDuration");
class Life {
    constructor(){
        this.count = 0;
        this.delay = new LifeDelay_1.LifeDelay();
        this.duration = new LifeDuration_1.LifeDuration();
    }
    load(data) {
        if (data === undefined) return;
        if (data.count !== undefined) this.count = data.count;
        this.delay.load(data.delay);
        this.duration.load(data.duration);
    }
}
exports.Life = Life;

},{"./LifeDelay":"7zPG6","./LifeDuration":"fLhXK"}],"7zPG6":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.LifeDelay = void 0;
const ValueWithRandom_1 = require("../../ValueWithRandom");
class LifeDelay extends ValueWithRandom_1.ValueWithRandom {
    constructor(){
        super();
        this.sync = false;
    }
    load(data) {
        if (!data) return;
        super.load(data);
        if (data.sync !== undefined) this.sync = data.sync;
    }
}
exports.LifeDelay = LifeDelay;

},{"../../ValueWithRandom":"hwYiV"}],"fLhXK":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.LifeDuration = void 0;
const ValueWithRandom_1 = require("../../ValueWithRandom");
class LifeDuration extends ValueWithRandom_1.ValueWithRandom {
    constructor(){
        super();
        this.random.minimumValue = 0.0001;
        this.sync = false;
    }
    load(data) {
        if (data === undefined) return;
        super.load(data);
        if (data.sync !== undefined) this.sync = data.sync;
    }
}
exports.LifeDuration = LifeDuration;

},{"../../ValueWithRandom":"hwYiV"}],"itBLF":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Destroy = void 0;
const Enums_1 = require("../../../../Enums");
const Split_1 = require("./Split");
class Destroy {
    constructor(){
        this.mode = Enums_1.DestroyMode.none;
        this.split = new Split_1.Split();
    }
    load(data) {
        if (!data) return;
        if (data.mode !== undefined) this.mode = data.mode;
        this.split.load(data.split);
    }
}
exports.Destroy = Destroy;

},{"../../../../Enums":"e5HNg","./Split":"f3jlH"}],"f3jlH":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Split = void 0;
const SplitFactor_1 = require("./SplitFactor");
const SplitRate_1 = require("./SplitRate");
const Utils_1 = require("../../../../Utils");
class Split {
    constructor(){
        this.count = 1;
        this.factor = new SplitFactor_1.SplitFactor();
        this.rate = new SplitRate_1.SplitRate();
        this.sizeOffset = true;
    }
    load(data) {
        if (!data) return;
        if (data.count !== undefined) this.count = data.count;
        this.factor.load(data.factor);
        this.rate.load(data.rate);
        if (data.particles !== undefined) this.particles = Utils_1.deepExtend({
        }, data.particles);
        if (data.sizeOffset !== undefined) this.sizeOffset = data.sizeOffset;
    }
}
exports.Split = Split;

},{"./SplitFactor":"k0ot3","./SplitRate":"jSH86","../../../../Utils":"iU3t1"}],"k0ot3":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SplitFactor = void 0;
const ValueWithRandom_1 = require("../../ValueWithRandom");
class SplitFactor extends ValueWithRandom_1.ValueWithRandom {
    constructor(){
        super();
        this.value = 3;
    }
}
exports.SplitFactor = SplitFactor;

},{"../../ValueWithRandom":"hwYiV"}],"jSH86":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SplitRate = void 0;
const ValueWithRandom_1 = require("../../ValueWithRandom");
class SplitRate extends ValueWithRandom_1.ValueWithRandom {
    constructor(){
        super();
        this.value = {
            min: 4,
            max: 9
        };
    }
}
exports.SplitRate = SplitRate;

},{"../../ValueWithRandom":"hwYiV"}],"L3H6v":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Wobble = void 0;
const Utils_1 = require("../../../../Utils");
class Wobble {
    constructor(){
        this.distance = 5;
        this.enable = false;
        this.speed = 50;
    }
    load(data) {
        if (!data) return;
        if (data.distance !== undefined) this.distance = Utils_1.setRangeValue(data.distance);
        if (data.enable !== undefined) this.enable = data.enable;
        if (data.speed !== undefined) this.speed = Utils_1.setRangeValue(data.speed);
    }
}
exports.Wobble = Wobble;

},{"../../../../Utils":"iU3t1"}],"3JIOK":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Tilt = void 0;
const TiltAnimation_1 = require("./TiltAnimation");
const Enums_1 = require("../../../../Enums");
const ValueWithRandom_1 = require("../../ValueWithRandom");
class Tilt extends ValueWithRandom_1.ValueWithRandom {
    constructor(){
        super();
        this.animation = new TiltAnimation_1.TiltAnimation();
        this.direction = Enums_1.TiltDirection.clockwise;
        this.enable = false;
        this.value = 0;
    }
    load(data) {
        if (!data) return;
        super.load(data);
        this.animation.load(data.animation);
        if (data.direction !== undefined) this.direction = data.direction;
        if (data.enable !== undefined) this.enable = data.enable;
    }
}
exports.Tilt = Tilt;

},{"./TiltAnimation":"bHTvv","../../../../Enums":"e5HNg","../../ValueWithRandom":"hwYiV"}],"bHTvv":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TiltAnimation = void 0;
class TiltAnimation {
    constructor(){
        this.enable = false;
        this.speed = 0;
        this.sync = false;
    }
    load(data) {
        if (data === undefined) return;
        if (data.enable !== undefined) this.enable = data.enable;
        if (data.speed !== undefined) this.speed = data.speed;
        if (data.sync !== undefined) this.sync = data.sync;
    }
}
exports.TiltAnimation = TiltAnimation;

},{}],"4ffM4":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Roll = void 0;
const OptionsColor_1 = require("../../OptionsColor");
const RollLight_1 = require("./RollLight");
const Utils_1 = require("../../../../Utils");
const Enums_1 = require("../../../../Enums");
class Roll {
    constructor(){
        this.darken = new RollLight_1.RollLight();
        this.enable = false;
        this.enlighten = new RollLight_1.RollLight();
        this.mode = Enums_1.RollMode.vertical;
        this.speed = 25;
    }
    load(data) {
        if (!data) return;
        if (data.backColor !== undefined) this.backColor = OptionsColor_1.OptionsColor.create(this.backColor, data.backColor);
        this.darken.load(data.darken);
        if (data.enable !== undefined) this.enable = data.enable;
        this.enlighten.load(data.enlighten);
        if (data.mode !== undefined) this.mode = data.mode;
        if (data.speed !== undefined) this.speed = Utils_1.setRangeValue(data.speed);
    }
}
exports.Roll = Roll;

},{"../../OptionsColor":"2UtQV","./RollLight":"jL63g","../../../../Utils":"iU3t1","../../../../Enums":"e5HNg"}],"jL63g":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RollLight = void 0;
class RollLight {
    constructor(){
        this.enable = false;
        this.value = 0;
    }
    load(data) {
        if (!data) return;
        if (data.enable !== undefined) this.enable = data.enable;
        if (data.value !== undefined) this.value = data.value;
    }
}
exports.RollLight = RollLight;

},{}],"gt9I0":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ZIndex = void 0;
const ValueWithRandom_1 = require("../../ValueWithRandom");
class ZIndex extends ValueWithRandom_1.ValueWithRandom {
    constructor(){
        super();
        this.opacityRate = 1;
        this.sizeRate = 1;
        this.velocityRate = 1;
    }
    load(data) {
        super.load(data);
        if (!data) return;
        if (data.opacityRate !== undefined) this.opacityRate = data.opacityRate;
        if (data.sizeRate !== undefined) this.sizeRate = data.sizeRate;
        if (data.velocityRate !== undefined) this.velocityRate = data.velocityRate;
    }
}
exports.ZIndex = ZIndex;

},{"../../ValueWithRandom":"hwYiV"}],"jWk2Q":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Orbit = void 0;
const OrbitRotation_1 = require("./OrbitRotation");
const OptionsColor_1 = require("../../OptionsColor");
const AnimationOptions_1 = require("../../AnimationOptions");
class Orbit {
    constructor(){
        this.animation = new AnimationOptions_1.AnimationOptions();
        this.enable = false;
        this.opacity = 1;
        this.rotation = new OrbitRotation_1.OrbitRotation();
        this.width = 1;
    }
    load(data) {
        if (data === undefined) return;
        this.animation.load(data.animation);
        this.rotation.load(data.rotation);
        if (data.enable !== undefined) this.enable = data.enable;
        if (data.opacity !== undefined) this.opacity = data.opacity;
        if (data.width !== undefined) this.width = data.width;
        if (data.radius !== undefined) this.radius = data.radius;
        if (data.color !== undefined) this.color = OptionsColor_1.OptionsColor.create(this.color, data.color);
    }
}
exports.Orbit = Orbit;

},{"./OrbitRotation":"guPkh","../../OptionsColor":"2UtQV","../../AnimationOptions":"4LJrM"}],"guPkh":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.OrbitRotation = void 0;
const ValueWithRandom_1 = require("../../ValueWithRandom");
class OrbitRotation extends ValueWithRandom_1.ValueWithRandom {
    constructor(){
        super();
        this.value = 45;
        this.random.enable = false;
        this.random.minimumValue = 0;
    }
    load(data) {
        if (data === undefined) return;
        super.load(data);
    }
}
exports.OrbitRotation = OrbitRotation;

},{"../../ValueWithRandom":"hwYiV"}],"gIXVB":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Repulse = void 0;
const ValueWithRandom_1 = require("../../ValueWithRandom");
class Repulse extends ValueWithRandom_1.ValueWithRandom {
    constructor(){
        super();
        this.enabled = false;
        this.distance = 1;
        this.duration = 1;
        this.factor = 1;
        this.speed = 1;
    }
    load(data) {
        super.load(data);
        if (!data) return;
        if (data.enabled !== undefined) this.enabled = data.enabled;
        if (data.distance !== undefined) this.distance = data.distance;
        if (data.duration !== undefined) this.duration = data.duration;
        if (data.factor !== undefined) this.factor = data.factor;
        if (data.speed !== undefined) this.speed = data.speed;
    }
}
exports.Repulse = Repulse;

},{"../../ValueWithRandom":"hwYiV"}],"aSPRo":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.GradientColorOpacityAnimation = exports.GradientAngleAnimation = exports.AnimatableGradientColor = exports.GradientColorOpacity = exports.GradientAngle = exports.AnimatableGradient = void 0;
const Enums_1 = require("../../Enums");
const AnimatableColor_1 = require("./AnimatableColor");
const Utils_1 = require("../../Utils");
class AnimatableGradient {
    constructor(){
        this.angle = new GradientAngle();
        this.colors = [];
        this.type = Enums_1.GradientType.random;
    }
    load(data) {
        if (!data) return;
        this.angle.load(data.angle);
        if (data.colors !== undefined) this.colors = data.colors.map((s)=>{
            const tmp = new AnimatableGradientColor();
            tmp.load(s);
            return tmp;
        });
        if (data.type !== undefined) this.type = data.type;
    }
}
exports.AnimatableGradient = AnimatableGradient;
class GradientAngle {
    constructor(){
        this.value = 0;
        this.animation = new GradientAngleAnimation();
        this.direction = Enums_1.RotateDirection.clockwise;
    }
    load(data) {
        if (!data) return;
        this.animation.load(data.animation);
        if (data.value !== undefined) this.value = data.value;
        if (data.direction !== undefined) this.direction = data.direction;
    }
}
exports.GradientAngle = GradientAngle;
class GradientColorOpacity {
    constructor(){
        this.value = 0;
        this.animation = new GradientColorOpacityAnimation();
    }
    load(data) {
        if (!data) return;
        this.animation.load(data.animation);
        if (data.value !== undefined) this.value = Utils_1.setRangeValue(data.value);
    }
}
exports.GradientColorOpacity = GradientColorOpacity;
class AnimatableGradientColor {
    constructor(){
        this.stop = 0;
        this.value = new AnimatableColor_1.AnimatableColor();
    }
    load(data) {
        if (!data) return;
        if (data.stop !== undefined) this.stop = data.stop;
        this.value = AnimatableColor_1.AnimatableColor.create(this.value, data.value);
        if (data.opacity !== undefined) {
            this.opacity = new GradientColorOpacity();
            if (typeof data.opacity === "number") this.opacity.value = data.opacity;
            else this.opacity.load(data.opacity);
        }
    }
}
exports.AnimatableGradientColor = AnimatableGradientColor;
class GradientAngleAnimation {
    constructor(){
        this.count = 0;
        this.enable = false;
        this.speed = 0;
        this.sync = false;
    }
    load(data) {
        if (!data) return;
        if (data.count !== undefined) this.count = data.count;
        if (data.enable !== undefined) this.enable = data.enable;
        if (data.speed !== undefined) this.speed = data.speed;
        if (data.sync !== undefined) this.sync = data.sync;
    }
}
exports.GradientAngleAnimation = GradientAngleAnimation;
class GradientColorOpacityAnimation {
    constructor(){
        this.count = 0;
        this.enable = false;
        this.speed = 0;
        this.sync = false;
        this.startValue = Enums_1.StartValueType.random;
    }
    load(data) {
        if (!data) return;
        if (data.count !== undefined) this.count = data.count;
        if (data.enable !== undefined) this.enable = data.enable;
        if (data.speed !== undefined) this.speed = data.speed;
        if (data.sync !== undefined) this.sync = data.sync;
        if (data.startValue !== undefined) this.startValue = data.startValue;
    }
}
exports.GradientColorOpacityAnimation = GradientColorOpacityAnimation;

},{"../../Enums":"e5HNg","./AnimatableColor":"lIijz","../../Utils":"iU3t1"}],"5YI4e":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Vector3d = void 0;
const Vector_1 = require("./Vector");
class Vector3d extends Vector_1.Vector {
    constructor(x, y, z){
        super(x, y);
        this.z = z === undefined ? x.z : z;
    }
    static clone(source) {
        return Vector3d.create(source.x, source.y, source.z);
    }
    static create(x, y, z) {
        return new Vector3d(x, y, z);
    }
    add(v) {
        return v instanceof Vector3d ? Vector3d.create(this.x + v.x, this.y + v.y, this.z + v.z) : super.add(v);
    }
    addTo(v) {
        super.addTo(v);
        if (v instanceof Vector3d) this.z += v.z;
    }
    sub(v) {
        return v instanceof Vector3d ? Vector3d.create(this.x - v.x, this.y - v.y, this.z - v.z) : super.sub(v);
    }
    subFrom(v) {
        super.subFrom(v);
        if (v instanceof Vector3d) this.z -= v.z;
    }
    mult(n) {
        return Vector3d.create(this.x * n, this.y * n, this.z * n);
    }
    multTo(n) {
        super.multTo(n);
        this.z *= n;
    }
    div(n) {
        return Vector3d.create(this.x / n, this.y / n, this.z / n);
    }
    divTo(n) {
        super.divTo(n);
        this.z /= n;
    }
    copy() {
        return Vector3d.clone(this);
    }
    setTo(v) {
        super.setTo(v);
        if (v instanceof Vector3d) this.z = v.z;
    }
}
exports.Vector3d = Vector3d;

},{"./Vector":"c55jT"}],"bR9Pf":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.InteractionManager = void 0;
const Utils_1 = require("../Utils");
const Enums_1 = require("../Enums");
class InteractionManager {
    constructor(container){
        this.container = container;
        const interactors = Utils_1.Plugins.getInteractors(container);
        this.externalInteractors = [];
        this.particleInteractors = [];
        for (const interactor of interactors)switch(interactor.type){
            case Enums_1.InteractorType.External:
                this.externalInteractors.push(interactor);
                break;
            case Enums_1.InteractorType.Particles:
                this.particleInteractors.push(interactor);
                break;
        }
    }
    externalInteract(delta) {
        for (const interactor of this.externalInteractors)if (interactor.isEnabled()) interactor.interact(delta);
    }
    particlesInteract(particle, delta) {
        for (const interactor of this.externalInteractors)interactor.reset(particle);
        for (const interactor1 of this.particleInteractors)if (interactor1.isEnabled(particle)) interactor1.interact(particle, delta);
    }
}
exports.InteractionManager = InteractionManager;

},{"../Utils":"iU3t1","../Enums":"e5HNg"}],"hid9N":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Mover = void 0;
const Utils_1 = require("../../Utils");
const Enums_1 = require("../../Enums");
function applyDistance(particle) {
    const initialPosition = particle.initialPosition;
    const { dx , dy  } = Utils_1.getDistances(initialPosition, particle.position);
    const dxFixed = Math.abs(dx), dyFixed = Math.abs(dy);
    const hDistance = particle.retina.maxDistance.horizontal;
    const vDistance = particle.retina.maxDistance.vertical;
    if (!hDistance && !vDistance) return;
    if ((hDistance && dxFixed >= hDistance || vDistance && dyFixed >= vDistance) && !particle.misplaced) {
        particle.misplaced = !!hDistance && dxFixed > hDistance || !!vDistance && dyFixed > vDistance;
        if (hDistance) particle.velocity.x = particle.velocity.y / 2 - particle.velocity.x;
        if (vDistance) particle.velocity.y = particle.velocity.x / 2 - particle.velocity.y;
    } else if ((!hDistance || dxFixed < hDistance) && (!vDistance || dyFixed < vDistance) && particle.misplaced) particle.misplaced = false;
    else if (particle.misplaced) {
        const pos = particle.position, vel = particle.velocity;
        if (hDistance && (pos.x < initialPosition.x && vel.x < 0 || pos.x > initialPosition.x && vel.x > 0)) vel.x *= -Math.random();
        if (vDistance && (pos.y < initialPosition.y && vel.y < 0 || pos.y > initialPosition.y && vel.y > 0)) vel.y *= -Math.random();
    }
}
class Mover {
    constructor(container){
        this.container = container;
    }
    move(particle, delta) {
        if (particle.destroyed) return;
        this.moveParticle(particle, delta);
        this.moveParallax(particle);
    }
    moveParticle(particle, delta) {
        var _a, _b, _c;
        var _d, _e;
        const particleOptions = particle.options;
        const moveOptions = particleOptions.move;
        if (!moveOptions.enable) return;
        const container = this.container, slowFactor = this.getProximitySpeedFactor(particle), baseSpeed = ((_a = (_d = particle.retina).moveSpeed) !== null && _a !== void 0 ? _a : _d.moveSpeed = Utils_1.getRangeValue(moveOptions.speed) * container.retina.pixelRatio) * container.retina.reduceFactor, moveDrift = (_b = (_e = particle.retina).moveDrift) !== null && _b !== void 0 ? _b : _e.moveDrift = Utils_1.getRangeValue(particle.options.move.drift) * container.retina.pixelRatio, maxSize = Utils_1.getRangeMax(particleOptions.size.value) * container.retina.pixelRatio, sizeFactor = moveOptions.size ? particle.getRadius() / maxSize : 1, diffFactor = 2, speedFactor = sizeFactor * slowFactor * (delta.factor || 1) / diffFactor, moveSpeed = baseSpeed * speedFactor;
        this.applyPath(particle, delta);
        const gravityOptions = moveOptions.gravity;
        const gravityFactor = gravityOptions.enable && gravityOptions.inverse ? -1 : 1;
        if (gravityOptions.enable && moveSpeed) particle.velocity.y += gravityFactor * (gravityOptions.acceleration * delta.factor) / (60 * moveSpeed);
        if (moveDrift && moveSpeed) particle.velocity.x += moveDrift * delta.factor / (60 * moveSpeed);
        const decay = particle.moveDecay;
        if (decay != 1) particle.velocity.multTo(decay);
        const velocity = particle.velocity.mult(moveSpeed);
        const maxSpeed = (_c = particle.retina.maxSpeed) !== null && _c !== void 0 ? _c : container.retina.maxSpeed;
        if (gravityOptions.enable && gravityOptions.maxSpeed > 0 && (!gravityOptions.inverse && velocity.y >= 0 && velocity.y >= maxSpeed || gravityOptions.inverse && velocity.y <= 0 && velocity.y <= -maxSpeed)) {
            velocity.y = gravityFactor * maxSpeed;
            if (moveSpeed) particle.velocity.y = velocity.y / moveSpeed;
        }
        const zIndexOptions = particle.options.zIndex, zVelocityFactor = (1 - particle.zIndexFactor) ** zIndexOptions.velocityRate;
        if (moveOptions.spin.enable) this.spin(particle, moveSpeed);
        else {
            if (zVelocityFactor != 1) velocity.multTo(zVelocityFactor);
            particle.position.addTo(velocity);
            if (moveOptions.vibrate) {
                particle.position.x += Math.sin(particle.position.x * Math.cos(particle.position.y));
                particle.position.y += Math.cos(particle.position.y * Math.sin(particle.position.x));
            }
        }
        applyDistance(particle);
    }
    spin(particle, moveSpeed) {
        const container = this.container;
        if (!particle.spin) return;
        const updateFunc = {
            x: particle.spin.direction === Enums_1.RotateDirection.clockwise ? Math.cos : Math.sin,
            y: particle.spin.direction === Enums_1.RotateDirection.clockwise ? Math.sin : Math.cos
        };
        particle.position.x = particle.spin.center.x + particle.spin.radius * updateFunc.x(particle.spin.angle);
        particle.position.y = particle.spin.center.y + particle.spin.radius * updateFunc.y(particle.spin.angle);
        particle.spin.radius += particle.spin.acceleration;
        const maxCanvasSize = Math.max(container.canvas.size.width, container.canvas.size.height);
        if (particle.spin.radius > maxCanvasSize / 2) {
            particle.spin.radius = maxCanvasSize / 2;
            particle.spin.acceleration *= -1;
        } else if (particle.spin.radius < 0) {
            particle.spin.radius = 0;
            particle.spin.acceleration *= -1;
        }
        particle.spin.angle += moveSpeed / 100 * (1 - particle.spin.radius / maxCanvasSize);
    }
    applyPath(particle, delta) {
        const particlesOptions = particle.options;
        const pathOptions = particlesOptions.move.path;
        const pathEnabled = pathOptions.enable;
        if (!pathEnabled) return;
        const container = this.container;
        if (particle.lastPathTime <= particle.pathDelay) {
            particle.lastPathTime += delta.value;
            return;
        }
        const path = container.pathGenerator.generate(particle);
        particle.velocity.addTo(path);
        if (pathOptions.clamp) {
            particle.velocity.x = Utils_1.clamp(particle.velocity.x, -1, 1);
            particle.velocity.y = Utils_1.clamp(particle.velocity.y, -1, 1);
        }
        particle.lastPathTime -= particle.pathDelay;
    }
    moveParallax(particle) {
        const container = this.container;
        const options = container.actualOptions;
        if (Utils_1.isSsr() || !options.interactivity.events.onHover.parallax.enable) return;
        const parallaxForce = options.interactivity.events.onHover.parallax.force;
        const mousePos = container.interactivity.mouse.position;
        if (!mousePos) return;
        const canvasCenter = {
            x: container.canvas.size.width / 2,
            y: container.canvas.size.height / 2
        };
        const parallaxSmooth = options.interactivity.events.onHover.parallax.smooth;
        const factor = particle.getRadius() / parallaxForce;
        const tmp = {
            x: (mousePos.x - canvasCenter.x) * factor,
            y: (mousePos.y - canvasCenter.y) * factor
        };
        particle.offset.x += (tmp.x - particle.offset.x) / parallaxSmooth;
        particle.offset.y += (tmp.y - particle.offset.y) / parallaxSmooth;
    }
    getProximitySpeedFactor(particle) {
        const container = this.container;
        const options = container.actualOptions;
        const active = Utils_1.isInArray(Enums_1.HoverMode.slow, options.interactivity.events.onHover.mode);
        if (!active) return 1;
        const mousePos = this.container.interactivity.mouse.position;
        if (!mousePos) return 1;
        const particlePos = particle.getPosition();
        const dist = Utils_1.getDistance(mousePos, particlePos);
        const radius = container.retina.slowModeRadius;
        if (dist > radius) return 1;
        const proximityFactor = dist / radius || 0;
        const slowFactor = options.interactivity.modes.slow.factor;
        return proximityFactor / slowFactor;
    }
}
exports.Mover = Mover;

},{"../../Utils":"iU3t1","../../Enums":"e5HNg"}],"8DR5L":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Retina = void 0;
const Utils_1 = require("../Utils");
class Retina {
    constructor(container){
        this.container = container;
    }
    init() {
        const container = this.container;
        const options = container.actualOptions;
        this.pixelRatio = !options.detectRetina || Utils_1.isSsr() ? 1 : window.devicePixelRatio;
        const motionOptions = this.container.actualOptions.motion;
        if (motionOptions && (motionOptions.disable || motionOptions.reduce.value)) {
            if (Utils_1.isSsr() || typeof matchMedia === "undefined" || !matchMedia) this.reduceFactor = 1;
            else {
                const mediaQuery = matchMedia("(prefers-reduced-motion: reduce)");
                if (mediaQuery) {
                    this.handleMotionChange(mediaQuery);
                    const handleChange = ()=>{
                        this.handleMotionChange(mediaQuery);
                        container.refresh().catch(()=>{
                        });
                    };
                    if (mediaQuery.addEventListener !== undefined) mediaQuery.addEventListener("change", handleChange);
                    else if (mediaQuery.addListener !== undefined) mediaQuery.addListener(handleChange);
                }
            }
        } else this.reduceFactor = 1;
        const ratio = this.pixelRatio;
        if (container.canvas.element) {
            const element = container.canvas.element;
            container.canvas.size.width = element.offsetWidth * ratio;
            container.canvas.size.height = element.offsetHeight * ratio;
        }
        const particles = options.particles;
        this.attractDistance = particles.move.attract.distance * ratio;
        this.linksDistance = particles.links.distance * ratio;
        this.linksWidth = particles.links.width * ratio;
        this.sizeAnimationSpeed = particles.size.animation.speed * ratio;
        this.maxSpeed = particles.move.gravity.maxSpeed * ratio;
        if (particles.orbit.radius !== undefined) this.orbitRadius = particles.orbit.radius * this.container.retina.pixelRatio;
        const modes = options.interactivity.modes;
        this.connectModeDistance = modes.connect.distance * ratio;
        this.connectModeRadius = modes.connect.radius * ratio;
        this.grabModeDistance = modes.grab.distance * ratio;
        this.repulseModeDistance = modes.repulse.distance * ratio;
        this.bounceModeDistance = modes.bounce.distance * ratio;
        this.attractModeDistance = modes.attract.distance * ratio;
        this.slowModeRadius = modes.slow.radius * ratio;
        this.bubbleModeDistance = modes.bubble.distance * ratio;
        if (modes.bubble.size) this.bubbleModeSize = modes.bubble.size * ratio;
    }
    initParticle(particle) {
        const options = particle.options;
        const ratio = this.pixelRatio;
        const moveDistance = options.move.distance;
        const props = particle.retina;
        props.attractDistance = options.move.attract.distance * ratio;
        props.linksDistance = options.links.distance * ratio;
        props.linksWidth = options.links.width * ratio;
        props.moveDrift = Utils_1.getRangeValue(options.move.drift) * ratio;
        props.moveSpeed = Utils_1.getRangeValue(options.move.speed) * ratio;
        props.sizeAnimationSpeed = options.size.animation.speed * ratio;
        if (particle.spin) props.spinAcceleration = Utils_1.getRangeValue(options.move.spin.acceleration) * ratio;
        const maxDistance = props.maxDistance;
        maxDistance.horizontal = moveDistance.horizontal !== undefined ? moveDistance.horizontal * ratio : undefined;
        maxDistance.vertical = moveDistance.vertical !== undefined ? moveDistance.vertical * ratio : undefined;
        props.maxSpeed = options.move.gravity.maxSpeed * ratio;
    }
    handleMotionChange(mediaQuery) {
        const options = this.container.actualOptions;
        if (mediaQuery.matches) {
            const motion = options.motion;
            this.reduceFactor = motion.disable ? 0 : motion.reduce.value ? 1 / motion.reduce.factor : 1;
        } else this.reduceFactor = 1;
    }
}
exports.Retina = Retina;

},{"../Utils":"iU3t1"}],"b1PYj":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.FrameManager = void 0;
class FrameManager {
    constructor(container){
        this.container = container;
    }
    nextFrame(timestamp) {
        var _a;
        try {
            const container = this.container;
            if (container.lastFrameTime !== undefined && timestamp < container.lastFrameTime + 1000 / container.fpsLimit) {
                container.draw(false);
                return;
            }
            (_a = container.lastFrameTime) !== null && _a !== void 0 || (container.lastFrameTime = timestamp);
            const deltaValue = timestamp - container.lastFrameTime;
            const delta = {
                value: deltaValue,
                factor: 60 * deltaValue / 1000
            };
            container.lifeTime += delta.value;
            container.lastFrameTime = timestamp;
            if (deltaValue > 1000) {
                container.draw(false);
                return;
            }
            container.particles.draw(delta);
            if (container.duration > 0 && container.lifeTime > container.duration) {
                container.destroy();
                return;
            }
            if (container.getAnimationStatus()) container.draw(false);
        } catch (e) {
            console.error("tsParticles error in animation loop", e);
        }
    }
}
exports.FrameManager = FrameManager;

},{}],"i9WSN":[function(require,module,exports) {
"use strict";
var __classPrivateFieldGet = this && this.__classPrivateFieldGet || function(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Options_instances, _Options_findDefaultTheme;
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Options = void 0;
const Interactivity_1 = require("./Interactivity/Interactivity");
const ParticlesOptions_1 = require("./Particles/ParticlesOptions");
const BackgroundMask_1 = require("./BackgroundMask/BackgroundMask");
const Background_1 = require("./Background/Background");
const Utils_1 = require("../../Utils");
const Theme_1 = require("./Theme/Theme");
const Enums_1 = require("../../Enums");
const FullScreen_1 = require("./FullScreen/FullScreen");
const Motion_1 = require("./Motion/Motion");
const ManualParticle_1 = require("./ManualParticle");
const Responsive_1 = require("./Responsive");
class Options {
    constructor(){
        _Options_instances.add(this);
        this.autoPlay = true;
        this.background = new Background_1.Background();
        this.backgroundMask = new BackgroundMask_1.BackgroundMask();
        this.fullScreen = new FullScreen_1.FullScreen();
        this.detectRetina = true;
        this.duration = 0;
        this.fpsLimit = 60;
        this.interactivity = new Interactivity_1.Interactivity();
        this.manualParticles = [];
        this.motion = new Motion_1.Motion();
        this.particles = new ParticlesOptions_1.ParticlesOptions();
        this.pauseOnBlur = true;
        this.pauseOnOutsideViewport = true;
        this.responsive = [];
        this.themes = [];
        this.zLayers = 100;
    }
    get fps_limit() {
        return this.fpsLimit;
    }
    set fps_limit(value) {
        this.fpsLimit = value;
    }
    get retina_detect() {
        return this.detectRetina;
    }
    set retina_detect(value) {
        this.detectRetina = value;
    }
    get backgroundMode() {
        return this.fullScreen;
    }
    set backgroundMode(value) {
        this.fullScreen.load(value);
    }
    load(data) {
        var _a, _b, _c, _d, _e;
        if (data === undefined) return;
        if (data.preset !== undefined) {
            if (data.preset instanceof Array) for (const preset of data.preset)this.importPreset(preset);
            else this.importPreset(data.preset);
        }
        if (data.autoPlay !== undefined) this.autoPlay = data.autoPlay;
        const detectRetina = (_a = data.detectRetina) !== null && _a !== void 0 ? _a : data.retina_detect;
        if (detectRetina !== undefined) this.detectRetina = detectRetina;
        if (data.duration !== undefined) this.duration = data.duration;
        const fpsLimit = (_b = data.fpsLimit) !== null && _b !== void 0 ? _b : data.fps_limit;
        if (fpsLimit !== undefined) this.fpsLimit = fpsLimit;
        if (data.pauseOnBlur !== undefined) this.pauseOnBlur = data.pauseOnBlur;
        if (data.pauseOnOutsideViewport !== undefined) this.pauseOnOutsideViewport = data.pauseOnOutsideViewport;
        if (data.zLayers !== undefined) this.zLayers = data.zLayers;
        this.background.load(data.background);
        const fullScreen = (_c = data.fullScreen) !== null && _c !== void 0 ? _c : data.backgroundMode;
        if (typeof fullScreen === "boolean") this.fullScreen.enable = fullScreen;
        else this.fullScreen.load(fullScreen);
        this.backgroundMask.load(data.backgroundMask);
        this.interactivity.load(data.interactivity);
        if (data.manualParticles !== undefined) this.manualParticles = data.manualParticles.map((t)=>{
            const tmp = new ManualParticle_1.ManualParticle();
            tmp.load(t);
            return tmp;
        });
        this.motion.load(data.motion);
        this.particles.load(data.particles);
        Utils_1.Plugins.loadOptions(this, data);
        if (data.responsive !== undefined) for (const responsive of data.responsive){
            const optResponsive = new Responsive_1.Responsive();
            optResponsive.load(responsive);
            this.responsive.push(optResponsive);
        }
        this.responsive.sort((a, b)=>a.maxWidth - b.maxWidth
        );
        if (data.themes !== undefined) for (const theme of data.themes){
            const optTheme = new Theme_1.Theme();
            optTheme.load(theme);
            this.themes.push(optTheme);
        }
        this.defaultDarkTheme = (_d = __classPrivateFieldGet(this, _Options_instances, "m", _Options_findDefaultTheme).call(this, Enums_1.ThemeMode.dark)) === null || _d === void 0 ? void 0 : _d.name;
        this.defaultLightTheme = (_e = __classPrivateFieldGet(this, _Options_instances, "m", _Options_findDefaultTheme).call(this, Enums_1.ThemeMode.light)) === null || _e === void 0 ? void 0 : _e.name;
    }
    setTheme(name) {
        if (name) {
            const chosenTheme = this.themes.find((theme)=>theme.name === name
            );
            if (chosenTheme) this.load(chosenTheme.options);
        } else {
            const mediaMatch = typeof matchMedia !== "undefined" && matchMedia("(prefers-color-scheme: dark)"), clientDarkMode = mediaMatch && mediaMatch.matches, defaultTheme = __classPrivateFieldGet(this, _Options_instances, "m", _Options_findDefaultTheme).call(this, clientDarkMode ? Enums_1.ThemeMode.dark : Enums_1.ThemeMode.light);
            if (defaultTheme) this.load(defaultTheme.options);
        }
    }
    setResponsive(width, pxRatio, defaultOptions) {
        this.load(defaultOptions);
        const responsiveOptions = this.responsive.find((t)=>t.maxWidth * pxRatio > width
        );
        this.load(responsiveOptions === null || responsiveOptions === void 0 ? void 0 : responsiveOptions.options);
        return responsiveOptions === null || responsiveOptions === void 0 ? void 0 : responsiveOptions.maxWidth;
    }
    importPreset(preset) {
        this.load(Utils_1.Plugins.getPreset(preset));
    }
}
exports.Options = Options;
_Options_instances = new WeakSet(), _Options_findDefaultTheme = function _Options_findDefaultTheme(mode) {
    var _a;
    return (_a = this.themes.find((theme)=>theme.default.value && theme.default.mode === mode
    )) !== null && _a !== void 0 ? _a : this.themes.find((theme)=>theme.default.value && theme.default.mode === Enums_1.ThemeMode.any
    );
};

},{"./Interactivity/Interactivity":"3tu54","./Particles/ParticlesOptions":"7lNRz","./BackgroundMask/BackgroundMask":"eeNyb","./Background/Background":"lYG0W","../../Utils":"iU3t1","./Theme/Theme":"dIsgA","../../Enums":"e5HNg","./FullScreen/FullScreen":"8j1Im","./Motion/Motion":"2omWX","./ManualParticle":"grDGm","./Responsive":"TXWYU"}],"3tu54":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Interactivity = void 0;
const Enums_1 = require("../../../Enums");
const Events_1 = require("./Events/Events");
const Modes_1 = require("./Modes/Modes");
class Interactivity {
    constructor(){
        this.detectsOn = Enums_1.InteractivityDetect.canvas;
        this.events = new Events_1.Events();
        this.modes = new Modes_1.Modes();
    }
    get detect_on() {
        return this.detectsOn;
    }
    set detect_on(value) {
        this.detectsOn = value;
    }
    load(data) {
        var _a, _b, _c;
        if (data === undefined) return;
        const detectsOn = (_a = data.detectsOn) !== null && _a !== void 0 ? _a : data.detect_on;
        if (detectsOn !== undefined) this.detectsOn = detectsOn;
        this.events.load(data.events);
        this.modes.load(data.modes);
        if (((_c = (_b = data.modes) === null || _b === void 0 ? void 0 : _b.slow) === null || _c === void 0 ? void 0 : _c.active) === true) {
            if (this.events.onHover.mode instanceof Array) {
                if (this.events.onHover.mode.indexOf(Enums_1.HoverMode.slow) < 0) this.events.onHover.mode.push(Enums_1.HoverMode.slow);
            } else if (this.events.onHover.mode !== Enums_1.HoverMode.slow) this.events.onHover.mode = [
                this.events.onHover.mode,
                Enums_1.HoverMode.slow
            ];
        }
    }
}
exports.Interactivity = Interactivity;

},{"../../../Enums":"e5HNg","./Events/Events":"6gSdD","./Modes/Modes":"2X3c3"}],"6gSdD":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Events = void 0;
const ClickEvent_1 = require("./ClickEvent");
const DivEvent_1 = require("./DivEvent");
const HoverEvent_1 = require("./HoverEvent");
class Events {
    constructor(){
        this.onClick = new ClickEvent_1.ClickEvent();
        this.onDiv = new DivEvent_1.DivEvent();
        this.onHover = new HoverEvent_1.HoverEvent();
        this.resize = true;
    }
    get onclick() {
        return this.onClick;
    }
    set onclick(value) {
        this.onClick = value;
    }
    get ondiv() {
        return this.onDiv;
    }
    set ondiv(value) {
        this.onDiv = value;
    }
    get onhover() {
        return this.onHover;
    }
    set onhover(value) {
        this.onHover = value;
    }
    load(data) {
        var _a, _b, _c;
        if (data === undefined) return;
        this.onClick.load((_a = data.onClick) !== null && _a !== void 0 ? _a : data.onclick);
        const onDiv = (_b = data.onDiv) !== null && _b !== void 0 ? _b : data.ondiv;
        if (onDiv !== undefined) {
            if (onDiv instanceof Array) this.onDiv = onDiv.map((div)=>{
                const tmp = new DivEvent_1.DivEvent();
                tmp.load(div);
                return tmp;
            });
            else {
                this.onDiv = new DivEvent_1.DivEvent();
                this.onDiv.load(onDiv);
            }
        }
        this.onHover.load((_c = data.onHover) !== null && _c !== void 0 ? _c : data.onhover);
        if (data.resize !== undefined) this.resize = data.resize;
    }
}
exports.Events = Events;

},{"./ClickEvent":"1Jan1","./DivEvent":"ghac5","./HoverEvent":"eNxWx"}],"1Jan1":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ClickEvent = void 0;
class ClickEvent {
    constructor(){
        this.enable = false;
        this.mode = [];
    }
    load(data) {
        if (data === undefined) return;
        if (data.enable !== undefined) this.enable = data.enable;
        if (data.mode !== undefined) this.mode = data.mode;
    }
}
exports.ClickEvent = ClickEvent;

},{}],"ghac5":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DivEvent = void 0;
const Enums_1 = require("../../../../Enums");
class DivEvent {
    constructor(){
        this.selectors = [];
        this.enable = false;
        this.mode = [];
        this.type = Enums_1.DivType.circle;
    }
    get elementId() {
        return this.ids;
    }
    set elementId(value) {
        this.ids = value;
    }
    get el() {
        return this.elementId;
    }
    set el(value) {
        this.elementId = value;
    }
    get ids() {
        return this.selectors instanceof Array ? this.selectors.map((t)=>t.replace("#", "")
        ) : this.selectors.replace("#", "");
    }
    set ids(value) {
        this.selectors = value instanceof Array ? value.map((t)=>`#${t}`
        ) : `#${value}`;
    }
    load(data) {
        var _a, _b;
        if (data === undefined) return;
        const ids = (_b = (_a = data.ids) !== null && _a !== void 0 ? _a : data.elementId) !== null && _b !== void 0 ? _b : data.el;
        if (ids !== undefined) this.ids = ids;
        if (data.selectors !== undefined) this.selectors = data.selectors;
        if (data.enable !== undefined) this.enable = data.enable;
        if (data.mode !== undefined) this.mode = data.mode;
        if (data.type !== undefined) this.type = data.type;
    }
}
exports.DivEvent = DivEvent;

},{"../../../../Enums":"e5HNg"}],"eNxWx":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.HoverEvent = void 0;
const Parallax_1 = require("./Parallax");
class HoverEvent {
    constructor(){
        this.enable = false;
        this.mode = [];
        this.parallax = new Parallax_1.Parallax();
    }
    load(data) {
        if (data === undefined) return;
        if (data.enable !== undefined) this.enable = data.enable;
        if (data.mode !== undefined) this.mode = data.mode;
        this.parallax.load(data.parallax);
    }
}
exports.HoverEvent = HoverEvent;

},{"./Parallax":"3tP8E"}],"3tP8E":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Parallax = void 0;
class Parallax {
    constructor(){
        this.enable = false;
        this.force = 2;
        this.smooth = 10;
    }
    load(data) {
        if (data === undefined) return;
        if (data.enable !== undefined) this.enable = data.enable;
        if (data.force !== undefined) this.force = data.force;
        if (data.smooth !== undefined) this.smooth = data.smooth;
    }
}
exports.Parallax = Parallax;

},{}],"2X3c3":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Modes = void 0;
const Bubble_1 = require("./Bubble");
const Connect_1 = require("./Connect");
const Grab_1 = require("./Grab");
const Remove_1 = require("./Remove");
const Push_1 = require("./Push");
const Repulse_1 = require("./Repulse");
const Slow_1 = require("./Slow");
const Trail_1 = require("./Trail");
const Attract_1 = require("./Attract");
const Light_1 = require("./Light");
const Bounce_1 = require("./Bounce");
class Modes {
    constructor(){
        this.attract = new Attract_1.Attract();
        this.bounce = new Bounce_1.Bounce();
        this.bubble = new Bubble_1.Bubble();
        this.connect = new Connect_1.Connect();
        this.grab = new Grab_1.Grab();
        this.light = new Light_1.Light();
        this.push = new Push_1.Push();
        this.remove = new Remove_1.Remove();
        this.repulse = new Repulse_1.Repulse();
        this.slow = new Slow_1.Slow();
        this.trail = new Trail_1.Trail();
    }
    load(data) {
        if (data === undefined) return;
        this.attract.load(data.attract);
        this.bubble.load(data.bubble);
        this.connect.load(data.connect);
        this.grab.load(data.grab);
        this.light.load(data.light);
        this.push.load(data.push);
        this.remove.load(data.remove);
        this.repulse.load(data.repulse);
        this.slow.load(data.slow);
        this.trail.load(data.trail);
    }
}
exports.Modes = Modes;

},{"./Bubble":"cfyER","./Connect":"bWeyB","./Grab":"6VRyN","./Remove":"emLbL","./Push":"f4BW1","./Repulse":"hksOi","./Slow":"3lZzq","./Trail":"3d077","./Attract":"wzW8K","./Light":"hqbQ7","./Bounce":"cqNX4"}],"cfyER":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Bubble = void 0;
const BubbleDiv_1 = require("./BubbleDiv");
const BubbleBase_1 = require("./BubbleBase");
class Bubble extends BubbleBase_1.BubbleBase {
    load(data) {
        super.load(data);
        if (!(data !== undefined && data.divs !== undefined)) return;
        if (data.divs instanceof Array) this.divs = data.divs.map((s)=>{
            const tmp = new BubbleDiv_1.BubbleDiv();
            tmp.load(s);
            return tmp;
        });
        else {
            if (this.divs instanceof Array || !this.divs) this.divs = new BubbleDiv_1.BubbleDiv();
            this.divs.load(data.divs);
        }
    }
}
exports.Bubble = Bubble;

},{"./BubbleDiv":"iKAfv","./BubbleBase":"hiR0u"}],"iKAfv":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.BubbleDiv = void 0;
const BubbleBase_1 = require("./BubbleBase");
class BubbleDiv extends BubbleBase_1.BubbleBase {
    constructor(){
        super();
        this.selectors = [];
    }
    get ids() {
        return this.selectors instanceof Array ? this.selectors.map((t)=>t.replace("#", "")
        ) : this.selectors.replace("#", "");
    }
    set ids(value) {
        this.selectors = value instanceof Array ? value.map((t)=>`#${t}`
        ) : `#${value}`;
    }
    load(data) {
        super.load(data);
        if (data === undefined) return;
        if (data.ids !== undefined) this.ids = data.ids;
        if (data.selectors !== undefined) this.selectors = data.selectors;
    }
}
exports.BubbleDiv = BubbleDiv;

},{"./BubbleBase":"hiR0u"}],"hiR0u":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.BubbleBase = void 0;
const OptionsColor_1 = require("../../OptionsColor");
class BubbleBase {
    constructor(){
        this.distance = 200;
        this.duration = 0.4;
        this.mix = false;
    }
    load(data) {
        if (data === undefined) return;
        if (data.distance !== undefined) this.distance = data.distance;
        if (data.duration !== undefined) this.duration = data.duration;
        if (data.mix !== undefined) this.mix = data.mix;
        if (data.opacity !== undefined) this.opacity = data.opacity;
        if (data.color !== undefined) {
            if (data.color instanceof Array) this.color = data.color.map((s)=>OptionsColor_1.OptionsColor.create(undefined, s)
            );
            else {
                if (this.color instanceof Array) this.color = new OptionsColor_1.OptionsColor();
                this.color = OptionsColor_1.OptionsColor.create(this.color, data.color);
            }
        }
        if (data.size !== undefined) this.size = data.size;
    }
}
exports.BubbleBase = BubbleBase;

},{"../../OptionsColor":"2UtQV"}],"bWeyB":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Connect = void 0;
const ConnectLinks_1 = require("./ConnectLinks");
class Connect {
    constructor(){
        this.distance = 80;
        this.links = new ConnectLinks_1.ConnectLinks();
        this.radius = 60;
    }
    get line_linked() {
        return this.links;
    }
    set line_linked(value) {
        this.links = value;
    }
    get lineLinked() {
        return this.links;
    }
    set lineLinked(value) {
        this.links = value;
    }
    load(data) {
        var _a, _b;
        if (data === undefined) return;
        if (data.distance !== undefined) this.distance = data.distance;
        this.links.load((_b = (_a = data.links) !== null && _a !== void 0 ? _a : data.lineLinked) !== null && _b !== void 0 ? _b : data.line_linked);
        if (data.radius !== undefined) this.radius = data.radius;
    }
}
exports.Connect = Connect;

},{"./ConnectLinks":"fbg5o"}],"fbg5o":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ConnectLinks = void 0;
class ConnectLinks {
    constructor(){
        this.opacity = 0.5;
    }
    load(data) {
        if (!(data !== undefined && data.opacity !== undefined)) return;
        this.opacity = data.opacity;
    }
}
exports.ConnectLinks = ConnectLinks;

},{}],"6VRyN":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Grab = void 0;
const GrabLinks_1 = require("./GrabLinks");
class Grab {
    constructor(){
        this.distance = 100;
        this.links = new GrabLinks_1.GrabLinks();
    }
    get line_linked() {
        return this.links;
    }
    set line_linked(value) {
        this.links = value;
    }
    get lineLinked() {
        return this.links;
    }
    set lineLinked(value) {
        this.links = value;
    }
    load(data) {
        var _a, _b;
        if (data === undefined) return;
        if (data.distance !== undefined) this.distance = data.distance;
        this.links.load((_b = (_a = data.links) !== null && _a !== void 0 ? _a : data.lineLinked) !== null && _b !== void 0 ? _b : data.line_linked);
    }
}
exports.Grab = Grab;

},{"./GrabLinks":"lB03c"}],"lB03c":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.GrabLinks = void 0;
const OptionsColor_1 = require("../../OptionsColor");
class GrabLinks {
    constructor(){
        this.blink = false;
        this.consent = false;
        this.opacity = 1;
    }
    load(data) {
        if (data === undefined) return;
        if (data.blink !== undefined) this.blink = data.blink;
        if (data.color !== undefined) this.color = OptionsColor_1.OptionsColor.create(this.color, data.color);
        if (data.consent !== undefined) this.consent = data.consent;
        if (data.opacity !== undefined) this.opacity = data.opacity;
    }
}
exports.GrabLinks = GrabLinks;

},{"../../OptionsColor":"2UtQV"}],"emLbL":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Remove = void 0;
class Remove {
    constructor(){
        this.quantity = 2;
    }
    get particles_nb() {
        return this.quantity;
    }
    set particles_nb(value) {
        this.quantity = value;
    }
    load(data) {
        var _a;
        if (data === undefined) return;
        const quantity = (_a = data.quantity) !== null && _a !== void 0 ? _a : data.particles_nb;
        if (quantity !== undefined) this.quantity = quantity;
    }
}
exports.Remove = Remove;

},{}],"f4BW1":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Push = void 0;
class Push {
    constructor(){
        this.default = true;
        this.groups = [];
        this.quantity = 4;
    }
    get particles_nb() {
        return this.quantity;
    }
    set particles_nb(value) {
        this.quantity = value;
    }
    load(data) {
        var _a;
        if (data === undefined) return;
        if (data.default !== undefined) this.default = data.default;
        if (data.groups !== undefined) this.groups = data.groups.map((t)=>t
        );
        if (!this.groups.length) this.default = true;
        const quantity = (_a = data.quantity) !== null && _a !== void 0 ? _a : data.particles_nb;
        if (quantity !== undefined) this.quantity = quantity;
    }
}
exports.Push = Push;

},{}],"hksOi":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Repulse = void 0;
const RepulseDiv_1 = require("./RepulseDiv");
const RepulseBase_1 = require("./RepulseBase");
class Repulse extends RepulseBase_1.RepulseBase {
    load(data) {
        super.load(data);
        if ((data === null || data === void 0 ? void 0 : data.divs) === undefined) return;
        if (data.divs instanceof Array) this.divs = data.divs.map((s)=>{
            const tmp = new RepulseDiv_1.RepulseDiv();
            tmp.load(s);
            return tmp;
        });
        else {
            if (this.divs instanceof Array || !this.divs) this.divs = new RepulseDiv_1.RepulseDiv();
            this.divs.load(data.divs);
        }
    }
}
exports.Repulse = Repulse;

},{"./RepulseDiv":"aceze","./RepulseBase":"iBGET"}],"aceze":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RepulseDiv = void 0;
const RepulseBase_1 = require("./RepulseBase");
class RepulseDiv extends RepulseBase_1.RepulseBase {
    constructor(){
        super();
        this.selectors = [];
    }
    get ids() {
        if (this.selectors instanceof Array) return this.selectors.map((t)=>t.replace("#", "")
        );
        else return this.selectors.replace("#", "");
    }
    set ids(value) {
        if (value instanceof Array) this.selectors = value.map(()=>`#${value}`
        );
        else this.selectors = `#${value}`;
    }
    load(data) {
        super.load(data);
        if (data === undefined) return;
        if (data.ids !== undefined) this.ids = data.ids;
        if (data.selectors !== undefined) this.selectors = data.selectors;
    }
}
exports.RepulseDiv = RepulseDiv;

},{"./RepulseBase":"iBGET"}],"iBGET":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RepulseBase = void 0;
const Enums_1 = require("../../../../Enums");
class RepulseBase {
    constructor(){
        this.distance = 200;
        this.duration = 0.4;
        this.factor = 100;
        this.speed = 1;
        this.maxSpeed = 50;
        this.easing = Enums_1.EasingType.easeOutQuad;
    }
    load(data) {
        if (!data) return;
        if (data.distance !== undefined) this.distance = data.distance;
        if (data.duration !== undefined) this.duration = data.duration;
        if (data.easing !== undefined) this.easing = data.easing;
        if (data.factor !== undefined) this.factor = data.factor;
        if (data.speed !== undefined) this.speed = data.speed;
        if (data.maxSpeed !== undefined) this.maxSpeed = data.maxSpeed;
    }
}
exports.RepulseBase = RepulseBase;

},{"../../../../Enums":"e5HNg"}],"3lZzq":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Slow = void 0;
class Slow {
    constructor(){
        this.factor = 3;
        this.radius = 200;
    }
    get active() {
        return false;
    }
    set active(_value) {
    }
    load(data) {
        if (data === undefined) return;
        if (data.factor !== undefined) this.factor = data.factor;
        if (data.radius !== undefined) this.radius = data.radius;
    }
}
exports.Slow = Slow;

},{}],"3d077":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Trail = void 0;
const Utils_1 = require("../../../../Utils");
class Trail {
    constructor(){
        this.delay = 1;
        this.pauseOnStop = false;
        this.quantity = 1;
    }
    load(data) {
        if (data === undefined) return;
        if (data.delay !== undefined) this.delay = data.delay;
        if (data.quantity !== undefined) this.quantity = data.quantity;
        if (data.particles !== undefined) this.particles = Utils_1.deepExtend({
        }, data.particles);
        if (data.pauseOnStop !== undefined) this.pauseOnStop = data.pauseOnStop;
    }
}
exports.Trail = Trail;

},{"../../../../Utils":"iU3t1"}],"wzW8K":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Attract = void 0;
const Enums_1 = require("../../../../Enums");
class Attract {
    constructor(){
        this.distance = 200;
        this.duration = 0.4;
        this.easing = Enums_1.EasingType.easeOutQuad;
        this.factor = 1;
        this.maxSpeed = 50;
        this.speed = 1;
    }
    load(data) {
        if (!data) return;
        if (data.distance !== undefined) this.distance = data.distance;
        if (data.duration !== undefined) this.duration = data.duration;
        if (data.easing !== undefined) this.easing = data.easing;
        if (data.factor !== undefined) this.factor = data.factor;
        if (data.maxSpeed !== undefined) this.maxSpeed = data.maxSpeed;
        if (data.speed !== undefined) this.speed = data.speed;
    }
}
exports.Attract = Attract;

},{"../../../../Enums":"e5HNg"}],"hqbQ7":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Light = void 0;
const LightArea_1 = require("./LightArea");
const LightShadow_1 = require("./LightShadow");
class Light {
    constructor(){
        this.area = new LightArea_1.LightArea();
        this.shadow = new LightShadow_1.LightShadow();
    }
    load(data) {
        if (data === undefined) return;
        this.area.load(data.area);
        this.shadow.load(data.shadow);
    }
}
exports.Light = Light;

},{"./LightArea":"6FSpr","./LightShadow":"7MYvn"}],"6FSpr":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.LightArea = void 0;
const LightGradient_1 = require("./LightGradient");
class LightArea {
    constructor(){
        this.gradient = new LightGradient_1.LightGradient();
        this.radius = 1000;
    }
    load(data) {
        if (data === undefined) return;
        this.gradient.load(data.gradient);
        if (data.radius !== undefined) this.radius = data.radius;
    }
}
exports.LightArea = LightArea;

},{"./LightGradient":"6zXMC"}],"6zXMC":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.LightGradient = void 0;
const OptionsColor_1 = require("../../OptionsColor");
class LightGradient {
    constructor(){
        this.start = new OptionsColor_1.OptionsColor();
        this.stop = new OptionsColor_1.OptionsColor();
        this.start.value = "#ffffff";
        this.stop.value = "#000000";
    }
    load(data) {
        if (data === undefined) return;
        this.start = OptionsColor_1.OptionsColor.create(this.start, data.start);
        this.stop = OptionsColor_1.OptionsColor.create(this.stop, data.stop);
    }
}
exports.LightGradient = LightGradient;

},{"../../OptionsColor":"2UtQV"}],"7MYvn":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.LightShadow = void 0;
const OptionsColor_1 = require("../../OptionsColor");
class LightShadow {
    constructor(){
        this.color = new OptionsColor_1.OptionsColor();
        this.color.value = "#000000";
        this.length = 2000;
    }
    load(data) {
        if (data === undefined) return;
        this.color = OptionsColor_1.OptionsColor.create(this.color, data.color);
        if (data.length !== undefined) this.length = data.length;
    }
}
exports.LightShadow = LightShadow;

},{"../../OptionsColor":"2UtQV"}],"cqNX4":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Bounce = void 0;
class Bounce {
    constructor(){
        this.distance = 200;
    }
    load(data) {
        if (!data) return;
        if (data.distance !== undefined) this.distance = data.distance;
    }
}
exports.Bounce = Bounce;

},{}],"eeNyb":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.BackgroundMask = void 0;
const BackgroundMaskCover_1 = require("./BackgroundMaskCover");
class BackgroundMask {
    constructor(){
        this.composite = "destination-out";
        this.cover = new BackgroundMaskCover_1.BackgroundMaskCover();
        this.enable = false;
    }
    load(data) {
        if (data === undefined) return;
        if (data.composite !== undefined) this.composite = data.composite;
        if (data.cover !== undefined) {
            const cover = data.cover;
            const color = typeof data.cover === "string" ? {
                color: data.cover
            } : data.cover;
            this.cover.load(cover.color !== undefined ? cover : {
                color: color
            });
        }
        if (data.enable !== undefined) this.enable = data.enable;
    }
}
exports.BackgroundMask = BackgroundMask;

},{"./BackgroundMaskCover":"4phol"}],"4phol":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.BackgroundMaskCover = void 0;
const OptionsColor_1 = require("../OptionsColor");
class BackgroundMaskCover {
    constructor(){
        this.color = new OptionsColor_1.OptionsColor();
        this.opacity = 1;
    }
    load(data) {
        if (data === undefined) return;
        if (data.color !== undefined) this.color = OptionsColor_1.OptionsColor.create(this.color, data.color);
        if (data.opacity !== undefined) this.opacity = data.opacity;
    }
}
exports.BackgroundMaskCover = BackgroundMaskCover;

},{"../OptionsColor":"2UtQV"}],"lYG0W":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Background = void 0;
const OptionsColor_1 = require("../OptionsColor");
class Background {
    constructor(){
        this.color = new OptionsColor_1.OptionsColor();
        this.color.value = "";
        this.image = "";
        this.position = "";
        this.repeat = "";
        this.size = "";
        this.opacity = 1;
    }
    load(data) {
        if (data === undefined) return;
        if (data.color !== undefined) this.color = OptionsColor_1.OptionsColor.create(this.color, data.color);
        if (data.image !== undefined) this.image = data.image;
        if (data.position !== undefined) this.position = data.position;
        if (data.repeat !== undefined) this.repeat = data.repeat;
        if (data.size !== undefined) this.size = data.size;
        if (data.opacity !== undefined) this.opacity = data.opacity;
    }
}
exports.Background = Background;

},{"../OptionsColor":"2UtQV"}],"dIsgA":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Theme = void 0;
const Utils_1 = require("../../../Utils");
const ThemeDefault_1 = require("./ThemeDefault");
class Theme {
    constructor(){
        this.name = "";
        this.default = new ThemeDefault_1.ThemeDefault();
    }
    load(data) {
        if (data === undefined) return;
        if (data.name !== undefined) this.name = data.name;
        this.default.load(data.default);
        if (data.options !== undefined) this.options = Utils_1.deepExtend({
        }, data.options);
    }
}
exports.Theme = Theme;

},{"../../../Utils":"iU3t1","./ThemeDefault":"jnN23"}],"jnN23":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ThemeDefault = void 0;
const Enums_1 = require("../../../Enums");
class ThemeDefault {
    constructor(){
        this.auto = false;
        this.mode = Enums_1.ThemeMode.any;
        this.value = false;
    }
    load(data) {
        if (!data) return;
        if (data.auto !== undefined) this.auto = data.auto;
        if (data.mode !== undefined) this.mode = data.mode;
        if (data.value !== undefined) this.value = data.value;
    }
}
exports.ThemeDefault = ThemeDefault;

},{"../../../Enums":"e5HNg"}],"8j1Im":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.FullScreen = void 0;
class FullScreen {
    constructor(){
        this.enable = false;
        this.zIndex = -1;
    }
    load(data) {
        if (!data) return;
        if (data.enable !== undefined) this.enable = data.enable;
        if (data.zIndex !== undefined) this.zIndex = data.zIndex;
    }
}
exports.FullScreen = FullScreen;

},{}],"2omWX":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Motion = void 0;
const MotionReduce_1 = require("./MotionReduce");
class Motion {
    constructor(){
        this.disable = false;
        this.reduce = new MotionReduce_1.MotionReduce();
    }
    load(data) {
        if (!data) return;
        if (data.disable !== undefined) this.disable = data.disable;
        this.reduce.load(data.reduce);
    }
}
exports.Motion = Motion;

},{"./MotionReduce":"5RW9Z"}],"5RW9Z":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MotionReduce = void 0;
class MotionReduce {
    constructor(){
        this.factor = 4;
        this.value = true;
    }
    load(data) {
        if (!data) return;
        if (data.factor !== undefined) this.factor = data.factor;
        if (data.value !== undefined) this.value = data.value;
    }
}
exports.MotionReduce = MotionReduce;

},{}],"grDGm":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ManualParticle = void 0;
const Utils_1 = require("../../Utils");
class ManualParticle {
    load(data) {
        var _a, _b;
        if (!data) return;
        if (data.position !== undefined) this.position = {
            x: (_a = data.position.x) !== null && _a !== void 0 ? _a : 50,
            y: (_b = data.position.y) !== null && _b !== void 0 ? _b : 50
        };
        if (data.options !== undefined) this.options = Utils_1.deepExtend({
        }, data.options);
    }
}
exports.ManualParticle = ManualParticle;

},{"../../Utils":"iU3t1"}],"TXWYU":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Responsive = void 0;
const Utils_1 = require("../../Utils");
class Responsive {
    constructor(){
        this.maxWidth = Infinity;
        this.options = {
        };
    }
    load(data) {
        if (!data) return;
        if (data.maxWidth !== undefined) this.maxWidth = data.maxWidth;
        if (data.options !== undefined) this.options = Utils_1.deepExtend({
        }, data.options);
    }
}
exports.Responsive = Responsive;

},{"../../Utils":"iU3t1"}],"3qPVE":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.loadFull = void 0;
const slim_1 = require("./slim");
const Trail_1 = require("./Interactions/External/Trail");
const Tilt_1 = require("./Updaters/Tilt");
const Wobble_1 = require("./Updaters/Wobble");
const plugin_1 = require("./Plugins/Absorbers/plugin");
const plugin_2 = require("./Plugins/Emitters/plugin");
const plugin_3 = require("./Plugins/PolygonMask/plugin");
const Roll_1 = require("./Updaters/Roll");
function loadFull(tsParticles) {
    slim_1.loadSlim(tsParticles);
    Trail_1.loadExternalTrailInteraction(tsParticles);
    Roll_1.loadRollUpdater(tsParticles);
    Tilt_1.loadTiltUpdater(tsParticles);
    Wobble_1.loadWobbleUpdater(tsParticles);
    plugin_1.loadAbsorbersPlugin(tsParticles);
    plugin_2.loadEmittersPlugin(tsParticles);
    plugin_3.loadPolygonMaskPlugin(tsParticles);
}
exports.loadFull = loadFull;

},{"./slim":"gQRUn","./Interactions/External/Trail":"cxlSL","./Updaters/Tilt":"97tCr","./Updaters/Wobble":"jDo1h","./Plugins/Absorbers/plugin":"iSc5v","./Plugins/Emitters/plugin":"4QDDK","./Plugins/PolygonMask/plugin":"dJOtr","./Updaters/Roll":"3W2XV"}],"gQRUn":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.loadSlim = void 0;
const Circle_1 = require("./Shapes/Circle");
const Life_1 = require("./Updaters/Life");
const Connect_1 = require("./Interactions/External/Connect");
const Opacity_1 = require("./Updaters/Opacity");
const Image_1 = require("./Shapes/Image");
const Polygon_1 = require("./Shapes/Polygon");
const Bubble_1 = require("./Interactions/External/Bubble");
const Attract_1 = require("./Interactions/External/Attract");
const Grab_1 = require("./Interactions/External/Grab");
const Star_1 = require("./Shapes/Star");
const Attract_2 = require("./Interactions/Particles/Attract");
const Square_1 = require("./Shapes/Square");
const StrokeColor_1 = require("./Updaters/StrokeColor");
const Color_1 = require("./Updaters/Color");
const Collisions_1 = require("./Interactions/Particles/Collisions");
const Angle_1 = require("./Updaters/Angle");
const OutModes_1 = require("./Updaters/OutModes");
const Repulse_1 = require("./Interactions/External/Repulse");
const Line_1 = require("./Shapes/Line");
const Bounce_1 = require("./Interactions/External/Bounce");
const Text_1 = require("./Shapes/Text");
const Links_1 = require("./Interactions/Particles/Links");
const Size_1 = require("./Updaters/Size");
function loadSlim(tsParticles) {
    Attract_1.loadExternalAttractInteraction(tsParticles);
    Bounce_1.loadExternalBounceInteraction(tsParticles);
    Bubble_1.loadExternalBubbleInteraction(tsParticles);
    Connect_1.loadExternalConnectInteraction(tsParticles);
    Grab_1.loadExternalGrabInteraction(tsParticles);
    Repulse_1.loadExternalRepulseInteraction(tsParticles);
    Attract_2.loadParticlesAttractInteraction(tsParticles);
    Collisions_1.loadParticlesCollisionsInteraction(tsParticles);
    Links_1.loadParticlesLinksInteraction(tsParticles);
    Circle_1.loadCircleShape(tsParticles);
    Image_1.loadImageShape(tsParticles);
    Line_1.loadLineShape(tsParticles);
    Polygon_1.loadPolygonShape(tsParticles);
    Square_1.loadSquareShape(tsParticles);
    Star_1.loadStarShape(tsParticles);
    Text_1.loadTextShape(tsParticles);
    Life_1.loadLifeUpdater(tsParticles);
    Opacity_1.loadOpacityUpdater(tsParticles);
    Size_1.loadSizeUpdater(tsParticles);
    Angle_1.loadAngleUpdater(tsParticles);
    Color_1.loadColorUpdater(tsParticles);
    StrokeColor_1.loadStrokeColorUpdater(tsParticles);
    OutModes_1.loadOutModesUpdater(tsParticles);
}
exports.loadSlim = loadSlim;

},{"./Shapes/Circle":"lY7k0","./Updaters/Life":"ipj4S","./Interactions/External/Connect":"7OPpK","./Updaters/Opacity":"kfD0m","./Shapes/Image":"g2Gnp","./Shapes/Polygon":"6nhct","./Interactions/External/Bubble":"3bD7U","./Interactions/External/Attract":"1BMRY","./Interactions/External/Grab":"hIdch","./Shapes/Star":"4gZ7c","./Interactions/Particles/Attract":"bTY6u","./Shapes/Square":"krsXx","./Updaters/StrokeColor":"ehqhK","./Updaters/Color":"1HWft","./Interactions/Particles/Collisions":"4UAG4","./Updaters/Angle":"3Yx8c","./Updaters/OutModes":"iNuzd","./Interactions/External/Repulse":"bS298","./Shapes/Line":"1QWWg","./Interactions/External/Bounce":"3aiBE","./Shapes/Text":"4VY7G","./Interactions/Particles/Links":"2pbDp","./Updaters/Size":"8XioK"}],"lY7k0":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.loadCircleShape = void 0;
const CircleDrawer_1 = require("./CircleDrawer");
function loadCircleShape(tsParticles) {
    tsParticles.addShape("circle", new CircleDrawer_1.CircleDrawer());
}
exports.loadCircleShape = loadCircleShape;

},{"./CircleDrawer":"2BZw6"}],"2BZw6":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CircleDrawer = void 0;
class CircleDrawer {
    getSidesCount() {
        return 12;
    }
    draw(context, particle, radius) {
        context.arc(0, 0, radius, 0, Math.PI * 2, false);
    }
}
exports.CircleDrawer = CircleDrawer;

},{}],"ipj4S":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.loadLifeUpdater = void 0;
const LifeUpdater_1 = require("./LifeUpdater");
function loadLifeUpdater(tsParticles) {
    tsParticles.addParticleUpdater("life", (container)=>new LifeUpdater_1.LifeUpdater(container)
    );
}
exports.loadLifeUpdater = loadLifeUpdater;

},{"./LifeUpdater":"c0MvN"}],"c0MvN":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.LifeUpdater = void 0;
const Utils_1 = require("../../Utils");
class LifeUpdater {
    constructor(container){
        this.container = container;
    }
    init() {
    }
    isEnabled(particle) {
        return !particle.destroyed;
    }
    update(particle, delta) {
        if (!this.isEnabled(particle)) return;
        const life = particle.life;
        let justSpawned = false;
        if (particle.spawning) {
            life.delayTime += delta.value;
            if (life.delayTime >= particle.life.delay) {
                justSpawned = true;
                particle.spawning = false;
                life.delayTime = 0;
                life.time = 0;
            } else return;
        }
        if (life.duration === -1) return;
        if (particle.spawning) return;
        if (justSpawned) life.time = 0;
        else life.time += delta.value;
        if (life.time < life.duration) return;
        life.time = 0;
        if (particle.life.count > 0) particle.life.count--;
        if (particle.life.count === 0) {
            particle.destroy();
            return;
        }
        const canvasSize = this.container.canvas.size, widthRange = Utils_1.setRangeValue(0, canvasSize.width), heightRange = Utils_1.setRangeValue(0, canvasSize.width);
        particle.position.x = Utils_1.randomInRange(widthRange);
        particle.position.y = Utils_1.randomInRange(heightRange);
        particle.spawning = true;
        life.delayTime = 0;
        life.time = 0;
        particle.reset();
        const lifeOptions = particle.options.life;
        life.delay = Utils_1.getRangeValue(lifeOptions.delay.value) * 1000;
        life.duration = Utils_1.getRangeValue(lifeOptions.duration.value) * 1000;
    }
}
exports.LifeUpdater = LifeUpdater;

},{"../../Utils":"iU3t1"}],"7OPpK":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.loadExternalConnectInteraction = void 0;
const Connector_1 = require("./Connector");
function loadExternalConnectInteraction(tsParticles) {
    tsParticles.addInteractor("externalConnect", (container)=>new Connector_1.Connector(container)
    );
}
exports.loadExternalConnectInteraction = loadExternalConnectInteraction;

},{"./Connector":"4F05t"}],"4F05t":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Connector = void 0;
const Utils_1 = require("../../../Utils");
const Enums_1 = require("../../../Enums");
const ExternalInteractorBase_1 = require("../../../Core/ExternalInteractorBase");
class Connector extends ExternalInteractorBase_1.ExternalInteractorBase {
    constructor(container){
        super(container);
    }
    isEnabled() {
        const container = this.container, mouse = container.interactivity.mouse, events = container.actualOptions.interactivity.events;
        if (!(events.onHover.enable && mouse.position)) return false;
        return Utils_1.isInArray(Enums_1.HoverMode.connect, events.onHover.mode);
    }
    reset() {
    }
    interact() {
        const container = this.container, options = container.actualOptions;
        if (options.interactivity.events.onHover.enable && container.interactivity.status === "mousemove") {
            const mousePos = container.interactivity.mouse.position;
            if (!mousePos) return;
            const distance = Math.abs(container.retina.connectModeRadius), query = container.particles.quadTree.queryCircle(mousePos, distance);
            let i = 0;
            for (const p1 of query){
                const pos1 = p1.getPosition();
                for (const p2 of query.slice(i + 1)){
                    const pos2 = p2.getPosition(), distMax = Math.abs(container.retina.connectModeDistance), xDiff = Math.abs(pos1.x - pos2.x), yDiff = Math.abs(pos1.y - pos2.y);
                    if (xDiff < distMax && yDiff < distMax) container.canvas.drawConnectLine(p1, p2);
                }
                ++i;
            }
        }
    }
}
exports.Connector = Connector;

},{"../../../Utils":"iU3t1","../../../Enums":"e5HNg","../../../Core/ExternalInteractorBase":"coWPo"}],"coWPo":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ExternalInteractorBase = void 0;
const Enums_1 = require("../Enums");
class ExternalInteractorBase {
    constructor(container){
        this.container = container;
        this.type = Enums_1.InteractorType.External;
    }
}
exports.ExternalInteractorBase = ExternalInteractorBase;

},{"../Enums":"e5HNg"}],"kfD0m":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.loadOpacityUpdater = void 0;
const OpacityUpdater_1 = require("./OpacityUpdater");
function loadOpacityUpdater(tsParticles) {
    tsParticles.addParticleUpdater("opacity", (container)=>new OpacityUpdater_1.OpacityUpdater(container)
    );
}
exports.loadOpacityUpdater = loadOpacityUpdater;

},{"./OpacityUpdater":"aDJAH"}],"aDJAH":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.OpacityUpdater = void 0;
const Enums_1 = require("../../Enums");
const Utils_1 = require("../../Utils");
function checkDestroy(particle, value, minValue, maxValue) {
    switch(particle.options.opacity.animation.destroy){
        case Enums_1.DestroyType.max:
            if (value >= maxValue) particle.destroy();
            break;
        case Enums_1.DestroyType.min:
            if (value <= minValue) particle.destroy();
            break;
    }
}
function updateOpacity(particle, delta) {
    var _a, _b, _c, _d, _e;
    if (!particle.opacity) return;
    const minValue = particle.opacity.min;
    const maxValue = particle.opacity.max;
    if (!(!particle.destroyed && particle.opacity.enable && (((_a = particle.opacity.maxLoops) !== null && _a !== void 0 ? _a : 0) <= 0 || ((_b = particle.opacity.loops) !== null && _b !== void 0 ? _b : 0) < ((_c = particle.opacity.maxLoops) !== null && _c !== void 0 ? _c : 0)))) return;
    switch(particle.opacity.status){
        case Enums_1.AnimationStatus.increasing:
            if (particle.opacity.value >= maxValue) {
                particle.opacity.status = Enums_1.AnimationStatus.decreasing;
                if (!particle.opacity.loops) particle.opacity.loops = 0;
                particle.opacity.loops++;
            } else particle.opacity.value += ((_d = particle.opacity.velocity) !== null && _d !== void 0 ? _d : 0) * delta.factor;
            break;
        case Enums_1.AnimationStatus.decreasing:
            if (particle.opacity.value <= minValue) {
                particle.opacity.status = Enums_1.AnimationStatus.increasing;
                if (!particle.opacity.loops) particle.opacity.loops = 0;
                particle.opacity.loops++;
            } else particle.opacity.value -= ((_e = particle.opacity.velocity) !== null && _e !== void 0 ? _e : 0) * delta.factor;
            break;
    }
    checkDestroy(particle, particle.opacity.value, minValue, maxValue);
    if (!particle.destroyed) particle.opacity.value = Utils_1.clamp(particle.opacity.value, minValue, maxValue);
}
class OpacityUpdater {
    constructor(container){
        this.container = container;
    }
    init(particle) {
        const opacityOptions = particle.options.opacity;
        particle.opacity = {
            enable: opacityOptions.animation.enable,
            max: Utils_1.getRangeMax(opacityOptions.value),
            min: Utils_1.getRangeMin(opacityOptions.value),
            value: Utils_1.getRangeValue(opacityOptions.value),
            loops: 0,
            maxLoops: opacityOptions.animation.count
        };
        const opacityAnimation = opacityOptions.animation;
        if (opacityAnimation.enable) {
            particle.opacity.status = Enums_1.AnimationStatus.increasing;
            const opacityRange = opacityOptions.value;
            particle.opacity.min = Utils_1.getRangeMin(opacityRange);
            particle.opacity.max = Utils_1.getRangeMax(opacityRange);
            switch(opacityAnimation.startValue){
                case Enums_1.StartValueType.min:
                    particle.opacity.value = particle.opacity.min;
                    particle.opacity.status = Enums_1.AnimationStatus.increasing;
                    break;
                case Enums_1.StartValueType.random:
                    particle.opacity.value = Utils_1.randomInRange(particle.opacity);
                    particle.opacity.status = Math.random() >= 0.5 ? Enums_1.AnimationStatus.increasing : Enums_1.AnimationStatus.decreasing;
                    break;
                case Enums_1.StartValueType.max:
                default:
                    particle.opacity.value = particle.opacity.max;
                    particle.opacity.status = Enums_1.AnimationStatus.decreasing;
                    break;
            }
            particle.opacity.velocity = opacityAnimation.speed / 100 * this.container.retina.reduceFactor;
            if (!opacityAnimation.sync) particle.opacity.velocity *= Math.random();
        }
    }
    isEnabled(particle) {
        var _a, _b, _c;
        return !particle.destroyed && !particle.spawning && !!particle.opacity && particle.opacity.enable && (((_a = particle.opacity.maxLoops) !== null && _a !== void 0 ? _a : 0) <= 0 || ((_b = particle.opacity.loops) !== null && _b !== void 0 ? _b : 0) < ((_c = particle.opacity.maxLoops) !== null && _c !== void 0 ? _c : 0));
    }
    update(particle, delta) {
        if (!this.isEnabled(particle)) return;
        updateOpacity(particle, delta);
    }
}
exports.OpacityUpdater = OpacityUpdater;

},{"../../Enums":"e5HNg","../../Utils":"iU3t1"}],"g2Gnp":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.loadImageShape = void 0;
const ImageDrawer_1 = require("./ImageDrawer");
function loadImageShape(tsParticles) {
    const imageDrawer = new ImageDrawer_1.ImageDrawer();
    tsParticles.addShape("image", imageDrawer);
    tsParticles.addShape("images", imageDrawer);
}
exports.loadImageShape = loadImageShape;

},{"./ImageDrawer":"2jtYV"}],"2jtYV":[function(require,module,exports) {
"use strict";
var __classPrivateFieldSet = this && this.__classPrivateFieldSet || function(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var __classPrivateFieldGet = this && this.__classPrivateFieldGet || function(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _ImageDrawer_images;
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ImageDrawer = void 0;
const Utils_1 = require("../../Utils");
const Enums_1 = require("../../Enums");
const Utils_2 = require("./Utils");
class ImageDrawer {
    constructor(){
        _ImageDrawer_images.set(this, void 0);
        __classPrivateFieldSet(this, _ImageDrawer_images, [], "f");
    }
    getSidesCount() {
        return 12;
    }
    getImages(container) {
        const containerImages = __classPrivateFieldGet(this, _ImageDrawer_images, "f").find((t)=>t.id === container.id
        );
        if (!containerImages) {
            __classPrivateFieldGet(this, _ImageDrawer_images, "f").push({
                id: container.id,
                images: []
            });
            return this.getImages(container);
        } else return containerImages;
    }
    addImage(container, image) {
        const containerImages = this.getImages(container);
        containerImages === null || containerImages === void 0 || containerImages.images.push(image);
    }
    async init(container) {
        await this.loadImagesFromParticlesOptions(container, container.actualOptions.particles);
        await this.loadImagesFromParticlesOptions(container, container.actualOptions.interactivity.modes.trail.particles);
        for (const manualParticle of container.actualOptions.manualParticles)await this.loadImagesFromParticlesOptions(container, manualParticle.options);
        const emitterOptions = container.actualOptions;
        if (emitterOptions.emitters) {
            if (emitterOptions.emitters instanceof Array) for (const emitter of emitterOptions.emitters)await this.loadImagesFromParticlesOptions(container, emitter.particles);
            else await this.loadImagesFromParticlesOptions(container, emitterOptions.emitters.particles);
        }
        const interactiveEmitters = emitterOptions.interactivity.modes.emitters;
        if (interactiveEmitters) {
            if (interactiveEmitters instanceof Array) for (const emitter of interactiveEmitters)await this.loadImagesFromParticlesOptions(container, emitter.particles);
            else await this.loadImagesFromParticlesOptions(container, interactiveEmitters.particles);
        }
    }
    destroy() {
        __classPrivateFieldSet(this, _ImageDrawer_images, [], "f");
    }
    async loadImagesFromParticlesOptions(container, options) {
        var _a, _b, _c;
        const shapeOptions = options === null || options === void 0 ? void 0 : options.shape;
        if (!(shapeOptions === null || shapeOptions === void 0 ? void 0 : shapeOptions.type) || !shapeOptions.options || !Utils_1.isInArray(Enums_1.ShapeType.image, shapeOptions.type) && !Utils_1.isInArray(Enums_1.ShapeType.images, shapeOptions.type)) return;
        const idx = __classPrivateFieldGet(this, _ImageDrawer_images, "f").findIndex((t)=>t.id === container.id
        );
        if (idx >= 0) __classPrivateFieldGet(this, _ImageDrawer_images, "f").splice(idx, 1);
        const imageOptions = (_a = shapeOptions.options[Enums_1.ShapeType.images]) !== null && _a !== void 0 ? _a : shapeOptions.options[Enums_1.ShapeType.image];
        if (imageOptions instanceof Array) for (const optionsImage of imageOptions)await this.loadImageShape(container, optionsImage);
        else await this.loadImageShape(container, imageOptions);
        if (options === null || options === void 0 ? void 0 : options.groups) for(const groupName in options.groups){
            const group = options.groups[groupName];
            await this.loadImagesFromParticlesOptions(container, group);
        }
        if ((_c = (_b = options === null || options === void 0 ? void 0 : options.destroy) === null || _b === void 0 ? void 0 : _b.split) === null || _c === void 0 ? void 0 : _c.particles) await this.loadImagesFromParticlesOptions(container, options === null || options === void 0 ? void 0 : options.destroy.split.particles);
    }
    async loadImageShape(container, imageShape) {
        try {
            const imageFunc = imageShape.replaceColor ? Utils_2.downloadSvgImage : Utils_2.loadImage;
            const image = await imageFunc(imageShape.src);
            if (image) this.addImage(container, image);
        } catch (_a) {
            console.warn(`tsParticles error - ${imageShape.src} not found`);
        }
    }
    draw(context, particle, radius, opacity) {
        var _a, _b;
        if (!context) return;
        const image = particle.image;
        const element = (_a = image === null || image === void 0 ? void 0 : image.data) === null || _a === void 0 ? void 0 : _a.element;
        if (!element) return;
        const ratio = (_b = image === null || image === void 0 ? void 0 : image.ratio) !== null && _b !== void 0 ? _b : 1;
        const pos = {
            x: -radius,
            y: -radius
        };
        if (!(image === null || image === void 0 ? void 0 : image.data.svgData) || !(image === null || image === void 0 ? void 0 : image.replaceColor)) context.globalAlpha = opacity;
        context.drawImage(element, pos.x, pos.y, radius * 2, radius * 2 / ratio);
        if (!(image === null || image === void 0 ? void 0 : image.data.svgData) || !(image === null || image === void 0 ? void 0 : image.replaceColor)) context.globalAlpha = 1;
    }
    loadShape(particle) {
        var _a, _b, _c, _d, _e, _f, _g;
        if (particle.shape !== "image" && particle.shape !== "images") return;
        const images = this.getImages(particle.container).images;
        const imageData = particle.shapeData;
        const image = (_a = images.find((t)=>t.source === imageData.src
        )) !== null && _a !== void 0 ? _a : images[0];
        const color = particle.getFillColor();
        let imageRes;
        if (!image) return;
        if (image.svgData !== undefined && imageData.replaceColor && color) {
            const svgColoredData = Utils_2.replaceColorSvg(image, color, (_c = (_b = particle.opacity) === null || _b === void 0 ? void 0 : _b.value) !== null && _c !== void 0 ? _c : 1);
            const svg = new Blob([
                svgColoredData
            ], {
                type: "image/svg+xml"
            });
            const domUrl = URL || window.URL || window.webkitURL || window;
            const url = domUrl.createObjectURL(svg);
            const img = new Image();
            imageRes = {
                data: Object.assign(Object.assign({
                }, image), {
                    svgData: svgColoredData
                }),
                ratio: imageData.width / imageData.height,
                replaceColor: (_d = imageData.replaceColor) !== null && _d !== void 0 ? _d : imageData.replace_color,
                source: imageData.src
            };
            img.addEventListener("load", ()=>{
                const pImage = particle.image;
                if (pImage) {
                    pImage.loaded = true;
                    image.element = img;
                }
                domUrl.revokeObjectURL(url);
            });
            img.addEventListener("error", ()=>{
                domUrl.revokeObjectURL(url);
                Utils_2.loadImage(imageData.src).then((img2)=>{
                    const pImage = particle.image;
                    if (pImage) {
                        image.element = img2 === null || img2 === void 0 ? void 0 : img2.element;
                        pImage.loaded = true;
                    }
                });
            });
            img.src = url;
        } else imageRes = {
            data: image,
            loaded: true,
            ratio: imageData.width / imageData.height,
            replaceColor: (_e = imageData.replaceColor) !== null && _e !== void 0 ? _e : imageData.replace_color,
            source: imageData.src
        };
        if (!imageRes.ratio) imageRes.ratio = 1;
        const fill = (_f = imageData.fill) !== null && _f !== void 0 ? _f : particle.fill;
        const close = (_g = imageData.close) !== null && _g !== void 0 ? _g : particle.close;
        const imageShape = {
            image: imageRes,
            fill,
            close
        };
        particle.image = imageShape.image;
        particle.fill = imageShape.fill;
        particle.close = imageShape.close;
    }
}
exports.ImageDrawer = ImageDrawer;
_ImageDrawer_images = new WeakMap();

},{"../../Utils":"iU3t1","../../Enums":"e5HNg","./Utils":"8Piv6"}],"8Piv6":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.replaceColorSvg = exports.downloadSvgImage = exports.loadImage = void 0;
const Utils_1 = require("../../Utils");
function loadImage(source) {
    return new Promise((resolve, reject)=>{
        if (!source) {
            reject("Error tsParticles - No image.src");
            return;
        }
        const image = {
            source: source,
            type: source.substr(source.length - 3)
        };
        const img = new Image();
        img.addEventListener("load", ()=>{
            image.element = img;
            resolve(image);
        });
        img.addEventListener("error", ()=>{
            reject(`Error tsParticles - loading image: ${source}`);
        });
        img.src = source;
    });
}
exports.loadImage = loadImage;
async function downloadSvgImage(source) {
    if (!source) throw new Error("Error tsParticles - No image.src");
    const image = {
        source: source,
        type: source.substr(source.length - 3)
    };
    if (image.type !== "svg") return loadImage(source);
    const response = await fetch(image.source);
    if (!response.ok) throw new Error("Error tsParticles - Image not found");
    image.svgData = await response.text();
    return image;
}
exports.downloadSvgImage = downloadSvgImage;
function replaceColorSvg(imageShape, color, opacity) {
    const { svgData  } = imageShape;
    if (!svgData) return "";
    if (svgData.includes("fill")) {
        const currentColor = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d.]+%?\))|currentcolor/gi;
        return svgData.replace(currentColor, ()=>Utils_1.getStyleFromHsl(color, opacity)
        );
    }
    const preFillIndex = svgData.indexOf(">");
    return `${svgData.substring(0, preFillIndex)} fill="${Utils_1.getStyleFromHsl(color, opacity)}"${svgData.substring(preFillIndex)}`;
}
exports.replaceColorSvg = replaceColorSvg;

},{"../../Utils":"iU3t1"}],"6nhct":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.loadPolygonShape = exports.loadTriangleShape = exports.loadGenericPolygonShape = void 0;
const PolygonDrawer_1 = require("./PolygonDrawer");
const TriangleDrawer_1 = require("./TriangleDrawer");
function loadGenericPolygonShape(tsParticles) {
    tsParticles.addShape("polygon", new PolygonDrawer_1.PolygonDrawer());
}
exports.loadGenericPolygonShape = loadGenericPolygonShape;
function loadTriangleShape(tsParticles) {
    tsParticles.addShape("triangle", new TriangleDrawer_1.TriangleDrawer());
}
exports.loadTriangleShape = loadTriangleShape;
function loadPolygonShape(tsParticles) {
    loadGenericPolygonShape(tsParticles);
    loadTriangleShape(tsParticles);
}
exports.loadPolygonShape = loadPolygonShape;

},{"./PolygonDrawer":"2sSaZ","./TriangleDrawer":"bubCe"}],"2sSaZ":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PolygonDrawer = void 0;
const PolygonDrawerBase_1 = require("./PolygonDrawerBase");
class PolygonDrawer extends PolygonDrawerBase_1.PolygonDrawerBase {
    getSidesData(particle, radius) {
        var _a, _b;
        const polygon = particle.shapeData;
        const sides = (_b = (_a = polygon === null || polygon === void 0 ? void 0 : polygon.sides) !== null && _a !== void 0 ? _a : polygon === null || polygon === void 0 ? void 0 : polygon.nb_sides) !== null && _b !== void 0 ? _b : 5;
        return {
            count: {
                denominator: 1,
                numerator: sides
            },
            length: radius * 2.66 / (sides / 3)
        };
    }
    getCenter(particle, radius) {
        const sides = this.getSidesCount(particle);
        return {
            x: -radius / (sides / 3.5),
            y: -radius / 0.76
        };
    }
}
exports.PolygonDrawer = PolygonDrawer;

},{"./PolygonDrawerBase":"7KQxP"}],"7KQxP":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PolygonDrawerBase = void 0;
class PolygonDrawerBase {
    getSidesCount(particle) {
        var _a, _b;
        const polygon = particle.shapeData;
        return (_b = (_a = polygon === null || polygon === void 0 ? void 0 : polygon.sides) !== null && _a !== void 0 ? _a : polygon === null || polygon === void 0 ? void 0 : polygon.nb_sides) !== null && _b !== void 0 ? _b : 5;
    }
    draw(context, particle, radius) {
        const start = this.getCenter(particle, radius);
        const side = this.getSidesData(particle, radius);
        const sideCount = side.count.numerator * side.count.denominator;
        const decimalSides = side.count.numerator / side.count.denominator;
        const interiorAngleDegrees = 180 * (decimalSides - 2) / decimalSides;
        const interiorAngle = Math.PI - Math.PI * interiorAngleDegrees / 180;
        if (!context) return;
        context.beginPath();
        context.translate(start.x, start.y);
        context.moveTo(0, 0);
        for(let i = 0; i < sideCount; i++){
            context.lineTo(side.length, 0);
            context.translate(side.length, 0);
            context.rotate(interiorAngle);
        }
    }
}
exports.PolygonDrawerBase = PolygonDrawerBase;

},{}],"bubCe":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TriangleDrawer = void 0;
const PolygonDrawerBase_1 = require("./PolygonDrawerBase");
class TriangleDrawer extends PolygonDrawerBase_1.PolygonDrawerBase {
    getSidesCount() {
        return 3;
    }
    getSidesData(particle, radius) {
        return {
            count: {
                denominator: 2,
                numerator: 3
            },
            length: radius * 2
        };
    }
    getCenter(particle, radius) {
        return {
            x: -radius,
            y: radius / 1.66
        };
    }
}
exports.TriangleDrawer = TriangleDrawer;

},{"./PolygonDrawerBase":"7KQxP"}],"3bD7U":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.loadExternalBubbleInteraction = void 0;
const Bubbler_1 = require("./Bubbler");
function loadExternalBubbleInteraction(tsParticles) {
    tsParticles.addInteractor("externalBubble", (container)=>new Bubbler_1.Bubbler(container)
    );
}
exports.loadExternalBubbleInteraction = loadExternalBubbleInteraction;

},{"./Bubbler":"5UP6u"}],"5UP6u":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Bubbler = void 0;
const Utils_1 = require("../../../Utils");
const Enums_1 = require("../../../Enums");
const ExternalInteractorBase_1 = require("../../../Core/ExternalInteractorBase");
const ProcessBubbleType_1 = require("./ProcessBubbleType");
function calculateBubbleValue(particleValue, modeValue, optionsValue, ratio) {
    if (modeValue >= optionsValue) {
        const value = particleValue + (modeValue - optionsValue) * ratio;
        return Utils_1.clamp(value, particleValue, modeValue);
    } else if (modeValue < optionsValue) {
        const value = particleValue - (optionsValue - modeValue) * ratio;
        return Utils_1.clamp(value, modeValue, particleValue);
    }
}
class Bubbler extends ExternalInteractorBase_1.ExternalInteractorBase {
    constructor(container){
        super(container);
    }
    isEnabled() {
        const container = this.container, options = container.actualOptions, mouse = container.interactivity.mouse, events = options.interactivity.events, divs = events.onDiv, divBubble = Utils_1.isDivModeEnabled(Enums_1.DivMode.bubble, divs);
        if (!(divBubble || events.onHover.enable && mouse.position || events.onClick.enable && mouse.clickPosition)) return false;
        const hoverMode = events.onHover.mode;
        const clickMode = events.onClick.mode;
        return Utils_1.isInArray(Enums_1.HoverMode.bubble, hoverMode) || Utils_1.isInArray(Enums_1.ClickMode.bubble, clickMode) || divBubble;
    }
    reset(particle, force) {
        if (!(!particle.bubble.inRange || force)) return;
        delete particle.bubble.div;
        delete particle.bubble.opacity;
        delete particle.bubble.radius;
        delete particle.bubble.color;
    }
    interact() {
        const options = this.container.actualOptions, events = options.interactivity.events, onHover = events.onHover, onClick = events.onClick, hoverEnabled = onHover.enable, hoverMode = onHover.mode, clickEnabled = onClick.enable, clickMode = onClick.mode, divs = events.onDiv;
        if (hoverEnabled && Utils_1.isInArray(Enums_1.HoverMode.bubble, hoverMode)) this.hoverBubble();
        else if (clickEnabled && Utils_1.isInArray(Enums_1.ClickMode.bubble, clickMode)) this.clickBubble();
        else Utils_1.divModeExecute(Enums_1.DivMode.bubble, divs, (selector, div)=>this.singleSelectorHover(selector, div)
        );
    }
    singleSelectorHover(selector, div) {
        const container = this.container, selectors = document.querySelectorAll(selector);
        if (!selectors.length) return;
        selectors.forEach((item)=>{
            const elem = item, pxRatio = container.retina.pixelRatio, pos = {
                x: (elem.offsetLeft + elem.offsetWidth / 2) * pxRatio,
                y: (elem.offsetTop + elem.offsetHeight / 2) * pxRatio
            }, repulseRadius = elem.offsetWidth / 2 * pxRatio, area = div.type === Enums_1.DivType.circle ? new Utils_1.Circle(pos.x, pos.y, repulseRadius) : new Utils_1.Rectangle(elem.offsetLeft * pxRatio, elem.offsetTop * pxRatio, elem.offsetWidth * pxRatio, elem.offsetHeight * pxRatio), query = container.particles.quadTree.query(area);
            for (const particle of query){
                if (!area.contains(particle.getPosition())) continue;
                particle.bubble.inRange = true;
                const divs = container.actualOptions.interactivity.modes.bubble.divs;
                const divBubble = Utils_1.divMode(divs, elem);
                if (!particle.bubble.div || particle.bubble.div !== elem) {
                    this.reset(particle, true);
                    particle.bubble.div = elem;
                }
                this.hoverBubbleSize(particle, 1, divBubble);
                this.hoverBubbleOpacity(particle, 1, divBubble);
                this.hoverBubbleColor(particle, 1, divBubble);
            }
        });
    }
    process(particle, distMouse, timeSpent, data) {
        const container = this.container, bubbleParam = data.bubbleObj.optValue;
        if (bubbleParam === undefined) return;
        const options = container.actualOptions, bubbleDuration = options.interactivity.modes.bubble.duration, bubbleDistance = container.retina.bubbleModeDistance, particlesParam = data.particlesObj.optValue, pObjBubble = data.bubbleObj.value, pObj = data.particlesObj.value || 0, type = data.type;
        if (bubbleParam === particlesParam) return;
        if (!container.bubble.durationEnd) {
            if (distMouse <= bubbleDistance) {
                const obj = pObjBubble !== null && pObjBubble !== void 0 ? pObjBubble : pObj;
                if (obj !== bubbleParam) {
                    const value = pObj - timeSpent * (pObj - bubbleParam) / bubbleDuration;
                    if (type === ProcessBubbleType_1.ProcessBubbleType.size) particle.bubble.radius = value;
                    if (type === ProcessBubbleType_1.ProcessBubbleType.opacity) particle.bubble.opacity = value;
                }
            } else {
                if (type === ProcessBubbleType_1.ProcessBubbleType.size) delete particle.bubble.radius;
                if (type === ProcessBubbleType_1.ProcessBubbleType.opacity) delete particle.bubble.opacity;
            }
        } else if (pObjBubble) {
            if (type === ProcessBubbleType_1.ProcessBubbleType.size) delete particle.bubble.radius;
            if (type === ProcessBubbleType_1.ProcessBubbleType.opacity) delete particle.bubble.opacity;
        }
    }
    clickBubble() {
        var _a, _b;
        const container = this.container, options = container.actualOptions, mouseClickPos = container.interactivity.mouse.clickPosition;
        if (!mouseClickPos) return;
        const distance = container.retina.bubbleModeDistance, query = container.particles.quadTree.queryCircle(mouseClickPos, distance);
        for (const particle of query){
            if (!container.bubble.clicking) continue;
            particle.bubble.inRange = !container.bubble.durationEnd;
            const pos = particle.getPosition(), distMouse = Utils_1.getDistance(pos, mouseClickPos), timeSpent = (new Date().getTime() - (container.interactivity.mouse.clickTime || 0)) / 1000;
            if (timeSpent > options.interactivity.modes.bubble.duration) container.bubble.durationEnd = true;
            if (timeSpent > options.interactivity.modes.bubble.duration * 2) {
                container.bubble.clicking = false;
                container.bubble.durationEnd = false;
            }
            const sizeData = {
                bubbleObj: {
                    optValue: container.retina.bubbleModeSize,
                    value: particle.bubble.radius
                },
                particlesObj: {
                    optValue: Utils_1.getRangeMax(particle.options.size.value) * container.retina.pixelRatio,
                    value: particle.size.value
                },
                type: ProcessBubbleType_1.ProcessBubbleType.size
            };
            this.process(particle, distMouse, timeSpent, sizeData);
            const opacityData = {
                bubbleObj: {
                    optValue: options.interactivity.modes.bubble.opacity,
                    value: particle.bubble.opacity
                },
                particlesObj: {
                    optValue: Utils_1.getRangeMax(particle.options.opacity.value),
                    value: (_b = (_a = particle.opacity) === null || _a === void 0 ? void 0 : _a.value) !== null && _b !== void 0 ? _b : 1
                },
                type: ProcessBubbleType_1.ProcessBubbleType.opacity
            };
            this.process(particle, distMouse, timeSpent, opacityData);
            if (!container.bubble.durationEnd) {
                if (distMouse <= container.retina.bubbleModeDistance) this.hoverBubbleColor(particle, distMouse);
                else delete particle.bubble.color;
            } else delete particle.bubble.color;
        }
    }
    hoverBubble() {
        const container = this.container, mousePos = container.interactivity.mouse.position;
        if (mousePos === undefined) return;
        const distance = container.retina.bubbleModeDistance, query = container.particles.quadTree.queryCircle(mousePos, distance);
        for (const particle of query){
            particle.bubble.inRange = true;
            const pos = particle.getPosition(), pointDistance = Utils_1.getDistance(pos, mousePos), ratio = 1 - pointDistance / distance;
            if (pointDistance <= distance) {
                if (ratio >= 0 && container.interactivity.status === Utils_1.Constants.mouseMoveEvent) {
                    this.hoverBubbleSize(particle, ratio);
                    this.hoverBubbleOpacity(particle, ratio);
                    this.hoverBubbleColor(particle, ratio);
                }
            } else this.reset(particle);
            if (container.interactivity.status === Utils_1.Constants.mouseLeaveEvent) this.reset(particle);
        }
    }
    hoverBubbleSize(particle, ratio, divBubble) {
        const container = this.container, modeSize = (divBubble === null || divBubble === void 0 ? void 0 : divBubble.size) ? divBubble.size * container.retina.pixelRatio : container.retina.bubbleModeSize;
        if (modeSize === undefined) return;
        const optSize = Utils_1.getRangeMax(particle.options.size.value) * container.retina.pixelRatio;
        const pSize = particle.size.value;
        const size = calculateBubbleValue(pSize, modeSize, optSize, ratio);
        if (size !== undefined) particle.bubble.radius = size;
    }
    hoverBubbleOpacity(particle, ratio, divBubble) {
        var _a, _b, _c;
        const container = this.container, options = container.actualOptions, modeOpacity = (_a = divBubble === null || divBubble === void 0 ? void 0 : divBubble.opacity) !== null && _a !== void 0 ? _a : options.interactivity.modes.bubble.opacity;
        if (!modeOpacity) return;
        const optOpacity = particle.options.opacity.value;
        const pOpacity = (_c = (_b = particle.opacity) === null || _b === void 0 ? void 0 : _b.value) !== null && _c !== void 0 ? _c : 1;
        const opacity = calculateBubbleValue(pOpacity, modeOpacity, Utils_1.getRangeMax(optOpacity), ratio);
        if (opacity !== undefined) particle.bubble.opacity = opacity;
    }
    hoverBubbleColor(particle, ratio, divBubble) {
        const options = this.container.actualOptions;
        const bubbleOptions = divBubble !== null && divBubble !== void 0 ? divBubble : options.interactivity.modes.bubble;
        if (!particle.bubble.finalColor) {
            const modeColor = bubbleOptions.color;
            if (!modeColor) return;
            const bubbleColor = modeColor instanceof Array ? Utils_1.itemFromArray(modeColor) : modeColor;
            particle.bubble.finalColor = Utils_1.colorToHsl(bubbleColor);
        }
        if (!particle.bubble.finalColor) return;
        if (bubbleOptions.mix) {
            particle.bubble.color = undefined;
            const pColor = particle.getFillColor();
            particle.bubble.color = pColor ? Utils_1.rgbToHsl(Utils_1.colorMix(pColor, particle.bubble.finalColor, 1 - ratio, ratio)) : particle.bubble.finalColor;
        } else particle.bubble.color = particle.bubble.finalColor;
    }
}
exports.Bubbler = Bubbler;

},{"../../../Utils":"iU3t1","../../../Enums":"e5HNg","../../../Core/ExternalInteractorBase":"coWPo","./ProcessBubbleType":"8Wj3I"}],"8Wj3I":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ProcessBubbleType = void 0;
var ProcessBubbleType;
(function(ProcessBubbleType) {
    ProcessBubbleType["color"] = "color";
    ProcessBubbleType["opacity"] = "opacity";
    ProcessBubbleType["size"] = "size";
})(ProcessBubbleType = exports.ProcessBubbleType || (exports.ProcessBubbleType = {
}));

},{}],"1BMRY":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.loadExternalAttractInteraction = void 0;
const Attractor_1 = require("./Attractor");
function loadExternalAttractInteraction(tsParticles) {
    tsParticles.addInteractor("externalAttract", (container)=>new Attractor_1.Attractor(container)
    );
}
exports.loadExternalAttractInteraction = loadExternalAttractInteraction;

},{"./Attractor":"c3ijb"}],"c3ijb":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Attractor = void 0;
const Enums_1 = require("../../../Enums");
const Utils_1 = require("../../../Utils");
const ExternalInteractorBase_1 = require("../../../Core/ExternalInteractorBase");
const Vector_1 = require("../../../Core/Particle/Vector");
class Attractor extends ExternalInteractorBase_1.ExternalInteractorBase {
    constructor(container){
        super(container);
    }
    isEnabled() {
        const container = this.container, options = container.actualOptions, mouse = container.interactivity.mouse, events = options.interactivity.events;
        if ((!mouse.position || !events.onHover.enable) && (!mouse.clickPosition || !events.onClick.enable)) return false;
        const hoverMode = events.onHover.mode, clickMode = events.onClick.mode;
        return Utils_1.isInArray(Enums_1.HoverMode.attract, hoverMode) || Utils_1.isInArray(Enums_1.ClickMode.attract, clickMode);
    }
    reset() {
    }
    interact() {
        const container = this.container, options = container.actualOptions, mouseMoveStatus = container.interactivity.status === Utils_1.Constants.mouseMoveEvent, events = options.interactivity.events, hoverEnabled = events.onHover.enable, hoverMode = events.onHover.mode, clickEnabled = events.onClick.enable, clickMode = events.onClick.mode;
        if (mouseMoveStatus && hoverEnabled && Utils_1.isInArray(Enums_1.HoverMode.attract, hoverMode)) this.hoverAttract();
        else if (clickEnabled && Utils_1.isInArray(Enums_1.ClickMode.attract, clickMode)) this.clickAttract();
    }
    hoverAttract() {
        const container = this.container;
        const mousePos = container.interactivity.mouse.position;
        if (!mousePos) return;
        const attractRadius = container.retina.attractModeDistance;
        this.processAttract(mousePos, attractRadius, new Utils_1.Circle(mousePos.x, mousePos.y, attractRadius));
    }
    processAttract(position, attractRadius, area) {
        const container = this.container;
        const attractOptions = container.actualOptions.interactivity.modes.attract;
        const query = container.particles.quadTree.query(area);
        for (const particle of query){
            const { dx , dy , distance  } = Utils_1.getDistances(particle.position, position);
            const velocity = attractOptions.speed * attractOptions.factor;
            const attractFactor = Utils_1.clamp(Utils_1.calcEasing(1 - distance / attractRadius, attractOptions.easing) * velocity, 0, attractOptions.maxSpeed);
            const normVec = Vector_1.Vector.create(distance === 0 ? velocity : dx / distance * attractFactor, distance === 0 ? velocity : dy / distance * attractFactor);
            particle.position.subFrom(normVec);
        }
    }
    clickAttract() {
        const container = this.container;
        if (!container.attract.finish) {
            if (!container.attract.count) container.attract.count = 0;
            container.attract.count++;
            if (container.attract.count === container.particles.count) container.attract.finish = true;
        }
        if (container.attract.clicking) {
            const mousePos = container.interactivity.mouse.clickPosition;
            if (!mousePos) return;
            const attractRadius = container.retina.attractModeDistance;
            this.processAttract(mousePos, attractRadius, new Utils_1.Circle(mousePos.x, mousePos.y, attractRadius));
        } else if (container.attract.clicking === false) container.attract.particles = [];
        return;
    }
}
exports.Attractor = Attractor;

},{"../../../Enums":"e5HNg","../../../Utils":"iU3t1","../../../Core/ExternalInteractorBase":"coWPo","../../../Core/Particle/Vector":"c55jT"}],"hIdch":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.loadExternalGrabInteraction = void 0;
const Grabber_1 = require("./Grabber");
function loadExternalGrabInteraction(tsParticles) {
    tsParticles.addInteractor("externalGrab", (container)=>new Grabber_1.Grabber(container)
    );
}
exports.loadExternalGrabInteraction = loadExternalGrabInteraction;

},{"./Grabber":"bNG9j"}],"bNG9j":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Grabber = void 0;
const Utils_1 = require("../../../Utils");
const Enums_1 = require("../../../Enums");
const ExternalInteractorBase_1 = require("../../../Core/ExternalInteractorBase");
class Grabber extends ExternalInteractorBase_1.ExternalInteractorBase {
    constructor(container){
        super(container);
    }
    isEnabled() {
        const container = this.container, mouse = container.interactivity.mouse, events = container.actualOptions.interactivity.events;
        return events.onHover.enable && !!mouse.position && Utils_1.isInArray(Enums_1.HoverMode.grab, events.onHover.mode);
    }
    reset() {
    }
    interact() {
        var _a;
        const container = this.container, options = container.actualOptions, interactivity = options.interactivity;
        if (interactivity.events.onHover.enable && container.interactivity.status === Utils_1.Constants.mouseMoveEvent) {
            const mousePos = container.interactivity.mouse.position;
            if (!mousePos) return;
            const distance = container.retina.grabModeDistance, query = container.particles.quadTree.queryCircle(mousePos, distance);
            for (const particle of query){
                const pos = particle.getPosition(), pointDistance = Utils_1.getDistance(pos, mousePos);
                if (pointDistance <= distance) {
                    const grabLineOptions = interactivity.modes.grab.links, lineOpacity = grabLineOptions.opacity, opacityLine = lineOpacity - pointDistance * lineOpacity / distance;
                    if (opacityLine <= 0) continue;
                    const optColor = (_a = grabLineOptions.color) !== null && _a !== void 0 ? _a : particle.options.links.color;
                    if (!container.particles.grabLineColor) {
                        const linksOptions = options.interactivity.modes.grab.links;
                        container.particles.grabLineColor = Utils_1.getLinkRandomColor(optColor, linksOptions.blink, linksOptions.consent);
                    }
                    const colorLine = Utils_1.getLinkColor(particle, undefined, container.particles.grabLineColor);
                    if (!colorLine) return;
                    container.canvas.drawGrabLine(particle, colorLine, opacityLine, mousePos);
                }
            }
        }
    }
}
exports.Grabber = Grabber;

},{"../../../Utils":"iU3t1","../../../Enums":"e5HNg","../../../Core/ExternalInteractorBase":"coWPo"}],"4gZ7c":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.loadStarShape = void 0;
const StarDrawer_1 = require("./StarDrawer");
function loadStarShape(tsParticles) {
    tsParticles.addShape("star", new StarDrawer_1.StarDrawer());
}
exports.loadStarShape = loadStarShape;

},{"./StarDrawer":"4uTEx"}],"4uTEx":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.StarDrawer = void 0;
class StarDrawer {
    getSidesCount(particle) {
        var _a, _b;
        const star = particle.shapeData;
        return (_b = (_a = star === null || star === void 0 ? void 0 : star.sides) !== null && _a !== void 0 ? _a : star === null || star === void 0 ? void 0 : star.nb_sides) !== null && _b !== void 0 ? _b : 5;
    }
    draw(context, particle, radius) {
        var _a;
        const star = particle.shapeData;
        const sides = this.getSidesCount(particle);
        const inset = (_a = star === null || star === void 0 ? void 0 : star.inset) !== null && _a !== void 0 ? _a : 2;
        context.moveTo(0, 0 - radius);
        for(let i = 0; i < sides; i++){
            context.rotate(Math.PI / sides);
            context.lineTo(0, 0 - radius * inset);
            context.rotate(Math.PI / sides);
            context.lineTo(0, 0 - radius);
        }
    }
}
exports.StarDrawer = StarDrawer;

},{}],"bTY6u":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.loadParticlesAttractInteraction = void 0;
const Attractor_1 = require("./Attractor");
function loadParticlesAttractInteraction(tsParticles) {
    tsParticles.addInteractor("particlesAttract", (container)=>new Attractor_1.Attractor(container)
    );
}
exports.loadParticlesAttractInteraction = loadParticlesAttractInteraction;

},{"./Attractor":"jJOaO"}],"jJOaO":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Attractor = void 0;
const Utils_1 = require("../../../Utils");
const ParticlesInteractorBase_1 = require("../../../Core/ParticlesInteractorBase");
class Attractor extends ParticlesInteractorBase_1.ParticlesInteractorBase {
    constructor(container){
        super(container);
    }
    interact(p1) {
        var _a;
        const container = this.container, distance = (_a = p1.retina.attractDistance) !== null && _a !== void 0 ? _a : container.retina.attractDistance, pos1 = p1.getPosition(), query = container.particles.quadTree.queryCircle(pos1, distance);
        for (const p2 of query){
            if (p1 === p2 || !p2.options.move.attract.enable || p2.destroyed || p2.spawning) continue;
            const pos2 = p2.getPosition(), { dx , dy  } = Utils_1.getDistances(pos1, pos2), rotate = p1.options.move.attract.rotate, ax = dx / (rotate.x * 1000), ay = dy / (rotate.y * 1000), p1Factor = p2.size.value / p1.size.value, p2Factor = 1 / p1Factor;
            p1.velocity.x -= ax * p1Factor;
            p1.velocity.y -= ay * p1Factor;
            p2.velocity.x += ax * p2Factor;
            p2.velocity.y += ay * p2Factor;
        }
    }
    isEnabled(particle) {
        return particle.options.move.attract.enable;
    }
    reset() {
    }
}
exports.Attractor = Attractor;

},{"../../../Utils":"iU3t1","../../../Core/ParticlesInteractorBase":"6NWe3"}],"6NWe3":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ParticlesInteractorBase = void 0;
const Enums_1 = require("../Enums");
class ParticlesInteractorBase {
    constructor(container){
        this.container = container;
        this.type = Enums_1.InteractorType.Particles;
    }
}
exports.ParticlesInteractorBase = ParticlesInteractorBase;

},{"../Enums":"e5HNg"}],"krsXx":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.loadSquareShape = void 0;
const SquareDrawer_1 = require("./SquareDrawer");
function loadSquareShape(tsParticles) {
    const drawer = new SquareDrawer_1.SquareDrawer();
    tsParticles.addShape("edge", drawer);
    tsParticles.addShape("square", drawer);
}
exports.loadSquareShape = loadSquareShape;

},{"./SquareDrawer":"bzlGj"}],"bzlGj":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SquareDrawer = void 0;
const fixFactor = Math.sqrt(2);
class SquareDrawer {
    getSidesCount() {
        return 4;
    }
    draw(context, particle, radius) {
        context.rect(-radius / fixFactor, -radius / fixFactor, radius * 2 / fixFactor, radius * 2 / fixFactor);
    }
}
exports.SquareDrawer = SquareDrawer;

},{}],"ehqhK":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.loadStrokeColorUpdater = void 0;
const StrokeColorUpdater_1 = require("./StrokeColorUpdater");
function loadStrokeColorUpdater(tsParticles) {
    tsParticles.addParticleUpdater("strokeColor", (container)=>new StrokeColorUpdater_1.StrokeColorUpdater(container)
    );
}
exports.loadStrokeColorUpdater = loadStrokeColorUpdater;

},{"./StrokeColorUpdater":"lESxM"}],"lESxM":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.StrokeColorUpdater = void 0;
const Utils_1 = require("../../Utils");
const Enums_1 = require("../../Enums");
function updateColorValue(delta, value, valueAnimation, max, decrease) {
    var _a;
    const colorValue = value;
    if (!colorValue || !colorValue.enable) return;
    const offset = Utils_1.randomInRange(valueAnimation.offset);
    const velocity = ((_a = value.velocity) !== null && _a !== void 0 ? _a : 0) * delta.factor + offset * 3.6;
    if (!decrease || colorValue.status === Enums_1.AnimationStatus.increasing) {
        colorValue.value += velocity;
        if (decrease && colorValue.value > max) {
            colorValue.status = Enums_1.AnimationStatus.decreasing;
            colorValue.value -= colorValue.value % max;
        }
    } else {
        colorValue.value -= velocity;
        if (colorValue.value < 0) {
            colorValue.status = Enums_1.AnimationStatus.increasing;
            colorValue.value += colorValue.value;
        }
    }
    if (colorValue.value > max) colorValue.value %= max;
}
function updateStrokeColor(particle, delta) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
    if (!((_a = particle.stroke) === null || _a === void 0 ? void 0 : _a.color)) return;
    const animationOptions = particle.stroke.color.animation;
    const h = (_c = (_b = particle.strokeColor) === null || _b === void 0 ? void 0 : _b.h) !== null && _c !== void 0 ? _c : (_d = particle.color) === null || _d === void 0 ? void 0 : _d.h;
    if (h) updateColorValue(delta, h, animationOptions.h, 360, false);
    const s = (_f = (_e = particle.strokeColor) === null || _e === void 0 ? void 0 : _e.s) !== null && _f !== void 0 ? _f : (_g = particle.color) === null || _g === void 0 ? void 0 : _g.s;
    if (s) updateColorValue(delta, s, animationOptions.s, 100, true);
    const l = (_j = (_h = particle.strokeColor) === null || _h === void 0 ? void 0 : _h.l) !== null && _j !== void 0 ? _j : (_k = particle.color) === null || _k === void 0 ? void 0 : _k.l;
    if (l) updateColorValue(delta, l, animationOptions.l, 100, true);
}
class StrokeColorUpdater {
    constructor(container){
        this.container = container;
    }
    init(particle) {
        var _a, _b;
        const container = this.container;
        particle.stroke = particle.options.stroke instanceof Array ? Utils_1.itemFromArray(particle.options.stroke, particle.id, particle.options.reduceDuplicates) : particle.options.stroke;
        particle.strokeWidth = particle.stroke.width * container.retina.pixelRatio;
        const strokeHslColor = (_a = Utils_1.colorToHsl(particle.stroke.color)) !== null && _a !== void 0 ? _a : particle.getFillColor();
        if (strokeHslColor) particle.strokeColor = Utils_1.getHslAnimationFromHsl(strokeHslColor, (_b = particle.stroke.color) === null || _b === void 0 ? void 0 : _b.animation, container.retina.reduceFactor);
    }
    isEnabled(particle) {
        var _a, _b, _c, _d;
        const color = (_a = particle.stroke) === null || _a === void 0 ? void 0 : _a.color;
        return !particle.destroyed && !particle.spawning && !!color && (((_b = particle.strokeColor) === null || _b === void 0 ? void 0 : _b.h.value) !== undefined && color.animation.h.enable || ((_c = particle.strokeColor) === null || _c === void 0 ? void 0 : _c.s.value) !== undefined && color.animation.s.enable || ((_d = particle.strokeColor) === null || _d === void 0 ? void 0 : _d.l.value) !== undefined && color.animation.l.enable);
    }
    update(particle, delta) {
        if (!this.isEnabled(particle)) return;
        updateStrokeColor(particle, delta);
    }
}
exports.StrokeColorUpdater = StrokeColorUpdater;

},{"../../Utils":"iU3t1","../../Enums":"e5HNg"}],"1HWft":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.loadColorUpdater = void 0;
const ColorUpdater_1 = require("./ColorUpdater");
function loadColorUpdater(tsParticles) {
    tsParticles.addParticleUpdater("color", (container)=>new ColorUpdater_1.ColorUpdater(container)
    );
}
exports.loadColorUpdater = loadColorUpdater;

},{"./ColorUpdater":"2XnUO"}],"2XnUO":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ColorUpdater = void 0;
const Enums_1 = require("../../Enums");
const Utils_1 = require("../../Utils");
function updateColorValue(delta, value, valueAnimation, max, decrease) {
    var _a;
    const colorValue = value;
    if (!colorValue || !valueAnimation.enable) return;
    const offset = Utils_1.randomInRange(valueAnimation.offset);
    const velocity = ((_a = value.velocity) !== null && _a !== void 0 ? _a : 0) * delta.factor + offset * 3.6;
    if (!decrease || colorValue.status === Enums_1.AnimationStatus.increasing) {
        colorValue.value += velocity;
        if (decrease && colorValue.value > max) {
            colorValue.status = Enums_1.AnimationStatus.decreasing;
            colorValue.value -= colorValue.value % max;
        }
    } else {
        colorValue.value -= velocity;
        if (colorValue.value < 0) {
            colorValue.status = Enums_1.AnimationStatus.increasing;
            colorValue.value += colorValue.value;
        }
    }
    if (colorValue.value > max) colorValue.value %= max;
}
function updateColor(particle, delta) {
    var _a, _b, _c;
    const animationOptions = particle.options.color.animation;
    if (((_a = particle.color) === null || _a === void 0 ? void 0 : _a.h) !== undefined) updateColorValue(delta, particle.color.h, animationOptions.h, 360, false);
    if (((_b = particle.color) === null || _b === void 0 ? void 0 : _b.s) !== undefined) updateColorValue(delta, particle.color.s, animationOptions.s, 100, true);
    if (((_c = particle.color) === null || _c === void 0 ? void 0 : _c.l) !== undefined) updateColorValue(delta, particle.color.l, animationOptions.l, 100, true);
}
class ColorUpdater {
    constructor(container){
        this.container = container;
    }
    init(particle) {
        const hslColor = Utils_1.colorToHsl(particle.options.color, particle.id, particle.options.reduceDuplicates);
        if (hslColor) particle.color = Utils_1.getHslAnimationFromHsl(hslColor, particle.options.color.animation, this.container.retina.reduceFactor);
    }
    isEnabled(particle) {
        var _a, _b, _c;
        const animationOptions = particle.options.color.animation;
        return !particle.destroyed && !particle.spawning && (((_a = particle.color) === null || _a === void 0 ? void 0 : _a.h.value) !== undefined && animationOptions.h.enable || ((_b = particle.color) === null || _b === void 0 ? void 0 : _b.s.value) !== undefined && animationOptions.s.enable || ((_c = particle.color) === null || _c === void 0 ? void 0 : _c.l.value) !== undefined && animationOptions.l.enable);
    }
    update(particle, delta) {
        updateColor(particle, delta);
    }
}
exports.ColorUpdater = ColorUpdater;

},{"../../Enums":"e5HNg","../../Utils":"iU3t1"}],"4UAG4":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.loadParticlesCollisionsInteraction = void 0;
const Collider_1 = require("./Collider");
function loadParticlesCollisionsInteraction(tsParticles) {
    tsParticles.addInteractor("particlesCollisions", (container)=>new Collider_1.Collider(container)
    );
}
exports.loadParticlesCollisionsInteraction = loadParticlesCollisionsInteraction;

},{"./Collider":"2Cicm"}],"2Cicm":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Collider = void 0;
const Enums_1 = require("../../../Enums");
const Utils_1 = require("../../../Utils");
const ParticlesInteractorBase_1 = require("../../../Core/ParticlesInteractorBase");
function bounce(p1, p2) {
    Utils_1.circleBounce(Utils_1.circleBounceDataFromParticle(p1), Utils_1.circleBounceDataFromParticle(p2));
}
function destroy(p1, p2) {
    if (!p1.unbreakable && !p2.unbreakable) bounce(p1, p2);
    if (p1.getRadius() === undefined && p2.getRadius() !== undefined) p1.destroy();
    else if (p1.getRadius() !== undefined && p2.getRadius() === undefined) p2.destroy();
    else if (p1.getRadius() !== undefined && p2.getRadius() !== undefined) {
        if (p1.getRadius() >= p2.getRadius()) p2.destroy();
        else p1.destroy();
    }
}
class Collider extends ParticlesInteractorBase_1.ParticlesInteractorBase {
    constructor(container){
        super(container);
    }
    isEnabled(particle) {
        return particle.options.collisions.enable;
    }
    reset() {
    }
    interact(p1) {
        const container = this.container;
        const pos1 = p1.getPosition();
        const radius1 = p1.getRadius();
        const query = container.particles.quadTree.queryCircle(pos1, radius1 * 2);
        for (const p2 of query){
            if (p1 === p2 || !p2.options.collisions.enable || p1.options.collisions.mode !== p2.options.collisions.mode || p2.destroyed || p2.spawning) continue;
            const pos2 = p2.getPosition();
            if (Math.round(pos1.z) !== Math.round(pos2.z)) continue;
            const dist = Utils_1.getDistance(pos1, pos2);
            const radius2 = p2.getRadius();
            const distP = radius1 + radius2;
            if (dist <= distP) this.resolveCollision(p1, p2);
        }
    }
    resolveCollision(p1, p2) {
        switch(p1.options.collisions.mode){
            case Enums_1.CollisionMode.absorb:
                this.absorb(p1, p2);
                break;
            case Enums_1.CollisionMode.bounce:
                bounce(p1, p2);
                break;
            case Enums_1.CollisionMode.destroy:
                destroy(p1, p2);
                break;
        }
    }
    absorb(p1, p2) {
        const container = this.container;
        const fps = container.fpsLimit / 1000;
        if (p1.getRadius() === undefined && p2.getRadius() !== undefined) p1.destroy();
        else if (p1.getRadius() !== undefined && p2.getRadius() === undefined) p2.destroy();
        else if (p1.getRadius() !== undefined && p2.getRadius() !== undefined) {
            if (p1.getRadius() >= p2.getRadius()) {
                const factor = Utils_1.clamp(p1.getRadius() / p2.getRadius(), 0, p2.getRadius()) * fps;
                p1.size.value += factor;
                p2.size.value -= factor;
                if (p2.getRadius() <= container.retina.pixelRatio) {
                    p2.size.value = 0;
                    p2.destroy();
                }
            } else {
                const factor = Utils_1.clamp(p2.getRadius() / p1.getRadius(), 0, p1.getRadius()) * fps;
                p1.size.value -= factor;
                p2.size.value += factor;
                if (p1.getRadius() <= container.retina.pixelRatio) {
                    p1.size.value = 0;
                    p1.destroy();
                }
            }
        }
    }
}
exports.Collider = Collider;

},{"../../../Enums":"e5HNg","../../../Utils":"iU3t1","../../../Core/ParticlesInteractorBase":"6NWe3"}],"3Yx8c":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.loadAngleUpdater = void 0;
const AngleUpdater_1 = require("./AngleUpdater");
function loadAngleUpdater(tsParticles) {
    tsParticles.addParticleUpdater("angle", (container)=>new AngleUpdater_1.AngleUpdater(container)
    );
}
exports.loadAngleUpdater = loadAngleUpdater;

},{"./AngleUpdater":"hhzPX"}],"hhzPX":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AngleUpdater = void 0;
const Enums_1 = require("../../Enums");
const Utils_1 = require("../../Utils");
function updateAngle(particle, delta) {
    var _a;
    const rotate = particle.rotate;
    if (!rotate) return;
    const rotateOptions = particle.options.rotate;
    const rotateAnimation = rotateOptions.animation;
    const speed = ((_a = rotate.velocity) !== null && _a !== void 0 ? _a : 0) * delta.factor;
    const max = 2 * Math.PI;
    if (!rotateAnimation.enable) return;
    switch(rotate.status){
        case Enums_1.AnimationStatus.increasing:
            rotate.value += speed;
            if (rotate.value > max) rotate.value -= max;
            break;
        case Enums_1.AnimationStatus.decreasing:
        default:
            rotate.value -= speed;
            if (rotate.value < 0) rotate.value += max;
            break;
    }
}
class AngleUpdater {
    constructor(container){
        this.container = container;
    }
    init(particle) {
        const rotateOptions = particle.options.rotate;
        particle.rotate = {
            enable: rotateOptions.animation.enable,
            value: Utils_1.getRangeValue(rotateOptions.value) * Math.PI / 180
        };
        let rotateDirection = rotateOptions.direction;
        if (rotateDirection === Enums_1.RotateDirection.random) {
            const index = Math.floor(Math.random() * 2);
            rotateDirection = index > 0 ? Enums_1.RotateDirection.counterClockwise : Enums_1.RotateDirection.clockwise;
        }
        switch(rotateDirection){
            case Enums_1.RotateDirection.counterClockwise:
            case "counterClockwise":
                particle.rotate.status = Enums_1.AnimationStatus.decreasing;
                break;
            case Enums_1.RotateDirection.clockwise:
                particle.rotate.status = Enums_1.AnimationStatus.increasing;
                break;
        }
        const rotateAnimation = particle.options.rotate.animation;
        if (rotateAnimation.enable) {
            particle.rotate.velocity = rotateAnimation.speed / 360 * this.container.retina.reduceFactor;
            if (!rotateAnimation.sync) particle.rotate.velocity *= Math.random();
        }
    }
    isEnabled(particle) {
        const rotate = particle.options.rotate;
        const rotateAnimation = rotate.animation;
        return !particle.destroyed && !particle.spawning && !rotate.path && rotateAnimation.enable;
    }
    update(particle, delta) {
        if (!this.isEnabled(particle)) return;
        updateAngle(particle, delta);
    }
}
exports.AngleUpdater = AngleUpdater;

},{"../../Enums":"e5HNg","../../Utils":"iU3t1"}],"iNuzd":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.loadOutModesUpdater = void 0;
const OutOfCanvasUpdater_1 = require("./OutOfCanvasUpdater");
function loadOutModesUpdater(tsParticles) {
    tsParticles.addParticleUpdater("outModes", (container)=>new OutOfCanvasUpdater_1.OutOfCanvasUpdater(container)
    );
}
exports.loadOutModesUpdater = loadOutModesUpdater;

},{"./OutOfCanvasUpdater":"b3Dob"}],"b3Dob":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.OutOfCanvasUpdater = void 0;
const Utils_1 = require("../../Utils");
const Enums_1 = require("../../Enums");
const Utils_2 = require("./Utils");
class OutOfCanvasUpdater {
    constructor(container){
        this.container = container;
    }
    init() {
    }
    isEnabled(particle) {
        return !particle.destroyed && !particle.spawning;
    }
    update(particle, delta) {
        var _a, _b, _c, _d;
        const outModes = particle.options.move.outModes;
        this.updateOutMode(particle, delta, (_a = outModes.bottom) !== null && _a !== void 0 ? _a : outModes.default, Enums_1.OutModeDirection.bottom);
        this.updateOutMode(particle, delta, (_b = outModes.left) !== null && _b !== void 0 ? _b : outModes.default, Enums_1.OutModeDirection.left);
        this.updateOutMode(particle, delta, (_c = outModes.right) !== null && _c !== void 0 ? _c : outModes.default, Enums_1.OutModeDirection.right);
        this.updateOutMode(particle, delta, (_d = outModes.top) !== null && _d !== void 0 ? _d : outModes.default, Enums_1.OutModeDirection.top);
    }
    updateOutMode(particle, delta, outMode, direction) {
        switch(outMode){
            case Enums_1.OutMode.bounce:
            case Enums_1.OutMode.bounceVertical:
            case Enums_1.OutMode.bounceHorizontal:
            case "bounceVertical":
            case "bounceHorizontal":
            case Enums_1.OutMode.split:
                this.bounce(particle, delta, direction, outMode);
                break;
            case Enums_1.OutMode.destroy:
                this.destroy(particle, direction);
                break;
            case Enums_1.OutMode.out:
                this.out(particle, direction);
                break;
            case Enums_1.OutMode.none:
            default:
                this.none(particle, direction);
                break;
        }
    }
    destroy(particle, direction) {
        const container = this.container;
        if (Utils_1.isPointInside(particle.position, container.canvas.size, particle.getRadius(), direction)) return;
        container.particles.remove(particle, undefined, true);
    }
    out(particle, direction) {
        const container = this.container;
        if (Utils_1.isPointInside(particle.position, container.canvas.size, particle.getRadius(), direction)) return;
        const wrap = particle.options.move.warp, canvasSize = container.canvas.size, newPos = {
            bottom: canvasSize.height + particle.getRadius() + particle.offset.y,
            left: -particle.getRadius() - particle.offset.x,
            right: canvasSize.width + particle.getRadius() + particle.offset.x,
            top: -particle.getRadius() - particle.offset.y
        }, sizeValue = particle.getRadius(), nextBounds = Utils_1.calculateBounds(particle.position, sizeValue);
        if (direction === Enums_1.OutModeDirection.right && nextBounds.left > canvasSize.width + particle.offset.x) {
            particle.position.x = newPos.left;
            particle.initialPosition.x = particle.position.x;
            if (!wrap) {
                particle.position.y = Math.random() * canvasSize.height;
                particle.initialPosition.y = particle.position.y;
            }
        } else if (direction === Enums_1.OutModeDirection.left && nextBounds.right < -particle.offset.x) {
            particle.position.x = newPos.right;
            particle.initialPosition.x = particle.position.x;
            if (!wrap) {
                particle.position.y = Math.random() * canvasSize.height;
                particle.initialPosition.y = particle.position.y;
            }
        }
        if (direction === Enums_1.OutModeDirection.bottom && nextBounds.top > canvasSize.height + particle.offset.y) {
            if (!wrap) {
                particle.position.x = Math.random() * canvasSize.width;
                particle.initialPosition.x = particle.position.x;
            }
            particle.position.y = newPos.top;
            particle.initialPosition.y = particle.position.y;
        } else if (direction === Enums_1.OutModeDirection.top && nextBounds.bottom < -particle.offset.y) {
            if (!wrap) {
                particle.position.x = Math.random() * canvasSize.width;
                particle.initialPosition.x = particle.position.x;
            }
            particle.position.y = newPos.bottom;
            particle.initialPosition.y = particle.position.y;
        }
    }
    bounce(particle, delta, direction, outMode) {
        const container = this.container;
        let handled = false;
        for (const [, plugin] of container.plugins){
            if (plugin.particleBounce !== undefined) handled = plugin.particleBounce(particle, delta, direction);
            if (handled) break;
        }
        if (handled) return;
        const pos = particle.getPosition(), offset = particle.offset, size = particle.getRadius(), bounds = Utils_1.calculateBounds(pos, size), canvasSize = container.canvas.size;
        Utils_2.bounceHorizontal({
            particle,
            outMode,
            direction,
            bounds,
            canvasSize,
            offset,
            size
        });
        Utils_2.bounceVertical({
            particle,
            outMode,
            direction,
            bounds,
            canvasSize,
            offset,
            size
        });
    }
    none(particle, direction) {
        if (particle.options.move.distance.horizontal && (direction === Enums_1.OutModeDirection.left || direction === Enums_1.OutModeDirection.right) || particle.options.move.distance.vertical && (direction === Enums_1.OutModeDirection.top || direction === Enums_1.OutModeDirection.bottom)) return;
        const gravityOptions = particle.options.move.gravity, container = this.container;
        const canvasSize = container.canvas.size;
        const pRadius = particle.getRadius();
        if (!gravityOptions.enable) {
            if (particle.velocity.y > 0 && particle.position.y <= canvasSize.height + pRadius || particle.velocity.y < 0 && particle.position.y >= -pRadius || particle.velocity.x > 0 && particle.position.x <= canvasSize.width + pRadius || particle.velocity.x < 0 && particle.position.x >= -pRadius) return;
            if (!Utils_1.isPointInside(particle.position, container.canvas.size, pRadius, direction)) container.particles.remove(particle);
        } else {
            const position = particle.position;
            if (!gravityOptions.inverse && position.y > canvasSize.height + pRadius && direction === Enums_1.OutModeDirection.bottom || gravityOptions.inverse && position.y < -pRadius && direction === Enums_1.OutModeDirection.top) container.particles.remove(particle);
        }
    }
}
exports.OutOfCanvasUpdater = OutOfCanvasUpdater;

},{"../../Utils":"iU3t1","../../Enums":"e5HNg","./Utils":"2tztf"}],"2tztf":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.bounceVertical = exports.bounceHorizontal = void 0;
const Enums_1 = require("../../Enums");
const Utils_1 = require("../../Utils");
function bounceHorizontal(data) {
    if (!(data.outMode === Enums_1.OutMode.bounce || data.outMode === Enums_1.OutMode.bounceHorizontal || data.outMode === "bounceHorizontal" || data.outMode === Enums_1.OutMode.split)) return;
    const velocity = data.particle.velocity.x;
    let bounced = false;
    if (data.direction === Enums_1.OutModeDirection.right && data.bounds.right >= data.canvasSize.width && velocity > 0 || data.direction === Enums_1.OutModeDirection.left && data.bounds.left <= 0 && velocity < 0) {
        const newVelocity = Utils_1.getRangeValue(data.particle.options.bounce.horizontal.value);
        data.particle.velocity.x *= -newVelocity;
        bounced = true;
    }
    if (!bounced) return;
    const minPos = data.offset.x + data.size;
    if (data.bounds.right >= data.canvasSize.width) data.particle.position.x = data.canvasSize.width - minPos;
    else if (data.bounds.left <= 0) data.particle.position.x = minPos;
    if (data.outMode === Enums_1.OutMode.split) data.particle.destroy();
}
exports.bounceHorizontal = bounceHorizontal;
function bounceVertical(data) {
    if (data.outMode === Enums_1.OutMode.bounce || data.outMode === Enums_1.OutMode.bounceVertical || data.outMode === "bounceVertical" || data.outMode === Enums_1.OutMode.split) {
        const velocity = data.particle.velocity.y;
        let bounced = false;
        if (data.direction === Enums_1.OutModeDirection.bottom && data.bounds.bottom >= data.canvasSize.height && velocity > 0 || data.direction === Enums_1.OutModeDirection.top && data.bounds.top <= 0 && velocity < 0) {
            const newVelocity = Utils_1.getRangeValue(data.particle.options.bounce.vertical.value);
            data.particle.velocity.y *= -newVelocity;
            bounced = true;
        }
        if (!bounced) return;
        const minPos = data.offset.y + data.size;
        if (data.bounds.bottom >= data.canvasSize.height) data.particle.position.y = data.canvasSize.height - minPos;
        else if (data.bounds.top <= 0) data.particle.position.y = minPos;
        if (data.outMode === Enums_1.OutMode.split) data.particle.destroy();
    }
}
exports.bounceVertical = bounceVertical;

},{"../../Enums":"e5HNg","../../Utils":"iU3t1"}],"bS298":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.loadExternalRepulseInteraction = void 0;
const Repulser_1 = require("./Repulser");
function loadExternalRepulseInteraction(tsParticles) {
    tsParticles.addInteractor("externalRepulse", (container)=>new Repulser_1.Repulser(container)
    );
}
exports.loadExternalRepulseInteraction = loadExternalRepulseInteraction;

},{"./Repulser":"7bKMu"}],"7bKMu":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Repulser = void 0;
const Enums_1 = require("../../../Enums");
const Utils_1 = require("../../../Utils");
const Vector_1 = require("../../../Core/Particle/Vector");
const ExternalInteractorBase_1 = require("../../../Core/ExternalInteractorBase");
class Repulser extends ExternalInteractorBase_1.ExternalInteractorBase {
    constructor(container){
        super(container);
    }
    isEnabled() {
        const container = this.container, options = container.actualOptions, mouse = container.interactivity.mouse, events = options.interactivity.events, divs = events.onDiv, divRepulse = Utils_1.isDivModeEnabled(Enums_1.DivMode.repulse, divs);
        if (!(divRepulse || events.onHover.enable && mouse.position || events.onClick.enable && mouse.clickPosition)) return false;
        const hoverMode = events.onHover.mode, clickMode = events.onClick.mode;
        return Utils_1.isInArray(Enums_1.HoverMode.repulse, hoverMode) || Utils_1.isInArray(Enums_1.ClickMode.repulse, clickMode) || divRepulse;
    }
    reset() {
    }
    interact() {
        const container = this.container, options = container.actualOptions, mouseMoveStatus = container.interactivity.status === Utils_1.Constants.mouseMoveEvent, events = options.interactivity.events, hoverEnabled = events.onHover.enable, hoverMode = events.onHover.mode, clickEnabled = events.onClick.enable, clickMode = events.onClick.mode, divs = events.onDiv;
        if (mouseMoveStatus && hoverEnabled && Utils_1.isInArray(Enums_1.HoverMode.repulse, hoverMode)) this.hoverRepulse();
        else if (clickEnabled && Utils_1.isInArray(Enums_1.ClickMode.repulse, clickMode)) this.clickRepulse();
        else Utils_1.divModeExecute(Enums_1.DivMode.repulse, divs, (selector, div)=>this.singleSelectorRepulse(selector, div)
        );
    }
    singleSelectorRepulse(selector, div) {
        const container = this.container, query = document.querySelectorAll(selector);
        if (!query.length) return;
        query.forEach((item)=>{
            const elem = item, pxRatio = container.retina.pixelRatio, pos = {
                x: (elem.offsetLeft + elem.offsetWidth / 2) * pxRatio,
                y: (elem.offsetTop + elem.offsetHeight / 2) * pxRatio
            }, repulseRadius = elem.offsetWidth / 2 * pxRatio, area = div.type === Enums_1.DivType.circle ? new Utils_1.Circle(pos.x, pos.y, repulseRadius) : new Utils_1.Rectangle(elem.offsetLeft * pxRatio, elem.offsetTop * pxRatio, elem.offsetWidth * pxRatio, elem.offsetHeight * pxRatio), divs = container.actualOptions.interactivity.modes.repulse.divs, divRepulse = Utils_1.divMode(divs, elem);
            this.processRepulse(pos, repulseRadius, area, divRepulse);
        });
    }
    hoverRepulse() {
        const container = this.container, mousePos = container.interactivity.mouse.position;
        if (!mousePos) return;
        const repulseRadius = container.retina.repulseModeDistance;
        this.processRepulse(mousePos, repulseRadius, new Utils_1.Circle(mousePos.x, mousePos.y, repulseRadius));
    }
    processRepulse(position, repulseRadius, area, divRepulse) {
        var _a;
        const container = this.container, query = container.particles.quadTree.query(area), repulseOptions = container.actualOptions.interactivity.modes.repulse;
        for (const particle of query){
            const { dx , dy , distance  } = Utils_1.getDistances(particle.position, position), velocity = ((_a = divRepulse === null || divRepulse === void 0 ? void 0 : divRepulse.speed) !== null && _a !== void 0 ? _a : repulseOptions.speed) * repulseOptions.factor, repulseFactor = Utils_1.clamp(Utils_1.calcEasing(1 - distance / repulseRadius, repulseOptions.easing) * velocity, 0, repulseOptions.maxSpeed), normVec = Vector_1.Vector.create(distance === 0 ? velocity : dx / distance * repulseFactor, distance === 0 ? velocity : dy / distance * repulseFactor);
            particle.position.addTo(normVec);
        }
    }
    clickRepulse() {
        const container = this.container;
        if (!container.repulse.finish) {
            if (!container.repulse.count) container.repulse.count = 0;
            container.repulse.count++;
            if (container.repulse.count === container.particles.count) container.repulse.finish = true;
        }
        if (container.repulse.clicking) {
            const repulseDistance = container.retina.repulseModeDistance, repulseRadius = Math.pow(repulseDistance / 6, 3), mouseClickPos = container.interactivity.mouse.clickPosition;
            if (mouseClickPos === undefined) return;
            const range = new Utils_1.Circle(mouseClickPos.x, mouseClickPos.y, repulseRadius), query = container.particles.quadTree.query(range);
            for (const particle of query){
                const { dx , dy , distance  } = Utils_1.getDistances(mouseClickPos, particle.position), d = distance ** 2, velocity = container.actualOptions.interactivity.modes.repulse.speed, force = -repulseRadius * velocity / d;
                if (d <= repulseRadius) {
                    container.repulse.particles.push(particle);
                    const vect = Vector_1.Vector.create(dx, dy);
                    vect.length = force;
                    particle.velocity.setTo(vect);
                }
            }
        } else if (container.repulse.clicking === false) {
            for (const particle of container.repulse.particles)particle.velocity.setTo(particle.initialVelocity);
            container.repulse.particles = [];
        }
    }
}
exports.Repulser = Repulser;

},{"../../../Enums":"e5HNg","../../../Utils":"iU3t1","../../../Core/Particle/Vector":"c55jT","../../../Core/ExternalInteractorBase":"coWPo"}],"1QWWg":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.loadLineShape = void 0;
const LineDrawer_1 = require("./LineDrawer");
function loadLineShape(tsParticles) {
    tsParticles.addShape("line", new LineDrawer_1.LineDrawer());
}
exports.loadLineShape = loadLineShape;

},{"./LineDrawer":"1Xebd"}],"1Xebd":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.LineDrawer = void 0;
class LineDrawer {
    getSidesCount() {
        return 1;
    }
    draw(context, particle, radius) {
        context.moveTo(-radius / 2, 0);
        context.lineTo(radius / 2, 0);
    }
}
exports.LineDrawer = LineDrawer;

},{}],"3aiBE":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.loadExternalBounceInteraction = void 0;
const Bouncer_1 = require("./Bouncer");
function loadExternalBounceInteraction(tsParticles) {
    tsParticles.addInteractor("externalBounce", (container)=>new Bouncer_1.Bouncer(container)
    );
}
exports.loadExternalBounceInteraction = loadExternalBounceInteraction;

},{"./Bouncer":"k8uZb"}],"k8uZb":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Bouncer = void 0;
const Utils_1 = require("../../../Utils");
const Enums_1 = require("../../../Enums");
const Vector_1 = require("../../../Core/Particle/Vector");
const ExternalInteractorBase_1 = require("../../../Core/ExternalInteractorBase");
class Bouncer extends ExternalInteractorBase_1.ExternalInteractorBase {
    constructor(container){
        super(container);
    }
    isEnabled() {
        const container = this.container, options = container.actualOptions, mouse = container.interactivity.mouse, events = options.interactivity.events, divs = events.onDiv;
        return mouse.position && events.onHover.enable && Utils_1.isInArray(Enums_1.HoverMode.bounce, events.onHover.mode) || Utils_1.isDivModeEnabled(Enums_1.DivMode.bounce, divs);
    }
    interact() {
        const container = this.container, options = container.actualOptions, events = options.interactivity.events, mouseMoveStatus = container.interactivity.status === Utils_1.Constants.mouseMoveEvent, hoverEnabled = events.onHover.enable, hoverMode = events.onHover.mode, divs = events.onDiv;
        if (mouseMoveStatus && hoverEnabled && Utils_1.isInArray(Enums_1.HoverMode.bounce, hoverMode)) this.processMouseBounce();
        else Utils_1.divModeExecute(Enums_1.DivMode.bounce, divs, (selector, div)=>this.singleSelectorBounce(selector, div)
        );
    }
    reset() {
    }
    processMouseBounce() {
        const container = this.container, pxRatio = container.retina.pixelRatio, tolerance = 10 * pxRatio, mousePos = container.interactivity.mouse.position, radius = container.retina.bounceModeDistance;
        if (mousePos) this.processBounce(mousePos, radius, new Utils_1.Circle(mousePos.x, mousePos.y, radius + tolerance));
    }
    singleSelectorBounce(selector, div) {
        const container = this.container;
        const query = document.querySelectorAll(selector);
        if (!query.length) return;
        query.forEach((item)=>{
            const elem = item, pxRatio = container.retina.pixelRatio, pos = {
                x: (elem.offsetLeft + elem.offsetWidth / 2) * pxRatio,
                y: (elem.offsetTop + elem.offsetHeight / 2) * pxRatio
            }, radius = elem.offsetWidth / 2 * pxRatio, tolerance = 10 * pxRatio;
            const area = div.type === Enums_1.DivType.circle ? new Utils_1.Circle(pos.x, pos.y, radius + tolerance) : new Utils_1.Rectangle(elem.offsetLeft * pxRatio - tolerance, elem.offsetTop * pxRatio - tolerance, elem.offsetWidth * pxRatio + tolerance * 2, elem.offsetHeight * pxRatio + tolerance * 2);
            this.processBounce(pos, radius, area);
        });
    }
    processBounce(position, radius, area) {
        const query = this.container.particles.quadTree.query(area);
        for (const particle of query){
            if (area instanceof Utils_1.Circle) Utils_1.circleBounce(Utils_1.circleBounceDataFromParticle(particle), {
                position,
                radius,
                mass: radius ** 2 * Math.PI / 2,
                velocity: Vector_1.Vector.origin,
                factor: Vector_1.Vector.origin
            });
            else if (area instanceof Utils_1.Rectangle) Utils_1.rectBounce(particle, Utils_1.calculateBounds(position, radius));
        }
    }
}
exports.Bouncer = Bouncer;

},{"../../../Utils":"iU3t1","../../../Enums":"e5HNg","../../../Core/Particle/Vector":"c55jT","../../../Core/ExternalInteractorBase":"coWPo"}],"4VY7G":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.loadTextShape = void 0;
const TextDrawer_1 = require("./TextDrawer");
function loadTextShape(tsParticles) {
    const drawer = new TextDrawer_1.TextDrawer();
    for (const type of TextDrawer_1.validTypes)tsParticles.addShape(type, drawer);
}
exports.loadTextShape = loadTextShape;

},{"./TextDrawer":"dIHNY"}],"dIHNY":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TextDrawer = exports.validTypes = void 0;
const Utils_1 = require("../../Utils");
exports.validTypes = [
    "text",
    "character",
    "char"
];
class TextDrawer {
    getSidesCount() {
        return 12;
    }
    async init(container) {
        const options = container.actualOptions;
        if (exports.validTypes.find((t)=>Utils_1.isInArray(t, options.particles.shape.type)
        )) {
            const shapeOptions = exports.validTypes.map((t)=>options.particles.shape.options[t]
            ).find((t)=>!!t
            );
            if (shapeOptions instanceof Array) {
                const promises = [];
                for (const character of shapeOptions)promises.push(Utils_1.loadFont(character));
                await Promise.allSettled(promises);
            } else if (shapeOptions !== undefined) await Utils_1.loadFont(shapeOptions);
        }
    }
    draw(context, particle, radius, opacity) {
        var _a, _b, _c;
        const character = particle.shapeData;
        if (character === undefined) return;
        const textData = character.value;
        if (textData === undefined) return;
        const textParticle = particle;
        if (textParticle.text === undefined) textParticle.text = textData instanceof Array ? Utils_1.itemFromArray(textData, particle.randomIndexData) : textData;
        const text = textParticle.text;
        const style = (_a = character.style) !== null && _a !== void 0 ? _a : "";
        const weight = (_b = character.weight) !== null && _b !== void 0 ? _b : "400";
        const size = Math.round(radius) * 2;
        const font = (_c = character.font) !== null && _c !== void 0 ? _c : "Verdana";
        const fill = particle.fill;
        const offsetX = text.length * radius / 2;
        context.font = `${style} ${weight} ${size}px "${font}"`;
        const pos = {
            x: -offsetX,
            y: radius / 2
        };
        context.globalAlpha = opacity;
        if (fill) context.fillText(text, pos.x, pos.y);
        else context.strokeText(text, pos.x, pos.y);
        context.globalAlpha = 1;
    }
}
exports.TextDrawer = TextDrawer;

},{"../../Utils":"iU3t1"}],"2pbDp":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.loadParticlesLinksInteraction = exports.loadInteraction = void 0;
const Linker_1 = require("./Linker");
const plugin_1 = require("./plugin");
function loadInteraction(tsParticles) {
    tsParticles.addInteractor("particlesLinks", (container)=>new Linker_1.Linker(container)
    );
}
exports.loadInteraction = loadInteraction;
function loadParticlesLinksInteraction(tsParticles) {
    loadInteraction(tsParticles);
    plugin_1.loadPlugin(tsParticles);
}
exports.loadParticlesLinksInteraction = loadParticlesLinksInteraction;

},{"./Linker":"51Hgz","./plugin":"3Z83r"}],"51Hgz":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Linker = void 0;
const Utils_1 = require("../../../Utils");
const ParticlesInteractorBase_1 = require("../../../Core/ParticlesInteractorBase");
function getLinkDistance(pos1, pos2, optDistance, canvasSize, warp) {
    let distance = Utils_1.getDistance(pos1, pos2);
    if (!warp || distance <= optDistance) return distance;
    const pos2NE = {
        x: pos2.x - canvasSize.width,
        y: pos2.y
    };
    distance = Utils_1.getDistance(pos1, pos2NE);
    if (distance <= optDistance) return distance;
    const pos2SE = {
        x: pos2.x - canvasSize.width,
        y: pos2.y - canvasSize.height
    };
    distance = Utils_1.getDistance(pos1, pos2SE);
    if (distance <= optDistance) return distance;
    const pos2SW = {
        x: pos2.x,
        y: pos2.y - canvasSize.height
    };
    distance = Utils_1.getDistance(pos1, pos2SW);
    return distance;
}
class Linker extends ParticlesInteractorBase_1.ParticlesInteractorBase {
    constructor(container){
        super(container);
    }
    isEnabled(particle) {
        return particle.options.links.enable;
    }
    reset() {
    }
    interact(p1) {
        var _a;
        p1.links = [];
        const pos1 = p1.getPosition();
        const container = this.container;
        const canvasSize = container.canvas.size;
        if (pos1.x < 0 || pos1.y < 0 || pos1.x > canvasSize.width || pos1.y > canvasSize.height) return;
        const linkOpt1 = p1.options.links;
        const optOpacity = linkOpt1.opacity;
        const optDistance = (_a = p1.retina.linksDistance) !== null && _a !== void 0 ? _a : container.retina.linksDistance;
        const warp = linkOpt1.warp;
        const range = warp ? new Utils_1.CircleWarp(pos1.x, pos1.y, optDistance, canvasSize) : new Utils_1.Circle(pos1.x, pos1.y, optDistance);
        const query = container.particles.quadTree.query(range);
        for (const p2 of query){
            const linkOpt2 = p2.options.links;
            if (p1 === p2 || !linkOpt2.enable || linkOpt1.id !== linkOpt2.id || p2.spawning || p2.destroyed || p1.links.map((t)=>t.destination
            ).indexOf(p2) !== -1 || p2.links.map((t)=>t.destination
            ).indexOf(p1) !== -1) continue;
            const pos2 = p2.getPosition();
            if (pos2.x < 0 || pos2.y < 0 || pos2.x > canvasSize.width || pos2.y > canvasSize.height) continue;
            const distance = getLinkDistance(pos1, pos2, optDistance, canvasSize, warp && linkOpt2.warp);
            if (distance > optDistance) return;
            const opacityLine = (1 - distance / optDistance) * optOpacity;
            this.setColor(p1);
            p1.links.push({
                destination: p2,
                opacity: opacityLine
            });
        }
    }
    setColor(p1) {
        const container = this.container;
        const linksOptions = p1.options.links;
        let linkColor = linksOptions.id === undefined ? container.particles.linksColor : container.particles.linksColors.get(linksOptions.id);
        if (!linkColor) {
            const optColor = linksOptions.color;
            linkColor = Utils_1.getLinkRandomColor(optColor, linksOptions.blink, linksOptions.consent);
            if (linksOptions.id === undefined) container.particles.linksColor = linkColor;
            else container.particles.linksColors.set(linksOptions.id, linkColor);
        }
    }
}
exports.Linker = Linker;

},{"../../../Utils":"iU3t1","../../../Core/ParticlesInteractorBase":"6NWe3"}],"3Z83r":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.loadPlugin = void 0;
const LinkInstance_1 = require("./LinkInstance");
class Plugin {
    constructor(){
        this.id = "links";
    }
    getPlugin(container) {
        return new LinkInstance_1.LinkInstance(container);
    }
    needsPlugin() {
        return true;
    }
    loadOptions() {
    }
}
function loadPlugin(tsParticles) {
    const plugin = new Plugin();
    tsParticles.addPlugin(plugin);
}
exports.loadPlugin = loadPlugin;

},{"./LinkInstance":"dUB3x"}],"dUB3x":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.LinkInstance = void 0;
const Utils_1 = require("../../../Utils");
class LinkInstance {
    constructor(container){
        this.container = container;
    }
    particleCreated(particle) {
        const linkParticle = particle;
        linkParticle.links = [];
    }
    particleDestroyed(particle) {
        const linkParticle = particle;
        linkParticle.links = [];
    }
    drawParticle(context, particle) {
        const linkParticle = particle;
        const container = this.container;
        const particles = container.particles;
        const pOptions = particle.options;
        if (linkParticle.links.length > 0) {
            context.save();
            const p1Links = linkParticle.links.filter((l)=>{
                const linkFreq = container.particles.getLinkFrequency(linkParticle, l.destination);
                return linkFreq <= pOptions.links.frequency;
            });
            for (const link of p1Links){
                const p2 = link.destination;
                if (pOptions.links.triangles.enable) {
                    const links = p1Links.map((l)=>l.destination
                    );
                    const vertices = p2.links.filter((t)=>{
                        const linkFreq = container.particles.getLinkFrequency(p2, t.destination);
                        return linkFreq <= p2.options.links.frequency && links.indexOf(t.destination) >= 0;
                    });
                    if (vertices.length) for (const vertex of vertices){
                        const p3 = vertex.destination;
                        const triangleFreq = particles.getTriangleFrequency(linkParticle, p2, p3);
                        if (triangleFreq > pOptions.links.triangles.frequency) continue;
                        this.drawLinkTriangle(linkParticle, link, vertex);
                    }
                }
                if (link.opacity > 0 && container.retina.linksWidth > 0) this.drawLinkLine(linkParticle, link);
            }
            context.restore();
        }
    }
    drawLinkTriangle(p1, link1, link2) {
        var _a;
        const container = this.container;
        const options = container.actualOptions;
        const p2 = link1.destination;
        const p3 = link2.destination;
        const triangleOptions = p1.options.links.triangles;
        const opacityTriangle = (_a = triangleOptions.opacity) !== null && _a !== void 0 ? _a : (link1.opacity + link2.opacity) / 2;
        if (opacityTriangle <= 0) return;
        const pos1 = p1.getPosition();
        const pos2 = p2.getPosition();
        const pos3 = p3.getPosition();
        container.canvas.draw((ctx)=>{
            if (Utils_1.getDistance(pos1, pos2) > container.retina.linksDistance || Utils_1.getDistance(pos3, pos2) > container.retina.linksDistance || Utils_1.getDistance(pos3, pos1) > container.retina.linksDistance) return;
            let colorTriangle = Utils_1.colorToRgb(triangleOptions.color);
            if (!colorTriangle) {
                const linksOptions = p1.options.links;
                const linkColor = linksOptions.id !== undefined ? container.particles.linksColors.get(linksOptions.id) : container.particles.linksColor;
                colorTriangle = Utils_1.getLinkColor(p1, p2, linkColor);
            }
            if (!colorTriangle) return;
            Utils_1.drawLinkTriangle(ctx, pos1, pos2, pos3, options.backgroundMask.enable, options.backgroundMask.composite, colorTriangle, opacityTriangle);
        });
    }
    drawLinkLine(p1, link) {
        const container = this.container;
        const options = container.actualOptions;
        const p2 = link.destination;
        let opacity = link.opacity;
        const pos1 = p1.getPosition();
        const pos2 = p2.getPosition();
        container.canvas.draw((ctx)=>{
            var _a, _b;
            let colorLine;
            const twinkle = p1.options.twinkle.lines;
            if (twinkle.enable) {
                const twinkleFreq = twinkle.frequency;
                const twinkleRgb = Utils_1.colorToRgb(twinkle.color);
                const twinkling = Math.random() < twinkleFreq;
                if (twinkling && twinkleRgb !== undefined) {
                    colorLine = twinkleRgb;
                    opacity = twinkle.opacity;
                }
            }
            if (!colorLine) {
                const linksOptions = p1.options.links;
                const linkColor = linksOptions.id !== undefined ? container.particles.linksColors.get(linksOptions.id) : container.particles.linksColor;
                colorLine = Utils_1.getLinkColor(p1, p2, linkColor);
            }
            if (!colorLine) return;
            const width = (_a = p1.retina.linksWidth) !== null && _a !== void 0 ? _a : container.retina.linksWidth;
            const maxDistance = (_b = p1.retina.linksDistance) !== null && _b !== void 0 ? _b : container.retina.linksDistance;
            Utils_1.drawLinkLine(ctx, width, pos1, pos2, maxDistance, container.canvas.size, p1.options.links.warp, options.backgroundMask.enable, options.backgroundMask.composite, colorLine, opacity, p1.options.links.shadow);
        });
    }
}
exports.LinkInstance = LinkInstance;

},{"../../../Utils":"iU3t1"}],"8XioK":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.loadSizeUpdater = void 0;
const SizeUpdater_1 = require("./SizeUpdater");
function loadSizeUpdater(tsParticles) {
    tsParticles.addParticleUpdater("size", ()=>new SizeUpdater_1.SizeUpdater()
    );
}
exports.loadSizeUpdater = loadSizeUpdater;

},{"./SizeUpdater":"bjUOw"}],"bjUOw":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SizeUpdater = void 0;
const Enums_1 = require("../../Enums");
const Utils_1 = require("../../Utils");
function checkDestroy(particle, value, minValue, maxValue) {
    switch(particle.options.size.animation.destroy){
        case Enums_1.DestroyType.max:
            if (value >= maxValue) particle.destroy();
            break;
        case Enums_1.DestroyType.min:
            if (value <= minValue) particle.destroy();
            break;
    }
}
function updateSize(particle, delta) {
    var _a, _b, _c, _d;
    const sizeVelocity = ((_a = particle.size.velocity) !== null && _a !== void 0 ? _a : 0) * delta.factor;
    const minValue = particle.size.min;
    const maxValue = particle.size.max;
    if (!(!particle.destroyed && particle.size.enable && (((_b = particle.size.loops) !== null && _b !== void 0 ? _b : 0) <= 0 || ((_c = particle.size.loops) !== null && _c !== void 0 ? _c : 0) < ((_d = particle.size.maxLoops) !== null && _d !== void 0 ? _d : 0)))) return;
    switch(particle.size.status){
        case Enums_1.AnimationStatus.increasing:
            if (particle.size.value >= maxValue) {
                particle.size.status = Enums_1.AnimationStatus.decreasing;
                if (!particle.size.loops) particle.size.loops = 0;
                particle.size.loops++;
            } else particle.size.value += sizeVelocity;
            break;
        case Enums_1.AnimationStatus.decreasing:
            if (particle.size.value <= minValue) {
                particle.size.status = Enums_1.AnimationStatus.increasing;
                if (!particle.size.loops) particle.size.loops = 0;
                particle.size.loops++;
            } else particle.size.value -= sizeVelocity;
    }
    checkDestroy(particle, particle.size.value, minValue, maxValue);
    if (!particle.destroyed) particle.size.value = Utils_1.clamp(particle.size.value, minValue, maxValue);
}
class SizeUpdater {
    init() {
    }
    isEnabled(particle) {
        var _a, _b, _c;
        return !particle.destroyed && !particle.spawning && particle.size.enable && (((_a = particle.size.loops) !== null && _a !== void 0 ? _a : 0) <= 0 || ((_b = particle.size.loops) !== null && _b !== void 0 ? _b : 0) < ((_c = particle.size.maxLoops) !== null && _c !== void 0 ? _c : 0));
    }
    update(particle, delta) {
        if (!this.isEnabled(particle)) return;
        updateSize(particle, delta);
    }
}
exports.SizeUpdater = SizeUpdater;

},{"../../Enums":"e5HNg","../../Utils":"iU3t1"}],"cxlSL":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.loadExternalTrailInteraction = void 0;
const TrailMaker_1 = require("./TrailMaker");
function loadExternalTrailInteraction(tsParticles) {
    tsParticles.addInteractor("externalTrail", (container)=>new TrailMaker_1.TrailMaker(container)
    );
}
exports.loadExternalTrailInteraction = loadExternalTrailInteraction;

},{"./TrailMaker":"44oNh"}],"44oNh":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TrailMaker = void 0;
const Utils_1 = require("../../../Utils");
const Enums_1 = require("../../../Enums");
const ExternalInteractorBase_1 = require("../../../Core/ExternalInteractorBase");
class TrailMaker extends ExternalInteractorBase_1.ExternalInteractorBase {
    constructor(container){
        super(container);
        this.delay = 0;
    }
    interact(delta) {
        var _a, _b, _c, _d;
        if (!this.container.retina.reduceFactor) return;
        const container = this.container, options = container.actualOptions, trailOptions = options.interactivity.modes.trail, optDelay = trailOptions.delay * 1000 / this.container.retina.reduceFactor;
        if (this.delay < optDelay) this.delay += delta.value;
        if (this.delay < optDelay) return;
        let canEmit = true;
        if (trailOptions.pauseOnStop) {
            if (container.interactivity.mouse.position === this.lastPosition || ((_a = container.interactivity.mouse.position) === null || _a === void 0 ? void 0 : _a.x) === ((_b = this.lastPosition) === null || _b === void 0 ? void 0 : _b.x) && ((_c = container.interactivity.mouse.position) === null || _c === void 0 ? void 0 : _c.y) === ((_d = this.lastPosition) === null || _d === void 0 ? void 0 : _d.y)) canEmit = false;
        }
        if (container.interactivity.mouse.position) this.lastPosition = {
            x: container.interactivity.mouse.position.x,
            y: container.interactivity.mouse.position.y
        };
        else delete this.lastPosition;
        if (canEmit) container.particles.push(trailOptions.quantity, container.interactivity.mouse, trailOptions.particles);
        this.delay -= optDelay;
    }
    isEnabled() {
        const container = this.container, options = container.actualOptions, mouse = container.interactivity.mouse, events = options.interactivity.events;
        return mouse.clicking && mouse.inside && !!mouse.position && Utils_1.isInArray(Enums_1.ClickMode.trail, events.onClick.mode) || mouse.inside && !!mouse.position && Utils_1.isInArray(Enums_1.HoverMode.trail, events.onHover.mode);
    }
    reset() {
    }
}
exports.TrailMaker = TrailMaker;

},{"../../../Utils":"iU3t1","../../../Enums":"e5HNg","../../../Core/ExternalInteractorBase":"coWPo"}],"97tCr":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.loadTiltUpdater = void 0;
const TiltUpdater_1 = require("./TiltUpdater");
function loadTiltUpdater(tsParticles) {
    tsParticles.addParticleUpdater("tilt", (container)=>new TiltUpdater_1.TiltUpdater(container)
    );
}
exports.loadTiltUpdater = loadTiltUpdater;

},{"./TiltUpdater":"6mudb"}],"6mudb":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TiltUpdater = void 0;
const Enums_1 = require("../../Enums");
const Utils_1 = require("../../Utils");
function updateTilt(particle, delta) {
    var _a;
    if (!particle.tilt) return;
    const tilt = particle.options.tilt;
    const tiltAnimation = tilt.animation;
    const speed = ((_a = particle.tilt.velocity) !== null && _a !== void 0 ? _a : 0) * delta.factor;
    const max = 2 * Math.PI;
    if (!tiltAnimation.enable) return;
    switch(particle.tilt.status){
        case Enums_1.AnimationStatus.increasing:
            particle.tilt.value += speed;
            if (particle.tilt.value > max) particle.tilt.value -= max;
            break;
        case Enums_1.AnimationStatus.decreasing:
        default:
            particle.tilt.value -= speed;
            if (particle.tilt.value < 0) particle.tilt.value += max;
            break;
    }
}
class TiltUpdater {
    constructor(container){
        this.container = container;
    }
    init(particle) {
        const tiltOptions = particle.options.tilt;
        particle.tilt = {
            enable: tiltOptions.enable,
            value: Utils_1.getRangeValue(tiltOptions.value) * Math.PI / 180,
            sinDirection: Math.random() >= 0.5 ? 1 : -1,
            cosDirection: Math.random() >= 0.5 ? 1 : -1
        };
        let tiltDirection = tiltOptions.direction;
        if (tiltDirection === Enums_1.TiltDirection.random) {
            const index = Math.floor(Math.random() * 2);
            tiltDirection = index > 0 ? Enums_1.TiltDirection.counterClockwise : Enums_1.TiltDirection.clockwise;
        }
        switch(tiltDirection){
            case Enums_1.TiltDirection.counterClockwise:
            case "counterClockwise":
                particle.tilt.status = Enums_1.AnimationStatus.decreasing;
                break;
            case Enums_1.TiltDirection.clockwise:
                particle.tilt.status = Enums_1.AnimationStatus.increasing;
                break;
        }
        const tiltAnimation = particle.options.tilt.animation;
        if (tiltAnimation.enable) {
            particle.tilt.velocity = tiltAnimation.speed / 360 * this.container.retina.reduceFactor;
            if (!tiltAnimation.sync) particle.tilt.velocity *= Math.random();
        }
    }
    isEnabled(particle) {
        const tilt = particle.options.tilt;
        const tiltAnimation = tilt.animation;
        return !particle.destroyed && !particle.spawning && tiltAnimation.enable;
    }
    update(particle, delta) {
        if (!this.isEnabled(particle)) return;
        updateTilt(particle, delta);
    }
}
exports.TiltUpdater = TiltUpdater;

},{"../../Enums":"e5HNg","../../Utils":"iU3t1"}],"jDo1h":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.loadWobbleUpdater = void 0;
const WobbleUpdater_1 = require("./WobbleUpdater");
function loadWobbleUpdater(tsParticles) {
    tsParticles.addParticleUpdater("wobble", (container)=>new WobbleUpdater_1.WobbleUpdater(container)
    );
}
exports.loadWobbleUpdater = loadWobbleUpdater;

},{"./WobbleUpdater":"5ehas"}],"5ehas":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.WobbleUpdater = void 0;
const Utils_1 = require("../../Utils");
function updateWobble(particle, delta) {
    var _a;
    const wobble = particle.options.wobble;
    if (!wobble.enable || !particle.wobble) return;
    const speed = particle.wobble.speed * delta.factor;
    const distance = ((_a = particle.retina.wobbleDistance) !== null && _a !== void 0 ? _a : 0) * delta.factor / (1000 / 60);
    const max = 2 * Math.PI;
    particle.wobble.angle += speed;
    if (particle.wobble.angle > max) particle.wobble.angle -= max;
    particle.position.x += distance * Math.cos(particle.wobble.angle);
    particle.position.y += distance * Math.abs(Math.sin(particle.wobble.angle));
}
class WobbleUpdater {
    constructor(container){
        this.container = container;
    }
    init(particle) {
        const wobbleOpt = particle.options.wobble;
        if (wobbleOpt.enable) particle.wobble = {
            angle: Math.random() * Math.PI * 2,
            speed: Utils_1.getRangeValue(wobbleOpt.speed) / 360
        };
        else particle.wobble = {
            angle: 0,
            speed: 0
        };
        particle.retina.wobbleDistance = Utils_1.getRangeValue(wobbleOpt.distance) * this.container.retina.pixelRatio;
    }
    isEnabled(particle) {
        return !particle.destroyed && !particle.spawning && particle.options.wobble.enable;
    }
    update(particle, delta) {
        if (!this.isEnabled(particle)) return;
        updateWobble(particle, delta);
    }
}
exports.WobbleUpdater = WobbleUpdater;

},{"../../Utils":"iU3t1"}],"iSc5v":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.loadAbsorbersPlugin = void 0;
const Absorbers_1 = require("./Absorbers");
const Enums_1 = require("./Enums");
const Absorber_1 = require("./Options/Classes/Absorber");
const Utils_1 = require("../../Utils");
class Plugin {
    constructor(){
        this.id = "absorbers";
    }
    getPlugin(container) {
        return new Absorbers_1.Absorbers(container);
    }
    needsPlugin(options) {
        var _a, _b, _c;
        if (options === undefined) return false;
        const absorbers = options.absorbers;
        let loadAbsorbers = false;
        if (absorbers instanceof Array) {
            if (absorbers.length) loadAbsorbers = true;
        } else if (absorbers !== undefined) loadAbsorbers = true;
        else if (((_c = (_b = (_a = options.interactivity) === null || _a === void 0 ? void 0 : _a.events) === null || _b === void 0 ? void 0 : _b.onClick) === null || _c === void 0 ? void 0 : _c.mode) && Utils_1.isInArray(Enums_1.AbsorberClickMode.absorber, options.interactivity.events.onClick.mode)) loadAbsorbers = true;
        return loadAbsorbers;
    }
    loadOptions(options, source) {
        var _a, _b;
        if (!this.needsPlugin(options) && !this.needsPlugin(source)) return;
        const optionsCast = options;
        if (source === null || source === void 0 ? void 0 : source.absorbers) {
            if ((source === null || source === void 0 ? void 0 : source.absorbers) instanceof Array) optionsCast.absorbers = source === null || source === void 0 ? void 0 : source.absorbers.map((s)=>{
                const tmp = new Absorber_1.Absorber();
                tmp.load(s);
                return tmp;
            });
            else {
                let absorberOptions = optionsCast.absorbers;
                if ((absorberOptions === null || absorberOptions === void 0 ? void 0 : absorberOptions.load) === undefined) optionsCast.absorbers = absorberOptions = new Absorber_1.Absorber();
                absorberOptions.load(source === null || source === void 0 ? void 0 : source.absorbers);
            }
        }
        const interactivityAbsorbers = (_b = (_a = source === null || source === void 0 ? void 0 : source.interactivity) === null || _a === void 0 ? void 0 : _a.modes) === null || _b === void 0 ? void 0 : _b.absorbers;
        if (interactivityAbsorbers) {
            if (interactivityAbsorbers instanceof Array) optionsCast.interactivity.modes.absorbers = interactivityAbsorbers.map((s)=>{
                const tmp = new Absorber_1.Absorber();
                tmp.load(s);
                return tmp;
            });
            else {
                let absorberOptions = optionsCast.interactivity.modes.absorbers;
                if ((absorberOptions === null || absorberOptions === void 0 ? void 0 : absorberOptions.load) === undefined) optionsCast.interactivity.modes.absorbers = absorberOptions = new Absorber_1.Absorber();
                absorberOptions.load(interactivityAbsorbers);
            }
        }
    }
}
function loadAbsorbersPlugin(tsParticles) {
    const plugin = new Plugin();
    tsParticles.addPlugin(plugin);
}
exports.loadAbsorbersPlugin = loadAbsorbersPlugin;

},{"./Absorbers":"dTodv","./Enums":"aVogp","./Options/Classes/Absorber":"itQUa","../../Utils":"iU3t1"}],"dTodv":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Absorbers = void 0;
const AbsorberInstance_1 = require("./AbsorberInstance");
const Absorber_1 = require("./Options/Classes/Absorber");
const Enums_1 = require("./Enums");
const Utils_1 = require("../../Utils");
class Absorbers {
    constructor(container){
        this.container = container;
        this.array = [];
        this.absorbers = [];
        this.interactivityAbsorbers = [];
        const overridableContainer = container;
        overridableContainer.getAbsorber = (idxOrName)=>idxOrName === undefined || typeof idxOrName === "number" ? this.array[idxOrName || 0] : this.array.find((t)=>t.name === idxOrName
            )
        ;
        overridableContainer.addAbsorber = (options, position)=>this.addAbsorber(options, position)
        ;
    }
    init(options) {
        var _a, _b;
        if (!options) return;
        if (options.absorbers) {
            if (options.absorbers instanceof Array) this.absorbers = options.absorbers.map((s)=>{
                const tmp = new Absorber_1.Absorber();
                tmp.load(s);
                return tmp;
            });
            else {
                if (this.absorbers instanceof Array) this.absorbers = new Absorber_1.Absorber();
                this.absorbers.load(options.absorbers);
            }
        }
        const interactivityAbsorbers = (_b = (_a = options.interactivity) === null || _a === void 0 ? void 0 : _a.modes) === null || _b === void 0 ? void 0 : _b.absorbers;
        if (interactivityAbsorbers) {
            if (interactivityAbsorbers instanceof Array) this.interactivityAbsorbers = interactivityAbsorbers.map((s)=>{
                const tmp = new Absorber_1.Absorber();
                tmp.load(s);
                return tmp;
            });
            else {
                if (this.interactivityAbsorbers instanceof Array) this.interactivityAbsorbers = new Absorber_1.Absorber();
                this.interactivityAbsorbers.load(interactivityAbsorbers);
            }
        }
        if (this.absorbers instanceof Array) for (const absorberOptions of this.absorbers)this.addAbsorber(absorberOptions);
        else this.addAbsorber(this.absorbers);
    }
    particleUpdate(particle) {
        for (const absorber of this.array){
            absorber.attract(particle);
            if (particle.destroyed) break;
        }
    }
    draw(context) {
        for (const absorber of this.array){
            context.save();
            absorber.draw(context);
            context.restore();
        }
    }
    stop() {
        this.array = [];
    }
    resize() {
        for (const absorber of this.array)absorber.resize();
    }
    handleClickMode(mode) {
        const container = this.container;
        const absorberOptions = this.absorbers;
        const modeAbsorbers = this.interactivityAbsorbers;
        if (mode === Enums_1.AbsorberClickMode.absorber) {
            let absorbersModeOptions;
            if (modeAbsorbers instanceof Array) {
                if (modeAbsorbers.length > 0) absorbersModeOptions = Utils_1.itemFromArray(modeAbsorbers);
            } else absorbersModeOptions = modeAbsorbers;
            const absorbersOptions = absorbersModeOptions !== null && absorbersModeOptions !== void 0 ? absorbersModeOptions : absorberOptions instanceof Array ? Utils_1.itemFromArray(absorberOptions) : absorberOptions;
            const aPosition = container.interactivity.mouse.clickPosition;
            this.addAbsorber(absorbersOptions, aPosition);
        }
    }
    addAbsorber(options, position) {
        const absorber = new AbsorberInstance_1.AbsorberInstance(this, this.container, options, position);
        this.array.push(absorber);
        return absorber;
    }
    removeAbsorber(absorber) {
        const index = this.array.indexOf(absorber);
        if (index >= 0) this.array.splice(index, 1);
    }
}
exports.Absorbers = Absorbers;

},{"./AbsorberInstance":"ljo2N","./Options/Classes/Absorber":"itQUa","./Enums":"aVogp","../../Utils":"iU3t1"}],"ljo2N":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AbsorberInstance = void 0;
const Utils_1 = require("../../Utils");
const Vector_1 = require("../../Core/Particle/Vector");
const Enums_1 = require("../../Enums");
class AbsorberInstance {
    constructor(absorbers, container, options, position){
        var _a, _b, _c;
        this.absorbers = absorbers;
        this.container = container;
        this.initialPosition = position ? Vector_1.Vector.create(position.x, position.y) : undefined;
        this.options = options;
        this.dragging = false;
        this.name = this.options.name;
        this.opacity = this.options.opacity;
        this.size = Utils_1.getRangeValue(options.size.value) * container.retina.pixelRatio;
        this.mass = this.size * options.size.density * container.retina.reduceFactor;
        const limit = options.size.limit;
        this.limit = limit !== undefined ? limit * container.retina.pixelRatio * container.retina.reduceFactor : limit;
        const color = typeof options.color === "string" ? {
            value: options.color
        } : options.color;
        this.color = (_a = Utils_1.colorToRgb(color)) !== null && _a !== void 0 ? _a : {
            b: 0,
            g: 0,
            r: 0
        };
        this.position = (_c = (_b = this.initialPosition) === null || _b === void 0 ? void 0 : _b.copy()) !== null && _c !== void 0 ? _c : this.calcPosition();
    }
    attract(particle) {
        const container = this.container;
        const options = this.options;
        if (options.draggable) {
            const mouse = container.interactivity.mouse;
            if (mouse.clicking && mouse.downPosition) {
                const mouseDist = Utils_1.getDistance(this.position, mouse.downPosition);
                if (mouseDist <= this.size) this.dragging = true;
            } else this.dragging = false;
            if (this.dragging && mouse.position) {
                this.position.x = mouse.position.x;
                this.position.y = mouse.position.y;
            }
        }
        const pos = particle.getPosition();
        const { dx , dy , distance  } = Utils_1.getDistances(this.position, pos);
        const v = Vector_1.Vector.create(dx, dy);
        v.length = this.mass / Math.pow(distance, 2) * container.retina.reduceFactor;
        if (distance < this.size + particle.getRadius()) {
            const sizeFactor = particle.getRadius() * 0.033 * container.retina.pixelRatio;
            if (this.size > particle.getRadius() && distance < this.size - particle.getRadius() || particle.absorberOrbit !== undefined && particle.absorberOrbit.length < 0) {
                if (options.destroy) particle.destroy();
                else {
                    particle.needsNewPosition = true;
                    this.updateParticlePosition(particle, v);
                }
            } else {
                if (options.destroy) particle.size.value -= sizeFactor;
                this.updateParticlePosition(particle, v);
            }
            if (this.limit === undefined || this.size < this.limit) this.size += sizeFactor;
            this.mass += sizeFactor * this.options.size.density * container.retina.reduceFactor;
        } else this.updateParticlePosition(particle, v);
    }
    resize() {
        const initialPosition = this.initialPosition;
        this.position = initialPosition && Utils_1.isPointInside(initialPosition, this.container.canvas.size) ? initialPosition : this.calcPosition();
    }
    draw(context) {
        context.translate(this.position.x, this.position.y);
        context.beginPath();
        context.arc(0, 0, this.size, 0, Math.PI * 2, false);
        context.closePath();
        context.fillStyle = Utils_1.getStyleFromRgb(this.color, this.opacity);
        context.fill();
    }
    calcPosition() {
        var _a, _b;
        const container = this.container;
        const percentPosition = this.options.position;
        return Vector_1.Vector.create(((_a = percentPosition === null || percentPosition === void 0 ? void 0 : percentPosition.x) !== null && _a !== void 0 ? _a : Math.random() * 100) / 100 * container.canvas.size.width, ((_b = percentPosition === null || percentPosition === void 0 ? void 0 : percentPosition.y) !== null && _b !== void 0 ? _b : Math.random() * 100) / 100 * container.canvas.size.height);
    }
    updateParticlePosition(particle, v) {
        var _a;
        if (particle.destroyed) return;
        const container = this.container;
        const canvasSize = container.canvas.size;
        if (particle.needsNewPosition) {
            const pSize = particle.getRadius();
            particle.position.x = (canvasSize.width - pSize * 2) * (1 + (Math.random() * 0.2 - 0.1)) + pSize;
            particle.position.y = (canvasSize.height - pSize * 2) * (1 + (Math.random() * 0.2 - 0.1)) + pSize;
            particle.needsNewPosition = false;
        }
        if (this.options.orbits) {
            if (particle.absorberOrbit === undefined) {
                particle.absorberOrbit = Vector_1.Vector.create(0, 0);
                particle.absorberOrbit.length = Utils_1.getDistance(particle.getPosition(), this.position);
                particle.absorberOrbit.angle = Math.random() * Math.PI * 2;
            }
            if (particle.absorberOrbit.length <= this.size && !this.options.destroy) {
                const minSize = Math.min(canvasSize.width, canvasSize.height);
                particle.absorberOrbit.length = minSize * (1 + (Math.random() * 0.2 - 0.1));
            }
            if (particle.absorberOrbitDirection === undefined) particle.absorberOrbitDirection = particle.velocity.x >= 0 ? Enums_1.RotateDirection.clockwise : Enums_1.RotateDirection.counterClockwise;
            const orbitRadius = particle.absorberOrbit.length;
            const orbitAngle = particle.absorberOrbit.angle;
            const orbitDirection = particle.absorberOrbitDirection;
            particle.velocity.x = 0;
            particle.velocity.y = 0;
            const updateFunc = {
                x: orbitDirection === Enums_1.RotateDirection.clockwise ? Math.cos : Math.sin,
                y: orbitDirection === Enums_1.RotateDirection.clockwise ? Math.sin : Math.cos
            };
            particle.position.x = this.position.x + orbitRadius * updateFunc.x(orbitAngle);
            particle.position.y = this.position.y + orbitRadius * updateFunc.y(orbitAngle);
            particle.absorberOrbit.length -= v.length;
            particle.absorberOrbit.angle += ((_a = particle.retina.moveSpeed) !== null && _a !== void 0 ? _a : 0) * container.retina.pixelRatio / 100 * container.retina.reduceFactor;
        } else {
            const addV = Vector_1.Vector.origin;
            addV.length = v.length;
            addV.angle = v.angle;
            particle.velocity.addTo(addV);
        }
    }
}
exports.AbsorberInstance = AbsorberInstance;

},{"../../Utils":"iU3t1","../../Core/Particle/Vector":"c55jT","../../Enums":"e5HNg"}],"itQUa":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Absorber = void 0;
const AbsorberSize_1 = require("./AbsorberSize");
const OptionsColor_1 = require("../../../../Options/Classes/OptionsColor");
class Absorber {
    constructor(){
        this.color = new OptionsColor_1.OptionsColor();
        this.color.value = "#000000";
        this.draggable = false;
        this.opacity = 1;
        this.destroy = true;
        this.orbits = false;
        this.size = new AbsorberSize_1.AbsorberSize();
    }
    load(data) {
        if (data === undefined) return;
        if (data.color !== undefined) this.color = OptionsColor_1.OptionsColor.create(this.color, data.color);
        if (data.draggable !== undefined) this.draggable = data.draggable;
        this.name = data.name;
        if (data.opacity !== undefined) this.opacity = data.opacity;
        if (data.position !== undefined) this.position = {
            x: data.position.x,
            y: data.position.y
        };
        if (data.size !== undefined) this.size.load(data.size);
        if (data.destroy !== undefined) this.destroy = data.destroy;
        if (data.orbits !== undefined) this.orbits = data.orbits;
    }
}
exports.Absorber = Absorber;

},{"./AbsorberSize":"ieyS4","../../../../Options/Classes/OptionsColor":"2UtQV"}],"ieyS4":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AbsorberSize = void 0;
const ValueWithRandom_1 = require("../../../../Options/Classes/ValueWithRandom");
class AbsorberSize extends ValueWithRandom_1.ValueWithRandom {
    constructor(){
        super();
        this.density = 5;
        this.random.minimumValue = 1;
        this.value = 50;
    }
    load(data) {
        if (!data) return;
        super.load(data);
        if (data.density !== undefined) this.density = data.density;
        if (data.limit !== undefined) this.limit = data.limit;
        if (data.limit !== undefined) this.limit = data.limit;
    }
}
exports.AbsorberSize = AbsorberSize;

},{"../../../../Options/Classes/ValueWithRandom":"hwYiV"}],"aVogp":[function(require,module,exports) {
"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, {
        enumerable: true,
        get: function() {
            return m[k];
        }
    });
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = this && this.__exportStar || function(m, exports) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
__exportStar(require("./AbsorberClickMode"), exports);

},{"./AbsorberClickMode":"e1urf"}],"e1urf":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AbsorberClickMode = void 0;
var AbsorberClickMode;
(function(AbsorberClickMode) {
    AbsorberClickMode["absorber"] = "absorber";
})(AbsorberClickMode = exports.AbsorberClickMode || (exports.AbsorberClickMode = {
}));

},{}],"4QDDK":[function(require,module,exports) {
"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, {
        enumerable: true,
        get: function() {
            return m[k];
        }
    });
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = this && this.__exportStar || function(m, exports) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.loadEmittersPlugin = void 0;
const Utils_1 = require("../../Utils");
const Emitters_1 = require("./Emitters");
const Enums_1 = require("./Enums");
const Emitter_1 = require("./Options/Classes/Emitter");
const ShapeManager_1 = require("./ShapeManager");
const CircleShape_1 = require("./Shapes/Circle/CircleShape");
const SquareShape_1 = require("./Shapes/Square/SquareShape");
class EmittersPlugin {
    constructor(){
        this.id = "emitters";
    }
    getPlugin(container) {
        return new Emitters_1.Emitters(container);
    }
    needsPlugin(options) {
        var _a, _b, _c;
        if (options === undefined) return false;
        const emitters = options.emitters;
        return emitters instanceof Array && !!emitters.length || emitters !== undefined || !!((_c = (_b = (_a = options.interactivity) === null || _a === void 0 ? void 0 : _a.events) === null || _b === void 0 ? void 0 : _b.onClick) === null || _c === void 0 ? void 0 : _c.mode) && Utils_1.isInArray(Enums_1.EmitterClickMode.emitter, options.interactivity.events.onClick.mode);
    }
    loadOptions(options, source) {
        var _a, _b;
        if (!this.needsPlugin(options) && !this.needsPlugin(source)) return;
        const optionsCast = options;
        if (source === null || source === void 0 ? void 0 : source.emitters) {
            if ((source === null || source === void 0 ? void 0 : source.emitters) instanceof Array) optionsCast.emitters = source === null || source === void 0 ? void 0 : source.emitters.map((s)=>{
                const tmp = new Emitter_1.Emitter();
                tmp.load(s);
                return tmp;
            });
            else {
                let emitterOptions = optionsCast.emitters;
                if ((emitterOptions === null || emitterOptions === void 0 ? void 0 : emitterOptions.load) === undefined) optionsCast.emitters = emitterOptions = new Emitter_1.Emitter();
                emitterOptions.load(source === null || source === void 0 ? void 0 : source.emitters);
            }
        }
        const interactivityEmitters = (_b = (_a = source === null || source === void 0 ? void 0 : source.interactivity) === null || _a === void 0 ? void 0 : _a.modes) === null || _b === void 0 ? void 0 : _b.emitters;
        if (interactivityEmitters) {
            if (interactivityEmitters instanceof Array) optionsCast.interactivity.modes.emitters = interactivityEmitters.map((s)=>{
                const tmp = new Emitter_1.Emitter();
                tmp.load(s);
                return tmp;
            });
            else {
                let emitterOptions = optionsCast.interactivity.modes.emitters;
                if ((emitterOptions === null || emitterOptions === void 0 ? void 0 : emitterOptions.load) === undefined) optionsCast.interactivity.modes.emitters = emitterOptions = new Emitter_1.Emitter();
                emitterOptions.load(interactivityEmitters);
            }
        }
    }
}
function loadEmittersPlugin(tsParticles) {
    const plugin = new EmittersPlugin();
    tsParticles.addPlugin(plugin);
    if (!tsParticles.addEmitterShape) tsParticles.addEmitterShape = (name, shape)=>{
        ShapeManager_1.ShapeManager.addShape(name, shape);
    };
    tsParticles.addEmitterShape(Enums_1.EmitterShapeType.circle, new CircleShape_1.CircleShape());
    tsParticles.addEmitterShape(Enums_1.EmitterShapeType.square, new SquareShape_1.SquareShape());
}
exports.loadEmittersPlugin = loadEmittersPlugin;
__exportStar(require("./EmittersMain"), exports);

},{"../../Utils":"iU3t1","./Emitters":"4X9TS","./Enums":"fWPq6","./Options/Classes/Emitter":"iEQL2","./ShapeManager":"iUCsP","./Shapes/Circle/CircleShape":"kO5MF","./Shapes/Square/SquareShape":"97fqC","./EmittersMain":"82iUD"}],"4X9TS":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Emitters = void 0;
const EmitterInstance_1 = require("./EmitterInstance");
const Emitter_1 = require("./Options/Classes/Emitter");
const Enums_1 = require("./Enums");
const Utils_1 = require("../../Utils");
class Emitters {
    constructor(container){
        this.container = container;
        this.array = [];
        this.emitters = [];
        this.interactivityEmitters = [];
        const overridableContainer = container;
        overridableContainer.getEmitter = (idxOrName)=>idxOrName === undefined || typeof idxOrName === "number" ? this.array[idxOrName || 0] : this.array.find((t)=>t.name === idxOrName
            )
        ;
        overridableContainer.addEmitter = (options, position)=>this.addEmitter(options, position)
        ;
        overridableContainer.playEmitter = (idxOrName)=>{
            const emitter = overridableContainer.getEmitter(idxOrName);
            if (emitter) emitter.externalPlay();
        };
        overridableContainer.pauseEmitter = (idxOrName)=>{
            const emitter = overridableContainer.getEmitter(idxOrName);
            if (emitter) emitter.externalPause();
        };
    }
    init(options) {
        var _a, _b;
        if (!options) return;
        if (options.emitters) {
            if (options.emitters instanceof Array) this.emitters = options.emitters.map((s)=>{
                const tmp = new Emitter_1.Emitter();
                tmp.load(s);
                return tmp;
            });
            else {
                if (this.emitters instanceof Array) this.emitters = new Emitter_1.Emitter();
                this.emitters.load(options.emitters);
            }
        }
        const interactivityEmitters = (_b = (_a = options.interactivity) === null || _a === void 0 ? void 0 : _a.modes) === null || _b === void 0 ? void 0 : _b.emitters;
        if (interactivityEmitters) {
            if (interactivityEmitters instanceof Array) this.interactivityEmitters = interactivityEmitters.map((s)=>{
                const tmp = new Emitter_1.Emitter();
                tmp.load(s);
                return tmp;
            });
            else {
                if (this.interactivityEmitters instanceof Array) this.interactivityEmitters = new Emitter_1.Emitter();
                this.interactivityEmitters.load(interactivityEmitters);
            }
        }
        if (this.emitters instanceof Array) for (const emitterOptions of this.emitters)this.addEmitter(emitterOptions);
        else this.addEmitter(this.emitters);
    }
    play() {
        for (const emitter of this.array)emitter.play();
    }
    pause() {
        for (const emitter of this.array)emitter.pause();
    }
    stop() {
        this.array = [];
    }
    update(delta) {
        for (const emitter of this.array)emitter.update(delta);
    }
    handleClickMode(mode) {
        const container = this.container;
        const emitterOptions = this.emitters;
        const modeEmitters = this.interactivityEmitters;
        if (mode === Enums_1.EmitterClickMode.emitter) {
            let emitterModeOptions;
            if (modeEmitters instanceof Array) {
                if (modeEmitters.length > 0) emitterModeOptions = Utils_1.itemFromArray(modeEmitters);
            } else emitterModeOptions = modeEmitters;
            const emittersOptions = emitterModeOptions !== null && emitterModeOptions !== void 0 ? emitterModeOptions : emitterOptions instanceof Array ? Utils_1.itemFromArray(emitterOptions) : emitterOptions;
            const ePosition = container.interactivity.mouse.clickPosition;
            this.addEmitter(Utils_1.deepExtend({
            }, emittersOptions), ePosition);
        }
    }
    resize() {
        for (const emitter of this.array)emitter.resize();
    }
    addEmitter(options, position) {
        const emitter = new EmitterInstance_1.EmitterInstance(this, this.container, options, position);
        this.array.push(emitter);
        return emitter;
    }
    removeEmitter(emitter) {
        const index = this.array.indexOf(emitter);
        if (index >= 0) this.array.splice(index, 1);
    }
}
exports.Emitters = Emitters;

},{"./EmitterInstance":"gvUhe","./Options/Classes/Emitter":"iEQL2","./Enums":"fWPq6","../../Utils":"iU3t1"}],"gvUhe":[function(require,module,exports) {
"use strict";
var __classPrivateFieldSet = this && this.__classPrivateFieldSet || function(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var __classPrivateFieldGet = this && this.__classPrivateFieldGet || function(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _EmitterInstance_firstSpawn, _EmitterInstance_startParticlesAdded;
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.EmitterInstance = void 0;
const Utils_1 = require("../../Utils");
const Enums_1 = require("../../Enums");
const EmitterSize_1 = require("./Options/Classes/EmitterSize");
const ShapeManager_1 = require("./ShapeManager");
class EmitterInstance {
    constructor(emitters, container, emitterOptions, position){
        var _a, _b, _c, _d, _e, _f;
        var _g;
        this.emitters = emitters;
        this.container = container;
        _EmitterInstance_firstSpawn.set(this, void 0);
        _EmitterInstance_startParticlesAdded.set(this, void 0);
        this.currentDuration = 0;
        this.currentEmitDelay = 0;
        this.currentSpawnDelay = 0;
        this.initialPosition = position;
        this.emitterOptions = Utils_1.deepExtend({
        }, emitterOptions);
        this.spawnDelay = ((_a = this.emitterOptions.life.delay) !== null && _a !== void 0 ? _a : 0) * 1000 / this.container.retina.reduceFactor;
        this.position = (_b = this.initialPosition) !== null && _b !== void 0 ? _b : this.calcPosition();
        this.name = emitterOptions.name;
        this.shape = ShapeManager_1.ShapeManager.getShape(emitterOptions.shape);
        this.fill = emitterOptions.fill;
        __classPrivateFieldSet(this, _EmitterInstance_firstSpawn, !this.emitterOptions.life.wait, "f");
        __classPrivateFieldSet(this, _EmitterInstance_startParticlesAdded, false, "f");
        let particlesOptions = Utils_1.deepExtend({
        }, this.emitterOptions.particles);
        particlesOptions !== null && particlesOptions !== void 0 || (particlesOptions = {
        });
        (_c = particlesOptions.move) !== null && _c !== void 0 || (particlesOptions.move = {
        });
        (_d = (_g = particlesOptions.move).direction) !== null && _d !== void 0 || (_g.direction = this.emitterOptions.direction);
        if (this.emitterOptions.spawnColor !== undefined) this.spawnColor = Utils_1.colorToHsl(this.emitterOptions.spawnColor);
        this.paused = !this.emitterOptions.autoPlay;
        this.particlesOptions = particlesOptions;
        this.size = (_e = this.emitterOptions.size) !== null && _e !== void 0 ? _e : (()=>{
            const size = new EmitterSize_1.EmitterSize();
            size.load({
                height: 0,
                mode: Enums_1.SizeMode.percent,
                width: 0
            });
            return size;
        })();
        this.lifeCount = (_f = this.emitterOptions.life.count) !== null && _f !== void 0 ? _f : -1;
        this.immortal = this.lifeCount <= 0;
        this.play();
    }
    externalPlay() {
        this.paused = false;
        this.play();
    }
    externalPause() {
        this.paused = true;
        this.pause();
    }
    play() {
        var _a;
        if (this.paused) return;
        if (this.container.retina.reduceFactor && (this.lifeCount > 0 || this.immortal || !this.emitterOptions.life.count) && (__classPrivateFieldGet(this, _EmitterInstance_firstSpawn, "f") || this.currentSpawnDelay >= ((_a = this.spawnDelay) !== null && _a !== void 0 ? _a : 0))) {
            if (this.emitDelay === undefined) {
                const delay = Utils_1.getRangeValue(this.emitterOptions.rate.delay);
                this.emitDelay = 1000 * delay / this.container.retina.reduceFactor;
            }
            if (this.lifeCount > 0 || this.immortal) this.prepareToDie();
        }
    }
    pause() {
        if (this.paused) return;
        delete this.emitDelay;
    }
    resize() {
        const initialPosition = this.initialPosition;
        this.position = initialPosition && Utils_1.isPointInside(initialPosition, this.container.canvas.size) ? initialPosition : this.calcPosition();
    }
    update(delta) {
        var _a, _b, _c;
        if (this.paused) return;
        if (__classPrivateFieldGet(this, _EmitterInstance_firstSpawn, "f")) {
            __classPrivateFieldSet(this, _EmitterInstance_firstSpawn, false, "f");
            this.currentSpawnDelay = (_a = this.spawnDelay) !== null && _a !== void 0 ? _a : 0;
            this.currentEmitDelay = (_b = this.emitDelay) !== null && _b !== void 0 ? _b : 0;
        }
        if (!__classPrivateFieldGet(this, _EmitterInstance_startParticlesAdded, "f")) {
            __classPrivateFieldSet(this, _EmitterInstance_startParticlesAdded, true, "f");
            this.emitParticles(this.emitterOptions.startCount);
        }
        if (this.duration !== undefined) {
            this.currentDuration += delta.value;
            if (this.currentDuration >= this.duration) {
                this.pause();
                if (this.spawnDelay !== undefined) delete this.spawnDelay;
                if (!this.immortal) this.lifeCount--;
                if (this.lifeCount > 0 || this.immortal) {
                    this.position = this.calcPosition();
                    this.spawnDelay = ((_c = this.emitterOptions.life.delay) !== null && _c !== void 0 ? _c : 0) * 1000 / this.container.retina.reduceFactor;
                } else this.destroy();
                this.currentDuration -= this.duration;
                delete this.duration;
            }
        }
        if (this.spawnDelay !== undefined) {
            this.currentSpawnDelay += delta.value;
            if (this.currentSpawnDelay >= this.spawnDelay) {
                this.play();
                this.currentSpawnDelay -= this.currentSpawnDelay;
                delete this.spawnDelay;
            }
        }
        if (this.emitDelay !== undefined) {
            this.currentEmitDelay += delta.value;
            if (this.currentEmitDelay >= this.emitDelay) {
                this.emit();
                this.currentEmitDelay -= this.emitDelay;
            }
        }
    }
    prepareToDie() {
        var _a;
        if (this.paused) return;
        const duration = (_a = this.emitterOptions.life) === null || _a === void 0 ? void 0 : _a.duration;
        if (this.container.retina.reduceFactor && (this.lifeCount > 0 || this.immortal) && duration !== undefined && duration > 0) this.duration = duration * 1000;
    }
    destroy() {
        this.emitters.removeEmitter(this);
    }
    calcPosition() {
        var _a, _b;
        const container = this.container;
        const percentPosition = this.emitterOptions.position;
        return {
            x: ((_a = percentPosition === null || percentPosition === void 0 ? void 0 : percentPosition.x) !== null && _a !== void 0 ? _a : Math.random() * 100) / 100 * container.canvas.size.width,
            y: ((_b = percentPosition === null || percentPosition === void 0 ? void 0 : percentPosition.y) !== null && _b !== void 0 ? _b : Math.random() * 100) / 100 * container.canvas.size.height
        };
    }
    emit() {
        if (this.paused) return;
        const quantity = Utils_1.getRangeValue(this.emitterOptions.rate.quantity);
        this.emitParticles(quantity);
    }
    emitParticles(quantity) {
        var _a, _b, _c;
        const container = this.container;
        const position = this.position;
        const offset = {
            x: this.size.mode === Enums_1.SizeMode.percent ? container.canvas.size.width * this.size.width / 100 : this.size.width,
            y: this.size.mode === Enums_1.SizeMode.percent ? container.canvas.size.height * this.size.height / 100 : this.size.height
        };
        for(let i = 0; i < quantity; i++){
            const particlesOptions = Utils_1.deepExtend({
            }, this.particlesOptions);
            if (this.spawnColor) {
                const colorAnimation = (_a = this.emitterOptions.spawnColor) === null || _a === void 0 ? void 0 : _a.animation;
                if (colorAnimation) {
                    const hueAnimation = colorAnimation;
                    if (hueAnimation.enable) this.spawnColor.h = this.setColorAnimation(hueAnimation, this.spawnColor.h, 360);
                    else {
                        const hslAnimation = colorAnimation;
                        this.spawnColor.h = this.setColorAnimation(hslAnimation.h, this.spawnColor.h, 360);
                        this.spawnColor.s = this.setColorAnimation(hslAnimation.s, this.spawnColor.s, 100);
                        this.spawnColor.l = this.setColorAnimation(hslAnimation.l, this.spawnColor.l, 100);
                    }
                }
                if (!particlesOptions.color) particlesOptions.color = {
                    value: this.spawnColor
                };
                else particlesOptions.color.value = this.spawnColor;
            }
            const pPosition = (_c = (_b = this.shape) === null || _b === void 0 ? void 0 : _b.randomPosition(position, offset, this.fill)) !== null && _c !== void 0 ? _c : position;
            container.particles.addParticle(pPosition, particlesOptions);
        }
    }
    setColorAnimation(animation, initValue, maxValue) {
        var _a;
        const container = this.container;
        if (!animation.enable) return initValue;
        const colorOffset = Utils_1.randomInRange(animation.offset);
        const delay = Utils_1.getRangeValue(this.emitterOptions.rate.delay);
        const emitFactor = 1000 * delay / container.retina.reduceFactor;
        const colorSpeed = (_a = animation.speed) !== null && _a !== void 0 ? _a : 0;
        return (initValue + colorSpeed * container.fpsLimit / emitFactor + colorOffset * 3.6) % maxValue;
    }
}
exports.EmitterInstance = EmitterInstance;
_EmitterInstance_firstSpawn = new WeakMap(), _EmitterInstance_startParticlesAdded = new WeakMap();

},{"../../Utils":"iU3t1","../../Enums":"e5HNg","./Options/Classes/EmitterSize":"kIzij","./ShapeManager":"iUCsP"}],"kIzij":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.EmitterSize = void 0;
const Enums_1 = require("../../../../Enums");
class EmitterSize {
    constructor(){
        this.mode = Enums_1.SizeMode.percent;
        this.height = 0;
        this.width = 0;
    }
    load(data) {
        if (data === undefined) return;
        if (data.mode !== undefined) this.mode = data.mode;
        if (data.height !== undefined) this.height = data.height;
        if (data.width !== undefined) this.width = data.width;
    }
}
exports.EmitterSize = EmitterSize;

},{"../../../../Enums":"e5HNg"}],"iUCsP":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ShapeManager = void 0;
const shapes = new Map();
class ShapeManager {
    static addShape(name, drawer) {
        if (!ShapeManager.getShape(name)) shapes.set(name, drawer);
    }
    static getShape(name) {
        return shapes.get(name);
    }
    static getSupportedShapes() {
        return shapes.keys();
    }
}
exports.ShapeManager = ShapeManager;

},{}],"iEQL2":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Emitter = void 0;
const EmitterRate_1 = require("./EmitterRate");
const EmitterLife_1 = require("./EmitterLife");
const Utils_1 = require("../../../../Utils");
const EmitterSize_1 = require("./EmitterSize");
const AnimatableColor_1 = require("../../../../Options/Classes/AnimatableColor");
const Enums_1 = require("../../Enums");
class Emitter {
    constructor(){
        this.autoPlay = true;
        this.fill = true;
        this.life = new EmitterLife_1.EmitterLife();
        this.rate = new EmitterRate_1.EmitterRate();
        this.shape = Enums_1.EmitterShapeType.square;
        this.startCount = 0;
    }
    load(data) {
        if (data === undefined) return;
        if (data.autoPlay !== undefined) this.autoPlay = data.autoPlay;
        if (data.size !== undefined) {
            if (this.size === undefined) this.size = new EmitterSize_1.EmitterSize();
            this.size.load(data.size);
        }
        if (data.direction !== undefined) this.direction = data.direction;
        if (data.fill !== undefined) this.fill = data.fill;
        this.life.load(data.life);
        this.name = data.name;
        if (data.particles !== undefined) this.particles = Utils_1.deepExtend({
        }, data.particles);
        this.rate.load(data.rate);
        if (data.shape !== undefined) this.shape = data.shape;
        if (data.position !== undefined) this.position = {
            x: data.position.x,
            y: data.position.y
        };
        if (data.spawnColor !== undefined) {
            if (this.spawnColor === undefined) this.spawnColor = new AnimatableColor_1.AnimatableColor();
            this.spawnColor.load(data.spawnColor);
        }
        if (data.startCount !== undefined) this.startCount = data.startCount;
    }
}
exports.Emitter = Emitter;

},{"./EmitterRate":"1pio2","./EmitterLife":"4KPVV","../../../../Utils":"iU3t1","./EmitterSize":"kIzij","../../../../Options/Classes/AnimatableColor":"lIijz","../../Enums":"fWPq6"}],"1pio2":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.EmitterRate = void 0;
const Utils_1 = require("../../../../Utils");
class EmitterRate {
    constructor(){
        this.quantity = 1;
        this.delay = 0.1;
    }
    load(data) {
        if (data === undefined) return;
        if (data.quantity !== undefined) this.quantity = Utils_1.setRangeValue(data.quantity);
        if (data.delay !== undefined) this.delay = Utils_1.setRangeValue(data.delay);
    }
}
exports.EmitterRate = EmitterRate;

},{"../../../../Utils":"iU3t1"}],"4KPVV":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.EmitterLife = void 0;
class EmitterLife {
    constructor(){
        this.wait = false;
    }
    load(data) {
        if (data === undefined) return;
        if (data.count !== undefined) this.count = data.count;
        if (data.delay !== undefined) this.delay = data.delay;
        if (data.duration !== undefined) this.duration = data.duration;
        if (data.wait !== undefined) this.wait = data.wait;
    }
}
exports.EmitterLife = EmitterLife;

},{}],"fWPq6":[function(require,module,exports) {
"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, {
        enumerable: true,
        get: function() {
            return m[k];
        }
    });
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = this && this.__exportStar || function(m, exports) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
__exportStar(require("./EmitterClickMode"), exports);
__exportStar(require("./EmitterShapeType"), exports);

},{"./EmitterClickMode":"9235x","./EmitterShapeType":"8Jygd"}],"9235x":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.EmitterClickMode = void 0;
var EmitterClickMode;
(function(EmitterClickMode) {
    EmitterClickMode["emitter"] = "emitter";
})(EmitterClickMode = exports.EmitterClickMode || (exports.EmitterClickMode = {
}));

},{}],"8Jygd":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.EmitterShapeType = void 0;
var EmitterShapeType;
(function(EmitterShapeType) {
    EmitterShapeType["circle"] = "circle";
    EmitterShapeType["square"] = "square";
})(EmitterShapeType = exports.EmitterShapeType || (exports.EmitterShapeType = {
}));

},{}],"kO5MF":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CircleShape = void 0;
class CircleShape {
    randomPosition(position, offset, fill) {
        const generateTheta = (x, y)=>{
            const u = Math.random() / 4;
            const theta = Math.atan(y / x * Math.tan(2 * Math.PI * u));
            const v = Math.random();
            if (v < 0.25) return theta;
            else if (v < 0.5) return Math.PI - theta;
            else if (v < 0.75) return Math.PI + theta;
            else return -theta;
        };
        const radius = (x, y, theta)=>x * y / Math.sqrt((y * Math.cos(theta)) ** 2 + (x * Math.sin(theta)) ** 2)
        ;
        const [a, b] = [
            offset.x / 2,
            offset.y / 2
        ];
        const randomTheta = generateTheta(a, b), maxRadius = radius(a, b, randomTheta), randomRadius = fill ? maxRadius * Math.sqrt(Math.random()) : maxRadius;
        return {
            x: position.x + randomRadius * Math.cos(randomTheta),
            y: position.y + randomRadius * Math.sin(randomTheta)
        };
    }
}
exports.CircleShape = CircleShape;

},{}],"97fqC":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SquareShape = void 0;
function randomSquareCoordinate(position, offset) {
    return position + offset * (Math.random() - 0.5);
}
class SquareShape {
    randomPosition(position, offset, fill) {
        if (fill) return {
            x: randomSquareCoordinate(position.x, offset.x),
            y: randomSquareCoordinate(position.y, offset.y)
        };
        else {
            const halfW = offset.x / 2, halfH = offset.y / 2, side = Math.floor(Math.random() * 4), v = (Math.random() - 0.5) * 2;
            switch(side){
                case 0:
                    return {
                        x: position.x + v * halfW,
                        y: position.y - halfH
                    };
                case 1:
                    return {
                        x: position.x - halfW,
                        y: position.y + v * halfH
                    };
                case 2:
                    return {
                        x: position.x + v * halfW,
                        y: position.y + halfH
                    };
                case 3:
                default:
                    return {
                        x: position.x + halfW,
                        y: position.y + v * halfH
                    };
            }
        }
    }
}
exports.SquareShape = SquareShape;

},{}],"82iUD":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});

},{}],"dJOtr":[function(require,module,exports) {
"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, {
        enumerable: true,
        get: function() {
            return m[k];
        }
    });
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var __importStar = this && this.__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {
    };
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    }
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.loadPolygonMaskPlugin = void 0;
const PolygonMaskInstance_1 = require("./PolygonMaskInstance");
const PolygonMask_1 = require("./Options/Classes/PolygonMask");
const Enums_1 = require("./Enums");
const Utils_1 = require("../../Utils");
class Plugin {
    constructor(){
        this.id = "polygonMask";
    }
    getPlugin(container) {
        return new PolygonMaskInstance_1.PolygonMaskInstance(container);
    }
    needsPlugin(options) {
        var _a, _b, _c;
        return (_b = (_a = options === null || options === void 0 ? void 0 : options.polygon) === null || _a === void 0 ? void 0 : _a.enable) !== null && _b !== void 0 ? _b : ((_c = options === null || options === void 0 ? void 0 : options.polygon) === null || _c === void 0 ? void 0 : _c.type) !== undefined && options.polygon.type !== Enums_1.Type.none;
    }
    loadOptions(options, source) {
        if (!this.needsPlugin(source)) return;
        const optionsCast = options;
        let polygonOptions = optionsCast.polygon;
        if ((polygonOptions === null || polygonOptions === void 0 ? void 0 : polygonOptions.load) === undefined) optionsCast.polygon = polygonOptions = new PolygonMask_1.PolygonMask();
        polygonOptions.load(source === null || source === void 0 ? void 0 : source.polygon);
    }
}
async function loadPolygonMaskPlugin(tsParticles) {
    if (!Utils_1.isSsr() && !window.SVGPathSeg) await Promise.resolve().then(function() {
        return require("6ad381655b249036");
    }).then((res)=>__importStar(res)
    );
    const plugin = new Plugin();
    tsParticles.addPlugin(plugin);
}
exports.loadPolygonMaskPlugin = loadPolygonMaskPlugin;

},{"./PolygonMaskInstance":"hUTz2","./Options/Classes/PolygonMask":"h2upW","./Enums":"iD5qi","../../Utils":"iU3t1","6ad381655b249036":"9ivD0"}],"hUTz2":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PolygonMaskInstance = void 0;
const Enums_1 = require("./Enums");
const Utils_1 = require("../../Utils");
const PolygonMask_1 = require("./Options/Classes/PolygonMask");
const Enums_2 = require("../../Enums");
const utils_1 = require("./utils");
class PolygonMaskInstance {
    constructor(container){
        this.container = container;
        this.dimension = {
            height: 0,
            width: 0
        };
        this.path2DSupported = !!window.Path2D;
        this.options = new PolygonMask_1.PolygonMask();
        this.polygonMaskMoveRadius = this.options.move.radius * container.retina.pixelRatio;
    }
    async initAsync(options) {
        this.options.load(options === null || options === void 0 ? void 0 : options.polygon);
        const polygonMaskOptions = this.options;
        this.polygonMaskMoveRadius = polygonMaskOptions.move.radius * this.container.retina.pixelRatio;
        if (polygonMaskOptions.enable) await this.initRawData();
    }
    resize() {
        const container = this.container;
        const options = this.options;
        if (!(options.enable && options.type !== Enums_1.Type.none)) return;
        if (this.redrawTimeout) clearTimeout(this.redrawTimeout);
        this.redrawTimeout = window.setTimeout(async ()=>{
            await this.initRawData(true);
            container.particles.redraw();
        }, 250);
    }
    stop() {
        delete this.raw;
        delete this.paths;
    }
    particlesInitialization() {
        const options = this.options;
        if (options.enable && options.type === Enums_1.Type.inline && (options.inline.arrangement === Enums_1.InlineArrangement.onePerPoint || options.inline.arrangement === Enums_1.InlineArrangement.perPoint)) {
            this.drawPoints();
            return true;
        }
        return false;
    }
    particlePosition(position) {
        var _a, _b;
        const options = this.options;
        if (!(options.enable && ((_b = (_a = this.raw) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0) > 0)) return;
        return Utils_1.deepExtend({
        }, position ? position : this.randomPoint());
    }
    particleBounce(particle, delta, direction) {
        return this.polygonBounce(particle, delta, direction);
    }
    clickPositionValid(position) {
        const options = this.options;
        return options.enable && options.type !== Enums_1.Type.none && options.type !== Enums_1.Type.inline && this.checkInsidePolygon(position);
    }
    draw(context) {
        var _a;
        if (!((_a = this.paths) === null || _a === void 0 ? void 0 : _a.length)) return;
        const options = this.options;
        const polygonDraw = options.draw;
        if (!(options.enable && polygonDraw.enable)) return;
        const rawData = this.raw;
        for (const path of this.paths){
            const path2d = path.path2d;
            const path2dSupported = this.path2DSupported;
            if (!context) continue;
            if (path2dSupported && path2d && this.offset) utils_1.drawPolygonMaskPath(context, path2d, polygonDraw.stroke, this.offset);
            else if (rawData) utils_1.drawPolygonMask(context, rawData, polygonDraw.stroke);
        }
    }
    polygonBounce(particle, _delta, direction) {
        const options = this.options;
        if (!this.raw || !options.enable || direction !== Enums_2.OutModeDirection.top) return false;
        if (options.type === Enums_1.Type.inside || options.type === Enums_1.Type.outside) {
            let closest, dx, dy;
            const pos = particle.getPosition(), radius = particle.getRadius();
            for(let i = 0, j = this.raw.length - 1; i < this.raw.length; j = i++){
                const pi = this.raw[i], pj = this.raw[j];
                closest = utils_1.calcClosestPtOnSegment(pi, pj, pos);
                const dist = Utils_1.getDistances(pos, closest);
                [dx, dy] = [
                    dist.dx,
                    dist.dy
                ];
                if (dist.distance < radius) {
                    utils_1.segmentBounce(pi, pj, particle.velocity);
                    return true;
                }
            }
            if (closest && dx !== undefined && dy !== undefined && !this.checkInsidePolygon(pos)) {
                const factor = {
                    x: 1,
                    y: 1
                };
                if (particle.position.x >= closest.x) factor.x = -1;
                if (particle.position.y >= closest.y) factor.y = -1;
                particle.position.x = closest.x + radius * 2 * factor.x;
                particle.position.y = closest.y + radius * 2 * factor.y;
                particle.velocity.mult(-1);
                return true;
            }
        } else if (options.type === Enums_1.Type.inline && particle.initialPosition) {
            const dist = Utils_1.getDistance(particle.initialPosition, particle.getPosition());
            if (dist > this.polygonMaskMoveRadius) {
                particle.velocity.x = particle.velocity.y / 2 - particle.velocity.x;
                particle.velocity.y = particle.velocity.x / 2 - particle.velocity.y;
                return true;
            }
        }
        return false;
    }
    checkInsidePolygon(position) {
        var _a, _b;
        const container = this.container;
        const options = this.options;
        if (!options.enable || options.type === Enums_1.Type.none || options.type === Enums_1.Type.inline) return true;
        if (!this.raw) throw new Error(Utils_1.Constants.noPolygonFound);
        const canvasSize = container.canvas.size;
        const x = (_a = position === null || position === void 0 ? void 0 : position.x) !== null && _a !== void 0 ? _a : Math.random() * canvasSize.width;
        const y = (_b = position === null || position === void 0 ? void 0 : position.y) !== null && _b !== void 0 ? _b : Math.random() * canvasSize.height;
        let inside = false;
        for(let i = 0, j = this.raw.length - 1; i < this.raw.length; j = i++){
            const pi = this.raw[i];
            const pj = this.raw[j];
            const intersect = pi.y > y !== pj.y > y && x < (pj.x - pi.x) * (y - pi.y) / (pj.y - pi.y) + pi.x;
            if (intersect) inside = !inside;
        }
        return options.type === Enums_1.Type.inside ? inside : options.type === Enums_1.Type.outside ? !inside : false;
    }
    parseSvgPath(xml, force) {
        var _a, _b, _c;
        const forceDownload = force !== null && force !== void 0 ? force : false;
        if (this.paths !== undefined && !forceDownload) return this.raw;
        const container = this.container;
        const options = this.options;
        const parser = new DOMParser();
        const doc = parser.parseFromString(xml, "image/svg+xml");
        const svg = doc.getElementsByTagName("svg")[0];
        let svgPaths = svg.getElementsByTagName("path");
        if (!svgPaths.length) svgPaths = doc.getElementsByTagName("path");
        this.paths = [];
        for(let i = 0; i < svgPaths.length; i++){
            const path = svgPaths.item(i);
            if (path) this.paths.push({
                element: path,
                length: path.getTotalLength()
            });
        }
        const pxRatio = container.retina.pixelRatio;
        const scale = options.scale / pxRatio;
        this.dimension.width = parseFloat((_a = svg.getAttribute("width")) !== null && _a !== void 0 ? _a : "0") * scale;
        this.dimension.height = parseFloat((_b = svg.getAttribute("height")) !== null && _b !== void 0 ? _b : "0") * scale;
        const position = (_c = options.position) !== null && _c !== void 0 ? _c : {
            x: 50,
            y: 50
        };
        this.offset = {
            x: container.canvas.size.width * position.x / (100 * pxRatio) - this.dimension.width / 2,
            y: container.canvas.size.height * position.y / (100 * pxRatio) - this.dimension.height / 2
        };
        return utils_1.parsePaths(this.paths, scale, this.offset);
    }
    async downloadSvgPath(svgUrl, force) {
        const options = this.options;
        const url = svgUrl || options.url;
        const forceDownload = force !== null && force !== void 0 ? force : false;
        if (!url || this.paths !== undefined && !forceDownload) return this.raw;
        const req = await fetch(url);
        if (!req.ok) throw new Error("tsParticles Error - Error occurred during polygon mask download");
        return this.parseSvgPath(await req.text(), force);
    }
    drawPoints() {
        if (!this.raw) return;
        for (const item of this.raw)this.container.particles.addParticle({
            x: item.x,
            y: item.y
        });
    }
    randomPoint() {
        const container = this.container;
        const options = this.options;
        let position;
        if (options.type === Enums_1.Type.inline) switch(options.inline.arrangement){
            case Enums_1.InlineArrangement.randomPoint:
                position = this.getRandomPoint();
                break;
            case Enums_1.InlineArrangement.randomLength:
                position = this.getRandomPointByLength();
                break;
            case Enums_1.InlineArrangement.equidistant:
                position = this.getEquidistantPointByIndex(container.particles.count);
                break;
            case Enums_1.InlineArrangement.onePerPoint:
            case Enums_1.InlineArrangement.perPoint:
            default:
                position = this.getPointByIndex(container.particles.count);
        }
        else position = {
            x: Math.random() * container.canvas.size.width,
            y: Math.random() * container.canvas.size.height
        };
        if (this.checkInsidePolygon(position)) return position;
        else return this.randomPoint();
    }
    getRandomPoint() {
        if (!this.raw || !this.raw.length) throw new Error(Utils_1.Constants.noPolygonDataLoaded);
        const coords = Utils_1.itemFromArray(this.raw);
        return {
            x: coords.x,
            y: coords.y
        };
    }
    getRandomPointByLength() {
        var _a, _b, _c;
        const options = this.options;
        if (!this.raw || !this.raw.length || !((_a = this.paths) === null || _a === void 0 ? void 0 : _a.length)) throw new Error(Utils_1.Constants.noPolygonDataLoaded);
        const path = Utils_1.itemFromArray(this.paths);
        const distance = Math.floor(Math.random() * path.length) + 1;
        const point = path.element.getPointAtLength(distance);
        return {
            x: point.x * options.scale + (((_b = this.offset) === null || _b === void 0 ? void 0 : _b.x) || 0),
            y: point.y * options.scale + (((_c = this.offset) === null || _c === void 0 ? void 0 : _c.y) || 0)
        };
    }
    getEquidistantPointByIndex(index) {
        var _a, _b, _c, _d, _e, _f, _g;
        const options = this.container.actualOptions;
        const polygonMaskOptions = this.options;
        if (!this.raw || !this.raw.length || !((_a = this.paths) === null || _a === void 0 ? void 0 : _a.length)) throw new Error(Utils_1.Constants.noPolygonDataLoaded);
        let offset = 0;
        let point;
        const totalLength = this.paths.reduce((tot, path)=>tot + path.length
        , 0);
        const distance = totalLength / options.particles.number.value;
        for (const path of this.paths){
            const pathDistance = distance * index - offset;
            if (pathDistance <= path.length) {
                point = path.element.getPointAtLength(pathDistance);
                break;
            } else offset += path.length;
        }
        return {
            x: ((_b = point === null || point === void 0 ? void 0 : point.x) !== null && _b !== void 0 ? _b : 0) * polygonMaskOptions.scale + ((_d = (_c = this.offset) === null || _c === void 0 ? void 0 : _c.x) !== null && _d !== void 0 ? _d : 0),
            y: ((_e = point === null || point === void 0 ? void 0 : point.y) !== null && _e !== void 0 ? _e : 0) * polygonMaskOptions.scale + ((_g = (_f = this.offset) === null || _f === void 0 ? void 0 : _f.y) !== null && _g !== void 0 ? _g : 0)
        };
    }
    getPointByIndex(index) {
        if (!this.raw || !this.raw.length) throw new Error(Utils_1.Constants.noPolygonDataLoaded);
        const coords = this.raw[index % this.raw.length];
        return {
            x: coords.x,
            y: coords.y
        };
    }
    createPath2D() {
        var _a, _b;
        const options = this.options;
        if (!this.path2DSupported || !((_a = this.paths) === null || _a === void 0 ? void 0 : _a.length)) return;
        for (const path of this.paths){
            const pathData = (_b = path.element) === null || _b === void 0 ? void 0 : _b.getAttribute("d");
            if (pathData) {
                const path2d = new Path2D(pathData);
                const matrix = document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGMatrix();
                const finalPath = new Path2D();
                const transform = matrix.scale(options.scale);
                if (finalPath.addPath) {
                    finalPath.addPath(path2d, transform);
                    path.path2d = finalPath;
                } else delete path.path2d;
            } else delete path.path2d;
            if (path.path2d || !this.raw) continue;
            path.path2d = new Path2D();
            path.path2d.moveTo(this.raw[0].x, this.raw[0].y);
            this.raw.forEach((pos, i)=>{
                var _a;
                if (i > 0) (_a = path.path2d) === null || _a === void 0 || _a.lineTo(pos.x, pos.y);
            });
            path.path2d.closePath();
        }
    }
    async initRawData(force) {
        const options = this.options;
        if (options.url) this.raw = await this.downloadSvgPath(options.url, force);
        else if (options.data) {
            const data = options.data;
            let svg;
            if (typeof data !== "string") {
                const path = data.path instanceof Array ? data.path.map((t)=>`<path d="${t}" />`
                ).join("") : `<path d="${data.path}" />`;
                const namespaces = 'xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"';
                svg = `<svg ${namespaces} width="${data.size.width}" height="${data.size.height}">${path}</svg>`;
            } else svg = data;
            this.raw = this.parseSvgPath(svg, force);
        }
        this.createPath2D();
    }
}
exports.PolygonMaskInstance = PolygonMaskInstance;

},{"./Enums":"iD5qi","../../Utils":"iU3t1","./Options/Classes/PolygonMask":"h2upW","../../Enums":"e5HNg","./utils":"9RG0e"}],"iD5qi":[function(require,module,exports) {
"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, {
        enumerable: true,
        get: function() {
            return m[k];
        }
    });
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = this && this.__exportStar || function(m, exports) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
__exportStar(require("./InlineArrangement"), exports);
__exportStar(require("./MoveType"), exports);
__exportStar(require("./Type"), exports);

},{"./InlineArrangement":"gwYqv","./MoveType":"e605H","./Type":"jr7Ja"}],"gwYqv":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.InlineArrangement = void 0;
var InlineArrangement;
(function(InlineArrangement) {
    InlineArrangement["equidistant"] = "equidistant";
    InlineArrangement["onePerPoint"] = "one-per-point";
    InlineArrangement["perPoint"] = "per-point";
    InlineArrangement["randomLength"] = "random-length";
    InlineArrangement["randomPoint"] = "random-point";
})(InlineArrangement = exports.InlineArrangement || (exports.InlineArrangement = {
}));

},{}],"e605H":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MoveType = void 0;
var MoveType;
(function(MoveType) {
    MoveType["path"] = "path";
    MoveType["radius"] = "radius";
})(MoveType = exports.MoveType || (exports.MoveType = {
}));

},{}],"jr7Ja":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Type = void 0;
var Type;
(function(Type) {
    Type["inline"] = "inline";
    Type["inside"] = "inside";
    Type["outside"] = "outside";
    Type["none"] = "none";
})(Type = exports.Type || (exports.Type = {
}));

},{}],"h2upW":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PolygonMask = void 0;
const Enums_1 = require("../../Enums");
const Draw_1 = require("./Draw");
const Move_1 = require("./Move");
const Inline_1 = require("./Inline");
const LocalSvg_1 = require("./LocalSvg");
const Utils_1 = require("../../../../Utils");
class PolygonMask {
    constructor(){
        this.draw = new Draw_1.Draw();
        this.enable = false;
        this.inline = new Inline_1.Inline();
        this.move = new Move_1.Move();
        this.scale = 1;
        this.type = Enums_1.Type.none;
    }
    get inlineArrangement() {
        return this.inline.arrangement;
    }
    set inlineArrangement(value) {
        this.inline.arrangement = value;
    }
    load(data) {
        var _a;
        if (data !== undefined) {
            this.draw.load(data.draw);
            const inline = (_a = data.inline) !== null && _a !== void 0 ? _a : {
                arrangement: data.inlineArrangement
            };
            if (inline !== undefined) this.inline.load(inline);
            this.move.load(data.move);
            if (data.scale !== undefined) this.scale = data.scale;
            if (data.type !== undefined) this.type = data.type;
            if (data.enable !== undefined) this.enable = data.enable;
            else this.enable = this.type !== Enums_1.Type.none;
            if (data.url !== undefined) this.url = data.url;
            if (data.data !== undefined) {
                if (typeof data.data === "string") this.data = data.data;
                else {
                    this.data = new LocalSvg_1.LocalSvg();
                    this.data.load(data.data);
                }
            }
            if (data.position !== undefined) this.position = Utils_1.deepExtend({
            }, data.position);
        }
    }
}
exports.PolygonMask = PolygonMask;

},{"../../Enums":"iD5qi","./Draw":"97dMV","./Move":"1yRjj","./Inline":"dOTXP","./LocalSvg":"bAwTs","../../../../Utils":"iU3t1"}],"97dMV":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Draw = void 0;
const DrawStroke_1 = require("./DrawStroke");
const OptionsColor_1 = require("../../../../Options/Classes/OptionsColor");
class Draw {
    constructor(){
        this.enable = false;
        this.stroke = new DrawStroke_1.DrawStroke();
    }
    get lineWidth() {
        return this.stroke.width;
    }
    set lineWidth(value) {
        this.stroke.width = value;
    }
    get lineColor() {
        return this.stroke.color;
    }
    set lineColor(value) {
        this.stroke.color = OptionsColor_1.OptionsColor.create(this.stroke.color, value);
    }
    load(data) {
        var _a;
        if (data !== undefined) {
            if (data.enable !== undefined) this.enable = data.enable;
            const stroke = (_a = data.stroke) !== null && _a !== void 0 ? _a : {
                color: data.lineColor,
                width: data.lineWidth
            };
            this.stroke.load(stroke);
        }
    }
}
exports.Draw = Draw;

},{"./DrawStroke":"dlSW7","../../../../Options/Classes/OptionsColor":"2UtQV"}],"dlSW7":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DrawStroke = void 0;
const OptionsColor_1 = require("../../../../Options/Classes/OptionsColor");
const Utils_1 = require("../../../../Utils");
class DrawStroke {
    constructor(){
        this.color = new OptionsColor_1.OptionsColor();
        this.width = 0.5;
        this.opacity = 1;
    }
    load(data) {
        var _a;
        if (data !== undefined) {
            this.color = OptionsColor_1.OptionsColor.create(this.color, data.color);
            if (typeof this.color.value === "string") this.opacity = (_a = Utils_1.stringToAlpha(this.color.value)) !== null && _a !== void 0 ? _a : this.opacity;
            if (data.opacity !== undefined) this.opacity = data.opacity;
            if (data.width !== undefined) this.width = data.width;
        }
    }
}
exports.DrawStroke = DrawStroke;

},{"../../../../Options/Classes/OptionsColor":"2UtQV","../../../../Utils":"iU3t1"}],"1yRjj":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Move = void 0;
const Enums_1 = require("../../Enums");
class Move {
    constructor(){
        this.radius = 10;
        this.type = Enums_1.MoveType.path;
    }
    load(data) {
        if (data !== undefined) {
            if (data.radius !== undefined) this.radius = data.radius;
            if (data.type !== undefined) this.type = data.type;
        }
    }
}
exports.Move = Move;

},{"../../Enums":"iD5qi"}],"dOTXP":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Inline = void 0;
const Enums_1 = require("../../Enums");
class Inline {
    constructor(){
        this.arrangement = Enums_1.InlineArrangement.onePerPoint;
    }
    load(data) {
        if (data !== undefined) {
            if (data.arrangement !== undefined) this.arrangement = data.arrangement;
        }
    }
}
exports.Inline = Inline;

},{"../../Enums":"iD5qi"}],"bAwTs":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.LocalSvg = void 0;
class LocalSvg {
    constructor(){
        this.path = [];
        this.size = {
            height: 0,
            width: 0
        };
    }
    load(data) {
        if (data !== undefined) {
            if (data.path !== undefined) this.path = data.path;
            if (data.size !== undefined) {
                if (data.size.width !== undefined) this.size.width = data.size.width;
                if (data.size.height !== undefined) this.size.height = data.size.height;
            }
        }
    }
}
exports.LocalSvg = LocalSvg;

},{}],"9RG0e":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.segmentBounce = exports.calcClosestPtOnSegment = exports.parsePaths = exports.drawPolygonMaskPath = exports.drawPolygonMask = void 0;
const Utils_1 = require("../../Utils");
function drawPolygonMask(context, rawData, stroke) {
    const color = Utils_1.colorToRgb(stroke.color);
    if (!color) return;
    context.beginPath();
    context.moveTo(rawData[0].x, rawData[0].y);
    for (const item of rawData)context.lineTo(item.x, item.y);
    context.closePath();
    context.strokeStyle = Utils_1.getStyleFromRgb(color);
    context.lineWidth = stroke.width;
    context.stroke();
}
exports.drawPolygonMask = drawPolygonMask;
function drawPolygonMaskPath(context, path, stroke, position) {
    context.translate(position.x, position.y);
    const color = Utils_1.colorToRgb(stroke.color);
    if (!color) return;
    context.strokeStyle = Utils_1.getStyleFromRgb(color, stroke.opacity);
    context.lineWidth = stroke.width;
    context.stroke(path);
}
exports.drawPolygonMaskPath = drawPolygonMaskPath;
function parsePaths(paths, scale, offset) {
    var _a;
    const res = [];
    for (const path of paths){
        const segments = path.element.pathSegList;
        const len = (_a = segments === null || segments === void 0 ? void 0 : segments.numberOfItems) !== null && _a !== void 0 ? _a : 0;
        const p = {
            x: 0,
            y: 0
        };
        for(let i = 0; i < len; i++){
            const segment = segments === null || segments === void 0 ? void 0 : segments.getItem(i);
            const svgPathSeg = window.SVGPathSeg;
            switch(segment === null || segment === void 0 ? void 0 : segment.pathSegType){
                case svgPathSeg.PATHSEG_MOVETO_ABS:
                case svgPathSeg.PATHSEG_LINETO_ABS:
                case svgPathSeg.PATHSEG_CURVETO_CUBIC_ABS:
                case svgPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS:
                case svgPathSeg.PATHSEG_ARC_ABS:
                case svgPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS:
                case svgPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS:
                    {
                        const absSeg = segment;
                        p.x = absSeg.x;
                        p.y = absSeg.y;
                        break;
                    }
                case svgPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS:
                    p.x = segment.x;
                    break;
                case svgPathSeg.PATHSEG_LINETO_VERTICAL_ABS:
                    p.y = segment.y;
                    break;
                case svgPathSeg.PATHSEG_LINETO_REL:
                case svgPathSeg.PATHSEG_MOVETO_REL:
                case svgPathSeg.PATHSEG_CURVETO_CUBIC_REL:
                case svgPathSeg.PATHSEG_CURVETO_QUADRATIC_REL:
                case svgPathSeg.PATHSEG_ARC_REL:
                case svgPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL:
                case svgPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL:
                    {
                        const relSeg = segment;
                        p.x += relSeg.x;
                        p.y += relSeg.y;
                        break;
                    }
                case svgPathSeg.PATHSEG_LINETO_HORIZONTAL_REL:
                    p.x += segment.x;
                    break;
                case svgPathSeg.PATHSEG_LINETO_VERTICAL_REL:
                    p.y += segment.y;
                    break;
                case svgPathSeg.PATHSEG_UNKNOWN:
                case svgPathSeg.PATHSEG_CLOSEPATH:
                    continue;
            }
            res.push({
                x: p.x * scale + offset.x,
                y: p.y * scale + offset.y
            });
        }
    }
    return res;
}
exports.parsePaths = parsePaths;
function calcClosestPtOnSegment(s1, s2, pos) {
    const { dx , dy  } = Utils_1.getDistances(pos, s1);
    const { dx: dxx , dy: dyy  } = Utils_1.getDistances(s2, s1);
    const t = (dx * dxx + dy * dyy) / (dxx ** 2 + dyy ** 2);
    let x = s1.x + dxx * t;
    let y = s1.y + dyy * t;
    if (t < 0) {
        x = s1.x;
        y = s1.y;
    } else if (t > 1) {
        x = s2.x;
        y = s2.y;
    }
    return {
        x: x,
        y: y,
        isOnSegment: t >= 0 && t <= 1
    };
}
exports.calcClosestPtOnSegment = calcClosestPtOnSegment;
function segmentBounce(start, stop, velocity) {
    const { dx , dy  } = Utils_1.getDistances(start, stop);
    const wallAngle = Math.atan2(dy, dx);
    const wallNormalX = Math.sin(wallAngle);
    const wallNormalY = -Math.cos(wallAngle);
    const d = 2 * (velocity.x * wallNormalX + velocity.y * wallNormalY);
    velocity.x -= d * wallNormalX;
    velocity.y -= d * wallNormalY;
}
exports.segmentBounce = segmentBounce;

},{"../../Utils":"iU3t1"}],"9ivD0":[function(require,module,exports) {
module.exports = require("./helpers/browser/js-loader")(require('./helpers/bundle-url').getBundleURL('pTCE9') + "pathseg.c5266f95.js" + "?" + Date.now()).catch((err)=>{
    delete module.bundle.cache[module.id];
    throw err;
}).then(()=>module.bundle.root('jJ1lf')
);

},{"./helpers/browser/js-loader":"285qT","./helpers/bundle-url":"chiK4"}],"285qT":[function(require,module,exports) {
"use strict";
var cacheLoader = require('../cacheLoader');
module.exports = cacheLoader(function(bundle) {
    return new Promise(function(resolve, reject) {
        // Don't insert the same script twice (e.g. if it was already in the HTML)
        var existingScripts = document.getElementsByTagName('script');
        if ([].concat(existingScripts).some(function isCurrentBundle(script) {
            return script.src === bundle;
        })) {
            resolve();
            return;
        }
        var script = document.createElement('script');
        script.async = true;
        script.type = 'text/javascript';
        script.charset = 'utf-8';
        script.src = bundle;
        script.onerror = function(e) {
            script.onerror = script.onload = null;
            script.remove();
            reject(e);
        };
        script.onload = function() {
            script.onerror = script.onload = null;
            resolve();
        };
        document.getElementsByTagName('head')[0].appendChild(script);
    });
});

},{"../cacheLoader":"7AHIJ"}],"7AHIJ":[function(require,module,exports) {
"use strict";
var cachedBundles = {
};
var cachedPreloads = {
};
var cachedPrefetches = {
};
function getCache(type) {
    switch(type){
        case 'preload':
            return cachedPreloads;
        case 'prefetch':
            return cachedPrefetches;
        default:
            return cachedBundles;
    }
}
module.exports = function(loader, type) {
    return function(bundle) {
        var cache = getCache(type);
        if (cache[bundle]) return cache[bundle];
        return cache[bundle] = loader.apply(null, arguments).catch(function(e) {
            delete cache[bundle];
            throw e;
        });
    };
};

},{}],"chiK4":[function(require,module,exports) {
"use strict";
var bundleURL = {
};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ('' + err.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return '/';
}
function getBaseURL(url) {
    return ('' + url).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/, '$1') + '/';
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ('' + url).match(/(https?|file|ftp):\/\/[^/]+/);
    if (!matches) throw new Error('Origin not found');
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"3W2XV":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.loadRollUpdater = void 0;
const RollUpdater_1 = require("./RollUpdater");
function loadRollUpdater(tsParticles) {
    tsParticles.addParticleUpdater("roll", ()=>new RollUpdater_1.RollUpdater()
    );
}
exports.loadRollUpdater = loadRollUpdater;

},{"./RollUpdater":"lHrgv"}],"lHrgv":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RollUpdater = void 0;
const Utils_1 = require("../../Utils");
const Enums_1 = require("../../Enums");
function updateRoll(particle, delta) {
    const roll = particle.options.roll;
    if (!particle.roll || !roll.enable) return;
    const speed = particle.roll.speed * delta.factor;
    const max = 2 * Math.PI;
    particle.roll.angle += speed;
    if (particle.roll.angle > max) particle.roll.angle -= max;
}
class RollUpdater {
    init(particle) {
        const rollOpt = particle.options.roll;
        if (rollOpt.enable) {
            particle.roll = {
                angle: Math.random() * Math.PI * 2,
                speed: Utils_1.getRangeValue(rollOpt.speed) / 360
            };
            if (rollOpt.backColor) particle.backColor = Utils_1.colorToHsl(rollOpt.backColor);
            else if (rollOpt.darken.enable && rollOpt.enlighten.enable) {
                const alterType = Math.random() >= 0.5 ? Enums_1.AlterType.darken : Enums_1.AlterType.enlighten;
                particle.roll.alter = {
                    type: alterType,
                    value: alterType === Enums_1.AlterType.darken ? rollOpt.darken.value : rollOpt.enlighten.value
                };
            } else if (rollOpt.darken.enable) particle.roll.alter = {
                type: Enums_1.AlterType.darken,
                value: rollOpt.darken.value
            };
            else if (rollOpt.enlighten.enable) particle.roll.alter = {
                type: Enums_1.AlterType.enlighten,
                value: rollOpt.enlighten.value
            };
        } else particle.roll = {
            angle: 0,
            speed: 0
        };
    }
    isEnabled(particle) {
        const roll = particle.options.roll;
        return !particle.destroyed && !particle.spawning && roll.enable;
    }
    update(particle, delta) {
        if (!this.isEnabled(particle)) return;
        updateRoll(particle, delta);
    }
}
exports.RollUpdater = RollUpdater;

},{"../../Utils":"iU3t1","../../Enums":"e5HNg"}],"4N51F":[function(require,module,exports) {
"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, {
        enumerable: true,
        get: function() {
            return m[k];
        }
    });
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = this && this.__exportStar || function(m, exports) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
__exportStar(require("./RangeValue"), exports);
__exportStar(require("./RecursivePartial"), exports);
__exportStar(require("./ShapeData"), exports);
__exportStar(require("./ShapeDrawerFunctions"), exports);
__exportStar(require("./SingleOrMultiple"), exports);
__exportStar(require("./PathOptions"), exports);

},{"./RangeValue":"hRWey","./RecursivePartial":"8BjR6","./ShapeData":"jdNuz","./ShapeDrawerFunctions":"k0myn","./SingleOrMultiple":"5daqk","./PathOptions":"2HGer"}],"hRWey":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});

},{}],"8BjR6":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});

},{}],"jdNuz":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});

},{}],"k0myn":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});

},{}],"5daqk":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});

},{}],"2HGer":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});

},{}],"2WJnG":[function(require,module,exports) {
"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, {
        enumerable: true,
        get: function() {
            return m[k];
        }
    });
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = this && this.__exportStar || function(m, exports) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
__exportStar(require("./Colors"), exports);
__exportStar(require("./Gradients"), exports);
__exportStar(require("./IAttract"), exports);
__exportStar(require("./IBounds"), exports);
__exportStar(require("./IBubble"), exports);
__exportStar(require("./IBubbleParticleData"), exports);
__exportStar(require("./ICircleBouncer"), exports);
__exportStar(require("./IContainerInteractivity"), exports);
__exportStar(require("./IContainerPlugin"), exports);
__exportStar(require("./ICoordinates"), exports);
__exportStar(require("./IDelta"), exports);
__exportStar(require("./IDimension"), exports);
__exportStar(require("./IDistance"), exports);
__exportStar(require("./IExternalInteractor"), exports);
__exportStar(require("./IInteractor"), exports);
__exportStar(require("./IMouseData"), exports);
__exportStar(require("./IMovePathGenerator"), exports);
__exportStar(require("./IParticle"), exports);
__exportStar(require("./IParticleGradientAnimation"), exports);
__exportStar(require("./IParticleGradientColorAnimation"), exports);
__exportStar(require("./IParticleHslAnimation"), exports);
__exportStar(require("./IParticleLife"), exports);
__exportStar(require("./IParticleLoops"), exports);
__exportStar(require("./IParticleRetinaProps"), exports);
__exportStar(require("./IParticleSpin"), exports);
__exportStar(require("./IParticleUpdater"), exports);
__exportStar(require("./IParticleValueAnimation"), exports);
__exportStar(require("./IParticlesInteractor"), exports);
__exportStar(require("./IPlugin"), exports);
__exportStar(require("./IRangeValue"), exports);
__exportStar(require("./IRectSideResult"), exports);
__exportStar(require("./IRepulse"), exports);
__exportStar(require("./IShapeDrawer"), exports);
__exportStar(require("./IShapeValues"), exports);

},{"./Colors":"4TzH7","./Gradients":"9pLVq","./IAttract":"3UCI7","./IBounds":"8L2sx","./IBubble":"6O2oS","./IBubbleParticleData":"316qm","./ICircleBouncer":"jh4zs","./IContainerInteractivity":"hSkNj","./IContainerPlugin":"z5dFb","./ICoordinates":"2rF0y","./IDelta":"6fv77","./IDimension":"3Vuq0","./IDistance":"8gCKJ","./IExternalInteractor":"cZyG5","./IInteractor":"g13CD","./IMouseData":"dl1Rd","./IMovePathGenerator":"6U9T3","./IParticle":"5mPxX","./IParticleGradientAnimation":"cCXo2","./IParticleGradientColorAnimation":"9IfP6","./IParticleHslAnimation":"atybM","./IParticleLife":"ii2al","./IParticleLoops":"3FFSo","./IParticleRetinaProps":"cje6A","./IParticleSpin":"fsWrt","./IParticleUpdater":"kZliT","./IParticleValueAnimation":"jEksz","./IParticlesInteractor":"eUzJh","./IPlugin":"O8Xo8","./IRangeValue":"kPme3","./IRectSideResult":"3q8Ah","./IRepulse":"bZHzJ","./IShapeDrawer":"jONeL","./IShapeValues":"jz1Ss"}],"4TzH7":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});

},{}],"9pLVq":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});

},{}],"3UCI7":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});

},{}],"8L2sx":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});

},{}],"6O2oS":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});

},{}],"316qm":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});

},{}],"jh4zs":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});

},{}],"hSkNj":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});

},{}],"z5dFb":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});

},{}],"2rF0y":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});

},{}],"6fv77":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});

},{}],"3Vuq0":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});

},{}],"8gCKJ":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});

},{}],"cZyG5":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});

},{}],"g13CD":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});

},{}],"dl1Rd":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});

},{}],"6U9T3":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});

},{}],"5mPxX":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});

},{}],"cCXo2":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});

},{}],"9IfP6":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});

},{}],"atybM":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});

},{}],"ii2al":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});

},{}],"3FFSo":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});

},{}],"cje6A":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});

},{}],"fsWrt":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});

},{}],"kZliT":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});

},{}],"jEksz":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});

},{}],"eUzJh":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});

},{}],"O8Xo8":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});

},{}],"kPme3":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});

},{}],"3q8Ah":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});

},{}],"bZHzJ":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});

},{}],"jONeL":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});

},{}],"jz1Ss":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});

},{}],"7Z7sx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SNOW_EFFECT", ()=>SNOW_EFFECT
);
const SNOW_EFFECT = 'snow-effect';

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}]},["gwARK","1mazX"], "1mazX", "parcelRequire94cf")

//# sourceMappingURL=index.js.map
