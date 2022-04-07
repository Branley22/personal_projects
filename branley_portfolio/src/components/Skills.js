import React from 'react'
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import ReactImg from "../assets/react.png";
import MongoDb from "../assets/mongo.png";
import Node from "../assets/node.png";
import Tailwind from "../assets/tailwind.png";
import GitHub from "../assets/github.png";
import JavaScript from "../assets/javascript.png";

const Skills = () => {
  return (
    <div name="skills" className="bg-[#0a192f] text-gray-300">
      <div className="max-w-[1000px] max-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-5xl font-bold inline border-b-4 border-blue-400">Experience</p>
          <p className="py-4">// These are the technologies I've worked with!</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div>
            <img className="w-20 mx-auto" src={HTML} alt="HTML icon" />
            <p>HTML</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
