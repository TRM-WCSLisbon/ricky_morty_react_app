import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import API from '../API';

// create style file with SCSS and import styles
import {
  CardGrid, Card, Header, PageNumber, Spinner,
} from './styles';

// function getClickablePages for get actualPage
function getClickablePages(actualPage) {
  const offsets = [0, 1, 2, 3, 4];
  return offsets.map((number) => parseInt(actualPage, 10) + number);
}

// function getPage to get nextPage
function getPage(direction, actualPage) {
  const nextPage = parseInt(actualPage, 10) + direction;

  return nextPage >= 1 ? nextPage : 1;
}

// function getStatus(actualStatus) {
//   return console.log(statusChar);
// }

// function CharactersList
export default function CharactersList({ match }) {
  // Use Hook to characters = useState
  const [characters, setCharacters] = useState([]);
  // Use Hook to loading = useState
  const [loading, setLoading] = useState(false);
  // pass clickablePages on a variable
  const clickablePages = getClickablePages(Number(match.params.page) || 1);
  // pass page on a variable
  const page = Number(match.params.page) || 1;
  // pass status to get correct color
  // const statusChar = getStatus(match.params.status);

  // useEffect for sync with page of API
  useEffect(() => {
    async function loadData() {
      setLoading(true);
      const apiCharacters = await API.get(`/character/?page=${page}`);

      setCharacters(apiCharacters.data.results);
      setLoading(false);
      console.log(apiCharacters);
    }

    loadData();
  }, [match.params.page, page]);

  // function setDisplayEpisodes(id) {
  //   setCharacters(
  //     characters.map((char) => (char.id === id
  //       ? { ...char, displayEpisodes: !char.displayEpisodes }
  //       : char)),
  //   );
  // }

  return (
    <>
      <Header>
        <header>
          <h1>
            Characters
          </h1>
        </header>
      </Header>
      <CardGrid loading={loading}>
        {loading ? (
          <Spinner />
        ) : (
          characters.map((char) => (
            <Card
              key={char.id}
              // onClick={() => setDisplayEpisodes(char.id)}
              // displayEpisodes={char.displayEpisodes}
            >
              <div className="card">
                <div className="card-inner">
                  <div className="card-front">
                    <img src={char.image} alt={char.name} />
                  </div>
                  <div className="card-back">
                    <ul>
                      <li>
                        <span>{char.id}</span>
                      </li>
                      <li>
                        <h3>Name:</h3>
                        {' '}
                        <span>{char.name}</span>
                      </li>
                      <li>
                        <h3>Species:</h3>
                        {' '}
                        <span>{char.species}</span>
                      </li>
                      <li>
                        <h3>Status:</h3>
                        {' '}
                        <span>
                          {/* className={this.state.status ? 'status-alive' : 'status-dead'}
                        {char.status.filter((status) =>)statusChar.map() */}
                          {char.status}
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* <ul>
                <p>Episodes:</p>
                {char.episode
                  .map((epi) => epi.split('/episode/')[1])
                  .map((epi) => (
                    <li key={char.id + epi}>{epi}</li>
                  ))}
              </ul> */}
            </Card>
          ))
        )}
      </CardGrid>
      <Header>
        <ul>
          <NavLink to={`/characters/${getPage(-1, page)}`}>
            <li> Prev </li>
          </NavLink>

          {clickablePages.map((pageNumber) => {
            if (pageNumber <= 34) {
              return (
                <NavLink to={`/characters/${pageNumber}`} key={pageNumber}>
                  <PageNumber actualPage={pageNumber === page}>
                    {pageNumber}
                  </PageNumber>
                </NavLink>
              );
            }
            // else if(pageNumber === 34){
            //   return(
            //     <NavLink to={`/${pageNumber}`} key={pageNumber}>
            //       <PageNumber actualPage={pageNumber}>
            //         {pageNumber}
            //       </PageNumber>
            //     </NavLink>
            //   )}
          })}
          {page <= 33 && (
            <NavLink to={`/characters/${getPage(1, page)}`}>
              <li> Next </li>
            </NavLink>
          )}
        </ul>
      </Header>
    </>
  );
}
