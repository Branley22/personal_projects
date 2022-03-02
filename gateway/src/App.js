import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Trips from './pages/Trips';
import About from './pages/About';
import Contact from './pages/Contact';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
          <Route path="/" />
        </Switch>
        <Home/>
        <Trips/>
        <About/>
        <Contact/>
        <Footer/>
     </Router>
    </div>
  );
}

export default App;
 