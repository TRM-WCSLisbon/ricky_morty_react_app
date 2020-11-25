import React from "react";
import { Link } from "react-router-dom";
import API from "../API";
import EpisodeImg from "./image.png";

class EpisodesDetails extends React.Component {
  state = {
    episode: {},
  };

  componentDidMount() {
    this.getEpisodes();
    //console.log("hello");
  }

  componentDidUpdate(prevProps) {
    console.log(prevProps);
    if (prevProps.match.params.id !== this.state.episode.id) {
      this.getEpisodes();
    }
  }

  getEpisodes = () => {
    const episodeId = Number(this.props.match.params.id);
    //console.log(this.props);
    // console.log(episodeId);
    API.get(`/episode/${episodeId}`).then((response) =>
      //console.log(response.data)
      this.setState({ episode: response.data })
    );
  };

  render() {
    // console.log(this.state.episode);
    return (
      <div>
        <img
          src={EpisodeImg}
          alt={this.state.episode && this.state.episode.name}
        />
        <p>Name: {this.state.episode && this.state.episode.name}</p>
        {/* <p>Episode: {this.state.episode && this.state.episode.episode}</p>
        <p>Created: {this.state.episode && this.state.episode.created}</p>
        <p>URL: {this.state.episode && this.state.episode.url}</p>
        <button>
          <Link to="/episodes">Return to Episodes</Link>
        </button> */}
      </div>
    );
  }
}

export default EpisodesDetails;
