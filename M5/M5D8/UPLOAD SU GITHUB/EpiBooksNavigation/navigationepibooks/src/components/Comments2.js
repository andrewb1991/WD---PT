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

const Comments2 = (props) => {
  
  return (
    <>
      <Card className="m-2" style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Text className="text-primary">Author: {props.author}</Card.Text>
        <Card.Text className="text-secondary">
          Comment: {props.comment}
        </Card.Text>
        <Card.Text className="text-secondary">
          Rate: {props.rate}
        </Card.Text>
    </Card.Body>
    </Card>  
    </>
)
    
  }
  
  

export default Comments2