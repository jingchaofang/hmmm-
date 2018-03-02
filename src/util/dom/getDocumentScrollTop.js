/**
 * @file getDocumentScrollTop.js
 * @from https://github.com/oneuijs/oui-dom-utils
 * @api Function
 * @return Number
 * @params null
 * @runtime Browser Window, Require JS
 */


define(function (require, exports, module) {

    var getDocumentScrollTop = function () {
        return (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
    }


    module.exports = getDocumentScrollTop;


});