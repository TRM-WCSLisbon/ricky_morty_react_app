import React from "react";
import API from "../API";
import { Link, withRouter } from "react-router-dom";
import querystring from "query-string";
import EpisodesDetails from "./EpisodesDetails";

class EpisodesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      episodes: [],
      page: null,
    };
    this.getEpisodes = this.getEpisodes.bind(this);
  }
  componentDidMount() {
    const initialPage = Number(
      querystring.parse(this.props.location.search).page
    );
    console.log(location.search);
    // console.log(querystring.parse(this.props.episode.search));

    this.setState({ page: initialPage });
    // console.log(this.state.page);

    // console.log(currentPage);
    // console.log(this.props);

    this.getEpisodes(initialPage);
  }

  componentDidUpdate() {
    const currentPage = Number(
      querystring.parse(this.props.location.search).page
    );

    if (currentPage !== this.state.page) {
      // console.log("buhh");
      this.getEpisodes(currentPage);
      this.setState({ page: currentPage });
    }

    console.log(currentPage);
  }

  getEpisodes(currentPage) {
    API.get(`/episode?page=${currentPage}`).then((response) =>
      this.setState({ episodes: response.data.results })
    );
  }

  render() {
    return (
      <div>
        <Links />

        {this.state.episodes.map((episode) => (
          <EpisodesDetails {...episode} key={episode.id} />
        ))}

        {this.state.episodes.map((episode) => (
          <div>
            <p key={episode.id}>{episode.id}</p>
            <p key={episode.id}>{episode.name}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default withRouter(EpisodesList);

function Links() {
  return (
    <div>
      <Link to="/episodes?page=1">1</Link>
      <Link to="/episodes?page=2">2</Link>
      <Link to="/episodes?page=3">3</Link>
    </div>
  );
}
