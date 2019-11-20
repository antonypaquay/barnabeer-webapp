import React from "react";
import "./App.scss";
import Beer from "./components/Beer";
import { barnabeerList } from "./barnabeerlist";

class App extends React.Component {
  state = {
    beers: barnabeerList,
    tasted: false
  };

  // handleClick = event => {s
  //   const tasted = event.target
  //   this.setState({tasted});
  // }

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
          tasted={this.handleClick}
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
