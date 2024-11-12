const express = require("express");
const cartRouter = express.Router();
const {getCartByUserId, addProductToCart, deleteItemFromCart, checkout } = require("../queries/cart");


    
    cartRouter.get("/myCart", getCartByUserId);
    cartRouter.post("/addToCart", addProductToCart);
    cartRouter.post("/checkout", checkout);
    cartRouter.delete("/deleteItemFromCart", deleteItemFromCart);
    
    module.exports = cartRouter
