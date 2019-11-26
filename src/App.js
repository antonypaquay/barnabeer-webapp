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
      const {
        beer_name,
        beer_cl,
        beer_pourcent,
        beer_type,
        beer_price,
        beer_id,
        beer_tasted
      } = this.state.beers[key];

      return (
        <Beer
          key={beer_id}
          beerTasted={beer_tasted}
          beerName={beer_name}
          beerCl={beer_cl}
          beerPourcent={beer_pourcent}
          beerType={beer_type}
          beerPrice={beer_price}
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
