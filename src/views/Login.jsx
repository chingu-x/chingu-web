import React from 'react';
import { Redirect } from 'react-router-dom';
import { useAuth0 } from '../contexts/auth';
import LoadingView from '../components/LoadingView';

function Login() {
  const { loginWithRedirect, loading, isAuthenticated } = useAuth0();

  React.useEffect(() => {
    const fn = async () => {
      if (!loading && !isAuthenticated) {
        await loginWithRedirect({
          redirect_uri: `${window.location.origin}/`
        });
      }
    };
    fn();
  }, [loading, isAuthenticated, loginWithRedirect]);

  return loading ? <LoadingView /> : <Redirect to="/" />;
}

export default Login;
