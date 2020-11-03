import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import api from '../API';

// function Display episodes
// function/ link to return to CharactersList
// function CharactersDetails
// Use Hook to characters = useState
// Use Hook to loading = useState

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

function setDisplayEpisodes(id) {
  setCharacters(
    characters.map((char) => (char.id === id
      ? { ...char, displayEpisodes: !char.displayEpisodes }
      : char)),
  );
}

// in return
// CardDetails
// name (large and on center)
// img (large)
// species
// status(add some signal like a circle green or something)
// type (use a condition like if for display just when attribute)
// gender
// origin of character(name)
// location (name)
// link location to LocationsDetails
// episodes(onclick display list of episodes here character appear)
// link episodes to EpisodesDetails
