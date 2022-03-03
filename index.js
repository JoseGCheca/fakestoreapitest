const prueba = require('./dist');
prueba2 = new prueba();
prueba2.calculateCartPrice([60]).then(result => {
    console.log(result);
});


module.exports = require("./dist");

