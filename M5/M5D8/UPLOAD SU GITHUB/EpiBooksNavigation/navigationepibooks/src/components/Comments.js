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
import Comments2 from "./Comments2";

const Comments = (props) => {

const dispatch = useDispatch()
  const isCommentsLoading = useSelector(commentsStateLoading)
  const allComments = useSelector(commentsState)
  const commentsStateError = useSelector(commentsStateError)

  useEffect(()=>{
    dispatch(getComments())
  }, [dispatch])


  return (
    <>
  {!isCommentsLoading && allComments && allComments.map((com)=>{
  
  return (
    <Comments2 key={com.elementId} author={com.author} rate={com.rate} comment={com.comment}/>
    
    )
  
  })}
  
  </>

      
       
        
  
)

}

export default Comments