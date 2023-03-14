import React, { useCallback, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./styles.css";
const NewBlogPost = (props) => {
  const [text, setText] = useState("");
  const [formData, setFormData] = useState({});
  const handleChange = useCallback((value) => {
    setText(value);
  });

  const dataToPost = {
    category: formData.category,
    title: formData.title,
    cover: formData.cover,
    readTime: {
      unit: formData.unit,
      time: formData.time,
    },
    author: {
      name: formData.name,
      avatar: formData.avatar,
    },
    content: formData.content,
  };
  console.log(dataToPost)

  const fetchPost = async(e)=>{
    e.preventDefault();
    await fetch("http://localhost:3030/BlogPosts/", {
    method: "POST", 
    headers: {
    "Content-Type": "application/json"
    },
    body: JSON.stringify(dataToPost)
  })
  }

  const handleContentChange = (value) =>{
    setFormData({
    ...formData,
    content: value
    })
  }
  return (
    <Container className="new-blog-container">
      <Form className="mt-5" onSubmit={fetchPost}>
        <Form.Group controlId="blog-form" className="mt-3">
          <Form.Label>Titolo</Form.Label>
          <Form.Control
            size="lg"
            placeholder="Title"
            onChange={(e) =>
              setFormData({
                ...formData,
                title: e.target.value,
              })
            }
          />
        </Form.Group>
        <Form.Group controlId="blog-form" className="mt-3">
          <Form.Label>Cover</Form.Label>
          <Form.Control
            size="lg"
            placeholder="Cover"
            onChange={(e) =>
              setFormData({
                ...formData,
                cover: e.target.value,
              })
            }
          />
        </Form.Group>
        <Form.Group controlId="blog-form" className="mt-3">
          <Form.Label>Category</Form.Label>
          <Form.Control
            size="lg"
            placeholder="Category"
            onChange={(e) =>
              setFormData({
                ...formData,
                category: e.target.value,
              })
            }
          />
        </Form.Group>
        <Form.Group controlId="blog-form" className="mt-3">
          <Form.Label>Time</Form.Label>
          <Form.Control
            size="lg"
            placeholder="Time"
            onChange={(e) =>
              setFormData({
                ...formData,
                time: e.target.value,
              })
            }
          />
        </Form.Group>
        <Form.Group controlId="blog-form" className="mt-3">
          <Form.Label>Unit</Form.Label>
          <Form.Control
            size="lg"
            placeholder="Title"
            onChange={(e) =>
              setFormData({
                ...formData,
                unit: e.target.value,
              })
            }
          />
        </Form.Group>
        <Form.Group controlId="blog-form" className="mt-3">
          <Form.Label>Author Name</Form.Label>
          <Form.Control
            size="lg"
            placeholder="Title"
            onChange={(e) =>
              setFormData({
                ...formData,
                name: e.target.value,
              })
            }
          />
        </Form.Group>
        <Form.Group controlId="blog-form" className="mt-3">
          <Form.Label>Author Avatar</Form.Label>
          <Form.Control
            size="lg"
            placeholder="Title"
            onChange={(e) =>
              setFormData({
                ...formData,
                avatar: e.target.value,
              })
            }
          />
        </Form.Group>

        <Form.Group controlId="blog-category" className="mt-3">
          <Form.Label>Categoria</Form.Label>
          <Form.Control size="lg" as="select">
            <option>Categoria 1</option>
            <option>Categoria 2</option>
            <option>Categoria 3</option>
            <option>Categoria 4</option>
            <option>Categoria 5</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="blog-content" className="mt-3">
          <Form.Label>Contenuto Blog</Form.Label>
          <ReactQuill
            onChange={handleContentChange}
            className="new-blog-content"
          />
        </Form.Group>
        <Form.Group className="d-flex mt-3 justify-content-end">
          <Button type="reset" size="lg" variant="outline-dark">
            Reset
          </Button>
          <Button
            type="submit"
            size="lg"
            variant="dark"
            style={{
              marginLeft: "1em",
            }}
          >
            Invia
          </Button>
        </Form.Group>
      </Form>
    </Container>
  );
};

export default NewBlogPost;
