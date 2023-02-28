import React from "react";
import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/esm/Button";
import CommentsModal from "./CommentsModal";

const SingleBook = (props) => {
  const [selected, setSelected] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false)
  // console.log(comments);

  const toggleSelection = () => {
    setSelected(!selected);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  }



  return (
    <>
    <Card
      className="m-2"
      style={{ width: "12rem" }}
      border={selected === true ? "danger border border-4" : "dark border border-4"}
    >
      <Card.Body>
        <Card.Img variant="top" src={props.img} />
        <Card.Title className="text-primary">{props.title}</Card.Title>
        <Card.Text className="text-warning">Price: {props.price}€</Card.Text>
      </Card.Body>
      <Button onClick={toggleSelection} variant="outline-success" size="sm" className="mb-1">
        Seleziona
      </Button>
      <Button onClick={toggleModal} variant="outline-dark" size="sm" className="mb-1">
        Commenti
      </Button>
    </Card>
    { isModalOpen && <CommentsModal close={setIsModalOpen} asin={props.asin}/>}
    </>
  );
};

export default SingleBook;
