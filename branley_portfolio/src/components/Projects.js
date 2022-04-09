import React from 'react'
import WorkImg from "../assets/workImg.jpeg";

const Projects = () => {
  return (
    <div name="projects" className="w-full pt-16 md:h-screen text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-10">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-blue-400">Projects</p>
          <p className="py-6">Check out my applications.</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div style={{backgroundImage: `url(${WorkImg})`}} 
          className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"> 

            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                React JS Application Getaway
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button>
                </a>
                <a href="https://github.com/Branley22/Getaway-application">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button>
                </a>
              </div>
            </div>
          </div>
          <div style={{backgroundImage: `url(${WorkImg})`}} 
          className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"> 

            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                React JS ApplicationWeather
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button>
                </a>
                <a href="https://github.com/Branley22/personal_projects/tree/master/weather-app">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button>
                </a>
              </div>
            </div>
          </div>
          <div style={{backgroundImage: `url(${WorkImg})`}} 
          className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"> 

            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Full Stack ApplicationBook app
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button>
                </a>
                <a href="https://github.com/Branley22/solo_project">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button>
                </a>
              </div>
            </div>
          </div>
          <div style={{backgroundImage: `url(${WorkImg})`}} 
          className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"> 

            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Full Stack ApplicationMovie
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button>
                </a>
                <a href="https://github.com/Branley22/mern_group_project">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button>
                </a>
              </div>
            </div>
          </div>
          <div style={{backgroundImage: `url(${WorkImg})`}} 
          className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"> 

            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                HTML, CSS, JavaScript ApplicationBeatMaker
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button>
                </a>
                <a href="https://github.com/Branley22/personal_projects/tree/master/Beatmaker-project">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button>
                </a>
              </div>
            </div>
          </div>
          <div style={{backgroundImage: `url(${WorkImg})`}} 
          className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"> 

            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                HTML CSS Application
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button>
                </a>
                <a href="https://github.com/Branley22/personal_projects/tree/master/Techdegree-project-2">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
