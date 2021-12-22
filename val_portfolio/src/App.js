import React from 'react';
import './App.css';

import {Router} from '@reach/router';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="container">
      <Header />
      <div className="sections">
        <About/>
        <Projects/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
