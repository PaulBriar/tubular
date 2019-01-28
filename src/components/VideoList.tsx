import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos }:any) => {
    const renderedList = videos.map((video:any) => {
        return <VideoItem video={ video }/>
    });
    return <div>{renderedList}</div>
};

export default VideoList;