import React from "react";
import gql from "graphql-tag";
import { Query, QueryResult } from "react-apollo";
import { UserInfo } from "../fragments";
import { useAuth0 } from "./auth";

export const UserContext = React.createContext<null | any>(null);
export const useUser = () => React.useContext(UserContext);

const GET_CURRENT_USER = gql`
  ${UserInfo}

  query getCurrentUser {
    me {
      ...UserInfo
    }
  }
`;

export default function CurrentUserProvider({ children }: React.PropsWithChildren<any>) {
  const { isAuthenticated } = useAuth0();

  if(!isAuthenticated) {
    return <UserContext.Provider value={null}>{children}</UserContext.Provider>
  } 
  
  return (
    <Query query={GET_CURRENT_USER} fetchPolicy="cache-first">
      {({ data }: QueryResult) => {
        const currentUser = data ? data.me : null;

        return (
          <UserContext.Provider value={currentUser}>
            {children}
          </UserContext.Provider>
        );
      }}
    </Query>
  );
};