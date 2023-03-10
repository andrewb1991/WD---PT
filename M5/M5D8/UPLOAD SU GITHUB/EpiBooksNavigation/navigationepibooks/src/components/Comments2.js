import Card from "react-bootstrap/Card";
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Link
} from "react-router-dom";
import {commentsStateError, commentsStateLoading, commentsState} from "../states/CommentsState"
import {getComments} from "../states/CommentsState"
import { useParams } from "react-router-dom";

const Comments2 = (bookId) => {
  
  return (
   
    <>
      <Card className="m-2" style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Text className="text-primary">Author: {bookId.author}</Card.Text>
        <Card.Text className="text-secondary">
          Comment: {bookId.comment}
        </Card.Text>
        <Card.Text className="text-secondary">
          Rate: {bookId.rate}
        </Card.Text>
        <Card.Text className="text-secondary">
          elementId: {bookId.elementId}
        </Card.Text>
    </Card.Body>
    </Card>  
    </>
)
    
  }
  
  

export default Comments2