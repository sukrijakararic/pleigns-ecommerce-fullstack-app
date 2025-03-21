import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import styles from "./GoogleOauth.module.css";
import { AuthContext } from "../../context-api/AuthContext";
import { GOOGLESERVERURL } from "../../utils/utils";

export const GoogleOauth = () => {
  const { setLoggedIn } = useContext(AuthContext);

  const handleGoogleOauth = async () => {
    window.location = `${GOOGLESERVERURL}`;
    setLoggedIn(true);
  };

  return (
    <Button variant="light" onClick={handleGoogleOauth}>
      <img
        className={styles.oauthIcons}
        src="/google_icon.webp"
        alt="Icon of Google"
      />
    </Button>
  );
};
