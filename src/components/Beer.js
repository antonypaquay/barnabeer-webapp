import React, { Component } from "react";
import "./Beer.scss";

class Beer extends Component {

  state = {
    tasted: this.props.beerTasted
  }

  handleClick = () => {
    const tasted = ! this.state.tasted;
    this.setState({tasted: tasted})
  };

  render() {
    const {
      beerName,
      beerCl,
      beerPrice,
      beerPourcent,
      beerType
    } = this.props;

    if (this.state.tasted === true) {
      return (
        <React.Fragment>
          <li
            className="beers__list__el beers__list__el--active"
            onClick={this.handleClick}
          >
            <label className="container__check">
              <input type="checkbox" />
              <span className="checkmark"></span>
            </label>
            <div className="beer__content">
              <div className="beer__head">
                <h3 className="beer__name">
                  {beerName}
                  <span className="beer__pourcent">{beerCl}</span>
                </h3>
                <p>{beerPrice}</p>
              </div>
              <ul>
                <li className="beer_type">
                  <p>{beerPourcent}</p>
                </li>
                <li className="beer_type">
                  <p>{beerType}</p>
                </li>
              </ul>
            </div>
          </li>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <li className="beers__list__el" onClick={this.handleClick}>
            <label className="container__check">
              <input type="checkbox" />
              <span className="checkmark"></span>
            </label>
            <div className="beer__content">
              <div className="beer__head">
                <h3 className="beer__name">
                  {beerName}
                  <span className="beer__pourcent">{beerCl}</span>
                </h3>
                <p>{beerPrice}</p>
              </div>
              <ul>
                <li className="beer_type">
                  <p>{beerPourcent}</p>
                </li>
                <li className="beer_type">
                  <p>{beerType}</p>
                </li>
              </ul>
            </div>
          </li>
        </React.Fragment>
      );
    }
  }
}

export default Beer;
