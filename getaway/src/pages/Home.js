import React from 'react';
import BackgroundVideo from '../assets/gateway-home.mp4';
import '../styles/Home.css';

const Home = (props) => {
  return (
    <div className="home">
      <video 
        autoPlay 
        loop 
        muted>
        <source src={BackgroundVideo} type="video/mp4"/>
      </video>
      <div className="header">
        <h1>Getaway Trips</h1>
        <p>Find that special place to relax and get away!</p>
      </div>
    </div>
  )
}

export default Home;