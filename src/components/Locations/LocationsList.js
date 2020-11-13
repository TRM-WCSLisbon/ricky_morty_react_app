import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import querystring from 'query-string';
import API from '../API';
// import LocationsDetails from './LocationsDetails';
import {
  CardGrid, Card, Header, Spinner,
} from './styles';

class LocationsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locations: [],
      page: null,
    };
    this.getLocations = this.getLocations.bind(this);
  }

  componentDidMount() {
    const initialPage = Number(
      querystring.parse(this.props.location.search).page,
    );
    // console.log(location.search);
    // console.log(querystring.parse(this.props.location.search));

    this.setState({ page: initialPage });
    // console.log(this.state.page);

    // console.log(currentPage);
    // console.log(this.props);

    this.getLocations(initialPage);
  }

  componentDidUpdate() {
    const currentPage = Number(
      querystring.parse(this.props.location.search).page,
    );

    if (currentPage !== this.state.page) {
      // console.log("buhh");
      this.getLocations(currentPage);
      this.setState({ page: currentPage });
    }

    console.log(currentPage);
  }

  getLocations(currentPage) {
    API.get(`/location?page=${currentPage}`).then((response) => this.setState({ locations: response.data.results }));
  }

  render() {
    return (
      <>
        <Header>
          <header>
            <h1>
              Locations
            </h1>

          </header>
        </Header>
        <CardGrid>
          {/* <CardGrid loading={loading}> */}
          {/* {loading ? (
          <Spinner />
        ) : ( */}

          {this.state.locations.map((location) => (
            <Card key={location.id}>

              <h1 />
              <span>{location.id}</span>
              <h3>Name:</h3>
              {' '}
              <span>{location.name}</span>
              <h3>Type:</h3>
              {' '}
              <span>{location.type}</span>

            </Card>
          ))}
          <Links />
        </CardGrid>
      </>
    );
  }
}

export default withRouter(LocationsList);

function Links() {
  return (
    <div>
      <Link to="/locations?page=1">1</Link>
      <Link to="/locations?page=2">2</Link>
      <Link to="/locations?page=3">3</Link>
      <Link to="/locations?page=4">4</Link>
      <Link to="/locations?page=5">5</Link>
      <Link to="/locations?page=6">6</Link>
    </div>
  );
}

{ /* {this.state.locations.map((location) => (
                        <LocationsDetails {...location} key={location.id} />
                      ))} */ }
