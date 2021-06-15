// imports from react
import React, { useEffect, useState } from "react";

// imports from Material-ui
import { Container } from "@material-ui/core";
import SearchBar from "./components/SearchBar";
import Weather from "./components/Weather";

// import axios
import axios from "axios";
import Loader from "./components/Loader";

const App = () => {
  // state variables
  const [data, setData] = useState([]);
  const [cityName, setCityName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setisError] = useState(false);
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setCityName(e.target.value);
  };

  // commented out this code because it was causing multipla API calls from a mobile device
  // as the GPS in mobile devices is more sensitive to changes

  // const [lat, setLat] = useState("");
  // const [long, setLong] = useState("");

  // useEffect(() => {
  //   const fetchDataForCurrentLocation = async () => {
  //     setisError(false);
  //     try {
  //       // get current location
  //       navigator.geolocation.getCurrentPosition((position) => {
  //         setLat(position.coords.latitude);
  //         setLong(position.coords.longitude);
  //       });

  //       const url = `https://weather-app-server-0308.herokuapp.com/weather-data/weather/current-city/${lat},${long}`;

  //       if (lat !== "" && long !== "") {
  //         setIsLoading(true);
  //         // get data from server
  //         await axios.get(url).then((result) => {
  //           // console.log(result);
  //           setData(result.data);
  //         });
  //         setIsLoading(false);
  //       }
  //     } catch (error) {
  //       setisError(true);
  //       console.log("Error!");
  //     }
  //   };
  //   fetchDataForCurrentLocation();
  // }, [lat, long]);

  useEffect(() => {
    const fetchData = async () => {
      setisError(false);
      try {
        const url = `https://weather-app-server-0308.herokuapp.com/weather-data/weather/${cityName.toLowerCase()}`;
        setIsLoading(true);
        // get data from server
        await axios.get(url).then((result) => {
          // console.log(result);
          setData(result.data);
        });
        setIsLoading(false);
      } catch (error) {
        setisError(true);
        console.log("Error!!");
      }
    };
    if (cityName !== "") {
      fetchData();
    }
    setCityName("");
  }, [search]);

  return (
    <React.Fragment>
      <Container maxWidth="xs">
        <SearchBar
          cityName={cityName}
          handleChange={handleChange}
          setSearch={setSearch}
        />
        {isError ? (
          <div>
            <h1>Something went wrong...</h1>
            <h1>Try refreshing or enter a proper city name!</h1>
          </div>
        ) : isLoading ? (
          <Loader />
        ) : typeof data.main != "undefined" ? (
          <Weather weatherData={data} />
        ) : (
          <div>
            <h1>Search for a city!</h1>
          </div>
        )}
      </Container>
    </React.Fragment>
  );
};

export default App;
