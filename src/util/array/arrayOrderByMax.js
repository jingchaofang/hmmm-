/**
 * @file arrayByMax.js
 * @from self
 * @api Function
 * @return Array
 * @params Array arr, Number dx
 * @runtime Browser Window, Require JS
 */

define(function (require, exports, module) {

    var arrayOrderByMax = function (aArray) {

        aArray.sort(function (num1, num2) {
            return num2 - num1;
        });
    }

    module.exports = arrayOrderByMax;

});