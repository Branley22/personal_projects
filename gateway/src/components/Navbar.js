import React, { useState } from 'react';
import Logo from '../assets/gateway-logo.png';
import { Link } from 'react-router-dom';
import ReorderIcon from '@mui/icons-material/Reorder';
import CloseIcon from '@mui/icons-material/Close';
import { NavbarData} from '../helpers/NavbarData';
import '../styles/Navbar.css';

const Navbar = (props) => {

  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
    <div className="navbar">
      <Link to="#" className="menu">
        <ReorderIcon  onClick={showSidebar}/>
      </Link>
    </div>
    <nav className={sidebar ? "navbar-menu active" : "navbar-menu"}>
      <ul className="navbar-items">
        <li className="navbar-toogle">
          <Link to="#" className="menu-bars">
            <CloseIcon />
          </Link>
        </li>
        {NavbarData.map((sideItem, index) => {
          return (
            <li key={index} className={sideItem.cName}>
              <Link to={sideItem.path}>
                {sideItem.icon}
                <span>{sideItem.title}</span>
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
    </>
  )
}

export default Navbar;