/**
 * @file randomColor.js
 * @from self
 * @api Function
 * @return String
 * @params null
 * @runtime Browser Window, Require JS, Node.js

 */
define(function (require, exports, module) {

    function randomColor() {

        var r = function () {
            return Math.floor(Math.random() * 256)
        };

        return "rgb(" + r() + "," + r() + "," + r() + ")";

    }

    module.exports = randomColor;

});