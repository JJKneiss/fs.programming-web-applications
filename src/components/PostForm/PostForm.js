import React from 'react';
import Button from '../Button/Button'
// import './footer.css'

const PostForm = props => {
    return (
        <form onSubmit={props.addPost}>
            <label>
                Title
                <input name='title' value={props.title} placeholder={props.placeholder} onChange={props.getUserInput} />
            </label>
            <label>
                Description
                <input name='desc' value={props.desc} placeholder={props.placeholder} onChange={props.getUserInput} />
            </label>

            <Button btnText="Post" disabled={true} />
        </form >
    );
}
export default PostForm;

