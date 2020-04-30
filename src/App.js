import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import React from 'react';
import './App.css';
import Home from "./app/views/home";
import Tweet from "./app/views/Tweet"

function App() {

  return (
    <div className="app">
        <Tweet name="Michael" message="Hello" likes="50"/>
        <Tweet name="David" message="Goodbye" likes="30"/>
        <Tweet name="John" message="My name is John" likes="100"/>
        <Tweet name="Bob" message="Im bob" likes="1"/>
    </div>
  );
}

export default App;
