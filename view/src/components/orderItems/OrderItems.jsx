import React, { useContext } from "react";
import styles from "./OrderItems.module.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { ViewOrderItemsContext } from "../../context-api/ViewOrderItemsContext";
import { useNavigate } from "react-router-dom";

export const OrderItems = () => {
  const Navigate = useNavigate();

  const { viewOrderItems } = useContext(ViewOrderItemsContext);

  return (
    <div className={styles.orderItemsContainer}>
      <h1>Order Items</h1>
      {console.log(viewOrderItems)}
      {viewOrderItems.map((item) => (
        <Card key={item.id} style={{ width: "18rem", margin: "1rem" }}>
          <Card.Img variant="top" src={item.image} />
          <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Card.Text>{item.description}</Card.Text>
            <Card.Text>Qty: <span style={{ color: "orange", fontWeight: "bold" }}>{item.qty}</span></Card.Text>
            <Card.Text>Price: $<span style={{ color: "green", fontWeight: "bold" }}>{item.price * item.qty}</span></Card.Text>
          </Card.Body>
        </Card>
      ))}
      <Button style={{ marginTop: "1rem" }} variant="primary" onClick={() => Navigate("/orders")}>
        Back to Orders
      </Button>
    </div>
  );
};
