import React, { useContext } from "react";
import styles from "./Cart.module.css";
import { CartContext } from "../../context-api/CartContext";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
export const Cart = () => {
  const { cart } = useContext(CartContext);
  console.log(cart);
  return (
    <div>
      {cart.message === "No items in cart" ? <h1>Cart is empty</h1> :
    <div className={styles.productCards}>
      {cart.map((product) => (
        <Card key={product.id} style={{ width: "18rem" }}>
          <Card.Img variant="top" src={product.image} />
          <Card.Body>
            <Card.Title>{product.name}</Card.Title>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>Quantity: {product.qty}</ListGroup.Item>
            <ListGroup.Item>Total: ${product.total}</ListGroup.Item>
          </ListGroup>
          <Card.Body></Card.Body>
        </Card>
      ))}
    </div>
    }
    </div>
  );
};
