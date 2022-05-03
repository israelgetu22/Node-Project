const express = require("express");
const getProducts = require("./getProducts");
const getProduct = require("./getProduct");
const getPrice = require("./getPrice");

const app = express();

const port = 3001;

//Endpoint

app.get("/api/products", getProducts);
app.get("/api/product/:id", getProduct);
app.get("/api/products", getPrice);

app.listen(port, () => {
  console.log(`Server is listening on port: ${port}`);
});
