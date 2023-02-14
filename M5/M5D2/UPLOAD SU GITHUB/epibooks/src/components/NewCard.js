import Card from 'react-bootstrap/Card';
import {useState, useEffect} from 'react'
function NewCard(props) {
  let [books, setBooks] = useState([])

  useEffect(()=>{
    fetch('/horror.json')
        .then(res => res.json())
        .then((result) => {
            setBooks(result);
            console.log(result)
        },
        (err)=>{
            console.warn(err)
        })
}, [])


  return (
    <div className='container'>
    <div className='d-flex row justify-between'>

      {books.map((u)=>(<Card className="m-3" style={{ width: '16rem' } }>
       
        <Card.Body>
        <Card.Img variant="top" src={u.img}/>
        <Card.Title >Title: {u.title}</Card.Title>
        <Card.Text>Category: {u.category}</Card.Text>
        <Card.Text>Price: {u.price}</Card.Text>


        </Card.Body>

      </Card>
        ))}
    </div>
    </div>
  );
}

export default NewCard;