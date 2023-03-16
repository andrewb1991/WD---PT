import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App";
import { BrowserRouter } from 'react-router-dom';
import {combineReducers, configureStore} from '@reduxjs/toolkit'
import blogsReducer from './states/BlogState'
import { Provider } from "react-redux";

const reducer = combineReducers({
blogsStore: blogsReducer
})

const store = configureStore({reducer})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App/>
    </Provider>

  </React.StrictMode>
);


