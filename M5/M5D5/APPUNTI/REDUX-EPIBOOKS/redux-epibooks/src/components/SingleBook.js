import Card from "react-bootstrap/Card";
import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";


function SingleBook(props) {

  return (
    <>
      <Card className="m-2 max-h-3" style={{ width: "16rem", height: "38rem", background: "#CFCFCF" }}>
        <Card.Img className="img-fluid" variant="top" src={props.img} />
        <Card.Body>
          <Card.Text className="text-dark">Title: {props.title}</Card.Text>
          <Card.Text className="text-dark">
            Category: {props.category}
          </Card.Text>
          <Card.Text className="text-secondary">
            Price: {props.price}€
          </Card.Text>
      </Card.Body>
      </Card>
      </>

  )
}

export default SingleBook;
