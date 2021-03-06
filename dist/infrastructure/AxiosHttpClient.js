"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var axios = require("axios").default;

/**
 * Encapsulates axios requests
 */

var AxiosHttpClient = function () {
  function AxiosHttpClient() {
    _classCallCheck(this, AxiosHttpClient);
  }

  _createClass(AxiosHttpClient, null, [{
    key: "get",
    value: async function get(path) {
      var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var response = {};
      try {
        response = await axios.get(path, { params: params });
      } catch (error) {
        console.log(error);
        throw new Error(error);
      }
      return response;
    }
  }, {
    key: "post",
    value: async function post(path, body) {
      var response = {};
      try {
        response = await axios.post(path, body);
      } catch (error) {
        console.log(error);
        throw new Error(error);
      }
      return response;
    }
  }]);

  return AxiosHttpClient;
}();

exports.default = AxiosHttpClient;