import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import Login from './components/Login';
import Register from './components/Register';
import Authors from './components/Authors';
import Store from './components/Store';
import { Nav, Navbar, Container, NavDropdown, NavbarBrand } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthorPage from './components/AuthorPage';



function App() {
  useEffect(() => {
    setIsUserValidated(localStorage.getItem('token') !== null); 
  }, [])
  

  const [isUserValidated, setIsUserValidated] = useState(false)
  
  return (

    <Router>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to={'/store'}> Book Store</Navbar.Brand>
          <Nav>
            <Nav.Link as={Link} to={'/store'}>Store</Nav.Link>
            <Nav.Link as={Link} to={'/authors'}>Authors</Nav.Link>
            { isUserValidated ? <Navbar.Text>Welcome Back!</Navbar.Text> 
            : <Nav.Link as={Link} to={'/'}>Log In</Nav.Link>} 
              
            
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        {/* <Route path='/' element={isUserValidated ?  <Store/> : <Login/>}/> */}
        <Route path='/' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/authors' element={<Authors/>}/>
        <Route path='/store' element={<Store/>}/>
        <Route path='/authorpage' element={<AuthorPage/>}/>
      </Routes>
    </Router>


  );
}

export default App;
