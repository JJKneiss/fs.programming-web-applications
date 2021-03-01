import React from 'react';
import { AiOutlineSetting, AiOutlineUser } from 'react-icons/ai'
import { FaFacebookF } from 'react-icons/fa'
import Nav from '../Nav/Nav';
import Advert from '../Advert/Advert';
import { NavLink } from 'react-router-dom';
import Search from "../Search/Search";

import '../Header/Header.css'

const Header = props => {
    return (
        <header>
            <ul>
                <li>
                    <h1><FaFacebookF /> FaceNook</h1>
                </li>
                <li><Search /></li>
                <li><NavLink to="/Profile"><AiOutlineSetting size={30} /></NavLink></li>
                <li><NavLink to="/Profile"><AiOutlineUser size={30} /></NavLink></li>
            </ul>
            <li><Nav /></li>
            <li>
                <ul className='adverts'>
                    <li><Advert img={'src/images/logo192.png'} /></li>
                    <li><Advert /></li>
                </ul>
            </li>
        </header >
    );
}

export default Header;