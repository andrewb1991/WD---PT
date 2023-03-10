import Card from "react-bootstrap/Card";
import Form from 'react-bootstrap/Form';
import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector} from "react-redux";
import {commentsStateError, commentsStateLoading, commentsState} from "../states/CommentsState"
import {getComments} from "../states/CommentsState"
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Link
} from "react-router-dom";
import NavBar from './NavBar';
import Comments2 from "./Comments2";
const Comments = (rops) => {
const dispatch = useDispatch()
  const isCommentsLoading = useSelector(commentsStateLoading)
  const allComments = useSelector(commentsState)

  useEffect(()=>{
    dispatch(getComments())
  }, [dispatch])

  const {bookId} = useParams()


  return (
    <>
    <NavBar/>

  {!isCommentsLoading && bookId && allComments && allComments.map((com)=>{
  return (
    <>
    <Comments2 author={com.author} comment={com.comment} rate={com.rate}/>
    </>
    )
  
  })}
  
  </>

      
       
        
  
)

}

export default Comments