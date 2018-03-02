/**
 * @file toggleClass.js
 * @from self
 * @api Function
 * @return null
 * @params HTMLElement ele, String  cls
 * @runtime Browser Window, Require JS
 */
define(function (require, exports, module) {

    var hasClass = require('./hasClass');

    var toggleClass = function (ele, cls) {
        if (hasClass(ele, cls)) {
            var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
            ele.className = ele.className.replace(reg, ' ');
        }
        else {
            ele.className += " " + cls;
        }
    }

    module.exports = toggleClass;


});
