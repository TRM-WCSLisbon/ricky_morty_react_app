import React from "react";
import { Switch, Route } from "react-router-dom";
import Gallery from "./Gallery/Gallery";
import Characters from "./Characters/Characters";
import Locations from "./Locations/Locations";
import Episodes from "./Episodes/Episodes";
// Create path for nav links

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Gallery} />
      <Route path="/characters" component={Characters} />
      <Route path="/locations" component={Locations} />
      <Route exact path="/episodes" component={Episodes} />
    </Switch>
  </main>
);

export default Main;
