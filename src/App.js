import { Container } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import Weather from "./components/Weather";

const App = () => {
  const [data, setData] = useState([]);
  const [cityName, setCityName] = useState("");
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setCityName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(cityName);
  };

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
    setCityName("");
  }, [search]);

  return (
    <React.Fragment>
      <Container maxWidth="xs">
        <SearchBar
          cityName={cityName}
          setCityName={setCityName}
          handleChange={handleChange}
          setSearch={setSearch}
          handleSubmit={handleSubmit}
        />
        {typeof data.main != "undefined" ? (
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
