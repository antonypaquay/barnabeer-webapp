import React, { Component, Fragment } from "react";
import Beer from "./components/Beer";

class List extends Component {

  render() {
    const beers = Object.keys(this.props.location.state.beers).map((key, index) => {
      const {
        beer_name,
        beer_cl,
        beer_pourcent,
        beer_type,
        beer_price,
        beer_tasted
      } = this.props.location.state.beers[key];

      return (
        <Beer
          beers={this.props.location.state.beers}
          key={key}
          id={key}
          beerTasted={beer_tasted}
          isTasted={this.isTasted}
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
        <h2>Bonjour {this.props.location.state.user}</h2>
        <p>
          Bienvenue sur la nouvelle app du Barnabeer, celle-ci te permettra de
          découvrir nos produits ainsi qu'indiquer ceux que tu as déjà dégusté
          et bien plus encore! Alors tu es près à découvrir l'expérience
          Barnabeer?
        </p>
        <button className="btn" onClick={this.handleClick}>
          Afficher les bières!
        </button>
      </div>
    );

    return (
      <Fragment>
        {this.props.location.state.beers.length !== 0 ? null : welcome}
        <ul className="beers__list">{beers}</ul>
      </Fragment>
    );
  }
}

export default List;
