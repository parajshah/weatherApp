import React, { useEffect, useState } from "react";
import Weather from "./components/Weather";

const App = () => {
  const [data, setData] = useState([]);
  const [cityName, setCityName] = useState("Chennai");

  useEffect(() => {
    const fetchData = async () => {
      await fetch(
        `${process.env.REACT_APP_API_URL}/weather/?q=${cityName}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`
      )
        .then((res) => res.json())
        .then((result) => {
          setData(result);
          console.log(result);
        });
    };
    fetchData();
  }, [cityName]);

  return (
    <React.Fragment>
      {typeof data.main != "undefined" ? (
        <Weather weatherData={data} />
      ) : (
        <div>Error</div>
      )}
    </React.Fragment>
  );
};

export default App;
