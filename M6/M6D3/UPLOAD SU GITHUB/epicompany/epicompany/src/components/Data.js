import React from 'react'
import useFetch from '../useFetch'
import { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const Data = () => {
    const {data, loading, error} = useFetch("http://localhost:4040/DataBase")
    const [products, setProducts] = useState(data);
    console.log(data)
  return (
    <>
    <div className='container d-flex flex-col align-items-center'>
     {!loading && data && data.map((item)=>{
      return (
        <>
        <Card className={"m-1"}style={{ width: '18rem', margin: '3em' }}>
      <Card.Img variant="top" src={item.picture} />
      <Card.Body>
        <Card.Title>{item.name.first}, {item.name.last}</Card.Title>
        <Card.Text>EyeColor: {item.eyeColor}</Card.Text>
        <Card.Text>Balance: {item.balance}</Card.Text>
        <Card.Text>Company: {item.company}</Card.Text>
        <Card.Text>Address: {item.address}, email: {item.email}</Card.Text>
        <Card.Text>Greeting: {item.greeting}</Card.Text>
      </Card.Body>
    </Card>
        </>
        )
    })}
    </div>
    </>
  )
}

export default Data