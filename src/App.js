import React, { Fragment } from "react";
import "./App.scss";
import Beer from "./components/Beer";
import firebase from "firebase/app";
import "firebase/auth";
import Login from "./components/Login";
import base, { firebaseApp } from "./base";
//import { barnabeerList } from "./barnabeerlist";

class App extends React.Component {
  state = {
    beers: {},
    user: this.props.match.params.user,
    //----
    uid: null,
    fbuser: null
  };

  componentDidMount() {
    base.syncState(`/user/${this.state.user}/beers`, {
      context: this,
      state: "beers"
    });
    //-----
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        // passer le user sous forme d'object
        this.handleAuth({ user });
      }
    });
  }

  //NOTE  async & await permet t'attendre qu'une instruction soit terminée pour passer à la ligne suivante
  handleAuth = async authData => {
    // récupérer les données dans firebase
    const box = await base.fetch(this.state.user, {
      context: this
    });

    if (!box.fbuser) {
      await base.post(`/user/${this.state.user}/user-uid`, {
        data: authData.user.uid
      });
    }

    this.setState({
      uid: authData.user.uid,
      fbuser: box.fbuser || authData.user.uid
    });
  };

  // permet de se connecter via firebase
  authenticate = () => {
    // ajouter le provider
    const authProvider = new firebase.auth.FacebookAuthProvider();
    // appeller le l'application firebase
    firebaseApp
      .auth()
      // mode de connexion -> type popup
      .signInWithPopup(authProvider)
      // une fois que la promesse nous renvoie quelque chose on exécute then()
      .then(this.handleAuth);
  };

  logout = async () => {
    console.log("Déconnexion");
    await firebase.auth().signOut();
    this.setState({
      uid: null
    });
  };

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
    const logout = (
      <button className="btn" onClick={this.logout}>
        Se déconnecter
      </button>
    );

    // si l'utilisateur n'est pas connecté
    if (!this.state.uid) {
      return (
        <Login user={this.state.user} authenticate={this.authenticate}></Login>
      );
    }

    if (this.state.uid !== this.state.fbuser) {
      return (
        <div>
          <p>Tu n'es pas le chef de cette boite !</p>
          {logout}
        </div>
      );
    }

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
          beers={this.state.beers}
          key={beer_id}
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
      <p>
        Bienvenue sur la nouvelle app du Barnabeer, celle-ci te permettra de
        découvrir nos produits ainsi qu'indiquer ceux que tu as déjà dégusté et
        bien plus encore! Alors tu es près à découvrir l'expérience Barnabeer?
      </p>
    );

    return (
      <Fragment>
        <header>
          <button className="btn__secondary" onClick={this.handleClick}>
            {this.state.beers.length > 0
              ? "Réinitialiser"
              : "Découvrez les bières"}
          </button>
          {logout}
        </header>
        <section className="section__beers">
          <div className="wrapper">
            <h2>Bonjour {this.state.user}</h2>

            {this.state.beers.length > 0 ? null : welcome}

            <ul className="beers__list">{beers}</ul>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default App;
