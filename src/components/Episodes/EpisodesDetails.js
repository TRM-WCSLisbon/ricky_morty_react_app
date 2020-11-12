import React from "react";
import axios from "axios";
import image from "./episodeImage.png";
import "./EpisodeDetails.css";
// import SingleEpisodeDetail from "./SingleEpisodeDetail";

class EpisodeDetails extends React.Component {
  state = {
    episode: [],
  };

  //   runs after render ()
  componentDidMount() {
    this.getEpisode();
  }

  //   gets data from API
  getEpisode = () => {
    axios
      .get(`https://rickandmortyapi.com/api/episode`)
      .then((response) => console.log(response));
  };

  render() {
    //console.log({props.match.params.id});

    return (
      <div className="episode-details">
        <img src={image} alt="episode sample pic" />
        <div className="card-detail">
          {/* all available data of episode */}
          <p>
            <strong> Id: </strong>
            {/* {this.props.id} */}
          </p>
          <p>
            <strong> Name: </strong>
            {/* {this.props.name} */}
          </p>
        </div>
      </div>
    );
  }
}

export default EpisodeDetails;
