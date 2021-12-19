import React from 'react';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

const Header = ()=> {
  return (
    <div className="header">
      <h1 className="name">Valerie Mendez</h1>
      <h2 className="title">Graphic Designer2</h2>
      <div className="sections">
        <About/>
        <Projects/>
        <Contact/>
      </div>
    </div>
  )
}
export default Header;