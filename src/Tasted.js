import React, { Component } from "react";
import "firebase/auth";
import base from "./base";

class Tasted extends Component {
  state = {
    beers: {},
    username: this.props.location.state.user
  };

  componentDidMount() {
    base.syncState(`/users/${this.state.username}/beers`, {
      context: this,
      state: "beers"
    });
  }

  render() {
    return <h1>Tasted page</h1>;
  }
}

export default Tasted;
