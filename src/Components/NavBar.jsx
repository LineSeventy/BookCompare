import React, { useState, useRef, useEffect } from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import "../Styles/Navbar.css";
import { BookData } from './BooksData';

function NavBar() {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const searchBarRef = useRef(null); // Ref for the search bar
  const navigate = useNavigate(); // Hook for navigation

  const handleSearchToggle = () => {
    setIsSearchVisible((prev) => !prev); // Toggle search bar visibility
    setSearchQuery(""); // Clear search query when toggling
  };

  // Close the search bar if clicked outside
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
      <header>
        <nav>
          <div>
            <NavLink to="#">User Profile</NavLink>
            <NavLink to="#" onClick={handleSearchToggle}>Search</NavLink>
          </div>
          <div>
            <NavLink to={"/Books"}>Books</NavLink>
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/About"}>About</NavLink>
          </div>
        </nav>
      </header>

      {isSearchVisible && (
        <div className="search-bar-overlay">
          <div className="search-bar" ref={searchBarRef}>
            <input
              type="text"
              placeholder="Search books..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <div className="search-results">
                {filteredBooks.length > 0 ? (
                  filteredBooks.map((book) => (
                    <div
                      key={book.id}
                      onClick={() => handleBookClick(book.id)} 
                      style={{ cursor: "pointer" }}
                    >
                      {book.name}
                    </div>
                  ))
                ) : (
                  <p>No results found.</p>
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
