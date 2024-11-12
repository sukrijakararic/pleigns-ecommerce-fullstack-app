const express = require("express");
const productsRouter = express.Router();
const { getProducts, getProductById } = require("../queries/products");



  productsRouter.get("/products/", getProducts);
  productsRouter.get("/products/:productId", getProductById);
  
  module.exports = productsRouter