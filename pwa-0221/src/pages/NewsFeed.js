import React, { Component } from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import ListItem from '../components/ListItem/ListItem';
import Button from '../components/Button/Button';

class NewsFeed extends Component {
    state = {
        newsfeed: [{
            title: "home",
            desc: "Description",
            img: "Hello There",
            addBtn: "Click ME"
        },
        {
            title: "new home",
            desc: "New Description",
            img: "Goodbye",
            addBtn: "Don't CLick Me"
        }]
    }

    // Get Values

    // add function
    addNewsPost = e => {
        e.preventDefault();
    }
    // delete function
    deleteNewsPost = e => {
        e.preventDefault();
    }

    render() {
        let newsfeedList = this.state.newsfeed.map((element, index) => {
            return <ListItem element />
        });
        return (
            <div className="App">
                <Header />
                <section>
                    <ListItem />
                    <Button btnText='adfa' />
                </section>
                <Footer />
            </div>
        );
    }
}
export default NewsFeed;