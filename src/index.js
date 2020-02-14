import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./index.scss";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import Connexion from "./views/Connexion";
import NotFound from "./views/NotFound";

const RouterApp = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Connexion} />
        <Route path="/account/:user" component={App} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default RouterApp;

ReactDOM.render(<RouterApp />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

