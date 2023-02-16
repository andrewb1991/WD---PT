import React, {useState, useEffect} from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Card from 'react-bootstrap/Card';
import useFetch from './useFetch';
import Button from 'react-bootstrap/esm/Button';
const BookList = () => {
  const {data, loading, error} = useFetch("https://striveschool-api.herokuapp.com/books")
  console.log(data, loading, error)
  const [books, setBooks] = useState(data);
  const [search, setSearch] = useState('');
  const [click, setClick] = useState(false)
  const CardClick = () => {setClick(current => !current)}
  useEffect( () => {
    console.log(click);
}, []);


  return (
    <div className='container'>
      <Form>
          <InputGroup className='my-3'>
            <Form.Control
              onChange={(e) => setSearch(e.target.value)}
              placeholder='Search Books'
            />
          </InputGroup>
        </Form>
      <div className='d-flex row justify-between'>

    { !loading && data && data.filter((item)=>{
        return search.toLowerCase() === ''
         ? item
         : item.title.toLowerCase().includes(search); 
  })
  .map((item, index) =>
    (<Card border={click ? "danger" : "primary"} className="m-2" style={{ width: '16rem' } } >
      <Card.Body>
        <Card.Img variant="top" src={item.img}/>
        <Card.Title onClick={CardClick}>Title: {item.title}</Card.Title>
      </Card.Body>
      {/* <Button variant='outline-danger mb-2' onClick={CardClick} */}
      {/* >Selected</Button> */}
    </Card>
    ))}


     </div>
   </div> 
)
}  
;
  

export default BookList