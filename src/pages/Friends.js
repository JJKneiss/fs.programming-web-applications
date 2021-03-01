import React, { Component } from 'react';

import Header from '../components/Header/Header';
import Nav from '../components/Nav/Nav';
import Footer from '../components/Footer/Footer';
import YouTubeVideo from '../components/YouTubeVideo/YouTubeVideo';

class Friends extends Component {
    render() {
        let youtubeVideoList = this.state.videos.map((element, index) => {
            return <YouTubeVideo key={index} videoId={element.id} />
        });
        return (
            <div className="App">
                <Header />
                <h2>Watch</h2>
                <section>
                    {youtubeVideoList}
                </section>
                <Footer />
            </div>
        );
    }
}
export default Watch;
