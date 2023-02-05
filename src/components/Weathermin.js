import React, { Component, useState } from "react";
import { useEffect } from "react";
import Home from "./Home";
export default function Weathermin(props) {
  const [weatherdata, setweatherdata] = useState();

 
  const [no, setno] = useState(2);
  const next = () => {
    setno(no + 1);
  };
  const previous = () => {
    setno(no - 1);
  };
  const fetchData = async () => {
    fetch(
      `http://api.weatherapi.com/v1/current.json?key=2207508fe1794403be0130435230202&q=${props.city}&aqi=no`
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Something went wrong");
      })
      .then((actualData) => {
        console.log(actualData);
        setweatherdata(actualData);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  fetchData();
  useEffect(() => {
    console.log("iam use effect");
    fetchData();
  }, []);

  // useEffect(() => {
  //   fetch(`https://jsonplaceholder.typicode.com/posts`)
  //    .then((response) => response.json())
  //    .then((actualData) => {console.log(actualData)
  //     setweatherdata(actualData)
  //   })
  //    .catch((err) => {
  //     console.log(err.message);
  //    });
  //  }, []);

  return (
    <div>
      <Home/>
      <ul class="list-group  ">
  <li class="list-group-item"><h2>Weather of {weatherdata ? weatherdata.location.name : ""}</h2></li>
  <li class="list-group-item"><h2>Area:{weatherdata ? weatherdata.location.region : ""}</h2></li>
</ul>
 
 
       
      <table className="table table-striped border  border-dark ">
        <tr className=" border border-dark ">
          <th><h5>Temperature in Centigrate </h5></th>
          <th><h5>Temperature in Farenheit</h5></th>
          <th><h5>Wind Speed per Mile Hour</h5></th>
          <th>Wind Speed Kilometer per Hour</th>
          <th><h5>Area</h5></th>
        </tr>
        <tr>
          <td>
            <h6>
            {weatherdata ? weatherdata.current.temp_c : "not loaded yet"}Degree
            C</h6>
          </td>
          <td><h6>
            {weatherdata ? weatherdata.current.temp_f : "not loaded yet"}Degree
            F</h6>
          </td>
          <td><h6>
            {weatherdata ? weatherdata.current.wind_mph : "not loaded yet"}M/ph</h6>
          </td>
          <td><h6>
            {weatherdata ? weatherdata.current.wind_kph : "not loaded yet"}K/ph</h6>
          </td>
          <td><h6>{weatherdata ? weatherdata.location.tz_id : "not loaded yet"}</h6></td>
        </tr>
      </table>
      <div class="d-flex justify-content-center">
      <img
        src="data:image/jpeg;base64,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"
        className="img-fluid"
        alt="..."
      ></img>
      </div>
      <br></br>
 
    </div>
  );
}
