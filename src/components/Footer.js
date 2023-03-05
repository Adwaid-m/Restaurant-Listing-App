import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function Footer() {
  return (
    <div> <Card className="text-center" bg="dark" variant="dark" text='light'  >
    <Card.Header>Address</Card.Header>
    <Card.Body>
      <Card.Title>Kuthuparamba - KANNUR</Card.Title>
      <Card.Text>
        With supporting text below as a natural lead-in to additional content.
      </Card.Text>
      {/* <Button variant="primary">Go somewhere</Button> */}
    </Card.Body>
    <Card.Footer className="text-muted" >Copyright © 2022 Harley | Privacy Policy | Cookie Policy | By Nyx Solutions</Card.Footer>
  </Card></div>
  )
}

export default Footer