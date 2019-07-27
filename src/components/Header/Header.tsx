import React from "react";
import { Layout, Button } from 'antd';
import { useAuth0 } from "../../contexts/auth";

const { Header: HeaderUIComponent } = Layout;

export default function Header(): React.ReactElement {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
  
  return (
    <HeaderUIComponent>
      Chingu

      {!isAuthenticated && (
        <Button
          onClick={() =>
            loginWithRedirect({})
          }
        >
          Log in or Sign Up
        </Button>
      )}
      
      {isAuthenticated && <Button onClick={() => logout()}>Log out</Button>}
    </HeaderUIComponent>
  );
}