import React, { useContext, useEffect, useState } from "react";
import styles from "./Products.module.css";
import { ProductContext } from "../../context-api/ProductContext";
import { getProducts, getCart } from "../../utils/utils";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { addToCart } from "../../utils/utils";
import Button from "react-bootstrap/Button";
import { CartContext } from "../../context-api/CartContext";
import { LoadingSpinner } from "../loadingSpinner/LoadingSpinner";

export const Products = () => {
  const { products, setProducts } = useContext(ProductContext);
  const { setCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState({});
  const [statusMessages, setStatusMessages] = useState({});

  const getProductsFromServer = async () => {
    try {
      const data = await getProducts();
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getCartFromServer = async () => {
    try {
      const data = await getCart();
      setCart(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProductsFromServer();
  }, []);

  const handleAddToCart = async (productId) => {
    try {
      const data = await addToCart(productId, quantity[productId]);
      setStatusMessages((prev) => ({ ...prev, [productId]: data.message }));
      setQuantity((prev) => ({ ...prev, [productId]: "" }));
      getCartFromServer();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {products.length === 0 ? (
        <LoadingSpinner />
      ) : (
        <div className={styles.productCards}>
          {products.map((product) => (
            <Card key={product.id} style={{ width: "18rem" }}>
              <Card.Img variant="top" src={product.image} />

              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
              </ListGroup>
              <Card.Body>
                <input
                  type="number"
                  className={styles.quantityInput}
                  name="qty"
                  min="1"
                  max="5"
                  id={`qty-${product.id}`}
                  onChange={(e) =>
                    setQuantity((prev) => ({
                      ...prev,
                      [product.id]: e.target.value,
                    }))
                  }
                  placeholder="qty"
                  value={quantity[product.id]}
                />
                <Button
                  onClick={() => handleAddToCart(product.id)}
                  variant="link"
                >
                  Add To Hangar
                </Button>
                <p>{statusMessages[product.id]}</p>
              </Card.Body>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};
