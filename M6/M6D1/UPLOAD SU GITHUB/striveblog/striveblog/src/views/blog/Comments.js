import React from "react";
import useFetch from "../blog/useFetch";
import { useParams } from "react-router";

const Comments = (props) => {
const {blogpostId} = useParams()
const {data, loading, error} = useFetch("http://localhost:4040/BlogComments/")
console.log(data)
  return (
    <>
    {!loading && data && data.map((i, id)=>{
    return (
        <div>
        <ul key={blogpostId} props={i}>
            <li>{i.author}</li>
            <li>{i.comment}</li>
            <li>{i.rate}</li>
        </ul>
    </div>
        )
    })}
    
    </>
    )
}

export default Comments