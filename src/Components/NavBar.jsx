import React from 'react'
import {  Link, NavLink} from "react-router-dom";
import "../Styles/Navbar.css"
function NavBar() {
  return (
    <header>  
      <nav>
    <NavLink > Search</NavLink> 
    <NavLink to={"/"}>Home</NavLink> 
    <NavLink to={"/About"}> About</NavLink>
    </nav>
    </header>
  )
}

export default NavBar