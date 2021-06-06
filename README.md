# Weather App

1. This is a weather application, that shows the current weather data of cities (over 200,000+) using `openweather - API`
2. Upon installation, it asks for user's current location and displays weather data accordingly (If user gives permission)
3. User can search for a city using the searchbar
4. Additional data like sunrise & sunset, wind data, humidity, pressure etc. can also be found when user clicks on the additional details icon (bottom - right)

#### Important: Made for mobile screens, might not look appealing for larger screen sizes! <br>

#### Feel free to suggest changes / improvements

## Installation

1. Fork / Clone the repo
2. Run command `npm install`
3. Create new .env file in the parent folder
4. Add the following lines inside the .env file <br>
   `REACT_APP_API_URL = 'https://api.openweathermap.org/data/2.5'` <br>
   `REACT_APP_API_KEY = 'YOUR API KEY'` <br>
   `REACT_APP_ICON_URL = 'https://openweathermap.org/img/w'` <br>
5. Replace `'YOUR API KEY'` with your API key from openweather API
6. Start the application by typing `npm start`

## Demo

### Default Page

(User's current location, mine was Chennai when I made the app) <br><br>
![default](https://user-images.githubusercontent.com/65371747/120936457-7b394400-c725-11eb-8453-d84329e08438.jpg) <br><br>

### Additional details

Additional details displayed, when user clicks on the button <br><br>
![additional](https://user-images.githubusercontent.com/65371747/120936455-7a081700-c725-11eb-9d7a-5484a2cca0b5.jpg)

## Tech Stach

1. `React`
2. `Material-UI`

## Open weather API

https://openweathermap.org/api
