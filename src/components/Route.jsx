import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { Route as RouterRoute, useHistory } from 'react-router-dom';

const Route = ({ component: Component, secure = false, path, ...rest }) => {
  const isAuthenticated = !!localStorage.getItem('me');
  const history = useHistory();

  useEffect(() => {
    const fn = async () => {
      if (secure && !isAuthenticated) {
        history.push(`/signin?returnTo=${path}`);
      }
    };
    fn();
  }, [secure, history, isAuthenticated, path]);

  return (
    <RouterRoute
      path={path}
      render={props => {
        if (!secure || isAuthenticated === true) {
          return <Component {...props} />;
        }

        // Not supposed to happen
        console.error('Authentication error navigating to route.');
        return <Redirect to="/" />;
      }}
      {...rest}
    />
  );
};

export default Route;
