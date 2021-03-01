import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai'
import Button from '../Button/Button';

const Search = props => {
    return (
        <article>
            <img src={props.val.picture.large} />
            <time></time>
            <h3>{props.val.name.first} {props.val.name.last}</h3>
            <p>{props.val.name.first} Liked Your Photo </p>
            <Button btnText='delete' method={props.method} />
        </article>
    );
}
export default Search;