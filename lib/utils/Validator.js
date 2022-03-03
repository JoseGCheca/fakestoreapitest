export default class Validator {

    /**
     * 
     * @param {*} items Array of integers
     */
    static isValidProductsId(items) {
        return Array.isArray(items) && items.find((item) => Number.isNaN(item)) === undefined
    };

}
