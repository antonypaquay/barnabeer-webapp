import React from "react";
import { Link } from "react-router-dom";

const Login = ({ authenticate, user }) => {
  return (
    <div className="login">
      <h2>Bonjour {user}</h2>
      <h3>Connecte toi et commence à déguster !</h3>
      <Link to="/">Changer d'utilisateur</Link>
      <button onClick={authenticate} className="facebook-button">
        Me connecter avec facebook
      </button>
    </div>
  );
};

export default Login;
