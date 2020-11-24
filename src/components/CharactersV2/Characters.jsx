import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import CharactersList from './CharactersList';
import CharactersDetails from './CharactersDetails';

function Characters() {
  return (
    <Switch>
      <Route exact path="/characters" component={CharactersList} />
      <Route path="/characters/:id" component={CharactersDetails} />
      <Redirect to="/characters?page=1" />
    </Switch>
  );
}

export default Characters;
