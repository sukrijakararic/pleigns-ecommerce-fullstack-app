const express = require("express");
const productsRouter = express.Router();
const { getProducts, getProductById } = require("../queries/products");



  productsRouter.get("/", getProducts);
  productsRouter.get("/:productId", getProductById);
  
  module.exports = productsRouter