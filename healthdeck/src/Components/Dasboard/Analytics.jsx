import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'Page A', uv: 4000, pv: 2400, amt: 2400, },
    { name: 'Page B', uv: 3000, pv: 1398, amt: 2210, },
    { name: 'Page C', uv: 2000, pv: 9800, amt: 2290, },
    { name: 'Page D', uv: 2780, pv: 3908, amt: 2000, },
    { name: 'Page E', uv: 1890, pv: 4800, amt: 2181, },
    { name: 'Page F', uv: 2390, pv: 3800, amt: 2500, },
    { name: 'Page G', uv: 3490, pv: 4300, amt: 2100, },
];

const Analytics = () => {

    return (
        <div className="dash-cotainer" style = {{marginLeft:"80px"}}>
        <h6 style={{color:"black",fontWeight:600, marginLeft:"80px"}}> Heart Rate</h6>
        <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
        }}
        >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
        <br/>
        <h6 style={{color:"black",fontWeight:600, marginLeft:"80px"}}> Blood Sugar</h6>
        <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
        }}
        >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
        <br/>
        <h6 style={{color:"black",fontWeight:600, marginLeft:"80px"}}> Blood Oxygen</h6>
        <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
        }}
        >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
        <br/>
        <h6 style={{color:"black",fontWeight:600, marginLeft:"80px"}}> Body Temperature</h6>
        <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
        }}
        >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
        </div>
    )
};
export default Analytics;
/*
<div className="home-cotainer" style={{ marginLeft: "90px" }}>

          <div className="row top_two">
            <div className="col-6 heart_container">
              <h6 style={{color:"#CECACA",fontWeight:600}}> Heart Rate</h6>
              <div className="heart_rate"style={{background:'white',
}}>
                
                  <h1 style={{textAlign:'center',justifyContent:'center', fontSize:'200px'}}>89</h1>
                 
              </div>
            </div>
            <div className="sugar_container">
              <h6 style={{color:"#CECACA",fontWeight:600}}> Blood Sugar</h6>
              <div className="Blood_sugar">
              
                <h2>150</h2>
                
              </div>
            </div>
          </div>
          <div className="row bottom_two">

          <div className="col-6 oxygen_container">
            <h6 style={{color:"#CECACA",fontWeight:600}}> Blood Oxygen</h6>
            <div className="Blood_oxygen">
            
              <h2>99</h2>
              
            </div>
          </div>
          <div className="temp_container">
            <h6 style={{color:"#CECACA",fontWeight:600}}> Body Tempature</h6>
            <div className="Body_temp">
           
              <h2>98.4</h2>
              
            </div>
          </div>
          </div>
        </div>
*/