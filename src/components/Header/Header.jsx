import React from 'react';
import { Link } from 'react-router-dom';
import { Wrapper } from '../Wrapper';
import { Button } from '../Button';
import { container, header, logo, links, offset } from './Header.module.scss';
import LogoWebp from './Logo.webp';
import Logo from './Logo.png';

export default function Header() {
  const isAuthenticated = localStorage.getItem('me');

  return (
    <>
      <Wrapper className={container} contentAttributes={{ className: header }}>
        <div className={logo}>
          <Link to="/">
            <picture>
              <source srcSet={LogoWebp} type="image/webp" />
              <source srcSet={Logo} type="image/png" />
              <img src={Logo} alt="Chingu logo" />
            </picture>
            <span>Chingu</span>
          </Link>
        </div>
        <div className={links}>
          <Link to="/howitworks">
            <Button type="link">How it works</Button>
          </Link>
          {/* <Link to="/pricing">
            <Button type="link">Pricing</Button>
          </Link> */}
          {isAuthenticated ? (
            <>
              <Link to="/dashboard">
                <Button>Dashboard</Button>
              </Link>
              <Link to="/signout">
                <Button>Sign out</Button>
              </Link>
            </>
          ) : (
            <Link to="/signin">
              <Button>Sign in</Button>
            </Link>
          )}
          <Link to="/apply">
            <Button type="primary">Apply</Button>
          </Link>
        </div>
      </Wrapper>
      <div className={offset}></div>
    </>
  );
}
