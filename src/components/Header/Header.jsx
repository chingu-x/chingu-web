import React from 'react';
import { Layout, Row, Col, Button } from 'antd';
import { useAuth0 } from '../../contexts/auth';
import Wrapper from '../Wrapper';
import styles from './Header.module.scss';

const { Header: HeaderUIComponent } = Layout;

export default function Header() {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
  const returnTo = `${window.location.origin}/?loggedOut=true`;
  return (
    <HeaderUIComponent>
      <Wrapper>
        <Row type="flex" justify="space-between">
          <Col>
            <span className={styles.title}>Chingu</span>
          </Col>
          <Col>
            {isAuthenticated ? (
              <Button onClick={() => logout({ returnTo })} type="default" ghost>
                Log out
              </Button>
            ) : (
              <Button
                onClick={() => loginWithRedirect({})}
                type="default"
                ghost
              >
                Log in or Sign Up
              </Button>
            )}
          </Col>
        </Row>
      </Wrapper>
    </HeaderUIComponent>
  );
}
