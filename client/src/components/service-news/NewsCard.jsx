import React from 'react';
import './NewsCard.css';

const NewsCard = (props) => {
    return (
        <div className='news-card'>
            <h4>🔴 Operator: {props.lateTrainOperator}  </h4>
            <p>Should have departed at {props.lateBy}</p>
            <p>Expected departure time: {props.expectedDeparture}</p>
            <p>Destination: {props.destinationName}</p>
        </div>
    )
}

export default NewsCard;