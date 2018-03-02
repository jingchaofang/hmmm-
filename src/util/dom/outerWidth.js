/**
 * @file outerWidth.js
 * @from https://github.com/oneuijs/oui-dom-utils
 * @api Function
 * @return Number
 * @param HTMLElement el
 * @runtime Browser Window, Require JS
 */
define(function (require, exports, module) {

    var outerWidth = function (el) {
        return el.offsetWidth;
    }

    module.exports = outerWidth;

});