import React from 'react';
import { useState, useEffect } from 'react';
import BookCard from './BookCard'
import CardGroup from 'react-bootstrap/CardGroup';
import BookService from '../services/BooksService'

const Store = ({ books, handleUpdateBooks, authors}) => {

  const onPurchaseClick = async (book) => {
    if (localStorage.getItem('token') == null){
      alert('Must be signed in to purchase.')
      return;
    }
    await BookService.buyBook(book.id)
      .then(alert(`Thank you for your purchase of ${book.name}` ))
      .then((book) => handleUpdateBooks(book.id + 1, book))
      .catch((error) => alert(error));
  }

  const getAuthorForBookCard = (book) => {
    let foundAuthor = authors.find(author => author.id === book.authorId);
    return foundAuthor.name;
  }

  return (
    <div className="store-container" style={{ textAlign: 'center' }}>
      <h1 marginTop="30px">Welcome to our store</h1>
      <div>
       <CardGroup style={{ alignItems: 'center',
        justifyContent: 'center'}}>
        { books.map((book, index) =>
        <BookCard key={index} book={book} onPurchaseClick={onPurchaseClick} getAuthorForBookCard={getAuthorForBookCard}/>)}
       </CardGroup>

      </div>

    </div>
  )
}

export default Store