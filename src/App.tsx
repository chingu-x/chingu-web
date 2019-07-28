import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ChinguAPIProvider from "./contexts/apollo";
import { CurrentUserProvider } from './contexts/user';
import { Auth0Provider } from "./contexts/auth";
import PrivateRoute from "./components/PrivateRoute";
import Home from "./views/Home";
import Profile from "./views/Profile";
import config from "./config/auth.json";
import './App.css';

// A function that routes the user to the right place
// after login
const onRedirectCallback = (appState: any) => {
  window.history.replaceState(
    {},
    document.title,
    appState && appState.targetUrl
      ? appState.targetUrl
      : window.location.pathname
  );
};

const App: React.FC = () => {
  return (
    <Auth0Provider
      domain={config.domain}
      client_id={config.clientId}
      redirect_uri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
    >
      <ChinguAPIProvider>
        <CurrentUserProvider>
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />"
              <PrivateRoute exact path="/profile" component={Profile} />
            </Switch>
          </Router>
        </CurrentUserProvider>
      </ChinguAPIProvider>
    </Auth0Provider>
  );
}

export default App;
