import React from "react";
import styles from "./Login.module.css";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from "react-bootstrap/Button";
import { AuthContext } from "../../utils/AuthContext";
import { useContext } from "react";
import { REDIRECTURL } from "../../utils/utils";

import { login } from "../../utils/utils";

export const Login = () => {
  const { setLoggedIn } = useContext(AuthContext);

const handleLogin = async (event) => {
  event.preventDefault();
  const data = new FormData(event.target);
  const user = {
    email: data.get("email"),
    password: data.get("password"),
  };
  const response = await login(user);
  event.target.reset();
  document.getElementById("responseStatus").textContent = response.message;
  response.message.includes("Logged in") && setLoggedIn(true);
  window.location.href = REDIRECTURL;
};
  return (
    <form onSubmit={handleLogin}>
      <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-3"
      >
        <Form.Control type="email" name="email" placeholder="name@example.com" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Password">
        <Form.Control type="password" name="password" placeholder="Password" />
      </FloatingLabel>
      <p className={styles.responseStatus} id="responseStatus"></p>
      <Button variant="success" type="submit">
        Submit
      </Button>
    </form>
  );
};
