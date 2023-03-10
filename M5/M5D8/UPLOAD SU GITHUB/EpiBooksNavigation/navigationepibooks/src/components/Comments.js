import React, { useEffect } from "react";
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
const Comments = (props) => {

const id = useParams()

const dispatch = useDispatch()
  const isCommentsLoading = useSelector(commentsStateLoading)
  const allComments = useSelector(commentsState)

  useEffect(()=>{
    dispatch(getComments())
    console.log(id)
  }, [dispatch, id])



  return (
    <>
    <NavBar/>
    {isCommentsLoading && <h3 className="text-dark ">Carimento Commenti...</h3>}
    <div className="d-flex flex-wrap justify-content-center align-items-center">
  {!isCommentsLoading && allComments && allComments.map((com, id)=>{
  return (
    <>
    <Comments2 key={id} author={com.author} comment={com.comment} rate={com.rate} elementId={com.elementId}/>
    </>
    )
  
  })}
  <div/>
  

       
        
  </div>
  </>
)

}

export default Comments