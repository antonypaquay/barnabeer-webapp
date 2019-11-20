import React from "react";
import "./App.scss";
import { Beer } from "../Beer/Beer";
// Import Barnabeer
import { barnabeerList } from "../barnabeerlist";

console.log(barnabeerList);

class App extends React.Component {
  state = {
    beers: barnabeerList
  };

  render() {
    const beers = Object.keys(this.state.beers).map((key, index) => {
      const {
        beer_name,
        beer_cl,
        beer_pourcent,
        beer_type,
        beer_price
      } = this.state.beers[key];
      return (
        <Beer
          key={key}
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
