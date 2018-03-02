/**
 * @file scrollTo.js
 * @from https://github.com/oneuijs/oui-dom-utils
 * @api Function
 * @param Number to, Number duration
 * @return null
 * @runtime Browser Window, Require JS
 */

define(function (require, exports, module) {

    var getDocumentScrollTop = require('./getDocumentScrollTop');
    var setDocumentScrollTop = require('./setDocumentScrollTop');

    var scrollTo = function (to, duration) {

        var to = 0;
        var duration = 16;

        if (duration < 0) {
            return;
        }
        var diff = to - getDocumentScrollTop();
        if (diff === 0) {
            return;
        }
        var perTick = diff / duration * 10;
        requestAnimationFrame(
            function () {
                if (Math.abs(perTick) > Math.abs(diff)) {
                    setDocumentScrollTop(getDocumentScrollTop() + diff);
                    return;
                }
                setDocumentScrollTop(getDocumentScrollTop() + perTick);
                if (diff > 0 && getDocumentScrollTop() >= to || diff < 0 && getDocumentScrollTop() <= to) {
                    return;
                }
                this.scrollTo(to, duration - 16);
            });

    }

    module.exports = scrollTo;

});