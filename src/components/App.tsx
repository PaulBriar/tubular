import React from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import youtube from '../apis/youtube';

class App extends React.Component<any> {
    state = { videos: [] };

    onTermSubmit = async (term:any) => {
       const res = await youtube.get('/search', {
            params: {
                q: term
            }
        });
        this.setState({ videos: res.data.items });
    };

    render() {
        return (
        <div className="ui container">
            <SearchBar onFormSubmit={this.onTermSubmit}/>
            <VideoList videos={this.state.videos}/>
        </div>
        );
    };
}

export default App;