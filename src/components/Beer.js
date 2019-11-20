import React from "react";
import "./Beer.scss";

const Beer = ({ beerName, beerCl, beerPrice, beerPourcent, beerType, tasted }) => {
  
  return (
    <React.Fragment>
      <li className="beers__list__el" onClick={tasted}>
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
};

export default Beer;
