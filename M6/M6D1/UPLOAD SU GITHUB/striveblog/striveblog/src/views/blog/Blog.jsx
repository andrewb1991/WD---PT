import React, { useEffect, useState } from "react";
import { Container, Image } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import BlogAuthor from "../../components/blog/blog-author/BlogAuthor";
import BlogLike from "../../components/likes/BlogLike";
import posts from "../../data/posts.json";
import "./styles.css";
import useFetch from "../../components/blog/blog-item/useFetch";
import { post } from "../../../../../../APPUNTI/SERVEREPIBOOKS/routes/authors";
const Blog = props => {
  const [blog, setBlog] = useState({});
  const [loading, setLoading] = useState(true);
  const params = useParams();
  const {id} = useParams()
  const navigate = useNavigate();
  const data = useFetch(`http://localhost:3030/BlogPosts/${id}`)
  console.log(data)

  useEffect(() => {
    const { id } = params;
    const blog = posts.find(post => post._id.toString() === id);

    if (blog) {
      setBlog(blog);
      setLoading(false);
    } else {
      navigate("/404");
    }
  }, []);

  if (loading) {
    return <div>Loading</div>;
  } else {!loading && data.map((blog)=>{
    return (
      <div className="blog-details-root">
        <Container>
          <Image className="blog-details-cover" src={data.blog.cover} fluid />
          <h1 className="blog-details-title">{blog.title}</h1>

          <div className="blog-details-container">
            <div className="blog-details-author">
              <BlogAuthor {...blog.author} />
            </div>
            <div className="blog-details-info">
              <div>{blog.createdAt}</div>
              <div>{`lettura da ${blog.readTime.value} ${blog.readTime.unit}`}</div>
              <div
                style={{
                  marginTop: 20,
                }}
              >
                <BlogLike defaultLikes={["123"]} onChange={console.log} />
              </div>
            </div>
          </div>

          <div
            dangerouslySetInnerHTML={{
              __html: blog.content,
            }}
          ></div>
        </Container>
      </div>
    );
  
  })
  
  }
};

export default Blog;
