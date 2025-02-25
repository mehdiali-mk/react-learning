import Description from "./Description";
import "./WeatherInfo.css";

export default function WeatherInfo({ iconClass, detailText, value }) {
  return (
    <div className="weather-info">
      <div className="icon">
        <i className={iconClass}></i>
      </div>
      <div className="detail">
        <Description descriptionText={detailText} fontSize={1.8} />
        <h4 className="value">{value}</h4>
      </div>
    </div>
  );
}
