/**
 * @file outerHeightWithMargin.js
 * @from https://github.com/oneuijs/oui-dom-utils
 * @api Function
 * @return Number
 * @param HTMLElement el
 * @runtime Browser Window, Require JS
 */
define(function (require, exports, module) {


    var getComputedStyle = require('./getComputedStyle');

    var outerHeightWithMargin = function (el) {
        var height = el.offsetHeight;
        const style = getComputedStyle(el);

        height += (parseFloat(style.marginTop) || 0) + (parseFloat(style.marginBottom) || 0);

        return height;
    }

    module.exports = outerHeightWithMargin;

});