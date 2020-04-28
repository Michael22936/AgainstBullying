import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import React from 'react';
import './App.css';
import House from "./app/views/home";
import Home from "./app/views/house";

function App() {
  return (
    <Router>
        <Switch>
            <Route exact path="/">
                <House/>
            </Route>
            <Route path="/about">
                <Home/>
            </Route>
        </Switch>
    </Router>
  );
}

export default App;
