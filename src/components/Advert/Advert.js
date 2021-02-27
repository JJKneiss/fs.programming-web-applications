import React from 'react';
import '../Advert/Advert.css';
const Advert = props => {
    return (
        <a className="advert" key={props.id}>
            <img src={props.val.img} alt={props.val.alt} />
        </a>
    );
}
export default Advert;