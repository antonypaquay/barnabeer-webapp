import React, { Component, Fragment } from "react";
import "firebase/auth";
import base from "./base";
import Beer from "./components/Beer";

class List extends Component {

    state = {
        beers: {},
        username: this.props.location.state.user
        //----
        //uid: null,
        //fbuser: null
      };

  componentDidMount() {
    
   
    base.syncState(`/users/${this.state.username}/beers`, {
      context: this,
      state: "beers"
    });
   
    
  }

  handleClick = e => {
    base.fetch(`/beers`, {
      context: this,
      state: "beers",
      then(data) {
        const beers = data;
        this.setState({ beers });
      }
    });
    
  };

  isTasted = (key, newBeer) => {
    const beers = { ...this.state.beers };
    beers[key] = newBeer;
    this.setState({ beers });
  };

  render() {
    const beers = Object.keys(this.state.beers).map((key, index) => {
      const {
        beer_name,
        beer_cl,
        beer_pourcent,
        beer_type,
        beer_price,
        beer_tasted
      } = this.state.beers[key];

      return (
        <Beer
          beers={this.state.beers}
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
        <h2>Bonjour {this.state.user}</h2>
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
        {this.state.beers.length !== 0 ? null : welcome}
        <ul className="beers__list">{beers}</ul>
      </Fragment>
    );
  }
}

export default List;
