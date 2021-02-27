import React from 'react';
import Button from '../Button/Button'
// import './footer.css'

const PostForm = props => {
    return (
        <form onSubmit={props.addPost}>
            <input name='title' value={props.title} placeholder={props.placeholder} onChange={props.getUserInput} />
            <input name='desc' value={props.desc} placeholder={props.placeholder} onChange={props.getUserInput} />
            <Button btnText="Post" />
        </form>
    );
}
export default PostForm;

