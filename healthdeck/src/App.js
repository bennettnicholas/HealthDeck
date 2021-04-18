import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './App.css';
import "bootstrap/dist/css/bootstrap.css";

import Navbar from "./Components/Navbar/Navbar.jsx";
import Home from "./Components/Dasboard/Home.jsx";
import Profile from "./Components/Dasboard/Profile.jsx";
import Dashboard from "./Components/Dasboard/Analytics.jsx";
function App() {
  return (
    <>
    <React.Fragment>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/Analytics" exact component={Dashboard} />
            <Route path="/profile" exact component={Profile} />
          </Switch>
        </Router>
      </React.Fragment>
  </>
  );
}

export default App;
