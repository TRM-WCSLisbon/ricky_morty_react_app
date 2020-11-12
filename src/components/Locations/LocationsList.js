import React from "react";
import API from "../API";
import { Link, withRouter } from "react-router-dom";
import querystring from "query-string";
import LocationsDetails from "./LocationsDetails";

class LocationsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locations: [],
      page: 1,
    };
    this.getLocations = this.getLocations.bind(this);
  }
  componentDidMount() {
    const currentPage = Number(
      querystring.parse(this.props.location.search).page
    );

    console.log(currentPage);
    console.log(this.props);
    // console.log(location.search);
    // this.getLocations();
  }

  getLocations() {
    // console.log("Hello world on getLocations");
    API.get(`/location?page=1`).then(
      //(`/location?page=`)
      (response) => this.setState({ locations: response.data.results })
      // console.log(response.data.results)
    );
  }

  render() {
    return (
      <div>
        {this.state.locations.map((location) => (
          <LocationsDetails {...location} key={location.id} />
        ))}

        <Link to="/location?page=2">2</Link>

        {/* {console.log("Hello world on render")} */}
      </div>
    );
  }
}

export default withRouter(LocationsList);
