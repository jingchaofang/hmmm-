/**
 * @file outerWidthWithMargin.js
 * @from https://github.com/oneuijs/oui-dom-utils
 * @api Function
 * @return Number
 * @param HTMLElement el
 * @runtime Browser Window, Require JS
 */
define(function (require, exports, module) {

    var getComputedStyle = require('./getComputedStyle');

    var outerWidthWithMargin = function (el) {
        var width = el.offsetWidth;
        const style = getComputedStyle(el);

        width += (parseFloat(style.marginLeft) || 0) + (parseFloat(style.marginRight) || 0);
        return width;
    }

    module.exports = outerWidthWithMargin;

});