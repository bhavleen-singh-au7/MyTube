import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchTrendingVideos } from "../redux/actions/videoActions";
import VideoListItem from '../components/VideoListItem';

class HomePage extends Component {

  componentDidMount() {
    this.props.fetchTrendingVideos();
  }

  render() {
    return this.props.videos ? (
      <div className="card-deck">
        {this.props.videos.prevPageToken !== undefined ? (<button
          type="button"
          className="btn btn-primary"
          onClick={() => this.props.fetchTrendingVideos(this.props.videos.prevPageToken)}
        >
          Prev Page
        </button>
        ) : null}

        {this.props.videos.items.map(video =>
          <VideoListItem video={video} key={video.id} />
        )}

        {this.props.videos.nextPageToken !== undefined ? (<button
          type="button"
          className="btn btn-success"
          onClick={() => this.props.fetchTrendingVideos(this.props.videos.nextPageToken)}
        >
          Next Page
        </button>
        ) : null}
      </div>
    ) : (
        <h1>Loading videos</h1>
      );
  };
}

const stateMapper = (storeState) => {
  return {
    videos: storeState.videoState.videos
  };
};

const dispatchMapper = { fetchTrendingVideos };

export default connect(stateMapper, dispatchMapper)(HomePage);
