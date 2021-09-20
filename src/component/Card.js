import './Card.css';
import React, { useEffect, useState } from "react";
import logo from './images/weather-forecast.png'
import title from './images/heading.png'



export default function Card() {
  const [city, setCity] = useState(null);
  const [country, setCountry] = useState("In");
  const [search, setSearch] = useState("Mumbai");
  const [disc, setDisc] = useState(" ");
  const [day, setDay] = useState(" ")

  useEffect(() => {
    const fetchapi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&APPID=b9ea336c62e3b1dd17f52c2c57b12f62`;
      const response = await fetch(url);
      const jsonresponse = await response.json();
      console.log(jsonresponse);
      setCity(jsonresponse.main);
      setCountry(jsonresponse.sys);
      setDisc(jsonresponse.weather[0].description);
      let d = new Date();
      let weekday = new Array(7);
      weekday[0] = "Sunday";
      weekday[1] = "Monday";
      weekday[2] = "Tuesday";
      weekday[3] = "Wednesday";
      weekday[4] = "Thursday";
      weekday[5] = "Friday";
      weekday[6] = "Saturday";

      setDay(weekday[d.getDay()])
    };

    fetchapi();
  }, [search]);

  return (
    <div>
        {/* // eslint-disable-next-line */}
      <div className="container my-3" style={{ fontFamily: "Azeret Mono" }}>
        
        <img src = {title} alt="image" style={{width : "80%" , display : "block" , margin : "auto"}}/>   

        <div
          className="card text-white bg-dark mb-3 my-3 shadow-lg p-3 mb-5 bg-dark rounded"
          style={{
            width: "80%",
            margin: "auto",
          }}
        >
          <div className="card-body text-center">
            <h3 className="card-title my-3 ">Find Current Weather Conditions</h3>
            
            <input 
              style={{width : "60%" , margin : "auto"}}
              type="search"
              placeholder="Search"
              className="p-2 bg-dark text-white border-3 border-danger rounded-3 "
              onChange={(event) => {
                setSearch(event.target.value);
              }}
            />

            {!disc || !city || !country ? (
              <p>No Data Found</p>
            ) : (
              <div className="container">
                <div className="info">
                  
                  <img src = {logo} alt="image" style={{width : "150px" , height : "150px"}} />
                 
                  <h3>{`${search},${country.country} `}</h3>
                  <h4>{day}</h4>
                </div>
                <hr />
                <h4>Temperature</h4>
                <h2 className="temp">{`${city.temp}°C`}</h2>
                <hr />
                <h3>Description</h3>
                <h3>{disc ? disc : "no discription"}</h3>
              </div>
            )}
          </div>

          {/* card */}
        </div>
        {/* container */}
      </div>
    </div>
  );
}
