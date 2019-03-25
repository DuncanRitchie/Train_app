import React from 'react';
import NewsCard from './NewsCard';
import HeaderBar from './../home/HeaderBar';
import SearchBar from './../SearchBar';
import SearchBtn from './../SearchBtn';
import './NewsPage.css'

const NewsPage = (props) => {
    const {lateTrains, pageDisplayed, searchBar, handleChange, handleSearchNews} = props
    return (
        <div>
            <HeaderBar title="service disruption news"/>
            <SearchBar handleChange={handleChange} pageDisplayed={pageDisplayed} searchBar={searchBar}/>
            <SearchBtn handleSearchNews={handleSearchNews}/>
            <div className="news-container">
                {lateTrains.map(delayedTrain => {
                        return <NewsCard lateBy={delayedTrain.aimed_departure_time} expectedDeparture={delayedTrain.expected_departure_time}lateTrainOperator={delayedTrain.operator_name} destinationName={delayedTrain.destination_name}/>
                    })
                }
            </div>
            
        </div>
    )
}

export default NewsPage;