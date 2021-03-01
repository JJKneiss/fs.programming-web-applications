import React, { Component } from 'react';

import Header from '../components/Header/Header';
import Nav from '../components/Nav/Nav';
import Footer from '../components/Footer/Footer';
import Input from '../components/Input/Input';
import Button from '../components/Button/Button';


class Profile extends Component {
    state = {
        inputs: [{
            label: 'Username'
        },
        {
            label: 'First Name'
        },
        {
            label: 'Last Name'
        },
        {
            label: 'Address'
        },
        {
            label: 'City'
        },
        {
            label: 'Zip'
        }]
    }
    render() {
        let inputList = this.state.inputs.map((element, index) => {
            return <Input key={index} val={element} />
        });
        return (
            <div className="App">
                <Header />
                <h2>Profile</h2>
                <form>
                    <div>
                        <img />
                        <Button btnText='Change Picture' />
                    </div>
                    {inputList}
                    <Button btnText='Update Profile' />
                </form>
                <Footer />

            </div >

        );
    }
}
export default Profile;
