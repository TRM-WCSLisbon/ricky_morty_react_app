import React from "react";
import { Switch, Route } from "react-router-dom";
import EpisodeList from "./EpisodesList";

function Episodes() {
  return (
    <Switch>
      <Route path="/episodes/:page" component={EpisodeList} />
      {/* <Route path="/episodes/:page/:id" component ={EpisodeDetails} /> */}
    </Switch>
  );
}

export default Episodes;
