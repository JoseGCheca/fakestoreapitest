"use strict";
// const server = require("./server");
const ApiHttp = require("./ApiHttp");

calculate([45, 1, 2]).then((result) => {
  console.log("sum: " + result);
});
// const port = process.env.PORT || "3000";

// server.listen(port);
// console.log("Listening on port " + port);

// server.on("error", (err) => {
//   console.error(err);
// });

function fecthProduct(id) {
  const api = new ApiHttp();
  return api.get(`https://fakestoreapi.com/products/${id}`);
}

async function calculate(items) {
  let fetchingArray = [];
  for (const id of items) {
    fetchingArray.push(fecthProduct(id));
  }
  const productsResponse = await Promise.all(fetchingArray);

  const priceList = productsResponse.map((product) => {
    return product.data["price"];
  });

  const sum = priceList.reduce((x, y) => {
    return x + y;
  }, 0);
  return sum;
}
