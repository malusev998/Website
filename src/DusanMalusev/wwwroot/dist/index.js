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
})({"6q4Qk":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
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
var _indexCss = require("./css/index.css");
var _recaptcha = require("./recaptcha");
var _http = require("./http");
var _elements = require("./elements");
var _csrf = require("./csrf");
async function handleParticals() {
    const snowParticles = document.getElementById(_elements.SNOW_EFFECT);
    if (!snowParticles) return;
    const { particlesSnowEffect  } = await require("17e704b2115e4bd4");
    await particlesSnowEffect(_elements.SNOW_EFFECT);
}
async function handleSubscription() {
    const subscribeForm = document.getElementById(_elements.SUBSCRIBE_FORM);
    if (!subscribeForm) return;
    const { subscribeFormHandler  } = await require("a75b058e0d32261");
    subscribeForm.addEventListener('submit', subscribeFormHandler(_elements.SUBSCRIBE_FORM_NAME, _elements.SUBSCRIBE_FORM_EMAIL, _elements.SUBSCRIBE_FORM_NAME_ERROR, _elements.SUBSCRIBE_FORM_EMAIL_ERROR));
}
async function handleContact() {
    const contactForm = document.getElementById(_elements.CONTACT_FORM);
    if (!contactForm) return;
    const { contactFormHandler  } = await require("6cb3f2f894a71cbd");
    contactForm.addEventListener('submit', contactFormHandler(_elements.CONTACT_FORM_NAME, _elements.CONTACT_FORM_NAME_ERROR, _elements.CONTACT_FORM_EMAIL, _elements.CONTACT_FORM_EMAIL_ERROR, _elements.CONTACT_FORM_SUBJECT, _elements.CONTACT_FORM_SUBJECT_ERROR, _elements.CONTACT_FORM_MESSAGE, _elements.CONTACT_FORM_MESSAGE_ERROR));
}
document.addEventListener('DOMContentLoaded', async ()=>{
    try {
        _http.setBaseUrl("https://localhost:5001/api");
        _csrf.setCsrfTokenCookieName(_csrf.COOKIE_NAME);
        _csrf.setCsrfTokenHeader(_csrf.HEADER_NAME);
        _recaptcha.setKey("6Le3FcIZAAAAAEuqx3rtGyjkmLjfJz_QzBlfyfoT");
        await handleParticals();
        await handleContact();
        await handleSubscription();
    } catch (err) {
        console.error(err);
    }
});

},{"./css/index.css":"dMM4n","./recaptcha":"dJlOb","./http":"9l3qH","./elements":"7Z7sx","./csrf":"cMkQc","17e704b2115e4bd4":"jNGHa","a75b058e0d32261":"eIXtz","6cb3f2f894a71cbd":"3KTb4"}],"dMM4n":[function() {},{}],"dJlOb":[function(require,module,exports) {
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

},{}],"9l3qH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "setBaseUrl", ()=>setBaseUrl
);
parcelHelpers.export(exports, "http", ()=>http
);
parcelHelpers.export(exports, "HttpMethod", ()=>HttpMethod
);
var _csrf = require("./csrf");
var HttpMethod;
(function(HttpMethod) {
    HttpMethod["GET"] = "GET";
    HttpMethod["POST"] = "POST";
    HttpMethod["PUT"] = "PUT";
    HttpMethod["PATCH"] = "PATCH";
    HttpMethod["DELETE"] = "DELETE";
})(HttpMethod || (HttpMethod = {
}));
let baseUrl = '';
const setBaseUrl = (url)=>{
    if (url.endsWith('/')) url = url.substring(0, url.length - 1);
    baseUrl = url;
};
async function http(url, method, body, opt, recaptchaToken) {
    if (!opt) opt = {
        method: method,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'X-Requested-With': 'XMLHttpRequest',
            ..._csrf.setCsrfToken()
        }
    };
    else {
        opt.method = method;
        opt.headers = {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'X-Requested-With': 'XMLHttpRequest',
            ...opt.headers,
            ..._csrf.setCsrfToken()
        };
    }
    if (typeof recaptchaToken === 'string') opt.headers = {
        'X-ReCaptchaV3-Token': recaptchaToken,
        ...opt.headers
    };
    if ('Content-Type' in opt.headers) switch(opt.headers['Content-Type']){
        case 'application/json':
            opt.body = JSON.stringify(body);
            break;
        case 'multipart/form-data':
            const data = new FormData();
            for(const item in body)data.append(item, body[item]);
            opt.body = data;
            break;
    }
    if (!url.startsWith('/')) url = `${baseUrl}/${url}`;
    else url = `${baseUrl}${url}`;
    return await fetch(url, opt);
}

},{"./csrf":"cMkQc","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"cMkQc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getCsrtToken", ()=>getCsrtToken
);
parcelHelpers.export(exports, "setCsrfToken", ()=>setCsrfToken
);
parcelHelpers.export(exports, "setCsrfTokenHeader", ()=>setCsrfTokenHeader
);
parcelHelpers.export(exports, "setCsrfTokenCookieName", ()=>setCsrfTokenCookieName
);
parcelHelpers.export(exports, "COOKIE_NAME", ()=>COOKIE_NAME
);
parcelHelpers.export(exports, "HEADER_NAME", ()=>HEADER_NAME
);
var _jsCookie = require("js-cookie");
var _jsCookieDefault = parcelHelpers.interopDefault(_jsCookie);
const COOKIE_NAME = 'XSRF-TOKEN';
const HEADER_NAME = 'X-CSRF-TOKEN';
let globalHeader = '';
let globalCookieName = '';
const setCsrfTokenHeader = (header)=>{
    globalHeader = header;
};
const setCsrfTokenCookieName = (cookieName)=>{
    globalCookieName = cookieName;
};
const getCsrtToken = ()=>{
    return _jsCookieDefault.default.get(globalCookieName);
};
const setCsrfToken = ()=>{
    let obj = {
    };
    obj[globalHeader] = getCsrtToken();
    return obj;
};

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

},{}],"7Z7sx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SNOW_EFFECT", ()=>SNOW_EFFECT
);
parcelHelpers.export(exports, "CONTACT_FORM", ()=>CONTACT_FORM
);
parcelHelpers.export(exports, "CONTACT_FORM_NAME", ()=>CONTACT_FORM_NAME
);
parcelHelpers.export(exports, "CONTACT_FORM_EMAIL", ()=>CONTACT_FORM_EMAIL
);
parcelHelpers.export(exports, "CONTACT_FORM_SUBJECT", ()=>CONTACT_FORM_SUBJECT
);
parcelHelpers.export(exports, "CONTACT_FORM_MESSAGE", ()=>CONTACT_FORM_MESSAGE
);
parcelHelpers.export(exports, "CONTACT_FORM_NAME_ERROR", ()=>CONTACT_FORM_NAME_ERROR
);
parcelHelpers.export(exports, "CONTACT_FORM_EMAIL_ERROR", ()=>CONTACT_FORM_EMAIL_ERROR
);
parcelHelpers.export(exports, "CONTACT_FORM_SUBJECT_ERROR", ()=>CONTACT_FORM_SUBJECT_ERROR
);
parcelHelpers.export(exports, "CONTACT_FORM_MESSAGE_ERROR", ()=>CONTACT_FORM_MESSAGE_ERROR
);
parcelHelpers.export(exports, "SUBSCRIBE_FORM", ()=>SUBSCRIBE_FORM
);
parcelHelpers.export(exports, "SUBSCRIBE_FORM_NAME", ()=>SUBSCRIBE_FORM_NAME
);
parcelHelpers.export(exports, "SUBSCRIBE_FORM_EMAIL", ()=>SUBSCRIBE_FORM_EMAIL
);
parcelHelpers.export(exports, "SUBSCRIBE_FORM_NAME_ERROR", ()=>SUBSCRIBE_FORM_NAME_ERROR
);
parcelHelpers.export(exports, "SUBSCRIBE_FORM_EMAIL_ERROR", ()=>SUBSCRIBE_FORM_EMAIL_ERROR
);
const SNOW_EFFECT = 'snow-effect';
const CONTACT_FORM = 'contact-form';
const CONTACT_FORM_NAME = 'contact-form-name';
const CONTACT_FORM_EMAIL = 'contact-form-email';
const CONTACT_FORM_SUBJECT = 'contact-form-subject';
const CONTACT_FORM_MESSAGE = 'contact-form-message';
const CONTACT_FORM_NAME_ERROR = 'contact-form-name-error';
const CONTACT_FORM_EMAIL_ERROR = 'contact-form-email-error';
const CONTACT_FORM_SUBJECT_ERROR = 'contact-form-subject-error';
const CONTACT_FORM_MESSAGE_ERROR = 'contact-form-message-error';
const SUBSCRIBE_FORM = 'subscribe-form';
const SUBSCRIBE_FORM_NAME = 'subscribe-form-name';
const SUBSCRIBE_FORM_EMAIL = 'subscribe-form-email';
const SUBSCRIBE_FORM_NAME_ERROR = 'subscribe-form-name-error';
const SUBSCRIBE_FORM_EMAIL_ERROR = 'subscribe-form-email-error';

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"jNGHa":[function(require,module,exports) {
module.exports = require("./helpers/browser/js-loader")(require('./helpers/bundle-url').getBundleURL('pTCE9') + "snow.865c0473.js" + "?" + Date.now()).catch((err)=>{
    delete module.bundle.cache[module.id];
    throw err;
}).then(()=>module.bundle.root('fkozp')
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

},{}],"eIXtz":[function(require,module,exports) {
module.exports = require("./helpers/browser/js-loader")(require('./helpers/bundle-url').getBundleURL('pTCE9') + "subscribe.8407b786.js" + "?" + Date.now()).catch((err)=>{
    delete module.bundle.cache[module.id];
    throw err;
}).then(()=>module.bundle.root('a58Mn')
);

},{"./helpers/browser/js-loader":"285qT","./helpers/bundle-url":"chiK4"}],"3KTb4":[function(require,module,exports) {
module.exports = require("./helpers/browser/js-loader")(require('./helpers/bundle-url').getBundleURL('pTCE9') + "contact.14a0cf1c.js" + "?" + Date.now()).catch((err)=>{
    delete module.bundle.cache[module.id];
    throw err;
}).then(()=>module.bundle.root('13n2x')
);

},{"./helpers/browser/js-loader":"285qT","./helpers/bundle-url":"chiK4"}]},["6q4Qk","1mazX"], "1mazX", "parcelRequire94cf")

//# sourceMappingURL=index.js.map
