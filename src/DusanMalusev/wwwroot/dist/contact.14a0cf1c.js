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
})({"IyhUO":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "4a236f9275d0a351";
module.bundle.HMR_BUNDLE_ID = "fd3c116314a0cf1c";
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

},{}],"13n2x":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "contact", ()=>contact
);
parcelHelpers.export(exports, "contactFormHandler", ()=>contactFormHandler
);
var _yup = require("yup");
var _recaptcha = require("../recaptcha");
var _http = require("../http");
var _validation = require("./validation");
var _sweetalert2Js = require("sweetalert2/dist/sweetalert2.js");
var _sweetalert2JsDefault = parcelHelpers.interopDefault(_sweetalert2Js);
const contact = async (dto)=>{
    try {
        await _validation.schema.validate(dto, {
            recursive: true,
            abortEarly: false
        });
        await _recaptcha.ready();
        const token = await _recaptcha.execute('contact');
        const res = await _http.http('/contact/new', _http.HttpMethod.POST, dto, undefined, token);
        if (res.status >= 400) throw {
            res,
            message: "Status code greater than 400",
            body: await res.text(),
            headers: res.headers
        };
        const data = await res.json();
        return {
            ID: data.id,
            name: data.name,
            email: data.email,
            subject: data.subject,
            text: data.message,
            createdAt: new Date(data.createdAt)
        };
    } catch (err) {
        console.error(err);
        if (err instanceof _yup.ValidationError) {
            const validationError = {
                nameError: '',
                emailError: '',
                messageError: '',
                subjectError: ''
            };
            err.inner.forEach((item)=>{
                if (item.path === 'name') validationError.nameError = item.errors[0];
                else if (item.path === 'email') validationError.emailError = item.errors[0];
                else if (item.path === 'subject') validationError.subjectError = item.errors[0];
                else if (item.path === 'message') validationError.messageError = item.errors[0];
            });
            return validationError;
        }
        return {
            message: 'Try again please later'
        };
    }
};
const contactFormHandler = (nameEl, nameErrorEl, emailEl, emailErrorEl, subjectEl, subjectErrorEl, messageEl, messageErrorEl)=>async (e)=>{
        e.preventDefault();
        const name = document.getElementById(nameEl);
        const email = document.getElementById(emailEl);
        const subject = document.getElementById(subjectEl);
        const message = document.getElementById(messageEl);
        const nameError = document.getElementById(nameErrorEl);
        const emailError = document.getElementById(emailErrorEl);
        const subjectError = document.getElementById(subjectErrorEl);
        const messageError = document.getElementById(messageErrorEl);
        //@ts-ignore
        const res = await contact({
            name: name.value,
            email: email.value,
            message: subject.value,
            subject: message.value
        });
        if ('message' in res) {
            _sweetalert2JsDefault.default.fire({
                title: 'Error',
                text: res.message,
                icon: 'error',
                timerProgressBar: true
            });
            return;
        }
        // Validation Error
        if ('nameError' in res && 'emailError' in res && 'subjectError' in res && 'messageError' in res) {
            if (res.nameError !== '') {
                name.classList.add('input-error');
                nameError.classList.remove('hidden');
                nameError.innerText = res.nameError;
            }
            if (res.emailError !== '') {
                email.classList.add('input-error');
                emailError.classList.remove('hidden');
                emailError.innerText = res.emailError;
            }
            if (res.subjectError !== '') {
                subject.classList.add('input-error');
                subjectError.classList.remove('hidden');
                subjectError.innerText = res.subjectError;
            }
            if (res.messageError !== '') {
                message.classList.add('input-error');
                messageError.classList.remove('hidden');
                messageError.innerText = res.messageError;
            }
            setTimeout(()=>{
                nameError.classList.add('hidden');
                emailError.classList.add('hidden');
                subjectError.classList.add('hidden');
                messageError.classList.add('hidden');
                email.classList.remove('input-error');
                name.classList.remove('input-error');
                subject.classList.remove('input-error');
                message.classList.remove('input-error');
            }, 4000);
            return;
        }
        //@ts-ignore
        gtag('event', 'contact', {
            event_category: 'reach',
            event_label: 'New contact email'
        });
        _sweetalert2JsDefault.default.fire({
            title: 'Success',
            text: 'You have successfully sent message',
            icon: 'success',
            timerProgressBar: true
        });
    }
;

},{"yup":"gvf4u","../recaptcha":"dJlOb","../http":"9l3qH","./validation":"5GbLH","sweetalert2/dist/sweetalert2.js":"2rUmd","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"gvf4u":[function(require,module,exports) {
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

},{"./locale":"8waLz","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"5GbLH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "schema", ()=>schema
);
parcelHelpers.export(exports, "ContactValidationError", ()=>ContactValidationError
);
var _yup = require("yup");
const schema = _yup.object().shape({
    name: _yup.string().required().max(50),
    email: _yup.string().required().email().max(150),
    subject: _yup.string().required().max(150),
    message: _yup.string().required().max(2000)
});

},{"yup":"gvf4u","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"2rUmd":[function(require,module,exports) {
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

},{}]},["IyhUO"], null, "parcelRequire94cf")

//# sourceMappingURL=contact.14a0cf1c.js.map
