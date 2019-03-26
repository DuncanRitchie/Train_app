import React from 'react';
import './MenuBar.css'

const MenuBar = (props) => {
    return (
        <ul className="nav-bar">
            {["news","home","station"].map((page) => {
                return (
                    <li>
                        {
                            props.pageDisplayed === page
                            ? <span className="nav-link current-page">{page}</span>
                            : <a className="nav-link" href={"/"+page}>{page}</a>
                        }
                    </li>
                )
            })}
        </ul>
    )
}

export default MenuBar;