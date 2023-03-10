import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";

const Book = (props) => {

  return (
    <>
    <Card className="hover-shadow" style={{ width: '18rem' }} id="CardBook">
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title variant="text-info">{props.title}</Card.Title>
        <Card.Text>{props.category}</Card.Text>
        <Card.Text>{props.price} €</Card.Text>
        <Link  to={`/comments/${props.asin}`}>
        <Button variant="success text-white">
         View comments
        </Button>
        </Link>
      </Card.Body>
    </Card>
    </>
  );
};

export default Book;
