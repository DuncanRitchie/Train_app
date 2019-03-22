import React from 'react';
import './HeaderBar.css';

const HeaderBar = (props) => {
    return (
        <div className='header-bar'>
            <h2>{props.title}</h2>
        </div>
    )
}

export default HeaderBar