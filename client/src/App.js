import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Documentation from './Documentation';
import Fib from './Fib';

function App() {
  return (
    <Router>
      <div className="App">
        <h3>Realizacja zadania nr1 w ramach laboratorium PFSwCO</h3>
        <h3>Mateusz Kozak</h3>
        <Link to="/">Home</Link> | <Link to="/documentation">Dokumentacja</Link>
        <br/> <br/>
        <div>
          <Route exact path="/" component={Fib} />
          <Route path="/documentation" component={Documentation} />
        </div>
      </div>
    </Router>
  );
}

export default App;
