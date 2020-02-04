import React, { Component } from "react";
import base from "./base";
import logoutImg from "./img/logout.png";
import resetImg from "./img/reset.png";

class Profile extends Component {
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

  render() {
    const logout = (
      <button onClick={this.logout}>
        <img src={logoutImg} alt={"logout"} />
      </button>
    );
    return (
      <div>
        <h1>Profile</h1>
        <button onClick={() => this.handleClick}>
          <img src={resetImg} alt="reset" />
        </button>
        {logout}
      </div>
    );
  }
}

export default Profile;
