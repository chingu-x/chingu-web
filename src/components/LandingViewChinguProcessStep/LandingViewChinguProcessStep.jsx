import React from 'react';
import { Paragraph } from '../Paragraph';
import {
  step,
  imgArea,
  text,
  title as titleClass
} from './LandingViewChinguProcessStep.module.scss';

export default function LandingViewChinguProcessStep({
  icon,
  iconAlt,
  title,
  description
}) {
  return (
    <div className={step}>
      <div className={imgArea}>
        <img src={icon} alt={iconAlt} />
      </div>
      <div className={text}>
        <Paragraph bold size="large" className={titleClass}>
          {title}
        </Paragraph>
        <Paragraph>{description}</Paragraph>
      </div>
    </div>
  );
}
