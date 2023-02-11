import React, {useState, useEffect} from 'react'
import NewCard from './NewCard'

const LatestRelease = () => {
    const [data, setData ] = useState([])
    console.log(data)
    const [bookID] = useState()
    // console.log(productId)
    
    const getData = async () =>{
        const books = await fetch('/fantasy.json') 
        const response = await books.json()
        setData(response)  
      }
  
      useEffect(()=>{
          getData()
      }, [bookID])

  return (
<div>
       {data && <NewCard asin={data.asin} title={data.title} description={data.category} img={data.img}/> }

</div>

  )
}

export default LatestRelease