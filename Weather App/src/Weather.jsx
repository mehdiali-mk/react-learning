import SearchBar from "./SearchBar";
import CurrentWeather from "./CurrentWeather";
import { useState } from "react";
import "./Weather.css";
import WeatherDetail from "./WeatherDetail";

export default function Weather() {
  let [searchText, setSearchText] = useState("");
  let [weatherAttribute, setWeatherAttribute] = useState({
    longitude: "72.6167",
    latitude: "23.0333",
    feelsLike: 27.21,
    humidity: 31,
    windSpeed: 4.12,
    clouds: 33,
    cityName: "Ahmedabad",
    sunrise: 1736387532,
    sunset: 1736426433,
    weatherCondition: "Smoke",
    temperature: 28.02,
  });

  const URL = "https://api.openweathermap.org/data/2.5/weather";
  const APIKEY = "50f281806b06ecc7a08b9021c7be86ca";

  async function getWeatherData() {
    try {
      let response = await fetch(
        `${URL}?q=${searchText}&appid=${APIKEY}&units=metric` // Corrected "matic" to "metric"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch weather data");
      }

      let responseJson = await response.json();
      setWeatherAttribute({
        longitude: responseJson.coord.lon,
        latitude: responseJson.coord.lat,
        weatherCondition: responseJson.weather[0].main,
        temperature: responseJson.main.temp,
        feelsLike: responseJson.main.feels_like,
        humidity: responseJson.main.humidity,
        windSpeed: responseJson.wind.speed,
        clouds: responseJson.clouds.all,
        sunrise: responseJson.sys.sunrise,
        sunset: responseJson.sys.sunset,
        cityName: responseJson.name, // Use name from API response
      });

      console.log("", responseJson); // Use responseJson directly here
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  }

  function searchUpdate(event) {
    setSearchText(event.target.value);
  }

  function searchSubmitUpdate(event) {
    event.preventDefault(); // Prevent form submission default behavior
    getWeatherData();
    setSearchText(""); // Clear search input after fetching
  }

  return (
    <div className="weather">
      <SearchBar
        searchText={searchText}
        searchUpdate={searchUpdate} // Pass function directly
        searchSubmitUpdate={searchSubmitUpdate} // Pass function directly
      />
      {weatherAttribute && (
        <CurrentWeather
          weatherCondition={weatherAttribute.weatherCondition}
          temperature={weatherAttribute.temperature}
          longitude={weatherAttribute.longitude}
          latitude={weatherAttribute.latitude}
          cityName={weatherAttribute.cityName}
        />
      )}
      <WeatherDetail
        realFeel={weatherAttribute.feelsLike}
        windSpeed={weatherAttribute.windSpeed}
        humidity={weatherAttribute.humidity}
        clouds={weatherAttribute.clouds}
      />
    </div>
  );
}
