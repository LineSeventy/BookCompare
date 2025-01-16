import React from 'react';
import { useParams } from 'react-router-dom';
import { BookData } from './BooksData'; 
import styles from "../Styles/Individual.module.css";
function BookIndividual() {
  const { Id } = useParams(); 


  const book = BookData.find((book) => book.id === parseInt(Id)); 
  

  if (!book) {
    return <div>Book not found!</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.card}>
      <img src={book.img} alt={book.name} style={{ width: "200px" }} /> 
      
      <h2>{book.name}</h2>
      <p>{book.desc}</p>
      <div className={styles.priceWrapper}>
        Price:
      <span>{book.shPrice} </span>
      <span>{book.lazPrice}</span>
      </div>
      <div >
        Links:
      <a href={book.shUrl} target="_blank" rel="noopener noreferrer">Shopee</a>
      <a href={book.lazUrl} target="_blank" rel="noopener noreferrer">Lazada</a>
      </div>
      </div>
    </div>
  );
}

export default BookIndividual;
