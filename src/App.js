import React from "react";
import base from "./base";
import "./App.scss";
import Beer from "./components/Beer";
//import { barnabeerList } from "./barnabeerlist";

class App extends React.Component {
	state = {
		beers: {},
		user: this.props.match.params.user
	};

	componentDidMount() {
		base.syncState(`/beers`, {
			context: this,
			state: "beers"
		});
	}

	tasted = (key, newBeer) => {
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
				beer_id,
				beer_tasted
			} = this.state.beers[key];

			return (
				<Beer
					beers={this.state.beers}
					key={beer_id}
					id={key}
					beerTasted={beer_tasted}
					tasted={this.tasted}
					beerName={beer_name}
					beerCl={beer_cl}
					beerPourcent={beer_pourcent}
					beerType={beer_type}
					beerPrice={beer_price}
				/>
			);
		});

		return (
			<div className="App">
				<div className="wrapper">
					<h2>Bonjour {this.state.user}</h2>
					<ul className="beers__list">{beers}</ul>
				</div>
			</div>
		);
	}
}

export default App;
