import React from "react";
import styles from "./Registration.module.css";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';

export const Registration = () => {
  return (
    <div className={styles.registrationForm}>
      <h2>Register</h2>
      <form>
      <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-3"
      >
        <Form.Control type="email" placeholder="name@example.com" />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingInput"
        label="First name"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="John" />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingInput"
        label="Last Name"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Doe" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Password">
        <Form.Control type="password" placeholder="Password" />
      </FloatingLabel>
      <Button variant="success" type="submit">Success</Button>{' '}
      </form>
    </div>
  );
};
