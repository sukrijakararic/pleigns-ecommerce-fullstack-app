import React, { useContext, useEffect } from "react";
import styles from "./Profile.module.css";
import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";
import { UserContext } from "../../context-api/UserContext";
import { getUser } from "../../utils/utils";

export const Profile = () => {
  const { loggedUser, setLoggedUser } = useContext(UserContext);

  const getUserFromDb = async () => {
    const user = await getUser();
    setLoggedUser(user);
  };

  useEffect(() => {
    getUserFromDb();
  }, []);

  return (
    <div className={styles.profileCard}>
      {loggedUser ? (
        <Card style={{ width: "18rem" }} className={styles.profile}>
          <Card.Header>Pilot</Card.Header>
          <ListGroup variant="flush">
            <ListGroup.Item>{loggedUser.email}</ListGroup.Item>
            <ListGroup.Item>{loggedUser.firstname}</ListGroup.Item>
            <ListGroup.Item>{loggedUser.lastname}</ListGroup.Item>
          </ListGroup>
        </Card>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};
