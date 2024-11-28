const express = require("express");
const orderRouter = express.Router();
const { getOrders, deleteOrder, viewOrderItems } = require("../queries/order");



    orderRouter.get("/orders/myOrders", getOrders);
    orderRouter.post("/orders/viewOrderItems", viewOrderItems);
    orderRouter.delete("/orders/deleteOrder", deleteOrder);
    
    module.exports = orderRouter