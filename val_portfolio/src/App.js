import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header/>
        <div className="sections">
          <About/>
          <Projects/>
          <Contact/>
        </div>
    </div>
  );
}

export default App;
