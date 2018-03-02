/**
 * @file encode.js
 * @from self
 * @api Function
 * @return String
 * @params String str
 * @runtime Browser Window, Require JS, Node.js
 */

define(function (require, exports, module) {

    var encode = function (str) {
        try {
            return encodeURIComponent(str);
        } catch (e) {
            return str;
        }
    };

    module.exports = encode;

});