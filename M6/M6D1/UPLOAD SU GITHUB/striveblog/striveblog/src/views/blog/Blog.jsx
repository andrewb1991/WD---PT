import React, { useEffect, useState } from "react";
import { Container, Image } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector} from "react-redux";
import BlogAuthor from "../../components/blog/blog-author/BlogAuthor";
import BlogLike from "../../components/likes/BlogLike";
import { getBlogs } from "../../states/BlogState";
import { blogsState, blogsStateLoading, blogsStateError } from "../../states/BlogState";
import posts from "../../data/posts.json";
import "./styles.css";
const Blog = () => {
  const {id} = useParams()
  const dispatch = useDispatch()
  const isBlogsLoading = useSelector(blogsStateLoading)
  const allBlogs = useSelector(blogsState)
  console.log(id)
  useEffect(()=>{
  dispatch(getBlogs())
  }, [dispatch, id])

  return (
    <>
    {!isBlogsLoading && allBlogs && allBlogs.map((blog)=>{
        return (
          <>
          <div className="blog-details-root">
            <Container>
              <Image className="blog-details-cover" src={blog.cover} fluid />
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
        </>
          
        )})}</>);
      
    
    
  // const [blog, setBlog] = useState({});
  // const [loading, setLoading] = useState(true);
  // const params = useParams();
  // const {id} = useParams()
  // const navigate = useNavigate();
  // const data = useFetch(`http://localhost:3030/BlogPosts/${id}`)
  // console.log(data)
  // const blog = data.find(post => post._id.toString() === id);

  // useEffect(() => {
    // const { id } = params;

  //   if (data) {
  //     setBlog(data);
  //     setLoading(false);
  //   } else {
  //     navigate("/404");
  //   }
  // }, []);

  // if (loading) {
  //   return <div>Loading</div>;
  // } else 
  // })
  
  // }
};

export default Blog;
