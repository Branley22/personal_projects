import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi';

const Home = () => {
  {/* name="home is for react smooth scroll" */}
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">

      {/* container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        {/* <p className="text-gray-100">Hi, my name is</p> */}
        <h1 className="text-4xl sm:text-7xl font-bold text-blue-400">Branley Minaya</h1>
        <h2 className="text-2xl py-2 sm:text-5xl font-bold text-[#b0bce2]">Full Stack Software Developer</h2>
        <p className="text-[#b0bce2] py-4 max-w-[700px]">Advanced Full Stack Developer with a passion for front-end web 
          development and being able to satisfy the need for creativty through UI/UX design</p>
          <div>
            <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-blue-400 hover:border-blue-400">View Projects 
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3"/>
              </span>
            </button>
        </div>
      </div>
    </div>
  )
}

export default Home
