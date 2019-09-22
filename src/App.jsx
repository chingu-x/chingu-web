import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Shell from './Shell';
import Route from './components/Route';
import Landing from './views/Landing';
import Privacy from './views/Privacy';
import HowItWorks from './views/HowItWorks';
// import Pricing from './views/Pricing';
// import Apply from './views/Apply';
// import Login from './views/Login';
// import Logout from './views/Logout';
import NotFound from './views/NotFound';

const App = () => {
  return (
    <Router>
      <Shell>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/privacy" component={Privacy} />
          <Route exact path="/howitworks" component={HowItWorks} />
          {/* <Route exact path="/pricing" component={Pricing} /> */}
          {/* <Route exact path="/apply" component={Apply} /> */}
          {/* <Route exact path="/login" component={Login} /> */}
          {/* <Route secure exact path="/logout" component={Logout} /> */}
          <Route component={NotFound} />
        </Switch>
      </Shell>
    </Router>
  );
};

export default App;
