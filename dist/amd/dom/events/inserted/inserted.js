/*can-util@3.9.2#dom/events/inserted/inserted*/
define(function (require, exports, module) {
    'use strict';
    var makeMutationEvent = require('../make-mutation-event/make-mutation-event');
    makeMutationEvent('inserted', 'addedNodes');
});