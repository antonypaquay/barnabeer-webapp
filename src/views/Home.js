import React from "react";

const Home = ({ numberOfBeers, user }) => {
  const currentTime = () => {
    const now = new Date();
    const currentHour = now.getHours();
    return currentHour;
  };

  return (
    <div>
      <h1>Hello {user}</h1>
      <p>
        Quelle bière vous ferait plaisir ? Il n'est que{" "}
        {currentTime() + " heures !"}
      </p>

      <h3>Mise à jour 11/02/20</h3>
      <ol>
        <li>
          Toutes les bières ont été ajoutées à la carte ({numberOfBeers}{" "}
          disponibles)
        </li>
        <li>Ajout d'une navigation horizontale</li>
      </ol>
    </div>
  );
};

export default Home;
