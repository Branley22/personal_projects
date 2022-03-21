import React from 'react';
import about1 from '../assets/about1.jpeg';
import about2 from '../assets/about2.jpeg';
import about3 from '../assets/about3.jpeg';
import '../styles/About.css';

const About = (props) => {
  

  return (
    <div className="about">
      <h1>Exciting Trips for you!</h1>
      <div className="about-content">
        <div className="about-left">
          <h3>Your going to wish you stayed another night</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, or incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut. Cupidatat non proident, sunt in culpa.</p>
            <h3>Enjoy the scenery each trip offers</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, or incididunt ut labore et dolore magna</p>
            <button className="about-more-info"></button>
        </div>
        <div className="about-right">
          <img class="about1-pic" src={about1} width="300px" height="200px" alt="island background"/>
          <img class="about2-pic" src={about2} width="300px" height="200px" alt="cove background"/>
          <img class="about3-pic" src={about3} width="300px" height="200px" alt="boat ride background"/>
        </div>
      </div>
    </div>
  )
}

export default About;