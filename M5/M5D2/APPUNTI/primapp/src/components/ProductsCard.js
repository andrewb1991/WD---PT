import React, {useEffect, useState} from 'react'
import '../css/productscard.css'


const ProductsCard = () => {
    const [productData, setProductData] = useState([])
    console.log(productData)
    const getData = async () =>{
        const data = await fetch('https://dummyjson.com/products')
        return await data.json
     }
     useEffect(()=>{
    getData().then((res)=>{
    setProductData(res)
    })
    },[])
  return (
    <>
    
    </>
)
}

export default ProductsCard