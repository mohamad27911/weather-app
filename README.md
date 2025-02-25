# Weather App

A simple weather application built with React that allows users to search for the current weather conditions in any city and country. The app fetches data from the OpenWeatherMap API and displays temperature, humidity, city, country, and weather description.

---

## Features

- **Search by City and Country:** Enter a city and country to get the current weather.
- **Weather Details:** Displays temperature, humidity, city, country, and weather description.
- **Error Handling:** Shows an error message if the city is not found.
- **Dynamic Rendering:** The weather details are only displayed after a successful API call.

---

## Technologies Used

- **React:** A JavaScript library for building user interfaces.
- **OpenWeatherMap API:** Provides weather data for cities worldwide.
- **CSS:** Basic styling for the app.

---


## Usage

1. **Enter City and Country:**
   - On the homepage, enter the name of a city and its country in the input fields.
   - Example: `City: London`, `Country: GB`.

2. **Submit the Form:**
   - Click the "Get Weather" button to fetch the weather data.

3. **View Weather Details:**
   - If the city is found, the app will display the temperature, humidity, city, country, and weather description.
   - If the city is not found, an error message will be displayed.

---

## API Reference

The app uses the [OpenWeatherMap API](https://openweathermap.org/api) to fetch weather data. The API endpoint used is:

```
http://api.openweathermap.org/data/2.5/weather?q={city},{country}&appid={API_KEY}
```

- **Parameters:**
  - `city`: The name of the city.
  - `country`: The country code (e.g., `GB` for the United Kingdom).
  - `API_KEY`: Your OpenWeatherMap API key.

- **Response:**
  - The API returns weather data including temperature, humidity, city, country, and weather description.

---

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Commit your changes.
4. Push your branch and submit a pull request.

---

## Acknowledgments

- [OpenWeatherMap](https://openweathermap.org/) for providing the weather data API.
- [React](https://reactjs.org/) for the frontend framework.

---


Enjoy using the Weather App! 🌦️
