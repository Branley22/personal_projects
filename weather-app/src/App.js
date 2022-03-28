import React, {useState} from 'react';
import axios from 'axios';
import './App.css';

function App() {

  //const url = `https://api.openweathermap.org/data/2.5/weather?q=dallas&appid=d463563c0edeaf3b10adc6fbb19ca1f0`
  return (
    <div className="app">
      <div className="container">
        <div className="top">
          <div className="location">
            
          </div>
        </div>
        <div className="bottom"></div>
      </div>
    </div>
  );
}

export default App;
