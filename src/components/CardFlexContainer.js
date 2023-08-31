import React from 'react';
import WeatherCard from './WeatherCard';
import './scss/cardFlexContainer.scss';

const CardFlexContainer = () => {
    return (
        <React.Fragment>
            <section className="main-section">
                <WeatherCard/>
                <WeatherCard/>
                <WeatherCard/>
                <WeatherCard/>
                <WeatherCard/>
            </section>
        </React.Fragment>
    );
}

export default CardFlexContainer;