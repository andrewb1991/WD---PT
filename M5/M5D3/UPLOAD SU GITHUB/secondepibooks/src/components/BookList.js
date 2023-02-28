import React, {useState, useEffect} from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Card from 'react-bootstrap/Card';
import useFetch from './useFetch';
import Button from 'react-bootstrap/esm/Button';
import SingleBook from './SingleBook'
import MoonLoader from 'react-spinners/MoonLoader'
import AlertBook from './AlertBook';

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
{loading && <MoonLoader/>}
{error && <AlertBook/> }
    { !loading && data && data.filter((item)=>{
        return search.toLowerCase() === ''
         ? item
         : item.title.toLowerCase().includes(search); 
  })
  .map((item, index) =>
    (<SingleBook key={index} title={item.title} price={item.price} img={item.img} asin={item.asin} />
    ))}


     </div>
   </div> 
)
}  
;
  

export default BookList