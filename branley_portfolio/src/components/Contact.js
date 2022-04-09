import React from 'react'
import {FiMail} from "react-icons/fi";

const Contact = () => {
  return (
    <div name="contact" className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4">
      <form method="POST" action="https://getform.io/f/0ab6c65e-3e8b-4a2f-a1d7-1f0e3a78f19c" className="flex flex-col max-w-[600px] w-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-blue-400 text-gray-300">Contact</p>
          <p className="text-gray-300 py-4"> Submit form or send me an email</p>
          <div className="text-gray-300 flex items-center ">
            <FiMail />
            <p className="px-2">bminaya2@gmail.com</p>
          </div>
        </div>
        <input className="bg-[#4f91f3] p-2" type="text" placeholder="Name" name="name" />
        <input className="my-4 p-2 bg-[#4f91f3]" type="email" placeholder="Email" name="email" />
        <textarea className="bg-[#4f91f3] p-2" name="message" rows="10" placeholder="Message"></textarea>
        <button className="text-white border-2 hover:bg-blue-400 hover:border-blue-400 px-4 py-3 my-8 mx-auto flex items-center">Let's Collaborate</button>
      </form>
    </div>
  )
}

export default Contact
