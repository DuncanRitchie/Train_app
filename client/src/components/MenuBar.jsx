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
                            ? <a className="nav-link current-page">{page}</a>
                            : <a className="nav-link" href={"/"+page}>{page}</a>
                        }
                    </li>
                )
            })}
        </ul>
    )
}

export default MenuBar;