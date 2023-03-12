import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector} from "react-redux";
import {commentsStateError, commentsStateLoading, commentsState} from "../states/CommentsState"
import {getComments} from "../states/CommentsState"
import NavBar from './NavBar';
import Comments2 from "./Comments2";
import PulseLoader from 'react-spinners/MoonLoader'

const Comments = () => {
const {id} = useParams()

const dispatch = useDispatch()

  const isCommentsLoading = useSelector(commentsStateLoading)
  const allComments = useSelector(commentsState)
  console.log(id)
  

  useEffect(()=>{
    dispatch(getComments(id))
  }, [dispatch, id])

  return (
    <>
    <NavBar/>
    {isCommentsLoading && <div className='container d-flex flex-col align-items-center mt-5'>
      <h1 className="text-success ">
      Loading Books...</h1>
      <PulseLoader className="content-center"color="#1deb4b"/>
      </div>}
      <div className='d-flex flex-wrap justify-content-center align-items-center'>
  {!isCommentsLoading && allComments && allComments.map((com)=>{
  return (
    <>
    <Comments2 author={com.author} comment={com.comment} rate={com.rate}/>
    </>
    )
  
  })}
  </div>
  </>

      
       
        
  
)

}

export default Comments