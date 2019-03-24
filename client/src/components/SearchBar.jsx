import React from 'react';
import './SearchBar.css';

const SearchBar = (props) => {
    return (
        <div className="search-container">
            <input className="search-bar" name="searchBar" type="text" value={props.searchBar} placeholder={props.pageDisplayed==="news" ? "type a station name to list late trains" : "type something to list stations with matching names"} onChange={(e) => {props.handleChange(e)}}/>
        </div>
    )
}

export default SearchBar;