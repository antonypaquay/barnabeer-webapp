import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
// Firebase
import firebase from "firebase/app";
import "firebase/auth";
import base, { firebaseApp } from "./database/base";
// Components
import Header from "./components/Header";
import BottomNav from "./components/BottomNav";

// Views
import Login from "./views/Login";
import Tasted from "./views/Tasted";
import List from "./views/List";
import Home from "./views/Home";
import Profile from "./views/Profile";

class App extends React.Component {
  state = {
    user: this.props.match.params.user,
    uid: null,
    fbuser: null,
    beers: {}
  };

  componentDidMount() {
    base.syncState(`/users/${this.state.user}/beers`, {
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
      await base.post(`/users/${this.state.user}/user-uid`, {
        data: authData.user.uid
      });
      await base.post(`/users/${this.state.user}/user-name`, {
        data: this.state.user
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

  addBeerList = e => {
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
        </div>
      );
    }

    return (
      <Fragment>
        <Header />
        <section className="section__beers">
          <div className="wrapper">
            <Switch>
              <Route path={`/account/${this.state.user}/profile`}>
                <Profile
                  user={this.state.user}
                  logOut={this.logout}
                  addBeerList={e => this.addBeerList(e)}
                />
              </Route>
              <Route path={`/account/${this.state.user}/home`}>
                <Home
                  user={this.state.user}
                  numberOfBeers={this.state.beers.length}
                />
              </Route>
              <Route path={`/account/${this.state.user}/tasted`}>
                <Tasted user={this.state.user} beers={this.state.beers} />
              </Route>
              <Route path={`/account/${this.state.user}/list`}>
                <List
                  user={this.state.user}
                  beers={this.state.beers}
                  addBeerList={e => this.addBeerList(e)}
                  isTasted={(key, newBeer) => this.isTasted(key, newBeer)}
                />
              </Route>
            </Switch>
          </div>
        </section>
        <BottomNav user={this.state.user} />
      </Fragment>
    );
  }
}

export default App;
