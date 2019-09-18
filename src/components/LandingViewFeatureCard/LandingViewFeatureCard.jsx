import React from 'react';
import { Paragraph } from '../Paragraph';
import { card, imgArea } from './LandingViewFeatureCard.module.scss';

export default function LandingViewFeatureCard({
  img,
  imgAlt,
  imgStyle,
  title,
  body
}) {
  return (
    <div className={card}>
      <div className={imgArea}>
        <img src={img} alt={imgAlt} style={imgStyle} />
      </div>
      <Paragraph bold size="large">
        {title}
      </Paragraph>
      <Paragraph>{body}</Paragraph>
    </div>
  );
}
