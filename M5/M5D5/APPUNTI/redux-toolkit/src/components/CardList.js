import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { productsState, productsStateError, productsStateLoading } from '../states/ProductState'
import { getProducts } from '../states/ProductState'
import SingleCard from './SingleCard'


const CardList = () => {

    const dispatch = useDispatch()
    const isProductsLoading = useSelector(productsStateLoading)
    const allProducts = useSelector(productsState)
    const productsError = useSelector(productsStateError)
    useEffect(()=>{
        dispatch(getProducts())
    }, [dispatch])

  return (
    <>
    {isProductsLoading && <h1>Caricamento in corso...</h1>}
    <div className='d-flex flex-wrap justify-content-center align-items-center'>
        {!isProductsLoading && allProducts && allProducts.products?.map((product)=>{
        return (
            <SingleCard title={product.title} description={product.description}/>
            )
            
        })}

    </div>
    </>
  )
}

export default CardList