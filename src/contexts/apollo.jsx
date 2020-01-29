import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { onError } from 'apollo-link-error';
import { withClientState } from 'apollo-link-state';
import { ApolloLink, Observable } from 'apollo-link';

const {
  REACT_APP_API_URI: API_URI = 'https://api.staging.chingu.io/graphql'
} = process.env;

let tokenRefreshCall;

const errorLink = onError(
  ({ graphQLErrors, networkError, forward, operation }) => {
    if (graphQLErrors)
      graphQLErrors.forEach(({ message, locations, path, extensions }) => {
        switch (extensions.code) {
          case 'UNAUTHENTICATED':
            if (!tokenRefreshCall) {
              tokenRefreshCall = fetch(API_URI, {
                method: 'POST',
                credentials: 'include',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  operationName: 'refreshTokens',
                  query: 'mutation refreshTokens { refreshTokens { id } }',
                  variables: {}
                })
              })
                .then(resp => {
                  if (resp.data && resp.data.refreshTokens) {
                    tokenRefreshCall = null;
                    forward(operation);
                  } else {
                    localStorage.removeItem('me');
                  }
                })
                .catch(() => {
                  localStorage.removeItem('me');
                });
            } else {
              localStorage.removeItem('me');
            }
            break;
          default:
            console.log(
              `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
            );
            break;
        }
      });
    if (networkError) console.log(`[Network error]: ${networkError}`);
  }
);

const httpLink = new HttpLink({
  uri: API_URI,
  credentials: 'include'
});

const cache = new InMemoryCache();

export default function ChinguAPIProvider({ children }) {
  const requestLink = new ApolloLink(
    (operation, forward) =>
      new Observable(observer => {
        let handle;
        Promise.resolve(operation)
          .then(() => {
            handle =
              forward &&
              forward(operation).subscribe({
                next: observer.next.bind(observer),
                error: observer.error.bind(observer),
                complete: observer.complete.bind(observer)
              });
          })
          .catch(observer.error.bind(observer));

        return () => {
          if (handle) handle.unsubscribe();
        };
      })
  );

  const client = new ApolloClient({
    link: ApolloLink.from([
      errorLink,
      requestLink,
      withClientState({
        defaults: {},
        resolvers: {},
        cache
      }),
      httpLink
    ]),
    cache
  });

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
