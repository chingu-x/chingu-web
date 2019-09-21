import React from 'react';
import { Link } from 'react-router-dom';
import { Wrapper } from '../Wrapper';
import { Button } from '../Button';
import { container, header, logo, links, offset } from './Header.module.scss';
import Logo from './Logo.png';

export default function Header() {
  return (
    <>
      <Wrapper className={container} contentAttributes={{ className: header }}>
        <div className={logo}>
          <Link to="/">
            <img src={Logo} alt="Chingu logo" />
            Chingu
          </Link>
        </div>
        <div className={links}>
          <Link to="/howitworks">
            <Button type="link">How it works</Button>
          </Link>
          {/* <Link to="/pricing">
            <Button type="link">Pricing</Button>
          </Link> */}
          {/* <Link to="/faq">
            <Button type="link">FAQ</Button>
          </Link> */}
          {/* <Link to="/signin">
            <Button>Sign in</Button>
          </Link> */}
          {/* <Link to="/apply"> */}
          <Button
            type="primary"
            data-token="89f71a471de6a750cfa385e1ba4ffd00"
            onClick={e => window.mjOpenPopin(e, e.target)}
          >
            Register Now
          </Button>
          {/* </Link> */}
        </div>
      </Wrapper>
      <div className={offset}></div>
    </>
  );
}
