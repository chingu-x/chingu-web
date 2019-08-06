import React from 'react';
import { Layout, Button } from 'antd';
import { useAuth0 } from '../../contexts/auth';

const { Header: HeaderUIComponent } = Layout;

export default function Header() {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <HeaderUIComponent>
      Chingu
      {isAuthenticated ? (
        <Button
          onClick={() =>
            logout({ returnTo: `${window.location.origin}/?loggedOut=true` })
          }
        >
          Log out
        </Button>
      ) : (
        <Button onClick={() => loginWithRedirect({})}>Log in or Sign Up</Button>
      )}
    </HeaderUIComponent>
  );
}
