import React from 'react'
import {FiMail} from "react-icons/fi";
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa';
import {BsFillPersonLinesFill} from 'react-icons/bs';
import Pdf from "../assets/BranleyMinaya.Resume.pdf";

const Contact = () => {


  const ResumeClick = () => {
    window.open(Pdf);
  }

  const githubTab = () => {
    window.open("https://github.com/Branley22");
  }

  return (
    <div name="contact" className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4">
      <form method="POST" action="https://getform.io/f/0ab6c65e-3e8b-4a2f-a1d7-1f0e3a78f19c" className="flex flex-col max-w-[600px] w-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-blue-400 text-gray-300">Contact</p>
          <p className="text-gray-300 py-4"> Additional ways to connect or submit form</p>
          <div className="items-center text-gray-300">
            <ul>
              <li className="flex items-center py-1">
                <FiMail size={20}/>
                <a className="p-1"
                href="mailto:bminaya2@gmail.com">Email</a>
              </li>
              <li className="flex items-center py-1">
                <FaGithub size={20}/>
                <a href onClick={githubTab}
                className="p-1">Github </a>
              </li>
              <li className="flex items-center py-1">
              <FaLinkedin size={20}/>
                <a className="p-1"
                href="https://www.linkedin.com/in/branley-minaya/">Linkedin </a>
              </li>
              <li className="flex items-center py-1">
              <BsFillPersonLinesFill size={20}/>
                <a href onClick={ResumeClick}  className="p-1">Resume </a>
              </li>
            </ul>
          </div>
        </div>
        <input className=" p-2 text-gray-300" type="text" placeholder="Name" name="name" />
        <input className="my-4 p-2" type="email" placeholder="Email" name="email" />
        <textarea className=" p-2" name="message" rows="5" placeholder="Message"></textarea>
        <button className="text-white border-2 hover:bg-blue-400 hover:border-blue-400 px-4 py-3 my-8 mx-auto flex items-center">Let's Collaborate</button>
      </form>
  
    </div>
  )
}

export default Contact
