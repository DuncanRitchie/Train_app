import React from 'react';
import './MenuBar.css'

const MenuBar = (props) => {
    return (
        <ul className="nav-bar">
            <li><a className="nav-link" href="#">news</a></li>
            <li><a className="nav-link" href="#">home</a></li>
            <li><a className="nav-link" href="#">station</a></li>
        </ul>
    )
}

export default MenuBar;