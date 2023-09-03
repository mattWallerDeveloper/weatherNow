import React from 'react';
import './scss/searchBar.scss';
import WeatherNowContext from "../hooks/use-weatherNow-context";

const SearchBar = () => {
    const {searchedData, getLocationWeather} = WeatherNowContext();

      const handleSelect = (selectedLocation) => {
        getLocationWeather(selectedLocation.target.value);
    }

    return (
        <div className="inputContainer">
            <div className="input-wrapper">
                <select id="locations" name="locations" onChange={handleSelect}>
                    <option key="" value="Please select area" disabled selected hidden>Please select area...</option>
                    {searchedData.map((location, index) =>{
                       return(
                            <option key={index} value={location.id}>
                                {location.name}, {location.country}
                            </option>
                        )
                    })}
                </select>
            </div>
        </div>
    )
}

export default SearchBar;