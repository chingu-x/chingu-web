import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { onError } from 'apollo-link-error';
import { withClientState } from 'apollo-link-state';
import { ApolloLink, Observable, Operation } from 'apollo-link';

const errorLink: ApolloLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.map(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
      ),
    );
  if (networkError) console.log(`[Network error]: ${networkError}`);
});

const request = async (operation: Operation) => {
  // TODO: Get Auth Token
  // const token = await AsyncStorage.getItem('token');
  operation.setContext({
    headers: {
      // authorization: token
    }
  });
};

const requestLink = new ApolloLink((operation, forward) =>
  new Observable(observer => {
    let handle: ZenObservable.Subscription | undefined;
    Promise.resolve(operation)
      .then(oper => request(oper))
      .then(() => {
        handle = forward && forward(operation).subscribe({
          next: observer.next.bind(observer),
          error: observer.error.bind(observer),
          complete: observer.complete.bind(observer),
        });
      })
      .catch(observer.error.bind(observer));

    return () => {
      if (handle) handle.unsubscribe();
    };
  })
);

const httpLink = new HttpLink({
  uri: 'https://chingu.appspot.com/graphql',
  credentials: 'same-origin'
});

const cache = new InMemoryCache();

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

export default client;