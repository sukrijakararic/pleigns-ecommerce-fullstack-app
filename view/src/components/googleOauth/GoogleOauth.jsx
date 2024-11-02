import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import styles from "./GoogleOauth.module.css";
import { AuthContext } from "../../utils/AuthContext";
import { useNavigate } from "react-router-dom";

export const GoogleOauth = () => {
  const { setLoggedIn } = useContext(AuthContext);
  const Navigate = useNavigate();

  const handleGoogleOauth = async () => {
    setLoggedIn(true);
    Navigate("/profile");
  };

  return (
    <Button variant="light" onClick={handleGoogleOauth}>
      <img
        className={styles.oauthIcons}
        src="\src\assets\google_icon.webp"
        alt="Icon of Google"
      />
    </Button>
  );
};
