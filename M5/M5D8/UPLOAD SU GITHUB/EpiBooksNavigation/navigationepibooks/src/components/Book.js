import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useParams } from "react-router-dom";
import Comments from "./Comments";
import { Link } from "react-router-dom";

const Book = (props) => {

  return (
    <>
    <Card className="hover-shadow m-2" style={{ width: '14rem' }} id="CardBook">
      <Card.Img variant="top" src={props.img} id="CardImg" />
      <Card.Body>
            <span className="text-gray-500">{props.category}</span>
        <Card.Title className="text-success">{props.title}</Card.Title>
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
