import React from "react";
import { getHello } from "../../utils/utils";
import { useEffect, useState } from "react";
import styles from "./Navigation.module.css";
import { Link } from "react-router-dom";

export const Navigation = () => {
  // below is an example of how to use the utils function and get a req from the server
  const [hello, setHello] = useState({});
  const makeHello = async () => {
    const data = await getHello();
    console.log(data);
    setHello(data);
  };

  useEffect(() => {
    makeHello();
  }, []);
  // ends here ^

  return (
    <nav className={styles.Navigation}>
      <div className={styles.leftNav}>
        <Link className={styles.navLink} to="/">
          Pleigns
        </Link>
        <Link className={styles.navLink} to="">
          Products
        </Link>
      </div>
      <div className={styles.rightNav}>
        <Link className={styles.navLink} to="">Log In</Link>
        <Link to="">
          <img
            className={styles.cartIcon}
            src="\src\assets\luggage-cart-solid-svgrepo-com.svg"
            alt=""
          />
        </Link>
      </div>
    </nav>
  );
};
