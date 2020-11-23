/* eslint-disable react/prop-types */
import React from 'react';

function Character(props) {
  const {
    image, name, id, species, status,
  } = props;

  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-front">
          <img src={image} alt={name} />
        </div>
        <div className="card-back">
          <ul>
            <li>
              <span>{id}</span>
            </li>
            <li>
              <h3>Name:</h3>
              {' '}
              <span>{name}</span>
            </li>
            <li>
              <h3>Species:</h3>
              {' '}
              <span>{species}</span>
            </li>
            <li>
              <h3>Status:</h3>
              {' '}
              <span>{status}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Character;
