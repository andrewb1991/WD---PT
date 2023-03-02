import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import BookList from './components/BookList'
import Book from './components/Book';

function App() {
  return (
    <div className="App">

<BookList/>
<Book/>
</div>
  );
}

export default App;
