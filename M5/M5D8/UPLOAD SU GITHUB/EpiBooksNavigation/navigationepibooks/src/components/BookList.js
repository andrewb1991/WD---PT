import { Navbar } from '@material-tailwind/react'
import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch } from 'react-redux'
import {booksState, booksStateLoading, booksStateError} from '../states/BooksState'
import {getBooks} from '../states/BooksState'
import Book from './Book'
import NavBar from './NavBar'
import PulseLoader from 'react-spinners/MoonLoader'
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
    <NavBar/>
    {isBooksLoading && <div className='container d-flex flex-col align-items-center mt-5'>
      <h1 className="text-success ">
      Loading Books...</h1>
      <PulseLoader className="content-center"color="#1deb4b"/>
      </div>
      
      }
    <div className='d-flex flex-wrap justify-content-center align-items-center'>
{!isBooksLoading && allBooks && allBooks.map((book)=>{
return (
  <>
  <Book img={book.img} title={book.title} price={book.price} category={book.category}asin={book.asin}/>
  </>
  )
})}
</div>

    
  </>
  )
}

export default BookList