const express = require("express");
const orderRouter = express.Router();
const { getOrders, deleteOrder, viewOrderItems } = require("../queries/order");



    orderRouter.get("/myOrders", getOrders);
    orderRouter.get("/viewOrderItems", viewOrderItems);
    orderRouter.delete("/deleteOrder", deleteOrder);
    
    module.exports = orderRouter