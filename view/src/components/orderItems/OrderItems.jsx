import React, { useEffect, useContext} from "react";
import styles from "./OrderItems.module.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { ViewOrderItemsContext } from "../../context-api/ViewOrderItemsContext";

export const OrderItems = () => {

    const { viewOrderItems } = useContext(ViewOrderItemsContext);


  return (
    <div>
      {console.log(viewOrderItems)}
      {viewOrderItems.map((item) => (
        <ListGroup variant="flush">
          <ListGroup.Item>{item.name}</ListGroup.Item>
          <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup>
      ))}
    </div>
  );
};
