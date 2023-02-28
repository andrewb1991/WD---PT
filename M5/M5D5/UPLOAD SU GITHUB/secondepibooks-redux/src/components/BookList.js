import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch } from 'react-redux'
import {booksState, booksStateLoading, booksStateError} from '../states/BooksState'
import {getBooks} from '../states/BooksState'
import Book from './Book'


const BookList = () => {
  const dispatch = useDispatch()
  const isBooksLoading = useSelector(booksStateLoading)
  const allBooks = useSelector(booksState)
  const booksError = useSelector(booksStateError)

  useEffect(()=>{
    dispatch(getBooks())
  }, [dispatch])
  return (
  <>
    {isBooksLoading && <h1 className="text-dark ">Carimento Libri...</h1>}
    <div className='d-flex flex-wrap justify-content-center align-items-center'>
{!isBooksLoading && allBooks && allBooks.map((book)=>{
return (
  <Book img={book.img} title={book.title} price={book.price} asin={book.asin}/>
  )
})}
</div>

    
  </>
  )
}

export default BookList