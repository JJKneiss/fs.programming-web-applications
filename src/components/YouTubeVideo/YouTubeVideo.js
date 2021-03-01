import React from 'react';
import YouTube from 'react-youtube';

class YouTubeVideo extends React.Component {
    videoOnReady(event) { event.target.pauseVideo(); }

    render() {
        const opts = {
            height: '390',
            width: '640',
            playerVars: { autoplay: 1 }
        };
        const { videoId } = this.props;
        return <YouTube videoId={videoId} opts={opts} videoOnReady={this._onReady} />;
    }
}

export default YouTubeVideo