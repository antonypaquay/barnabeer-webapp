import React from "react";
import Beer from "../components/Beer";


const Tasted = ({user, beers}) => {

  const beersTasted = Object.keys(beers).map((key, index) => {
    const {
      beer_name,
      beer_cl,
      beer_pourcent,
      beer_type,
      beer_price,
      beer_tasted
    } = beers[key];

    if(beers[key].beer_tasted) {
      return (
        <Beer
          beers={beers}
          key={key}
          id={key}
          beerTasted={beer_tasted}
          beerName={beer_name}
          beerCl={beer_cl}
          beerPourcent={beer_pourcent}
          beerType={beer_type}
          beerPrice={beer_price}
        />
      );
    }
  });
  console.log(beersTasted);

  return(
    <div>
      <h1>Tasted page {user}</h1>
      {beersTasted}
    </div>
  )
}


export default Tasted;
