import React from 'react';
import WeatherCard from './WeatherCard';
import './scss/cardFlexContainer.scss';
import WeatherNowContext from "../hooks/use-weatherNow-context";

const CardFlexContainer = () => {
    const {mapData, forecastData} = WeatherNowContext();
    const {temperature_2m_max,weathercode,windspeed_10m_max, time} = forecastData;

    console.log(forecastData)

    return (
        <React.Fragment>
            <section className="main-section">
                {mapData.map((data, index) => {
                    const temp = temperature_2m_max[index];
                    const code = weathercode[index];
                    const speed = windspeed_10m_max[index];
                    const date = time[index]
                    return(
                        <WeatherCard
                            key={index}
                            time={date}
                            temp={temp}
                            code={code}
                            speed={speed}
                        />
                    )
                })}
            </section>
        </React.Fragment>
    );
}

export default CardFlexContainer;