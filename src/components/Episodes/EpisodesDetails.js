/* eslint-disable react/button-has-type */
/* eslint-disable no-unreachable */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/state-in-constructor */
import React from 'react';
import { Link } from 'react-router-dom';
import API from '../API';
import {
  HeaderDetails,
  Container,
  CardGridDetails,
  CardDetails,
} from './styles';
// import EpisodeImg from "./image.png";
import Season1 from './season1.jpg';
import Season2 from './season2.jpg';
import Season3 from './season3.jpg';
import Season4 from './season4.jpg';

class EpisodesDetails extends React.Component {
  state = {
    episode: {},
    character: [],
  };

  componentDidMount() {
    this.getEpisode();
    this.getCharacters();
    // console.log(this.state.location);
  }

  componentDidUpdate(prevProps) {
    // console.log(prevProps);
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.getEpisode();
    }
  }

  getEpisode = () => {
    const episodeId = Number(this.props.match.params.id);
    // console.log(this.props);
    // console.log(episodeId);
    API.get(`/episode/${episodeId}`).then(
      (response) => this.setState({ episode: response.data }),
      // console.log(this.state.episode)
    );
  };

  getCharacters = () => {
    const episodeId = Number(this.props.match.params.id);
    API.get(`/episode/${episodeId}`).then((response) =>
      // console.log(typeof response.data.characters, response.data.characters)
      response.data.characters
        .map((char) => char.split('character/')[1])
        .map((char) => this.setState({ character: [...this.state.character, char] })));
  };

  returnEpisodeImage = (season) => {
    // console.log(season);
    switch (true) {
      case season.includes('S01'):
        return Season1;
        break;
      case season.includes('S02'):
        return Season2;
        break;
      case season.includes('S03'):
        return Season3;
        break;
      default:
        return Season4;
    }
  };

  render() {
    return (
      <div>
        <HeaderDetails>
          <header>
            <h1>{this.state.episode && this.state.episode.name}</h1>
          </header>
        </HeaderDetails>

        <Container>
          <CardGridDetails>
            <CardDetails>
              <div>
                <div className="column-left">
                  <img
                    src={
                      this.state.episode.episode
                      && this.returnEpisodeImage(this.state.episode.episode)
                    }
                    alt={this.state.episode && this.state.episode.name}
                  />
                  <button>
                    <Link to="/episodes?page=1">Go to Episode List</Link>
                  </button>
                </div>
                <div className="column-right">
                  {/* <h1>Name: {this.state.episode.name}</h1> */}
                  <ul>
                    <li>
                      <h3>Episode:</h3>
                      {' '}
                      <span>
                        {this.state.episode && this.state.episode.episode}
                      </span>
                    </li>
                    <li>
                      <h3>Air Date:</h3>
                      {' '}
                      <span>
                        {this.state.episode && this.state.episode.air_date}
                      </span>
                    </li>
                    {/* <li>
                      <h3>URL:</h3> <span>{this.state.episode && url}</span>
                    </li> */}
                    <li>
                      <h3>Created Date:</h3>
                      {' '}
                      <span>
                        {this.state.episode && this.state.episode.created}
                      </span>
                    </li>
                    <li>
                      <h3>Characters: </h3>
                      {' '}
                      <span>
                        {this.state.character
                          && this.state.character.map((char) => (
                            <li>
                              <Link to={`/episodes/${char}`}>{char}</Link>
                            </li>
                          ))}
                      </span>
                    </li>
                  </ul>
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
