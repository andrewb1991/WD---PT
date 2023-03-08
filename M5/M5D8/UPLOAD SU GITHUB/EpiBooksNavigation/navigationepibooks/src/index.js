import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux'
import {combineReducers, configureStore} from '@reduxjs/toolkit'
import booksReducer from './states/BooksState'
import newbookReducer from './state/AddNewBookState'
const reducer = combineReducers({
booksStore: booksReducer, 
newbookReducer: newbookReducer,
})

const store = configureStore({reducer,
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <BrowserRouter>
       <Provider store={store}>
    <App />
      </Provider>
   </BrowserRouter>

  </React.StrictMode>
  

);


