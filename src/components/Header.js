import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
function Header() {
  return (
    <div><>
   
   
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <img
            alt=""
            src="https://www.dlf.pt/dfpng/maxpng/284-2840464_restaurant-menu-png.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
           HARLEY CAFE
        </Navbar.Brand>
      </Container>
    </Navbar>
  </></div>
  )
}

export default Header