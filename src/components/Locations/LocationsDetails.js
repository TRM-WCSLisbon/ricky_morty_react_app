/* eslint-disable react/state-in-constructor */
import React from "react";
import API from "../API";
import { Link } from "react-router-dom";

class LocationsDetails extends React.Component {
  state = {
    location: {},
  };

  componentDidMount() {
    this.getLocations();
    // console.log(this.state.location);
  }

  componentDidUpdate(prevProps) {
    console.log(prevProps);
    if (prevProps.match.params.id !== this.state.location.id) {
      this.getLocations;
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

  render() {
    return (
      <div>
        <p>{this.state.location.name}</p>
      </div>
    );
  }
}

export default LocationsDetails;
