"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setKey = exports.execute = exports.ready = void 0;
var globalKey = null;
var setKey = function (key) {
    globalKey = key;
};
exports.setKey = setKey;
var ready = function () { return new Promise(function (resolve, reject) {
    if (!('grecaptcha' in window)) {
        reject(new Error('ReCaptcha V3 is not loaded on the webpage'));
        return;
    }
    //@ts-ignore
    grecaptcha.ready(function () {
        resolve();
    });
}); };
exports.ready = ready;
var execute = function (action) { return new Promise(function (resolve, reject) {
    if (globalKey === null || globalKey === undefined) {
        reject(new Error('Global Key for RecaptchaV3 must be set by calling setKey function'));
        return;
    }
    //@ts-ignore
    grecaptcha.execute(globalKey, { action: action })
        .then(function (token) {
        try {
            resolve(token);
        }
        catch (err) {
            reject(err);
        }
    })
        .catch(function (err) { return reject(err); });
}); };
exports.execute = execute;
//# sourceMappingURL=recaptcha.js.map