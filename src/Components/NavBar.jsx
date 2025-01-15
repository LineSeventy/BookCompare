import React from 'react'
import {  Link, NavLink} from "react-router-dom";
import "../Styles/Navbar.css"
function NavBar() {
  return (
    <header>  

      <nav>
  <div>
    <NavLink> User Profile</NavLink>
    <NavLink > Search</NavLink> 
    </div>
    <div>
    <NavLink to={"/Books"}>Books</NavLink>
    <NavLink to={"/"}>Home</NavLink> 
    <NavLink to={"/About"}> About</NavLink>
    </div>
    </nav>
    </header>
  )
}

export default NavBar
