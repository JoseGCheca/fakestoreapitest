'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ProductsApiWrapper = require('./ProductsApiWrapper');

var _ProductsApiWrapper2 = _interopRequireDefault(_ProductsApiWrapper);

var _AxiosHttpClient = require('./infrastructure/AxiosHttpClient');

var _AxiosHttpClient2 = _interopRequireDefault(_AxiosHttpClient);

var _Validator = require('./utils/Validator');

var _Validator2 = _interopRequireDefault(_Validator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FakeStoreProducts = function () {
  function FakeStoreProducts() {
    _classCallCheck(this, FakeStoreProducts);

    // TODO: Improve dependency injection. This class is strongly acoplated with dependencies
    this.productsApiWrapper = new _ProductsApiWrapper2.default(_AxiosHttpClient2.default);
  }

  /**
   * Returns the price sum of each product in basket given some specific products id
   * @param {Integer []} items Product ids to calculate price sum
   * @returns {number} Total price amount of cart
   */


  _createClass(FakeStoreProducts, [{
    key: 'calculateCartPrice',
    value: async function calculateCartPrice(items) {
      if (!_Validator2.default.isValidProductsId(items)) {
        throw new Error("ERROR: Insert a valid array of products id elements");
      }
      var products = await this._fetchProducts(items);
      var notEmptyProducts = products.filter(function (product) {
        return product.data !== null && product.data !== undefined;
      });

      var priceList = notEmptyProducts.map(function (product) {
        return product.data["price"];
      });

      var sum = this._sumUpPrice(priceList);
      return sum;
    }
  }, {
    key: '_fetchProducts',
    value: function _fetchProducts(items) {
      var fetchingArray = [];
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = items[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var id = _step.value;

          fetchingArray.push(this.productsApiWrapper.getProduct(id));
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return Promise.all(fetchingArray);
    }
  }, {
    key: '_sumUpPrice',
    value: function _sumUpPrice(priceList) {
      var sum = priceList.reduce(function (x, y) {
        return x + y;
      }, 0);
      return parseFloat(sum.toFixed(2));
    }
  }]);

  return FakeStoreProducts;
}();

module.exports = FakeStoreProducts;