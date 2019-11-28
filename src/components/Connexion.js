import React, { Component, Fragment } from "react";
import { Redirect } from "react-router-dom";
import background from "../img/barnabeer-login.jpg";
import barnabeerLogo from "../img/barnabeer-logo-full.png";
import Footer from "./Footer";

class Connexion extends Component {
  state = {
    user: "",
    allowed: false
  };

  handleChange = e => {
    const user = e.target.value;
    this.setState({ user: user });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log("Envoyé");
    this.setState({ allowed: true });
  };

  render() {
    if (this.state.allowed) {
      return <Redirect push to={`/beers/${this.state.user}`} />;
    }
    return (
      <Fragment>
        <section className="section__login">
          <div className="wrapper">
            <div className="login__centered">
              <div className="connexion__info">
                <img
                  className="connexion__info__logo"
                  src={barnabeerLogo}
                  alt="barnabeer logo"
                />
              </div>
              <form onSubmit={this.handleSubmit}>
                <input
                  type="text"
                  name="user-name"
                  placeholder="Nom d'utilisateur"
                  onChange={this.handleChange}
                />
                <button className="btn" type="submit">
                  Se connecter
                </button>
              </form>
            </div>
          </div>
          <div className="cover">
            <img src={background} alt="barnabeer" />
          </div>
        </section>
        <Footer/>
      </Fragment>
    );
  }
}

export default Connexion;
