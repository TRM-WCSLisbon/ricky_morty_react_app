import React from "react";
import { Link, withRouter } from "react-router-dom";
import querystring from "query-string";
import API from "../API";
import { CardGrid, Card, Header, PageNumber } from "./styles";
import EpisodeImg from "./image.png";

class EpisodesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      episodes: [],
    };
    this.getEpisodes = this.getEpisodes.bind(this);
  }

  componentDidMount() {
    const initialPage = Number(
      querystring.parse(this.props.location.search).page
    );
    //console.log(location.search);
    // console.log(querystring.parse(this.props.episode.search));
    // console.log(this.props);
    this.getEpisodes(initialPage);
  }

  componentDidUpdate(prevProps) {
    const currentPage = Number(
      querystring.parse(this.props.location.search).page
    );
    const prevPage = Number(querystring.parse(prevProps.location.search).page);

    if (prevPage !== currentPage) {
      this.getEpisodes(currentPage);
    }

    // console.log(currentPage);
  }

  getEpisodes(currentPage) {
    API.get(`/episode?page=${currentPage}`).then((response) =>
      this.setState({ episodes: response.data.results })
    );
  }

  render() {
    return (
      <>
        <Header>
          <header>
            <h1>Episode</h1>
          </header>
        </Header>
        <CardGrid>
          {this.state.episodes.map((episode) => (
            <Link to={`/episodes/${episode.id}`}>
              <Card key={episode.id}>
                <div className="card">
                  <div className="card-inner">
                    <div className="card-front">
                      <div className="card-back">
                        <ul>
                          <img src={EpisodeImg} alt={episode.name} />
                          <li>
                            <span>{episode.id}</span>
                          </li>
                          <li>
                            <h3>Name:</h3> <span>{episode.name}</span>
                          </li>
                          <li>
                            <h3>Episode:</h3>
                            <span>{episode.episode}</span>
                          </li>
                        </ul>
                        {/* View details </Link> */}
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
                <Link to="/episodes?page=1">1</Link>
              </li>
              <li>
                <Link to="/episodes?page=2">2</Link>
              </li>
              <li>
                <Link to="/episodes?page=3">3</Link>
              </li>
            </ul>
          </PageNumber>
        </Header>
      </>
    );
  }
}

export default withRouter(EpisodesList);

// <div>

//   {/* {this.state.episodes.map((episode) => (
//     <EpisodesDetails {...episode} key={episode.id} />
//   ))} */}

//   {this.state.episodes.map((episode) => (
//     <div>
//       <p key={episode.id}>{episode.id}</p>
//       <p key={episode.id}>{episode.name}</p>
//     </div>
//   ))}
// </div>
// function Links() {
//   return (
//     <div>
//       <Link to="/episodes?page=1">1</Link>
//       <Link to="/episodes?page=2">2</Link>
//       <Link to="/episodes?page=3">3</Link>
//     </div>
//   );
// }
