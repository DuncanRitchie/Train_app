import React from 'react';
import './StationInfoCard.css';

const NewsCard = (props) => {
    return (
        <div className='stationInfo-card'>
            <h4>{props.stationName}</h4>
            <p>{props.stationInfo}</p>
        </div>
    )
}

export default NewsCard;