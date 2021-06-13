// imports from Material-ui
import { Button, Grid, makeStyles, TextField } from "@material-ui/core";
import Search from "@material-ui/icons/Search";

// imports from react
import React from "react";

// Material-ui styling
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

  // props
  const { cityName, handleChange, setSearch } = props;

  return (
    <form
      onSubmit={(e) => {
        setSearch({ cityName });
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
