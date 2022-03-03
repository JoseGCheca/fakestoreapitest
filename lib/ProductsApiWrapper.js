import config from './config/base'
export default class ProductsApiWrapper {
    constructor(client) {
        this.httpClient = client;
    }
    getProduct(id) {
        return this.httpClient.get(`${config.API.BASE_URL}/${config.API.PRODUCTS}/${id}`);
    }

    getProducts() {
        return this.httpClient.get(`${config.API.BASE_URL}/${config.API.PRODUCTS}`);
    }
}
