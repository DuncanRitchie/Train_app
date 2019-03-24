import React from 'react';
import StationInfoCard from './StationInfoCard';
import HeaderBar from '../home/HeaderBar';
import SearchBar from '../SearchBar';
import './StationPage.css'

const NewsPage = (props) => {
    return (
        <div>
            <HeaderBar title="station information"/>
            <SearchBar handleChange={props.handleChange} pageDisplayed={props.pageDisplayed} searchBar={props.searchBar}/>
            <div className="news-container">
                <StationInfoCard stationName="Lorem Ipsum..." stationInfo="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id porttitor lectus. Sed blandit convallis tortor. Nam sodales nisl eget odio placerat elementum"/>
                <StationInfoCard stationName="Lorem Ipsum..." stationInfo="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id porttitor lectus. Sed blandit convallis tortor. Nam sodales nisl eget odio placerat elementum"/>
                <StationInfoCard stationName="Lorem Ipsum..." stationInfo="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id porttitor lectus. Sed blandit convallis tortor. Nam sodales nisl eget odio placerat elementum"/>
            </div>
            
        </div>
    )
}

export default NewsPage;