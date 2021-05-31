import React from "react";

import sunriseLogo from "../sunrise.svg";
import sunsetLogo from "../sunset.svg";

import clsx from "clsx";

import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Container,
  IconButton,
  makeStyles,
  Typography,
  Collapse,
  Grid,
} from "@material-ui/core";

import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "500px",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  temperatureMain: {
    display: "flex",
    alignItems: "center",
  },
  actions: {
    display: "flex",
    justifyContent: "space-between",
  },
  temperature: {
    alignItems: "center",
    padding: "16px 0",
  },
  sunriseLogo: {
    width: "75px",
  },
  sunsetLogo: {
    width: "75px",
  },
  sunset: {
    textAlign: "right",
  },
  sunrise: {
    textAlign: "left",
  },
  sunriseSunset: {
    padding: "16px 0",
  },
}));

const Weather = (props) => {
  const { weatherData } = props;

  const d = new Date();
  const seconds = d.getSeconds();
  const minutes = d.getMinutes();
  const hours = d.getHours();
  const day = d.getDate();
  const month = d.getMonth();
  const year = d.getFullYear();
  const date = `${hours}:${minutes}:${seconds}, ${day}/${month}/${year}`;

  const temperature = Math.floor(weatherData.main.temp);
  const maxTemperature = Math.floor(weatherData.main.temp_max);
  const minTemperature = Math.floor(weatherData.main.temp_min);
  const feelsLikeTemp = Math.floor(weatherData.main.feels_like);
  const humidity = Math.floor(weatherData.main.humidity);
  const pressure = Math.floor(weatherData.main.pressure);

  const sunrise = new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString(
    "en-IN"
  );
  const sunset = new Date(weatherData.sys.sunset * 1000).toLocaleTimeString(
    "en-IN"
  );

  // console.log(
  //   temperature,
  //   maxTemperature,
  //   minTemperature,
  //   feelsLikeTemp,
  //   humidity,
  //   pressure
  // );

  const classes = useStyles();

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Container maxWidth="sm">
      <Card className={classes.root}>
        <CardHeader
          title={weatherData.name}
          subheader={date}
          avatar={<Avatar>{weatherData.sys.country}</Avatar>}
        />

        <CardMedia
          className={classes.media}
          image="/static/images/cards/paella.jpg"
          title="weather"
        />

        <CardContent>
          <Grid container>
            <Grid item xs={9} sm={10} container direction="column">
              <Typography variant="h4" color="textSecondary" component="p">
                {weatherData.weather[0].main}
              </Typography>
              <Typography variant="body1" color="textSecondary" component="p">
                {weatherData.weather[0].description}
              </Typography>
            </Grid>
            <Grid item xs={3} sm={2} className={classes.temperatureMain}>
              <Typography variant="h5" color="textSecondary" component="p">
                {temperature}&deg;C
              </Typography>
            </Grid>
          </Grid>
        </CardContent>

        <CardActions className={classes.actions}>
          <div>
            <IconButton>
              <FavoriteIcon />
            </IconButton>
            <IconButton>
              <ShareIcon />
            </IconButton>
          </div>

          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>

        <Collapse
          in={expanded}
          timeout="auto"
          unmountOnExit
          disableStrictModeCompat
        >
          <CardContent>
            <Grid container className={classes.temperature}>
              <Grid item xs={8} sm={10}>
                <Typography variant="h5" color="textSecondary" component="p">
                  Temperature
                </Typography>
              </Grid>
              <Grid item xs={4} sm={2}>
                <Typography variant="body1" color="textSecondary" component="p">
                  Min: {minTemperature}&deg;C
                </Typography>
                <Typography variant="body1" color="textSecondary" component="p">
                  Max: {maxTemperature}&deg;C
                </Typography>
              </Grid>
            </Grid>
            <Grid container className={classes.sunriseSunset}>
              <Grid item xs={6} className={classes.sunrise}>
                <Typography
                  variant="body1"
                  color="textSecondary"
                  component="div"
                >
                  <img
                    src={sunriseLogo}
                    alt="sunrise"
                    className={classes.sunriseLogo}
                  />
                </Typography>
                <Typography variant="body1" color="textSecondary">
                  <span>{sunrise}</span>
                </Typography>
              </Grid>
              <Grid item xs={6} className={classes.sunset}>
                <Typography
                  variant="body1"
                  color="textSecondary"
                  component="div"
                >
                  <img
                    src={sunsetLogo}
                    alt="sunset"
                    className={classes.sunsetLogo}
                  />
                </Typography>
                <Typography variant="body1" color="textSecondary">
                  <span>{sunset}</span>
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Collapse>
      </Card>
    </Container>
  );
};

export default Weather;
