import React from 'react';
import ResultCard from './ResultCard';
import './ResultPage.css'

import HeaderBar from './HeaderBar'

const ResultPage = (props) => {
    const {searchResults, handleBackHome} = props

    return (
        <div className="resultPage">
            <HeaderBar title="live times &amp; tickets"/>
            <BackBtn handleBackHome={handleBackHome}/>
            <div className='result-container'>
                
                {searchResults &&
                    searchResults.map(result => {
                
                    return <ResultCard key={result.train_uid} timetable={result}/>
                })}
                
            </div>

            
        </div>
    )
}

const BackBtn = ({handleBackHome}) => <button className="back-btn" onClick={handleBackHome}>BACK HOME</button>

export default ResultPage;