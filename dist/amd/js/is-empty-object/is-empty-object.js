/*can-util@3.4.1#js/is-empty-object/is-empty-object*/
define(function (require, exports, module) {
    'use strict';
    module.exports = function (obj) {
        for (var prop in obj) {
            return false;
        }
        return true;
    };
});