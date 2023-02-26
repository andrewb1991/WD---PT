import React, {useState, useEffect} from 'react'
import { useSelector, useDispatch } from "react-redux";
import {
  commentsState,
  commentsStateLoading,
  commentsStateError,
} from "../states/CommentsState";
import { getComments } from "../states/CommentsState";
const Comments = (props) => {    
  return (
    <div>
    
            <p>{props.author}</p>
            
            
            
            
            
            
    
</div>
 
  )
}

export default Comments