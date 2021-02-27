import React, { Component } from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import ListItem from '../components/ListItem/ListItem';
import PostForm from '../components/PostForm/PostForm';
import Advert from '../components/Advert/Advert';

class NewsFeed extends Component {
    state = {
        newsfeed: [{
            title: "home",
            desc: "Description"
        },
        {
            title: "new home",
            desc: "New Description"
        },
        {
            title: "old home",
            desc: "old Description"
        }],

        advert: [{
            img: "Photo",
            alt: "Description"
        },
        {
            img: "Photo",
            alt: "Description"
        }]
    }
    // Get Values
    getUserInput = e => {
        e.preventDefault();
        this.setState({ [e.target.name]: e.target.value });
    }
    // add function
    addNewsPost = e => {
        e.preventDefault();
        this.setState({
            newsfeed: [...this.state.newsfeed,
            {
                title: this.state.title,
                desc: this.state.desc
            }]
        });
    }
    // delete function
    deleteNewsPost = e => {
        e.preventDefault();
        // e.target.parentNode.remove();
        // this.setState({
        //     newsfeed: [...this.state.newsfeed,
        //     {
        //         title: this.state.title,
        //         desc: this.state.desc
        //     }]
        // });
    }

    render() {
        let newsfeedList = this.state.newsfeed.map((element, index) => {
            return <ListItem key={index} val={element} method={this.deleteNewsPost} />
        });
        let advertList = this.state.advert.map((element, index) => {
            return <Advert key={index} val={element} />
        });
        return (
            <div className="App">
                <Header />
                <PostForm getUserInput={this.getUserInput} addPost={this.addNewsPost} />
                {newsfeedList}
                {advertList}
                <Footer />
            </div >
        );
    }
}
export default NewsFeed;