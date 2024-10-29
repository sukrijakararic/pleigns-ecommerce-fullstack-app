import React from "react";
import styles from "./Footer.module.css";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";


export const Footer = () => {
  return (
      <Navbar className="bg-body-tertiary" >
        <Container>
          <Navbar.Brand>Pleigns</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <p>Made with &lt;3 frustration &lt;3</p>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    
  );
};
