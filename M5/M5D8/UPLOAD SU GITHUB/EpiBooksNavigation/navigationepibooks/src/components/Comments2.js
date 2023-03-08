import Card from "react-bootstrap/Card";
import Form from 'react-bootstrap/Form';
import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector} from "react-redux";
import {commentsStateError, commentsStateLoading, commentsState} from "../states/CommentsState"
import {getComments} from "../states/CommentsState"
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Link
} from "react-router-dom";

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
        {/* <Card.Text className="text-secondary">
          elementId: {props.elementId}
        </Card.Text> */}
    </Card.Body>
    </Card>  
    </>
)
    
  }
  
  

export default Comments2