import React from 'react';

import Nav from '../Nav/Nav';
import Search from "../Search/Search";

import '../Header/Header.css'

const Header = props => {
    return (
        <header>
            <Search />
            <div>
                <button>
                    {/* <img alt="profile" /> */}
                </button>
                <button>
                    {/* <img alt="settings" /> */}
                </button>
            </div>
            <Nav />
        </header>
    );
}

export default Header;