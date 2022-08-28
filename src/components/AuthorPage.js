import React from 'react'
import { useState, useEffect, useCallback } from 'react'
import BookService from '../services/BooksService';
import AuthorService from '../services/AuthorService';
import { Badge, Card, CardGroup, ListGroup} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import {useLocation} from 'react-router-dom';
import MapComponent from './MapComponent';
import BookCard from './BookCard';




const AuthorPage = () => {
    const location = useLocation();
    const [authorBooks, setAuthorBooks] = useState([]);
    useEffect(() => {
        const getBooksForCurrentAuthor = async () => {
            await BookService.getBooksForAuthorId(location.state.author.id)
                .then((books) => setAuthorBooks(books))
                .catch((error) => console.log(error))
            }
            getBooksForCurrentAuthor()
    }, [])
    
   
    


  return (
    <div>
        <h1 >
            <Badge style={{ margin: '0 auto', display: 'block', borderStyle: 'none'}} bg="secondary">
                {location.state.author.name}
            </Badge>
        </h1>
        <h2 style={{ textAlign: 'center' }}> Author's Home Town:</h2>
        <MapComponent lat={location.state.author.homeLatitude} lon={location.state.author.homeLongitude}>
        </MapComponent>
        <h2 style={{ textAlign: 'center', marginTop: '50px' }}> Author's Books:</h2>
        <CardGroup style={{ alignItems: 'center',
        justifyContent: 'center'}}>
            { authorBooks.map((book, index) =>
            <BookCard key={index} book={book} onPurchaseClick={null}/>)}
        </CardGroup>
    </div>
  )
}

export default AuthorPage