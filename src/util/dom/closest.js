/**
 * @file closest.js
 * @from https://github.com/oneuijs/oui-dom-utils
 * @api Function
 * @return HTMLElements || null
 * @params null,
 * @runtime Browser Window, Require JS
 */

define(function (require, exports, module) {

    var closest = function (el, selector) {

        var matchesSelector = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector;

        while (el) {
            if (matchesSelector.call(el, selector)) {
                return el;
            } else {
                el = el.parentElement;
            }
        }
        return null;

    }

    module.exports = closest;

});