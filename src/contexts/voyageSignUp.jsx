import React, { useReducer } from 'react';

export const paths = {
  DEFAULT: 'team',
  TEAM: 'team',
  SOLO: 'solo'
};

const INITIAL_STATE = {
  path: paths.DEFAULT
};

export const VoyageSignUpContext = React.createContext(null);
export const useVoyageSignUp = () => React.useContext(VoyageSignUpContext);

function reducer(state, action) {
  switch (action.type) {
    case 'SET_PATH':
      if (action.payload && action.payload.path !== state.path) {
        return Object.assign({}, state, { path: action.payload.path });
      }
      return state;
    case 'SET_COUNTRY_CODE':
    case 'SET_CITY':
    case 'SET_TIMEZONE':
      if (action.payload) {
        return Object.assign({}, state, action.payload);
      }
      return state;
    default:
      throw new Error();
  }
}

export default function VoyageSignUpProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  return (
    <VoyageSignUpContext.Provider value={[state, dispatch]}>
      {children}
    </VoyageSignUpContext.Provider>
  );
}
