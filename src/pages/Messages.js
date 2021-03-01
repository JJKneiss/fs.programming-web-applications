import React, { Component } from 'react';

import Header from '../components/Header/Header';
import Nav from '../components/Nav/Nav';
import Footer from '../components/Footer/Footer';
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
    render() {
        let { items, loading } = this.state;
        let messageData = items.map(item => (
            <article>
                <img src={item.picture.medium} />
                <time></time>
                <h2>{item.name.first} {item.name.last}</h2>
                <p>{item.name.first} Liked Your Photo </p>
            </article>
        ))
        if (!loading) {
            return (
                <div className="App">
                    <Header />
                    <section>
                        <h2>Loading Messages</h2>
                    </section>
                    <Footer />
                </div>
            );
        }
        else {
            return (
                <div className="App">
                    <Header />
                    <section>
                        <h2>{messageData}</h2>
                    </section>
                    <Footer />
                </div>
            );
        }
    }
}
export default Messages;
