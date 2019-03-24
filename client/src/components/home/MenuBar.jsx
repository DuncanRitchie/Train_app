import React from 'react';
import './MenuBar.css'

const MenuBar = (props) => {
    return (
        <ul className="nav-bar">
            <li><a className="nav-link" onClick={()=>props.handlePageDisplayed("news")}>news</a></li>
            <li><a className="nav-link" onClick={()=>props.handlePageDisplayed("train")}>home</a></li>
            <li><a className="nav-link" onClick={()=>props.handlePageDisplayed("station")}>station</a></li>
        </ul>
    )
}

export default MenuBar;