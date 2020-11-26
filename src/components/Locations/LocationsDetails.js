/* eslint-disable react/state-in-constructor */
import React from "react";
import API from "../API";
import { Link } from "react-router-dom";
import {
  HeaderDetails,
  Container,
  CardGridDetails,
  CardDetails,
} from "./styles";
import LocationsImg from "./LocationsImg.jpg";
import LocationsImg2 from "./LocationsImg_2.jpg";
import LocationsImg3 from "./LocationsImg_3.png";
// import Episodes from "../Episodes/Episodes";

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
      (response) => this.setState({ location: response.data })
      // console.log(this.state.location)
    );
  };

  getCharacters = () => {
    const locationId = Number(this.props.match.params.id);
    API.get(`/location/${locationId}`).then(
      (response) => (
        console.log(typeof response.data.residents, response.data.residents),
        response.data.residents
          .map((char) => char.split("character/")[1])
          .map((char) =>
            this.setState({ character: [...this.state.character, char] })
          )
      )
    );
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <HeaderDetails>
          <button>
            <Link to={`/locations?page=${this.props.location.state.lastPage}`}>
              Go back
            </Link>
          </button>
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
                      this.state.location.type === "Planet"
                        ? LocationsImg
                        : this.state.location.type === "Space station"
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
                      <h3>Type:</h3>{" "}
                      <span>
                        {this.state.location && this.state.location.type}
                      </span>
                    </li>
                    <li>
                      <h3>Dimension:</h3>{" "}
                      <span>
                        {this.state.location && this.state.location.dimension}
                      </span>
                    </li>
                    <li>
                      <h3>Residents:</h3>{" "}
                      <span>
                        {this.state.character &&
                          this.state.character.map((char) => (
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

export default LocationsDetails;
