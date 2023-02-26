import React, {useEffect} from 'react'
import {useSelector, useDispatch } from 'react-redux'
import {booksState, booksStateLoading, booksStateError} from '../states/BooksState'
import {getBooks} from '../states/BooksState'
import SingleBook from './SingleBook'
import { getComments } from '../states/CommentsState'
import { commentsState, commentsStateLoading, commentsStateError } from '../states/CommentsState'
import Comments from './Comments'

const BookList = () => {
    
    const dispatch = useDispatch()
    const isCommentsLoading = useSelector(commentsStateLoading);
    const allComments = useSelector(commentsState);
    const CommentsError = useSelector(commentsStateError);
  
    useEffect(() => {
      dispatch(getComments());
    }, [dispatch]);
    const isBooksLoading = useSelector(booksStateLoading)
    const allBooks = useSelector(booksState)
    const booksError = useSelector(booksStateError)
    useEffect(()=>{
        dispatch(getBooks())
    }, [dispatch])

  return (
    <>
    {isBooksLoading && <h1 className='text-info'>Loading Books...</h1>}
    <div className='d-flex flex-wrap justify-content-center align-items-center'>
    {!isBooksLoading && allBooks && allBooks.map((book)=>{
        return (
            <SingleBook img={book.img} title={book.title} category={book.category} price={book.price} asin={book.asin}/>
            
            
            
            )
      {!isCommentsLoading && allComments && allComments.map((com)=>{
        return (
          <Comments props={com.elementId}/>

          )
      
      })}
    }) }

    </div>
    </>
  )
}

export default BookList