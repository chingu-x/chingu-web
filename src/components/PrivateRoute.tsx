import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { useAuth0 } from "../contexts/auth";
import LoadingView from "./LoadingView";

interface PrivateRouteProps {
  component: React.JSXElementConstructor<any>;
  exact: boolean;
  path: string;
}

const PrivateRoute = ({
  component: Component,
  path,
  ...rest
}: PrivateRouteProps) => {
  const { isAuthenticated, loginWithRedirect, loading } = useAuth0();

  useEffect(() => {
    const fn = async () => {
      if (!loading && !isAuthenticated) {
        await loginWithRedirect({
          appState: { targetUrl: path }
        });
      }
    };
    fn();
  }, [loading, isAuthenticated, loginWithRedirect, path]);

  const render = (props: any) =>
    loading === true ? (
      <LoadingView />
    ) : isAuthenticated === true ? (
      <Component {...props} />
    ) : null;

  return <Route path={path} render={render} {...rest} />;
};

export default PrivateRoute;
