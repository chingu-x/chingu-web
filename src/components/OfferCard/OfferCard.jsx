import React from 'react';
import { Link } from 'react-router-dom';
import { Title } from '../Title';
import { Paragraph } from '../Paragraph';
import { Button } from '../Button';
import {
  offer,
  description,
  price as priceClass,
  features as featuresClass
} from './OfferCard.module.scss';

export default function OfferCard({ title, subtitle, price, features = [] }) {
  return (
    <div className={offer}>
      <Title level={3}>{title}</Title>
      <Paragraph className={description}>{subtitle}</Paragraph>
      <Paragraph className={priceClass} size="large">
        ${price}
      </Paragraph>
      <Link to="/apply">
        <Button type="primary" size="large">
          Apply Now
        </Button>
      </Link>
      <div className={featuresClass}>
        <ul>
          {features.map(feature => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
