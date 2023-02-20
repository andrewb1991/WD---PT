import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React, {useState, useEffect} from 'react'
import PostComments from './PostComments'

function CommentsModal(props) {
const [comments, setComments] = useState([]);
const [loading, setLoading] = useState(false);

console.log(comments)
  const fetchComments = async () => {
    setLoading(true)
    const data = await fetch(
      `https://striveschool-api.herokuapp.com/api/comments/${props.asin}`,
      {
        headers: {
          "Content-type": "application/json",
          "Authorization":
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2RlOTQ3ODE2YWI2ODAwMTVhMjVmYjkiLCJpYXQiOjE2NzY2NTk0MzksImV4cCI6MTY3Nzg2OTAzOX0.SnRLThri9Aj6geIHDb98_cw0D1yxJHTx0dlPtdTvsPs"
        },
      }
    );
    const response = await data.json();
    setComments(response);
    setLoading(false)
  };

  useEffect(() => {
    fetchComments();
  }, []);
 
  return (
    <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal.Dialog>
       {!loading && comments && comments.map((singleComment)=>{
        return (
        <>
         <Modal.Header closeButton>
          <Modal.Title>Comment</Modal.Title>
        </Modal.Header>

        <Modal.Body>
        <p>{singleComment.author}</p>
          <p>{singleComment.comment}</p>
          <p>Voto: {singleComment.rate}</p>
        </Modal.Body>

        </>    
        )

    
    })}
        <Modal.Footer>
          <Button onClick={()=> props.close(false)} variant="outline-secondary">Close</Button>
          <PostComments/>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}

export default CommentsModal;