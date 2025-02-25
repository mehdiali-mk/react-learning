import WeatherInfo from "./WeatherInfo";
import "./WeatherDetail.css";

export default function WeatherDetail({
  realFeel,
  windSpeed,
  humidity,
  clouds,
}) {
  return (
    <div className="weather-detail">
      <div className="row">
        <WeatherInfo
          iconClass={"fa-solid fa-temperature-three-quarters"}
          detailText="Real Feel"
          value={realFeel + "°"}
        />
        <WeatherInfo
          iconClass={"fa-solid fa-wind"}
          detailText={"Wind"}
          value={windSpeed + " Km/h"}
        />
      </div>
      <div className="row">
        <WeatherInfo
          iconClass={"fa-solid fa-droplet"}
          detailText={"Humidity"}
          value={humidity + "%"}
        />
        <WeatherInfo
          iconClass={"fa-solid fa-cloud"}
          detailText={"Clouds"}
          value={clouds + "%"}
        />
      </div>
    </div>
  );
}
