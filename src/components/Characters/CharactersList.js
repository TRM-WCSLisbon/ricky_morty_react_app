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
// function CharactersList

// useEffect for sync with page of API
export default function CharactersList({ match }) {
  // Use Hook to characters = useState
  const [characters, setCharacters] = useState([]);
  // Use Hook to loading = useState
  const [loading, setLoading] = useState(false);
  // pass clickablePages on a variable
  const clickablePages = getClickablePages(Number(match.params.page) || 1);
  // pass page on a variable
  const page = Number(match.params.page) || 1;

  useEffect(() => {
    async function loadData() {
      setLoading(true);
      const apiCharacters = await API.get(`/character/?page=${page}`);

      setCharacters(apiCharacters.data.results);
      setLoading(false);
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
              <img src={char.image} alt={char.name} />
              <section>
                <header>
                  <h1>
                    <span>{char.id}</span>
                    {' '}
                    {char.name}
                  </h1>
                  <h3>
                    {char.species}
                    {' '}
                    -
                    {char.status}
                  </h3>
                </header>
              </section>
              <ul>
                <p>Episodes:</p>
                {char.episode
                  .map((epi) => epi.split('/episode/')[1])
                  .map((epi) => (
                    <li key={char.id + epi}>{epi}</li>
                  ))}
              </ul>
            </Card>
          ))
        )}
      </CardGrid>
      <Header>

        <ul>
          <NavLink to={`/${getPage(-1, page)}`}>
            <li> prev </li>
          </NavLink>

          {clickablePages.map((pageNumber) => {
            if (pageNumber <= 34) {
              return (
                <NavLink to={`/${pageNumber}`} key={pageNumber}>
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
          {
          page <= 33 && (
            <NavLink to={`/${getPage(1, page)}`}>
              <li> next </li>
            </NavLink>
          )
}

        </ul>
      </Header>
    </>
  );
}
