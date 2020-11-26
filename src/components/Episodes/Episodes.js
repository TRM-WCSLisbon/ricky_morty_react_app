import React from 'react';
import { Switch, Route } from 'react-router-dom';
import EpisodesList from './EpisodesList';
import EpisodesDetails from './EpisodesDetails';

function Episodes() {
  return (
    <Switch>
      <Route exact path="/episodes" component={EpisodesList} />
      <Route path="/episodes/:id" component={EpisodesDetails} />
      {/* <Redirect to="/episodes?page=1" /> */}
    </Switch>
  );
}

export default Episodes;
