import './App.css';
import BookList from './components/BookList';
import { booksStateLoading } from './states/BooksState';
import { commentsStateLoading} from './states/CommentsState'
import {useSelector} from 'react-redux'

function App() {
  const booksLoading = useSelector(booksStateLoading)
  const commentsLoading = useSelector(commentsStateLoading)
  return (
    <div className="App">
   <BookList>
   </BookList>
    </div>
  );
}

export default App;
