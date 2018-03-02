/**
 * @file isHexAdecimal.js
 * @from https://github.com/arasatasaygin/is.js
 * @api Function
 * @return Boolean
 * @params String str
 * @runtime Browser Window, Require JS, Node.js

 */
define(function (require, exports, module) {

    var reg = /^[0-9a-fA-F]+$/;

    var isHexAdecimal = function (str) {
        return reg.test(str);
    }

    module.exports = isHexAdecimal;
});