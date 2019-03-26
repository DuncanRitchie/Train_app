import React from 'react';
import './NewsCard.css';

const NewsCard = (props) => {
    const {delayedTrain} = props
    return (
        <div className='news-card'>
            <h4><span role="img" aria-label="Late service">🔴</span> Operator: {delayedTrain.operator_name}  </h4>
            <p>Should have departed at {delayedTrain.aimed_departure_time}}</p>
            <p>Expected departure time: {delayedTrain.expected_departure_time}</p>
            <p>Destination: {delayedTrain.destination_name}</p>
        </div>
    )
}

export default NewsCard;