import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos }:any) => {
    const renderedList = videos.map((video:any) => {
        return <VideoItem video={ video }/>
    });
    return <div className="ui relaxed divided list">{ renderedList }</div>
};

export default VideoList;