import React from 'react';
import './MenuBar.css'

const MenuBar = (props) => {
    return (
        <ul className="nav-bar">
            <li>
                {
                    props.pageDisplayed === "news"
                    ? <a className="nav-link current-page">news</a>
                    : <a className="nav-link" href="/news">news</a>
                }
            </li>
            <li>
                {
                    props.pageDisplayed === "home"
                    ? <a className="nav-link current-page">home</a>
                    : <a className="nav-link" href="/">home</a>
                }
            </li>
            <li>
                {
                    props.pageDisplayed === "station"
                    ? <a className="nav-link current-page">station</a>
                    : <a className="nav-link" href="/station">station</a>
                }
            </li>
        </ul>
    )
}

export default MenuBar;