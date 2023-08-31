import './scss/searchBar.scss';

const SearchBar = () => {
    return (
        <div className="inputContainer">
            <div className="input-wrapper">
                <input type="text" name="location" placeholder="Enter a town, city or postcode"/>
            </div>
        </div>
    );
}

export default SearchBar;