import React from 'react';
import ResultCard from './ResultCard';
import './ResultPage.css'

import HeaderBar from './HeaderBar'

const ResultPage = (props) => {
    return (
        <div>
            <HeaderBar title="live times & tickets"/>
            <div className='result-container'>
                <ResultCard/>
                <ResultCard/>
                <ResultCard/>
                
            </div>
        </div>
    )
}

export default ResultPage;