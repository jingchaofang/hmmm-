/**
 * @file ajaxGet.js
 * @from self
 * @api Function
 * @return null
 * @params String url, Object params, String type,  Function success, Function  fail
 * @runtime Browser Window, Require JS
 */

define(function (require, exports, module) {

    var ajax = require('./ajax');

    var ajaxGet = function (url, params, type, header, success, fail) {
        ajax({
            method: "get",
            url: url,
            params: params,
            type: type,
            header: header,
            success: success,
            fail: fail
        });

        // console.log(header);
    }


    module.exports = ajaxGet;


});