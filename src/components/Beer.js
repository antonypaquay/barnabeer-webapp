import React, { Component } from "react";
import "./Beer.scss";
import beerDefault from "../img/beer-default.png";
import Parallax from "react-rellax";

class Beer extends Component {
	handleClick = (e, key) => {
		const beer = this.props.beers[key];
		if (beer.beer_tasted) {
			beer.beer_tasted = false;
		} else {
			beer.beer_tasted = true;
		}
		this.props.isTasted(key, beer);
	};

	render() {
		const {
			id: key,
			beerName,
			beerCl,
			beerPrice,
			beerPourcent,
			beerType,
			beerTasted
		} = this.props;

		if (beerTasted === true) {
			return (
				<React.Fragment>
					<li
						className="beers__list__el beers__list__el--active"
						onClick={e => this.handleClick(e, key)}
					>
						<h3 className="beer__name">{beerName}</h3>
						<p>Tu as déjà dégusté cette bière!</p>
					</li>
				</React.Fragment>
			);
		} else {
			return (
				<React.Fragment>
					<li
						className="beers__list__el"
						onClick={e => this.handleClick(e, key)}
					>
						<Parallax speed={0.5} centered={true}>
							<img src={beerDefault} alt="beer default" />
						</Parallax>
						<h3 className="beer__name">{beerName}</h3>

						<ul className="beer__details">
							<li className="beer__details__li">
								<p>
									{beerName} <span>{beerCl} cl</span>
								</p>
							</li>
							<li className="beer__details__li">
								<p>
									Type: <span>{beerType}</span>
								</p>
							</li>
							<li className="beer__details__li">
								<p>
									Alcool: <span>{beerPourcent}</span>
								</p>
							</li>
							<li className="beer__details__li">
								<p>
									Prix: <span>{beerPrice} €</span>
								</p>
							</li>
						</ul>
					</li>
				</React.Fragment>
			);
		}
	}
}

export default Beer;
