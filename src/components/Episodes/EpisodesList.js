import React from "react";
import axios from "axios";
import EpisodeDetails from "./EpisodesDetails";
import SingleEpisodeDetail from "./SingleEpisodeDetail";

class EpisodeList extends React.Component {
  // stores all the changes}
  state = {
    episodes: [],
  };

  //   runs after render ()
  componentDidMount() {
    this.getEpisodes();
  }

  //   gets data from API
  getEpisodes = () => {
    axios
      .get("https://rickandmortyapi.com/api/episode/")
      .then((response) => this.setState({ episodes: response.data.results }));
  };

  render() {
    return (
      <div>
        {/* goes to episodes array and returns one by one */}

        {this.state.episodes.map((episode) => (
          // render Episode component by passing all keys to as a "props" using spread operator
          <EpisodeDetails {...episode} key={episode.id} />
        ))}
      </div>
    );
  }
}

export default EpisodeList;
