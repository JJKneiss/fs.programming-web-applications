import React, { Component } from 'react';
export default class Inline extends Component {
    render() {
        return (
            <div>Hello! This is exported inline!</div>
        )
    }
}
class Outline extends Component {
    render() {
        return (
            <div>Hello! This is exported!</div>
        )
    }
}

const MyComponent = props => {
    return (
        <div>Hello! This is a Const Prop!</div>
    )
}
export { Outline, MyComponent }