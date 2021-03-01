import React from 'react';
import ButtonCSS from '../Button/Button.css';

const Button = props => {
    return (
        <button onClick={props.method} disabled={props.disabled}>
            {props.btnText}
        </button>
    );
}
export default Button;