// Protected routing
import React from 'react';
import { Link } from 'react-router-dom';
import style from "./Navbar.Module.css";
const Navbar = () => {
  return (
    <nav>
        <Link to="/" className='nav-link'>Home</Link>
        <Link to="/add-blog" className='nav-link'>AddBlog</Link>
        <Link to="/about" className='nav-link'>About</Link>
    </nav>
  )
}

export default Navbar;