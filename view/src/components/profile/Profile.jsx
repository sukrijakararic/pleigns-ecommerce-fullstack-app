import React, { useContext} from "react";
import styles from "./Profile.module.css";
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import { UserContext } from "../../context-api/UserContext";

export const Profile = () => {
  const { loggedUser } = useContext(UserContext);


  return (
    <div className={styles.profileCard}>
      {loggedUser ? (
        <Card style={{ width: '18rem' }} className={styles.profile}>
          <Card.Header>Pilot</Card.Header>
          <ListGroup variant="flush">
            <ListGroup.Item>{loggedUser.email}</ListGroup.Item>
            <ListGroup.Item>{loggedUser.firstname}</ListGroup.Item>
            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
          </ListGroup>
        </Card>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};
