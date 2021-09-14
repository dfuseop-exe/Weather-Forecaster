import React, { useEffect, useState } from "react";

export default function Card() {
  const [city, setCity] = useState(null);
  const [country, setCountry] = useState("In")
  const [search, setSearch] = useState("Mumbai");
  

  https: useEffect(() => {
    const fetchapi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&APPID=b9ea336c62e3b1dd17f52c2c57b12f62`;
      const response = await fetch(url);
      const jsonresponse = await response.json();
      console.log(jsonresponse);
      setCity(jsonresponse.main);
      setCountry(jsonresponse.sys)
    };

    fetchapi();
  }, [search]);

  return (
    <div className="container my-3" >
      <h1 className="text-center">Weather-Forecaster</h1>
      <div
        className="card text-white bg-primary mb-3 "
        style={{
          width: "18rem",
          margin: "auto",
          height: "50vh",
        }}
      >
        <div className="card-body  text-center">
          <h5 className="card-title my-3 ">Enter City Name Below</h5>
          <input
            type="search" 
            placeholder = "Search Location"
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />

          {!city || !country ? (
            <p>No Data Found</p>
          ) : (
            <div className="container">
              <div className="info">
                <h2 className="location"></h2>
                <i className="fas fa-street-view"></i> <h3>{`${search} , ${country.country} `}</h3>
              </div>

              <h2 className="temp">{city.temp}</h2>
             
              <h6 className="min_temp_discription">{`minimum temperature : ${city.temp_min}`}</h6>
              <h6 className="max_temp_discription">{`maximum temperature : ${city.temp_max}`}</h6>
            </div>
          )}
        </div>

        {/* card */} 
      </div>
      {/* container */}
    </div>
  );
}
