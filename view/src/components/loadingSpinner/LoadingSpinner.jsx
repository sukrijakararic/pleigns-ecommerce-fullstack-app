import React from "react";
import Spinner from "react-bootstrap/Spinner";
import styles from "./LoadingSpinner.module.css";

export const LoadingSpinner = () => {
  return (
    <div className={styles.spinner}>
    <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
    </div>
  );
};
