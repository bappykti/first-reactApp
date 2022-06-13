// Navigation 
// useParams for dynamic routing
import React from 'react'
import { NavLink } from 'react-router-dom';
import style from "./Navbar.Module.css";

const Navbar = () => {
  return (
    <div>
        <nav>
            <NavLink to="/" className='nav-link'>Home</NavLink>
            <NavLink to="/blogs" className='nav-link'>Blog</NavLink>
            <NavLink to="/contact" className='nav-link'>Contact</NavLink>
            
        </nav>
    </div>
  )
}

export default Navbar;