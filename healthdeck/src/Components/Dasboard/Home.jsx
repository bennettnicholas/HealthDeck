import React, { Component, useContext, useState, useEffect } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { getCurrentData } from './service.jsx';


class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pulse: null,
      oxygen: null,
      temperature: null,
    };
  }

  componentDidMount() {
    fetch("http://45.79.199.42:8002/getsinglereading",
    {
      method: 'GET',
      //mode: 'no-cors',
      cache: 'no-cache',
    })
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            pulse: result.pulse,
            oxygen: result.oxygen,
            temperature: result.temperature,
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            pulse: 0,
            oxygen: 0,
            temperature: 0,
          });
        }
      )
  }

  render() {
    return(
      <>
        <div className="home-cotainer" style={{ marginLeft: "90px" }}>

          <div className="row top_two">
            <div className="col-6 heart_container">
              <h6 style={{color:"#CECACA",fontWeight:600}}> Heart Rate</h6>
              <div className="heart_rate"style={{background:'white',outline:"5px solid black" }}>

                
                  <h1 style={{textAlign:'center',justifyContent:'center', fontSize:'200px'}}>89</h1>
                 
              </div>
            </div>
            <div className="sugar_container" >
              <h6 style={{color:"#CECACA",fontWeight:600}}> Blood Sugar</h6>
              <div className="Blood_sugar" style={{background:'lightGreen',outline:"5px solid black" }}>
              
              <h1 style={{textAlign:'center',justifyContent:'center', fontSize:'200px'}}>138</h1>
                
              </div>
            </div>
          </div>
          <div className="row bottom_two">

          <div className="col-6 oxygen_container" >
            <h6 style={{color:"#CECACA",fontWeight:600}}> Blood Oxygen</h6>
            <div className="Blood_oxygen" style={{background:'white',outline:"5px solid black" }}>
            
            <h1 style={{textAlign:'center',justifyContent:'center', fontSize:'200px'}}>99</h1>
              
            </div>
          </div>
          <div className="temp_container">
            <h6 style={{color:"#CECACA",fontWeight:600}}> Body Tempature</h6>
            <div className="Body_temp" style={{background:'white',outline:"5px solid black" }}>
           
            <h1 style={{textAlign:'center',justifyContent:'center', fontSize:'200px'}}>98</h1>
              
            </div>
          </div>
          </div>
        </div>
      </>
    )
  }
}

export default Home;
