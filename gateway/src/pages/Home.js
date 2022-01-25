import React from 'react';
import { Link } from 'react-router-dom';
import BackgroundImage from '../assets/bora-bq.jpeg';
import '../styles/Home.css';

const Home = (props) => {
  return (
    <div className="home" style={{ backgroundImage: `url(${BackgroundImage})` }}>
      <div className="header">
        <h1>Gateway Trips</h1>
        <p>Relax and get away</p>
        <Link to="/trips">
          <button>Schedule Your Trip!</button>
        </Link>
      </div>
    </div>
  )
}

export default Home;