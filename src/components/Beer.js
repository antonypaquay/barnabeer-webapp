import React, { Component } from "react";
import "./Beer.scss";
import beerDefault from "../img/beer-default.png";

class Beer extends Component {
  handleClick = (e, key) => {
    const beer = this.props.beers[key];
    if (beer.beer_tasted) {
      beer.beer_tasted = false;
    } else {
      beer.beer_tasted = true;
    }
    this.props.isTasted(key, beer);
  };

  render() {
    const {
      id: key,
      beerName,
      beerCl,
      beerPrice,
      beerPourcent,
      beerType,
      beerTasted
    } = this.props;

    if (beerTasted === true) {
      return (
        <React.Fragment>
          <li
            className="beers__list__el beers__list__el--active"
            onClick={e => this.handleClick(e, key)}
          >
            <div className="beer__content">
              <div className="beer__head">
                <h3 className="beer__name">{beerName}</h3>
              </div>
              <p>Tu as déjà dégusté cette bière!</p>
            </div>
          </li>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <li
            className="beers__list__el"
            onClick={e => this.handleClick(e, key)}
          >
            <img src={beerDefault} alt="beer default" />
            <div className="beer__content">
              <h3 className="beer__name">{beerName}</h3>
              <div className="beer__head">
                <p className="beer__pourcent">{beerCl}</p>
                <p>{beerPrice}</p>
              </div>
              <ul>
                <li className="beer_type">
                  <p>{beerPourcent}</p>
                </li>
                <li className="beer_type">
                  <p>{beerType}</p>
                </li>
              </ul>
            </div>
          </li>
        </React.Fragment>
      );
    }
  }
}

export default Beer;
