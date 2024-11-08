import React, { useContext } from "react";
import styles from "./Profile.module.css";
import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";
import { UserContext } from "../../context-api/UserContext";
import { getGoogleUser, getLocalUser } from "../../utils/utils";

export const Profile = () => {
  const { loggedUser } = useContext(UserContext);

  // These two are test functions to get user info from server
  const getGoogleUserServer = async () => {
    const googleUser = await getGoogleUser();
    console.log(googleUser);
  };

  const getLocalUserServer = async () => {
    const localUser = await getLocalUser();
    console.log(localUser);
  };

  return (
    <div className={styles.profileCard}>
      {loggedUser ? (
        <Card style={{ width: "18rem" }} className={styles.profile}>
          <Card.Header>Pilot</Card.Header>
          <button onClick={getLocalUserServer}>Get Local User</button>
          <button onClick={getGoogleUserServer}>Get Google User</button>
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
