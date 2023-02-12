import React, {useState, useEffect} from 'react'
import NewCard from './NewCard'


const LatestRelease = () => {
    const [data, setData ] = useState([])
    // console.log(data)
    
    const getData = async (url) =>{
        const books = await fetch('/fantasy.json') 
        const response = await books.json()
        console.log(response)
        setData(response)  
      }
  
      useEffect(()=>{
          getData()
      }, [])

  return (
<div>
       {data && <NewCard asin={data.asin} title={data.title} description={data.category} img={data.img}/>}
</div>


  )
}

export default LatestRelease
