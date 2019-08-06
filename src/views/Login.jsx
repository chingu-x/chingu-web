import React from 'react';
import { Redirect } from "react-router-dom";
import { useAuth0 } from "../contexts/auth";
import LoadingView from '../components/LoadingView';

function Login() {
  const { loginWithRedirect, loading } = useAuth0();
  
  React.useEffect(() => {
    const fn = async () => {
      if (!loading) {
        await loginWithRedirect({
          appState: { targetUrl: "/" }
        });
      }
    };
    fn();
  }, [loading, loginWithRedirect]);

  return loading ? <LoadingView /> : <Redirect to="/" />;
}

export default Login;
