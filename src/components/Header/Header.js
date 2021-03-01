import React from 'react';
import { AiOutlineSetting, AiOutlineUser } from 'react-icons/ai'
import { FaFacebookF } from 'react-icons/fa'
import Nav from '../Nav/Nav';
import { NavLink } from 'react-router-dom';
import Search from "../Search/Search";

import '../Header/Header.css'

const Header = props => {
    return (
        <header>
            <h1><FaFacebookF /> FaceNook</h1>
            <Search />
            <NavLink to="/Profile"><AiOutlineSetting size={30} /></NavLink>
            <NavLink to="/Profile"><AiOutlineUser size={30} /></NavLink>
            <Nav />
        </header >
    );
}

export default Header;