import React, { Component } from 'react';

import Header from '../components/Header/Header';
import Nav from '../components/Nav/Nav';
import Footer from '../components/Footer/Footer';

class Messages extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <section>
                    <h2>Messages</h2>
                </section>
                <Footer />
            </div>
        );
    }
}
export default Messages;
