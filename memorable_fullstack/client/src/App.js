import {Router} from '@reach/router';
import Header from './components/Header';
import AllMemorables from './components/AllMemorables';
import NewMemorable from './components/NewMemorable';
import OneMemorable from './components/OneMemorable';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
        <AllMemorables default path ='/memorable'/>
        <NewMemorable path ='/memorable/new'/>
        <OneMemorable path ='/memorable/:id'/>
      </Router>
    </div>
  );
}

export default App;
