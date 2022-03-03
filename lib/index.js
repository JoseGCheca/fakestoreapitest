import ProductsApiWrapper from './ProductsApiWrapper';
import AxiosHttpClient from './infrastructure/AxiosHttpClient';
import Validator from './utils/Validator';
class FakeStoreProducts {
  constructor() {
    // TODO: Improve dependency injection. This class is strongly acoplated with dependencies
    this.productsApiWrapper = new ProductsApiWrapper(AxiosHttpClient)
  }

  /**
   * Returns the price sum of each product in basket given some specific products id
   * @param {Integer []} items Product ids to calculate price sum
   * @returns {number} Total price amount of cart
   */
  async calculateCartPrice(items) {
    if (!Validator.isValidProductsId(items)) {
      throw new Error("ERROR: Insert a valid array of products id elements");
    }
    const products = await this._fetchProducts(items);
    const notEmptyProducts = products.filter(product => product.data !== null && product.data !== undefined);

    const priceList = notEmptyProducts.map((product) => {
      return product.data["price"];
    });

    const sum = this._sumUpPrice(priceList);
    return sum;
  }

  _fetchProducts(items) {
    let fetchingArray = [];
    for (const id of items) {
      fetchingArray.push(this.productsApiWrapper.getProduct(id));
    }
    return Promise.all(fetchingArray)
  }

  _sumUpPrice(priceList) {
    const sum = priceList.reduce((x, y) => {
      return x + y;
    }, 0);
    return parseFloat(sum.toFixed(2));
  }
}

module.exports = FakeStoreProducts;