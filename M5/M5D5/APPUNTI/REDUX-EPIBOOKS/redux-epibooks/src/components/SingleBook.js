import Card from "react-bootstrap/Card";
import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Comments from "./Comments";
import { getComments } from "../states/CommentsState";
import Modal from "react-bootstrap/Modal";


function SingleBook(props) {
  
  return (
    <>
      <Card className="m-2" style={{ width: "18rem" }}>
        <Card.Img className="card-img-top" variant="top" src={props.img} />
        <Card.Body>
          <Card.Text className="text-primary">Title: {props.title}</Card.Text>
          <Card.Text className="text-secondary">
            Category: {props.category}
          </Card.Text>
          <Card.Text className="text-secondary">
            Price: {props.price}€
          </Card.Text>
          <Card.Text className="text-secondary">
            Asin: {props.asin}
          </Card.Text>
      </Card.Body>
      </Card>
      </>

  )
}

export default SingleBook;
