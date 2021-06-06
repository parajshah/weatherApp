import React from "react";

import sunriseLogo from "../img/sunrise.svg";
import sunsetLogo from "../img/sunset.svg";
import clearDay from "../img/clear-day.svg";
import clearNight from "../img/clear-night.svg";
// import rain from "../img/rain.svg";
import rainDay from "../img/rain-day.svg";
import rainNight from "../img/rain-night.svg";
import wind from "../img/wind.svg";
import windDay from "../img/wind-day.svg";
import windNight from "../img/wind-night.svg";
// import clouds from "../img/clouds.svg";
import cloudsDay from "../img/clouds-day.svg";
import cloudsNight from "../img/clouds-night.svg";
// import drizzle from "../img/drizzle.svg";
import drizzleDay from "../img/drizzle-day.svg";
import drizzleNight from "../img/drizzle-night.svg";
// import fog from "../img/fog.svg";
import fogDay from "../img/fog-day.svg";
import fogNight from "../img/fog-night.svg";
// import snow from "../img/snow.svg";
import snowDay from "../img/snow-day.svg";
import snowNight from "../img/snow-night.svg";
import thunderstormDay from "../img/thunderstorm-day.svg";
import thunderstormNight from "../img/thunderstorm-night.svg";
import smoke from "../img/smoke.svg";

import clsx from "clsx";

import {
  // Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
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
  media: {
    height: 0,
    paddingTop: "100%",
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
    padding: "8px 0",
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
    padding: "8px 0",
  },
  wind: {
    padding: "8px 0",
  },
  windLogo: {
    textAlign: "right",
  },
  additionalDetails: {
    padding: "8px 0",
  },
}));

const Weather = (props) => {
  const { weatherData } = props;

  const currentDate = new Date(
    weatherData.dt * 1000 + weatherData.timezone * 1000
  )
    .toUTCString()
    .split(":")[0]
    .slice(0, -2);
  const date = currentDate;

  const temperature = Math.floor(weatherData.main.temp);
  const maxTemperature = Math.floor(weatherData.main.temp_max);
  const minTemperature = Math.floor(weatherData.main.temp_min);
  const feelsLikeTemp = Math.floor(weatherData.main.feels_like);
  const humidity = Math.floor(weatherData.main.humidity);
  const pressure = Math.floor(weatherData.main.pressure);
  const cloudPercentage = Math.floor(weatherData.clouds.all);
  const windSpeed = Math.floor(weatherData.wind.speed);
  const windDegrees = Math.floor(weatherData.wind.deg);
  const windGust = Math.floor(weatherData.wind.gust);

  const sunriseUTC = new Date(
    weatherData.sys.sunrise * 1000 + weatherData.timezone * 1000
  ).toUTCString();

  let sunriseHours = sunriseUTC.split(":")[0].slice(-2);
  let sunriseMinutes = sunriseUTC.split(":")[1];
  let sunriseAfternoon = false;
  if (parseInt(sunriseHours) > 12) {
    sunriseHours -= 12;
    sunriseAfternoon = true;
  }
  const sunrise = `${sunriseHours}:${sunriseMinutes} ${
    sunriseAfternoon ? "PM" : "AM"
  }`;

  const sunsetUTC = new Date(
    weatherData.sys.sunset * 1000 + weatherData.timezone * 1000
  ).toUTCString();

  let sunsetHours = sunsetUTC.split(":")[0].slice(-2);
  let sunsetMinutes = sunsetUTC.split(":")[1];
  let sunsetAfternoon = false;
  if (parseInt(sunsetHours) > 12) {
    sunsetHours -= 12;
    sunsetAfternoon = true;
  }
  const sunset = `${sunsetHours}:${sunsetMinutes} ${
    sunsetAfternoon ? "PM" : "AM"
  }`;

  const weatherDataIcon = weatherData.weather[0].main;
  const getCurrentWeatherIconDay = () => {
    switch (weatherDataIcon) {
      case "Clear":
        return clearDay;
      case "Drizzle":
        return drizzleDay;
      case "Thunderstorm":
        return thunderstormDay;
      case "Rain":
        return rainDay;
      case "Snow":
        return snowDay;
      case "Clouds":
        return cloudsDay;
      case "Smoke":
        return smoke;
      case "Fog":
        return fogDay;
      case "Mist":
        return fogDay;
      case "Haze":
        return fogDay;
      case "Squall":
        return windDay;
      default:
        return fogDay;
    }
  };
  const getCurrentWeatherIconNight = () => {
    switch (weatherDataIcon) {
      case "Clear":
        return clearNight;
      case "Drizzle":
        return drizzleNight;
      case "Thunderstorm":
        return thunderstormNight;
      case "Rain":
        return rainNight;
      case "Snow":
        return snowNight;
      case "Clouds":
        return cloudsNight;
      case "Smoke":
        return smoke;
      case "Fog":
        return fogNight;
      case "Mist":
        return fogNight;
      case "Haze":
        return fogNight;
      case "Squall":
        return windNight;
      default:
        return fogNight;
    }
  };

  const dt = new Date(
    weatherData.dt * 1000 + weatherData.timezone * 1000
  ).toUTCString();

  const currentWeatherIcon = () => {
    if (dt > sunriseUTC) {
      // console.log("Sunrise done");
      if (dt > sunsetUTC) {
        // console.log("Sunset done");
        return getCurrentWeatherIconNight();
      } else {
        // console.log("Sunset not done");
        return getCurrentWeatherIconDay();
      }
    } else {
      return getCurrentWeatherIconNight();
    }
  };

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
    <Card className={classes.root}>
      <CardHeader
        title={weatherData.name + ", " + weatherData.sys.country}
        subheader={date}
      />

      <CardMedia
        className={classes.media}
        image={currentWeatherIcon()}
        title="Weather"
      />

      <CardContent>
        <Grid container>
          <Grid item xs={9} sm={10} container direction="column">
            <Typography variant="h4" color="textPrimary" component="p">
              {weatherData.weather[0].main}
            </Typography>
            <Typography variant="body1" color="textSecondary" component="p">
              {weatherData.weather[0].description}
            </Typography>
          </Grid>
          <Grid item xs={3} sm={2} className={classes.temperatureMain}>
            <Typography variant="h5" color="textPrimary" component="p">
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
            <Grid item xs={12}>
              <Typography variant="h6" color="textPrimary" component="h6">
                Temperature
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1" color="textSecondary" component="p">
                Feels Like:{" "}
                <span>
                  <b>{feelsLikeTemp}</b>
                </span>
                &deg;C
              </Typography>
              <Typography variant="body1" color="textSecondary" component="p">
                Min:{" "}
                <span>
                  <b>{minTemperature}</b>
                </span>
                &deg;C
              </Typography>
              <Typography variant="body1" color="textSecondary" component="p">
                Max:{" "}
                <span>
                  <b>{maxTemperature}</b>
                </span>
                &deg;C
              </Typography>
            </Grid>
          </Grid>
          <Grid container className={classes.sunriseSunset}>
            <Grid item xs={12}>
              <Typography variant="h6" color="textPrimary" component="h6">
                Sunrise & Sunset
              </Typography>
            </Grid>
            <Grid item xs={6} className={classes.sunrise}>
              <Typography variant="body1" color="textSecondary" component="div">
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
              <Typography variant="body1" color="textSecondary" component="div">
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
          <Grid container className={classes.wind}>
            <Grid item xs={12}>
              <Typography variant="h6" color="textPrimary" component="h6">
                Wind
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body1" color="textSecondary" component="p">
                Speed:{" "}
                <span>
                  <b>{windSpeed}</b>
                </span>{" "}
                m/s
              </Typography>
              <Typography variant="body1" color="textSecondary" component="p">
                Deg:{" "}
                <span>
                  <b>{windDegrees}</b>
                </span>
                &deg;
              </Typography>
              <Typography variant="body1" color="textSecondary" component="p">
                Gust:{" "}
                <span>
                  <b>{windGust}</b>
                </span>{" "}
                m/s
              </Typography>
            </Grid>
            <Grid item xs={6} className={classes.windLogo}>
              <Typography variant="body1" color="textSecondary" component="div">
                <img src={wind} alt="windLogo" className={classes.sunsetLogo} />
              </Typography>
            </Grid>
          </Grid>
          <Grid container className={classes.additionalDetails}>
            <Grid item xs={12}>
              <Typography variant="h6" color="textPrimary" component="h6">
                Additional Details
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1" color="textSecondary" component="p">
                Humidity:{" "}
                <span>
                  <b>{humidity}</b>
                </span>
                %
              </Typography>
              <Typography variant="body1" color="textSecondary" component="p">
                Pressure:{" "}
                <span>
                  <b>{pressure}</b>
                </span>{" "}
                hPa
              </Typography>
              <Typography variant="body1" color="textSecondary" component="p">
                Clouds:{" "}
                <span>
                  <b>{cloudPercentage}</b>
                </span>
                %
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default Weather;
