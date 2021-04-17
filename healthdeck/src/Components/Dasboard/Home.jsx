import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <div className="home-cotainer" style={{ marginLeft: "90px" }}>
      
        <div className="row top_two">
          <div className="col-6 heart_container">
            <h6 style={{color:"#CECACA",fontWeight:600}}> Heart Rate</h6>

            <div className="heart_rate">
                <Link to="/Analytics">
              <p> 92</p>
                </Link>
            </div>
          </div>
          <div className="sugar_container">
            <h6 style={{color:"#CECACA",fontWeight:600}}> Blood Sugar</h6>
            <div className="Blood_sugar">
            <Link to="/Analytics">
              <p> 245</p>
              </Link>
            </div>
          </div>
        </div>
        <div className="row bottom_two">

        <div className="col-6 oxygen_container">
          <h6 style={{color:"#CECACA",fontWeight:600}}> Blood Oxygen</h6>
          <div className="Blood_oxygen">
          <Link to="/Analytics">
            <p> 100</p>
            </Link>
          </div>
        </div>
        <div className="temp_container">
          <h6 style={{color:"#CECACA",fontWeight:600}}> Body Tempature</h6>
          <div className="Body_temp">
          <Link to="/Analytics">
            <p>98 </p>
            </Link>
          </div>
        </div>
        </div>
      </div>
    </>
  );
};
export default Home;
