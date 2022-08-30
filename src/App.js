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
import CustomNavbar from './components/CustomNavbar';



function App() {
  
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
      <CustomNavbar authors={authors} books={books}
          setAuthorSearchResults={setAuthorSearchResults} setBookSearchResults ={setBookSearchResults}
            isUserValidated={isUserValidated} onLogOutClick={onLogOutClick} authorSearchResults={authorSearchResults} bookSearchResults={bookSearchResults}/>
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
