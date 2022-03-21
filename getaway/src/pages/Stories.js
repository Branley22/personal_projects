import React from 'react';
import profile1 from '../assets/profile-pic1.jpeg';
import profile2 from '../assets/profile-pic2.jpeg';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { Link } from 'react-router-dom';
import '../styles/Stories.css';

const Stories = (props) => {

  return (
    <div className="stories">
      <h1>Genuine Stories</h1>
        <div className="stories-card1">
          <div className="stories-left">
            <img class="profile-pic" src={profile1} alt="profile of sarah"/>
              <p className="stories-comment">Sarah Cameron</p>
              <span>Jan 23rd, 2017</span>
          </div>
          <div className="stories-right">
            <h3>"I had the best week ever with my husband on our honeymoon"</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
        </div>
        <div className="stories-card1">
          <div className="stories-left">
            <img class="profile-pic" src={profile2} alt="profile of sam"/>
              <p className="stories-comment">Sam Wilson</p>
              <span>Oct 2nd, 2021</span>
          </div>
          <div className="stories-right">
            <h3>"Amazing experience! Going to take more trips with Getaway again soon"</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
        </div>
        <div className="arrow-link">
          <Link to="/stories">
            More reviews 
            <ArrowRightAltIcon/>
          </Link>
        </div>
    </div>
  )
}
export default Stories;
