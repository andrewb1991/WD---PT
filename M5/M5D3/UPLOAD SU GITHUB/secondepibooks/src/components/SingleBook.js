import React from 'react'
import {useState} from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/esm/Button';

const SingleBook = (props) => {
const [selected, setSelected] = useState(false)
const toggleSelection = () => {
  setSelected(!selected)
}
  return (

      <Card className="m-2" style={{ width: '12rem'}} border={selected === true ? "danger" : "dark" }>
        <Card.Body>
        <Card.Img variant="top" src={props.img}/>
        <Card.Title >{props.title}</Card.Title>
        </Card.Body>
        <Button onClick={toggleSelection} variant='info'>Seleziona</Button>
      </Card>
        )
}

export default SingleBook