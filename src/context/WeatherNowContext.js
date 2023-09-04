import {createContext, useState} from 'react';
import axios from 'axios';


const WeatherNowContext = createContext();

function WeatherNowProvider ({children}) {
    const [searchedData, setSearchedData] = useState([]);
    const [isSelectVisible, setIsSelectVisible] = useState(false);
    const [isButtonVisible, setIsButtonVisible] = useState(false);
    const [mapData, setMapData] = useState([]);
    const [forecastData, setForecastData] = useState([]);
    const [units, setUnits] = useState([]);

    const getSearchedLocation = async (location) => {
        const response = await axios.get(`https://geocoding-api.open-meteo.com/v1/search?name=${location}`)
        try {
            setSearchedData(response.data.results);
        }
        catch(err) {
            alert("Please enter a valid location");
        }
    }

   const getLocationWeather = async (searchedDataID) => {
       const data = searchedData.filter((location) => {
           return location.id == searchedDataID;
       });

       const latitude = data.map((location) => {
           return location.latitude;
       });

       const longitude = data.map((location) => {
           return location.longitude;
       });

       const response = await axios.get(`https://api.open-meteo.com/v1/forecast?&latitude=${latitude[0]}&longitude=${longitude[0]}&daily=weathercode,temperature_2m_max,windspeed_10m_max&timeformat=unixtime&timezone=Europe%2FLondon&forecast_days=5`)
       try {
           setMapData(response.data.daily.time);
           setForecastData(response.data.daily);
           setUnits(response.data.daily_units);
       }
       catch(err) {
           alert("Location not found");
       }
    }

    const valueToShare = {
        getSearchedLocation: getSearchedLocation,
        searchedData: searchedData,
        setIsSelectVisible: setIsSelectVisible,
        isSelectVisible: isSelectVisible,
        setIsButtonVisible: setIsButtonVisible,
        isButtonVisible: isButtonVisible,
        getLocationWeather: getLocationWeather,
        mapData: mapData,
        forecastData: forecastData,
        units: units
    };

    return (
        <WeatherNowContext.Provider value={valueToShare}>
            {children}
        </WeatherNowContext.Provider>
    );
}

export {WeatherNowProvider};
export default WeatherNowContext;