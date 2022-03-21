import React, { useState } from 'react';
import Logo from '../assets/getaway-logo.jpeg';
import { Link } from 'react-router-dom';
import ReorderIcon from '@mui/icons-material/Reorder';
import '../styles/Navbar.css';

const Navbar = (props) => {

  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  }

  return (
    <div className="navbar">
      <div className="left-side" id={openLinks ? "open" : "close"}>
        <img src={Logo} alt="video of getaway home page"/>
        <div className="hidden-links">
          <Link to="/">Home</Link>
          <Link to="/trips">Trips</Link>
          <Link to="/about">About</Link>
          <Link to="/stories">Stories</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
      <div className="right-side">
        <Link to="/">Home</Link>
        <Link to="/trips">Trips</Link>
        <Link to="/about">About</Link>
        <Link to="/stories">Stories</Link>
        <Link to="/contact">Contact</Link>
        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
}

export default Navbar;