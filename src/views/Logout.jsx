import React from 'react';
import { Redirect } from "react-router-dom";
import { useAuth0 } from "../contexts/auth";
import LoadingView from '../components/LoadingView';

function Logout() {
  const { loading, logout } = useAuth0();
  
  React.useEffect(() => {
    const fn = async () => {
      if (!loading) {
        await logout({
          appState: { targetUrl: "/" }
        });
      }
    };
    fn();
  }, [loading, logout]);

  return loading ? <LoadingView /> : <Redirect to="/" />;
}

export default Logout;
