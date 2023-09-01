import {createContext, useState} from 'react';
import axios from 'axios';


const WeatherNowContext = createContext();

function WeatherNowProvider ({children}) {
    const [searchedData, setSearchedData] = useState([]);
    const [isSelectVisible, setIsSelectVisible] = useState(false);
    const [isButtonVisible, setIsButtonVisible] = useState(false);

    const getSearchedLocation = async (location) => {
        const response = await axios.get(`https://geocoding-api.open-meteo.com/v1/search?name=${location}`)
        try {
            setSearchedData(response.data.results);
        }
        catch(err) {
            alert("Please enter a valid location");
        }
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
        setIsSelectVisible: setIsSelectVisible,
        isSelectVisible: isSelectVisible,
        getLocation: getLocation,
        setIsButtonVisible: setIsButtonVisible,
        isButtonVisible: isButtonVisible
    };

    return (
        <WeatherNowContext.Provider value={valueToShare}>
            {children}
        </WeatherNowContext.Provider>
    );
}

export {WeatherNowProvider};
export default WeatherNowContext;