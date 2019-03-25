import React from 'react';
import './ResultCard.css'

const ResultCard = (props) => {
    const {timetable} = props
    console.log(timetable)
    return (
        <div className="result-card">
            <h4 className="time">{timetable.aimed_departure_time} > {timetable.aimed_arrival_time} </h4>
            <h4 className="fare"></h4>
            <p className="places">{timetable.origin_name} to {timetable.destination_name}</p>
            <p className="train">{timetable.operator_name}</p>
        </div>
    )
}


export default ResultCard