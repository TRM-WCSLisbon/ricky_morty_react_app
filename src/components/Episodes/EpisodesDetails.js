import React from "react";
import "./EpisodeDetails.css";
import SingleEpisodeDetail from "./SingleEpisodeDetail";

function EpisodeDetails(props) {
  return (
    <div className="episode-details">
      <img
        src="https://cdn.europosters.eu/image/750/posters/rick-and-morty-watch-i50046.jpg"
        alt="episode sample pic"
      />
      <div className="card-detail">
        {/* all available data of episode */}
        <p>
          <strong> Id: </strong>
          {props.id}
        </p>
        <p>
          <strong> Name: </strong>
          {props.name}
        </p>
        <button type="submit">Next</button>
      </div>
    </div>
  );
}

export default EpisodeDetails;
