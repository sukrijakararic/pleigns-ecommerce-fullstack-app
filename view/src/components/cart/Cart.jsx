import React, { useContext, useEffect } from "react";
import styles from "./Cart.module.css";
import { CartContext } from "../../context-api/CartContext";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import { getCart, removeFromCart } from "../../utils/utils";
import CloseButton from "react-bootstrap/CloseButton";
export const Cart = () => {
  const { cart, setCart } = useContext(CartContext);

  const fetchCart = async () => {
    try {
      const data = await getCart();
      setCart(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  return (
    <div className={styles.cartContainer}>
      {cart.message === "No items in cart" ? (
        <h3 style={{ textAlign: "center", margin: "1rem" }}>
          Looks like your hangar is empty, try adding some planes to your
          hangar...
        </h3>
      ) : (
        <div className={styles.productCards}>
          <h2>Your Hangar</h2>
          {cart.map((product) => (
            <div key={product.id}>
              <Card.Img
                variant="top"
                src={product.image}
                style={{
                  width: "15rem",
                  marginBottom: "1rem",
                  borderRadius: "1rem",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                }}
              />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item style={{ backgroundColor: "#EBECF0" }}>
                    Quantity:{" "}
                    <span style={{ fontWeight: "bold", color: "orange" }}>
                      {product.qty}
                    </span>{" "}
                    / Total: $
                    <span
                      style={{
                        fontWeight: "bold",
                        textDecoration: "underline",
                        color: "green",
                      }}
                    >
                      {product.total}
                    </span>
                    <CloseButton
                      aria-label="Remove product from cart"
                      onClick={async () => {
                        try {
                          await removeFromCart(product.productid);
                          fetchCart();
                        } catch (error) {
                          console.log(error);
                        }
                      }}
                    />
                  </ListGroup.Item>
                </ListGroup>
                <hr />
              </Card.Body>
            </div>
          ))}
          <h3>
            Order Total: $
            {cart
              .map((product) => Number(product.total))
              .reduce((a, b) => a + b, 0)}
          </h3>
          <Button variant="success">Checkout</Button>
        </div>
      )}
    </div>
  );
};
