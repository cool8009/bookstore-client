import React from 'react';
import { useState, useEffect } from 'react';
import BookService from '../services/BooksService';
import AuthorService from '../services/AuthorService';
import { Button, Card, ListGroup} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; 

const BookCard = ({ key, book, onPurchaseClick}) => {
  const [author, setAuthor] = useState({});
  useEffect(() => {
    const getAuthorNameFromApi = async (id) => {
      await AuthorService.getAuthor(id)
        .then((author) => setAuthor(author));
      
    }
    getAuthorNameFromApi(book.authorId)
  }, [] )
  

  return (
    <div className="book-container">
      <Card className="flex-fill" style={{width: '15rem', height: '38rem', 
      alignments: 'center', marginLeft: '50px', marginTop: '50px'}}>
        <Card.Img variant="top" src={book.imageUrl} style={{width: '100%' , height: '15vw', objectFit: 'cover'}}/>
        <Card.Body styles={{display:'flex'}}>
        <Card.Title>{book.name}</Card.Title>

        <Card.Text>
          {book.description}
        </Card.Text>
        <ListGroup>
          <ListGroup.Item styles={{ marginTop: '20px' }}>By: {author.name} </ListGroup.Item>
        </ListGroup>
      </Card.Body>
      <Card.Footer>Price: {book.price} Left In Stock: {book.amountInStock} 
        <Button  variant="primary" onClick={ () => onPurchaseClick(book)}>Purchase</Button>
      </Card.Footer>
      </Card>
    </div>
  )
}

export default BookCard