/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/state-in-constructor */
import React, { Component } from "react";
import { NavLink as Link } from "react-router-dom";
import ArrowBack from "@material-ui/icons/ArrowBack";
import API from "../API";
import {
  CardDetails,
  CardGridDetails,
  HeaderDetails,
  Container,
  Episodes,
} from "./styles";

class CharactersDetails extends Component {
  state = {
    character: [],
    episodes: [],
    // displayEpisodes: {},
  };

  componentDidMount() {
    this.getCharacter();
    this.getEpisode();
  }

  // componentDidUpdate(episodes) {
  //   this.getEpisode(episodes);
  // }

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
      console.log(typeof response.data.episode, response.data.episode),
        response.data.episode
          .map(
            (epi) =>
              // console.log(typeof epi, epi)))
              epi.split("/episode/")[1]
          )
          .map((epi) => {
            //console.log(epi);
            //<li key={epi}>{epi}</li>;

            this.setState({ episodes: epi });
          });
    });
  }

  render() {
    const {
      name,
      image,
      id,
      episode,
      status,
      species,
      origin,
      location,
      gender,
    } = this.state.character;

    const { episodes, character } = this.state;

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
                  {/* <h1>Name: {this.state.character.name}</h1> */}
                  <ul>
                    <li>
                      <h3>Species:</h3> <span>{character && species}</span>
                    </li>
                    <li>
                      <h3>Status:</h3> <span>{character && status}</span>
                    </li>
                    <li>
                      <h3>Gender:</h3> <span>{character && gender}</span>
                    </li>
                    <li>
                      <h3>Origin:</h3> <span>{origin && origin.name}</span>
                    </li>
                    <li>
                      <h3>Location:</h3>{" "}
                      <span>{location && location.name}</span>
                    </li>
                  </ul>
                </div>
              </div>
              <Episodes>
                <ul>
                  <p>Episodes:</p>
                  
                  {/* <li key={id + episode}>{episodes}</li> */}

                  {episodes &&
                  [episodes]
                     .map((epi) => (
                       console.log(epi),
                    <li key={id + episodes}>
                    {episodes}
                    </li>
                     ))
                  }
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
