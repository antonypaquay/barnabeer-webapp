import React, { Component, Fragment } from "react";
import Beer from "../components/Beer";

class List extends Component {
  componentDidMount() {
    const addBeerOnce = this.props.addBeerList;
    if (Object.keys(this.props.beers).length === 0) {
      addBeerOnce();
    }
  }

  render() {
    const beers = Object.keys(this.props.beers).map((key, index) => {
      const {
        beer_name,
        beer_cl,
        beer_pourcent,
        beer_type,
        beer_price,
        beer_tasted
      } = this.props.beers[key];

      return (
        <Beer
          beers={this.props.beers}
          key={key + ` - ${beer_name}`}
          id={key}
          beerTasted={beer_tasted}
          isTasted={this.props.isTasted}
          beerName={beer_name}
          beerCl={beer_cl}
          beerPourcent={beer_pourcent}
          beerType={beer_type}
          beerPrice={beer_price}
        />
      );
    });

    return (
      <Fragment>
        <ul className="beers__list">{beers}</ul>
      </Fragment>
    );
  }
}

export default List;
