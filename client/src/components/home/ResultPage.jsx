import React from 'react';
import ResultCard from './ResultCard';
import './ResultPage.css'

import HeaderBar from './HeaderBar'

const ResultPage = (props) => {
    const {searchResults, handleBackHome, handlePageDisplayed} = props

    return (
        <div className="resultPage">
            <HeaderBar title="live times & tickets"/>
            <button onClick={()=> handlePageDisplayed("home")}>back</button>
            <div className='result-container'>
                
                {searchResults &&
                    searchResults.map(result => {
                
                    return <ResultCard key={result.service} timetable={result}/>
                })}
                
            </div>
        </div>
    )
}

export default ResultPage;