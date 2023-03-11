import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {HiSearchCircle, HiUser, HiOutlineBookOpen} from 'react-icons/hi'
import NavDropdown from 'react-bootstrap/NavDropdown';
import {
    BrowserRouter as Router,
    Switch,
    Routes,
    Route,
    Link
  } from "react-router-dom";

function BasicExample() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
</svg>

        <Navbar.Brand href="#home">EpiBooks</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/"><Link to={`/`}/><Button className="btn-success"><HiUser/>Login</Button></Nav.Link>
            <Nav.Link href="/booklist"><Link to={`/booklist`}/><Button className="btn-success"><HiOutlineBookOpen/>Home</Button></Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Form className="d-flex max-h-7">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button className="btn-success"><HiSearchCircle/>
            </Button>
          </Form>
      </Container>
    </Navbar>
  );
}

export default BasicExample;