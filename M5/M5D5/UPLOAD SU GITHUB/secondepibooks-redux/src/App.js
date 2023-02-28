import './App.css';
import BookList from './components/BookList';
import Book from './components/Book';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  return (

    <Container>
    <Row>
      <Col sm={8}><BookList/>
      <Book/></Col>
      <Col sm={4}>sm=4</Col>
    </Row>
  </Container> 
  );
}

export default App;
