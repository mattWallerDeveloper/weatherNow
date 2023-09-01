import {createContext, useState} from 'react';
import axios from 'axios';


const WeatherNowContext = createContext();

function WeatherNowProvider ({children}) {
    const [searchedData, setSearchedData] = useState([]);
    const [isSelectVisible, setIsSelectVisible] = useState(false);

    const getSearchedLocation = async (location) => {
        const response = await axios.get(`https://geocoding-api.open-meteo.com/v1/search?name=${location}`)
        setSearchedData(response.data.results);
        response.data.results.length > 1 ? setIsSelectVisible(true) : setIsSelectVisible(false);
    }

   const getLocation = (searchedValue) => {
       console.log('selected location', searchedValue)
    }

    const valueToShare = {
        //I'm aware that if the Key and Value naming match I only need to reference once
        //For example, instead of 'getLocationLongLat: getLocationLongLat', 'getLocationLongLat' is sufficient
        //My preference is to specify both
        getSearchedLocation: getSearchedLocation,
        searchedData: searchedData,
        isSelectVisible: isSelectVisible,
        getLocation: getLocation
    };

    return (
        <WeatherNowContext.Provider value={valueToShare}>
            {children}
        </WeatherNowContext.Provider>
    );
}

export {WeatherNowProvider};
export default WeatherNowContext;