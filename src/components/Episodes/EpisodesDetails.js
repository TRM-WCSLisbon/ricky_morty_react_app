import React from 'react';
import './EpisodeDetails.css';

function EpisodeDetails(props) {
  return (
    <div className="episode-details">
      {/* all available data of episode */}
      <p>
        <strong> Id: </strong>
        {' '}
        {props.id}
      </p>
      <p>
        <strong> Name: </strong>
        {' '}
        {props.name}
      </p>
      <p>
        <strong> Air-date: </strong>
        {' '}
        {props.air_date}
      </p>
      <p>
        <strong> Episode: </strong>
        {' '}
        {props.episode}
      </p>
      <p>
        <strong> Characters: </strong>
        {' '}
        {props.characters}
      </p>
      <p>
        <strong> URL: </strong>
        {' '}
        {props.url}
      </p>
      <p>
        <strong> Created: </strong>
        {' '}
        {props.created}
      </p>

      <button> Next </button>
    </div>
  );
}

export default EpisodeDetails;
