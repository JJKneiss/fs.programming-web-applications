import React from 'react';
// import './footer.css'

const ListItem = props => {
    return (
        <article key={props.id}> 
            <h1>{props.val.title}</h1>
            <h2>{props.val.desc}</h2>
            <p>{props.img}</p>
            <button>{props.val.addBtn}</button>
        </article>
    );
}
export default ListItem;