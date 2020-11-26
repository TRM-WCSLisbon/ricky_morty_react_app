/* eslint-disable linebreak-style */
/* eslint-disable react/state-in-constructor */
import React from 'react';
import { Link } from 'react-router-dom';
import ArrowBack from '@material-ui/icons/ArrowBack';
import API from '../API';
import {
  HeaderDetails,
  Container,
  CardGridDetails,
  CardDetails,
  Episodes,
} from './styles';
import LocationsImg from './LocationsImg.jpg';
import LocationsImg2 from './LocationsImg2.jpeg';
import LocationsImg3 from './LocationsImg3.png';

class LocationsDetails extends React.Component {
  state = {
    location: {},
    character: [],
  };

  componentDidMount() {
    this.getLocations();
    this.getCharacters();
    // console.log(this.state.location);
  }

  componentDidUpdate(prevProps) {
    // console.log(prevProps);
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.getLocations();
    }
  }

  getLocations = () => {
    const locationId = Number(this.props.match.params.id);
    // console.log(this.props);
    // console.log(locationId);
    API.get(`/location/${locationId}`).then(
      (response) => this.setState({ location: response.data }),
      // console.log(this.state.location)
    );
  };

  getCharacters = () => {
    const locationId = Number(this.props.match.params.id);
    API.get(`/location/${locationId}`).then(
      (response) => (
        // console.log(typeof response.data.residents, response.data.residents),
        response.data.residents
          .map((char) => char.split('character/')[1])
          .map((char) => this.setState({ character: [...this.state.character, char] }))
      ),
    );
  };

  render() {
    return (
      <div>
        <HeaderDetails>
          <div className="IconBack">
            <Link to={`/locations?page=${this.props.location.state.lastPage}`}>
              <ArrowBack style={{ fontSize: 60 }} />
            </Link>
          </div>

          <header>
            <h1>{this.state.location && this.state.location.name}</h1>
          </header>
        </HeaderDetails>
        <Container>
          <CardGridDetails>
            <CardDetails>
              <div>
                <div className="column-left">
                  <img
                    src={
                      this.state.location.type === 'Planet'
                        ? LocationsImg
                        : this.state.location.type === 'Space station'
                          ? LocationsImg3
                          : LocationsImg2
                    }
                    alt={this.state.location && this.state.location.name}
                  />
                </div>
                <div className="column-right">
                  {/* <h1>Name: {this.state.character.name}</h1> */}
                  <ul>
                    <li>
                      <h3>Type:</h3>
                      {' '}
                      <span>
                        {this.state.location && this.state.location.type}
                      </span>
                    </li>
                    <li>
                      <h3>Dimension:</h3>
                      {' '}
                      <span>
                        {this.state.location && this.state.location.dimension}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <Episodes>
                <ul>
                  <p>Residents:</p>
                  {this.state.character
                    && this.state.character.map((char) => (
                      <li>
                        <Link to={`/characters/${char}`}>{char}</Link>
                      </li>
                    ))}
                </ul>
              </Episodes>
            </CardDetails>
          </CardGridDetails>
        </Container>
      </div>
    );
  }
}

export default LocationsDetails;
