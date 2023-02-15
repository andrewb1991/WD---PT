import React from 'react'
import Card from 'react-bootstrap/Card';

const SingleBook = ({props}) => {
console.log(props.title)
  return (

      <Card className="m-2" style={{ width: '12rem'}}>
        <Card.Body>
        <Card.Img variant="top" src={props.img}/>
        <Card.Title >{props.title}</Card.Title>
        </Card.Body>
      </Card>
        )
}

export default SingleBook