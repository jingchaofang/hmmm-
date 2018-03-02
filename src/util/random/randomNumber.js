/**
 * @file randomNumber.js
 * @from self
 * @api Function
 * @return Number
 * @params Number  min, Number max
 * @runtime Browser Window, Require JS, Node.js

 */
define(function (require, exports, module) {

    function randomNumber(min, max) {

        return Math.floor(min + Math.random() * (max - min));

    }

    module.exports = randomNumber;
});