import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import styles from "./GoogleOauth.module.css";
import { AuthContext } from "../../context-api/AuthContext";
import { serverUrlGoogle } from "../../utils/utils";
import google_icon from "../../public/google_icon.webp";

export const GoogleOauth = () => {
  const { setLoggedIn } = useContext(AuthContext);

  const handleGoogleOauth = async () => {
    window.location.href = `${serverUrlGoogle}`;
    setLoggedIn(true);
  };

  return (
    <Button variant="light" onClick={handleGoogleOauth}>
      <img
        className={styles.oauthIcons}
        src={google_icon}
        alt="Icon of Google"
      />
    </Button>
  );
};
