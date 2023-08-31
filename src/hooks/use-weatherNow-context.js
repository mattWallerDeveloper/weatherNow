import {useContext} from 'react';
import WeatherNowContext from '../context/WeatherNowContext';

const useWeatherNowContext = () => {
    return useContext(WeatherNowContext);
}

export default useWeatherNowContext;