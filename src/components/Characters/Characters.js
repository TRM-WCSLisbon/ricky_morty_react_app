import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CharactersList from './CharactersList';

// Create Switch
// Create route for CharactersList
// Create route for CharactersDetails
function Characters() {
  return (
    <Switch>
      <Route path="/characters/:page?" component={CharactersList} />
    </Switch>
  );
}

export default Characters;
