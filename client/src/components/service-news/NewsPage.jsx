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
                {lateTrains.map(lateTrain => {
                        return <NewsCard key={lateTrain.train_uid} delayedTrain={lateTrain}/>
                    })
                }
            </div>
            
        </div>
    )
}

export default NewsPage;