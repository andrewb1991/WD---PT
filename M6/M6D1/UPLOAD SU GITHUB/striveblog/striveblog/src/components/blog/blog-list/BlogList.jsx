import React from "react";
import {useState, useEffect} from 'react'
import { Link } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import posts from "../../../data/posts.json";
import BlogItem from "../blog-item/BlogItem";
import useFetch from "../blog-item/useFetch";

const BlogList = props => {
  const {data, loading, error} = useFetch("http://localhost:3030/BlogPosts/")
console.log(data)

  return (
    <>
{loading && <h1>Loading Blog...</h1>}

    <Row>
      {!loading && data && data.map((post, i) => (
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
    </Row>
    </>  
  );
};

export default BlogList;
