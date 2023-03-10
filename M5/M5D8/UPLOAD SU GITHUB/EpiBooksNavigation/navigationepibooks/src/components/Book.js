import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import {
//   Card,
//   CardHeader,
//   CardBody,
//   CardFooter,
//   Typography,
//   Button,
//   Tooltip,
//   IconButton,
// } from "@material-tailwind/react";
// import {
//   BanknotesIcon,
//   StarIcon,
//   HeartIcon,
//   WifiIcon,
//   HomeIcon,
//   TvIcon,
//   FireIcon,
// } from "@heroicons/react/24/solid";
import { useParams } from "react-router-dom";
import Comments from "./Comments";
import { Link } from "react-router-dom";

const Book = (props) => {
  const {bookId} = useParams()

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
