import React from 'react';
import { useParams } from 'react-router-dom';
import { BookData } from './BooksData'; 

function BookIndividual() {
  const { Id } = useParams(); 


  const book = BookData.find((book) => book.id === parseInt(Id)); 
  

  if (!book) {
    return <div>Book not found!</div>;
  }

  return (
    <div>
      <h1>Book Detail for ID: {Id}</h1>
      <h2>{book.name}</h2>
      <p>{book.desc}</p>
      <img src={book.img} alt={book.name} style={{ width: "200px" }} />

    </div>
  );
}

export default BookIndividual;
