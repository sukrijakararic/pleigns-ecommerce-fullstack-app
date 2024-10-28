import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navigation.module.css';

export const Navigation = () => {
  // below is an example of how to use the utils function and get a req from the server
  /*const [hello, setHello] = useState({});
  const makeHello = async () => {
    const data = await getHello();
    console.log(data);
    setHello(data);
  };

  useEffect(() => {
    makeHello();
  }, []); */
  // ends here ^

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand><Link to="/" className={styles.navLink}>Pleigns</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link><Link className={styles.navLink}>Contact</Link></Nav.Link>
            <Nav.Link><Link className={styles.navLink}>Sign In</Link></Nav.Link>
            <Nav.Link><Link className={styles.navLink}>About</Link></Nav.Link>
            <Nav.Link><img title="Cart" src="src\assets\luggage-cart-solid-svgrepo-com.svg" className={styles.cartIcon} alt='Cart' /></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
