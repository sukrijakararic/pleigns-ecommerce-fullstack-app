import React from "react";
import styles from "./Checkout.module.css";
import Button from "react-bootstrap/Button";
import { useWindowSize } from 'react-use';

export const Checkout = () => {
  const { width } = useWindowSize();
  return (
    <div className={styles.checkoutContainer}>
      <form action="" className={styles.checkoutForm}>
        <h4>Credit Card info</h4>
        <label
          controlId="floatingInput"
          label="Name on card"
          for="name"
          className={styles.checkoutLabel}
        >
          Name on card
        </label>
        <input
          type="text"
          name="name"
          placeholder="John Doe"
          id="name"
          required
          className={styles.checkoutInput}
        />

        <div>
          <label for="ccn" className={styles.checkoutLabel}>
            Credit Card Number:
          </label>
          <input
            className={styles.checkoutInput}
            id="ccn"
            type="tel"
            inputmode="numeric"
            pattern="[0-9\s]{13,19}"
            autocomplete="cc-number"
            maxlength="19"
            placeholder="xxxx xxxx xxxx xxxx"
            required
          />
          {width <= 720 ? <br></br> : null}
          <label label="CCV" for="ccv" className={styles.checkoutLabel}>
            CCV
          </label>
          <input
            className={styles.checkoutInput}
            style={{ width: "3rem" }}
            type="tel"
            placeholder="123"
            required
            pattern="[0-9]{3}"
            maxLength={3}
            id="ccv"
          />
          {width <= 942 ? <br></br> : null}
          
          <label label="Exp" for="exp" className={styles.checkoutLabel}>
            Expiration
          </label>
          <input
            className={styles.checkoutInput}
            style={{ width: "4rem" }}
            type="tel"
            placeholder="09/25"
            required
            name="exp"
            id="exp"
            pattern="^(0[1-9]|1[0-2])\/[0-9]{2}$"
            maxLength={5}
          />
        </div>
        <label
          for="email"
          label="Email address"
          className={styles.checkoutLabel}
        >
          Email
        </label>
        <input
          className={styles.checkoutInput}
          type="email"
          id="email"
          placeholder="name@example.com"
          required
        />
        <label label="Address" for="address" className={styles.checkoutLabel}>
          Address
        </label>
        <input
          type="text"
          id="address"
          placeholder="1234 Main St"
          required
          className={styles.checkoutInput}
        />
        <label
          label="Phone (123-456-7899)"
          for="phone"
          className={styles.checkoutLabel}
        >
          Phone number
        </label>
        <input
          className={styles.checkoutInput}
          type="tel"
          placeholder="123-456-7891"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          required
          id="phone"
        />
        <Button variant="success" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};
