import React from 'react'
import { useState, useEffect } from 'react'
import useFetch from './useFetch'
import SingleProduct from './SingleProduct'

const Products = () => {
    const {data, loading, error} = useFetch("https://epicode-crud-api.onrender.com/products/")
  const [products, setProducts] = useState(data);
  console.log(data)}
  return (
    <div className='container'>
   
</div>
)




export default Products