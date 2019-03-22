import React from 'react';
import './ResultCard.css'

const ResultCard = () => {
    return (
        <div className="result-card">
            <h4 className="time">05:00 > 06:00</h4>
            <h4 className="fare">£15.00</h4>
            <p className="duration">1hr 40m, 2 changes!</p>
        </div>
    )
}


export default ResultCard