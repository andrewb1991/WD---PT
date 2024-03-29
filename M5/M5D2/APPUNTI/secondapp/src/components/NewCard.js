import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function NewCard(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.description}
        </Card.Text>

      </Card.Body>
    </Card>
  );
}

export default NewCard;