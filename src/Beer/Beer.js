import React from "react";
import "./Beer.scss";

export class Beer extends React.Component {



  tasted = (e) => {
    e.target.parentNode.classList.toggle('beers__list__el--tasted');
  }

  render() {
    return (
      <React.Fragment>
        <li 
          onClick={(e) => this.tasted(e)}
          className="beers__list__el"
        >
          <label className="container__check">
            <input type="checkbox" />
            <span className="checkmark"></span>
          </label>
          <div className="beer__content">
            <div className="beer__head">
              <h3 className="beer__name">
                {this.props.beerName}
                <span className="beer__pourcent">{this.props.beerCl}</span>
              </h3>
              <p>{this.props.beerPrice}</p>
            </div>
            <ul>
              <li className="beer_type">
                <p>{this.props.beerPourcent}</p>
              </li>
              <li className="beer_type">
                <p>{this.props.beerType}</p>
              </li>
            </ul>
          </div>
        </li>
      </React.Fragment>
    );
  }
}
