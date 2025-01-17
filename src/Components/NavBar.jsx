import React, { useState, useRef, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styles from "../Styles/Navbar.module.css";
import { BookData } from "./BooksData";

function NavBar() {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const searchBarRef = useRef(null);
  const navigate = useNavigate();

  const handleSearchToggle = () => {
    setIsSearchVisible((prev) => !prev);
    setSearchQuery("");
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        searchBarRef.current &&
        !searchBarRef.current.contains(event.target)
      ) {
        setIsSearchVisible(false);
      }
    };

    if (isSearchVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSearchVisible]);

  const filteredBooks = BookData.filter((book) =>
    book.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleBookClick = (bookId) => {
    navigate(`/Books/${bookId}`);
    setIsSearchVisible(false);
  };

  return (
    <>
      <header className={styles.header}>
        <nav className={styles.navbar}>
          <div className={styles.navLeft}>
            <NavLink to="/User" className={styles.navLink}>
              User Profile
            </NavLink>
            <button
              className={styles.searchToggle}
              onClick={handleSearchToggle}
            >
              Search
            </button>
          </div>
          <div className={styles.navRight}>
            <NavLink to="/Books" className={styles.navLink}>
              Books
            </NavLink>
            <NavLink to="/Home" className={styles.navLink}>
              Home
            </NavLink>
            <NavLink to="/About" className={styles.navLink}>
              About
            </NavLink>
          </div>
        </nav>
      </header>

      {isSearchVisible && (
        <div className={styles.searchBarOverlay}>
          <div className={styles.searchBar} ref={searchBarRef}>
            <input
              type="text"
              placeholder="Search books..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={styles.searchInput}
            />
            {searchQuery && (
              <div className={styles.searchResults}>
                {filteredBooks.length > 0 ? (
                  filteredBooks.map((book) => (
                    <div
                      key={book.id}
                      onClick={() => handleBookClick(book.id)}
                      className={styles.searchResult}
                    >
                      {book.name}
                    </div>
                  ))
                ) : (
                  <p className={styles.noResults}>No results found.</p>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default NavBar;
