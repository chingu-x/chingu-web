import React from 'react';
import { withRouter, Route } from 'react-router-dom';
import { QueryParamProvider } from 'use-query-params';
import ChinguAPIProvider from './contexts/apollo';
import ChinguStripeProvider from './contexts/stripe';
import CurrentUserProvider from './contexts/user';
import Header from './components/Header';
import Footer from './components/Footer';

const Shell = ({ children, history }) => {
  return (
    <ChinguAPIProvider>
      <ChinguStripeProvider>
        <CurrentUserProvider>
          <QueryParamProvider ReactRouterRoute={Route}>
            <Header />
            {children}
            <Footer />
          </QueryParamProvider>
        </CurrentUserProvider>
      </ChinguStripeProvider>
    </ChinguAPIProvider>
  );
};

export default withRouter(Shell);
