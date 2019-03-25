import React from 'react';
import './SearchBtn.css';

const SearchBtnStn = (props) => {
    const {handleSearchStn} = props
    return (
        <div className="search-btn">
            <button className="search-btn" onClick={handleSearchStn}>Search</button>
        </div>
    )
}

export default SearchBtnStn;