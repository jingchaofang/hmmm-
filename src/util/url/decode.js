/**
 * @file decode.js
 * @from self
 * @api Function
 * @return String
 * @params String str
 * @runtime Browser Window, Require JS, Node.js
 */
define(function (require, exports, module) {

    var decode = function (str) {
        try {
            return decodeURIComponent(str.replace(/\+/g, ' '));
        } catch (e) {
            return str;
        }
    }

    module.exports = decode;

});