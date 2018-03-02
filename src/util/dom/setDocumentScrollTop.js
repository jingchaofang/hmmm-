/**
 * @file setDocumentScrollTop.js
 * @from https://github.com/oneuijs/oui-dom-utils
 * @api Function
 * @return Number
 * @param value
 * @runtime Browser Window, Require JS
 */
define(function (require, exports, module) {

    var setDocumentScrollTop = function (value) {
        window.scrollTo(0, value);
        return value;
    }


    module.exports = setDocumentScrollTop;


});