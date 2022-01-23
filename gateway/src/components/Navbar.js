import React from 'react';
import Logo from '../assets/gateway-logo.png';

const Navbar = (props) => {
  return (
    <div className="navbar">
      <div className="left-side">
        <img src={Logo}/>
      </div>
      <div className="right-side"></div>
    </div>
  )
}

export default Navbar;