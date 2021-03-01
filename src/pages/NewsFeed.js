import React, { Component } from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import ListItem from '../components/ListItem/ListItem';
import PostForm from '../components/PostForm/PostForm';
import Advert from '../components/Advert/Advert';
import Button from '../components/Button/Button';

class NewsFeed extends Component {
    state = {
        formInput: [{
        }],
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
        let submit = e.target.parentNode.parentNode.querySelector('button');
        const isTitleEmpty = (this.state.title === undefined || this.state.title === '');
        const isDescEmpty = (this.state.desc === undefined || this.state.desc === '');
        if (isTitleEmpty || isDescEmpty) {
            submit.disabled = true;
        }
        else {
            submit.disabled = false;
        }
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
    deleteNewsPost = key => {
        this.state.newsfeed.splice(key, 1);
        this.setState({ newsfeed: this.state.newsfeed });
    }

    render() {
        let newsfeedList = this.state.newsfeed.map((element, index) => {
            return <ListItem key={index} val={element} method={() => this.deleteNewsPost(index)} />
        });
        let advertList = this.state.advert.map((element, index) => {
            return <Advert key={index} val={element} />
        });
        return (
            <div className="App">
                <Header />
                <section className='adverts'>
                    Ads
                    {advertList}
                </section>
                <PostForm getUserInput={this.getUserInput} addPost={this.addNewsPost} />
                <section>
                    Posts
                    {newsfeedList}
                </section>

                <Footer />
            </div >
        );
    }
}
export default NewsFeed;