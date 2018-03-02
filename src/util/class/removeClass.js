/**
 * @file removeClass.js
 * @from self
 * @api Function
 * @return null
 * @params HTMLElement ele, String  cls
 * @runtime Browser Window, Require JS
 */
define(function (require, exports, module) {

    var hasClass = require('./hasClass');

    var removeClass = function (ele, cls) {
        if (hasClass(ele, cls)) {
            var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
            ele.className = ele.className.replace(reg, ' ');
        }
    }

    module.exports = removeClass;


});