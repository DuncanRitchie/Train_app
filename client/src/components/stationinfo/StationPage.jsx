import React from 'react';
import StationInfoCard from './StationInfoCard';
import HeaderBar from '../home/HeaderBar';
import SearchBar from '../SearchBar';
import SearchBtnStn from './../SearchBtnStn';
import './StationPage.css';

const StationPage = (props) => {
    const {stationsSearch, handleSearchStn, handleChange, pageDisplayed, searchBar} = props
    return (
        <div>
            <HeaderBar title="station information"/>
            <SearchBar handleChange={handleChange} pageDisplayed={pageDisplayed} searchBar={searchBar}/>
            <SearchBtnStn handleSearchStn={handleSearchStn}/>
                        
            <div className="news-container">
                {stationsSearch && stationsSearch.map((station) => {
                    return <StationInfoCard key={station.station_code} stationName={station.name} stationInfo={station.station_code}/>
                })}
            </div>
            
        </div>
    )
}

export default StationPage;