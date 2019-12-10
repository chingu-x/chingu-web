import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Shell from './Shell';
import Route from './components/Route';
import Landing from './views/Landing';
import Privacy from './views/Privacy';
import HowItWorks from './views/HowItWorks';
import Apply from './views/Apply';
import SignIn from './views/SignIn';
import Payment from './views/Payment';
import Success from './views/Success';
import Profile from './views/Profile';
import SignOut from './views/SignOut';
import NotFound from './views/NotFound';

const App = () => {
  return (
    <Router>
      <Shell>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/privacy" component={Privacy} />
          <Route exact path="/howitworks" component={HowItWorks} />
          <Route exact path="/signin" component={SignIn} />
          <Route secure exact path="/apply" component={Apply} />
          <Route secure exact path="/payment" component={Payment} />
          <Route secure exact path="/success" component={Success} />
          <Route secure exact path="/profile" component={Profile} />
          <Route secure exact path="/signout" component={SignOut} />
          <Route component={NotFound} />
        </Switch>
      </Shell>
    </Router>
  );
};

export default App;
