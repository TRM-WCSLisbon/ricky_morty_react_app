import React from "react";
import { Link } from "react-router-dom";
import API from "../API";
import {
  HeaderDetails,
  Container,
  CardGridDetails,
  CardDetails,
} from "./styles";
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
    const {
      name,
      air_date,
      episode,
      character,
      url,
      created,
    } = this.state.episode;
    return (
      <div>
        <HeaderDetails>
          <header>
            <h1>{this.state.episode && name}</h1>
          </header>
        </HeaderDetails>
        <Container>
          <CardGridDetails>
            <CardDetails>
              <div>
                <div className="column-left">
                  <img
                    src={this.state.episode && EpisodeImg}
                    alt={this.state.episode && name}
                  />
                </div>
                <div className="column-right">
                  {/* <h1>Name: {this.state.episode.name}</h1> */}
                  <ul>
                    <li>
                      <h3>Episode:</h3>{" "}
                      <span>{this.state.episode && episode}</span>
                    </li>
                    <li>
                      <h3>Air Date:</h3>{" "}
                      <span>{this.state.episode && air_date}</span>
                    </li>
                    {/* <li>
                      <h3>URL:</h3> <span>{this.state.episode && url}</span>
                    </li> */}
                    <li>
                      <h3>Created Date:</h3>{" "}
                      <span>{this.state.episode && created}</span>
                    </li>
                  </ul>
                  <button>
                    <Link to="/episodes">Return to Episodes</Link>
                  </button>{" "}
                </div>
              </div>
            </CardDetails>
          </CardGridDetails>
        </Container>
      </div>
    );
  }
}

export default EpisodesDetails;
