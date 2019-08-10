import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { Route as RouterRoute } from 'react-router-dom';
import { useAuth0 } from '../contexts/auth';
import LoadingView from './LoadingView';

const Route = ({
  component: Component,
  secure = false,
  path,
  skipSignupCheck = false,
  ...rest
}) => {
  const { isAuthenticated, loginWithRedirect, loading } = useAuth0();

  useEffect(() => {
    const fn = async () => {
      if (!loading && secure && !isAuthenticated) {
        await loginWithRedirect({
          appState: { targetUrl: path }
        });
      }
    };
    fn();
  }, [
    loading,
    secure,
    isAuthenticated,
    skipSignupCheck,
    loginWithRedirect,
    path
  ]);

  return (
    <RouterRoute
      path={path}
      render={props => {
        if (loading) {
          return <LoadingView />;
        }

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
