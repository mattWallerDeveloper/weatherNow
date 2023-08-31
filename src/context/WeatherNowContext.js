import {createContext} from 'react';
import axios, {create} from 'axios';

const WeatherNowContext = createContext();

function WeatherNowProvider ({children}) {

    const valueToShare = {

    };

    return (
        <WeatherNowContext.Provider value={valueToShare}>
            {children}
        </WeatherNowContext.Provider>
    );
}

export {WeatherNowProvider};
export default WeatherNowContext;