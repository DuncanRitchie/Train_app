import React from 'react';
import './NewsCard.css';

const NewsCard = (props) => {
    return (
        <div className='news-card'>
            <h4>{props.newsTitle}</h4>
            <p>{props.newsDescription}</p>
        </div>
    )
}

export default NewsCard;