const express = require("express");
const getProducts = require("../products.json");
const getProducts = require("./getProducts");

const app = express();

const port = 3002;

//Endpoint

app.get("/api/products", getProducts);
//app.get("/api/product/:id", getProduct);

app.listen(port, () => {
  console.log(`Server is listening on port: ${port}`);
});
