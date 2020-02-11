import React, { Component, Fragment } from "react";
import Beer from "./components/Beer";

class List extends Component {

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
          key={key}
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
    const welcome = (
      <div className="welcome">
        <h2>Bonjour {this.props.user}</h2>
        <p>
          Bienvenue sur la nouvelle app du Barnabeer, celle-ci te permettra de
          découvrir nos produits ainsi qu'indiquer ceux que tu as déjà dégusté
          et bien plus encore! Alors tu es près à découvrir l'expérience
          Barnabeer?
        </p>
        <button className="btn" >
          Afficher les bières!
        </button>
      </div>
    );

    return (
      <Fragment>
        {this.props.beers.length !== 0 ? null : welcome}
        <ul className="beers__list">{beers}</ul>
      </Fragment>
    );
  }
}

export default List;
