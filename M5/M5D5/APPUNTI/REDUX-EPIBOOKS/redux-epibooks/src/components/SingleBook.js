import Card from "react-bootstrap/Card";
import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useSelector, useDispatch } from "react-redux";
import {
  commentsState,
  commentsStateLoading,
  commentsStateError,
} from "../states/CommentsState";
import { getComments } from "../states/CommentsState";

function SingleBook(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
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
          <Button variant="secondary" onClick={handleShow}>
            View all comments
          </Button>
          {!isCommentsLoading &&
            allComments &&
            allComments.map((comment) => {
              return (
                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>{comment.author}</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <p></p>
                    <p></p>
                    <p></p>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Back
                    </Button>
                  </Modal.Footer>
                </Modal>
              );
            })}
        </Card.Body>
      </Card>
      )
    </>
  );
}
//   {!isBooksLoading && allBooks && allBooks.map((book)=>{
//     return (
//         <SingleBook img={book.img} title={book.title} category={book.category} price={book.price}/>

//         )
// }) }

export default SingleBook;
