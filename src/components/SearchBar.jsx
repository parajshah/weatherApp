import { Button, Grid, makeStyles, TextField } from "@material-ui/core";
import Search from "@material-ui/icons/Search";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    padding: "16px 0",
  },
}));

const SearchBar = (props) => {
  const classes = useStyles();

  const { cityName, handleChange, setSearch } = props;

  return (
    <form
      onSubmit={(e) => {
        setSearch(
          `${process.env.REACT_APP_API_URL}/weather/?q=${cityName}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`
        );
        e.preventDefault();
      }}
    >
      <Grid container className={classes.root}>
        <Grid item xs={8}>
          <TextField
            name="city"
            type="text"
            label="Search City"
            variant="outlined"
            value={cityName}
            onChange={handleChange}
          />
        </Grid>
        <Grid item>
          <Button type="submit" color="primary" variant="contained">
            <Search />
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default SearchBar;
