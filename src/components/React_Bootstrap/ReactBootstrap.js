// React Bootstrap
import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ReactBootstrap = () => {
  return (
    <Card>
        <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
        </Card.Text>
        <Button>Register</Button>
        </Card.Body>
    </Card>
  )
}

export default ReactBootstrap
