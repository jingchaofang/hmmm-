/**
 * @file outerHeight.js
 * @from https://github.com/oneuijs/oui-dom-utils
 * @api Function
 * @return Number
 * @param HTMLElement el
 * @runtime Browser Window, Require JS
 */
define(function (require, exports, module) {

    var outerHeight = function (el) {
        return el.offsetHeight;
    }

    module.exports = outerHeight;

});