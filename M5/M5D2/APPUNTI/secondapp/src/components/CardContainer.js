import React, {useState, useEffect} from 'react'
import NewCard from './NewCard'

const CardContainer = () => {
    const [data, setData ] = useState([])
    console.log(data)
    const [productId, setProductId] = useState(1)
    // console.log(productId)

    const nextProduct = () =>{
        setProductId(productId +1)
    }


    const getData = async () =>{
      const products = await fetch(`https://dummyjson.com/products/${productId}`) 
      const response = await products.json()
      setData(response)  
    }

    useEffect(()=>{
        getData()
    }, [productId])

  return (
    <div>
        <h1>
            CardContainer
        </h1>
       { data && <NewCard title={data.title} description={data.description} img={data.thumbnail}/> }
        <button onClick={nextProduct}>Prodotto Successivo</button>
    </div>
  )
}

export default CardContainer