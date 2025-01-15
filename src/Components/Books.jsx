import React, { useState } from 'react';
import { BookData } from './BooksData';
import styles from "../Styles/Book.module.css";
import Modal from './modal';

function Books() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedBook, setSelectedBook] = useState(null); 

    const openModal = (book) => {
        setSelectedBook(book); 
        setIsModalOpen(true);
    };
    const closeModal = () => {
        setSelectedBook(null); 
        setIsModalOpen(false);
    };

    return (
        <>
        <div><h1>Categories</h1></div>
            <section>

                <div className={styles.bookWrapper}>
                    {BookData.map((book, index) => (
                        <div key={index} className={styles.cardBook}>
                            <img src={book.img} alt="" style={{ width: "100px" }} />
                            <h1>{book.name}</h1>
                            <p>{book.desc}</p>
                            <button onClick={() => openModal(book)}>Compare</button>
                        </div>
                    ))}
                </div>
            </section>
            {isModalOpen && selectedBook && (
                <div className={`${styles.modalOverlay} ${isModalOpen ? styles.show : ''}`}>
                    <Modal book={selectedBook} closeModal={closeModal} />
                </div>
            )}
        </>
    );
}

export default Books;
