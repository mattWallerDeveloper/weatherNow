import React, {useState} from 'react';
import './scss/searchBar.scss';
import WeatherNowContext from "../hooks/use-weatherNow-context";
import SearchAdditionalLocations from "./SearchAdditionalLocations";

const SearchBar = () => {
    const {getSearchedLocation, setIsSelectVisible, isSelectVisible, setIsButtonVisible, isButtonVisible} = WeatherNowContext();
    const [searchedLocation, setSearchedLocation] = useState('');

    const handleChange = (event) => {
        setIsButtonVisible(true);
        setIsSelectVisible(false);
        setSearchedLocation(event.target.value);
    }

    const handleSearch = (event) => {
        setIsButtonVisible(false);
        setIsSelectVisible(true);
        event.preventDefault();
        getSearchedLocation(searchedLocation);
    }

    return (
        <div className="inputContainer">
            <form onSubmit={handleSearch}>
                <div className="input-wrapper">
                    <input type="text"
                           pattern=".{2,}"
                           required
                           autoComplete="off"
                           name="location"
                           placeholder="Enter a town or city"
                           onChange={handleChange}
                    />
                </div>
                {isButtonVisible &&
                    <div className="input-wrapper">
                        <button className="buttonOutline">Search</button>
                    </div>
                }
            </form>
            {isSelectVisible &&
                <SearchAdditionalLocations/>
            }
        </div>
    );
}

export default SearchBar;