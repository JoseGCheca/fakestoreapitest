"use strict";
// const server = require("./server");

var ApiHttp = require("./ApiHttp");

calculate([45, 1, 2]).then(function (result) {
  console.log("sum: " + result);
});
// const port = process.env.PORT || "3000";

// server.listen(port);
// console.log("Listening on port " + port);

// server.on("error", (err) => {
//   console.error(err);
// });

function fecthProduct(id) {
  var api = new ApiHttp();
  return api.get("https://fakestoreapi.com/products/" + id);
}

async function calculate(items) {
  var fetchingArray = [];
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = items[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var id = _step.value;

      fetchingArray.push(fecthProduct(id));
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

  var productsResponse = await Promise.all(fetchingArray);

  var priceList = productsResponse.map(function (product) {
    return product.data["price"];
  });

  var sum = priceList.reduce(function (x, y) {
    return x + y;
  }, 0);
  return sum;
}