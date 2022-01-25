import React from 'react';
import { Link } from 'react-router-dom';
import BackgroundImage from '../assets/bora-bq.jpeg';
import '../styles/Home.css';

const Home = (props) => {
  return (
    <div className="home">
      <div className="header" style={{ backgroundImage: `url(${BackgroundImage})` }}>
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