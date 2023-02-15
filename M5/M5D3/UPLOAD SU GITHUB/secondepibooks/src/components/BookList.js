import React, {useState} from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Card from 'react-bootstrap/Card';
import useFetch from './useFetch';

const BookList = () => {
  const {data, loading, error} = useFetch("https://striveschool-api.herokuapp.com/books")
  console.log(data, loading, error)
  const [books, setBooks] = useState(data);
  const [search, setSearch] = useState('');

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
    (<Card className="m-2" style={{ width: '16rem' } }>
      <Card.Body>
        <Card.Img variant="top" src={item.img}/>
        <Card.Title >Title: {item.title}</Card.Title>
      </Card.Body>
    </Card>
    ))}


     </div>
   </div> 
)
}  
;
  

export default BookList