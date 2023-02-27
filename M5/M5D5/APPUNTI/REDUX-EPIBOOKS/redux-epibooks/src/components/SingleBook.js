import Card from "react-bootstrap/Card";
import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from 'react-bootstrap/Modal';
import {useSelector, useDispatch } from 'react-redux'
import {
  commentsState,
  commentsStateLoading,
  commentsStateError,
} from "../states/CommentsState";
import { getComments } from '../states/CommentsState'
import Comments from './Comments'

function SingleBook(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch()
  const isCommentsLoading = useSelector(commentsStateLoading);
    const allComments = useSelector(commentsState);
    const CommentsError = useSelector(commentsStateError);
  
    useEffect(() => {
      dispatch(getComments());
    }, [dispatch]);

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
          <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Comments of {props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {isCommentsLoading && allComments && allComments.map((com)=>{
            return (
              <Comments author={com.author} comment={com.comment} rate={com.rate}/>
              
              
              
              )        
          })}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      </Card.Body>
      </Card>
      </>

  )
}

export default SingleBook;
