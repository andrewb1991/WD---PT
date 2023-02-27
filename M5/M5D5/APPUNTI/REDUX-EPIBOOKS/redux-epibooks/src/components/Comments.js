import Card from "react-bootstrap/Card";
import React, { useState, useEffect } from "react";
import {useSelector, useDispatch } from 'react-redux'
import {
  commentsState,
  commentsStateLoading,
  commentsStateError,
} from "../states/CommentsState";
import { getComments } from '../states/CommentsState'


const Comments = (props) => {
    const dispatch = useDispatch()
    const isCommentsLoading = useSelector(commentsStateLoading);
      const allComments = useSelector(commentsState);
      const CommentsError = useSelector(commentsStateError);
    
      useEffect(() => {
        dispatch(getComments());
      }, [dispatch]);
  
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