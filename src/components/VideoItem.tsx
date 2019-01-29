import React from 'react';
import '../styles/VideoItem.css';

const VideoItem = ({ video }:any) => {
    return (
        <div className="video-item item">
            <img className="ui image" src={video.snippet.thumbnails.medium.url} />
            <div className="content">
                <div className="header">{ video.snippet.title }</div>
            </div>
        </div>
    );
};

export default VideoItem;