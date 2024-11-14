import React, { useContext, useEffect } from "react";
import styles from "./Products.module.css";
import { ProductContext } from "../../context-api/ProductContext";
import { getProducts } from "../../utils/utils";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
export const Products = () => {
  const { products, setProducts } = useContext(ProductContext);
  const getProductsFromServer = async () => {
    try {
      const data = await getProducts();
      setProducts(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProductsFromServer();
  }, []);

  return <div className={styles.productCards}>{products.map((product) => {
    return (
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="\src\assets\fleet_4472x(6).webp" />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>
          {product.description}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Add to cart</Card.Link>
      </Card.Body>
    </Card>
    );
  })}</div>;
};
