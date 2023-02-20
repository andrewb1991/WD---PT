import React, {useState, useEffect, useRef} from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function PostComments(props) {
  const [show, setShow] = useState(false);
  const [postcomment, setPostcomment] = useState([]);
  const [loading, setLoading] = useState(false);
  const min = 0;
  const max = 5;
  const post_comment = useRef(null);
  const post_rate = useRef(null);


  const [value, setValue] = useState(0);
  const handleChange = event => {
    const value = Math.max(min, Math.min(max, Number(event.target.value)));
    setValue(value);
  };
  const newcomment = {
"comment": post_comment,
"rate": post_rate,
"elementId": props.asin}

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const PostComments = async () => {
    setLoading(true)

    const data = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${props.asin}`, {method: 'POST', headers: {
        "Content-type": "application/json",
        "Authorization":
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2RlOTQ3ODE2YWI2ODAwMTVhMjVmYjkiLCJpYXQiOjE2NzY2NTk0MzksImV4cCI6MTY3Nzg2OTAzOX0.SnRLThri9Aj6geIHDb98_cw0D1yxJHTx0dlPtdTvsPs"
      },body: JSON.stringify(newcomment)})

      useEffect(() =>{
        PostComments()
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
            <h3>Inserisci il tuo commento</h3>
            <input type='text' placeholder='Nuovo commento' ref={post_comment}></input>
            <h3>Inserisci il tuo Rate</h3>
            <input type='number' value={value} placeholder='Rate It' onChange={handleChange} ref={post_rate}></input>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Back
          </Button>
          <Button variant="primary" onClick={PostComments}>
            Submit Comment
            {/* invierà il post del form per aggiungere il commento */}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default PostComments