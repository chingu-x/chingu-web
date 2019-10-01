import React from 'react';
import { useAuth0 } from '../contexts/auth';
import LoadingView from '../components/LoadingView';

function SignIn() {
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

  return <LoadingView />;
}

export default SignIn;
