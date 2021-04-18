
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
    fetch("https://us-central1-aiot-fit-xlab.cloudfunctions.net/healthdecklastreading", 
    {
      method: 'POST',
      mode: 'no-cors',
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

  /*

  const[data, setData]= useState([]);

  useEffect(() => {
    let mounted = true;
    fetch(
      'https://us-central1-aiot-fit-xlab.cloudfunctions.net/healthdecklastreading', 
      {
        method: 'POST',
        mode: 'no-cors',
        cache: 'no-cache',
        headers: {
            "Content-Type": "application/json",
        }
      }
    )
    .then(response  => response.json())
    .then(result => {
        if(mounted) {
          setData(result);
        }  
      },
      (error) => {
        console.log(error);
      })
    return () => mounted = false;
  }, [])

  */
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

  // const heart_data = 100;
  // const sugar_data = 10;
  // const oxygen_data = 100;
  // const temp_data = 100;

  render() {
    return(
      <>
        <div className="home-cotainer" style={{ marginLeft: "90px" }}>

          <div className="row top_two">
            <div className="col-6 heart_container">
              <h6 style={{color:"#CECACA",fontWeight:600}}> Heart Rate</h6>
              <div className="heart_rate"style={{background: this.state.pulse >= 90 ? "green" : "blue"
}}>
                  <Link to="/Analytics">
                  <p>{this.state.pulse}</p>
                  </Link>
              </div>
            </div>
            <div className="sugar_container">
              <h6 style={{color:"#CECACA",fontWeight:600}}> Blood Sugar</h6>
              <div className="Blood_sugar">
              <Link to="/Analytics">
                <p>TODO</p>
                </Link>
              </div>
            </div>
          </div>
          <div className="row bottom_two">

          <div className="col-6 oxygen_container">
            <h6 style={{color:"#CECACA",fontWeight:600}}> Blood Oxygen</h6>
            <div className="Blood_oxygen">
            <Link to="/Analytics">
              <p>{this.state.oxygen}</p>
              </Link>
            </div>
          </div>
          <div className="temp_container">
            <h6 style={{color:"#CECACA",fontWeight:600}}> Body Tempature</h6>
            <div className="Body_temp">
            <Link to="/Analytics">
              <p>{this.state.temperature}</p>
              </Link>
            </div>
          </div>
          </div>
        </div>
      </>
    )
  }
}

export default Home;
