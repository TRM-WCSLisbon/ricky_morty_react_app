/* eslint-disable array-callback-return */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/state-in-constructor */
import React, { Component } from 'react';
import { NavLink as Link } from 'react-router-dom';
import ArrowBack from '@material-ui/icons/ArrowBack';
import API from '../API';
import {
  CardDetails,
  CardGridDetails,
  HeaderDetails,
  Container,
  Episodes,
} from './styles';

class CharactersDetails extends Component {
  state = {
    character: [],
    episodes: [],
    originId: [],
    locationId: [],
  };

  componentDidMount() {
    this.getCharacter();
    this.getEpisode();
    this.getOrigin();
    this.getLocation();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.getCharacter();
    }
  }

  getCharacter() {
    const currentCharacterId = Number(this.props.match.params.id);
    API.get(`/character/${currentCharacterId}`).then((response) => {
      this.setState({
        character: response.data,
      });
    });
  }

  getEpisode() {
    const currentCharacterId = Number(this.props.match.params.id);
    API.get(`/character/${currentCharacterId}`).then((response) => {
      // console.log(typeof response.data.episode, response.data.episode),
      response.data.episode
        .map(
          (epi) =>
            epi.split('/episode/')[1],
        )
        .map((epi) => {
          this.setState({ episodes: [...this.state.episodes, epi] });
        });
    });
  }

  getLocation() {
    const currentCharacterId = Number(this.props.match.params.id);
    API.get(`/character/${currentCharacterId}`).then((response) => {
      // console.log(typeof response.data.episode, response.data.episode),
      [response.data.location.url]
        .map(
          (loc) =>
            loc.split('/location/')[1],
        )
        .map((loc) => {
          this.setState({ locationId: [...this.state.locationId, loc] });
        });
    });
  }

  getOrigin() {
    const currentCharacterId = Number(this.props.match.params.id);
    API.get(`/character/${currentCharacterId}`).then((response) => {
      // console.log(typeof response.data.episode, response.data.episode),
      [response.data.origin.url]
        .map(
          (ori) =>
            ori.split('/location/')[1],
        )
        .map((ori) => {
          this.setState({ originId: [...this.state.originId, ori] });
        });
    });
  }

  render() {
    const {
      name,
      image,
      id,
      status,
      species,
      origin,
      location,
      gender,
    } = this.state.character;

    const { episodes, character, locationId, originId } = this.state;

    return (
      <div>
        <HeaderDetails>
          <header>
            <div className="IconBack">
              <Link to="/characters">
                <ArrowBack style={{ fontSize: 60 }} />
              </Link>
            </div>
            <h1>{character && name}</h1>
          </header>
        </HeaderDetails>

        <Container>
          <CardGridDetails>
            <CardDetails>
              <div>
                <div className="column-left">
                  <img src={character && image} alt={character && name} />
                </div>
                <div className="column-right">
                  <ul>
                    <li>
                      <h3>Species:</h3>
                      {' '}
                      <span>{character && species}</span>
                    </li>
                    <li>
                      <h3>Status:</h3>
                      {' '}
                      <span>{character && status}</span>
                    </li>
                    <li>
                      <h3>Gender:</h3>
                      {' '}
                      <span>{character && gender}</span>
                    </li>
                    <li>
                      <h3>Origin:</h3>
                      {' '}
                      <Link to={`/location/${originId}`}>
                        <span>{origin && origin.name}</span>
                      </Link>
                    </li>
                    <li>
                      <h3>Location:</h3>
                      {' '}
                      <Link to={`/location/${locationId}`}>
                        <span>{location && location.name}</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <Episodes>
                <ul>
                  <p>Episodes:</p>
                  {episodes
                    && episodes.map(
                      (epi) => (
                        (<Link to={`/episode/${epi}`}><li key={id + epi}>{epi}</li></Link>)
                      ),
                    )}
                </ul>
              </Episodes>
            </CardDetails>
          </CardGridDetails>
        </Container>
      </div>
    );
  }
}
export default CharactersDetails;
