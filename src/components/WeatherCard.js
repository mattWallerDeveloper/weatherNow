import './scss/weatherCard.scss';
import WeatherDescHelper from "./helpers/WeatherDescHelper";

const WeatherCard = (props) => {
    const {key, time, temp, code, speed} = props;

    return (
        <div className="card" key={key}>
            <div className="dayDate">{time}</div>
            <div className="cardImg">
                {code}
            </div>
            <div className="descriptionContainer">
                <div className="description">
                    <WeatherDescHelper code={code}/>
                </div>
                <div className="description">{temp}</div>
                <div className="description">{speed}</div>
            </div>
        </div>
    )
}

export default WeatherCard;