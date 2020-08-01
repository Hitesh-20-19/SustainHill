import React from 'react'
import {Navbar,Container} from 'react-bootstrap'
import img from "../shopping-cart.png";
const NavBar = (props) => {
    return (
      <div>
        <Navbar expand="lg" variant="light" bg="light">
          <Container>
            <Navbar.Brand href="#">SustainHill</Navbar.Brand>
            <img src={img} alt="icon" onClick={props.handleDrawer} style={{cursor:"pointer"}}/>
          </Container>
        </Navbar>
      </div>
    );
}

export default NavBar
