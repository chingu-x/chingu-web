import React from 'react';
import { Paragraph } from '../Paragraph';
import { card, imgArea, text } from './LandingViewFeatureCard.module.scss';

export default function LandingViewFeatureCard({
  imgs,
  imgAlt,
  imgStyle,
  title,
  body
}) {
  let sources = [];
  for (let i = 0; i < imgs.length; i++) {
    sources.push(<source key={i} srcSet={imgs[i]} />);
  }

  return (
    <div className={card}>
      <div className={imgArea}>
        <picture style={imgStyle}>
          {sources}
          <img src={imgs[imgs.length - 1]} alt={imgAlt} style={imgStyle} />
        </picture>
      </div>
      <div className={text}>
        <Paragraph bold size="large">
          {title}
        </Paragraph>
        <Paragraph>{body}</Paragraph>
      </div>
    </div>
  );
}
