import React, {useState} from 'react';
import './scss/searchBar.scss';
import WeatherNowContext from "../hooks/use-weatherNow-context";
import SearchAdditionalLocations from "./SearchAdditionalLocations";

const SearchBar = () => {
    const {getSearchedLocation, searchedData, isSelectVisible} = WeatherNowContext();
    const [searchedLocation, setSearchedLocation] = useState('');


    const handleChange = (event) => {
        setSearchedLocation(event.target.value);
    }

    const handleSearch = (event) => {
        event.preventDefault();
        getSearchedLocation(searchedLocation);
    }
    console.log('searchedData', searchedData);

    return (
        <div className="inputContainer">
            <form onSubmit={handleSearch}>
                <div className="input-wrapper">
                    <input type="text"
                           autoComplete="off"
                           name="location"
                           placeholder="Enter a town, city or postcode"
                           onChange={handleChange}
                    />
                </div>
                <div className="input-wrapper">
                    <button>Search</button>
                </div>
            </form>
            {isSelectVisible &&
                <SearchAdditionalLocations/>
            }
        </div>
    );
}

export default SearchBar;