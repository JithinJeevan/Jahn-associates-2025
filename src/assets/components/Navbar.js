import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import image from '../../images/Jahn Logo.jpg';
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo" >
      <img src={image} alt='logo' className='imagelogo'/>
        <Link to="/" style={{ marginLeft: '0.25em'}}>JAHN ASSOCIATES</Link>
      </div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Sevices">Sevices</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};
export default Navbar;