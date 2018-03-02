/**
 * @file getPosition.js
 * @from https://github.com/oneuijs/oui-dom-utils
 * @api Function
 * @return Object
 * @params HTMLElement el,
 * @runtime Browser Window, Require JS
 */

define(function (require, exports, module) {

    var getPosition = function (el) {
        if (!el) {
            return {
                left: 0,
                top: 0
            };
        }

        return {
            left: el.offsetLeft,
            top: el.offsetTop
        };
    }

    module.exports = getPosition;

});