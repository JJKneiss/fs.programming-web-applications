import React, { Component } from 'react';

import Header from '../components/Header/Header';
import UserMessage from '../components/UserMessage.js/UserMessage';
class Messages extends Component {
    state = {
        items: [],
        loading: false
    }
    componentDidMount() {
        fetch("https://randomuser.me/api/?results=5")
            .then((response) => response.json())
            .then((response) => {
                this.setState({
                    items: response.results,
                    loading: true
                })
            })
    }
    // delete function
    deleteNewsPost = key => {
        this.state.items.splice(key, 1);
        this.setState({ items: this.state.items });
    }
    render() {
        let { items, loading } = this.state;
        let messageData = items.map((element, index) => {
            return <UserMessage key={index} val={element} method={() => this.deleteNewsPost(index)} />
        });
        // let messageData = items.map(item => (
        //     <UserMessage
        //         img={item.picture.large}
        //         firstName={item.name.first}
        //         lastName={item.name.last}
        //         method={() => this.deleteNewsPost(item)}
        //     />
        // ))
        if (!loading) {
            return (
                <div className="App">
                    <Header />
                    <section>
                        <h2>Messages</h2>
                        Loading Messages
                    </section>
                </div>
            );
        }
        else {
            return (
                <div className="App">
                    <Header />
                    <section>
                        <h2>Messages</h2>
                        {messageData}
                    </section>
                </div>
            );
        }
    }
}
export default Messages;
