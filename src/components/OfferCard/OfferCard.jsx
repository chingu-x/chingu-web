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

export default function OfferCard({
  title,
  subtitle,
  price,
  features = [],
  actionText = 'Apply Now',
  action,
  loading
}) {
  return (
    <div className={offer}>
      <Title level={3}>{title}</Title>
      <Paragraph className={description}>{subtitle}</Paragraph>
      <Paragraph className={priceClass} size="large">
        ${price}
      </Paragraph>
      {action ? (
        <Button type="primary" size="large" onClick={action} disabled={loading}>
          {loading ? 'Loading...' : actionText}
        </Button>
      ) : (
        <Link to="/apply">
          <Button type="primary" size="large">
            {actionText}
          </Button>
        </Link>
      )}
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
