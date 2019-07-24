import React from "react";
import gql from "graphql-tag";
import { Query, QueryResult } from "react-apollo";
import UserInfo from "../fragments/UserInfo";

const UserContext = React.createContext(null);

const GET_CURRENT_USER = gql`
  ${UserInfo}

  query getCurrentUser {
    me {
      ...UserInfo
    }
  }
`;

export const CurrentUserProvider: React.FC = ({ children }) => (
  <Query query={GET_CURRENT_USER} fetchPolicy="cache-first">
    {({ data }: QueryResult) => {
      const currentUser = data ? data.me : null;

      return (
        <UserContext.Provider value={currentUser}>{children}</UserContext.Provider>
      );
    }}
  </Query>
);
export default UserContext;