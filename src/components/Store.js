import React from 'react';
import { useState, useEffect } from 'react';
import BookCard from './BookCard'
import BooksService from '../services/BooksService'

const Store = () => {
  const [ books, setBooks ] = useState([]);
  useEffect(() => {
    const getBooks = async () => {
        await BooksService.getAllBook().then((books) => setBooks(books));     
      // setBooks(booksFromServer);
    }
    getBooks();
  }, [])
  
  return (
    <div>
      { books.map((book, index) =>
      <BookCard key={index} book={book}/>)}

    </div>
  )
}

export default Store