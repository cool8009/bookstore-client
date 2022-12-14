import React from 'react';
import { useState, useEffect } from 'react';
import BookService from '../services/BooksService';
import AuthorService from '../services/AuthorService';
import { Button, Card, ListGroup} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; 

const BookCard = ({ key, book, onPurchaseClick, getAuthorForBookCard}) => {
  const [author, setAuthor] = useState('');
  useEffect(() => {
      if (typeof(getAuthorForBookCard) === 'function'){
        setAuthor(getAuthorForBookCard(book))
      }
      else {
        setAuthor(getAuthorForBookCard)
      }
  }, [] )
  

  return (
    <div className="book-container">
      <Card className="flex-fill" style={{width: '15rem', height: '40rem', 
      alignments: 'center', marginLeft: '50px', marginTop: '50px'}}>
        <Card.Img variant="top" src={book.imageUrl} style={{width: '100%' , height: '15vw', objectFit: 'cover'}}/>
        <Card.Body styles={{display:'flex'}}>
        <Card.Title>{book.name}</Card.Title>

        <Card.Text>
          {book.description}
        </Card.Text>
        <ListGroup>
          <ListGroup.Item styles={{ marginTop: '20px' }}>By: {author} </ListGroup.Item>
        </ListGroup>
      </Card.Body>
      <Card.Footer>Price: {book.price} Left In Stock: {book.amountInStock} 
        { typeof(onPurchaseClick) === 'function' && <Button  variant="primary" onClick={ () => onPurchaseClick(book)}>Purchase</Button>}
      </Card.Footer>
      </Card>
    </div>
  )
}

export default BookCard