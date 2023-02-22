import React from 'react'
import { useState, useEffect } from 'react'
import useFetch from './useFetch'
import SingleProduct from './SingleProduct'

const Products = () => {
    const {data, loading, error} = useFetch("https://epicode-crud-api.onrender.com/products/")
  const [products, setProducts] = useState(data);
  console.log(data)
  return (
    <div className='container'>
    {!loading && data && data.filter((products) =>
    (<SingleProduct title={products.props.title} description={products.props.description} category={products.category} price={products.price} />
    ))}
</div>
)
}



export default Products