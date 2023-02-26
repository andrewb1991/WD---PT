import Card from 'react-bootstrap/Card';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function SingleBook(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>

  
      <Card className='m-2' style={{ width: '18rem' }}>
        <Card.Img className='card-img-top' variant="top" src={props.img} />
        <Card.Body>
          <Card.Text className='text-primary'>
           Title: {props.title}
          </Card.Text>
          <Card.Text className='text-secondary'>Category: {props.category}</Card.Text>
          <Card.Text className='text-secondary'>Price: {props.price}€</Card.Text>
          <Button variant="outline-secondary" size='sm' onClick={handleShow}>
        View all comments
      </Button>

        </Card.Body>
    

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title className='text-primary text-sm'>Comments of {props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
         <p>Author: </p>
         <p>Comment:</p>
         <p>Rate: </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Add Comment</Button>
        </Modal.Footer>
      </Modal>
  
      </Card>
      </>
      )
  }

  export default SingleBook

