import Badge from 'react-bootstrap/Badge';
import React from 'react'

const MyBadge = (props) => {


  return (
    <Badge bg={props.bg}>{props.text}</Badge>
  )
}

export default MyBadge