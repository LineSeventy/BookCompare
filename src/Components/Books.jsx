import React, { useState } from 'react';
import { BookData } from './BooksData';
import styles from "../Styles/Book.module.css";
import { Link } from 'react-router-dom';

function Books() {
    const [dropCategory, setDropCategory] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(null);

    const uniqueCategories = [...new Set(BookData.map(book => book.category))];

    const filteredBooks = selectedCategory
        ? BookData.filter(book => book.category === selectedCategory)
        : BookData;

    return (
        <>
            <div className={styles.categoriesHeader}>
                <button onClick={() => setDropCategory(!dropCategory)}>
                   <p>Categories</p> 
                </button>
                <button onClick={() => setSelectedCategory(null)}>
                <p>Show All</p> 
                </button>
                {dropCategory && (
                    <div className={styles.dropdown}>
                        {uniqueCategories.map((category, index) => (
                            <h2
                                key={index}
                                onClick={() => setSelectedCategory(category)}
                                style={{
                                    cursor: "pointer",
                                    color: selectedCategory === category ? "blue" : "black",
                                }}
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
                            <img src={book.img} alt="" style={{ width: "100px" }} />
                            <h1 className={styles.text}>{book.name}</h1>
                            <p className={styles.text}>{book.desc}</p>
                            <Link to={`/Books/${book.id}`}>Compare</Link>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}

export default Books;
