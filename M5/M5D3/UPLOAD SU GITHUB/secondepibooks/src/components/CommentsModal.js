import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React, {useState, useEffect} from 'react'


function CommentsModal(props) {
const [comments, setComments] = useState([]);
const [loading, setLoading] = useState(false);
const [newcomments, setNewComment] = useState({})


console.log(comments)
  const fetchComments = async () => {
    setLoading(true)
    const data = await fetch(
      `https://striveschool-api.herokuapp.com/api/comments/${props.asin}`,
      {
        headers: {
          "Content-type": "application/json",
          "Authorization":
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2RlOTQ3ODE2YWI2ODAwMTVhMjVmYjkiLCJpYXQiOjE2NzY5OTgzMTgsImV4cCI6MTY3ODIwNzkxOH0.HjKJQSjL8bFmSl0KUDHWAb0CcbuHni15dgLJBhF_KXM"
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


  const postComment = (e)=>{
    e.preventDefault()
    let newcomment = {
      comment: e.target[0].value,
      elementId: props.asin, 
      rate: e.target[1].value,
        
    }
    console.log(newcomment);
    fetch(`https://striveschool-api.herokuapp.com/api/comments/`,
    {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "Authorization":
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2RlOTQ3ODE2YWI2ODAwMTVhMjVmYjkiLCJpYXQiOjE2NzY5OTgzMTgsImV4cCI6MTY3ODIwNzkxOH0.HjKJQSjL8bFmSl0KUDHWAb0CcbuHni15dgLJBhF_KXM"
      },
        body: JSON.stringify(newcomment)
    }).then(res=>res.json()            
      .then(
      (res)=>{
          let newcomments = [comments, newcomment]
          setNewComment(newcomments)
          //pulisco il form
          e.target[0].value = ""
      },
      (err)=>{}
  ))

}

  const [value, setValue] = useState(0);
  const min = '';
  const max = 5;
  const handleChange = event => {
    const value = Math.max(min, Math.min(max, Number(event.target.value)));
    setValue(value);
  }



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

        <form onSubmit={postComment}>
          <h3>Add New Comment</h3>
          <input type="text" name="comment" placeholder='New comment' required />
          <input type="number" name="rate" placeholder='Rate' value={value} onChange={handleChange} required />
          <Button variant='outline-warning' type='submit'>Add</Button>
        </form>
          <Button onClick={()=> props.close(false)} variant="outline-secondary">Close</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}

export default CommentsModal;