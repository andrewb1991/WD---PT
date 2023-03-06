import Card from "react-bootstrap/Card";
import Form from 'react-bootstrap/Form';
import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import CommentsState from "../states/CommentsState";


const Comments = (props) => {
    const {bookId} = useParams()
console.log(bookId)


  return (
  
      <Card className="m-2" style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Text className="text-primary">Author: {props.author}</Card.Text>
          <Card.Text className="text-secondary">
            Comment: {props.comment}
          </Card.Text>
          <Card.Text className="text-secondary">
            Rate: {props.rate}
          </Card.Text>
          <Card.Text className="text-secondary">
            elementId: {props.elementId}
          </Card.Text>
      </Card.Body>
      </Card>

      
      
       
        
  
)

}

export default Comments