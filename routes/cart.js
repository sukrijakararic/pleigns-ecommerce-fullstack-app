const express = require("express");
const cartRouter = express.Router();
const {getCartByUserId, addProductToCart, deleteItemFromCart, checkout } = require("../queries/cart");


    
    cartRouter.get("/cart/myCart", getCartByUserId);
    cartRouter.post("/cart/addToCart", addProductToCart);
    cartRouter.post("/cart/checkout", checkout);
    cartRouter.delete("/cart/deleteItemFromCart", deleteItemFromCart);
    
    module.exports = cartRouter
