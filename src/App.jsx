import { Component } from "react";
import "./App.css";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "9ded579baa55597d5f9d778fb9c1b1f2";

class App extends Component {
  state = {
    temperature: "",
    city: "",
    country: "",
    humidity: "",
    description: "",
    error: "",
    weatherVisible: false, // New state for controlling visibility
  };

  getWeather = async (e) => {
    e.preventDefault();

    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    
    try {
      const api = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`
      );
      const data = await api.json();

      if (data.cod === 200) {
        this.setState({
          temperature: data.main.temp,
          city: data.name,
          country: data.sys.country,
          humidity: data.main.humidity,
          description: data.weather[0].description,
          error: "",
          weatherVisible: true, // Show Weather component on successful API call
        });
      } else {
        this.setState({
          temperature: "",
          city: "",
          country: "",
          humidity: "",
          description: "",
          error: "City not found",
          weatherVisible: false, // Hide Weather component on error
        });
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  render() {
    return (
      <div className="app">
        <Form getWeather={this.getWeather} />

        {/* Render Weather component only when weatherVisible is true */}
        {this.state.weatherVisible && (
          <Weather
            temperature={this.state.temperature}
            city={this.state.city}
            country={this.state.country}
            humidity={this.state.humidity}
            description={this.state.description}
            error={this.state.error}
          />
        )}
      </div>
    );
  }
}

export default App;
