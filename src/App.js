import React from 'react';
import './App.css'
import Tweet from "./app/views/Tweet"
import About from "./app/views/About";
import Nav from "./app/views/Nav";
import Home from "./app/views/home";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {

  return (
      <Router>
          <div className="App">
              <Nav />
              <Route path="/" component={Home}/>
              <Route path="/about" component={About}/>
              <Route path="/tweet" component={Tweet}/>
          </div>
      </Router>

  );
}

export default App;
