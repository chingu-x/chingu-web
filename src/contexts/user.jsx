import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { UserInfo } from '../fragments';
import { useAuth0 } from './auth';

export const UserContext = React.createContext(null);
export const useUser = () => React.useContext(UserContext);

const GET_CURRENT_USER = gql`
  ${UserInfo}

  query getCurrentUser {
    me {
      ...UserInfo
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
      <UserContext.Provider value={{ user: null, loading }}>
        {children}
      </UserContext.Provider>
    );
  }

  const user = data ? data.me : null;

  return (
    <UserContext.Provider value={{ user, loading }}>
      {children}
    </UserContext.Provider>
  );
}
