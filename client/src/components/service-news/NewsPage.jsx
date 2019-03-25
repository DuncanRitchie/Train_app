import React from 'react';
import NewsCard from './NewsCard';
import HeaderBar from './../home/HeaderBar';
import SearchBar from './../SearchBar';
import './NewsPage.css'

const NewsPage = (props) => {
    const {lateTrains, pageDisplayed, searchBar, handleChange, handleSearch} = props
    return (
        <div>
            <HeaderBar title="service disruption news"/>
            <SearchBar handleChange={handleChange} handleSearch={handleSearch} pageDisplayed={pageDisplayed} searchBar={searchBar}/>
            
            <div className="news-container">
                {lateTrains.map(delayedTrain => {
                        return <NewsCard lateTrainOperator={delayedTrain.operator_name} trainService={delayedTrain.destination_name}/>
                    })
                }
            </div>
            
        </div>
    )
}

export default NewsPage;