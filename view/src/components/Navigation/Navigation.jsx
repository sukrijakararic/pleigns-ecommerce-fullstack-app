import React from "react";
import { getHello } from "../../utils/utils";
import { useEffect, useState } from "react";
import styles from "./Navigation.module.css";
import { Link } from "react-router-dom";

export const Navigation = () => {
  const [hello, setHello] = useState({});

  const makeHello = async () => {
    const data = await getHello();
    console.log(data);
    setHello(data);
  };

  useEffect(() => {
    makeHello();
  }, []);

  return (
    <nav className={styles.Navigation}>
      <div className={styles.leftNav}>
        <h4>Pleigns</h4>
      </div>
      <div className={styles.rightNav}>
        <h4>Log In</h4>
        <img
          className={styles.cartIcon}
          src="\src\assets\luggage-cart-solid-svgrepo-com.svg"
          alt=""
        />
      </div>
    </nav>
  );
};
