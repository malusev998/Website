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
})({"gGCj4":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = 1234;
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
var _logrocket = require("logrocket");
var _logrocketDefault = parcelHelpers.interopDefault(_logrocket);
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
    _logrocketDefault.default.init("99igho/dusan-malusev");
    sidebar.attachToElement();
});
window.addEventListener('beforeunload', ()=>{
    sidebar.dispose();
});

},{"./css/index.css":"dMM4n","./http":"1nIup","./sidebar":"5nKit","./recaptcha":"dJlOb","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV","./csrf":"73vDG","logrocket":"gLTSR"}],"dMM4n":[function() {},{}],"1nIup":[function(require,module,exports) {
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

},{}],"gLTSR":[function(require,module,exports) {
(function webpackUniversalModuleDefinition(root, factory) {
    if (typeof exports === 'object' && typeof module === 'object') module.exports = factory();
    else if (typeof define === 'function' && define.amd) define([], factory);
    else {
        var a = factory();
        for(var i in a)(typeof exports === 'object' ? exports : root)[i] = a[i];
    }
})(this, function() {
    return(/******/ (function(modules) {
        /******/ // The module cache
        /******/ var installedModules = {
        };
        /******/ /******/ // The require function
        /******/ function __webpack_require__(moduleId) {
            /******/ /******/ // Check if module is in cache
            /******/ if (installedModules[moduleId]) /******/ return installedModules[moduleId].exports;
            /******/ // Create a new module (and put it into the cache)
            /******/ var module = installedModules[moduleId] = {
                /******/ i: moduleId,
                /******/ l: false,
                /******/ exports: {
                }
            };
            /******/ /******/ // Execute the module function
            /******/ modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
            /******/ /******/ // Flag the module as loaded
            /******/ module.l = true;
            /******/ /******/ // Return the exports of the module
            /******/ return module.exports;
        /******/ }
        /******/ /******/ /******/ // expose the modules object (__webpack_modules__)
        /******/ __webpack_require__.m = modules;
        /******/ /******/ // expose the module cache
        /******/ __webpack_require__.c = installedModules;
        /******/ /******/ // define getter function for harmony exports
        /******/ __webpack_require__.d = function(exports, name, getter) {
            /******/ if (!__webpack_require__.o(exports, name)) /******/ Object.defineProperty(exports, name, {
                enumerable: true,
                get: getter
            });
        /******/ };
        /******/ /******/ // define __esModule on exports
        /******/ __webpack_require__.r = function(exports) {
            /******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) /******/ Object.defineProperty(exports, Symbol.toStringTag, {
                value: 'Module'
            });
            /******/ Object.defineProperty(exports, '__esModule', {
                value: true
            });
        /******/ };
        /******/ /******/ // create a fake namespace object
        /******/ // mode & 1: value is a module id, require it
        /******/ // mode & 2: merge all properties of value into the ns
        /******/ // mode & 4: return value when already ns object
        /******/ // mode & 8|1: behave like require
        /******/ __webpack_require__.t = function(value, mode) {
            /******/ if (mode & 1) value = __webpack_require__(value);
            /******/ if (mode & 8) return value;
            /******/ if (mode & 4 && typeof value === 'object' && value && value.__esModule) return value;
            /******/ var ns = Object.create(null);
            /******/ __webpack_require__.r(ns);
            /******/ Object.defineProperty(ns, 'default', {
                enumerable: true,
                value: value
            });
            /******/ if (mode & 2 && typeof value != 'string') for(var key in value)__webpack_require__.d(ns, key, (function(key) {
                return value[key];
            }).bind(null, key));
            /******/ return ns;
        /******/ };
        /******/ /******/ // getDefaultExport function for compatibility with non-harmony modules
        /******/ __webpack_require__.n = function(module) {
            /******/ var getter = module && module.__esModule ? /******/ function getDefault() {
                return module['default'];
            } : /******/ function getModuleExports() {
                return module;
            };
            /******/ __webpack_require__.d(getter, 'a', getter);
            /******/ return getter;
        /******/ };
        /******/ /******/ // Object.prototype.hasOwnProperty.call
        /******/ __webpack_require__.o = function(object, property) {
            return Object.prototype.hasOwnProperty.call(object, property);
        };
        /******/ /******/ // __webpack_public_path__
        /******/ __webpack_require__.p = "";
        /******/ /******/ /******/ // Load entry module and return exports
        /******/ return __webpack_require__(__webpack_require__.s = 0);
    /******/ })({
        /***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js": function(module, exports) {
            function _arrayLikeToArray(arr, len) {
                if (len == null || len > arr.length) len = arr.length;
                for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
                return arr2;
            }
            module.exports = _arrayLikeToArray;
            module.exports["default"] = module.exports, module.exports.__esModule = true;
        /***/ },
        /***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js": function(module, exports, __webpack_require__) {
            var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");
            function _arrayWithoutHoles(arr) {
                if (Array.isArray(arr)) return arrayLikeToArray(arr);
            }
            module.exports = _arrayWithoutHoles;
            module.exports["default"] = module.exports, module.exports.__esModule = true;
        /***/ },
        /***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js": function(module, exports) {
            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
            }
            module.exports = _classCallCheck;
            module.exports["default"] = module.exports, module.exports.__esModule = true;
        /***/ },
        /***/ "./node_modules/@babel/runtime/helpers/createClass.js": function(module, exports) {
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
            module.exports = _createClass;
            module.exports["default"] = module.exports, module.exports.__esModule = true;
        /***/ },
        /***/ "./node_modules/@babel/runtime/helpers/defineProperty.js": function(module, exports) {
            function _defineProperty(obj, key, value) {
                if (key in obj) Object.defineProperty(obj, key, {
                    value: value,
                    enumerable: true,
                    configurable: true,
                    writable: true
                });
                else obj[key] = value;
                return obj;
            }
            module.exports = _defineProperty;
            module.exports["default"] = module.exports, module.exports.__esModule = true;
        /***/ },
        /***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js": function(module, exports) {
            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    "default": obj
                };
            }
            module.exports = _interopRequireDefault;
            module.exports["default"] = module.exports, module.exports.__esModule = true;
        /***/ },
        /***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js": function(module, exports, __webpack_require__) {
            var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js")["default"];
            function _getRequireWildcardCache(nodeInterop) {
                if (typeof WeakMap !== "function") return null;
                var cacheBabelInterop = new WeakMap();
                var cacheNodeInterop = new WeakMap();
                return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) {
                    return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
                })(nodeInterop);
            }
            function _interopRequireWildcard(obj, nodeInterop) {
                if (!nodeInterop && obj && obj.__esModule) return obj;
                if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") return {
                    "default": obj
                };
                var cache = _getRequireWildcardCache(nodeInterop);
                if (cache && cache.has(obj)) return cache.get(obj);
                var newObj = {
                };
                var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for(var key in obj)if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
                    var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
                    if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
                    else newObj[key] = obj[key];
                }
                newObj["default"] = obj;
                if (cache) cache.set(obj, newObj);
                return newObj;
            }
            module.exports = _interopRequireWildcard;
            module.exports["default"] = module.exports, module.exports.__esModule = true;
        /***/ },
        /***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js": function(module, exports) {
            function _iterableToArray(iter) {
                if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
            }
            module.exports = _iterableToArray;
            module.exports["default"] = module.exports, module.exports.__esModule = true;
        /***/ },
        /***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js": function(module, exports) {
            function _nonIterableSpread() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }
            module.exports = _nonIterableSpread;
            module.exports["default"] = module.exports, module.exports.__esModule = true;
        /***/ },
        /***/ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js": function(module, exports, __webpack_require__) {
            var objectWithoutPropertiesLoose = __webpack_require__(/*! ./objectWithoutPropertiesLoose.js */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js");
            function _objectWithoutProperties(source, excluded) {
                if (source == null) return {
                };
                var target = objectWithoutPropertiesLoose(source, excluded);
                var key, i;
                if (Object.getOwnPropertySymbols) {
                    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
                    for(i = 0; i < sourceSymbolKeys.length; i++){
                        key = sourceSymbolKeys[i];
                        if (excluded.indexOf(key) >= 0) continue;
                        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
                        target[key] = source[key];
                    }
                }
                return target;
            }
            module.exports = _objectWithoutProperties;
            module.exports["default"] = module.exports, module.exports.__esModule = true;
        /***/ },
        /***/ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js": function(module, exports) {
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
            module.exports = _objectWithoutPropertiesLoose;
            module.exports["default"] = module.exports, module.exports.__esModule = true;
        /***/ },
        /***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js": function(module, exports, __webpack_require__) {
            var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles.js */ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");
            var iterableToArray = __webpack_require__(/*! ./iterableToArray.js */ "./node_modules/@babel/runtime/helpers/iterableToArray.js");
            var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");
            var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread.js */ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js");
            function _toConsumableArray(arr) {
                return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
            }
            module.exports = _toConsumableArray;
            module.exports["default"] = module.exports, module.exports.__esModule = true;
        /***/ },
        /***/ "./node_modules/@babel/runtime/helpers/typeof.js": function(module, exports) {
            function _typeof(obj) {
                if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
                    module.exports = _typeof = function _typeof(obj) {
                        return typeof obj;
                    };
                    module.exports["default"] = module.exports, module.exports.__esModule = true;
                } else {
                    module.exports = _typeof = function _typeof(obj) {
                        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
                    };
                    module.exports["default"] = module.exports, module.exports.__esModule = true;
                }
                return _typeof(obj);
            }
            module.exports = _typeof;
            module.exports["default"] = module.exports, module.exports.__esModule = true;
        /***/ },
        /***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js": function(module, exports, __webpack_require__) {
            var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");
            function _unsupportedIterableToArray(o, minLen) {
                if (!o) return;
                if (typeof o === "string") return arrayLikeToArray(o, minLen);
                var n = Object.prototype.toString.call(o).slice(8, -1);
                if (n === "Object" && o.constructor) n = o.constructor.name;
                if (n === "Map" || n === "Set") return Array.from(o);
                if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
            }
            module.exports = _unsupportedIterableToArray;
            module.exports["default"] = module.exports, module.exports.__esModule = true;
        /***/ },
        /***/ "./node_modules/webpack/buildin/global.js": function(module, exports) {
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
        /***/ },
        /***/ "./packages/@apphub:logrocket-console/src/index.js": function(module, exports, __webpack_require__) {
            "use strict";
            var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.default = void 0;
            var _registerConsole = _interopRequireDefault(__webpack_require__(/*! ./registerConsole */ "./packages/@apphub:logrocket-console/src/registerConsole.js"));
            var _default = _registerConsole.default;
            exports.default = _default;
            module.exports = exports.default;
        /***/ },
        /***/ "./packages/@apphub:logrocket-console/src/registerConsole.js": function(module, exports, __webpack_require__) {
            "use strict";
            var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.default = registerConsole;
            var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js"));
            var _enhanceFunc = _interopRequireDefault(__webpack_require__(/*! @apphub/logrocket-utils/src/enhanceFunc */ "./packages/@apphub:logrocket-utils/src/enhanceFunc.js"));
            var _logrocketExceptions = __webpack_require__(/*! @apphub/logrocket-exceptions */ "./packages/@apphub:logrocket-exceptions/src/index.js");
            function registerConsole(logger) {
                var unsubFunctions = [];
                var methods = [
                    'log',
                    'warn',
                    'info',
                    'error',
                    'debug'
                ];
                methods.forEach(function(method) {
                    unsubFunctions.push(_enhanceFunc.default(console, method, function() {
                        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
                        logger.addEvent('lr.core.LogEvent', function() {
                            var consoleOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
                            };
                            var isEnabled = consoleOptions.isEnabled;
                            if (_typeof2.default(isEnabled) === 'object' && isEnabled[method] === false || isEnabled === false) return null;
                            if (method === 'error' && consoleOptions.shouldAggregateConsoleErrors) _logrocketExceptions.Capture.captureMessage(logger, args[0], {
                            }, true);
                            return {
                                logLevel: method.toUpperCase(),
                                args: args
                            };
                        });
                    }));
                });
                return function() {
                    unsubFunctions.forEach(function(unsubFunction) {
                        return unsubFunction();
                    });
                };
            }
            module.exports = exports.default;
        /***/ },
        /***/ "./packages/@apphub:logrocket-exceptions/src/Capture.js": function(module, exports, __webpack_require__) {
            "use strict";
            var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.captureMessage = captureMessage;
            exports.captureException = captureException;
            var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js"));
            var _TraceKit = _interopRequireDefault(__webpack_require__(/*! @apphub/logrocket-utils/src/TraceKit */ "./packages/@apphub:logrocket-utils/src/TraceKit.js"));
            var _stackTraceFromError = _interopRequireDefault(__webpack_require__(/*! ./stackTraceFromError */ "./packages/@apphub:logrocket-exceptions/src/stackTraceFromError.js"));
            /* eslint-disable no-param-reassign */ function isScalar(value) {
                return /boolean|number|string/.test(_typeof2.default(value));
            }
            function scrub(data, options) {
                if (options) {
                    var optionalScalars = [
                        // and 'debug'. Defaults to 'error'.
                        'level',
                        'logger'
                    ];
                    for(var _i = 0, _optionalScalars = optionalScalars; _i < _optionalScalars.length; _i++){
                        var field = _optionalScalars[_i];
                        var value = options[field];
                        if (isScalar(value)) data[field] = value.toString();
                    }
                    var optionalMaps = [
                        'tags',
                        'extra'
                    ];
                    for(var _i2 = 0, _optionalMaps = optionalMaps; _i2 < _optionalMaps.length; _i2++){
                        var _field = _optionalMaps[_i2];
                        var dirty = options[_field] || {
                        };
                        var scrubbed = {
                        };
                        for(var _i3 = 0, _Object$keys = Object.keys(dirty); _i3 < _Object$keys.length; _i3++){
                            var key = _Object$keys[_i3];
                            var _value = dirty[key];
                            if (isScalar(_value)) scrubbed[key.toString()] = _value.toString();
                        }
                        data[_field] = scrubbed;
                    }
                }
            }
            function captureMessage(logger, message) {
                var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
                };
                var isConsole = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
                var data = {
                    exceptionType: isConsole ? 'CONSOLE' : 'MESSAGE',
                    message: message,
                    browserHref: window.location ? window.location.href : ''
                };
                scrub(data, options);
                logger.addEvent('lr.core.Exception', function() {
                    return data;
                });
            }
            function captureException(logger, exception) {
                var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
                };
                var preppedTrace = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
                var trace = preppedTrace || _TraceKit.default.computeStackTrace(exception);
                var data = {
                    exceptionType: 'WINDOW',
                    errorType: trace.name,
                    message: trace.message,
                    browserHref: window.location ? window.location.href : ''
                };
                scrub(data, options);
                var addEventOptions = {
                    _stackTrace: _stackTraceFromError.default(trace)
                };
                logger.addEvent('lr.core.Exception', function() {
                    return data;
                }, addEventOptions);
            }
        /***/ },
        /***/ "./packages/@apphub:logrocket-exceptions/src/index.js": function(module, exports, __webpack_require__) {
            "use strict";
            var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");
            var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            Object.defineProperty(exports, "registerExceptions", {
                enumerable: true,
                get: function get() {
                    return _registerExceptions.default;
                }
            });
            exports.Capture = void 0;
            var _registerExceptions = _interopRequireDefault(__webpack_require__(/*! ./registerExceptions */ "./packages/@apphub:logrocket-exceptions/src/registerExceptions.js"));
            var Capture = _interopRequireWildcard(__webpack_require__(/*! ./Capture */ "./packages/@apphub:logrocket-exceptions/src/Capture.js"));
            exports.Capture = Capture;
        /***/ },
        /***/ "./packages/@apphub:logrocket-exceptions/src/raven/raven.js": function(module, exports, __webpack_require__) {
            "use strict";
            (function(global) {
                var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                exports.default = void 0;
                var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));
                var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));
                var _TraceKit = _interopRequireDefault(__webpack_require__(/*! @apphub/logrocket-utils/src/TraceKit */ "./packages/@apphub:logrocket-utils/src/TraceKit.js"));
                /* eslint-disable */ /*
Some contents of this file were originaly from raven-js, BSD-2 Clause

Copyright (c) 2018 Sentry (https://sentry.io) and individual contributors.
All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

* Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
* Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/ var objectPrototype = Object.prototype;
                function isUndefined(what) {
                    return what === void 0;
                }
                function isFunction(what) {
                    return typeof what === 'function';
                }
                function each(obj, callback) {
                    var i, j;
                    if (isUndefined(obj.length)) {
                        for(i in obj)if (hasKey(obj, i)) callback.call(null, i, obj[i]);
                    } else {
                        j = obj.length;
                        if (j) for(i = 0; i < j; i++)callback.call(null, i, obj[i]);
                    }
                }
                /**
 * hasKey, a better form of hasOwnProperty
 * Example: hasKey(MainHostObject, property) === true/false
 *
 * @param {Object} host object to check property
 * @param {string} key to check
 */ function hasKey(object, key) {
                    return objectPrototype.hasOwnProperty.call(object, key);
                }
                /**
 * Polyfill a method
 * @param obj object e.g. `document`
 * @param name method name present on object e.g. `addEventListener`
 * @param replacement replacement function
 * @param track {optional} record instrumentation to an array
 */ function fill(obj, name, replacement, track) {
                    var orig = obj[name];
                    obj[name] = replacement(orig);
                    if (track) track.push([
                        obj,
                        name,
                        orig
                    ]);
                }
                var _window = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {
                };
                var _document = _window.document;
                var Handler = /*#__PURE__*/ function() {
                    function Handler(_ref) {
                        var captureException = _ref.captureException;
                        _classCallCheck2.default(this, Handler);
                        this._errorHandler = this._errorHandler.bind(this);
                        this._ignoreOnError = 0;
                        this._wrappedBuiltIns = [];
                        this.captureException = captureException;
                        _TraceKit.default.report.subscribe(this._errorHandler);
                        this._instrumentTryCatch();
                    }
                    _createClass2.default(Handler, [
                        {
                            key: "uninstall",
                            value: function uninstall() {
                                _TraceKit.default.report.unsubscribe(this._errorHandler); // restore any wrapped builtins
                                var builtin;
                                while(this._wrappedBuiltIns.length){
                                    builtin = this._wrappedBuiltIns.shift();
                                    var obj = builtin[0], name = builtin[1], orig = builtin[2];
                                    obj[name] = orig;
                                }
                            }
                        },
                        {
                            key: "_errorHandler",
                            value: function _errorHandler(report) {
                                if (!this._ignoreOnError) this.captureException(report);
                            }
                        },
                        {
                            key: "_ignoreNextOnError",
                            value: function _ignoreNextOnError() {
                                var _this = this;
                                this._ignoreOnError += 1;
                                setTimeout(function() {
                                    // onerror should trigger before setTimeout
                                    _this._ignoreOnError -= 1;
                                });
                            }
                        },
                        {
                            key: "context",
                            value: function context(options, func, args) {
                                if (isFunction(options)) {
                                    args = func || [];
                                    func = options;
                                    options = undefined;
                                }
                                return this.wrap(options, func).apply(this, args);
                            }
                        },
                        {
                            key: "wrap",
                            value: /*
     * Wrap code within a context and returns back a new function to be executed
     *
     * @param {object} options A specific set of options for this context [optional]
     * @param {function} func The function to be wrapped in a new context
     * @param {function} func A function to call before the try/catch wrapper [optional, private]
     * @return {function} The newly wrapped functions with a context
     */ function wrap(options, func, _before) {
                                var self = this; // 1 argument has been passed, and it's not a function
                                // so just return it
                                if (isUndefined(func) && !isFunction(options)) return options;
                                 // options is optional
                                if (isFunction(options)) {
                                    func = options;
                                    options = undefined;
                                } // At this point, we've passed along 2 arguments, and the second one
                                // is not a function either, so we'll just return the second argument.
                                if (!isFunction(func)) return func;
                                 // We don't wanna wrap it twice!
                                try {
                                    if (func.__lr__) return func;
                                     // If this has already been wrapped in the past, return that
                                    if (func.__lr_wrapper__) return func.__lr_wrapper__;
                                     // If func is not extensible, return the function as-is to prevent TypeErrors
                                    // when trying to add new props & to assure immutable funcs aren't changed
                                    if (!Object.isExtensible(func)) return func;
                                } catch (e) {
                                    // Just accessing custom props in some Selenium environments
                                    // can cause a "Permission denied" exception (see lr-js#495).
                                    // Bail on wrapping and return the function as-is (defers to window.onerror).
                                    return func;
                                }
                                function wrapped() {
                                    var args = [], i = arguments.length, deep = !options || options && options.deep !== false;
                                    if (_before && isFunction(_before)) _before.apply(this, arguments);
                                     // Recursively wrap all of a function's arguments that are
                                    // functions themselves.
                                    while(i--)args[i] = deep ? self.wrap(options, arguments[i]) : arguments[i];
                                    try {
                                        // Attempt to invoke user-land function. This is part of the LogRocket SDK.
                                        // If you're seeing this frame in a stack trace, it means that LogRocket caught
                                        // an unhandled error thrown by your application code, reported it, then bubbled
                                        // it up. This is expected behavior and is not a bug with LogRocket.
                                        return func.apply(this, args);
                                    } catch (e) {
                                        self._ignoreNextOnError();
                                        self.captureException(_TraceKit.default.computeStackTrace(e), options);
                                        throw e;
                                    }
                                } // copy over properties of the old function
                                for(var property in func)if (hasKey(func, property)) wrapped[property] = func[property];
                                wrapped.prototype = func.prototype;
                                func.__lr_wrapper__ = wrapped; // Signal that this function has been wrapped already
                                // for both debugging and to prevent it to being wrapped twice
                                wrapped.__lr__ = true;
                                wrapped.__inner__ = func;
                                return wrapped;
                            }
                        },
                        {
                            key: "_instrumentTryCatch",
                            value: /**
     * Install any queued plugins
     */ function _instrumentTryCatch() {
                                var self = this;
                                var wrappedBuiltIns = self._wrappedBuiltIns;
                                function wrapTimeFn(orig) {
                                    return function(fn, t) {
                                        // preserve arity
                                        // Make a copy of the arguments to prevent deoptimization
                                        // https://github.com/petkaantonov/bluebird/wiki/Optimization-killers#32-leaking-arguments
                                        var args = new Array(arguments.length);
                                        for(var i = 0; i < args.length; ++i)args[i] = arguments[i];
                                        var originalCallback = args[0];
                                        if (isFunction(originalCallback)) args[0] = self.wrap(originalCallback);
                                         // IE < 9 doesn't support .call/.apply on setInterval/setTimeout, but it
                                        // also supports only two arguments and doesn't care what this is, so we
                                        // can just call the original function directly.
                                        if (orig.apply) return orig.apply(this, args);
                                        else return orig(args[0], args[1]);
                                    };
                                }
                                function wrapEventTarget(global) {
                                    var proto = _window[global] && _window[global].prototype;
                                    if (proto && proto.hasOwnProperty && proto.hasOwnProperty('addEventListener')) {
                                        fill(proto, 'addEventListener', function(orig) {
                                            return function(evtName, fn, capture, secure) {
                                                // preserve arity
                                                try {
                                                    if (fn && fn.handleEvent) fn.handleEvent = self.wrap(fn.handleEvent);
                                                } catch (err) {
                                                } // More breadcrumb DOM capture ... done here and not in `_instrumentBreadcrumbs`
                                                // so that we don't have more than one wrapper function
                                                var before;
                                                return orig.call(this, evtName, self.wrap(fn, undefined, before), capture, secure);
                                            };
                                        }, wrappedBuiltIns);
                                        fill(proto, 'removeEventListener', function(orig) {
                                            return function(evt, fn, capture, secure) {
                                                try {
                                                    fn = fn && (fn.__lr_wrapper__ ? fn.__lr_wrapper__ : fn);
                                                } catch (e) {
                                                }
                                                return orig.call(this, evt, fn, capture, secure);
                                            };
                                        }, wrappedBuiltIns);
                                    }
                                }
                                fill(_window, 'setTimeout', wrapTimeFn, wrappedBuiltIns);
                                fill(_window, 'setInterval', wrapTimeFn, wrappedBuiltIns);
                                if (_window.requestAnimationFrame) fill(_window, 'requestAnimationFrame', function(orig) {
                                    return function(cb) {
                                        return orig(self.wrap(cb));
                                    };
                                }, wrappedBuiltIns);
                                 // event targets borrowed from bugsnag-js:
                                // https://github.com/bugsnag/bugsnag-js/blob/master/src/bugsnag.js#L666
                                var eventTargets = [
                                    'EventTarget',
                                    'Window',
                                    'Node',
                                    'ApplicationCache',
                                    'AudioTrackList',
                                    'ChannelMergerNode',
                                    'CryptoOperation',
                                    'EventSource',
                                    'FileReader',
                                    'HTMLUnknownElement',
                                    'IDBDatabase',
                                    'IDBRequest',
                                    'IDBTransaction',
                                    'KeyOperation',
                                    'MediaController',
                                    'MessagePort',
                                    'ModalWindow',
                                    'Notification',
                                    'SVGElementInstance',
                                    'Screen',
                                    'TextTrack',
                                    'TextTrackCue',
                                    'TextTrackList',
                                    'WebSocket',
                                    'WebSocketWorker',
                                    'Worker',
                                    'XMLHttpRequest',
                                    'XMLHttpRequestEventTarget',
                                    'XMLHttpRequestUpload'
                                ];
                                for(var i = 0; i < eventTargets.length; i++)wrapEventTarget(eventTargets[i]);
                                var $ = _window.jQuery || _window.$;
                                if ($ && $.fn && $.fn.ready) fill($.fn, 'ready', function(orig) {
                                    return function(fn) {
                                        return orig.call(this, self.wrap(fn));
                                    };
                                }, wrappedBuiltIns);
                            }
                        }
                    ]);
                    return Handler;
                }();
                exports.default = Handler;
                module.exports = exports.default;
            /* WEBPACK VAR INJECTION */ }).call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"));
        /***/ },
        /***/ "./packages/@apphub:logrocket-exceptions/src/registerExceptions.js": function(module, exports, __webpack_require__) {
            "use strict";
            var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");
            var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.default = registerCore;
            var _raven = _interopRequireDefault(__webpack_require__(/*! ./raven/raven */ "./packages/@apphub:logrocket-exceptions/src/raven/raven.js"));
            var Capture = _interopRequireWildcard(__webpack_require__(/*! ./Capture */ "./packages/@apphub:logrocket-exceptions/src/Capture.js"));
            function registerCore(logger) {
                var raven = new _raven.default({
                    captureException: function captureException(errorReport) {
                        Capture.captureException(logger, null, null, errorReport);
                    }
                });
                var rejectionHandler = function rejectionHandler(evt) {
                    // http://2ality.com/2016/04/unhandled-rejections.html
                    logger.addEvent('lr.core.Exception', function() {
                        return {
                            exceptionType: 'UNHANDLED_REJECTION',
                            message: evt.reason || 'Unhandled Promise rejection'
                        };
                    });
                };
                window.addEventListener('unhandledrejection', rejectionHandler);
                return function() {
                    window.removeEventListener('unhandledrejection', rejectionHandler);
                    raven.uninstall();
                };
            }
            module.exports = exports.default;
        /***/ },
        /***/ "./packages/@apphub:logrocket-exceptions/src/stackTraceFromError.js": function(module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.default = stackTraceFromError;
            function stackTraceFromError(errorReport) {
                function makeNotNull(val) {
                    return val === null ? undefined : val;
                }
                return errorReport.stack ? errorReport.stack.map(function(frame) {
                    return {
                        lineNumber: makeNotNull(frame.line),
                        columnNumber: makeNotNull(frame.column),
                        fileName: makeNotNull(frame.url),
                        functionName: makeNotNull(frame.func)
                    };
                }) : undefined;
            }
            module.exports = exports.default;
        /***/ },
        /***/ "./packages/@apphub:logrocket-network/src/fetchIntercept.js": function(module, exports, __webpack_require__) {
            "use strict";
            var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.default = void 0;
            var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js"));
            var _registerXHR = __webpack_require__(/*! ./registerXHR */ "./packages/@apphub:logrocket-network/src/registerXHR.js");
            var interceptors = [];
            function makeInterceptor(fetch, fetchId) {
                var reversedInterceptors = interceptors.reduce(function(array, interceptor) {
                    return [
                        interceptor
                    ].concat(array);
                }, []);
                for(var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++)args[_key - 2] = arguments[_key];
                var promise = Promise.resolve(args); // Register request interceptors
                reversedInterceptors.forEach(function(_ref) {
                    var request = _ref.request, requestError = _ref.requestError;
                    if (request || requestError) promise = promise.then(function(args) {
                        return request.apply(void 0, [
                            fetchId
                        ].concat(_toConsumableArray2.default(args)));
                    }, function(args) {
                        return requestError.apply(void 0, [
                            fetchId
                        ].concat(_toConsumableArray2.default(args)));
                    });
                });
                promise = promise.then(function(args) {
                    _registerXHR.setActive(false);
                    var res;
                    var err;
                    try {
                        res = fetch.apply(void 0, _toConsumableArray2.default(args));
                    } catch (_err) {
                        err = _err;
                    }
                    _registerXHR.setActive(true);
                    if (err) throw err;
                    return res;
                });
                reversedInterceptors.forEach(function(_ref2) {
                    var response = _ref2.response, responseError = _ref2.responseError;
                    if (response || responseError) promise = promise.then(function(res) {
                        return response(fetchId, res);
                    }, function(err) {
                        return responseError && responseError(fetchId, err);
                    });
                });
                return promise;
            }
            function attach(env) {
                if (!env.fetch || !env.Promise) // Make sure fetch is available in the given environment. If it's not, then
                // default to using XHR intercept.
                return;
                var isPolyfill = env.fetch.polyfill; // eslint-disable-next-line no-param-reassign
                env.fetch = (function(fetch) {
                    var fetchId = 0;
                    return function() {
                        for(var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++)args[_key2] = arguments[_key2];
                        return makeInterceptor.apply(void 0, [
                            fetch,
                            fetchId++
                        ].concat(args));
                    };
                })(env.fetch); // Forward the polyfill properly from fetch (set by github/whatwg-fetch).
                if (isPolyfill) // eslint-disable-next-line no-param-reassign
                env.fetch.polyfill = isPolyfill;
            } // TODO: React Native
            //   attach(global);
            var didAttach = false;
            var _default = {
                register: function register(interceptor) {
                    if (!didAttach) {
                        didAttach = true;
                        attach(window);
                    }
                    interceptors.push(interceptor);
                    return function() {
                        var index = interceptors.indexOf(interceptor);
                        if (index >= 0) interceptors.splice(index, 1);
                    };
                },
                clear: function clear() {
                    interceptors = [];
                }
            };
            exports.default = _default;
            module.exports = exports.default;
        /***/ },
        /***/ "./packages/@apphub:logrocket-network/src/index.js": function(module, exports, __webpack_require__) {
            "use strict";
            var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.default = registerNetwork;
            var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));
            var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js"));
            var _registerFetch = _interopRequireDefault(__webpack_require__(/*! ./registerFetch */ "./packages/@apphub:logrocket-network/src/registerFetch.js"));
            var _registerNetworkInformation = _interopRequireDefault(__webpack_require__(/*! ./registerNetworkInformation */ "./packages/@apphub:logrocket-network/src/registerNetworkInformation.js"));
            var _registerXHR = _interopRequireDefault(__webpack_require__(/*! ./registerXHR */ "./packages/@apphub:logrocket-network/src/registerXHR.js"));
            var _mapValues = _interopRequireDefault(__webpack_require__(/*! @apphub/logrocket-utils/src/mapValues */ "./packages/@apphub:logrocket-utils/src/mapValues.js"));
            function ownKeys(object, enumerableOnly) {
                var keys = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var symbols = Object.getOwnPropertySymbols(object);
                    if (enumerableOnly) symbols = symbols.filter(function(sym) {
                        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
                    });
                    keys.push.apply(keys, symbols);
                }
                return keys;
            }
            function _objectSpread(target) {
                for(var i = 1; i < arguments.length; i++){
                    var source = arguments[i] != null ? arguments[i] : {
                    };
                    if (i % 2) ownKeys(Object(source), true).forEach(function(key) {
                        _defineProperty2.default(target, key, source[key]);
                    });
                    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
                    else ownKeys(Object(source)).forEach(function(key) {
                        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
                    });
                }
                return target;
            }
            function registerNetwork(logger) {
                var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
                    isReactNative: false
                };
                var isReactNative = config.isReactNative, shouldAugmentNPS = config.shouldAugmentNPS, shouldParseXHRBlob = config.shouldParseXHRBlob;
                var ignoredNetwork = {
                }; // truncate if > 4MB in size
                var truncate = function truncate(data) {
                    var limit = 4096000;
                    var str = data;
                    if (_typeof2.default(data) === 'object' && data != null) {
                        var proto = Object.getPrototypeOf(data);
                        if (proto === Object.prototype || proto === null) // plain object - jsonify for the size check
                        str = JSON.stringify(data);
                    }
                    if (str && str.length && str.length > limit && typeof str === 'string') {
                        var beginning = str.substring(0, 1000);
                        return "".concat(beginning, " ... LogRocket truncating to first 1000 characters.\n      Keep data under 4MB to prevent truncation. https://docs.logrocket.com/reference#network");
                    }
                    return data;
                };
                var addRequest = function addRequest(reqId, request) {
                    var method = request.method;
                    logger.addEvent('lr.network.RequestEvent', function() {
                        var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
                        }, _ref$isEnabled = _ref.isEnabled, isEnabled = _ref$isEnabled === void 0 ? true : _ref$isEnabled, _ref$requestSanitizer = _ref.requestSanitizer, requestSanitizer = _ref$requestSanitizer === void 0 ? function(f) {
                            return f;
                        } : _ref$requestSanitizer;
                        if (!isEnabled) return null;
                        var sanitized = null;
                        try {
                            // only try catch user defined functions
                            sanitized = requestSanitizer(_objectSpread(_objectSpread({
                            }, request), {
                            }, {
                                reqId: reqId
                            }));
                        } catch (err) {
                            console.error(err);
                        }
                        if (sanitized) {
                            var url = sanitized.url;
                            if (typeof document !== 'undefined' && typeof document.createElement === 'function') {
                                // Writing and then reading from an a tag turns a relative
                                // url into an absolute one.
                                var a = document.createElement('a');
                                a.href = sanitized.url;
                                url = a.href;
                            }
                            return {
                                reqId: reqId,
                                // default
                                url: url,
                                // sanitized
                                headers: _mapValues.default(sanitized.headers, function(headerValue) {
                                    // sanitized
                                    return "".concat(headerValue);
                                }),
                                body: truncate(sanitized.body),
                                // sanitized
                                method: method,
                                // default
                                referrer: sanitized.referrer || undefined,
                                // sanitized
                                mode: sanitized.mode || undefined,
                                // sanitized
                                credentials: sanitized.credentials || undefined // sanitized
                            };
                        }
                        ignoredNetwork[reqId] = true;
                        return null;
                    });
                };
                var addResponse = function addResponse(reqId, response) {
                    var method = response.method, status = response.status;
                    logger.addEvent('lr.network.ResponseEvent', function() {
                        var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
                        }, _ref2$isEnabled = _ref2.isEnabled, isEnabled = _ref2$isEnabled === void 0 ? true : _ref2$isEnabled, _ref2$responseSanitiz = _ref2.responseSanitizer, responseSanitizer = _ref2$responseSanitiz === void 0 ? function(f) {
                            return f;
                        } : _ref2$responseSanitiz;
                        if (!isEnabled) return null;
                        else if (ignoredNetwork[reqId]) {
                            delete ignoredNetwork[reqId];
                            return null;
                        }
                        var sanitized = null;
                        try {
                            // only try catch user defined functions
                            sanitized = responseSanitizer(_objectSpread(_objectSpread({
                            }, response), {
                            }, {
                                reqId: reqId
                            }));
                        } catch (err) {
                            console.error(err); // fall through to redacted log
                        }
                        if (sanitized) return {
                            reqId: reqId,
                            // default
                            status: sanitized.status,
                            // sanitized
                            headers: _mapValues.default(sanitized.headers, function(headerValue) {
                                // sanitized
                                return "".concat(headerValue);
                            }),
                            body: truncate(sanitized.body),
                            // sanitized
                            method: method // default
                        };
                        return {
                            reqId: reqId,
                            // default
                            status: status,
                            // default
                            headers: {
                            },
                            // redacted
                            body: null,
                            // redacted
                            method: method // default
                        };
                    });
                };
                var isIgnored = function isIgnored(reqId) {
                    return logger.isDisabled || ignoredNetwork[reqId] === true;
                };
                var unsubFetch = _registerFetch.default({
                    addRequest: addRequest,
                    addResponse: addResponse,
                    isIgnored: isIgnored
                });
                var unsubXHR = _registerXHR.default({
                    addRequest: addRequest,
                    addResponse: addResponse,
                    isIgnored: isIgnored,
                    logger: logger,
                    shouldAugmentNPS: shouldAugmentNPS,
                    shouldParseXHRBlob: shouldParseXHRBlob
                });
                var unsubNetworkInformation = isReactNative ? function() {
                } : _registerNetworkInformation.default(logger);
                return function() {
                    unsubNetworkInformation();
                    unsubFetch();
                    unsubXHR();
                };
            }
            module.exports = exports.default;
        /***/ },
        /***/ "./packages/@apphub:logrocket-network/src/registerFetch.js": function(module, exports, __webpack_require__) {
            "use strict";
            var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.default = registerFetch;
            var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));
            var _mapValues = _interopRequireDefault(__webpack_require__(/*! @apphub/logrocket-utils/src/mapValues */ "./packages/@apphub:logrocket-utils/src/mapValues.js"));
            var _fetchIntercept = _interopRequireDefault(__webpack_require__(/*! ./fetchIntercept */ "./packages/@apphub:logrocket-network/src/fetchIntercept.js"));
            function ownKeys(object, enumerableOnly) {
                var keys = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var symbols = Object.getOwnPropertySymbols(object);
                    if (enumerableOnly) symbols = symbols.filter(function(sym) {
                        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
                    });
                    keys.push.apply(keys, symbols);
                }
                return keys;
            }
            function _objectSpread(target) {
                for(var i = 1; i < arguments.length; i++){
                    var source = arguments[i] != null ? arguments[i] : {
                    };
                    if (i % 2) ownKeys(Object(source), true).forEach(function(key) {
                        _defineProperty2.default(target, key, source[key]);
                    });
                    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
                    else ownKeys(Object(source)).forEach(function(key) {
                        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
                    });
                }
                return target;
            }
            function makeObjectFromHeaders(headers) {
                // If using real fetch, we must stringify the Headers object.
                if (headers == null || typeof headers.forEach !== 'function') return headers;
                var result = {
                };
                headers.forEach(function(value, key) {
                    if (result[key]) result[key] = "".concat(result[key], ",").concat(value);
                    else result[key] = "".concat(value);
                });
                return result;
            } // XHR specification is unclear of what types to allow in value so using toString method for now
            var stringifyHeaders = function stringifyHeaders(headers) {
                return _mapValues.default(makeObjectFromHeaders(headers), function(value) {
                    return "".concat(value);
                });
            };
            function pluckFetchFields() {
                var arg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
                };
                return {
                    url: arg.url,
                    headers: stringifyHeaders(arg.headers),
                    method: arg.method && arg.method.toUpperCase(),
                    referrer: arg.referrer || undefined,
                    mode: arg.mode || undefined,
                    credentials: arg.credentials || undefined
                };
            }
            function registerFetch(_ref) {
                var addRequest = _ref.addRequest, addResponse = _ref.addResponse, isIgnored = _ref.isIgnored;
                var LOGROCKET_FETCH_LABEL = 'fetch-';
                var fetchMethodMap = {
                };
                var unregister = _fetchIntercept.default.register({
                    request: function request(fetchId) {
                        for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++)args[_key - 1] = arguments[_key];
                        var p;
                        if (typeof Request !== 'undefined' && args[0] instanceof Request) {
                            var clonedText; // Request.clone() and Request.text() may throw in Safari (e.g., when
                            // request body contains FormData)
                            try {
                                clonedText = args[0].clone().text();
                            } catch (err) {
                                clonedText = Promise.resolve("LogRocket fetch error: ".concat(err.message));
                            }
                            p = clonedText.then(function(body) {
                                return _objectSpread(_objectSpread({
                                }, pluckFetchFields(args[0])), {
                                }, {
                                    body: body
                                });
                            }, function(err) {
                                return _objectSpread(_objectSpread({
                                }, pluckFetchFields(args[0])), {
                                }, {
                                    body: "LogRocket fetch error: ".concat(err.message)
                                });
                            });
                        } else p = Promise.resolve(_objectSpread(_objectSpread({
                        }, pluckFetchFields(args[1])), {
                        }, {
                            url: "".concat(args[0]),
                            body: (args[1] || {
                            }).body
                        }));
                        return p.then(function(req) {
                            fetchMethodMap[fetchId] = req.method;
                            addRequest("".concat(LOGROCKET_FETCH_LABEL).concat(fetchId), req);
                            return args;
                        });
                    },
                    requestError: function requestError(fetchId, error) {
                        return Promise.reject(error);
                    },
                    response: function response(fetchId, _response) {
                        var clonedText;
                        if (isIgnored("".concat(LOGROCKET_FETCH_LABEL).concat(fetchId))) // Don't even try to read ignored requests
                        return _response;
                        try {
                            // TODO: enhance function on original response and future clones for:
                            // text(), json(), blob(), formdata(), arraybuffer()
                            clonedText = _response.clone().text();
                        } catch (err) {
                            // safari has a bug where cloning can fail
                            clonedText = Promise.resolve("LogRocket fetch error: ".concat(err.message));
                        }
                        clonedText.then(function(data) {
                            var responseHash = {
                                url: _response.url,
                                status: _response.status,
                                headers: stringifyHeaders(_response.headers),
                                body: data,
                                method: fetchMethodMap[fetchId]
                            };
                            delete fetchMethodMap[fetchId];
                            addResponse("".concat(LOGROCKET_FETCH_LABEL).concat(fetchId), responseHash);
                        });
                        return _response;
                    },
                    responseError: function responseError(fetchId, error) {
                        var response = {
                            url: undefined,
                            status: 0,
                            headers: {
                            },
                            body: "".concat(error)
                        };
                        addResponse("".concat(LOGROCKET_FETCH_LABEL).concat(fetchId), response);
                        return Promise.reject(error);
                    }
                });
                return unregister;
            }
            module.exports = exports.default;
        /***/ },
        /***/ "./packages/@apphub:logrocket-network/src/registerNetworkInformation.js": function(module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.default = registerNetworkInformation;
            var EFFECTIVE_TYPE_VALS = {
                'slow-2g': 'SLOW2G',
                '2g': 'TWOG',
                '3g': 'THREEG',
                '4g': 'FOURG'
            };
            function registerNetworkInformation(logger) {
                var lastStatus = undefined;
                function sendNetworkInformation() {
                    var newStatus = {
                        online: window.navigator.onLine,
                        effectiveType: 'UNKOWN'
                    };
                    if (!window.navigator.onLine) newStatus.effectiveType = 'NONE';
                    else if (window.navigator.connection && window.navigator.connection.effectiveType) newStatus.effectiveType = EFFECTIVE_TYPE_VALS[window.navigator.connection.effectiveType] || 'UNKNOWN';
                    if (lastStatus && newStatus.online === lastStatus.online && newStatus.effectiveType === lastStatus.effectiveType) return;
                    lastStatus = newStatus;
                    logger.addEvent('lr.network.NetworkStatusEvent', function() {
                        var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
                        }, _ref$isEnabled = _ref.isEnabled, isEnabled = _ref$isEnabled === void 0 ? true : _ref$isEnabled;
                        if (!isEnabled) return null;
                        return newStatus;
                    });
                }
                setTimeout(sendNetworkInformation);
                if (window.navigator.connection && typeof window.navigator.connection.addEventListener === 'function') window.navigator.connection.addEventListener('change', sendNetworkInformation);
                window.addEventListener('online', sendNetworkInformation);
                window.addEventListener('offline', sendNetworkInformation);
                return function() {
                    window.removeEventListener('offline', sendNetworkInformation);
                    window.removeEventListener('online', sendNetworkInformation);
                    if (window.navigator.connection && typeof window.navigator.connection.removeEventListener === 'function') window.navigator.connection.removeEventListener('change', sendNetworkInformation);
                };
            }
            module.exports = exports.default;
        /***/ },
        /***/ "./packages/@apphub:logrocket-network/src/registerXHR.js": function(module, exports, __webpack_require__) {
            "use strict";
            var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.setActive = setActive;
            exports.default = registerXHR;
            var _mapValues = _interopRequireDefault(__webpack_require__(/*! @apphub/logrocket-utils/src/mapValues */ "./packages/@apphub:logrocket-utils/src/mapValues.js"));
            var _enhanceFunc = _interopRequireDefault(__webpack_require__(/*! @apphub/logrocket-utils/src/enhanceFunc */ "./packages/@apphub:logrocket-utils/src/enhanceFunc.js"));
            var _startsWith = _interopRequireDefault(__webpack_require__(/*! @apphub/logrocket-utils/src/startsWith */ "./packages/@apphub:logrocket-utils/src/startsWith.js"));
            var _nps = __webpack_require__(/*! @apphub/logrocket-utils/src/constants/nps */ "./packages/@apphub:logrocket-utils/src/constants/nps.js");
            var isActive = true;
            function setActive(shouldBeActive) {
                isActive = shouldBeActive;
            }
            var currentXHRId = 0;
            function registerXHR(_ref) {
                var addRequest = _ref.addRequest, addResponse = _ref.addResponse, isIgnored = _ref.isIgnored, logger = _ref.logger, _ref$shouldAugmentNPS = _ref.shouldAugmentNPS, shouldAugmentNPS = _ref$shouldAugmentNPS === void 0 ? true : _ref$shouldAugmentNPS, _ref$shouldParseXHRBl = _ref.shouldParseXHRBlob, shouldParseXHRBlob = _ref$shouldParseXHRBl === void 0 ? false : _ref$shouldParseXHRBl;
                var _XHR = XMLHttpRequest;
                var xhrMap = new WeakMap();
                var unsubscribedFromXhr = false;
                var LOGROCKET_XHR_LABEL = 'xhr-';
                window._lrXMLHttpRequest = XMLHttpRequest; // eslint-disable-next-line no-native-reassign
                XMLHttpRequest = function XMLHttpRequest(mozAnon, mozSystem) {
                    var xhrObject = new _XHR(mozAnon, mozSystem);
                    if (!isActive) return xhrObject;
                    xhrMap.set(xhrObject, {
                        xhrId: ++currentXHRId,
                        headers: {
                        }
                    });
                    var openOriginal = xhrObject.open;
                    function openShim() {
                        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
                        try {
                            var url = args[1];
                            if (window.URL && typeof window.URL === 'function' && url.search(_nps.WOOTRIC_RESPONSES_REGEX) === 0) {
                                var logrocketSessionURL = new window.URL(logger.recordingURL);
                                logrocketSessionURL.searchParams.set('nps', 'wootric');
                                var urlObj = new window.URL(url);
                                var responseText = urlObj.searchParams.get('response[text]');
                                var feedback = responseText ? "".concat(responseText, "\n\n") : '';
                                urlObj.searchParams.set('response[text]', "".concat(feedback, "<").concat(logrocketSessionURL.href, "|View LogRocket session>"));
                                args[1] = urlObj.href; // eslint-disable-line no-param-reassign
                            }
                        } catch (e) {
                        /* do nothing */ }
                        return openOriginal.apply(this, args);
                    }
                    var sendOriginal = xhrObject.send;
                    function sendShim() {
                        for(var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++)args[_key2] = arguments[_key2];
                        try {
                            var currentXHR = xhrMap.get(xhrObject);
                            if (window.URL && typeof window.URL === 'function' && currentXHR && currentXHR.url && currentXHR.url.search(_nps.DELIGHTED_RESPONSES_REGEX) === 0 && args.length && args[0].indexOf(_nps.DELIGHTED_FEEDBACK_PREFIX) !== -1) {
                                var recordingURL = new window.URL(logger.recordingURL);
                                recordingURL.searchParams.set('nps', 'delighted');
                                var logrocketSessionURL = encodeURIComponent(recordingURL.href);
                                var data = args[0].split('&').map(function(dataString) {
                                    if (_startsWith.default(dataString, _nps.DELIGHTED_FEEDBACK_PREFIX)) {
                                        var isEmpty = dataString === _nps.DELIGHTED_FEEDBACK_PREFIX;
                                        return "".concat(dataString).concat(isEmpty ? '' : '\n\n', "<").concat(logrocketSessionURL, "|View LogRocket session>");
                                    }
                                    return dataString;
                                }).join('&');
                                args[0] = data; // eslint-disable-line no-param-reassign
                            }
                        } catch (e) {
                        /* do nothing */ }
                        return sendOriginal.apply(this, args);
                    }
                    if (shouldAugmentNPS) {
                        xhrObject.open = openShim;
                        xhrObject.send = sendShim;
                    } // ..., 'open', (method, url, async, username, password) => {
                    _enhanceFunc.default(xhrObject, 'open', function(method, url) {
                        if (unsubscribedFromXhr) return;
                        var currentXHR = xhrMap.get(xhrObject);
                        currentXHR.method = method;
                        currentXHR.url = url;
                    });
                    _enhanceFunc.default(xhrObject, 'send', function(data) {
                        if (unsubscribedFromXhr) return;
                        var currentXHR = xhrMap.get(xhrObject);
                        if (!currentXHR) return;
                        var request = {
                            url: currentXHR.url,
                            method: currentXHR.method && currentXHR.method.toUpperCase(),
                            headers: _mapValues.default(currentXHR.headers || {
                            }, function(headerValues) {
                                return headerValues.join(', ');
                            }),
                            body: data
                        };
                        addRequest("".concat(LOGROCKET_XHR_LABEL).concat(currentXHR.xhrId), request);
                    });
                    _enhanceFunc.default(xhrObject, 'setRequestHeader', function(header, value) {
                        if (unsubscribedFromXhr) return;
                        var currentXHR = xhrMap.get(xhrObject);
                        if (!currentXHR) return;
                        currentXHR.headers = currentXHR.headers || {
                        };
                        currentXHR.headers[header] = currentXHR.headers[header] || [];
                        currentXHR.headers[header].push(value);
                    });
                    var xhrListeners = {
                        readystatechange: function readystatechange() {
                            if (unsubscribedFromXhr) return;
                            if (xhrObject.readyState === 4) {
                                var currentXHR = xhrMap.get(xhrObject);
                                if (!currentXHR) return;
                                 // Do not read ignored requests at all.
                                if (isIgnored("".concat(LOGROCKET_XHR_LABEL).concat(currentXHR.xhrId))) return;
                                var headerString = xhrObject.getAllResponseHeaders();
                                var headers = headerString.split(/[\r\n]+/).reduce(function(previous, current) {
                                    var next = previous;
                                    var headerParts = current.split(': ');
                                    if (headerParts.length > 0) {
                                        var key = headerParts.shift(); // first index of the array
                                        var value = headerParts.join(': '); // rest of the array repaired
                                        if (previous[key]) next[key] += ", ".concat(value);
                                        else next[key] = value;
                                    }
                                    return next;
                                }, {
                                });
                                var body; // IE 11 sometimes throws when trying to access large responses
                                try {
                                    switch(xhrObject.responseType){
                                        case 'json':
                                            body = logger._shouldCloneResponse ? JSON.parse(JSON.stringify(xhrObject.response)) : xhrObject.response;
                                            break;
                                        case 'arraybuffer':
                                        case 'blob':
                                            body = xhrObject.response;
                                            break;
                                        case 'document':
                                            body = xhrObject.responseXML;
                                            break;
                                        case 'text':
                                        case '':
                                            body = xhrObject.responseText;
                                            break;
                                        default:
                                            body = '';
                                    }
                                } catch (err) {
                                    body = 'LogRocket: Error accessing response.';
                                }
                                var response = {
                                    url: currentXHR.url,
                                    status: xhrObject.status,
                                    headers: headers,
                                    body: body,
                                    method: (currentXHR.method || '').toUpperCase()
                                };
                                if (shouldParseXHRBlob && response.body instanceof Blob) {
                                    var blobReader = new FileReader();
                                    blobReader.readAsText(response.body);
                                    blobReader.onload = function() {
                                        try {
                                            response.body = JSON.parse(blobReader.result);
                                        } catch (_unused) {
                                        } // eslint-disable-line no-empty
                                        addResponse("".concat(LOGROCKET_XHR_LABEL).concat(currentXHR.xhrId), response);
                                    };
                                } else addResponse("".concat(LOGROCKET_XHR_LABEL).concat(currentXHR.xhrId), response);
                            }
                        } // // Unused Event Listeners
                    };
                    Object.keys(xhrListeners).forEach(function(key) {
                        xhrObject.addEventListener(key, xhrListeners[key]);
                    });
                    return xhrObject;
                }; // this allows "instanceof XMLHttpRequest" to work
                XMLHttpRequest.prototype = _XHR.prototype; // Persist the static variables.
                [
                    'UNSENT',
                    'OPENED',
                    'HEADERS_RECEIVED',
                    'LOADING',
                    'DONE'
                ].forEach(function(variable) {
                    XMLHttpRequest[variable] = _XHR[variable];
                });
                return function() {
                    unsubscribedFromXhr = true; // eslint-disable-next-line no-native-reassign
                    XMLHttpRequest = _XHR;
                };
            }
        /***/ },
        /***/ "./packages/@apphub:logrocket-redux/src/createEnhancer.js": function(module, exports, __webpack_require__) {
            "use strict";
            var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.default = createEnhancer;
            var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));
            var _now = _interopRequireDefault(__webpack_require__(/*! @apphub/now */ "./packages/@apphub:now/src/index.js"));
            function ownKeys(object, enumerableOnly) {
                var keys = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var symbols = Object.getOwnPropertySymbols(object);
                    if (enumerableOnly) symbols = symbols.filter(function(sym) {
                        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
                    });
                    keys.push.apply(keys, symbols);
                }
                return keys;
            }
            function _objectSpread(target) {
                for(var i = 1; i < arguments.length; i++){
                    var source = arguments[i] != null ? arguments[i] : {
                    };
                    if (i % 2) ownKeys(Object(source), true).forEach(function(key) {
                        _defineProperty2.default(target, key, source[key]);
                    });
                    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
                    else ownKeys(Object(source)).forEach(function(key) {
                        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
                    });
                }
                return target;
            }
            var storeIdCounter = 0;
            function createEnhancer(logger) {
                var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
                }, _ref$stateSanitizer = _ref.stateSanitizer, stateSanitizer = _ref$stateSanitizer === void 0 ? function(f) {
                    return f;
                } : _ref$stateSanitizer, _ref$actionSanitizer = _ref.actionSanitizer, actionSanitizer = _ref$actionSanitizer === void 0 ? function(f) {
                    return f;
                } : _ref$actionSanitizer;
                // an enhancer is a function that returns a Store
                return function(createStore) {
                    return function(reducer, initialState, enhancer) {
                        var store = createStore(reducer, initialState, enhancer);
                        var originalDispatch = store.dispatch;
                        var storeId = storeIdCounter++;
                        logger.addEvent('lr.redux.InitialState', function() {
                            var sanitizedState;
                            try {
                                // only try catch user defined functions
                                sanitizedState = stateSanitizer(store.getState());
                            } catch (err) {
                                console.error(err.toString());
                            }
                            return {
                                state: sanitizedState,
                                storeId: storeId
                            };
                        });
                        var dispatch = function dispatch(action) {
                            var start = _now.default();
                            var err;
                            var res;
                            try {
                                res = originalDispatch(action);
                            } catch (_err) {
                                err = _err;
                            } finally{
                                var duration = _now.default() - start;
                                logger.addEvent('lr.redux.ReduxAction', function() {
                                    var sanitizedState = null;
                                    var sanitizedAction = null;
                                    try {
                                        // only try catch user defined functions
                                        sanitizedState = stateSanitizer(store.getState());
                                        sanitizedAction = actionSanitizer(action);
                                    } catch (err) {
                                        console.error(err.toString());
                                    }
                                    if (sanitizedState && sanitizedAction) return {
                                        storeId: storeId,
                                        action: sanitizedAction,
                                        duration: duration,
                                        stateDelta: sanitizedState
                                    };
                                    return null;
                                });
                            }
                            if (err) throw err;
                            return res;
                        };
                        return _objectSpread(_objectSpread({
                        }, store), {
                        }, {
                            dispatch: dispatch
                        });
                    };
                };
            }
            module.exports = exports.default;
        /***/ },
        /***/ "./packages/@apphub:logrocket-redux/src/createMiddleware.js": function(module, exports, __webpack_require__) {
            "use strict";
            var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.default = createMiddleware;
            var _now = _interopRequireDefault(__webpack_require__(/*! @apphub/now */ "./packages/@apphub:now/src/index.js"));
            var storeIdCounter = 0;
            function createMiddleware(logger) {
                var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
                }, _ref$stateSanitizer = _ref.stateSanitizer, stateSanitizer = _ref$stateSanitizer === void 0 ? function(f) {
                    return f;
                } : _ref$stateSanitizer, _ref$actionSanitizer = _ref.actionSanitizer, actionSanitizer = _ref$actionSanitizer === void 0 ? function(f) {
                    return f;
                } : _ref$actionSanitizer;
                return function(store) {
                    var storeId = storeIdCounter++;
                    logger.addEvent('lr.redux.InitialState', function() {
                        var sanitizedState;
                        try {
                            // only try catch user defined functions
                            sanitizedState = stateSanitizer(store.getState());
                        } catch (err) {
                            console.error(err.toString());
                        }
                        return {
                            state: sanitizedState,
                            storeId: storeId
                        };
                    });
                    return function(next) {
                        return function(action) {
                            var start = _now.default();
                            var err;
                            var res;
                            try {
                                res = next(action);
                            } catch (_err) {
                                err = _err;
                            } finally{
                                var duration = _now.default() - start;
                                logger.addEvent('lr.redux.ReduxAction', function() {
                                    var sanitizedState = null;
                                    var sanitizedAction = null;
                                    try {
                                        // only try catch user defined functions
                                        sanitizedState = stateSanitizer(store.getState());
                                        sanitizedAction = actionSanitizer(action);
                                    } catch (err) {
                                        console.error(err.toString());
                                    }
                                    if (sanitizedState && sanitizedAction) return {
                                        storeId: storeId,
                                        action: sanitizedAction,
                                        duration: duration,
                                        stateDelta: sanitizedState
                                    };
                                    return null;
                                });
                            }
                            if (err) throw err;
                            return res;
                        };
                    };
                };
            }
            module.exports = exports.default;
        /***/ },
        /***/ "./packages/@apphub:logrocket-redux/src/index.js": function(module, exports, __webpack_require__) {
            "use strict";
            var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            Object.defineProperty(exports, "createEnhancer", {
                enumerable: true,
                get: function get() {
                    return _createEnhancer.default;
                }
            });
            Object.defineProperty(exports, "createMiddleware", {
                enumerable: true,
                get: function get() {
                    return _createMiddleware.default;
                }
            });
            var _createEnhancer = _interopRequireDefault(__webpack_require__(/*! ./createEnhancer */ "./packages/@apphub:logrocket-redux/src/createEnhancer.js"));
            var _createMiddleware = _interopRequireDefault(__webpack_require__(/*! ./createMiddleware */ "./packages/@apphub:logrocket-redux/src/createMiddleware.js"));
        /***/ },
        /***/ "./packages/@apphub:logrocket-utils/src/TraceKit.js": function(module, exports, __webpack_require__) {
            "use strict";
            (function(global) {
                /*
 TraceKit - Cross brower stack traces - github.com/occ/TraceKit

 This was originally forked from github.com/occ/TraceKit, but has since been
 largely re-written and is now maintained as part of raven-js.  Tests for
 this are in test/vendor.

 MIT license
*/ Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                exports.default = void 0;
                var TraceKit = {
                    collectWindowErrors: true,
                    debug: false
                }; // This is to be defensive in environments where window does not exist (see https://github.com/getsentry/raven-js/pull/785)
                var _window = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {
                }; // global reference to slice
                var _slice = [].slice;
                var UNKNOWN_FUNCTION = '?'; // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error#Error_types
                var ERROR_TYPES_RE = /^(?:Uncaught (?:exception: )?)?((?:Eval|Internal|Range|Reference|Syntax|Type|URI)Error): ?(.*)$/;
                function getLocationHref() {
                    if (typeof document === 'undefined' || typeof document.location === 'undefined') return '';
                    return document.location.href;
                }
                /**
 * TraceKit.report: cross-browser processing of unhandled exceptions
 *
 * Syntax:
 *   TraceKit.report.subscribe(function(stackInfo) { ... })
 *   TraceKit.report.unsubscribe(function(stackInfo) { ... })
 *   TraceKit.report(exception)
 *   try { ...code... } catch(ex) { TraceKit.report(ex); }
 *
 * Supports:
 *   - Firefox: full stack trace with line numbers, plus column number
 *              on top frame; column number is not guaranteed
 *   - Opera:   full stack trace with line and column numbers
 *   - Chrome:  full stack trace with line and column numbers
 *   - Safari:  line and column number for the top frame only; some frames
 *              may be missing, and column number is not guaranteed
 *   - IE:      line and column number for the top frame only; some frames
 *              may be missing, and column number is not guaranteed
 *
 * In theory, TraceKit should work on all of the following versions:
 *   - IE5.5+ (only 8.0 tested)
 *   - Firefox 0.9+ (only 3.5+ tested)
 *   - Opera 7+ (only 10.50 tested; versions 9 and earlier may require
 *     Exceptions Have Stacktrace to be enabled in opera:config)
 *   - Safari 3+ (only 4+ tested)
 *   - Chrome 1+ (only 5+ tested)
 *   - Konqueror 3.5+ (untested)
 *
 * Requires TraceKit.computeStackTrace.
 *
 * Tries to catch all unhandled exceptions and report them to the
 * subscribed handlers. Please note that TraceKit.report will rethrow the
 * exception. This is REQUIRED in order to get a useful stack trace in IE.
 * If the exception does not reach the top of the browser, you will only
 * get a stack trace from the point where TraceKit.report was called.
 *
 * Handlers receive a stackInfo object as described in the
 * TraceKit.computeStackTrace docs.
 */ TraceKit.report = (function reportModuleWrapper() {
                    var handlers = [], lastArgs = null, lastException = null, lastExceptionStack = null;
                    /**
   * Add a crash handler.
   * @param {Function} handler
   */ function subscribe(handler) {
                        installGlobalHandler();
                        handlers.push(handler);
                    }
                    /**
   * Remove a crash handler.
   * @param {Function} handler
   */ function unsubscribe(handler) {
                        for(var i = handlers.length - 1; i >= 0; --i)if (handlers[i] === handler) handlers.splice(i, 1);
                    }
                    /**
   * Remove all crash handlers.
   */ function unsubscribeAll() {
                        uninstallGlobalHandler();
                        handlers = [];
                    }
                    /**
   * Dispatch stack information to all handlers.
   * @param {Object.<string, *>} stack
   */ function notifyHandlers(stack, isWindowError) {
                        var exception = null;
                        if (isWindowError && !TraceKit.collectWindowErrors) return;
                        for(var i in handlers){
                            if (handlers.hasOwnProperty(i)) try {
                                handlers[i].apply(null, [
                                    stack
                                ].concat(_slice.call(arguments, 2)));
                            } catch (inner) {
                                exception = inner;
                            }
                        }
                        if (exception) throw exception;
                    }
                    var _oldOnerrorHandler, _onErrorHandlerInstalled;
                    /**
   * Ensures all global unhandled exceptions are recorded.
   * Supported by Gecko and IE.
   * @param {string} message Error message.
   * @param {string} url URL of script that generated the exception.
   * @param {(number|string)} lineNo The line number at which the error
   * occurred.
   * @param {?(number|string)} colNo The column number at which the error
   * occurred.
   * @param {?Error} ex The actual Error object.
   */ function traceKitWindowOnError(message, url, lineNo, colNo, ex) {
                        var stack = null;
                        if (lastExceptionStack) {
                            TraceKit.computeStackTrace.augmentStackTraceWithInitialElement(lastExceptionStack, url, lineNo, message);
                            processLastException();
                        } else if (ex) {
                            // New chrome and blink send along a real error object
                            // Let's just report that like a normal error.
                            // See: https://mikewest.org/2013/08/debugging-runtime-errors-with-window-onerror
                            stack = TraceKit.computeStackTrace(ex);
                            notifyHandlers(stack, true);
                        } else {
                            var location = {
                                'url': url,
                                'line': lineNo,
                                'column': colNo
                            };
                            var name = undefined;
                            var msg = message; // must be new var or will modify original `arguments`
                            var groups;
                            if (({
                            }).toString.call(message) === '[object String]') {
                                var groups = message.match(ERROR_TYPES_RE);
                                if (groups) {
                                    name = groups[1];
                                    msg = groups[2];
                                }
                            }
                            location.func = UNKNOWN_FUNCTION;
                            stack = {
                                'name': name,
                                'message': msg,
                                'url': getLocationHref(),
                                'stack': [
                                    location
                                ]
                            };
                            notifyHandlers(stack, true);
                        }
                        if (_oldOnerrorHandler) return _oldOnerrorHandler.apply(this, arguments);
                        return false;
                    }
                    function installGlobalHandler() {
                        if (_onErrorHandlerInstalled) return;
                        _oldOnerrorHandler = _window.onerror;
                        _window.onerror = traceKitWindowOnError;
                        _onErrorHandlerInstalled = true;
                    }
                    function uninstallGlobalHandler() {
                        if (!_onErrorHandlerInstalled) return;
                        _window.onerror = _oldOnerrorHandler;
                        _onErrorHandlerInstalled = false;
                        _oldOnerrorHandler = undefined;
                    }
                    function processLastException() {
                        var _lastExceptionStack = lastExceptionStack, _lastArgs = lastArgs;
                        lastArgs = null;
                        lastExceptionStack = null;
                        lastException = null;
                        notifyHandlers.apply(null, [
                            _lastExceptionStack,
                            false
                        ].concat(_lastArgs));
                    }
                    /**
   * Reports an unhandled Error to TraceKit.
   * @param {Error} ex
   * @param {?boolean} rethrow If false, do not re-throw the exception.
   * Only used for window.onerror to not cause an infinite loop of
   * rethrowing.
   */ function report(ex, rethrow) {
                        var args = _slice.call(arguments, 1);
                        if (lastExceptionStack) {
                            if (lastException === ex) return; // already caught by an inner catch block, ignore
                            else processLastException();
                        }
                        var stack = TraceKit.computeStackTrace(ex);
                        lastExceptionStack = stack;
                        lastException = ex;
                        lastArgs = args; // If the stack trace is incomplete, wait for 2 seconds for
                        // slow slow IE to see if onerror occurs or not before reporting
                        // this exception; otherwise, we will end up with an incomplete
                        // stack trace
                        setTimeout(function() {
                            if (lastException === ex) processLastException();
                        }, stack.incomplete ? 2000 : 0);
                        if (rethrow !== false) throw ex; // re-throw to propagate to the top level (and cause window.onerror)
                    }
                    report.subscribe = subscribe;
                    report.unsubscribe = unsubscribe;
                    report.uninstall = unsubscribeAll;
                    return report;
                })();
                /**
 * TraceKit.computeStackTrace: cross-browser stack traces in JavaScript
 *
 * Syntax:
 *   s = TraceKit.computeStackTrace(exception) // consider using TraceKit.report instead (see below)
 * Returns:
 *   s.name              - exception name
 *   s.message           - exception message
 *   s.stack[i].url      - JavaScript or HTML file URL
 *   s.stack[i].func     - function name, or empty for anonymous functions (if guessing did not work)
 *   s.stack[i].args     - arguments passed to the function, if known
 *   s.stack[i].line     - line number, if known
 *   s.stack[i].column   - column number, if known
 *
 * Supports:
 *   - Firefox:  full stack trace with line numbers and unreliable column
 *               number on top frame
 *   - Opera 10: full stack trace with line and column numbers
 *   - Opera 9-: full stack trace with line numbers
 *   - Chrome:   full stack trace with line and column numbers
 *   - Safari:   line and column number for the topmost stacktrace element
 *               only
 *   - IE:       no line numbers whatsoever
 *
 * Tries to guess names of anonymous functions by looking for assignments
 * in the source code. In IE and Safari, we have to guess source file names
 * by searching for function bodies inside all page scripts. This will not
 * work for scripts that are loaded cross-domain.
 * Here be dragons: some function names may be guessed incorrectly, and
 * duplicate functions may be mismatched.
 *
 * TraceKit.computeStackTrace should only be used for tracing purposes.
 * Logging of unhandled exceptions should be done with TraceKit.report,
 * which builds on top of TraceKit.computeStackTrace and provides better
 * IE support by utilizing the window.onerror event to retrieve information
 * about the top of the stack.
 *
 * Note: In IE and Safari, no stack trace is recorded on the Error object,
 * so computeStackTrace instead walks its *own* chain of callers.
 * This means that:
 *  * in Safari, some methods may be missing from the stack trace;
 *  * in IE, the topmost function in the stack trace will always be the
 *    caller of computeStackTrace.
 *
 * This is okay for tracing (because you are likely to be calling
 * computeStackTrace from the function you want to be the topmost element
 * of the stack trace anyway), but not okay for logging unhandled
 * exceptions (because your catch block will likely be far away from the
 * inner function that actually caused the exception).
 *
 */ TraceKit.computeStackTrace = (function computeStackTraceWrapper() {
                    /**
   * Escapes special characters, except for whitespace, in a string to be
   * used inside a regular expression as a string literal.
   * @param {string} text The string.
   * @return {string} The escaped string literal.
   */ function escapeRegExp(text) {
                        return text.replace(/[\-\[\]{}()*+?.,\\\^$|#]/g, '\\$&');
                    }
                    /**
   * Escapes special characters in a string to be used inside a regular
   * expression as a string literal. Also ensures that HTML entities will
   * be matched the same as their literal friends.
   * @param {string} body The string.
   * @return {string} The escaped string.
   */ function escapeCodeAsRegExpForMatchingInsideHTML(body) {
                        return escapeRegExp(body).replace('<', '(?:<|&lt;)').replace('>', '(?:>|&gt;)').replace('&', '(?:&|&amp;)').replace('"', '(?:"|&quot;)').replace(/\s+/g, '\\s+');
                    } // Contents of Exception in various browsers.
                    //
                    // SAFARI:
                    // ex.message = Can't find variable: qq
                    // ex.line = 59
                    // ex.sourceId = 580238192
                    // ex.sourceURL = http://...
                    // ex.expressionBeginOffset = 96
                    // ex.expressionCaretOffset = 98
                    // ex.expressionEndOffset = 98
                    // ex.name = ReferenceError
                    //
                    // FIREFOX:
                    // ex.message = qq is not defined
                    // ex.fileName = http://...
                    // ex.lineNumber = 59
                    // ex.columnNumber = 69
                    // ex.stack = ...stack trace... (see the example below)
                    // ex.name = ReferenceError
                    //
                    // CHROME:
                    // ex.message = qq is not defined
                    // ex.name = ReferenceError
                    // ex.type = not_defined
                    // ex.arguments = ['aa']
                    // ex.stack = ...stack trace...
                    //
                    // INTERNET EXPLORER:
                    // ex.message = ...
                    // ex.name = ReferenceError
                    //
                    // OPERA:
                    // ex.message = ...message... (see the example below)
                    // ex.name = ReferenceError
                    // ex.opera#sourceloc = 11  (pretty much useless, duplicates the info in ex.message)
                    // ex.stacktrace = n/a; see 'opera:config#UserPrefs|Exceptions Have Stacktrace'
                    /**
   * Computes stack trace information from the stack property.
   * Chrome and Gecko use this property.
   * @param {Error} ex
   * @return {?Object.<string, *>} Stack trace information.
   */ function computeStackTraceFromStackProp(ex) {
                        if (typeof ex.stack === 'undefined' || !ex.stack) return;
                        var chrome = /^\s*at (.*?) ?\(((?:file|https?|blob|chrome-extension|native|eval|<anonymous>).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i, gecko = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|resource|\[native).*?)(?::(\d+))?(?::(\d+))?\s*$/i, winjs = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i, lines = ex.stack.split('\n'), stack = [], parts, element, reference = /^(.*) is undefined$/.exec(ex.message);
                        for(var i = 0, j = lines.length; i < j; ++i){
                            if (parts = chrome.exec(lines[i])) {
                                var isNative = parts[2] && parts[2].indexOf('native') !== -1;
                                element = {
                                    'url': !isNative ? parts[2] : null,
                                    'func': parts[1] || UNKNOWN_FUNCTION,
                                    'args': isNative ? [
                                        parts[2]
                                    ] : [],
                                    'line': parts[3] ? +parts[3] : null,
                                    'column': parts[4] ? +parts[4] : null
                                };
                            } else if (parts = winjs.exec(lines[i])) element = {
                                'url': parts[2],
                                'func': parts[1] || UNKNOWN_FUNCTION,
                                'args': [],
                                'line': +parts[3],
                                'column': parts[4] ? +parts[4] : null
                            };
                            else if (parts = gecko.exec(lines[i])) element = {
                                'url': parts[3],
                                'func': parts[1] || UNKNOWN_FUNCTION,
                                'args': parts[2] ? parts[2].split(',') : [],
                                'line': parts[4] ? +parts[4] : null,
                                'column': parts[5] ? +parts[5] : null
                            };
                            else continue;
                            if (!element.func && element.line) element.func = UNKNOWN_FUNCTION;
                            stack.push(element);
                        }
                        if (!stack.length) return null;
                        if (!stack[0].column && typeof ex.columnNumber !== 'undefined') // FireFox uses this awesome columnNumber property for its top frame
                        // Also note, Firefox's column number is 0-based and everything else expects 1-based,
                        // so adding 1
                        stack[0].column = ex.columnNumber + 1;
                        return {
                            'name': ex.name,
                            'message': ex.message,
                            'url': getLocationHref(),
                            'stack': stack
                        };
                    }
                    /**
   * Adds information about the first frame to incomplete stack traces.
   * Safari and IE require this to get complete data on the first frame.
   * @param {Object.<string, *>} stackInfo Stack trace information from
   * one of the compute* methods.
   * @param {string} url The URL of the script that caused an error.
   * @param {(number|string)} lineNo The line number of the script that
   * caused an error.
   * @param {string=} message The error generated by the browser, which
   * hopefully contains the name of the object that caused the error.
   * @return {boolean} Whether or not the stack information was
   * augmented.
   */ function augmentStackTraceWithInitialElement(stackInfo, url, lineNo, message) {
                        var initial = {
                            'url': url,
                            'line': lineNo
                        };
                        if (initial.url && initial.line) {
                            stackInfo.incomplete = false;
                            if (!initial.func) initial.func = UNKNOWN_FUNCTION;
                            if (stackInfo.stack.length > 0) {
                                if (stackInfo.stack[0].url === initial.url) {
                                    if (stackInfo.stack[0].line === initial.line) return false; // already in stack trace
                                    else if (!stackInfo.stack[0].line && stackInfo.stack[0].func === initial.func) {
                                        stackInfo.stack[0].line = initial.line;
                                        return false;
                                    }
                                }
                            }
                            stackInfo.stack.unshift(initial);
                            stackInfo.partial = true;
                            return true;
                        } else stackInfo.incomplete = true;
                        return false;
                    }
                    /**
   * Computes stack trace information by walking the arguments.caller
   * chain at the time the exception occurred. This will cause earlier
   * frames to be missed but is the only way to get any stack trace in
   * Safari and IE. The top frame is restored by
   * {@link augmentStackTraceWithInitialElement}.
   * @param {Error} ex
   * @return {?Object.<string, *>} Stack trace information.
   */ function computeStackTraceByWalkingCallerChain(ex, depth) {
                        var functionName = /function\s+([_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*)?\s*\(/i, stack = [], funcs = {
                        }, recursion = false, parts, item, source;
                        for(var curr = computeStackTraceByWalkingCallerChain.caller; curr && !recursion; curr = curr.caller){
                            if (curr === computeStackTrace || curr === TraceKit.report) continue;
                            item = {
                                'url': null,
                                'func': UNKNOWN_FUNCTION,
                                'line': null,
                                'column': null
                            };
                            if (curr.name) item.func = curr.name;
                            else if (parts = functionName.exec(curr.toString())) item.func = parts[1];
                            if (typeof item.func === 'undefined') try {
                                item.func = parts.input.substring(0, parts.input.indexOf('{'));
                            } catch (e) {
                            }
                            if (funcs['' + curr]) recursion = true;
                            else funcs['' + curr] = true;
                            stack.push(item);
                        }
                        if (depth) // console.log('depth is ' + depth);
                        // console.log('stack is ' + stack.length);
                        stack.splice(0, depth);
                        var result = {
                            'name': ex.name,
                            'message': ex.message,
                            'url': getLocationHref(),
                            'stack': stack
                        };
                        augmentStackTraceWithInitialElement(result, ex.sourceURL || ex.fileName, ex.line || ex.lineNumber, ex.message || ex.description);
                        return result;
                    }
                    /**
   * Computes a stack trace for an exception.
   * @param {Error} ex
   * @param {(string|number)=} depth
   */ function computeStackTrace(ex, depth) {
                        var stack = null;
                        depth = depth == null ? 0 : +depth;
                        try {
                            stack = computeStackTraceFromStackProp(ex);
                            if (stack) return stack;
                        } catch (e) {
                            if (TraceKit.debug) throw e;
                        }
                        try {
                            stack = computeStackTraceByWalkingCallerChain(ex, depth + 1);
                            if (stack) return stack;
                        } catch (e1) {
                            if (TraceKit.debug) throw e1;
                        }
                        return {
                            'name': ex.name,
                            'message': ex.message,
                            'url': getLocationHref()
                        };
                    }
                    computeStackTrace.augmentStackTraceWithInitialElement = augmentStackTraceWithInitialElement;
                    computeStackTrace.computeStackTraceFromStackProp = computeStackTraceFromStackProp;
                    return computeStackTrace;
                })();
                var _default = TraceKit;
                exports.default = _default;
                module.exports = exports.default;
            /* WEBPACK VAR INJECTION */ }).call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"));
        /***/ },
        /***/ "./packages/@apphub:logrocket-utils/src/constants/nps.js": function(module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.DELIGHTED_FEEDBACK_PREFIX = exports.DELIGHTED_RESPONSES_REGEX = exports.WOOTRIC_RESPONSES_REGEX = void 0;
            var WOOTRIC_RESPONSES_REGEX = /^https:\/\/production.wootric.com\/responses/;
            exports.WOOTRIC_RESPONSES_REGEX = WOOTRIC_RESPONSES_REGEX;
            var DELIGHTED_RESPONSES_REGEX = /^https:\/\/web.delighted.com\/e\/[a-zA-Z-]*\/c/;
            exports.DELIGHTED_RESPONSES_REGEX = DELIGHTED_RESPONSES_REGEX;
            var DELIGHTED_FEEDBACK_PREFIX = 'comment=';
            exports.DELIGHTED_FEEDBACK_PREFIX = DELIGHTED_FEEDBACK_PREFIX;
        /***/ },
        /***/ "./packages/@apphub:logrocket-utils/src/enhanceFunc.js": function(module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.default = enhanceFunc;
            /* eslint no-param-reassign: ["error", { "props": false }] */ function enhanceFunc(obj, method, handler) {
                var original = obj[method];
                function shim() {
                    var res;
                    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
                    if (original) res = original.apply(this, args);
                    handler.apply(this, args);
                    return res;
                }
                obj[method] = shim;
                return function() {
                    obj[method] = original;
                };
            }
            module.exports = exports.default;
        /***/ },
        /***/ "./packages/@apphub:logrocket-utils/src/mapValues.js": function(module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.default = mapValues;
            function mapValues(obj, f) {
                if (obj == null) return {
                };
                var res = {
                };
                Object.keys(obj).forEach(function(key) {
                    res[key] = f(obj[key]);
                });
                return res;
            }
            module.exports = exports.default;
        /***/ },
        /***/ "./packages/@apphub:logrocket-utils/src/startsWith.js": function(module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.default = startsWith;
            function startsWith(value, search) {
                var pos = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
                return value && search && value.substring(pos, pos + search.length) === search;
            }
            module.exports = exports.default;
        /***/ },
        /***/ "./packages/@apphub:now/src/index.js": function(module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.default = void 0;
            var dateNow = Date.now.bind(Date);
            var loadTime = dateNow();
            var _default = typeof performance !== 'undefined' && performance.now ? performance.now.bind(performance) : function() {
                return dateNow() - loadTime;
            };
            exports.default = _default;
            module.exports = exports.default;
        /***/ },
        /***/ "./packages/logrocket/src/LogRocket.js": function(module, exports, __webpack_require__) {
            "use strict";
            var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.default = exports.MAX_QUEUE_SIZE = void 0;
            var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));
            var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));
            var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));
            var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));
            var _logrocketNetwork = _interopRequireDefault(__webpack_require__(/*! @apphub/logrocket-network */ "./packages/@apphub:logrocket-network/src/index.js"));
            var _logrocketExceptions = __webpack_require__(/*! @apphub/logrocket-exceptions */ "./packages/@apphub:logrocket-exceptions/src/index.js");
            var _logrocketConsole = _interopRequireDefault(__webpack_require__(/*! @apphub/logrocket-console */ "./packages/@apphub:logrocket-console/src/index.js"));
            var _logrocketRedux = __webpack_require__(/*! @apphub/logrocket-redux */ "./packages/@apphub:logrocket-redux/src/index.js");
            function ownKeys(object, enumerableOnly) {
                var keys = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var symbols = Object.getOwnPropertySymbols(object);
                    if (enumerableOnly) symbols = symbols.filter(function(sym) {
                        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
                    });
                    keys.push.apply(keys, symbols);
                }
                return keys;
            }
            function _objectSpread(target) {
                for(var i = 1; i < arguments.length; i++){
                    var source = arguments[i] != null ? arguments[i] : {
                    };
                    if (i % 2) ownKeys(Object(source), true).forEach(function(key) {
                        _defineProperty2.default(target, key, source[key]);
                    });
                    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
                    else ownKeys(Object(source)).forEach(function(key) {
                        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
                    });
                }
                return target;
            }
            var MAX_QUEUE_SIZE = 1000;
            exports.MAX_QUEUE_SIZE = MAX_QUEUE_SIZE;
            var considerIngestServerOption = function considerIngestServerOption() {
                var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
                }, ingestServer = _ref.ingestServer, options = _objectWithoutProperties2.default(_ref, [
                    "ingestServer"
                ]);
                if (ingestServer) return _objectSpread({
                    serverURL: "".concat(ingestServer, "/i"),
                    statsURL: "".concat(ingestServer, "/s")
                }, options);
                return options;
            };
            var LogRocket = /*#__PURE__*/ function() {
                function LogRocket() {
                    var _this = this;
                    _classCallCheck2.default(this, LogRocket);
                    this._buffer = [];
                    // TODO: tests for these exposed methods.
                    [
                        'log',
                        'info',
                        'warn',
                        'error',
                        'debug'
                    ].forEach(function(method) {
                        _this[method] = function() {
                            for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
                            _this.addEvent('lr.core.LogEvent', function() {
                                var consoleOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
                                };
                                if (method === 'error' && consoleOptions.shouldAggregateConsoleErrors) _logrocketExceptions.Capture.captureMessage(_this, args[0], {
                                }, true);
                                return {
                                    logLevel: method.toUpperCase(),
                                    args: args
                                };
                            }, {
                                shouldCaptureStackTrace: true
                            });
                        };
                    });
                    this._isInitialized = false;
                    this._installed = [];
                }
                _createClass2.default(LogRocket, [
                    {
                        key: "addEvent",
                        value: function addEvent(type, getMessage) {
                            var opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
                            };
                            var time = Date.now();
                            this._run(function(logger) {
                                logger.addEvent(type, getMessage, _objectSpread(_objectSpread({
                                }, opts), {
                                }, {
                                    timeOverride: time
                                }));
                            });
                        }
                    },
                    {
                        key: "onLogger",
                        value: function onLogger(logger) {
                            this._logger = logger;
                            while(this._buffer.length > 0){
                                var f = this._buffer.shift();
                                f(this._logger);
                            }
                        }
                    },
                    {
                        key: "_run",
                        value: function _run(f) {
                            if (this._isDisabled) return;
                            if (this._logger) f(this._logger);
                            else {
                                if (this._buffer.length >= MAX_QUEUE_SIZE) {
                                    this._isDisabled = true;
                                    console.warn('LogRocket: script did not load. Check that you have a valid network connection.');
                                    this.uninstall();
                                    return;
                                }
                                this._buffer.push(f.bind(this));
                            }
                        }
                    },
                    {
                        key: "init",
                        value: function init(appID) {
                            var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
                            };
                            if (!this._isInitialized) {
                                var _opts$shouldAugmentNP = opts.shouldAugmentNPS, shouldAugmentNPS = _opts$shouldAugmentNP === void 0 ? true : _opts$shouldAugmentNP, _opts$shouldParseXHRB = opts.shouldParseXHRBlob, shouldParseXHRBlob = _opts$shouldParseXHRB === void 0 ? false : _opts$shouldParseXHRB;
                                this._installed.push(_logrocketExceptions.registerExceptions(this));
                                this._installed.push(_logrocketNetwork.default(this, {
                                    shouldAugmentNPS: !!shouldAugmentNPS,
                                    shouldParseXHRBlob: !!shouldParseXHRBlob
                                }));
                                this._installed.push(_logrocketConsole.default(this));
                                this._isInitialized = true;
                                this._run(function(logger) {
                                    logger.init(appID, considerIngestServerOption(opts));
                                });
                            }
                        }
                    },
                    {
                        key: "start",
                        value: function start() {
                            this._run(function(logger) {
                                logger.start();
                            });
                        }
                    },
                    {
                        key: "uninstall",
                        value: function uninstall() {
                            this._installed.forEach(function(f) {
                                return f();
                            });
                            this._buffer = [];
                            this._run(function(logger) {
                                logger.uninstall();
                            });
                        }
                    },
                    {
                        key: "identify",
                        value: function identify(id, opts) {
                            this._run(function(logger) {
                                logger.identify(id, opts);
                            });
                        }
                    },
                    {
                        key: "startNewSession",
                        value: function startNewSession() {
                            this._run(function(logger) {
                                logger.startNewSession();
                            });
                        }
                    },
                    {
                        key: "track",
                        value: function track(customEventName, eventProperties) {
                            this._run(function(logger) {
                                logger.track(customEventName, eventProperties);
                            });
                        }
                    },
                    {
                        key: "getSessionURL",
                        value: function getSessionURL(cb) {
                            if (typeof cb !== 'function') throw new Error('LogRocket: must pass callback to getSessionURL()');
                            this._run(function(logger) {
                                if (logger.getSessionURL) logger.getSessionURL(cb);
                                else cb(logger.recordingURL);
                            });
                        }
                    },
                    {
                        key: "getVersion",
                        value: function getVersion(cb) {
                            this._run(function(logger) {
                                cb(logger.version);
                            });
                        }
                    },
                    {
                        key: "captureMessage",
                        value: function captureMessage(message) {
                            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
                            };
                            _logrocketExceptions.Capture.captureMessage(this, message, options);
                        }
                    },
                    {
                        key: "captureException",
                        value: function captureException(exception) {
                            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
                            };
                            _logrocketExceptions.Capture.captureException(this, exception, options);
                        }
                    },
                    {
                        key: "version",
                        get: function get() {
                            return this._logger && this._logger.version;
                        }
                    },
                    {
                        key: "sessionURL",
                        get: function get() {
                            return this._logger && this._logger.recordingURL;
                        }
                    },
                    {
                        key: "recordingURL",
                        get: function get() {
                            return this._logger && this._logger.recordingURL;
                        }
                    },
                    {
                        key: "recordingID",
                        get: function get() {
                            return this._logger && this._logger.recordingID;
                        }
                    },
                    {
                        key: "threadID",
                        get: function get() {
                            return this._logger && this._logger.threadID;
                        }
                    },
                    {
                        key: "tabID",
                        get: function get() {
                            return this._logger && this._logger.tabID;
                        }
                    },
                    {
                        key: "reduxEnhancer",
                        value: function reduxEnhancer() {
                            var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
                            };
                            return _logrocketRedux.createEnhancer(this, options);
                        }
                    },
                    {
                        key: "reduxMiddleware",
                        value: function reduxMiddleware() {
                            var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
                            };
                            return _logrocketRedux.createMiddleware(this, options);
                        }
                    },
                    {
                        key: "isDisabled",
                        get: function get() {
                            return !!(this._isDisabled || this._logger && this._logger._isDisabled);
                        }
                    }
                ]);
                return LogRocket;
            }();
            exports.default = LogRocket;
        /***/ },
        /***/ "./packages/logrocket/src/makeLogRocket.js": function(module, exports, __webpack_require__) {
            "use strict";
            var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.default = makeLogRocket;
            var _LogRocket = _interopRequireDefault(__webpack_require__(/*! ./LogRocket */ "./packages/logrocket/src/LogRocket.js"));
            var REACT_NATIVE_NOTICE = 'LogRocket does not yet support React Native.';
            var makeNoopPolyfill = function makeNoopPolyfill() {
                return {
                    init: function init() {
                    },
                    uninstall: function uninstall() {
                    },
                    log: function log() {
                    },
                    info: function info() {
                    },
                    warn: function warn() {
                    },
                    error: function error() {
                    },
                    debug: function debug() {
                    },
                    addEvent: function addEvent() {
                    },
                    identify: function identify() {
                    },
                    start: function start() {
                    },
                    get threadID () {
                        return null;
                    },
                    get recordingID () {
                        return null;
                    },
                    get recordingURL () {
                        return null;
                    },
                    reduxEnhancer: function reduxEnhancer() {
                        return function(store) {
                            return function() {
                                return store.apply(void 0, arguments);
                            };
                        };
                    },
                    reduxMiddleware: function reduxMiddleware() {
                        return function() {
                            return function(next) {
                                return function(action) {
                                    return next(action);
                                };
                            };
                        };
                    },
                    track: function track() {
                    },
                    getSessionURL: function getSessionURL() {
                    },
                    getVersion: function getVersion() {
                    },
                    startNewSession: function startNewSession() {
                    },
                    onLogger: function onLogger() {
                    },
                    setClock: function setClock() {
                    },
                    captureMessage: function captureMessage() {
                    },
                    captureException: function captureException() {
                    }
                };
            };
            function makeLogRocket() {
                var getLogger = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function() {
                };
                if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') throw new Error(REACT_NATIVE_NOTICE);
                if (typeof window !== 'undefined') {
                    if (window._disableLogRocket) return makeNoopPolyfill();
                    if (window.MutationObserver && window.WeakMap) {
                        // Save window globals that we rely on.
                        window._lrMutationObserver = window.MutationObserver;
                        var instance = new _LogRocket.default();
                        getLogger(instance);
                        return instance;
                    }
                }
                return makeNoopPolyfill();
            }
            module.exports = exports.default;
        /***/ },
        /***/ "./packages/logrocket/src/module-npm.js": function(module, exports, __webpack_require__) {
            "use strict";
            var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.default = void 0;
            var _setup = _interopRequireDefault(__webpack_require__(/*! ./setup */ "./packages/logrocket/src/setup.js"));
            var instance = _setup.default();
            var _default = instance;
            exports.default = _default;
            module.exports = exports.default;
        /***/ },
        /***/ "./packages/logrocket/src/setup.js": function(module, exports, __webpack_require__) {
            "use strict";
            var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.default = setup;
            var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));
            var _makeLogRocket = _interopRequireDefault(__webpack_require__(/*! ./makeLogRocket */ "./packages/logrocket/src/makeLogRocket.js"));
            var CDN_SERVER_MAP = {
                'cdn.logrocket.io': 'https://r.logrocket.io',
                'cdn.lr-ingest.io': 'https://r.lr-ingest.io',
                'cdn.lr-in.com': 'https://r.lr-in.com',
                'cdn-staging.logrocket.io': 'https://staging-i.logrocket.io',
                'cdn-staging.lr-ingest.io': 'https://staging-i.lr-ingest.io',
                'cdn-staging.lr-in.com': 'https://staging-i.lr-in.com'
            };
            function setup() {
                var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
                }, enterpriseServer = _ref.enterpriseServer, _ref$sdkVersion = _ref.sdkVersion, sdkVersion = _ref$sdkVersion === void 0 ? "2.1.1" : _ref$sdkVersion, opts = _objectWithoutProperties2.default(_ref, [
                    "enterpriseServer",
                    "sdkVersion"
                ]);
                var scriptOrigin = 'https://cdn.logrocket.io';
                var scriptIngest;
                if (sdkVersion === 'script') try {
                    var scriptTag = document.currentScript;
                    var matches = scriptTag.src.match(/^(https?:\/\/([^\\]+))\/.+$/);
                    var scriptHostname = matches && matches[2];
                    if (scriptHostname && CDN_SERVER_MAP[scriptHostname]) {
                        scriptOrigin = matches && matches[1];
                        scriptIngest = CDN_SERVER_MAP[scriptHostname];
                    }
                } catch (_) {
                /* no-op */ }
                else {
                    // NPM
                    scriptOrigin = 'https://cdn.lr-in.com';
                    scriptIngest = 'https://r.lr-in.com';
                }
                var sdkServer = opts.sdkServer || enterpriseServer;
                var ingestServer = opts.ingestServer || enterpriseServer || scriptIngest;
                var instance = _makeLogRocket.default(function() {
                    var script = document.createElement('script');
                    if (ingestServer) {
                        if (typeof window.__SDKCONFIG__ === 'undefined') window.__SDKCONFIG__ = {
                        };
                        window.__SDKCONFIG__.serverURL = "".concat(ingestServer, "/i");
                        window.__SDKCONFIG__.statsURL = "".concat(ingestServer, "/s");
                    }
                    if (sdkServer) script.src = "".concat(sdkServer, "/logger.min.js");
                    else if (window.__SDKCONFIG__ && window.__SDKCONFIG__.loggerURL) script.src = window.__SDKCONFIG__.loggerURL;
                    else if (window._lrAsyncScript) script.src = window._lrAsyncScript;
                    else script.src = "".concat(scriptOrigin, "/logger-1.min.js");
                    script.async = true;
                    document.head.appendChild(script);
                    script.onload = function() {
                        // Brave browser: Advertises its user-agent as Chrome ##.##... then
                        // loads logger.min.js, but blocks the execution of the script
                        // causing _LRlogger to be undefined.  Let's make sure its there first.
                        if (typeof window._LRLogger === 'function') instance.onLogger(new window._LRLogger({
                            sdkVersion: sdkVersion
                        }));
                        else {
                            console.warn('LogRocket: script execution has been blocked by a product or service.');
                            instance.uninstall();
                        }
                    };
                    script.onerror = function() {
                        console.warn('LogRocket: script could not load. Check that you have a valid network connection.');
                        instance.uninstall();
                    };
                });
                return instance;
            }
            module.exports = exports.default;
        /***/ },
        /***/ 0: function(module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! /root/project/packages/logrocket/src/module-npm.js */ "./packages/logrocket/src/module-npm.js");
        /***/ }
    }));
});

},{}]},["gGCj4","U15t6"], "U15t6", "parcelRequire94cf")

//# sourceMappingURL=main.js.map
