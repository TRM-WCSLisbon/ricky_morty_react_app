import React from "react";
import { Link, withRouter } from "react-router-dom";
import querystring from "query-string";
import API from "../API";
// import LocationsDetails from "./LocationsDetails";
import { CardGrid, Card, Header, PageNumber } from "./styles";
import LocationsImg from "./LocationsImg.jpg";

class LocationsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locations: [],
    };
    this.getLocations = this.getLocations.bind(this);
  }

  componentDidMount() {
    const initialPage = Number(
      querystring.parse(this.props.location.search).page
    );
    this.getLocations(initialPage);
  }

  componentDidUpdate(prevProps) {
    const currentPage = Number(
      querystring.parse(this.props.location.search).page
    );
    const prevPage = Number(querystring.parse(prevProps.location.search).page);
    if (prevPage !== currentPage) {
      this.getLocations(currentPage);
    }
  }

  getLocations(currentPage) {
    API.get(`/location?page=${currentPage}`).then((response) =>
      this.setState({ locations: response.data.results })
    );
  }

  render() {
    return (
      <>
        <Header>
          <header>
            <h1>Locations</h1>
          </header>
        </Header>
        <CardGrid>
          {/* <CardGrid loading={loading}> */}
          {/* {loading ? (
          <Spinner />
        ) : ( */}

          {this.state.locations.map((location) => (
            <Link to={`/locations/${location.id}`}>
              <Card key={location.id}>
                <div className="card">
                  <div className="card-inner">
                    <div className="card-front">
                      <div className="card-back">
                        <ul>
                          <img src={LocationsImg} alt={location.name} />
                          <li>
                            <span>{location.id}</span>
                          </li>
                          <li>
                            <h3>Name:</h3> <span>{location.name}</span>
                          </li>
                          <li>
                            <h3>Type:</h3> <span>{location.type}</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </CardGrid>
        <Header>
          <PageNumber>
            <ul>
              <li>
                <Link to="/locations?page=1">1</Link>
              </li>
              <li>
                <Link to="/locations?page=2">2</Link>
              </li>
              <li>
                <Link to="/locations?page=3">3</Link>
              </li>
              <li>
                <Link to="/locations?page=4">4</Link>
              </li>
              <li>
                <Link to="/locations?page=5">5</Link>
              </li>
              <li>
                <Link to="/locations?page=6">6</Link>
              </li>
            </ul>
          </PageNumber>
        </Header>
      </>
    );
  }
}

export default withRouter(LocationsList);

// function Links() {
//   return (
//     <ul>
//       <li><Link to="/locations?page=1">1</Link></li>
//       <li><Link to="/locations?page=2">2</Link></li>
//       <li><Link to="/locations?page=3">3</Link></li>
//       <li><Link to="/locations?page=4">4</Link></li>
//       <li><Link to="/locations?page=5">5</Link></li>
//       <li><Link to="/locations?page=6">6</Link></li>
//     </ul>
//   );
// }

// {
//   {this.state.locations.map((location) => (
//                         <LocationsDetails {...location} key={location.id} />
//                       ))}
// }

{
  /* <li>
                <Link to={`/locations?page=${this.state.page}`}>1</Link>
              </li> */
}
