import React, { useState, useEffect } from "react";
import axios from "axios";

import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  // const dataUrl =
  //   "https://us-central1-aiot-fit-xlab.cloudfunctions.net/healthdecklastreading";
  //   fetch(dataUrl)
  //     .then((response) => response.json())
  //     .then((data) => console.log('This is your data', data));

  // const [data, setdata] = useState({});

  // useEffect(() => {
  //   getdatawithAxios();
   
  // }, []);

  // const getdatawithAxios = async () => {
  //   const response = await axios.get(dataUrl);
  //   setdata(response.data);
    
  // };

  const heart_data = 100;
  const sugar_data = 10;
  const oxygen_data = 100;
  const temp_data = 100;

  return (
    <>
      <div className="home-cotainer" style={{ marginLeft: "90px" }}>
        <div className="row top_two">
          <div className="col-6 heart_container ">
            <h6 style={{ color: "#CECACA", fontWeight: 600 }}> Heart Rate</h6>

            <div className="heart_rate"style={{background: heart_data >= 90 ? "green" : "blue"
}}>
              <Link to="/Analytics">
                <p>{heart_data} </p>
              </Link>
            </div>
          </div>
          <div className="sugar_container">
            <h6 style={{ color: "#CECACA", fontWeight: 600 }}> Blood Sugar</h6>
            <div className="Blood_sugar" style={{background: sugar_data < 140 ? "green" : "yellow", background: sugar_data >= 200 ? "red" : "yellow",background: sugar_data <= 140 & sugar_data <= 199? "yellow" : "red"
}}>
              <Link to="/Analytics">
                <p>{sugar_data}</p>
              </Link>
            </div>
          </div>
        </div>
        <div className="row bottom_two">
          <div className="col-6 oxygen_container">
            <h6 style={{ color: "#CECACA", fontWeight: 600 }}> Blood Oxygen</h6>
            <div className="Blood_oxygen">
              <Link to="/Analytics">
                <p> {oxygen_data}</p>
              </Link>
            </div>
          </div>
          <div className="temp_container">
            <h6 style={{ color: "#CECACA", fontWeight: 600 }}>
              {" "}
              Body Tempature
            </h6>
            <div className="Body_temp">
              <Link to="/Analytics">
                <p>{temp_data}</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
