import React from 'react'
import { useState, useEffect } from 'react';
import BookService from '../services/BooksService';
import AuthorService from '../services/AuthorService';
import {Link, useNavigate} from 'react-router-dom';
import { Button, Card, ListGroup} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; 


const AuthorCard = ({author}) => {
    const navigate = useNavigate();
    const navigateToAuthorPage = () => {
        navigate('/authorpage',{state:{author}});
    }
    
    useEffect(() => {
      //const getBooksForAuthor
    
     
    }, [])
    

    return (
    <div className="author-container">
      <Card className="flex-fill" style={{width: '15rem', height: '9rem', 
      alignments: 'center', marginLeft: '50px', marginTop: '50px'}}>
        <Card.Body styles={{display:'flex'}}>
        <Card.Title>{author.name}</Card.Title>
        
      </Card.Body>
      <Card.Footer>
        <Button  variant="primary" onClick={() => navigateToAuthorPage()}>To Author Page</Button>
      </Card.Footer>
      </Card>
    </div>
  )
}

export default AuthorCard