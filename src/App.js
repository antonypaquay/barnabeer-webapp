import React from "react";
import base from "./base";
import "./App.scss";
import Beer from "./components/Beer";
//import { barnabeerList } from "./barnabeerlist";

class App extends React.Component {
  state = {
    beers: {}
  };

  componentDidMount() {
    base.syncState("/beers", {
      context: this,
      state: "beers"
    });
  }

  render() {
    const beers = Object.keys(this.state.beers).map((key, index) => {

      return (
        <Beer
          key={key}
          details={this.state.beers[key]}
        />
      );
    });

    return (
      <div className="App">
        <div className="wrapper">
          <ul className="beers__list">{beers}</ul>
        </div>
      </div>
    );
  }
}

export default App;
