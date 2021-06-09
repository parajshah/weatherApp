import { Container } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import Weather from "./components/Weather";
import axios from "axios";

const App = () => {
  const [data, setData] = useState([]);
  const [cityName, setCityName] = useState("");
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setisError] = useState(false);

  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setCityName(e.target.value);
  };

  useEffect(() => {
    const fetchDataForCurrentLocation = async () => {
      setisError(false);
      try {
        navigator.geolocation.getCurrentPosition((position) => {
          setLat(position.coords.latitude);
          setLong(position.coords.longitude);
        });

        const url = `http://localhost:5000/weather/current-city/${lat},${long}`;

        if (lat !== "" && long !== "") {
          setIsLoading(true);
          await axios.get(url).then((result) => {
            setData(result.data);
          });
          setIsLoading(false);
        }
      } catch (error) {
        setisError(true);
        console.log("Error!");
      }
    };
    fetchDataForCurrentLocation();
  }, [lat, long]);

  useEffect(() => {
    const fetchData = async () => {
      setisError(false);
      try {
        const url = `http://localhost:5000/weather/${cityName.toLowerCase()}`;
        setIsLoading(true);
        await axios.get(url).then((result) => {
          console.log(result);
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
          <div>
            <h1>Loading Data...</h1>
          </div>
        ) : typeof data.main != "undefined" ? (
          <Weather weatherData={data} />
        ) : (
          <div>
            <h1>No City Found</h1>
            <h1>Try clicking the search button, or enter a proper city</h1>
          </div>
        )}
      </Container>
    </React.Fragment>
  );
};

export default App;
