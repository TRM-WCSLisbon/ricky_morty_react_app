import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Gallery from './Gallery/Gallery';
import Characters from './Characters/Characters';
import Locations from './Locations/Locations';
import Episodes from './Episodes/Episodes';

// Create path for nav links

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Gallery} />
      <Route path="/Characters" component={Characters} />
      <Route path="/Locations" component={Locations} />
      <Route path="/Episodes" component={Episodes} />
    </Switch>
  </main>
);

export default Main;
