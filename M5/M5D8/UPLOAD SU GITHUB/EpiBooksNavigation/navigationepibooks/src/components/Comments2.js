import React from 'react'

const Comments2 = () => {
  return (
    <Card className="m-2" style={{ width: "18rem" }}>
    <Card.Body>
      <Card.Text className="text-primary">Author: {com.author}</Card.Text>
      <Card.Text className="text-secondary">
        Comment: {com.comment}
      </Card.Text>
      <Card.Text className="text-secondary">
        Rate: {com.rate}
      </Card.Text>
      <Card.Text className="text-secondary">
        elementId: {com.elementId}
      </Card.Text>
  </Card.Body>
  </Card>  )
}

export default Comments2