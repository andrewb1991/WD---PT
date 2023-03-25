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

const BlogList = (props) => {
  const [search, setSearch] = useState('');
  const [click, setClick] = useState(false)
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setPage] = useState(1);
  const limit = 1;
  const {data, loading, error} = useFetch(`http://localhost:4040/BlogPosts/`)
console.log(data)


  useEffect(() => {
    if(data){
      setTotalPages(data.totalPages)
    }
}, [data]);

const handlePrevClick = () => {
  setPage((prevPage) => prevPage - 1);
};

const handleNextClick = () => {
  setPage((prevPage) => prevPage + 1);
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
   {/* {(totalPages === 1) ? '' :
    <Pagination className='justify-content-center'>
        <Pagination.Prev 
          onClick={handlePrevClick} 
          disabled={currentPage === 1}
        />

        <Pagination.Item>{`${currentPage} of ${totalPages}`}</Pagination.Item>

        <Pagination.Next 
          onClick={handleNextClick} 
          disabled={currentPage === totalPages}
        />
    </Pagination>} */}
   <div>
    <Pagination className="justify-content-center">
      <Pagination.Prev />
      <Pagination.Item active>{1}</Pagination.Item>
      <Pagination.Next />
      </Pagination>
  </div>
    </Container>
  
    </>  
  );
};

export default BlogList;
