/**
 * @file arrayOrderByMin.js
 * @from self
 * @api Function
 * @return Array
 * @params Array arr, Number dx
 * @runtime Browser Window, Require JS
 */
define(function (require, exports, module) {

    var arrayOrderByMin = function (aArray) {

        aArray.sort(function (num1, num2) {
            return num1 - num2;
        });
    }

    module.exports = arrayOrderByMin;

});