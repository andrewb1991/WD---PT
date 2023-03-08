import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Link
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import BookList from './components/BookList'
import Book from './components/Book';
import Comments from './components/Comments';

function App() {
  return (
    <div className="App">
<Routes>
<Route path="/" element={<BookList><Book/></BookList>}/>
<Route path="/comments/:bookId" element={<Comments/>}/>

</Routes>
</div>
  );
}

export default App;
