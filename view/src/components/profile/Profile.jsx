import React, { useEffect } from "react";
import styles from "./Profile.module.css";
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import { getUser } from "../../utils/utils";

export const Profile = () => {

  const user = getUser();
  return (
    <div className={styles.profileCard}>
    <Card style={{ width: '18rem' }} className={styles.profile}>
    <Card.Header>Pilot</Card.Header>
    <ListGroup variant="flush">
      <ListGroup.Item>{user.email}</ListGroup.Item>
      <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
      <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
    </ListGroup>
  </Card>
  </div>
  )
};
