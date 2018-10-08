import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Lamp from "./Lamp"
import Quote from "./Quote";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      working: true 
    };
  }
  changeWorkingState = () => this.setState({working : !this.state.working})
  handleClick = () => this.setState({ working: !this.state.working });
  render() {
    const changeLogo = this.state.working ? 'App-logo' : 'App-logo2';
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className={changeLogo} alt="logo" />
          <h1 className="App-title">Simpsons Quotes</h1>
        </header>
        <button onClick={this.changeWorkingState}>{this.state.working+""}</button>
        <Lamp on />
        <Lamp />
        <Quote
          quote="I believe the children are the future... Unless we stop them now!"
          character="Homer Simpson"
          image="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939"
        />

      </div>
    );
  }
}

export default App;