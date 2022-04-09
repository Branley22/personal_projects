import React, {useState} from 'react';
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs';
import Logo from '../assets/minayalogo.png';
import {Link} from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const navClick = ()=> {
    setNav(!nav)
  }



  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        <Link to="home" smooth={true} duration={500}>
        <img className="cursor-pointer" src={Logo} alt="Logo Image" style={{width: "60px"}} />
        </Link> 
      </div>

        {/* menu */}
        <ul className="hidden md:flex">
          <li>
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
          </li>
          <li>
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
          </li>
          <li>
          <Link to="projects" smooth={true} duration={500}>
            Projects
          </Link>
          </li>
          <li>
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
          </li>
          <li>
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
          </li>
        </ul>
      {/* anything over medium viewport(780px) is hidden.*/ }
      <div onClick={navClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* mobile menu */}
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
        <li className="py-6 text-4xl">
        <Link onClick={navClick} to="home" smooth={true} duration={500}>
            Home
        </Link>
        </li>
        <li className="py-6 text-4xl">
        <Link onClick={navClick} to="about" smooth={true} duration={500}>
            About
        </Link>
        </li>
        <li className="py-6 text-4xl">
        <Link onClick={navClick} to="projects" smooth={true} duration={500}>
            Projects
        </Link>
        </li>
        <li className="py-6 text-4xl">
        <Link onClick={navClick} to="skills" smooth={true} duration={500}>
            Skills
        </Link>
        </li>
        <li className="py-6 text-4xl">
        <Link onClick={navClick} to="contact" smooth={true} duration={500}>
            Contact
        </Link></li>        
      </ul>
    </div>
  )
}

export default Navbar
