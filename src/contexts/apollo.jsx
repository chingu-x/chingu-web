import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { onError } from 'apollo-link-error';
import { withClientState } from 'apollo-link-state';
import { ApolloLink, Observable } from 'apollo-link';
import { useAuth0 } from './auth';

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.map(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );
  if (networkError) console.log(`[Network error]: ${networkError}`);
});

const {
  REACT_APP_API_URI: API_URI = 'https://api.staging.chingu.io/graphql'
} = process.env;

const httpLink = new HttpLink({
  uri: API_URI,
  credentials: 'same-origin'
});

const cache = new InMemoryCache();

export default function ChinguAPIProvider({ children }) {
  const { isAuthenticated, getTokenSilently } = useAuth0();

  const request = async operation => {
    if (!isAuthenticated) {
      return operation;
    }

    const token = await getTokenSilently();
    operation.setContext({
      headers: {
        authorization: `Bearer ${token}`
      }
    });
  };

  const requestLink = new ApolloLink(
    (operation, forward) =>
      new Observable(observer => {
        let handle;
        Promise.resolve(operation)
          .then(oper => request(oper))
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
