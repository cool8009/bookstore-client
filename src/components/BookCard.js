import React from 'react';
import BookService from '../services/BooksService';
import { Button, Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; 

const BookCard = ({ key, book, onPurchaseClick}) => {
  

  return (
    <div className="book-container">
      <Card style={{width: '15rem', height: '30 rem', }}>
        <Card.Img variant="top" src={book.imageUrl} style={{width: '100px', height: '250px', objectFit: 'scale-down'}}/>
        <Card.Body>
        <Card.Title>{book.name}</Card.Title>
        <Card.Text>
          {book.description}
        </Card.Text>
        <Button variant="primary" onClick={ () => onPurchaseClick(book)}>Purchase</Button>
      </Card.Body>
      <Card.Footer>Price: {book.price} Left In Stock: {book.amountInStock} </Card.Footer>
      </Card>

{/* 
      <h2>{book.id}</h2>
      <h2>{book.name}</h2>
      <h2>{book.description}</h2>
      <h2>{book.price}</h2>
      <h2>{book.amountInStock}</h2>
      <img src={book.imageUrl} alt={book.name}></img>

      <Button >Purchase</Button> */}
    </div>
  )
}

export default BookCard