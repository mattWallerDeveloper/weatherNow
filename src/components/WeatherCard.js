import './scss/weatherCard.scss';
import WeatherDescHelper from "./helpers/WeatherDescHelper";
import WeatherImageHelper from "./helpers/WeatherImageHelper";
import WeatherNowContext from "../hooks/use-weatherNow-context";

const WeatherCard = (props) => {
    const {units} = WeatherNowContext();
    const {time, temp, code, speed} = props;

    return (
        <div className="card">
            <div className="dayDate">{time}</div>
            <div className="cardImg">
                <WeatherImageHelper code={code}/>
            </div>
            <div className="descriptionContainer">
                <div className="description">
                    <WeatherDescHelper code={code}/>
                </div>
                <br/>
                <div className="description">Temperature:&nbsp;{temp}{units.temperature_2m_max}</div>
                <div className="description">Wind Speed:&nbsp;{speed}{units.windspeed_10m_max}</div>
            </div>
        </div>
    )
}

export default WeatherCard;