import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import React from 'react';
import './App.css';
import House from "./app/views/house";
import Home from "./app/views/home";

function App() {

    const sayHello = () => {
        console.log('hello');
    }

  return (
    <div>
        <h1>Hello React</h1>
        <button onClick={sayHello}>Hello</button>
    </div>
  );
}

export default App;
