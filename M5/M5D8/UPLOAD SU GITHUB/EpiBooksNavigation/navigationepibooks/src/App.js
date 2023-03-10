import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Link
} from "react-router-dom";

import { useParams, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import BookList from './components/BookList'
import Book from './components/Book';
import Comments from './components/Comments'
import Comments2 from './components/Comments2';
import Login from './components/Login';
import NavBar from './components/NavBar'
function App() {

  const  bookId  = useLocation();
  return (
    <div className="App">
<Routes>
<Route path="/login" element={<Login><NavBar/></Login>}/>
<Route path="/" element={<BookList><NavBar/><Book/></BookList>}/>
<Route path="/comments/:bookId" element={<Comments path="bookId"><Comments2/></Comments>}/>
</Routes>
</div>
  );
}

export default App;
