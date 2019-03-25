import React from 'react';
import './SearchBar.css';

const SearchBar = (props) => {
    const {searchBar, pageDisplayed, handleChange, handleSearch} = props
    return (
        <div className="search-container">
            <input className="search-bar" name="searchBar" type="text" value={searchBar} placeholder={pageDisplayed==="news" ? "type a station name to list late trains" : "type something to list stations with matching names"} onChange={(e) => {handleChange(e)}}/>
            <button onClick={handleSearch}>Search</button>
        </div>
    )
}

export default SearchBar;