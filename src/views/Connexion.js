import React, { Component, Fragment } from "react";
import { Redirect } from "react-router-dom";
import barnabeerLogo from "../assets/img/barnabeer-logo-full.png";


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
      return <Redirect push to={`/account/${this.state.user}/home`} />;
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
                <button type="submit">
                  Se connecter
                </button>
              </form>
            </div>
          </div>
         
        </section>
        
      </Fragment>
    );
  }
}

export default Connexion;
