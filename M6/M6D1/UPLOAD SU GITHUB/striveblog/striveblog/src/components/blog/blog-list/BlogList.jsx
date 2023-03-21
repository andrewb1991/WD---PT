import React from "react";
import {useState, useEffect} from 'react'
import { Link } from "react-router-dom";
import { Col, Container, Row, Image} from "react-bootstrap";
import posts from "../../../data/posts.json";
import BlogItem from "../blog-item/BlogItem";
import useFetch from "../blog-item/useFetch";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const BlogList = (props) => {
  const {data, loading, error} = useFetch("http://localhost:4040/BlogPosts/")
console.log(data)
const [search, setSearch] = useState('');
  const [click, setClick] = useState(false)
  return (
    <>
{loading && <h1>Loading Blog...</h1>} 
<Container>
<div className='container'>
      <Form>
          <InputGroup className='my-3'>
            <Form.Control
              onChange={(e) => setSearch(e.target.value)}
              placeholder='Search Blogs'
            />
          </InputGroup>
        </Form>
      <div className='d-flex row justify-between'>
    { !loading && data && data.filter((item)=>{
        return search.toLowerCase() === ''
         ? item
         : item.title.toLowerCase().includes(search); 
  })
  .map((post, i) => (
    <Col
      key={`item-${i}`}
      md={4}
      style={{
        marginBottom: 50,
      }}
    >
      <Link to={`/blog/${post._id}`}>
      <BlogItem key={post._id} {...post} />
      </Link>
    </Col>
  ))}
     </div>
   </div> 

    </Container>
    </>  
  );
};

export default BlogList;
