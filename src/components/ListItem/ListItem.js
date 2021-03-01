import React from 'react';
import Button from '../Button/Button'
import { AiOutlineDelete } from 'react-icons/ai'
import './ListItem.css'

const ListItem = props => {
    return (
        <article key={props.id}>
            <h3>{props.val.title}</h3>
            <p>{props.val.desc}</p>
            <button onClick={props.method}> <AiOutlineDelete size={25} /></button>
        </article>
    );
}
export default ListItem;