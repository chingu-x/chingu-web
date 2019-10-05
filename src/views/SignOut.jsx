import React from 'react';
import { useAuth0 } from '../contexts/auth';
import LoadingView from '../components/LoadingView';

function SignOut() {
  const { loading, logout } = useAuth0();

  React.useEffect(() => {
    const fn = async () => {
      if (!loading) {
        await logout({
          returnTo: `${window.location.origin}/`,
          appState: { targetUrl: '/' }
        });
      }
    };
    fn();
  }, [loading, logout]);

  return <LoadingView />;
}

export default SignOut;
