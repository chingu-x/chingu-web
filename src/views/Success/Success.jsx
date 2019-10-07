import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Wrapper } from '../../components/Wrapper';
import { Title } from '../../components/Title';
import { Paragraph } from '../../components/Paragraph';
import { wrapper, subtitle, nextLink } from './Success.module.scss';

export default function Success() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Wrapper contentAttributes={{ className: wrapper }}>
      <Title level={1}>
        <span role="img" aria-label="rocket">
          🚀{' '}
        </span>
        Here we go!
      </Title>
      <Paragraph className={subtitle} size="large">
        Are you ready to BUILD?!
        <br />
        <br />
        You're now signed up for a Chingu Voyage. Congratulations on taking this
        step towards fighting Tutorial Purgatory.
      </Paragraph>
      <Link className={nextLink} to="/profile">
        Next Steps
      </Link>
    </Wrapper>
  );
}
