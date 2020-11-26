import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Gallery from './Gallery/Gallery';
import Characters from './CharactersV2/Characters';
import Locations from './Locations/Locations';
import Episodes from './Episodes/Episodes';
import ContactForm from './Contact/ContactForm';

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Gallery} />
      <Route path="/characters" component={Characters} />
      <Route path="/locations" component={Locations} />
      <Route path="/episodes" component={Episodes} />
      <Route path="/contact" component={ContactForm} />
    </Switch>
  </main>
);

export default Main;
