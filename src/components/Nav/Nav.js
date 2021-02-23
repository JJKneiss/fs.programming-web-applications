import React from 'react';
import { NavLink } from 'react-router-dom';
// import './nav.css'

const Nav = props => {
    return (
        <nav>
            <ul>
                <li><NavLink to="/Newsfeed">Newsfeed</NavLink></li>
                <li><NavLink to="/Messages">Messages</NavLink></li>
                <li><NavLink to="/Watch">Watch</NavLink></li>
                <li><NavLink to="/Friends">Friends</NavLink></li>
            </ul>
        </nav>
    );
}

export default Nav;