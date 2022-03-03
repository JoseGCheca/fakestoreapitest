'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _base = require('./config/base');

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ProductsApiWrapper = function () {
    function ProductsApiWrapper(client) {
        _classCallCheck(this, ProductsApiWrapper);

        this.httpClient = client;
    }

    _createClass(ProductsApiWrapper, [{
        key: 'getProduct',
        value: function getProduct(id) {
            return this.httpClient.get(_base2.default.API.BASE_URL + '/' + _base2.default.API.PRODUCTS + '/' + id);
        }
    }, {
        key: 'getProducts',
        value: function getProducts() {
            return this.httpClient.get(_base2.default.API.BASE_URL + '/' + _base2.default.API.PRODUCTS);
        }
    }]);

    return ProductsApiWrapper;
}();

exports.default = ProductsApiWrapper;