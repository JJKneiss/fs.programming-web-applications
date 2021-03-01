import React from 'react';
// import './footer.css'

const Input = props => {
    return (
        <div>
            <label>
                {props.val.label}
                <input />
            </label>
        </div>
    );
}
export default Input;