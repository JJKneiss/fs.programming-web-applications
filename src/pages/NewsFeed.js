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
<<<<<<< HEAD:pwa-0221/src/pages/NewsFeed.js
        this.setState({
            newsfeed: [...this.state.newsfeed,
            {
                title: this.state.title,
                desc: this.state.desc
            }]
        });
=======
        //Keep working on this.
>>>>>>> 873110d2927a3eee05a53ead41b8c8cffa4de52c:src/pages/NewsFeed.js
    }
    // delete function
    deleteNewsPost = e => {
        e.preventDefault();
<<<<<<< HEAD:pwa-0221/src/pages/NewsFeed.js
        // e.target.parentNode.remove();
        // this.setState({
        //     newsfeed: [...this.state.newsfeed,
        //     {
        //         title: this.state.title,
        //         desc: this.state.desc
        //     }]
        // });
=======
        //Keep working on this.
>>>>>>> 873110d2927a3eee05a53ead41b8c8cffa4de52c:src/pages/NewsFeed.js
    }

    render() {
        let newsfeedList = this.state.newsfeed.map((element, index) => {
<<<<<<< HEAD:pwa-0221/src/pages/NewsFeed.js
            return <ListItem key={index} val={element} method={this.deleteNewsPost} />
        });
        let advertList = this.state.advert.map((element, index) => {
            return <Advert key={index} val={element} />
=======
            //Add the arguments in line 35 to line 37.
            return <ListItem key={index} val={element} />
>>>>>>> 873110d2927a3eee05a53ead41b8c8cffa4de52c:src/pages/NewsFeed.js
        });
        return (
            <div className="App">
                <Header />
<<<<<<< HEAD:pwa-0221/src/pages/NewsFeed.js
                <PostForm getUserInput={this.getUserInput} addPost={this.addNewsPost} />
                {newsfeedList}
                {advertList}
=======
                <section>
                    {/* <ListItem /> */}
                    {/* <Button btnText='adfa' /> */}
                    {newsfeedList}
                </section>
>>>>>>> 873110d2927a3eee05a53ead41b8c8cffa4de52c:src/pages/NewsFeed.js
                <Footer />
            </div >
        );
    }
}
export default NewsFeed;