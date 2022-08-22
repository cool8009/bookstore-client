import React from 'react'

const BookCard = ({book}) => {
  return (
    <div>
      <h2>{book.id}</h2>
      <h2>{book.name}</h2>
      <h2>{book.description}</h2>
      <h2>{book.price}</h2>
      <h2>{book.amountInStock}</h2>
      <img src={book.imageUrl} alt={book.name}></img>
    </div>
  )
}

export default BookCard