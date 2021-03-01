import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai'
import './Search.css'

const Search = props => {
    return (
        <form className='search'>
            <label>
                <AiOutlineSearch size={20} /> Search
                <input />
            </label>

        </form >
    );
}
export default Search;