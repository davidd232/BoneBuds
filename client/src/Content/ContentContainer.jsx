import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import MapContainer from "./Routes/MapContainer";
import UserProfile from "./Routes/UserProfile";
import EventProfile from "./Routes/EventProfile";
import CreateEvent from "./Routes/CreateEvent";

const ContentContainer = props => {
  console.log(props);
  return (
    <main>
      <Switch>
        <Route exact path="/" component={MapContainer} />
        <Route
          path="/userprofile"
          render={() => <UserProfile currentUser={props.currentUser} />}
        />
        <Route
          path="/eventprofile"
          render={() => <EventProfile eventID={props.eventID} event={props.event} />}
        />
        <Route
          path="/createEvent"
          render={() => <CreateEvent/>}
        />
      </Switch>
    </main>
  );
};

export default ContentContainer;
