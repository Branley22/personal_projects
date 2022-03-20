import React from 'react';
import profile1 from '../assets/profile-pic1.jpeg';
import profile2 from '../assets/profile-pic2.jpeg';
import '../styles/Stories.css';

const Stories = (props) => {

  return (
    <div className="stories">
      <h1>Genuine Stories</h1>
        <div className="stories-card1">
        <h3>I had the best week ever with my husband on our honeymoon</h3>
        <div className="stories-content">
        <h3>I had the best week ever with my husband on our honeymoon</h3>
          <div className="stories-content-info">
            <img class="profile-pic1" src={profile1} width="200px" height="200px"/>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
          </div>
        </div>
        </div>
        <div className="stories-card2">
          <h3>Amazing experience! Going to take more trips with Getaway again soon</h3>
          <div className="stories-content">
          <img class="profile-pic2" src={profile2} width="200px" height="200px"/>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
        </div>
        </div>
      </div>
  )
}
export default Stories;
