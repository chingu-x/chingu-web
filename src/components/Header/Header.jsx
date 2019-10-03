import React from 'react';
// import { useAuth0 } from '../../contexts/auth';
import { Link } from 'react-router-dom';
import { Wrapper } from '../Wrapper';
import { Button } from '../Button';
import { container, header, logo, links, offset } from './Header.module.scss';
import Logo from './Logo.webp';

export default function Header() {
  // const { isAuthenticated } = useAuth0();
  return (
    <>
      <Wrapper className={container} contentAttributes={{ className: header }}>
        <div className={logo}>
          <Link to="/">
            <img src={Logo} alt="Chingu logo" />
            <span>Chingu</span>
          </Link>
        </div>
        <div className={links}>
          <Link to="/howitworks">
            <Button type="link">How it works</Button>
          </Link>
          <Link to="/pricing">
            <Button type="link">Pricing</Button>
          </Link>
          {/* {isAuthenticated ? (
            <Link to="/signout">
              <Button>Sign out</Button>
            </Link>
          ) : (
            <Link to="/signin">
              <Button>Sign in</Button>
            </Link>
          )} */}
          <Link to="/apply">
            <Button type="primary">Apply Now</Button>
          </Link>
        </div>
      </Wrapper>
      <div className={offset}></div>
    </>
  );
}
