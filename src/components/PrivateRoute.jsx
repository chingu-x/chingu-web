import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { useAuth0 } from "../contexts/auth";
import { useUser } from "../contexts/user";
import LoadingView from "./LoadingView";

const PrivateRoute = ({
  component: Component,
  fallback: FallbackComponent,
  path,
  skipSignupCheck = !!FallbackComponent,
  ...rest
}) => {
  const { isAuthenticated, loginWithRedirect, loading } = useAuth0();
  const user = useUser();

  useEffect(() => {
    const fn = async () => {
      if (!loading) {
        if (!isAuthenticated && !FallbackComponent) {
          await loginWithRedirect({
            appState: { targetUrl: path }
          });
        }
        if (!skipSignupCheck && !user) {
          window.location.assign("/completeSignUp");
        }
      }
    };
    fn();
  }, [
    loading,
    isAuthenticated,
    FallbackComponent,
    skipSignupCheck,
    user,
    loginWithRedirect,
    path
  ]);

  const render = (props) =>
    loading === true ? (
      <LoadingView />
    ) : isAuthenticated === true ? (
      <Component {...props} />
    ) : FallbackComponent ? (
      <FallbackComponent {...props} />
    ) : null;

  return <Route path={path} render={render} {...rest} />;
};

export default PrivateRoute;
