/**
 * @file trim.js
 * @from self
 * @api Function
 * @return String
 * @params String string, String leftOrRight
 * @runtime Browser Window, Require JS, Node.js

 */
define(function (require, exports, module) {

    var trim = function (string, leftOrRight) {

        if (leftOrRight) {

            if (leftOrRight === 'left') {
                return string.replace(/^\s*/, '');
            } else if (leftOrRight === 'right') {
                return string.replace(/\s*$/, '');
            }

        } else {
            return string.replace(/^\s*|\s*$/g, '');
        }

    }

    module.exports = trim;


});