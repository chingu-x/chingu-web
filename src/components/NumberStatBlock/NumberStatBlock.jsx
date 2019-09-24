import React from 'react';
import { Paragraph } from '../Paragraph';
import { block } from './NumberStatBlock.module.scss';

export default function NumberStatBlock({
  number,
  plus,
  subject,
  description
}) {
  return (
    <div className={block}>
      <Paragraph size="large" bold>
        <span>
          {new Intl.NumberFormat().format(number)}
          {plus && '+'}
        </span>
        <br />
        {subject}
      </Paragraph>
      <Paragraph>{description}</Paragraph>
    </div>
  );
}
