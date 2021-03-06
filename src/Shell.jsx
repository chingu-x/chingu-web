import React from 'react';
import { withRouter } from 'react-router-dom';
import ChinguAPIProvider from './contexts/apollo';
import ChinguStripeProvider from './contexts/stripe';
import CurrentUserProvider from './contexts/user';
import { Auth0Provider } from './contexts/auth';
import Header from './components/Header';
import Footer from './components/Footer';
import config from './config/auth.json';

const { REACT_APP_AUTH_ENV: AUTH_ENV = 'staging' } = process.env;

const Shell = ({ children, history }) => {
  // A function that routes the user to the right place after login
  const onRedirectCallback = appState => {
    const targetUrl =
      appState && appState.targetUrl
        ? appState.targetUrl
        : window.location.pathname;
    history.push(targetUrl);
  };

  return (
    <>
      <Auth0Provider
        domain={config[AUTH_ENV].domain}
        client_id={config[AUTH_ENV].clientId}
        audience={config[AUTH_ENV].audience}
        redirect_uri={window.location.origin}
        onRedirectCallback={onRedirectCallback}
      >
        <ChinguAPIProvider>
          <ChinguStripeProvider>
            <CurrentUserProvider>
              <Header />
              {children}
              <Footer />
            </CurrentUserProvider>
          </ChinguStripeProvider>
        </ChinguAPIProvider>
      </Auth0Provider>
    </>
  );
};

export default withRouter(Shell);
