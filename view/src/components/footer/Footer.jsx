import React from "react";
import styles from "./Footer.module.css";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';



export const Footer = () => {
  return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Pleigns</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Made with love &lt;3
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
