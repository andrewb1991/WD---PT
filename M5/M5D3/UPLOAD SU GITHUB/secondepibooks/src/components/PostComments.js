import React, {useState, useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function PostComments() {
  const [show, setShow] = useState(false);
  const [postcomment, setPostcomment] = useState([]);
  const [loading, setLoading] = useState(false);

  

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const postComments = async () => {
    setLoading(true)
    const data = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${singleComment.asin}`, {method: 'POST', headers: {
        "Content-type": "application/json",
        "Authorization":
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2RlOTQ3ODE2YWI2ODAwMTVhMjVmYjkiLCJpYXQiOjE2NzY2NTk0MzksImV4cCI6MTY3Nzg2OTAzOX0.SnRLThri9Aj6geIHDb98_cw0D1yxJHTx0dlPtdTvsPs"
      },})

      useEffect(() =>{
        postComments()
    }, []);

}



  return (
    <>
      <Button variant="outline-light" className="bg-warning" onClick={handleShow}>
        Add New Comment
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Comment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {/* qua va il form  
            commento e rate (numero da 0 a 5 compresi */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Back
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Submit Comment
            {/* invierà il post del form per aggiungere il commento */}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default PostComments