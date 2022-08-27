import React from 'react'
import { useState, useEffect } from 'react'
import BookService from '../services/BooksService';
import AuthorService from '../services/AuthorService';
import { Badge, Card, ListGroup} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import {useLocation} from 'react-router-dom';


const AuthorPage = ({author}) => {
    const location = useLocation();
    useEffect(() => {
        BookService.getBooksForAuthorId(location.state.author.id)
    
      
    }, [])
    
  return (
    <div>
        <h1 >
            <Badge style={{ marginLeft: '42%', marginTop: '30px'}} bg="secondary">
                {location.state.author.name}
            </Badge>
        </h1>
        <h2 style={{ marginLeft: '50%', marginTop: '30px'}}> Her Home Town</h2>
        
    </div>
  )
}

export default AuthorPage