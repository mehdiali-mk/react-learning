import "./CurrentWeather.css";
import Title from "./Title";
import Description from "./Description";

function roundOf2(number) {
  number = Number(number);
  return number.toFixed(2);
}

export default function CurrentWeather({
  cityName,
  longitude,
  latitude,
  weatherCondition,
  temperature,
}) {
  return (
    <div className="current-weather">
      <div className="current-weather-info">
        <div className="header-info">
          <Title titleText={cityName} />
          <Description
            descriptionText={"Longitude: " + roundOf2(longitude) + "°"}
          />
          <Description
            descriptionText={"Latitude: " + roundOf2(latitude) + "°"}
          />
        </div>
        <div className="temperature">
          <Title titleText={weatherCondition} />
          <Title titleText={temperature + "°"} fontSize="5.2" />
        </div>
      </div>
      <div className="weather-icon">
        <i className="fa-solid fa-sun"></i>
      </div>
    </div>
  );
}
