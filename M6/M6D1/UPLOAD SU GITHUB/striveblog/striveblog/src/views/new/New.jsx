import React, { useCallback, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./styles.css";
const NewBlogPost = props => {
  const [newtitle, setTitle] = useState("");
  const [newcategory, setCategory] = useState("");
  const [newcover, setCover] = useState("");
  const [newcontent, setContent] = useState("");
  const [message, setMessage] = useState("");
  const [readTimeValue, setReadTimeValue] = useState("");
  const [readTimeUnit, setReadTimeUnit] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [authorAvatar, setAuthorAvatar] = useState("");

  const handleChange = useCallback(value => {
    setContent(value);
    setTitle(value);
    setCategory(value)
    setCover(value)
    setReadTimeValue(value)
    setReadTimeUnit(value)
    setAuthorName(value)
    setAuthorAvatar(value)
  });

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("http://localhost:3030/BlogPosts/", {
        method: "POST",
        body: JSON.stringify({
          title: newtitle,
          category: newcategory,
          cover: newcover,
          content: newcontent,
          // readTimeValue: readTimeValue,
          // readTimeUnit: readTimeUnit,
          // authorName: authorName,
          // authorAvatar: authorAvatar,
        }),
      });
      let resJson = await res.json();
      if (res.status === 200) {
        setTitle("");
        setCategory("");
        setCover("");
        setContent("");
      } else {
        setMessage("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };


  return (
    <Container className="new-blog-container">
      <Form className="mt-5">
        <Form.Group controlId="blog-form" className="mt-3">
          <Form.Label>Titolo</Form.Label>
          <Form.Control type="text" value={newtitle} onChange={(e)=> setTitle(e.target.value)} size="lg" placeholder="Inserisci Titolo..." />
          <Form.Label>Categoria</Form.Label>
          <Form.Control type="text" value={newcategory} onChange={(e)=> setCategory(e.target.value)} size="lg" placeholder="inserisci Categoria..." /> <Form.Label>Cover</Form.Label>
          <Form.Control type="text" value={newcover} onChange={(e)=> setCover(e.target.value)} size="lg" placeholder="Inserisci URL Immagine" />
          {/* <Form.Label>Lettura in: </Form.Label>
          <Form.Control type="text" value={readTimeValue} onChange={(e)=> setReadTimeValue(e.target.value)} size="lg" placeholder="inserisci Categoria..." />          <Form.Label>Unità</Form.Label>
          <Form.Control type="text" value={readTimeUnit} onChange={(e)=> setReadTimeUnit(e.target.value)} size="lg" placeholder="inserisci Categoria..." />          <Form.Label>Nome dell'Autore</Form.Label>
          <Form.Control type="text" value={authorName} onChange={(e)=> setAuthorName(e.target.value)} size="lg" placeholder="inserisci Categoria..." />          <Form.Label>Avatar dell'autore</Form.Label>
          <Form.Control type="text" value={authorAvatar} onChange={(e)=> setAuthorAvatar(e.target.value)} size="lg" placeholder="inserisci Categoria..." /> */}
          <Form.Control type="text" value={newcontent} onChange={(e)=> setContent(e.target.value)} size="lg" placeholder="Inserisci il contenuto del BlogPost" />
          
        </Form.Group>

        {/* <Form.Group controlId="blog-category" className="mt-3">
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
          <ReactQuill value={content} onChange={(e)=> setContent(e.target.value)} className="new-blog-content" />
        </Form.Group> */}
        <Form.Group className="d-flex mt-3 justify-content-end">
          <Button type="reset" size="lg" variant="outline-dark">
            Reset
          </Button>
          <Button onClick={handleSubmit}
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
