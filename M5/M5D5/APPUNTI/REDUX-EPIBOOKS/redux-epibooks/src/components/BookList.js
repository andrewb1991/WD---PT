import React, {useEffect} from 'react'
import {useSelector, useDispatch } from 'react-redux'
import {booksState, booksStateLoading, booksStateError} from '../states/BooksState'
import {getBooks} from '../states/BooksState'
import SingleBook from './SingleBook'


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
    {isBooksLoading && <h1 className='text-info'>Loading Books...</h1>}
    <div className='d-flex flex-wrap justify-content-center align-items-center'>
    {!isBooksLoading && allBooks && allBooks.map((book)=>{
        return (
            <SingleBook img={book.img} title={book.title} category={book.category} price={book.price}/>
            
            
            )
    }) }

    </div>
    </>
  )
}

export default BookList