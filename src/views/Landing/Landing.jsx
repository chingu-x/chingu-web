import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Wrapper } from '../../components/Wrapper';
import { Title } from '../../components/Title';
import { Paragraph } from '../../components/Paragraph';
import { Button } from '../../components/Button';
import { QuoteBlock } from '../../components/QuoteBlock';
import { ExampleProject } from '../../components/ExampleProject';
import { NumberStatBlock } from '../../components/NumberStatBlock';
import { LandingViewFeatureCard } from '../../components/LandingViewFeatureCard';
import { LandingViewChinguProcessStep } from '../../components/LandingViewChinguProcessStep';
import RacoonWithLaptop from './assets/RacoonWithLaptop.png';
import SquigglyLine from './assets/SquigglyLine.png';
import RacoonYesPlease from './assets/RacoonYesPlease.png';
import TwoAnimalsTogether from './assets/TwoAnimalsTogether.png';
import ThreeAnimalsTogether from './assets/ThreeAnimalsTogether.png';
import ProcessStep1 from './assets/ProcessStep1.png';
import ProcessStep2 from './assets/ProcessStep2.png';
import ProcessStep3 from './assets/ProcessStep3.png';
import ProcessStep4 from './assets/ProcessStep4.png';
import ProcessStep5 from './assets/ProcessStep5.png';
import ProcessStep6 from './assets/ProcessStep6.png';
import JobbaticalProject from './assets/JobbaticalProject.png';
import BudgetBoardProject from './assets/BudgetBoardProject.png';
import VolunteerAppProject from './assets/VolunteerAppProject.png';
import quotes from './quotes.json';
import styles from './Landing.module.scss';

export default function Landing() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Wrapper contentAttributes={{ className: styles.racoonSection }}>
        <div className={styles.racoonText}>
          <Title>Build projects in teams, gain the skills you need.</Title>
          <Paragraph>
            Chingu is a remote 6-week program for web developers. You will build
            a project in a remote team and level-up with the technical and soft
            skills required in a professional software job.
          </Paragraph>
          <div className={styles.applyArea}>
            <Link to="/apply">
              <Button type="primary" size="large" className={styles.apply}>
                Apply Now
              </Button>
            </Link>
            <Paragraph size="small" className={styles.applySubtext}>
              (23,374 Github activity notifications
              <span role="img" aria-label="Fire emoji">
                🔥
              </span>
              from 560 Chingu teams in the past 5 months!)
            </Paragraph>
          </div>
        </div>
        <img src={RacoonWithLaptop} alt="Chingu RacoonWithLaptop" />
      </Wrapper>
      <Wrapper className={styles.features}>
        <Title level={3}>
          Level-up your career from{' '}
          <span className={styles.anywhereText}>
            anywhere
            <img src={SquigglyLine} tabIndex="-1" alt="Squiggly underline" />
          </span>
        </Title>
        <Paragraph className={styles.featuresSubtitle}>
          We place motivated people with similar goals together in project teams
          <br />
          which allows them level-up in ways they couldn't otherwise
        </Paragraph>
        <div className={styles.featureCards}>
          <LandingViewFeatureCard
            img={ThreeAnimalsTogether}
            imgAlt="A goat, a duck, and a dog coding together"
            imgStyle={{ position: 'relative', left: -12 }}
            title="Gain experience in a remote team"
            body="61% of full-time entry-level jobs now ask for 3 years or more of experience."
          />
          <LandingViewFeatureCard
            img={RacoonYesPlease}
            imgAlt="Racoon holding up sign that says 'Yes, please'"
            title="Work on real projects"
            body="Sick of doing tutorial after tutorial with nothing to show for
            them?"
          />
          <LandingViewFeatureCard
            img={TwoAnimalsTogether}
            imgAlt="A cat and a dog hugging each other"
            title="Join a supportive community"
            body="It can be hard to find someone to help you get unstuck."
          />
        </div>
      </Wrapper>
      <Wrapper className={styles.process}>
        <Title level={2}>The Chingu process</Title>
        <div className={styles.steps}>
          <LandingViewChinguProcessStep
            icon={ProcessStep1}
            iconAlt="Form icon"
            title="1. Apply"
            description="Your learning adventure starts the moment you decide to join Chingu."
          />
          <LandingViewChinguProcessStep
            icon={ProcessStep2}
            iconAlt="Toolset icon"
            title="2. Validate your expertise through a pre-work project"
            description="Finish or submit a project to make sure you're prepared for the program."
          />
          <LandingViewChinguProcessStep
            icon={ProcessStep3}
            iconAlt="Connections icon"
            title="3. Be placed in a team"
            description="Get placed in a remote team of Chingus eager to learn."
          />
          <LandingViewChinguProcessStep
            icon={ProcessStep4}
            iconAlt="Collaboration icon"
            title="4. Build, build, build"
            description="Decide on a project and build it together. Practice critical team workflow."
          />
          <LandingViewChinguProcessStep
            icon={ProcessStep5}
            iconAlt="Thinking icon"
            title="5. Overcome obstacles"
            description="Overcome obstacles real developers face. Level up as a human."
          />
          <LandingViewChinguProcessStep
            icon={ProcessStep6}
            iconAlt="Application icon"
            title="6. Succeed & repeat"
            description="Get a job, join another Voyage - or do both."
          />
        </div>
      </Wrapper>
      <Wrapper className={styles.projects}>
        <Title level={2}>Real projects in Real teams</Title>
        <Paragraph size="large" className={styles.projectsSubtitle}>
          When you join Chingu, you will collaborate with others to build &
          launch real projects. We match learners from all skill levels, all
          timezones, and a variety of different tech stacks.
        </Paragraph>
        <div className={styles.projectExamples}>
          <ExampleProject
            img={JobbaticalProject}
            imgAlt="Jobbatical job listings project"
            title="Jobbatical Landing Page"
            description="A job listings and job application app for working abroad."
            tier="Tier 1 (beginner)"
            tech="HTML, CSS, Flexbox, Javascript"
          />
          <ExampleProject
            img={BudgetBoardProject}
            imgAlt="BudgetBoard Chrome extension project"
            title="BudgetBoard Chrome Extension"
            description="A finance app to add income & expense categories with individual items with graph rendering."
            tier="Tier 2 (intermediate)"
            tech="Javascript, SCSS, D3.js, Chrome Storage Sync"
          />
          <ExampleProject
            img={VolunteerAppProject}
            imgAlt="Volunteer manager project"
            title="Volunteer Manager App"
            description="Helps people to recruit and manage volunteers for a non-profit project."
            tier="Tier 3 (advanced)"
            tech="MongoDB, React / Redux, Node.js"
          />
        </div>
      </Wrapper>
      <Wrapper
        className={styles.numbers}
        contentAttributes={{ className: styles.numberBlocks }}
      >
        <NumberStatBlock
          number={2028}
          subject="Developer Teams"
          description="We launch remote developer teams from all skill levels, from all timezones, and from most web dev languages & frameworks."
        />
        <NumberStatBlock
          number={11150}
          plus
          subject="Coders & Designers"
          description="Chingu has helped thousands of people learning in-demand skills accelerate their learning through collaboration and project-building."
        />
        <NumberStatBlock
          number={3200}
          plus
          subject="Pair-programming hours"
          description="We love to optimally match learners from around the world. Whether in a team setting or for a one-time meeting to complete a challenge."
        />
      </Wrapper>
      <Wrapper className={styles.quotes}>
        <Title level={2}>
          Chingu has guided thousands of developers on learning adventures
        </Title>
        <Paragraph>
          All tech learners run into the same problems. Endless tutorials, not
          enough finished projects, expensive coding bootcamps, unsure if you're
          making real progress, zero team experience.
          <br />
          The good news? Chingu solves them.
        </Paragraph>
        <div className={styles.quoteBlocks}>
          {quotes.map(quote => (
            <QuoteBlock key={quote.author} {...quote} />
          ))}
        </div>
        <Title level={2}>Ready to level-up?</Title>
        <Link to="/apply">
          <Button type="primary" size="large" className={styles.bottomApply}>
            Apply Now
          </Button>
        </Link>
      </Wrapper>
    </>
  );
}
