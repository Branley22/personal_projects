import React from 'react'

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-5xl font-bold inline border-b-4 border-blue-400">About</p>
          </div>
          <div></div>
          </div>
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
            <div className="sm:text-right text-4xl font-bold">
              <p> Hello, nice to meet you. Please take a look around.</p>
            </div>
            <div>
              <p>I have a strong ability to learn and implement new technology methods while prioritizing user experience. With my personal projects, I position myself daily to keep up-to-date with new frameworks and libaries. Excited to grow as a software developer and join a fast-paced organization where my technical skills and creative thinking are useful.</p>
            </div>
          </div>
      </div>
    </div>
  )
}

export default About
