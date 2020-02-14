import React, { Component } from "react";



class Profile extends Component {
	

	render() {
		const logout = (
			<button onClick={this.props.logOut}>
				Me déconnecter
			</button>
		);
		return (
			<div>
				<h1>Profile de {this.props.user}</h1>
				<button onClick={this.props.addBeerList}>
					Réiniliatiliser
				</button>
				{logout}
			</div>
		);
	}
}

export default Profile;
