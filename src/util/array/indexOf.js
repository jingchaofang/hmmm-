/**
 * @file indexOf.js
 * @from self
 * @api Function
 * @return Number
 * @params Array arr, Object obj
 * @runtime Browser Window, Require JS
 */
define(function (require, exports, module) {

    var indexOf = function (arr, obj) {
        if (arr.indexOf) return arr.indexOf(obj);
        for (var i = 0; i < arr.length; ++i) {
            if (arr[i] === obj) return i;
        }
        return -1;
    }

    module.exports = indexOf;

});