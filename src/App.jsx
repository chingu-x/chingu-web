import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Shell from './Shell';
import Route from './components/Route';
import Landing from './views/Landing';
import VoyageSignUp from './views/VoyageSignUp';
import Login from './views/Login';
import Logout from './views/Logout';
import CompleteSignUp from './views/CompleteSignUp';
import NotFound from './views/NotFound';

const App = () => {
  return (
    <Router>
      <Shell>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/login" component={Login} />
          <Route secure path="/voyageSignUp" component={VoyageSignUp} />
          <Route secure exact path="/logout" component={Logout} />
          <Route
            secure
            exact
            path="/completeSignUp"
            component={CompleteSignUp}
            skipSignupCheck
          />
          <Route secure component={NotFound} />
        </Switch>
      </Shell>
    </Router>
  );
};

export default App;
