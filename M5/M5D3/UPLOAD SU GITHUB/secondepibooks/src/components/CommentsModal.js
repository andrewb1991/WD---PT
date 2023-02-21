import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React, {useState, useEffect} from 'react'
import MoonLoader from 'react-spinners/MoonLoader'


function CommentsModal(props) {
const [comments, setComments] = useState([]);
const [loading, setLoading] = useState(false);
const [newcomments, setNewComment] = useState({})
const [deletecomment, setDeleteComment] = useState()
const [value, setValue] = useState(0);
const min = '';
const max = 5;

console.log(comments)
  const fetchComments = async () => {
    setLoading(true)
    const data = await fetch(
      `https://striveschool-api.herokuapp.com/api/comments/${props.asin}`,
      {
        headers: {
          "Content-type": "application/json",
          "Authorization":
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2RlOTQ3ODE2YWI2ODAwMTVhMjVmYjkiLCJpYXQiOjE2NzcwMDYwMDksImV4cCI6MTY3ODIxNTYwOX0.WlUxzv7J52r_mi47zAgZNns8jtXwC1C8gQeQwUXKLXA"
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


  const postComment = async (e)=>{
    e.preventDefault()
    setLoading(true)
    let newcomment = {
      comment: e.target[0].value,
      rate: e.target[1].value,
        
    }
    console.log(newcomment);
    return await fetch(`https://striveschool-api.herokuapp.com/api/comments/${props.asin}`,
    {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "Authorization":
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2RlOTQ3ODE2YWI2ODAwMTVhMjVmYjkiLCJpYXQiOjE2NzcwMDYwMDksImV4cCI6MTY3ODIxNTYwOX0.WlUxzv7J52r_mi47zAgZNns8jtXwC1C8gQeQwUXKLXA"
      },
        body: JSON.stringify(newcomment)
    }).then(res=>res.json()            
      .then(
      (res)=>{
          let newcomments = [comments, newcomment]
          setNewComment(newcomments)
          e.target[0].value = ""
      },
      (err)=>{}
  )
  // .then((res)=> {
  //   window.location.reload(true)
  // })
  )

}


  
  const handleChange = event => {
    const value = Math.max(min, Math.min(max, Number(event.target.value)));
    setValue(value);
  }

const deleteComment = async (id)=>{
try{
  return await fetch(`https://striveschool-api.herokuapp.com/api/comments/${id}`,
    {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
        "Authorization":
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2RlOTQ3ODE2YWI2ODAwMTVhMjVmYjkiLCJpYXQiOjE2NzcwMDYwMDksImV4cCI6MTY3ODIxNTYwOX0.WlUxzv7J52r_mi47zAgZNns8jtXwC1C8gQeQwUXKLXA"
      }
    }
    )
    .then((res)=>{
      window.location.reload(true)
    })
  }
    catch(error){
    console.log(error)
    }
}

  return (
    <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal.Dialog>
      {loading && <MoonLoader/>}
       {!loading && comments && comments.map((singleComment)=>{
        return (
        <>
         <Modal.Header>
          <Modal.Title>Comment</Modal.Title>
        </Modal.Header>

        <Modal.Body>
        <p className='text-primary'>Autore: {singleComment.author}</p>
          <p>{singleComment.comment}</p>
          <p className='text-info'>Voto: {singleComment.rate}</p>
          <Button variant='outline-danger' onClick={() => deleteComment(singleComment._id)}>Delete</Button>
        </Modal.Body>
        </>    
        )

    
    })}
        <Modal.Footer>

        <form onSubmit={postComment}>
          <h3>Add New Comment</h3>
          <input type="text" name="comment" placeholder='New comment' required />
          <input type="number" name="rate" placeholder='Rate' value={value} onChange={handleChange} required />
          <Button variant='outline-primary' type='submit'>Add</Button>
        </form>
          <Button onClick={()=> props.close(false)} variant="outline-secondary">Close</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}

export default CommentsModal;