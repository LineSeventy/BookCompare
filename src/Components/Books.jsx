import React, { useState, } from 'react';
import { BookData } from './BooksData';
import styles from "../Styles/Book.module.css"

import { Link } from 'react-router-dom';

function Books() {


    return (
        <>
        {/* <div><h1>Categories</h1></div> */}
            <section>

                <div className={styles.bookWrapper}>
                    {BookData.map((book, index) => (
                        <div key={index} className={styles.cardBook}>
                            <img src={book.img} alt="" style={{ width: "100px" }} />
                            <h1>{book.name}</h1>
                            <p>{book.desc}</p>
                            <Link to={`/Books/${book.id}`}>Compare</Link>
                        </div>
                    ))}
                </div>
            </section>

        </>
    );
}

export default Books;
