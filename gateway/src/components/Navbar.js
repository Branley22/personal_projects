import React from 'react';
import Logo from '../assets/gateway-logo.png';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = (props) => {
  return (
    <div className="navbar">
      <div className="left-side">
        <img src={Logo} alt="pic of logo"/>
      </div>
      <div className="right-side">
        <Link to="/">Home</Link>
        <Link to="/about-gateway">About Gateway</Link>
        <Link to="/your-benefits">Your Benefits</Link>
        <Link to="/popular-tours">Popular Tours</Link>
        <Link to="/stories">Stories</Link>
        <Link to="/book-now">Book Now</Link>
      </div>
    </div>
  )
}

export default Navbar;