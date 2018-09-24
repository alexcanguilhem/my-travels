import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Travel from "./Travel";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">My Favorites Destinations</h1>
        </header>
        <Travel
          country="USA"
          destination="New York, The Big Apple"
          photo="https://www.guidesulysse.com/images/destinations/iStock-619521204.jpg"
          distance="6142 kms"
        />
        <Travel
          country="Mexico"
          destination="Tulum"
          photo="https://cdn.getyourguide.com/img/tour_img-438247-148.jpg"
          distance="8581 kms"
        />
      </div>
    );
  }
}

export default App;
