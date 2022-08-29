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
    useEffect(() => {
        const setSearchResults = async () => {
            setSearchResultBook(location.state.authorSearchResults);
            setSearchResultAuthor(location.state.bookSearchResults);
        }
        setSearchResults()
    }, [])


    return (
        <div>
            <h2 style={{ textAlign: 'center', marginTop: '50px' }}> Authors:</h2>
            <CardGroup style={{ alignItems: 'center',
                justifyContent: 'center'}}>
                { searchResultAuthor.map((author, index) =>
                <AuthorCard key={index} author={author} />)}
             </CardGroup>

        </div>
    )
}

export default SearchComponent