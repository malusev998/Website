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
})({"ekiBd":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "4a236f9275d0a351";
module.bundle.HMR_BUNDLE_ID = "6e3ebec79b251204";
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

},{}],"U15t6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _indexCss = require("./css/index.css");
var _csrf = require("./csrf");
var _http = require("./http");
var _httpDefault = parcelHelpers.interopDefault(_http);
var _sidebar = require("./sidebar");
var _sidebarDefault = parcelHelpers.interopDefault(_sidebar);
var _recaptcha = require("./recaptcha");
const csrfToken = new _csrf.CsrfToken();
const sidebar = new _sidebarDefault.default();
document.addEventListener('DOMContentLoaded', ()=>{
    _httpDefault.default.baseUrl = "https://localhost:5001/api";
    _httpDefault.default.csrf = csrfToken;
    _recaptcha.setKey("6LeBLtYcAAAAAJwRRuiL9XWWqWiiK3AZSenZ2Xr_");
    sidebar.attachToElement();
});
window.addEventListener('beforeunload', ()=>{
    sidebar.dispose();
});

},{"./css/index.css":"dMM4n","./http":"1nIup","./sidebar":"5nKit","./recaptcha":"dJlOb","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV","./csrf":"73vDG"}],"dMM4n":[function() {},{}],"1nIup":[function(require,module,exports) {
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"ciiiV":[function(require,module,exports) {
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

},{}],"iYN03":[function(require,module,exports) {
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"5nKit":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Sidebar
);
const CLOSE_IMG = '/img/close.svg';
const MENU_IMG = '/img/menu.svg';
var Elements;
(function(Elements) {
    Elements["HamburgerMenu"] = '.hamburger-menu';
    Elements["Image"] = '.hamburger-menu img';
    Elements["Sidebar"] = '.sidebar';
})(Elements || (Elements = {
}));
class Sidebar {
    attachToElement() {
        this.hamburger = document.querySelector(Elements.HamburgerMenu);
        this.image = document.querySelector(Elements.Image);
        this.sidebar = document.querySelector(Elements.Sidebar);
        if (!this.hamburger) throw new Error('Element for hamburger menu is not found');
        if (!this.image) throw new Error('Image element for hamburger menu is not found');
        if (!this.sidebar) throw new Error('Sidebar element for hamburger menu is not found');
        this.hamburger.addEventListener('click', this.eventHandler.bind(this));
    }
    eventHandler(event) {
        event.preventDefault();
        this.open = !this.open;
        if (this.open) {
            this.image.src = CLOSE_IMG;
            this.sidebar.classList.add('open');
        } else {
            this.image.src = MENU_IMG;
            this.sidebar.classList.remove('open');
        }
    }
    dispose() {
        this.hamburger.removeEventListener('click', this.attachToElement, true);
    }
    constructor(){
        this.open = false;
    }
}

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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"73vDG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CSRF_COOKIE_NAME", ()=>CSRF_COOKIE_NAME
);
parcelHelpers.export(exports, "CsrfToken", ()=>CsrfToken
);
var _jsCookie = require("js-cookie");
var _jsCookieDefault = parcelHelpers.interopDefault(_jsCookie);
const CSRF_COOKIE_NAME = 'XSRF-TOKEN';
class CsrfToken {
    constructor(cookieName = CSRF_COOKIE_NAME){
        this.cookieName = cookieName;
    }
    get token() {
        return _jsCookieDefault.default.get(this.cookieName);
    }
}

},{"js-cookie":"iwUqJ","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"iwUqJ":[function(require,module,exports) {
(function(global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() : typeof define === 'function' && define.amd ? define(factory) : (global = global || self, (function() {
        var current = global.Cookies;
        var exports = global.Cookies = factory();
        exports.noConflict = function() {
            global.Cookies = current;
            return exports;
        };
    })());
})(this, function() {
    'use strict';
    /* eslint-disable no-var */ function assign(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)target[key] = source[key];
        }
        return target;
    }
    /* eslint-enable no-var */ /* eslint-disable no-var */ var defaultConverter = {
        read: function(value) {
            if (value[0] === '"') value = value.slice(1, -1);
            return value.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
        },
        write: function(value) {
            return encodeURIComponent(value).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g, decodeURIComponent);
        }
    };
    /* eslint-enable no-var */ /* eslint-disable no-var */ function init(converter, defaultAttributes) {
        function set(key, value, attributes) {
            if (typeof document === 'undefined') return;
            attributes = assign({
            }, defaultAttributes, attributes);
            if (typeof attributes.expires === 'number') attributes.expires = new Date(Date.now() + attributes.expires * 86400000);
            if (attributes.expires) attributes.expires = attributes.expires.toUTCString();
            key = encodeURIComponent(key).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
            var stringifiedAttributes = '';
            for(var attributeName in attributes){
                if (!attributes[attributeName]) continue;
                stringifiedAttributes += '; ' + attributeName;
                if (attributes[attributeName] === true) continue;
                // Considers RFC 6265 section 5.2:
                // ...
                // 3.  If the remaining unparsed-attributes contains a %x3B (";")
                //     character:
                // Consume the characters of the unparsed-attributes up to,
                // not including, the first %x3B (";") character.
                // ...
                stringifiedAttributes += '=' + attributes[attributeName].split(';')[0];
            }
            return document.cookie = key + '=' + converter.write(value, key) + stringifiedAttributes;
        }
        function get(key) {
            if (typeof document === 'undefined' || arguments.length && !key) return;
            // To prevent the for loop in the first place assign an empty array
            // in case there are no cookies at all.
            var cookies = document.cookie ? document.cookie.split('; ') : [];
            var jar = {
            };
            for(var i = 0; i < cookies.length; i++){
                var parts = cookies[i].split('=');
                var value = parts.slice(1).join('=');
                try {
                    var foundKey = decodeURIComponent(parts[0]);
                    jar[foundKey] = converter.read(value, foundKey);
                    if (key === foundKey) break;
                } catch (e) {
                }
            }
            return key ? jar[key] : jar;
        }
        return Object.create({
            set: set,
            get: get,
            remove: function(key, attributes) {
                set(key, '', assign({
                }, attributes, {
                    expires: -1
                }));
            },
            withAttributes: function(attributes) {
                return init(this.converter, assign({
                }, this.attributes, attributes));
            },
            withConverter: function(converter) {
                return init(assign({
                }, this.converter, converter), this.attributes);
            }
        }, {
            attributes: {
                value: Object.freeze(defaultAttributes)
            },
            converter: {
                value: Object.freeze(converter)
            }
        });
    }
    var api = init(defaultConverter, {
        path: '/'
    });
    /* eslint-enable no-var */ return api;
});

},{}]},["ekiBd","U15t6"], "U15t6", "parcelRequire94cf")

//# sourceMappingURL=main.js.map
