import React, { Component } from 'react';

import Header from '../components/Header/Header';
import Nav from '../components/Nav/Nav';
import Footer from '../components/Footer/Footer';

class Profile extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <Footer />
            </div>
        );
    }
}
export default Profile;
