import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import facebook from "../assets/img/facebook.png"


const Login = ({ authenticate, user }) => {
  return (
    <Fragment>
      <section className="section__facebook">
        <div className="wrapper">
          <div className="login">
            <img src={facebook} alt="facebook-logo"/>
            <h2>
              On y presque <span>{user} !</span>
            </h2>
            <h3>Connecte toi via facebook et commence à déguster !</h3>
            <p>
              Cette application utilise l'authentication Oauth via facebook afin de
              récueillir des données relatives à votre profil utilisateur.
            </p>
            <button onClick={authenticate}>
              Me connecter avec facebook
            </button>
            <Link className="btn btn__secondary" to="/">
              Changer d'utilisateur
            </Link>
          </div>
        </div>
      </section>
      
    </Fragment>
  );
};

export default Login;
