import React from 'react';
// import './SearchBar.css';

const SearchBtn = (props) => {
    const {handleSearchNews} = props
    return (
        <div className="search-btn">
            <button onClick={handleSearchNews}>Search</button>
        </div>
    )
}

export default SearchBtn;