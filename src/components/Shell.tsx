import React from 'react';
import ChinguAPIProvider from "../contexts/apollo";
import CurrentUserProvider from '../contexts/user';
import { Auth0Provider } from "../contexts/auth";
import config from "../config/auth.json";

// A function that routes the user to the right place after login
const onRedirectCallback = (appState: any) => {
  window.history.replaceState(
    {},
    document.title,
    appState && appState.targetUrl
      ? appState.targetUrl
      : window.location.pathname
  );
};

const Shell = ({ children }: React.PropsWithChildren<any>) => {
  return (
    <Auth0Provider
      domain={config.domain}
      client_id={config.clientId}
      audience={config.audience}
      redirect_uri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
    >
      <ChinguAPIProvider>
        <CurrentUserProvider>
          {children}
        </CurrentUserProvider>
      </ChinguAPIProvider>
    </Auth0Provider>
  );
};

export default Shell;
