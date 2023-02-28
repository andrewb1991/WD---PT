import React from 'react'
import Card from "react-bootstrap/Card";

const Book = (props) => {
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
    </>  )
}

export default Book