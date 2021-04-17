import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";



import logo from './logo.svg';
import './App.css';

import  Navbar  from "./Components/Navbar/Navbar.jsx";

function App() {
  return (
    <div className="App">
      <Navbar/>
    </div>
  );
}

export default App;
