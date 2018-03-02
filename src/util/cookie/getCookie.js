/**
 * @file getCookie.js
 * @from self
 * @api Function
 * @return String
 * @params String  name
 * @runtime Browser Window, Require JS
 */
define(function (require, exports, module) {


    var getCookies = require('./getCookies');

    function getCookie(name) {
        return getCookies()[name];
    }

    module.exports = getCookie;

});