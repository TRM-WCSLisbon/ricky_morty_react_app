import React from 'react';

function Character(props) {
  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-front">
          <img src={props.image} alt={props.name} />
        </div>
        <div className="card-back">
          <ul>
            <li>
              <span>{props.id}</span>
            </li>
            <li>
              <h3>Name:</h3>
              {' '}
              <span>{props.name}</span>
            </li>
            <li>
              <h3>Species:</h3>
              {' '}
              <span>{props.species}</span>
            </li>
            <li>
              <h3>Status:</h3>
              {' '}
              <span>
                {/* className={this.state.status ? 'status-alive' : 'status-dead'}
            {props.status.filter((status) =>)statusprops.map() */}
                {props.status}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>

  );
}

export default Character;
