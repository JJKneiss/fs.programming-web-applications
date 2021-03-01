import React from 'react';
import '../Advert/Advert.css';
const Advert = props => {
    return (
        <a key={props.id}>
            <img src={props.img} alt={props.alt} />
        </a>
    );
}
export default Advert;