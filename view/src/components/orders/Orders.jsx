import React, { useEffect, useState } from "react";
import styles from "./Orders.module.css";
import { getOrders } from "../../utils/utils";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export const Orders = () => {
  const [orders, setOrders] = useState([]);
  const getOrdersFromServer = async () => {
    const ordersFromServer = await getOrders();
    console.log(ordersFromServer);
    setOrders(ordersFromServer);
  };

  useEffect(() => {
    getOrdersFromServer();
  }, []);
  return (
    <div className={styles.ordersDiv}>
      {orders.map((order) => (
        <Card key={order.id} style={{ width: "75%", margin: "1rem" }}>
          <Card.Header>Status: "{order.status}"</Card.Header>
          <Card.Body>
            <Card.Title>Total: ${order.total}</Card.Title>
            <Card.Text>
              {new Intl.DateTimeFormat("en-US", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
              }).format(new Date(order.created))}
            </Card.Text>
            <Card.Text>Your order Id: {order.id}</Card.Text>
            <Button variant="primary">View Items</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};
