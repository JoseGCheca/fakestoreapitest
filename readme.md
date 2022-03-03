## Usage

The package needs to be required and FakeStoreProducts class instantiated

<!-- prettier-ignore -->
```js
const FakeStoreProduct = require('./fakestoreapi-test');
const fakestoreproduct = new FakeStoreProduct();

fakestoreproduct.calculateCartPrice([1]).then(result => {
    console.log(result);
});

```
