import React, { useState } from 'react';
import Button from '../Button/Button'
// import './footer.css'

const ListItem = props => {
    return (
        <article key={props.id}>
            <h3>{props.val.title}</h3>
            <p>{props.val.desc}</p>
            <Button btnText='Delete' method={props.method} />
        </article>
    );
}
export default ListItem;