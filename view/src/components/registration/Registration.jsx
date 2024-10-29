import React from "react";
import styles from "./Registration.module.css";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { addUser } from "../../utils/utils";

export const Registration = () => {
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

  };

  return (
    <div>
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
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
          />
        </FloatingLabel>
        <Button
          variant="success"
          type="submit"
          className={styles.registrationSubmit}
        >
          Submit
        </Button>{" "}
        <p className={styles.responseStatus} id="responseStatus"></p>
      </form>{" "}
    </div>
  );
};
