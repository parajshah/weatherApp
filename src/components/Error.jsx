import React from "react";

import { Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: "50%",
    height: "50vh",
  },
}));

const Error = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h4" color="textPrimary" component="p">
        Something went wrong..
      </Typography>
      <br />
      <Typography variant="h4" color="textPrimary" component="p">
        Try refreshing or enter a proper city name!
      </Typography>
    </div>
  );
};

export default Error;
