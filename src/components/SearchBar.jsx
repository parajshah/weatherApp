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

  const { cityName, setCityName, handleChange, setSearch } = props;

  return (
    <form>
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
        <Grid
          item
          onClick={() => {
            setSearch(cityName);
          }}
        >
          <Button type="button" color="primary" variant="contained">
            <Search />
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default SearchBar;
