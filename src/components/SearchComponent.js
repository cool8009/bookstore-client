import React from 'react'
import { useState, useEffect, useCallback } from 'react'
import { Badge, Card, CardGroup, ListGroup} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import {useLocation} from 'react-router-dom';
import AuthorCard from './AuthorCard'
import BookCard from './BookCard';



const SearchComponent = () => {
    const location = useLocation();
    const [searchResultBook, setSearchResultBook] = useState([]);
    const [searchResultAuthor, setSearchResultAuthor] = useState([]);
    const [authors, setAuthors] = useState([]);
    useEffect(() => {
        const setSearchResults = () => {
            setSearchResultBook(() => location.state.bookSearchResults);
            setSearchResultAuthor(() => location.state.authorSearchResults);
            setAuthors(() => location.state.authors);
        }
        setSearchResults()
    }, [location.state.bookSearchResults, location.state.authorSearchResults, location.state.authors])
    
    const getAuthorForBookCard = (book) => {
        let foundAuthor = authors.find(author => author.id === book.authorId);
        return foundAuthor.name;
      }

    return (
        <div>
            <h2 style={{ textAlign: 'center', marginTop: '50px' }}> Authors:</h2>
            <CardGroup style={{ alignItems: 'center',
            justifyContent: 'center'}}>
                { searchResultAuthor.map((author, index) =>
                <AuthorCard key={index} author={author} />)}
            </CardGroup>
            <h2 style={{ textAlign: 'center', marginTop: '50px' }}> Books:</h2>
            <CardGroup style={{ alignItems: 'center',
            justifyContent: 'center'}}>
                { searchResultBook.map((book, index) =>
                <BookCard key={index} book={book} getAuthorForBookCard={getAuthorForBookCard} />)}
             </CardGroup>

        </div>
    )
}

export default SearchComponent