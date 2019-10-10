import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { useAuth0 } from './auth';

export const UserContext = React.createContext(null);
export const useUser = () => React.useContext(UserContext);

const GET_CURRENT_USER = gql`
  query getCurrentUser {
    application {
      id
      status
    }
  }
`;

export default function CurrentUserProvider({ children }) {
  const { isAuthenticated } = useAuth0();
  const { data, loading } = useQuery(GET_CURRENT_USER, {
    fetchPolicy: 'cache-first',
    skip: !isAuthenticated
  });

  if (!isAuthenticated) {
    return (
      <UserContext.Provider value={{ user: null, loading: false }}>
        {children}
      </UserContext.Provider>
    );
  }

  return (
    <UserContext.Provider value={{ data, loading }}>
      {children}
    </UserContext.Provider>
  );
}
