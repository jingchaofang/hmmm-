/**
 * @file hasClass.js
 * @from self
 * @api Function
 * @return Boolean
 * @params HTMLElement ele, String  cls
 * @runtime Browser Window, Require JS
 */

define(function (require, exports, module) {

    var hasClass = function (ele, cls) {
        return (new RegExp('(\\s|^)' + cls + '(\\s|$)')).test(ele.className);
    }

    module.exports = hasClass;


});