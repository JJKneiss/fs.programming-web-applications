import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai'
import './Search.css'

const Search = props => {
    return (
        <form className='search'>
            <AiOutlineSearch size={20} />
            <input placeholder='Search' />
        </form >
    );
}
export default Search;