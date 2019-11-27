import React, { Component, Fragment } from "react";
import {Redirect} from "react-router-dom";

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
    this.setState({allowed: true})
  }

	render() {
    if(this.state.allowed){
      return <Redirect push to={`/beers/${this.state.user}`}/>
    }
		return (
			<Fragment>
				<h2>
					Barnabeer
					<span>
						<i>"Only good beers"</i>
					</span>
				</h2>
				<form onSubmit={this.handleSubmit}>
					<label>Quel est ton prénom ?</label>
					<input
						type="text"
						name="user-name"
						placeholder="Saisir ton prénom"
						onChange={this.handleChange}
					/>
					<button type="submit">Se connecter</button>
				</form>
			</Fragment>
		);
	}
}

export default Connexion;
