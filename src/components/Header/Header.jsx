import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Button } from 'antd';
import { useAuth0 } from '../../contexts/auth';
import Wrapper from '../Wrapper';
import styles from './Header.module.scss';

export const HEADER_HEIGHT = 56;

export default function Header() {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
  const returnTo = `${window.location.origin}/?loggedOut=true`;
  return (
    <Wrapper
      rowClassName={styles.container}
      rowStyle={{ height: HEADER_HEIGHT }}
    >
      <Row type="flex" justify="space-between" align="middle">
        <Col>
          <Link to="/">
            <span className={styles.title}>Chingu</span>
          </Link>
        </Col>
        {isAuthenticated ? (
          <Col>
            <Button onClick={() => logout({ returnTo })} type="default" ghost>
              Log out
            </Button>
          </Col>
        ) : (
          <>
            <Col>
              <Button onClick={() => loginWithRedirect()} type="default" ghost>
                Sign in
              </Button>
            </Col>
            <Col>
              <Button onClick={() => loginWithRedirect()} type="default" ghost>
                Apply
              </Button>
            </Col>
          </>
        )}
      </Row>
    </Wrapper>
  );
}
