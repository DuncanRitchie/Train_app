import React from 'react';
import './SearchBtn.css';

const SearchBtn = (props) => {
    const {handleSearchNews} = props
    return (
        <div className="search-btn">
            <button className="search-btn" onClick={handleSearchNews}>Search</button>
        </div>
    )
}

export default SearchBtn;