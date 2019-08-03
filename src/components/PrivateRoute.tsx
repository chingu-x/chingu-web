import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { useAuth0 } from "../contexts/auth";
import { useUser } from "../contexts/user";
import LoadingView from "./LoadingView";

interface PrivateRouteProps {
  component: React.JSXElementConstructor<any>;
  exact?: boolean;
  path?: string;
  skipSignupCheck?: boolean;
}

const PrivateRoute = ({
  component: Component,
  path,
  skipSignupCheck = false,
  ...rest
}: PrivateRouteProps) => {
  const { isAuthenticated, loginWithRedirect, loading } = useAuth0();
  const user = useUser();

  useEffect(() => {
    const fn = async () => {
      if (!loading) {
        if (!isAuthenticated) {
          await loginWithRedirect({
            appState: { targetUrl: path }
          });
        }
        if (!skipSignupCheck && (!user || !user.isSignUpComplete)) {
          window.location.assign("/completeSignUp");
        }
      }
    };
    fn();
  }, [
    loading,
    isAuthenticated,
    skipSignupCheck,
    user,
    loginWithRedirect,
    path
  ]);

  const render = (props: any) =>
    loading === true ? (
      <LoadingView />
    ) : isAuthenticated === true ? (
      <Component {...props} />
    ) : null;

  return <Route path={path} render={render} {...rest} />;
};

export default PrivateRoute;
