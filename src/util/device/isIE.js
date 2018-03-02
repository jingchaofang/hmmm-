/**
 * @file isIE.js
 * @from https://github.com/arasatasaygin/is.js
 * @api Function
 * @return Boolean
 * @params null,
 * @runtime Browser Window, Require JS
 */
define(function (require, exports, module) {

    function isIE() {

        var userAgent = 'navigator' in window && 'userAgent' in navigator && navigator.userAgent.toLowerCase() || '';

        return /msie/i.test(userAgent) || "ActiveXObject" in window;

    }


    module.exports = isIE;

});