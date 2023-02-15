import React from 'react'
import Card from 'react-bootstrap/Card';
import useFetch from './useFetch';
import {useState} from 'react'


const BookList = () => {
  const {data, loading, error} = useFetch("https://striveschool-api.herokuapp.com/books")
  console.log(data, loading, error)

  const [titolo, setTitolo] = useState('')
  const avviaRicerca = (e) =>{
    e.preventDefault()
    console.log(titolo)
   
  }



  const result = (e) =>{
    setTitolo(e.target.value)
     // console.log(e.target.value)
  }



  return (
    <div className='container'>
      <form onSubmit={avviaRicerca}> 
      <input type='text/' required value ={titolo} onChange={result}/>
    <button type='submit' onChange={result}>Esegui Ricerca</button>
      </form>
    <div className='d-flex row justify-between'>
  
    { !loading && data && data.map((u)=>(<Card className="m-2" style={{ width: '12rem' } }>
        <Card.Body>
        <Card.Img variant="top" src={u.img}/>
        <Card.Title >Title: {u.title}</Card.Title>
        </Card.Body>
      </Card>
        ))}

    {/* { !loading && data && data.filter((item)=> item.title.toLowerCase().includes(titolo.toLowerCase()))} */}
    </div>
    </div>
  );
}
export default BookList