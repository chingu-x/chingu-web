import React from 'react';
import { Link } from 'react-router-dom';
import Wrapper from '../Wrapper';
import { Button } from '../Button';
import { header, logo, links } from './Header.module.scss';
import Logo from './Logo.png';

export default function Header() {
  return (
    <Wrapper contentAttributes={{ className: header }}>
      <div className={logo}>
        <img src={Logo} alt="Chingu logo" />
        Chingu
      </div>
      <div className={links}>
        <Link to="/howitworks">
          <Button type="link">How it works</Button>
        </Link>
        <Link to="/pricing">
          <Button type="link">Pricing</Button>
        </Link>
        <Link to="/faq">
          <Button type="link">FAQ</Button>
        </Link>
        <Link to="/signin">
          <Button>Sign in</Button>
        </Link>
        <Link to="/apply">
          <Button type="primary">Apply</Button>
        </Link>
      </div>
    </Wrapper>
  );
}
