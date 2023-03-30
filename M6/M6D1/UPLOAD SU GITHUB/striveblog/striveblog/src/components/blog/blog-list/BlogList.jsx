import React from "react";
import {useState, useEffect} from 'react'
import { Link } from "react-router-dom";
import { Col, Container, Row, Image} from "react-bootstrap";
import BlogItem from "../blog-item/BlogItem";
import useFetch from "../blog-item/useFetch";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Pagination from 'react-bootstrap/Pagination';
import PageItem from 'react-bootstrap/PageItem'
import { FormComponent } from "./FormImage";

const BlogList = (props) => {
  const [search, setSearch] = useState('');
  const [click, setClick] = useState(false)
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(1);
  const limit = 3;
  const {data, loading, error} = useFetch(`http://localhost:4040/BlogPosts/?page=${page}&limit=${limit}`)
console.log(data)


  useEffect(() => {
    if(data){
      setPageCount(data.pageCount)
    }
}, [data]);

const handlePrevious = () => {
  setPage((page) =>{
    if(page === 1) return page;
  return page - 1});
};
 
const handleNext = () => {
  setPage((page) => {
    if(page === pageCount) return page;
  return page +1;
  });
};
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
   
   <div>
    <Pagination className="justify-content-center">
      <Pagination.Prev  onClick={handlePrevious} />
      <Pagination.Item active>{page}</Pagination.Item>
      <Pagination.Next onClick={handleNext} />
      </Pagination>
  </div>
    </Container>
  <FormComponent></FormComponent>
    </>  
  );
};

export default BlogList;
