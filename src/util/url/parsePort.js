/**
 * @file parsePort.js
 * @from self
 * @api Function
 * @return String
 * @params String protocol
 * @runtime Browser Window, Require JS, Node.js
 */
define(function (require, exports, module) {

    var parsePort = function (protocol) {
        switch (protocol) {
            case 'http:':
                return 80;
            case 'https:':
                return 443;
            default:
                return location.port;
        }
    }

    module.exports = parsePort;


});