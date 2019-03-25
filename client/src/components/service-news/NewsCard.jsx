import React from 'react';
import './NewsCard.css';

const NewsCard = (props) => {
    return (
        <div className='news-card'>
            <h4>{props.lateTrainOperator}</h4>
            <p>{props.trainService}</p>
        </div>
    )
}

export default NewsCard;