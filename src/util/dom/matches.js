/**
 * @file matches.js
 * @from https://github.com/oneuijs/oui-dom-utils
 * @api Function
 * @return Boolean
 * @param HTMLElement el, String selector
 * @runtime Browser Window, Require JS
 */
define(function (require, exports, module) {

    var matches = function (el, selector) {
        return (el.matches || el.matchesSelector || el.msMatchesSelector || el.mozMatchesSelector || el.webkitMatchesSelector || el.oMatchesSelector).call(el, selector);
    }


    module.exports = matches;

});