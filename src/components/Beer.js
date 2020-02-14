import React, { Component } from "react";
import "./Beer.scss";
//Assets
import heart from "../assets/img/heart-blue@2x.png";
import heartFilled from "../assets/img/heart-fill-blue@2x.png";

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
    const { id: key, beerName, beerPrice, beerTasted } = this.props;

    if (beerTasted === true) {
      return (
        <React.Fragment>
          <li className="beers__list__el beers__list__el--active">
            <h3 className="beer__name">{beerName}</h3>
            <p className="beer__price">{beerPrice} €</p>
            <div className="tastedBox" onClick={e => this.handleClick(e, key)}>
              <img src={heartFilled} className="tasted" alt="filled heart" />
              <span>Déjà dégusté 🍺!</span>
            </div>
          </li>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <li className="beers__list__el">
            <h3 className="beer__name">{beerName}</h3>
            <p className="beer__price">{beerPrice} €</p>
            <div className="tastedBox" onClick={e => this.handleClick(e, key)}>
              <img src={heart} className="tasted" alt="filled heart" />
              <span>Et moi alors 😢?</span>
            </div>
          </li>
        </React.Fragment>
      );
    }
  }
}

export default Beer;
