import './scss/weatherCard.scss';

const WeatherCard = () => {
    return (
        <div className="card">
            <div className="dayDate">Today</div>
            <div className="cardImg">
                image
            </div>
            <div className="descriptionContainer">
                <div className="description">Light Rain Showers</div>
                <div className="description">3deg</div>
                <div className="description">15 knots</div>
            </div>
        </div>
    );
}

export default WeatherCard;