import React from 'react';
import Spinner from './Spinner';

const VideoDetail = ({ video }:any) => {
    if (!video) {
        return (
            <div className="ui embed">
                <Spinner message="Loading..." />
            </div>
        );
    };

    const videoSrc = `https://www.youtube.com/embed/${ video.id.videoId}`;

    return (
        <div>
            <div className="ui embed">
                <iframe title="Video Player" src={ videoSrc }/>
            </div>
            <div className="ui segment">
                <h4 className="ui header">{ video.snippet.title }</h4>
                <p>{ video.snippet.description }</p>
            </div>
        </div>
    );
};

export default VideoDetail;