import React from 'react';

import './SearchBar.css';

const SearchBar = (props) => {
    const {searchBar, pageDisplayed, handleChange} = props
    return (
        <div className="search-container">
            <input className="search-bar" name="searchBar" type="text" value={searchBar} placeholder={pageDisplayed==="news" ? "search a station name to list late trains" : "search to list stations with matching names"} onChange={(e) => {handleChange(e)}}/>
        </div>
    )
}

export default SearchBar;