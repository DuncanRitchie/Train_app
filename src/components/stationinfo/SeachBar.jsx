import React from 'react';
import './SearchBar.css';

const SearchBar = (props) => {
    return (
        <div className="search-container">
            <input className="search-bar" type="text" value={props.stationInfo} name="stationInfo" placeholder="learn more about each station" onChange={(e) => {props.handleSearch(e)}}/>
        </div>
    )
}

export default SearchBar;