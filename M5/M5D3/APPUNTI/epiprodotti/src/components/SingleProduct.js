import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useState, useEffect } from 'react';

function SingleProduct(props) {
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>
           {props.description}
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>{props.category}</ListGroup.Item>
          <ListGroup.Item>{props.price}</ListGroup.Item>
        </ListGroup>
        <Card.Body>
        </Card.Body>
      </Card>
    );
  }
  
  export default SingleProduct;