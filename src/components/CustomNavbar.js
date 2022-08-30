import React from 'react'
import {useState, useEffect} from 'react'
import { Nav, Navbar, Container, Button, NavDropdown, NavbarBrand, Form } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';


const CustomNavbar = ({authors, books, setAuthorSearchResults, setBookSearchResults, authorSearchResults,  bookSearchResults, isUserValidated, onLogOutClick}) => {
    const navigate = useNavigate();
    const navigateToSearchResultPage = () => {
        navigate('/search',{state:{authorSearchResults, bookSearchResults, authors}});
        console.log('navigationstart')
    }
    const onSearchSubmit = (e) => {
        e.preventDefault()
        let { searchtext } = e.target.elements;
        if (!searchtext) {
          alert('Please insert search query')
          return
        }
        searchtext = searchtext.value
        sendSearch(searchtext)
    
      }
    
      const sendSearch = (searchtext) => {
        let authorResult = authors.filter(a => a.name.toLowerCase().includes(searchtext.toLowerCase()))
        let bookResult = books.filter(b => b.name.toLowerCase().includes(searchtext.toLowerCase()))
        setAuthorSearchResults(() => authorResult);
        setBookSearchResults(() => bookResult);
        navigateToSearchResultPage();
      }

  return (
    <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to={'/store'}> Book Store</Navbar.Brand>
          <Nav>
            <Nav.Link as={Link} to={'/store'}>Store</Nav.Link>
            <Nav.Link as={Link} to={'/authors'}>Authors</Nav.Link>
            { isUserValidated ? <Button onClick={ () => onLogOutClick()}>Log Out</Button> 
            : <Nav.Link as={Link} to={'/'}>Log In</Nav.Link>} 
          </Nav>
          <Form onSubmit={onSearchSubmit} className="d-flex">
            <Form.Control
              type="search"
              placeholder="
              Books Or Authors"
              className="me-2"
              aria-label="Search"
              id='searchtext'
            />
            <Button variant="outline-success" type="submit">Search</Button>
          </Form>
        </Container>
      </Navbar>
  )
}

export default CustomNavbar