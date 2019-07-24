import React from 'react';
import { ApolloProvider } from "react-apollo";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import client from "./apollo";
import { CurrentUserProvider } from './contexts/User';
import './App.css';

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <CurrentUserProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />"
            <Route exact path="/signUp" component={SignUp} />
            <Route exact path="/signIn" component={SignIn} />
            <Route exact path="/profile" component={Profile} />
          </Switch>
        </Router>
      </CurrentUserProvider>
    </ApolloProvider>
  );
}

export default App;
