import React, { Component } from "react";
import SearchBar from "./components/searchbar";
import VideoDetail from "./components/video-detail";
import VideoList from "./components/video-list";
import axios from "axios";

class App extends Component {
  state = {
    searchTerm: '',
    data: {},
    videoId: '',
    title: '',
    description: ''
  }
  handleChange = ({ target: { value: searchTerm } }) => this.setState({ ...this.state, searchTerm });

  handleSelect = (videoId, title, description) => this.setState({ ...this.state, videoId, title, description });

  componentDidUpdate(prevProps, prevState) {
    const getYoutubeVideos = () => {
      const baseurl = 'https://www.googleapis.com/youtube/v3/search';
      const key = 'AIzaSyCtZYSddip0XXw5R61iJNZvyjK4n2z9-Rc';
      const type = 'video';
      const part = 'snippet';
      const q = this.state.searchTerm;

      const url = `${baseurl}?type=${type}&part=${part}&key=${key}&q=${q}`;
      axios.get(url)
        .then(response => this.setState({ ...this.state, data: response.data }))
        .catch(error => console.log("Error"));
    }

    if (prevState.searchTerm !== this.state.searchTerm) getYoutubeVideos();

  }
  render() {
    return (
      <div className='container'>
        <SearchBar handleChange={this.handleChange} searchTerm={this.state.searchTerm} />
        <div className="row">
          <VideoDetail
            videoId={this.state.videoId}
            title={this.state.title}
            description={this.state.description}
          />
          <VideoList items={this.state.data.items || []} handleSelect={this.handleSelect} />
        </div>
      </div>
    );
  }

}

export default App;

