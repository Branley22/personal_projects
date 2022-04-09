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

      {/* social icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a className="flex justify-between items-center w-full text-gray-300"
            href="https://www.linkedin.com/in/branley-minaya/">
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#313131]">
            <a className="flex justify-between items-center w-full text-gray-300"
            href="https://github.com/Branley22">
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#3b8bf3]">
            <a className="flex justify-between items-center w-full text-gray-300"
            href="bminaya2@gmail.com">
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#8a8989]">
            <a className="flex justify-between items-center w-full text-gray-300"
            href="https://docs.google.com/document/d/1gj0QHgwd9rlc_wi2fAqzUt12IYlINozSKu0VvSxIWPQ/edit">
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
