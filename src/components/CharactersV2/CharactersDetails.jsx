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
} from './styles';

class CharactersDetails extends Component {
  state = {
    character: {},
    // location:[],
    // origin:[],
  };

  componentDidMount() {
    this.getCharacter();
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

  // setDisplayEpisodes(id) {
  //   getCharacter(
  //     characters.map((char) =>
  //       char.id === id
  //         ? { ...char, displayEpisodes: !char.displayEpisodes }
  //         : char
  //     )
  //   );
  // }

  render() {
    return (
      <div>
        <HeaderDetails>
          <header>
            <div className="IconBack">
              <Link to="/characters">
                <ArrowBack style={{ fontSize: 60 }} />
              </Link>
            </div>
            {/* <h1>Character Details</h1> */}
            <h1>{this.state.character && this.state.character.name}</h1>
          </header>
        </HeaderDetails>

        <Container>
          <CardGridDetails>
            <CardDetails>
              <div>
                <div className="column-left">
                  <img
                    src={this.state.character && this.state.character.image}
                    alt={this.state.character && this.state.character.name}
                  />
                </div>
                <div className="column-right">
                  {/* <h1>Name: {this.state.character.name}</h1> */}
                  <ul>
                    <li>
                      <h3>Species:</h3>
                      {' '}
                      <span>
                        {this.state.character && this.state.character.species}
                      </span>
                    </li>
                    <li>
                      <h3>Status:</h3>
                      {' '}
                      <span>
                        {this.state.character && this.state.character.status}
                      </span>
                    </li>
                    <li>
                      <h3>Gender:</h3>
                      {' '}
                      <span>
                        {this.state.character && this.state.character.gender}
                      </span>
                    </li>
                    <li>
                      <h3>Origin:</h3>
                      {' '}
                      <span>
                        {this.state.character.origin
                          && this.state.character.origin.name}
                      </span>
                    </li>
                    <li>
                      <h3>Location:</h3>
                      {' '}
                      <span>
                        {this.state.character.location
                          && this.state.character.location.name}
                      </span>
                    </li>
                  </ul>
                </div>
                {/* <div className="Episodes">Episodes List</div> */}
                {/* <div
                    onClick={() => setDisplayEpisodes(this.state.character.id)}
                    displayEpisodes={this.state.character.displayEpisodes}
                  >
                    Episodes List
                  </div> */}
              </div>
            </CardDetails>
          </CardGridDetails>
        </Container>
      </div>
    );
  }
}
export default CharactersDetails;
