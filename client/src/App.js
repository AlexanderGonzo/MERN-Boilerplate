import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";

import Landing from "./Pages/landing/landing.component";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Landing} />
      </Switch>
    );
  }
}

export default App;
