import React, { useContext } from "react";
import styles from "./LandingPage.module.css";
import { Registration } from "../registration/Registration";
import { AuthContext } from "../../context-api/AuthContext";
import { Link } from "react-router-dom";
export const LandingPage = () => {
  const { loggedIn } = useContext(AuthContext);
  return (
    <div className={styles.LandingPage}>
      <div className={styles.landingPageImg}>
        <div className={styles.landingText}>
          <h1>Welcome to Pleigns!</h1>
          <h2>Lets fly somewhere new</h2>
          <h5>
            We provide you with the best Aircraft on the market. All checked and
            ready to fly.
          </h5>
          {loggedIn && (
            <h5>
              See what we have in{" "}
              <Link className={styles.productsLink} to="/products">
                stock
              </Link>
              , your next flight awaits at Pleigns!
            </h5>
          )}
        </div>
        <div>{!loggedIn && <Registration />}</div>
      </div>
    </div>
  );
};
