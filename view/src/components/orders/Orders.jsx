import React, { useEffect, useContext } from "react";
import styles from "./Orders.module.css";
import { getOrders, deleteOrder } from "../../utils/utils";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CloseButton from "react-bootstrap/CloseButton";
import { OrderContext } from "../../context-api/OrderContext";
import { useNavigate } from "react-router-dom";
import { ViewOrderItemsContext } from "../../context-api/ViewOrderItemsContext";
import { viewOrderItems } from "../../utils/utils";

export const Orders = () => {
  const { orderList, setOrderList } = useContext(OrderContext);
  const { setViewOrderItems } = useContext(ViewOrderItemsContext);
  const Navigate = useNavigate();

  const handleViewOrderItems = async (orderId) => {
    try {
      const orderItemsFromDb = await viewOrderItems(orderId);
      setViewOrderItems(orderItemsFromDb);
      Navigate("/orderItems");
    } catch (error) {
      console.error(error);
    }
  };

  const fetchOrders = async () => {
    try {
      const response = await getOrders();
      setOrderList(response);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div className={styles.ordersDiv}>
      {console.log(orderList)}
      {orderList.message === "No orders found" ? (
        <h3 style={{ textAlign: "center", margin: "2rem" }}>
          You have no orders
        </h3>
      ) : (
        orderList.map((order) => (
          <Card
            id={styles.orderContainer}
            key={order.id}
            style={{ width: "50%", margin: "1rem" }}
          >
            <Card.Header
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <h5>Status: "<span style={{ color: "#D5B60A" }}>{order.status}</span>"</h5>
              <CloseButton
                title="Cancel order"
                aria-label="Delete order"
                onClick={async () => {
                  try {
                    await deleteOrder(order.id);
                    fetchOrders();
                  } catch (error) {
                    console.error(error);
                  }
                }}
              />
            </Card.Header>
            <Card.Body>
              <Card.Title>
                Total:{" "}
                $<span style={{ color: "green", fontWeight: "bold" }}>
                  {order.total}
                </span>
              </Card.Title>
              <Card.Text>
                {new Intl.DateTimeFormat("en-US", {
                  year: "numeric",
                  month: "2-digit",
                  day: "2-digit",
                }).format(new Date(order.created))}
              </Card.Text>
              <Card.Text>Your order Id: {order.id}</Card.Text>
              <Button
                onClick={() => handleViewOrderItems(order.id)}
                variant="primary"
              >
                View Items
              </Button>
            </Card.Body>
          </Card>
        ))
      )}
    </div>
  );
};
