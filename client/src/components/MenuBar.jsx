import React from 'react';
import './MenuBar.css'

const MenuBar = (props) => {
    return (
        <ul className="nav-bar">
            <li><a className={props.pageDisplayed === "news" ? "nav-link current-page" : "nav-link"} href="/news">news</a></li>
            <li><a className={props.pageDisplayed === "home" ? "nav-link current-page" : "nav-link"} href="/">home</a></li>
            <li><a className={props.pageDisplayed === "station" ? "nav-link current-page" : "nav-link"} href="/station">station</a></li>
        </ul>
    )
}

export default MenuBar;