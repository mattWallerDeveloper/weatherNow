import {createContext} from 'react';
import axios from 'axios';

const WeatherNowContext = createContext();

function WeatherNowProvider ({children}) {

    const getLocationLongLat = async (location) => {
        const response = await axios.get(`https://geocoding-api.open-meteo.com/v1/search?name=${location}`)
        console.log(response.data);
    }

    const valueToShare = {
        getLocationLongLat: getLocationLongLat
    };

    return (
        <WeatherNowContext.Provider value={valueToShare}>
            {children}
        </WeatherNowContext.Provider>
    );
}

export {WeatherNowProvider};
export default WeatherNowContext;