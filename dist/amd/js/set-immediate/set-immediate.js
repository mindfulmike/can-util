/*can-util@3.9.6#js/set-immediate/set-immediate*/
define([
    'require',
    'exports',
    'module',
    '../global/global'
], function (require, exports, module) {
    (function (global) {
        'use strict';
        var global = require('../global/global')();
        module.exports = global.setImmediate || function (cb) {
            return setTimeout(cb, 0);
        };
    }(function () {
        return this;
    }()));
});