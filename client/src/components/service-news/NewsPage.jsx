import React from 'react';
import NewsCard from './NewsCard';
import HeaderBar from './../home/HeaderBar';
import SearchBar from './../SearchBar';
import './NewsPage.css'

const NewsPage = (props) => {
    return (
        <div>
            <HeaderBar title="service disruption news"/>
            <SearchBar handleChange={props.handleChange} pageDisplayed={props.pageDisplayed} searchBar={props.searchBar}/>
            <div className="news-container">
                <NewsCard newsTitle="Lorem Ipsum..." newsDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id porttitor lectus. Sed blandit convallis tortor. Nam sodales nisl eget odio placerat elementum"/>
                <NewsCard newsTitle="Lorem Ipsum..." newsDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id porttitor lectus. Sed blandit convallis tortor. Nam sodales nisl eget odio placerat elementum"/>
                <NewsCard newsTitle="Lorem Ipsum..." newsDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id porttitor lectus. Sed blandit convallis tortor. Nam sodales nisl eget odio placerat elementum"/>
            </div>
            
        </div>
    )
}

export default NewsPage;