import React, { Component } from "react";
import "./Beer.scss";

class Beer extends Component {

  state = {
    details: this.props.details
  }

  handleClick = () => {
    const tasted = ! this.state.tasted;
    this.setState({tasted: tasted})
  };

  render() {
    const {
      beer_name,
      beer_cl,
      beer_price,
      beer_pourcent,
      beer_type
    } = this.state.details;

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
                  {beer_name}
                  <span className="beer__pourcent">{beer_cl}</span>
                </h3>
                <p>{beer_price}</p>
              </div>
              <ul>
                <li className="beer_type">
                  <p>{beer_pourcent}</p>
                </li>
                <li className="beer_type">
                  <p>{beer_type}</p>
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
                  {beer_name}
                  <span className="beer__pourcent">{beer_cl}</span>
                </h3>
                <p>{beer_price}</p>
              </div>
              <ul>
                <li className="beer_type">
                  <p>{beer_pourcent}</p>
                </li>
                <li className="beer_type">
                  <p>{beer_type}</p>
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
