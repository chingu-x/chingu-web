import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Shell from "./Shell";
import PrivateRoute from "./components/PrivateRoute";
import Landing from "./views/Landing";
import Home from "./views/Home";
import Login from "./views/Login";
import Logout from "./views/Logout";
import CompleteSignUp from "./views/CompleteSignUp";
import NotFound from "./views/NotFound";
import "./App.css";

const App = () => {
  return (
    <Shell>
      <Router>
        <Switch>
          <PrivateRoute exact path="/" component={Home} fallback={Landing} />
          <Route exact path="/login" component={Login} />
          <PrivateRoute exact path="/logout" component={Logout} />
          <PrivateRoute exact path="/completeSignUp" skipSignupCheck component={CompleteSignUp} />
          <PrivateRoute component={NotFound} />
        </Switch>
      </Router>
    </Shell>
  );
};

export default App;
