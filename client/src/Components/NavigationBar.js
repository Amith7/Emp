import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaSistrix } from "react-icons/fa";


function NavigationBar() {
  return (
    <div>
      <Navbar bg="dark" variant="dark" className="">
        <Container>
          <Navbar.Brand >
            <h4 className="h4 text-decoration: none;">Admin Dashboard</h4>
          </Navbar.Brand>
          <Nav className="ml-auto ">
            <Nav.Link href="#home"><FaSistrix/></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavigationBar;
