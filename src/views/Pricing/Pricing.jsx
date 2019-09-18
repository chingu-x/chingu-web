import React from 'react';
import { Wrapper } from '../../components/Wrapper';
import { Title } from '../../components/Title';
import { Paragraph } from '../../components/Paragraph';
import { OfferCard } from '../../components/OfferCard';
import { wrapper, subtitle, offers } from './Pricing.module.scss';
import HypedLionAndRaccoons from './HypedLionAndRaccoons.png';

const currencyFormatter = new Intl.NumberFormat({
  style: 'currency',
  currency: 'USD'
});

const FORMATTED_BOOTCAMP_COST = currencyFormatter.format(13000);
const VOYAGE_COHORT_COST = currencyFormatter.format(29);
const JOB_READY_PATH_COST = currencyFormatter.format(129);

export default function Pricing() {
  return (
    <Wrapper contentAttributes={{ className: wrapper }}>
      <img src={HypedLionAndRaccoons} alt="Hyped lion and raccoons" />
      <Title level={1}>
        Goodbye ${FORMATTED_BOOTCAMP_COST} coding bootcampts.
        <br />
        Hello Chingu coding adventures.
      </Title>
      <Paragraph className={subtitle} size="large">
        Chingu offers you several core features of a traditional coding
        bootcamp, but for a fraction of the cost.
      </Paragraph>
      <Title level={3}>Save thousands with Chingu.</Title>
      <div className={offers}>
        <OfferCard
          title="Voyage Cohort"
          subtitle="For those who want to level-up."
          price={VOYAGE_COHORT_COST}
          features={[
            'Matched with a remote developer team',
            '6 weeks of team developer experience',
            '2 new projects for your portfolio',
            '6 pair-programming matches',
            'Certification'
          ]}
        />
        <OfferCard
          title="Job-Ready Path"
          subtitle="For those who wants to get a job within a year."
          price={JOB_READY_PATH_COST}
          features={[
            'Join all Voyage sessions in a year (6)',
            '1 year developer experience for your resume',
            '6 team projects in your portfolio',
            '50 pair-programming matches',
            'Up to 6 new solo projects for your resume'
          ]}
        />
      </div>
    </Wrapper>
  );
}
