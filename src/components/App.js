import React from "react";
import SearchBar from "./Searchbar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null,
  };
  handleSubmit = async (termFromSearchBar) => {
    const response = await youtube.get("/search", {
      params: {
        q: termFromSearchBar,
      },
    });

    this.setState({
      videos: response.data.items,
    });
    console.log("this is resp", response);
  };
  handleVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="container">
        <SearchBar handleFormSubmit={this.handleSubmit} />

        <div className="col-10">
          <VideoDetail video={this.state.selectedVideo} />

          <VideoList
            handleVideoSelect={this.handleVideoSelect}
            videos={this.state.videos}
          />
        </div>
      </div>
    );
  }
}

export default App;
