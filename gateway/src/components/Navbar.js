import React, { useState } from 'react';
import Logo from '../assets/gateway-logo.png';
import { Link } from 'react-router-dom';
import ReorderIcon from '@mui/icons-material/Reorder';
import '../styles/Navbar.css';

const Navbar = (props) => {


  return (
    <div className="navbar">
      <Link to="#" className="menu">
        <ReorderIcon />
      </Link>
    </div>
  )
}

export default Navbar;