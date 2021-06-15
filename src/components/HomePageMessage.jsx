import React from "react";

import { Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    height: "80vh",
  },
}));

const HomePageMessage = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h2" color="textPrimary" component="p">
        Welcome!
      </Typography>
      <br />
      <Typography variant="h4" color="textPrimary" component="p">
        Search for a city!
      </Typography>
    </div>
  );
};

export default HomePageMessage;
