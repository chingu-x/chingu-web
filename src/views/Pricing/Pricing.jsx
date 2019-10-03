import React from 'react';
import { Wrapper } from '../../components/Wrapper';
import { Title } from '../../components/Title';
import { Paragraph } from '../../components/Paragraph';
import { OfferCard } from '../../components/OfferCard';
import { Button } from '../../components/Button';
import {
  wrapper,
  subtitle,
  offers,
  question,
  mailLink
} from './Pricing.module.scss';

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
            '1 team developer project for your portfolio',
            '6 pair-programming matches',
            'Completion Certificate',
            'Connect with a community of learners who share your goal',
            'Get out of tutorial purgatory'
          ]}
        />
        <OfferCard
          title="Job-Ready Path"
          subtitle="For those who wants to get a job within a year."
          price={JOB_READY_PATH_COST}
          features={[
            'Join all Voyage sessions in a year (up to 6)',
            '1 year of developer experience for your resume',
            '6 team projects in your portfolio',
            '50 pair-programming matches',
            'Completion Certificates'
          ]}
        />
      </div>
      <Title level={1}>Frequently asked questions</Title>
      <div className={question}>
        <Paragraph size="large" bold>
          How can I know I’m ready? What are the minimum requirements to join?
        </Paragraph>
        <Paragraph>
          You’ll need, at minimum, basic HTML / CSS and Javascript skills to
          qualify for a Chingu Voyage. Know more than that? Chingu has got you
          covered: our Voyages have three different “tiers” separated by skill
          level (beginners, intermediate, advanced) so you can work in the Tier
          you are most comfortable in. We also run a Pre-work session once a
          month where members can discover what Tier they best fit in.
          <br />
          <br />
          TL;DR - We encourage people at any level (including beginners) to
          join, as our Pre-work program was designed to inspire / help people
          gain the skills they need to be eligible to join.{' '}
        </Paragraph>
      </div>

      <div className={question}>
        <Paragraph size="large" bold>
          Can I do many Chingu Voyage programs and level up my skills in each
          one?
        </Paragraph>
        <Paragraph>
          Yes, Chingu was designed for this. Companies want to hire experienced
          developers. If you successfully completed 4 Voyages, you’d have a
          robust portfolio, technical / soft skills, and 6 months of developer
          experience to apply to jobs with.
        </Paragraph>
      </div>

      <div className={question}>
        <Paragraph size="large" bold>
          Can I get a job from doing Chingu Voyages?
        </Paragraph>
        <Paragraph>
          Yes, every week we see members getting a job. Members who have
          successfully completed 3 Voyages at the tier-3 level generally are job
          ready. They have gained the skills necessary to build multiple
          full-stack applications, have at least 4.5 months of experience
          working on real projects in real teams, and understand the importance
          of soft skills.
        </Paragraph>
      </div>

      <div className={question}>
        <Paragraph size="large" bold>
          I just finished a coding bootcamp and want to get more experience? Is
          Chingu for me?
        </Paragraph>
        <Paragraph>
          Yes. Coding bootcamp instructors / career mentors from many of the
          major bootcamps have referred their graduates to Chingu to help them
          get a job.
        </Paragraph>
      </div>

      <div className={question}>
        <Paragraph size="large" bold>
          How can I know if I’m ready for the Voyage program?
        </Paragraph>
        <Paragraph>
          First, are you committed to your learning goals? A Chingu Voyage is an
          experience that will get you out of your comfort zone and accelerate
          your learning. If you aren’t committed, you’ll waste your time and
          your team-mates.
          <br />
          <br />
          As for skill level, every new member has to complete a Pre-work
          project to be accepted to ensure they are ready. We run a 2 week
          pre-work session every month so you you find out if you are ready now.
          If not, you will be pushed to level-up your skills in the Pre-work to
          be ready for the next one. :)
        </Paragraph>
      </div>

      <div className={question}>
        <Paragraph size="large" bold>
          What happens if I don’t finish the Pre-work project or pass the
          qualifications?
        </Paragraph>
        <Paragraph>
          No worries, we run Voyages every month so if you don’t pass the
          Pre-work you can keep learning and be ready for the next one.
        </Paragraph>
      </div>

      <div className={question}>
        <Paragraph size="large" bold>
          How much time do I have to commit?
        </Paragraph>
        <Paragraph>
          We organize teams based on the people who join, and you’ll be matched
          with people who have similar commitment levels to you. That being
          said, we consider part-time to be around 15 hours a week and full-time
          to be 25 or more hours a week.
          <br />
          <br />
          For you to get the full benefits, Chingu must be a priority during the
          duration of the Voyage program.
        </Paragraph>
      </div>

      <div className={question}>
        <Paragraph size="large" bold>
          Is the Voyage okay for Beginners?
        </Paragraph>
        <Paragraph>
          Yes. Even if you are not ready now, you will be after you gain the
          skills necessary to build the Pre-work project.
        </Paragraph>
      </div>

      <div className={question}>
        <Paragraph size="large" bold>
          What is the Pre-work session and Pre-work project?
        </Paragraph>
        <Paragraph>
          The Pre-work session is where new members first join the Chingu
          community, find out which Tier they best fit in, and build a project
          from start to finish to ensure they are ready for the team Voyage
          project. The Pre-work projects are organized by Tier and typically to
          clone an existing website or app. When you join the Pre-work you’ll be
          able to decide which project (and tier) best suits your current skill
          level.
        </Paragraph>
      </div>

      <div className={question}>
        <Paragraph size="large" bold>
          What if I have more questions?
        </Paragraph>
        <Paragraph>
          We’d be happy to{' '}
          <a
            className={mailLink}
            href="mailto:support@chingu.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button type="link-primary">answer them.</Button>
          </a>
        </Paragraph>
      </div>
    </Wrapper>
  );
}
