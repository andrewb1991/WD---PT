import './App.css';
import BookList from './components/BookList';
import { booksStateLoading } from './states/BooksState';
import { commentsStateLoading} from './states/CommentsState'
import {useSelector} from 'react-redux'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Comments from './components/Comments';

function App() {
  const booksLoading = useSelector(booksStateLoading)
  const commentsLoading = useSelector(commentsStateLoading)
  return (
    <div className="App">
         <Container>
      <Row>
        <Col sm={8}>
          <BookList>
          </BookList>
        </Col>
        <Col sm={4}><Comments/></Col>
      </Row>
    </Container>
  );

    </div>
  );
}

export default App;
