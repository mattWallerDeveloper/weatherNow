import './scss/searchBar.scss';
import WeatherNowContext from "../hooks/use-weatherNow-context";

const SearchBar = () => {
    const {getLocationLongLat} = WeatherNowContext();

    const handleSearch = (event) => {
        getLocationLongLat(event.target.value);
    }

    return (
        <div className="inputContainer">
            <div className="input-wrapper">
                <input type="text"
                       name="location"
                       placeholder="Enter a town, city or postcode"
                       onChange={handleSearch}
                />
            </div>
        </div>
    );
}

export default SearchBar;