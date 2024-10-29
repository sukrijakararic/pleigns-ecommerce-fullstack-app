import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import styles from './Navigation.module.css';

export const Navigation = () => {

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand><Link to="/" className={styles.navLink}>Pleigns</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className={styles.navLink}>Contact</Nav.Link>
            <Nav.Link className={styles.navLink}>Sign In</Nav.Link>
            <Nav.Link><Link to="/about" className={styles.navLink}>About</Link></Nav.Link>
            <Nav.Link><Link to="/profile" className={styles.navLink}>Profile</Link></Nav.Link>
            <Nav.Link><img title="Cart" src="src\assets\luggage-cart-solid-svgrepo-com.svg" className={styles.cartIcon} alt='Cart' /></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
