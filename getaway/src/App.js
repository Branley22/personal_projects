import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Trips from './pages/Trips';
import About from './pages/About';
import Contact from './pages/Contact';
import Stories from './pages/Stories';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/trips" exact component={Trips} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/stories" exact component={Stories} />
        </Switch>
        <Footer/>
     </Router>
    </div>
  );
}

export default App;
 