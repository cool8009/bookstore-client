import React from 'react'
import { useState, useEffect } from 'react'
import { CardGroup } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import AuthorCard from './AuthorCard';
import BookService from '../services/BooksService';
import AuthorService from '../services/AuthorService';

const Authors = ({authors}) => {
  return (
    <div>
       <CardGroup style={{ alignItems: 'center',
        justifyContent: 'center'}}>
        { authors.map((author, index) =>
        <AuthorCard key={index} author={author} />)}
       </CardGroup>


    </div>
  )
}

export default Authors