import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import api from '../API';

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
// Use Hook to characters = useState
// Use Hook to loading = useState
// pass clickablePages on a variable
// pass page on a variable

// useEffect for sync with page of API
useEffect(() => {
  async function loadData() {
    setLoading(true);
    const apiCharacters = await api.get(`/character/?page=${page}`);

    setCharacters(apiCharacters.data.results);
    setLoading(false);
  }

  loadData();
}, [match.params.page, page]);

// in return
// CardGrid
// Card
// img
// id & name
// species & status(add some signal like a circle green or something)

// Footer
// NavLinks for prev, pag and next (limit number of pages to 34)
