import React from "react";
import { Switch, Route } from "react-router-dom";
import LocationsList from "./LocationsList";
import LocationsDetails from "./LocationsDetails";

function Locations() {
  return (
    <Switch>
      <Route exact path="/locations" component={LocationsList} />
      <Route path="/locations/:id" component={LocationsDetails} />
      {/* <Redirect to="/locations?page=1" /> */}
    </Switch>
  );
}
export default Locations;
