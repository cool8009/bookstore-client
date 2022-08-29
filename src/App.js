import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Login from './components/Login';
import Register from './components/Register';
import Authors from './components/Authors';
import Store from './components/Store';
import SearchComponent from './components/SearchComponent';
import { Nav, Navbar, Container, NavDropdown, NavbarBrand, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthorPage from './components/AuthorPage';
import { Button } from 'react-bootstrap';
import AuthorService from './services/AuthorService';
import BookService from './services/BooksService';



function App() {
  // const navigate = useNavigate();
  // const navigateToSearchResultPage = () => {
  //   navigate('/search',{state:{authorSearchResults, bookSearchResults}});
  // }
  useEffect(() => {
    setIsUserValidated(localStorage.getItem('token') !== null); 
    const getBooks = async () => {
      console.log('first')
      await BookService.getAllBook().then((books) => setBooks(books));
      console.log('after')
     
    // setBooks(booksFromServer);
    }
    const getAuthors = async () => {
      await AuthorService.getAuthors()
        .then((authors) => setAuthors(authors))
    }
    getAuthors();    
    getBooks();
  }, [])

  const [isUserValidated, setIsUserValidated] = useState(false)
  const [authorSearchResults, setAuthorSearchResults] = useState([])
  const [bookSearchResults, setBookSearchResults] =  useState([])
  const [books, setBooks ] = useState([]);
  const [authors, setAuthors ] = useState([]);
  
  const onLogOutClick = () => {
    localStorage.removeItem('token');
    setIsUserValidated(false);
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

  const sendSearch = async (searchtext) => {
    let authorResult = authors.filter(a => a.name === searchtext)
    let bookResult = books.filter(b => b.name === searchtext)
    setAuthorSearchResults(authorResult);
    setBookSearchResults(bookResult);
    // navigateToSearchResultPage();
    
  }

  const handleUpdateBooks = (index, book) => {
    const newBooks = [...books];
    newBooks[index] = book;
    setBooks(newBooks);
  }


  return (

    <Router>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to={'/store'}> Book Store</Navbar.Brand>
          <Nav>
            <Nav.Link as={Link} to={'/store'}>Store</Nav.Link>
            <Nav.Link as={Link} to={'/authors'}>Authors</Nav.Link>
            { isUserValidated ? <Button onClick={ () => onLogOutClick()}>Log Out</Button> 
            : <Nav.Link as={Link} to={'/'}>Log In</Nav.Link>} 
          </Nav>
          <Form onSearchSubmit={onSearchSubmit} className="d-flex">
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
      <Routes>
        {/* <Route path='/' element={isUserValidated ?  <Store/> : <Login/>}/> */}
        <Route path='/' element={<Login setIsUserValidated={setIsUserValidated}/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/authors' element={<Authors authors={authors} />}/>
        <Route path='/store' element={<Store books={books} handleUpdateBooks={handleUpdateBooks} authors={authors}/>}/>
        <Route path='/authorpage' element={<AuthorPage/>}/>
        <Route path='/search' element={<SearchComponent/>}/>
      </Routes>
    </Router>


  );
}

export default App;
