import React from 'react';
import about1 from '../assets/about1.jpg';
import about2 from '../assets/about2.jpg';
import about3 from '../assets/about3.jpg';
import '../styles/About.css';

const About = (props) => {
  

  return (
    <div className="about">
      <div className="about-left">
        <h1>Exciting Trips for you!</h1>
        <h3>Your going to wish you stayed another night</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, or incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut. Cupidatat non proident, sunt in culpa.</p>
        <h3>Enojoy the senroies each trip offers</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, or incididunt ut labore et dolore magna</p>
        </div>
        <div className="about-right">
          <img class="about1-pic" src={about1} width="200px" height="200px"/>
          <img class="about2-pic" src={about2} width="200px" height="200px"/>
          <img class="about3-pic" src={about3} width="200px" height="200px"/>
        </div>
    </div>
  )
}

export default About;