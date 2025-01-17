import React, { useState } from "react";
import { BookData } from "./BooksData";
import styles from "../Styles/Book.module.css";
import { Link } from "react-router-dom";

function Books() {
  const [dropCategory, setDropCategory] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const uniqueCategories = [...new Set(BookData.map((book) => book.category))];

  const filteredBooks = selectedCategory
    ? BookData.filter((book) => book.category === selectedCategory)
    : BookData;

  return (
    <>
      <div className={styles.categoriesHeader}>
        <button
          className={styles.categoryButton}
          onClick={() => setDropCategory(!dropCategory)}
        >
          Categories
        </button>
        <button
          className={styles.categoryButton}
          onClick={() => setSelectedCategory(null)}
        >
          Show All
        </button>
        {dropCategory && (
          <div className={styles.dropdown}>
            {uniqueCategories.map((category, index) => (
              <h2
                key={index}
                onClick={() => {
                  setSelectedCategory(category);
                  setDropCategory(false); 
                }}
                className={
                  selectedCategory === category
                    ? styles.activeCategory
                    : styles.category
                }
              >
                {category}
              </h2>
            ))}
          </div>
        )}
      </div>
      <section>
        <div className={styles.bookWrapper}>
          {filteredBooks.map((book, index) => (
            <div key={index} className={styles.cardBook}>
              <img src={book.img} alt={book.name} className={styles.bookImage} />
              <h1 className={styles.text}>{book.name}</h1>
              <p className={styles.text}>{book.desc}</p>
              <Link to={`/Books/${book.id}`} className={styles.compareLink}>
                Compare
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Books;
