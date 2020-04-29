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
        <h1>This is the Hello component</h1>
        <button onClick={sayHello}>Say Hello</button>
        <Home/>
    </div>
  );
}

export default App;
