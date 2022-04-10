import React from 'react'
import WorkImg from "../assets/workImg.jpeg";
import Beatmaker from "../assets/beatmaker.jpeg";
import Getaway from "../assets/getawayapp.jpeg";
import Goodreads from "../assets/goodreads.jpeg";
import Mockup from "../assets/mockupapp.jpeg";
import Movie from "../assets/movieapp.jpeg";
import Weather from "../assets/weatherapp.jpeg";

const Projects = () => {
  return (
    <div name="projects" className="w-full pt-16 md:h-screen text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-10">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-blue-400">Projects</p>
          <p className="py-6">Check out my applications.</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div style={{backgroundImage: `url(${Getaway})`}} 
          className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"> 

            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                React JS Application
              </span>
              <div className="pt-8 text-center">
                <a href="https://getawaytrips.netlify.app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Live Site</button>
                </a>
                <a href="https://github.com/Branley22/Getaway-application">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button>
                </a>
              </div>
            </div>
          </div>
          <div style={{backgroundImage: `url(${Goodreads})`, backgroundRepeat: 'no-repeat', backgroundPosition: "left", backgroundSize: "cover"}} 
          className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"> 

            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
              FullStack Application
              </span>
              <div className="pt-8 text-center">
                <a href="http://ec2-18-118-45-218.us-east-2.compute.amazonaws.com/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Live Site</button>
                </a>
                <a href="https://github.com/Branley22/solo_project">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button>
                </a>
              </div>
            </div>
          </div>
          <div style={{backgroundImage: `url(${Weather})`}} 
          className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"> 

            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
              React JS Application
              </span>
              <div className="pt-8 text-center">
                <a href="https://weatherapp9.netlify.app">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button>
                </a>
                <a href="https://github.com/Branley22/personal_projects/tree/master/weather-app">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button>
                </a>
              </div>
            </div>
          </div>
          <div style={{backgroundImage: `url(${Beatmaker})`, backgroundRepeat: 'no-repeat', backgroundPosition: "left", backgroundSize: "cover"}} 
          className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"> 

            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
              Javascript Application
              </span>
              <div className="pt-8 text-center">
                <a href="https://beatmaker9.netlify.app">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button>
                </a>
                <a href="https://github.com/Branley22/personal_projects/tree/master/Beatmaker-project">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button>
                </a>
              </div>
            </div>
          </div>
          <div style={{backgroundImage: `url(${Movie})`, backgroundRepeat: 'no-repeat', backgroundPosition: "15%", backgroundSize: "cover"}} 
          className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"> 

            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                FullStack Application
              </span>
              <div className="pt-8 text-center">
                <a href="http://ec2-3-141-5-143.us-east-2.compute.amazonaws.com/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button>
                </a>
                <a href="https://github.com/Branley22/mern_group_project">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button>
                </a>
              </div>
            </div>
          </div>
          <div style={{backgroundImage: `url(${Mockup})`, backgroundRepeat: 'no-repeat', backgroundPosition: "right", backgroundSize: "cover"}} 
          className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"> 

            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                HTML/CSS Application
              </span>
              <div className="pt-8 text-center">
                <a href="https://mockup2app.netlify.app">
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
