import React, { useContext } from "react";
import { AuthContext } from "../../utils/AuthContext";
import styles from "./Registration.module.css";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { addUser } from "../../utils/utils";
import { Link } from "react-router-dom";

import { REDIRECTURL } from "../../utils/utils";

export const Registration = () => {
  const { setLoggedIn } = useContext(AuthContext);
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const user = {
      firstname: data.get("firstname"),
      lastname: data.get("lastname"),
      email: data.get("email"),
      password: data.get("password"),
    };
    const response = await addUser(user);
    event.target.reset();
    document.getElementById("responseStatus").textContent = response.message;
    response.message === "User created" && setLoggedIn(true);
  };

  const handleGoogleOauth = async () => {
    window.location.href = REDIRECTURL;
    setLoggedIn(true);
  };

  return (
    <form className={styles.registrationForm} onSubmit={handleSubmit}>
      <h2>Register</h2>
      <FloatingLabel
        controlId="floatingInput1"
        label="Email address"
        className="mb-3"
      >
        <Form.Control type="email" placeholder="" name="email" />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingInput2"
        label="First name"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="" name="firstname" />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingInput3"
        label="Last Name"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="" name="lastname" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Password">
        <Form.Control type="password" placeholder="Password" name="password" />
      </FloatingLabel>
      <Button
        variant="success"
        type="submit"
        className={styles.registrationSubmit}
      >
        Submit
      </Button>{" "}
      <p className={styles.responseStatus} id="responseStatus"></p>
      <p className={styles.oathRegister}>Or register with</p>
      <Button variant="light" onClick={handleGoogleOauth}>
        <img
          className={styles.oauthIcons}
          src="\src\assets\google_icon.webp"
          alt="Icon of Google"
        />
      </Button>{" "}
      <p className={styles.oathRegister}>
        Already have an account? <Link to="/login" className={styles.loginLink}>Login</Link>
      </p>
    </form>
  );
};
