import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";
import { AuthContext } from "../../context-api/AuthContext";
import { useContext } from "react";


import { logout } from "../../utils/utils";

export const Navigation = () => {
  const handleLogout = async () => {
    await logout();
    localStorage.removeItem("loggedIn");
    setLoggedIn(false);
  };
  const { loggedIn, setLoggedIn } = useContext(AuthContext);
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>
          <Link to="/" className={styles.navLink}>
            Pleigns
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <Link to="/contact" className={styles.navLink}>
                Contact
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/about" className={styles.navLink}>
                About
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/products" className={styles.navLink}>
                Aircraft
              </Link>
            </Nav.Link>
            {loggedIn === true ? (
              <>
                <Nav.Link>
                  <Link onClick={handleLogout} className={styles.navLink}>
                    Logout
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/profile" className={styles.navLink}>
                    Profile
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/cart">
                    <img
                      title="Cart"
                      src="/luggage-cart-solid-svgrepo-com.svg"
                      className={styles.cartIcon}
                      alt="Cart"
                    />
                  </Link>
                </Nav.Link>
              </>
            ) : (
              <Nav.Link>
                <Link to="/login" className={styles.navLink}>
                  Login
                </Link>
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
