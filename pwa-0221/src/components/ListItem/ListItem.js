import React from 'react';
// import './footer.css'

const ListItem = props => {
    return (
        <ul>
            <li>{props.title}</li>
            <li>{props.desc}</li>
            <li>{props.img}</li>
            <li><button>{props.addBtn}</button></li>
        </ul>
    );
}
export default ListItem;