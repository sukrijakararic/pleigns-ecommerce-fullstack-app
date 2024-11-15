import React, { useContext, useEffect, useState } from "react";
import styles from "./Products.module.css";
import { ProductContext } from "../../context-api/ProductContext";
import { getProducts } from "../../utils/utils";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { addToCart } from "../../utils/utils";

export const Products = () => {
  const { products, setProducts } = useContext(ProductContext);
  const [quantity, setQuantity] = useState(1);
  const [statusMessages, setStatusMessages] = useState({});

  const getProductsFromServer = async () => {
    try {
      const data = await getProducts();
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProductsFromServer();
  }, []);

  const handleAddToCart = async (productId) => {
    try {
      const data = await addToCart(productId, quantity);
      setStatusMessages((prev) => ({ ...prev, [productId]: data.message }));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.productCards}>
      {products.map((product) => (
        <Card key={product.id} style={{ width: "18rem" }}>
          <Card.Img variant="top" src={product.image} />
          <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>{product.description}</Card.Text>
            <input type="hidden" value={product.id} />
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
              id={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value))}
              placeholder="qty"
            />
            <Card.Link
              href="#"
              onClick={() => handleAddToCart(product.id)}
            >
              Add to cart
            </Card.Link>
            <p>{statusMessages[product.id]}</p>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};
