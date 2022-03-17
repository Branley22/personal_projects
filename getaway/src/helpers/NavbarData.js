import React from 'react';
import ReorderIcon from '@mui/icons-material/Reorder';
import CloseIcon from '@mui/icons-material/Close';
import HomeIcon from '@mui/icons-material/Home';
import FlightIcon from '@mui/icons-material/Flight';
import PersonIcon from '@mui/icons-material/Person';
import PhoneIcon from '@mui/icons-material/Phone';


export const NavbarData = [
  {
    title: "Home",
    path: "/",
    icon: <HomeIcon />,
    cName: "nav-text"
  },
  {
    title: "Trips",
    path: "/trips",
    icon: <FlightIcon />,
    cName: "nav-text"
  },
  {
    title: "About",
    path: "/about",
    icon: <PersonIcon />,
    cName: "nav-text"
  },
  {
    title: "Contact",
    path: "/contact",
    icon: <PhoneIcon />,
    cName: "nav-text"
  },
]