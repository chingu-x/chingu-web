import React from 'react';
import { Paragraph } from '../Paragraph';
import { block, attribution } from './QuoteBlock.module.scss';

export default function QuoteBlock({ quote, author, location }) {
  return (
    <div className={block}>
      <Paragraph size="large" bold>
        <q>{quote}</q>
      </Paragraph>
      <Paragraph className={attribution} size="small" italic>
        {author}, {location}
      </Paragraph>
    </div>
  );
}
